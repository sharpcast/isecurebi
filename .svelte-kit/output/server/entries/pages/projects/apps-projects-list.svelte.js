import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { s as slack } from "../../../chunks/slack-e58caefb.js";
import { d as dribble, m as mail_chimp, a as dropbox } from "../../../chunks/mail_chimp-a5132002.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar9 } from "../../../chunks/avatar-9-f5d371f4.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import List from "./List.svelte.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Row-089822f8.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/MoreHorizontalIcon-80000d2a.js";
import "../../../chunks/Select-6990402e.js";
const projectList = [
  {
    id: 1,
    isDesign1: true,
    time: "Updated 3hrs ago",
    img: slack,
    imgbgColor: "warning",
    label: "Slack brand logo design",
    caption: "Create a Brand logo design for a velzon admin.",
    number: "18/42",
    progressBar: "34%",
    subItem: [
      { id: 1, imgFooter: avatar2 },
      { id: 2, imgNumber: "+" }
    ],
    date: "10 Jul, 2021",
    ratingClass: ""
  },
  {
    id: 2,
    isDesign1: true,
    time: "Last update : 08 May",
    img: dribble,
    imgbgColor: "danger",
    label: "Redesign - Landing page",
    caption: "Resign a landing page design. as per abc minimal design.",
    number: "22/56",
    progressBar: "54%",
    subItem: [
      { id: 1, imgFooter: avatar3 },
      { id: 2, imgNumber: "S", bgColor: "secondary" },
      { id: 3, imgFooter: avatar4 },
      { id: 4, imgNumber: "+" }
    ],
    date: "18 May, 2021",
    ratingClass: "active"
  },
  {
    id: 3,
    isDesign1: true,
    time: "Updated 2hrs ago",
    img: mail_chimp,
    label: "Chat Application",
    imgbgColor: "success",
    caption: "Create a Chat application for business messaging needs. Collaborate efficiently with secure direct messages and group chats.",
    number: "14/20",
    progressBar: "65%",
    subItem: [
      { id: 1, imgFooter: avatar5 },
      { id: 2, imgNumber: "M", bgColor: "warning" },
      { id: 3, imgNumber: "+" }
    ],
    date: "21 Feb, 2021",
    ratingClass: "active"
  },
  {
    id: 4,
    isDesign1: true,
    time: "Last update : 21 Jun",
    img: dropbox,
    label: "Project App",
    imgbgColor: "info",
    caption: "Create a project application for a project management and task management.",
    number: "20/34",
    progressBar: "78%",
    subItem: [
      { id: 1, imgNumber: "K", bgColor: "info" },
      { id: 2, imgNumber: "M", bgColor: "danger" },
      { id: 3, imgNumber: "+" }
    ],
    date: "03 Aug, 2021",
    ratingClass: ""
  },
  {
    id: 5,
    isDesign2: true,
    label: "Multipurpose landing template",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "18 Sep, 2021",
    subItem: [
      { id: 1, imgNumber: "D", bgColor: "danger" },
      { id: 2, imgTeam: avatar5 },
      { id: 3, imgTeam: avatar6 },
      { id: 4, imgNumber: "+" }
    ],
    progressBar: "50%",
    ratingClass: "active",
    cardHeaderClass: "danger"
  },
  {
    id: 6,
    isDesign2: true,
    label: "Dashboard UI",
    status: "Completed",
    statusClass: "success",
    deadline: "10 Jun, 2021",
    subItem: [
      { id: 1, imgTeam: avatar7 },
      { id: 2, imgTeam: avatar8 },
      { id: 3, imgNumber: "+" }
    ],
    progressBar: "95%",
    ratingClass: "active",
    cardHeaderClass: "warning"
  },
  {
    id: 7,
    isDesign2: true,
    label: "Vector Images",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "08 Apr, 2021",
    subItem: [
      { id: 1, imgNumber: "C", bgColor: "info" },
      { id: 2, imgNumber: "+" }
    ],
    progressBar: "41%",
    ratingClass: "",
    cardHeaderClass: "info"
  },
  {
    id: 8,
    isDesign2: true,
    label: "Authentication",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "22 Nov, 2021",
    subItem: [
      { id: 1, imgTeam: avatar8 },
      { id: 2, imgNumber: "+" }
    ],
    progressBar: "35%",
    ratingClass: "active",
    cardHeaderClass: "success"
  },
  {
    id: 9,
    isDesign3: true,
    img: dribble,
    label: "Kanban Board",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "08 Dec, 2021",
    number: "17/20",
    progressBar: "71%",
    subItem: [
      { id: 1, imgNumber: "D", bgColor: "danger" },
      { id: 2, imgTeam: avatar5 },
      { id: 3, imgNumber: "+" }
    ],
    ratingClass: "active",
    cardHeaderClass: "soft-secondary"
  },
  {
    id: 10,
    isDesign3: true,
    img: slack,
    label: "Ecommerce app",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "20 Nov, 2021",
    number: "11/45",
    progressBar: "20%",
    subItem: [
      { id: 1, imgTeam: avatar9 },
      { id: 2, imgTeam: avatar10 },
      { id: 3, imgNumber: "+" }
    ],
    ratingClass: "",
    cardHeaderClass: "light"
  },
  {
    id: 11,
    isDesign3: true,
    img: dropbox,
    label: "Redesign - Landing page",
    status: "Inprogess",
    statusClass: "warning",
    deadline: "10 Jul, 2021",
    number: "13/26",
    progressBar: "54%",
    subItem: [
      { id: 1, imgTeam: avatar3 },
      { id: 2, imgNumber: "S", bgColor: "secondary" },
      { id: 3, imgTeam: avatar4 },
      { id: 4, imgNumber: "+" }
    ],
    ratingClass: "",
    cardHeaderClass: "soft-primary"
  },
  {
    id: 12,
    isDesign3: true,
    img: mail_chimp,
    label: "Multipurpose landing template",
    status: "Completed",
    statusClass: "success",
    deadline: "18 Sep, 2021",
    number: "25/32",
    progressBar: "75%",
    subItem: [
      { id: 1, imgNumber: "D", bgColor: "danger" },
      { id: 2, imgTeam: avatar5 },
      { id: 3, imgTeam: avatar6 },
      { id: 4, imgNumber: "+" }
    ],
    ratingClass: "active",
    cardHeaderClass: "soft-danger"
  }
];
const MOCK_DATA = {
  projectList
};
const Apps_projects_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Product List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Project List",
        pageTitle: "Projects"
      }, {}, {})}

		${validate_component(List, "List").$$render($$result, { projectList: MOCK_DATA.projectList }, {}, {})}`;
    }
  })}</div>`;
});
export { Apps_projects_list as default };
