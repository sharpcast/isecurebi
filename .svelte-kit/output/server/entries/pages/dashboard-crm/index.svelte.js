import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import BalanceOverview from "./BalanceOverview.svelte.js";
import ClosingDeals from "./ClosingDeals.svelte.js";
import DealsStatus from "./DealsStatus.svelte.js";
import DealType from "./DealType.svelte.js";
import MyTasks from "./MyTasks.svelte.js";
import SalesForecast from "./SalesForecast.svelte.js";
import UpcomingActivities from "./UpcomingActivities.svelte.js";
import Widgets from "./Widgets.svelte.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "./BalanceOverviewCharts.svelte.js";
import "../../../chunks/dashboardcrm-c5028973.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "./DealTypeCharts.svelte.js";
import "../../../chunks/Label-1c7919d2.js";
import "./DashboardCrmCharts.svelte.js";
const Dashboard_crm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>CRM | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "CRM", pageTitle: "Dashboards" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SalesForecast, "SalesForecast").$$render($$result, {}, {}, {})}
			${validate_component(DealType, "DealType").$$render($$result, {}, {}, {})}
			${validate_component(BalanceOverview, "BalanceOverview").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DealsStatus, "DealsStatus").$$render($$result, {}, {}, {})}
			${validate_component(MyTasks, "MyTasks").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(UpcomingActivities, "UpcomingActivities").$$render($$result, {}, {}, {})}
			${validate_component(ClosingDeals, "ClosingDeals").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard_crm as default };
