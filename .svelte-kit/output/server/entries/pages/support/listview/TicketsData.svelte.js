import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { M as Modal } from "../../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../../chunks/ModalBody-69b040c2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { S as SvelteWrapper } from "../../../../chunks/plugins-351ed961.js";
import Actions from "./Actions.svelte.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
const TicketsData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const allStatus = [
    { label: "Status", value: "Status" },
    { label: "All", value: "All" },
    { label: "Open", value: "Open" },
    { label: "Inprogress", value: "Inprogress" },
    { label: "Closed", value: "Closed" },
    { label: "New", value: "New" }
  ];
  let { ticketsTable } = $$props;
  const data = ticketsTable;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    {
      id: "ticketId",
      name: "ID",
      formatter: (cell) => html(`<a href="/support/ticketsdetails/apps-tickets-details" className="fw-medium link-primary">${cell}</a>`)
    },
    { id: "title", name: "Title" },
    { id: "client", name: "Client" },
    { id: "assigned", name: "Assigned To" },
    { id: "createDate", name: "Create Date" },
    { id: "dueDate", name: "Due Date" },
    {
      id: "status",
      name: "Status",
      formatter: (cell) => {
        if (cell == "Inprogress") {
          return html(`<span class="badge badge-soft-warning text-uppercase">${cell}</span>`);
        } else if (cell == "Open") {
          return html(`<span class="badge badge-soft-success text-uppercase">${cell}</span>`);
        } else if (cell == "New") {
          return html(`<span class="badge badge-soft-info text-uppercase">${cell}</span>`);
        } else if (cell == "Closed") {
          return html(`<span class="badge badge-soft-danger text-uppercase">${cell}</span>`);
        } else {
          return null;
        }
      }
    },
    {
      id: "priority",
      name: "Priority",
      formatter: (cell) => {
        if (cell == "Medium") {
          return html(`<span class="badge bg-warning text-uppercase">${cell}</span>`);
        } else if (cell == "High") {
          return html(`<span class="badge bg-danger text-uppercase">${cell}</span>`);
        } else if (cell == "Low") {
          return html(`<span class="badge bg-success text-uppercase">${cell}</span>`);
        } else {
          return null;
        }
      }
    },
    {
      name: "Actions",
      plugin: {
        component: SvelteWrapper,
        props: { component: Actions }
      }
    }
  ];
  if ($$props.ticketsTable === void 0 && $$bindings.ticketsTable && ticketsTable !== void 0)
    $$bindings.ticketsTable(ticketsTable);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { id: "ticketsList" }, {}, {
            default: () => {
              return `<div class="${"card-header border-0"}"><div class="${"d-flex align-items-center"}"><h5 class="${"card-title mb-0 flex-grow-1"}">Tickets</h5>
					<div class="${"flex-shrink-0"}"><div class="${"d-flex flex-wrap gap-2"}"><button class="${"btn btn-danger add-btn"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Create Tickets</button>
							<button class="${"btn btn-soft-danger"}"><i class="${"ri-delete-bin-2-line"}"></i></button></div></div></div></div>
			${validate_component(CardBody, "CardBody").$$render($$result, {
                class: "border border-dashed border-end-0 border-start-0"
              }, {}, {
                default: () => {
                  return `<form>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xxl: 5, sm: 12 }, {}, {
                        default: () => {
                          return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control search bg-light border-light"}" placeholder="${"Search for ticket details or something..."}">
								<i class="${"ri-search-line search-icon"}"></i></div>`;
                        }
                      })}
						

						${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                            class: "form-control bg-light border-light",
                            options: { dateFormat: "d M, Y" },
                            placeholder: "Selact Date"
                          }, {}, {})}`;
                        }
                      })}
						

						${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 4 }, {}, {
                        default: () => {
                          return `<div class="${"input-light select-single"}">${validate_component(Select, "Select").$$render($$result, { id: "idStatus", items: allStatus }, {}, {})}</div>`;
                        }
                      })}
						
						<div class="${"col-xxl-1 col-sm-4"}"><button type="${"button"}" class="${"btn btn-primary w-100"}"><i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>
								Filters
							</button></div>
						`;
                    }
                  })}
					</form>`;
                }
              })}
			
			${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"table-card gridjs-border-none"}">${ticketsTable.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
                    data,
                    columns,
                    className: { th: "text-muted" },
                    pagination: { enabled: true, limit: 10 }
                  }, {}, {})}` : `<div class="${"noresult"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
								<h5 class="${"mt-2"}">Sorry! No Result Found</h5>
								<p class="${"text-muted mb-0"}">We&#39;ve searched more than 200k+ tasks We did not find any tasks for you search.
								</p></div></div>`}</div>	

				
				${validate_component(Modal, "Modal").$$render($$result, {
                    class: "flip",
                    id: "deleteOrder",
                    tabindex: "-1",
                    "aria-hidden": "true"
                  }, {}, {
                    default: () => {
                      return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "p-5 text-center" }, {}, {
                        default: () => {
                          return `<lord-icon src="${"//cdn.lordicon.com/gsqxdxog.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#f06548"}" style="${"width:90px;height:90px"}"></lord-icon>
						<div class="${"mt-4 text-center"}"><h4>You are about to delete a order ?</h4>
							<p class="${"text-muted fs-14 mb-4"}">Deleting your order will remove all of your information from our database.
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
              })}
			`;
            }
          })}
		`;
        }
      })}
	`;
    }
  })}`;
});
export { TicketsData as default };
