/* Weekend Watcher: discovery first. No accounts, tracked teams or remote assets. */
(function(){
 'use strict';
 const E=window.WatchEngine,D=window.WatchData,T=window.WatcherTags,S=window.WatcherScope,A=window.WatcherAudience,Z=window.WatcherZones;
 let data=D.games.filter(g=>E.competitionAllowed(g));const CAT=D.catalog;
 const LEAGUES=Object.keys(CAT).filter(l=>E.competitionAllowed({league:l,sport:CAT[l].sport,competition:CAT[l]}));
 const GROUPS=Object.fromEntries(Object.entries(D.groups).map(([s,ls])=>[s,ls.filter(l=>LEAGUES.includes(l))]).filter(([,ls])=>ls.length));
 const STORE='weekend-watcher-discovery-v9';
 const ALL_DAYS=window.WatcherDates.DAYS;
 const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const toggle=(a,v)=>a.includes(v)?a.filter(x=>x!==v):[...a,v];
 const deviceZone=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';}catch(_){return'UTC';}};
 const commonZones={'America/Los_Angeles':'Pacific · Los Angeles','America/Denver':'Mountain · Denver','America/Chicago':'Central · Chicago','America/New_York':'Eastern · New York','Pacific/Honolulu':'Honolulu','America/Anchorage':'Anchorage','Europe/London':'London','Europe/Paris':'Paris','Asia/Kolkata':'India · Kolkata','Asia/Seoul':'Seoul','Asia/Tokyo':'Tokyo','Australia/Melbourne':'Melbourne','Australia/Perth':'Perth','America/Sao_Paulo':'São Paulo','Africa/Johannesburg':'Johannesburg','Asia/Dubai':'Dubai','Asia/Singapore':'Singapore','Pacific/Auckland':'Auckland','UTC':'UTC'};
 const defaults=()=>({leagues:[...LEAGUES],tags:[],tagMode:'any',category:'all',days:[...ALL_DAYS],timezone:deviceZone(),startDate:D.startDate,endDate:D.endDate,period:'any',fromTime:'18:00',toTime:'23:00',country:'',timeWeight:10,localWeight:2,matchMode:'overlap',minMinutes:30,profile:'balanced',recommendationMode:'overall',includeUS:true,includeConditional:false,hidePreseason:true,avoidOverlap:false,discover:true,outsideHours:false});
 let state=defaults(),view='picks',limit=4,toastTimer,filtered=[],ranked=[],detailId=null;
 try{
  const raw=localStorage.getItem(STORE)||localStorage.getItem('weekend-watcher-discovery-v8')||localStorage.getItem('weekend-watcher-discovery-v7')||localStorage.getItem('weekend-watcher-discovery-v6')||localStorage.getItem('weekend-watcher-discovery-v5'),old=JSON.parse(raw||localStorage.getItem('weekend-watcher-v4')||'null');
  if(old&&typeof old==='object'){
   for(const k of ['hidePreseason','avoidOverlap','discover','outsideHours','includeUS','includeConditional'])if(typeof old[k]==='boolean')state[k]=old[k];
   if(raw&&Array.isArray(old.leagues)){
    const saved=[...new Set(old.leagues.filter(l=>LEAGUES.includes(l)))];
    const legacyAll=old.allLeagues===true||(Number.isInteger(old.catalogueLeagueCount)&&old.catalogueLeagueCount>0&&old.leagues.length>=old.catalogueLeagueCount)||(old.leagues.length===LEAGUES.length-1&&!old.leagues.includes('NCAA FBS')&&LEAGUES.filter(l=>l!=='NCAA FBS').every(l=>old.leagues.includes(l)));
    state.leagues=legacyAll?[...LEAGUES]:saved;
   }
   if(localStorage.getItem(STORE)&&Array.isArray(old.days))state.days=[...new Set(old.days.filter(d=>ALL_DAYS.includes(d)))];
   if(E.validTimezone(old.timezone))state.timezone=old.timezone;
   for(const [key,values] of Object.entries({category:['all','men','women'],profile:['balanced','occasion','close'],period:['any','early','morning','afternoon','evening','custom'],matchMode:['overlap','starts','full'],minMinutes:[15,30,60,120],tagMode:['any','all'],recommendationMode:['overall','discover']}))if(values.includes(old[key]))state[key]=old[key];
   for(const k of ['fromTime','toTime'])if(E.parseClock(old[k])!==null)state[k]=old[k];
   for(const [k,max]of [['timeWeight',15],['localWeight',5]])if(Number.isFinite(old[k]))state[k]=Math.min(max,Math.max(0,old[k]));
   state.tags=T.normalize(old.tags);
  }
 }catch(_){/* Persistence is optional. */}
 const persist=()=>{try{const payload={...state,allLeagues:state.leagues.length===LEAGUES.length&&LEAGUES.every(l=>state.leagues.includes(l)),catalogueLeagueCount:LEAGUES.length};localStorage.setItem(STORE,JSON.stringify(payload));localStorage.removeItem('weekend-watcher-discovery-v7');localStorage.removeItem('weekend-watcher-discovery-v6');localStorage.removeItem('weekend-watcher-discovery-v5');localStorage.removeItem('weekend-watcher-v4');}catch(_){}};
 function notify(text){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2600);}
 const displayName=p=>`${Number.isInteger(p?.rank)?'#'+p.rank+' ':''}${p?.name||''}`;
 const title=g=>g.title||E.participants(g).map(displayName).join(' vs ');
 const categoryLabel=c=>({men:'Men’s',women:'Women’s',open:'Open'}[c]||'');
 const sportLabel=s=>s==='Football'?'Soccer':s==='Australian rules'?'AFL':s;
 const visibleLeagues=()=>LEAGUES.filter(l=>state.category==='all'||(CAT[l].eventCategories||[CAT[l].category]).includes(state.category));
 const countryName=()=>{if(!state.country)return'';try{return new Intl.DisplayNames(['en'],{type:'region'}).of(state.country);}catch(_){return state.country;}};
 function initZones(){let zones=[];try{zones=Intl.supportedValuesOf('timeZone');}catch(_){};$('timezone').innerHTML=[...new Set([...Object.keys(commonZones),deviceZone(),state.timezone,...zones])].filter(E.validTimezone).map(z=>`<option value="${esc(z)}">${esc(commonZones[z]||z.replaceAll('_',' '))}</option>`).join('');}
 function timeParts(time,timezone=state.timezone){
  const d=new Date(time),f=(options)=>new Intl.DateTimeFormat('en-US',{timeZone:timezone,...options}).format(d);
  return{day:f({weekday:'short'}),date:f({month:'short',day:'numeric'}),time:f({hour:'numeric',minute:'2-digit'}),zone:new Intl.DateTimeFormat('en-US',{timeZone:timezone,timeZoneName:'short'}).formatToParts(d).find(p=>p.type==='timeZoneName')?.value||timezone};
 }
 const slotFor=g=>g.planSlot||g.slots?.[0]||null;
 function slotLine(s){const a=timeParts(s.start),b=timeParts(s.end);return `${a.day} ${a.time}–${a.day===b.day?'':b.day+' '}${b.time} ${a.zone}${a.zone===b.zone?'':' → '+b.zone}`;}
 const minutesLabel=n=>n<60?`${n} min`:`${Math.floor(n/60)}h${n%60?' '+n%60+'m':''}`;
 function tagChip(id){const t=T.byId[id];return `<button class="story-tag" data-tag="${id}" data-tag-group="${t.group}" aria-pressed="${state.tags.includes(id)}" aria-label="Filter by ${esc(t.label)}">${esc(t.label)}</button>`;}
 const cardTags=g=>`<div class="card-tags">${T.forGame(g).map(tagChip).join('')}</div>`;
 function renderTags(){ $('tag-filters').innerHTML=T.DEFINITIONS.map(t=>tagChip(t.id)).join('');$('clear-tags').disabled=!state.tags.length;$('tag-mode').value=state.tagMode; }
 function sync(){
  state.country=Z.countryFor(state.timezone);
  for(const [id,k]of [['timezone','timezone'],['priority','profile'],['from-time','fromTime'],['to-time','toTime'],['match-mode','matchMode'],['min-minutes','minMinutes'],['time-weight','timeWeight'],['local-weight','localWeight']])$(id).value=state[k];
  for(const [id,k]of [['discover','discover'],['outside-hours','outsideHours'],['avoid-overlap','avoidOverlap'],['include-conditional','includeConditional']])$(id).checked=state[k];
  document.querySelectorAll('[data-day]').forEach(b=>b.setAttribute('aria-pressed',state.days.includes(b.dataset.day)));
  document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',state.category===b.dataset.category));
  document.querySelectorAll('[data-period]').forEach(b=>b.setAttribute('aria-pressed',state.period===b.dataset.period));
  document.querySelectorAll('[data-rec-mode]').forEach(b=>b.setAttribute('aria-pressed',state.recommendationMode===b.dataset.recMode));
  document.querySelectorAll('[data-us-mode]').forEach(b=>b.setAttribute('aria-pressed',(b.dataset.usMode==='include')===state.includeUS));
  $('mode-help').textContent=state.recommendationMode==='discover'?'Non-U.S. by default. Same occasion-first ranking.':'The biggest events worldwide, including U.S. sports.';
  $('watching-from').textContent=state.country?`Watching from: ${countryName()}*`:'Country not inferred';
  $('watching-from').title='Suggested from your time zone, not exact geolocation. It only supplies a small local-interest nudge.';
  $('custom-hours').classList.toggle('hidden',state.period!=='custom');
  $('custom-help').textContent=state.fromTime===state.toTime?'Equal times mean all day.':state.fromTime>state.toTime?'Ends the next day; belongs to the day it starts.':'Applies to each selected day, in your time zone.';
  $('min-minutes').disabled=state.matchMode!=='overlap';
  $('time-weight-label').textContent=state.timeWeight+'%';$('local-weight-label').textContent=state.localWeight+'%';
  $('outside-hours').disabled=!state.discover;
  const available=visibleLeagues(),n=available.filter(l=>state.leagues.includes(l)).length;
  $('league-summary').textContent=n===available.length?`All sports${state.category==='all'?'':' · '+categoryLabel(state.category)}`:`${n} competitions selected`;
  renderTags();
 }
 function renderLeagues(){
  const available=visibleLeagues(),q=$('league-search').value.trim().toLocaleLowerCase();
  const groups=Object.entries(GROUPS).map(([s,ls])=>[s,ls.filter(l=>available.includes(l)&&(`${l} ${s} ${sportLabel(s)}`).toLocaleLowerCase().includes(q))]).filter(([,ls])=>ls.length);
  $('league-toggles').innerHTML=groups.length?groups.map(([sport,ls])=>`<section class="league-group"><h3>${esc(sportLabel(sport))}<button class="group-select" data-group="${esc(sport)}">Only this sport</button></h3><div class="league-options">${ls.map(l=>{const count=data.filter(g=>g.league===l&&E.matchesCategory(g,state)).length;return `<label class="league-option"><input type="checkbox" data-league="${esc(l)}" ${state.leagues.includes(l)?'checked':''}><span>${esc(l)}</span><small class="${count?'is-demo':''}">${count?'Feed · '+count:(D.feed?.mappedLeagues||[]).includes(l)?'Mapped':'Not mapped'}</small></label>`;}).join('')}</div></section>`).join(''):'<p class="empty-mini">No matching competition.</p>';
  $('league-total').textContent=`${available.filter(l=>state.leagues.includes(l)).length} of ${available.length} selected · ${categoryLabel(state.category)||'All categories'}`;
 }
 function peoplePanel(g){
  const info=g.keyPeople;if(!info)return'';const ps=info.players||[];
  if(!ps.length)return `<p class="team-news-note">${esc(info.label)}: not verified by this connection yet.</p>`;
  return `<section class="personnel-block"><div class="personnel-heading"><strong>${esc(info.label)}</strong><span>${g.isDemo?'FICTIONAL DATA':'PROVIDER DATA'}</span></div><div class="personnel-grid">${ps.map(p=>{const team=E.participants(g).find(t=>t.id===p.teamId);return `<div><strong>${esc(p.name||'Not announced')}</strong><span>${esc(team?.name||p.role||'')}</span><span class="person-stat">${esc(p.statLine||'Stats not connected')}</span></div>`;}).join('')}</div><p class="personnel-period">${info.type==='scoring_leaders'?esc(info.statsPeriod||'Season stats')+' · availability unverified':g.isDemo?'Demo assignments · not real probable starters':'Provider-reported assignment · subject to change'}</p></section>`;
 }
 function glyph(){return '<svg class="sport-glyph" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M3 8h14M4.5 14.5l11-9M8 3c5 5 5 9 4 14"/></svg>';}
 const shortStage=g=>({final:'Final',semifinal:'Semifinal',postseason:'Postseason',decider:'Series decider',preseason:'Preseason',marquee:'Featured match',regular:'Scheduled match'}[g.stage]||'Scheduled event');
 function matchup(g){const ps=E.participants(g);if(g.title||ps.length!==2)return `<div class="matchup"><h2 class="single-title">${esc(title(g))}</h2></div>`;return `<div class="matchup">${ps.map((p,i)=>`${i?'<span class="vs">vs</span>':''}<div class="side"><span class="team-name">${esc(displayName(p))}</span><small>${esc(shortStage(g))}</small></div>`).join('')}</div>`;}
 function storySummary(g){
  const tags=T.forGame(g),ps=E.participants(g);
  if(tags.includes('ranked-opponents'))return `${ps.map(displayName).join(' meets ')}. Two ranked teams, with a result worth following.`;
  if(tags.includes('championship'))return `The ${g.league} title is on the line.${g.conditional?' This game is played only if the series needs it.':''}`;
  if(tags.includes('elimination'))return `The season is on the line in ${g.league}.${g.conditional?' This game is played only if the series needs it.':''}`;
  if(tags.includes('playoffs'))return `Postseason stakes in ${g.league}.${!ps.length?' Matchup details are still to be confirmed.':''}${g.conditional?' This game is played only if the series needs it.':''}`;
  if(g.stage==='semifinal')return `A place in the ${g.league} final is at stake.`;
  const evidence=(g.tagEvidence||[]).find(e=>tags.includes(e.id)&&e.detail);
  if(evidence)return evidence.detail;
  return `A ${g.league} fixture${g.venue?' at '+g.venue:''}. Story context is still to be confirmed.`;
 }
 function card(g){
  const slot=slotFor(g),t=timeParts(g.start);
  return `<article class="game-card" data-game-id="${g.id}" data-category="${esc(g.category)}"><div class="card-date"><span class="day">${t.day.toUpperCase()}</span><span class="calendar-date">${t.date.toUpperCase()}</span><time class="card-time" datetime="${new Date(g.start).toISOString()}">${esc(t.time)} ${esc(t.zone)}${slot&&slot.start>slot.sessionStart?'<br><small>Your hours overlap later</small>':''}</time></div><div class="card-content"><div class="league-meta">${glyph()}<span>${esc(g.league)}</span><span class="category">${categoryLabel(g.category)}</span></div>${matchup(g)}${cardTags(g)}<div class="promo"><h3>${T.forGame(g).length||g.stage==='semifinal'?'Why it matters':'On the calendar'}</h3><p>${esc(storySummary(g))}</p></div><div class="card-lower">${slot?`<p class="viewing-slot">Your window: ${esc(slotLine(slot))}<br>${minutesLabel(Math.round((slot.end-slot.start)/60000))} watchable · estimated</p>`:''}<div class="card-bottom"><button class="outline-button event-button" data-detail="${g.id}">View event ↗</button><span class="quiet">${esc(shortStage(g))}</span></div><div class="card-details-row"><a href="${esc(g.source?.url)}" target="_blank" rel="noopener noreferrer">Schedule source ↗</a></div></div></div></article>`;
 }
 function discoveryCard(g,outside){const s=slotFor(g)||(outside?g.exceptionSlots?.[0]:null),t=timeParts(s?.start||g.start);return `<article class="discovery-card" data-discovery-id="${g.id}"><div class="discovery-meta"><span>${esc(g.league)} · ${categoryLabel(g.category)}</span><time>${t.day} ${t.date}<br>${esc(t.time)} ${esc(t.zone)}</time></div><h3>${esc(title(g))}</h3>${cardTags(g)}<p>${esc(storySummary(g))}</p><div class="discovery-bottom"><button class="text-button" data-detail="${g.id}">${outside?'Outside your hours':'View event'} ↗</button></div></article>`;}
 function empty(){
  if(!state.days.length)return ['Choose a day to start.','Choose any day of the week in your filters.','All days','days'];
  if(!visibleLeagues().some(l=>state.leagues.includes(l)))return ['Select a sport or competition.','Start broadly, then narrow with tags.','All sports','leagues'];
  if(D.feed?.loading)return ['Finding the events worth your time…','We’re checking the schedule for your dates.','','loading'];
  if(D.feed?.error)return ['The schedule could not be loaded.',D.feed.error,'Retry','retry'];
  if(!D.feed)return ['Your schedule will appear here.','Connect your API key on the local setup screen, then choose your dates.','All sports','leagues'];
  if(state.tags.length)return ['No verified stories match these filters yet.','Some stories still need confirmed context. Try fewer tags to see more of the schedule.','Clear tags','tags'];
  return ['No imported events fit these filters.','The provider may have gaps, events may have finished, or start times may be unconfirmed. Try wider hours or different dates. Coverage is not complete.','Any time','hours'];
 }
 function renderPendingBaseball(){
  const box=$('pending-baseball');if(!box)return;
  const rows=(D.feed?.pendingBaseball||[]).filter(g=>state.leagues.includes(g.league)&&['all',g.category].includes(state.category)&&(!g.conditional||state.includeConditional)&&(!state.tags.length||(state.tagMode==='all'?state.tags.every(t=>t==='playoffs'||(t==='if-necessary'&&g.conditional)):state.tags.some(t=>t==='playoffs'||(t==='if-necessary'&&g.conditional)))));
  // With no start time a Japan date can touch two viewer dates. Display the
  // official Japan date explicitly and do not claim an availability match.
  const visible=rows.filter(g=>{const from=new Date(g.date+'T00:00:00+09:00'),to=new Date(+from+86400000-1);const fmt=new Intl.DateTimeFormat('en-CA',{timeZone:state.timezone,year:'numeric',month:'2-digit',day:'2-digit'});const iso=d=>{const parts=Object.fromEntries(fmt.formatToParts(d).map(x=>[x.type,x.value]));return parts.year+'-'+parts.month+'-'+parts.day;};const weekday=new Intl.DateTimeFormat('en-US',{timeZone:state.timezone,weekday:'short'});return [from,to].some(d=>iso(d)>=state.startDate&&iso(d)<=state.endDate&&state.days.includes(weekday.format(d)));});
  box.classList.toggle('hidden',!visible.length);
  box.innerHTML=visible.length?'<h3>Dates to keep an eye on</h3><p>Schedule details are awaiting confirmation. They’ll join your picks once the missing schedule details are confirmed.</p><ul>'+visible.map(g=>`<li><strong>${esc(g.title)}</strong> · ${esc(g.date)} (Japan)${g.conditional?' · If necessary':''} · <a href="${esc(g.source.url)}" target="_blank" rel="noopener noreferrer">Official schedule ↗</a></li>`).join('')+'</ul>':'';
 }
 function renderResults(){
  renderPendingBaseball();
  filtered=E.filterGames(data,state);ranked=E.rankGames(filtered,state.profile,[],state);
  const modeRanked=state.recommendationMode==='discover'?E.discoveryOrder(ranked,state):ranked;
  let pool=modeRanked;
  if(view==='slate')pool=[...ranked].sort((a,b)=>(slotFor(a)?.start||Date.parse(a.start))-(slotFor(b)?.start||Date.parse(b.start)));
  else if(state.avoidOverlap)pool=E.buildPlan(modeRanked,6);
  const visible=pool.slice(0,limit);
  $('results-title').textContent={picks:state.avoidOverlap?'A plan without overlaps':'Worth your attention',slate:'Your sports calendar'}[view];
  $('results-eyebrow').textContent=view==='picks'?'THE BIG OCCASIONS & THE NEXT DISCOVERIES':'IN DATE ORDER';
  const activeTags=state.tags.map(id=>T.byId[id].label).join(state.tagMode==='all'?' + ':' / ');
  $('results-description').textContent=`${filtered.length} events for your dates${activeTags?' · '+activeTags:''}. ${state.recommendationMode==='discover'?'Discover beyond U.S. sports, with the biggest occasions first.':'Major occasions first. Your next discovery could be any sport.'}`;
  $('results-live').textContent=`${filtered.length} matching events; ${visible.length} displayed.`;
  document.querySelectorAll('[data-view]').forEach(b=>{const on=b.dataset.view===view;b.classList.toggle('nav-active',on);if(b.getAttribute('role')==='tab'){b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;}});
  $('game-list').setAttribute('aria-labelledby','tab-'+view);
  $('overlap-control').classList.toggle('hidden',view!=='picks');
  $('show-more').classList.toggle('hidden',pool.length<=limit);$('show-more').textContent=`Show ${Math.min(6,pool.length-limit)} more events ↓`;
  const notes=[];if(view==='picks'&&state.avoidOverlap)notes.push('Uses each event’s longest fitting session; the full game may not fit. End times are estimates.');
  $('context-note').textContent=notes.join(' ');$('context-note').classList.toggle('hidden',!notes.length);
  if(visible.length)$('game-list').innerHTML=visible.map(card).join('');
  else {const[h,p,label,action]=empty();$('game-list').innerHTML=`<div class="empty-state"><h2>${esc(h)}</h2><p>${esc(p)}</p>${label?`<button class="primary-button" data-empty="${action}">${esc(label)}</button>`:''}</div>`;}
  // The main list is already global. The sidebar is simply the next best things,
  // never a separate foreign-sports bucket.
  const visibleIds=new Set(visible.map(g=>g.id)),also=modeRanked.filter(g=>!visibleIds.has(g.id)).slice(0,3),outside=E.discoveries(data,state,[],true,2);
  $('discovery-section').classList.toggle('hidden',!state.discover||view!=='picks');
  $('discovery-list').innerHTML=also.length?also.map(g=>discoveryCard(g,false)).join(''):'<p class="empty-mini">Nothing else clears the bar with these filters.</p>';
  $('outside-section').classList.toggle('hidden',!outside.length);$('outside-list').innerHTML=outside.map(g=>discoveryCard(g,true)).join('');
 }
 function refresh({resetLimit=true}={}){if(resetLimit)limit=view==='picks'?4:6;sync();renderResults();persist();if($('league-dialog').open)renderLeagues();}
 function setView(value){if(!['picks','slate'].includes(value))return;view=value;limit=view==='picks'?4:6;renderResults();}
 function showDialog(id){$(id).showModal();}
 function openCoverage(){
  const audienceCount=LEAGUES.filter(l=>A.auditFor(l)?.path==='audience').length,curatedCount=LEAGUES.length-audienceCount;
  $('coverage-metrics').innerHTML=`<div><strong>${LEAGUES.length}</strong><span>curated competitions</span></div><div><strong>${audienceCount}</strong><span>clear the 500K audience path</span></div><div><strong>${curatedCount}</strong><span>major-league / cup / global admissions</span></div>`;
  $('coverage-sources').innerHTML=LEAGUES.map(l=>{const a=A.auditFor(l),count=data.filter(g=>g.league===l).length,mapped=(D.feed?.mappedLeagues||[]).includes(l),status=count?`Feed · ${count}`:mapped?'Mapped':'Adapter pending',title=a?.url?`<a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">${esc(l)} ↗</a>`:`<strong>${esc(l)}</strong>`,detail=a?.path==='audience'?`${(a.audience/1000000).toFixed(a.audience>=10000000?1:2).replace(/\.0+$/,'')}M · ${esc(a.market)} · ${esc(a.period)}`:esc(a?.reason||'Curated major competition'),meta=a?.path==='audience'?`${esc(a.metric)} · ${esc(a.source)}`:`Admission: ${esc((a?.path||'curated').replaceAll('_',' '))}`;return `<div class="coverage-source">${title}<p>${detail}</p><small>${meta} · <strong>${esc(status)}</strong></small></div>`;}).join('');showDialog('coverage-dialog');
 }
 function details(id){
  detailId=id;const raw=data.find(g=>g.id===id);if(!raw)return;const g=E.scoreGame({...raw,slots:E.matchingSlots(raw,state)},state.profile,[],state),t=timeParts(g.start),tags=T.forGame(g),ev=(g.tagEvidence||[]).filter(e=>tags.includes(e.id));
  $('event-dialog-content').innerHTML=`<div class="event-detail"><div class="dialog-header"><div><p class="eyebrow">${esc(g.league)} · PROVIDER SCHEDULE</p><h2 id="event-title">${esc(title(g))}</h2></div><button class="close" data-close="event-dialog" aria-label="Close event details">×</button></div><p class="detail-meta">${t.day}, ${t.date} · ${esc(t.time)} ${esc(t.zone)} · ${categoryLabel(g.category)}</p>${cardTags(g)}<p class="detail-body">${esc(E.reason(g,state.profile,[]))}</p>${peoplePanel(g)}<h3>Verified story context</h3><ul class="evidence-list">${ev.map(e=>`<li><strong>${esc(T.byId[e.id].label)}:</strong> ${esc(e.detail)} <a href="${esc(e.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source ↗</a></li>`).join('')||'<li>No reviewed story context for this fixture yet.</li>'}</ul><details class="score-details"><summary>Data &amp; ranking notes</summary><p><strong>Tier ${esc(g.occasionTier||'?')} · Watch score ${Math.round(g.score||0)}</strong>. Weekend Watcher ranks occasion first, then matchup and story. Time fit and country relevance are bounded nudges after your hard availability filters.</p><p>Importance ${Math.round(g.signals?.importance||0)} · matchup ${Math.round(g.signals?.matchup||0)} · story ${Math.round(g.signals?.story||0)} · time fit ${Math.round(g.signals?.windowFit||0)}. Verified championship/elimination/playoff and elite ranked-matchup signals create score floors; preseason is capped.</p><p>Time-fit nudge: ${state.timeWeight}%; local relevance: up to ${state.localWeight}%. ${state.recommendationMode==='discover'?'Discover Something keeps the strongest pick first, then gives modest variety bonuses.':'Best Overall uses the occasion-first score.'}</p><p>Provider status: ${esc(g.source?.providerStatus||'Not supplied')}. Retrieved: ${esc(g.source?.fetchedAt||'Unknown')}.</p><p>Weekend Watcher stops at discovery. Use the fixture source or your preferred search/streaming service from here.</p></details><div class="detail-links"><a href="${esc(g.source?.url)}" target="_blank" rel="noopener noreferrer">View data source ↗</a>${g.source?.timeSource?`<a href="${esc(g.source.timeSource)}" target="_blank" rel="noopener noreferrer">Start time source ↗</a>`:''}</div></div>`;
  if(!$('event-dialog').open)showDialog('event-dialog');
 }
 function applyTag(id,origin){if(id==='if-necessary'&&!state.tags.includes(id))state.includeConditional=true;state.tags=toggle(state.tags,id);if($('event-dialog').open)$('event-dialog').close();refresh();const focus=origin?.closest('#tag-filters')?document.querySelector(`#tag-filters [data-tag="${id}"]`):null;focus?.focus({preventScroll:true});}
 document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.close){$(b.dataset.close).close();return;}
  if(b.dataset.tag){applyTag(b.dataset.tag,b);return;}
  if(b.dataset.view){setView(b.dataset.view);return;}
  if(b.dataset.recMode){state.recommendationMode=b.dataset.recMode;state.includeUS=b.dataset.recMode!=='discover';refresh();return;}
  if(b.dataset.usMode){state.includeUS=b.dataset.usMode==='include';refresh();return;}
  if(b.dataset.day){state.days=toggle(state.days,b.dataset.day);refresh();return;}
  if(b.dataset.category){state.category=b.dataset.category;refresh();return;}
  if(b.dataset.period){state.period=b.dataset.period;refresh();return;}
  if(b.dataset.detail){details(b.dataset.detail);return;}
  if(b.dataset.group){state.leagues=GROUPS[b.dataset.group].filter(l=>visibleLeagues().includes(l));refresh();return;}
  if(b.dataset.empty==='retry'){$('reload-feed').click();return;}
  if(b.dataset.empty){switch(b.dataset.empty){case'picks':view='picks';break;case'days':state.days=[...ALL_DAYS];break;case'leagues':state.leagues=[...LEAGUES];break;case'tags':state.tags=[];break;case'hours':state.period='any';break;}refresh();}
 });
 for(const[id,key]of[['timezone','timezone'],['priority','profile'],['tag-mode','tagMode'],['match-mode','matchMode'],['min-minutes','minMinutes'],['time-weight','timeWeight'],['local-weight','localWeight'],['from-time','fromTime'],['to-time','toTime']])$(id).addEventListener('change',()=>{
  const value=$(id).value;if(['fromTime','toTime'].includes(key)&&E.parseClock(value)===null){$(id).value=state[key];notify('Enter a valid time.');return;}state[key]=['minMinutes','timeWeight','localWeight'].includes(key)?+value:value;refresh();if(key==='timezone')window.dispatchEvent(new Event('watcher-zone-change'));
 });
 for(const[id,key]of[['discover','discover'],['outside-hours','outsideHours'],['avoid-overlap','avoidOverlap'],['include-conditional','includeConditional']])$(id).addEventListener('change',()=>{state[key]=$(id).checked;refresh();});
 $('league-toggles').addEventListener('change',e=>{if(e.target.dataset.league){state.leagues=toggle(state.leagues,e.target.dataset.league);refresh();}});
 $('league-search').oninput=renderLeagues;
 $('all-leagues').onclick=()=>{state.leagues=[...LEAGUES];refresh();};$('clear-leagues').onclick=()=>{state.leagues=[];refresh();};
 $('league-button').onclick=()=>{renderLeagues();showDialog('league-dialog');};
 $('clear-tags').onclick=()=>{state.tags=[];refresh();};
 $('show-more').onclick=()=>{limit+=6;renderResults();};
 $('more-filters').onclick=()=>{const open=$('advanced-filters').classList.toggle('hidden')===false;$('more-filters').setAttribute('aria-expanded',String(open));};
 $('device-zone').onclick=()=>{state.timezone=deviceZone();refresh();notify('Using your device time zone.');window.dispatchEvent(new Event('watcher-zone-change'));};
 $('reset').onclick=()=>{state=defaults();view='picks';$('league-search').value='';refresh();notify('Filters reset.');window.dispatchEvent(new Event('watcher-zone-change'));};
 $('coverage-button').onclick=openCoverage;$('coverage-sidebar').onclick=openCoverage;$('about-button').onclick=()=>showDialog('about-dialog');
 $('coverage-to-leagues').onclick=()=>{$('coverage-dialog').close();renderLeagues();showDialog('league-dialog');};
 document.querySelector('.view-tabs').addEventListener('keydown',e=>{const order=['picks','slate'];let n=order.indexOf(view);if(e.key==='ArrowRight')n=(n+1)%order.length;else if(e.key==='ArrowLeft')n=(n+order.length-1)%order.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=order.length-1;else return;e.preventDefault();setView(order[n]);$('tab-'+view).focus();});
 document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}));
 window.WatcherUI={getState:()=>JSON.parse(JSON.stringify(state)),getView:()=>view,replaceFeed:feed=>{D.feed=feed;D.games=feed.games;D.startDate=feed.startDate;D.endDate=feed.endDate;data=feed.games.filter(g=>E.competitionAllowed(g));state.startDate=feed.startDate;state.endDate=feed.endDate;refresh();}};
 initZones();refresh();
})();
