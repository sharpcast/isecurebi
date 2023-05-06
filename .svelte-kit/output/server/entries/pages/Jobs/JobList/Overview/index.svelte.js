import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import Header from "./Header.svelte.js";
import JobDescription from "./JobDescription.svelte.js";
import RelatedJobs from "./RelatedJobs.svelte.js";
import RightSection from "./RightSection.svelte.js";
import "../../../../../chunks/Card-f8372b29.js";
import "../../../../../chunks/CardBody-1c493a94.js";
import "../../../../../chunks/slack-e58caefb.js";
import "../../../../../chunks/Link-71b36253.js";
import "../../../../../chunks/appsJobs-3a727122.js";
import "../../../../../chunks/img-2-d003c89a.js";
import "../../../../../chunks/img-4-f8adc4d4.js";
import "../../../../../chunks/img-7-4861de06.js";
import "../../../../../chunks/img-5-9ef0dff2.js";
import "../../../../../chunks/img-2-674a1784.js";
import "../../../../../chunks/img-3-127a32b6.js";
import "../../../../../chunks/img-4-5ac753e7.js";
import "../../../../../chunks/img-6-7ff883ab.js";
import "../../../../../chunks/img-7-06bdf5b0.js";
import "../../../../../chunks/img-8-ebcd4c34.js";
import "../../../../../chunks/img-9-995f69e7.js";
import "../../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../../chunks/avatar-7-46aa251f.js";
import "../../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../../chunks/mail_chimp-a5132002.js";
import "../../../../../chunks/bitbucket-59cc1b30.js";
import "../../../../../chunks/CardHeader-84e061db.js";
import "../../../../../chunks/Label-1c7919d2.js";
import "../../../../../chunks/Table-b6431bfe.js";
const Overview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Job Overview | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, { class: "mt-n5" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(JobDescription, "JobDescription").$$render($$result, {}, {}, {})}

          ${validate_component(RelatedJobs, "RelatedJobs").$$render($$result, {}, {}, {})}`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(RightSection, "RightSection").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Overview as default };
