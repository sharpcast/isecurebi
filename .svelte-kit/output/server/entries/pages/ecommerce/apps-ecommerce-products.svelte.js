import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { R as RangeSlider } from "../../../chunks/RangeSlider-5437e8ff.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import Actions from "./Actions.svelte.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
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
var appsEcommerceProducts_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';",
  map: null
};
const Apps_ecommerce_products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  const SingleOptions = [
    { value: "Watches", label: "Watches" },
    { value: "Headset", label: "Headset" },
    { value: "Sweatshirt", label: "Sweatshirt" },
    { value: "20% off", label: "20% off" },
    { value: "4 star", label: "4 star" }
  ];
  const data = MOCK_DATA.productsData;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    { id: "image", hidden: true },
    { id: "name", hidden: true },
    { id: "category", hidden: true },
    {
      name: "Product",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm bg-light rounded p-1">
                  <img
                    src=${row.cells[1].data}
                    alt=""
                    class="img-fluid d-block"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-14 mb-1">
                  <Link
                    href="/ecommerce/apps-ecommerce-product-details"
                    class="text-dark"
                  >
                    ${row.cells[2].data}
                  </Link>
                </h5>
                <p class="text-muted mb-0">
                  Category :
                  <span class="fw-medium">
                    ${row.cells[3].data}
                  </span>
                </p>
              </div>
            </div>`)
    },
    { id: "stock", name: "Stock" },
    {
      id: "price",
      name: "Price",
      formatter: (product) => html(`$ ${product}.00`)
    },
    { id: "orders", name: "Orders" },
    {
      id: "rating",
      name: "Rating",
      formatter: (product) => html(`<span>
        <span class="badge bg-light text-body fs-12 fw-medium">
          <i class="mdi mdi-star text-warning me-1"></i>${product}
        </span>
      </span>`)
    },
    {
      id: "publishedDate",
      name: "Published",
      formatter: (product) => html(`<span>
        ${product[0]}
        <small class="text-muted ms-1">${product[1]}</small>
      </span>`)
    },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: Actions }
      }
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Products | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Products",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-16"}">Filters</h5></div>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `Clear All`;
                        }
                      })}</div></div>

						<div class="${"filter-choices-input"}">${validate_component(Select, "Select").$$render($$result, {
                        class: "form-control",
                        placeholder: "Choose ...",
                        title: "idStatus",
                        items: SingleOptions,
                        isMulti: true
                      }, {}, {})}</div>`;
                    }
                  })}

					<div class="${"accordion accordion-flush"}"><div class="${"card-body border-bottom"}"><div><p class="${"text-muted text-uppercase fs-12 fw-medium mb-2"}">Products</p>
								<ul class="${"list-unstyled mb-0"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-flex py-1" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Grocery</h5></div>`;
                    }
                  })}</li>
									<li>${validate_component(Link, "Link").$$render($$result, {
                    class: "d-flex py-1",
                    "data-bs-toggle": "collapse",
                    href: "#filterlist-fashion",
                    role: "button",
                    "aria-expanded": "true",
                    "aria-controls": "filterlist-fashion"
                  }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Fashion</h5></div>
											<div class="${"flex-shrink-0 ms-2"}"><span class="${"badge bg-light text-muted"}">5</span></div>`;
                    }
                  })}

										<div class="${"collapse show"}" id="${"filterlist-fashion"}"><ul class="${"ps-4"}"><li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Men&#39;s Wear`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Women Western Wear`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Footwear`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Watches`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Kids`;
                    }
                  })}</li></ul></div></li>
									<li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-flex py-1" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Mobiles</h5></div>`;
                    }
                  })}</li>
									<li>${validate_component(Link, "Link").$$render($$result, {
                    class: "d-flex py-1",
                    "data-bs-toggle": "collapse",
                    href: "#filterlist-electronics",
                    role: "button",
                    "aria-expanded": "false",
                    "aria-controls": "filterlist-electronics"
                  }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Electronics</h5></div>
											<div class="${"flex-shrink-0 ms-2"}"><span class="${"badge bg-light text-muted"}">5</span></div>`;
                    }
                  })}

										<div class="${"collapse"}" id="${"filterlist-electronics"}"><ul class="${"ps-4"}"><li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Audio`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Computer`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Laptop`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Gaming`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Tablets`;
                    }
                  })}</li></ul></div></li>

									<li>${validate_component(Link, "Link").$$render($$result, {
                    class: "d-flex py-1",
                    href: "#filterlist-furniture"
                  }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Home &amp; Furniture</h5></div>
											<div class="${"flex-shrink-0 ms-2"}"><span class="${"badge bg-light text-muted"}">6</span></div>`;
                    }
                  })}

										<div class="${"collapse"}" id="${"filterlist-furniture"}"><ul class="${"ps-4"}"><li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Home Furnishing`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Living rooms`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Kitchen &amp; Dining`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Bedroom Room`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Home Decor`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Tools &amp; Utility`;
                    }
                  })}</li></ul></div></li>

									<li>${validate_component(Link, "Link").$$render($$result, {
                    class: "d-flex py-1",
                    href: "#filterlist-appliances"
                  }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Appliances</h5></div>
											<div class="${"flex-shrink-0 ms-2"}"><span class="${"badge bg-light text-muted"}">7</span></div>`;
                    }
                  })}

										<div class="${"collapse"}" id="${"filterlist-appliances"}"><ul class="${"ps-4"}"><li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Televisions`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Washing Machines`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Air Conditioners`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Refrigerator`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Kitchen Appliances`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Home Appliances`;
                    }
                  })}</li>
												<li>${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "d-block py-1 text-muted"
                  }, {}, {
                    default: () => {
                      return `Premium Appliances`;
                    }
                  })}</li></ul></div></li>

									<li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "d-flex py-1" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">Kids</h5></div>`;
                    }
                  })}</li></ul></div></div>

						<div class="${"card-body border-bottom"}"><p class="${"text-muted text-uppercase fs-12 fw-medium mb-5"}">Price</p>

							${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                    min: 0,
                    max: 1e3,
                    pipstep: 100,
                    pips: true,
                    range: true,
                    values: [200, 800],
                    first: "label",
                    last: "label",
                    prefix: "$",
                    float: true
                  }, {}, {})}</div>

						<div class="${"accordion-item"}"><h2 class="${"accordion-header"}"><button class="${"accordion-button bg-transparent shadow-none"}" type="${"button"}" id="${"flush-headingBrands"}"><span class="${"text-muted text-uppercase fs-12 fw-medium"}">Brands </span>${escape(" ")}
									<span class="${"badge bg-success rounded-pill align-middle ms-1"}">2 </span></button></h2>
							${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#flush-headingBrands" }, {}, {
                    default: () => {
                      return `<div id="${"flush-collapseBrands"}" class="${"accordion-collapse collapse show"}" aria-labelledby="${"flush-headingBrands"}"><div class="${"accordion-body text-body pt-0"}"><div class="${"search-box search-box-sm"}"><input type="${"text"}" class="${"form-control bg-light border-0"}" placeholder="${"Search Brands..."}">
											<i class="${"ri-search-line search-icon"}"></i></div>
										<div class="${"d-flex flex-column gap-2 mt-3"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productBrandRadio5"}" defaultchecked>
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productBrandRadio5"
                      }, {}, {
                        default: () => {
                          return `Boat`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productBrandRadio4"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productBrandRadio4"
                      }, {}, {
                        default: () => {
                          return `OnePlus`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productBrandRadio3"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productBrandRadio3"
                      }, {}, {
                        default: () => {
                          return `Realme`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productBrandRadio2"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productBrandRadio2"
                      }, {}, {
                        default: () => {
                          return `Sony`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productBrandRadio1"}" defaultchecked>
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productBrandRadio1"
                      }, {}, {
                        default: () => {
                          return `JBL`;
                        }
                      })}</div>

											<div><button type="${"button"}" class="${"btn btn-link text-decoration-none text-uppercase fw-medium p-0"}">1,235 More
												</button></div></div></div></div>`;
                    }
                  })}</div>

						<div class="${"accordion-item"}"><h2 class="${"accordion-header"}"><button class="${"accordion-button bg-transparent shadow-none collapsed"}" type="${"button"}" id="${"flush-headingDiscount"}"><span class="${"text-muted text-uppercase fs-12 fw-medium"}">Discount </span>${escape(" ")}
									<span class="${"badge bg-success rounded-pill align-middle ms-1"}">1 </span></button></h2>
							${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#flush-headingDiscount" }, {}, {
                    default: () => {
                      return `<div id="${"flush-collapseDiscount"}" class="${"accordion-collapse collapse show"}"><div class="${"accordion-body text-body pt-1"}"><div class="${"d-flex flex-column gap-2"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio6"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio6"
                      }, {}, {
                        default: () => {
                          return `50% or more
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio5"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio5"
                      }, {}, {
                        default: () => {
                          return `40% or more
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio4"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio4"
                      }, {}, {
                        default: () => {
                          return `30% or more
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio3"}" defaultchecked>
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio3"
                      }, {}, {
                        default: () => {
                          return `20% or more
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio2"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio2"
                      }, {}, {
                        default: () => {
                          return `10% or more
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productdiscountRadio1"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productdiscountRadio1"
                      }, {}, {
                        default: () => {
                          return `Less than 10%
												`;
                        }
                      })}</div></div></div></div>`;
                    }
                  })}</div>

						<div class="${"accordion-item"}"><h2 class="${"accordion-header"}"><button class="${"accordion-button bg-transparent shadow-none collapsed"}" type="${"button"}" id="${"flush-headingRating"}"><span class="${"text-muted text-uppercase fs-12 fw-medium"}">Rating </span>${escape(" ")}
									<span class="${"badge bg-success rounded-pill align-middle ms-1"}">1 </span></button></h2>

							${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#flush-headingRating" }, {}, {
                    default: () => {
                      return `<div id="${"flush-collapseRating"}" class="${"accordion-collapse collapse show"}" aria-labelledby="${"flush-headingRating"}"><div class="${"accordion-body text-body"}"><div class="${"d-flex flex-column gap-2"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productratingRadio4"}" defaultchecked>
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productratingRadio4"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted"}"><i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star"}"></i>
													</span>${escape(" ")}
													4 &amp; Above
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productratingRadio3"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productratingRadio3"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted"}"><i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
													</span>${escape(" ")}
													3 &amp; Above
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productratingRadio2"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productratingRadio2"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted"}"><i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
													</span>${escape(" ")}
													2 &amp; Above
												`;
                        }
                      })}</div>
											<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"productratingRadio1"}">
												${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "productratingRadio1"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted"}"><i class="${"mdi mdi-star text-warning"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
														<i class="${"mdi mdi-star"}"></i>
													</span>${escape(" ")}
													1
												`;
                        }
                      })}</div></div></div></div>`;
                    }
                  })}</div></div>`;
                }
              })}`;
            }
          })}

			<div class="${"col-xl-9 col-lg-8"}"><div><div class="${"card"}"><div class="${"card-header border-0"}"><div class="${"row g-4"}"><div class="${"col-sm-auto"}"><div>${validate_component(Link, "Link").$$render($$result, {
            href: "/ecommerce/apps-ecommerce-add-product",
            class: "btn btn-success"
          }, {}, {
            default: () => {
              return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add Product
										`;
            }
          })}</div></div>
								<div class="${"col-sm"}"><div class="${"d-flex justify-content-sm-end"}"><div class="${"search-box ms-2"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Search Products..."}">
											<i class="${"ri-search-line search-icon"}"></i></div></div></div></div></div>

						<div class="${"card-header"}"><div class="${"row align-items-center"}"><div class="${"col"}">${validate_component(Nav, "Nav").$$render($$result, {
            class: "nav-tabs-custom card-header-tabs border-bottom-0",
            role: "tablist"
          }, {}, {
            default: () => {
              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                    active: activeTab == 1,
                    class: "fw-semibold",
                    href: "#!"
                  }, {}, {
                    default: () => {
                      return `All${escape(" ")}
												<span class="${"badge badge-soft-danger align-middle rounded-pill ms-1"}">12
												</span>`;
                    }
                  })}`;
                }
              })}
										${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                    active: activeTab == 2,
                    class: "fw-semibold",
                    href: "#!"
                  }, {}, {
                    default: () => {
                      return `Published${escape(" ")}
												<span class="${"badge badge-soft-danger align-middle rounded-pill ms-1"}">5
												</span>`;
                    }
                  })}`;
                }
              })}
										${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                    active: activeTab == 3,
                    class: "fw-semibold",
                    href: "#!"
                  }, {}, {
                    default: () => {
                      return `Draft
											`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
								<div class="${"col-auto"}"><div id="${"selection-element"}"><div class="${"my-n1 d-flex align-items-center text-muted"}">Select${escape(" ")}
											<div id="${"select-content"}" class="${"text-body fw-semibold px-1"}"></div>
											${escape(" ")}
											Result${escape(" ")}
											<button type="${"button"}" class="${"btn btn-link link-danger p-0 ms-3"}">Remove
											</button></div></div></div></div></div>

						<div class="${"card-body"}">${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
            default: () => {
              return `${validate_component(TabPane, "TabPane").$$render($$result, { class: "active" }, {}, {
                default: () => {
                  return `<div id="${"table-product-list-all"}" class="${"table-card gridjs-border-none"}">${MOCK_DATA.productsData.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
                    data,
                    columns,
                    className: { th: "text-muted" },
                    pagination: { enabled: true, limit: 10 }
                  }, {}, {})}` : `<div class="${"py-4 text-center"}"><div><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 72px;height: 72px"}"></lord-icon></div>

												<div class="${"mt-4"}"><h5>Sorry! No Result Found</h5></div></div>`}</div>`;
                }
              })}`;
            }
          })}</div></div></div></div>`;
        }
      })}`;
    }
  })}
</div>`;
});
export { Apps_ecommerce_products as default };
