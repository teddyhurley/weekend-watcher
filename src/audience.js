/* Coverage admission registry.
 * 500K average live audience is one path into Weekend Watcher, not the only one.
 * Major top-tier leagues, major domestic cups, and major continental/global
 * competitions can also be admitted editorially. Admission never boosts Watch Score.
 */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.WatcherAudience=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const THRESHOLD=500000;
 const AUDIT={
  'NFL':{audience:18700000,market:'United States',period:'2025 regular season',metric:'average viewers per game',source:'NFL / Nielsen',url:'https://www.nfl.com/news/nfl-sees-second-highest-regular-season-average-viewership-since-1988',usCentered:true},
  'NCAA FBS':{audience:2200000,market:'United States',period:'2025 ESPN networks regular season',metric:'average viewers per game',source:'ESPN / Nielsen',url:'https://espnpressroom.com/press-release/espn-networks-deliver-best-college-football-regular-season-since-2011-college-gameday-built-by-the-home-depot-scores-most-watched-season-ever/',usCentered:true},
  'NBA':{audience:1530000,market:'United States',period:'2024–25 national regular season',metric:'average viewers per nationally televised game',source:'reported Nielsen average',url:'https://frontofficesports.com/article/nba-regular-season-ratings-dip-2-in-line-with-the-nfl/',usCentered:true},
  'WNBA':{audience:1300000,market:'United States',period:'2025 ESPN regular season',metric:'average viewers per ESPN-network game',source:'ESPN / Nielsen',url:'https://espnpressroom.com/press-release/espn-networks-deliver-most-watched-wnba-regular-season-ever/',usCentered:true},
  'MLB':{audience:2040000,market:'United States',period:'2025 FOX regular season',metric:'average viewers per FOX game',source:'MLB / Nielsen',url:'https://www.mlb.com/press-release/press-release-mlb-attendance-reaches-71-4-million-three-straight-years-of-growth-for-first-time-since-2007',usCentered:true},
  'NHL':{audience:546000,market:'United States',period:'2025–26 national regular season',metric:'average viewers across national games',source:'reported Nielsen average',url:'https://www.reuters.com/sports/nhl-scores-highest-tv-ratings-14-seasons--flm-2026-04-22/',usCentered:true},
  'AFL':{audience:630000,market:'Australia',period:'2025 Seven full season',metric:'average total TV audience',source:'Seven',url:'https://sevenwestmedia.com.au/wp-content/uploads/2026/02/AFL-Origin-scores-big-with-Seven-viewers.pdf',usCentered:false},
  'NRL':{audience:614000,market:'Australia',period:'2025 season including finals',metric:'average National Total TV audience per match',source:'Nine / VOZ',url:'https://www.nineforbrands.com.au/media-release/nrl-reigns-supreme-in-record-breaking-season/',usCentered:false},
  'Premier League':{audience:1340000,market:'United Kingdom',period:'2022–25 UK rights cycle',metric:'average UK viewers per live match',source:'Premier League',url:'https://resources.premierleague.pulselive.com/premierleague/document/2025/10/15/9cbce122-bc7b-4de2-90b1-2db7b665b402/Premier-League-24-25-Annual-Report.pdf',usCentered:false},
  'UEFA Champions League':{audience:1713000,market:'United States',period:'2025–26 CBS coverage',metric:'average viewers across CBS coverage',source:'Paramount',url:'https://www.paramount.com/news/uefa-champions-league-final-becomes-most-watched-club-soccer-match-in-us-english-language-tv-history',usCentered:false},
  'IPL':{audience:7840000,market:'India',period:'2026 first half',metric:'average linear-TV viewers per match',source:'BARC India / TAM Sports reporting',url:'https://www.ndtvprofit.com/business/ipl-overkill-viewership-drops-26-as-t20-fatigue-likely-sets-in-post-world-cup-11483867/amp/1',usCentered:false},
  'BBL':{audience:770000,market:'Australia',period:'2024–25 season',metric:'average national audience per match',source:'Cricket Australia',url:'https://www.cricket.com.au/news/4211880/blockbuster-summer-smashes-viewing-records',usCentered:false},
  'Formula 1':{audience:1300000,market:'United States',period:'2025 season',metric:'average viewers per race',source:'ESPN / Nielsen',url:'https://espnpressroom.com/press-release/espn-finishes-final-formula-1-season-with-all-time-viewership-record/',usCentered:false},
  'IndyCar':{audience:1681000,market:'United States',period:'2026 season',metric:'average viewers per race',source:'INDYCAR / Nielsen',url:'https://www.indycar.com/news/2026/09/09-11-fox-2026-coverage-gains',usCentered:true},
  'NASCAR Cup Series':{audience:2478000,market:'United States',period:'2025 season',metric:'average viewers per Cup Series race',source:'reported Nielsen average',url:'https://www.sportsmediawatch.com/2025/11/the-needle-nascar-viewership-decline-year-one-rights-deal/',usCentered:true},
  'World Baseball Classic':{audience:1294000,market:'United States',period:'2026 tournament',metric:'average viewers per FOX-family game',source:'FOX / MLB',url:'https://www.mlb.com/world-baseball-classic/news/2026-world-baseball-classic-final-viewership-numbers',usCentered:false}
 };
 const C={};
 const add=(names,path,reason,usCentered=false)=>{for(const name of names)C[name]={path,reason,usCentered};};
 add(['Championship'],'domestic_exception','England’s Championship is the one deliberate second-tier domestic exception.');
 add(['La Liga','Bundesliga','Serie A','Ligue 1','Eredivisie','Primeira Liga','Scottish Premiership','Brasileirão','Argentine Primera División','Liga MX','J1 League','K League 1','Saudi Pro League','A-League Men'],'top_tier','Top-tier national league in a major sports market.');
 add(['MLS'],'top_tier','Top-tier national league in a major sports market.',true);
 add(['WSL','Liga F','Frauen-Bundesliga','A-League Women','WE League'],'top_tier','Top-tier women’s national league in a major sports market.');
 add(['NWSL'],'top_tier','Top-tier women’s national league in a major sports market.',true);
 add(['UEFA Europa League','UEFA Conference League','Copa Libertadores','Copa Sudamericana','AFC Champions League Elite','CONCACAF Champions Cup','UEFA Women’s Champions League','Copa Libertadores Femenina'],'continental','Major continental club competition.');
 add(['FA Cup','Carabao Cup','Copa del Rey','DFB-Pokal','Coppa Italia','Coupe de France','Copa do Brasil'],'major_cup','Major domestic cup competition.');
 add(['FIFA World Cup','FIFA World Cup Qualifying','UEFA Euro','Copa América','Africa Cup of Nations','AFC Asian Cup','FIFA Women’s World Cup','UEFA Women’s Euro'],'global','Major senior international soccer competition.');
 add(['PSL','SA20','The Hundred · men','The Hundred · women','Caribbean Premier League'],'top_tier','Major domestic or franchise cricket competition.');
 add(['Major League Cricket'],'top_tier','Major domestic or franchise cricket competition.',true);
 add(['International cricket · men'],'international_series','Official senior international cricket series; exhibitions are excluded.');
 add(['ICC Cricket World Cup','ICC Men’s T20 World Cup','ICC Champions Trophy','ICC World Test Championship','ICC Women’s Cricket World Cup','ICC Women’s T20 World Cup'],'global','Major ICC global championship.');
 add(['EuroLeague','NBL','B.PREMIER','KBL','EuroLeague Women','FIBA internationals · men','FIBA internationals · women'],'top_tier','Major top-tier or international basketball competition.');
 add(['NPB','KBO'],'top_tier','Top-tier national baseball league in a major baseball market.');
 add(['Top 14','URC','Super League','Premiership Rugby','Super Rugby Pacific'],'top_tier','Major top-tier rugby competition.');
 add(['Rugby World Cup','Six Nations'],'global','Major senior international rugby competition.');
 add(['MotoGP','Supercars','Formula E','World Rally Championship','World Endurance Championship'],'global_tour','Major international motorsport championship.');
 add(['UFC','ONE Championship','PFL','Major boxing cards'],'combat','Major professional combat-sports competition or card.');
 add(['PWHL'],'top_tier','Top-tier professional women’s hockey league in North America.',true);
 const eligible=name=>Boolean((AUDIT[name]&&AUDIT[name].audience>=THRESHOLD)||C[name]);
 const usCentered=name=>Boolean((AUDIT[name]||C[name])?.usCentered);
 const eligibleNames=()=>[...new Set([...Object.keys(AUDIT).filter(n=>AUDIT[n].audience>=THRESHOLD),...Object.keys(C)])];
 function auditFor(name){if(AUDIT[name]&&AUDIT[name].audience>=THRESHOLD)return{...AUDIT[name],path:'audience',reason:'Clears the 500K average live-audience gate.'};if(C[name])return{...C[name],audience:null,market:null,period:null,metric:null,source:null,url:null};return null;}
 return {THRESHOLD,AUDIT,CURATED:C,eligible,usCentered,eligibleNames,auditFor};
});
