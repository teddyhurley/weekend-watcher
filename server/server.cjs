'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {SportsDB,FeedError}=require('./provider.cjs');const {CollegeFootballData}=require('./cfbd.cjs');const {MLBFeed}=require('./mlb.cjs');const CFB=require('./cfb-normalize.cjs');const MLB=require('./mlb-normalize.cjs');const N=require('./normalize.cjs');const D=require('../src/catalog.js');const A=require('../src/audience.js');
const Baseball=require('./official-baseball.cjs');
const Dates=require('../src/dates.js'),VERSION=require('../package.json').version;
const ROOT=path.resolve(__dirname,'..');const TTL=15*60000;
function loadEnvKey(root,name){try{const line=fs.readFileSync(path.join(root,'.env'),'utf8').split(/\r?\n/).find(s=>s.startsWith(name+'='));return line?.slice(name.length+1).trim()||'';}catch(_){return '';}}
function loadKey(root){return loadEnvKey(root,'THESPORTSDB_API_KEY');}
function writeEnvKey(root,name,value){const envPath=path.join(root,'.env');let lines=[];try{lines=fs.readFileSync(envPath,'utf8').split(/\r?\n/).filter(Boolean);}catch(_){}const prefix=name+'=';lines=lines.filter(x=>!x.startsWith(prefix));lines.push(prefix+value);const fd=fs.openSync(envPath,'w',0o600);try{fs.fchmodSync(fd,0o600);fs.writeFileSync(fd,lines.join('\n')+'\n');}finally{fs.closeSync(fd);}}
// No general-purpose static file handler. Secrets, source data, caches and server files are NEVER public.
const PUBLIC=new Map([['/','index.html'],['/index.html','index.html'],['/setup','public/setup.html'],['/setup.js','public/setup.js'],['/setup.css','public/setup.css'],...['app','engine','tags','scope','audience','catalog','zones','dates','live'].map(x=>[`/src/${x}.js`,`src/${x}.js`]),['/src/styles.css','src/styles.css']]);
function createApp({root=ROOT,key=process.env.THESPORTSDB_API_KEY||loadKey(root),cfbdKey=process.env.CFBD_API_KEY||loadEnvKey(root,'CFBD_API_KEY'),clientFactory=k=>new SportsDB(k),cfbdFactory=k=>new CollegeFootballData(k),mlbClient=(require.main===module?new MLBFeed():null),baseballClient=(require.main===module?new Baseball.OfficialBaseballFeed():null),clock=()=>Date.now(),recoveryLimit=200,scheduleBudgetMs=240000}={}){
 let client=key?clientFactory(key):null,cfbd=cfbdKey?cfbdFactory(cfbdKey):null,mlb=mlbClient,map=null,mapAt=0,connecting=false;
 const csrf=crypto.randomBytes(32).toString('hex'),cache=new Map(),pending=new Map(),cfbCalendarCache=new Map(),dayCache=new Map();
 const mappingState=()=>{const eligible=A.eligibleNames().filter(l=>D.catalog[l]),primary=(map?.catalogueMapped||[]).filter(l=>eligible.includes(l)),secondary=cfbd&&eligible.includes('NCAA FBS')?['NCAA FBS']:[],mapped=[...new Set([...primary,...secondary])];return{eligible,primary,secondary,mapped,unmapped:eligible.filter(l=>!mapped.includes(l))};};
 const meta=()=>{const m=mappingState(),secondary=[...(cfbd?['CollegeFootballData']:[]),...(mlb?['MLB official schedule']:[])];return{configured:Boolean(client),provider:'TheSportsDB',localOnly:true,mappedLeagues:m.mapped,unmappedLeagues:m.unmapped,ambiguous:map?.ambiguous||[],coverageAdmission:{audienceThreshold:A.THRESHOLD,eligible:m.eligible.length,catalogueCandidates:Object.keys(D.catalog).length},connections:{theSportsDB:Boolean(client),collegeFootballData:Boolean(cfbd),mlbOfficial:Boolean(mlb)},secondaryProviders:secondary};};
 async function getMapping(){if(!map||clock()-mapAt>86400000){map=N.leagueMap(await client.leagues());mapAt=clock();}return map;}
 // Reuse overlapping date requests for 15 minutes; no disk cache or credentials.
 async function scheduleDay(day,league=''){
  const key=day+'/'+league,entry=dayCache.get(key);
  if(entry&&clock()-entry.time<TTL)return {rows:entry.rows,cached:true};
  const rows=await client.day(day,league);dayCache.set(key,{time:clock(),rows});
  while(dayCache.size>256)dayCache.delete(dayCache.keys().next().value);
  return {rows,cached:false};
 }
 async function cfbWeeks(start,end){
  if(!cfbd)return[];const years=[...new Set([+start.slice(0,4)-1,+start.slice(0,4),+end.slice(0,4)])],rows=[];
  for(const year of years){let item=cfbCalendarCache.get(year);if(!item||clock()-item.time>86400000){const data=await cfbd.calendar(year);item={time:clock(),data};cfbCalendarCache.set(year,item);}rows.push(...item.data);}
  return CFB.weeksForRange(rows,start,end);
 }
 async function buildFeed(start,end){
  const m=await getMapping(),games=new Map(),skipped={},issues=[],notices=[],seen=new Set(),unmappedRows=new Map(),skipExamples={},baseballRejections=[],baseballProviderRows=[],leagueCounts=new Map();
  let cachedDayRequests=0,returned=0,successDays=0,duplicates=0,providerRequests=0,dailyRecords=0,targetedRecoveryRecords=0,targetedRecoveryRequests=0,providerLimitHits=0,secondaryProviderRequests=0,secondaryReturnedRecords=0,cfbWeeksLoaded=0,rankedMatchups=0,mlbRequests=0,mlbReturnedRecords=0,mlbImportedEvents=0,mlbReplacedEvents=0;
  const safe=v=>String(v??'').replace(/[\x00-\x1f]/g,' ').slice(0,160);
  const example=r=>({eventId:/^\d+$/.test(String(r?.idEvent||''))?String(r.idEvent):null,providerLeagueId:safe(r?.idLeague),providerLeague:safe(r?.strLeague),sport:safe(r?.strSport),status:safe(r?.strStatus),start:N.timestamp(r||{})});
  const collectedAt=new Date(clock()).toISOString(),mappedProviderIds=Object.keys(m.matches);
  function processRows(rows){
   returned+=rows.length;
   for(const row of rows){
    const id=String(row?.idEvent||'');if(/^\d+$/.test(id)){if(seen.has(id)){duplicates++;continue;}seen.add(id);}
    if(['KBO','NPB'].includes(m.matches[String(row?.idLeague)]))baseballProviderRows.push({...row,league:m.matches[String(row.idLeague)]});
    const r=N.normalizeEvent(row,m.matches,clock(),collectedAt);
    if(r.game){games.set(r.game.id,r.game);leagueCounts.set(r.game.league,(leagueCounts.get(r.game.league)||0)+1);}
    else{
     skipped[r.skip]=(skipped[r.skip]||0)+1;
     if(['KBO','NPB'].includes(m.matches[String(row?.idLeague)])){
      const detail={league:m.matches[String(row.idLeague)],reason:r.skip};
      for(const field of ['idEvent','idLeague','strStatus','strPostponed','dateEvent','strTime','strTimestamp','strSeason','strRound','strStage','strLeague','strHomeTeam','strAwayTeam'])detail[field]=row?.[field]??null;
      baseballRejections.push(detail);
     }
     if(!skipExamples[r.skip])skipExamples[r.skip]=[];
     if(skipExamples[r.skip].length<5)skipExamples[r.skip].push(example(row));
     if(r.skip==='provider_outside_catalogue'){
      const x=example(row),k=x.providerLeagueId+'|'+x.providerLeague+'|'+x.sport;
      if(!unmappedRows.has(k))unmappedRows.set(k,{providerLeagueId:x.providerLeagueId,name:x.providerLeague,sport:x.sport,records:0,exampleEventIds:[],reviewStatus:'outside_or_unmapped'});
      const detail=unmappedRows.get(k);detail.records++;if(x.eventId&&detail.exampleEventIds.length<3)detail.exampleEventIds.push(x.eventId);
     }
    }
   }
  }
  const requestedDays=Math.round((Date.parse(end)-Date.parse(start))/86400000)+3;
  const cappedDays=[],deadline=Date.now()+scheduleBudgetMs;
  // Load every global day before spending the remaining request budget on cap recovery.
  for(let day=N.shift(start,-1);day<=N.shift(end,1);day=N.shift(day,1)){
   if(Date.now()>=deadline){issues.push({date:day,message:'Schedule loading reached its time limit. Try a shorter date range for remaining dates.'});break;}
   let rows;try{const response=await scheduleDay(day);rows=response.rows;if(response.cached)cachedDayRequests++;else providerRequests++;successDays++;}
   catch(e){providerRequests++;if(['authentication','rate_limit'].includes(e.code))throw e;issues.push({date:day,message:e instanceof FeedError?e.message:'The schedule request failed.'});continue;}
   dailyRecords+=rows.length;processRows(rows);
   if(rows.length>=1500){providerLimitHits++;cappedDays.push(day);}
  }
  let deferredRecovery=0;
  for(const day of cappedDays){let failures=0,recovered=0,loaded=0;
   for(const leagueId of mappedProviderIds){
    if(targetedRecoveryRequests>=recoveryLimit||Date.now()>=deadline){deferredRecovery++;continue;}
    try{const response=await scheduleDay(day,leagueId);if(response.cached)cachedDayRequests++;else {providerRequests++;targetedRecoveryRequests++;}targetedRecoveryRecords+=response.rows.length;recovered+=response.rows.length;loaded++;processRows(response.rows);}
    catch(e){providerRequests++;targetedRecoveryRequests++;failures++;if(['authentication','rate_limit'].includes(e.code))throw e;issues.push({date:day,leagueId,message:e instanceof FeedError?e.message:'A targeted league recovery request failed.'});}
   }
   if(!failures&&loaded===mappedProviderIds.length)notices.push({date:day,message:`Global day hit the provider limit; recovered approved leagues with ${loaded} targeted requests.`,records:recovered});
  }
  if(deferredRecovery)issues.push({provider:'TheSportsDB',message:`${deferredRecovery} targeted recovery requests were deferred to keep this range bounded. Some capped dates are incomplete; load a shorter range for fuller coverage.`});
  let officialBaseball={enabled:Boolean(baseballClient),requests:0,imported:0,replaced:0,sources:[],reconciliations:[]},pendingBaseball=[];
  if(baseballClient){
   const before=baseballClient.requests||0;
   try{
    const checked=await baseballClient.schedule(N.shift(start,-1),N.shift(end,1));
    const result=Baseball.reconcile(games,baseballProviderRows,checked.records,clock(),collectedAt);
    pendingBaseball=result.pending;officialBaseball={...officialBaseball,imported:result.imported,replaced:result.removed,sources:checked.sources,reconciliations:result.decisions};
    issues.push(...checked.issues);
    for(const rejection of baseballRejections){const decision=result.decisions.find(x=>String(x.idEvent)===String(rejection.idEvent));if(decision)rejection.resolution=decision.action;}
   }catch(_){issues.push({provider:'Official baseball',message:'Official baseball verification failed; unverified provider postponements remain excluded.'});}
   officialBaseball.requests=(baseballClient.requests||0)-before;
  }
  if(mlb){
   const before=mlb.requests||0;
   try{
    const rows=await mlb.schedule(N.shift(start,-1),N.shift(end,1));mlbReturnedRecords=rows.length;
    // MLB's own schedule is the authority for MLB phase/postseason context. Replace
    // broad-feed MLB rows only when the official adapter returns usable games.
    const official=[];for(const row of rows){const r=MLB.normalizeGame(row,clock(),collectedAt);if(r.game)official.push(r.game);else{skipped[r.skip]=(skipped[r.skip]||0)+1;}}
    if(official.length){for(const [id,g] of games)if(g.league==='MLB'&&g.source?.provider==='TheSportsDB'){games.delete(id);mlbReplacedEvents++;}for(const g of official){games.set(g.id,g);mlbImportedEvents++;}}
   }catch(e){notices.push({provider:'MLB',message:e instanceof FeedError?e.message:'MLB-specific postseason context could not be loaded; the broad schedule remains available.'});}
   mlbRequests=(mlb.requests||0)-before;
  }
  if(cfbd){
   const before=cfbd.requests||0;let weeks=[];
   try{weeks=await cfbWeeks(start,end);}catch(e){issues.push({provider:'CollegeFootballData',message:e instanceof FeedError?e.message:'College football calendar could not be loaded.'});}
   for(const w of weeks){
    let rows=[];try{rows=await cfbd.games(w.season,w.week,w.seasonType);cfbWeeksLoaded++;secondaryReturnedRecords+=rows.length;}catch(e){issues.push({provider:'CollegeFootballData',season:w.season,week:w.week,message:e instanceof FeedError?e.message:'College football schedule could not be loaded.'});continue;}
    let rankingRows=[],poll=null,pollWeek=null;
    // CFBD can expose the upcoming schedule week before that week's poll snapshot exists.
    // Walk backward to the most recent valid CFP/AP poll rather than erasing rankings.
    for(let fallback=0;fallback<=3&&!poll;fallback++){
     const week=w.week-fallback;if(week<1)break;
     try{rankingRows=await cfbd.rankings(w.season,week,w.seasonType);poll=CFB.choosePoll(rankingRows);if(poll)pollWeek=week;}
     catch(e){if(fallback===0)notices.push({provider:'CollegeFootballData',season:w.season,week:w.week,message:'Current college-football rankings were unavailable; trying the latest prior poll.'});}
    }
    if(!poll)notices.push({provider:'CollegeFootballData',season:w.season,week:w.week,message:'No AP Top 25 or CFP snapshot was found in the current or previous three weeks; Ranked matchup tags were withheld.'});
    else if(pollWeek!==w.week)notices.push({provider:'CollegeFootballData',season:w.season,week:w.week,pollWeek,message:`Used the latest available ${poll.short} poll from week ${pollWeek} for week ${w.week} games.`});
    for(const row of rows){
     const r=CFB.normalizeGame(row,poll,[],clock(),collectedAt);
     if(r.game){games.set(r.game.id,r.game);leagueCounts.set(r.game.league,(leagueCounts.get(r.game.league)||0)+1);if(r.game.tagEvidence?.some(e=>e.id==='ranked-opponents'))rankedMatchups++;}
     else{skipped[r.skip]=(skipped[r.skip]||0)+1;if(!skipExamples[r.skip])skipExamples[r.skip]=[];if(skipExamples[r.skip].length<5)skipExamples[r.skip].push({eventId:String(row?.id??''),providerLeague:'NCAA FBS',sport:'American Football',status:row?.completed?'completed':'scheduled',start:row?.startDate||null});}
    }
   }
   secondaryProviderRequests=(cfbd.requests||0)-before;
  }
  if(!successDays)throw new FeedError('provider','All schedule requests failed. Try again to load these dates.');
  const unmatchedAll=[...unmappedRows.values()].sort((a,b)=>b.records-a.records||a.name.localeCompare(b.name)),unmatchedLimit=50,ms=mappingState();
  const secondaryProviders=[...(cfbd?[{provider:'CollegeFootballData',role:'NCAA FBS schedule + latest available AP/CFP ranking context',requests:secondaryProviderRequests,weeksLoaded:cfbWeeksLoaded}]:[]),...(mlb?[{provider:'MLB',role:'Official MLB schedule + postseason phase context',requests:mlbRequests,records:mlbReturnedRecords,imported:mlbImportedEvents}]:[])];
  const finalCounts=new Map();for(const g of games.values())finalCounts.set(g.league,(finalCounts.get(g.league)||0)+1);
  const result={reportVersion:10,appVersion:VERSION,provider:'TheSportsDB',secondaryProviders,isDemo:false,games:[...games.values()],startDate:start,endDate:end,fetchedAt:collectedAt,completedAt:new Date(clock()).toISOString(),partial:issues.length>0,issues,notices,skipped,returnedRecords:returned,dailyRecords,targetedRecoveryRecords,duplicateRecords:duplicates,processedRecords:returned-duplicates,successfulDays:successDays,requestedDays,cachedDayRequests,deferredRecovery,providerRequests,providerLimitHits,targetedRecoveryRequests,secondaryProviderRequests,secondaryReturnedRecords,rankedMatchups,mlbContextConnected:Boolean(mlb),mlbRequests,mlbReturnedRecords,mlbImportedEvents,mlbReplacedEvents,mappedLeagues:ms.mapped,unmappedLeagues:ms.unmapped,ambiguous:m.ambiguous,coverageComplete:false,statsConnected:false,editorialConnected:false,rankingsConnected:Boolean(cfbd),
   fetchStrategy:`TheSportsDB global schedule + targeted cap recovery${baseballClient?'; KBO/NPB official schedule reconciliation':''}${cfbd?'; CollegeFootballData for NCAA FBS/rankings':''}${mlb?'; MLB official schedule for MLB postseason context':''}`,
   mappingSummary:{catalogueTotal:ms.eligible.length,catalogueCandidates:Object.keys(D.catalog).length,mapped:ms.mapped.length,unmapped:ms.unmapped.length,ambiguous:m.ambiguous.length,primaryMapped:ms.primary.length,secondaryMapped:ms.secondary.length},coverageAdmission:{audienceThreshold:A.THRESHOLD,eligibleCompetitions:ms.eligible,excludedCandidates:Object.keys(D.catalog).filter(l=>!ms.eligible.includes(l)).length},
   fetchWindowUTC:[N.shift(start,-1),N.shift(end,1)],
   mappedLeaguesWithImportedEvents:[...finalCounts].map(([league,events])=>({league,events})).sort((a,b)=>b.events-a.events||a.league.localeCompare(b.league)),
   unmatchedProviderLeagueCount:unmatchedAll.length,unmatchedProviderLeagues:unmatchedAll.slice(0,unmatchedLimit),unmatchedProviderLeaguesTruncated:Math.max(0,unmatchedAll.length-unmatchedLimit),
   skipExamples,baseballRejections,officialBaseball,pendingBaseball,
   reportNotes:[
    'KBO/NPB provider status conflicts are reconciled only against matching official fixtures. Original rejection fields remain in baseballRejections with their resolution.',
    'NPB playoff slots with unpublished times appear separately as pendingBaseball; no start times are invented.',
    'partial means a source failed or recovery was bounded; a fully recovered 1500-row day is not partial by itself.',
    'provider_outside_catalogue counts provider records that are not mapped into Weekend Watcher; catalogueUnmapped is the separate list of Weekend Watcher competitions still needing an adapter.',
    'importedEvents includes UTC buffer dates; browser local-date and viewing filters further narrow it.',
    'Coverage uses multiple admission paths: 500K+ average audience, major top-tier leagues, major domestic cups, and major continental/global competitions. Admission is not a ranking input.',
    'Esports, horse racing and scripted sports entertainment are excluded by product scope.',
    'Mapped means at least one configured provider can supply that curated competition; it is not a completeness guarantee.',
    'NCAA FBS is intentionally supplied by CollegeFootballData rather than TheSportsDB so FBS games and AP/CFP rankings can share one evidence source.',
    'MLB official schedule context replaces broad-feed MLB rows when available so postseason rounds are not inferred from generic league text.'
   ]};
  return result;
 }
 async function feed(start,end){
  const k=start+'/'+end,old=cache.get(k);if(old&&clock()-old.time<TTL)return old.data;
  if(pending.has(k))return pending.get(k);
  // Reject another date-range fetch while one is running, so clicking cannot spend unbounded quota.
  if(pending.size)throw new FeedError('busy','Another date range is loading. Try again when it finishes.');
  const job=buildFeed(start,end).then(data=>{cache.set(k,{time:clock(),data});while(cache.size>4)cache.delete(cache.keys().next().value);return data;}).catch(e=>{
   if(old&&clock()-old.time<6*3600000)return {...old.data,stale:true,partial:true,issues:[...old.data.issues,{message:'Refresh failed. Showing an older cached schedule; check event status.'}]};throw e;
  }).finally(()=>pending.delete(k));pending.set(k,job);return job;
 }
 function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data));}
 async function body(req){let size=0,s='';for await(const chunk of req){size+=chunk.length;if(size>4096)throw new FeedError('request','Request too large.');s+=chunk;}try{return JSON.parse(s);}catch(_){throw new FeedError('request','Invalid request.');}}
 const server=http.createServer(async(req,res)=>{
  res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Frame-Options','DENY');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
  const port=server.address()?.port,allowedHosts=[`127.0.0.1:${port}`,`localhost:${port}`];
  if(!allowedHosts.includes(req.headers.host)||!['127.0.0.1','::1','::ffff:127.0.0.1'].includes(req.socket.remoteAddress))return json(res,403,{error:'Local access only.'});
  let url;try{url=new URL(req.url,'http://'+req.headers.host);}catch(_){return json(res,400,{error:'Invalid request.'});}
  if(req.headers.origin&&!allowedHosts.map(h=>'http://'+h).includes(req.headers.origin))return json(res,403,{error:'Cross-origin access is disabled.'});
  try{
   if(req.method==='GET'&&url.pathname==='/api/status')return json(res,200,meta());
   if(req.method==='GET'&&url.pathname==='/api/setup-state')return json(res,200,{configured:Boolean(client),sportsConfigured:Boolean(client),collegeFootballDataConfigured:Boolean(cfbd),token:csrf});
   if(req.method==='POST'&&url.pathname==='/api/setup'){
    if(req.headers['x-setup-token']!==csrf||!req.headers.origin||!/^application\/json(?:;|$)/.test(req.headers['content-type']||''))return json(res,403,{error:'Open the setup page on this computer to connect.'});
    if(connecting)return json(res,409,{error:'A connection check is already running.'});
    const b=await body(req),provider=String(b.provider||'thesportsdb').toLowerCase(),value=String(b.key||'').trim();connecting=true;
    try{
     if(provider==='cfbd'){
      if(cfbd)return json(res,409,{error:'CollegeFootballData is already connected on this computer.'});
      const newCfb=cfbdFactory(value),year=new Date(clock()).getUTCFullYear(),calendar=await newCfb.calendar(year);if(!calendar.length)throw new FeedError('authentication','CollegeFootballData did not return a season calendar.');
      const current=calendar.find(r=>Date.parse(r.startDate)<=clock()&&Date.parse(r.endDate)>=clock())||calendar.find(r=>r.seasonType==='regular')||calendar[0];
      if(current)await newCfb.rankings(Number(current.season)||year,Number(current.week)||1,current.seasonType||'regular');
      writeEnvKey(root,'CFBD_API_KEY',value);cfbd=newCfb;cfbCalendarCache.clear();cache.clear();return json(res,200,{ok:true,provider:'CollegeFootballData'});
     }
     if(provider!=='thesportsdb')return json(res,400,{error:'Unknown provider.'});
     if(client)return json(res,409,{error:'TheSportsDB is already connected on this computer.'});
     const newClient=clientFactory(value),leagues=await newClient.leagues();if(!leagues.length)throw new FeedError('authentication','The Premium connection did not return a league catalogue.');
     const newMap=N.leagueMap(leagues);writeEnvKey(root,'THESPORTSDB_API_KEY',value);client=newClient;map=newMap;mapAt=clock();cache.clear();return json(res,200,{ok:true,provider:'TheSportsDB',mappedLeagues:map.catalogueMapped.length});
    }finally{connecting=false;}
   }
   if(req.method==='GET'&&url.pathname==='/api/feed'){
    if(!client)return json(res,428,{error:'Connect your Premium API key on the local setup screen.',code:'setup_required'});
    const start=url.searchParams.get('start'),end=url.searchParams.get('end'),zone=url.searchParams.get('timezone')||'UTC';
    const invalid=Dates.validate(start,end,new Date(clock()),zone);
    if(invalid)return json(res,400,{error:invalid});
    return json(res,200,await feed(start,end));
   }
   if(req.method!=='GET')return json(res,405,{error:'Method not allowed.'});
   const target=PUBLIC.get(url.pathname);if(!target)return json(res,404,{error:'Not found.'});
   const ext=path.extname(target);res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css'})[ext]+'; charset=utf-8');res.end(fs.readFileSync(path.join(root,target)));
  }catch(e){const code=e instanceof FeedError?e.code:'internal';json(res,code==='busy'?409:code==='request'?400:502,{code,error:e instanceof FeedError?e.message:'The request could not be completed. No sample data has been substituted.'});}
 });
 server.requestTimeout=420000;server.headersTimeout=20000;
 return {server,feed,meta};
}
if(require.main===module){
 if(+process.versions.node.split('.')[0]<22){console.error('Install Node.js 22 or newer, then start again.');process.exit(1);}
 const port=Number(process.env.PORT||4317);const {server}=createApp();
 server.on('error',e=>{console.error(e.code==='EADDRINUSE'?'Weekend Watcher is already running, or port 4317 is occupied.':'Could not start the local app.');process.exit(1);});
 server.listen(port,'127.0.0.1',()=>console.log(`Weekend Watcher: http://127.0.0.1:${port}\nKeep this Terminal window open. Stop with Control+C.\nYour API key is never printed or served to visitors.`));
}
module.exports={createApp,loadKey};
