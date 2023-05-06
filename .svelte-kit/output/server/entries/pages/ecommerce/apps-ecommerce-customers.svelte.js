import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalFooter } from "../../../chunks/ModalFooter-e48425ab.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
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
const Apps_ecommerce_customers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  const toggle = () => isOpen = !isOpen;
  const data = MOCK_DATA.customerList;
  const customermocalstatus = [
    { label: "Status", value: "Status" },
    { label: "Active", value: "Active" },
    { label: "Block", value: "Block" }
  ];
  const customerstatus = [
    { label: "Status", value: "Status" },
    { label: "All", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Block", value: "Block" }
  ];
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    "Customer",
    "Email",
    "Phone",
    "Date",
    { id: "status", hidden: true },
    { id: "statusClass", hidden: true },
    {
      id: "status",
      name: "Delivery Status",
      formatter: (cell, row) => html(`
				<span
              class=
                "badge text-uppercase badge-soft-${row.cells[6].data}"
            >
			${row.cells[5].data}
            </span>`)
    },
    {
      name: "Action",
      formatter: (cell, row) => html(`<ul class="list-inline hstack gap-2 mb-0">
              <li class="list-inline-item edit" title="Edit">
                <a
                  href="/#"
                  class="text-primary d-inline-block edit-item-btn"
                  on:click={toggle}
                >
                  <i class="ri-pencil-fill fs-16"></i>
                </a>
              </li>
              <li class="list-inline-item" title="Remove">
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
  return `${$$result.head += `${$$result.title = `<title>Customers | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Customers",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "customerList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-bottom-dashed" }, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-4 align-items-center" }, {}, {
                        default: () => {
                          return `<div class="${"col-sm"}"><div><h5 class="${"card-title mb-0"}">Customer List</h5></div></div>
							<div class="${"col-sm-auto"}"><div class="${"d-flex flex-wrap align-items-start gap-2"}"><button type="${"button"}" class="${"btn btn-success add-btn"}" id="${"create-btn"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Add Customer
									</button>${escape(" ")}
									<button type="${"button"}" class="${"btn btn-info"}"><i class="${"ri-file-download-line align-bottom me-1"}"></i>${escape(" ")}
										Import
									</button></div></div>`;
                        }
                      })}`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "border-bottom-dashed border-bottom"
                  }, {}, {
                    default: () => {
                      return `<form>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control search /"}" placeholder="${"Search for customer, email, phone, status or something..."}">
										<i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                                    default: () => {
                                      return `<div class="${""}">${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
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

										${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                                    default: () => {
                                      return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                                        class: "form-control",
                                        name: "choices-single-default",
                                        title: "idStatus",
                                        items: customerstatus
                                      }, {}, {})}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                                    default: () => {
                                      return `<div><button type="${"button"}" class="${"btn btn-primary w-100"}">${escape(" ")}
													<i class="${"ri-equalizer-fill me-2 align-bottom"}"></i>
													Filters
												</button></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</form>`;
                    }
                  })}
					<div class="${"card-body"}"><div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                    data,
                    columns,
                    className: { th: "text-muted" },
                    pagination: { enabled: true, limit: 8 }
                  }, {}, {})}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>

${validate_component(Modal, "Modal").$$render($$result, {
    id: "showModal",
    isOpen,
    toggle,
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "bg-light p-3" }, {}, {
        default: () => {
          return `Add Customer`;
        }
      })}
	${validate_component(Form, "Form").$$render($$result, { class: "tablelist-form", action: "#" }, {}, {
        default: () => {
          return `${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
            default: () => {
              return `<input type="${"hidden"}" id="${"id-field"}">

			<div class="${"mb-3"}" id="${"modal-id"}" style="${"display: none"}">${validate_component(Label, "Label").$$render($$result, { for: "id-field1", class: "form-label" }, {}, {
                default: () => {
                  return `ID`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                id: "id-field1",
                class: "form-control",
                placeholder: "ID",
                readOnly: true
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
                placeholder: "Enter Name"
              }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "email-field", class: "form-label" }, {}, {
                default: () => {
                  return `Email`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "email",
                id: "email-field",
                class: "form-control",
                placeholder: "Enter Email"
              }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "phone-field", class: "form-label" }, {}, {
                default: () => {
                  return `Phone`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                id: "phone-field",
                class: "form-control",
                placeholder: "Enter Phone no."
              }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "date-field", class: "form-label" }, {}, {
                default: () => {
                  return `Joining Date`;
                }
              })}
				${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                class: "form-control",
                id: "date-field",
                placeholder: "Select Joining Date",
                options: {
                  altInput: true,
                  altFormat: "F j, Y",
                  mode: "multiple",
                  dateFormat: "d.m.y"
                }
              }, {}, {})}</div>

			<div>${validate_component(Label, "Label").$$render($$result, { for: "status-field", class: "form-label" }, {}, {
                default: () => {
                  return `Status`;
                }
              })}
				${validate_component(Select, "Select").$$render($$result, {
                items: customermocalstatus,
                name: "status-field",
                id: "status-field"
              }, {}, {})}</div>`;
            }
          })}
		${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"hstack gap-2 justify-content-end"}"><button type="${"button"}" class="${"btn btn-light"}">Close
				</button>
				<button type="${"submit"}" class="${"btn btn-success"}" id="${"add-btn"}">Add Customer
				</button></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Apps_ecommerce_customers as default };
