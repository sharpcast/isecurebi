var Ne=Object.defineProperty,ke=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ie=(o,e,s)=>e in o?Ne(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,te=(o,e)=>{for(var s in e||(e={}))Ie.call(e,s)&&ie(o,s,e[s]);if(fe)for(var s of fe(e))Oe.call(e,s)&&ie(o,s,e[s]);return o},ae=(o,e)=>ke(o,Ce(e));import{S as Te,i as Pe,s as Ae,V as Se,aS as ce,k as V,w as C,e as v,G as Me,d as $,m as U,x as I,c as h,a as w,b as g,g as N,y as O,q as D,o as y,B as T,bh as Ve,bi as Ue,bj as We,T as x,aV as _e,aT as ve,aa as Be,U as J,t as A,h as S,j as he,I as u,N as ee,bk as be,a6 as le,bl as $e,J as Z,ag as ne,l as ue,n as we,p as De,K as Le,f as Re,ah as re,bm as se,bn as Ge,bo as ze}from"../../chunks/vendor-bc251f35.js";import{C as Fe}from"../../chunks/CDeleteModal-5b3f8a5f.js";import He from"./UpcommingEvents.svelte-f5763c3e.js";import{B as je}from"../../chunks/BreadCrumb-351b84b0.js";var oe=new Date,q=oe.getDate(),F=oe.getMonth(),H=oe.getFullYear();const qe=[{id:1,title:"World Braille Day",start:"2022-01-01T00:00:00.000Z",end:"2022-01-08T00:00:00.000",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:2,title:"World Leprosy Day",start:"2022-05-04",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:3,title:"International Mother Language Day",start:"2022-02-21",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:4,title:"International Women's Day",start:"2022-03-08",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:5,title:"World Thinking Day",start:"2022-02-22",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:6,title:"International Mother Language Day",start:"2022-03-21",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:7,title:"World Water Day",start:"2022-03-22",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:8,title:"World Health Day",start:"2022-04-07",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:9,title:"International Special Librarians Day",start:"2022-04-16",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."},{id:10,title:"Earth Day",start:"2022-04-22",className:"bg-soft-info",allDay:!0,description:"N.A.",location:"N.A."}],Ke=[{id:153,title:"All Day Event",start:new Date(H,F,1),className:"bg-soft-primary",location:"San Francisco, US",allDay:!1,extendedProps:{department:"All Day Event"},description:"An all-day event is an event that lasts an entire day or longer"},{id:136,title:"Visit Online Course",start:new Date(H,F,q-5),end:new Date(H,F,q-2),allDay:!1,className:"bg-soft-warning",location:"San Francisco, US",extendedProps:{department:"Long Event"},description:"Long Term Event means an incident that last longer than 12 hours."},{id:999,title:"Client Meeting with Alexis",start:new Date(H,F,q+22,20,0),end:new Date(H,F,q+24,16,0),allDay:!1,className:"bg-soft-danger",location:"California, US",extendedProps:{department:"Meeting with Alexis"},description:"A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction, such as sharing information or reaching agreement."},{id:991,title:"Repeating Event",start:new Date(H,F,q+4,16,0),end:new Date(H,F,q+9,16,0),allDay:!1,className:"bg-soft-primary",location:"Las Vegas, US",extendedProps:{department:"Repeating Event"},description:"A recurring or repeating event is simply any event that you will occur more than once on your calendar. "},{id:112,title:"Meeting With Designer",start:new Date(H,F,q,12,30),allDay:!1,className:"bg-soft-success",location:"Head Office, US",extendedProps:{department:"Meeting"},description:"Tell how to boost website traffic"},{id:113,title:"Weekly Strategy Planning",start:new Date(H,F,q+9),end:new Date(H,F,q+11),allDay:!1,className:"bg-soft-danger",location:"Head Office, US",extendedProps:{department:"Lunch"},description:"Strategies for Creating Your Weekly Schedule"},{id:875,title:"Birthday Party",start:new Date(H,F,q+1,19,0),allDay:!1,className:"bg-soft-success",location:"Los Angeles, US",extendedProps:{department:"Birthday Party"},description:"Family slumber party \u2013 Bring out the blankets and pillows and have a family slumber party! Play silly party games, share special snacks and wind down the fun with a special movie."},{id:783,title:"Click for Google",start:new Date(H,F,28),end:new Date(H,F,29),url:"http://google.com/",className:"bg-soft-dark"},{id:456,title:"Velzon Project Discussion with Team",start:new Date(H,F,q+23,20,0),end:new Date(H,F,q+24,16,0),allDay:!1,className:"bg-soft-info",location:"Head Office, US",extendedProps:{department:"Discussion"},description:"Tell how to boost website traffic"}],Ye=[{id:1,title:"New Event Planning",type:"success"},{id:2,title:"Meeting",type:"info"},{id:3,title:"Generating Reports",type:"warning"},{id:4,title:"Create New theme",type:"danger"}],Y={calenderDefaultCategories:Ye,events:Ke,defaultevent:qe};function me(o,e,s){const t=o.slice();return t[24]=e[s],t}function Je(o){let e,s,t;return{c(){e=v("div"),s=v("i"),t=A(`
											New Event Planning`),this.h()},l(l){e=h(l,"DIV",{class:!0});var a=w(e);s=h(a,"I",{class:!0}),w(s).forEach($),t=S(a,`
											New Event Planning`),a.forEach($),this.h()},h(){g(s,"class","mdi mdi-checkbox-blank-circle font-size-11 me-2"),g(e,"class","bg-soft-success external-event fc-event text-success")},m(l,a){N(l,e,a),u(e,s),u(e,t)},p:Z,d(l){l&&$(e)}}}function Ze(o){let e,s,t;return{c(){e=v("div"),s=v("i"),t=A(`
											Meeting`),this.h()},l(l){e=h(l,"DIV",{class:!0});var a=w(e);s=h(a,"I",{class:!0}),w(s).forEach($),t=S(a,`
											Meeting`),a.forEach($),this.h()},h(){g(s,"class","mdi mdi-checkbox-blank-circle font-size-11 me-2"),g(e,"class","bg-soft-info external-event fc-event text-info")},m(l,a){N(l,e,a),u(e,s),u(e,t)},p:Z,d(l){l&&$(e)}}}function Qe(o){let e,s,t;return{c(){e=v("div"),s=v("i"),t=A(`
											Generating Reports`),this.h()},l(l){e=h(l,"DIV",{class:!0});var a=w(e);s=h(a,"I",{class:!0}),w(s).forEach($),t=S(a,`
											Generating Reports`),a.forEach($),this.h()},h(){g(s,"class","mdi mdi-checkbox-blank-circle font-size-11 me-2"),g(e,"class","bg-soft-warning external-event fc-event text-warning")},m(l,a){N(l,e,a),u(e,s),u(e,t)},p:Z,d(l){l&&$(e)}}}function Xe(o){let e,s,t;return{c(){e=v("div"),s=v("i"),t=A(`
											Create New theme`),this.h()},l(l){e=h(l,"DIV",{class:!0});var a=w(e);s=h(a,"I",{class:!0}),w(s).forEach($),t=S(a,`
											Create New theme`),a.forEach($),this.h()},h(){g(s,"class","mdi mdi-checkbox-blank-circle font-size-11 me-2"),g(e,"class","bg-soft-danger external-event fc-event text-danger")},m(l,a){N(l,e,a),u(e,s),u(e,t)},p:Z,d(l){l&&$(e)}}}function xe(o){let e,s,t,l,a,n,f,r,c,m,i,_,b,R,p,d,k,M,P,B;return i=new se({props:{eventData:o[9],class:"draggable",$$slots:{default:[Je]},$$scope:{ctx:o}}}),b=new se({props:{eventData:o[10],class:"draggable",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),p=new se({props:{eventData:o[11],class:"draggable",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),k=new se({props:{eventData:o[12],class:"draggable",$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){e=v("button"),s=v("i"),t=A(" Create New Event"),l=V(),a=v("div"),n=v("br"),f=V(),r=v("p"),c=A(`Drag and drop your event or click in the
										calendar`),m=V(),C(i.$$.fragment),_=V(),C(b.$$.fragment),R=V(),C(p.$$.fragment),d=V(),C(k.$$.fragment),this.h()},l(E){e=h(E,"BUTTON",{class:!0,id:!0});var L=w(e);s=h(L,"I",{class:!0}),w(s).forEach($),t=S(L," Create New Event"),L.forEach($),l=U(E),a=h(E,"DIV",{id:!0});var G=w(a);n=h(G,"BR",{}),f=U(G),r=h(G,"P",{class:!0});var j=w(r);c=S(j,`Drag and drop your event or click in the
										calendar`),j.forEach($),m=U(G),I(i.$$.fragment,G),_=U(G),I(b.$$.fragment,G),R=U(G),I(p.$$.fragment,G),d=U(G),I(k.$$.fragment,G),G.forEach($),this.h()},h(){g(s,"class","mdi mdi-plus"),g(e,"class","btn btn-primary w-100"),g(e,"id","btn-new-event"),g(r,"class","text-muted"),g(a,"id","external-events")},m(E,L){N(E,e,L),u(e,s),u(e,t),N(E,l,L),N(E,a,L),u(a,n),u(a,f),u(a,r),u(r,c),u(a,m),O(i,a,null),u(a,_),O(b,a,null),u(a,R),O(p,a,null),u(a,d),O(k,a,null),M=!0,P||(B=ee(e,"click",o[8]),P=!0)},p(E,L){const G={};L&134217728&&(G.$$scope={dirty:L,ctx:E}),i.$set(G);const j={};L&134217728&&(j.$$scope={dirty:L,ctx:E}),b.$set(j);const K={};L&134217728&&(K.$$scope={dirty:L,ctx:E}),p.$set(K);const W={};L&134217728&&(W.$$scope={dirty:L,ctx:E}),k.$set(W)},i(E){M||(D(i.$$.fragment,E),D(b.$$.fragment,E),D(p.$$.fragment,E),D(k.$$.fragment,E),M=!0)},o(E){y(i.$$.fragment,E),y(b.$$.fragment,E),y(p.$$.fragment,E),y(k.$$.fragment,E),M=!1},d(E){E&&$(e),E&&$(l),E&&$(a),T(i),T(b),T(p),T(k),P=!1,B()}}}function et(o){let e,s;return e=new re({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217728&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function de(o){let e,s,t=o[0].defaultevent,l=[];for(let n=0;n<t.length;n+=1)l[n]=pe(me(o,t,n));const a=n=>y(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=ue()},l(n){for(let f=0;f<l.length;f+=1)l[f].l(n);e=ue()},m(n,f){for(let r=0;r<l.length;r+=1)l[r].m(n,f);N(n,e,f),s=!0},p(n,f){if(f&1){t=n[0].defaultevent;let r;for(r=0;r<t.length;r+=1){const c=me(n,t,r);l[r]?(l[r].p(c,f),D(l[r],1)):(l[r]=pe(c),l[r].c(),D(l[r],1),l[r].m(e.parentNode,e))}for(we(),r=t.length;r<l.length;r+=1)a(r);De()}},i(n){if(!s){for(let f=0;f<t.length;f+=1)D(l[f]);s=!0}},o(n){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)y(l[f]);s=!1},d(n){Le(l,n),n&&$(e)}}}function pe(o){let e,s;return e=new He({props:{event:o[24]}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.event=t[24]),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function tt(o){let e,s,t,l,a,n,f,r,c,m,i;return t=new Ge({props:{class:"text-info icon-dual-info",size:"24"}}),{c(){e=v("div"),s=v("div"),C(t.$$.fragment),l=V(),a=v("div"),n=v("h6"),f=A("Welcome to your Calendar!"),r=V(),c=v("p"),m=A(`Event that applications book will
											appear here. Click on an event to
											see the details and manage
											applicants event.`),this.h()},l(_){e=h(_,"DIV",{class:!0});var b=w(e);s=h(b,"DIV",{class:!0});var R=w(s);I(t.$$.fragment,R),R.forEach($),l=U(b),a=h(b,"DIV",{class:!0});var p=w(a);n=h(p,"H6",{class:!0});var d=w(n);f=S(d,"Welcome to your Calendar!"),d.forEach($),r=U(p),c=h(p,"P",{class:!0});var k=w(c);m=S(k,`Event that applications book will
											appear here. Click on an event to
											see the details and manage
											applicants event.`),k.forEach($),p.forEach($),b.forEach($),this.h()},h(){g(s,"class","flex-shrink-0"),g(n,"class","fs-15"),g(c,"class","text-muted mb-0"),g(a,"class","flex-grow-1 ms-3"),g(e,"class","d-flex")},m(_,b){N(_,e,b),u(e,s),O(t,s,null),u(e,l),u(e,a),u(a,n),u(n,f),u(a,r),u(a,c),u(c,m),i=!0},p:Z,i(_){i||(D(t.$$.fragment,_),i=!0)},o(_){y(t.$$.fragment,_),i=!1},d(_){_&&$(e),T(t)}}}function at(o){let e,s;return e=new re({props:{class:"bg-soft-info",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217728&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function st(o){let e,s,t,l,a,n,f,r,c,m,i,_,b,R;e=new ne({props:{class:"card-h-100",$$slots:{default:[et]},$$scope:{ctx:o}}});let p=o[0].defaultevent&&de(o);return b=new ne({props:{$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),t=v("div"),l=v("h5"),a=A("Upcoming Events"),n=V(),f=v("p"),r=A("Don't miss scheduled events"),c=V(),m=v("div"),i=v("div"),p&&p.c(),_=V(),C(b.$$.fragment),this.h()},l(d){I(e.$$.fragment,d),s=U(d),t=h(d,"DIV",{});var k=w(t);l=h(k,"H5",{class:!0});var M=w(l);a=S(M,"Upcoming Events"),M.forEach($),n=U(k),f=h(k,"P",{class:!0});var P=w(f);r=S(P,"Don't miss scheduled events"),P.forEach($),c=U(k),m=h(k,"DIV",{class:!0,"data-simplebar":!0,style:!0});var B=w(m);i=h(B,"DIV",{id:!0});var E=w(i);p&&p.l(E),E.forEach($),B.forEach($),k.forEach($),_=U(d),I(b.$$.fragment,d),this.h()},h(){g(l,"class","mb-1"),g(f,"class","text-muted"),g(i,"id","upcoming-event-list"),g(m,"class","pe-2 me-n1 mb-3"),g(m,"data-simplebar",""),Re(m,"height","400px")},m(d,k){O(e,d,k),N(d,s,k),N(d,t,k),u(t,l),u(l,a),u(t,n),u(t,f),u(f,r),u(t,c),u(t,m),u(m,i),p&&p.m(i,null),N(d,_,k),O(b,d,k),R=!0},p(d,k){const M={};k&134217728&&(M.$$scope={dirty:k,ctx:d}),e.$set(M),d[0].defaultevent?p?(p.p(d,k),k&1&&D(p,1)):(p=de(d),p.c(),D(p,1),p.m(i,null)):p&&(we(),y(p,1,1,()=>{p=null}),De());const P={};k&134217728&&(P.$$scope={dirty:k,ctx:d}),b.$set(P)},i(d){R||(D(e.$$.fragment,d),D(p),D(b.$$.fragment,d),R=!0)},o(d){y(e.$$.fragment,d),y(p),y(b.$$.fragment,d),R=!1},d(d){T(e,d),d&&$(s),d&&$(t),p&&p.d(),d&&$(_),T(b,d)}}}function lt(o){let e,s,t={options:o[7]};return e=new ze({props:t}),o[19](e),{c(){C(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,a){O(e,l,a),s=!0},p(l,a){const n={};a&128&&(n.options=l[7]),e.$set(n)},i(l){s||(D(e.$$.fragment,l),s=!0)},o(l){y(e.$$.fragment,l),s=!1},d(l){o[19](null),T(e,l)}}}function nt(o){let e,s;return e=new re({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217860&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function rt(o){let e,s;return e=new ne({props:{className:"card-h-100",$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217860&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ot(o){let e,s,t,l;return e=new J({props:{xl:3,$$slots:{default:[st]},$$scope:{ctx:o}}}),t=new J({props:{xl:9,$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217729&&(f.$$scope={dirty:n,ctx:a}),e.$set(f);const r={};n&134217860&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function ft(o){let e,s;return e=new x({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217861&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function it(o){let e,s;return e=new J({props:{xs:12,$$slots:{default:[ft]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217861&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ct(o){let e,s,t,l;return e=new je({props:{title:"Calendar",pageTitle:"Apps"}}),t=new x({props:{$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217861&&(f.$$scope={dirty:n,ctx:a}),t.$set(f)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function $t(o){let e=o[5]?"Edit Event":"Add Event",s;return{c(){s=A(e)},l(t){s=S(t,e)},m(t,l){N(t,s,l)},p(t,l){l&32&&e!==(e=t[5]?"Edit Event":"Add Event")&&he(s,e)},d(t){t&&$(s)}}}function ut(o){let e;return{c(){e=A("Event Name")},l(s){e=S(s,"Event Name")},m(s,t){N(s,e,t)},d(s){s&&$(e)}}}function mt(o){let e,s,t,l,a,n;return s=new le({props:{class:"form-label",for:"title",$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){e=v("div"),C(s.$$.fragment),t=V(),l=v("input"),this.h()},l(f){e=h(f,"DIV",{class:!0});var r=w(e);I(s.$$.fragment,r),t=U(r),l=h(r,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),r.forEach($),this.h()},h(){g(l,"type","text"),g(l,"class","form-control"),g(l,"name","title"),g(l,"placeholder","Event Name"),l.value=a=o[4]&&o[4].title?o[4].title:"",g(e,"class","mb-3")},m(f,r){N(f,e,r),O(s,e,null),u(e,t),u(e,l),n=!0},p(f,r){const c={};r&134217728&&(c.$$scope={dirty:r,ctx:f}),s.$set(c),(!n||r&16&&a!==(a=f[4]&&f[4].title?f[4].title:"")&&l.value!==a)&&(l.value=a)},i(f){n||(D(s.$$.fragment,f),n=!0)},o(f){y(s.$$.fragment,f),n=!1},d(f){f&&$(e),T(s)}}}function dt(o){let e;return{c(){e=A("Category")},l(s){e=S(s,"Category")},m(s,t){N(s,e,t)},d(s){s&&$(e)}}}function pt(o){let e,s,t,l,a,n,f,r,c,m,i,_,b,R,p,d,k,M;return s=new le({props:{class:"form-label",for:"category",$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){e=v("div"),C(s.$$.fragment),t=V(),l=v("select"),a=v("option"),n=A("Danger"),f=v("option"),r=A("Success"),c=v("option"),m=A("Primary"),i=v("option"),_=A("Info"),b=v("option"),R=A("Dark"),p=v("option"),d=A("Warning"),this.h()},l(P){e=h(P,"DIV",{class:!0});var B=w(e);I(s.$$.fragment,B),t=U(B),l=h(B,"SELECT",{name:!0,class:!0,placeholder:!0});var E=w(l);a=h(E,"OPTION",{});var L=w(a);n=S(L,"Danger"),L.forEach($),f=h(E,"OPTION",{});var G=w(f);r=S(G,"Success"),G.forEach($),c=h(E,"OPTION",{});var j=w(c);m=S(j,"Primary"),j.forEach($),i=h(E,"OPTION",{});var K=w(i);_=S(K,"Info"),K.forEach($),b=h(E,"OPTION",{});var W=w(b);R=S(W,"Dark"),W.forEach($),p=h(E,"OPTION",{});var z=w(p);d=S(z,"Warning"),z.forEach($),E.forEach($),B.forEach($),this.h()},h(){a.__value="bg-soft-danger",a.value=a.__value,f.__value="bg-soft-success",f.value=f.__value,c.__value="bg-soft-primary",c.value=c.__value,i.__value="bg-soft-info",i.value=i.__value,b.__value="bg-soft-dark",b.value=b.__value,p.__value="bg-soft-warning",p.value=p.__value,g(l,"name","category"),g(l,"class","form-control form-select"),g(l,"placeholder","Select Category"),g(e,"class","mb-3")},m(P,B){N(P,e,B),O(s,e,null),u(e,t),u(e,l),u(l,a),u(a,n),u(l,f),u(f,r),u(l,c),u(c,m),u(l,i),u(i,_),u(l,b),u(b,R),u(l,p),u(p,d),$e(l,o[4]?o[4].category:"bg-primary"),M=!0},p(P,B){const E={};B&134217728&&(E.$$scope={dirty:B,ctx:P}),s.$set(E),(!M||B&16&&k!==(k=P[4]?P[4].category:"bg-primary"))&&$e(l,P[4]?P[4].category:"bg-primary")},i(P){M||(D(s.$$.fragment,P),M=!0)},o(P){y(s.$$.fragment,P),M=!1},d(P){P&&$(e),T(s)}}}function gt(o){let e,s,t,l;return e=new J({props:{class:"col-12",$$slots:{default:[mt]},$$scope:{ctx:o}}}),t=new J({props:{class:"col-12",$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217744&&(f.$$scope={dirty:n,ctx:a}),e.$set(f);const r={};n&134217744&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function ge(o){let e,s,t,l;return{c(){e=v("button"),s=A("Delete"),this.h()},l(a){e=h(a,"BUTTON",{type:!0,class:!0});var n=w(e);s=S(n,"Delete"),n.forEach($),this.h()},h(){g(e,"type","button"),g(e,"class","btn btn-danger")},m(a,n){N(a,e,n),u(e,s),t||(l=ee(e,"click",o[20]),t=!0)},p:Z,d(a){a&&$(e),t=!1,l()}}}function _t(o){let e,s,t,l,a,n,f,r,c=!!o[5]&&ge(o);return{c(){c&&c.c(),e=V(),s=v("button"),t=A("Close"),l=V(),a=v("button"),n=A("Save"),this.h()},l(m){c&&c.l(m),e=U(m),s=h(m,"BUTTON",{type:!0,class:!0});var i=w(s);t=S(i,"Close"),i.forEach($),l=U(m),a=h(m,"BUTTON",{type:!0,class:!0});var _=w(a);n=S(_,"Save"),_.forEach($),this.h()},h(){g(s,"type","button"),g(s,"class","btn btn-light me-2"),g(a,"type","submit"),g(a,"class","btn btn-success save-event")},m(m,i){c&&c.m(m,i),N(m,e,i),N(m,s,i),u(s,t),N(m,l,i),N(m,a,i),u(a,n),f||(r=ee(s,"click",o[8]),f=!0)},p(m,i){m[5]?c?c.p(m,i):(c=ge(m),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null)},d(m){c&&c.d(m),m&&$(e),m&&$(s),m&&$(l),m&&$(a),f=!1,r()}}}function vt(o){let e,s;return e=new J({props:{xs:"12",class:"text-end",$$slots:{default:[_t]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217760&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ht(o){let e,s,t,l,a,n,f;return s=new x({props:{$$slots:{default:[gt]},$$scope:{ctx:o}}}),l=new x({props:{class:"mt-2",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){e=v("form"),C(s.$$.fragment),t=V(),C(l.$$.fragment)},l(r){e=h(r,"FORM",{});var c=w(e);I(s.$$.fragment,c),t=U(c),I(l.$$.fragment,c),c.forEach($)},m(r,c){N(r,e,c),O(s,e,null),u(e,t),O(l,e,null),a=!0,n||(f=ee(e,"submit",be(o[15])),n=!0)},p(r,c){const m={};c&134217744&&(m.$$scope={dirty:c,ctx:r}),s.$set(m);const i={};c&134217760&&(i.$$scope={dirty:c,ctx:r}),l.$set(i)},i(r){a||(D(s.$$.fragment,r),D(l.$$.fragment,r),a=!0)},o(r){y(s.$$.fragment,r),y(l.$$.fragment,r),a=!1},d(r){r&&$(e),T(s),T(l),n=!1,f()}}}function bt(o){let e,s,t,l;return e=new _e({props:{toggle:o[8],tag:"h4",$$slots:{default:[$t]},$$scope:{ctx:o}}}),t=new ve({props:{$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217760&&(f.$$scope={dirty:n,ctx:a}),e.$set(f);const r={};n&134217776&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function wt(o){let e=o[5]?"Edit Event":"Add Event",s;return{c(){s=A(e)},l(t){s=S(t,e)},m(t,l){N(t,s,l)},p(t,l){l&32&&e!==(e=t[5]?"Edit Event":"Add Event")&&he(s,e)},d(t){t&&$(s)}}}function Dt(o){let e;return{c(){e=A("Event title")},l(s){e=S(s,"Event title")},m(s,t){N(s,e,t)},d(s){s&&$(e)}}}function Et(o){let e,s,t,l,a;return s=new le({props:{class:"form-label",for:"title",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){e=v("div"),C(s.$$.fragment),t=V(),l=v("input"),this.h()},l(n){e=h(n,"DIV",{class:!0});var f=w(e);I(s.$$.fragment,f),t=U(f),l=h(f,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),f.forEach($),this.h()},h(){g(l,"type","text"),g(l,"class","form-control"),g(l,"name","title"),g(l,"placeholder","Event Name"),l.value="",g(e,"class","mb-3")},m(n,f){N(n,e,f),O(s,e,null),u(e,t),u(e,l),a=!0},p(n,f){const r={};f&134217728&&(r.$$scope={dirty:f,ctx:n}),s.$set(r)},i(n){a||(D(s.$$.fragment,n),a=!0)},o(n){y(s.$$.fragment,n),a=!1},d(n){n&&$(e),T(s)}}}function yt(o){let e;return{c(){e=A("Category")},l(s){e=S(s,"Category")},m(s,t){N(s,e,t)},d(s){s&&$(e)}}}function Nt(o){let e,s,t,l,a,n,f,r,c,m,i,_,b,R,p,d,k;return s=new le({props:{class:"form-label",for:"category",$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){e=v("div"),C(s.$$.fragment),t=V(),l=v("select"),a=v("option"),n=A("Danger"),f=v("option"),r=A("Success"),c=v("option"),m=A("Primary"),i=v("option"),_=A("Info"),b=v("option"),R=A("Dark"),p=v("option"),d=A("Warning"),this.h()},l(M){e=h(M,"DIV",{class:!0});var P=w(e);I(s.$$.fragment,P),t=U(P),l=h(P,"SELECT",{name:!0,class:!0,placeholder:!0});var B=w(l);a=h(B,"OPTION",{});var E=w(a);n=S(E,"Danger"),E.forEach($),f=h(B,"OPTION",{});var L=w(f);r=S(L,"Success"),L.forEach($),c=h(B,"OPTION",{});var G=w(c);m=S(G,"Primary"),G.forEach($),i=h(B,"OPTION",{});var j=w(i);_=S(j,"Info"),j.forEach($),b=h(B,"OPTION",{});var K=w(b);R=S(K,"Dark"),K.forEach($),p=h(B,"OPTION",{});var W=w(p);d=S(W,"Warning"),W.forEach($),B.forEach($),P.forEach($),this.h()},h(){a.__value="bg-soft-danger",a.value=a.__value,f.__value="bg-soft-success",f.value=f.__value,c.__value="bg-soft-primary",c.value=c.__value,i.__value="bg-soft-info",i.value=i.__value,b.__value="bg-soft-dark",b.value=b.__value,p.__value="bg-soft-warning",p.value=p.__value,g(l,"name","category"),g(l,"class","form-control form-select"),g(l,"placeholder","Select Category"),g(e,"class","mb-3")},m(M,P){N(M,e,P),O(s,e,null),u(e,t),u(e,l),u(l,a),u(a,n),u(l,f),u(f,r),u(l,c),u(c,m),u(l,i),u(i,_),u(l,b),u(b,R),u(l,p),u(p,d),k=!0},p(M,P){const B={};P&134217728&&(B.$$scope={dirty:P,ctx:M}),s.$set(B)},i(M){k||(D(s.$$.fragment,M),k=!0)},o(M){y(s.$$.fragment,M),k=!1},d(M){M&&$(e),T(s)}}}function kt(o){let e,s,t,l;return e=new J({props:{class:"col-12",$$slots:{default:[Et]},$$scope:{ctx:o}}}),t=new J({props:{class:"col-12",$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217728&&(f.$$scope={dirty:n,ctx:a}),e.$set(f);const r={};n&134217728&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function Ct(o){let e,s,t,l,a,n,f;return{c(){e=v("button"),s=A("Close"),t=V(),l=v("button"),a=A("Save"),this.h()},l(r){e=h(r,"BUTTON",{type:!0,class:!0});var c=w(e);s=S(c,"Close"),c.forEach($),t=U(r),l=h(r,"BUTTON",{type:!0,class:!0});var m=w(l);a=S(m,"Save"),m.forEach($),this.h()},h(){g(e,"type","button"),g(e,"class","btn btn-light me-2"),g(l,"type","submit"),g(l,"class","btn btn-success save-event")},m(r,c){N(r,e,c),u(e,s),N(r,t,c),N(r,l,c),u(l,a),n||(f=ee(e,"click",o[13]),n=!0)},p:Z,d(r){r&&$(e),r&&$(t),r&&$(l),n=!1,f()}}}function It(o){let e,s;return e=new J({props:{xs:"12",class:"text-end",$$slots:{default:[Ct]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,l){const a={};l&134217728&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ot(o){let e,s,t,l,a,n,f;return s=new x({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),l=new x({props:{class:"mt-2",$$slots:{default:[It]},$$scope:{ctx:o}}}),{c(){e=v("form"),C(s.$$.fragment),t=V(),C(l.$$.fragment)},l(r){e=h(r,"FORM",{});var c=w(e);I(s.$$.fragment,c),t=U(c),I(l.$$.fragment,c),c.forEach($)},m(r,c){N(r,e,c),O(s,e,null),u(e,t),O(l,e,null),a=!0,n||(f=ee(e,"submit",be(o[14])),n=!0)},p(r,c){const m={};c&134217728&&(m.$$scope={dirty:c,ctx:r}),s.$set(m);const i={};c&134217728&&(i.$$scope={dirty:c,ctx:r}),l.$set(i)},i(r){a||(D(s.$$.fragment,r),D(l.$$.fragment,r),a=!0)},o(r){y(s.$$.fragment,r),y(l.$$.fragment,r),a=!1},d(r){r&&$(e),T(s),T(l),n=!1,f()}}}function Tt(o){let e,s,t,l;return e=new _e({props:{toggleCategory:o[13],tag:"h4",$$slots:{default:[wt]},$$scope:{ctx:o}}}),t=new ve({props:{$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),s=V(),C(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=U(a),I(t.$$.fragment,a)},m(a,n){O(e,a,n),N(a,s,n),O(t,a,n),l=!0},p(a,n){const f={};n&134217760&&(f.$$scope={dirty:n,ctx:a}),e.$set(f);const r={};n&134217728&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(D(e.$$.fragment,a),D(t.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),l=!1},d(a){T(e,a),a&&$(s),T(t,a)}}}function Pt(o){let e,s,t,l,a,n,f,r,c,m;return s=new Fe({props:{show:o[6],onDeleteClick:o[16],onCloseClick:o[18]}}),a=new Se({props:{fluid:!0,$$slots:{default:[ct]},$$scope:{ctx:o}}}),f=new ce({props:{isOpen:o[1],$$slots:{default:[bt]},$$scope:{ctx:o}}}),c=new ce({props:{isOpen:o[3],$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){e=V(),C(s.$$.fragment),t=V(),l=v("div"),C(a.$$.fragment),n=V(),C(f.$$.fragment),r=V(),C(c.$$.fragment),this.h()},l(i){Me('[data-svelte="svelte-5rj0s9"]',document.head).forEach($),e=U(i),I(s.$$.fragment,i),t=U(i),l=h(i,"DIV",{class:!0});var b=w(l);I(a.$$.fragment,b),b.forEach($),n=U(i),I(f.$$.fragment,i),r=U(i),I(c.$$.fragment,i),this.h()},h(){document.title="Calendar | Velzon - Svelte Admin & Dashboard Template",g(l,"class","page-content")},m(i,_){N(i,e,_),O(s,i,_),N(i,t,_),N(i,l,_),O(a,l,null),N(i,n,_),O(f,i,_),N(i,r,_),O(c,i,_),m=!0},p(i,[_]){const b={};_&64&&(b.show=i[6]),s.$set(b);const R={};_&134217861&&(R.$$scope={dirty:_,ctx:i}),a.$set(R);const p={};_&2&&(p.isOpen=i[1]),_&134217776&&(p.$$scope={dirty:_,ctx:i}),f.$set(p);const d={};_&8&&(d.isOpen=i[3]),_&134217760&&(d.$$scope={dirty:_,ctx:i}),c.$set(d)},i(i){m||(D(s.$$.fragment,i),D(a.$$.fragment,i),D(f.$$.fragment,i),D(c.$$.fragment,i),m=!0)},o(i){y(s.$$.fragment,i),y(a.$$.fragment,i),y(f.$$.fragment,i),y(c.$$.fragment,i),m=!1},d(i){i&&$(e),T(s,i),i&&$(t),i&&$(l),T(a),i&&$(n),T(f,i),i&&$(r),T(c,i)}}}let At=!0;function St(o,e,s){let t=!1,l,a=!1,n={},f=!1,r="",c=!1;const m=()=>{s(1,t=!t),t||setTimeout(()=>{s(4,n={}),s(5,f=!1)},500)},i={id:Math.floor(Math.random()*100),title:"New Event Planning",start:new Date,allDay:!1,class:"bg-success text-white"},_={id:Math.floor(Math.random()*100),title:"Meeting",start:new Date,allDay:!1,class:"bg-info text-white"},b={id:Math.floor(Math.random()*100),title:"Generating Reports",start:new Date,allDay:!1,class:"bg-warning text-white"},R={id:Math.floor(Math.random()*100),title:"Create New theme",start:new Date,allDay:!1,class:"bg-danger text-white"};function p(W){r=W,m()}let d={plugins:[Ve,Ue,We],events:Y.events,weekends:{calendarWeekends:At},themeSystem:"bootstrap",handleWindowResize:!0,slotDuration:"00:15:00",editable:!0,droppable:!0,selectable:!0,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,dayGridWeek,dayGridDay"},dateClick:W=>p(W.dateStr),eventClick:W=>k(W)};const k=W=>{const z=W.event;s(4,n={id:parseInt(z.id),title:z.title,title_category:z.title_category,start:z.start,className:z.classNames,category:z.classNames[0],event_category:z.classNames[0]}),s(5,f=!0),m()},M=()=>{s(3,a=!a)},P=({target:{elements:{category:W,title:z}}})=>{const{events:Q}=d,X=[...Q,{id:Math.floor(Math.random()*100),title:z.value,start:new Date,allDay:!1,className:W.value+" text-white"}];s(7,d=ae(te({},d),{events:X})),M()},B=({target:{elements:{category:W,title:z}}})=>{if(f){const{events:Q}=d,X={id:n.id,title:z.value,className:W.value+" text-white",start:n.start,allDay:!1},Ee=Y.events.findIndex(ye=>ye.id===X.id);s(0,Y.events[Ee]=X,Y),s(0,Y.events=[...Q],Y),s(7,d=ae(te({},d),{events:Y.events}))}else{const{events:Q}=d,X=[...Q,{id:Math.floor(Math.random()*100),title:z.value,start:r||new Date,allDay:!1,className:W.value+" text-white"}];s(7,d=ae(te({},d),{events:X}))}r="",m()},E=()=>{var W=Y.events.filter((z,Q)=>z.id!==n.id);W=[...W],s(7,d=ae(te({},d),{events:W})),L(!1),m()},L=W=>{s(6,c=W)},G=()=>L(!1);function j(W){Be[W?"unshift":"push"](()=>{l=W,s(2,l)})}return[Y,t,l,a,n,f,c,d,m,i,_,b,R,M,P,B,E,L,G,j,()=>L(!0)]}class Lt extends Te{constructor(e){super();Pe(this,e,St,Pt,Ae,{})}}export{Lt as default};