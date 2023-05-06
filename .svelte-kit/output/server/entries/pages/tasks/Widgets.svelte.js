import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import { M as MOCK_DATA } from "../../../chunks/taskList-48590346.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-9-f5d371f4.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/img-7-4861de06.js";
import "../../../chunks/img-4-f8adc4d4.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}

${each(MOCK_DATA.taskWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { sm: 6, xxl: 3 }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">${escape(item.label)}</p>
						<h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}</h2>
						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-" + escape(item.badgeClass, true) + " mb-0"}"><i class="${escape(item.badge, true) + " align-middle"}"></i> ${escape(item.percentage)}</span> vs. previous month
						</p></div>
					<div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-" + escape(item.iconClass, true) + " text-" + escape(item.iconClass, true) + " rounded-circle fs-4"}"><i${add_attribute("class", item.icon, 0)}></i>
							</span></div>
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
