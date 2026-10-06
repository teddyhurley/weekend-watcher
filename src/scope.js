/* Product scope, not a judgment about athletic skill. Scripted entertainment is excluded. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.WatcherScope=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const SCRIPTED=/\b(wwe|aew|wwf|nxt|wcw|ecw|tna|njpw|roh|cmll|stardom|smackdown|wrestlemania|all elite wrestling|world wrestling entertainment|world wrestling federation|new japan pro wrestling|ring of honor|total nonstop action|professional wrestling|pro wrestling|sports entertainment|scripted wrestling)\b/i;
 const NON_HUMAN=new Set(['esports','horse racing']);
 const EXHIBITION=/\b(friendl(?:y|ies)|exhibitions?|testimonial|all[- ]star)\b/i;
 function exclusionReason(game={}){
  const c=game.competition||{};
  if(game.scripted===true||c.scripted===true||['scripted','sports_entertainment'].includes(c.nature)||['scripted','sports_entertainment'].includes(game.eventType))return 'scripted';
  const fields=[game.league,game.sport,game.promotion,c.name,c.code,c.sport,c.promotion].filter(Boolean).join(' ').normalize('NFKC').replace(/[_-]/g,' ');
  const sport=String(game.sport||c.sport||'').trim().toLowerCase();
  if(NON_HUMAN.has(sport))return 'non_human';
  if(SCRIPTED.test(fields))return 'scripted';
  if(EXHIBITION.test(fields))return 'exhibition';
  return null;
 }
 function competitive(game={}){return exclusionReason(game)===null;}
 function ingestible(record){
  // A live import must carry an explicitly reviewed competitive classification.
  return record?.competition?.nature==='competitive'&&competitive(record);
 }
 return {competitive,exclusionReason,ingestible,EXHIBITION};
});
