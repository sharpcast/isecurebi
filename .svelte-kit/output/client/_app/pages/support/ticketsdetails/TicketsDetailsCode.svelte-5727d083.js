import{S as n,i as a,s as p,w as d,x as i,y as m,J as c,q as u,o as l,B as f}from"../../../chunks/vendor-bc251f35.js";import{P as $}from"../../../chunks/Prism-442cc101.js";function g(r){let e,o;return e=new $({props:{code:r[0],id:"ticketCode"}}),{c(){d(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){m(e,t,s),o=!0},p:c,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){l(e.$$.fragment,t),o=!1},d(t){f(e,t)}}}function _(r){return[`var app = document.getElementById("app");
var run = (model) => get(model, "users", () =>
    get(model, "posts",
    () => {
        model.users.forEach(user => model.userIdx[user.id] = user);
        app.innerText = '';
        model.posts.forEach(post =>
        app.appendChild(renderPost(post, model.userIdx[post.userId])));
    }));
app.appendChild(Wrapper.generate("button", "Load").click(() => run({
    userIdx: {}
})).element);`]}class h extends n{constructor(e){super();a(this,e,_,g,p,{})}}export{h as default};
