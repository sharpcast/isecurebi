import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import Section from "./Section.svelte.js";
import Widgets from "./Widgets.svelte.js";
import Revenue from "./Revenue.svelte.js";
import SalesByLocations from "./SalesByLocations.svelte.js";
import BestSellingProducts from "./BestSellingProducts.svelte.js";
import TopSellers from "./TopSellers.svelte.js";
import StoreVisits from "./StoreVisits.svelte.js";
import RecentOrders from "./RecentOrders.svelte.js";
import RecentActivity from "./RecentActivity.svelte.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/Button-ba828d9c.js";
import "../../../chunks/Flatpickr-9498e32b.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/dashboardEcommerce-9ba23a89.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/img-1-6f6b648d.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/CardHeader-84e061db.js";
import "./DashboardEcommerceCharts.svelte.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/Map-45314136.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/ReviewSlider-5c633861.js";
import "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       */import "../../../chunks/mousewheel-b011c830.js";
import "../../../chunks/autoplay-ee87b360.js";
import "../../../chunks/img-8-1e4e4e71.js";
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Dashboard | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
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
              return `<div class="${"h-100"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {})}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Widgets, "Widget").$$render($$result, {}, {}, {})}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
                    default: () => {
                      return `${validate_component(Revenue, "Revenue").$$render($$result, {}, {}, {})}`;
                    }
                  })}
						${validate_component(SalesByLocations, "SalesByLocations").$$render($$result, {}, {}, {})}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(BestSellingProducts, "BestSellingProducts").$$render($$result, {}, {}, {})}
						${validate_component(TopSellers, "TopSellers").$$render($$result, {}, {}, {})}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(StoreVisits, "StoreVisits").$$render($$result, {
                    dataColors: [
                      "--vz-primary",
                      "--vz-success",
                      "--vz-warning",
                      "--vz-danger",
                      "--vz-info"
                    ]
                  }, {}, {})}
						${validate_component(RecentOrders, "RecentOrders").$$render($$result, {}, {}, {})}`;
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
