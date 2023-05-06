import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import Section from "./Section.svelte.js";
import TicketDescription from "./TicketDescription.svelte.js";
import TicketDetails from "./TicketDetails.svelte.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/Form-51a4628d.js";
import "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Link-71b36253.js";
import "./TicketsDetailsCode.svelte.js";
import "../../../../chunks/Prism-c9306ada.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-5-1aac893f.js";
import "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/Select-6990402e.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
const Apps_tickets_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ticket Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TicketDescription, "TicketDescription").$$render($$result, {}, {}, {})}
            ${validate_component(TicketDetails, "TicketDetails").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_tickets_details as default };
