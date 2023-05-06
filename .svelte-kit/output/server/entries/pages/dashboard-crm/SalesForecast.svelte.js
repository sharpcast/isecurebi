import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import DashboardCrmCharts from "./DashboardCrmCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const SalesForecast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Sales Forecast</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    color: "",
                    class: "text-reset dropdown-btn p-0"
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by: </span><span class="${"text-muted"}">Nov 2021<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { end: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Oct 2021`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Nov 2021`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Dec 2021`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Jan 2022`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		<div class="${"card-body pb-0"}"><div id="${"sales-forecast-chart"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(DashboardCrmCharts, "SalesForecastCharts").$$render($$result, {
            dataColors: ["--vz-primary", "--vz-success", "--vz-warning"]
          }, {}, {})}</div></div>`;
        }
      })}`;
    }
  })}`;
});
export { SalesForecast as default };
