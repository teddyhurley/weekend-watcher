/* Pure recommendation and calendar logic. No network calls, AI, or user tracking.
 * Availability is specified at minute precision. Scan UTC minutes to construct
 * local windows: repeated DST hours are included and nonexistent ones are not.
 * This favors correctness/readability over a date library for this small demo.
 */
(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./tags.js') : root.WatcherTags, typeof module === 'object' && module.exports ? require('./scope.js') : root.WatcherScope, typeof module === 'object' && module.exports ? require('./audience.js') : root.WatcherAudience);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.WatchEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Tags, Scope, Audience) {
  'use strict';
  const MINUTE = 60000, DAY = 86400000;
  // Cross-sport ranking starts with occasion, not familiarity. Time and locality
  // are intentionally bounded nudges applied later; they cannot turn an exhibition
  // into a bigger event than a championship or elimination game.
  const PROFILES = {
    balanced: { importance: .53, matchup: .35, story: .12 },
    occasion: { importance: .70, matchup: .20, story: .10 },
    close: { importance: .35, matchup: .55, story: .10 },
    favorites: { importance: .53, matchup: .35, story: .12 }
  };
  const STAKES = { final: 100, semifinal: 92, decider: 90, postseason: 85, marquee: 75, regular: 40, preseason: 10 };
  const PERIODS = { any: [0, 1440], early: [0, 360], morning: [360, 720], afternoon: [720, 1080], evening: [1080, 1440] };
  const formatters = new Map(), timelines = new Map(), windowsCache = new Map();
  const clamp = x => Math.max(0, Math.min(100, x));
  const keepSmall = (map, max) => { while (map.size > max) map.delete(map.keys().next().value); };
  function validTimezone(zone) {
    try { new Intl.DateTimeFormat('en-US', { timeZone: zone }).format(); return typeof zone === 'string' && zone.length > 0; }
    catch (_) { return false; }
  }
  function localParts(iso, timezone = 'UTC') {
    if (!formatters.has(timezone)) formatters.set(timezone, new Intl.DateTimeFormat('en-US', {
      timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }));
    const p = Object.fromEntries(formatters.get(timezone).formatToParts(new Date(iso)).map(x => [x.type, x.value]));
    return { date: `${p.year}-${p.month}-${p.day}`, day: p.weekday, minutes: +p.hour * 60 + +p.minute };
  }
  function dateShift(date, days) { return new Date(Date.parse(date + 'T12:00:00Z') + days * DAY).toISOString().slice(0, 10); }
  function dateDay(date) { return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date(date + 'T12:00:00Z').getUTCDay()]; }
  function validDate(date) {
    return typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date + 'T00:00:00Z')) && new Date(date + 'T00:00:00Z').toISOString().slice(0,10) === date;
  }
  function periodBounds(prefs) {
    if (prefs.period !== 'custom') return PERIODS[prefs.period] || PERIODS.any;
    const parse = (value, fallback) => typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value) ? +value.slice(0,2)*60 + +value.slice(3) : fallback;
    return [parse(prefs.fromTime, 1080), parse(prefs.toTime, 1380)];
  }
  function calendarTimeline(prefs) {
    const start = prefs.startDate, end = prefs.endDate, tz = prefs.timezone || 'UTC';
    if (!validDate(start) || !validDate(end) || end < start) return [];
    if (Date.parse(end) - Date.parse(start) > 31 * DAY) throw new RangeError('Please select at most 32 calendar days.');
    const key = `${start}|${end}|${tz}`;
    if (timelines.has(key)) return timelines.get(key);
    const result = [];
    // Include +/-24h for worldwide offsets and a further day for overnight windows.
    const low = Date.parse(start + 'T00:00:00Z') - DAY;
    const high = Date.parse(end + 'T00:00:00Z') + 3*DAY;
    for (let time = low; time < high; time += MINUTE) result.push({ time, ...localParts(time, tz) });
    timelines.set(key, result); keepSmall(timelines, 4);
    return result;
  }
  function parseClock(value) {
    return typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value) ? +value.slice(0,2)*60 + +value.slice(3) : null;
  }
  function normalizedWindows(prefs) {
    const out={};
    for (const day of prefs.days || []) {
      if (prefs.windowsByDay && typeof prefs.windowsByDay === 'object') {
        out[day]=(Array.isArray(prefs.windowsByDay[day]) ? prefs.windowsByDay[day] : []).flatMap(r=>{
          if (!r || typeof r!=='object') return [];
          if (r.allDay===true) return [{from:0,to:1440,allDay:true}];
          const from=parseClock(r.from),to=parseClock(r.to);
          // Explicit full-day toggle replaces ambiguous equal start/end times in v3.
          return from===null||to===null||from===to ? [] : [{from,to,allDay:false}];
        });
      } else {
        const [from,to]=periodBounds(prefs);
        out[day]=[{from:from===to?0:from,to:from===to?1440:to,allDay:from===to}];
      }
    }
    return out;
  }
  function availabilityWindows(prefs) {
    const specs=normalizedWindows(prefs),days=prefs.days||[];
    const key=JSON.stringify([prefs.startDate,prefs.endDate,prefs.timezone,specs]);
    if(windowsCache.has(key))return windowsCache.get(key);
    const spans=[];
    if(!days.length)return spans;
    const selected=(date,day)=>date>=prefs.startDate&&date<=prefs.endDate&&days.includes(day);
    for(const minute of calendarTimeline(prefs)) {
      let allowed=false;
      if(selected(minute.date,minute.day))allowed=(specs[minute.day]||[]).some(r=>r.from<r.to ? minute.minutes>=r.from&&minute.minutes<r.to : minute.minutes>=r.from);
      if(!allowed){
        const prev=dateShift(minute.date,-1),prevDay=dateDay(prev);
        if(selected(prev,prevDay))allowed=(specs[prevDay]||[]).some(r=>r.from>r.to&&minute.minutes<r.to);
      }
      if(!allowed)continue;
      const previous=spans[spans.length-1];
      // Union ranges before matching. Two overlapping ranges never double-count play.
      if(previous&&previous.end===minute.time)previous.end+=MINUTE;
      else spans.push({start:minute.time,end:minute.time+MINUTE});
    }
    windowsCache.set(key,spans);keepSmall(windowsCache,24);return spans;
  }
  function sessions(game) {
    const start = Date.parse(game.start);
    if (!Array.isArray(game.sessions) && (!Number.isFinite(start) || !Number.isFinite(game.duration) || game.duration <= 0)) return [];
    const rows = Array.isArray(game.sessions) ? game.sessions : [{ start: game.start, end: new Date(start + game.duration * MINUTE).toISOString(), label: game.format || 'Match' }];
    return rows.map(s => ({ start: Date.parse(s.start), end: Date.parse(s.end), label: s.label || 'Session' }))
      .filter(s => Number.isFinite(s.start) && Number.isFinite(s.end) && s.end > s.start)
      .sort((a,b) => a.start - b.start);
  }
  function matchingSlots(game, prefs) {
    const windows = availabilityWindows(prefs), mode = prefs.matchMode || 'overlap', minimum = prefs.minMinutes || 1;
    const result = [];
    for (const session of sessions(game)) for (const window of windows) {
      const start = Math.max(session.start, window.start), end = Math.min(session.end, window.end);
      if (end <= start) continue;
      if (mode === 'starts' && !(session.start >= window.start && session.start < window.end)) continue;
      if (mode === 'full' && !(session.start >= window.start && session.end <= window.end)) continue;
      if (mode === 'overlap' && (end - start) / MINUTE < minimum) continue;
      result.push({ start, end, sessionStart: session.start, sessionEnd: session.end, label: session.label });
    }
    return result.sort((a,b) => a.start - b.start);
  }
  function participants(game) { return game.participants || [game.away, game.home].filter(Boolean); }
  function isFavorite(game, favorites = []) { return participants(game).some(team => favorites.includes(team.id)); }
  function occasionContext(game) {
    const tags=new Set(Tags.forGame(game));
    const ranked=(game.tagEvidence||[]).find(e=>e.id==='ranked-opponents'&&tags.has('ranked-opponents')&&Array.isArray(e.ranks)&&e.ranks.length===2);
    const ranks=ranked?ranked.ranks.slice().sort((a,b)=>a-b):null;
    const top10=Boolean(ranks&&ranks.every(r=>r<=10));
    let importance=game.stage==='preseason'?8:40,tier=game.stage==='preseason'?'E':'D',floor=0,ceiling=game.stage==='preseason'?15:100;
    if(game.stage==='marquee'){importance=72;tier='B';floor=64;}
    if(game.stage==='semifinal'){importance=92;tier='A';floor=86;}
    if(game.stage==='decider'){importance=98;tier='S';floor=92;}
    if(game.stage==='postseason'){importance=88;tier='A';floor=82;}
    if(game.stage==='final'){importance=100;tier='S';floor=95;}
    if(tags.has('playoff-race')){importance=Math.max(importance,76);tier=tier==='D'?'B':tier;floor=Math.max(floor,70);}
    if(tags.has('relegation-battle')){importance=Math.max(importance,78);tier=tier==='D'?'B':tier;floor=Math.max(floor,72);}
    if(tags.has('title-race')){importance=Math.max(importance,82);tier=['D','B'].includes(tier)?'B':tier;floor=Math.max(floor,75);}
    if(ranks){importance=Math.max(importance,top10?92:82);tier=top10?'A':(tier==='D'?'B':tier);floor=Math.max(floor,top10?87:76);}
    if(tags.has('playoffs')){importance=Math.max(importance,91);tier=['D','B'].includes(tier)?'A':tier;floor=Math.max(floor,85);}
    if(tags.has('elimination')){importance=Math.max(importance,99);tier='S';floor=Math.max(floor,93);}
    if(tags.has('championship')){importance=100;tier='S';floor=Math.max(floor,95);}
    return {tags,ranked,ranks,top10,importance,tier,floor,ceiling};
  }
  function features(game, favorites = []) {
    const ratings=participants(game).map(t=>t.strength).filter(Number.isFinite).map(clamp),ctx=occasionContext(game),tags=ctx.tags;
    const rankQuality=ctx.ranks?clamp(105-((ctx.ranks[0]+ctx.ranks[1])/2)*2):null;
    const rankCloseness=ctx.ranks?clamp(100-Math.abs(ctx.ranks[0]-ctx.ranks[1])*4):null;
    const quality=ratings.length?ratings.reduce((a,b)=>a+b,0)/ratings.length:rankQuality??(tags.has('star-players')?84:null);
    const closeness=ratings.length===2?clamp(100-Math.abs(ratings[0]-ratings[1])*2):rankCloseness;
    const matchupParts=[quality,closeness].filter(Number.isFinite);
    const matchup=matchupParts.length?matchupParts.reduce((a,b)=>a+b,0)/matchupParts.length:0;
    const story=Math.max(0,tags.has('rivalry')?92:0,tags.has('rematch')?78:0,(tags.has('former-player')||tags.has('former-coach'))?62:0);
    return {
      importance:ctx.importance,matchup,story,occasionTier:ctx.tier,scoreFloor:ctx.floor,scoreCeiling:ctx.ceiling,
      quality,closeness,stakes:ctx.importance,rivalry:story||null,
      favorites:favorites.length?(isFavorite(game,favorites)?100:0):null,
      ranked:ctx.ranks?{ranks:ctx.ranks,top10:ctx.top10}:null
    };
  }
  function localitySignal(game,prefs) {
    if(!prefs.country)return null;
    const ps=participants(game),known=(game.countries||[]).length || ps.some(t=>t.country);
    if(prefs.city&&ps.some(t=>t.city===prefs.city))return 100;
    if(ps.some(t=>t.country===prefs.country))return 80;
    if((game.countries||[]).includes(prefs.country))return 65;
    return known ? 0 : null;
  }
  function timeFitSignal(game,prefs) {
    const slots=game.slots||matchingSlots(game,prefs);
    if(!slots.length)return 0;
    // Best CONTIGUOUS portion of a real playing session; never bridge a break.
    return Math.max(...slots.map(s=>clamp(100*(s.end-s.start)/(s.sessionEnd-s.sessionStart))));
  }
  function personnelSignal(game) {
    const values=(game.keyPeople?.players||[]).filter(p=>p.name&&['probable','projected','confirmed'].includes(p.status)&&Number.isFinite(p.quality)).map(p=>clamp(p.quality));
    return values.length?values.reduce((a,b)=>a+b,0)/values.length:null;
  }
  function scoreGame(game,profile='balanced',favorites=[],prefs=null) {
    const weights=PROFILES[profile]||PROFILES.balanced,values=features(game,favorites);
    const contextBase=values.importance*weights.importance+values.matchup*weights.matchup+values.story*weights.story;
    if(!prefs){const score=Math.max(values.scoreFloor,Math.min(values.scoreCeiling,contextBase));return {...game,score,baseScore:contextBase,signals:values,occasionTier:values.occasionTier};}
    values.windowFit=timeFitSignal(game,prefs);values.locality=localitySignal(game,prefs);values.personnel=personnelSignal(game);
    const bounded=(value,fallback,max)=>Number.isFinite(+value)?Math.max(0,Math.min(max,+value))/100:fallback;
    // North-star rule: event importance is primary. Time fit and local relevance
    // are small nudges after hard availability filters, never the core ranking.
    const tw=bounded(prefs.timeWeight,.10,15),lw=values.locality===null?0:bounded(prefs.localWeight,.02,5),core=Math.max(0,1-tw-lw);
    const raw=contextBase*core+(values.windowFit||0)*tw+(values.locality||0)*lw;
    const score=Math.max(values.scoreFloor,Math.min(values.scoreCeiling,raw));
    const contextWeights={importance:core*weights.importance,matchup:core*weights.matchup,story:core*weights.story,windowFit:tw,locality:lw};
    return {...game,score,baseScore:contextBase,signals:values,contextWeights,occasionTier:values.occasionTier};
  }
  function competitionAllowed(game) {
    const c=game.competition;
    if(!c || !Scope.competitive(game))return false;
    // Legacy fixture/unit demos stay usable for deterministic tests; live coverage
    // is always subject to the 500K audience gate.
    if(game.isDemo!==true && !Audience?.eligible(game.league))return false;
    if(game.isDemo!==true && ['preseason','exhibition'].includes(game.stage))return false;
    if(['international','global_tour','domestic_cup'].includes(c.scope))return true;
    return c.scope==='domestic'&&(c.tier===1||(game.league==='Championship'&&c.tier===2&&c.allowedException===true));
  }
  function matchesCategory(game,prefs={}) {
    const category=prefs.category||'all';
    return category==='all'||game.category===category;
  }
  function eligible(game,prefs) {
    return competitionAllowed(game)&&Tags.matches(game,prefs)&&matchesCategory(game,prefs)&&['scheduled','in_progress'].includes(game.status)&&!(prefs.hidePreseason&&game.stage==='preseason')&&!(prefs.includeConditional===false&&game.conditional===true)&&!(prefs.includeUS===false&&Audience?.usCentered(game.league));
  }
  function filterGames(games, prefs) {
    return games.filter(g => eligible(g,prefs) && (prefs.leagues || []).includes(g.league) && (!prefs.onlyFavorites || isFavorite(g,prefs.favorites)))
      .map(g => ({ ...g, slots: matchingSlots(g,prefs) })).filter(g => g.slots.length);
  }
  function rankGames(games, profile = 'balanced', favorites = [], prefs = null) {
    return games.map(g => scoreGame(g,profile,favorites,prefs)).sort((a,b) => b.score-a.score || Date.parse(a.start)-Date.parse(b.start) || a.id.localeCompare(b.id));
  }
  function discoveryNovelty(game,prefs={}) {
    const c=game.competition||{},countries=game.countries||[];
    if(['international','global_tour'].includes(c.scope))return 4;
    if(c.scope==='domestic'&&prefs.country&&countries.length&&!countries.includes(prefs.country))return 4;
    return 0;
  }
  function discoveryOrder(ranked,prefs={}) {
    if(!ranked.length)return [];
    // Keep the strongest overall recommendation first. After that, modestly reward
    // a new sport/league and non-local/global competition. This is discovery, not randomness.
    const remaining=[...ranked],result=[];
    const first=remaining.shift();result.push({...first,selectionScore:first.score,discoveryBonus:0});
    const sports=new Set([first.sport]),leagues=new Set([first.league]);
    while(remaining.length){
      let bestIndex=0,bestAdjusted=-Infinity,bestBonus=0;
      for(let i=0;i<remaining.length;i++){const g=remaining[i];const bonus=(sports.has(g.sport)?0:8)+(leagues.has(g.league)?0:3)+discoveryNovelty(g,prefs);const adjusted=g.score+bonus;if(adjusted>bestAdjusted||(adjusted===bestAdjusted&&Date.parse(g.start)<Date.parse(remaining[bestIndex]?.start||Infinity))){bestIndex=i;bestAdjusted=adjusted;bestBonus=bonus;}}
      const g=remaining.splice(bestIndex,1)[0];result.push({...g,selectionScore:bestAdjusted,discoveryBonus:bestBonus});sports.add(g.sport);leagues.add(g.league);
    }
    return result;
  }
  function noteworthy(game) { return Number.isFinite(game.noteworthy?.score) && game.noteworthy.score >= 85 && Boolean(game.noteworthy.reason); }
  function discoveries(games, prefs, excludedIds = [], outside = false, limit = 3) {
    if (!prefs.discover || (!prefs.outsideHours && outside)) return [];
    const excluded = new Set(excludedIds);
    const allDayPrefs = { ...prefs, windowsByDay:null, period: 'any', matchMode: 'overlap', minMinutes: 1 };
    const candidates = games.filter(g => !excluded.has(g.id) && eligible(g,prefs) && noteworthy(g))
      .map(g => ({...g, slots: matchingSlots(g,prefs), exceptionSlots: outside ? matchingSlots(g,allDayPrefs) : [], outsideLeague: !(prefs.leagues||[]).includes(g.league) }))
      .filter(g => outside ? !g.slots.length && g.exceptionSlots.length : g.slots.length)
      .map(g => scoreGame(g,'occasion',[]))
      .sort((a,b) => Number(b.outsideLeague)-Number(a.outsideLeague) || b.noteworthy.score-a.noteworthy.score || a.id.localeCompare(b.id));
    // Diversify the small discovery shelf by SPORT, not by geography or audience size.
    const result = [], sports = new Set();
    for (const game of candidates) if (!sports.has(game.sport) && result.length < limit) { result.push(game); sports.add(game.sport); }
    for (const game of candidates) if (!result.some(g => g.id === game.id) && result.length < limit) result.push(game);
    return result;
  }
  function overlaps(a,b) { return sessions(a).some(x => sessions(b).some(y => x.start < y.end && y.start < x.end)); }
  function buildPlan(ranked, limit = 5) {
    // One best available session per event keeps long, multi-day tests from
    // blocking the entire weekend. DP then optimizes non-overlapping watch slots.
    const items = ranked.map(g => {
      const slot = g.slots?.slice().sort((a,b) => (b.end-b.start)-(a.end-a.start) || a.start-b.start)[0];
      const s = slot || sessions(g)[0];
      return {...g, planSlot:s, planStart:s.start, planEnd:s.end};
    }).sort((a,b) => a.planEnd-b.planEnd || a.id.localeCompare(b.id));
    const cap = Math.max(0, Math.min(Math.floor(limit),items.length));
    const prior = items.map((g,i) => {for(let j=i-1;j>=0;j--) if(items[j].planEnd<=g.planStart)return j+1;return 0;});
    const dp = Array.from({length:items.length+1}, () => Array(cap+1).fill(0));
    for(let i=1;i<=items.length;i++)for(let k=1;k<=cap;k++)dp[i][k]=Math.max(dp[i-1][k],(items[i-1].selectionScore??items[i-1].score)+dp[prior[i-1]][k-1]);
    const selected=[]; let i=items.length,k=cap;
    while(i>0&&k>0) {if((items[i-1].selectionScore??items[i-1].score)+dp[prior[i-1]][k-1]>dp[i-1][k]){selected.push(items[i-1]);i=prior[i-1];k--;}else i--;}
    return selected.sort((a,b)=>a.planStart-b.planStart);
  }
  function reason(game,profile,favorites=[]) {
    if(game.promo?.body)return game.promo.body;
    const favorite=participants(game).find(t=>favorites.includes(t.id));
    if(favorite)return `${favorite.name} is on. Your team, your screen. Make room for this one.`;
    if(game.stage==='final')return 'One final. One winner. This is the one you show up for.';
    if(game.rivalry)return 'Pick a side. Bragging rights are on the line.';
    return 'Turn it on, pick your side, and see who takes control.';
  }
  return {PROFILES,STAKES,PERIODS,validTimezone,localParts,dateShift,parseClock,normalizedWindows,periodBounds,availabilityWindows,sessions,matchingSlots,participants,isFavorite,features,localitySignal,timeFitSignal,personnelSignal,competitionAllowed,matchesCategory,scoreGame,filterGames,rankGames,discoveryNovelty,discoveryOrder,noteworthy,discoveries,overlaps,buildPlan,reason};
});
