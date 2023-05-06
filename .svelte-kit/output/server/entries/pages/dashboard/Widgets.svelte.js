import { c as create_ssr_component, e as each, v as validate_component, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardEcommerce-9ba23a89.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/img-1-6f6b648d.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(MOCK_DATA.ecomWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 overflow-hidden"}"><p class="${"text-uppercase fw-medium text-muted text-truncate mb-0"}">${escape(item.label)}</p></div>
					<div class="${"flex-shrink-0"}"><h5${add_attribute("class", "fs-14 mb-0 text-" + item.badgeClass, 0)}>${item.badge ? `<i${add_attribute("class", "fs-13 align-middle " + item.badge, 0)}></i>` : ``}
							${escape(item.percentage)} %
						</h5>
					</div></div>
				<div class="${"d-flex align-items-end justify-content-between mt-4"}"><div><h4 class="${"fs-22 fw-semibold ff-secondary mb-4"}">${escape(item.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}</h4>
						<a${add_attribute("href", null, 0)} class="${"text-decoration-underline"}">${escape(item.link)}</a></div>
					<div class="${"avatar-sm flex-shrink-0"}"><span${add_attribute("class", "avatar-title rounded fs-3 bg-soft-" + item.bgcolor, 0)}><i${add_attribute("class", `text-${item.bgcolor} ${item.icon}`, 0)}></i></span>
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
