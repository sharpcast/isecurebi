import{S as ye,i as De,s as Ve,U as re,w as H,x as O,y as M,q as S,o as A,B as q,ag as ge,k as N,m as P,g as I,d as o,ar as ke,T as Ne,ah as ne,O as oe,e as d,t as L,c as $,a as m,h as F,b as r,I as i,J as we,f as Pe,n as Te,p as Ce,K as Se,H as Ie,N as Ae}from"../../chunks/vendor-bc251f35.js";import{a as xe}from"../../chunks/avatar-10-def8cdb7.js";import{a as Ue}from"../../chunks/avatar-1-413c6ccd.js";import{a as Be}from"../../chunks/avatar-9-f5d371f4.js";import{a as Le}from"../../chunks/avatar-2-5b5618a1.js";import{a as Fe}from"../../chunks/avatar-5-c7d43f40.js";import{a as He}from"../../chunks/avatar-8-f9de7a45.js";function be(_,e,a){const t=_.slice();return t[3]=e[a],t}function Oe(_){let e,a;return{c(){e=L("View All "),a=d("i"),this.h()},l(t){e=F(t,"View All "),a=$(t,"I",{class:!0}),m(a).forEach(o),this.h()},h(){r(a,"class","ri-arrow-right-line")},m(t,n){I(t,e,n),I(t,a,n)},p:we,d(t){t&&o(e),t&&o(a)}}}function Me(_){let e,a,t,n,s,l,c;return l=new oe({props:{href:"/Jobs/CandidateList/ListView",class:"link-primary",$$slots:{default:[Oe]},$$scope:{ctx:_}}}),{c(){e=d("div"),a=d("h6"),t=L("Popular Candidates"),n=N(),s=d("div"),H(l.$$.fragment),this.h()},l(u){e=$(u,"DIV",{class:!0});var b=m(e);a=$(b,"H6",{class:!0});var v=m(a);t=F(v,"Popular Candidates"),v.forEach(o),n=P(b),s=$(b,"DIV",{class:!0});var w=m(s);O(l.$$.fragment,w),w.forEach(o),b.forEach(o),this.h()},h(){r(a,"class","card-title mb-0 flex-grow-1"),r(s,"class","flex-shrink-0"),r(e,"class","d-flex align-items-center")},m(u,b){I(u,e,b),i(e,a),i(a,t),i(e,n),i(e,s),M(l,s,null),c=!0},p(u,b){const v={};b&64&&(v.$$scope={dirty:b,ctx:u}),l.$set(v)},i(u){c||(S(l.$$.fragment,u),c=!0)},o(u){A(l.$$.fragment,u),c=!1},d(u){u&&o(e),q(l)}}}function qe(_){let e,a,t,n,s,l,c,u,b=_[3].name+"",v,w=" ",f,h,p,D=_[3].username+"",y,E,x,z=_[3].designation+"",T;return{c(){e=d("div"),a=d("div"),t=d("img"),s=N(),l=d("div"),c=d("h5"),u=d("span"),v=L(b),f=L(w),h=N(),p=d("span"),y=L(D),E=N(),x=d("div"),T=L(z),this.h()},l(V){e=$(V,"DIV",{class:!0});var C=m(e);a=$(C,"DIV",{class:!0});var G=m(a);t=$(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(o),C.forEach(o),s=P(V),l=$(V,"DIV",{class:!0});var U=m(l);c=$(U,"H5",{class:!0});var k=m(c);u=$(k,"SPAN",{class:!0});var J=m(u);v=F(J,b),J.forEach(o),f=F(k,w),h=P(k),p=$(k,"SPAN",{class:!0});var W=m(p);y=F(W,D),W.forEach(o),k.forEach(o),E=P(U),x=$(U,"DIV",{class:!0});var K=m(x);T=F(K,z),K.forEach(o),U.forEach(o),this.h()},h(){Ie(t.src,n=_[3].img)||r(t,"src",n),r(t,"alt",""),r(t,"class","img-fluid rounded-circle candidate-img"),r(a,"class","avatar-xs"),r(e,"class","flex-shrink-0 me-2"),r(u,"class","candidate-name"),r(p,"class","text-muted fw-normal"),r(c,"class","fs-13 mb-1 text-truncate"),r(x,"class","d-none candidate-position"),r(l,"class","flex-grow-1")},m(V,C){I(V,e,C),i(e,a),i(a,t),I(V,s,C),I(V,l,C),i(l,c),i(c,u),i(u,v),i(c,f),i(c,h),i(c,p),i(p,y),i(l,E),i(l,x),i(x,T)},p:we,d(V){V&&o(e),V&&o(s),V&&o(l)}}}function Ee(_){let e,a,t,n;return a=new oe({props:{href:"#!",class:"d-flex align-items-center py-2",$$slots:{default:[qe]},$$scope:{ctx:_}}}),{c(){e=d("li"),H(a.$$.fragment),t=N()},l(s){e=$(s,"LI",{});var l=m(e);O(a.$$.fragment,l),t=P(l),l.forEach(o)},m(s,l){I(s,e,l),M(a,e,null),i(e,t),n=!0},p(s,l){const c={};l&64&&(c.$$scope={dirty:l,ctx:s}),a.$set(c)},i(s){n||(S(a.$$.fragment,s),n=!0)},o(s){A(a.$$.fragment,s),n=!1},d(s){s&&o(e),q(a)}}}function ze(_){let e,a,t,n,s,l,c,u,b=_[1],v=[];for(let f=0;f<b.length;f+=1)v[f]=Ee(be(_,b,f));const w=f=>A(v[f],1,1,()=>{v[f]=null});return{c(){e=d("div"),a=d("input"),t=N(),n=d("i"),s=N(),l=d("div"),c=d("ul");for(let f=0;f<v.length;f+=1)v[f].c();this.h()},l(f){e=$(f,"DIV",{class:!0});var h=m(e);a=$(h,"INPUT",{type:!0,class:!0,autocomplete:!0,id:!0,placeholder:!0}),t=P(h),n=$(h,"I",{class:!0}),m(n).forEach(o),h.forEach(o),s=P(f),l=$(f,"DIV",{"data-simplebar":!0,style:!0,class:!0});var p=m(l);c=$(p,"UL",{class:!0,id:!0});var D=m(c);for(let y=0;y<v.length;y+=1)v[y].l(D);D.forEach(o),p.forEach(o),this.h()},h(){r(a,"type","text"),r(a,"class","form-control bg-light border-light"),r(a,"autocomplete","off"),r(a,"id","searchList"),r(a,"placeholder","Search candidate..."),r(n,"class","ri-search-line search-icon"),r(e,"class","search-box"),r(c,"class","list-unstyled mb-0 pt-2"),r(c,"id","candidate-list"),r(l,"data-simplebar",""),Pe(l,"max-height","190px"),r(l,"class","px-3 mx-n3")},m(f,h){I(f,e,h),i(e,a),i(e,t),i(e,n),I(f,s,h),I(f,l,h),i(l,c);for(let p=0;p<v.length;p+=1)v[p].m(c,null);u=!0},p(f,h){if(h&2){b=f[1];let p;for(p=0;p<b.length;p+=1){const D=be(f,b,p);v[p]?(v[p].p(D,h),S(v[p],1)):(v[p]=Ee(D),v[p].c(),S(v[p],1),v[p].m(c,null))}for(Te(),p=b.length;p<v.length;p+=1)w(p);Ce()}},i(f){if(!u){for(let h=0;h<b.length;h+=1)S(v[h]);u=!0}},o(f){v=v.filter(Boolean);for(let h=0;h<v.length;h+=1)A(v[h]);u=!1},d(f){f&&o(e),f&&o(s),f&&o(l),Se(v,f)}}}function Ge(_){let e,a;return e=new ne({props:{class:"border-end",$$slots:{default:[ze]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Je(_){let e,a,t,n,s,l,c,u,b,v,w,f,h,p,D,y,E,x,z,T,V,C,G,U,k,J,W,K,ee,j,Z,ie=" ",te,se,Q,ae,ce;return{c(){e=d("div"),a=d("img"),n=N(),s=d("h5"),l=L("Tonya Noble"),c=N(),u=d("p"),b=L("Web Developer"),v=N(),w=d("div"),f=d("button"),h=d("span"),p=d("i"),D=N(),y=d("button"),E=d("span"),x=d("i"),z=N(),T=d("button"),V=d("span"),C=d("i"),G=N(),U=d("div"),k=d("button"),J=d("span"),W=d("i"),K=L(" Follow"),ee=N(),j=d("span"),Z=d("i"),te=L(ie),se=L(`
                                Unfollow`),this.h()},l(g){e=$(g,"DIV",{class:!0});var B=m(e);a=$(B,"IMG",{src:!0,alt:!0,id:!0,class:!0}),B.forEach(o),n=P(g),s=$(g,"H5",{id:!0,class:!0});var ue=m(s);l=F(ue,"Tonya Noble"),ue.forEach(o),c=P(g),u=$(g,"P",{id:!0,class:!0});var fe=m(u);b=F(fe,"Web Developer"),fe.forEach(o),v=P(g),w=$(g,"DIV",{class:!0});var R=m(w);f=$(R,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var de=m(f);h=$(de,"SPAN",{class:!0});var $e=m(h);p=$($e,"I",{class:!0}),m(p).forEach(o),$e.forEach(o),de.forEach(o),D=P(R),y=$(R,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var me=m(y);E=$(me,"SPAN",{class:!0});var pe=m(E);x=$(pe,"I",{class:!0}),m(x).forEach(o),pe.forEach(o),me.forEach(o),z=P(R),T=$(R,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var ve=m(T);V=$(ve,"SPAN",{class:!0});var _e=m(V);C=$(_e,"I",{class:!0}),m(C).forEach(o),_e.forEach(o),ve.forEach(o),R.forEach(o),G=P(g),U=$(g,"DIV",{});var he=m(U);k=$(he,"BUTTON",{type:!0,class:!0});var X=m(k);J=$(X,"SPAN",{class:!0});var le=m(J);W=$(le,"I",{class:!0}),m(W).forEach(o),K=F(le," Follow"),le.forEach(o),ee=P(X),j=$(X,"SPAN",{class:!0});var Y=m(j);Z=$(Y,"I",{class:!0}),m(Z).forEach(o),te=F(Y,ie),se=F(Y,`
                                Unfollow`),Y.forEach(o),X.forEach(o),he.forEach(o),this.h()},h(){Ie(a.src,t=xe)||r(a,"src",t),r(a,"alt",""),r(a,"id","candidate-img"),r(a,"class","img-thumbnail rounded-circle shadow-none"),r(e,"class","avatar-md mb-3 mx-auto"),r(s,"id","candidate-name"),r(s,"class","mb-0"),r(u,"id","candidate-position"),r(u,"class","text-muted"),r(p,"class","ri-google-line"),r(h,"class","avatar-title rounded-circle bg-light text-body"),r(f,"type","button"),r(f,"class","btn avatar-xs p-0"),r(f,"data-bs-toggle","tooltip"),r(f,"data-bs-placement","top"),r(f,"title","Google"),r(x,"class","ri-linkedin-line"),r(E,"class","avatar-title rounded-circle bg-light text-body"),r(y,"type","button"),r(y,"class","btn avatar-xs p-0"),r(y,"data-bs-toggle","tooltip"),r(y,"data-bs-placement","top"),r(y,"title","Linkedin"),r(C,"class","ri-dribbble-fill"),r(V,"class","avatar-title rounded-circle bg-light text-body"),r(T,"type","button"),r(T,"class","btn avatar-xs p-0"),r(T,"data-bs-toggle","tooltip"),r(T,"data-bs-placement","top"),r(T,"title","Dribbble"),r(w,"class","d-flex gap-2 justify-content-center mb-3"),r(W,"class","ri-add-line align-bottom me-1"),r(J,"class","icon-on"),r(Z,"class","ri-user-unfollow-line align-bottom me-1"),r(j,"class","icon-off"),r(k,"type","button"),r(k,"class",Q=_[0]?"btn btn-success custom-toggle w-100 active":"btn btn-success custom-toggle w-100")},m(g,B){I(g,e,B),i(e,a),I(g,n,B),I(g,s,B),i(s,l),I(g,c,B),I(g,u,B),i(u,b),I(g,v,B),I(g,w,B),i(w,f),i(f,h),i(h,p),i(w,D),i(w,y),i(y,E),i(E,x),i(w,z),i(w,T),i(T,V),i(V,C),I(g,G,B),I(g,U,B),i(U,k),i(k,J),i(J,W),i(J,K),i(k,ee),i(k,j),i(j,Z),i(j,te),i(j,se),ae||(ce=Ae(k,"click",_[2]),ae=!0)},p(g,B){B&1&&Q!==(Q=g[0]?"btn btn-success custom-toggle w-100 active":"btn btn-success custom-toggle w-100")&&r(k,"class",Q)},d(g){g&&o(e),g&&o(n),g&&o(s),g&&o(c),g&&o(u),g&&o(v),g&&o(w),g&&o(G),g&&o(U),ae=!1,ce()}}}function We(_){let e,a;return e=new ne({props:{class:"text-center",$$slots:{default:[Je]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){const s={};n&65&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function je(_){let e,a,t,n;return e=new re({props:{lg:6,$$slots:{default:[Ge]},$$scope:{ctx:_}}}),t=new re({props:{lg:6,$$slots:{default:[We]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment),a=N(),H(t.$$.fragment)},l(s){O(e.$$.fragment,s),a=P(s),O(t.$$.fragment,s)},m(s,l){M(e,s,l),I(s,a,l),M(t,s,l),n=!0},p(s,l){const c={};l&64&&(c.$$scope={dirty:l,ctx:s}),e.$set(c);const u={};l&65&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){n||(S(e.$$.fragment,s),S(t.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),A(t.$$.fragment,s),n=!1},d(s){q(e,s),s&&o(a),q(t,s)}}}function Ke(_){let e,a,t,n;return e=new ke({props:{$$slots:{default:[Me]},$$scope:{ctx:_}}}),t=new Ne({props:{class:"g-0",$$slots:{default:[je]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment),a=N(),H(t.$$.fragment)},l(s){O(e.$$.fragment,s),a=P(s),O(t.$$.fragment,s)},m(s,l){M(e,s,l),I(s,a,l),M(t,s,l),n=!0},p(s,l){const c={};l&64&&(c.$$scope={dirty:l,ctx:s}),e.$set(c);const u={};l&65&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){n||(S(e.$$.fragment,s),S(t.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),A(t.$$.fragment,s),n=!1},d(s){q(e,s),s&&o(a),q(t,s)}}}function Re(_){let e;return{c(){e=L("Invite Friends")},l(a){e=F(a,"Invite Friends")},m(a,t){I(a,e,t)},d(a){a&&o(e)}}}function Ze(_){let e,a,t,n,s,l,c,u,b,v,w,f,h,p,D,y;return D=new oe({props:{href:"#!",class:"btn btn-danger",$$slots:{default:[Re]},$$scope:{ctx:_}}}),{c(){e=d("div"),a=d("div"),t=d("div"),n=d("div"),s=d("i"),l=N(),c=d("div"),u=d("h6"),b=L("Invite your friends to Velzon"),v=N(),w=d("p"),f=L(`Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but because occasionally.`),h=N(),p=d("div"),H(D.$$.fragment),this.h()},l(E){e=$(E,"DIV",{class:!0});var x=m(e);a=$(x,"DIV",{class:!0});var z=m(a);t=$(z,"DIV",{class:!0});var T=m(t);n=$(T,"DIV",{class:!0});var V=m(n);s=$(V,"I",{class:!0}),m(s).forEach(o),V.forEach(o),T.forEach(o),z.forEach(o),l=P(x),c=$(x,"DIV",{class:!0});var C=m(c);u=$(C,"H6",{class:!0});var G=m(u);b=F(G,"Invite your friends to Velzon"),G.forEach(o),v=P(C),w=$(C,"P",{class:!0});var U=m(w);f=F(U,`Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but because occasionally.`),U.forEach(o),C.forEach(o),x.forEach(o),h=P(E),p=$(E,"DIV",{class:!0});var k=m(p);O(D.$$.fragment,k),k.forEach(o),this.h()},h(){r(s,"class","ri-gift-line"),r(n,"class","avatar-title bg-soft-danger text-danger rounded-circle fs-17"),r(t,"class","avatar-sm"),r(a,"class","flex-shrink-0"),r(u,"class","fs-16"),r(w,"class","text-muted mb-0"),r(c,"class","flex-grow-1 ms-3"),r(e,"class","d-flex align-items-center"),r(p,"class","mt-3 text-end")},m(E,x){I(E,e,x),i(e,a),i(a,t),i(t,n),i(n,s),i(e,l),i(e,c),i(c,u),i(u,b),i(c,v),i(c,w),i(w,f),I(E,h,x),I(E,p,x),M(D,p,null),y=!0},p(E,x){const z={};x&64&&(z.$$scope={dirty:x,ctx:E}),D.$set(z)},i(E){y||(S(D.$$.fragment,E),y=!0)},o(E){A(D.$$.fragment,E),y=!1},d(E){E&&o(e),E&&o(h),E&&o(p),q(D)}}}function Qe(_){let e,a;return e=new ne({props:{class:"bg-soft-danger",$$slots:{default:[Ze]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Xe(_){let e,a,t,n;return e=new ge({props:{$$slots:{default:[Ke]},$$scope:{ctx:_}}}),t=new ge({props:{class:"overflow-hidden shadow-none",$$slots:{default:[Qe]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment),a=N(),H(t.$$.fragment)},l(s){O(e.$$.fragment,s),a=P(s),O(t.$$.fragment,s)},m(s,l){M(e,s,l),I(s,a,l),M(t,s,l),n=!0},p(s,l){const c={};l&65&&(c.$$scope={dirty:l,ctx:s}),e.$set(c);const u={};l&64&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){n||(S(e.$$.fragment,s),S(t.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),A(t.$$.fragment,s),n=!1},d(s){q(e,s),s&&o(a),q(t,s)}}}function Ye(_){let e,a;return e=new re({props:{xxl:4,$$slots:{default:[Xe]},$$scope:{ctx:_}}}),{c(){H(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,[n]){const s={};n&65&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function et(_,e,a){const t=[{id:1,img:xe,name:"Tonya Noble",username:"@tonya",designation:"Web Developer"},{id:2,img:Ue,name:"Nicholas Ball",username:"@nicholas",designation:"Assistant / Store Keeper"},{id:3,img:Be,name:"Zynthia Marrow",username:"@zynthia",designation:"Full Stack Engineer"},{id:4,img:Le,name:"Cheryl Moore",username:"@cheryl",designation:"Product Designer"},{id:5,img:Fe,name:"Jennifer Bailey",username:"@jennifer",designation:"Marketing Director"},{id:6,img:He,name:"Hadley Leonard",username:"@hadley",designation:"Executive, HR Operations"}];var n="";return[n,t,()=>{a(0,n=l=>!l)}]}class it extends ye{constructor(e){super();De(this,e,et,Ye,Ve,{})}}export{it as default};
