import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import AuthSlider from "../AuthSlider.svelte.js";
import "../../../../chunks/logo-light-461ccdee.js";
const Auth_logout_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Log Out | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"bg-overlay"}"></div>
	<div class="${"auth-page-content overflow-hidden pt-lg-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center g-0" }, {}, {
                    default: () => {
                      return `${validate_component(AuthSlider, "AuthSlider").$$render($$result, {}, {}, {})}

							${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<div class="${"p-lg-5 p-4 text-center"}"><lord-icon src="${"//cdn.lordicon.com/hzomhqxz.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#08a88a"}" style="${"width: 180px; height: 180px"}"></lord-icon>

									<div class="${"mt-4 pt-2"}"><h5>You are Logged Out</h5>
										<p class="${"text-muted"}">Thank you for using <span class="${"fw-semibold"}">velzon</span> admin template
										</p>
										<div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/login/auth-signin-basic",
                            class: "btn btn-success w-100"
                          }, {}, {
                            default: () => {
                              return `Sign In`;
                            }
                          })}</div></div></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>

	<footer class="${"footer"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"text-center"}"><p class="${"mb-0"}">\xA9 ${escape(new Date().getFullYear())} Velzon. Crafted with
							<i class="${"mdi mdi-heart text-danger"}"></i> by Themesbrand
						</p></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</footer></div>`;
});
export { Auth_logout_cover as default };
