import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
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
const TopPerformers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, lg: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Top Performers</h4>
			<div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-soft-info btn-sm"}">1H </button>
				<button type="${"button"}" class="${"btn btn-soft-info btn-sm"}">1D </button>
				<button type="${"button"}" class="${"btn btn-soft-info btn-sm"}">7D </button>
				<button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">1M </button></div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
            default: () => {
              return `<ul class="${"list-group list-group-flush border-dashed mb-0"}">${each(MOCK_DATA.topPerformers, (item) => {
                return `<li class="${"list-group-item d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", item.img, 0)} class="${"avatar-xs"}" alt="${""}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">${escape(item.coinName)}</h6>
							<p class="${"text-muted mb-0"}">$${escape(item.marketCap)} Billions</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"fs-14 mb-1"}">$${escape(item.price)}</h6>
							<p${add_attribute("class", "fs-12 mb-0 text-" + item.textColor, 0)}>${escape(item.change)} (${escape(item.percentage)})</p></div>
					</li>`;
              })}</ul>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { TopPerformers as default };
