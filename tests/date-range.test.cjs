'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const R=require('../src/dates.js'),E=require('../src/engine.js'),D=require('../src/catalog.js'),{createApp}=require('../server/server.cjs');
const NOW=Date.parse('2026-10-05T19:00:00Z'),now=new Date(NOW),ALL=R.DAYS;
const leagues=[{idLeague:'1',strLeague:'NPB',strSport:'Baseball'}];
async function app(options,run){const {server}=createApp({key:'TEST',cfbdKey:'',clock:()=>NOW,clientFactory:()=>({leagues:async()=>leagues,day:async()=>[]}),...options});await new Promise(r=>server.listen(0,'127.0.0.1',r));try{return await run(`http://127.0.0.1:${server.address().port}`);}finally{await new Promise(r=>server.close(r));}}
test('date presets support weekdays, today, this weekend and the four-week horizon',()=>{
 assert.deepEqual(R.preset('today',now,'America/Los_Angeles'),{startDate:'2026-10-05',endDate:'2026-10-05'});
 assert.deepEqual(R.preset('week',now,'America/Los_Angeles'),{startDate:'2026-10-05',endDate:'2026-10-11'});
 assert.deepEqual(R.preset('weekend',now,'America/Los_Angeles'),{startDate:'2026-10-09',endDate:'2026-10-11'});
 assert.deepEqual(R.preset('four-weeks',now,'America/Los_Angeles'),{startDate:'2026-10-05',endDate:'2026-11-02'});
});
test('weekend shortcuts never reach into past dates on Saturday or Sunday',()=>{
 assert.deepEqual(R.preset('weekend',new Date('2026-10-10T19:00Z'),'America/Los_Angeles'),{startDate:'2026-10-10',endDate:'2026-10-11'});
 assert.deepEqual(R.preset('weekend',new Date('2026-10-11T19:00Z'),'America/Los_Angeles'),{startDate:'2026-10-11',endDate:'2026-10-11'});
});
test('calendar horizon is based on the selected zone, including opposite sides of midnight',()=>{
 const t=new Date('2026-10-05T01:00Z');assert.equal(R.bounds(t,'America/Los_Angeles').min,'2026-10-04');assert.equal(R.bounds(t,'Asia/Tokyo').min,'2026-10-05');
 assert.equal(R.validate('2026-10-04','2026-10-04',t,'America/Los_Angeles'),'');assert.ok(R.validate('2026-10-04','2026-10-04',t,'Asia/Tokyo'));
});
test('validation rejects reversed, missing, impossible, past and too-distant dates',()=>{
 for(const [start,end]of [['2026-10-06','2026-10-05'],['','2026-10-10'],['2026-02-30','2026-10-10'],['2026-10-04','2026-10-10'],['2026-10-05','2026-11-03']])assert.ok(R.validate(start,end,now,'UTC'));
 assert.ok(R.validate('2026-10-05','2026-10-06',now,'invalid'));
 assert.equal(R.validate('2026-11-02','2026-11-02',now,'UTC'),'');
});
test('rolling presets refresh; valid custom ranges persist and stale custom ranges reset',()=>{
 assert.deepEqual(R.restore({preset:'week',startDate:'2026-09-01',endDate:'2026-09-07'},now,'UTC'),{preset:'week',startDate:'2026-10-05',endDate:'2026-10-11'});
 const custom={preset:'custom',startDate:'2026-10-13',endDate:'2026-10-16'};assert.deepEqual(R.restore(custom,now,'UTC'),custom);
 assert.equal(R.restore({...custom,startDate:'2026-10-01'},now,'UTC').preset,'week');assert.equal(R.restore(null,now,'UTC').preset,'week');
});
test('horizon and presets cross year boundaries without adding 28 fixed UTC days to local midnight',()=>{
 assert.deepEqual(R.bounds(new Date('2026-12-20T18:00Z'),'America/Los_Angeles'),{min:'2026-12-20',max:'2027-01-17'});
});
test('weekday games and long ranges match in viewer time',()=>{
 const prefs={days:ALL,timezone:'America/Los_Angeles',startDate:'2026-10-05',endDate:'2026-11-02',period:'any',leagues:['NPB'],category:'all',minMinutes:1};
 const game={id:'weekday',league:'NPB',sport:'Baseball',competition:D.catalog.NPB,category:'men',start:'2026-10-06T05:00:00Z',duration:195,status:'scheduled',stage:'regular',isDemo:false};
 assert.equal(E.filterGames([game],prefs).length,1);assert.equal(E.filterGames([game],{...prefs,days:['Fri','Sat','Sun']}).length,0);
});
test('single-day windows observe DST fall-back and spring-forward',()=>{
 const fall=E.availabilityWindows({days:ALL,timezone:'America/Los_Angeles',startDate:'2026-11-01',endDate:'2026-11-01',period:'any'});
 const spring=E.availabilityWindows({days:ALL,timezone:'America/Los_Angeles',startDate:'2027-03-14',endDate:'2027-03-14',period:'any'});
 assert.equal((fall[0].end-fall[0].start)/3600000,25);assert.equal((spring[0].end-spring[0].start)/3600000,23);
});
test('single weekday and four-week API ranges include both UTC buffer dates and report exact day counts',async()=>{
 const days=[];await app({clientFactory:()=>({leagues:async()=>leagues,day:async d=>{days.push(d);return [];}})},async url=>{
  const single=await (await fetch(url+'/api/feed?start=2026-10-06&end=2026-10-06')).json();assert.equal(single.requestedDays,3);assert.deepEqual(days,['2026-10-05','2026-10-06','2026-10-07']);
  const wide=await (await fetch(url+'/api/feed?start=2026-10-05&end=2026-11-02')).json();assert.equal(wide.requestedDays,31);assert.equal(wide.successfulDays,31);assert.equal(wide.cachedDayRequests,3);assert.equal(wide.providerRequests,28);assert.equal(days.at(-1),'2026-11-03');
 });
});
test('server rejects invalid range or zone before making provider calls',async()=>{
 let calls=0;await app({clientFactory:()=>({leagues:async()=>{calls++;return leagues;},day:async()=>{calls++;return [];}})},async url=>{
  for(const query of ['start=2026-10-07&end=2026-10-06','start=2026-10-05&end=2026-11-03','start=2026-10-04&end=2026-10-05','start=2026-10-05&end=2026-10-05&timezone=bad','start=2026-02-30&end=2026-10-07'])assert.equal((await fetch(url+'/api/feed?'+query)).status,400);
  assert.equal(calls,0);
 });
});
test('targeted cap recovery is bounded and its missing coverage is reported',async()=>{
 const calls=[];await app({recoveryLimit:2,clientFactory:()=>({leagues:async()=>leagues,day:async(d,l)=>{calls.push([d,l]);return l?[]:Array.from({length:1500},(_,i)=>({idEvent:String(1000+i),strLeague:'Other',strSport:'Other'}));}})},async url=>{
  const r=await (await fetch(url+'/api/feed?start=2026-10-05&end=2026-10-07')).json();assert.equal(r.successfulDays,5);assert.equal(r.targetedRecoveryRequests,2);assert.equal(r.deferredRecovery,3);assert.equal(r.partial,true);assert.ok(r.issues.some(i=>/deferred/.test(i.message)));assert.equal(calls.filter(c=>c[1]).length,2);
 });
});
test('source date limits also work on the last permitted day across a month boundary',async()=>{
 await app({},async url=>{assert.equal((await fetch(url+'/api/feed?start=2026-11-02&end=2026-11-02&timezone=America%2FLos_Angeles')).status,200);assert.equal((await fetch(url+'/api/feed?start=2026-11-03&end=2026-11-03&timezone=America%2FLos_Angeles')).status,400);});
});
