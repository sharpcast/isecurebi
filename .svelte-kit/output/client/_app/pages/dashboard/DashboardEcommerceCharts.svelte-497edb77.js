import{S as g,i as x,s as y,e as w,c as v,a as C,d as h,b as l,g as b,J as u,v as S}from"../../chunks/vendor-bc251f35.js";function k(i){let t;return{c(){t=w("div"),this.h()},l(r){t=v(r,"DIV",{id:!0,class:!0,dir:!0}),C(t).forEach(h),this.h()},h(){l(t,"id","dashboardecommercechart"),l(t,"class","apex-charts"),l(t,"dir","ltr")},m(r,a){b(r,t,a)},p:u,i:u,o:u,d(r){r&&h(t)}}}function A(i,t,r){let{dataColors:a}=t;function f(e){return e.map(function(c){var n=c.replace(" ","");if(n.indexOf(",")===-1){var s=getComputedStyle(document.documentElement).getPropertyValue(n);return s.indexOf("#")!==-1&&(s=s.replace(" ","")),s||n}else{var o=c.split(",");if(o.length===2){var d=getComputedStyle(document.documentElement).getPropertyValue(o[0]);return d="rgba("+d+","+o[1]+")",d}else return n}})}const m=f(a);var p={series:[{name:"Orders",type:"area",data:[34,65,46,68,49,61,42,44,78,52,63,67]},{name:"Earnings",type:"bar",data:[89.25,98.58,68.74,108.87,77.54,84.03,51.24,28.57,92.57,42.36,88.51,36.57]},{name:"Refunds",type:"line",data:[8,12,7,17,21,11,5,9,7,29,12,35]}],chart:{height:370,type:"line",toolbar:{show:!1}},stroke:{curve:"straight",dashArray:[0,0,8],width:[2,0,2.2]},fill:{opacity:[.1,.9,1]},markers:{size:[0,0,0],strokeWidth:2,hover:{size:4}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisTicks:{show:!1},axisBorder:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:0,right:-2,bottom:15,left:10}},legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:-5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},plotOptions:{bar:{columnWidth:"30%",barHeight:"70%"}},colors:m,tooltip:{shared:!0,y:[{formatter(e){return typeof e!="undefined"?e.toFixed(0):e}},{formatter(e){return typeof e!="undefined"?"$"+e.toFixed(2)+"k":e}},{formatter(e){return typeof e!="undefined"?e.toFixed(0)+" Sales":e}}]}};return S(()=>{new ApexCharts(document.querySelector("#dashboardecommercechart"),p).render()}),i.$$set=e=>{"dataColors"in e&&r(0,a=e.dataColors)},[a]}class O extends g{constructor(t){super();x(this,t,A,k,y,{dataColors:0})}}export{O as default};
