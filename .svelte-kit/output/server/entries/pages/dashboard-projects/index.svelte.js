import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import ActiveProjects from "./ActiveProjects.svelte.js";
import Chat from "./Chat.svelte.js";
import MyTasks from "./MyTasks.svelte.js";
import ProjectsOverview from "./ProjectsOverview.svelte.js";
import ProjectsStatus from "./ProjectsStatus.svelte.js";
import TeamMembers from "./TeamMembers.svelte.js";
import UpcomingSchedules from "./UpcomingSchedules.svelte.js";
import Widgets from "./Widgets.svelte.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Table-b6431bfe.js";
import "./ProjectsOverviewCharts.svelte.js";
import "./PrjectsStatusCharts.svelte.js";
import "./TeamMembersCharts.svelte.js";
import "../../../chunks/Flatpickr-9498e32b.js";
import "../../../chunks/BriefcaseIcon-f0d97152.js";
import "../../../chunks/ClockIcon-8408cbfa.js";
const projectsWidgets = [
  {
    id: 1,
    feaIcon: "briefcase",
    feaIconClass: "primary",
    label: "Active Projects",
    badgeClass: "danger",
    icon: "ri-arrow-down-s-line",
    percentage: "5.02 %",
    caption: "Projects this month",
    subCounter: [{ id: 1, counter: "825", suffix: "" }]
  },
  {
    id: 2,
    feaIcon: "award",
    feaIconClass: "warning",
    label: "New Leads",
    badgeClass: "success",
    icon: "ri-arrow-up-s-line",
    percentage: "3.58 %",
    caption: "Leads this month",
    subCounter: [{ id: 1, counter: "7522", suffix: "", separator: "," }]
  },
  {
    id: 3,
    feaIcon: "clock",
    feaIconClass: "info",
    label: "Total Hours",
    badgeClass: "danger",
    icon: "ri-arrow-down-s-line",
    percentage: "10.35 %",
    caption: "Work this month",
    subCounter: [{ id: 1, counter: "168", suffix: "h" }, { id: 1, counter: "40", suffix: "m" }]
  }
];
const overviewCounter = [
  {
    id: 1,
    counter: "9851",
    label: "Number of Projects",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: ""
  },
  {
    id: 2,
    counter: "1026",
    label: "Active Projects",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: ""
  },
  {
    id: 3,
    counter: "228.89",
    label: "Revenue",
    decimals: 2,
    prefix: "$",
    separator: ",",
    suffix: "K"
  },
  {
    id: 4,
    counter: "10589",
    label: "Working Hours",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: "h",
    counterClass: "success"
  }
];
const activeProjects = [
  {
    id: 1,
    projectName: "Brand Logo Design",
    img: avatar1,
    projectLead: "Donald Risher",
    percentage: "53%",
    subItem: [
      { id: 1, assImg: avatar1 },
      { id: 2, assImg: avatar2 },
      { id: 3, assImg: avatar3 }
    ],
    badge: "Inprogress",
    badgeClass: "warning",
    dueDate: "06 Sep 2021"
  },
  {
    id: 2,
    projectName: "Redesign - Landing Page",
    img: avatar2,
    projectLead: "Prezy William",
    percentage: "0%",
    subItem: [
      { id: 1, assImg: avatar5 },
      { id: 2, assImg: avatar6 }
    ],
    badge: "Pending",
    badgeClass: "danger",
    dueDate: "13 Nov 2021"
  },
  {
    id: 3,
    projectName: "Multipurpose Landing Template",
    img: avatar3,
    projectLead: "Boonie Hoynas",
    percentage: "100%",
    subItem: [
      { id: 1, assImg: avatar7 },
      { id: 2, assImg: avatar8 }
    ],
    badge: "Completed",
    badgeClass: "success",
    dueDate: "26 Nov 2021"
  },
  {
    id: 4,
    projectName: "Chat Application",
    img: avatar5,
    projectLead: "Pauline Moll",
    percentage: "64%",
    subItem: [{ id: 1, assImg: avatar2 }],
    badge: "Progress",
    badgeClass: "warning",
    dueDate: "15 Dec 2021"
  },
  {
    id: 5,
    projectName: "Create Wireframe",
    img: avatar6,
    projectLead: "James Bangs",
    percentage: "77%",
    subItem: [
      { id: 1, assImg: avatar1 },
      { id: 2, assImg: avatar6 },
      { id: 3, assImg: avatar4 }
    ],
    badge: "Progress",
    badgeClass: "warning",
    dueDate: "21 Dec 2021"
  }
];
const projectTasks = [
  {
    id: 1,
    forId: "checkTask1",
    label: "Create new Admin Template",
    dedline: "03 Nov 2021",
    status: "Completed",
    statusClass: "success",
    img: avatar2
  },
  {
    id: 2,
    forId: "checkTask2",
    label: "Marketing Coordinator",
    dedline: "17 Nov 2021",
    status: "Progress",
    statusClass: "warning",
    img: avatar7
  },
  {
    id: 3,
    forId: "checkTask3",
    label: "Administrative Analyst",
    dedline: "26 Nov 2021",
    status: "Completed",
    statusClass: "success",
    img: avatar6
  },
  {
    id: 4,
    forId: "checkTask4",
    label: "E-commerce Landing Page",
    dedline: "10 Dec 2021",
    status: "Pending",
    statusClass: "danger",
    img: avatar5
  },
  {
    id: 5,
    forId: "checkTask5",
    label: "UI/UX Design",
    dedline: "22 Dec 2021",
    status: "Progress",
    statusClass: "warning",
    img: avatar1
  },
  {
    id: 6,
    forId: "checkTask6",
    label: "Projects Design",
    dedline: "31 Dec 2021",
    status: "Pending",
    statusClass: "danger",
    img: avatar4
  }
];
const teamMembers = [
  {
    id: 1,
    img: avatar1,
    name: "Donald Risher",
    position: "Product Manager",
    hours: "110",
    tasks: "258",
    series: "50",
    chartsColor: "#405189"
  },
  {
    id: 2,
    img: avatar2,
    name: "Jansh Brown",
    position: "Lead Developer",
    hours: "83",
    tasks: "105",
    series: "45",
    chartsColor: "#405189"
  },
  {
    id: 3,
    img: avatar7,
    name: "Carroll Adams",
    position: "Lead Designer",
    hours: "58",
    tasks: "75",
    series: "75",
    chartsColor: "#405189"
  },
  {
    id: 4,
    img: avatar4,
    name: "William Pinto",
    position: "UI/UX Designer",
    hours: "96",
    tasks: "85",
    series: "25",
    chartsColor: "#f7b84b"
  },
  {
    id: 5,
    img: avatar6,
    name: "Garry Fournier",
    position: "Web Designer",
    hours: "76",
    tasks: "69",
    series: "60",
    chartsColor: "#405189"
  },
  {
    id: 6,
    img: avatar5,
    name: "Susan Denton",
    position: "Lead Designer",
    hours: "123",
    tasks: "658",
    series: "85",
    chartsColor: "#0ab39c"
  },
  {
    id: 7,
    img: avatar3,
    name: "Joseph Jackson",
    position: "React Developer",
    hours: "117",
    tasks: "125",
    series: "70",
    chartsColor: "#405189"
  }
];
const MOCK_DATA = {
  projectsWidgets,
  overviewCounter,
  activeProjects,
  projectTasks,
  teamMembers
};
const Dashboard_projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Projects | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Projects",
        pageTitle: "Dashboards"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, { class: "project-wrapper" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 8 }, {}, {
            default: () => {
              return `${validate_component(Widgets, "Widgets").$$render($$result, { projectsWidgets: MOCK_DATA.projectsWidgets }, {}, {})}
				${validate_component(ProjectsOverview, "ProjectsOverview").$$render($$result, {}, {}, {})}`;
            }
          })}
			${validate_component(UpcomingSchedules, "UpcomingSchedules").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ActiveProjects, "ActiveProjects").$$render($$result, { activeProjects: MOCK_DATA.activeProjects }, {}, {})}
			${validate_component(MyTasks, "MyTasks").$$render($$result, { projectTasks: MOCK_DATA.projectTasks }, {}, {})}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TeamMembers, "TeamMembers").$$render($$result, { teamMembers: MOCK_DATA.teamMembers }, {}, {})}
			${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}
			${validate_component(ProjectsStatus, "ProjectsStatus").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Dashboard_projects as default };
