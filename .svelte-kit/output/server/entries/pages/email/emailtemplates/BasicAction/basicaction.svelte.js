import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import Basic from "./basic.svelte.js";
import SubscribeAction from "./SubscribeAction.svelte.js";
import EmailVerifyAction from "./EmailVerifyAction.svelte.js";
import PasswordChangeAction from "./PasswordChangeAction.svelte.js";
import "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Row-089822f8.js";
import "../../../../../chunks/logo-dark-ec4d2828.js";
import "../../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../../chunks/Link-71b36253.js";
const Basicaction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Basic Action | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Basic Action",
        pageTitle: "Basic Action"
      }, {}, {})}
        ${validate_component(Basic, "Basic").$$render($$result, {}, {}, {})}
        ${validate_component(SubscribeAction, "SubscribeAction").$$render($$result, {}, {}, {})}
        ${validate_component(EmailVerifyAction, "EmailVerifyAction").$$render($$result, {}, {}, {})}
        ${validate_component(PasswordChangeAction, "PasswordChangeAction").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Basicaction as default };
