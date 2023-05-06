import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { A as Alert } from "../../../../chunks/Alert-d2e69c17.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
import "tsparticles";
const Auth_pass_reset_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Reset Password | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 mb-4 text-white-50"}"><div>${validate_component(Link, "Link").$$render($$result, {
                    href: "/",
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
                          return `<div class="${"text-center mt-2"}"><h5 class="${"text-primary"}">Forgot Password?</h5>
                                <p class="${"text-muted"}">Reset password with velzon
                                </p>

                                <lord-icon src="${"//cdn.lordicon.com/rhvddzym.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c"}" class="${"avatar-xl"}" style="${"width: 120px; height: 120px"}"></lord-icon></div>

                            ${validate_component(Alert, "Alert").$$render($$result, {
                            class: "alert-borderless alert-warning text-center mb-2 mx-2",
                            role: "alert"
                          }, {}, {
                            default: () => {
                              return `Enter your email and instructions will be sent
                                to you!
                            `;
                            }
                          })}
                            <div class="${"p-2"}"><form><div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "email" }, {}, {
                            default: () => {
                              return `Email`;
                            }
                          })}
                                        <input type="${"email"}" class="${"form-control"}" id="${"email"}" placeholder="${"Enter Email"}"></div>

                                    <div class="${"text-center mt-4"}"><button class="${"btn btn-success w-100"}" type="${"submit"}">Send Reset Link</button></div></form></div>`;
                        }
                      })}`;
                    }
                  })}

                    <div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Wait, I remember my password... ${validate_component(Link, "Link").$$render($$result, {
                    href: "/authenticationInner/login/auth-signin-basic",
                    class: "fw-semibold text-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Click here
                            `;
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
export { Auth_pass_reset_basic as default };
