'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),vm=require('node:vm');
const D=require('../src/catalog.js'),R=require('../src/dates.js'),E=require('../src/engine.js'),T=require('../src/tags.js'),A=require('../src/audience.js');
const {ASSETS,buildDemo}=require('../scripts/build-demo.cjs');
const root=path.resolve(__dirname,'..');
// Evaluate the browser export in a VM without a DOM or networking APIs. The
// deterministic fixtures must remain usable independently of page startup.
const sandbox={WatcherDates:R,Date,Intl};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(root,'src/demo.js'),'utf8'),sandbox);
const Demo=sandbox.WatcherDemo;
const plain=value=>JSON.parse(JSON.stringify(value));
const range={startDate:'2026-10-17',endDate:'2026-10-23'};
const feed=()=>Demo.createFeed(range,D.catalog);
const prefs=(extra={})=>({leagues:[...Demo.LEAGUES],days:R.DAYS,timezone:'UTC',startDate:range.startDate,endDate:range.endDate,period:'any',category:'all',minMinutes:1,includeUS:true,includeConditional:false,tags:[],...extra});

test('public examples are explicitly fictional, representative, and plentiful on every selected day',()=>{
 const result=feed(),games=result.games;
 assert.equal(result.isDemo,true);assert.ok(Demo.LEAGUES.length>=20);assert.equal(new Set(games.map(g=>g.id)).size,games.length);
 for(const game of games){
  assert.equal(game.isDemo,true);assert.equal(game.category,'men');assert.equal(game.status,'scheduled');assert.ok(E.competitionAllowed(game));
  assert.equal(game.source.url,Demo.CASE_STUDY_URL);assert.match(game.source.providerStatus,/Synthetic example/);
  assert.equal(game.source.fetchedAt,undefined);
  assert.ok(game.participants.every(p=>p.id.startsWith('demo-team-')));
  assert.ok(game.tagEvidence.every(ev=>ev.isDemo===true&&ev.status==='example'&&ev.sourceUrl===Demo.CASE_STUDY_URL));
 }
 for(let date=range.startDate;date<=range.endDate;date=R.shift(date,1))assert.ok(games.filter(g=>g.start.startsWith(date)).length>=5,'Not enough examples on '+date);
 const seen=new Set(games.flatMap(T.forGame));
 for(const tag of T.DEFINITIONS)assert.ok(seen.has(tag.id),'Missing usable story example: '+tag.id);
 assert.ok(E.filterGames(games,prefs()).length>=30);
});

test('overlapping date selections and different viewer zones preserve the exact same examples and instants',()=>{
 const first=feed();
 assert.deepEqual(plain(first),plain(feed()));
 const later=Demo.createFeed({startDate:'2026-10-20',endDate:'2026-10-28',timezone:'Asia/Tokyo'},D.catalog);
 const existing=new Map(first.games.map(g=>[g.id,g]));
 const overlap=later.games.filter(g=>existing.has(g.id));assert.ok(overlap.length>20);
 for(const game of overlap)assert.deepEqual(plain(game),plain(existing.get(game.id)));
 for(const timezone of ['America/Los_Angeles','Asia/Tokyo','Pacific/Auckland','Pacific/Honolulu','Europe/London','America/Sao_Paulo']){
  const matched=E.filterGames(first.games,prefs({timezone}));assert.ok(matched.length>=30,timezone);
  assert.ok(matched.every(g=>existing.get(g.id).start===g.start));
 }
});

test('rolling 28-day horizon, year boundaries and daylight-saving dates stay populated in local time',()=>{
 for(const [now,timezone] of [
  ['2026-10-31T23:30:00Z','America/Los_Angeles'],
  ['2027-03-14T09:30:00Z','America/Los_Angeles'],
  ['2026-12-31T23:30:00Z','Pacific/Auckland'],
  ['2026-10-17T01:30:00Z','Pacific/Honolulu'],
  ['2026-10-17T23:30:00Z','Pacific/Kiritimati']
 ]){
  const clock=new Date(now),{min,max}=R.bounds(clock,timezone),all=Demo.createFeed({startDate:min,endDate:max},D.catalog);
  assert.equal(R.validate(min,max,clock,timezone),'');
  for(const date of [min,max])assert.ok(E.filterGames(all.games,prefs({timezone,startDate:date,endDate:date})).length>=4,timezone+' '+date);
  const shortcut=R.restore({preset:'week',startDate:'2020-01-01',endDate:'2020-01-07'},clock,timezone);
  assert.equal(shortcut.startDate,min);assert.equal(shortcut.endDate,R.shift(min,6));
 }
});

test('the demo exercises real ranking, story filtering, discovery and conditional-game behavior',()=>{
 const all=feed().games,matched=E.filterGames(all,prefs()),ranked=E.rankGames(matched,'balanced',[],prefs());
 assert.ok(T.forGame(ranked[0]).includes('championship'));
 const college=ranked.find(g=>g.league==='NCAA FBS');assert.deepEqual(plain(college.signals.ranked.ranks),[3,7]);assert.ok(college.score>=87);
 const ordinary=ranked.find(g=>g.league==='NBA'&&!T.forGame(g).length);assert.ok(college.score>ordinary.score);
 const championships=E.filterGames(all,prefs({tags:['championship']}));assert.ok(championships.length>=2);assert.ok(championships.every(g=>T.forGame(g).includes('championship')));
 const global=E.filterGames(all,prefs({includeUS:false}));assert.ok(global.length>10);assert.ok(global.every(g=>!A.usCentered(g.league)));
 assert.ok(matched.every(g=>!g.conditional));const conditional=E.filterGames(all,prefs({includeConditional:true})).find(g=>g.conditional);assert.ok(conditional);
 assert.equal(E.scoreGame(conditional).score,E.scoreGame({...conditional,conditional:false,tagEvidence:conditional.tagEvidence.filter(e=>e.id!=='if-necessary')}).score);
 const relegation=E.filterGames(all,prefs({tags:['relegation-battle']}));assert.ok(relegation.length);assert.ok(relegation.every(g=>g.competition.relegation));
 const evening=E.filterGames(all,prefs({timezone:'America/Los_Angeles',period:'evening'}));assert.ok(evening.length>0);assert.ok(evening.length<matched.length);
 const plan=E.buildPlan(E.rankGames(evening,'balanced',[],prefs({timezone:'America/Los_Angeles',period:'evening'})),6);
 for(let i=1;i<plan.length;i++)assert.ok(plan[i-1].planEnd<=plan[i].planStart);
});

test('fixture generation rejects impossible, missing, reversed and excessive calendar ranges',()=>{
 for(const invalid of [{},{startDate:'2026-02-30',endDate:'2026-03-01'},{startDate:'2026-10-23',endDate:'2026-10-17'},{startDate:'2026-10-17',endDate:'2026-11-15'}])assert.throws(()=>Demo.createFeed(invalid,D.catalog),/valid demo range/);
});

function tree(dir,prefix=''){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?tree(path.join(dir,e.name),prefix+e.name+'/'):[prefix+e.name]).sort();}
test('the public build includes only reviewed assets, clears stale files and never includes private material',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'watcher-demo-build-'));
 try{
  const project=path.join(temp,'project'),out=path.join(project,'demo-dist');
  for(const rel of ['index.html',...ASSETS]){const target=path.join(project,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,rel),target);}
  const marker='PRIVATE_SENTINEL_DO_NOT_PUBLISH';
  for(const rel of ['.env','.git/config','server/server.cjs','public/setup.html','src/data.js','tests/private.json','demo-dist/stale.env']){const target=path.join(project,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,marker);}
  const built=buildDemo({rootDir:project});assert.deepEqual(tree(out),['.nojekyll','index.html',...ASSETS].sort());assert.equal(built.files.length,12);
  let scripts='';
  for(const rel of tree(out)){const text=fs.readFileSync(path.join(out,rel),'utf8');assert.ok(!text.includes(marker),rel);if(rel.endsWith('.js'))scripts+=text;}
  assert.doesNotMatch(scripts,/\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/);
  const html=fs.readFileSync(path.join(out,'index.html'),'utf8');
  assert.match(html,/INTERACTIVE DEMO · FICTIONAL EVENTS/);assert.match(html,/src="src\/demo\.js"/);assert.match(html,/docs\/PRODUCT\.md/);
  assert.doesNotMatch(html,/src\/live\.js|\/setup|Connection report|local server|data-category="women"/i);
  for(const base of ['https://example.test/demo/','https://example.test/weekend-watcher/'])for(const match of html.matchAll(/(?:src|href)="([^\"]+)"/g)){
   const asset=match[1];if(asset.startsWith('https:')||asset.startsWith('#'))continue;
   assert.ok(new URL(asset,base).href.startsWith(base),asset);assert.ok(fs.existsSync(path.join(out,asset)),asset);
  }
  const boot=fs.readFileSync(path.join(out,'src/demo.js'),'utf8');assert.match(boot,/script\.src='src\/app\.js'/);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});

test('a changed private template or symlinked browser file fails before replacing an existing demo',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'watcher-demo-check-'));
 try{
  const project=path.join(temp,'project');
  for(const rel of ['index.html',...ASSETS]){const target=path.join(project,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,rel),target);}
  const out=path.join(project,'demo-dist');fs.mkdirSync(out);fs.writeFileSync(path.join(out,'old.html'),'PREVIOUS_GOOD_BUILD');
  const entry=path.join(project,'index.html');fs.writeFileSync(entry,fs.readFileSync(entry,'utf8').replace('src/live.js','src/private-loader.js'));
  assert.throws(()=>buildDemo({rootDir:project}),/demo entry point/);assert.equal(fs.readFileSync(path.join(out,'old.html'),'utf8'),'PREVIOUS_GOOD_BUILD');
  fs.copyFileSync(path.join(root,'index.html'),entry);const style=path.join(project,'src/styles.css');fs.unlinkSync(style);fs.symlinkSync(path.join(root,'src/styles.css'),style);
  assert.throws(()=>buildDemo({rootDir:project}),/regular file/);
  assert.throws(()=>buildDemo({rootDir:project,outDir:temp}),/parent directories/);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
