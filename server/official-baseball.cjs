'use strict';
// Public league schedules. Requests never carry any of the user's API keys.
const N=require('./normalize.cjs'), D=require('../src/catalog.js');
const KBO_URL='https://www.koreabaseball.com/Schedule/Schedule.aspx';
const KBO_TEAMS={'LG':'LG Twins','롯데':'Lotte Giants','KIA':'Kia Tigers','NC':'NC Dinos','SSG':'SSG Landers','삼성':'Samsung Lions','한화':'Hanwha Eagles','KT':'KT Wiz','kt':'KT Wiz','두산':'Doosan Bears','키움':'Kiwoom Heroes'};
const NPB_TEAMS={'阪神':'Hanshin Tigers','ヤクルト':'Tokyo Yakult Swallows','巨人':'Yomiuri Giants','DeNA':'Yokohama DeNA BayStars','横浜DeNA':'Yokohama DeNA BayStars','広島':'Hiroshima Toyo Carp','中日':'Chunichi Dragons','ソフトバンク':'Fukuoka SoftBank Hawks','日本ハム':'Hokkaido Nippon-Ham Fighters','西武':'Saitama Seibu Lions','ロッテ':'Chiba Lotte Marines','楽天':'Tohoku Rakuten Golden Eagles','オリックス':'Orix Buffaloes'};
const text=v=>String(v??'').replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const field=(html,cls)=>text(html.match(new RegExp('<(?:div|p|span)[^>]*class=["\'][^"\']*\\b'+cls+'\\b[^"\']*["\'][^>]*>([\\s\\S]*?)<\\/(?:div|p|span)>','i'))?.[1]);
const date=(year,month,day)=>`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
function startTime(day,time){return /^\d{2}:\d{2}$/.test(time)&&+time.slice(0,2)<24&&+time.slice(3)<60?new Date(day+'T'+time+':00+09:00').toISOString():null;}
function parseKBO(j,year,month,series='regular'){
 if(!j||!Array.isArray(j.rows))throw Error('KBO schedule format changed.');
 const rows=[];let day=null;
 for(const entry of j.rows){
  if(!Array.isArray(entry.row))throw Error('KBO schedule rows changed.');
  const cells=entry.row,cell=cls=>cells.find(x=>x.Class===cls)?.Text||'',d=text(cell('day')).match(/(\d{2})\.(\d{2})/);
  if(d)day=date(year,+d[1],+d[2]);
  const play=cell('play');if(!play)continue;
  if(!day||+day.slice(5,7)!==+month||!N.validDate(day))throw Error('KBO returned a different schedule month.');
  const teams=[...play.replace(/<em\b[^>]*>[\s\S]*?<\/em>/gi,'').matchAll(/<span[^>]*>(.*?)<\/span>/g)].map(m=>text(m[1]));
  const away=KBO_TEAMS[teams[0]],home=KBO_TEAMS[teams[1]];
  if(!away||!home)throw Error('KBO returned an unrecognized team.');
  const all=cells.map(x=>text(x.Text)).join(' '),time=text(cell('time')).match(/\b\d{2}:\d{2}\b/)?.[0];
  const unavailable=/취소|순연|연기|중단/.test(all),finished=text(cell('relay'))==='리뷰'||/class=["'](?:win|lose)["']/.test(play)||/\d+\s*(?:<\/span>\s*)?<span[^>]*>vs/.test(play);
  const gameId=cell('relay').match(/gameId=([A-Za-z0-9]+)/)?.[1]||`${day}-${teams[0]}-${teams[1]}-${time||'tbd'}`;
  const status=unavailable?'unavailable':finished?'finished':'scheduled';
  rows.push({id:'kbo-'+gameId,league:'KBO',date:day,start:startTime(day,time),away,home,status,stage:series==='postseason'?'postseason':'regular',venue:text(cells[cells.length-2]?.Text),sourceUrl:KBO_URL+`?year=${year}&month=${month}`,providerStatus:unavailable?text(cells[cells.length-1]?.Text):status});
 }
 return rows;
}
function parseNPB(html,year,month){
 if(!html.includes('id="schedule_detail"')||!html.includes(`${year}年`))throw Error('NPB schedule format or year changed.');
 const rows=[];
 for(const m of html.matchAll(/<tr\b[^>]*id="date(\d{2})(\d{2})"[^>]*>([\s\S]*?)<\/tr>/g)){
  const day=date(year,+m[1],+m[2]),body=m[3],all=text(body);if(+m[1]!==+month||!N.validDate(day))throw Error('NPB returned a different schedule month.');
  if(/予備日/.test(all))continue;
  const h=field(body,'team1'),a=field(body,'team2'),label=field(body,'commentLong');
  const home=NPB_TEAMS[h],away=NPB_TEAMS[a],division=label.startsWith('セ')?'Central':label.startsWith('パ')?'Pacific':null;
  const phase=/CSファースト/.test(label)?'First Stage':/CSファイナル/.test(label)?'Final Stage':/日本シリーズ/.test(label)?'Japan Series':null;
  if(!home&&!away&&!phase){if(h||a)throw Error('NPB returned an unrecognized team.');continue;}
  if((h||a)&&(!home||!away))throw Error('NPB returned an unrecognized team.');
  const state=field(body,'state'),status=/中止|延期|ノーゲーム/.test(all)?'unavailable':/終了|コールド/.test(state)||/^\d+$/.test(field(body,'score1'))?'finished':'scheduled';
  const start=startTime(day,field(body,'time').match(/\b\d{1,2}:\d{2}\b/)?.[0]?.padStart(5,'0'));
  rows.push({id:`npb-${day}-${division||home||'Japan'}-${phase||away}`,league:'NPB',date:day,start,home,away,division,phase,title:phase?`${division?division+' League · ':''}${phase==='Japan Series'?'Japan Series':'Climax Series · '+phase}`:null,status,stage:phase?'postseason':'regular',venue:field(body,'place'),sourceUrl:`https://npb.jp/games/${year}/schedule_${String(month).padStart(2,'0')}_detail.html`,providerStatus:state||status});
 }
 if(!rows.length&&!/id="date\d{4}"/.test(html))throw Error('NPB schedule rows are missing.');
 return rows;
}
function parseClimax(html,year,division){
 if(!html.includes('id="schedule_detail"')||!html.includes(`${year}年度`))throw Error('NPB playoff schedule format changed.');
 const rows=[];
 for(const m of html.matchAll(/<tr\b[^>]*id="date(\d{2})(\d{2})"[^>]*>([\s\S]*?)<\/tr>/g)){
  const body=text(m[3]);if(/予備日/.test(body))continue;
  const n=body.match(/(ファースト|ファイナル)ステージ\s*第(\d+)戦/);if(!n)continue;
  rows.push({date:date(year,+m[1],+m[2]),division,phase:n[1]==='ファースト'?'First Stage':'Final Stage',gameNumber:+n[2],sourceUrl:`https://npb.jp/games/${year}/schedule_climax_${division==='Central'?'cl':'pl'}.html`});
 }
 if(!rows.length)throw Error('NPB playoff rounds could not be read.');return rows;
}
function parseCentralTimes(html,year,month){
 // The club's dated first-stage calendar is supplementary evidence for a league
 // slot, never evidence that the club has qualified or will host it.
 if(!html.includes(`/game/schedule/${year}/${String(month).padStart(2,'0')}`))throw Error('Club calendar month changed.');
 const rows=[];
 for(const block of html.split(/<div class="item item__status--game/).slice(1)){
  const d=field(block,'item--date-day').match(/(\d+)\/(\d+)/),label=field(block,'free_text');
  if(!d||+d[1]!==+month||label!=='CSファーストステージ'||/中止|予備日/.test(text(block)))continue;
  const day=date(year,+d[1],+d[2]),start=startTime(day,field(block,'item--date-time').match(/\d{2}:\d{2}/)?.[0]);
  if(start)rows.push({date:day,start,sourceUrl:`https://www.baystars.co.jp/game/schedule/${year}/${String(month).padStart(2,'0')}`});
 }
 return rows;
}
const months=(start,end)=>{const out=[];for(let d=start.slice(0,7)+'-01';d<=end;){out.push([+d.slice(0,4),+d.slice(5,7)]);const next=new Date(d+'T00:00:00Z');next.setUTCMonth(next.getUTCMonth()+1);d=next.toISOString().slice(0,10);}return out;};
class OfficialBaseballFeed{
 constructor({fetchImpl=globalThis.fetch,timeout=15000}={}){this.fetch=fetchImpl;this.timeout=timeout;this.requests=0;}
 async request(url,options={}){
  this.requests++;const r=await this.fetch(url,{...options,redirect:'error',signal:AbortSignal.timeout(this.timeout)});
  if(!r.ok)throw Error(`Schedule request failed (HTTP ${r.status}).`);
  const raw=await r.text();if(raw.length>3000000)throw Error('Schedule response too large.');return raw;
 }
 async schedule(start,end){
  const records=[],issues=[],sources=[];
  const attempt=async(provider,url,work)=>{try{const result=await work();sources.push({provider,url,records:result.length});return result;}catch(_){issues.push({provider,message:`${provider} official schedule could not be read; unverified status conflicts remain excluded.`,url});return[];}};
  for(const [year,month] of months(start,end)){
   // Each source is independent, so a failed KBO call cannot suppress NPB.
   const url=`https://npb.jp/games/${year}/schedule_${String(month).padStart(2,'0')}_detail.html`;
   const [regular,post,npb]=await Promise.all([
    ...['0,9,6','3,4,5,7'].map((series,i)=>attempt('KBO',KBO_URL,async()=>parseKBO(JSON.parse(await this.request('https://www.koreabaseball.com/ws/Schedule.asmx/GetScheduleList',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Referer':KBO_URL,'X-Requested-With':'XMLHttpRequest'},body:new URLSearchParams({leId:'1',srIdList:series,seasonId:String(year),gameMonth:String(month).padStart(2,'0'),teamId:''}).toString()})),year,month,i?'postseason':'regular'))),
    attempt('NPB',url,async()=>parseNPB(await this.request(url),year,month))
   ]);
   for(const division of ['Central','Pacific']){
    if(month<9||month>11)continue;
    const roundUrl=`https://npb.jp/games/${year}/schedule_climax_${division==='Central'?'cl':'pl'}.html`;
    const rounds=await attempt('NPB',roundUrl,async()=>parseClimax(await this.request(roundUrl),year,division));
    for(const r of npb){
     const teamDivision=r.home?(['Hanshin Tigers','Tokyo Yakult Swallows','Yomiuri Giants','Yokohama DeNA BayStars','Hiroshima Toyo Carp','Chunichi Dragons'].includes(r.home)?'Central':'Pacific'):null;
     const match=rounds.find(x=>x.date===r.date&&(r.division||teamDivision)===division&&(r.phase===x.phase||/CS|クライマックス/.test(r.providerStatus)));if(match){r.division=division;r.phase=match.phase;r.stage='postseason';r.gameNumber=match.gameNumber;r.title=`${division} League · Climax Series · ${r.phase} · Game ${r.gameNumber}`;r.conditional=r.gameNumber>=(r.phase==='First Stage'?3:4);r.roundSource=match.sourceUrl;}
    }
   }
   if(npb.some(r=>r.division==='Central'&&r.phase==='First Stage'&&!r.start)){
    const clubUrl=`https://www.baystars.co.jp/game/schedule/${year}/${String(month).padStart(2,'0')}`;
    const times=await attempt('NPB club',clubUrl,async()=>parseCentralTimes(await this.request(clubUrl),year,month));
    for(const r of npb.filter(x=>x.division==='Central'&&x.phase==='First Stage'&&!x.start)){const t=times.find(x=>x.date===r.date);if(t&&r.status==='scheduled'){r.start=t.start;r.timeSource=t.sourceUrl;}}
   }
   records.push(...regular,...post,...npb);
  }
  return {records:records.filter(r=>r.date>=start&&r.date<=end),issues,sources};
 }
}
function normalizeOfficial(r,now,fetchedAt){
 if(!['scheduled','in_progress'].includes(r.status))return null;
 const c=D.catalog[r.league];if(!c)return null;
 const source={provider:r.league==='KBO'?'KBO official':'NPB official',url:r.sourceUrl,fetchedAt,providerStatus:r.providerStatus,timeSource:r.timeSource,roundSource:r.roundSource};
 if(!r.start||(r.phase&&r.phase!=='Japan Series'&&!r.gameNumber))return {pending:{id:r.id,league:r.league,date:r.date,timezone:'Asia/Tokyo',category:'men',title:r.title||`${r.away} at ${r.home}`,conditional:r.conditional===true,source}};
 // A future calendar row alone cannot prove an already-started game is live.
 if(Date.parse(r.start)<now&&r.status!=='in_progress')return null;
 const tagEvidence=[],validUntil=new Date(Date.parse(r.start)+86400000).toISOString();
 for(const [id,detail] of [...(r.stage==='postseason'?[['playoffs','The official schedule identifies this postseason round.']]:[]),...(r.conditional?[['if-necessary','This later series game is conditional on the series still requiring it.']]:[])])tagEvidence.push({id,detail,status:'verified',sourceUrl:r.roundSource||r.sourceUrl,checkedAt:fetchedAt,validUntil,isDemo:false});
 const participants=r.home&&r.away?[r.away,r.home].map(name=>({id:r.league.toLowerCase()+'-'+N.norm(name),name})):[];
 return {game:{id:r.id,league:r.league,sport:'Baseball',competition:{...c},countries:c.countries,category:'men',start:r.start,duration:195,durationEstimated:true,status:r.status,stage:r.stage,isDemo:false,conditional:r.conditional===true,participants,title:participants.length?undefined:r.title,source,venue:r.venue||'',season:r.date.slice(0,4),tagEvidence,noteworthy:r.stage==='postseason'?{score:88,reason:'Official NPB/KBO postseason'}:undefined,promo:{heading:r.stage==='postseason'?'The postseason, across the Pacific.':`${r.league} on the calendar.`,body:r.home&&r.away?`${r.away} at ${r.home}.`:`${r.title}. Matchup details will update as the official schedule is confirmed.`}}};
}
function reconcile(games,providerRows,official,now,fetchedAt){
 const pending=[],decisions=[],added=new Set();let removed=0;
 official=[...new Map(official.map(r=>[r.id,r])).values()];
 const key=r=>[r.league,r.date,N.norm(r.home),N.norm(r.away)].join('|');
 for(const row of providerRows){
  const start=N.timestamp(row);if(!start)continue;
  const localDate=new Date(Date.parse(start)+9*3600000).toISOString().slice(0,10);
  const candidates=official.filter(r=>r.home&&r.away&&key(r)===key({league:row.league,date:localDate,home:row.strHomeTeam,away:row.strAwayTeam}));
  // Doubleheaders require an exact start-time match; no fuzzy team/date overrides.
  const match=candidates.length===1?candidates[0]:candidates.find(r=>r.start===start);
  if(!match)continue;
  if(games.delete('tsdb-'+row.idEvent))removed++;
  decisions.push({idEvent:row.idEvent,league:row.league,originalStatus:row.strStatus,originalPostponed:row.strPostponed,officialStatus:match.status,officialStart:match.start,sourceUrl:match.sourceUrl,action:['scheduled','in_progress'].includes(match.status)&&match.start&&Date.parse(match.start)>=now?'confirmed_by_official_schedule':'excluded_or_pending'});
 }
 for(const r of official){
  if(added.has(r.id))continue;added.add(r.id);
  const out=normalizeOfficial(r,now,fetchedAt);if(out?.game)games.set(out.game.id,out.game);if(out?.pending)pending.push(out.pending);
 }
 return {pending,decisions,removed,imported:official.filter(r=>games.has(r.id)).length};
}
module.exports={OfficialBaseballFeed,parseKBO,parseNPB,parseClimax,parseCentralTimes,normalizeOfficial,reconcile,startTime,months};
