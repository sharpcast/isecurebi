import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import Widgets from "./Widgets.svelte.js";
import AllTransactions from "./AllTransactions.svelte.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                          */import "../../../../chunks/mousewheel-b011c830.js";
import "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/counter-768545ac.js";
import "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/Select-6990402e.js";
import "../../../../chunks/gridjs-2f6b3743.js";
import "gridjs";
import "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Apps_crypto_transactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script src="${"//cdn.lordicon.com/xdjxvujz.js"}" data-svelte="svelte-1ffxg0r"><\/script>${$$result.title = `<title>Transaction | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Transactions",
        pageTitle: "Crypto"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(AllTransactions, "AllTransactions").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_crypto_transactions as default };
