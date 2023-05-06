import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const Auth_404_alt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>404 Error Alt | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"bg-overlay"}"></div>
    <div class="${"auth-page-content overflow-hidden pt-lg-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><lord-icon class="${"avatar-xl"}" src="${"//cdn.lordicon.com/spxnqpau.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 120px;height: 120px"}"></lord-icon>
                                <h1 class="${"text-primary mb-4"}">Oops !</h1>
                                <h4 class="${"text-uppercase"}">Sorry, Page not Found \u{1F62D}
                                </h4>
                                <p class="${"text-muted mb-4"}">The page you are looking for not available!
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
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { Auth_404_alt as default };
