import{S as l,i as n,s as c,e as m,c as d,a as h,d as s,b as t,g as f,J as i,v as p}from"../../../../chunks/vendor-bc251f35.js";import{c as u}from"../../../../chunks/comingsoon-d20c1d58.js";import{i as g}from"../../../../chunks/img-4-f8adc4d4.js";function v(r){let a;return{c(){a=m("div"),this.h()},l(e){a=d(e,"DIV",{id:!0,class:!0,dir:!0}),h(a).forEach(s),this.h()},h(){t(a,"id","imageradialchart"),t(a,"class","apex-charts"),t(a,"dir","ltr")},m(e,o){f(e,a,o)},p:i,i,o:i,d(e){e&&s(a)}}}function x(r){return p(()=>{var a={chart:{height:315,type:"radialBar"},series:[67],plotOptions:{radialBar:{hollow:{margin:15,size:"65%",image:u,imageWidth:56,imageHeight:56,imageClipped:!1},dataLabels:{name:{show:!1,color:"#fff"},value:{show:!0,color:"#333",offsetY:65,fontSize:"22px"}}}},fill:{type:"image",image:{src:[g]}},stroke:{lineCap:"round"},labels:["Volatility"]};new ApexCharts(document.querySelector("#imageradialchart"),a).render()}),[]}class w extends l{constructor(a){super();n(this,a,x,v,c,{})}}export{w as default};
