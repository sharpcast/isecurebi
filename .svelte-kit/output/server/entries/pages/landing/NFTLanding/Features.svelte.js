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
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h2 class="${"mb-3 fw-semibold lh-base"}">Create and Sell Your NFTs</h2>
                    <p class="${"text-muted"}">The process of creating an NFT may cost less than a dollar, but the process of selling it can cost up to a thousand dollars. For example, Allen Gannett, a software developer.</p></div>`;
            }
          })}`;
        }
      })}
        
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.featuresData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "shadow-none" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm"}">
                            <h5 class="${"mt-4"}">${escape(item.title)}</h5>
                            <p class="${"text-muted fs-14"}">${escape(item.textConent)}</p>
                            ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-success fs-14" }, {}, {
                          default: () => {
                            return `Read More <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
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
export { Features as default };
