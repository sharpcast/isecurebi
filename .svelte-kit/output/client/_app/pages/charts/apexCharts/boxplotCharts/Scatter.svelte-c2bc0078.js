import{S as y,i as g,s as f,e as w,c as D,a as T,d,b as c,g as C,J as m,v}from"../../../../chunks/vendor-bc251f35.js";function S(o){let e;return{c(){e=w("div"),this.h()},l(t){e=D(t,"DIV",{id:!0,class:!0,dir:!0}),T(e).forEach(d),this.h()},h(){c(e,"id","scatterchart"),c(e,"class","apex-charts"),c(e,"dir","ltr")},m(t,r){C(t,e,r)},p:m,i:m,o:m,d(t){t&&d(e)}}}function P(o,e,t){let{dataColors:r}=e;function x(a){return a.map(function(u){var i=u.replace(" ","");if(i.indexOf(",")===-1){var n=getComputedStyle(document.documentElement).getPropertyValue(i);return n.indexOf("#")!==-1&&(n=n.replace(" ","")),n||i}else{var s=u.split(",");if(s.length===2){var l=getComputedStyle(document.documentElement).getPropertyValue(s[0]);return l="rgba("+l+","+s[1]+")",l}else return i}})}var h=x(r),p={chart:{toolbar:{show:!1},type:"boxPlot",height:350},series:[{name:"Box",type:"boxPlot",data:[{x:new Date("2017-01-01").getTime(),y:[54,66,69,75,88]},{x:new Date("2018-01-01").getTime(),y:[43,65,69,76,81]},{x:new Date("2019-01-01").getTime(),y:[31,39,45,51,59]},{x:new Date("2020-01-01").getTime(),y:[39,46,55,65,71]},{x:new Date("2021-01-01").getTime(),y:[29,31,35,39,44]}]},{name:"Outliers",type:"scatter",data:[{x:new Date("2017-01-01").getTime(),y:32},{x:new Date("2018-01-01").getTime(),y:25},{x:new Date("2019-01-01").getTime(),y:64},{x:new Date("2020-01-01").getTime(),y:27},{x:new Date("2020-01-01").getTime(),y:78},{x:new Date("2021-01-01").getTime(),y:15}]}],colors:h,title:{text:"BoxPlot - Scatter Chart",align:"left",style:{fontWeight:500}},xaxis:{type:"datetime",tooltip:{formatter(a){return new Date(a).getFullYear()}}},plotOptions:{boxPlot:{colors:{upper:"#f06548",lower:"#405189"}}},tooltip:{shared:!1,intersect:!0}};return v(()=>{new ApexCharts(document.querySelector("#scatterchart"),p).render()}),o.$$set=a=>{"dataColors"in a&&t(0,r=a.dataColors)},[r]}class b extends y{constructor(e){super();g(this,e,P,S,f,{dataColors:0})}}export{b as default};