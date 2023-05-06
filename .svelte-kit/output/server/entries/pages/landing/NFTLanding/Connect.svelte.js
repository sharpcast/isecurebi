import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/LandingNFT-5443bfa5.js";
import "../../../../chunks/binance-8a9ae9f5.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/img-06-fae769a6.js";
const Connect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"wallet"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h2 class="${"mb-3 fw-semibold lh-base"}">Connect NFT Marketplace</h2>
                    <p class="${"text-muted"}">A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.</p></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.connectData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "text-center border shadow-none" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "py-5 px-4" }, {}, {
                      default: () => {
                        return `<img${add_attribute("src", item.img, 0)} alt="${""}" height="${"55"}" class="${"mb-3 pb-2"}">
                            <h5>${escape(item.title)}</h5>
                            <p class="${"text-muted pb-1"}">${escape(item.textContent)}</p>
                            ${validate_component(Link, "Link").$$render($$result, {
                          href: "#!",
                          class: item.bgColor ? "btn btn-info" : "btn btn-soft-info"
                        }, {}, {
                          default: () => {
                            return `Connect Wallet`;
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
            })}`;
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Connect as default };
