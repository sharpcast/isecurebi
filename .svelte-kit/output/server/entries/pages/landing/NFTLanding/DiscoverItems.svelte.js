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
const DiscoverItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const favouriteBtn = (ele) => {
    if (ele.closest("button").classList.contains("active")) {
      ele.closest("button").classList.remove("active");
    } else {
      ele.closest("button").classList.add("active");
    }
  };
  return `<section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center mb-5"}"><h2 class="${"mb-0 fw-semibold lh-base flex-grow-1"}">Discover Items</h2>
                    ${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/ExploreNow/apps-nft-explore",
                class: "btn btn-primary"
              }, {}, {
                default: () => {
                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.discoverItemsData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "explore-box card-animate border" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center mb-3"}"><img${add_attribute("src", item.cardImg, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}">
                            <div class="${"ms-2 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                          default: () => {
                            return `<h6 class="${"mb-0 fs-15"}">${escape(item.author)}</h6>`;
                          }
                        })}
                                <p class="${"mb-0 text-muted fs-13"}">${escape(item.title)}</p></div>
                            <div class="${"bookmark-icon"}"><button type="${"button"}"${add_attribute("class", item.isIcon ? "btn btn-icon" : "btn btn-icon active", 0)} data-bs-toggle="${"button"}" aria-pressed="${"true"}"${add_attribute("onclick", (e) => favouriteBtn(e.target), 0)}><i class="${"mdi mdi-cards-heart fs-16"}"></i></button>
                            </div></div>
                        <div class="${"explore-place-bid-img overflow-hidden rounded"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"explore-img w-100"}">
                            <div class="${"bg-overlay"}"></div>
                            <div class="${"place-bid-btn"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                          default: () => {
                            return `<i class="${"ri-auction-fill align-bottom me-1"}"></i> Place Bid`;
                          }
                        })}
                            </div></div>
                        <div class="${"mt-3"}"><p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i> ${escape(item.likes)}</p>
                            <h5 class="${"text-success"}"><i class="${"mdi mdi-ethereum"}"></i> ${escape(item.price)}</h5>
                            <h6 class="${"fs-16 mb-0"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                        }, {}, {
                          default: () => {
                            return `${escape(item.category)}`;
                          }
                        })}</h6></div>
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
export { DiscoverItems as default };
