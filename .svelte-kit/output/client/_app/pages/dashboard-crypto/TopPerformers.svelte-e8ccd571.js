import{S as ct,i as ft,s as it,U as ut,w as L,x as S,y as G,q as J,o as j,B as z,ag as mt,ar as pt,ah as ht,k as E,m as T,g as M,d as c,e as p,t as $,c as h,a as g,h as b,b as n,I as a,J as ot,H as _t,K as dt}from"../../chunks/vendor-bc251f35.js";import{M as lt}from"../../chunks/crypto-26d55d11.js";import"../../chunks/ltc-734c3a3e.js";import"../../chunks/usdt-bb1667f7.js";import"../../chunks/dash-a9bce606.js";import"../../chunks/aave-961ba45c.js";import"../../chunks/eth-105a4f91.js";import"../../chunks/doge-aae7bd6c.js";import"../../chunks/img-1-6a9b26f3.js";import"../../chunks/img-2-d003c89a.js";import"../../chunks/img-3-4c804a8b.js";import"../../chunks/img-6-3ccff08f.js";function rt(f,e,o){const t=f.slice();return t[0]=e[o],t}function $t(f){let e,o,t,s,l,r,i,v,B,C,u,w,I,x,H;return{c(){e=p("h4"),o=$("Top Performers"),t=E(),s=p("div"),l=p("button"),r=$("1H"),i=E(),v=p("button"),B=$("1D"),C=E(),u=p("button"),w=$("7D"),I=E(),x=p("button"),H=$("1M"),this.h()},l(_){e=h(_,"H4",{class:!0});var d=g(e);o=b(d,"Top Performers"),d.forEach(c),t=T(_),s=h(_,"DIV",{class:!0});var m=g(s);l=h(m,"BUTTON",{type:!0,class:!0});var P=g(l);r=b(P,"1H"),P.forEach(c),i=T(m),v=h(m,"BUTTON",{type:!0,class:!0});var N=g(v);B=b(N,"1D"),N.forEach(c),C=T(m),u=h(m,"BUTTON",{type:!0,class:!0});var k=g(u);w=b(k,"7D"),k.forEach(c),I=T(m),x=h(m,"BUTTON",{type:!0,class:!0});var U=g(x);H=b(U,"1M"),U.forEach(c),m.forEach(c),this.h()},h(){n(e,"class","card-title mb-0 flex-grow-1"),n(l,"type","button"),n(l,"class","btn btn-soft-info btn-sm"),n(v,"type","button"),n(v,"class","btn btn-soft-info btn-sm"),n(u,"type","button"),n(u,"class","btn btn-soft-info btn-sm"),n(x,"type","button"),n(x,"class","btn btn-soft-primary btn-sm"),n(s,"class","d-flex gap-1")},m(_,d){M(_,e,d),a(e,o),M(_,t,d),M(_,s,d),a(s,l),a(l,r),a(s,i),a(s,v),a(v,B),a(s,C),a(s,u),a(u,w),a(s,I),a(s,x),a(x,H)},p:ot,d(_){_&&c(e),_&&c(t),_&&c(s)}}}function at(f){let e,o,t,s,l,r,i,v=f[0].coinName+"",B,C,u,w,I=f[0].marketCap+"",x,H,_,d,m,P,N=f[0].price+"",k,U,y,Z=f[0].change+"",F,Q,tt=f[0].percentage+"",R,W,nt,X;return{c(){e=p("li"),o=p("div"),t=p("img"),l=E(),r=p("div"),i=p("h6"),B=$(v),C=E(),u=p("p"),w=$("$"),x=$(I),H=$(" Billions"),_=E(),d=p("div"),m=p("h6"),P=$("$"),k=$(N),U=E(),y=p("p"),F=$(Z),Q=$(" ("),R=$(tt),W=$(")"),X=E(),this.h()},l(O){e=h(O,"LI",{class:!0});var D=g(e);o=h(D,"DIV",{class:!0});var et=g(o);t=h(et,"IMG",{src:!0,class:!0,alt:!0}),et.forEach(c),l=T(D),r=h(D,"DIV",{class:!0});var q=g(r);i=h(q,"H6",{class:!0});var st=g(i);B=b(st,v),st.forEach(c),C=T(q),u=h(q,"P",{class:!0});var A=g(u);w=b(A,"$"),x=b(A,I),H=b(A," Billions"),A.forEach(c),q.forEach(c),_=T(D),d=h(D,"DIV",{class:!0});var K=g(d);m=h(K,"H6",{class:!0});var Y=g(m);P=b(Y,"$"),k=b(Y,N),Y.forEach(c),U=T(K),y=h(K,"P",{class:!0});var V=g(y);F=b(V,Z),Q=b(V," ("),R=b(V,tt),W=b(V,")"),V.forEach(c),K.forEach(c),X=T(D),D.forEach(c),this.h()},h(){_t(t.src,s=f[0].img)||n(t,"src",s),n(t,"class","avatar-xs"),n(t,"alt",""),n(o,"class","flex-shrink-0"),n(i,"class","fs-14 mb-1"),n(u,"class","text-muted mb-0"),n(r,"class","flex-grow-1 ms-3"),n(m,"class","fs-14 mb-1"),n(y,"class",nt="fs-12 mb-0 text-"+f[0].textColor),n(d,"class","flex-shrink-0 text-end"),n(e,"class","list-group-item d-flex align-items-center")},m(O,D){M(O,e,D),a(e,o),a(o,t),a(e,l),a(e,r),a(r,i),a(i,B),a(r,C),a(r,u),a(u,w),a(u,x),a(u,H),a(e,_),a(e,d),a(d,m),a(m,P),a(m,k),a(d,U),a(d,y),a(y,F),a(y,Q),a(y,R),a(y,W),a(e,X)},p:ot,d(O){O&&c(e)}}}function bt(f){let e,o=lt.topPerformers,t=[];for(let s=0;s<o.length;s+=1)t[s]=at(rt(f,o,s));return{c(){e=p("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=h(s,"UL",{class:!0});var l=g(e);for(let r=0;r<t.length;r+=1)t[r].l(l);l.forEach(c),this.h()},h(){n(e,"class","list-group list-group-flush border-dashed mb-0")},m(s,l){M(s,e,l);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(s,l){if(l&0){o=lt.topPerformers;let r;for(r=0;r<o.length;r+=1){const i=rt(s,o,r);t[r]?t[r].p(i,l):(t[r]=at(i),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=o.length}},d(s){s&&c(e),dt(t,s)}}}function gt(f){let e,o,t,s;return e=new pt({props:{class:"align-items-center d-flex",$$slots:{default:[$t]},$$scope:{ctx:f}}}),t=new ht({props:{class:"p-0",$$slots:{default:[bt]},$$scope:{ctx:f}}}),{c(){L(e.$$.fragment),o=E(),L(t.$$.fragment)},l(l){S(e.$$.fragment,l),o=T(l),S(t.$$.fragment,l)},m(l,r){G(e,l,r),M(l,o,r),G(t,l,r),s=!0},p(l,r){const i={};r&8&&(i.$$scope={dirty:r,ctx:l}),e.$set(i);const v={};r&8&&(v.$$scope={dirty:r,ctx:l}),t.$set(v)},i(l){s||(J(e.$$.fragment,l),J(t.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),j(t.$$.fragment,l),s=!1},d(l){z(e,l),l&&c(o),z(t,l)}}}function vt(f){let e,o;return e=new mt({props:{class:"card-height-100",$$slots:{default:[gt]},$$scope:{ctx:f}}}),{c(){L(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){G(e,t,s),o=!0},p(t,s){const l={};s&8&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(J(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function xt(f){let e,o;return e=new ut({props:{xxl:4,lg:6,$$slots:{default:[vt]},$$scope:{ctx:f}}}),{c(){L(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){G(e,t,s),o=!0},p(t,[s]){const l={};s&8&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(J(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}class Mt extends ct{constructor(e){super();ft(this,e,null,xt,it,{})}}export{Mt as default};
