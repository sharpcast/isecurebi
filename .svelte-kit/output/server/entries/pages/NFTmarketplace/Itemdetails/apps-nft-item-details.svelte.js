import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../chunks/TabPane-b01382c8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { c as Img05, a as Img02, I as Img03, d as Img06, b as Img01 } from "../../../../chunks/img-06-fae769a6.js";
import { a as avatar1 } from "../../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { i as img10 } from "../../../../chunks/img-10-09bc0399.js";
import { i as img12, a as img11 } from "../../../../chunks/img-12-ccf074a3.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const Apps_nft_item_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Item Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Item Details",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div class="${"sticky-side-div"}">${validate_component(Card, "Card").$$render($$result, {
                        class: "ribbon-box border shadow-none right"
                      }, {}, {
                        default: () => {
                          return `<div class="${"ribbon-two ribbon-two-danger"}"><span><i class="${"ri-fire-fill align-bottom"}"></i>
                                        Hot</span></div>
                                <img${add_attribute("src", Img05, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                <div class="${"position-absolute bottom-0 p-3"}"><div class="${"position-absolute top-0 end-0 start-0 bottom-0 bg-white opacity-25"}"></div>
                                    ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", Img02, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}
                                        ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", Img03, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}
                                        ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<img src="${"https://img.themesbrand.com/velzon/images/img-3.gif"}" alt="${""}" class="${"img-fluid rounded h-100 object-cover"}">`;
                                }
                              })}
                                        ${validate_component(Col, "Col").$$render($$result, { class: "col-3" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", Img06, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}`;
                            }
                          })}</div>`;
                        }
                      })}
                            <div class="${"hstack gap-2"}"><button class="${"btn btn-success w-100"}">Place Bid</button></div></div>`;
                    }
                  })}
                    ${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "float-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "a",
                            class: "btn btn-ghost-primary btn-icon p-0",
                            role: "button",
                            color: ""
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill align-middle fs-16"}"></i>`;
                            }
                          })}
                                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!", class: "view-item-btn" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i>View`;
                                }
                              })}
                                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!", class: "edit-item-btn" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Edit`;
                                }
                              })}
                                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!", class: "remove-item-btn" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

                            <span class="${"badge badge-soft-info mb-3 fs-12"}"><i class="${"ri-eye-line me-1 align-bottom"}"></i> 8,634
                                people views this</span>
                            <h4>Patterns Arts &amp; Culture</h4>
                            <div class="${"hstack gap-3 flex-wrap"}"><div class="${"text-muted"}">Creators : ${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-primary fw-medium"
                      }, {}, {
                        default: () => {
                          return `Nancy Martino`;
                        }
                      })}</div>
                                <div class="${"vr"}"></div>
                                <div class="${"text-muted"}">Seller : <span class="${"text-body fw-medium"}">Rickey Teran</span></div>
                                <div class="${"vr"}"></div>
                                <div class="${"text-muted"}">Published : <span class="${"text-body fw-medium"}">29 April, 2022</span></div></div>
                            <div class="${"d-flex flex-wrap gap-2 align-items-center mt-3"}"><div class="${"text-muted fs-16"}"><span class="${"mdi mdi-star text-warning"}"></span>
                                    <span class="${"mdi mdi-star text-warning"}"></span>
                                    <span class="${"mdi mdi-star text-warning"}"></span>
                                    <span class="${"mdi mdi-star text-warning"}"></span>
                                    <span class="${"mdi mdi-star text-warning"}"></span></div>
                                <div class="${"text-muted"}">( 5.50k Customer Review )
                                </div></div>
                            ${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-2 border border-dashed rounded text-center"}"><div><p class="${"text-muted fw-medium mb-1"}">Price :
                                            </p>
                                            <h5 class="${"fs-17 text-success mb-0"}"><i class="${"mdi mdi-ethereum me-1"}"></i> 83.06 ETH
                                            </h5></div></div>`;
                            }
                          })}

                                ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-2 border border-dashed rounded text-center"}"><div><p class="${"text-muted fw-medium mb-1"}">Highest bid
                                            </p>
                                            <h5 class="${"fs-17 mb-0"}">104.63 ETH
                                            </h5></div></div>`;
                            }
                          })}

                                ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-2 border border-dashed rounded text-center"}"><div><p class="${"text-muted fw-medium mb-1"}">Stock
                                            </p>
                                            <h5 class="${"fs-17 mb-0"}">12/58 Sale
                                            </h5></div></div>`;
                            }
                          })}

                                ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-2 border border-dashed rounded text-center"}"><div><p class="${"text-muted fw-medium mb-1"}">Auction Ends:
                                            </p>
                                            
                                            <h5 id="${"auction-time-1"}" class="${"mb-0"}"></h5></div></div>`;
                            }
                          })}`;
                        }
                      })}
                            <div class="${"mt-4 text-muted"}"><h5 class="${"fs-14"}">Description :</h5>
                                <p>Cultural patterns are the similar behaviors
                                    within similar situations we witness due to
                                    shared beliefs, values, norms and social
                                    practices that are steady over time. In art,
                                    a pattern is a repetition of specific visual
                                    elements. The dictionary.com definition of
                                    &quot;pattern&quot; is: an arrangement of repeated or
                                    corresponding parts, decorative motifs, etc.
                                </p></div>
                            <div class="${"product-content mt-5"}"><h5 class="${"fs-14 mb-3"}">Product Description :
                                </h5>

                                ${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav-tabs-custom nav-success"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                class: "active"
                              }, {}, {
                                default: () => {
                                  return `Place Bids
                                        `;
                                }
                              })}`;
                            }
                          })}
                                    ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `Additional Information
                                        `;
                                }
                              })}`;
                            }
                          })}
                                    ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `Details
                                        `;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
                                ${validate_component(TabContent, "TabContent").$$render($$result, {
                        class: "border border-top-0 p-4",
                        id: "nav-tabContent"
                      }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            id: "nav-speci",
                            class: "active"
                          }, {}, {
                            default: () => {
                              return `<div class="${"table-responsive"}"><table class="${"table align-middle table-nowrap mb-0"}"><tbody><tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", Img01, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                ${validate_component(Link, "Link").$$render($$result, {
                                href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                                class: "link-dark"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"mb-0 ms-2"}">Brave
                                                                        Tigers
                                                                        NFT</span>`;
                                }
                              })}</div></th>
                                                        <td>0.235 ETH</td>
                                                        <td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<h6 class="${"mb-1"}">Alexis
                                                                            Clarke
                                                                        </h6>`;
                                }
                              })}
                                                                    <p class="${"text-muted mb-0"}">Creators
                                                                    </p></div></div></td>
                                                        <td>29 min ago</td></tr>
                                                    <tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", Img03, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                ${validate_component(Link, "Link").$$render($$result, {
                                href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                                class: "link-dark"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"mb-0 ms-2"}">Creative
                                                                        filtered
                                                                        portrait</span>`;
                                }
                              })}</div></th>
                                                        <td>571.24 ETH</td>
                                                        <td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<h6 class="${"mb-1"}">Glen
                                                                            Matney
                                                                        </h6>`;
                                }
                              })}
                                                                    <p class="${"text-muted mb-0"}">Creators
                                                                    </p></div></div></td>
                                                        <td>37 min ago</td></tr>
                                                    <tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img src="${"https://img.themesbrand.com/velzon/images/img-4.gif"}" alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                ${validate_component(Link, "Link").$$render($$result, {
                                href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                                class: "link-dark"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"mb-0 ms-2"}">Evolved
                                                                        Reality</span>`;
                                }
                              })}</div></th>
                                                        <td>130.39 ETH</td>
                                                        <td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<h6 class="${"mb-1"}">Herbert
                                                                            Stokes
                                                                        </h6>`;
                                }
                              })}
                                                                    <p class="${"text-muted mb-0"}">Creators
                                                                    </p></div></div></td>
                                                        <td>1 hrs ago</td></tr>
                                                    <tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", Img06, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                ${validate_component(Link, "Link").$$render($$result, {
                                href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                                class: "link-dark"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"mb-0 ms-2"}">Robotic
                                                                        Body Art</span>`;
                                }
                              })}</div></th>
                                                        <td>81.72 ETH</td>
                                                        <td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded object-cover"}">
                                                                <div class="${"ms-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<h6 class="${"mb-1"}">Michael
                                                                            Morris
                                                                        </h6>`;
                                }
                              })}
                                                                    <p class="${"text-muted mb-0"}">Creators
                                                                    </p></div></div></td>
                                                        <td>1 hrs ago</td></tr></tbody></table></div>`;
                            }
                          })}
                                    ${validate_component(TabPane, "TabPane").$$render($$result, {
                            id: "nav-detail",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"table-responsive"}"><table class="${"table mb-0"}"><tbody><tr><th scope="${"row"}"${add_attribute("style", { width: "200px" }, 0)}>Size</th>
                                                        <td>650 x 650px (66.8
                                                            KB)</td></tr>
                                                    <tr><th scope="${"row"}">Brand</th>
                                                        <td>Patterns arts &amp;
                                                            culture
                                                        </td></tr>
                                                    <tr><th scope="${"row"}">Formats</th>
                                                        <td>JPEG / PNG / PDF</td></tr>
                                                    <tr><th scope="${"row"}">Token</th>
                                                        <td>VLZ74516523</td></tr>
                                                    <tr><th scope="${"row"}">Blockchain</th>
                                                        <td>Ethereum</td></tr>
                                                    <tr><th scope="${"row"}">Contacts</th>
                                                        <td>E545D145S5646544DS541SFDB213C5Z</td></tr></tbody></table></div>`;
                            }
                          })}
                                    ${validate_component(TabPane, "TabPane").$$render($$result, {
                            id: "nav-detail",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div><h5 class="${"font-size-16 mb-3"}">Patterns arts &amp; culture
                                            </h5>
                                            <p>Cultural patterns are the
                                                similar behaviors within similar
                                                situations we witness due to
                                                shared beliefs, values, norms
                                                and social practices that are
                                                steady over time. In art, a
                                                pattern is a repetition of
                                                specific visual elements. The
                                                dictionary.com definition of
                                                &quot;pattern&quot; is: an arrangement of
                                                repeated or corresponding parts,
                                                decorative motifs, etc.
                                            </p>
                                            <div><p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i> On digital or printed media
                                                </p>
                                                <p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i> For commercial and personal
                                                    projects
                                                </p>
                                                <p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i> From anywhere in the world
                                                </p>
                                                <p class="${"mb-0"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i> Full copyrights sale
                                                </p></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
                            <div class="${"mt-5"}"><div><h5 class="${"fs-14 mb-3"}">Ratings &amp; Reviews
                                    </h5></div>
                                ${validate_component(Row, "Row").$$render($$result, { class: "gy-4 gx-0" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div><div class="${"pb-3"}"><div class="${"bg-light px-3 py-2 rounded-2 mb-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"fs-16 align-middle text-warning"}"><i class="${"ri-star-fill"}"></i>
                                                                <i class="${"ri-star-fill"}"></i>
                                                                <i class="${"ri-star-fill"}"></i>
                                                                <i class="${"ri-star-fill"}"></i>
                                                                <i class="${"ri-star-half-fill"}"></i></div></div>
                                                        <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">4.8 out of 5
                                                            </h6></div></div></div>
                                                <div class="${"text-center"}"><div class="${"text-muted"}">Total <span class="${"fw-medium"}">7.32k</span> reviews
                                                    </div></div></div>

                                            <div class="${"mt-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0"}">5 star
                                                            </h6></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><div class="${"progress animated-progress progress-sm"}"><div class="${"progress-bar bg-success"}" role="${"progressbar"}" style="${"width: 50.16%"}" aria-valuenow="${"50.16"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">2758
                                                            </h6></div>`;
                                    }
                                  })}`;
                                }
                              })}

                                                ${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0"}">4 star
                                                            </h6></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><div class="${"progress animated-progress progress-sm"}"><div class="${"progress-bar bg-success"}" role="${"progressbar"}" style="${"width: 19.32%"}" aria-valuenow="${"19.32"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">1063
                                                            </h6></div>`;
                                    }
                                  })}`;
                                }
                              })}

                                                ${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0"}">3 star
                                                            </h6></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><div class="${"progress animated-progress progress-sm"}"><div class="${"progress-bar bg-success"}" role="${"progressbar"}" style="${"width: 18.12%"}" aria-valuenow="${"18.12"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">997
                                                            </h6></div>`;
                                    }
                                  })}`;
                                }
                              })}

                                                ${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0"}">2 star
                                                            </h6></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><div class="${"progress animated-progress progress-sm"}"><div class="${"progress-bar bg-warning"}" role="${"progressbar"}" style="${"width: 7.42%"}" aria-valuenow="${"7.42"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div></div>`;
                                    }
                                  })}

                                                    ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">408
                                                            </h6></div>`;
                                    }
                                  })}`;
                                }
                              })}

                                                ${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0"}">1 star
                                                            </h6></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><div class="${"progress animated-progress progress-sm"}"><div class="${"progress-bar bg-danger"}" role="${"progressbar"}" style="${"width: 4.98%"}" aria-valuenow="${"4.98"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div></div>`;
                                    }
                                  })}
                                                    ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                    default: () => {
                                      return `<div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">274
                                                            </h6></div>`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}

                                    ${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
                            default: () => {
                              return `<div class="${"ps-lg-4"}"><div class="${"d-flex flex-wrap align-items-start gap-3"}"><h5 class="${"fs-14"}">Reviews:</h5></div>

                                            <div class="${"me-lg-n3 pe-lg-4"}" data-simplebar style="${"max-height: 225px;"}"><ul class="${"list-unstyled mb-0"}"><li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"text-warning"}"><i class="${"mdi mdi-star"}"></i>
                                                                        <i class="${"mdi mdi-star"}"></i>
                                                                        <i class="${"mdi mdi-star"}"></i>
                                                                        <i class="${"mdi mdi-star"}"></i>
                                                                        <i class="${"mdi mdi-star"}"></i></div>
                                                                    <div class="${"vr"}"></div>
                                                                    <div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Superb
                                                                            Artwork
                                                                        </h6></div></div></div>

                                                            <div class="${"d-flex flex-grow-1 gap-2 mb-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-block" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img12, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}">`;
                                }
                              })}
                                                                ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-block" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img11, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}">`;
                                }
                              })}
                                                                ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-block" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}">`;
                                }
                              })}</div>

                                                            <div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Henry
                                                                    </h5></div>

                                                                <div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">12 Jul,
                                                                        21
                                                                    </p></div></div></div></li>
                                                    <li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i> 4.0
                                                                    </div>
                                                                    <div class="${"vr"}"></div>
                                                                    <div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Great
                                                                            at
                                                                            this
                                                                            price,
                                                                            Product
                                                                            quality
                                                                            and
                                                                            look
                                                                            is
                                                                            awesome.
                                                                        </p></div></div></div>
                                                            <div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Nancy
                                                                    </h5></div>

                                                                <div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">06 Jul,
                                                                        21
                                                                    </p></div></div></div></li>
                                                    <li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i> 4.2
                                                                    </div>
                                                                    <div class="${"vr"}"></div>
                                                                    <div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Good
                                                                            product.
                                                                            I am
                                                                            so
                                                                            happy.
                                                                        </p></div></div></div>
                                                            <div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Joseph
                                                                    </h5></div>

                                                                <div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">06 Jul,
                                                                        21
                                                                    </p></div></div></div></li>
                                                    <li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i> 4.1
                                                                    </div>
                                                                    <div class="${"vr"}"></div>
                                                                    <div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Nice
                                                                            Product,
                                                                            Good
                                                                            Quality.
                                                                        </p></div></div></div>
                                                            <div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Jimmy
                                                                    </h5></div>

                                                                <div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">24 Jun,
                                                                        21
                                                                    </p></div></div></div></li></ul></div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
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
export { Apps_nft_item_details as default };
