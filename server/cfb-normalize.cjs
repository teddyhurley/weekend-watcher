'use strict';
const D=require('../src/catalog.js'),E=require('../src/engine.js');
const DAY=86400000,MIN=60000;
const AP_URL='https://apnews.com/hub/ap-top-25-college-football-poll';
const CFP_URL='https://collegefootballplayoff.com/rankings.aspx';
const clean=v=>typeof v==='string'?v.trim():'';
const norm=v=>clean(v).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
function pollName(p){return clean(p?.poll||p?.name||p?.pollType||p?.type);}
function pollRanks(p){const rows=Array.isArray(p?.ranks)?p.ranks:Array.isArray(p?.rankings)?p.rankings:[];return rows.map(r=>({rank:Number(r.rank||r.ranking),team:clean(r.school||r.team||r.name),conference:clean(r.conference)})).filter(r=>Number.isInteger(r.rank)&&r.rank>0&&r.rank<=25&&r.team);}
function choosePoll(snapshots){
 const polls=(Array.isArray(snapshots)?snapshots:[]).flatMap(s=>Array.isArray(s.polls)?s.polls.map(p=>({raw:p,name:pollName(p),ranks:pollRanks(p),season:Number(s.season)||null,week:Number(s.week),seasonType:clean(s.seasonType)})):[]).filter(p=>p.ranks.length);
 const cfp=polls.find(p=>/college football playoff|playoff committee|\bcfp\b/i.test(p.name));
 const ap=polls.find(p=>/associated press|\bap\b.*top\s*25|^ap top 25$/i.test(p.name));
 const picked=cfp||ap;if(!picked)return null;
 return {name:cfp?'College Football Playoff':'AP Top 25',short:cfp?'CFP':'AP',cutoff:25,sourceUrl:cfp?CFP_URL:AP_URL,ranks:picked.ranks,snapshotWeek:Number.isInteger(picked.week)?picked.week:null,snapshotSeason:picked.season,seasonType:picked.seasonType};
}
function lookupRank(poll,team){if(!poll)return null;const n=norm(team);if(!n)return null;const exact=poll.ranks.filter(r=>norm(r.team)===n);return exact.length===1?exact[0]:null;}
function evidenceBase(id,detail,url,fetchedAt,start){return {id,detail,status:'verified',sourceUrl:url,checkedAt:fetchedAt,validUntil:new Date(Math.max(Date.parse(start),Date.parse(fetchedAt))+DAY).toISOString(),isDemo:false};}
function stage(row){const p=row?.playoff||{},round=clean(p.round||p.roundName).toLowerCase();if(p.competition!=='cfp')return'unknown';if(round==='championship'||/championship/.test(round))return'final';if(/semi/.test(round))return'semifinal';return'postseason';}
function status(row,start,now){if(row?.completed===true)return'finished';const t=Date.parse(start);if(!Number.isFinite(t))return'invalid';if(t>=now)return'scheduled';return now<=t+330*MIN?'in_progress':'stale_status';}
function normalizeGame(row,poll,_unusedMediaRows=[],now=Date.now(),fetchedAt=new Date(now).toISOString()){
 const c=D.catalog['NCAA FBS'];if(!c||!row||!Number.isFinite(Number(row.id)))return{skip:'cfbd_invalid_id'};
 if(!['fbs',null,''].includes(row.homeClassification??'')&&!['fbs',null,''].includes(row.awayClassification??''))return{skip:'cfbd_not_fbs'};
 const start=clean(row.startDate);if(!Number.isFinite(Date.parse(start)))return{skip:'cfbd_missing_time'};
 const st=status(row,start,now);if(!['scheduled','in_progress'].includes(st))return{skip:'cfbd_'+st};
 const home=clean(row.homeTeam),away=clean(row.awayTeam);if(!home||!away)return{skip:'cfbd_missing_teams'};
 const ps=[{id:`cfbd-team-${row.homeId||norm(home)}`,name:home},{id:`cfbd-team-${row.awayId||norm(away)}`,name:away}];
 const tagEvidence=[],r1=lookupRank(poll,home),r2=lookupRank(poll,away),src='https://collegefootballdata.com/';
 if(r1)ps[0].rank=r1.rank;
 if(r2)ps[1].rank=r2.rank;
 if(r1&&r2){
  const detail=`#${r1.rank} ${home} and #${r2.rank} ${away} are both ranked in the ${poll.name}${Number.isInteger(poll.snapshotWeek)?` (latest available poll, week ${poll.snapshotWeek})`:''}.`;
  tagEvidence.push({...evidenceBase('ranked-opponents',detail,poll.sourceUrl,fetchedAt,start),rankingSystem:poll.name,rankingSource:poll.short,cutoff:25,ranks:[r1.rank,r2.rank],rankings:[{team:home,rank:r1.rank},{team:away,rank:r2.rank}]});
 }
 const playoff=row.playoff||{},round=clean(playoff.round||playoff.roundName).toLowerCase();
 if(playoff.competition==='cfp')tagEvidence.push(evidenceBase('playoffs','CollegeFootballData identifies this fixture as part of the College Football Playoff.',CFP_URL,fetchedAt,start));
 if(round==='championship'||/championship/.test(round))tagEvidence.push(evidenceBase('championship','This is the College Football Playoff championship game.',CFP_URL,fetchedAt,start));
 else if(playoff.competition==='cfp'&&/(first.?round|quarter|semi)/.test(round))tagEvidence.push(evidenceBase('elimination','This College Football Playoff round is single-elimination: the loser is out.',CFP_URL,fetchedAt,start));
 const sg=stage(row),ranked=r1&&r2,heading=ranked?`#${r1.rank} vs #${r2.rank}. Clear your evening.`:playoff.competition==='cfp'?'Win and move on.':'College football, worth checking.';
 const g={id:`cfbd-${row.id}`,providerId:`cfbd-${row.id}`,providerEventId:String(row.id),providerCompetition:'NCAA FBS',league:'NCAA FBS',sport:'American football',competition:{...c},countries:['US'],category:'men',start:new Date(start).toISOString(),duration:210,durationEstimated:true,participants:ps,status:st,stage:sg,isDemo:false,tagEvidence,source:{provider:'CollegeFootballData',url:src,fetchedAt,providerStatus:row.completed?'completed':'scheduled'},venue:clean(row.venue),season:String(row.season||''),week:Number(row.week)||null,promo:{heading,body:`${away} at ${home}. ${ranked?`${poll.name} rankings are attached as sourced context.`:'Rankings are shown only when both teams appear in the active top 25.'}`}};
 if(ranked){const avg=(r1.rank+r2.rank)/2;g.noteworthy={score:Math.max(85,Math.round(101-avg*1.3)),reason:`${poll.name} ranked matchup`};}
 if(playoff.competition==='cfp')g.noteworthy={score:round.includes('championship')?100:96,reason:'College Football Playoff'};
 return E.competitionAllowed(g)?{game:g}:{skip:'cfbd_out_of_scope'};
}
function weeksForRange(calendars,start,end){const lo=Date.parse(start+'T00:00:00Z')-DAY,hi=Date.parse(end+'T23:59:59Z')+DAY;const out=[];for(const r of calendars||[]){const a=Date.parse(r.startDate),b=Date.parse(r.endDate);if(!Number.isFinite(a)||!Number.isFinite(b)||b<lo||a>hi)continue;const season=Number(r.season),week=Number(r.week),seasonType=clean(r.seasonType)||'regular';if(Number.isInteger(season)&&Number.isInteger(week)&&week>=0&&!out.some(x=>x.season===season&&x.week===week&&x.seasonType===seasonType))out.push({season,week,seasonType});}return out;}
module.exports={choosePoll,lookupRank,normalizeGame,weeksForRange,norm,stage,status};
