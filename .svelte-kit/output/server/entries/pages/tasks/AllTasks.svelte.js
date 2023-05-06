import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { M as MOCK_DATA } from "../../../chunks/taskList-48590346.js";
import TaskListCol from "./TaskListCol.svelte.js";
import TaskCol from "./TaskCol.svelte.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import CreateTaskModal from "./createTaskModal.svelte.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-9-f5d371f4.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/img-7-4861de06.js";
import "../../../chunks/img-4-f8adc4d4.js";
import "../../../chunks/Tooltip-8300c9d3.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/Form-51a4628d.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Modal-235662c0.js";
import "../../../chunks/ModalFooter-e48425ab.js";
import "../../../chunks/ModalHeader-dfdb4a12.js";
const AllTasks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  let createModal = false;
  const toggle = () => isOpen = !isOpen;
  const setCloseModal = (status) => {
    createModal = status;
  };
  const data = MOCK_DATA.allTask;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    {
      id: "taskId",
      name: "Order ID",
      formatter: (cell) => html(`<a href="/tasks/apps-tasks-details" class="fw-medium link-primary">${cell}</a>`)
    },
    {
      id: "project",
      name: "Project",
      formatter: (cell) => html(`<a href="/projects/apps-projects-overview" class="fw-medium link-primary">${cell}</a>`)
    },
    { id: "task", hidden: true },
    {
      name: "Tasks",
      plugin: {
        component: SvelteWrapper,
        props: { component: TaskCol }
      }
    },
    { name: "Created By", id: "creater" },
    { id: "subItem", hidden: true },
    {
      name: "Assigned To",
      plugin: {
        component: SvelteWrapper,
        props: { component: TaskListCol }
      }
    },
    { name: "Due Date", id: "dueDate" },
    {
      name: "Status",
      id: "status",
      formatter: (cell) => {
        if (cell === "Inprogress") {
          return html(`<span class='badge badge-soft-secondary text-uppercase'>${cell}</span>`);
        } else if (cell === "New") {
          return html(`<span class='badge badge-soft-info text-uppercase'>${cell}</span>`);
        } else if (cell === "Completed") {
          return html(`<span class='badge badge-soft-success text-uppercase'>${cell}</span>`);
        } else if (cell === "Pending") {
          return html(`<span class='badge badge-soft-warning text-uppercase'>${cell}</span>`);
        } else {
          return null;
        }
      }
    },
    { id: "priorityClass", hidden: true },
    {
      name: "Priority",
      id: "priority",
      formatter: (cell, row) => {
        if (cell === "Medium") {
          return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
        } else if (cell === "High") {
          return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
        } else if (cell === "Low") {
          return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
        } else {
          return null;
        }
      }
    }
  ];
  const statusOption = [
    { value: "Status", label: "Status" },
    { value: "all", label: "All" },
    { value: "New", label: "New" },
    { value: "Pending", label: "Pending" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Completed", label: "Completed" }
  ];
  return `${validate_component(CreateTaskModal, "CreateTaskModal").$$render($$result, {
    show: createModal,
    onDeleteClick: toggle,
    onCloseClick: () => setCloseModal(false)
  }, {}, {})}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { id: "tasksList" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center"}"><h5 class="${"card-title mb-0 flex-grow-1"}">All Tasks</h5>
					<div class="${"flex-shrink-0"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "add-btn" }, {}, {
                    default: () => {
                      return `<i class="${"ri-add-line align-bottom me-1"}"></i> Create Task`;
                    }
                  })}
							${validate_component(Button, "Button").$$render($$result, { color: "", class: "btn btn-soft-danger" }, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-2-line"}"></i>`;
                    }
                  })}</div></div></div>`;
                }
              })}
			${validate_component(CardBody, "CardBody").$$render($$result, {
                class: "border border-dashed border-end-0 border-start-0"
              }, {}, {
                default: () => {
                  return `<form>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 12, xxl: 5 }, {}, {
                        default: () => {
                          return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control search bg-light border-light",
                            placeholder: "Search for tasks or something..."
                          }, {}, {})}
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
                          return `<div class="${"input-light select-single"}">${validate_component(Select, "Select").$$render($$result, {
                            class: "form-control",
                            id: "idStatus",
                            items: statusOption
                          }, {}, {})}</div>`;
                        }
                      })}
						
						${validate_component(Col, "Col").$$render($$result, { xxl: 1, sm: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "w-100" }, {}, {
                            default: () => {
                              return `<i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>
								Filters
							`;
                            }
                          })}`;
                        }
                      })}
						`;
                    }
                  })}
					</form>`;
                }
              })}
			
			${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"table-responsive table-card gridjs-border-none"}">${MOCK_DATA.taskWidgets.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
                    data,
                    columns,
                    pagination: { enabled: true, limit: 10 }
                  }, {}, {})}` : `
						<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
								<h5 class="${"mt-2"}">Sorry! No Result Found</h5>
								<p class="${"text-muted mb-0"}">We&#39;ve searched more than 200k+ tasks We did not find any tasks for you search.
								</p></div></div>`}</div>`;
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
export { AllTasks as default };
