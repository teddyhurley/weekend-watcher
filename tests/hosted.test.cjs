'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),http=require('node:http'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {createApp}=require('../server/server.cjs');
const NOW=Date.parse('2026-10-05T19:00:00Z'),ORIGIN='https://watcher.example.test',HOST='watcher.example.test';
async function withApp(options,run){
 const {server}=createApp({publicMode:true,publicOrigin:ORIGIN,key:'',cfbdKey:'',mlbClient:null,baseballClient:null,clock:()=>NOW,clientFactory:()=>({leagues:async()=>[],day:async()=>[]}),...options});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const request=(pathname,{method='GET',headers={},body}={})=>new Promise((resolve,reject)=>{
  const req=http.request({hostname:'127.0.0.1',port:server.address().port,path:pathname,method,headers:{Host:HOST,...headers}},res=>{let text='';res.setEncoding('utf8');res.on('data',s=>text+=s);res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,text,json:()=>JSON.parse(text)}));});req.on('error',reject);req.end(body);
 });
 try{return await run(request,server);}finally{await new Promise(r=>server.close(r));}
}
function demoFixture(){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'weekend-watcher-hosted-'));fs.mkdirSync(path.join(root,'demo-dist','src'),{recursive:true});
 fs.writeFileSync(path.join(root,'demo-dist','index.html'),'<!doctype html><h1>Interactive demo · fictional fixtures</h1>');
 for(const name of ['app','engine','tags','scope','audience','catalog','zones','dates','demo'])fs.writeFileSync(path.join(root,'demo-dist','src',name+'.js'),'/* approved demo asset: '+name+' */');
 fs.writeFileSync(path.join(root,'demo-dist','src','styles.css'),'body{color:navy}');
 fs.writeFileSync(path.join(root,'.env'),'THESPORTSDB_API_KEY=PRIVATE_TEST_SENTINEL\nCFBD_API_KEY=PRIVATE_TEST_SENTINEL\n');
 fs.writeFileSync(path.join(root,'demo-dist','.env'),'PRIVATE_TEST_SENTINEL');
 fs.writeFileSync(path.join(root,'demo-dist','src','live.js'),'PRIVATE_TEST_SENTINEL');
 return root;
}
test('public hosting requires one valid HTTPS origin',()=>{
 for(const publicOrigin of ['', 'http://watcher.example.test','https://watcher.example.test/path','https://user:password@watcher.example.test','https://watcher.example.test?token=private'])assert.throws(()=>createApp({publicMode:true,publicOrigin,key:'',cfbdKey:''}),/HTTPS origin/);
 const {server}=createApp({publicMode:false,publicOrigin:'',key:'',cfbdKey:''});assert.equal(server.listening,false);
});
test('public status and health are read-only and do not contact a sports provider',async()=>{
 let calls=0;
 await withApp({key:'TEST_ONLY',clientFactory:()=>({leagues:async()=>{calls++;return[];},day:async()=>{calls++;return[];}})},async request=>{
  const status=await request('/api/status');assert.equal(status.status,200);assert.equal(status.json().localOnly,false);assert.equal(status.json().configured,true);assert.equal(status.json().demoUrl,'/demo/');assert.doesNotMatch(status.text,/TEST_ONLY/);
  const health=await request('/healthz');assert.equal(health.status,200);assert.deepEqual(health.json(),{ok:true,version:'0.13.0'});
  assert.equal((await request('/healthz',{method:'HEAD'})).text,'');assert.equal(calls,0);
 });
});
test('public access accepts its canonical host and origin and rejects forged proxy claims',async()=>{
 await withApp({},async request=>{
  assert.equal((await request('/api/status',{headers:{Origin:ORIGIN}})).status,200);
  for(const headers of [{Host:'untrusted.example'},{Host:'127.0.0.1'},{Origin:'https://untrusted.example'},{Origin:'http://'+HOST},{Origin:'null'},{Host:'untrusted.example','X-Forwarded-Host':HOST,'X-Forwarded-For':'127.0.0.1'}])assert.equal((await request('/api/status',{headers})).status,403,JSON.stringify(headers));
  assert.equal((await request('/healthz',{headers:{Host:'untrusted.example'}})).status,403);
 });
});
test('all public setup routes and assets are disabled without writing any keys',async()=>{
 const root=demoFixture(),before=fs.readFileSync(path.join(root,'.env'),'utf8');
 try{await withApp({root},async request=>{
  for(const route of ['/setup','/setup/','/setup.js','/setup.css','/api/setup-state','/api/setup'])for(const method of ['GET','POST']){
   const r=await request(route,{method,headers:{Origin:ORIGIN,'Content-Type':'application/json','X-Setup-Token':'anything'},body:method==='POST'?'{"key":"SHOULD_NOT_BE_WRITTEN"}':undefined});assert.equal(r.status,404,method+' '+route);assert.doesNotMatch(r.text,/token|PRIVATE_TEST_SENTINEL/);
  }
  assert.equal(fs.readFileSync(path.join(root,'.env'),'utf8'),before);
 });}finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('demo serving uses an explicit allowlist and never exposes source, private files or setup assets',async()=>{
 const root=demoFixture();
 try{await withApp({root},async request=>{
  const redirect=await request('/demo');assert.equal(redirect.status,308);assert.equal(redirect.headers.location,'/demo/');
  for(const route of ['/demo/','/demo/index.html']){const r=await request(route);assert.equal(r.status,200);assert.match(r.text,/fictional fixtures/);assert.match(r.headers['content-type'],/text\/html/);}
  for(const name of ['app','engine','tags','scope','audience','catalog','zones','dates','demo'])assert.equal((await request('/demo/src/'+name+'.js')).status,200,name);
  const css=await request('/demo/src/styles.css');assert.equal(css.status,200);assert.match(css.headers['content-type'],/text\/css/);assert.match(css.headers['content-security-policy'],/connect-src 'self'/);
  for(const route of ['/.env','/.env.example','/.git/config','/package.json','/server/server.cjs','/src/data.js','/src/demo.js','/tests/fixtures/kbo-schedule.json','/demo/.env','/demo/%2eenv','/demo/src/live.js','/demo/setup.js','/demo/../.env','/demo/../../.env','/demo/src/../../.env']){const r=await request(route);assert.equal(r.status,404,route);assert.doesNotMatch(r.text,/PRIVATE_TEST_SENTINEL/);}
  assert.equal((await request('/demo/',{method:'POST'})).status,405);
 });}finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('unconfigured public schedules offer the demo and never instruct a visitor to enter a key',async()=>{
 await withApp({},async request=>{
  assert.equal((await request('/api/status')).json().configured,false);
  const r=await request('/api/feed?start=2026-10-05&end=2026-10-05');assert.equal(r.status,503);assert.equal(r.json().code,'schedule_unavailable');assert.equal(r.json().demoUrl,'/demo/');assert.match(r.json().error,/fictional fixtures/);assert.doesNotMatch(r.text,/setup_required|API key|local setup/);assert.equal(r.json().games,undefined);
 });
});
test('public mode ignores private .env files and relies on supplied server environment keys',async()=>{
 const root=demoFixture();
 try{await withApp({root,key:undefined,cfbdKey:undefined,clientFactory:key=>{assert.notEqual(key,'PRIVATE_TEST_SENTINEL');return {};},cfbdFactory:key=>{assert.notEqual(key,'PRIVATE_TEST_SENTINEL');return {};}},async request=>{
  const status=(await request('/api/status')).json();assert.equal(status.configured,Boolean(process.env.THESPORTSDB_API_KEY));assert.equal(status.connections.collegeFootballData,Boolean(process.env.CFBD_API_KEY));
 });}finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('configured public schedules preserve the live response and never synthesize fixtures',async()=>{
 await withApp({key:'TEST_ONLY'},async request=>{
  const r=await request('/api/feed?start=2026-10-05&end=2026-10-05');assert.equal(r.status,200);assert.equal(r.json().isDemo,false);assert.equal(r.json().provider,'TheSportsDB');assert.deepEqual(r.json().games,[]);assert.equal(r.json().successfulDays,3);
 });
});
test('provider failures stay errors, are redacted, and cannot immediately spend more quota',async()=>{
 let calls=0;
 await withApp({key:'TEST_ONLY',clientFactory:()=>({leagues:async()=>{calls++;throw Error('PRIVATE_TEST_SENTINEL');}})},async request=>{
  const route='/api/feed?start=2026-10-05&end=2026-10-05',failed=await request(route);assert.equal(failed.status,502);assert.doesNotMatch(failed.text,/PRIVATE_TEST_SENTINEL/);assert.equal(failed.json().games,undefined);assert.equal(failed.json().demoUrl,'/demo/');
  const retry=await request(route);assert.equal(retry.status,429);assert.equal(retry.headers['retry-after'],'60');assert.equal(calls,1);
 });
});
test('public cached ranges stay available while new refreshes share a bounded budget',async()=>{
 let now=NOW,calls=0;
 await withApp({key:'TEST_ONLY',clock:()=>now,clientFactory:()=>({leagues:async()=>[],day:async()=>{calls++;return[];}})},async request=>{
  const route=day=>'/api/feed?start=2026-10-'+day+'&end=2026-10-'+day;
  assert.equal((await request(route('05'))).status,200);assert.equal(calls,3);
  assert.equal((await request(route('05'))).status,200);assert.equal(calls,3);
  assert.equal((await request(route('06'))).status,429);assert.equal(calls,3);
  for(const day of ['06','07','08']){now+=60000;assert.equal((await request(route(day))).status,200);}
  assert.equal(calls,6);now+=60000;
  const limited=await request(route('09'));assert.equal(limited.status,429);assert.equal(limited.headers['retry-after'],'660');assert.equal(calls,6);
  assert.equal((await request(route('08'))).status,200);assert.equal(calls,6);
  now=NOW+15*60000;assert.equal((await request(route('09'))).status,200);
 });
});
test('public visitors reuse an identical in-flight fetch and competing ranges do not start new work',async()=>{
 let release,started,leaguesCalls=0;
 const gate=new Promise(r=>release=r),ready=new Promise(r=>started=r);
 await withApp({key:'TEST_ONLY',clientFactory:()=>({leagues:async()=>{leaguesCalls++;started();await gate;return[];},day:async()=>[]})},async request=>{
  const route='/api/feed?start=2026-10-05&end=2026-10-05',first=request(route);await ready;const same=request(route);
  assert.equal((await request('/api/feed?start=2026-10-06&end=2026-10-06')).status,409);
  release();assert.equal((await first).status,200);assert.equal((await same).status,200);assert.equal(leaguesCalls,1);
 });
});
test('default local mode retains private setup and local host restrictions',async()=>{
 await withApp({publicMode:false,publicOrigin:''},async(request,server)=>{
  const headers={Host:'127.0.0.1:'+server.address().port};
  const status=await request('/api/status',{headers});assert.equal(status.status,200);assert.equal(status.json().localOnly,true);assert.equal(status.json().configured,false);
  const setup=await request('/api/setup-state',{headers});assert.equal(setup.status,200);assert.match(setup.json().token,/^[a-f0-9]{64}$/);
  assert.equal((await request('/setup',{headers})).status,200);
  const feed=await request('/api/feed?start=2026-10-05&end=2026-10-05',{headers});assert.equal(feed.status,428);assert.equal(feed.json().code,'setup_required');
  assert.equal((await request('/api/status')).status,403);
 });
});
