import{S as b,i as g,s as C,e as y,c as x,a as S,d as h,b as l,g as v,J as u,v as w}from"../../chunks/vendor-bc251f35.js";function V(i){let e;return{c(){e=y("div"),this.h()},l(t){e=x(t,"DIV",{id:!0,class:!0,dir:!0}),S(e).forEach(h),this.h()},h(){l(e,"id","sessionbycountrieschart"),l(e,"class","apex-charts"),l(e,"dir","ltr")},m(t,a){v(t,e,a)},p:u,i:u,o:u,d(t){t&&h(e)}}}function _(i,e,t){let{dataColors:a}=e;function f(s){return s.map(function(c){var n=c.replace(" ","");if(n.indexOf(",")===-1){var r=getComputedStyle(document.documentElement).getPropertyValue(n);return r.indexOf("#")!==-1&&(r=r.replace(" ","")),r||n}else{var o=c.split(",");if(o.length===2){var d=getComputedStyle(document.documentElement).getPropertyValue(o[0]);return d="rgba("+d+","+o[1]+")",d}else return n}})}const p=f(a);var m={chart:{type:"bar",height:436,toolbar:{show:!1}},series:[{data:[1010,1640,490,1255,1050,689,800,420,1085,589],name:"Sessions"}],plotOptions:{bar:{borderRadius:4,horizontal:!0,distributed:!0,dataLabels:{position:"top"}}},colors:p,dataLabels:{enabled:!0,offsetX:32,style:{fontSize:"12px",fontWeight:400,colors:["#adb5bd"]}},legend:{show:!1},grid:{show:!1},xaxis:{categories:["India","United States","China","Indonesia","Russia","Bangladesh","Canada","Brazil","Vietnam","UK"]}};return w(()=>{new ApexCharts(document.querySelector("#sessionbycountrieschart"),m).render()}),i.$$set=s=>{"dataColors"in s&&t(0,a=s.dataColors)},[a]}class B extends b{constructor(e){super();g(this,e,_,V,C,{dataColors:0})}}export{B as default};