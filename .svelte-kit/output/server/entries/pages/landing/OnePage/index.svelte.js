import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import Navbar from "./navbar.svelte.js";
import Home from "./home.svelte.js";
import Client from "./client.svelte.js";
import Services from "./services.svelte.js";
import Features from "./features.svelte.js";
import Plans from "./plans.svelte.js";
import Faq from "./faq.svelte.js";
import Reviews from "./reviews.svelte.js";
import Counter_1 from "./counter.svelte.js";
import WorkProcess from "./workProcess.svelte.js";
import Team from "./team.svelte.js";
import Contact from "./contact.svelte.js";
import Cta from "./cta.svelte.js";
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
import "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                           *//* empty css                                          */import "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/effect-fade-096c09c5.js";
import "../../../../chunks/pagination-317dcc2b.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/index-bddc6f42.js";
/* empty css                                          */import "../../../../chunks/autoplay.min-76e4ebdf.js";
import "../../../../chunks/navigation-98db8aa9.js";
import "../../../../chunks/counter-768545ac.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/Form-51a4628d.js";
const OnePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  window.onscroll = function() {
    scrollFunction();
  };
  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };
  return `<div class="${"layout-wrapper landing"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
    ${validate_component(Client, "Client").$$render($$result, {}, {}, {})}
    ${validate_component(Services, "Services").$$render($$result, {}, {}, {})}
    ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
    ${validate_component(Plans, "Plans").$$render($$result, {}, {}, {})}
    ${validate_component(Faq, "Faqs").$$render($$result, {}, {}, {})}
    ${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}
    ${validate_component(Counter_1, "Counter").$$render($$result, {}, {}, {})}
    ${validate_component(WorkProcess, "WorkProcess").$$render($$result, {}, {}, {})}
    ${validate_component(Team, "Team").$$render($$result, {}, {}, {})}
    ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
    ${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
    <button class="${"btn btn-danger btn-icon landing-back-top"}" id="${"back-to-top"}"><i class="${"ri-arrow-up-line"}"></i></button></div>`;
});
export { OnePage as default };
