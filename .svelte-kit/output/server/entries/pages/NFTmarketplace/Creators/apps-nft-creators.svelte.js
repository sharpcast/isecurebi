import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
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
let sortBy = "All";
const Apps_nft_creators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sortbyname = [
    { label: "All", value: "All" },
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
    {
      label: "Last 7 Days",
      value: "Last 7 Days"
    },
    {
      label: "Last 30 Days",
      value: "Last 30 Days"
    },
    { label: "This Month", value: "This Month" },
    { label: "Last Year", value: "Last Year" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Creators | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Creators",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-3" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
            default: () => {
              return `<div>${validate_component(Link, "Link").$$render($$result, {
                href: "/projects/apps-projects-create",
                class: "btn btn-success"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add New`;
                }
              })}</div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
            default: () => {
              return `<div class="${"d-flex justify-content-sm-end gap-2"}"><div class="${"search-box ms-2"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Search..."}">
                        <i class="${"ri-search-line search-icon"}"></i></div>
                    <div class="${"choices"}">${validate_component(Select, "Select").$$render($$result, {
                id: "choices-single-default",
                class: "form-control w-md",
                value: sortBy,
                items: sortbyname
              }, {}, {})}</div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.creatorsData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm object-cover rounded"}"></div>
                                <div class="${"ms-3 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                          default: () => {
                            return `<h5 class="${"mb-1"}">${escape(item.title)}</h5>
                                    `;
                          }
                        })}
                                    <p class="${"text-muted mb-0"}"><i class="${"mdi mdi-ethereum text-primary fs-14"}"></i> ${escape(item.price)}</p></div>
                                <div>${validate_component(Dropdown, "Dropdown").$$render($$result, { direction: "start", class: "float-end" }, {}, {
                          default: () => {
                            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                              tag: "button",
                              class: "btn btn-ghost-primary btn-icon",
                              color: ""
                            }, {}, {
                              default: () => {
                                return `<i class="${"ri-more-fill align-middle fs-16"}"></i>
                                        `;
                              }
                            })}
                                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                              default: () => {
                                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "view-item-btn" }, {}, {
                                  default: () => {
                                    return `Share`;
                                  }
                                })}
                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "edit-item-btn" }, {}, {
                                  default: () => {
                                    return `Report`;
                                  }
                                })}
                                        `;
                              }
                            })}
                                    `;
                          }
                        })}
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
              return `<h5 class="${"card-title mb-4 fw-semibold fs-16"}">Creators Grid Lists</h5>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.creatorsListData, (subitem) => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `<img${add_attribute("src", subitem.cardImg, 0)} alt="${""}" class="${"object-cover card-img-top"}" height="${"120"}">
                        <div class="${"card-body text-center"}"><img${add_attribute("src", subitem.img, 0)} alt="${""}" class="${"avatar-md rounded-circle object-cover mt-n5 img-thumbnail border-light mx-auto d-block"}">
                            ${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                      default: () => {
                        return `<h5 class="${"mt-2 mb-1"}">${escape(subitem.title)}</h5>
                            `;
                      }
                    })}
                            <p class="${"text-muted mb-2"}">${escape(subitem.products)} Products</p>
                            <p class="${"text-muted"}">You can make an NFT of a digital painting, a text, a piece of music, a video.</p>
                            <button${add_attribute("class", subitem.isFollowBtn ? "btn btn-success w-100" : "btn btn-soft-success w-100", 0)}>${escape(subitem.isFollowBtn ? "Follow" : "UnFollow")} </button></div>
                    `;
                  }
                })}
                `;
              }
            })}`;
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "g-0 text-center text-sm-start align-items-center mb-4"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div><p class="${"mb-sm-0 text-muted"}">Showing <span class="${"fw-semibold"}">1</span> to <span class="${"fw-semibold"}">10</span> of <span class="${"fw-semibold text-decoration-underline"}">12</span> entries</p></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<ul class="${"pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `Previous`;
                }
              })}</li>
                    <li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `1`;
                }
              })}</li>
                    <li class="${"page-item "}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `2`;
                }
              })}</li>
                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `3`;
                }
              })}</li>
                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `4`;
                }
              })}</li>
                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `5`;
                }
              })}</li>
                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `Next`;
                }
              })}</li></ul>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_nft_creators as default };
