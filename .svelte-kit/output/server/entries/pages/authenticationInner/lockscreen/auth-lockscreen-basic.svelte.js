import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { B as Button } from "../../../../chunks/Button-621c2412.js";
import { C as Card } from "../../../../chunks/Card-4d474cdd.js";
import { C as CardBody } from "../../../../chunks/CardBody-908b7052.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import { L as Label } from "../../../../chunks/Label-3fb4a0b5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import { l as logolight } from "../../../../chunks/logo-light-189a80ba.js";
import { a as avatar1 } from "../../../../chunks/avatar-1-413c6ccd.js";
import "tsparticles";
const Auth_lockscreen_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Lock Screen | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-content"}"><div class="${"auth-page-wrapper"}">${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 mb-4 text-white-50"}"><div>${validate_component(Link, "Link").$$render($$result, {
                    href: "/dashboard",
                    class: "d-inline-block auth-logo"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", logolight, 0)} alt="${""}" height="${"20"}">`;
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
                          return `<div class="${"text-center mt-2"}"><h5 class="${"text-primary"}">Lock Screen
                                        </h5>
                                        <p class="${"text-muted"}">Enter your password to unlock the
                                            screen!
                                        </p></div>
                                    <div class="${"user-thumb text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"rounded-circle img-thumbnail avatar-lg"}" alt="${"thumbnail"}">
                                        <h5 class="${"font-size-15 mt-3"}">Anna Adame
                                        </h5></div>
                                    <div class="${"p-2 mt-4"}"><form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "userpassword" }, {}, {
                            default: () => {
                              return `Password`;
                            }
                          })}
                                                <input type="${"password"}" class="${"form-control"}" id="${"userpassword"}" placeholder="${"Enter password"}" required></div>
                                            <div class="${"mb-2 mt-4"}">${validate_component(Button, "Button").$$render($$result, {
                            color: "success",
                            class: "w-100",
                            type: "submit"
                          }, {}, {
                            default: () => {
                              return `Unlock`;
                            }
                          })}</div></form></div>`;
                        }
                      })}`;
                    }
                  })}
                            <div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Not you ? return ${validate_component(Link, "Link").$$render($$result, {
                    href: "/authenticationInner/login/auth-signin-basic",
                    class: "fw-semibold text-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Signin
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
  })}</div></div>`;
});
export { Auth_lockscreen_basic as default };
