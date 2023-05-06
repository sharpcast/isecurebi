import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import AllTasks from "./AllTasks.svelte.js";
import Widgets from "./Widgets.svelte.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Button-ba828d9c.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Flatpickr-9498e32b.js";
import "../../../chunks/Select-6990402e.js";
import "gridjs";
import "../../../chunks/gridjs-2f6b3743.js";
import "../../../chunks/taskList-48590346.js";
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
import "./TaskListCol.svelte.js";
import "../../../chunks/Tooltip-8300c9d3.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/Link-71b36253.js";
import "./TaskCol.svelte.js";
import "./createTaskModal.svelte.js";
import "../../../chunks/Form-51a4628d.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Modal-235662c0.js";
import "../../../chunks/ModalFooter-e48425ab.js";
import "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/plugins-351ed961.js";
import "../../../chunks/counter-768545ac.js";
const Apps_tasks_list_view = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Task List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Tasks List", pageTitle: "Tasks" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(AllTasks, "AllTasks").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_tasks_list_view as default };