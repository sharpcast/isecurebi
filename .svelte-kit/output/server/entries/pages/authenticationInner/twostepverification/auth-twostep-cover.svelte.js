import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import AuthSlider from "../AuthSlider.svelte.js";
import "../../../../chunks/logo-light-461ccdee.js";
const Auth_twostep_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Two Step Verification | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
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
                          return `<div class="${"p-lg-5 p-4"}"><div class="${"mb-4"}"><div class="${"avatar-lg mx-auto"}"><div class="${"avatar-title bg-light text-primary display-5 rounded-circle"}"><i class="${"ri-mail-line"}"></i></div></div></div>
                                    <div class="${"text-muted text-center mx-lg-3"}"><h4 class="${""}">Verify Your Email</h4>
                                        <p>Please enter the 4 digit code sent
                                            to <span class="${"fw-semibold"}">example@abc.com</span></p></div>

                                    <div class="${"mt-4"}"><form>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "digit1-input",
                                    class: "visually-hidden"
                                  }, {}, {
                                    default: () => {
                                      return `Dight 1`;
                                    }
                                  })}
                                                        <input type="${"text"}" class="${"form-control form-control-lg bg-light border-light text-center"}" maxlength="${"1"}" id="${"digit1-input"}"></div>`;
                                }
                              })}

                                                ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "digit2-input",
                                    class: "visually-hidden"
                                  }, {}, {
                                    default: () => {
                                      return `Dight 2`;
                                    }
                                  })}
                                                        <input type="${"text"}" class="${"form-control form-control-lg bg-light border-light text-center"}" maxlength="${"1"}" id="${"digit2-input"}"></div>`;
                                }
                              })}

                                                ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "digit3-input",
                                    class: "visually-hidden"
                                  }, {}, {
                                    default: () => {
                                      return `Dight 3`;
                                    }
                                  })}
                                                        <input type="${"text"}" class="${"form-control form-control-lg bg-light border-light text-center"}" maxlength="${"1"}" id="${"digit3-input"}"></div>`;
                                }
                              })}

                                                ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "digit4-input",
                                    class: "visually-hidden"
                                  }, {}, {
                                    default: () => {
                                      return `Dight 4`;
                                    }
                                  })}
                                                        <input type="${"text"}" class="${"form-control form-control-lg bg-light border-light text-center"}" maxlength="${"1"}" id="${"digit4-input"}"></div>`;
                                }
                              })}`;
                            }
                          })}

                                            <div class="${"mt-3"}">${validate_component(Button, "Button").$$render($$result, { color: "success", class: "w-100" }, {}, {
                            default: () => {
                              return `Confirm`;
                            }
                          })}</div></form></div>

                                    <div class="${"mt-5 text-center"}"><p class="${"mb-0"}">Didn&#39;t receive a code ? ${validate_component(Link, "Link").$$render($$result, {
                            href: "/authenticationInner/passwordreset/auth-pass-reset-cover",
                            class: "fw-semibold text-primary text-decoration-underline"
                          }, {}, {
                            default: () => {
                              return `Resend`;
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
export { Auth_twostep_cover as default };
