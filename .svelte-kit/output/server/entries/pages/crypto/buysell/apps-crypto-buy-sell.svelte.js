import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import MarketGraph from "./MarketGraph.svelte.js";
import Widgets from "./Widgets.svelte.js";
import BuySellCoin from "./BuySellCoin.svelte.js";
import Market from "./Market.svelte.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/counter-768545ac.js";
import "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Nav-20bf87e5.js";
import "../../../../chunks/NavItem-0af381c7.js";
import "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/TabPane-b01382c8.js";
import "../../../../chunks/index-bddc6f42.js";
import "gridjs";
import "../../../../chunks/gridjs-2f6b3743.js";
const Apps_crypto_buy_sell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Buy &amp; Sell | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Buy & Sell", pageTitle: "Crypto" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MarketGraph, "MarketGraph").$$render($$result, {
            dataColors: ["--vz-success", "--vz-danger"]
          }, {}, {})}
			${validate_component(BuySellCoin, "BuySellCoin").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Market, "Market").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_crypto_buy_sell as default };
