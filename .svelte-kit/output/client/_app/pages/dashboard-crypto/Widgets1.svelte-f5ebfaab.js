import{S as G,i as L,s as R,U as q,w as _,x as g,y as h,q as i,o as d,B as w,aJ as U,aK as W,aL as j,l as K,g as m,n as y,p as F,K as Q,d as c,aM as X,ag as Y,k as B,m as N,ah as Z,$ as ee,T as te,e as E,t as A,c as S,a as x,h as k,b as v,H as se,I as D,a0 as re,a1 as ae,J as H,a2 as T}from"../../chunks/vendor-bc251f35.js";/* empty css                              *//* empty css                                  */import{M as J}from"../../chunks/crypto-26d55d11.js";import le from"./DashboardCryptoCharts.svelte-2a557a5f.js";import"../../chunks/ltc-734c3a3e.js";import"../../chunks/usdt-bb1667f7.js";import"../../chunks/dash-a9bce606.js";import"../../chunks/aave-961ba45c.js";import"../../chunks/eth-105a4f91.js";import"../../chunks/doge-aae7bd6c.js";import"../../chunks/img-1-6a9b26f3.js";import"../../chunks/img-2-d003c89a.js";import"../../chunks/img-3-4c804a8b.js";import"../../chunks/img-6-3ccff08f.js";function O(n,e,a){const t=n.slice();return t[0]=e[a],t}function oe(n){let e,a;return{c(){e=E("span"),a=E("i"),this.h()},l(t){e=S(t,"SPAN",{class:!0});var r=x(e);a=S(r,"I",{class:!0}),x(a).forEach(c),r.forEach(c),this.h()},h(){v(a,"class","mdi mdi-dots-horizontal"),v(e,"class","text-muted fs-18")},m(t,r){m(t,e,r),D(e,a)},p:H,d(t){t&&c(e)}}}function ne(n){let e;return{c(){e=A("Details")},l(a){e=k(a,"Details")},m(a,t){m(a,e,t)},d(a){a&&c(e)}}}function $e(n){let e;return{c(){e=A("Cancel")},l(a){e=k(a,"Cancel")},m(a,t){m(a,e,t)},d(a){a&&c(e)}}}function fe(n){let e,a,t,r;return e=new T({props:{href:"#!",$$slots:{default:[ne]},$$scope:{ctx:n}}}),t=new T({props:{href:"#!",$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),a=B(),_(t.$$.fragment)},l(s){g(e.$$.fragment,s),a=N(s),g(t.$$.fragment,s)},m(s,l){h(e,s,l),m(s,a,l),h(t,s,l),r=!0},p(s,l){const $={};l&8&&($.$$scope={dirty:l,ctx:s}),e.$set($);const o={};l&8&&(o.$$scope={dirty:l,ctx:s}),t.$set(o)},i(s){r||(i(e.$$.fragment,s),i(t.$$.fragment,s),r=!0)},o(s){d(e.$$.fragment,s),d(t.$$.fragment,s),r=!1},d(s){w(e,s),s&&c(a),w(t,s)}}}function ce(n){let e,a,t,r;return e=new re({props:{class:"text-reset p-0",color:"",tag:"a",role:"button",$$slots:{default:[oe]},$$scope:{ctx:n}}}),t=new ae({props:{class:"dropdown-menu dropdown-menu-end",end:!0,$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),a=B(),_(t.$$.fragment)},l(s){g(e.$$.fragment,s),a=N(s),g(t.$$.fragment,s)},m(s,l){h(e,s,l),m(s,a,l),h(t,s,l),r=!0},p(s,l){const $={};l&8&&($.$$scope={dirty:l,ctx:s}),e.$set($);const o={};l&8&&(o.$$scope={dirty:l,ctx:s}),t.$set(o)},i(s){r||(i(e.$$.fragment,s),i(t.$$.fragment,s),r=!0)},o(s){d(e.$$.fragment,s),d(t.$$.fragment,s),r=!1},d(s){w(e,s),s&&c(a),w(t,s)}}}function ue(n){let e,a=n[0].price+"",t,r,s,l=n[0].change+"",$,o,I,P=n[0].coinName+"",M,b;return{c(){e=E("h5"),t=A(a),r=B(),s=E("p"),$=A(l),o=E("span"),I=A("("),M=A(P),b=A(")"),this.h()},l(p){e=S(p,"H5",{class:!0});var f=x(e);t=k(f,a),f.forEach(c),r=N(p),s=S(p,"P",{class:!0});var u=x(s);$=k(u,l),o=S(u,"SPAN",{class:!0});var C=x(o);I=k(C,"("),M=k(C,P),b=k(C,")"),C.forEach(c),u.forEach(c),this.h()},h(){v(e,"class","mb-1 mt-4"),v(o,"class","text-muted ms-2 fs-10 text-uppercase"),v(s,"class","fs-13 fw-medium mb-0 text-"+n[0].changeClass)},m(p,f){m(p,e,f),D(e,t),m(p,r,f),m(p,s,f),D(s,$),D(s,o),D(o,I),D(o,M),D(o,b)},p:H,d(p){p&&c(e),p&&c(r),p&&c(s)}}}function ie(n){let e,a,t;return a=new le({props:{seriesData:n[0].series,id:n[0].id,chartsColor:n[0].chartsColor}}),{c(){e=E("div"),_(a.$$.fragment),this.h()},l(r){e=S(r,"DIV",{class:!0,dir:!0});var s=x(e);g(a.$$.fragment,s),s.forEach(c),this.h()},h(){v(e,"class","apex-charts crypto-widget"),v(e,"dir","ltr")},m(r,s){m(r,e,s),h(a,e,null),t=!0},p:H,i(r){t||(i(a.$$.fragment,r),t=!0)},o(r){d(a.$$.fragment,r),t=!1},d(r){r&&c(e),w(a)}}}function pe(n){let e,a,t,r;return e=new q({props:{xs:6,$$slots:{default:[ue]},$$scope:{ctx:n}}}),t=new q({props:{xs:6,$$slots:{default:[ie]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),a=B(),_(t.$$.fragment)},l(s){g(e.$$.fragment,s),a=N(s),g(t.$$.fragment,s)},m(s,l){h(e,s,l),m(s,a,l),h(t,s,l),r=!0},p(s,l){const $={};l&8&&($.$$scope={dirty:l,ctx:s}),e.$set($);const o={};l&8&&(o.$$scope={dirty:l,ctx:s}),t.$set(o)},i(s){r||(i(e.$$.fragment,s),i(t.$$.fragment,s),r=!0)},o(s){d(e.$$.fragment,s),d(t.$$.fragment,s),r=!1},d(s){w(e,s),s&&c(a),w(t,s)}}}function me(n){let e,a,t,r,s,l,$,o,I=n[0].label+"",P,M,b,p;return a=new ee({props:{class:"dropdown-menu-end",$$slots:{default:[ce]},$$scope:{ctx:n}}}),b=new te({props:{class:"align-items-end g-0",$$slots:{default:[pe]},$$scope:{ctx:n}}}),{c(){e=E("div"),_(a.$$.fragment),t=B(),r=E("div"),s=E("img"),$=B(),o=E("h6"),P=A(I),M=B(),_(b.$$.fragment),this.h()},l(f){e=S(f,"DIV",{class:!0});var u=x(e);g(a.$$.fragment,u),u.forEach(c),t=N(f),r=S(f,"DIV",{class:!0});var C=x(r);s=S(C,"IMG",{src:!0,class:!0,alt:!0}),$=N(C),o=S(C,"H6",{class:!0});var V=x(o);P=k(V,I),V.forEach(c),C.forEach(c),M=N(f),g(b.$$.fragment,f),this.h()},h(){v(e,"class","float-end"),se(s.src,l=n[0].img)||v(s,"src",l),v(s,"class","bg-light rounded-circle p-1 avatar-xs img-fluid"),v(s,"alt",""),v(o,"class","ms-2 mb-0 fs-14"),v(r,"class","d-flex align-items-center")},m(f,u){m(f,e,u),h(a,e,null),m(f,t,u),m(f,r,u),D(r,s),D(r,$),D(r,o),D(o,P),m(f,M,u),h(b,f,u),p=!0},p(f,u){const C={};u&8&&(C.$$scope={dirty:u,ctx:f}),a.$set(C);const V={};u&8&&(V.$$scope={dirty:u,ctx:f}),b.$set(V)},i(f){p||(i(a.$$.fragment,f),i(b.$$.fragment,f),p=!0)},o(f){d(a.$$.fragment,f),d(b.$$.fragment,f),p=!1},d(f){f&&c(e),w(a),f&&c(t),f&&c(r),f&&c(M),w(b,f)}}}function de(n){let e,a;return e=new Z({props:{$$slots:{default:[me]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),a=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}function _e(n){let e,a,t;return e=new Y({props:{$$slots:{default:[de]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),a=B()},l(r){g(e.$$.fragment,r),a=N(r)},m(r,s){h(e,r,s),m(r,a,s),t=!0},p(r,s){const l={};s&8&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){t||(i(e.$$.fragment,r),t=!0)},o(r){d(e.$$.fragment,r),t=!1},d(r){w(e,r),r&&c(a)}}}function z(n){let e,a;return e=new X({props:{$$slots:{default:[_e]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),a=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}function ge(n){let e,a,t=J.cryptoSlider,r=[];for(let l=0;l<t.length;l+=1)r[l]=z(O(n,t,l));const s=l=>d(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=K()},l(l){for(let $=0;$<r.length;$+=1)r[$].l(l);e=K()},m(l,$){for(let o=0;o<r.length;o+=1)r[o].m(l,$);m(l,e,$),a=!0},p(l,$){if($&0){t=J.cryptoSlider;let o;for(o=0;o<t.length;o+=1){const I=O(l,t,o);r[o]?(r[o].p(I,$),i(r[o],1)):(r[o]=z(I),r[o].c(),i(r[o],1),r[o].m(e.parentNode,e))}for(y(),o=t.length;o<r.length;o+=1)s(o);F()}},i(l){if(!a){for(let $=0;$<t.length;$+=1)i(r[$]);a=!0}},o(l){r=r.filter(Boolean);for(let $=0;$<r.length;$+=1)d(r[$]);a=!1},d(l){Q(r,l),l&&c(e)}}}function he(n){let e,a;return e=new U({props:{slidesPerView:5,spaceBetween:24,mousewheel:!0,autoplay:{delay:2e3,disableOnInteraction:!1},modules:[W,j],class:"cryptoSlider",$$slots:{default:[ge]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),a=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}function we(n){let e,a;return e=new q({props:{lg:12,$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),a=!0},p(t,[r]){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}class qe extends G{constructor(e){super();L(this,e,null,we,R,{})}}export{qe as default};