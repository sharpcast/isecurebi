import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import ParticlesAuth from "../ParticlesAuth.svelte.js";
import "tsparticles";
var error = "/_app/assets/error-1d7a2c95.svg";
const Auth_404_basic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>404 Error Basic | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"auth-page-wrapper"}">${validate_component(ParticlesAuth, "ParticlesAuth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"auth-page-content"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center pt-4"}"><div class="${""}"><img${add_attribute("src", error, 0)} alt="${""}" class="${"error-basic-img move-animation"}"></div>
							<div class="${"mt-n4"}"><h1 class="${"display-1 fw-medium"}">404</h1>
								<h3 class="${"text-uppercase"}">Sorry, Page not Found \u{1F62D}
								</h3>
								<p class="${"text-muted mb-4"}">The page you are looking for not available!
								</p>
								${validate_component(Link, "Link").$$render($$result, {
                    href: "/dashboard",
                    class: "btn btn-success"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-home me-1"}"></i>Back to home`;
                    }
                  })}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}</div>`;
});
export { Auth_404_basic as default };
