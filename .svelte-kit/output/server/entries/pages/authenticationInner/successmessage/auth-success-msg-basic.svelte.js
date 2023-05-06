import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
import "tsparticles";
const Auth_success_msg_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Success Message | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper"}">${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
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
                      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 text-center" }, {}, {
                        default: () => {
                          return `<div class="${"avatar-lg mx-auto mt-2"}"><div class="${"avatar-title bg-light text-success display-3 rounded-circle"}"><i class="${"ri-checkbox-circle-fill"}"></i></div></div>
                                <div class="${"mt-4 pt-2"}"><h4>Well done !</h4>
                                    <p class="${"text-muted mx-4"}">Aww yeah, you successfully read this
                                        important message.
                                    </p>
                                    <div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/login/auth-signin-basic",
                            class: "btn btn-success w-100"
                          }, {}, {
                            default: () => {
                              return `Back to Dashboard`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}</div>`;
});
export { Auth_success_msg_basic as default };
