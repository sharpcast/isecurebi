import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import Navbar from "./navbar.svelte.js";
import Home from "./home.svelte.js";
import Connect from "./Connect.svelte.js";
import Products from "./Products.svelte.js";
import Features from "./Features.svelte.js";
import Trending from "./Trending.svelte.js";
import DiscoverItems from "./DiscoverItems.svelte.js";
import TopCreator from "./TopCreator.svelte.js";
import CTA from "./CTA.svelte.js";
import Footer from "./footer.svelte.js";
import "../../../../chunks/Collapse-6781eb46.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/NavbarToggler-a0cc429e.js";
import "../../../../chunks/Button-ba828d9c.js";
import "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/logo-dark-ec4d2828.js";
import "../../../../chunks/logo-light-461ccdee.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Row-089822f8.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/LandingNFT-5443bfa5.js";
import "../../../../chunks/binance-8a9ae9f5.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/img-06-fae769a6.js";
import "../../../../chunks/Nav-20bf87e5.js";
import "../../../../chunks/NavItem-0af381c7.js";
import "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                          *//* empty css                                      */import "../../../../chunks/autoplay.min-76e4ebdf.js";
import "../../../../chunks/navigation-98db8aa9.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
import "../../../../chunks/pagination-317dcc2b.js";
import "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/img-04-688285cd.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
const NFTLanding = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"layout-wrapper landing"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
    ${validate_component(Connect, "Connect").$$render($$result, {}, {}, {})}
    ${validate_component(Products, "Products").$$render($$result, {}, {}, {})}
    ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
    ${validate_component(Trending, "Trending").$$render($$result, {}, {}, {})}
    ${validate_component(DiscoverItems, "DiscoverItems").$$render($$result, {}, {}, {})}
    ${validate_component(TopCreator, "TopCreator").$$render($$result, {}, {}, {})}
    ${validate_component(CTA, "CTA").$$render($$result, {}, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
    <button class="${"btn btn-danger btn-icon landing-back-top"}" id="${"back-to-top"}"><i class="${"ri-arrow-up-line"}"></i></button></div>`;
});
export { NFTLanding as default };
