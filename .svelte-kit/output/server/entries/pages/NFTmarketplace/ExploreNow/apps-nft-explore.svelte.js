import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../../chunks/Collapse-6781eb46.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/img-06-fae769a6.js";
import "../../../../chunks/img-04-688285cd.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/binance-8a9ae9f5.js";
const Apps_nft_explore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = true;
  return `${$$result.head += `${$$result.title = `<title>Explore Now | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Explore Now",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><h5 class="${"card-title mb-0 flex-grow-1"}">Explore Product
                            </h5>
                            <div>${validate_component(Link, "Link").$$render($$result, {
                        class: "btn btn-success",
                        id: "filtercollapse",
                        "data-bs-toggle": "collapse",
                        href: "#collapseExample"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-filter-2-line align-bottom"}"></i>
                                    Filters
                                `;
                        }
                      })}</div></div>

                        ${validate_component(Collapse, "Collapse").$$render($$result, { isOpen }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {
                            class: "row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3 g-3"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h6 class="${"text-uppercase fs-12 mb-2"}">Search</h6>

                                    <input type="${"text"}" class="${"form-control"}" placeholder="${"Search product name"}" autocomplete="${"off"}" id="${"searchProductList"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h6 class="${"text-uppercase fs-12 mb-2"}">Select Category
                                    </h6>
                                    <select class="${"form-control"}" data-choices name="${"select-category"}" data-choices-search-false id="${"select-category"}"><option value="${""}">Select Category</option><option value="${"Artwork"}">Artwork</option><option value="${"3d Style"}">3d Style</option><option value="${"Photography"}">Photography</option><option value="${"Collectibles"}">Collectibles</option><option value="${"Crypto Card"}">Crypto Card</option><option value="${"Games"}">Games</option><option value="${"Music"}">Music</option></select>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h6 class="${"text-uppercase fs-12 mb-2"}">File Type</h6>
                                    <select class="${"form-control"}" data-choices name="${"file-type"}" data-choices-search-false id="${"file-type"}"><option value="${""}">File Type</option><option value="${"jpg"}">Images</option><option value="${"mp4"}">Video</option><option value="${"mp3"}">Audio</option><option value="${"gif"}">Gif</option></select>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h6 class="${"text-uppercase fs-12 mb-2"}">Sales Type
                                    </h6>
                                    <select class="${"form-control"}" data-choices name="${"all-sales-type"}" data-choices-search-false id="${"all-sales-type"}"><option value="${""}">All Sales Type</option><option value="${"On Auction"}">On Auction</option><option value="${"Has Offers"}">Has Offers</option></select>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h6 class="${"text-uppercase fs-12 mb-4"}">Price</h6>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><p class="${"text-muted fs-14 mb-0"}">Result: 8745</p></div>
                    <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-muted fs-14",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `All View <i class="${"mdi mdi-chevron-down"}"></i>`;
                    }
                  })}
                            ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Action`;
                        }
                      })}
                                ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Another action`;
                        }
                      })}
                                ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Something else here`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1",
        id: "explorecard-list"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.expolreNow, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "list-element" }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "explore-box card-animate" }, {}, {
                  default: () => {
                    return `<div class="${"explore-place-bid-img"}"><input type="${"hidden"}" class="${"form-control"}" id="${"1"}">
                            <div class="${"d-none"}">undefined</div>
                            <img${add_attribute("src", item.img, 0)} alt="${""}" class="${"card-img-top explore-img"}">
                            <div class="${"bg-overlay"}"></div>
                            <div class="${"place-bid-btn"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                      default: () => {
                        return `<i class="${"ri-auction-fill align-bottom me-1"}"></i> Place
                                    Bid
                                `;
                      }
                    })}
                            </div></div>
                        <div class="${"bookmark-icon position-absolute top-0 end-0 p-2"}"><button type="${"button"}"${add_attribute("class", item.isActive ? "btn btn-icon active" : "btn btn-icon", 0)} data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i>
                            </button></div>
                        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i>${escape(" ")}
                                ${escape(item.likes)}k
                            </p>
                            <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                        }, {}, {
                          default: () => {
                            return `${escape(item.title)}`;
                          }
                        })}</h5>
                            <p class="${"text-muted mb-0"}">${escape(item.category)}</p>
                        `;
                      }
                    })}
                        <div class="${"card-footer border-top border-top-dashed"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 fs-14"}"><i class="${"ri-price-tag-3-fill text-warning align-bottom me-1"}"></i>
                                    Highest: <span class="${"fw-medium"}">${escape(item.highestBid)}ETH</span></div>
                                <h5 class="${"flex-shrink-0 fs-14 text-primary mb-0"}">${escape(item.price)}ETH
                                </h5>
                            </div></div>
                    `;
                  }
                })}
                `;
              }
            })}`;
          })}`;
        }
      })}
        <div class="${"py-4 text-center"}" id="${"noresult"}" style="${"display: none"}"><lord-icon src="${"https://cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 72px; height: 72px;"}"></lord-icon>
            <h5 class="${"mt-4"}">Sorry! No Result Found</h5></div>
        <div class="${"text-center mb-3"}"><button class="${"btn btn-link text-success mt-2"}" id="${"loadmore"}"><i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i>
                Load More
            </button></div>`;
    }
  })}</div>`;
});
export { Apps_nft_explore as default };
