import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import MarkerCharts from "./MarkerCharts.svelte.js";
const MarketGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
                class: "border-0 align-items-center d-flex"
              }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Market Graph</h4>
                <div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">1H
                    </button>
                    <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">7D
                    </button>
                    <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">1M
                    </button>
                    <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">1Y
                    </button>
                    <button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">ALL
                    </button></div>`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `<div class="${"bg-soft-light border-top-dashed border border-start-0 border-end-0 border-bottom-dashed py-3 px-4"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                        default: () => {
                          return `<div class="${"d-flex flex-wrap gap-4 align-items-center"}"><h5 class="${"fs-19 mb-0"}">0.014756</h5>
                                <p class="${"fw-medium text-muted mb-0"}">$75.69 <span class="${"text-success fs-11 ms-1"}">+1.99%</span></p>
                                <p class="${"fw-medium text-muted mb-0"}">High <span class="${"text-dark fs-11 ms-1"}">0.014578</span></p>
                                <p class="${"fw-medium text-muted mb-0"}">Low <span class="${"text-dark fs-11 ms-1"}">0.0175489</span></p></div>`;
                        }
                      })}
                        ${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                        default: () => {
                          return `<div class="${"d-flex"}"><div class="${"d-flex justify-content-end text-end flex-wrap gap-4 ms-auto"}"><div class="${"pe-3"}"><h6 class="${"mb-2 text-truncate text-muted"}">Total Balance</h6>
                                        <h5 class="${"mb-0"}">$72.8k</h5></div>
                                    <div class="${"pe-3"}"><h6 class="${"mb-2 text-muted"}">Profit</h6>
                                        <h5 class="${"text-success mb-0"}">+$49.7k</h5></div>
                                    <div class="${"pe-3"}"><h6 class="${"mb-2 text-muted"}">Loss</h6>
                                        <h5 class="${"text-danger mb-0"}">-$23.1k</h5></div></div></div>`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}
            <div class="${"card-body p-0 pb-3"}"><div id="${"Market_chart"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(MarkerCharts, "MarkerCharts").$$render($$result, {
                dataColors: ["--vz-success", "--vz-danger"]
              }, {}, {})}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { MarketGraph as default };
