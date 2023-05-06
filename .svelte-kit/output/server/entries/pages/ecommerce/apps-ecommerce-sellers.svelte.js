import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import SellerChats from "./SellerChats.svelte.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import "../../../chunks/img-1-6f6b648d.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/img-6-fd986b52.js";
import "../../../chunks/img-7-0d61b03f.js";
import "../../../chunks/img-8-1e4e4e71.js";
import "../../../chunks/img-10-2971869e.js";
import "../../../chunks/img-12-ccf074a3.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/img-6-7ff883ab.js";
import "../../../chunks/img-7-06bdf5b0.js";
import "../../../chunks/img-8-ebcd4c34.js";
const Apps_ecommerce_sellers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const optionvisibility = [
    {
      value: "Select Categories",
      label: "Select Categories"
    },
    { value: "All", label: "All" },
    { value: "Retailer", label: "Retailer" },
    {
      value: "Health & Medicine",
      label: "Health & Medicine"
    },
    {
      value: "Manufacturer",
      label: "Manufacturer"
    },
    {
      value: "Food Service",
      label: "Food Service"
    },
    {
      value: "Computers & Electronics",
      label: "Computers & Electronics"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Sellers | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Sellers", pageTitle: "Ecommerce" }, {}, {})}
		${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0 rounded" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
                    default: () => {
                      return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control search"}" placeholder="${"Search for sellers & owner name or something..."}"> <i class="${"ri-search-line search-icon"}"></i></div>`;
                    }
                  })}
					${validate_component(Col, "Col").$$render($$result, { xxl: 3, class: "ms-auto" }, {}, {
                    default: () => {
                      return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                        class: "form-control",
                        items: optionvisibility,
                        placeholder: "Select Categories"
                      }, {}, {})}</div>`;
                    }
                  })}
					<div class="${"col-lg-auto"}"><div class="${"hstack gap-2"}"><button type="${"button"}" class="${"btn btn-danger"}"><i class="${"ri-equalizer-fill me-1 align-bottom"}"></i> Filters</button>
							<button class="${"btn btn-success"}" data-bs-toggle="${"modal"}" data-bs-target="${"#addSeller"}"><i class="${"ri-add-fill me-1 align-bottom"}"></i> Add Seller</button></div></div>
					`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.sellersList, (seller) => {
            return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {
                  class: "ribbon-box right overflow-hidden"
                }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                      default: () => {
                        return `${seller.isTrending ? `<div class="${"ribbon ribbon-info ribbon-shape trending-ribbon"}"><i class="${"ri-flashlight-fill text-white align-bottom"}"></i>
									<span class="${"trending-ribbon-text"}">Trending</span>
								</div>` : ``}

							<img${add_attribute("src", seller.img, 0)} alt="${""}" height="${"45"}">
							<h5 class="${"mb-1 mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/ecommerce/apps-ecommerce-seller-details",
                          class: "link-primary"
                        }, {}, {
                          default: () => {
                            return `${escape(seller.label)}`;
                          }
                        })}</h5>
							<p class="${"text-muted mb-4"}">${escape(seller.name)}</p>
							${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                          default: () => {
                            return `<div class="${"col-lg-8"}">${validate_component(SellerChats, "SellerChats").$$render($$result, {
                              color: seller.color,
                              id: seller.id,
                              data: seller.chartdata
                            }, {}, {})}</div>
							`;
                          }
                        })}
							${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                          default: () => {
                            return `<div class="${"col-lg-6 border-end-dashed border-end"}"><h5>${escape(seller.stock)}</h5>
									<span class="${"text-muted"}">Item Stock</span></div>
								<div class="${"col-lg-6"}"><h5>${escape(seller.balance)}</h5>
									<span class="${"text-muted"}">Wallet Balance</span></div>
							`;
                          }
                        })}
							<div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/ecommerce/apps-ecommerce-seller-details",
                          class: "btn btn-light w-100"
                        }, {}, {
                          default: () => {
                            return `View Details`;
                          }
                        })}</div>
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
        class: "g-0 text-center text-sm-start align-items-center mb-3"
      }, {}, {
        default: () => {
          return `<div class="${"col-sm-6"}"><div><p class="${"mb-sm-0"}">Showing 1 to 8 of 12 entries</p></div></div>
			
			<div class="${"col-sm-6"}"><ul class="${"pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `<i class="${"mdi mdi-chevron-left"}"></i>`;
            }
          })}</li>
					<li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `1`;
            }
          })}</li>
					<li class="${"page-item "}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `2`;
            }
          })}</li>
					<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `3`;
            }
          })}</li>
					<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `4`;
            }
          })}</li>
					<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `5`;
            }
          })}</li>
					<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
            default: () => {
              return `<i class="${"mdi mdi-chevron-right"}"></i>`;
            }
          })}</li></ul></div>
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_sellers as default };
