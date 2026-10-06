'use strict';
// Isolated, labelled design preview. All provider responses are synthetic.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const {createApp}=require('../server/server.cjs'),R=require('../src/dates.js');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'watcher-preview-')),project=path.resolve(__dirname,'..');
for(const name of ['src','public','index.html'])fs.cpSync(path.join(project,name),path.join(root,name),{recursive:true});
const html=path.join(root,'index.html');fs.writeFileSync(html,fs.readFileSync(html,'utf8').replace('A WIDER WORLD OF SPORT','DESIGN PREVIEW · FICTIONAL FIXTURES'));
const today=R.today(new Date(),'UTC');
const specs=[['1','UEFA Champions League','Soccer','North London','Madrid City','Semi-final'],['2','NWSL','Soccer','Portland Pines','Bay City','Final'],['3','KBO','Baseball','Seoul Stars','Busan Waves','Playoffs'],['4','Premier League','Soccer','Westbridge','Eastport','Regular Season'],['5','EuroLeague','Basketball','Athens BC','Istanbul BC','Final'],['6','WNBA','Basketball','New York Liberty','Minnesota Lynx','Playoffs']];
const rows=[];
for(let d=0;d<=28;d++)for(let i=0;i<1;i++){
 const [idLeague,strLeague,strSport,strHomeTeam,strAwayTeam,strRound]=specs[(d+i)%specs.length],date=R.shift(today,d);
 rows.push({idEvent:String(100000+d*10+i),idLeague,strLeague,strSport,strHomeTeam,strAwayTeam,strRound,strGender:['2','6'].includes(idLeague)?'Female':'Male',strTimestamp:date+'T'+(i?'23:00:00':'19:00:00'),strStatus:'NS',strPostponed:'no',dateEvent:date,strVenue:'Preview Arena'});
}
const {server}=createApp({root,key:'TEST_ONLY',cfbdKey:'',clientFactory:()=>({leagues:async()=>specs.map(([idLeague,strLeague,strSport])=>({idLeague,strLeague,strSport})),day:async date=>rows.filter(r=>r.dateEvent===date)})});
server.listen(4319,'127.0.0.1',()=>console.log('Design preview (fictional fixtures): http://127.0.0.1:4319'));
const cleanup=()=>{server.close();fs.rmSync(root,{recursive:true,force:true});process.exit(0);};process.on('SIGINT',cleanup);process.on('SIGTERM',cleanup);
