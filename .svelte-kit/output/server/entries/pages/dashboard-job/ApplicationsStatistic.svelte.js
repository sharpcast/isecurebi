import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
const ApplicationsStatistic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
${validate_component(Col, "Col").$$render($$result, { xxl: 8 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
            class: "border-0 align-items-center d-flex"
          }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Applications Statistic
        </h4>
        <div><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">ALL
          </button>
          <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">1M
          </button>
          <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">6M
          </button>
          <button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">1Y
          </button></div>`;
            }
          })}

      ${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "p-0 border-0 bg-soft-light" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-0 text-center" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                    default: () => {
                      return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"3364"}">0</span></h5>
              <p class="${"text-muted mb-0"}">New Applications</p></div>`;
                    }
                  })}
          ${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                    default: () => {
                      return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"2804"}"></span></h5>
              <p class="${"text-muted mb-0"}">Interview</p></div>`;
                    }
                  })}
          ${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                    default: () => {
                      return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"2402"}"></span></h5>
              <p class="${"text-muted mb-0"}">Hired</p></div>`;
                    }
                  })}
          ${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                    default: () => {
                      return `<div class="${"p-3 border border-dashed border-start-0 border-end-0"}"><h5 class="${"mb-1 text-success"}"><span class="${"counter-value"}" data-target="${"8"}"></span>
                k
              </h5>
              <p class="${"text-muted mb-0"}">Total Applications</p></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

      ${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0 pb-2" }, {}, {
            default: () => {
              return `<div class="${"w-100"}"><div${add_attribute("id", "applicationStatistic", 0)} class="${"apex-charts"}" dir="${"ltr"}"></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { ApplicationsStatistic as default };
