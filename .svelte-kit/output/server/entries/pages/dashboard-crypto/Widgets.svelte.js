import { c as create_ssr_component, e as each, v as validate_component, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/crypto-26d55d11.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "../../../chunks/aave-961ba45c.js";
import "../../../chunks/eth-105a4f91.js";
import "../../../chunks/doge-aae7bd6c.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-3-4c804a8b.js";
import "../../../chunks/img-6-3ccff08f.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(MOCK_DATA.cyptoWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-light text-primary rounded-circle fs-3"}"><i${add_attribute("class", "align-middle " + item.icon, 0)}></i>
						</span></div>
					<div class="${"flex-grow-1 ms-3"}"><p class="${"text-uppercase fw-semibold fs-12 text-muted mb-1"}">${escape(item.label)}</p>

						<h4 class="${"mb-0"}">${escape(item.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>
						</h4></div>
					<div class="${"flex-shrink-0 align-self-end"}"><span${add_attribute("class", "badge badge-soft-" + item.badgeColor, 0)}><i${add_attribute("class", "align-middle me-1 " + item.badge, 0)}></i>${escape(item.percentage)} %<span></span></span>
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
