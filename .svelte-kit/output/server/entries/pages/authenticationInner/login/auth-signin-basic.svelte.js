import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
import "tsparticles";
const Auth_signin_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sign In | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 mb-4 text-white-50"}"><div>${validate_component(Link, "Link").$$render($$result, {
                    href: "index",
                    class: "d-inline-block auth-logo"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", LogoLight, 0)} alt="${""}" height="${"20"}">`;
                    }
                  })}</div>
						<p class="${"mt-3 fs-15 fw-medium"}">Premium Admin &amp; Dashboard Template
						</p></div>`;
                }
              })}`;
            }
          })}
			

			${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { md: 8, lg: 6, xl: 5 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "mt-4" }, {}, {
                    default: () => {
                      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                        default: () => {
                          return `<div class="${"text-center mt-2"}"><h5 class="${"text-primary"}">Welcome Back !</h5>
								<p class="${"text-muted"}">Sign in to continue to Velzon.
								</p></div>
							<div class="${"p-2 mt-4"}"><form action="${"/dashboard"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "username", class: "form-label" }, {}, {
                            default: () => {
                              return `Username`;
                            }
                          })}
										<input type="${"text"}" class="${"form-control"}" id="${"username"}" placeholder="${"Enter username"}"></div>

									<div class="${"mb-3"}"><div class="${"float-end"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "auth-pass-reset-basic",
                            class: "text-muted"
                          }, {}, {
                            default: () => {
                              return `Forgot password?`;
                            }
                          })}</div>
										${validate_component(Label, "Label").$$render($$result, {
                            class: "form-label",
                            for: "password-input"
                          }, {}, {
                            default: () => {
                              return `Password`;
                            }
                          })}
										<div class="${"position-relative auth-pass-inputgroup mb-3"}"><input type="${"password"}" class="${"form-control pe-5"}" placeholder="${"Enter password"}" id="${"password-input"}">
											<button class="${"btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"}" type="${"button"}" id="${"password-addon"}"><i class="${"ri-eye-fill align-middle"}"></i></button></div></div>

									<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"auth-remember-check"}">
										${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "auth-remember-check"
                          }, {}, {
                            default: () => {
                              return `Remember me`;
                            }
                          })}</div>

									<div class="${"mt-4"}"><button class="${"btn btn-success w-100"}" type="${"submit"}">Sign In</button></div>

									<div class="${"mt-4 text-center"}"><div class="${"signin-other-title"}"><h5 class="${"fs-13 mb-4 title"}">Sign In with
											</h5></div>
										<div><button type="${"button"}" class="${"btn btn-primary btn-icon waves-effect waves-light"}"><i class="${"ri-facebook-fill fs-16"}"></i></button>
											<button type="${"button"}" class="${"btn btn-danger btn-icon waves-effect waves-light"}"><i class="${"ri-google-fill fs-16"}"></i></button>
											<button type="${"button"}" class="${"btn btn-dark btn-icon waves-effect waves-light"}"><i class="${"ri-github-fill fs-16"}"></i></button>
											<button type="${"button"}" class="${"btn btn-info btn-icon waves-effect waves-light"}"><i class="${"ri-twitter-fill fs-16"}"></i></button></div></div></form></div>`;
                        }
                      })}
						`;
                    }
                  })}
					

					<div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Don&#39;t have an account ? ${validate_component(Link, "Link").$$render($$result, {
                    href: "/authenticationInner/register/auth-signup-basic",
                    class: "fw-semibold text-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Signup
							`;
                    }
                  })}</p></div>`;
                }
              })}`;
            }
          })}
			`;
        }
      })}
		</div>`;
    }
  })}`;
});
export { Auth_signin_basic as default };
