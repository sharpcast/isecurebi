import{S,i as k,s as q,V as h,k as w,e as x,w as f,G as z,d as l,m as v,c as T,a as V,x as i,b as A,g as d,y as p,q as u,o as c,B as _,T as C,J as D}from"../../../chunks/vendor-bc251f35.js";import{B as E}from"../../../chunks/BreadCrumb-351b84b0.js";import G from"./MarketGraph.svelte-d3ea545d.js";import M from"./Widgets.svelte-05f4699c.js";import I from"./BuySellCoin.svelte-daba1d5a.js";import J from"./Market.svelte-45fca507.js";import"../../../chunks/cryptoPage-37f78f14.js";import"../../../chunks/ltc-734c3a3e.js";import"../../../chunks/dash-a9bce606.js";import"../../../chunks/aave-961ba45c.js";import"../../../chunks/eth-105a4f91.js";import"../../../chunks/ark-1864eee7.js";import"../../../chunks/dot-814d6ec7.js";import"../../../chunks/img-6-7ff883ab.js";import"../../../chunks/img-8-ebcd4c34.js";import"../../../chunks/counter-04ef4ff6.js";function R(g){let n,$;return n=new M({}),{c(){f(n.$$.fragment)},l(r){i(n.$$.fragment,r)},m(r,a){p(n,r,a),$=!0},i(r){$||(u(n.$$.fragment,r),$=!0)},o(r){c(n.$$.fragment,r),$=!1},d(r){_(n,r)}}}function W(g){let n,$,r,a;return n=new G({props:{dataColors:["--vz-success","--vz-danger"]}}),r=new I({}),{c(){f(n.$$.fragment),$=w(),f(r.$$.fragment)},l(e){i(n.$$.fragment,e),$=v(e),i(r.$$.fragment,e)},m(e,s){p(n,e,s),d(e,$,s),p(r,e,s),a=!0},p:D,i(e){a||(u(n.$$.fragment,e),u(r.$$.fragment,e),a=!0)},o(e){c(n.$$.fragment,e),c(r.$$.fragment,e),a=!1},d(e){_(n,e),e&&l($),_(r,e)}}}function j(g){let n,$,r,a,e,s,m,b;return n=new E({props:{title:"Buy & Sell",pageTitle:"Crypto"}}),r=new C({props:{$$slots:{default:[R]},$$scope:{ctx:g}}}),e=new C({props:{$$slots:{default:[W]},$$scope:{ctx:g}}}),m=new J({}),{c(){f(n.$$.fragment),$=w(),f(r.$$.fragment),a=w(),f(e.$$.fragment),s=w(),f(m.$$.fragment)},l(t){i(n.$$.fragment,t),$=v(t),i(r.$$.fragment,t),a=v(t),i(e.$$.fragment,t),s=v(t),i(m.$$.fragment,t)},m(t,o){p(n,t,o),d(t,$,o),p(r,t,o),d(t,a,o),p(e,t,o),d(t,s,o),p(m,t,o),b=!0},p(t,o){const y={};o&1&&(y.$$scope={dirty:o,ctx:t}),r.$set(y);const B={};o&1&&(B.$$scope={dirty:o,ctx:t}),e.$set(B)},i(t){b||(u(n.$$.fragment,t),u(r.$$.fragment,t),u(e.$$.fragment,t),u(m.$$.fragment,t),b=!0)},o(t){c(n.$$.fragment,t),c(r.$$.fragment,t),c(e.$$.fragment,t),c(m.$$.fragment,t),b=!1},d(t){_(n,t),t&&l($),_(r,t),t&&l(a),_(e,t),t&&l(s),_(m,t)}}}function F(g){let n,$,r,a;return r=new h({props:{fluid:!0,$$slots:{default:[j]},$$scope:{ctx:g}}}),{c(){n=w(),$=x("div"),f(r.$$.fragment),this.h()},l(e){z('[data-svelte="svelte-q6fenh"]',document.head).forEach(l),n=v(e),$=T(e,"DIV",{class:!0});var m=V($);i(r.$$.fragment,m),m.forEach(l),this.h()},h(){document.title="Buy & Sell | Velzon - Svelte Admin & Dashboard Template",A($,"class","page-content")},m(e,s){d(e,n,s),d(e,$,s),p(r,$,null),a=!0},p(e,[s]){const m={};s&1&&(m.$$scope={dirty:s,ctx:e}),r.$set(m)},i(e){a||(u(r.$$.fragment,e),a=!0)},o(e){c(r.$$.fragment,e),a=!1},d(e){e&&l(n),e&&l($),_(r)}}}class ae extends S{constructor(n){super();k(this,n,null,F,q,{})}}export{ae as default};