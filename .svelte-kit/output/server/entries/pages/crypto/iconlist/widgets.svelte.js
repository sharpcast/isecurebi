import { c as create_ssr_component, e as each, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(MOCK_DATA.CryptoicoWidgets, (item) => {
    return `<div class="${"col"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "d-flex" }, {}, {
          default: () => {
            return `<div class="${"flex-grow-1"}"><h4>${escape(item.counter)}</h4>
					<h6 class="${"text-muted fs-13 mb-0"}">${escape(item.label)}</h6></div>
				<div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-soft-" + escape(item.iconClass, true) + " text-" + escape(item.iconClass, true) + " fs-22 rounded"}"><i${add_attribute("class", item.icon, 0)}></i>
					</div></div>
			`;
          }
        })}
		`;
      }
    })}
	</div>`;
  })}`;
});
export { Widgets as default };
