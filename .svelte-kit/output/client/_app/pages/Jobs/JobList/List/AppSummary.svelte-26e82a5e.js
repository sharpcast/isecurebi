import{S as g,i as v,s as C,e as x,c as S,a as A,d as p,b as c,g as _,J as l,v as b}from"../../../../chunks/vendor-bc251f35.js";function w(o){let e;return{c(){e=x("div"),this.h()},l(t){e=S(t,"DIV",{id:!0,class:!0,dir:!0}),A(e).forEach(p),this.h()},h(){c(e,"id","appsummarychart"),c(e,"class","apex-charts"),c(e,"dir","ltr")},m(t,a){_(t,e,a)},p:l,i:l,o:l,d(t){t&&p(e)}}}function V(o,e,t){let{dataColors:a}=e;function m(r){return r.map(function(u){var s=u.replace(" ","");if(s.indexOf(",")===-1){var n=getComputedStyle(document.documentElement).getPropertyValue(s);return n.indexOf("#")!==-1&&(n=n.replace(" ","")),n||s}else{var i=u.split(",");if(i.length===2){var d=getComputedStyle(document.documentElement).getPropertyValue(i[0]);return d="rgba("+d+","+i[1]+")",d}else return s}})}var h=m(a),f=[98,63,35],y={labels:["New Application","Approved","Rejected"],chart:{height:300,type:"donut"},series:f,legend:{position:"bottom"},dataLabels:{dropShadow:{enabled:!1}},colors:h};return b(()=>{new ApexCharts(document.querySelector("#appsummarychart"),y).render()}),o.$$set=r=>{"dataColors"in r&&t(0,a=r.dataColors)},[a]}class q extends g{constructor(e){super();v(this,e,V,w,C,{dataColors:0})}}export{q as default};