import{S as mt,i as _t,s as vt,U as ft,w as T,x as D,y as C,q as V,o as P,B as x,ag as gt,ar as ht,ah as Et,k as b,m as I,g as k,d as r,aE as bt,aF as It,aG as ut,aH as it,aI as pt,T as dt,a6 as _e,a4 as Qe,e as o,t as m,c,a as f,h as _,b as p,I as l}from"../../../chunks/vendor-bc251f35.js";function wt(i){let e;return{c(){e=m("Buy")},l(t){e=_(t,"Buy")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Tt(i){let e,t;return e=new pt({props:{active:i[0]==1,$$slots:{default:[wt]},$$scope:{ctx:i}}}),e.$on("click",i[1]),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,n){const a={};n&1&&(a.active=s[0]==1),n&8&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Dt(i){let e;return{c(){e=m("Sell")},l(t){e=_(t,"Sell")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Ct(i){let e,t;return e=new pt({props:{active:i[0]==2,$$slots:{default:[Dt]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,n){const a={};n&1&&(a.active=s[0]==2),n&8&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Vt(i){let e,t,s,n;return e=new ut({props:{$$slots:{default:[Tt]},$$scope:{ctx:i}}}),s=new ut({props:{$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),t=b(),T(s.$$.fragment)},l(a){D(e.$$.fragment,a),t=I(a),D(s.$$.fragment,a)},m(a,$){C(e,a,$),k(a,t,$),C(s,a,$),n=!0},p(a,$){const d={};$&9&&(d.$$scope={dirty:$,ctx:a}),e.$set(d);const E={};$&9&&(E.$$scope={dirty:$,ctx:a}),s.$set(E)},i(a){n||(V(e.$$.fragment,a),V(s.$$.fragment,a),n=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),n=!1},d(a){x(e,a),a&&r(t),x(s,a)}}}function Pt(i){let e,t;return e=new bt({props:{class:"nav-tabs-custom rounded card-header-tabs nav-justified border-bottom-0 mx-n3",role:"tablist",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,n){const a={};n&9&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function xt(i){let e;return{c(){e=m("Currency :")},l(t){e=_(t,"Currency :")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Bt(i){let e,t,s,n,a,$,d,E,B,A,g;return t=new _e({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){e=o("div"),T(t.$$.fragment),s=b(),n=o("select"),a=o("option"),$=m("BTC"),d=o("option"),E=m("ETH"),B=o("option"),A=m("LTC"),this.h()},l(h){e=c(h,"DIV",{class:!0});var S=f(e);D(t.$$.fragment,S),s=I(S),n=c(S,"SELECT",{class:!0});var v=f(n);a=c(v,"OPTION",{});var O=f(a);$=_(O,"BTC"),O.forEach(r),d=c(v,"OPTION",{});var N=f(d);E=_(N,"ETH"),N.forEach(r),B=c(v,"OPTION",{});var J=f(B);A=_(J,"LTC"),J.forEach(r),v.forEach(r),S.forEach(r),this.h()},h(){a.__value="BTC",a.value=a.__value,d.__value="ETH",d.value=d.__value,B.__value="LTC",B.value=B.__value,p(n,"class","form-select"),p(e,"class","mb-3")},m(h,S){k(h,e,S),C(t,e,null),l(e,s),l(e,n),l(n,a),l(a,$),l(n,d),l(d,E),l(n,B),l(B,A),g=!0},p(h,S){const v={};S&8&&(v.$$scope={dirty:S,ctx:h}),t.$set(v)},i(h){g||(V(t.$$.fragment,h),g=!0)},o(h){P(t.$$.fragment,h),g=!1},d(h){h&&r(e),x(t)}}}function Ot(i){let e;return{c(){e=m("Payment Method :")},l(t){e=_(t,"Payment Method :")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function St(i){let e,t,s,n,a,$,d,E,B,A,g,h,S;return t=new _e({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),{c(){e=o("div"),T(t.$$.fragment),s=b(),n=o("select"),a=o("option"),$=m("Wallet Balance"),d=o("option"),E=m("Credit / Debit Card"),B=o("option"),A=m("PayPal"),g=o("option"),h=m("Payoneer"),this.h()},l(v){e=c(v,"DIV",{class:!0});var O=f(e);D(t.$$.fragment,O),s=I(O),n=c(O,"SELECT",{class:!0});var N=f(n);a=c(N,"OPTION",{});var J=f(a);$=_(J,"Wallet Balance"),J.forEach(r),d=c(N,"OPTION",{});var U=f(d);E=_(U,"Credit / Debit Card"),U.forEach(r),B=c(N,"OPTION",{});var Ee=f(B);A=_(Ee,"PayPal"),Ee.forEach(r),g=c(N,"OPTION",{});var H=f(g);h=_(H,"Payoneer"),H.forEach(r),N.forEach(r),O.forEach(r),this.h()},h(){a.__value="Wallet Balance",a.value=a.__value,d.__value="Credit / Debit Card",d.value=d.__value,B.__value="PayPal",B.value=B.__value,g.__value="Payoneer",g.value=g.__value,p(n,"class","form-select"),p(e,"class","mb-3")},m(v,O){k(v,e,O),C(t,e,null),l(e,s),l(e,n),l(n,a),l(a,$),l(n,d),l(d,E),l(n,B),l(B,A),l(n,g),l(g,h),S=!0},p(v,O){const N={};O&8&&(N.$$scope={dirty:O,ctx:v}),t.$set(N)},i(v){S||(V(t.$$.fragment,v),S=!0)},o(v){P(t.$$.fragment,v),S=!1},d(v){v&&r(e),x(t)}}}function Nt(i){let e,t,s,n;return e=new ft({props:{"xs-":6,$$slots:{default:[Bt]},$$scope:{ctx:i}}}),s=new ft({props:{"xs-":6,$$slots:{default:[St]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),t=b(),T(s.$$.fragment)},l(a){D(e.$$.fragment,a),t=I(a),D(s.$$.fragment,a)},m(a,$){C(e,a,$),k(a,t,$),C(s,a,$),n=!0},p(a,$){const d={};$&8&&(d.$$scope={dirty:$,ctx:a}),e.$set(d);const E={};$&8&&(E.$$scope={dirty:$,ctx:a}),s.$set(E)},i(a){n||(V(e.$$.fragment,a),V(s.$$.fragment,a),n=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),n=!1},d(a){x(e,a),a&&r(t),x(s,a)}}}function kt(i){let e;return{c(){e=m("Amount")},l(t){e=_(t,"Amount")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Ht(i){let e;return{c(){e=m("Price")},l(t){e=_(t,"Price")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Lt(i){let e;return{c(){e=m("$")},l(t){e=_(t,"$")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function At(i){let e;return{c(){e=m("Total")},l(t){e=_(t,"Total")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Rt(i){let e,t,s,n,a,$,d,E,B,A,g,h,S,v,O,N,J,U,Ee,H,M,Ve,K,Pe,F,xe,W,q,Be,Q,Oe,R,j,y,X,Se,ee,Ne,ke,te,se,He,Le,G,ae,Y,Ae,le,Re,Ue,re,ne,Me,Fe,z,$e,oe,We,qe,ce,fe,je,Ge,ue,Z,ze,be;return h=new dt({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),N=new _e({props:{class:"input-group-text",$$slots:{default:[kt]},$$scope:{ctx:i}}}),U=new Qe({props:{type:"text",class:"form-control",placeholder:"0"}}),M=new _e({props:{class:"input-group-text",$$slots:{default:[Ht]},$$scope:{ctx:i}}}),K=new Qe({props:{type:"text",class:"form-control",placeholder:"2.045585"}}),F=new _e({props:{class:"input-group-text",$$slots:{default:[Lt]},$$scope:{ctx:i}}}),q=new _e({props:{class:"input-group-text",$$slots:{default:[At]},$$scope:{ctx:i}}}),Q=new Qe({props:{type:"text",class:"form-control",placeholder:"2700.16"}}),{c(){e=o("div"),t=o("div"),s=o("h6"),n=m("USD Balance : "),a=o("span"),$=m("$12,426.07"),d=b(),E=o("h6"),B=m("Buy Coin"),A=b(),g=o("div"),T(h.$$.fragment),S=b(),v=o("div"),O=o("div"),T(N.$$.fragment),J=b(),T(U.$$.fragment),Ee=b(),H=o("div"),T(M.$$.fragment),Ve=b(),T(K.$$.fragment),Pe=b(),T(F.$$.fragment),xe=b(),W=o("div"),T(q.$$.fragment),Be=b(),T(Q.$$.fragment),Oe=b(),R=o("div"),j=o("div"),y=o("div"),X=o("p"),Se=m("Transaction Fees"),ee=o("span"),Ne=m("(0.05%)"),ke=b(),te=o("div"),se=o("h6"),He=m("$1.08"),Le=b(),G=o("div"),ae=o("div"),Y=o("p"),Ae=m("Minimum Received"),le=o("span"),Re=m("(2%)"),Ue=b(),re=o("div"),ne=o("h6"),Me=m("$7.85"),Fe=b(),z=o("div"),$e=o("div"),oe=o("p"),We=m("Estimated Rate"),qe=b(),ce=o("div"),fe=o("h6"),je=m("1 BTC ~ $46982.70"),Ge=b(),ue=o("div"),Z=o("button"),ze=m("Buy Coin"),this.h()},l(u){e=c(u,"DIV",{class:!0});var w=f(e);t=c(w,"DIV",{class:!0});var ve=f(t);s=c(ve,"H6",{class:!0});var ie=f(s);n=_(ie,"USD Balance : "),a=c(ie,"SPAN",{class:!0});var ge=f(a);$=_(ge,"$12,426.07"),ge.forEach(r),ie.forEach(r),ve.forEach(r),d=I(w),E=c(w,"H6",{class:!0});var he=f(E);B=_(he,"Buy Coin"),he.forEach(r),w.forEach(r),A=I(u),g=c(u,"DIV",{class:!0});var L=f(g);D(h.$$.fragment,L),S=I(L),v=c(L,"DIV",{});var pe=f(v);O=c(pe,"DIV",{class:!0});var Ie=f(O);D(N.$$.fragment,Ie),J=I(Ie),D(U.$$.fragment,Ie),Ie.forEach(r),Ee=I(pe),H=c(pe,"DIV",{class:!0});var de=f(H);D(M.$$.fragment,de),Ve=I(de),D(K.$$.fragment,de),Pe=I(de),D(F.$$.fragment,de),de.forEach(r),xe=I(pe),W=c(pe,"DIV",{class:!0});var we=f(W);D(q.$$.fragment,we),Be=I(we),D(Q.$$.fragment,we),we.forEach(r),pe.forEach(r),Oe=I(L),R=c(L,"DIV",{class:!0});var me=f(R);j=c(me,"DIV",{class:!0});var Te=f(j);y=c(Te,"DIV",{class:!0});var Xe=f(y);X=c(Xe,"P",{class:!0});var Je=f(X);Se=_(Je,"Transaction Fees"),ee=c(Je,"SPAN",{class:!0});var Ye=f(ee);Ne=_(Ye,"(0.05%)"),Ye.forEach(r),Je.forEach(r),Xe.forEach(r),ke=I(Te),te=c(Te,"DIV",{class:!0});var Ze=f(te);se=c(Ze,"H6",{class:!0});var ye=f(se);He=_(ye,"$1.08"),ye.forEach(r),Ze.forEach(r),Te.forEach(r),Le=I(me),G=c(me,"DIV",{class:!0});var De=f(G);ae=c(De,"DIV",{class:!0});var et=f(ae);Y=c(et,"P",{class:!0});var Ke=f(Y);Ae=_(Ke,"Minimum Received"),le=c(Ke,"SPAN",{class:!0});var tt=f(le);Re=_(tt,"(2%)"),tt.forEach(r),Ke.forEach(r),et.forEach(r),Ue=I(De),re=c(De,"DIV",{class:!0});var st=f(re);ne=c(st,"H6",{class:!0});var at=f(ne);Me=_(at,"$7.85"),at.forEach(r),st.forEach(r),De.forEach(r),Fe=I(me),z=c(me,"DIV",{class:!0});var Ce=f(z);$e=c(Ce,"DIV",{class:!0});var lt=f($e);oe=c(lt,"P",{class:!0});var rt=f(oe);We=_(rt,"Estimated Rate"),rt.forEach(r),lt.forEach(r),qe=I(Ce),ce=c(Ce,"DIV",{class:!0});var nt=f(ce);fe=c(nt,"H6",{class:!0});var $t=f(fe);je=_($t,"1 BTC ~ $46982.70"),$t.forEach(r),nt.forEach(r),Ce.forEach(r),me.forEach(r),Ge=I(L),ue=c(L,"DIV",{class:!0});var ot=f(ue);Z=c(ot,"BUTTON",{type:!0,class:!0});var ct=f(Z);ze=_(ct,"Buy Coin"),ct.forEach(r),ot.forEach(r),L.forEach(r),this.h()},h(){p(a,"class","text-dark"),p(s,"class","text-warning mb-0"),p(t,"class","float-end ms-2"),p(E,"class","mb-0 text-danger"),p(e,"class","p-3 bg-soft-warning"),p(O,"class","input-group mb-3"),p(H,"class","input-group mb-3"),p(W,"class","input-group mb-0"),p(ee,"class","text-muted ms-1 fs-11"),p(X,"class","fs-13 mb-0"),p(y,"class","flex-grow-1"),p(se,"class","mb-0"),p(te,"class","flex-shrink-0"),p(j,"class","d-flex mb-2"),p(le,"class","text-muted ms-1 fs-11"),p(Y,"class","fs-13 mb-0"),p(ae,"class","flex-grow-1"),p(ne,"class","mb-0"),p(re,"class","flex-shrink-0"),p(G,"class","d-flex mb-2"),p(oe,"class","fs-13 mb-0"),p($e,"class","flex-grow-1"),p(fe,"class","mb-0"),p(ce,"class","flex-shrink-0"),p(z,"class","d-flex"),p(R,"class","mt-3 pt-2"),p(Z,"type","button"),p(Z,"class","btn btn-primary w-100"),p(ue,"class","mt-3 pt-2"),p(g,"class","p-3")},m(u,w){k(u,e,w),l(e,t),l(t,s),l(s,n),l(s,a),l(a,$),l(e,d),l(e,E),l(E,B),k(u,A,w),k(u,g,w),C(h,g,null),l(g,S),l(g,v),l(v,O),C(N,O,null),l(O,J),C(U,O,null),l(v,Ee),l(v,H),C(M,H,null),l(H,Ve),C(K,H,null),l(H,Pe),C(F,H,null),l(v,xe),l(v,W),C(q,W,null),l(W,Be),C(Q,W,null),l(g,Oe),l(g,R),l(R,j),l(j,y),l(y,X),l(X,Se),l(X,ee),l(ee,Ne),l(j,ke),l(j,te),l(te,se),l(se,He),l(R,Le),l(R,G),l(G,ae),l(ae,Y),l(Y,Ae),l(Y,le),l(le,Re),l(G,Ue),l(G,re),l(re,ne),l(ne,Me),l(R,Fe),l(R,z),l(z,$e),l($e,oe),l(oe,We),l(z,qe),l(z,ce),l(ce,fe),l(fe,je),l(g,Ge),l(g,ue),l(ue,Z),l(Z,ze),be=!0},p(u,w){const ve={};w&8&&(ve.$$scope={dirty:w,ctx:u}),h.$set(ve);const ie={};w&8&&(ie.$$scope={dirty:w,ctx:u}),N.$set(ie);const ge={};w&8&&(ge.$$scope={dirty:w,ctx:u}),M.$set(ge);const he={};w&8&&(he.$$scope={dirty:w,ctx:u}),F.$set(he);const L={};w&8&&(L.$$scope={dirty:w,ctx:u}),q.$set(L)},i(u){be||(V(h.$$.fragment,u),V(N.$$.fragment,u),V(U.$$.fragment,u),V(M.$$.fragment,u),V(K.$$.fragment,u),V(F.$$.fragment,u),V(q.$$.fragment,u),V(Q.$$.fragment,u),be=!0)},o(u){P(h.$$.fragment,u),P(N.$$.fragment,u),P(U.$$.fragment,u),P(M.$$.fragment,u),P(K.$$.fragment,u),P(F.$$.fragment,u),P(q.$$.fragment,u),P(Q.$$.fragment,u),be=!1},d(u){u&&r(e),u&&r(A),u&&r(g),x(h),x(N),x(U),x(M),x(K),x(F),x(q),x(Q)}}}function Ut(i){let e;return{c(){e=m("Currency :")},l(t){e=_(t,"Currency :")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Mt(i){let e,t,s,n,a,$,d,E,B,A,g;return t=new _e({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),{c(){e=o("div"),T(t.$$.fragment),s=b(),n=o("select"),a=o("option"),$=m("BTC"),d=o("option"),E=m("ETH"),B=o("option"),A=m("LTC"),this.h()},l(h){e=c(h,"DIV",{class:!0});var S=f(e);D(t.$$.fragment,S),s=I(S),n=c(S,"SELECT",{class:!0});var v=f(n);a=c(v,"OPTION",{});var O=f(a);$=_(O,"BTC"),O.forEach(r),d=c(v,"OPTION",{});var N=f(d);E=_(N,"ETH"),N.forEach(r),B=c(v,"OPTION",{});var J=f(B);A=_(J,"LTC"),J.forEach(r),v.forEach(r),S.forEach(r),this.h()},h(){a.__value="BTC",a.value=a.__value,d.__value="ETH",d.value=d.__value,B.__value="LTC",B.value=B.__value,p(n,"class","form-select"),p(e,"class","mb-3")},m(h,S){k(h,e,S),C(t,e,null),l(e,s),l(e,n),l(n,a),l(a,$),l(n,d),l(d,E),l(n,B),l(B,A),g=!0},p(h,S){const v={};S&8&&(v.$$scope={dirty:S,ctx:h}),t.$set(v)},i(h){g||(V(t.$$.fragment,h),g=!0)},o(h){P(t.$$.fragment,h),g=!1},d(h){h&&r(e),x(t)}}}function Ft(i){let e;return{c(){e=m("Email :")},l(t){e=_(t,"Email :")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Wt(i){let e,t,s,n,a;return t=new _e({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),n=new Qe({props:{type:"email",class:"form-control",placeholder:"example@email.com"}}),{c(){e=o("div"),T(t.$$.fragment),s=b(),T(n.$$.fragment),this.h()},l($){e=c($,"DIV",{class:!0});var d=f(e);D(t.$$.fragment,d),s=I(d),D(n.$$.fragment,d),d.forEach(r),this.h()},h(){p(e,"class","mb-3")},m($,d){k($,e,d),C(t,e,null),l(e,s),C(n,e,null),a=!0},p($,d){const E={};d&8&&(E.$$scope={dirty:d,ctx:$}),t.$set(E)},i($){a||(V(t.$$.fragment,$),V(n.$$.fragment,$),a=!0)},o($){P(t.$$.fragment,$),P(n.$$.fragment,$),a=!1},d($){$&&r(e),x(t),x(n)}}}function qt(i){let e,t,s,n;return e=new ft({props:{"xs-":6,$$slots:{default:[Mt]},$$scope:{ctx:i}}}),s=new ft({props:{"xs-":6,$$slots:{default:[Wt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),t=b(),T(s.$$.fragment)},l(a){D(e.$$.fragment,a),t=I(a),D(s.$$.fragment,a)},m(a,$){C(e,a,$),k(a,t,$),C(s,a,$),n=!0},p(a,$){const d={};$&8&&(d.$$scope={dirty:$,ctx:a}),e.$set(d);const E={};$&8&&(E.$$scope={dirty:$,ctx:a}),s.$set(E)},i(a){n||(V(e.$$.fragment,a),V(s.$$.fragment,a),n=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),n=!1},d(a){x(e,a),a&&r(t),x(s,a)}}}function jt(i){let e;return{c(){e=m("Amount")},l(t){e=_(t,"Amount")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Gt(i){let e;return{c(){e=m("Price")},l(t){e=_(t,"Price")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function zt(i){let e;return{c(){e=m("$")},l(t){e=_(t,"$")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Jt(i){let e;return{c(){e=m("Total")},l(t){e=_(t,"Total")},m(t,s){k(t,e,s)},d(t){t&&r(e)}}}function Kt(i){let e,t,s,n,a,$,d,E,B,A,g,h,S,v,O,N,J,U,Ee,H,M,Ve,K,Pe,F,xe,W,q,Be,Q,Oe,R,j,y,X,Se,ee,Ne,ke,te,se,He,Le,G,ae,Y,Ae,le,Re,Ue,re,ne,Me,Fe,z,$e,oe,We,qe,ce,fe,je,Ge,ue,Z,ze,be;return h=new dt({props:{$$slots:{default:[qt]},$$scope:{ctx:i}}}),N=new _e({props:{class:"input-group-text",$$slots:{default:[jt]},$$scope:{ctx:i}}}),U=new Qe({props:{type:"text",class:"form-control",placeholder:"0"}}),M=new _e({props:{class:"input-group-text",$$slots:{default:[Gt]},$$scope:{ctx:i}}}),K=new Qe({props:{type:"text",class:"form-control",placeholder:"2.045585"}}),F=new _e({props:{class:"input-group-text",$$slots:{default:[zt]},$$scope:{ctx:i}}}),q=new _e({props:{class:"input-group-text",$$slots:{default:[Jt]},$$scope:{ctx:i}}}),Q=new Qe({props:{type:"text",class:"form-control",placeholder:"2700.16"}}),{c(){e=o("div"),t=o("div"),s=o("h6"),n=m("USD Balance : "),a=o("span"),$=m("$12,426.07"),d=b(),E=o("h6"),B=m("Sell Coin"),A=b(),g=o("div"),T(h.$$.fragment),S=b(),v=o("div"),O=o("div"),T(N.$$.fragment),J=b(),T(U.$$.fragment),Ee=b(),H=o("div"),T(M.$$.fragment),Ve=b(),T(K.$$.fragment),Pe=b(),T(F.$$.fragment),xe=b(),W=o("div"),T(q.$$.fragment),Be=b(),T(Q.$$.fragment),Oe=b(),R=o("div"),j=o("div"),y=o("div"),X=o("p"),Se=m("Transaction Fees"),ee=o("span"),Ne=m("(0.05%)"),ke=b(),te=o("div"),se=o("h6"),He=m("$1.08"),Le=b(),G=o("div"),ae=o("div"),Y=o("p"),Ae=m("Minimum Received"),le=o("span"),Re=m("(2%)"),Ue=b(),re=o("div"),ne=o("h6"),Me=m("$7.85"),Fe=b(),z=o("div"),$e=o("div"),oe=o("p"),We=m("Estimated Rate"),qe=b(),ce=o("div"),fe=o("h6"),je=m("1 BTC ~ $34572.00"),Ge=b(),ue=o("div"),Z=o("button"),ze=m("Sell Coin"),this.h()},l(u){e=c(u,"DIV",{class:!0});var w=f(e);t=c(w,"DIV",{class:!0});var ve=f(t);s=c(ve,"H6",{class:!0});var ie=f(s);n=_(ie,"USD Balance : "),a=c(ie,"SPAN",{class:!0});var ge=f(a);$=_(ge,"$12,426.07"),ge.forEach(r),ie.forEach(r),ve.forEach(r),d=I(w),E=c(w,"H6",{class:!0});var he=f(E);B=_(he,"Sell Coin"),he.forEach(r),w.forEach(r),A=I(u),g=c(u,"DIV",{class:!0});var L=f(g);D(h.$$.fragment,L),S=I(L),v=c(L,"DIV",{});var pe=f(v);O=c(pe,"DIV",{class:!0});var Ie=f(O);D(N.$$.fragment,Ie),J=I(Ie),D(U.$$.fragment,Ie),Ie.forEach(r),Ee=I(pe),H=c(pe,"DIV",{class:!0});var de=f(H);D(M.$$.fragment,de),Ve=I(de),D(K.$$.fragment,de),Pe=I(de),D(F.$$.fragment,de),de.forEach(r),xe=I(pe),W=c(pe,"DIV",{class:!0});var we=f(W);D(q.$$.fragment,we),Be=I(we),D(Q.$$.fragment,we),we.forEach(r),pe.forEach(r),Oe=I(L),R=c(L,"DIV",{class:!0});var me=f(R);j=c(me,"DIV",{class:!0});var Te=f(j);y=c(Te,"DIV",{class:!0});var Xe=f(y);X=c(Xe,"P",{class:!0});var Je=f(X);Se=_(Je,"Transaction Fees"),ee=c(Je,"SPAN",{class:!0});var Ye=f(ee);Ne=_(Ye,"(0.05%)"),Ye.forEach(r),Je.forEach(r),Xe.forEach(r),ke=I(Te),te=c(Te,"DIV",{class:!0});var Ze=f(te);se=c(Ze,"H6",{class:!0});var ye=f(se);He=_(ye,"$1.08"),ye.forEach(r),Ze.forEach(r),Te.forEach(r),Le=I(me),G=c(me,"DIV",{class:!0});var De=f(G);ae=c(De,"DIV",{class:!0});var et=f(ae);Y=c(et,"P",{class:!0});var Ke=f(Y);Ae=_(Ke,"Minimum Received"),le=c(Ke,"SPAN",{class:!0});var tt=f(le);Re=_(tt,"(2%)"),tt.forEach(r),Ke.forEach(r),et.forEach(r),Ue=I(De),re=c(De,"DIV",{class:!0});var st=f(re);ne=c(st,"H6",{class:!0});var at=f(ne);Me=_(at,"$7.85"),at.forEach(r),st.forEach(r),De.forEach(r),Fe=I(me),z=c(me,"DIV",{class:!0});var Ce=f(z);$e=c(Ce,"DIV",{class:!0});var lt=f($e);oe=c(lt,"P",{class:!0});var rt=f(oe);We=_(rt,"Estimated Rate"),rt.forEach(r),lt.forEach(r),qe=I(Ce),ce=c(Ce,"DIV",{class:!0});var nt=f(ce);fe=c(nt,"H6",{class:!0});var $t=f(fe);je=_($t,"1 BTC ~ $34572.00"),$t.forEach(r),nt.forEach(r),Ce.forEach(r),me.forEach(r),Ge=I(L),ue=c(L,"DIV",{class:!0});var ot=f(ue);Z=c(ot,"BUTTON",{type:!0,class:!0});var ct=f(Z);ze=_(ct,"Sell Coin"),ct.forEach(r),ot.forEach(r),L.forEach(r),this.h()},h(){p(a,"class","text-dark"),p(s,"class","text-warning mb-0"),p(t,"class","float-end ms-2"),p(E,"class","mb-0 text-danger"),p(e,"class","p-3 bg-soft-warning"),p(O,"class","input-group mb-3"),p(H,"class","input-group mb-3"),p(W,"class","input-group mb-0"),p(ee,"class","text-muted ms-1 fs-11"),p(X,"class","fs-13 mb-0"),p(y,"class","flex-grow-1"),p(se,"class","mb-0"),p(te,"class","flex-shrink-0"),p(j,"class","d-flex mb-2"),p(le,"class","text-muted ms-1 fs-11"),p(Y,"class","fs-13 mb-0"),p(ae,"class","flex-grow-1"),p(ne,"class","mb-0"),p(re,"class","flex-shrink-0"),p(G,"class","d-flex mb-2"),p(oe,"class","fs-13 mb-0"),p($e,"class","flex-grow-1"),p(fe,"class","mb-0"),p(ce,"class","flex-shrink-0"),p(z,"class","d-flex"),p(R,"class","mt-3 pt-2"),p(Z,"type","button"),p(Z,"class","btn btn-danger w-100"),p(ue,"class","mt-3 pt-2"),p(g,"class","p-3")},m(u,w){k(u,e,w),l(e,t),l(t,s),l(s,n),l(s,a),l(a,$),l(e,d),l(e,E),l(E,B),k(u,A,w),k(u,g,w),C(h,g,null),l(g,S),l(g,v),l(v,O),C(N,O,null),l(O,J),C(U,O,null),l(v,Ee),l(v,H),C(M,H,null),l(H,Ve),C(K,H,null),l(H,Pe),C(F,H,null),l(v,xe),l(v,W),C(q,W,null),l(W,Be),C(Q,W,null),l(g,Oe),l(g,R),l(R,j),l(j,y),l(y,X),l(X,Se),l(X,ee),l(ee,Ne),l(j,ke),l(j,te),l(te,se),l(se,He),l(R,Le),l(R,G),l(G,ae),l(ae,Y),l(Y,Ae),l(Y,le),l(le,Re),l(G,Ue),l(G,re),l(re,ne),l(ne,Me),l(R,Fe),l(R,z),l(z,$e),l($e,oe),l(oe,We),l(z,qe),l(z,ce),l(ce,fe),l(fe,je),l(g,Ge),l(g,ue),l(ue,Z),l(Z,ze),be=!0},p(u,w){const ve={};w&8&&(ve.$$scope={dirty:w,ctx:u}),h.$set(ve);const ie={};w&8&&(ie.$$scope={dirty:w,ctx:u}),N.$set(ie);const ge={};w&8&&(ge.$$scope={dirty:w,ctx:u}),M.$set(ge);const he={};w&8&&(he.$$scope={dirty:w,ctx:u}),F.$set(he);const L={};w&8&&(L.$$scope={dirty:w,ctx:u}),q.$set(L)},i(u){be||(V(h.$$.fragment,u),V(N.$$.fragment,u),V(U.$$.fragment,u),V(M.$$.fragment,u),V(K.$$.fragment,u),V(F.$$.fragment,u),V(q.$$.fragment,u),V(Q.$$.fragment,u),be=!0)},o(u){P(h.$$.fragment,u),P(N.$$.fragment,u),P(U.$$.fragment,u),P(M.$$.fragment,u),P(K.$$.fragment,u),P(F.$$.fragment,u),P(q.$$.fragment,u),P(Q.$$.fragment,u),be=!1},d(u){u&&r(e),u&&r(A),u&&r(g),x(h),x(N),x(U),x(M),x(K),x(F),x(q),x(Q)}}}function Qt(i){let e,t,s,n;return e=new it({props:{tabId:1,class:i[0]==1?"active":"",$$slots:{default:[Rt]},$$scope:{ctx:i}}}),s=new it({props:{tabId:2,class:i[0]==2?"active":"",$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),t=b(),T(s.$$.fragment)},l(a){D(e.$$.fragment,a),t=I(a),D(s.$$.fragment,a)},m(a,$){C(e,a,$),k(a,t,$),C(s,a,$),n=!0},p(a,$){const d={};$&1&&(d.class=a[0]==1?"active":""),$&8&&(d.$$scope={dirty:$,ctx:a}),e.$set(d);const E={};$&1&&(E.class=a[0]==2?"active":""),$&8&&(E.$$scope={dirty:$,ctx:a}),s.$set(E)},i(a){n||(V(e.$$.fragment,a),V(s.$$.fragment,a),n=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),n=!1},d(a){x(e,a),a&&r(t),x(s,a)}}}function Xt(i){let e,t;return e=new It({props:{class:"text-muted",$$slots:{default:[Qt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,n){const a={};n&9&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Yt(i){let e,t,s,n;return e=new ht({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),s=new Et({props:{class:"p-0",$$slots:{default:[Xt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),t=b(),T(s.$$.fragment)},l(a){D(e.$$.fragment,a),t=I(a),D(s.$$.fragment,a)},m(a,$){C(e,a,$),k(a,t,$),C(s,a,$),n=!0},p(a,$){const d={};$&9&&(d.$$scope={dirty:$,ctx:a}),e.$set(d);const E={};$&9&&(E.$$scope={dirty:$,ctx:a}),s.$set(E)},i(a){n||(V(e.$$.fragment,a),V(s.$$.fragment,a),n=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),n=!1},d(a){x(e,a),a&&r(t),x(s,a)}}}function Zt(i){let e,t;return e=new gt({props:{class:"card-height-100",$$slots:{default:[Yt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,n){const a={};n&9&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function yt(i){let e,t;return e=new ft({props:{xxl:3,$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){C(e,s,n),t=!0},p(s,[n]){const a={};n&9&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function es(i,e,t){let s=1;return[s,()=>t(0,s=1),()=>t(0,s=2)]}class ss extends mt{constructor(e){super();_t(this,e,es,yt,vt,{})}}export{ss as default};
