import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { F as FileTextIcon, C as CheckSquareIcon, X as XOctagonIcon } from "../../../chunks/XOctagonIcon-a670e0d4.js";
import { C as ClockIcon } from "../../../chunks/ClockIcon-8408cbfa.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import Actions from "./Actions.svelte.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
const invoiceWidgets = [
  {
    id: 1,
    label: "Invoices Sent",
    percentage: "+89.24 %",
    percentageClass: "success",
    icon: "ri-arrow-right-up-line",
    counter: "559.25",
    badge: "2,258",
    caption: "Invoices sent",
    feaIcon: "file-text",
    decimals: 1,
    prefix: "$",
    suffix: "k"
  },
  {
    id: 2,
    label: "Paid Invoices",
    percentage: "+8.09 %",
    percentageClass: "danger",
    icon: "ri-arrow-right-down-line",
    counter: "409.66",
    badge: "1,958",
    caption: "Paid by clients",
    feaIcon: "check-square",
    decimals: 2,
    prefix: "$",
    suffix: "k"
  },
  {
    id: 3,
    label: "Unpaid Invoices",
    percentage: "+9.01 %",
    percentageClass: "danger",
    icon: "ri-arrow-right-down-line",
    counter: "136.98",
    badge: "338",
    caption: "Unpaid by clients",
    feaIcon: "clock",
    decimals: 2,
    prefix: "$",
    suffix: "k"
  },
  {
    id: 4,
    label: "Cancelled Invoices",
    percentage: "+7.55 %",
    percentageClass: "success",
    icon: "ri-arrow-right-up-line",
    counter: "84.2",
    badge: "502",
    caption: "Cancelled by clients",
    feaIcon: "x-octagon",
    decimals: 1,
    prefix: "$",
    suffix: "k"
  }
];
const invoiceTable = [
  {
    id: 1,
    invoiceId: "#VL25000351",
    img: avatar2,
    name: "Diana Kohler",
    email: "dianakohler@velzon.com",
    country: "Brazil",
    date: "06 Apr, 2021",
    time: "09:58PM",
    amount: "$875",
    status: "Paid",
    statusClass: "success"
  },
  {
    id: 2,
    invoiceId: "#VL25000352",
    img: avatar3,
    name: "James Morris",
    email: "jamesmorris@velzon.com",
    country: "Germany",
    date: "17 Dec, 2021",
    time: "1:24AM",
    amount: "$451.00",
    status: "Unpaid",
    statusClass: "warning"
  },
  {
    id: 3,
    invoiceId: "#VL25000353",
    img: avatar4,
    name: "Dawn Koh",
    email: "dawnkoh@velzon.com",
    country: "United Kingdom",
    date: "29 Nov, 2021",
    time: "7:20PM",
    amount: "$984.98",
    status: "Paid",
    statusClass: "success"
  },
  {
    id: 4,
    invoiceId: "#VL25000354",
    img: avatar5,
    name: "Tonya Noble",
    email: "tonynoble@velzon.com",
    country: "Spain",
    date: "22 Nov, 2021",
    time: "10:20PM",
    amount: "$742.12",
    status: "Cancel",
    statusClass: "danger"
  },
  {
    id: 5,
    invoiceId: "#VL25000355",
    img: avatar6,
    name: "David Nichols",
    email: "davidnochols@velzon.com",
    country: "United States of America",
    date: "11 Nov, 2021",
    time: "12:37AM",
    amount: "$2415.00",
    status: "Unpaid",
    statusClass: "warning"
  },
  {
    id: 6,
    invoiceId: "#VL25000356",
    img: avatar7,
    name: "Joseph Payten",
    email: "josephpayten@velzon.com",
    country: "France",
    date: "03 Nov, 2021",
    time: "12:29AM",
    amount: "$7451.02",
    status: "Paid",
    statusClass: "success"
  },
  {
    id: 7,
    invoiceId: "#VL25000357",
    name: "Mary Rucker",
    email: "maryrucker@velzon.com",
    country: "United Kingdom",
    date: "27 Oct, 2021",
    time: "01:46PM",
    amount: "$327.36",
    status: "Cancel",
    statusClass: "danger"
  },
  {
    id: 8,
    invoiceId: "#VL25000358",
    name: "Alexis Clarke",
    email: "alexisclarke@velzon.com",
    country: "Spain",
    date: "18 Oct, 2021",
    time: "04:55PM",
    amount: "$879.78",
    status: "Unpaid",
    statusClass: "warning"
  },
  {
    id: 9,
    invoiceId: "#VL25000359",
    img: avatar8,
    name: "Ryan Cowie",
    email: "rayancowie@velzon.com",
    country: "France",
    date: "07 Oct, 2021",
    time: "06:33AM",
    amount: "$879.00",
    status: "Refund",
    statusClass: "primary"
  },
  {
    id: 10,
    invoiceId: "#VL25000360",
    img: avatar4,
    name: "Christina Maier",
    email: "christinamaier@velzon.com",
    country: "United States of America",
    date: "13 Sep, 2021",
    time: "11:59AM",
    amount: "$1624.18",
    status: "Unpaid",
    statusClass: "warning"
  },
  {
    id: 11,
    invoiceId: "#VL25000361",
    img: avatar2,
    name: "Jennifer Winkel",
    email: "jenniferwinkal@velzon.com",
    country: "Brazil",
    date: "15 Aug, 2021",
    time: "01:05PM",
    amount: "$214.67",
    status: "Cancel",
    statusClass: "danger"
  },
  {
    id: 12,
    invoiceId: "#VL25000362",
    name: "Erik Peters",
    email: "erikpeters@velzon.com",
    country: "Mexico",
    date: "07 Aug, 2021",
    time: "07:46PM",
    amount: "$1798.71",
    status: "Active",
    statusClass: "success"
  }
];
const MOCK_DATA = {
  invoiceWidgets,
  invoiceTable
};
let isStatus = "Status";
const Apps_invoices_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const allstatus = [
    { label: "Status", value: "Status" },
    { label: "All", value: "All" },
    { label: "Unpaid", value: "Unpaid" },
    { label: "Paid", value: "Paid" },
    { label: "Cancel", value: "Cancel" },
    { label: "Refund", value: "Refund" }
  ];
  const data = MOCK_DATA.invoiceTable;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    {
      id: "invoiceId",
      name: "ID",
      formatter: (cell) => html(`<a href="/invoices/apps-invoices-details" class="fw-medium link-primary">${cell}</a>`)
    },
    { id: "name", hidden: true },
    {
      id: "img",
      name: "Customer",
      formatter: (cells, row) => {
        if (cells) {
          return html(`<div class="d-flex align-items-center">
                        <img
                src=${cells}
                alt=""
                class="avatar-xs rounded-circle me-2"
              />
              ${row.cells[2].data}
              </div>`);
        } else {
          return html(`<div class="d-flex align-items-center"><div class="flex-shrink-0 avatar-xs me-2">
                  <div class="avatar-title bg-soft-success text-success rounded-circle fs-13">
                    ${row.cells[2].data.charAt(0) + row.cells[2].data.split(" ").slice(-1).toString().charAt(0)}
                  </div>
                </div>
              ${row.cells[2].data}
            </div>`);
        }
      }
    },
    { id: "email", name: "Email" },
    { id: "country", name: "Country" },
    { id: "time", hidden: true },
    {
      id: "date",
      name: "Date",
      formatter: (cells, row) => html(`${cells},
            <small class="text-muted">${row.cells[6].data}</small>`)
    },
    { id: "amount", name: "Amount" },
    { id: "statusClass", hidden: true },
    {
      id: "status",
      name: "PAYMENT STATUS",
      formatter: (cell, row) => {
        return html(`<span class="badge text-uppercase badge-soft-${row.cells[9].data}">
                ${cell}
            </span>`);
      }
    },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: Actions }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Invoice List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Invoice List",
        pageTitle: "Invoices"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.invoiceWidgets, (invoicewidget) => {
            return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><p class="${"text-uppercase fw-medium text-muted mb-0"}">${escape(invoicewidget.label)}
									</p></div>
								<div class="${"flex-shrink-0"}"><h5${add_attribute("class", "fs-14 mb-0 text-" + invoicewidget.percentageClass, 0)}><i class="${"ri-arrow-right-up-line fs-13 align-middle"}"></i>${escape(" ")}
										${escape(invoicewidget.percentage)}</h5>
								</div></div>
							<div class="${"d-flex align-items-end justify-content-between mt-4"}"><div><h4 class="${"fs-22 fw-semibold ff-secondary mb-4"}">${escape(invoicewidget.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", invoicewidget.counter, 0)}>0</span>${escape(invoicewidget.suffix)}</h4>

									<span class="${"badge bg-warning me-1"}">${escape(invoicewidget.badge)}
									</span>${escape(" ")}
									<span class="${"text-muted"}">${escape(" ")}
										${escape(invoicewidget.caption)}
									</span></div>
								<div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-light rounded fs-3"}">${invoicewidget.feaIcon === "file-text" ? `${validate_component(FileTextIcon, "FileTextIcon").$$render($$result, {
                          class: "text-success icon-dual-success",
                          size: "24"
                        }, {}, {})}` : ``}
										${invoicewidget.feaIcon === "check-square" ? `${validate_component(CheckSquareIcon, "CheckSquareIcon").$$render($$result, {
                          class: "text-success icon-dual-success",
                          size: "24"
                        }, {}, {})}` : ``}
										${invoicewidget.feaIcon === "clock" ? `${validate_component(ClockIcon, "ClockIcon").$$render($$result, {
                          class: "text-success icon-dual-success",
                          size: "24"
                        }, {}, {})}` : ``}
										${invoicewidget.feaIcon === "x-octagon" ? `${validate_component(XOctagonIcon, "XOctagonIcon").$$render($$result, {
                          class: "text-success icon-dual-success",
                          size: "24"
                        }, {}, {})}` : ``}</span>
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
              return `${validate_component(Card, "Card").$$render($$result, { id: "invoiceList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><h5 class="${"card-title mb-0 flex-grow-1"}">Invoices</h5>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-2 flex-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/invoices/apps-invoices-create",
                        class: "btn btn-danger"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-line align-bottom me-1"}"></i> Create Invoice
									`;
                        }
                      })}</div></div></div>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "bg-soft-light border border-dashed border-start-0 border-end-0"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { sm: 12, xxl: 5 }, {}, {
                                default: () => {
                                  return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control search bg-light border-light",
                                    placeholder: "Search for customer, email, country, status or something..."
                                  }, {}, {})}
										<i class="${"ri-search-line search-icon"}"></i></div>`;
                                }
                              })}

								${validate_component(Col, "Col").$$render($$result, { sm: 4, xxl: 3 }, {}, {
                                default: () => {
                                  return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control bg-light border-light",
                                    id: "datepicker-publish-input",
                                    placeholder: "Select a date",
                                    options: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      mode: "multiple",
                                      dateFormat: "d.m.y"
                                    }
                                  }, {}, {})}`;
                                }
                              })}

								${validate_component(Col, "Col").$$render($$result, { sm: 4, xxl: 3 }, {}, {
                                default: () => {
                                  return `<div class="${"input-light select-single"}">${validate_component(Select, "Select").$$render($$result, {
                                    value: isStatus,
                                    items: allstatus,
                                    name: "choices-single-default",
                                    id: "idStatus"
                                  }, {}, {})}</div>`;
                                }
                              })}

								${validate_component(Col, "Col").$$render($$result, { sm: 4, xxl: 1 }, {}, {
                                default: () => {
                                  return `${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "w-100" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>${escape(" ")}
										Filters
									`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div>${MOCK_DATA.invoiceTable.length > 0 ? `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        className: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}</div>` : `<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
										<h5 class="${"mt-2"}">Sorry! No Result Found</h5>
										<p class="${"text-muted mb-0"}">We&#39;ve searched more than 200k+ tasks We did not find any tasks for you search.
										</p></div></div>`}</div>`;
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
export { Apps_invoices_list as default };
