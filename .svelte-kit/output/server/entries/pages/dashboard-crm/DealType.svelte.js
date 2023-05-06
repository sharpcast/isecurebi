import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import DealTypeCharts from "./DealTypeCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const DealType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Deal Type</h4>
            <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                tag: "a",
                color: "",
                class: "text-reset dropdown-btn p-0",
                role: "button"
              }, {}, {
                default: () => {
                  return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by: </span><span class="${"text-muted"}">Monthly<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                }
              })}
                    ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                default: () => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `Today`;
                    }
                  })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `Weekly`;
                    }
                  })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `Monthly`;
                    }
                  })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `Yearly`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div></div>
        <div lass="${"card-body pb-0"}"><div id="${"deal-type-charts"}" dir="${"ltr"}">${validate_component(DealTypeCharts, "DealTypeCharts").$$render($$result, {
            dataColors: ["--vz-warning", "--vz-info", "--vz-primary"]
          }, {}, {})}</div></div>`;
        }
      })}`;
    }
  })}`;
});
export { DealType as default };
