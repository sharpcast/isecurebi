import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
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
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"marketplace"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h2 class="${"mb-3 fw-semibold lh-base"}">Explore Products</h2>
                    <p class="${"text-muted mb-4"}">Collection widgets specialize in displaying many elements of the same type, such as a collection of pictures from a collection of articles.</p>
                    ${validate_component(Nav, "Nav").$$render($$result, {
                pills: true,
                class: "nav-pills filter-btns justify-content-center",
                role: "tablist"
              }, {}, {
                default: () => {
                  return `${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: " fw-medium active"
                      }, {}, {
                        default: () => {
                          return `All Items`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: "fw-medium"
                      }, {}, {
                        default: () => {
                          return `Artwork`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: "fw-medium"
                      }, {}, {
                        default: () => {
                          return `Music`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: "fw-medium"
                      }, {}, {
                        default: () => {
                          return `Games`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: "fw-medium"
                      }, {}, {
                        default: () => {
                          return `Crypto Card`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        type: "button",
                        class: "fw-medium"
                      }, {}, {
                        default: () => {
                          return `3d Style`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.productData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, {
              lg: 4,
              class: "product-item " + item.isClass
            }, {}, {
              default: () => {
                return `<div class="${"card explore-box card-animate"}"><div class="${"bookmark-icon position-absolute top-0 end-0 p-2"}"><button type="${"button"}" class="${"btn btn-icon active"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button></div>
                        <div class="${"explore-place-bid-img"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"card-img-top explore-img"}">
                            <div class="${"bg-overlay"}"></div>
                            <div class="${"place-bid-btn"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                  default: () => {
                    return `<i class="${"ri-auction-fill align-bottom me-1"}"></i> Place Bid`;
                  }
                })}
                            </div></div>
                        <div class="${"card-body"}"><p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i> ${escape(item.likes)}</p>
                            <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                  href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                }, {}, {
                  default: () => {
                    return `${escape(item.title)}`;
                  }
                })}</h5>
                            <p class="${"text-muted mb-0"}">${escape(item.category)}</p></div>
                        <div class="${"card-footer border-top border-top-dashed"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 fs-14"}"><i class="${"ri-price-tag-3-fill text-warning align-bottom me-1"}"></i> Highest: <span class="${"fw-medium"}">${escape(item.highest)}</span></div>
                                <h5 class="${"flex-shrink-0 fs-14 text-primary mb-0"}">${escape(item.price)}</h5></div>
                        </div></div>
                `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Products as default };
