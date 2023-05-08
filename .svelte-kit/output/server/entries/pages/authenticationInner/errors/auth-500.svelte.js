import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../../../chunks/index-aeca7bd0.js";
import { L as Link } from "../../../../chunks/Link-ec28a239.js";
import { C as Col } from "../../../../chunks/Col-eedb9365.js";
import { C as Container } from "../../../../chunks/Container-17fe0983.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { R as Row } from "../../../../chunks/Row-d6617eb9.js";
var error500 = "/_app/assets/error500-b1d33e93.png";
const Auth_500 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>500 Error | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"auth-page-content overflow-hidden p-0"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 4, class: "text-center" }, {}, {
            default: () => {
              return `<div class="${"error-500 position-relative"}"><img${add_attribute("src", error500, 0)} alt="${""}" class="${"img-fluid error-500-img error-img"}">
						<h1 class="${"title text-muted"}">500</h1></div>
					<div><h4>Internal Server Error!</h4>
						<p class="${"text-muted w-75 mx-auto"}">Server Error 500. We&#39;re not exactly sure what
							happened, but our servers say something is wrong.
						</p>
						${validate_component(Link, "Link").$$render($$result, {
                href: "/dashboard",
                class: "btn btn-success"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-home me-1"}"></i>Back to home`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { Auth_500 as default };
