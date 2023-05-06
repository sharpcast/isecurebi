import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { A as AlertTriangleIcon } from "../../../chunks/AlertTriangleIcon-fbe21b84.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { u as userillustarator } from "../../../chunks/user-illustarator-2-5db54d81.js";
const UpgradeAccountNotise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Alert, "Alert").$$render($$result, {
                    class: "alert alert-warning border-0 rounded-0 m-0 d-flex align-items-center",
                    role: "alert"
                  }, {}, {
                    default: () => {
                      return `${validate_component(AlertTriangleIcon, "AlertTriangleIcon").$$render($$result, { class: "text-warning me-2 icon-sm" }, {}, {})}
                    <div class="${"flex-grow-1 text-truncate"}">Your free trial expired in <b>17</b> days.
                    </div>
                    <div class="${"flex-shrink-0"}"><a href="${"/pages/pricing/pages-pricing"}" class="${"text-reset text-decoration-underline"}"><b>Upgrade</b></a></div>`;
                    }
                  })}

                ${validate_component(Row, "Row").$$render($$result, { class: "align-items-end" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 8 }, {}, {
                        default: () => {
                          return `<div class="${"p-3"}"><p class="${"fs-16 lh-base"}">Upgrade your plan from a <span class="${"fw-semibold"}">Free
                                trial</span>, to \u2018Premium Plan\u2019 <i class="${"mdi mdi-arrow-right"}"></i></p>
                            <div class="${"mt-3"}"><a href="${"/pages/pricing/pages-pricing"}" class="${"btn btn-success"}">Upgrade Account!</a></div></div>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `<div class="${"px-3"}"><img${add_attribute("src", userillustarator, 0)} class="${"img-fluid"}" alt="${""}"></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { UpgradeAccountNotise as default };
