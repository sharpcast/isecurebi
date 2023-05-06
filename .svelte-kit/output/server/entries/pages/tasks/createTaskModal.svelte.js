import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalFooter } from "../../../chunks/ModalFooter-e48425ab.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/Portal-94847a25.js";
const CreateTaskModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let { onDeleteClick } = $$props;
  let { onCloseClick } = $$props;
  const ticketStatus = [
    { value: "Status", label: "Status" },
    { value: "New", label: "New" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" }
  ];
  const priorityField = [
    { value: "Priority", label: "Priority" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" }
  ];
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.onDeleteClick === void 0 && $$bindings.onDeleteClick && onDeleteClick !== void 0)
    $$bindings.onDeleteClick(onDeleteClick);
  if ($$props.onCloseClick === void 0 && $$bindings.onCloseClick && onCloseClick !== void 0)
    $$bindings.onCloseClick(onCloseClick);
  return `${validate_component(Modal, "Modal").$$render($$result, {
    class: "zoomIn",
    id: "showModal",
    size: "lg",
    isOpen: show,
    fade: true,
    centered: true,
    toggle: onDeleteClick
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "p-3 bg-soft-info", onDeleteClick }, {}, {
        default: () => {
          return `Create Task`;
        }
      })}
	${validate_component(Form, "Form").$$render($$result, { action: "" }, {}, {
        default: () => {
          return `<div class="${"modal-body"}"><input type="${"hidden"}" id="${"tasksId"}">
			<div class="${"row g-3"}"><div class="${"col-lg-Status2"}">${validate_component(Label, "Label").$$render($$result, {
            for: "projectName-field",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Project Name`;
            }
          })}
					${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            id: "projectName-field",
            class: "form-control",
            placeholder: "Project name",
            required: true
          }, {}, {})}</div>
				
				<div class="${"col-lg-12"}"><div>${validate_component(Label, "Label").$$render($$result, {
            for: "tasksTitle-field",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Title`;
            }
          })}
						<input type="${"text"}" id="${"tasksTitle-field"}" class="${"form-control"}" placeholder="${"Title"}" required></div></div>
				
				<div class="${"col-lg-12"}">${validate_component(Label, "Label").$$render($$result, {
            for: "clientName-field",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Client Name`;
            }
          })}
					${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            id: "clientName-field",
            class: "form-control",
            placeholder: "Client name",
            required: true
          }, {}, {})}</div>
				
				<div class="${"col-lg-12"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
            default: () => {
              return `Assigned To`;
            }
          })}
					<div data-simplebar style="${"height: 95px;"}"><ul class="${"list-unstyled vstack gap-2 mb-0"}"><li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-1.jpg"}" id="${"anna-adame"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "anna-adame"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Anna Adame </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-3.jpg"}" id="${"frank-hook"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "frank-hook"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Frank Hook </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-6.jpg"}" id="${"alexis-clarke"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "alexis-clarke"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Alexis Clarke </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-2.jpg"}" id="${"herbert-stokes"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "herbert-stokes"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Herbert Stokes </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-7.jpg"}" id="${"michael-morris"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "michael-morris"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Michael Morris </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-5.jpg"}" id="${"nancy-martino"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "nancy-martino"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Nancy Martino </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-8.jpg"}" id="${"thomas-taylor"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "thomas-taylor"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Thomas Taylor </span>`;
            }
          })}</div></li>
							<li><div class="${"form-check d-flex align-items-center"}"><input class="${"form-check-input me-3"}" type="${"checkbox"}" name="${"assignedTo[]"}" value="${"avatar-10.jpg"}" id="${"tonya-noble"}">
									${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label d-flex align-items-center",
            for: "tonya-noble"
          }, {}, {
            default: () => {
              return `<span class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xxs rounded-circle"}"></span>
										<span class="${"flex-grow-1 ms-2"}">Tonya Noble </span>`;
            }
          })}</div></li></ul></div></div>
				
				<div class="${"col-lg-6"}">${validate_component(Label, "Label").$$render($$result, {
            for: "duedate-field",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Due Date`;
            }
          })}
					${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
            class: "form-control",
            options: { dateFormat: "d M, Y" },
            placeholder: "Selact Date"
          }, {}, {})}</div>
				
				<div class="${"col-lg-6"}">${validate_component(Label, "Label").$$render($$result, {
            for: "ticket-status",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Status`;
            }
          })}
					${validate_component(Select, "Select").$$render($$result, {
            class: "form-control",
            id: "ticket-status",
            items: ticketStatus
          }, {}, {})}</div>
				
				<div class="${"col-lg-12"}">${validate_component(Label, "Label").$$render($$result, {
            for: "priority-field",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Priority`;
            }
          })}
					${validate_component(Select, "Select").$$render($$result, {
            class: "form-control",
            id: "priority-field",
            items: priorityField
          }, {}, {})}</div>
				</div>
			</div>
		${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                default: () => {
                  return `Close`;
                }
              })}
				${validate_component(Button, "Button").$$render($$result, {
                color: "success",
                class: "d-none",
                id: "add-btn"
              }, {}, {
                default: () => {
                  return `Add Task`;
                }
              })}
				${validate_component(Button, "Button").$$render($$result, { color: "success", id: "edit-btn" }, {}, {
                default: () => {
                  return `Update Task`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { CreateTaskModal as default };
