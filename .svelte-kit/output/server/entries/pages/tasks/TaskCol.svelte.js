import { c as create_ssr_component, b as escape, v as validate_component } from "../../../chunks/index-584434b3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import CreateTaskModal from "./createTaskModal.svelte.js";
import "../../../chunks/Button-ba828d9c.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../chunks/Form-51a4628d.js";
import "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Modal-235662c0.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/ModalFooter-e48425ab.js";
import "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Select-6990402e.js";
import "../../../chunks/Flatpickr-9498e32b.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-10-def8cdb7.js";
const TaskCol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let item;
  let { row } = $$props;
  let isOpen = false;
  let createModal = false;
  const toggle = () => isOpen = !isOpen;
  const setCloseModal = (status) => {
    createModal = status;
  };
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  item = row.cell(3).data;
  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 tasks_name"}">${escape(item)}</div>
	<div class="${"flex-shrink-0 ms-4"}"><ul class="${"list-inline tasks-list-menu mb-0"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "/tasks/apps-tasks-details" }, {}, {
    default: () => {
      return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i>`;
    }
  })}</li>
			<li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "" }, {}, {
    default: () => {
      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i>`;
    }
  })}</li>
			<li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "remove-item-btn" }, {}, {
    default: () => {
      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i>`;
    }
  })}</li></ul></div></div>

${validate_component(CreateTaskModal, "CreateTaskModal").$$render($$result, {
    show: createModal,
    onDeleteClick: toggle,
    onCloseClick: () => setCloseModal(false)
  }, {}, {})}`;
});
export { TaskCol as default };
