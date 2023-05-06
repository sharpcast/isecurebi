import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-warning" }, {}, {
        default: () => {
          return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-3"}">My Portfolio</h5>
                <h2>$61,91,967<small class="${"text-muted fs-14"}">.29</small></h2>
                <p class="${"text-muted mb-0"}">$25,10,974 <small class="${"badge badge-soft-success"}"><i class="${"ri-arrow-right-up-line fs-13 align-bottom"}"></i>4.37%</small></p></div>
            <div class="${"flex-shrink-0"}"><i class="${"mdi mdi-wallet-outline text-primary h1"}"></i></div></div>`;
        }
      })}`;
    }
  })}
${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-3"}">Today&#39;s Profit</h5>
                <h2>$2,74,365<small class="${"text-muted fs-14"}">.84</small></h2>
                <p class="${"text-muted mb-0"}">$9,10,564 <small class="${"badge badge-soft-success"}"><i class="${"ri-arrow-right-up-line fs-13 align-bottom"}"></i>1.25%</small></p></div>
            <div class="${"flex-shrink-0"}"><i class="${"ri-hand-coin-line text-primary h1"}"></i></div></div>`;
        }
      })}`;
    }
  })}
${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-3"}">Overall Profit</h5>
                <h2>$32,67,120<small class="${"text-muted fs-14"}">.42</small></h2>
                <p class="${"text-muted mb-0"}">$18,22,730 <small class="${"badge badge-soft-success"}"><i class="${"ri-arrow-right-up-line fs-13 align-bottom"}"></i>8.34%</small></p></div>
            <div class="${"flex-shrink-0"}"><i class="${"ri-line-chart-line text-primary h1"}"></i></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { Widgets as default };
