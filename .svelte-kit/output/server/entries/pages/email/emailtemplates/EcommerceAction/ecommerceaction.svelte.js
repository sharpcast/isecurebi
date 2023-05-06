import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import InvoiceAction from "./InvoiceAction.svelte.js";
import FeedbackAction from "./FeedbackAction.svelte.js";
import RatingTemplate from "./RatingTemplate.svelte.js";
import "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Row-089822f8.js";
import "../../../../../chunks/Link-71b36253.js";
import "../../../../../chunks/logo-dark-ec4d2828.js";
import "../../../../../chunks/img-1-6f6b648d.js";
import "../../../../../chunks/img-2-4d0b6815.js";
import "../../../../../chunks/img-3-6f709142.js";
const Ecommerceaction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ecommerce Action | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Ecommerce Action",
        pageTitle: "Email"
      }, {}, {})}
        ${validate_component(InvoiceAction, "InvoiceAction").$$render($$result, {}, {}, {})}
        ${validate_component(FeedbackAction, "FeedbackAction").$$render($$result, {}, {}, {})}
        ${validate_component(RatingTemplate, "RatingTemplate").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Ecommerceaction as default };
