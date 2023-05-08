import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import { B as Button } from "../../../../chunks/Button-621c2412.js";
import { C as Card } from "../../../../chunks/Card-4d474cdd.js";
import { C as CardBody } from "../../../../chunks/CardBody-908b7052.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import { L as Label } from "../../../../chunks/Label-3fb4a0b5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { l as logolight } from "../../../../chunks/logo-light-189a80ba.js";
import "tsparticles";
const Auth_twostep_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Two Step Verification | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
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
                          return `<div class="${"mb-4"}"><div class="${"avatar-lg mx-auto"}"><div class="${"avatar-title bg-light text-primary display-5 rounded-circle"}"><i class="${"ri-mail-line"}"></i></div></div></div>

								<div class="${"p-2 mt-4"}"><div class="${"text-muted text-center mb-4 mx-lg-3"}"><h4 class="${""}">Verify Your Email</h4>
										<p>Please enter the 4 digit code sent
											to <span class="${"fw-semibold"}">example@abc.com</span></p></div>

									<form>${validate_component(Row, "Row").$$render($$result, {}, {}, {
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
                          })}</form>
									<div class="${"mt-3"}">${validate_component(Button, "Button").$$render($$result, { color: "success", class: "w-100" }, {}, {
                            default: () => {
                              return `Confirm`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}
						<div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Didn&#39;t receive a code ? ${validate_component(Link, "Link").$$render($$result, {
                    href: "/authenticationInner/passwordreset/auth-pass-reset-basic",
                    class: "fw-semibold text-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Resend`;
                    }
                  })}</p></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}</div>`;
});
export { Auth_twostep_basic as default };
