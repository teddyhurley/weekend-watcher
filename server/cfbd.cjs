'use strict';
/* CollegeFootballData adapter. Optional secondary provider for FBS schedules,
 * official-poll snapshots. Key is server-side only.
 */
const {FeedError}=require('./provider.cjs');
const BASE='https://api.collegefootballdata.com';
class CollegeFootballData {
 constructor(key,{fetchImpl=globalThis.fetch,timeout=15000}={}){
  if(typeof key!=='string'||!key.trim()||/\s/.test(key)||key.length>512)throw new FeedError('key','Enter a valid CollegeFootballData API key.');
  this.key=key.trim();this.fetch=fetchImpl;this.timeout=timeout;this.requests=0;
 }
 async request(path,params={}){
  const url=new URL(BASE+path);for(const[k,v]of Object.entries(params))if(v!==undefined&&v!==null&&v!=='')url.searchParams.set(k,String(v));
  let r;this.requests++;
  try{r=await this.fetch(url,{headers:{Authorization:`Bearer ${this.key}`,Accept:'application/json'},signal:AbortSignal.timeout(this.timeout),redirect:'error'});}
  catch(_){throw new FeedError('network','College football context could not be reached. The main sports schedule can still load.');}
  if(r.status===401||r.status===403)throw new FeedError('authentication','CollegeFootballData rejected the API key. Check the free key and try again.');
  if(r.status===429)throw new FeedError('rate_limit','CollegeFootballData quota is temporarily exhausted. NCAA context will be withheld rather than guessed.');
  if(!r.ok)throw new FeedError('provider',`College football context is temporarily unavailable (HTTP ${r.status}).`);
  let j;try{j=await r.json();}catch(_){throw new FeedError('format','CollegeFootballData returned an unexpected response.');}
  if(!Array.isArray(j))throw new FeedError('format','CollegeFootballData returned an unexpected response.');
  return j;
 }
 calendar(year){return this.request('/calendar',{year});}
 games(year,week,seasonType='regular'){return this.request('/games',{year,week,seasonType,classification:'fbs'});}
 rankings(year,week,seasonType='regular'){return this.request('/rankings',{year,week,seasonType});}
}
module.exports={CollegeFootballData};
