import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../chunks/index-aeca7bd0.js";
import { C as Col } from "../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../chunks/Container-17fe0983.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../chunks/Row-d6617eb9.js";
import ParticlesAuth from "../authenticationInner/ParticlesAuth.svelte.js";
import { L as Link } from "../../../chunks/Link-ec28a239.js";
import "tsparticles";
var maintenanceImg = "/_app/assets/maintenance-7033f805.png";
const Pages_maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Maintenance | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center mt-sm-5 pt-4"}"><div class="${"mb-5 text-white-50"}"><h1 class="${"display-5 coming-soon-text"}">Site is Under Maintenance</h1>
                            <p class="${"fs-14"}">Please check back in sometime</p>
                            <div class="${"mt-4 pt-2"}">${validate_component(Link, "Link").$$render($$result, { href: "/", class: "btn btn-success" }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-home me-1"}"></i> Back to Home`;
                    }
                  })}</div></div>
                        ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mb-5" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 8 }, {}, {
                        default: () => {
                          return `<div><img${add_attribute("src", maintenanceImg, 0)} alt="${""}" class="${"img-fluid"}"></div>`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}`;
});
export { Pages_maintenance as default };
