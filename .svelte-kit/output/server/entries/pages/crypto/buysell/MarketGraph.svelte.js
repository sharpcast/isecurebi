import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
const MarketGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
            class: "border-0 align-items-center d-flex"
          }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Market Graph</h4>
			<div><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">1H
				</button>
				<button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">7D
				</button>
				<button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">1M
				</button>
				<button type="${"button"}" class="${"btn btn-soft-secondary btn-sm me-1"}">1Y
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
                      return `<div class="${"d-flex flex-wrap gap-4 align-items-center"}"><div><h3 class="${"fs-19"}">$46,959.<small class="${"fs-14 text-muted"}">00</small></h3>
								<p class="${"text-muted text-uppercase fw-medium mb-0"}">Bitcoin (BTC) <small class="${"badge badge-soft-success"}"><i class="${"ri-arrow-right-up-line align-bottom"}"></i> 2.15%</small></p></div></div>`;
                    }
                  })}
					${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"d-flex justify-content-end text-end flex-wrap gap-4 ms-auto"}"><div class="${"pe-3"}"><h6 class="${"mb-2 text-muted"}">High</h6>
									<h5 class="${"text-success mb-0"}">$28,722.76
									</h5></div>
								<div class="${"pe-3"}"><h6 class="${"mb-2 text-muted"}">Low</h6>
									<h5 class="${"text-danger mb-0"}">$68,789.63</h5></div>
								<div><h6 class="${"mb-2 text-muted"}">Market Volume
									</h6>
									<h5 class="${"text-danger mb-0"}">$888,411,910
									</h5></div></div></div>`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0 pb-3" }, {}, {
            default: () => {
              return `<div dir="${"ltr"}"><div id="${"marketgraph"}" class="${"apex-charts"}" dir="${"ltr"}"></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { MarketGraph as default };
