import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import PrjectsStatusCharts from "./PrjectsStatusCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const ProjectsStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, lg: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Projects Status</h4>
            <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "dropdown-btn text-muted p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `All Time <i class="${"mdi mdi-chevron-down ms-1"}"></i>`;
                    }
                  })}
                    ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `All Time`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 7 Days`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 30 Days`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 90 Days`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}

        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div id="${"prjects-status"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(PrjectsStatusCharts, "PrjectsStatusCharts").$$render($$result, {
                dataColors: ["--vz-success", "--vz-primary", "--vz-warning", "--vz-danger"]
              }, {}, {})}</div>
            <div class="${"mt-3"}"><div class="${"d-flex justify-content-center align-items-center mb-4"}"><h2 class="${"me-3 ff-secondary mb-0"}">258</h2>
                    <div><p class="${"text-muted mb-0"}">Total Projects</p>
                        <p class="${"text-success fw-medium mb-0"}"><span class="${"badge badge-soft-success p-1 rounded-circle"}"><i class="${"ri-arrow-right-up-line"}"></i></span> +3 New
                        </p></div></div>

                <div class="${"d-flex justify-content-between border-bottom border-bottom-dashed py-2"}"><p class="${"fw-medium mb-0"}"><i class="${"ri-checkbox-blank-circle-fill text-success align-middle me-2"}"></i> Completed</p>
                    <div><span class="${"text-muted pe-5"}">125 Projects</span>
                        <span class="${"text-success fw-medium fs-12"}">15870hrs</span></div></div>
                <div class="${"d-flex justify-content-between border-bottom border-bottom-dashed py-2"}"><p class="${"fw-medium mb-0"}"><i class="${"ri-checkbox-blank-circle-fill text-primary align-middle me-2"}"></i> In Progress</p>
                    <div><span class="${"text-muted pe-5"}">42 Projects</span>
                        <span class="${"text-success fw-medium fs-12"}">243hrs</span></div></div>
                <div class="${"d-flex justify-content-between border-bottom border-bottom-dashed py-2"}"><p class="${"fw-medium mb-0"}"><i class="${"ri-checkbox-blank-circle-fill text-warning align-middle me-2"}"></i> Yet to Start</p>
                    <div><span class="${"text-muted pe-5"}">58 Projects</span>
                        <span class="${"text-success fw-medium fs-12"}">~2050hrs</span></div></div>
                <div class="${"d-flex justify-content-between py-2"}"><p class="${"fw-medium mb-0"}"><i class="${"ri-checkbox-blank-circle-fill text-danger align-middle me-2"}"></i> Cancelled</p>
                    <div><span class="${"text-muted pe-5"}">89 Projects</span>
                        <span class="${"text-success fw-medium fs-12"}">~900hrs</span></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { ProjectsStatus as default };
