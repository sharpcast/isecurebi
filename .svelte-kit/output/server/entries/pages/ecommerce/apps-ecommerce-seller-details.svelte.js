import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import { R as ReviewSlider } from "../../../chunks/ReviewSlider-5c633861.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import Revenue from "../dashboard/Revenue.svelte.js";
import { c as cimg2 } from "../../../chunks/img-2-674a1784.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import Actions from "./Actions.svelte.js";
import "../../../chunks/Col-cf9b7547.js";
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
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/img-6-7ff883ab.js";
import "../../../chunks/img-7-06bdf5b0.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       */import "../../../chunks/mousewheel-b011c830.js";
import "../../../chunks/autoplay-ee87b360.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../dashboard/DashboardEcommerceCharts.svelte.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
const Apps_ecommerce_seller_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$$result.head += `${$$result.title = `<title>Seller Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Seller Details",
        pageTitle: "Ecommerce"
      }, {}, {})}
		${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-xxl-3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                default: () => {
                  return `<div><div class="${"flex-shrink-0 avatar-md mx-auto"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", cimg2, 0)} alt="${""}" height="${"50"}"></div></div>
							<div class="${"mt-4 text-center"}"><h5 class="${"mb-1"}">Force Medicines</h5>
								<p class="${"text-muted"}">Since 1987</p></div>
							<div class="${"table-responsive"}">${validate_component(Table, "Table").$$render($$result, { class: "table mb-0 table-borderless" }, {}, {
                    default: () => {
                      return `<tbody><tr><th><span class="${"fw-medium"}">Owner Name</span></th>
											<td>David Marshall</td></tr>
										<tr><th><span class="${"fw-medium"}">Company Type</span></th>
											<td>Partnership</td></tr>
										<tr><th><span class="${"fw-medium"}">Email</span></th>
											<td>forcemedicines@gamil.com</td></tr>
										<tr><th><span class="${"fw-medium"}">Website</span></th>
											<td>${validate_component(Link, "Link").$$render($$result, { href: null, class: "link-primary" }, {}, {
                        default: () => {
                          return `www.forcemedicines.com`;
                        }
                      })}</td></tr>
										<tr><th><span class="${"fw-medium"}">Contact No.</span></th>
											<td>+(123) 9876 654 321</td></tr>
										<tr><th><span class="${"fw-medium"}">Fax</span></th>
											<td>+1 999 876 5432</td></tr>
										<tr><th><span class="${"fw-medium"}">Location</span></th>
											<td>United Kingdom</td></tr></tbody>`;
                    }
                  })}</div></div>`;
                }
              })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, {
                class: "border-top border-top-dashed p-4"
              }, {}, {
                default: () => {
                  return `<div><h6 class="${"text-muted text-uppercase fw-semibold mb-4"}">Customer Reviews</h6>
							<div><div><div class="${"bg-light px-3 py-2 rounded-2 mb-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"fs-16 align-middle text-warning"}"><i class="${"ri-star-fill"}"></i>
													<i class="${"ri-star-fill"}"></i>
													<i class="${"ri-star-fill"}"></i>
													<i class="${"ri-star-fill"}"></i>
													<i class="${"ri-star-half-fill"}"></i></div></div>
											<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">4.5 out of 5</h6></div></div></div>
									<div class="${"text-center"}"><div class="${"text-muted"}">Total <span class="${"fw-medium"}">5.50k</span>
											reviews
										</div></div></div>

								<div class="${"mt-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                    default: () => {
                      return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">5 star</h6></div></div>
										<div class="${"col"}"><div class="${"p-1"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                        bar: true,
                        color: "success",
                        value: 50.16
                      }, {}, {})}</div></div></div>
										<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">2758</h6></div></div>`;
                    }
                  })}
									

									${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                    default: () => {
                      return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">4 star</h6></div></div>
										<div class="${"col"}"><div class="${"p-1"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                        bar: true,
                        color: "success",
                        value: 29.32
                      }, {}, {})}</div></div></div>
										<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">1063</h6></div></div>`;
                    }
                  })}
									

									${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                    default: () => {
                      return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">3 star</h6></div></div>
										<div class="${"col"}"><div class="${"p-1"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                        bar: true,
                        color: "warning",
                        value: 18.12
                      }, {}, {})}</div></div></div>
										<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">997</h6></div></div>`;
                    }
                  })}
									

									${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                    default: () => {
                      return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">2 star</h6></div></div>
										<div class="${"col"}"><div class="${"p-1"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "success", value: 4.98 }, {}, {})}</div></div></div>

										<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">227</h6></div></div>`;
                    }
                  })}
									

									${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                    default: () => {
                      return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">1 star</h6></div></div>
										<div class="${"col"}"><div class="${"p-1"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "danger", value: 7.42 }, {}, {})}</div></div></div>
										<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">408</h6></div></div>`;
                    }
                  })}</div></div></div>`;
                }
              })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, {
                class: "p-4 border-top border-top-dashed"
              }, {}, {
                default: () => {
                  return `<h6 class="${"text-muted text-uppercase fw-semibold mb-4"}">Products Reviews</h6>
						
						${validate_component(ReviewSlider, "ReviewSlider").$$render($$result, {}, {}, {})}
						<div class="${"text-center mt-3"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "link-primary" }, {}, {
                    default: () => {
                      return `View All Reviews <i class="${"ri-arrow-right-line align-bottom ms-1"}"></i>`;
                    }
                  })}</div>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {
                class: "p-4 border-top border-top-dashed"
              }, {}, {
                default: () => {
                  return `<h6 class="${"text-muted text-uppercase fw-semibold mb-4"}">Contact Support</h6>
						<form action="${"#"}"><div class="${"mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                    type: "textarea",
                    class: "form-control",
                    id: "exampleFormControlTextarea1",
                    rows: "4",
                    placeholder: "Enter your messages..."
                  }, {}, {})}</div>
							<div class="${"text-end"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                    default: () => {
                      return `<i class="${"ri-mail-send-line align-bottom me-1"}"></i> Send Messages`;
                    }
                  })}</div></form>`;
                }
              })}
					`;
            }
          })}
				</div>
			

			<div class="${"col-xxl-9"}">${validate_component(Revenue, "Revenue").$$render($$result, {}, {}, {})}

				${validate_component(Row, "Row").$$render($$result, { class: " g-4 mb-3" }, {}, {
            default: () => {
              return `<div class="${"col-sm-auto"}"><div>${validate_component(Link, "Link").$$render($$result, {
                href: "/ecommerce/apps-ecommerce-add-product",
                class: "btn btn-success"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add New`;
                }
              })}</div></div>
					<div class="${"col-sm"}"><div class="${"d-flex justify-content-sm-end"}"><div class="${"search-box ms-2"}">${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                placeholder: "Search Products..."
              }, {}, {})}
								<i class="${"ri-search-line search-icon"}"></i></div></div></div>`;
            }
          })}
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${MOCK_DATA.productsData.length > 0 ? `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                    data,
                    columns,
                    className: { th: "text-muted" },
                    pagination: { enabled: true, limit: 10 }
                  }, {}, {})}</div>` : `<div class="${"py-4 text-center"}"><div><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 72px;height: 72px"}"></lord-icon></div>

								<div class="${"mt-4"}"><h5>Sorry! No Result Found</h5></div></div>`}`;
                }
              })}`;
            }
          })}</div>
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_seller_details as default };
