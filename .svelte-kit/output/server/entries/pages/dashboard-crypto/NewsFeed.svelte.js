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
const NewsFeed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">News Feed</h4>
			<div><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">View all </button></div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${each(MOCK_DATA.newsFeed, (item) => {
                return `<div${add_attribute("class", item.id === 1 ? "d-flex align-middle" : "d-flex mt-4", 0)}><div class="${"flex-shrink-0"}"><img${add_attribute("src", item.img, 0)} class="${"rounded img-fluid"}" style="${"height: 60px"}" alt="${""}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}"><a${add_attribute("href", null, 0)} class="${"text-reset"}">${escape(item.caption)}</a></h6>
						<p class="${"text-muted fs-12 mb-0"}">${escape(item.date)} <i class="${"mdi mdi-circle-medium align-middle mx-1"}"></i>${escape(item.time)}
						</p></div>
				</div>`;
              })}
			<div class="${"mt-3 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">View all News</a></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { NewsFeed as default };
