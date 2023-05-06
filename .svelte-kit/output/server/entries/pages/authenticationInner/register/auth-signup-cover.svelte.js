import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import AuthSlider from "../AuthSlider.svelte.js";
import "../../../../chunks/logo-light-461ccdee.js";
const Auth_signup_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sign Up | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"bg-overlay"}"></div>
    <div class="${"auth-page-content overflow-hidden pt-lg-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden m-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center g-0" }, {}, {
                    default: () => {
                      return `${validate_component(AuthSlider, "AuthSlider").$$render($$result, {}, {}, {})}

                            <div class="${"col-lg-6"}"><div class="${"p-lg-5 p-4"}"><div><h5 class="${"text-primary"}">Register Account
                                        </h5>
                                        <p class="${"text-muted"}">Get your Free Velzon account now.
                                        </p></div>

                                    <div class="${"mt-4"}"><form class="${"needs-validation"}" novalidate action="${"/dashboard"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "useremail", class: "form-label" }, {}, {
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

                                            <div class="${"mb-4"}"><p class="${"mb-0 fs-12 text-muted fst-italic"}">By registering you agree to
                                                    the Velzon ${validate_component(Link, "Link").$$render($$result, {
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

                                                <div><button type="${"button"}" class="${"btn btn-primary btn-icon waves-effect waves-light me-1"}"><i class="${"ri-facebook-fill fs-16"}"></i></button>
                                                    <button type="${"button"}" class="${"btn btn-danger btn-icon waves-effect waves-light me-1"}"><i class="${"ri-google-fill fs-16"}"></i></button>
                                                    <button type="${"button"}" class="${"btn btn-dark btn-icon waves-effect waves-light me-1"}"><i class="${"ri-github-fill fs-16"}"></i></button>
                                                    <button type="${"button"}" class="${"btn btn-info btn-icon waves-effect waves-light"}"><i class="${"ri-twitter-fill fs-16"}"></i></button></div></div></form></div>

                                    <div class="${"mt-5 text-center"}"><p class="${"mb-0"}">Already have an account ? ${validate_component(Link, "Link").$$render($$result, {
                        href: "/authenticationInner/login/auth-signin-cover",
                        class: "fw-semibold text-primary text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `Signin`;
                        }
                      })}</p></div></div></div>`;
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
      return `<div class="${"row"}"><div class="${"col-lg-12"}"><div class="${"text-center"}"><p class="${"mb-0"}">\xA9 ${escape(new Date().getFullYear())} Velzon. Crafted with
                            <i class="${"mdi mdi-heart text-danger"}"></i> by Themesbrand
                        </p></div></div></div>`;
    }
  })}</footer></div>`;
});
export { Auth_signup_cover as default };
