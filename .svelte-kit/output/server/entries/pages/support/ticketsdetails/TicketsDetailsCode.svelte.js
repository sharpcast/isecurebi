import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { P as Prism } from "../../../../chunks/Prism-c9306ada.js";
const TicketsDetailsCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ticketCode = `var app = document.getElementById("app");
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
})).element);`;
  return `${validate_component(Prism, "PrismCode").$$render($$result, { code: ticketCode, id: "ticketCode" }, {}, {})}`;
});
export { TicketsDetailsCode as default };
