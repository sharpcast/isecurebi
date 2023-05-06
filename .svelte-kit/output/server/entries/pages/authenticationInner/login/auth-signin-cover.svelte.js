import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import AuthSlider from "../AuthSlider.svelte.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/logo-light-461ccdee.js";
const Auth_signin_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sign In | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"bg-overlay"}"></div>
    <div class="${"auth-page-content overflow-hidden pt-lg-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
                    default: () => {
                      return `${validate_component(AuthSlider, "AuthSlider").$$render($$result, {}, {}, {})}

                            ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<div class="${"p-lg-5 p-4"}"><div><h5 class="${"text-primary"}">Welcome Back !
                                        </h5>
                                        <p class="${"text-muted"}">Sign in to continue to Velzon.
                                        </p></div>

                                    <div class="${"mt-4"}"><form action="${"/"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "username", class: "form-label" }, {}, {
                            default: () => {
                              return `Username`;
                            }
                          })}
                                                ${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "username",
                            placeholder: "Enter username"
                          }, {}, {})}</div>

                                            <div class="${"mb-3"}"><div class="${"float-end"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/passwordreset/auth-pass-reset-cover",
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
                                                <div class="${"position-relative auth-pass-inputgroup mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                            type: "password",
                            class: "form-control pe-5",
                            placeholder: "Enter password",
                            id: "password-input"
                          }, {}, {})}
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

                                            <div class="${"mt-4"}">${validate_component(Button, "Button").$$render($$result, {
                            color: "success",
                            class: "w-100",
                            type: "submit"
                          }, {}, {
                            default: () => {
                              return `Sign In`;
                            }
                          })}</div>

                                            <div class="${"mt-4 text-center"}"><div class="${"signin-other-title"}"><h5 class="${"fs-13 mb-4 title"}">Sign In with
                                                    </h5></div>

                                                <div>${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "btn-icon me-1" }, {}, {
                            default: () => {
                              return `<i class="${"ri-facebook-fill fs-16"}"></i>`;
                            }
                          })}
                                                    ${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "btn-icon me-1" }, {}, {
                            default: () => {
                              return `<i class="${"ri-google-fill fs-16"}"></i>`;
                            }
                          })}
                                                    ${validate_component(Button, "Button").$$render($$result, { color: "dark", class: "btn-icon me-1" }, {}, {
                            default: () => {
                              return `<i class="${"ri-github-fill fs-16"}"></i>`;
                            }
                          })}
                                                    ${validate_component(Button, "Button").$$render($$result, { color: "info", class: "btn-icon" }, {}, {
                            default: () => {
                              return `<i class="${"ri-twitter-fill fs-16"}"></i>`;
                            }
                          })}</div></div></form></div>

                                    <div class="${"mt-5 text-center"}"><p class="${"mb-0"}">Don&#39;t have an account ? <a href="${"/authenticationInner/register/auth-signup-cover"}" class="${"fw-semibold text-primary text-decoration-underline"}">Signup</a></p></div></div>`;
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
export { Auth_signin_cover as default };
