import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
const Auth_offline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Offline | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"}"><div class="${"bg-overlay"}"></div>
    
    <div class="${"auth-page-content overflow-hidden pt-lg-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "card overflow-hidden" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><img src="${"https://img.themesbrand.com/velzon/images/auth-offline.gif"}" alt="${""}" height="${"210"}">
                                <h3 class="${"mt-4 fw-semibold"}">We&#39;re currently offline</h3>
                                <p class="${"text-muted mb-4 fs-14"}">We can&#39;t show you this images because you aren&#39;t connected to the internet. When you\u2019re back online refresh the page or hit the button below</p>
                                <button class="${"btn btn-success btn-border"}"><i class="${"ri-refresh-line align-bottom"}"></i> Refresh</button></div>`;
                    }
                  })}`;
                }
              })}
                    `;
            }
          })}
                `;
        }
      })}
            `;
    }
  })}
        </div>
    </div>`;
});
export { Auth_offline as default };
