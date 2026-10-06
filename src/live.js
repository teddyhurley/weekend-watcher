/* Live schedules only. Calendar selection is local, persisted, and validated on both sides. */
(function(){
 'use strict';
 const $=id=>document.getElementById(id),D=window.WatchData,R=window.WatcherDates,STORE='weekend-watcher-dates-v1';
 let busy=false,lastReport=null,selection;
 function zone(){
  if(window.WatcherUI)return window.WatcherUI.getState().timezone;
  try{for(const key of ['weekend-watcher-discovery-v9','weekend-watcher-discovery-v8','weekend-watcher-discovery-v7','weekend-watcher-discovery-v6']){const saved=JSON.parse(localStorage.getItem(key)||'null');if(R.validZone(saved?.timezone))return saved.timezone;}}catch(_){}
  return Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';
 }
 function remember(){try{localStorage.setItem(STORE,JSON.stringify(selection));}catch(_){}}
 function restore(){let saved;try{saved=JSON.parse(localStorage.getItem(STORE));}catch(_){}selection=R.restore(saved,new Date(),zone());}
 function displayDates(){
  const {min,max}=R.bounds(new Date(),zone());
  for(const id of ['date-start','date-end']){$(id).min=min;$(id).max=max;}
  $('date-start').value=selection.startDate;$('date-end').value=selection.endDate;
  document.querySelectorAll('[data-date-preset]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.datePreset===selection.preset));
  $('date-help').textContent=`Dates in ${zone().replaceAll('_',' ')} · Choose through ${new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(max+'T12:00:00Z'))}.`;
 }
 function message(heading,text){$('feed-label').textContent=heading;$('feed-message').textContent=text;}
 function setBusy(value){busy=value;$('date-form').setAttribute('aria-busy',String(value));document.querySelectorAll('#date-form input,#date-form button,[data-date-preset]').forEach(e=>e.disabled=value);$('reload-feed').textContent=value?'Finding events…':'Show events';}
 async function load(){
  if(busy)return;
  const r={startDate:$('date-start').value,endDate:$('date-end').value},tz=zone(),invalid=R.validate(r.startDate,r.endDate,new Date(),tz);
  $('date-error').textContent=invalid;if(invalid)return;
  selection={...selection,...r};remember();displayDates();setBusy(true);
  const empty={...r,games:[],mappedLeagues:[],unmappedLeagues:[],issues:[],loading:true};lastReport=null;
  window.WatcherUI.replaceFeed(empty);message('FINDING EVENTS','Checking schedules for your dates. Longer ranges may take a few minutes.');
  try{
   const response=await fetch('/api/feed?'+new URLSearchParams({start:r.startDate,end:r.endDate,timezone:tz}),{signal:AbortSignal.timeout(420000)});const j=await response.json();
   if(!response.ok){if(j.code==='setup_required'){remember();location.assign('/setup');return;}throw Error(j.error||'The schedule could not be loaded.');}
   lastReport=j;window.WatcherUI.replaceFeed(j);
   const count=window.WatchEngine.filterGames(j.games,{...window.WatcherUI.getState(),days:R.DAYS,leagues:Object.keys(D.catalog),tags:[],category:'all',period:'any',minMinutes:1,includeUS:true,includeConditional:true}).length;
   const updated=new Date(j.fetchedAt).toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
   message(j.stale?'SAVED SCHEDULE':j.partial?'SOME COVERAGE MISSING':'SCHEDULE UPDATED',`${count} events in your dates · Updated ${updated}. ${j.partial?'Some sources could not be completed. Try a shorter range or check the connection report.':'Schedules can change; some competitions or details may be missing.'}`);
  }catch(e){const text=e.name==='TimeoutError'?'This range took too long to load. Try fewer dates.':e.message;message('COULD NOT LOAD',text);lastReport={...empty,loading:false,error:text};window.WatcherUI.replaceFeed(lastReport);}
  finally{setBusy(false);if(tz!==zone())load();}
 }
 function report(){
  let dialog=$('connection-report');if(!dialog){dialog=document.createElement('dialog');dialog.id='connection-report';dialog.setAttribute('aria-label','Connection report');document.body.append(dialog);}
  dialog.replaceChildren();const title=document.createElement('h2');title.textContent='Connection report';dialog.append(title);const body=document.createElement('pre');body.className='feed-report-text';
  const r=lastReport,state=window.WatcherUI?.getState(),E=window.WatchEngine;
  const localPrefs=state?{...state,days:R.DAYS,leagues:Object.keys(D.catalog),tags:[],category:'all',period:'any',availability:undefined,matchMode:'overlap',minMinutes:1,hidePreseason:false,includeUS:true,includeConditional:true}:null;
  const within=localPrefs&&r?.games?E.filterGames(r.games,localPrefs).length:null;
  const matching=state&&r?.games?E.filterGames(r.games,state).length:null;
  body.textContent=r?JSON.stringify({
   reportVersion:r.reportVersion,appVersion:r.appVersion,provider:r.provider,dateRange:[r.startDate,r.endDate],timezone:state?.timezone,
   fetchedAt:r.fetchedAt,partial:r.partial,stale:r.stale||false,coverageComplete:r.coverageComplete===true,
   error:r.error,fetchStrategy:r.fetchStrategy,providerRequests:r.providerRequests,providerLimitHits:r.providerLimitHits,targetedRecoveryRequests:r.targetedRecoveryRequests,returnedRecords:r.returnedRecords,dailyRecords:r.dailyRecords,targetedRecoveryRecords:r.targetedRecoveryRecords,duplicateRecords:r.duplicateRecords,processedRecords:r.processedRecords,
   secondaryProviders:r.secondaryProviders,secondaryProviderRequests:r.secondaryProviderRequests,secondaryReturnedRecords:r.secondaryReturnedRecords,rankingsConnected:r.rankingsConnected,rankedMatchups:r.rankedMatchups,mlbContextConnected:r.mlbContextConnected,mlbRequests:r.mlbRequests,mlbReturnedRecords:r.mlbReturnedRecords,mlbImportedEvents:r.mlbImportedEvents,mlbReplacedEvents:r.mlbReplacedEvents,
   importedEvents:r.games?.length,eventsInLocalRange:within,matchingEvents:matching,
   successfulDays:r.successfulDays,requestedDays:r.requestedDays,cachedDayRequests:r.cachedDayRequests,deferredRecovery:r.deferredRecovery,fetchWindowUTC:r.fetchWindowUTC,
   mappingSummary:r.mappingSummary,coverageAdmission:r.coverageAdmission,skipped:r.skipped,issues:r.issues,notices:r.notices,
   mappedLeaguesWithImportedEvents:r.mappedLeaguesWithImportedEvents,
   unmatchedProviderLeagueCount:r.unmatchedProviderLeagueCount,unmatchedProviderLeagues:r.unmatchedProviderLeagues,unmatchedProviderLeaguesTruncated:r.unmatchedProviderLeaguesTruncated,
   officialBaseball:r.officialBaseball,pendingBaseball:r.pendingBaseball,baseballRejections:r.baseballRejections,skipExamples:r.skipExamples,mappedLeagues:r.mappedLeagues,unmappedLeagues:r.unmappedLeagues,ambiguous:r.ambiguous,
   notes:r.reportNotes
  },null,2):'No successful connection yet. Use Connection to enter your key on this computer.';
  dialog.append(body);const close=document.createElement('button');close.className='outline-button';close.textContent='Close';close.onclick=()=>dialog.close();dialog.append(close);dialog.showModal();
 }
 async function init(){
  if(location.protocol==='file:'){message('START THE LOCAL APP','Open Start-Weekend-Watcher.command to use the app.');return;}
  restore();displayDates();D.startDate=selection.startDate;D.endDate=selection.endDate;
  const script=document.createElement('script');script.src='/src/app.js';script.onload=async()=>{
   $('date-form').onsubmit=e=>{e.preventDefault();load();};$('feed-report').onclick=report;
   for(const id of ['date-start','date-end'])$(id).oninput=()=>{selection.preset='custom';document.querySelectorAll('[data-date-preset]').forEach(b=>b.setAttribute('aria-pressed','false'));$('date-error').textContent=R.validate($('date-start').value,$('date-end').value,new Date(),zone());};
   document.querySelectorAll('[data-date-preset]').forEach(b=>b.onclick=()=>{selection={preset:b.dataset.datePreset,...R.preset(b.dataset.datePreset,new Date(),zone())};displayDates();load();});
   window.addEventListener('watcher-zone-change',()=>{selection=R.restore(selection,new Date(),zone());displayDates();remember();load();});
   try{const r=await fetch('/api/status');const j=await r.json();if(!r.ok)throw Error();if(!j.configured){remember();location.replace('/setup');return;}load();}catch(_){message('LOCAL SERVER NEEDED','Start Weekend Watcher, then reload this page.');}
  };script.onerror=()=>message('APP UNAVAILABLE','The interface could not be loaded. Restart the local server.');document.body.append(script);
 }
 init();
})();
