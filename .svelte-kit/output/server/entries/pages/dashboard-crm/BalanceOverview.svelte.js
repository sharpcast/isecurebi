import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import BalanceOverviewCharts from "./BalanceOverviewCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const BalanceOverview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Balance Overview</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    tag: "a",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by: </span><span class="${"text-muted"}">Current Year<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
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
                          return `Last Week`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Month`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Current Year`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-0" }, {}, {
            default: () => {
              return `<ul class="${"list-inline main-chart text-center mb-0"}"><li class="${"list-inline-item chart-border-left me-0 border-0"}"><h4 class="${"text-primary"}">$584k <span class="${"text-muted d-inline-block fs-13 align-middle ms-2"}">Revenue</span></h4></li>
				<li class="${"list-inline-item chart-border-left me-0"}"><h4>$497k<span class="${"text-muted d-inline-block fs-13 align-middle ms-2"}">Expenses</span></h4></li>
				<li class="${"list-inline-item chart-border-left me-0"}"><h4><span data-plugin="${"counterup"}">3.6</span>%<span class="${"text-muted d-inline-block fs-13 align-middle ms-2"}">Profit Ratio</span></h4></li></ul>

			<div id="${"revenue-expenses-charts"}" dir="${"ltr"}">${validate_component(BalanceOverviewCharts, "BalanceOverviewCharts").$$render($$result, {
                dataColors: ["--vz-success", "--vz-danger"]
              }, {}, {})}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { BalanceOverview as default };
