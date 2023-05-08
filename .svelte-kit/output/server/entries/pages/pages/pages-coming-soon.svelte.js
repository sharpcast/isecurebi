import { c as create_ssr_component, d as compute_rest_props, f as spread, j as escape_object, h as escape_attribute_value, v as validate_component, k as add_attribute } from "../../../chunks/index-aeca7bd0.js";
import ParticlesAuth from "../authenticationInner/ParticlesAuth.svelte.js";
import { C as Col } from "../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../chunks/Container-17fe0983.js";
import { I as Input } from "../../../chunks/Input-6a6794f6.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../chunks/Row-d6617eb9.js";
import "tsparticles";
const InputGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "size"]);
  let { class: className = "" } = $$props;
  let { size = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  classes = classnames(className, "input-group", size ? `input-group-${size}` : null);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
var comingsoon = "/_app/assets/comingsoon-e87978bf.png";
const Pages_coming_soon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new Date("Jan 1, 2023").getTime();
  setInterval(function() {
    new Date().getTime();
  }, 1e3);
  return `${$$result.head += `${$$result.title = `<title>Comming Soon | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 pt-4 mb-4"}"><div class="${"mb-sm-5 pb-sm-4 pb-5"}"><img${add_attribute("src", comingsoon, 0)} alt="${""}" height="${"120"}" class="${"move-animation"}"></div>
                        <div class="${"mb-5"}"><h1 class="${"display-2 coming-soon-text"}">Coming Soon
                            </h1></div>
                        <div>${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-5" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
                        default: () => {
                          return `<div id="${"countdown"}" class="${"countdownlist"}"></div>`;
                        }
                      })}`;
                    }
                  })}

                            <div class="${"mt-5"}"><h4>Get notified when we launch</h4>
                                <p class="${"text-muted"}">Don&#39;t worry we will not spam you \u{1F60A}
                                </p></div>

                            ${validate_component(InputGroup, "InputGroup").$$render($$result, {
                    class: "countdown-input-group mx-auto my-4"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render($$result, {
                        type: "email",
                        class: "form-control border-light shadow",
                        placeholder: "Enter your email address"
                      }, {}, {})}
                                <button class="${"btn btn-success"}" type="${"button"}">Send
                                    <i class="${"ri-send-plane-2-fill align-bottom ms-2"}"></i></button>`;
                    }
                  })}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}`;
});
export { Pages_coming_soon as default };
