import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { class: "mb-3 pb-1" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
        default: () => {
          return `<div class="${"d-flex align-items-lg-center flex-lg-row flex-column"}"><div class="${"flex-grow-1"}"><h4 class="${"fs-16 mb-1"}">Good Morning, Anna!</h4>
				<p class="${"text-muted mb-0"}">Here&#39;s what&#39;s happening with your store today.
				</p></div>
			<div class="${"mt-3 mt-lg-0"}"><form action="${"#"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3 mb-0 align-items-center" }, {}, {
            default: () => {
              return `<div class="${"col-sm-auto"}"><div class="${"input-group"}">${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                class: "form-control border-0 dash-filter-picker shadow",
                options: {
                  mode: "range",
                  dateFormat: "d M, Y",
                  defaultDate: ["01 Jan 2022", "31 Jan 2022"]
                }
              }, {}, {})}
								<div class="${"input-group-text bg-primary border-primary text-white"}"><i class="${"ri-calendar-2-line"}"></i></div></div></div>
						<div class="${"col-auto"}">${validate_component(Button, "Button").$$render($$result, {
                type: "button",
                color: "",
                class: "btn btn-soft-success"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-add-circle-line align-middle me-1"}"></i> Add Product`;
                }
              })}</div>
						<div class="${"col-auto"}">${validate_component(Button, "Button").$$render($$result, {
                type: "button",
                color: "",
                class: "btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-pulse-line"}"></i>`;
                }
              })}</div>`;
            }
          })}</form></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { Section as default };
