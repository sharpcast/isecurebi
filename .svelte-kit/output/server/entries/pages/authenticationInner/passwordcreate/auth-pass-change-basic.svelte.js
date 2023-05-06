import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
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
                      return `<img${add_attribute("src", LogoLight, 0)} alt="${""}" height="${"20"}">`;
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
