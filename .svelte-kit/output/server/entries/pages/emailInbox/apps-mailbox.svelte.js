import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import EmailSidebar from "./EmailSidebar.svelte.js";
import EmailToolbar from "./EmailToolbar.svelte.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Modal-235662c0.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/ModalBody-69b040c2.js";
import "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/Row-089822f8.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/PlusCircleIcon-0c7635d7.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/Collapse-6781eb46.js";
import "../../../chunks/Button-ba828d9c.js";
import "../../../chunks/ButtonGroup-50e6fe93.js";
import "../../../chunks/NavItem-0af381c7.js";
import "../../../chunks/NavLink-7c96aa43.js";
import "../../../chunks/Offcanvas-493a27d8.js";
import "../../../chunks/Tooltip-8300c9d3.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-6-3ccff08f.js";
const Apps_mailbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Mailbox | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"email-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1"}">${validate_component(EmailSidebar, "EmailSidebar").$$render($$result, {}, {}, {})}
			${validate_component(EmailToolbar, "EmailToolbar").$$render($$result, {}, {}, {})}</div>`;
    }
  })}</div>`;
});
export { Apps_mailbox as default };
