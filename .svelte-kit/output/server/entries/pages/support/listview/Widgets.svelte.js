import { c as create_ssr_component, e as each, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ticketsWidgets } = $$props;
  if ($$props.ticketsWidgets === void 0 && $$bindings.ticketsWidgets && ticketsWidgets !== void 0)
    $$bindings.ticketsWidgets(ticketsWidgets);
  return `${each(ticketsWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">${escape(item.title)}</p>
                    <h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}</h2>
                    <p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-" + escape(item.percentageClass, true) + " mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> ${escape(item.percentage)}</span> vs. previous month
                    </p></div>
                <div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info text-info rounded-circle fs-4"}"><i${add_attribute("class", item.icon, 0)}></i>
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
