'use strict';
const D=require('../src/catalog.js'),E=require('../src/engine.js');
const DAY=86400000,MIN=60000;
const POSTSEASON=new Set(['F','D','L','W']);
const MLB_POST='https://www.mlb.com/postseason';
const MLB_SCHEDULE='https://www.mlb.com/schedule';
const clean=v=>typeof v==='string'?v.trim():'';
function status(row,start,now){
 const detail=clean(row?.status?.detailedState).toLowerCase(),abstract=clean(row?.status?.abstractGameState).toLowerCase();
 if(/postpon|cancel|suspend/.test(detail))return'unavailable';
 if(abstract==='final'||/final|completed/.test(detail))return'finished';
 if(abstract==='live'||/in progress|warmup|delayed/.test(detail))return now<=Date.parse(start)+420*MIN?'in_progress':'stale_status';
 if(abstract==='preview'||/scheduled|pre-game|pre game|tbd/.test(detail)||!detail)return Date.parse(start)>=now?'scheduled':'stale_status';
 return'unknown_status';
}
function evidence(id,detail,fetchedAt,start){return{id,detail,status:'verified',sourceUrl:MLB_POST,checkedAt:fetchedAt,validUntil:new Date(Math.max(Date.parse(start),Date.parse(fetchedAt))+DAY).toISOString(),isDemo:false};}
function team(side,label){const t=side?.team||{},name=clean(t.name)||clean(t.teamName)||label;return{id:`mlb-team-${t.id||name.toLowerCase().replace(/[^a-z0-9]/g,'-')}`,name};}
function probable(side,teamId){const p=side?.probablePitcher;if(!p?.fullName)return null;return{name:clean(p.fullName),teamId,status:'probable',role:'Probable pitcher',statLine:'Probable starter · stats not yet enriched'};}
function normalizeGame(row,now=Date.now(),fetchedAt=new Date(now).toISOString()){
 const c=D.catalog.MLB,id=Number(row?.gamePk),start=clean(row?.gameDate);if(!c||!Number.isFinite(id)||!Number.isFinite(Date.parse(start)))return{skip:'mlb_invalid'};
 const st=status(row,start,now);if(!['scheduled','in_progress'].includes(st))return{skip:'mlb_'+st};
 const type=clean(row.gameType).toUpperCase(),post=POSTSEASON.has(type),series=clean(row.seriesDescription)||clean(row.description),gameNo=Number(row.seriesGameNumber),gamesInSeries=Number(row.gamesInSeries);
 const conditional=/^(y|yes|true|1)$/i.test(String(row.ifNecessary||''))||/if necessary/i.test(clean(row.description));
 let stage=type==='S'?'preseason':post?'postseason':'regular';if(type==='W')stage='final';if(stage==='preseason')return{skip:'mlb_exhibition'};
 const away=team(row.teams?.away,'Away TBD'),home=team(row.teams?.home,'Home TBD'),tagEvidence=[];
 if(post)tagEvidence.push(evidence('playoffs',`${series||'MLB postseason'} is part of the MLB postseason.`,fetchedAt,start));
 if(conditional)tagEvidence.push(evidence('if-necessary','MLB lists this game as if necessary; it will be played only if the series still requires it.',fetchedAt,start));
 const guaranteedLastGame=post&&Number.isInteger(gameNo)&&Number.isInteger(gamesInSeries)&&gamesInSeries>1&&gameNo===gamesInSeries;
 if(guaranteedLastGame)tagEvidence.push(evidence('elimination',`${series||'This postseason series'} Game ${gameNo} is the final possible game of a best-of-${gamesInSeries} series: if played, the loser is eliminated.`,fetchedAt,start));
 if(type==='W')tagEvidence.push(evidence('championship','This game is part of the World Series, MLB’s championship series.',fetchedAt,start));
 const heading=guaranteedLastGame?(conditional?'WIN OR GO HOME — IF IT GETS HERE.':'WIN OR GO HOME.'):type==='W'?'THE WORLD SERIES.':post?`${series||'October baseball'}.`:'MLB on the calendar.';
 const players=[probable(row.teams?.away,away.id),probable(row.teams?.home,home.id)].filter(Boolean);
 const g={id:`mlb-${id}`,providerId:String(id),providerEventId:String(id),providerCompetition:series||'MLB',league:'MLB',sport:'Baseball',competition:{...c},countries:['US'],category:'men',start:new Date(start).toISOString(),duration:210,durationEstimated:true,participants:[away,home],status:st,stage,isDemo:false,conditional,tagEvidence,watchOptions:[],source:{provider:'MLB',url:post?MLB_POST:MLB_SCHEDULE,fetchedAt,providerStatus:clean(row?.status?.detailedState)},venue:clean(row?.venue?.name),season:String(row.season||''),series:{description:series,gameNumber:Number.isInteger(gameNo)?gameNo:null,gamesInSeries:Number.isInteger(gamesInSeries)?gamesInSeries:null,conditional},promo:{heading,body:`${away.name} at ${home.name}${series?` · ${series}${Number.isInteger(gameNo)?` Game ${gameNo}`:''}`:''}.${conditional?' This game is listed if necessary.':''}`}};
 if(players.length)g.keyPeople={label:'Probable pitchers',type:'probable_starters',players,source:'MLB'};else g.keyPeople={label:'Probable pitchers',type:'probable_starters',players:[],source:'MLB'};
 if(type==='W')g.noteworthy={score:100,reason:'World Series'};else if(guaranteedLastGame)g.noteworthy={score:98,reason:'MLB elimination game'};else if(post)g.noteworthy={score:88,reason:series||'MLB postseason'};
 return E.competitionAllowed(g)?{game:g}:{skip:'mlb_out_of_scope'};
}
module.exports={normalizeGame,status,POSTSEASON};
