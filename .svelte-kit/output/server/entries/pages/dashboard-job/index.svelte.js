import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import SalesByLocations from "../dashboard/SalesByLocations.svelte.js";
import ApplicationsStatistic from "./ApplicationsStatistic.svelte.js";
import Candidates from "./Candidates.svelte.js";
import FeaturedCompanies from "./FeaturedCompanies.svelte.js";
import RecentApplicants from "./RecentApplicants.svelte.js";
import RecomendedJobs from "./RecomendedJobs.svelte.js";
import Widgets from "./Widgets.svelte.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/Map-45314136.js";
import "../../../chunks/counter-768545ac.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-9-f5d371f4.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/Table-b6431bfe.js";
import "../../../chunks/dashboardJobs-69be2afb.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "./DashboardCharts.svelte.js";
const Dashboard_job = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Job Dashboard",
        pageTitle: "Dashboards"
      }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}
        ${validate_component(FeaturedCompanies, "FeaturedCompanies").$$render($$result, {}, {}, {})}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ApplicationsStatistic, "ApplicationsStatistic").$$render($$result, {
            dataColors: ["--vz-success", "--vz-info", "--vz-primary"]
          }, {}, {})}
        ${validate_component(Candidates, "Candidates").$$render($$result, {}, {}, {})}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(RecomendedJobs, "RecomendedJobs").$$render($$result, {}, {}, {})}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(RecentApplicants, "RecentApplicants").$$render($$result, {}, {}, {})}
        ${validate_component(SalesByLocations, "SalesByLocations").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard_job as default };
