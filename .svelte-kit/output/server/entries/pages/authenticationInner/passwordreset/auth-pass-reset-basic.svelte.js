import { c as create_ssr_component, d as compute_rest_props, q as compute_slots, f as spread, j as escape_object, h as escape_attribute_value, l as escape, k as add_attribute, v as validate_component } from "../../../../chunks/index-aeca7bd0.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import { c as classnames } from "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { C as Card } from "../../../../chunks/Card-4d474cdd.js";
import { C as CardBody } from "../../../../chunks/CardBody-908b7052.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import { L as Label } from "../../../../chunks/Label-3fb4a0b5.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import { l as logolight } from "../../../../chunks/logo-light-189a80ba.js";
import "tsparticles";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showClose;
  let classes;
  let closeClassNames;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "children",
    "color",
    "closeClassName",
    "closeAriaLabel",
    "dismissible",
    "heading",
    "isOpen",
    "toggle",
    "fade",
    "transition"
  ]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { color = "success" } = $$props;
  let { closeClassName = "" } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { dismissible = false } = $$props;
  let { heading = void 0 } = $$props;
  let { isOpen = true } = $$props;
  let { toggle = void 0 } = $$props;
  let { fade = true } = $$props;
  let { transition = { duration: fade ? 400 : 0 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.closeClassName === void 0 && $$bindings.closeClassName && closeClassName !== void 0)
    $$bindings.closeClassName(closeClassName);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  showClose = dismissible || toggle;
  classes = classnames(className, "alert", `alert-${color}`, { "alert-dismissible": showClose });
  closeClassNames = classnames("btn-close", closeClassName);
  return `${isOpen ? `<div${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { role: "alert" }
  ], {})}>${heading || $$slots.heading ? `<h4 class="${"alert-heading"}">${escape(heading)}${slots.heading ? slots.heading({}) : ``}</h4>` : ``}
    ${showClose ? `<button type="${"button"}"${add_attribute("class", closeClassNames, 0)}${add_attribute("aria-label", closeAriaLabel, 0)}></button>` : ``}
    ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</div>` : ``}`;
});
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
