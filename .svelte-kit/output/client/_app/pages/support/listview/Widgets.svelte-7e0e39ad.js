import{S as re,i as oe,s as ce,w as O,x as Q,y as R,q as x,o as A,B as T,l as se,g as X,p as ie,K as fe,d as f,U as ue,n as de,ag as _e,k as N,m as V,ah as pe,e as p,t as W,c as m,a as h,h as D,b as u,I as c,j as M}from"../../../chunks/vendor-bc251f35.js";function le(o,t,s){const a=o.slice();return a[1]=t[s],a}function me(o){let t,s,a,e=o[1].title+"",i,l,r,n,v,B,I=o[1].suffix+"",j,U,$,g,C,z,P=o[1].percentage+"",q,y,F,G,S,b,E,k,H;return{c(){t=p("div"),s=p("div"),a=p("p"),i=W(e),l=N(),r=p("h2"),n=p("span"),v=W("0"),j=W(I),U=N(),$=p("p"),g=p("span"),C=p("i"),z=N(),q=W(P),F=W(" vs. previous month"),G=N(),S=p("div"),b=p("div"),E=p("span"),k=p("i"),this.h()},l(_){t=m(_,"DIV",{class:!0});var d=h(t);s=m(d,"DIV",{});var w=h(s);a=m(w,"P",{class:!0});var Y=h(a);i=D(Y,e),Y.forEach(f),l=V(w),r=m(w,"H2",{class:!0});var J=h(r);n=m(J,"SPAN",{class:!0,"data-target":!0});var Z=h(n);v=D(Z,"0"),Z.forEach(f),j=D(J,I),J.forEach(f),U=V(w),$=m(w,"P",{class:!0});var L=h($);g=m(L,"SPAN",{class:!0});var K=h(g);C=m(K,"I",{class:!0}),h(C).forEach(f),z=V(K),q=D(K,P),K.forEach(f),F=D(L," vs. previous month"),L.forEach(f),w.forEach(f),G=V(d),S=m(d,"DIV",{});var ee=h(S);b=m(ee,"DIV",{class:!0});var te=h(b);E=m(te,"SPAN",{class:!0});var ae=h(E);k=m(ae,"I",{class:!0}),h(k).forEach(f),ae.forEach(f),te.forEach(f),ee.forEach(f),d.forEach(f),this.h()},h(){u(a,"class","fw-medium text-muted mb-0"),u(n,"class","counter-value"),u(n,"data-target",B=o[1].counter),u(r,"class","mt-4 ff-secondary fw-semibold"),u(C,"class","ri-arrow-up-line align-middle"),u(g,"class",y="badge bg-light text-"+o[1].percentageClass+" mb-0"),u($,"class","mb-0 text-muted"),u(k,"class",H=o[1].icon),u(E,"class","avatar-title bg-soft-info text-info rounded-circle fs-4"),u(b,"class","avatar-sm flex-shrink-0"),u(t,"class","d-flex justify-content-between")},m(_,d){X(_,t,d),c(t,s),c(s,a),c(a,i),c(s,l),c(s,r),c(r,n),c(n,v),c(r,j),c(s,U),c(s,$),c($,g),c(g,C),c(g,z),c(g,q),c($,F),c(t,G),c(t,S),c(S,b),c(b,E),c(E,k)},p(_,d){d&1&&e!==(e=_[1].title+"")&&M(i,e),d&1&&B!==(B=_[1].counter)&&u(n,"data-target",B),d&1&&I!==(I=_[1].suffix+"")&&M(j,I),d&1&&P!==(P=_[1].percentage+"")&&M(q,P),d&1&&y!==(y="badge bg-light text-"+_[1].percentageClass+" mb-0")&&u(g,"class",y),d&1&&H!==(H=_[1].icon)&&u(k,"class",H)},d(_){_&&f(t)}}}function he(o){let t,s;return t=new pe({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment)},l(a){Q(t.$$.fragment,a)},m(a,e){R(t,a,e),s=!0},p(a,e){const i={};e&17&&(i.$$scope={dirty:e,ctx:a}),t.$set(i)},i(a){s||(x(t.$$.fragment,a),s=!0)},o(a){A(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function ge(o){let t,s,a;return t=new _e({props:{class:"card-animate",$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),s=N()},l(e){Q(t.$$.fragment,e),s=V(e)},m(e,i){R(t,e,i),X(e,s,i),a=!0},p(e,i){const l={};i&17&&(l.$$scope={dirty:i,ctx:e}),t.$set(l)},i(e){a||(x(t.$$.fragment,e),a=!0)},o(e){A(t.$$.fragment,e),a=!1},d(e){T(t,e),e&&f(s)}}}function ne(o){let t,s;return t=new ue({props:{xxl:3,sm:6,$$slots:{default:[ge]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment)},l(a){Q(t.$$.fragment,a)},m(a,e){R(t,a,e),s=!0},p(a,e){const i={};e&17&&(i.$$scope={dirty:e,ctx:a}),t.$set(i)},i(a){s||(x(t.$$.fragment,a),s=!0)},o(a){A(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function $e(o){let t,s,a=o[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=ne(le(o,a,l));const i=l=>A(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=se()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=se()},m(l,r){for(let n=0;n<e.length;n+=1)e[n].m(l,r);X(l,t,r),s=!0},p(l,[r]){if(r&1){a=l[0];let n;for(n=0;n<a.length;n+=1){const v=le(l,a,n);e[n]?(e[n].p(v,r),x(e[n],1)):(e[n]=ne(v),e[n].c(),x(e[n],1),e[n].m(t.parentNode,t))}for(de(),n=a.length;n<e.length;n+=1)i(n);ie()}},i(l){if(!s){for(let r=0;r<a.length;r+=1)x(e[r]);s=!0}},o(l){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)A(e[r]);s=!1},d(l){fe(e,l),l&&f(t)}}}function ve(o,t,s){let{ticketsWidgets:a}=t;return o.$$set=e=>{"ticketsWidgets"in e&&s(0,a=e.ticketsWidgets)},[a]}class Ee extends re{constructor(t){super();oe(this,t,ve,$e,ce,{ticketsWidgets:0})}}export{Ee as default};