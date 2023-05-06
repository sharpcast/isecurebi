import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import TileBoxs from "./TileBoxs.svelte.js";
import OtherWidgets from "./OtherWidgets.svelte.js";
import UpcomingActivities from "./UpcomingActivities.svelte.js";
import Chart_MapWidgets from "./Chart_MapWidgets.svelte.js";
import EcommerceWidgets from "./EcommerceWidgets.svelte.js";
import CreditCard from "./CreditCard.svelte.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { b as btc, l as ltc } from "../../../chunks/ltc-734c3a3e.js";
import { e as eth } from "../../../chunks/eth-105a4f91.js";
import { d as dash } from "../../../chunks/dash-a9bce606.js";
import { c as company3 } from "../../../chunks/img-3-127a32b6.js";
import { c as company4 } from "../../../chunks/img-4-5ac753e7.js";
import { c as company6 } from "../../../chunks/img-6-7ff883ab.js";
import { c as company8 } from "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Row-089822f8.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Card-f8372b29.js";
import "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/counter-768545ac.js";
import "../../../chunks/ExternalLinkIcon-2852acf2.js";
import "../../../chunks/ClockIcon-8408cbfa.js";
import "../../../chunks/UsersIcon-1eab5089.js";
import "../../../chunks/Alert-d2e69c17.js";
import "../../../chunks/AlertTriangleIcon-fbe21b84.js";
import "../../../chunks/user-illustarator-2-5db54d81.js";
import "../../../chunks/Button-ba828d9c.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/ListGroupItem-5b1f2dad.js";
import "../../../chunks/PaginationLink-4c8ff591.js";
import "./WidgetsCharts.svelte.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-8-1e4e4e71.js";
import "../../../chunks/img-10-2971869e.js";
import "../../../chunks/Progress-4a564725.js";
import "./sessionsByCountries.svelte.js";
import "./audiencesMetrics.svelte.js";
import "./myPortfolio.svelte.js";
import "./topReferralsPages.svelte.js";
import "../../../chunks/Map-45314136.js";
import "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       *//* empty css                                   */import "../../../chunks/autoplay.min-76e4ebdf.js";
import "../../../chunks/mousewheel-b011c830.js";
import "../../../chunks/autoplay-ee87b360.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/img-6-fd986b52.js";
const tileBoxs1 = [
  {
    id: 1,
    label: "Total Earnings",
    labelClass: "muted",
    percentage: "+16.24 %",
    percentageClass: "success",
    percentageIcon: "ri-arrow-right-up-line",
    counter: "559.25",
    caption: "View net earnings",
    icon: "bx bx-dollar-circle",
    iconClass: "success",
    decimals: 2,
    prefix: "$",
    suffix: "k"
  },
  {
    id: 2,
    label: "Orders",
    labelClass: "white-50",
    percentage: "-3.57 %",
    percentageClass: "warning",
    percentageIcon: "ri-arrow-right-down-line",
    counter: "36894",
    caption: "View all orders",
    icon: "bx bx-shopping-bag",
    iconClass: "light",
    bgColor: "bg-info",
    counterClass: "text-white",
    captionClass: "text-white-50",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: ""
  },
  {
    id: 3,
    label: "Customers",
    labelClass: "muted",
    percentage: "+29.08 %",
    percentageClass: "success",
    percentageIcon: "ri-arrow-right-up-line",
    counter: "183.35",
    caption: "See details",
    icon: "bx bx-user-circle",
    iconClass: "warning",
    decimals: 2,
    prefix: "",
    suffix: "M"
  },
  {
    id: 4,
    label: "My Balance",
    labelClass: "muted",
    percentage: "+0.00 %",
    percentageClass: "muted",
    counter: "165.89",
    caption: "Withdraw money",
    icon: "bx bx-wallet",
    iconClass: "primary",
    decimals: 2,
    prefix: "$",
    separator: ",",
    suffix: "k"
  }
];
const tileBoxs2 = [
  {
    id: 1,
    label: "Campaign Sent",
    badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-space-ship-line",
    counter: "197",
    decimals: 0,
    suffix: "",
    prefix: ""
  },
  {
    id: 2,
    label: "Annual Profit",
    badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-exchange-dollar-line",
    counter: "489.4",
    decimals: 1,
    suffix: "k",
    prefix: "$"
  },
  {
    id: 3,
    label: "Lead Coversation",
    badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-pulse-line",
    counter: "32.89",
    decimals: 2,
    suffix: "%",
    prefix: ""
  },
  {
    id: 4,
    label: "Daily Average Income",
    badge: "ri-arrow-up-circle-line text-success",
    icon: "ri-trophy-line",
    counter: "1596.5",
    decimals: 1,
    prefix: "$",
    separator: ",",
    suffix: ""
  },
  {
    id: 5,
    label: "Annual Deals",
    badge: "ri-arrow-down-circle-line text-danger",
    icon: "ri-service-line",
    counter: "2659",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: ""
  }
];
const tileBoxs3 = [
  {
    id: 1,
    label: "Users",
    labelClass: "muted",
    badgeClass: "bg-light text-success",
    badge: "ri-arrow-up-line",
    percentage: "16.24 %",
    iconClass: "info",
    feaIcon: "users",
    subCounter: [
      {
        id: 1,
        counter: "28.05",
        decimals: 2,
        suffix: "k",
        prefix: ""
      }
    ]
  },
  {
    id: 2,
    label: "Sessions",
    labelClass: "muted",
    badgeClass: "bg-light text-danger",
    badge: "ri-arrow-down-line",
    percentage: "3.96 %",
    iconClass: "info",
    feaIcon: "activity",
    subCounter: [
      {
        id: 1,
        counter: "97.66",
        decimals: 2,
        suffix: "k",
        prefix: ""
      }
    ]
  },
  {
    id: 3,
    bgColor: "bg-primary",
    label: "Avg. Visit Duration",
    labelClass: "white-50",
    counterClass: "text-white",
    badgeClass: "badge-soft-light",
    badge: "ri-arrow-down-line",
    percentage: "0.24 %",
    iconClass: "light",
    feaIcon: "clock",
    decimals: 0,
    suffix: "",
    prefix: "",
    subCounter: [
      {
        id: 1,
        counter: "3",
        decimals: 0,
        suffix: "m ",
        prefix: ""
      },
      {
        id: 2,
        counter: "40",
        decimals: 0,
        suffix: "sec",
        prefix: ""
      }
    ]
  },
  {
    id: 4,
    label: "Bounce Rate",
    labelClass: "muted",
    badgeClass: "bg-light text-success",
    badge: "ri-arrow-up-line",
    percentage: "7.05 %",
    iconClass: "info",
    feaIcon: "external-link",
    subCounter: [
      {
        id: 1,
        counter: "33.48",
        decimals: 2,
        suffix: "%",
        prefix: ""
      }
    ]
  }
];
const tileBoxes4 = [
  {
    id: 1,
    bgColor: "bg-success",
    icon: "bx bx-shopping-bag",
    iconClass: "light",
    label: "Total Sales",
    labelClass: "white-50",
    counter: "2045",
    counterClass: "text-white",
    caption: "From 1930 last year",
    captionClass: "white-50",
    percentage: "6.11 %",
    percentageClass: "light",
    badge: "ri-arrow-up-s-line",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: ""
  },
  {
    id: 2,
    icon: "bx bxs-user-account",
    iconClass: "warning",
    label: "Number of Users",
    labelClass: "muted",
    counter: "7522",
    caption: "From 9530 last year",
    captionClass: "muted",
    percentage: "10.35 %",
    percentageClass: "danger",
    badge: "ri-arrow-down-s-line",
    decimals: 0,
    separator: ",",
    suffix: "",
    prefix: ""
  },
  {
    id: 3,
    icon: "bx bxs-badge-dollar",
    iconClass: "danger",
    label: "Total Revenue",
    labelClass: "muted",
    counter: "2845.05",
    caption: "From $1,750.04 last year",
    captionClass: "muted",
    percentage: "22.96 %",
    percentageClass: "success",
    badge: "ri-arrow-up-s-line",
    decimals: 2,
    separator: ",",
    suffix: "",
    prefix: "$"
  },
  {
    id: 4,
    icon: "bx bx-store-alt",
    iconClass: "info",
    label: "Number of Stores",
    labelClass: "muted",
    counter: "405",
    caption: "From 308 last year",
    captionClass: "muted",
    percentage: "16.31 %",
    percentageClass: "success",
    badge: "ri-arrow-up-s-line",
    decimals: 0,
    separator: ",",
    suffix: "k",
    prefix: ""
  }
];
const otherWidgets2 = [
  {
    id: 1,
    title: "Brand Logo Design - MD",
    subTitle: "Graphics Work",
    subItem: [
      {
        id: 1,
        icon: "mdi mdi-numeric-1-circle",
        iconClass: "success",
        label: "Completed"
      },
      {
        id: 2,
        icon: "mdi mdi-numeric-3-circle",
        iconClass: "info",
        label: "In Progress"
      },
      {
        id: 3,
        icon: "mdi mdi-numeric-2-circle",
        iconClass: "primary",
        label: "To Do"
      }
    ],
    progressBar: [
      { id: 1, bgColor: "bg-success", width: "30%" },
      { id: 2, bgColor: "bg-info", width: "50%" },
      { id: 3, width: "20%" }
    ]
  },
  {
    id: 2,
    title: "Redesign - Landing Page",
    subTitle: "UI/UX Design",
    subItem: [
      {
        id: 1,
        icon: "mdi mdi-numeric-3-circle",
        iconClass: "success",
        label: "Completed"
      },
      {
        id: 2,
        icon: "mdi mdi-numeric-0-circle",
        iconClass: "info",
        label: "In Progress"
      },
      {
        id: 3,
        icon: "mdi mdi-numeric-8-circle",
        iconClass: "primary",
        label: "To Do"
      }
    ],
    progressBar: [
      { id: 1, bgColor: "bg-success", width: "30%" },
      { id: 2, bgColor: "bg-info", width: "0%" },
      { id: 3, width: "70%" }
    ]
  },
  {
    id: 3,
    title: "Ecommerce App for Web",
    subTitle: "CRM Project",
    subItem: [
      {
        id: 1,
        icon: "mdi mdi-numeric-10-circle",
        iconClass: "success",
        label: "Completed"
      },
      {
        id: 2,
        icon: "mdi mdi-numeric-8-circle",
        iconClass: "info",
        label: "In Progress"
      },
      {
        id: 3,
        icon: "mdi mdi-numeric-2-circle",
        iconClass: "primary",
        label: "To Do"
      }
    ],
    progressBar: [
      { id: 1, bgColor: "bg-success", width: "60%" },
      { id: 2, bgColor: "bg-info", width: "25%" },
      { id: 3, width: "15%" }
    ]
  }
];
const widgetsActivities = [
  {
    id: 1,
    date: "25",
    weekDay: "Tue",
    time: "12:00am - 03:30pm",
    caption: "Meeting for campaign with sales team",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar2 },
      { id: 3, img: avatar3 },
      { id: 4, imgNumber: "5", bgcolor: "bg-info" }
    ]
  },
  {
    id: 2,
    date: "20",
    weekDay: "Wed",
    time: "02:00pm - 03:45pm",
    caption: "Adding a new event with attachments",
    subItem: [
      { id: 1, img: avatar4 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar6 },
      { id: 4, img: avatar7 },
      { id: 5, imgNumber: "3", bgcolor: "bg-success" }
    ]
  },
  {
    id: 3,
    date: "17",
    weekDay: "Wed",
    time: "04:30pm - 07:15pm",
    caption: "Create new project Bundling Product",
    subItem: [
      { id: 1, img: avatar8 },
      { id: 2, img: avatar1 },
      { id: 3, img: avatar2 },
      { id: 4, imgNumber: "4", bgcolor: "bg-primary" }
    ]
  },
  {
    id: 4,
    date: "12",
    weekDay: "Tue",
    time: "10:30am - 01:15pm",
    caption: "Weekly closed sales won checking with sales team",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar2 },
      { id: 4, imgNumber: "9", bgcolor: "bg-warning" }
    ]
  }
];
const widgetsTasks = [
  {
    id: 1,
    forId: "task_one",
    text: "Review and make sure nothing slips through cracks",
    date: "15 Sep, 2021"
  },
  {
    id: 2,
    forId: "task_two",
    text: "Send meeting invites for sales upcampaign",
    date: "20 Sep, 2021"
  },
  {
    id: 3,
    forId: "task_three",
    text: "Weekly closed sales won checking with sales team",
    date: "24 Sep, 2021"
  },
  {
    id: 4,
    forId: "task_four",
    text: "Add notes that can be viewed from the individual view",
    date: "27 Sep, 2021"
  },
  {
    id: 5,
    forId: "task_five",
    text: "Move stuff to another page",
    date: "27 Sep, 2021"
  },
  {
    id: 6,
    forId: "task_six",
    text: "Styling wireframe design and documentation for velzon admin",
    date: "27 Sep, 2021"
  }
];
const widgetsAudiences = [
  {
    id: 1,
    subCounter: [{ id: 1, counter: "854", suffix: "", prefix: "" }],
    caption: "Avg. Session",
    percentage: "49%"
  },
  {
    id: 2,
    subCounter: [
      {
        id: 1,
        counter: "1278",
        decimals: 0,
        separator: ",",
        suffix: "",
        prefix: ""
      }
    ],
    caption: "Conversion Rate",
    percentage: "60%"
  },
  {
    id: 3,
    subCounter: [
      {
        id: 1,
        counter: "3",
        decimals: 0,
        suffix: "m ",
        prefix: ""
      },
      {
        id: 2,
        counter: "40",
        decimals: 0,
        suffix: "sec",
        prefix: ""
      }
    ],
    caption: "Avg. Ses. Duration"
  }
];
const widgetsPortfolio = [
  {
    id: 1,
    img: btc,
    label: "Bitcoin",
    coinName: "BTC",
    coinVolume: "0.00584875",
    badgeClass: "primary",
    price: "$19,405.12",
    priceClass: "success",
    coinNameClass: "primary"
  },
  {
    id: 2,
    img: eth,
    label: "Ethereum",
    coinName: "ETH",
    coinVolume: "2.25842108",
    badgeClass: "info",
    price: "$40552.18",
    priceClass: "danger",
    coinNameClass: "info"
  },
  {
    id: 3,
    img: ltc,
    label: "Litecoin",
    coinName: "LTC",
    coinVolume: "10.58963217",
    badgeClass: "warning",
    price: "$15824.58",
    priceClass: "success",
    coinNameClass: "warning"
  },
  {
    id: 4,
    img: dash,
    label: "Dash",
    coinName: "DASH",
    coinVolume: "204.28565885",
    badgeClass: "success",
    price: "$30635.84",
    priceClass: "success",
    coinNameClass: "success"
  }
];
const tileBoxes5 = [
  {
    id: 1,
    img: company3,
    title: "Marketing Director",
    class: "",
    year: "(2-4 Yrs Exp.)"
  },
  {
    id: 2,
    img: company4,
    class: "",
    title: "Sr. Web Designer",
    year: "(2+ Yrs Exp.)"
  },
  {
    id: 3,
    img: company6,
    class: "bg-soft-primary shadow-none bg-opacity-10",
    title: "Sr. Web Designer",
    year: "(2+ Yrs Exp.)"
  },
  {
    id: 4,
    img: company8,
    class: "bg-soft-info shadow-none bg-opacity-10",
    title: "Sr. Web Designer",
    year: "(2+ Yrs Exp.)"
  }
];
const MOCK_DATA = {
  tileBoxs1,
  tileBoxs2,
  tileBoxs3,
  tileBoxes4,
  tileBoxes5,
  widgetsActivities,
  widgetsTasks,
  widgetsAudiences,
  widgetsPortfolio,
  otherWidgets2
};
const Widget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Widget | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Widgets", pageTitle: "Velzon" }, {}, {})}
		${validate_component(TileBoxs, "TileBoxs").$$render($$result, { WidgetData: MOCK_DATA }, {}, {})}

		${validate_component(OtherWidgets, "OtherWidgets").$$render($$result, { otherWidgets2: MOCK_DATA.otherWidgets2 }, {}, {})}

		${validate_component(UpcomingActivities, "UpcomingActivity").$$render($$result, {
        widgetsActivities: MOCK_DATA.widgetsActivities,
        widgetsTasks: MOCK_DATA.widgetsTasks
      }, {}, {})}

		${validate_component(Chart_MapWidgets, "ChartMapWidgets").$$render($$result, {
        widgetsAudiences: MOCK_DATA.widgetsAudiences,
        widgetsPortfolio: MOCK_DATA.widgetsPortfolio
      }, {}, {})}

		${validate_component(EcommerceWidgets, "EcommerceWidgets").$$render($$result, {}, {}, {})} 
		${validate_component(CreditCard, "CreditCard").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Widget as default };
