import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Counter } from "../../../../chunks/counter-768545ac.js";
import Widgets from "./Widgets.svelte.js";
import TicketsData from "./TicketsData.svelte.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Card-f8372b29.js";
import "../../../../chunks/CardBody-1c493a94.js";
import "../../../../chunks/Modal-235662c0.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/ModalBody-69b040c2.js";
import "../../../../chunks/Select-6990402e.js";
import "../../../../chunks/Flatpickr-9498e32b.js";
import "../../../../chunks/plugins-351ed961.js";
import "gridjs";
import "./Actions.svelte.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/gridjs-2f6b3743.js";
const ticketsWidgets = [
  {
    id: 1,
    title: "Total Tickets",
    counter: "547",
    arrowIcon: "ri-arrow-up-line",
    percentage: "17.32 %",
    percentageClass: "success",
    icon: "ri-ticket-2-line",
    decimals: 0,
    prefix: "",
    suffix: "k"
  },
  {
    id: 2,
    title: "Pending Tickets",
    counter: "124",
    arrowIcon: "ri-arrow-down-line",
    percentage: "0.96 %",
    percentageClass: "danger",
    icon: "mdi mdi-timer-sand",
    decimals: 0,
    prefix: "",
    suffix: "k"
  },
  {
    id: 3,
    title: "Closed Tickets",
    counter: "107",
    arrowIcon: "ri-arrow-down-line",
    percentage: "3.87 %",
    percentageClass: "danger",
    icon: "ri-shopping-bag-line",
    decimals: 0,
    prefix: "",
    suffix: "K"
  },
  {
    id: 4,
    title: "Deleted Tickets",
    counter: "15.95",
    arrowIcon: "ri-arrow-up-line",
    percentage: "1.09 %",
    percentageClass: "success",
    icon: "ri-delete-bin-line",
    decimals: 2,
    prefix: "",
    suffix: "%"
  }
];
const ticketsTable = [
  {
    id: 1,
    ticketId: "#VLZ452",
    title: "Error message when placing an orders?",
    client: "Tonya Noble",
    assigned: "James Morris",
    createDate: "08 Dec, 2021",
    dueDate: "25 Jan, 2022",
    status: "Inprogress",
    statusClass: "warning",
    priority: "High",
    priorityClass: "danger"
  },
  {
    id: 2,
    ticketId: "#VLZ453",
    title: "Issue with finding information about order ?",
    client: "Mary Rucker",
    assigned: "David Nichols",
    createDate: "24 Oct, 2021",
    dueDate: "20 Dec, 2021",
    status: "New",
    statusClass: "info",
    priority: "Low",
    priorityClass: "success"
  },
  {
    id: 3,
    ticketId: "#VLZ454",
    title: "Apologize for shopping Error!",
    client: "Nathan Cole",
    assigned: "Nancy Martino",
    createDate: "17 Oct, 2021",
    dueDate: "23 Oct, 2021",
    status: "Open",
    statusClass: "success",
    priority: "Medium",
    priorityClass: "warning"
  },
  {
    id: 4,
    ticketId: "#VLZ455",
    title: "Post launch reminder/ post list",
    client: "Joseph Parker",
    assigned: "Alexis Clarke",
    createDate: "03 Oct, 2021",
    dueDate: "05 Oct, 2021",
    status: "Closed",
    statusClass: "danger",
    priority: "High",
    priorityClass: "danger"
  },
  {
    id: 5,
    ticketId: "#VLZ456",
    title: "Make a creating an account profile",
    client: "Henry Baird",
    assigned: "David Nichols",
    createDate: "09 Oct, 2021",
    dueDate: "17 Oct, 2021",
    status: "Inprogress",
    statusClass: "warning",
    priority: "Medium",
    priorityClass: "warning"
  },
  {
    id: 6,
    ticketId: "#VLZ457",
    title: "Change email option process",
    client: "Tonya Noble",
    assigned: "Nancy Martino",
    createDate: "27 Oct, 2021",
    dueDate: "04 Dec, 2021",
    status: "Open",
    statusClass: "success",
    priority: "High",
    priorityClass: "danger"
  },
  {
    id: 7,
    ticketId: "#VLZ458",
    title: "User research",
    client: "Donald Palmer",
    assigned: "James Morris",
    createDate: "05 Oct, 2021",
    dueDate: "11 Oct, 2021",
    status: "New",
    statusClass: "info",
    priority: "Low",
    priorityClass: "success"
  },
  {
    id: 8,
    ticketId: "#VLZ459",
    title: "Benner design for FB & Twitter",
    client: "Mary Rucker",
    assigned: "Jennifer Carter",
    createDate: "09 Dec, 2021",
    dueDate: "16 Dec, 2021",
    status: "Closed",
    statusClass: "danger",
    priority: "Medium",
    priorityClass: "warning"
  },
  {
    id: 9,
    ticketId: "#VLZ460",
    title: "Brand logo design",
    client: "Tonya Noble",
    assigned: "Alexis Clarke",
    createDate: "24 Dec, 2021",
    dueDate: "29 Dec, 2021",
    status: "Closed",
    statusClass: "danger",
    priority: "High",
    priorityClass: "danger"
  },
  {
    id: 10,
    ticketId: "#VLZ461",
    title: "Additional Calendar",
    client: "Diana Kohler",
    assigned: "David Nichols",
    createDate: "04 Oct, 2021",
    dueDate: "13 Oct, 2021",
    status: "New",
    statusClass: "info",
    priority: "Low",
    priorityClass: "success"
  },
  {
    id: 11,
    ticketId: "#VLZ462",
    title: "Edit customer testimonial",
    client: "Nathan Cole",
    assigned: "Nancy Martino",
    createDate: "21 Dec, 2021",
    dueDate: "02 Jan, 2021",
    status: "Inprogress",
    statusClass: "warning",
    priority: "Medium",
    priorityClass: "warning"
  }
];
const MOCK_DATA = {
  ticketsWidgets,
  ticketsTable
};
const Apps_tickets_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Tickets List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Invoice List",
        pageTitle: "Invoices"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {
            ticketsWidgets: MOCK_DATA.ticketsWidgets
          }, {}, {})}`;
        }
      })}

		${validate_component(TicketsData, "TicketsData").$$render($$result, { ticketsTable: MOCK_DATA.ticketsTable }, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_tickets_list as default };
