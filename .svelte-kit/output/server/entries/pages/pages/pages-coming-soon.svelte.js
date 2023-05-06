import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import ParticlesAuth from "../authenticationInner/ParticlesAuth.svelte.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { I as InputGroup } from "../../../chunks/InputGroup-94216050.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import "tsparticles";
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
