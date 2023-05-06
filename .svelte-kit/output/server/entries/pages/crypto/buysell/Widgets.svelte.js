import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { C as Counter } from "../../../../chunks/counter-768545ac.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}

${each(MOCK_DATA.buysellWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { xl: 3, sm: 6 }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"text-muted mb-3"}">${escape(item.title)}</h6>
						<h2 class="${"mb-0"}">$<span class="${"counter-value"}" data-target="${"243"}"></span><small class="${"text-muted fs-13"}">.10k</small>
						</h2></div>
					<div class="${"flex-shrink-0 avatar-sm"}"><div${add_attribute("class", "avatar-title fs-22 rounded bg-soft-" + item.iconClass + " text-" + item.iconClass, 0)}><i${add_attribute("class", item.icon, 0)}></i></div>
					</div></div>
			`;
              }
            })}
		`;
          }
        })}
	`;
      }
    })}`;
  })}`;
});
export { Widgets as default };
