/* Calendar dates are shared by the browser and server. Limits use the viewer's zone. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.WatcherDates=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],DAY=86400000;
 const shift=(date,n)=>new Date(Date.parse(date+'T12:00:00Z')+n*DAY).toISOString().slice(0,10);
 const validDate=date=>typeof date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(Date.parse(date+'T12:00:00Z'))&&new Date(date+'T12:00:00Z').toISOString().slice(0,10)===date;
 function validZone(zone){try{return typeof zone==='string'&&!!zone&&!!new Intl.DateTimeFormat('en-US',{timeZone:zone});}catch(_){return false;}}
 function today(now=new Date(),zone='UTC'){const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now).map(p=>[p.type,p.value]));return `${p.year}-${p.month}-${p.day}`;}
 function bounds(now=new Date(),zone='UTC'){const min=today(now,zone);return {min,max:shift(min,28)};}
 function validate(start,end,now=new Date(),zone='UTC'){
  if(!validZone(zone))return 'Choose a valid time zone.';
  if(!validDate(start)||!validDate(end))return 'Choose a valid start and end date.';
  if(end<start)return 'The end date must be on or after the start date.';
  const {min,max}=bounds(now,zone);
  if(start<min||end>max)return `Choose dates from ${min} through ${max} (28 days ahead).`;
  return '';
 }
 function preset(name,now=new Date(),zone='UTC'){
  const {min,max}=bounds(now,zone);let start=min,end=min;
  if(name==='weekend'){const day=new Date(min+'T12:00:00Z').getUTCDay();start=day===0||day===6?min:shift(min,5-day);end=day===0?min:shift(start,day===6?1:2);}
  else if(name==='four-weeks')end=max;
  else if(name!=='today')end=shift(min,6);
  return {startDate:start,endDate:end};
 }
 function restore(saved,now=new Date(),zone='UTC'){
  if(saved&&['today','week','weekend','four-weeks'].includes(saved.preset))return {preset:saved.preset,...preset(saved.preset,now,zone)};
  if(saved?.preset==='custom'&&!validate(saved.startDate,saved.endDate,now,zone))return saved;
  return {preset:'week',...preset('week',now,zone)};
 }
 return {DAYS,shift,validDate,validZone,today,bounds,validate,preset,restore};
});
