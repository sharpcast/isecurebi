import { c as create_ssr_component, v as validate_component, l as escape } from "../../../../chunks/index-aeca7bd0.js";
import { B as Button } from "../../../../chunks/Button-621c2412.js";
import { C as Card } from "../../../../chunks/Card-4d474cdd.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import { L as Label } from "../../../../chunks/Label-3fb4a0b5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import AuthSlider from "../AuthSlider.svelte.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import "../../../../chunks/logo-light-189a80ba.js";
const Auth_pass_reset_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Reset Password | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
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
                          return `<div class="${"p-lg-5 p-4"}"><h5 class="${"text-primary"}">Forgot Password?
									</h5>
									<p class="${"text-muted"}">Reset password with velzon
									</p>

									<div class="${"mt-2 text-center"}"><lord-icon src="${"//cdn.lordicon.com/rhvddzym.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c"}" class="${"avatar-xl"}" style="${"width: 120px;height: 120px"}"></lord-icon></div>

									<div class="${"alert alert-borderless alert-warning text-center mb-2 mx-2"}" role="${"alert"}">Enter your email and instructions will
										be sent to you!
									</div>
									<div class="${"p-2"}"><form><div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "email" }, {}, {
                            default: () => {
                              return `Email`;
                            }
                          })}
												<input type="${"email"}" class="${"form-control"}" id="${"email"}" placeholder="${"Enter email address"}"></div>

											<div class="${"text-center mt-4"}">${validate_component(Button, "Button").$$render($$result, {
                            color: "success",
                            class: "w-100",
                            type: "submit"
                          }, {}, {
                            default: () => {
                              return `Send Reset Link`;
                            }
                          })}</div></form></div>

									<div class="${"mt-5 text-center"}"><p class="${"mb-0"}">Wait, I remember my password... ${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/login/auth-signin-cover",
                            class: "fw-semibold text-primary text-decoration-underline"
                          }, {}, {
                            default: () => {
                              return `Click here
											`;
                            }
                          })}</p></div></div>`;
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
export { Auth_pass_reset_cover as default };
