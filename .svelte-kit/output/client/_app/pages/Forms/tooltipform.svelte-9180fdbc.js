import{S as ue,i as pe,s as ce,T as fe,w as U,x as P,y as S,q,o as D,B as N,c0 as de,c1 as me,c2 as z,L as ne,U as X,ag as $e,ah as _e,k as E,m as I,g as p,d as f,e as C,t as g,c as T,a as L,h as k,b as u,I as h,N as O,a6 as G,l as B,c5 as R,X as K,J as Q,j as W}from"../../chunks/vendor-bc251f35.js";import{P as ve}from"../../chunks/Prism-442cc101.js";import{P as he}from"../../chunks/PreviewCardHeader-c379c93b.js";function be(r){let t;return{c(){t=g("First name")},l(o){t=k(o,"First name")},m(o,e){p(o,t,e)},d(o){o&&f(t)}}}function ge(r){let t,o;return{c(){t=C("div"),o=g("Looks good!"),this.h()},l(e){t=T(e,"DIV",{class:!0});var i=L(t);o=k(i,"Looks good!"),i.forEach(f),this.h()},h(){u(t,"class","valid-tooltip")},m(e,i){p(e,t,i),h(t,o)},p:Q,d(e){e&&f(t)}}}function ke(r){let t,o=r[1].fnm+"",e;return{c(){t=C("div"),e=g(o),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=L(t);e=k(s,o),s.forEach(f),this.h()},h(){u(t,"class","invalid-tooltip")},m(i,s){p(i,t,s),h(t,e)},p(i,s){s&2&&o!==(o=i[1].fnm+"")&&W(e,o)},d(i){i&&f(t)}}}function ye(r){let t,o,e,i,s,c,$,m;t=new G({props:{htmlfor:"validationTooltip01",$$slots:{default:[be]},$$scope:{ctx:r}}});function v(l,n){return l[1].fnm?ke:ge}let _=v(r),a=_(r);return{c(){U(t.$$.fragment),o=E(),e=C("input"),i=E(),a.c(),s=B(),this.h()},l(l){P(t.$$.fragment,l),o=I(l),e=T(l,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,name:!0}),i=I(l),a.l(l),s=B(),this.h()},h(){u(e,"type","text"),u(e,"class","form-control"),u(e,"id","validationTooltip01"),u(e,"placeholder","Mark"),u(e,"name","fnm"),e.required=!0},m(l,n){S(t,l,n),p(l,o,n),p(l,e,n),R(e,r[0].fnm),p(l,i,n),a.m(l,n),p(l,s,n),c=!0,$||(m=[O(e,"change",r[4]),O(e,"blur",r[4]),O(e,"input",r[7])],$=!0)},p(l,n){const y={};n&8192&&(y.$$scope={dirty:n,ctx:l}),t.$set(y),n&1&&e.value!==l[0].fnm&&R(e,l[0].fnm),_===(_=v(l))&&a?a.p(l,n):(a.d(1),a=_(l),a&&(a.c(),a.m(s.parentNode,s)))},i(l){c||(q(t.$$.fragment,l),c=!0)},o(l){D(t.$$.fragment,l),c=!1},d(l){N(t,l),l&&f(o),l&&f(e),l&&f(i),a.d(l),l&&f(s),$=!1,K(m)}}}function we(r){let t;return{c(){t=g("Last name")},l(o){t=k(o,"Last name")},m(o,e){p(o,t,e)},d(o){o&&f(t)}}}function Ce(r){let t,o;return{c(){t=C("div"),o=g("Looks good!"),this.h()},l(e){t=T(e,"DIV",{class:!0});var i=L(t);o=k(i,"Looks good!"),i.forEach(f),this.h()},h(){u(t,"class","valid-tooltip")},m(e,i){p(e,t,i),h(t,o)},p:Q,d(e){e&&f(t)}}}function Te(r){let t,o=r[1].lnm+"",e;return{c(){t=C("div"),e=g(o),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=L(t);e=k(s,o),s.forEach(f),this.h()},h(){u(t,"class","invalid-tooltip")},m(i,s){p(i,t,s),h(t,e)},p(i,s){s&2&&o!==(o=i[1].lnm+"")&&W(e,o)},d(i){i&&f(t)}}}function Ve(r){let t,o,e,i,s,c,$,m;t=new G({props:{htmlfor:"validationTooltip02",$$slots:{default:[we]},$$scope:{ctx:r}}});function v(l,n){return l[1].lnm?Te:Ce}let _=v(r),a=_(r);return{c(){U(t.$$.fragment),o=E(),e=C("input"),i=E(),a.c(),s=B(),this.h()},l(l){P(t.$$.fragment,l),o=I(l),e=T(l,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,name:!0}),i=I(l),a.l(l),s=B(),this.h()},h(){u(e,"type","text"),u(e,"class","form-control"),u(e,"id","validationTooltip02"),u(e,"placeholder","Otto"),u(e,"name","lnm"),e.required=!0},m(l,n){S(t,l,n),p(l,o,n),p(l,e,n),R(e,r[0].lnm),p(l,i,n),a.m(l,n),p(l,s,n),c=!0,$||(m=[O(e,"change",r[4]),O(e,"blur",r[4]),O(e,"input",r[8])],$=!0)},p(l,n){const y={};n&8192&&(y.$$scope={dirty:n,ctx:l}),t.$set(y),n&1&&e.value!==l[0].lnm&&R(e,l[0].lnm),_===(_=v(l))&&a?a.p(l,n):(a.d(1),a=_(l),a&&(a.c(),a.m(s.parentNode,s)))},i(l){c||(q(t.$$.fragment,l),c=!0)},o(l){D(t.$$.fragment,l),c=!1},d(l){N(t,l),l&&f(o),l&&f(e),l&&f(i),a.d(l),l&&f(s),$=!1,K(m)}}}function Le(r){let t;return{c(){t=g("Username")},l(o){t=k(o,"Username")},m(o,e){p(o,t,e)},d(o){o&&f(t)}}}function Ee(r){let t,o;return{c(){t=C("div"),o=g("Looks good!"),this.h()},l(e){t=T(e,"DIV",{class:!0});var i=L(t);o=k(i,"Looks good!"),i.forEach(f),this.h()},h(){u(t,"class","valid-tooltip")},m(e,i){p(e,t,i),h(t,o)},p:Q,d(e){e&&f(t)}}}function Ie(r){let t,o=r[1].unm+"",e;return{c(){t=C("div"),e=g(o),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=L(t);e=k(s,o),s.forEach(f),this.h()},h(){u(t,"class","invalid-tooltip")},m(i,s){p(i,t,s),h(t,e)},p(i,s){s&2&&o!==(o=i[1].unm+"")&&W(e,o)},d(i){i&&f(t)}}}function Ue(r){let t,o,e,i,s,c,$,m,v,_,a,l;t=new G({props:{htmlfor:"validationTooltipUsername",$$slots:{default:[Le]},$$scope:{ctx:r}}});function n(d,b){return d[1].unm?Ie:Ee}let y=n(r),V=y(r);return{c(){U(t.$$.fragment),o=E(),e=C("div"),i=C("div"),s=C("span"),c=g("@"),$=E(),m=C("input"),v=E(),V.c(),this.h()},l(d){P(t.$$.fragment,d),o=I(d),e=T(d,"DIV",{class:!0});var b=L(e);i=T(b,"DIV",{class:!0});var M=L(i);s=T(M,"SPAN",{class:!0,id:!0});var H=L(s);c=k(H,"@"),H.forEach(f),M.forEach(f),$=I(b),m=T(b,"INPUT",{type:!0,class:!0,name:!0,id:!0,placeholder:!0}),v=I(b),V.l(b),b.forEach(f),this.h()},h(){u(s,"class","input-group-text"),u(s,"id","validationTooltipUsernamePrepend"),u(i,"class","input-group-prepend"),u(m,"type","text"),u(m,"class","form-control"),u(m,"name","unm"),u(m,"id","validationTooltipUsername"),u(m,"placeholder","Username"),m.required=!0,u(e,"class","input-group")},m(d,b){S(t,d,b),p(d,o,b),p(d,e,b),h(e,i),h(i,s),h(s,c),h(e,$),h(e,m),R(m,r[0].unm),h(e,v),V.m(e,null),_=!0,a||(l=[O(m,"change",r[4]),O(m,"blur",r[4]),O(m,"input",r[9])],a=!0)},p(d,b){const M={};b&8192&&(M.$$scope={dirty:b,ctx:d}),t.$set(M),b&1&&m.value!==d[0].unm&&R(m,d[0].unm),y===(y=n(d))&&V?V.p(d,b):(V.d(1),V=y(d),V&&(V.c(),V.m(e,null)))},i(d){_||(q(t.$$.fragment,d),_=!0)},o(d){D(t.$$.fragment,d),_=!1},d(d){N(t,d),d&&f(o),d&&f(e),V.d(),a=!1,K(l)}}}function Pe(r){let t;return{c(){t=g("City")},l(o){t=k(o,"City")},m(o,e){p(o,t,e)},d(o){o&&f(t)}}}function Se(r){let t,o;return{c(){t=C("div"),o=g("Looks good!"),this.h()},l(e){t=T(e,"DIV",{class:!0});var i=L(t);o=k(i,"Looks good!"),i.forEach(f),this.h()},h(){u(t,"class","valid-tooltip")},m(e,i){p(e,t,i),h(t,o)},p:Q,d(e){e&&f(t)}}}function qe(r){let t,o=r[1].city+"",e;return{c(){t=C("div"),e=g(o),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=L(t);e=k(s,o),s.forEach(f),this.h()},h(){u(t,"class","invalid-tooltip")},m(i,s){p(i,t,s),h(t,e)},p(i,s){s&2&&o!==(o=i[1].city+"")&&W(e,o)},d(i){i&&f(t)}}}function De(r){let t,o,e,i,s,c,$,m;t=new G({props:{htmlfor:"validationTooltip03",$$slots:{default:[Pe]},$$scope:{ctx:r}}});function v(l,n){return l[1].city?qe:Se}let _=v(r),a=_(r);return{c(){U(t.$$.fragment),o=E(),e=C("input"),i=E(),a.c(),s=B(),this.h()},l(l){P(t.$$.fragment,l),o=I(l),e=T(l,"INPUT",{type:!0,class:!0,name:!0,id:!0,placeholder:!0}),i=I(l),a.l(l),s=B(),this.h()},h(){u(e,"type","text"),u(e,"class","form-control"),u(e,"name","city"),u(e,"id","validationTooltip03"),u(e,"placeholder","City"),e.required=!0},m(l,n){S(t,l,n),p(l,o,n),p(l,e,n),R(e,r[0].city),p(l,i,n),a.m(l,n),p(l,s,n),c=!0,$||(m=[O(e,"change",r[4]),O(e,"blur",r[4]),O(e,"input",r[10])],$=!0)},p(l,n){const y={};n&8192&&(y.$$scope={dirty:n,ctx:l}),t.$set(y),n&1&&e.value!==l[0].city&&R(e,l[0].city),_===(_=v(l))&&a?a.p(l,n):(a.d(1),a=_(l),a&&(a.c(),a.m(s.parentNode,s)))},i(l){c||(q(t.$$.fragment,l),c=!0)},o(l){D(t.$$.fragment,l),c=!1},d(l){N(t,l),l&&f(o),l&&f(e),l&&f(i),a.d(l),l&&f(s),$=!1,K(m)}}}function Ne(r){let t;return{c(){t=g("State")},l(o){t=k(o,"State")},m(o,e){p(o,t,e)},d(o){o&&f(t)}}}function Oe(r){let t,o;return{c(){t=C("div"),o=g("Looks good!"),this.h()},l(e){t=T(e,"DIV",{class:!0});var i=L(t);o=k(i,"Looks good!"),i.forEach(f),this.h()},h(){u(t,"class","valid-tooltip")},m(e,i){p(e,t,i),h(t,o)},p:Q,d(e){e&&f(t)}}}function Fe(r){let t,o=r[1].stateV+"",e;return{c(){t=C("div"),e=g(o),this.h()},l(i){t=T(i,"DIV",{class:!0});var s=L(t);e=k(s,o),s.forEach(f),this.h()},h(){u(t,"class","invalid-tooltip")},m(i,s){p(i,t,s),h(t,e)},p(i,s){s&2&&o!==(o=i[1].stateV+"")&&W(e,o)},d(i){i&&f(t)}}}function Me(r){let t,o,e,i,s,c,$,m;t=new G({props:{htmlfor:"validationTooltip04",$$slots:{default:[Ne]},$$scope:{ctx:r}}});function v(l,n){return l[1].stateV?Fe:Oe}let _=v(r),a=_(r);return{c(){U(t.$$.fragment),o=E(),e=C("input"),i=E(),a.c(),s=B(),this.h()},l(l){P(t.$$.fragment,l),o=I(l),e=T(l,"INPUT",{type:!0,name:!0,class:!0,id:!0,placeholder:!0}),i=I(l),a.l(l),s=B(),this.h()},h(){u(e,"type","text"),u(e,"name","stateV"),u(e,"class","form-control"),u(e,"id","validationTooltip04"),u(e,"placeholder","State"),e.required=!0},m(l,n){S(t,l,n),p(l,o,n),p(l,e,n),R(e,r[0].stateV),p(l,i,n),a.m(l,n),p(l,s,n),c=!0,$||(m=[O(e,"change",r[4]),O(e,"blur",r[4]),O(e,"input",r[11])],$=!0)},p(l,n){const y={};n&8192&&(y.$$scope={dirty:n,ctx:l}),t.$set(y),n&1&&e.value!==l[0].stateV&&R(e,l[0].stateV),_===(_=v(l))&&a?a.p(l,n):(a.d(1),a=_(l),a&&(a.c(),a.m(s.parentNode,s)))},i(l){c||(q(t.$$.fragment,l),c=!0)},o(l){D(t.$$.fragment,l),c=!1},d(l){N(t,l),l&&f(o),l&&f(e),l&&f(i),a.d(l),l&&f(s),$=!1,K(m)}}}function Re(r){let t,o,e,i,s,c,$,m,v,_;return t=new X({props:{md:"4",class:"position-relative",$$slots:{default:[ye]},$$scope:{ctx:r}}}),e=new X({props:{md:"4",class:"position-relative",$$slots:{default:[Ve]},$$scope:{ctx:r}}}),s=new X({props:{md:"4",class:"position-relative",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),$=new X({props:{md:"6",class:"position-relative",$$slots:{default:[De]},$$scope:{ctx:r}}}),v=new X({props:{md:"6",class:"position-relative",$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){U(t.$$.fragment),o=E(),U(e.$$.fragment),i=E(),U(s.$$.fragment),c=E(),U($.$$.fragment),m=E(),U(v.$$.fragment)},l(a){P(t.$$.fragment,a),o=I(a),P(e.$$.fragment,a),i=I(a),P(s.$$.fragment,a),c=I(a),P($.$$.fragment,a),m=I(a),P(v.$$.fragment,a)},m(a,l){S(t,a,l),p(a,o,l),S(e,a,l),p(a,i,l),S(s,a,l),p(a,c,l),S($,a,l),p(a,m,l),S(v,a,l),_=!0},p(a,l){const n={};l&8195&&(n.$$scope={dirty:l,ctx:a}),t.$set(n);const y={};l&8195&&(y.$$scope={dirty:l,ctx:a}),e.$set(y);const V={};l&8195&&(V.$$scope={dirty:l,ctx:a}),s.$set(V);const d={};l&8195&&(d.$$scope={dirty:l,ctx:a}),$.$set(d);const b={};l&8195&&(b.$$scope={dirty:l,ctx:a}),v.$set(b)},i(a){_||(q(t.$$.fragment,a),q(e.$$.fragment,a),q(s.$$.fragment,a),q($.$$.fragment,a),q(v.$$.fragment,a),_=!0)},o(a){D(t.$$.fragment,a),D(e.$$.fragment,a),D(s.$$.fragment,a),D($.$$.fragment,a),D(v.$$.fragment,a),_=!1},d(a){N(t,a),a&&f(o),N(e,a),a&&f(i),N(s,a),a&&f(c),N($,a),a&&f(m),N(v,a)}}}function Be(r){let t,o,e,i,s="{valid|invalid-}",c,$,m,v,_,a="{valid|invalid-}",l,n,y,V,d,b,M,H,J,le,Z,Y,j,x,oe,ie;return M=new fe({props:{$$slots:{default:[Re]},$$scope:{ctx:r}}}),j=new ve({props:{code:r[6],id:"tooltipform"}}),{c(){t=C("p"),o=g(`If your form layout allows it, you can swap the
            `),e=C("code"),i=g("."),c=g(s),$=g("feedback"),m=g(` classes for
            `),v=C("code"),_=g("."),l=g(a),n=g("-tooltip"),y=g(` classes to
            display validation feedback in a styled tooltip.`),V=E(),d=C("div"),b=C("form"),U(M.$$.fragment),H=E(),J=C("button"),le=g("Submit form"),Z=E(),Y=C("div"),U(j.$$.fragment),this.h()},l(w){t=T(w,"P",{class:!0});var F=L(t);o=k(F,`If your form layout allows it, you can swap the
            `),e=T(F,"CODE",{});var A=L(e);i=k(A,"."),c=k(A,s),$=k(A,"feedback"),A.forEach(f),m=k(F,` classes for
            `),v=T(F,"CODE",{});var ee=L(v);_=k(ee,"."),l=k(ee,a),n=k(ee,"-tooltip"),ee.forEach(f),y=k(F,` classes to
            display validation feedback in a styled tooltip.`),F.forEach(f),V=I(w),d=T(w,"DIV",{class:!0});var se=L(d);b=T(se,"FORM",{class:!0});var te=L(b);P(M.$$.fragment,te),H=I(te),J=T(te,"BUTTON",{class:!0,type:!0});var ae=L(J);le=k(ae,"Submit form"),ae.forEach(f),te.forEach(f),se.forEach(f),Z=I(w),Y=T(w,"DIV",{class:!0});var re=L(Y);P(j.$$.fragment,re),re.forEach(f),this.h()},h(){u(t,"class","text-muted"),u(J,"class","btn btn-primary"),u(J,"type","submit"),u(b,"class","needs-validation was-validated"),u(d,"class","live-preview"),u(Y,"class","d-none code-view")},m(w,F){p(w,t,F),h(t,o),h(t,e),h(e,i),h(e,c),h(e,$),h(t,m),h(t,v),h(v,_),h(v,l),h(v,n),h(t,y),p(w,V,F),p(w,d,F),h(d,b),S(M,b,null),h(b,H),h(b,J),h(J,le),p(w,Z,F),p(w,Y,F),S(j,Y,null),x=!0,oe||(ie=O(b,"submit",r[5]),oe=!0)},p(w,F){const A={};F&8195&&(A.$$scope={dirty:F,ctx:w}),M.$set(A)},i(w){x||(q(M.$$.fragment,w),q(j.$$.fragment,w),x=!0)},o(w){D(M.$$.fragment,w),D(j.$$.fragment,w),x=!1},d(w){w&&f(t),w&&f(V),w&&f(d),N(M),w&&f(Z),w&&f(Y),N(j),oe=!1,ie()}}}function Je(r){let t,o,e,i;return t=new he({props:{title:"Svelte Validation(Tooltips)"}}),e=new _e({props:{$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){U(t.$$.fragment),o=E(),U(e.$$.fragment)},l(s){P(t.$$.fragment,s),o=I(s),P(e.$$.fragment,s)},m(s,c){S(t,s,c),p(s,o,c),S(e,s,c),i=!0},p(s,c){const $={};c&8195&&($.$$scope={dirty:c,ctx:s}),e.$set($)},i(s){i||(q(t.$$.fragment,s),q(e.$$.fragment,s),i=!0)},o(s){D(t.$$.fragment,s),D(e.$$.fragment,s),i=!1},d(s){N(t,s),s&&f(o),N(e,s)}}}function Ye(r){let t,o;return t=new $e({props:{$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){U(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){S(t,e,i),o=!0},p(e,i){const s={};i&8195&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){o||(q(t.$$.fragment,e),o=!0)},o(e){D(t.$$.fragment,e),o=!1},d(e){N(t,e)}}}function je(r){let t,o;return t=new X({props:{$$slots:{default:[Ye]},$$scope:{ctx:r}}}),{c(){U(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){S(t,e,i),o=!0},p(e,i){const s={};i&8195&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){o||(q(t.$$.fragment,e),o=!0)},o(e){D(t.$$.fragment,e),o=!1},d(e){N(t,e)}}}function Ae(r){let t,o;return t=new fe({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){U(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){S(t,e,i),o=!0},p(e,[i]){const s={};i&8195&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){o||(q(t.$$.fragment,e),o=!0)},o(e){D(t.$$.fragment,e),o=!1},d(e){N(t,e)}}}function He(r,t,o){let e,i;const{form:s,errors:c,state:$,handleChange:m,handleSubmit:v}=de({initialValues:{fnm:"Mark",lnm:"Otto",unm:"",city:"",stateV:""},validationSchema:me().shape({fnm:z().required("Please Enter Valid First Name"),lnm:z().required("Please Enter Valid Last Name"),unm:z().required("Please Enter User Name"),city:z().required("Please Enter Your City"),stateV:z().required("Please Enter Your State")}),onSubmit:d=>{alert(JSON.stringify(d))}});ne(r,s,d=>o(0,e=d)),ne(r,c,d=>o(1,i=d));const _=`<form
    class="needs-validation was-validated"
    on:submit={handleSubmit}
>
    <Row>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltip01">
            First name
        </Label>
        <input
            type="text"
            class="form-control"
            id="validationTooltip01"
            placeholder="Mark"
            name="fnm"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.fnm}
            required
        />
        {#if $errors.fnm}
        <div class="invalid-tooltip">{$errors.fnm}</div>
        {:else}
        <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltip02">Last name</Label>
        <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            placeholder="Otto"
            name="lnm"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.lnm}
            required
        />
        {#if $errors.lnm}
            <div class="invalid-tooltip">{$errors.lnm}</div>
        {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltipUsername">
            Username
        </Label>
        <div class="input-group">
            <div class="input-group-prepend">
            <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
            >
                @
            </span>
            </div>
            <input
                type="text"
                class="form-control"
                name="unm"
                id="validationTooltipUsername"
                placeholder="Username"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.unm}
                required
            />
            {#if $errors.unm}
            <div class="invalid-tooltip">{$errors.unm}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
        </div>
    </Col>
    <Col md="6" class="position-relative">
        
        <Label htmlfor="validationTooltip03">City</Label>
        <input
            type="text"
            class="form-control"
            name="city"
            id="validationTooltip03"
            placeholder="City"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.city}
            required
        />
        {#if $errors.city}
            <div class="invalid-tooltip">{$errors.city}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="6" class="position-relative">
        
        <Label htmlfor="validationTooltip04">State</Label>
        <input
            type="text"
            name="stateV"
            class="form-control"
            id="validationTooltip04"
            placeholder="State"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.stateV}
            required
        />
        {#if $errors.stateV}
        <div class="invalid-tooltip">{$errors.stateV}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    </Row>
    <button class="btn btn-primary" type="submit">
    Submit form
    </button>
</form>`;function a(){e.fnm=this.value,s.set(e)}function l(){e.lnm=this.value,s.set(e)}function n(){e.unm=this.value,s.set(e)}function y(){e.city=this.value,s.set(e)}function V(){e.stateV=this.value,s.set(e)}return[e,i,s,c,m,v,_,a,l,n,y,V]}class Ke extends ue{constructor(t){super();pe(this,t,He,Ae,ce,{})}}export{Ke as default};
