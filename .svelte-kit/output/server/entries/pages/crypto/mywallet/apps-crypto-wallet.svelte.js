import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import Watchlist from "./Watchlist.svelte.js";
import PortfolioStatistics from "./PortfolioStatistics.svelte.js";
import MarketStatus from "./MarketStatus.svelte.js";
import Widgets from "./Widgets.svelte.js";
import RecentTransaction from "./RecentTransaction.svelte.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
import "./watchListChart.svelte.js";
import "../../../../chunks/swiper.min-94ceb916.js";
import "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
/* empty css                                      *//* empty css                                          */import "../../../../chunks/mousewheel-b011c830.js";
import "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/CardHeader-84e061db.js";
import "gridjs";
import "../../../../chunks/gridjs-2f6b3743.js";
const Apps_crypto_wallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>My Wallet | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "My Wallet", pageTitle: "Crypto" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(PortfolioStatistics, "PortfolioStatistics").$$render($$result, {}, {}, {})}
				${validate_component(Watchlist, "Watchlist").$$render($$result, {}, {}, {})}
				${validate_component(MarketStatus, "MarketStatus").$$render($$result, {}, {}, {})}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}
				${validate_component(RecentTransaction, "RecentTransaction").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_crypto_wallet as default };
