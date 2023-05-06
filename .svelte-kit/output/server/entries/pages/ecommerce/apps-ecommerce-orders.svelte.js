import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import "../../../chunks/Portal-94847a25.js";
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
var appsEcommerceOrders_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';",
  map: null
};
const Apps_ecommerce_orders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = [
    { value: "Status", label: "Status" },
    { value: "all", label: "all" },
    { value: "Pending", label: "Pending" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Cancelled", label: "Cancelled" },
    { value: "Pickups", label: "Pickups" },
    { value: "Returns", label: "Returns" },
    { value: "Delivered", label: "Delivered" }
  ];
  const optionpayments = [
    { value: "Payment", label: "Payment" },
    { value: "Mastercard", label: "Mastercard" },
    { value: "Paypal", label: "Paypal" },
    { value: "Visa", label: "Visa" },
    { value: "COD", label: "COD" }
  ];
  const data = MOCK_DATA.orders;
  let open = false;
  const toggle = () => open = !open;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    {
      name: "Order Id",
      formatter: (cell) => html(`<a href="/ecommerce/apps-ecommerce-order-details"><a>${cell}</a></a>`)
    },
    "Customer",
    {
      id: "productname",
      name: "Product",
      formatter: (_, row) => row.cells[3].data
    },
    {
      name: "Order Date",
      formatter: (order) => html(`${order[0]}, <small class="text-muted">${order[1]}</small>`)
    },
    "Amount",
    { id: "payment", name: "Payment Method" },
    { id: "status", hidden: true },
    { id: "statusClass", hidden: true },
    {
      id: "status",
      name: "Delivery Status",
      formatter: (cell, row) => html(`
				<span class="badge text-uppercase badge-soft-${row.cells[8].data}"
            >
			${row.cells[7].data}
            </span>`)
    },
    {
      name: "Action",
      formatter: (cell, row) => html(`<ul class="list-inline hstack gap-2 mb-0">
              <li class="list-inline-item">
                <a
                  href="/ecommerce/apps-ecommerce-order-details"
                  class="text-primary d-inline-block"
                >
                  <i class="ri-eye-fill fs-16"></i>
                </a>
              </li>
              <li class="list-inline-item edit">
                <a
                  href="/#"
                  class="text-primary d-inline-block edit-item-btn"
                >
                  <i class="ri-pencil-fill fs-16"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="/#"
                  class="text-danger d-inline-block remove-item-btn"
                >
                  <i class="ri-delete-bin-5-fill fs-16"></i>
                </a>
              </li>
            </ul>`)
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Orders | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Orders", pageTitle: "Ecommerce" }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "orderList" }, {}, {
                default: () => {
                  return `<div class="${"card-header border-0"}"><div class="${"row align-items-center gy-3"}"><div class="${"col-sm"}"><h5 class="${"card-title mb-0"}">Order History</h5></div>
							<div class="${"col-sm-auto"}"><div class="${"d-flex gap-1 flex-wrap"}"><button type="${"button"}" class="${"btn btn-success add-btn"}" data-bs-toggle="${"modal"}" id="${"create-btn"}" data-bs-target="${"#showModal"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Create Order</button>
									<button type="${"button"}" class="${"btn btn-info"}"><i class="${"ri-file-download-line align-bottom me-1"}"></i> Import</button>
									<button class="${"btn btn-soft-danger"}" id="${"remove-actions"}" onclick="${"deleteMultiple()"}"><i class="${"ri-delete-bin-2-line"}"></i></button></div></div></div></div>
					${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "border border-dashed border-end-0 border-start-0"
                  }, {}, {
                    default: () => {
                      return `<form>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6, class: "col-xxl-5" }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search",
                                placeholder: "Search for order ID, customer, order status or something..."
                              }, {}, {})}
										<i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}
								
								${validate_component(Col, "Col").$$render($$result, { sm: 6, class: "col-xxl-2" }, {}, {
                            default: () => {
                              return `<div>${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                class: "form-control",
                                placeholder: "Select date",
                                options: {
                                  mode: "range",
                                  dateFormat: "d M, Y",
                                  defaultDate: ["01 Jan 2022", "31 Jan 2022"]
                                }
                              }, {}, {})}</div>`;
                            }
                          })}
								
								${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-xxl-2" }, {}, {
                            default: () => {
                              return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                                class: "form-control",
                                placeholder: "Choose ...",
                                title: "idStatus",
                                items: options
                              }, {}, {})}</div>`;
                            }
                          })}
								
								${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-xxl-2" }, {}, {
                            default: () => {
                              return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                                class: "form-control",
                                placeholder: "Choose ...",
                                title: "idStatus",
                                items: optionpayments
                              }, {}, {})}</div>`;
                            }
                          })}
								
								${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-xxl-1" }, {}, {
                            default: () => {
                              return `<div><button type="${"button"}" class="${"btn btn-primary w-100"}" onclick="${"SearchData();"}"><i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>
											Filters
										</button></div>`;
                            }
                          })}
								`;
                        }
                      })}
							</form>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                    default: () => {
                      return `<div><ul class="${"nav nav-tabs nav-tabs-custom nav-success mb-3"}" role="${"tablist"}"><li class="${"nav-item"}"><a class="${"nav-link active All py-3"}" data-bs-toggle="${"tab"}" id="${"All"}" href="${"#home1"}" role="${"tab"}" aria-selected="${"true"}"><i class="${"ri-store-2-fill me-1 align-bottom"}"></i> All Orders
									</a></li>
								<li class="${"nav-item"}"><a class="${"nav-link py-3 Delivered"}" data-bs-toggle="${"tab"}" id="${"Delivered"}" href="${"#delivered"}" role="${"tab"}" aria-selected="${"false"}"><i class="${"ri-checkbox-circle-line me-1 align-bottom"}"></i> Delivered
									</a></li>
								<li class="${"nav-item"}"><a class="${"nav-link py-3 Pickups"}" data-bs-toggle="${"tab"}" id="${"Pickups"}" href="${"#pickups"}" role="${"tab"}" aria-selected="${"false"}"><i class="${"ri-truck-line me-1 align-bottom"}"></i> Pickups
										<span class="${"badge bg-danger align-middle ms-1"}">2</span></a></li>
								<li class="${"nav-item"}"><a class="${"nav-link py-3 Returns"}" data-bs-toggle="${"tab"}" id="${"Returns"}" href="${"#returns"}" role="${"tab"}" aria-selected="${"false"}"><i class="${"ri-arrow-left-right-fill me-1 align-bottom"}"></i> Returns
									</a></li>
								<li class="${"nav-item"}"><a class="${"nav-link py-3 Cancelled"}" data-bs-toggle="${"tab"}" id="${"Cancelled"}" href="${"#cancelled"}" role="${"tab"}" aria-selected="${"false"}"><i class="${"ri-close-circle-line me-1 align-bottom"}"></i> Cancelled
									</a></li></ul>

							<div class="${"table-responsive table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        class: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}

								<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width:75px;height:75px"}"></lord-icon>
										<h5 class="${"mt-2"}">Sorry! No Result Found</h5>
										<p class="${"text-muted"}">We&#39;ve searched more than 150+ Orders We did not find any orders for you
											search.
										</p></div></div></div></div>
						
						${validate_component(Modal, "Modal").$$render($$result, {
                        id: "showModal",
                        isOpen: open,
                        toggle,
                        fade: true
                      }, {}, {
                        default: () => {
                          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle, class: "bg-light p-3" }, {}, {
                            default: () => {
                              return `<h5 class="${"modal-title"}" id="${"exampleModalLabel"}">\xA0</h5>`;
                            }
                          })}
							<form action="${"#"}">${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "id-field" }, {}, {})}

									<div class="${"mb-3"}" id="${"modal-id"}">${validate_component(Label, "Label").$$render($$result, { for: "orderId", class: "form-label" }, {}, {
                                default: () => {
                                  return `ID`;
                                }
                              })}
										${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                id: "orderId",
                                class: "form-control",
                                placeholder: "ID"
                              }, {}, {})}</div>

									<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                for: "customername-field",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Customer Name`;
                                }
                              })}
										${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                id: "customername-field",
                                class: "form-control",
                                placeholder: "Enter Name",
                                required: true
                              }, {}, {})}</div>

									<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                for: "productname-field",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Product`;
                                }
                              })}
										<select class="${"form-control"}" data-trigger name="${"productname-field"}" id="${"productname-field"}"><option value="${""}">Product</option><option value="${"Puma Tshirt"}">Puma Tshirt</option><option value="${"Adidas Sneakers"}">Adidas Sneakers</option><option value="${"350 ml Glass Grocery Container"}">350 ml Glass Grocery Container</option><option value="${"American egale outfitters Shirt"}">American egale outfitters Shirt</option><option value="${"Galaxy Watch4"}">Galaxy Watch4</option><option value="${"Apple iPhone 12"}">Apple iPhone 12</option><option value="${"Funky Prints T-shirt"}">Funky Prints T-shirt</option><option value="${"USB Flash Drive Personalized with 3D Print"}">USB Flash Drive Personalized with 3D Print</option><option value="${"Oxford Button-Down Shirt"}">Oxford Button-Down Shirt</option><option value="${"Classic Short Sleeve Shirt"}">Classic Short Sleeve Shirt</option><option value="${"Half Sleeve T-Shirts (Blue)"}">Half Sleeve T-Shirts (Blue)</option><option value="${"Noise Evolve Smartwatch"}">Noise Evolve Smartwatch</option></select></div>

									<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "date-field", class: "form-label" }, {}, {
                                default: () => {
                                  return `Order Date`;
                                }
                              })}
										${validate_component(Input, "Input").$$render($$result, {
                                type: "date",
                                id: "date-field",
                                class: "form-control",
                                "data-provider": "flatpickr",
                                "data-date-format": "d M, Y",
                                "data-enable-time": true,
                                required: true
                              }, {}, {})}</div>

									<div class="${"row gy-4 mb-3"}"><div class="${"col-md-6"}"><div>${validate_component(Label, "Label").$$render($$result, { for: "amount-field", class: "form-label" }, {}, {
                                default: () => {
                                  return `Amount`;
                                }
                              })}
												${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                id: "amount-field",
                                class: "form-control",
                                placeholder: "Total amount",
                                required: true
                              }, {}, {})}</div></div>
										<div class="${"col-md-6"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                for: "payment-field",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Payment Method`;
                                }
                              })}
												<select class="${"form-control"}" data-trigger name="${"payment-method"}" id="${"payment-field"}"><option value="${""}">Payment Method</option><option value="${"Mastercard"}">Mastercard</option><option value="${"Visa"}">Visa</option><option value="${"COD"}">COD</option><option value="${"Paypal"}">Paypal</option></select></div></div></div>

									<div>${validate_component(Label, "Label").$$render($$result, {
                                for: "delivered-status",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Delivery Status`;
                                }
                              })}
										<select class="${"form-control"}" data-trigger name="${"delivered-status"}" id="${"delivered-status"}"><option value="${""}">Delivery Status</option><option value="${"Pending"}">Pending</option><option value="${"Inprogress"}">Inprogress</option><option value="${"Cancelled"}">Cancelled</option><option value="${"Pickups"}">Pickups</option><option value="${"Delivered"}">Delivered</option><option value="${"Returns"}">Returns</option></select></div>`;
                            }
                          })}
								<div class="${"modal-footer"}"><div class="${"hstack gap-2 justify-content-end"}"><button type="${"button"}" class="${"btn btn-light"}">Close</button>
										<button type="${"submit"}" class="${"btn btn-success"}" id="${"add-btn"}">Add Order</button></div></div></form>`;
                        }
                      })}

						
						${validate_component(Modal, "Modal").$$render($$result, { class: "flip", id: "deleteOrder" }, {}, {
                        default: () => {
                          return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "p-5 text-center" }, {}, {
                            default: () => {
                              return `<lord-icon src="${"//cdn.lordicon.com/gsqxdxog.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#f06548"}" style="${"width:90px;height:90px"}"></lord-icon>
								<div class="${"mt-4 text-center"}"><h4>You are about to delete a order ?</h4>
									<p class="${"text-muted fs-15 mb-4"}">Deleting your order will remove all of your information from our database.
									</p>
									<div class="${"hstack gap-2 justify-content-center remove"}"><button class="${"btn btn-link link-success fw-medium text-decoration-none"}" data-bs-dismiss="${"modal"}"><i class="${"ri-close-line me-1 align-middle"}"></i>
											Close</button>
										<button class="${"btn btn-danger"}" id="${"delete-record"}">Yes, Delete It</button></div></div>`;
                            }
                          })}`;
                        }
                      })}
						`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			`;
        }
      })}`;
    }
  })}
</div>`;
});
export { Apps_ecommerce_orders as default };
