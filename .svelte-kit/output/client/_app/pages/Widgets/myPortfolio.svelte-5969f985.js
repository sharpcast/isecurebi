import{S as g,i as y,s as x,e as C,c as v,a as w,d,b as f,g as S,J as c,v as b}from"../../chunks/vendor-bc251f35.js";function z(i){let e;return{c(){e=C("div"),this.h()},l(r){e=v(r,"DIV",{id:!0,class:!0,dir:!0}),w(e).forEach(d),this.h()},h(){f(e,"id","myportfoliochart"),f(e,"class","apex-charts"),f(e,"dir","ltr")},m(r,a){S(r,e,a)},p:c,i:c,o:c,d(r){r&&d(e)}}}function _(i,e,r){let{dataColors:a}=e;function h(t){return t.map(function(s){var o=s.replace(" ","");if(o.indexOf(",")===-1){var n=getComputedStyle(document.documentElement).getPropertyValue(o);return n.indexOf("#")!==-1&&(n=n.replace(" ","")),n||o}else{var l=s.split(",");if(l.length===2){var u=getComputedStyle(document.documentElement).getPropertyValue(l[0]);return u="rgba("+u+","+l[1]+")",u}else return o}})}const p=h(a);var m={labels:["Bitcoin","Ethereum","Litecoin","Dash"],chart:{type:"donut",height:224},series:[19405,40552,15824,30635],plotOptions:{pie:{size:100,offsetX:0,offsetY:0,donut:{size:"70%",labels:{show:!0,name:{show:!0,fontSize:"18px",offsetY:-5},value:{show:!0,fontSize:"20px",color:"#343a40",fontWeight:500,offsetY:5,formatter(t){return"$"+t}},total:{show:!0,fontSize:"13px",label:"Total value",color:"#9599ad",fontWeight:500,formatter(t){return"$"+t.globals.seriesTotals.reduce(function(s,o){return s+o},0)}}}}}},dataLabels:{enabled:!1},legend:{show:!1},yaxis:{labels:{formatter(t){return"$"+t}}},stroke:{lineCap:"round",width:2},colors:p};return b(()=>{new ApexCharts(document.querySelector("#myportfoliochart"),m).render()}),i.$$set=t=>{"dataColors"in t&&r(0,a=t.dataColors)},[a]}class V extends g{constructor(e){super();y(this,e,_,z,x,{dataColors:0})}}export{V as default};