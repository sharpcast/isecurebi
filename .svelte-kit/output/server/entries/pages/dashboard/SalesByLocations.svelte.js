import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { M as Map } from "../../../chunks/Map-45314136.js";
const SalesByLocations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Sales by Locations</h4>
			<div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">Export Report </button></div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div style="${"height: 269px"}">${validate_component(Map, "Map").$$render($$result, { latitude: -34.397, longitude: 150.644 }, {}, {})}</div>

			<div class="${"px-2 py-2 mt-1"}"><p class="${"mb-1"}">Canada <span class="${"float-end"}">75%</span></p>

				${validate_component(Progress, "Progress").$$render($$result, {
                color: "primary",
                value: 75,
                class: "mt-2",
                style: "height : 6px"
              }, {}, {})}

				<p class="${"mt-3 mb-1"}">Greenland <span class="${"float-end"}">47%</span></p>

				${validate_component(Progress, "Progress").$$render($$result, {
                value: 47,
                class: "mt-2",
                style: "height : 6px"
              }, {}, {})}

				<p class="${"mt-3 mb-1"}">Russia <span class="${"float-end"}">82%</span></p>

				${validate_component(Progress, "Progress").$$render($$result, {
                value: 82,
                class: "mt-2",
                style: "height : 6px"
              }, {}, {})}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { SalesByLocations as default };
