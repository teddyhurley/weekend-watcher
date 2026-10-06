'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {createApp}=require('../server/server.cjs'),http=require('node:http');
async function withApp(opts,run){const {server}=createApp({key:'TEST_ONLY',cfbdKey:'',clock:()=>Date.parse('2026-10-05T19:00Z'),clientFactory:()=>({leagues:async()=>[],day:async()=>[]}),...opts});await new Promise(r=>server.listen(0,'127.0.0.1',r));try{await run(`http://127.0.0.1:${server.address().port}`);}finally{await new Promise(r=>server.close(r));}}
test('secrets, server source, test fixtures and Git metadata are not served',async()=>{
 await withApp({},async url=>{for(const file of ['/.env','/.env.example','/server/server.cjs','/.git/config','/tests/fixtures/kbo-schedule.json','/package.json'])assert.equal((await fetch(url+file)).status,404,file);});
});
test('local server rejects cross-origin requests and forged hosts',async()=>{
 await withApp({},async url=>{assert.equal((await fetch(url+'/api/status',{headers:{Origin:'https://example.com'}})).status,403);const forged=await new Promise((resolve,reject)=>{http.get(url+'/api/status',{headers:{Host:'example.com'}},r=>{r.resume();resolve(r.statusCode);}).on('error',reject);});assert.equal(forged,403);assert.equal((await fetch(url+'/api/setup',{method:'POST',headers:{'Content-Type':'application/json'},body:'{"key":"TEST_ONLY"}'})).status,403);});
});
test('provider exceptions cannot disclose credentials in API errors',async()=>{
 await withApp({clientFactory:()=>({leagues:async()=>{throw Error('PRIVATE_TEST_SENTINEL');}})},async url=>{const r=await fetch(url+'/api/feed?start=2026-10-05&end=2026-10-06');assert.equal(r.status,502);assert.doesNotMatch(await r.text(),/PRIVATE_TEST_SENTINEL/);});
});
test('new date assets are served and browser security headers stay active',async()=>{
 await withApp({},async url=>{const r=await fetch(url+'/src/dates.js');assert.equal(r.status,200);assert.match(r.headers.get('content-security-policy'),/connect-src 'self'/);assert.equal(r.headers.get('x-frame-options'),'DENY');assert.equal(r.headers.get('referrer-policy'),'no-referrer');assert.match(await r.text(),/WatcherDates/);});
});
