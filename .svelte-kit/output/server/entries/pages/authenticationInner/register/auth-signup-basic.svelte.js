import { c as create_ssr_component, v as validate_component, k as add_attribute, l as escape } from "../../../../chunks/index-aeca7bd0.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
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
const Auth_signup_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sign Up | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
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
                          return `<div class="${"text-center mt-2"}"><h5 class="${"text-primary"}">Create New Account</h5>
                                <p class="${"text-muted"}">Get your free velzon account now
                                </p></div>
                            <div class="${"p-2 mt-4"}"><form class="${"needs-validation"}" action="${"#"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "useremail", class: "form-label" }, {}, {
                            default: () => {
                              return `Email <span class="${"text-danger"}">*</span>`;
                            }
                          })}
                                        <input type="${"email"}" class="${"form-control"}" id="${"useremail"}" placeholder="${"Enter email address"}" required>
                                        <div class="${"invalid-feedback"}">Please enter email
                                        </div></div>
                                    <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "username", class: "form-label" }, {}, {
                            default: () => {
                              return `Username <span class="${"text-danger"}">*</span>`;
                            }
                          })}
                                        <input type="${"text"}" class="${"form-control"}" id="${"username"}" placeholder="${"Enter username"}" required>
                                        <div class="${"invalid-feedback"}">Please enter username
                                        </div></div>

                                    <div class="${"mb-2"}">${validate_component(Label, "Label").$$render($$result, { for: "userpassword", class: "form-label" }, {}, {
                            default: () => {
                              return `Password <span class="${"text-danger"}">*</span>`;
                            }
                          })}
                                        <input type="${"password"}" class="${"form-control"}" id="${"userpassword"}" placeholder="${"Enter password"}" required>
                                        <div class="${"invalid-feedback"}">Please enter password
                                        </div></div>

                                    <div class="${"mb-4"}"><p class="${"mb-0 fs-12 text-muted fst-italic"}">By registering you agree to the
                                            Velzon
                                            ${validate_component(Link, "Link").$$render($$result, {
                            href: "#!",
                            class: "text-primary text-decoration-underline fst-normal fw-medium"
                          }, {}, {
                            default: () => {
                              return `Terms of Use`;
                            }
                          })}</p></div>

                                    <div class="${"mt-4"}"><button class="${"btn btn-success w-100"}" type="${"submit"}">Sign Up</button></div>

                                    <div class="${"mt-4 text-center"}"><div class="${"signin-other-title"}"><h5 class="${"fs-13 mb-4 title text-muted"}">Create account with
                                            </h5></div>

                                        <div><button type="${"button"}" class="${"btn btn-primary btn-icon waves-effect waves-light"}"><i class="${"ri-facebook-fill fs-16"}"></i></button>${escape(" ")}
                                            <button type="${"button"}" class="${"btn btn-danger btn-icon waves-effect waves-light"}"><i class="${"ri-google-fill fs-16"}"></i></button>${escape(" ")}
                                            <button type="${"button"}" class="${"btn btn-dark btn-icon waves-effect waves-light"}"><i class="${"ri-github-fill fs-16"}"></i></button>${escape(" ")}
                                            <button type="${"button"}" class="${"btn btn-info btn-icon waves-effect waves-light"}"><i class="${"ri-twitter-fill fs-16"}"></i></button></div></div></form></div>`;
                        }
                      })}`;
                    }
                  })}

                    <div class="${"mt-4 text-center"}"><p class="${"mb-0"}">Already have an account ? ${validate_component(Link, "Link").$$render($$result, {
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
  })}`;
});
export { Auth_signup_basic as default };
