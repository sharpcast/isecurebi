import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { B as Button } from "../../../../chunks/Button-621c2412.js";
import { C as Card } from "../../../../chunks/Card-4d474cdd.js";
import { C as CardBody } from "../../../../chunks/CardBody-908b7052.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import { F as Form } from "../../../../chunks/Form-ac982c60.js";
import { I as Input } from "../../../../chunks/Input-6a6794f6.js";
import { L as Label } from "../../../../chunks/Label-3fb4a0b5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { l as logolight } from "../../../../chunks/logo-light-189a80ba.js";
import "tsparticles";
const Auth_pass_change_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 mb-4 text-white-50"}"><div>${validate_component(Link, "Link").$$render($$result, {
                    href: "/#",
                    class: "d-inline-block auth-logo"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", logolight, 0)} alt="${""}" height="${"20"}">`;
                    }
                  })}</div>
                        <p class="${"mt-3 fs-15 fw-medium"}">Premium Admin &amp; Dashboard Template</p></div>`;
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
                          return `<div class="${"text-center mt-2"}"><h5 class="${"text-primary"}">Create new password</h5>
                                <p class="${"text-muted"}">Your new password must be different from previous used password.</p></div>

                            <div class="${"p-2"}">${validate_component(Form, "Form").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                htmlFor: "password-input"
                              }, {}, {
                                default: () => {
                                  return `Password`;
                                }
                              })}
                                        <div class="${"position-relative auth-pass-inputgroup"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "password",
                                class: "form-control pe-5 password-input",
                                placeholder: "Enter password",
                                id: "password-input",
                                name: "password"
                              }, {}, {})}
                                            ${validate_component(Button, "Button").$$render($$result, {
                                color: "link",
                                class: "position-absolute end-0 top-0 text-decoration-none text-muted password-addon",
                                type: "button",
                                id: "password-addon"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill align-middle"}"></i>`;
                                }
                              })}</div>
                                        <div id="${"passwordInput"}" class="${"form-text"}">Must be at least 8 characters.</div></div>

                                    <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                htmlFor: "confirm-password-input"
                              }, {}, {
                                default: () => {
                                  return `Confirm Password`;
                                }
                              })}
                                        <div class="${"position-relative auth-pass-inputgroup mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "password",
                                class: "form-control pe-5 password-input",
                                placeholder: "Confirm password",
                                id: "confirm-password-input",
                                name: "confrim_password"
                              }, {}, {})}
                                            ${validate_component(Button, "Button").$$render($$result, {
                                color: "link",
                                class: "position-absolute end-0 top-0 text-decoration-none text-muted password-addon",
                                type: "button"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill align-middle"}"></i>`;
                                }
                              })}</div></div>

                                    <div id="${"password-contain"}" class="${"p-3 bg-light mb-2 rounded"}"><h5 class="${"fs-13"}">Password must contain:</h5>
                                        <p id="${"pass-length"}" class="${"invalid fs-12 mb-2"}">Minimum <b>8 characters</b></p>
                                        <p id="${"pass-lower"}" class="${"invalid fs-12 mb-2"}">At <b>lowercase</b> letter (a-z)</p>
                                        <p id="${"pass-upper"}" class="${"invalid fs-12 mb-2"}">At least <b>uppercase</b> letter (A-Z)</p>
                                        <p id="${"pass-number"}" class="${"invalid fs-12 mb-0"}">A least <b>number</b> (0-9)</p></div>

                                    <div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"auth-remember-check"}">
                                        ${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                htmlFor: "auth-remember-check"
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
                                  return `Reset Password`;
                                }
                              })}</div>`;
                            }
                          })}</div>`;
                        }
                      })}`;
                    }
                  })}
                    <div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Wait, I remember my password... ${validate_component(Link, "Link").$$render($$result, {
                    href: "/authenticationInner/login/auth-signin-basic",
                    class: "fw-semibold text-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Click here `;
                    }
                  })}</p></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}`;
});
export { Auth_pass_change_basic as default };
