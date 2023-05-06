import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import UsersByDevice from "../../dashboard-analytics/UsersByDevice.svelte.js";
import JobSummary from "./JobSummary.svelte.js";
import NatworkSummary from "./NatworkSummary.svelte.js";
import VisitorGraph from "./VisitorGraph.svelte.js";
import Widgets from "./Widgets.svelte.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../dashboard-analytics/UsersByDeviceCharts.svelte.js";
import "../../../../chunks/UsersIcon-1eab5089.js";
import "../../../../chunks/appsJobs-3a727122.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-7-4861de06.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/mail_chimp-a5132002.js";
import "../../../../chunks/bitbucket-59cc1b30.js";
import "./Charts.svelte.js";
const Statistics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Statistics | Velzon -  Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "STATISTICS", pageTitle: "Jobs" }, {}, {})}

    ${validate_component(Row, "Row").$$render($$result, { class: "row" }, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {
            dataColors: ["--vz-success", "--vz-danger"]
          }, {}, {})}`;
        }
      })}

    ${validate_component(Row, "Row").$$render($$result, { class: "row" }, {}, {
        default: () => {
          return `${validate_component(VisitorGraph, "VisitorGraph").$$render($$result, {
            dataColors: [
              "--vz-primary",
              "--vz-secondary",
              "--vz-success",
              "--vz-info",
              "--vz-warning",
              "--vz-danger"
            ]
          }, {}, {})}
      ${validate_component(UsersByDevice, "UsersByDevice").$$render($$result, {}, {}, {})}`;
        }
      })}

    ${validate_component(Row, "Row").$$render($$result, { class: "row" }, {}, {
        default: () => {
          return `${validate_component(NatworkSummary, "NatworkSummary").$$render($$result, {
            dataColors: ["--vz-primary", "--vz-info"]
          }, {}, {})}
      ${validate_component(JobSummary, "JobSummary").$$render($$result, {
            dataColors: ["--vz-success", "--vz-primary", "--vz-info", "--vz-danger"]
          }, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Statistics as default };
