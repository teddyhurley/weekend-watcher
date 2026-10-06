/* Shared event taxonomy. Tags need evidence; rating strength is not an official ranking. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.WatcherTags=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const DEFINITIONS=[
  {id:'rivalry',label:'Rivalry',group:'Story'},
  {id:'playoffs',label:'Playoffs',group:'Stakes'},
  {id:'championship',label:'Championship',group:'Stakes'},
  {id:'elimination',label:'Elimination game',group:'Stakes'},
  {id:'ranked-opponents',label:'Ranked matchup',group:'Matchup'},
  {id:'title-race',label:'Title race',group:'Stakes'},
  {id:'playoff-race',label:'Playoff race',group:'Stakes'},
  {id:'relegation-battle',label:'Relegation battle',group:'Stakes'},
  {id:'former-player',label:'Former player',group:'Story'},
  {id:'former-coach',label:'Former coach',group:'Story'},
  {id:'star-players',label:'Star players',group:'Matchup'},
  {id:'rematch',label:'Rematch',group:'Story'},
  {id:'if-necessary',label:'If necessary',group:'Status'}
 ];
 const IDS=new Set(DEFINITIONS.map(t=>t.id));
 const byId=Object.fromEntries(DEFINITIONS.map(t=>[t.id,t]));
 function verifiedEvidence(e,game){
  if(!e||typeof e!=='object'||!e.detail)return false;
  if(game.isDemo===true)return e.isDemo===true;
  if(e.isDemo===true||e.status!=='verified'||!e.sourceUrl||!e.checkedAt)return false;
  try{if(new URL(e.sourceUrl).protocol!=='https:')return false;}catch(_){return false;}
  const checked=Date.parse(e.checkedAt),expires=Date.parse(e.validUntil),start=Date.parse(game.start);
  return Number.isFinite(checked)&&Number.isFinite(expires)&&Number.isFinite(start)&&checked<=start&&expires>=start;
 }
 function forGame(game){
  const result=[];
  for(const e of game.tagEvidence||[]){
   if(!IDS.has(e.id)||!verifiedEvidence(e,game))continue;
   if(e.id==='ranked-opponents'){
    if(!e.rankingSystem||!Number.isInteger(e.cutoff)||e.cutoff<1||!Array.isArray(e.ranks)||e.ranks.length!==2||e.ranks.some(r=>!Number.isInteger(r)||r<1||r>e.cutoff))continue;
   }
   if(e.id==='relegation-battle'){
    const ids=(game.participants||[game.away,game.home].filter(Boolean)).map(p=>p.id);
    const asOf=Date.parse(e.standingsAsOf),start=Date.parse(game.start);
    if(game.competition?.relegation!==true||e.relegationEnabled!==true||e.riskStatus!=='at-risk'||!Number.isInteger(e.remainingFixtures)||e.remainingFixtures<1||!Array.isArray(e.riskTeamIds)||!e.riskTeamIds.length||e.riskTeamIds.some(id=>!ids.includes(id))||!Number.isFinite(asOf)||asOf>start)continue;
   }
   if(['former-player','former-coach'].includes(e.id)){
    const ids=(game.participants||[game.away,game.home].filter(Boolean)).map(p=>p.id);
    if(!e.person||e.formerTeamId===e.currentTeamId||!ids.includes(e.formerTeamId)||!ids.includes(e.currentTeamId))continue;
   }
   if(!result.includes(e.id))result.push(e.id);
  }
  return DEFINITIONS.map(t=>t.id).filter(id=>result.includes(id));
 }
 function normalize(values){return [...new Set((Array.isArray(values)?values:[]).filter(x=>IDS.has(x)))];}
 function matches(game,prefs={}){
  const selected=normalize(prefs.tags);if(!selected.length)return true;
  const tags=new Set(forGame(game));return prefs.tagMode==='all'?selected.every(id=>tags.has(id)):selected.some(id=>tags.has(id));
 }
 return {DEFINITIONS,IDS,byId,forGame,matches,normalize,verifiedEvidence};
});
