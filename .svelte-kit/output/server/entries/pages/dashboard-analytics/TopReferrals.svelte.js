import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
var illustrator = "data:image/png;base64,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";
const TopReferrals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Top Referrals Pages</h4>
            <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">Export Report
                </button></div>`;
            }
          })}

        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                    default: () => {
                      return `<h6 class="${"text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3"}">Total Referrals Page</h6>
                    <h4 class="${"fs- mb-0"}">725,800</h4>
                    <p class="${"mb-0 mt-2 text-muted"}"><span class="${"badge badge-soft-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> 15.72 %
                    </span> vs. previous month</p>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><img${add_attribute("src", illustrator, 0)} class="${"img-fluid"}" alt="${""}"></div>`;
                    }
                  })}`;
                }
              })}
            <div class="${"mt-3 pt-2"}"><div class="${"progress progress-lg rounded-pill"}">${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "primary", value: "25" }, {}, {})}
                    ${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "info", value: "18" }, {}, {})}
                    ${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "success", value: "22" }, {}, {})}
                    ${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "warning", value: "16" }, {}, {})}
                    ${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "danger", value: "19" }, {}, {})}</div></div>

            <div class="${"mt-3 pt-2"}"><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-primary me-2"}"></i>www.google.com</p></div>
                    <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">24.58%</p></div></div>
                <div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-info me-2"}"></i>www.youtube.com</p></div>
                    <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">17.51%</p></div></div>
                <div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-success me-2"}"></i>www.meta.com</p></div>
                    <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">23.05%</p></div></div>
                <div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-warning me-2"}"></i>www.medium.com</p></div>
                    <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">12.22%</p></div></div>
                <div class="${"d-flex"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-danger me-2"}"></i>Other</p></div>
                    <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">17.58%</p></div></div></div>

            <div class="${"mt-2 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">Show All</a></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { TopReferrals as default };
