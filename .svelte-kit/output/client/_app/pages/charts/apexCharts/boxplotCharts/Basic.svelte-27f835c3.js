import{S as p,i as f,s as m,e as y,c as g,a as C,d as h,b as u,g as b,J as d,v as J}from"../../../../chunks/vendor-bc251f35.js";function v(i){let t;return{c(){t=y("div"),this.h()},l(e){t=g(e,"DIV",{id:!0,class:!0,dir:!0}),C(t).forEach(h),this.h()},h(){u(t,"id","barboxchart"),u(t,"class","apex-charts"),u(t,"dir","ltr")},m(e,r){b(e,t,r)},p:d,i:d,o:d,d(e){e&&h(t)}}}function P(i,t,e){let{dataColors:r}=t;function x(a){return a.map(function(o){var n=o.replace(" ","");if(n.indexOf(",")===-1){var s=getComputedStyle(document.documentElement).getPropertyValue(n);return s.indexOf("#")!==-1&&(s=s.replace(" ","")),s||n}else{var l=o.split(",");if(l.length===2){var c=getComputedStyle(document.documentElement).getPropertyValue(l[0]);return c="rgba("+c+","+l[1]+")",c}else return n}})}return J(()=>{var a=x(r),o={chart:{type:"boxPlot",height:350,toolbar:{show:!1}},series:[{type:"boxPlot",data:[{x:"Jan 2015",y:[54,66,69,75,88]},{x:"Jan 2016",y:[43,65,69,76,81]},{x:"Jan 2017",y:[31,39,45,51,59]},{x:"Jan 2018",y:[39,46,55,65,71]},{x:"Jan 2019",y:[29,31,35,39,44]},{x:"Jan 2020",y:[41,49,58,61,67]},{x:"Jan 2021",y:[54,59,66,71,88]}]}],title:{text:"Basic BoxPlot Chart",align:"left",style:{fontWeight:500}},plotOptions:{boxPlot:{colors:{upper:a[0],lower:a[1]}}}};new ApexCharts(document.querySelector("#barboxchart"),o).render()}),i.$$set=a=>{"dataColors"in a&&e(0,r=a.dataColors)},[r]}class S extends p{constructor(t){super();f(this,t,P,v,m,{dataColors:0})}}export{S as default};