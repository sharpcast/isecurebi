import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { C as Counter } from "../../../../chunks/counter-768545ac.js";
const Counter_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<section class="${"py-5 position-relative bg-light"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "text-center gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 3, class: "col-6" }, {}, {
            default: () => {
              return `<div><h2 class="${"mb-2"}"><span class="${"counter-value"}" data-target="${"100"}">0</span>+</h2>
                    <div class="${"text-muted"}">Projects Completed</div></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, class: "col-6" }, {}, {
            default: () => {
              return `<div><h2 class="${"mb-2"}"><span class="${"counter-value"}" data-target="${"24"}">0</span></h2>
                    <div class="${"text-muted"}">Win Awards</div></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, class: "col-6" }, {}, {
            default: () => {
              return `<div><h2 class="${"mb-2"}"><span class="${"counter-value"}" data-target="${"20.3"}">0</span>k</h2>
                    <div class="${"text-muted"}">Satisfied Clients</div></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, class: "col-6" }, {}, {
            default: () => {
              return `<div><h2 class="${"mb-2"}"><span class="${"counter-value"}" data-target="${"50"}">0</span></h2>
                    <div class="${"text-muted"}">Employees</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Counter_1 as default };
