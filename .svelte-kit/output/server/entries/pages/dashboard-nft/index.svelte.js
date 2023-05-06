import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import Widgets from "./Widgets.svelte.js";
import Marketplace from "./Marketplace.svelte.js";
import Popularity from "./Popularity.svelte.js";
import FeaturedNFT from "./FeaturedNFT.svelte.js";
import RecentNFTs from "./RecentNFTs.svelte.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/counter-768545ac.js";
import "../../../chunks/CardHeader-84e061db.js";
import "./DashboardNFTCharts.svelte.js";
import "../../../chunks/dashboardNFT-8513f480.js";
import "../../../chunks/img-06-fae769a6.js";
import "../../../chunks/img-04-688285cd.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "./PopularityChart.svelte.js";
import "../../../chunks/swiper.min-94ceb916.js";
import "../../../chunks/navigation-98db8aa9.js";
import "../../../chunks/create-element-if-not-defined-c750ea09.js";
import "../../../chunks/autoplay-ee87b360.js";
/* empty css                                       *//* empty css                                       *//* empty css                                        *//* empty css                                        */import "../../../chunks/autoplay.min-76e4ebdf.js";
import "./TopArtworkChart.svelte.js";
import "../../../chunks/russia-18f81616.js";
import "../../../chunks/pagination-317dcc2b.js";
import "../../../chunks/Map-45314136.js";
const Dashboard_nft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>NFT Dashboard | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "NFT Dashboard",
        pageTitle: "Dashboard"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, { class: "dash-nft" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}
                ${validate_component(Marketplace, "Marketplace").$$render($$result, {}, {}, {})}`;
            }
          })}
            ${validate_component(Popularity, "Popularity").$$render($$result, {}, {}, {})}`;
        }
      })}
        ${validate_component(FeaturedNFT, "FeaturedNFT").$$render($$result, {}, {}, {})}
        ${validate_component(RecentNFTs, "RecentNFTs").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Dashboard_nft as default };
