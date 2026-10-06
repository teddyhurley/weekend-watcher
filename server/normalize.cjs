'use strict';
const D=require('../src/catalog.js'),E=require('../src/engine.js'),S=require('../src/scope.js'),A=require('../src/audience.js');
const ALIASES=require('../config/league-aliases.json');
const DAY=86400000,MIN=60000;
const clean=v=>typeof v==='string'?v.trim():'';
const norm=v=>clean(v).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
function sport(v){const n=norm(v);return ({soccer:'Football',football:'Football',australianfootball:'Australian rules',australianrules:'Australian rules',americanfootball:'American football',icehockey:'Ice hockey',rugbyunion:'Rugby',rugbyleague:'Rugby',rugby:'Rugby',mixedmartialarts:'MMA',motorsport:'Motorsport',motorsports:'Motorsport'})[n]||Object.keys(D.groups).find(s=>norm(s)===n)||null;}
// Some provider sport buckets are broader than our catalogue. Never map a whole
// Fighting bucket to MMA: only already-reviewed named competitions may use it.
function sportCompatible(providerSport,league){
 const c=D.catalog[league];if(!c)return false;
 if(sport(providerSport)===c.sport)return true;
 return norm(providerSport)==='fighting'&&['UFC','ONE Championship','PFL','Major boxing cards'].includes(league);
}
function providerGender(value){const v=norm(value);return ['female','women','womens'].includes(v)?'women':['male','men','mens'].includes(v)?'men':null;}
function leagueMap(rows){
 const candidates=new Map();
 for(const[l,c]of Object.entries(D.catalog)){if(!A.eligible(l)||(c.dataProvider&&c.dataProvider!=='TheSportsDB'))continue;for(const a of [l,...(ALIASES[l]||[])]){const k=norm(a);if(!candidates.has(k))candidates.set(k,[]);candidates.get(k).push(l);}}
 const matches={},ambiguous=[],unmapped=[];
 for(const r of rows){
  if(!r||!/^\d+$/.test(String(r.idLeague||''))||!S.competitive({league:r.strLeague,sport:r.strSport}))continue;
  const names=[r.strLeague,...clean(r.strLeagueAlternate).split(/[,;]/)];
  const possible=[...new Set(names.flatMap(n=>candidates.get(norm(n))||[]))].filter(l=>sportCompatible(r.strSport,l));
  const g=providerGender(r.strGender);
  const compatible=possible.filter(l=>!g||D.catalog[l].category==='open'||D.catalog[l].category===g);
  if(compatible.length===1)matches[String(r.idLeague)]=compatible[0];
  else if(compatible.length>1)ambiguous.push({id:String(r.idLeague),name:clean(r.strLeague)});
  else unmapped.push({id:String(r.idLeague),name:clean(r.strLeague),sport:clean(r.strSport)});
 }
 const eligible=A.eligibleNames().filter(l=>D.catalog[l]&&(D.catalog[l].dataProvider||'TheSportsDB')==='TheSportsDB');
 return {matches,ambiguous,unmapped,catalogueMapped:[...new Set(Object.values(matches))],catalogueUnmapped:eligible.filter(l=>!Object.values(matches).includes(l))};
}
function validDate(s){return typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(Date.parse(s+'T00:00:00Z'))&&new Date(s+'T00:00:00Z').toISOString().slice(0,10)===s;}
const shift=(d,n)=>new Date(Date.parse(d+'T00:00:00Z')+n*DAY).toISOString().slice(0,10);
function timestamp(r){
 let s=clean(r.strTimestamp);
 if(!s){const t=clean(r.strTime);if(!validDate(r.dateEvent)||!/^\d{2}:\d{2}(:\d{2})?$/.test(t))return null;s=r.dateEvent+'T'+t;}
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/.test(s))return null;
 if(!validDate(s.slice(0,10))||+s.slice(11,13)>23||+s.slice(14,16)>59||+s.slice(17,19)>59)return null;
 // Provider timestamps without offsets are UTC, not the viewer's or venue's zone.
 if(!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='Z';
 return Number.isFinite(Date.parse(s))?new Date(s).toISOString():null;
}
function duration(r,c,league=''){
 if(validDate(r.dateEventEnd)&&r.dateEventEnd>r.dateEvent)return null;
 if(c.sport==='Cricket'){
  const format=[r.strFormat,r.strEvent,r.strGroup,r.strLeague].filter(Boolean).join(' ');
  if(/\b(test|first.class|county championship)\b/i.test(format))return null;
  if(/\b(odi|one.day|50.over)\b/i.test(format))return 480;
  if(['cricketworldcup','womenscricketworldcup','iccchampionstrophy'].includes(norm(r.strLeague)))return 480;
  if(/\bhundred\b/i.test(format))return 180;
  if(/\b(t20|twenty20)\b/i.test(format)||['IPL','WPL','BBL','WBBL','PSL','SA20','Caribbean Premier League','Women’s Caribbean Premier League','Major League Cricket','ILT20','Bangladesh Premier League'].some(k=>k===league||D.catalog[k]===c))return 240;
  return null; // Unknown format is not a continuous five-day viewing slot.
 }
 return {'Football':120,'American football':210,'Basketball':150,'Baseball':195,'Ice hockey':165,'Australian rules':165,'Rugby':120,'Tennis':150,'Motorsport':180,'MMA':240,'Boxing':240,'Golf':300,'Volleyball':120,'Netball':100,'Darts':120,'Table tennis':90,'Badminton':90,'Futsal':100}[c.sport]||null;
}
function statusOf(r,start,duration,now){
 const s=norm(r.strStatus);
 if(/^(yes|true|1)$/i.test(clean(r.strPostponed))||/postpon|cancel|abandon|suspend/.test(s))return 'unavailable';
 if(/finished|completed|^ft$|^aet$|^ap$|^final$|afterpenalties|afterovertime/.test(s))return 'finished';
 if(/inprogress|live|^1h$|^2h$|^ht$|^q[1-4]$|^p[1-3]$|halftime|[1-4](st|nd|rd|th)(half|quarter|period)/.test(s))return now<=Date.parse(start)+(duration+120)*MIN?'in_progress':'stale_status';
 if(['','ns','notstarted','scheduled','tbd','tba','eventnotstarted','matchnotstarted'].includes(s))return Date.parse(start)>=now?'scheduled':'stale_status';
 return 'unknown_status';
}
const VERIFIED_PHASE_DATES={
 // NBA official 2026-27 key dates: preseason precedes the Oct. 20 regular-season opener.
 // Keep year-specific overrides conservative; unknown seasons are never guessed.
 NBA:{'2026-2027':{preseasonStart:'2026-09-25',regularStart:'2026-10-20'},'2026-27':{preseasonStart:'2026-09-25',regularStart:'2026-10-20'},'2026':{preseasonStart:'2026-09-25',regularStart:'2026-10-20'}}
};
function seasonPhaseOverride(league,start,season=''){
 const rules=VERIFIED_PHASE_DATES[league];if(!rules||!start)return null;
 const rule=rules[clean(season)]||rules[start.slice(0,4)];if(!rule)return null;
 const date=start.slice(0,10);if(date>=rule.preseasonStart&&date<rule.regularStart)return'preseason';return null;
}
function stageOf(r,league='',start=''){
 const round=clean(r.strRound||r.strStage||r.strGroup).toLowerCase(),all=[r.strRound,r.strStage,r.strGroup,r.strEvent,r.strDescription].map(clean).join(' ').toLowerCase();
 if(/^(grand final|final|championship final)$/.test(round))return 'final';
 if(/^semi[- ]?finals?$/.test(round))return 'semifinal';
 if(/^(playoffs?|postseason|quarter[- ]?finals?)$/.test(round))return 'postseason';
 if(/pre[- ]?season/.test(all))return 'preseason';
 if(/\b(friendl(?:y|ies)|exhibition|testimonial|all[- ]star)\b/.test(all))return 'exhibition';
 return seasonPhaseOverride(league,start,clean(r.strSeason))||'unknown';
}
function normalizeEvent(r,mapping,now=Date.now(),fetchedAt=new Date(now).toISOString()){
 if(!r||!/^\d+$/.test(String(r.idEvent||'')))return {skip:'invalid_id'};
 // Provider event titles can contain player/team strings that accidentally resemble wrestling acronyms.
 // Classify scripted entertainment at the LEAGUE level, not by fuzzy matching the event title.
 const exclusion=S.exclusionReason({league:r.strLeague,sport:r.strSport});if(exclusion)return {skip:exclusion};
 const league=mapping[String(r.idLeague)],c=D.catalog[league];if(!c)return {skip:'provider_outside_catalogue'};
 if(!sportCompatible(r.strSport,league))return {skip:'sport_mismatch'};
 const start=timestamp(r);if(!start)return {skip:'missing_or_invalid_time'};
 const mins=duration(r,c,league);if(!mins)return {skip:'session_or_duration_review'};
 const status=statusOf(r,start,mins,now);if(!['scheduled','in_progress'].includes(status))return {skip:status};
 const ps=[['Home','home'],['Away','away']].flatMap(([p,side])=>clean(r['str'+p+'Team'])?[{id:'tsdb-'+(r['id'+p+'Team']||`${r.idEvent}-${side}`),name:clean(r['str'+p+'Team'])}]:[]);
 const name=clean(r.strEvent)||ps.map(p=>p.name).join(' vs ');if(!name)return {skip:'missing_title'};
 const category=providerGender(r.strGender)||c.category;
 if(c.category!=='open'&&category!==c.category)return {skip:'category_mismatch'};
 const stage=stageOf(r,league,start);if(['preseason','exhibition'].includes(stage))return {skip:'exhibition'};const sourceUrl=`https://www.thesportsdb.com/event/${r.idEvent}`,tagEvidence=[];
 if(stage==='final')tagEvidence.push({id:'championship',detail:'The provider explicitly labels this round as a final.'});
 if(stage==='postseason')tagEvidence.push({id:'playoffs',detail:'The provider explicitly labels this round as a playoff or knockout round.'});
 // Do not call every final an elimination game or infer relegation/rivalry from ratings.
 for(const e of tagEvidence)Object.assign(e,{status:'verified',sourceUrl,checkedAt:fetchedAt,validUntil:new Date(Math.max(now,Date.parse(start))+DAY).toISOString(),isDemo:false});
 const providerCompetition=clean(r.strLeague)||league;
 const headline=stage==='final'?'A title on the line.':stage==='postseason'?'The knockout stage.':`${providerCompetition} on the calendar.`;
 const g={id:'tsdb-'+r.idEvent,providerId:String(r.idEvent),providerLeagueId:String(r.idLeague),providerCompetition,league,sport:c.sport,competition:{...c},countries:c.countries||[],category,start,duration:mins,durationEstimated:true,participants:ps,status,stage,isDemo:false,tagEvidence,watchOptions:[],source:{provider:'TheSportsDB',url:sourceUrl,fetchedAt,providerStatus:clean(r.strStatus)},venue:clean(r.strVenue),season:clean(r.strSeason),promo:{heading:headline,body:ps.length===2?`${ps[0].name} take on ${ps[1].name}${clean(r.strVenue)?' at '+clean(r.strVenue):''}. ${stage==='unknown'?'Story context is still being verified.':'See the fixture details for the occasion.'}`:`${name}. Timing is provider-supplied; viewing duration is an estimate.`}};
 if(ps.length!==2)g.title=name;
 if(stage==='final')g.noteworthy={score:95,reason:'Provider-confirmed final'};
 if(['MLB','NPB'].includes(league))g.keyPeople={label:'Probable pitchers',players:[]};
 if(['NHL','NBA','WNBA'].includes(league))g.keyPeople={label:'Top scorers',players:[]};
 return E.competitionAllowed(g)?{game:g}:{skip:'out_of_scope'};
}
module.exports={sportCompatible,providerGender,leagueMap,normalizeEvent,timestamp,duration,statusOf,stageOf,seasonPhaseOverride,validDate,shift,norm,sport};
