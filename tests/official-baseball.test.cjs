'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const B=require('../server/official-baseball.cjs'),N=require('../server/normalize.cjs'),E=require('../src/engine.js'),Tags=require('../src/tags.js');
const fixture=name=>fs.readFileSync(path.join(__dirname,'fixtures',name),'utf8'),NOW=Date.parse('2026-10-05T22:51:15Z'),AT=new Date(NOW).toISOString();
const rejected=JSON.parse(fixture('baseball-provider-rejections.json')).map(r=>({...r,strSport:'Baseball'}));
function mockFetch(url,opts){
 const u=String(url);let raw;
 if(u.includes('koreabaseball')){assert.equal(opts.method,'POST');assert.equal(opts.headers['X-Requested-With'],'XMLHttpRequest');assert.equal(opts.headers.Referer,'https://www.koreabaseball.com/Schedule/Schedule.aspx');const body=new URLSearchParams(opts.body);raw=body.get('srIdList')==='0,9,6'?fixture('kbo-schedule.json'):'{"rows":[]}';}
 else if(u.includes('baystars'))raw=fixture('npb-club.html');
 else if(u.includes('climax'))raw=fixture('npb-climax.html');
 else raw=fixture('npb-schedule.html');
 assert.equal(opts.headers?.['X-API-KEY'],undefined);return Promise.resolve({ok:true,text:async()=>raw});
}
async function checked(){const c=new B.OfficialBaseballFeed({fetchImpl:mockFetch});return c.schedule('2026-10-08','2026-10-12');}
test('captured KBO schedule preserves teams, row-spanned dates and Korea-to-UTC conversion',()=>{
 const rows=B.parseKBO(JSON.parse(fixture('kbo-schedule.json')),2026,10);assert.equal(rows.length,11);assert.equal(rows[4].home,'Kia Tigers');assert.equal(rows[4].away,'SSG Landers');assert.equal(rows[4].start,'2026-10-10T08:00:00.000Z');assert.ok(rows.every(r=>r.status==='scheduled'));
});
test('official calendar resolves all ten recorded stale postponements with live source evidence',async()=>{
 const data=await checked();assert.deepEqual(data.issues,[]);const games=new Map(),result=B.reconcile(games,rejected,data.records,NOW,AT);
 assert.equal(result.decisions.length,10);assert.ok(result.decisions.every(r=>r.action==='confirmed_by_official_schedule'));
 assert.equal([...games.values()].filter(g=>g.league==='KBO').length,11);assert.equal(result.pending.length,3);
 const central=[...games.values()].filter(g=>g.league==='NPB'&&g.stage==='postseason');assert.equal(central.length,3);assert.ok(central.every(g=>Tags.forGame(g).includes('playoffs')));assert.equal(central.filter(g=>g.conditional).length,1);assert.ok(Tags.forGame(central[2]).includes('if-necessary'));
 const prefs={leagues:['NPB','KBO'],days:['Fri','Sat','Sun'],timezone:'America/Los_Angeles',startDate:'2026-10-09',endDate:'2026-10-11',period:'any',minMinutes:1,includeConditional:false};
 assert.equal(E.filterGames([...games.values()],prefs).filter(g=>g.league==='KBO').length,8);assert.equal(E.filterGames(central,prefs).length,2);assert.equal(E.filterGames(central,{...prefs,includeConditional:true}).length,3);
});
test('unconfirmed provider postponements remain excluded when official source fails',async()=>{
 const client=new B.OfficialBaseballFeed({fetchImpl:async()=>{throw Error('network')}});const data=await client.schedule('2026-10-08','2026-10-12');assert.ok(data.issues.length);assert.equal(data.records.length,0);
 const games=new Map(),r=B.reconcile(games,rejected,data.records,NOW,AT);assert.equal(r.decisions.length,0);assert.equal(games.size,0);assert.equal(N.normalizeEvent(rejected[1],{'4830':'KBO'},NOW).skip,'unavailable');
});
test('official cancellations remove a provider-scheduled game and never create recommendations',()=>{
 const provider=rejected[1],games=new Map([['tsdb-'+provider.idEvent,{id:'tsdb-'+provider.idEvent}]]),row={id:'cancelled',league:'KBO',date:'2026-10-09',start:'2026-10-09T05:00:00.000Z',home:provider.strHomeTeam,away:provider.strAwayTeam,status:'unavailable',sourceUrl:'https://www.koreabaseball.com/'};
 const r=B.reconcile(games,[provider],[row],NOW,AT);assert.equal(games.size,0);assert.equal(r.removed,1);assert.equal(r.decisions[0].officialStatus,'unavailable');
});
test('KBO cancellation markers are read before scheduled status',()=>{
 const j=JSON.parse(fixture('kbo-schedule.json'));j.rows[0].row.at(-1).Text='우천취소';assert.equal(B.parseKBO(j,2026,10)[0].status,'unavailable');
});
test('team orientation, date and doubleheader ambiguity cannot silently override a rejection',()=>{
 const provider=rejected[1],r={id:'one',league:'KBO',date:'2026-10-09',start:'2026-10-09T06:00:00.000Z',home:provider.strHomeTeam,away:provider.strAwayTeam,status:'scheduled',stage:'regular',sourceUrl:'https://www.koreabaseball.com/'};
 for(const records of [[{...r,home:r.away,away:r.home}],[{...r,date:'2026-10-10'}],[r,{...r,id:'two',start:'2026-10-09T09:00:00.000Z'}]])assert.equal(B.reconcile(new Map(),[provider],records,NOW,AT).decisions.length,0);
});
test('a confirmed time change replaces rather than duplicates a broad-feed fixture',()=>{
 const provider=rejected[1],games=new Map([['tsdb-'+provider.idEvent,{id:'tsdb-'+provider.idEvent}]]),r={id:'official',league:'KBO',date:'2026-10-09',start:'2026-10-09T06:00:00.000Z',home:provider.strHomeTeam,away:provider.strAwayTeam,status:'scheduled',stage:'regular',sourceUrl:'https://www.koreabaseball.com/'};
 B.reconcile(games,[provider],[r,r],NOW,AT);assert.equal(games.size,1);assert.equal(games.get('official').start,r.start);
});
test('NPB reserve dates stay excluded and unpublished times remain null',()=>{
 const rows=B.parseNPB(fixture('npb-schedule.html'),2026,10);assert.ok(!rows.some(r=>r.date==='2026-10-13'));const row=rows.find(r=>r.division==='Pacific');assert.equal(row.start,null);assert.ok(B.normalizeOfficial(row,NOW,AT).pending);assert.equal(B.normalizeOfficial(row,NOW,AT).game,undefined);
});
test('unexpected source formats fail explicitly; no guessed fixtures',()=>{
 assert.throws(()=>B.parseKBO({},2026,10));assert.throws(()=>B.parseKBO(JSON.parse(fixture('kbo-schedule.json')),2026,11));assert.throws(()=>B.parseNPB('<html>error</html>',2026,10));assert.throws(()=>B.parseClimax('<html>error</html>',2026,'Central'));assert.equal(B.startTime('2026-10-10','25:00'),null);
});
test('a failed official source does not suppress independent official sources',async()=>{
 const c=new B.OfficialBaseballFeed({fetchImpl:(u,o)=>String(u).includes('koreabaseball')?Promise.reject(Error('failed')):mockFetch(u,o)});const r=await c.schedule('2026-10-08','2026-10-12');assert.ok(r.issues.some(i=>i.provider==='KBO'));assert.ok(r.records.some(g=>g.league==='NPB'));
});
test('past calendar entries are never assumed live from their scheduled time alone',()=>{
 const r={id:'old',league:'NPB',status:'scheduled',date:'2026-10-01',start:'2026-10-01T05:00:00Z'};assert.equal(B.normalizeOfficial(r,NOW,AT),null);
});
test('feed integration exposes corrected games, raw rejection history and pending playoff dates',async()=>{
 const {createApp}=require('../server/server.cjs');const c=new B.OfficialBaseballFeed({fetchImpl:mockFetch});
 const {server}=createApp({key:'TEST',cfbdKey:'',clock:()=>NOW,baseballClient:c,clientFactory:()=>({leagues:async()=>[{idLeague:'4591',strLeague:'Nippon Baseball League',strSport:'Baseball'},{idLeague:'4830',strLeague:'Korean KBO League',strSport:'Baseball'}],day:async d=>rejected.filter(r=>r.dateEvent===d)})});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));try{const response=await fetch(`http://127.0.0.1:${server.address().port}/api/feed?start=2026-10-09&end=2026-10-11`);const r=await response.json();assert.equal(response.status,200);assert.equal(r.appVersion,'0.13.0');assert.equal(r.partial,false);assert.equal(r.officialBaseball.reconciliations.length,10);assert.equal(r.baseballRejections.length,10);assert.ok(r.baseballRejections.every(x=>x.strPostponed==='yes'&&x.resolution==='confirmed_by_official_schedule'));assert.equal(r.games.length,15);assert.equal(r.pendingBaseball.length,3);assert.equal(r.officialBaseball.requests,6);}finally{await new Promise(resolve=>server.close(resolve));}
});
test('unverified playoff rounds stay pending so later conditional games are not admitted by accident',()=>{
 const r={id:'unverified-round',league:'NPB',date:'2026-10-12',start:'2026-10-12T05:00:00Z',phase:'First Stage',status:'scheduled',title:'Climax Series'};
 assert.ok(B.normalizeOfficial(r,NOW,AT).pending);assert.equal(B.normalizeOfficial(r,NOW,AT).game,undefined);
});
