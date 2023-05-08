import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
var error400cover = "/_app/assets/error400-cover-f0940e80.png";
const Auth_404_cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>404 Error Cover | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-content"}"><div class="${"auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"auth-page-content overflow-hidden p-0"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 7, lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center"}"><img${add_attribute("src", error400cover, 0)} alt="${"error img"}" class="${"img-fluid"}">
              <div class="${"mt-3"}"><h3 class="${"text-uppercase"}">Sorry, Page not Found \u{1F62D}</h3>
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
  })}</div></div></div>`;
});
export { Auth_404_cover as default };
