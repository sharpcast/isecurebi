import{S as j,i as q,s as A,V as T,e as V,w as a,c as k,a as x,x as o,d as g,b as E,g as b,y as i,q as p,o as u,B as l,T as D,k as d,m as v,J as F}from"../../chunks/vendor-bc251f35.js";import{B as I}from"../../chunks/BreadCrumb-351b84b0.js";import L from"../dashboard/SalesByLocations.svelte-a7cbf33b.js";import W from"./ApplicationsStatistic.svelte-699bfe7b.js";import G from"./Candidates.svelte-0ae2ce85.js";import H from"./FeaturedCompanies.svelte-b3017121.js";import K from"./RecentApplicants.svelte-848e2d0f.js";import M from"./RecomendedJobs.svelte-554a0d15.js";import N from"./Widgets.svelte-f076dbf1.js";import"../../chunks/Map-e1ee7aed.js";import"../../chunks/counter-04ef4ff6.js";import"../../chunks/avatar-10-def8cdb7.js";import"../../chunks/avatar-1-413c6ccd.js";import"../../chunks/avatar-9-f5d371f4.js";import"../../chunks/avatar-2-5b5618a1.js";import"../../chunks/avatar-5-c7d43f40.js";import"../../chunks/avatar-8-f9de7a45.js";import"../../chunks/dashboardJobs-69be2afb.js";import"../../chunks/img-5-9ef0dff2.js";import"../../chunks/img-3-127a32b6.js";import"../../chunks/img-2-674a1784.js";import"../../chunks/img-4-5ac753e7.js";import"../../chunks/avatar-3-5bcc58a8.js";import"../../chunks/avatar-4-3a2dbf60.js";import"../../chunks/avatar-6-ef07d98c.js";import"./DashboardCharts.svelte-0e8fd779.js";function O(c){let e,n,r,m;return e=new N({}),r=new H({}),{c(){a(e.$$.fragment),n=d(),a(r.$$.fragment)},l(t){o(e.$$.fragment,t),n=v(t),o(r.$$.fragment,t)},m(t,s){i(e,t,s),b(t,n,s),i(r,t,s),m=!0},i(t){m||(p(e.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){u(e.$$.fragment,t),u(r.$$.fragment,t),m=!1},d(t){l(e,t),t&&g(n),l(r,t)}}}function P(c){let e,n,r,m;return e=new W({props:{dataColors:["--vz-success","--vz-info","--vz-primary"]}}),r=new G({}),{c(){a(e.$$.fragment),n=d(),a(r.$$.fragment)},l(t){o(e.$$.fragment,t),n=v(t),o(r.$$.fragment,t)},m(t,s){i(e,t,s),b(t,n,s),i(r,t,s),m=!0},p:F,i(t){m||(p(e.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){u(e.$$.fragment,t),u(r.$$.fragment,t),m=!1},d(t){l(e,t),t&&g(n),l(r,t)}}}function Q(c){let e,n;return e=new M({}),{c(){a(e.$$.fragment)},l(r){o(e.$$.fragment,r)},m(r,m){i(e,r,m),n=!0},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){u(e.$$.fragment,r),n=!1},d(r){l(e,r)}}}function U(c){let e,n,r,m;return e=new K({}),r=new L({}),{c(){a(e.$$.fragment),n=d(),a(r.$$.fragment)},l(t){o(e.$$.fragment,t),n=v(t),o(r.$$.fragment,t)},m(t,s){i(e,t,s),b(t,n,s),i(r,t,s),m=!0},i(t){m||(p(e.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){u(e.$$.fragment,t),u(r.$$.fragment,t),m=!1},d(t){l(e,t),t&&g(n),l(r,t)}}}function X(c){let e,n,r,m,t,s,_,C,w,B;return e=new I({props:{title:"Job Dashboard",pageTitle:"Dashboards"}}),r=new D({props:{$$slots:{default:[O]},$$scope:{ctx:c}}}),t=new D({props:{$$slots:{default:[P]},$$scope:{ctx:c}}}),_=new D({props:{$$slots:{default:[Q]},$$scope:{ctx:c}}}),w=new D({props:{$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){a(e.$$.fragment),n=d(),a(r.$$.fragment),m=d(),a(t.$$.fragment),s=d(),a(_.$$.fragment),C=d(),a(w.$$.fragment)},l($){o(e.$$.fragment,$),n=v($),o(r.$$.fragment,$),m=v($),o(t.$$.fragment,$),s=v($),o(_.$$.fragment,$),C=v($),o(w.$$.fragment,$)},m($,f){i(e,$,f),b($,n,f),i(r,$,f),b($,m,f),i(t,$,f),b($,s,f),i(_,$,f),b($,C,f),i(w,$,f),B=!0},p($,f){const S={};f&1&&(S.$$scope={dirty:f,ctx:$}),r.$set(S);const z={};f&1&&(z.$$scope={dirty:f,ctx:$}),t.$set(z);const J={};f&1&&(J.$$scope={dirty:f,ctx:$}),_.$set(J);const R={};f&1&&(R.$$scope={dirty:f,ctx:$}),w.$set(R)},i($){B||(p(e.$$.fragment,$),p(r.$$.fragment,$),p(t.$$.fragment,$),p(_.$$.fragment,$),p(w.$$.fragment,$),B=!0)},o($){u(e.$$.fragment,$),u(r.$$.fragment,$),u(t.$$.fragment,$),u(_.$$.fragment,$),u(w.$$.fragment,$),B=!1},d($){l(e,$),$&&g(n),l(r,$),$&&g(m),l(t,$),$&&g(s),l(_,$),$&&g(C),l(w,$)}}}function Y(c){let e,n,r;return n=new T({props:{fluid:!0,$$slots:{default:[X]},$$scope:{ctx:c}}}),{c(){e=V("div"),a(n.$$.fragment),this.h()},l(m){e=k(m,"DIV",{class:!0});var t=x(e);o(n.$$.fragment,t),t.forEach(g),this.h()},h(){E(e,"class","page-content")},m(m,t){b(m,e,t),i(n,e,null),r=!0},p(m,[t]){const s={};t&1&&(s.$$scope={dirty:t,ctx:m}),n.$set(s)},i(m){r||(p(n.$$.fragment,m),r=!0)},o(m){u(n.$$.fragment,m),r=!1},d(m){m&&g(e),l(n)}}}class Dt extends j{constructor(e){super();q(this,e,null,Y,A,{})}}export{Dt as default};