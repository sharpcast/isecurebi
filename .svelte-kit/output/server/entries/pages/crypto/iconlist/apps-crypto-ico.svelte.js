import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import Widgets from "./widgets.svelte.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import Ico from "./ico.svelte.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Flatpickr-9498e32b.js";
import "../../../../chunks/Select-6990402e.js";
import "../../../../chunks/Link-71b36253.js";
const Apps_crypto_ico = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>ICO List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "ICO List", pageTitle: "Crypto" }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}
		

		${validate_component(Ico, "ICO").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_crypto_ico as default };
