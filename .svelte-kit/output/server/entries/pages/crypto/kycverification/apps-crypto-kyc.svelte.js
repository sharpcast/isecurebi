import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import KYCVerification from "./KYCVerification.svelte.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Modal-235662c0.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/ModalBody-69b040c2.js";
import "../../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../../chunks/Nav-20bf87e5.js";
import "../../../../chunks/NavItem-0af381c7.js";
import "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/TabPane-b01382c8.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Dropzone-221db829.js";
import "tslib";
import "../../../../chunks/Flatpickr-9498e32b.js";
import "../../../../chunks/Select-6990402e.js";
import "../../../../chunks/Link-71b36253.js";
const Apps_crypto_kyc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>KYC Application | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "KYC Application",
        pageTitle: "Crypto"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(KYCVerification, "KYC").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_crypto_kyc as default };
