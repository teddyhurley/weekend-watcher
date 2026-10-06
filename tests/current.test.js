'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const Audience=require('../src/audience.js');
const Scope=require('../src/scope.js');
const Tags=require('../src/tags.js');
const Engine=require('../src/engine.js');
const Catalog=require('../src/catalog.js');
const Normalize=require('../server/normalize.cjs');
const MLB=require('../server/mlb-normalize.cjs');
const CFB=require('../server/cfb-normalize.cjs');
const aliases=require('../config/league-aliases.json');

const ROOT=path.resolve(__dirname,'..');
const NOW=Date.parse('2026-10-05T16:00:00Z');
const prefs=(extra={})=>({
  leagues:Audience.eligibleNames(),tags:[],tagMode:'any',category:'all',days:['Fri','Sat','Sun'],
  timezone:'America/Los_Angeles',startDate:'2026-10-09',endDate:'2026-10-11',period:'any',
  matchMode:'overlap',minMinutes:15,hidePreseason:true,includeConditional:false,includeUS:true,
  timeWeight:10,localWeight:2,country:'US',...extra
});
const liveGame=(league,extra={})=>{
  const c=Catalog.catalog[league];
  return {id:'g-'+league,league,sport:c.sport,competition:{...c},countries:c.countries||[],category:c.category==='open'?'men':c.category,start:'2026-10-10T20:00:00Z',duration:120,status:'scheduled',stage:'regular',isDemo:false,tagEvidence:[],participants:[{id:'a',name:'A'},{id:'b',name:'B'}],...extra};
};

test('500K remains an audience admission path, not the only path',()=>assert.equal(Audience.THRESHOLD,500000));
test('curated catalogue expands beyond the 500K-only pass list',()=>{
  const names=Audience.eligibleNames();assert.ok(names.length>80);assert.ok(names.includes('La Liga'));assert.ok(names.includes('NPB'));assert.ok(names.includes('KBO'));assert.ok(names.includes('EuroLeague'));
});
test('AFL, NPB, KBO, EuroLeague and major soccer cups are admitted',()=>{
  for(const l of ['AFL','NPB','KBO','EuroLeague','FA Cup','Carabao Cup','Copa del Rey','DFB-Pokal','Coppa Italia','Coupe de France','Copa do Brasil'])assert.equal(Audience.eligible(l),true,l);
});
test('major ICC competitions are explicit rather than hidden inside one generic bucket',()=>{
  for(const l of ['ICC Cricket World Cup','ICC Men’s T20 World Cup','ICC Champions Trophy','ICC World Test Championship','ICC Women’s Cricket World Cup','ICC Women’s T20 World Cup'])assert.equal(Audience.eligible(l),true,l);
});
test('human-only scope rejects esports, horse racing, scripted entertainment and friendlies',()=>{
  for(const sport of ['Esports','Horse racing'])assert.equal(Scope.competitive({sport,league:'Synthetic',competition:{nature:'competitive'}}),false);
  for(const league of ['WWE','AEW','NJPW','International Friendlies'])assert.equal(Scope.competitive({sport:'Fighting',league,competition:{nature:'competitive'}}),false);
  assert.equal(Scope.competitive({sport:'MMA',league:'UFC',competition:{nature:'competitive'}}),true);
});
test('live competition eligibility uses curated admission and permits Championship exception',()=>{
  assert.equal(Engine.competitionAllowed(liveGame('AFL')),true);assert.equal(Engine.competitionAllowed(liveGame('La Liga')),true);assert.equal(Engine.competitionAllowed(liveGame('Championship')),true);
});
test('audience size qualifies coverage but never changes an event score',()=>{
  const a=Engine.scoreGame({...liveGame('AFL'),audience:500000},'balanced',[],prefs());
  const b=Engine.scoreGame({...liveGame('AFL'),audience:50000000},'balanced',[],prefs());assert.equal(a.score,b.score);
});
test('U.S. toggle hides U.S.-centered leagues but keeps global competitions',()=>{
  const games=[liveGame('NFL'),liveGame('NCAA FBS'),liveGame('MLB'),liveGame('MLS'),liveGame('AFL'),liveGame('IPL'),liveGame('Formula 1'),liveGame('NPB')];
  const rows=Engine.filterGames(games,prefs({includeUS:false}));assert.deepEqual(rows.map(g=>g.league).sort(),['AFL','Formula 1','IPL','NPB']);
});
test('If necessary is a canonical filter tag and Record Watch is gone',()=>{
  assert.ok(Tags.IDS.has('if-necessary'));assert.equal([...Tags.IDS].some(x=>/record/i.test(x)),false);
});
function mlbConditional(){return MLB.normalizeGame({
  gamePk:999001,gameDate:'2026-10-10T20:00:00Z',gameType:'D',seriesDescription:'American League Division Series',seriesGameNumber:5,gamesInSeries:5,ifNecessary:'Y',description:'Game 5 if necessary',season:'2026',
  status:{abstractGameState:'Preview',detailedState:'Scheduled'},venue:{name:'Mock Ballpark'},teams:{away:{team:{id:147,name:'Away'}},home:{team:{id:139,name:'Home'}}}
},NOW,new Date(NOW).toISOString()).game;}
test('MLB conditional games carry sourced If necessary evidence',()=>{const g=mlbConditional();assert.equal(g.conditional,true);assert.ok(Tags.forGame(g).includes('if-necessary'));assert.ok(Tags.forGame(g).includes('playoffs'));});
test('If necessary games are hidden by default and appear when toggled on',()=>{const g=mlbConditional();assert.equal(Engine.filterGames([g],prefs()).length,0);assert.equal(Engine.filterGames([g],prefs({includeConditional:true})).length,1);});
test('TheSportsDB aliases synthetically map every admitted primary competition',()=>{
 const rows=[];let id=1000;for(const league of Audience.eligibleNames()){const c=Catalog.catalog[league];if(c?.dataProvider&&c.dataProvider!=='TheSportsDB')continue;const provider=(aliases[league]||[])[0]||league;const sport=({'Football':'Soccer','American football':'American Football','Ice hockey':'Ice Hockey','Australian rules':'Australian Football','MMA':'Fighting'})[c.sport]||c.sport;rows.push({idLeague:String(id++),strLeague:provider,strSport:sport,strGender:c.category==='women'?'Female':c.category==='men'?'Male':''});}
 const m=Normalize.leagueMap(rows);assert.deepEqual(m.catalogueUnmapped,[]);
});
test('preseason and exhibition events are hard-excluded from live product',()=>{
 assert.equal(Engine.competitionAllowed(liveGame('NBA',{stage:'preseason'})),false);assert.equal(Engine.competitionAllowed(liveGame('Premier League',{stage:'exhibition'})),false);
});
test('NCAA FBS is admitted through CollegeFootballData, not TheSportsDB',()=>assert.equal(Catalog.catalog['NCAA FBS'].dataProvider,'CollegeFootballData'));
test('college ranking matcher is exact: Texas A&M never inherits Texas and Oklahoma never inherits Oklahoma State',()=>{
  const poll=CFB.choosePoll([{season:2026,week:6,polls:[{poll:'AP Top 25',ranks:[{rank:1,school:'Texas'},{rank:18,school:'Oklahoma State'},{rank:2,school:'Georgia'},{rank:6,school:'Alabama'}]}]}]);
  assert.equal(CFB.lookupRank(poll,'Texas A&M'),null);assert.equal(CFB.lookupRank(poll,'Oklahoma'),null);
  assert.equal(CFB.lookupRank(poll,'Texas').rank,1);assert.equal(CFB.lookupRank(poll,'Oklahoma State').rank,18);
});
test('ranked matchup requires two independently ranked teams',()=>{
  const poll=CFB.choosePoll([{season:2026,week:6,polls:[{poll:'AP Top 25',ranks:[{rank:2,school:'Georgia'},{rank:6,school:'Alabama'},{rank:14,school:'Missouri'}]}]}]);
  const row={id:1,season:2026,week:7,seasonType:'regular',startDate:'2026-10-10T23:30:00Z',completed:false,homeId:1,homeTeam:'Alabama',homeClassification:'fbs',awayId:2,awayTeam:'Georgia',awayClassification:'fbs'};
  const both=CFB.normalizeGame(row,poll,[],NOW,new Date(NOW).toISOString()).game;assert.ok(Tags.forGame(both).includes('ranked-opponents'));
  const one=CFB.normalizeGame({...row,id:2,homeTeam:'Missouri',awayTeam:'Texas A&M'},poll,[],NOW,new Date(NOW).toISOString()).game;assert.equal(Tags.forGame(one).includes('ranked-opponents'),false);
});
test('no channel or streaming guide remains in user-facing app files',()=>{
  const files=['index.html','src/app.js','public/setup.html','server/server.cjs'];const text=files.map(f=>fs.readFileSync(path.join(ROOT,f),'utf8')).join('\n');
  assert.doesNotMatch(text,/where to watch|watch guide|US listing|\/api\/tv|data-tv|WatchAccess/i);
});
test('CollegeFootballData media endpoint is not called by the discovery server',()=>{
  const s=fs.readFileSync(path.join(ROOT,'server/server.cjs'),'utf8');assert.doesNotMatch(s,/cfbd\.media\(/);
});
test('AFL is a first-class visible sport label',()=>{
  const app=fs.readFileSync(path.join(ROOT,'src/app.js'),'utf8');assert.match(app,/s==='Australian rules'\?'AFL'/);assert.ok(Catalog.groups['Australian rules'].includes('AFL'));
});
test('UI contains U.S. sports controls and conditional-game control',()=>{
  const h=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');assert.match(h,/data-us-mode="include"/);assert.match(h,/data-us-mode="hide"/);assert.match(h,/id="include-conditional"/);
});
test('Discover Something explicitly flips U.S. sports off by default',()=>{
  const app=fs.readFileSync(path.join(ROOT,'src/app.js'),'utf8');assert.match(app,/state\.includeUS=b\.dataset\.recMode!==['"]discover['"]/);
});
test('every admitted competition has an explicit admission record',()=>{for(const league of Audience.eligibleNames())assert.ok(Audience.auditFor(league)?.reason,league);});
test('no esports or horse racing can enter the curated pass list',()=>{
  for(const league of Audience.eligibleNames()){const c=Catalog.catalog[league];assert.ok(c);assert.notEqual(String(c.sport).toLowerCase(),'esports');assert.notEqual(String(c.sport).toLowerCase(),'horse racing');}
});

const removedCompetitions=['Première Ligue','Serie A Women','Brasileirão Feminino A1','WPL','WBBL','International cricket · women'];
test('only the six problematic competitions are removed from catalogue and admission',()=>{
 for(const l of removedCompetitions){assert.equal(Catalog.catalog[l],undefined);assert.equal(Audience.eligible(l),false);assert.equal(aliases[l],undefined);assert.ok(!Object.values(Catalog.groups).flat().includes(l));}
 for(const l of ['WNBA','NWSL','WSL','Liga F','UEFA Women’s Champions League','ICC Women’s Cricket World Cup','ICC Women’s T20 World Cup','The Hundred · women'])assert.equal(Audience.eligible(l),true,l);
});
test('conditional and confirmed elimination games have identical scores and discovery priority',()=>{
 const a=mlbConditional(),b={...a,conditional:false,tagEvidence:a.tagEvidence.filter(e=>e.id!=='if-necessary')};
 for(const profile of Object.keys(Engine.PROFILES))assert.equal(Engine.scoreGame(a,profile,[],prefs()).score,Engine.scoreGame(b,profile,[],prefs()).score);
 const row={gamePk:999001,gameDate:a.start,gameType:'D',seriesGameNumber:5,gamesInSeries:5,season:'2026',status:{abstractGameState:'Preview',detailedState:'Scheduled'},teams:{home:{team:{id:1,name:'Home'}},away:{team:{id:2,name:'Away'}}}};
 assert.equal(MLB.normalizeGame({...row,ifNecessary:'Y'},NOW).game.noteworthy.score,MLB.normalizeGame({...row,ifNecessary:'N'},NOW).game.noteworthy.score);
});
test('women international soccer friendlies classify as exhibition; wrestling stays scripted',()=>{
 for(const strLeague of ["Women’s International Soccer Friendlies","International Friendly"]){assert.equal(Normalize.normalizeEvent({idEvent:'1',strLeague,strSport:'Soccer'},{}).skip,'exhibition');}
 assert.equal(Normalize.normalizeEvent({idEvent:'1',strLeague:'NJPW',strSport:'Fighting'},{}).skip,'scripted');
});
test('KBO/NPB rejection diagnostics preserve all raw fields beyond the generic example cap',async()=>{
 const {createApp}=require('../server/server.cjs');
 const fields={strStatus:'NS',strPostponed:'yes',dateEvent:'2026-10-10',strTime:'20:00:00',strTimestamp:'2026-10-10T20:00:00',strSeason:'2026',strRound:'5',strStage:'Playoffs',strHomeTeam:'Home',strAwayTeam:'Away'};
 const rows=Array.from({length:12},(_,i)=>({...fields,idEvent:String(100+i),idLeague:i%2?'2':'1',strLeague:i%2?'KBO':'NPB',strSport:'Baseball'}));
 const {server}=createApp({key:'TEST',cfbdKey:'',clock:()=>NOW,clientFactory:()=>({leagues:async()=>[{idLeague:'1',strLeague:'NPB',strSport:'Baseball'},{idLeague:'2',strLeague:'KBO',strSport:'Baseball'}],day:async()=>rows})});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const r=await fetch(`http://127.0.0.1:${server.address().port}/api/feed?start=2026-10-09&end=2026-10-11`);assert.equal(r.status,200);const data=await r.json();assert.equal(data.baseballRejections.length,12);assert.equal(data.skipExamples.unavailable.length,5);assert.equal(data.games.length,0);assert.equal(data.appVersion,'0.13.0');for(const d of data.baseballRejections){assert.equal(d.reason,'unavailable');for(const [k,v] of Object.entries(fields))assert.equal(d[k],v);assert.ok(d.idEvent);assert.ok(d.strLeague);}assert.match(fs.readFileSync(path.join(ROOT,'src/live.js'),'utf8'),/baseballRejections:r.baseballRejections/);
 }finally{await new Promise(resolve=>server.close(resolve));}
});
