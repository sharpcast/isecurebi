import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
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
const Apps_nft_collections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Collections | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Collections",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-3 align-items-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
            default: () => {
              return `<div><h5 class="${"mb-0"}">Top Collections</h5></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
            default: () => {
              return `<div class="${"d-flex justify-content-sm-end gap-2"}"><div class="${"search-box ms-2"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Search..."}">
                        <i class="${"ri-search-line search-icon"}"></i></div>
                    <div class="${"choices"}"><select class="${"form-control w-md"}"><option value="${"All"}">All</option><option value="${"Today"}" defaultvalue>Today</option><option value="${"Yesterday"}">Yesterday</option><option value="${"Last 7 Days"}">Last 7 Days</option><option value="${"Last 30 Days"}">Last 30 Days</option><option value="${"This Month"}">This Month</option><option value="${"Last Year"}">Last Year</option></select></div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.topCollection, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "col-xl-3 col-md-4 col-sm-6" }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                          default: () => {
                            return `${each(item.subItem, (subitem) => {
                              return `<div class="${"col-6"}">${each(subitem.isChildren, (subsubitem) => {
                                return `<img${add_attribute("src", subsubitem.img, 0)} alt="${""}"${add_attribute("class", "img-fluid rounded " + subsubitem.imgClass, 0)}>`;
                              })}
                                </div>`;
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
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "g-0 text-center text-sm-start align-items-center mb-4"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div><p class="${"mb-sm-0 text-muted"}">Showing <span class="${"fw-semibold"}">1</span> to <span class="${"fw-semibold"}">8</span> of <span class="${"fw-semibold text-decoration-underline"}">12</span> entries</p></div>`;
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
export { Apps_nft_collections as default };
