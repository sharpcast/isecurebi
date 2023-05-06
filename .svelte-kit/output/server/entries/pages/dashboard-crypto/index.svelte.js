import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import MarketGraph from "./MarketGraph.svelte.js";
import MyCurrencies from "./MyCurrencies.svelte.js";
import MyPortfolio from "./MyPortfolio.svelte.js";
import NewsFeed from "./NewsFeed.svelte.js";
import RecentActivity from "./RecentActivity.svelte.js";
import TopPerformers from "./TopPerformers.svelte.js";
import Trading from "./Trading.svelte.js";
import Widgets from "./Widgets.svelte.js";
import Widgets1 from "./Widgets1.svelte.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "./MarkerCharts.svelte.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/crypto-26d55d11.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "../../../chunks/aave-961ba45c.js";
import "../../../chunks/eth-105a4f91.js";
import "../../../chunks/doge-aae7bd6c.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-3-4c804a8b.js";
import "../../../chunks/img-6-3ccff08f.js";
import "./PortfolioCharts.svelte.js";
import "../../../chunks/SendIcon-e4767035.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Nav-20bf87e5.js";
import "../../../chunks/NavItem-0af381c7.js";
import "../../../chunks/NavLink-7c96aa43.js";
import "../../../chunks/TabPane-b01382c8.js";
import "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       */import "../../../chunks/mousewheel-b011c830.js";
import "../../../chunks/autoplay-ee87b360.js";
import "./DashboardCryptoCharts.svelte.js";
const Dashboard_crypto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Crypto Dashboard | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Crypto", pageTitle: "Dashboards" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MyPortfolio, "MyPortfolio").$$render($$result, {}, {}, {})}
			${validate_component(Col, "Col").$$render($$result, {
            class: "col-xxl-9 order-xxl-0 order-first"
          }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
                }
              })}
				${validate_component(MarketGraph, "MarketGraph").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets1, "Widgets1").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MyCurrencies, "MyCurrencies").$$render($$result, {}, {}, {})}
			${validate_component(Trading, "Trading").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(RecentActivity, "RecentActivity").$$render($$result, {}, {}, {})}
			${validate_component(TopPerformers, "TopPerformers").$$render($$result, {}, {}, {})}
			${validate_component(NewsFeed, "NewsFeed").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard_crypto as default };
