'use strict';
const fs=require('node:fs'),path=require('node:path');
const {PROJECT_URL,CASE_STUDY_URL,LABEL}=require('../src/demo.js');
// Never copy a directory tree. This is the complete, reviewed public asset list.
const ASSETS=Object.freeze([
 'src/styles.css','src/tags.js','src/scope.js','src/audience.js','src/engine.js',
 'src/catalog.js','src/zones.js','src/dates.js','src/demo.js','src/app.js'
]);
const DEFAULT_ROOT=path.resolve(__dirname,'..');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function replaceRequired(html,pattern,replacement,label){
 if(!pattern.test(html))throw new Error('Demo build could not find '+label+'. Review the public template before publishing.');
 return html.replace(pattern,replacement);
}
function demoHTML(source){
 let html=source;
 html=replaceRequired(html,/<title>[^<]*<\/title>/,'<title>Weekend Watcher — Interactive demo</title>','page title');
 html=replaceRequired(html,/<meta name="description" content="[^"]*">/,'<meta name="description" content="Explore a world of sport with Weekend Watcher. An interactive demo of global event discovery, using clearly labeled fictional scenarios.">','description');
 html=replaceRequired(html,/<body>/,'<body data-mode="demo">','body');
 html=replaceRequired(html,/<div class="demo-bar live-bar">[\s\S]*?<\/div>/,`<div class="demo-bar live-bar demo-mode-banner"><span><i aria-hidden="true"></i> <b id="feed-label">${esc(LABEL)}</b></span><p id="feed-message" role="status">Explore fictional scenarios with the full discovery controls. Examples follow your calendar; these are not actual schedules.</p><a class="text-button" href="${esc(CASE_STUDY_URL)}" target="_blank" rel="noopener noreferrer">Project case study ↗</a></div>`,'demo banner');
 html=replaceRequired(html,/<div class="filter-block category-block">[\s\S]*?<\/div><\/div>/,'','category filter');
 html=replaceRequired(html,/<div class="bottom-note">[\s\S]*?<\/div>/,`<div class="bottom-note"><span>Weekend Watcher · A project by Teddy Hurley.</span><button class="text-button" id="feed-report">Demo information ↗</button><a href="${esc(PROJECT_URL)}" target="_blank" rel="noopener noreferrer">View the code on GitHub ↗</a></div>`,'footer');
 html=replaceRequired(html,/<dialog id="about-dialog"[\s\S]*?<\/dialog>/,`<dialog id="about-dialog" aria-labelledby="about-title"><div class="dialog-header"><div><p class="eyebrow">ABOUT WEEKEND WATCHER</p><h2 id="about-title">For the fan who stays curious.</h2></div><button class="close" data-close="about-dialog" aria-label="Close about">×</button></div><p>Weekend Watcher helps sports fans find the major occasions and unfamiliar competitions worth knowing about. Choose your dates, set your local viewing hours and explore what makes an event matter.</p><h3>About this interactive demo</h3><p>All teams, matchups, ranks, stories and start times are fictional. Real competition names illustrate the intended coverage. Example scenarios repeat weekly and move with your selected calendar; they do not represent actual schedules or follow real sports seasons.</p><p>The filters, local-time calculations, event explanations and ranking controls use the project’s discovery interface. This sample covers men’s competitions. Your preferences stay in your browser, without an account.</p><h3>Find your next discovery</h3><p><strong>Best overall</strong> prioritizes major occasions worldwide. <strong>Discover something</strong> switches U.S. sports off by default and adds a modest variety bonus. You can override the U.S. sports toggle.</p><p>Championships, elimination games, playoffs and top-ranked matchups have priority. Viewing hours are a filter; time fit and country relevance provide small ranking adjustments. Country relevance is inferred from your time zone.</p><p><strong>If necessary</strong> games are hidden by default. Turn them on to include conditional examples, with no ranking penalty. <strong>Avoid overlaps</strong> chooses a set of games that fits your viewing window.</p><p>A custom overnight window belongs to the day it starts. Equal start and end times mean all day. Game durations are examples, not promises of actual playing time.</p><h3>The project</h3><p>Weekend Watcher stops at discovery. The product case study explains the user problem, design decisions and live-data work behind it.</p><p><a href="${esc(CASE_STUDY_URL)}" target="_blank" rel="noopener noreferrer">Read the product case study ↗</a></p></dialog>`,'about dialog');
 html=html.replace('Explore the coverage roadmap ↗','Explore demo coverage ↗')
  .replace('THE COVERAGE ROADMAP','DEMO COVERAGE')
  .replace('Coverage includes major domestic leagues, cups and global competitions, plus other competitions with sourced average live audiences of at least 500,000. Audience size qualifies coverage; the occasion determines its ranking.','Explore the men’s competitions represented by fictional scenarios in this demo. The live project has a broader curated catalogue; the demo is a representative sample.')
  .replace('This is the current curated catalogue. Connected providers may have gaps. Friendlies, exhibitions, esports, horse racing and scripted entertainment are outside this app’s scope.','Counts show fictional examples loaded for the selected date range, including adjacent dates needed for worldwide time zones. They do not indicate live provider coverage.')
  .replace('Only curated competitions appear here. “Mapped” means a schedule provider is connected; “Feed” counts imported fixtures, not guaranteed complete coverage.','Choose from competitions represented in this demo. Counts describe fictional examples; use dates and viewing hours to see which fit your window.')
  .replace('Take it from here<small>Search it. Stream it. Watch it.</small>','Explore the idea<small>Read the product case study.</small>');
 html=replaceRequired(html,/<script src="src\/live\.js"><\/script>/,'<script src="src/demo.js"></script>','demo entry point');
 html=replaceRequired(html,/<noscript>[\s\S]*?<\/noscript>/,'<noscript>Turn on JavaScript to explore this interactive demo.</noscript>','JavaScript notice');
 if(/(?:src|href)="\//.test(html)||/src\/live\.js|href="[^\"]*\/setup"/.test(html))throw new Error('A private or root-relative route remains in the public demo.');
 return html;
}
function buildDemo({rootDir=DEFAULT_ROOT,outDir=path.join(rootDir,'demo-dist')}={}){
 const root=path.resolve(rootDir),out=path.resolve(outDir);
 if(out===root||root.startsWith(out+path.sep))throw new Error('Demo output cannot replace the project or one of its parent directories.');
 const contents=new Map();
 for(const relative of ['index.html',...ASSETS]){
  const file=path.join(root,relative),stat=fs.lstatSync(file);
  if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Public asset must be a regular file: '+relative);
  contents.set(relative,fs.readFileSync(file,'utf8'));
 }
 // Validate the template before touching a previously successful build.
 const html=demoHTML(contents.get('index.html'));
 fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
 fs.writeFileSync(path.join(out,'index.html'),html);
 for(const relative of ASSETS){const target=path.join(out,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,contents.get(relative));}
 fs.writeFileSync(path.join(out,'.nojekyll'),'');
 return {outDir:out,files:['index.html','.nojekyll',...ASSETS]};
}
if(require.main===module){const result=buildDemo();console.log(`Public demo built: ${result.files.length} allowlisted files in ${path.relative(DEFAULT_ROOT,result.outDir)}.`);}
module.exports={ASSETS,buildDemo,demoHTML};
