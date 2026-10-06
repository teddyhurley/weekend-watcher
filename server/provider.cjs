'use strict';
/* TheSportsDB adapter. Secrets travel only server-to-provider over HTTPS.
 * v2 uses X-API-KEY. v1 day schedules require a key in the URL; never log URLs/errors.
 */
const BASE='https://www.thesportsdb.com/api';
class FeedError extends Error { constructor(code,message){super(message);this.code=code;} }
class SportsDB {
 constructor(key,{fetchImpl=globalThis.fetch,timeout=15000,minInterval=700}={}) {
  if(typeof key!=='string'||!/^[-A-Za-z0-9_]{3,160}$/.test(key))throw new FeedError('key','Enter the API key from your Premium profile.');
  this.key=key;this.fetch=fetchImpl;this.timeout=timeout;this.interval=minInterval;this.tail=Promise.resolve();this.cooldown=0;
 }
 async request(version,path,params={}) {
  // Serialize all outbound requests; keep comfortably below the published premium rate limit.
  const operation=this.tail.then(async()=>{
   if(Date.now()<this.cooldown)throw new FeedError('rate_limit','Provider rate limit reached. Try again in a minute.');
   const url=new URL(version===2?`${BASE}/v2/json/${path}`:`${BASE}/v1/json/${this.key}/${path}`);
   for(const[k,v]of Object.entries(params))url.searchParams.set(k,v);
   let response;
   try{response=await this.fetch(url,{headers:version===2?{'X-API-KEY':this.key,Accept:'application/json'}:{Accept:'application/json'},signal:AbortSignal.timeout(this.timeout),redirect:'error'});}
   catch(_){throw new FeedError('network','TheSportsDB could not be reached. Check your connection and try again.');}
   if(response.status===401||response.status===403)throw new FeedError('authentication','The provider rejected the API key. Check Premium activation and the key on your profile.');
   if(response.status===429){this.cooldown=Date.now()+60000;throw new FeedError('rate_limit','Provider rate limit reached. Try again in a minute.');}
   if(!response.ok)throw new FeedError('provider',`Sports data is temporarily unavailable (HTTP ${response.status}).`);
   let data;try{data=await response.json();}catch(_){throw new FeedError('format','The provider returned an unexpected response. No fixtures were substituted.');}
   if(!data||typeof data!=='object')throw new FeedError('format','The provider returned an unexpected response.');
   return data;
  });
  this.tail=operation.catch(()=>{}).then(()=>new Promise(r=>setTimeout(r,this.interval)));
  return operation;
 }
 async leagues(){const j=await this.request(2,'all/leagues');return rows(j,['all','leagues'],false);}
 async day(date,leagueId=''){const params={d:date};if(leagueId){if(!/^\d+$/.test(String(leagueId)))throw new FeedError('id','Invalid league.');params.l=String(leagueId);}const j=await this.request(1,'eventsday.php',params);return rows(j,['events'],true);}
}
function rows(data,names,allowNull){for(const name of names){if(Array.isArray(data[name]))return data[name];if(allowNull&&data[name]===null)return [];}throw new FeedError('format','The provider response was not recognised. No fixtures were substituted.');}
module.exports={SportsDB,FeedError,rows};
