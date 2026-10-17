/* Public demo: synthetic examples, real discovery controls, no provider requests. */
(function(root,factory){
 'use strict';
 const api=factory(typeof module==='object'&&module.exports?require('./dates.js'):root.WatcherDates);
 if(typeof module==='object'&&module.exports)module.exports=api;
 else {root.WatcherDemo=api;if(root.document)api.mount(root);}
})(typeof globalThis!=='undefined'?globalThis:this,function(R){
 'use strict';
 const PROJECT_URL='https://github.com/teddyhurley/weekend-watcher';
 const CASE_STUDY_URL=PROJECT_URL+'/blob/main/docs/PRODUCT.md';
 const LABEL='INTERACTIVE DEMO · FICTIONAL EVENTS';
 const DATE_STORE='weekend-watcher-demo-dates-v1',PREF_STORE='weekend-watcher-demo-v1';
 const DAY=86400000;
 // Absolute UTC dates determine identity and start time. A different date range
 // or viewer time zone cannot move an example already present in both views.
 // The weekly pattern deliberately spans seasons: these are product scenarios,
 // never predictions or representations of real future fixtures.
 const examples=[
  {key:'baseball-elimination',day:1,time:'01:05',league:'MLB',teams:['Bayhaven Pelicans','Redwood Meteors'],countries:['US','US'],duration:195,stage:'decider',tags:['playoffs','elimination'],strengths:[88,89],body:'Fictional scenario: an evenly matched series reaches a deciding game. The loser is out.'},
  {key:'japan-baseball',day:1,time:'09:00',league:'NPB',teams:['Hoshikawa Comets','Midorihama Cranes'],countries:['JP','JP'],duration:195,stage:'regular',tags:[],strengths:[80,71]},
  {key:'cricket-stars',day:1,time:'14:00',league:'IPL',teams:['Devanagar Kites','Suryapur Cyclones'],countries:['IN','IN'],duration:210,stage:'marquee',tags:['star-players'],strengths:[91,90]},
  {key:'returning-coach',day:1,time:'18:45',league:'Serie A',teams:['Valdoro Calcio','Portavalle FC'],countries:['IT','IT'],duration:120,stage:'regular',tags:['former-coach'],strengths:[82,81]},
  {key:'hockey-monday',day:1,time:'23:00',league:'NHL',teams:['Northhaven Glaciers','Lakecrest Lynx'],countries:['CA','US'],duration:165,stage:'regular',tags:[],strengths:[79,72]},
  {key:'basketball-tuesday',day:2,time:'02:00',league:'NBA',teams:['Cedar Bay Arrows','Copper Mesa Sparks'],countries:['US','US'],duration:150,stage:'regular',tags:[],strengths:[84,75]},
  {key:'korea-playoff',day:2,time:'09:30',league:'KBO',teams:['Daeseong Falcons','Haebin Tides'],countries:['KR','KR'],duration:195,stage:'postseason',tags:['playoffs'],strengths:[86,84]},
  {key:'german-league',day:2,time:'18:30',league:'Bundesliga',teams:['SV Lindenfels','Rosenhafen 04'],countries:['DE','DE'],duration:120,stage:'regular',tags:[],strengths:[85,70]},
  {key:'european-semifinal',day:2,time:'19:00',league:'UEFA Champions League',teams:['Monteluce Athletic','Castelmar United'],countries:['IT','ES'],duration:135,stage:'semifinal',tags:['playoffs','rematch'],strengths:[94,93],body:'Fictional scenario: a semifinal reunites two evenly matched clubs. A place in the final is at stake.'},
  {key:'american-playoff-race',day:2,time:'23:30',league:'MLS',teams:['Baystone FC','Prairie Harbor SC'],countries:['US','US'],duration:120,stage:'regular',tags:['playoff-race'],strengths:[78,77]},
  {key:'hockey-stars',day:3,time:'01:00',league:'NHL',teams:['Silverpine Boreals','Granite Bay Orcas'],countries:['CA','US'],duration:165,stage:'marquee',tags:['star-players'],strengths:[87,85]},
  {key:'japan-football',day:3,time:'10:00',league:'J1 League',teams:['Hoshihara United','Minatose FC'],countries:['JP','JP'],duration:120,stage:'regular',tags:[],strengths:[77,74]},
  {key:'french-league',day:3,time:'18:45',league:'Ligue 1',teams:['AS Clairmont','Port-Rivage FC'],countries:['FR','FR'],duration:120,stage:'regular',tags:[],strengths:[83,72]},
  {key:'cup-knockout',day:3,time:'19:45',league:'Carabao Cup',teams:['Briarford Athletic','Cedarwick City'],countries:['GB','GB'],duration:135,stage:'postseason',tags:['playoffs','elimination'],strengths:[84,83]},
  {key:'south-american-title-race',day:3,time:'22:00',league:'Brasileirão',teams:['Aurora do Vale','Estrela da Serra'],countries:['BR','BR'],duration:120,stage:'regular',tags:['title-race'],strengths:[90,89]},
  {key:'basketball-reunion',day:4,time:'02:00',league:'NBA',teams:['Crescent Valley Foxes','Desert Harbor Scorpions'],countries:['US','US'],duration:150,stage:'regular',tags:['former-player'],strengths:[80,82]},
  {key:'korea-baseball',day:4,time:'09:30',league:'KBO',teams:['Seorim Comets','Wolha Bears'],countries:['KR','KR'],duration:195,stage:'regular',tags:[],strengths:[76,72]},
  {key:'european-basketball',day:4,time:'18:00',league:'EuroLeague',teams:['Alto Porto BC','Danubia Towers'],countries:['PT','RS'],duration:140,stage:'postseason',tags:['playoffs'],strengths:[91,89]},
  {key:'second-tier-derby',day:4,time:'19:45',league:'Championship',teams:['Alderhaven Rovers','Brackenmere Town'],countries:['GB','GB'],duration:120,stage:'regular',tags:['rivalry'],strengths:[75,75]},
  {key:'spanish-league',day:4,time:'20:00',league:'La Liga',teams:['CD Valderisco','Puerto Lucero'],countries:['ES','ES'],duration:120,stage:'regular',tags:[],strengths:[86,71]},
  {key:'conditional-baseball',day:5,time:'00:10',league:'MLB',teams:['Bayhaven Pelicans','Redwood Meteors'],countries:['US','US'],duration:195,stage:'postseason',tags:['playoffs','if-necessary'],conditional:true,strengths:[88,89],body:'Fictional scenario: this playoff game is only played if the series needs it. The toggle controls its inclusion; its score receives no penalty.'},
  {key:'australian-derby',day:5,time:'09:00',league:'A-League Men',teams:['Southhaven United','Coral Bay Athletic'],countries:['AU','AU'],duration:120,stage:'regular',tags:['rivalry'],strengths:[79,78]},
  {key:'japan-playoff',day:5,time:'09:15',league:'NPB',teams:['Hoshikawa Comets','Midorihama Cranes'],countries:['JP','JP'],duration:195,stage:'postseason',tags:['playoffs'],strengths:[85,86]},
  {key:'relegation-battle',day:5,time:'19:30',league:'Premier League',teams:['Merebridge Albion','Fenwick Vale'],countries:['GB','GB'],duration:120,stage:'regular',tags:['relegation-battle'],strengths:[69,68]},
  {key:'mexican-league',day:5,time:'23:00',league:'Liga MX',teams:['Atlético Sierra Azul','Deportivo Altaluna'],countries:['MX','MX'],duration:120,stage:'regular',tags:[],strengths:[77,74]},
  {key:'australian-final',day:6,time:'04:30',league:'AFL',teams:['Harborwick Kestrels','Redgum Wallabies'],countries:['AU','AU'],duration:170,stage:'final',tags:['championship','playoffs'],strengths:[93,91],body:'Fictional scenario: the season ends with one title on the line. A major occasion from a sport you might otherwise overlook.'},
  {key:'global-cricket',day:6,time:'08:00',league:'ICC Men’s T20 World Cup',teams:['Meridian XI','Asteria XI'],countries:[],duration:210,stage:'semifinal',tags:['playoffs'],strengths:[90,89],body:'Fictional scenario: two invented national sides contest a global T20 semifinal. Competition names illustrate the intended scope.'},
  {key:'english-title-race',day:6,time:'12:30',league:'Premier League',teams:['Briarford Athletic','Cedarwick City'],countries:['GB','GB'],duration:120,stage:'regular',tags:['title-race','rivalry'],strengths:[94,92]},
  {key:'ranked-college-game',day:6,time:'19:00',league:'NCAA FBS',teams:['Cedarfield State','Ridgewater University'],countries:['US','US'],duration:210,stage:'marquee',tags:['ranked-opponents','rivalry'],ranks:[3,7],strengths:[94,91],body:'Fictional scenario: the No. 3 and No. 7 teams in an invented top-25 poll meet. The ranking engine recognizes a top-ten matchup.'},
  {key:'brazilian-cup',day:6,time:'20:00',league:'Copa do Brasil',teams:['Aurora do Vale','Estrela da Serra'],countries:['BR','BR'],duration:135,stage:'postseason',tags:['playoffs'],strengths:[86,84]},
  {key:'baseball-saturday',day:6,time:'23:05',league:'MLB',teams:['Canyon Falls Bison','Port Willow Herons'],countries:['US','US'],duration:195,stage:'regular',tags:[],strengths:[72,76]},
  {key:'rugby-sunday',day:0,time:'05:00',league:'NRL',teams:['Saltwater Dolphins','Redcliff Chargers'],countries:['AU','AU'],duration:110,stage:'postseason',tags:['playoffs'],strengths:[87,86]},
  {key:'indian-cricket',day:0,time:'10:00',league:'IPL',teams:['Devanagar Kites','Suryapur Cyclones'],countries:['IN','IN'],duration:210,stage:'regular',tags:[],strengths:[83,80]},
  {key:'french-rugby',day:0,time:'14:00',league:'Top 14',teams:['RC Valdebrume','Stade de Belle-Rive'],countries:['FR','FR'],duration:110,stage:'marquee',tags:['rivalry'],strengths:[90,88]},
  {key:'american-football',day:0,time:'17:00',league:'NFL',teams:['Prairie Lake Bison','Canyonport Condors'],countries:['US','US'],duration:200,stage:'regular',tags:[],strengths:[85,79]},
  {key:'continental-final',day:0,time:'20:00',league:'Copa Libertadores',teams:['Club Altacosta','Deportivo Río Claro'],countries:['AR','BR'],duration:135,stage:'final',tags:['championship','playoffs'],strengths:[93,92],body:'Fictional scenario: two invented clubs meet for a continental title. The occasion earns priority regardless of familiarity.'},
  {key:'portuguese-league',day:0,time:'20:15',league:'Primeira Liga',teams:['União da Ribeirinha','Atlético Monte Azul'],countries:['PT','PT'],duration:120,stage:'regular',tags:[],strengths:[84,69]}
 ];
 const LEAGUES=[...new Set(examples.map(e=>e.league))];
 const slug=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 function evidenceFor(example,game,sourceUrl){
  const [away,home]=game.participants;
  const text={
   rivalry:'Fictional scenario: two nearby rivals meet with bragging rights at stake.',
   playoffs:'Fictional scenario: this is a postseason or knockout fixture.',
   championship:'Fictional scenario: the winner takes the competition title.',
   elimination:'Fictional scenario: the loser is eliminated from the competition.',
   'ranked-opponents':'Fictional top-25 poll: both invented teams are ranked. These are not AP or CFP rankings.',
   'title-race':'Fictional standings: these clubs are first and second with four matches left.',
   'playoff-race':'Fictional standings: both clubs are close to the final playoff qualification place.',
   'relegation-battle':'Fictional standings: both clubs are in danger of relegation with four matches left.',
   'former-player':'Fictional storyline: Avery Mercer returns to face a former team.',
   'former-coach':'Fictional storyline: coach Luca Bellori faces a former club.',
   'star-players':'Fictional scenario: leading players make this a matchup to follow.',
   rematch:'Fictional storyline: these clubs met in the previous season’s knockout round.',
   'if-necessary':'Fictional scenario: this game takes place only if the series is still undecided.'
  };
  return example.tags.map(id=>{
   const ev={id,isDemo:true,status:'example',detail:text[id],sourceUrl};
   if(id==='ranked-opponents')Object.assign(ev,{rankingSystem:'Fictional demo Top 25',cutoff:25,ranks:[...example.ranks]});
   if(id==='relegation-battle')Object.assign(ev,{relegationEnabled:true,riskStatus:'at-risk',remainingFixtures:4,riskTeamIds:[away.id,home.id],standingsAsOf:new Date(Date.parse(game.start)-DAY).toISOString()});
   if(id==='former-player'||id==='former-coach')Object.assign(ev,{person:id==='former-player'?'Avery Mercer':'Luca Bellori',formerTeamId:away.id,currentTeamId:home.id});
   return ev;
  });
 }
 function fixture(example,date,catalog,sourceUrl){
  const competition=catalog[example.league];
  if(!competition)throw new Error('Missing demo competition: '+example.league);
  const participants=example.teams.map((name,index)=>({id:'demo-team-'+slug(name),name,strength:example.strengths[index],...(example.countries[index]?{country:example.countries[index]}:{}),...(example.ranks?{rank:example.ranks[index]}:{})}));
  const game={
   id:'demo-'+date+'-'+example.key,isDemo:true,league:example.league,sport:competition.sport,
   competition:{...competition},category:'men',participants,countries:[...new Set(example.countries)],
   start:date+'T'+example.time+':00.000Z',duration:example.duration,status:'scheduled',stage:example.stage,
   conditional:example.conditional===true,format:'Fictional demo fixture',
   promo:{body:example.body||'Fictional scenario: explore this example with the same ranking, local-time and story filters used by Weekend Watcher.'},
   source:{url:sourceUrl,provider:'Fictional demo fixtures',providerStatus:'Synthetic example — not a real scheduled event'},
   noteworthy:{score:example.stage==='final'?100:example.stage==='decider'?98:example.stage==='semifinal'?92:example.stage==='postseason'?90:example.stage==='marquee'?86:70,reason:'Fictional scenario illustrating discovery and ranking.'}
  };
  game.tagEvidence=evidenceFor(example,game,sourceUrl);
  return game;
 }
 function createFeed(range,catalog,{sourceUrl=CASE_STUDY_URL}={}){
  const {startDate,endDate}=range||{};
  if(!R.validDate(startDate)||!R.validDate(endDate)||endDate<startDate||Date.parse(endDate)-Date.parse(startDate)>28*DAY)throw new RangeError('Choose a valid demo range of today through 28 days ahead.');
  const games=[];
  // Both buffers are needed for UTC−12 through UTC+14 and games crossing midnight.
  for(let date=R.shift(startDate,-1);date<=R.shift(endDate,1);date=R.shift(date,1)){
   const day=new Date(date+'T12:00:00Z').getUTCDay();
   for(const example of examples)if(example.day===day)games.push(fixture(example,date,catalog,sourceUrl));
  }
  games.sort((a,b)=>Date.parse(a.start)-Date.parse(b.start)||a.id.localeCompare(b.id));
  return {isDemo:true,provider:'Fictional demo fixtures',startDate,endDate,games,pendingBaseball:[],mappedLeagues:[],unmappedLeagues:[],issues:[],coverageComplete:false,
   demo:{fictional:true,exampleCompetitions:LEAGUES.length,pattern:'Weekly fictional scenarios at fixed UTC times',sourceUrl}};
 }
 function mount(root){
  const document=root.document,D=root.WatchData,E=root.WatchEngine,$=id=>document.getElementById(id);
  let selection,lastReport;
  function zone(){
   if(root.WatcherUI)return root.WatcherUI.getState().timezone;
   try{const saved=JSON.parse(root.localStorage.getItem(PREF_STORE)||'null');if(R.validZone(saved?.timezone))return saved.timezone;}catch(_){}
   try{return Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';}catch(_){return'UTC';}
  }
  function remember(){try{root.localStorage.setItem(DATE_STORE,JSON.stringify(selection));}catch(_){}}
  function message(text){$('feed-label').textContent=LABEL;$('feed-message').textContent=text;}
  function displayDates(){
   const {min,max}=R.bounds(new Date(),zone());
   for(const id of ['date-start','date-end']){$(id).min=min;$(id).max=max;}
   $('date-start').value=selection.startDate;$('date-end').value=selection.endDate;
   document.querySelectorAll('[data-date-preset]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.datePreset===selection.preset)));
   const last=new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(max+'T12:00:00Z'));
   $('date-help').textContent=`Examples in ${zone().replaceAll('_',' ')} · Explore dates through ${last}.`;
  }
  function allExamplesInRange(){
   if(!root.WatcherUI||!lastReport)return[];
   return E.filterGames(lastReport.games,{...root.WatcherUI.getState(),days:R.DAYS,leagues:LEAGUES,tags:[],category:'all',period:'any',windowsByDay:null,matchMode:'overlap',minMinutes:1,includeUS:true,includeConditional:true});
  }
  function describe(){message(`${allExamplesInRange().length} fictional events in these dates. Try the filters and time zones; examples follow the calendar, not real schedules.`);}
  function load(){
   const next={startDate:$('date-start').value,endDate:$('date-end').value},invalid=R.validate(next.startDate,next.endDate,new Date(),zone());
   $('date-error').textContent=invalid;if(invalid)return;
   selection={...selection,...next};displayDates();remember();
   lastReport=createFeed(selection,D.catalog);root.WatcherUI.replaceFeed(lastReport);describe();
  }
  function report(){
   let dialog=$('demo-information');
   if(!dialog){dialog=document.createElement('dialog');dialog.id='demo-information';dialog.setAttribute('aria-labelledby','demo-information-title');document.body.append(dialog);}
   dialog.replaceChildren();
   const add=(tag,text)=>{const node=document.createElement(tag);node.textContent=text;dialog.append(node);return node;};
   add('h2','Explore the demo').id='demo-information-title';
   add('p','Every team, matchup, rank, story and start time in this demo is fictional. Real competition names show the intended coverage. Examples repeat weekly and follow your selected calendar; they are not actual schedules.');
   add('h3','Three things to try');
   const list=add('ol','');
   for(const text of ['Choose “Discover something” to explore beyond U.S. sports, with major occasions still ranked first.','Change your viewing hours or time zone to see which events fit. Use “Avoid overlaps” for a plan that fits your window.','Open an event to inspect its example story context and ranking. Turn on “If necessary” to include conditional playoff games.']){const li=document.createElement('li');li.textContent=text;list.append(li);}
   const state=root.WatcherUI.getState(),matching=E.filterGames(lastReport.games,state).length;
   add('h3','Your current view');
   add('p',`${allExamplesInRange().length} fictional events in ${selection.startDate} through ${selection.endDate}; ${matching} match your filters. Times are shown in ${state.timezone.replaceAll('_',' ')}.`);
   add('p',`This demo represents ${LEAGUES.length} men’s competitions. It uses the project’s discovery interface and ranking rules with example data. Preferences stay in your browser, without an account.`);
   const link=add('a','Read the product case study ↗');link.href=CASE_STUDY_URL;link.target='_blank';link.rel='noopener noreferrer';
   const controls=add('p',''),close=document.createElement('button');close.className='outline-button';close.textContent='Back to events';close.onclick=()=>dialog.close();controls.append(close);
   dialog.showModal();
  }
  D.isDemo=true;D.label='Interactive demo · fictional events';
  D.catalog=Object.fromEntries(Object.entries(D.catalog).filter(([league])=>LEAGUES.includes(league)));
  D.groups=Object.fromEntries(Object.entries(D.groups).map(([sport,leagues])=>[sport,leagues.filter(l=>LEAGUES.includes(l))]).filter(([,leagues])=>leagues.length));
  let saved;try{saved=JSON.parse(root.localStorage.getItem(DATE_STORE)||'null');}catch(_){}
  selection=R.restore(saved,new Date(),zone());displayDates();
  lastReport=createFeed(selection,D.catalog);D.startDate=selection.startDate;D.endDate=selection.endDate;D.games=lastReport.games;D.feed=lastReport;
  const script=document.createElement('script');script.src='src/app.js';
  script.onload=()=>{
   $('date-form').onsubmit=e=>{e.preventDefault();load();};$('feed-report').onclick=report;
   for(const id of ['date-start','date-end'])$(id).oninput=()=>{selection.preset='custom';document.querySelectorAll('[data-date-preset]').forEach(b=>b.setAttribute('aria-pressed','false'));$('date-error').textContent=R.validate($('date-start').value,$('date-end').value,new Date(),zone());};
   document.querySelectorAll('[data-date-preset]').forEach(b=>b.onclick=()=>{selection={preset:b.dataset.datePreset,...R.preset(b.dataset.datePreset,new Date(),zone())};displayDates();load();});
   root.addEventListener('watcher-zone-change',()=>{selection=R.restore(selection,new Date(),zone());displayDates();remember();load();});
   describe();remember();
  };
  script.onerror=()=>message('The demo interface could not load. Reload this page to try again.');
  document.body.append(script);
 }
 return {PROJECT_URL,CASE_STUDY_URL,LABEL,LEAGUES,createFeed,mount};
});
