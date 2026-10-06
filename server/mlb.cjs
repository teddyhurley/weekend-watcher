'use strict';
/* MLB-owned schedule adapter. No credential is required. We use it only for
 * MLB-specific phase/context that the broad global feed cannot reliably infer.
 */
const {FeedError}=require('./provider.cjs');
const BASE='https://statsapi.mlb.com/api/v1/schedule';
class MLBFeed {
 constructor({fetchImpl=globalThis.fetch,timeout=15000}={}){this.fetch=fetchImpl;this.timeout=timeout;this.requests=0;}
 async schedule(start,end){
  const url=new URL(BASE);url.searchParams.set('sportId','1');url.searchParams.set('startDate',start);url.searchParams.set('endDate',end);url.searchParams.set('hydrate','probablePitcher');
  this.requests++;let r;
  try{r=await this.fetch(url,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(this.timeout),redirect:'error'});}catch(_){throw new FeedError('network','MLB postseason context could not be reached. The global schedule can still load.');}
  if(r.status===429)throw new FeedError('rate_limit','MLB schedule context is temporarily rate limited.');
  if(!r.ok)throw new FeedError('provider',`MLB schedule context is temporarily unavailable (HTTP ${r.status}).`);
  let j;try{j=await r.json();}catch(_){throw new FeedError('format','MLB returned an unexpected schedule response.');}
  if(!j||!Array.isArray(j.dates))throw new FeedError('format','MLB returned an unexpected schedule response.');
  return j.dates.flatMap(d=>Array.isArray(d.games)?d.games:[]);
 }
}
module.exports={MLBFeed};
