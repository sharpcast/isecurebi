import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-aeca7bd0.js";
import { C as Col } from "../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../chunks/Container-17fe0983.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../chunks/Row-d6617eb9.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-b8cb1602.js";
import Widgets from "./Widgets.svelte.js";
import Revenue from "./Revenue.svelte.js";
import RecentActivity from "./RecentActivity.svelte.js";
import "../../../chunks/Card-4d474cdd.js";
import "../../../chunks/CardBody-908b7052.js";
import "../../../chunks/dashboardEcommerce-24a648c7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-3-138d7757.js";
import "../../../chunks/CardHeader-bad9c301.js";
import "./DashboardEcommerceCharts.svelte.js";
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Dashboard",
        pageTitle: "Dashboards"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"h-100"}">
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Widgets, "Widget").$$render($$result, {}, {}, {})}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Revenue, "Revenue").$$render($$result, {}, {}, {})}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
			${validate_component(RecentActivity, "RecentActivity").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard as default };
