import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import Blog from "./Blog.svelte.js";
import Candidates from "./Candidates.svelte.js";
import Categories from "./Categories.svelte.js";
import Features from "./Features.svelte.js";
import FindJob from "./FindJob.svelte.js";
import Footer from "./Footer.svelte.js";
import Home from "./Home.svelte.js";
import Navbar from "./Navbar.svelte.js";
import Process from "./Process.svelte.js";
import "../../../../chunks/Button-ba828d9c.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/Row-089822f8.js";
import "../../../../chunks/img-8-19298a6b.js";
import "../../../../chunks/img-6-3ccff08f.js";
import "../../../../chunks/img-9-422942e7.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/swiper.min-94ceb916.js";
import "../../../../chunks/mousewheel-b011c830.js";
import "../../../../chunks/autoplay-ee87b360.js";
/* empty css                                      */import "../../../../chunks/jobLanding-03c3f263.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/Tooltip-8300c9d3.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/logo-light-461ccdee.js";
import "../../../../chunks/Form-51a4628d.js";
import "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/Collapse-6781eb46.js";
import "../../../../chunks/NavbarToggler-a0cc429e.js";
import "../../../../chunks/logo-dark-ec4d2828.js";
const Job = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Job Landing | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"layout-wrapper landing"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
    ${validate_component(Process, "Process").$$render($$result, {}, {}, {})}
    ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
    ${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})}
    ${validate_component(FindJob, "FindJob").$$render($$result, {}, {}, {})}
    ${validate_component(Candidates, "Candidates").$$render($$result, {}, {}, {})}
    ${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
    <button class="${"btn btn-danger btn-icon landing-back-top"}" id="${"back-to-top"}"><i class="${"ri-arrow-up-line"}"></i></button></div>`;
});
export { Job as default };
