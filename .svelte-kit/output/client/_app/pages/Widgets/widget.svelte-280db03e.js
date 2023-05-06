import{S as W,i as B,s as N,V as E,k as $,e as V,w as m,G as P,d as c,m as h,c as M,a as R,x as d,b as L,g as b,y as p,q as g,o as u,B as f,J as U}from"../../chunks/vendor-bc251f35.js";import{B as F}from"../../chunks/BreadCrumb-351b84b0.js";import Y from"./TileBoxs.svelte-25ab7db5.js";import q from"./OtherWidgets.svelte-8512e8fb.js";import z from"./UpcomingActivities.svelte-4da5b0ce.js";import O from"./Chart_MapWidgets.svelte-4cd4233b.js";import j from"./EcommerceWidgets.svelte-82656ac1.js";import G from"./CreditCard.svelte-8e11edf2.js";import{a as S}from"../../chunks/avatar-1-413c6ccd.js";import{a as T}from"../../chunks/avatar-2-5b5618a1.js";import{a as H}from"../../chunks/avatar-3-5bcc58a8.js";import{a as J}from"../../chunks/avatar-4-3a2dbf60.js";import{a as A}from"../../chunks/avatar-5-c7d43f40.js";import{a as K}from"../../chunks/avatar-6-ef07d98c.js";import{a as X}from"../../chunks/avatar-7-46aa251f.js";import{a as Q}from"../../chunks/avatar-8-f9de7a45.js";import{b as Z,l as ee}from"../../chunks/ltc-734c3a3e.js";import{e as ie}from"../../chunks/eth-105a4f91.js";import{d as se}from"../../chunks/dash-a9bce606.js";import{c as ae}from"../../chunks/img-3-127a32b6.js";import{c as te}from"../../chunks/img-4-5ac753e7.js";import{c as re}from"../../chunks/img-6-7ff883ab.js";import{c as oe}from"../../chunks/img-8-ebcd4c34.js";import"../../chunks/counter-04ef4ff6.js";import"../../chunks/user-illustarator-2-5db54d81.js";import"./WidgetsCharts.svelte-40561f6b.js";import"../../chunks/img-2-4d0b6815.js";import"../../chunks/img-8-1e4e4e71.js";import"../../chunks/img-10-2971869e.js";import"./sessionsByCountries.svelte-ecccf99a.js";import"./audiencesMetrics.svelte-7922e131.js";import"./myPortfolio.svelte-5969f985.js";import"./topReferralsPages.svelte-8ebd0461.js";import"../../chunks/Map-e1ee7aed.js";/* empty css                              *//* empty css                                  *//* empty css                              */import"../../chunks/autoplay.min-76e4ebdf.js";import"../../chunks/img-3-6f709142.js";import"../../chunks/img-4-aea6c737.js";import"../../chunks/img-6-fd986b52.js";const ne=[{id:1,label:"Total Earnings",labelClass:"muted",percentage:"+16.24 %",percentageClass:"success",percentageIcon:"ri-arrow-right-up-line",counter:"559.25",caption:"View net earnings",icon:"bx bx-dollar-circle",iconClass:"success",decimals:2,prefix:"$",suffix:"k"},{id:2,label:"Orders",labelClass:"white-50",percentage:"-3.57 %",percentageClass:"warning",percentageIcon:"ri-arrow-right-down-line",counter:"36894",caption:"View all orders",icon:"bx bx-shopping-bag",iconClass:"light",bgColor:"bg-info",counterClass:"text-white",captionClass:"text-white-50",decimals:0,prefix:"",separator:",",suffix:""},{id:3,label:"Customers",labelClass:"muted",percentage:"+29.08 %",percentageClass:"success",percentageIcon:"ri-arrow-right-up-line",counter:"183.35",caption:"See details",icon:"bx bx-user-circle",iconClass:"warning",decimals:2,prefix:"",suffix:"M"},{id:4,label:"My Balance",labelClass:"muted",percentage:"+0.00 %",percentageClass:"muted",counter:"165.89",caption:"Withdraw money",icon:"bx bx-wallet",iconClass:"primary",decimals:2,prefix:"$",separator:",",suffix:"k"}],ce=[{id:1,label:"Campaign Sent",badge:"ri-arrow-up-circle-line text-success",icon:"ri-space-ship-line",counter:"197",decimals:0,suffix:"",prefix:""},{id:2,label:"Annual Profit",badge:"ri-arrow-up-circle-line text-success",icon:"ri-exchange-dollar-line",counter:"489.4",decimals:1,suffix:"k",prefix:"$"},{id:3,label:"Lead Coversation",badge:"ri-arrow-down-circle-line text-danger",icon:"ri-pulse-line",counter:"32.89",decimals:2,suffix:"%",prefix:""},{id:4,label:"Daily Average Income",badge:"ri-arrow-up-circle-line text-success",icon:"ri-trophy-line",counter:"1596.5",decimals:1,prefix:"$",separator:",",suffix:""},{id:5,label:"Annual Deals",badge:"ri-arrow-down-circle-line text-danger",icon:"ri-service-line",counter:"2659",decimals:0,separator:",",suffix:"",prefix:""}],le=[{id:1,label:"Users",labelClass:"muted",badgeClass:"bg-light text-success",badge:"ri-arrow-up-line",percentage:"16.24 %",iconClass:"info",feaIcon:"users",subCounter:[{id:1,counter:"28.05",decimals:2,suffix:"k",prefix:""}]},{id:2,label:"Sessions",labelClass:"muted",badgeClass:"bg-light text-danger",badge:"ri-arrow-down-line",percentage:"3.96 %",iconClass:"info",feaIcon:"activity",subCounter:[{id:1,counter:"97.66",decimals:2,suffix:"k",prefix:""}]},{id:3,bgColor:"bg-primary",label:"Avg. Visit Duration",labelClass:"white-50",counterClass:"text-white",badgeClass:"badge-soft-light",badge:"ri-arrow-down-line",percentage:"0.24 %",iconClass:"light",feaIcon:"clock",decimals:0,suffix:"",prefix:"",subCounter:[{id:1,counter:"3",decimals:0,suffix:"m ",prefix:""},{id:2,counter:"40",decimals:0,suffix:"sec",prefix:""}]},{id:4,label:"Bounce Rate",labelClass:"muted",badgeClass:"bg-light text-success",badge:"ri-arrow-up-line",percentage:"7.05 %",iconClass:"info",feaIcon:"external-link",subCounter:[{id:1,counter:"33.48",decimals:2,suffix:"%",prefix:""}]}],me=[{id:1,bgColor:"bg-success",icon:"bx bx-shopping-bag",iconClass:"light",label:"Total Sales",labelClass:"white-50",counter:"2045",counterClass:"text-white",caption:"From 1930 last year",captionClass:"white-50",percentage:"6.11 %",percentageClass:"light",badge:"ri-arrow-up-s-line",decimals:0,separator:",",suffix:"",prefix:""},{id:2,icon:"bx bxs-user-account",iconClass:"warning",label:"Number of Users",labelClass:"muted",counter:"7522",caption:"From 9530 last year",captionClass:"muted",percentage:"10.35 %",percentageClass:"danger",badge:"ri-arrow-down-s-line",decimals:0,separator:",",suffix:"",prefix:""},{id:3,icon:"bx bxs-badge-dollar",iconClass:"danger",label:"Total Revenue",labelClass:"muted",counter:"2845.05",caption:"From $1,750.04 last year",captionClass:"muted",percentage:"22.96 %",percentageClass:"success",badge:"ri-arrow-up-s-line",decimals:2,separator:",",suffix:"",prefix:"$"},{id:4,icon:"bx bx-store-alt",iconClass:"info",label:"Number of Stores",labelClass:"muted",counter:"405",caption:"From 308 last year",captionClass:"muted",percentage:"16.31 %",percentageClass:"success",badge:"ri-arrow-up-s-line",decimals:0,separator:",",suffix:"k",prefix:""}],de=[{id:1,title:"Brand Logo Design - MD",subTitle:"Graphics Work",subItem:[{id:1,icon:"mdi mdi-numeric-1-circle",iconClass:"success",label:"Completed"},{id:2,icon:"mdi mdi-numeric-3-circle",iconClass:"info",label:"In Progress"},{id:3,icon:"mdi mdi-numeric-2-circle",iconClass:"primary",label:"To Do"}],progressBar:[{id:1,bgColor:"bg-success",width:"30%"},{id:2,bgColor:"bg-info",width:"50%"},{id:3,width:"20%"}]},{id:2,title:"Redesign - Landing Page",subTitle:"UI/UX Design",subItem:[{id:1,icon:"mdi mdi-numeric-3-circle",iconClass:"success",label:"Completed"},{id:2,icon:"mdi mdi-numeric-0-circle",iconClass:"info",label:"In Progress"},{id:3,icon:"mdi mdi-numeric-8-circle",iconClass:"primary",label:"To Do"}],progressBar:[{id:1,bgColor:"bg-success",width:"30%"},{id:2,bgColor:"bg-info",width:"0%"},{id:3,width:"70%"}]},{id:3,title:"Ecommerce App for Web",subTitle:"CRM Project",subItem:[{id:1,icon:"mdi mdi-numeric-10-circle",iconClass:"success",label:"Completed"},{id:2,icon:"mdi mdi-numeric-8-circle",iconClass:"info",label:"In Progress"},{id:3,icon:"mdi mdi-numeric-2-circle",iconClass:"primary",label:"To Do"}],progressBar:[{id:1,bgColor:"bg-success",width:"60%"},{id:2,bgColor:"bg-info",width:"25%"},{id:3,width:"15%"}]}],pe=[{id:1,date:"25",weekDay:"Tue",time:"12:00am - 03:30pm",caption:"Meeting for campaign with sales team",subItem:[{id:1,img:S},{id:2,img:T},{id:3,img:H},{id:4,imgNumber:"5",bgcolor:"bg-info"}]},{id:2,date:"20",weekDay:"Wed",time:"02:00pm - 03:45pm",caption:"Adding a new event with attachments",subItem:[{id:1,img:J},{id:2,img:A},{id:3,img:K},{id:4,img:X},{id:5,imgNumber:"3",bgcolor:"bg-success"}]},{id:3,date:"17",weekDay:"Wed",time:"04:30pm - 07:15pm",caption:"Create new project Bundling Product",subItem:[{id:1,img:Q},{id:2,img:S},{id:3,img:T},{id:4,imgNumber:"4",bgcolor:"bg-primary"}]},{id:4,date:"12",weekDay:"Tue",time:"10:30am - 01:15pm",caption:"Weekly closed sales won checking with sales team",subItem:[{id:1,img:S},{id:2,img:A},{id:3,img:T},{id:4,imgNumber:"9",bgcolor:"bg-warning"}]}],ge=[{id:1,forId:"task_one",text:"Review and make sure nothing slips through cracks",date:"15 Sep, 2021"},{id:2,forId:"task_two",text:"Send meeting invites for sales upcampaign",date:"20 Sep, 2021"},{id:3,forId:"task_three",text:"Weekly closed sales won checking with sales team",date:"24 Sep, 2021"},{id:4,forId:"task_four",text:"Add notes that can be viewed from the individual view",date:"27 Sep, 2021"},{id:5,forId:"task_five",text:"Move stuff to another page",date:"27 Sep, 2021"},{id:6,forId:"task_six",text:"Styling wireframe design and documentation for velzon admin",date:"27 Sep, 2021"}],ue=[{id:1,subCounter:[{id:1,counter:"854",suffix:"",prefix:""}],caption:"Avg. Session",percentage:"49%"},{id:2,subCounter:[{id:1,counter:"1278",decimals:0,separator:",",suffix:"",prefix:""}],caption:"Conversion Rate",percentage:"60%"},{id:3,subCounter:[{id:1,counter:"3",decimals:0,suffix:"m ",prefix:""},{id:2,counter:"40",decimals:0,suffix:"sec",prefix:""}],caption:"Avg. Ses. Duration"}],fe=[{id:1,img:Z,label:"Bitcoin",coinName:"BTC",coinVolume:"0.00584875",badgeClass:"primary",price:"$19,405.12",priceClass:"success",coinNameClass:"primary"},{id:2,img:ie,label:"Ethereum",coinName:"ETH",coinVolume:"2.25842108",badgeClass:"info",price:"$40552.18",priceClass:"danger",coinNameClass:"info"},{id:3,img:ee,label:"Litecoin",coinName:"LTC",coinVolume:"10.58963217",badgeClass:"warning",price:"$15824.58",priceClass:"success",coinNameClass:"warning"},{id:4,img:se,label:"Dash",coinName:"DASH",coinVolume:"204.28565885",badgeClass:"success",price:"$30635.84",priceClass:"success",coinNameClass:"success"}],be=[{id:1,img:ae,title:"Marketing Director",class:"",year:"(2-4 Yrs Exp.)"},{id:2,img:te,class:"",title:"Sr. Web Designer",year:"(2+ Yrs Exp.)"},{id:3,img:re,class:"bg-soft-primary shadow-none bg-opacity-10",title:"Sr. Web Designer",year:"(2+ Yrs Exp.)"},{id:4,img:oe,class:"bg-soft-info shadow-none bg-opacity-10",title:"Sr. Web Designer",year:"(2+ Yrs Exp.)"}],v={tileBoxs1:ne,tileBoxs2:ce,tileBoxs3:le,tileBoxes4:me,tileBoxes5:be,widgetsActivities:pe,widgetsTasks:ge,widgetsAudiences:ue,widgetsPortfolio:fe,otherWidgets2:de};function Ce(D){let a,o,s,l,i,n,t,y,C,k,x,_,w,I;return a=new F({props:{title:"Widgets",pageTitle:"Velzon"}}),s=new Y({props:{WidgetData:v}}),i=new q({props:{otherWidgets2:v.otherWidgets2}}),t=new z({props:{widgetsActivities:v.widgetsActivities,widgetsTasks:v.widgetsTasks}}),C=new O({props:{widgetsAudiences:v.widgetsAudiences,widgetsPortfolio:v.widgetsPortfolio}}),x=new j({}),w=new G({}),{c(){m(a.$$.fragment),o=$(),m(s.$$.fragment),l=$(),m(i.$$.fragment),n=$(),m(t.$$.fragment),y=$(),m(C.$$.fragment),k=$(),m(x.$$.fragment),_=$(),m(w.$$.fragment)},l(e){d(a.$$.fragment,e),o=h(e),d(s.$$.fragment,e),l=h(e),d(i.$$.fragment,e),n=h(e),d(t.$$.fragment,e),y=h(e),d(C.$$.fragment,e),k=h(e),d(x.$$.fragment,e),_=h(e),d(w.$$.fragment,e)},m(e,r){p(a,e,r),b(e,o,r),p(s,e,r),b(e,l,r),p(i,e,r),b(e,n,r),p(t,e,r),b(e,y,r),p(C,e,r),b(e,k,r),p(x,e,r),b(e,_,r),p(w,e,r),I=!0},p:U,i(e){I||(g(a.$$.fragment,e),g(s.$$.fragment,e),g(i.$$.fragment,e),g(t.$$.fragment,e),g(C.$$.fragment,e),g(x.$$.fragment,e),g(w.$$.fragment,e),I=!0)},o(e){u(a.$$.fragment,e),u(s.$$.fragment,e),u(i.$$.fragment,e),u(t.$$.fragment,e),u(C.$$.fragment,e),u(x.$$.fragment,e),u(w.$$.fragment,e),I=!1},d(e){f(a,e),e&&c(o),f(s,e),e&&c(l),f(i,e),e&&c(n),f(t,e),e&&c(y),f(C,e),e&&c(k),f(x,e),e&&c(_),f(w,e)}}}function xe(D){let a,o,s,l;return s=new E({props:{fluid:!0,$$slots:{default:[Ce]},$$scope:{ctx:D}}}),{c(){a=$(),o=V("div"),m(s.$$.fragment),this.h()},l(i){P('[data-svelte="svelte-cc2n9s"]',document.head).forEach(c),a=h(i),o=M(i,"DIV",{class:!0});var t=R(o);d(s.$$.fragment,t),t.forEach(c),this.h()},h(){document.title="Widget | Velzon - Svelte Admin & Dashboard Template",L(o,"class","page-content")},m(i,n){b(i,a,n),b(i,o,n),p(s,o,null),l=!0},p(i,[n]){const t={};n&1&&(t.$$scope={dirty:n,ctx:i}),s.$set(t)},i(i){l||(g(s.$$.fragment,i),l=!0)},o(i){u(s.$$.fragment,i),l=!1},d(i){i&&c(a),i&&c(o),f(s)}}}class oi extends W{constructor(a){super();B(this,a,null,xe,N,{})}}export{oi as default};