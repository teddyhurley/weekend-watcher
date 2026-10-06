'use strict';
const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),skip=new Set(['.git','node_modules','.watcher-code-backups','.cache','__pycache__','test-results','playwright-report']);
const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(skip.has(e.name)||e.name==='.DS_Store'||(e.name.startsWith('.env')&&e.name!=='.env.example'))continue;const file=path.join(dir,e.name);if(e.isDirectory())walk(file);else if(e.isFile())files.push(file);}}
walk(root);let failures=0;
for(const file of files){const rel=path.relative(root,file);
 if(/\.(?:js|cjs)$/.test(file)){const r=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(r.status!==0){process.stderr.write(r.stderr);failures++;}}
 if(/\.(?:json)$/.test(file)){try{JSON.parse(fs.readFileSync(file,'utf8'));}catch(_){console.error('Invalid JSON: '+rel);failures++;}}
 if(/\.(?:js|cjs|json|html|md|txt)$/.test(file)&&/\/(?:Users|home)\/[A-Za-z0-9_-]+\//.test(fs.readFileSync(file,'utf8'))){console.error('Personal filesystem path: '+rel);failures++;}
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const m of html.matchAll(/(?:src|href)="((?:src|public)\/[^"#]+)"/g)){if(!fs.existsSync(path.join(root,m[1]))){console.error('Missing browser asset: '+m[1]);failures++;}}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);if(new Set(ids).size!==ids.length){console.error('Duplicate HTML IDs');failures++;}
const template=fs.readFileSync(path.join(root,'.env.example'),'utf8');for(const line of template.split('\n').filter(l=>l&&!l.startsWith('#'))){if(!/^(THESPORTSDB_API_KEY|CFBD_API_KEY)=$/.test(line)){console.error('Environment template must contain empty keys');failures++;}}
if(failures)process.exit(1);console.log(`Project checks passed: ${files.length} files; syntax, JSON, asset paths, IDs and key template.`);
