import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { a as avatar1 } from "../../../../chunks/avatar-1-413c6ccd.js";
import AuthSlider from "../AuthSlider.svelte.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/logo-light-461ccdee.js";
const Auth_lockscreen_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Lock Screen | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
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
                          return `<div class="${"p-lg-5 p-4"}"><div><h5 class="${"text-primary"}">Lock Screen
                                        </h5>
                                        <p class="${"text-muted"}">Enter your password to unlock the
                                            screen!
                                        </p></div>
                                    <div class="${"user-thumb text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"rounded-circle img-thumbnail avatar-lg"}" alt="${"thumbnail"}">
                                        <h5 class="${"font-size-15 mt-3"}">Anna Adame
                                        </h5></div>

                                    <div class="${"mt-4"}"><form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "userpassword" }, {}, {
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
                          })}</div></form></div>

                                    <div class="${"mt-5 text-center"}"><p class="${"mb-0"}">Not you ? return ${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/login/auth-signin-cover",
                            class: "fw-semibold text-primary text-decoration-underline"
                          }, {}, {
                            default: () => {
                              return `Signin`;
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
export { Auth_lockscreen_cover as default };
