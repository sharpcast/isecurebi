import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
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
var BgPattern = "/_app/assets/bg-pattern-06559b9d.png";
const Apps_nft_marketplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Marketplace | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Marketplace",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(MOCK_DATA.marketPlacewidget, (item) => {
                    return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                  default: () => {
                                    return `${each(item.subItem, (subitem) => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `${each(subitem.isChildren, (subsubitem) => {
                                            return `<img${add_attribute("src", subsubitem.img, 0)} alt="${""}"${add_attribute("class", "img-fluid rounded " + subsubitem.imgClass, 0)}>`;
                                          })}
                                        `;
                                        }
                                      })}`;
                                    })}
                                    `;
                                  }
                                })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                  default: () => {
                                    return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                  }
                                })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                  default: () => {
                                    return `${escape(item.category)} <span class="${"badge badge-soft-success"}">${escape(item.quantity)}</span>`;
                                  }
                                })}</h5>
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
          })}

            ${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
            default: () => {
              return `<div class="${"alert alert-danger"}">Up to <b>50% OFF</b>, Hurry up before the stock ends
                </div>
                ${validate_component(Card, "Card").$$render($$result, {
                class: "bg-primary",
                style: "background-image: url($" + BgPattern + ")"
              }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `<span class="${"badge bg-info fw-medium mb-3 fs-12"}">Trending Artwork</span>
                        <h3 class="${"text-white lh-base"}">Discover, Collect, Sell and Create your own NFT</h3>
                        <p class="${"text-white-75 mb-3"}">Take advantage of the first text-based NFT. Select a text or write your own and let it live forever on the Ethereum blockchain you or future owners can add text to an existing ChainText token..</p>
                        <div class="${"hstack gap-2"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/NFTmarketplace/CreateNFT/apps-nft-create",
                        class: "btn btn-success"
                      }, {}, {
                        default: () => {
                          return `Create NFT`;
                        }
                      })}
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/NFTmarketplace/ExploreNow/apps-nft-explore",
                        class: "btn btn-danger"
                      }, {}, {
                        default: () => {
                          return `Explore Now`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden shadow-none" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "bg-soft-success text-success fw-semibold d-flex"
                  }, {}, {
                    default: () => {
                      return `<div class="${"marquee"}"><div><span>NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes explained. Every NFT is unique in it&#39;s creative design and cannot be duplicated, making them limited and rare. NFTs get their value because the transaction proves ownership of the art.</span>
                                <span>NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes explained. Every NFT is unique in it&#39;s creative design and cannot be duplicated, making them limited and rare. NFTs get their value because the transaction proves ownership of the art.</span></div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"d-lg-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0 fw-semibold fs-16"}">Trending Artwork</h5></div>
                    <div class="${"flex-shrink-0 mt-4 mt-lg-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/ExploreNow/apps-nft-explore",
                class: "btn btn-soft-primary"
              }, {}, {
                default: () => {
                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.tradingArtworkData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "explore-box" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center mb-3"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}">
                                <div class="${"ms-2 flex-grow-1"}"><h6 class="${"mb-0 fs-15"}">${escape(item.author)}</h6>
                                    <p class="${"mb-0 text-muted"}">${escape(item.title)}</p></div>
                                <div class="${"bookmark-icon"}"><button type="${"button"}"${add_attribute("class", item.isActive ? "btn btn-icon active " : "btn btn-icon", 0)} data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button>
                                </div></div>
                            <div class="${"explore-place-bid-img overflow-hidden rounded"}"><img${add_attribute("src", item.cardImg, 0)} alt="${""}" class="${"img-fluid explore-img"}">
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
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"d-lg-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0 fw-semibold fs-16"}">Recent NFTs Artwork</h5></div>
                    <div class="${"flex-shrink-0 mt-4 mt-lg-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/Creators/apps-nft-creators",
                class: "btn btn-soft-primary"
              }, {}, {
                default: () => {
                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.nftArtworkData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "explore-box card-animate" }, {}, {
                  default: () => {
                    return `<div class="${"bookmark-icon position-absolute top-0 end-0 p-2"}"><button type="${"button"}" class="${"btn btn-icon active"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button></div>
                        <div class="${"explore-place-bid-img"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"card-img-top explore-img"}">
                            <div class="${"bg-overlay"}"></div>
                            <div class="${"place-bid-btn"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                      default: () => {
                        return `<i class="${"ri-auction-fill align-bottom me-1"}"></i> Place Bid`;
                      }
                    })}
                            </div></div>
                        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i> ${escape(item.likes)}</p>
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
                        <div class="${"card-footer border-top border-top-dashed"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 fs-14"}"><i class="${"ri-price-tag-3-fill text-warning align-bottom me-1"}"></i> Highest: <span class="${"fw-medium"}">${escape(item.highest)}</span></div>
                                <h5 class="${"flex-shrink-0 fs-14 text-primary mb-0"}">${escape(item.price)}</h5>
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

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"d-lg-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0 fw-semibold fs-16"}">Popular Creators</h5></div>
                    <div class="${"flex-shrink-0 mt-4 mt-lg-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/Creators/apps-nft-creators",
                class: "btn btn-soft-primary"
              }, {}, {
                default: () => {
                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.popularCreatorsNFT, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `<img${add_attribute("src", item.cardImg, 0)} alt="${""}" class="${"card-img-top object-cover"}" height="${"120"}">
                        ${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center" }, {}, {
                      default: () => {
                        return `<img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"}">
                            <h5 class="${"mt-3 mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                          default: () => {
                            return `${escape(item.author)}`;
                          }
                        })}</h5>
                            <p class="${"text-muted"}">${escape(item.products)} Products</p>
                            <div><button${add_attribute("class", item.isFollow ? "btn btn-primary btn-sm" : "btn btn-soft-primary btn-sm", 0)}>${escape(item.isFollow ? "Follow" : "Unfollow")}</button></div>
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
  })}</div>`;
});
export { Apps_nft_marketplace as default };
