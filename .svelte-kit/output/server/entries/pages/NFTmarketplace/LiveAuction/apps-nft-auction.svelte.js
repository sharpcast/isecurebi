import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
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
const Apps_nft_auction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Live Auction | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Live Auction",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                    default: () => {
                      return `<div class="${"d-lg-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Live Auction</h5></div>

                            <div class="${"flex-shrink-0 mt-4 mt-lg-0"}"><ul class="${"nav nav-pills filter-btns"}" role="${"tablist"}"><li class="${"nav-item"}" role="${"presentation"}"><button type="${"button"}" data-filter="${"all"}"${add_attribute("class", "nav-link fw-medium active", 0)}>All Items</button></li>
                                    <li class="${"nav-item"}" role="${"presentation"}"><button type="${"button"}" data-filter="${"upto-15"}"${add_attribute("class", "nav-link fw-medium", 0)}>Up to 15%</button></li>
                                    <li class="${"nav-item"}" role="${"presentation"}"><button type="${"button"}" data-filter="${"upto-30"}"${add_attribute("class", "nav-link fw-medium", 0)}>Up to 30%</button></li>
                                    <li class="${"nav-item"}" role="${"presentation"}"><button type="${"button"}" data-filter="${"upto-40"}"${add_attribute("class", "nav-link fw-medium", 0)}>Up to 40%</button></li></ul></div></div>`;
                    }
                  })}`;
                }
              })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(MOCK_DATA.aution, (item) => {
                    return `${validate_component(Col, "Col").$$render($$result, {
                      xxl: 3,
                      lg: 4,
                      md: 6,
                      class: "product-item upto-15"
                    }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, { class: "explore-box card-animate" }, {}, {
                          default: () => {
                            return `<div class="${"position-relative rounded overflow-hidden"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"card-img-top explore-img"}">
                                    <div class="${"discount-time"}">
                                        <h5${add_attribute("id", "auction-time-" + item.id, 0)} class="${"mb-0 text-white"}"></h5>
                                    </div></div>
                                ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                              default: () => {
                                return `<p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i>
                                        ${escape(item.likes)}k
                                    </p>
                                    <h5 class="${"text-success"}"><i class="${"mdi mdi-ethereum"}"></i>
                                        ${escape(item.price)} ETH
                                    </h5>
                                    <h6 class="${"fs-16 mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                                  href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                                }, {}, {
                                  default: () => {
                                    return `${escape(item.title)}`;
                                  }
                                })}</h6>
                                    <div><span class="${"text-muted float-end"}">Available: ${escape(item.available)}</span>
                                        <span class="${"text-muted"}">Sold: ${escape(item.sold)}</span>
                                        <div class="${"progress progress-sm mt-2"}"><div${add_attribute("class", "progress-bar progress-bar-striped bg-" + item.progressClass, 0)} role="${"progressbar"}" style="${"width: " + escape(item.size, true)}" aria-valuenow="${"67"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div>
                                        </div></div>
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
              })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"text-center mb-3"}"><button class="${"btn btn-link text-success mt-2"}"><i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i> Load more
                            </button></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                    default: () => {
                      return `<h6 class="${"card-title mb-0 flex-grow-1"}">Top Drop</h6>
                        ${validate_component(Link, "Link").$$render($$result, { class: "text-muted", href: "#!" }, {}, {
                        default: () => {
                          return `See All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                        }
                      })}`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless align-middle"}"><tbody>${each(MOCK_DATA.topDrop, (item) => {
                        return `<tr><td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm object-cover rounded-circle"}">
                                                    <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                        }, {}, {
                          default: () => {
                            return `<h6 class="${"fs-15 mb-1"}">${escape(item.title)}</h6>`;
                          }
                        })}
                                                        <p class="${"mb-0 text-muted"}">Sold at ${escape(item.price)} ETH</p></div>
                                                </div></td>
                                            <td><small>${escape(item.time)}</small></td>
                                        </tr>`;
                      })}</tbody></table></div>`;
                    }
                  })}`;
                }
              })}
                ${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                    default: () => {
                      return `<h6 class="${"card-title mb-0 flex-grow-1"}">Top Creator</h6>
                        ${validate_component(Link, "Link").$$render($$result, {
                        class: "text-muted",
                        href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
                      }, {}, {
                        default: () => {
                          return `See All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                        }
                      })}`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless align-middle"}"><tbody>${each(MOCK_DATA.topCreator, (item) => {
                        return `<tr><td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm object-cover rounded-circle"}">
                                                    <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                          default: () => {
                            return `<h6 class="${"fs-15 mb-1"}">${escape(item.name)}</h6>`;
                          }
                        })}
                                                        <p class="${"mb-0 text-muted"}">${escape(item.products)} Products</p></div>
                                                </div></td>
                                            <td><button${add_attribute("class", item.isFollow ? "btn btn-sm btn-success" : "btn btn-sm btn-soft-success", 0)}>${escape(item.isFollow ? "Follow" : "Unfollow")}</button></td>
                                        </tr>`;
                      })}</tbody></table></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_nft_auction as default };
