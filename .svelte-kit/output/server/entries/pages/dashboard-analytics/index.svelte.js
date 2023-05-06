import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import UpgradeAccountNotise from "./UpgradeAccountNotise.svelte.js";
import UsersByDevice from "./UsersByDevice.svelte.js";
import Widget from "./Widget.svelte.js";
import AudiencesMetrics from "./AudiencesMetrics.svelte.js";
import AudiencesSessions from "./AudiencesSessions.svelte.js";
import LiveUsers from "./LiveUsers.svelte.js";
import TopReferrals from "./TopReferrals.svelte.js";
import TopPages from "./TopPages.svelte.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/AlertTriangleIcon-fbe21b84.js";
import "../../../chunks/Alert-d2e69c17.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/user-illustarator-2-5db54d81.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "./UsersByDeviceCharts.svelte.js";
import "../../../chunks/UsersIcon-1eab5089.js";
import "../../../chunks/ExternalLinkIcon-2852acf2.js";
import "../../../chunks/ClockIcon-8408cbfa.js";
import "./AudiencesCharts.svelte.js";
import "./AudiencesSessionsCharts.svelte.js";
import "./CountriesCharts.svelte.js";
import "../../../chunks/Map-45314136.js";
import "../../../chunks/Progress-4a564725.js";
const Dashboard_analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Analytics | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Analytics",
        pageTitle: "Dashboards"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 5 }, {}, {
            default: () => {
              return `${validate_component(UpgradeAccountNotise, "UpgradeAccountNotise").$$render($$result, {}, {}, {})}
				${validate_component(Widget, "Widget").$$render($$result, {}, {}, {})}`;
            }
          })}
			${validate_component(LiveUsers, "LiveUsers").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AudiencesMetrics, "AudiencesMetrics").$$render($$result, {}, {}, {})}
			${validate_component(AudiencesSessions, "AudiencesSessions").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(UsersByDevice, "UsersByDevice").$$render($$result, {}, {}, {})}
			${validate_component(TopReferrals, "TopReferrals").$$render($$result, {}, {}, {})}
			${validate_component(TopPages, "TopPages").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard_analytics as default };
