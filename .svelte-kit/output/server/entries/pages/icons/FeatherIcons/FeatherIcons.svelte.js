import { c as create_ssr_component, d as add_attribute, b as escape, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { A as ActivityIcon, E as ExternalLinkIcon } from "../../../../chunks/ExternalLinkIcon-2852acf2.js";
import { A as AlertOctagonIcon } from "../../../../chunks/AlertOctagonIcon-557990d9.js";
import { A as AlertTriangleIcon } from "../../../../chunks/AlertTriangleIcon-fbe21b84.js";
import { A as ArrowDownCircleIcon, a as ArrowUpCircleIcon, S as SendIcon } from "../../../../chunks/SendIcon-e4767035.js";
import { A as AwardIcon, B as BriefcaseIcon } from "../../../../chunks/BriefcaseIcon-f0d97152.js";
import { C as CalendarIcon } from "../../../../chunks/CalendarIcon-5213eb98.js";
import { C as CheckCircleIcon } from "../../../../chunks/CheckCircleIcon-2fcd72ab.js";
import { C as CheckSquareIcon, F as FileTextIcon, X as XOctagonIcon } from "../../../../chunks/XOctagonIcon-a670e0d4.js";
import { C as ClockIcon } from "../../../../chunks/ClockIcon-8408cbfa.js";
import { I as InfoIcon, M as MoreVerticalIcon, S as SearchIcon } from "../../../../chunks/SearchIcon-4d822d06.js";
import { M as MoreHorizontalIcon } from "../../../../chunks/MoreHorizontalIcon-80000d2a.js";
import { P as PlusCircleIcon } from "../../../../chunks/PlusCircleIcon-0c7635d7.js";
import { U as UsersIcon } from "../../../../chunks/UsersIcon-1eab5089.js";
const AirplayIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-airplay " + escape(customClass, true)}"><path d="${"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}"></path><polygon points="${"12 15 17 21 7 21 12 15"}"></polygon></svg>`;
});
const AlertCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-alert-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"12"}" y1="${"8"}" x2="${"12"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"16"}" x2="${"12.01"}" y2="${"16"}"></line></svg>`;
});
const AlignCenterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-align-center " + escape(customClass, true)}"><line x1="${"18"}" y1="${"10"}" x2="${"6"}" y2="${"10"}"></line><line x1="${"21"}" y1="${"6"}" x2="${"3"}" y2="${"6"}"></line><line x1="${"21"}" y1="${"14"}" x2="${"3"}" y2="${"14"}"></line><line x1="${"18"}" y1="${"18"}" x2="${"6"}" y2="${"18"}"></line></svg>`;
});
const AlignJustifyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-align-justify " + escape(customClass, true)}"><line x1="${"21"}" y1="${"10"}" x2="${"3"}" y2="${"10"}"></line><line x1="${"21"}" y1="${"6"}" x2="${"3"}" y2="${"6"}"></line><line x1="${"21"}" y1="${"14"}" x2="${"3"}" y2="${"14"}"></line><line x1="${"21"}" y1="${"18"}" x2="${"3"}" y2="${"18"}"></line></svg>`;
});
const AlignLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-align-left " + escape(customClass, true)}"><line x1="${"17"}" y1="${"10"}" x2="${"3"}" y2="${"10"}"></line><line x1="${"21"}" y1="${"6"}" x2="${"3"}" y2="${"6"}"></line><line x1="${"21"}" y1="${"14"}" x2="${"3"}" y2="${"14"}"></line><line x1="${"17"}" y1="${"18"}" x2="${"3"}" y2="${"18"}"></line></svg>`;
});
const AlignRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-align-right " + escape(customClass, true)}"><line x1="${"21"}" y1="${"10"}" x2="${"7"}" y2="${"10"}"></line><line x1="${"21"}" y1="${"6"}" x2="${"3"}" y2="${"6"}"></line><line x1="${"21"}" y1="${"14"}" x2="${"3"}" y2="${"14"}"></line><line x1="${"21"}" y1="${"18"}" x2="${"7"}" y2="${"18"}"></line></svg>`;
});
const AnchorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-anchor " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"5"}" r="${"3"}"></circle><line x1="${"12"}" y1="${"22"}" x2="${"12"}" y2="${"8"}"></line><path d="${"M5 12H2a10 10 0 0 0 20 0h-3"}"></path></svg>`;
});
const ApertureIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-aperture " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"14.31"}" y1="${"8"}" x2="${"20.05"}" y2="${"17.94"}"></line><line x1="${"9.69"}" y1="${"8"}" x2="${"21.17"}" y2="${"8"}"></line><line x1="${"7.38"}" y1="${"12"}" x2="${"13.12"}" y2="${"2.06"}"></line><line x1="${"9.69"}" y1="${"16"}" x2="${"3.95"}" y2="${"6.06"}"></line><line x1="${"14.31"}" y1="${"16"}" x2="${"2.83"}" y2="${"16"}"></line><line x1="${"16.62"}" y1="${"12"}" x2="${"10.88"}" y2="${"21.94"}"></line></svg>`;
});
const ArchiveIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-archive " + escape(customClass, true)}"><polyline points="${"21 8 21 21 3 21 3 8"}"></polyline><rect x="${"1"}" y="${"3"}" width="${"22"}" height="${"5"}"></rect><line x1="${"10"}" y1="${"12"}" x2="${"14"}" y2="${"12"}"></line></svg>`;
});
const ArrowDownLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-down-left " + escape(customClass, true)}"><line x1="${"17"}" y1="${"7"}" x2="${"7"}" y2="${"17"}"></line><polyline points="${"17 17 7 17 7 7"}"></polyline></svg>`;
});
const ArrowDownRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-down-right " + escape(customClass, true)}"><line x1="${"7"}" y1="${"7"}" x2="${"17"}" y2="${"17"}"></line><polyline points="${"17 7 17 17 7 17"}"></polyline></svg>`;
});
const ArrowDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-down " + escape(customClass, true)}"><line x1="${"12"}" y1="${"5"}" x2="${"12"}" y2="${"19"}"></line><polyline points="${"19 12 12 19 5 12"}"></polyline></svg>`;
});
const ArrowLeftCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-left-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polyline points="${"12 8 8 12 12 16"}"></polyline><line x1="${"16"}" y1="${"12"}" x2="${"8"}" y2="${"12"}"></line></svg>`;
});
const ArrowLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-left " + escape(customClass, true)}"><line x1="${"19"}" y1="${"12"}" x2="${"5"}" y2="${"12"}"></line><polyline points="${"12 19 5 12 12 5"}"></polyline></svg>`;
});
const ArrowRightCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-right-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polyline points="${"12 16 16 12 12 8"}"></polyline><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const ArrowRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-right " + escape(customClass, true)}"><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line><polyline points="${"12 5 19 12 12 19"}"></polyline></svg>`;
});
const ArrowUpLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-up-left " + escape(customClass, true)}"><line x1="${"17"}" y1="${"17"}" x2="${"7"}" y2="${"7"}"></line><polyline points="${"7 17 7 7 17 7"}"></polyline></svg>`;
});
const ArrowUpRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-up-right " + escape(customClass, true)}"><line x1="${"7"}" y1="${"17"}" x2="${"17"}" y2="${"7"}"></line><polyline points="${"7 7 17 7 17 17"}"></polyline></svg>`;
});
const ArrowUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-arrow-up " + escape(customClass, true)}"><line x1="${"12"}" y1="${"19"}" x2="${"12"}" y2="${"5"}"></line><polyline points="${"5 12 12 5 19 12"}"></polyline></svg>`;
});
const AtSignIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-at-sign " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle><path d="${"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}"></path></svg>`;
});
const BarChart2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bar-chart-2 " + escape(customClass, true)}"><line x1="${"18"}" y1="${"20"}" x2="${"18"}" y2="${"10"}"></line><line x1="${"12"}" y1="${"20"}" x2="${"12"}" y2="${"4"}"></line><line x1="${"6"}" y1="${"20"}" x2="${"6"}" y2="${"14"}"></line></svg>`;
});
const BarChartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bar-chart " + escape(customClass, true)}"><line x1="${"12"}" y1="${"20"}" x2="${"12"}" y2="${"10"}"></line><line x1="${"18"}" y1="${"20"}" x2="${"18"}" y2="${"4"}"></line><line x1="${"6"}" y1="${"20"}" x2="${"6"}" y2="${"16"}"></line></svg>`;
});
const BatteryChargingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-battery-charging " + escape(customClass, true)}"><path d="${"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"}"></path><line x1="${"23"}" y1="${"13"}" x2="${"23"}" y2="${"11"}"></line><polyline points="${"11 6 7 12 13 12 9 18"}"></polyline></svg>`;
});
const BatteryIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-battery " + escape(customClass, true)}"><rect x="${"1"}" y="${"6"}" width="${"18"}" height="${"12"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"23"}" y1="${"13"}" x2="${"23"}" y2="${"11"}"></line></svg>`;
});
const BellOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bell-off " + escape(customClass, true)}"><path d="${"M13.73 21a2 2 0 0 1-3.46 0"}"></path><path d="${"M18.63 13A17.89 17.89 0 0 1 18 8"}"></path><path d="${"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}"></path><path d="${"M18 8a6 6 0 0 0-9.33-5"}"></path><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const BellIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bell " + escape(customClass, true)}"><path d="${"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}"></path><path d="${"M13.73 21a2 2 0 0 1-3.46 0"}"></path></svg>`;
});
const BluetoothIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bluetooth " + escape(customClass, true)}"><polyline points="${"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"}"></polyline></svg>`;
});
const BoldIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bold " + escape(customClass, true)}"><path d="${"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}"></path><path d="${"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}"></path></svg>`;
});
const BookOpenIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-book-open " + escape(customClass, true)}"><path d="${"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}"></path><path d="${"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}"></path></svg>`;
});
const BookIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-book " + escape(customClass, true)}"><path d="${"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}"></path><path d="${"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}"></path></svg>`;
});
const BookmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-bookmark " + escape(customClass, true)}"><path d="${"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}"></path></svg>`;
});
const BoxIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-box " + escape(customClass, true)}"><path d="${"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}"></path><polyline points="${"3.27 6.96 12 12.01 20.73 6.96"}"></polyline><line x1="${"12"}" y1="${"22.08"}" x2="${"12"}" y2="${"12"}"></line></svg>`;
});
const CameraOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-camera-off " + escape(customClass, true)}"><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line><path d="${"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"}"></path></svg>`;
});
const CameraIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-camera " + escape(customClass, true)}"><path d="${"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}"></path><circle cx="${"12"}" cy="${"13"}" r="${"4"}"></circle></svg>`;
});
const CastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cast " + escape(customClass, true)}"><path d="${"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}"></path><line x1="${"2"}" y1="${"20"}" x2="${"2.01"}" y2="${"20"}"></line></svg>`;
});
const CheckIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-check " + escape(customClass, true)}"><polyline points="${"20 6 9 17 4 12"}"></polyline></svg>`;
});
const ChevronDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevron-down " + escape(customClass, true)}"><polyline points="${"6 9 12 15 18 9"}"></polyline></svg>`;
});
const ChevronLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevron-left " + escape(customClass, true)}"><polyline points="${"15 18 9 12 15 6"}"></polyline></svg>`;
});
const ChevronRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevron-right " + escape(customClass, true)}"><polyline points="${"9 18 15 12 9 6"}"></polyline></svg>`;
});
const ChevronUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevron-up " + escape(customClass, true)}"><polyline points="${"18 15 12 9 6 15"}"></polyline></svg>`;
});
const ChevronsDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevrons-down " + escape(customClass, true)}"><polyline points="${"7 13 12 18 17 13"}"></polyline><polyline points="${"7 6 12 11 17 6"}"></polyline></svg>`;
});
const ChevronsLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevrons-left " + escape(customClass, true)}"><polyline points="${"11 17 6 12 11 7"}"></polyline><polyline points="${"18 17 13 12 18 7"}"></polyline></svg>`;
});
const ChevronsRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevrons-right " + escape(customClass, true)}"><polyline points="${"13 17 18 12 13 7"}"></polyline><polyline points="${"6 17 11 12 6 7"}"></polyline></svg>`;
});
const ChevronsUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chevrons-up " + escape(customClass, true)}"><polyline points="${"17 11 12 6 7 11"}"></polyline><polyline points="${"17 18 12 13 7 18"}"></polyline></svg>`;
});
const ChromeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-chrome " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle><line x1="${"21.17"}" y1="${"8"}" x2="${"12"}" y2="${"8"}"></line><line x1="${"3.95"}" y1="${"6.06"}" x2="${"8.54"}" y2="${"14"}"></line><line x1="${"10.88"}" y1="${"21.94"}" x2="${"15.46"}" y2="${"14"}"></line></svg>`;
});
const CircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle></svg>`;
});
const ClipboardIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-clipboard " + escape(customClass, true)}"><path d="${"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}"></path><rect x="${"8"}" y="${"2"}" width="${"8"}" height="${"4"}" rx="${"1"}" ry="${"1"}"></rect></svg>`;
});
const CloudDrizzleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud-drizzle " + escape(customClass, true)}"><line x1="${"8"}" y1="${"19"}" x2="${"8"}" y2="${"21"}"></line><line x1="${"8"}" y1="${"13"}" x2="${"8"}" y2="${"15"}"></line><line x1="${"16"}" y1="${"19"}" x2="${"16"}" y2="${"21"}"></line><line x1="${"16"}" y1="${"13"}" x2="${"16"}" y2="${"15"}"></line><line x1="${"12"}" y1="${"21"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"12"}" y1="${"15"}" x2="${"12"}" y2="${"17"}"></line><path d="${"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}"></path></svg>`;
});
const CloudLightningIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud-lightning " + escape(customClass, true)}"><path d="${"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"}"></path><polyline points="${"13 11 9 17 15 17 11 23"}"></polyline></svg>`;
});
const CloudOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud-off " + escape(customClass, true)}"><path d="${"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}"></path><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const CloudRainIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud-rain " + escape(customClass, true)}"><line x1="${"16"}" y1="${"13"}" x2="${"16"}" y2="${"21"}"></line><line x1="${"8"}" y1="${"13"}" x2="${"8"}" y2="${"21"}"></line><line x1="${"12"}" y1="${"15"}" x2="${"12"}" y2="${"23"}"></line><path d="${"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}"></path></svg>`;
});
const CloudSnowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud-snow " + escape(customClass, true)}"><path d="${"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}"></path><line x1="${"8"}" y1="${"16"}" x2="${"8.01"}" y2="${"16"}"></line><line x1="${"8"}" y1="${"20"}" x2="${"8.01"}" y2="${"20"}"></line><line x1="${"12"}" y1="${"18"}" x2="${"12.01"}" y2="${"18"}"></line><line x1="${"12"}" y1="${"22"}" x2="${"12.01"}" y2="${"22"}"></line><line x1="${"16"}" y1="${"16"}" x2="${"16.01"}" y2="${"16"}"></line><line x1="${"16"}" y1="${"20"}" x2="${"16.01"}" y2="${"20"}"></line></svg>`;
});
const CloudIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cloud " + escape(customClass, true)}"><path d="${"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}"></path></svg>`;
});
const CodeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-code " + escape(customClass, true)}"><polyline points="${"16 18 22 12 16 6"}"></polyline><polyline points="${"8 6 2 12 8 18"}"></polyline></svg>`;
});
const CodepenIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-codepen " + escape(customClass, true)}"><polygon points="${"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}"></polygon><line x1="${"12"}" y1="${"22"}" x2="${"12"}" y2="${"15.5"}"></line><polyline points="${"22 8.5 12 15.5 2 8.5"}"></polyline><polyline points="${"2 15.5 12 8.5 22 15.5"}"></polyline><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"8.5"}"></line></svg>`;
});
const CodesandboxIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-codesandbox " + escape(customClass, true)}"><path d="${"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}"></path><polyline points="${"7.5 4.21 12 6.81 16.5 4.21"}"></polyline><polyline points="${"7.5 19.79 7.5 14.6 3 12"}"></polyline><polyline points="${"21 12 16.5 14.6 16.5 19.79"}"></polyline><polyline points="${"3.27 6.96 12 12.01 20.73 6.96"}"></polyline><line x1="${"12"}" y1="${"22.08"}" x2="${"12"}" y2="${"12"}"></line></svg>`;
});
const CoffeeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-coffee " + escape(customClass, true)}"><path d="${"M18 8h1a4 4 0 0 1 0 8h-1"}"></path><path d="${"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}"></path><line x1="${"6"}" y1="${"1"}" x2="${"6"}" y2="${"4"}"></line><line x1="${"10"}" y1="${"1"}" x2="${"10"}" y2="${"4"}"></line><line x1="${"14"}" y1="${"1"}" x2="${"14"}" y2="${"4"}"></line></svg>`;
});
const ColumnsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-columns " + escape(customClass, true)}"><path d="${"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}"></path></svg>`;
});
const CommandIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-command " + escape(customClass, true)}"><path d="${"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}"></path></svg>`;
});
const CompassIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-compass " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polygon points="${"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}"></polygon></svg>`;
});
const CopyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-copy " + escape(customClass, true)}"><rect x="${"9"}" y="${"9"}" width="${"13"}" height="${"13"}" rx="${"2"}" ry="${"2"}"></rect><path d="${"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}"></path></svg>`;
});
const CornerDownLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-down-left " + escape(customClass, true)}"><polyline points="${"9 10 4 15 9 20"}"></polyline><path d="${"M20 4v7a4 4 0 0 1-4 4H4"}"></path></svg>`;
});
const CornerDownRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-down-right " + escape(customClass, true)}"><polyline points="${"15 10 20 15 15 20"}"></polyline><path d="${"M4 4v7a4 4 0 0 0 4 4h12"}"></path></svg>`;
});
const CornerLeftDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-left-down " + escape(customClass, true)}"><polyline points="${"14 15 9 20 4 15"}"></polyline><path d="${"M20 4h-7a4 4 0 0 0-4 4v12"}"></path></svg>`;
});
const CornerLeftUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-left-up " + escape(customClass, true)}"><polyline points="${"14 9 9 4 4 9"}"></polyline><path d="${"M20 20h-7a4 4 0 0 1-4-4V4"}"></path></svg>`;
});
const CornerRightDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-right-down " + escape(customClass, true)}"><polyline points="${"10 15 15 20 20 15"}"></polyline><path d="${"M4 4h7a4 4 0 0 1 4 4v12"}"></path></svg>`;
});
const CornerRightUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-right-up " + escape(customClass, true)}"><polyline points="${"10 9 15 4 20 9"}"></polyline><path d="${"M4 20h7a4 4 0 0 0 4-4V4"}"></path></svg>`;
});
const CornerUpLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-up-left " + escape(customClass, true)}"><polyline points="${"9 14 4 9 9 4"}"></polyline><path d="${"M20 20v-7a4 4 0 0 0-4-4H4"}"></path></svg>`;
});
const CornerUpRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-corner-up-right " + escape(customClass, true)}"><polyline points="${"15 14 20 9 15 4"}"></polyline><path d="${"M4 20v-7a4 4 0 0 1 4-4h12"}"></path></svg>`;
});
const CpuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-cpu " + escape(customClass, true)}"><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"2"}" ry="${"2"}"></rect><rect x="${"9"}" y="${"9"}" width="${"6"}" height="${"6"}"></rect><line x1="${"9"}" y1="${"1"}" x2="${"9"}" y2="${"4"}"></line><line x1="${"15"}" y1="${"1"}" x2="${"15"}" y2="${"4"}"></line><line x1="${"9"}" y1="${"20"}" x2="${"9"}" y2="${"23"}"></line><line x1="${"15"}" y1="${"20"}" x2="${"15"}" y2="${"23"}"></line><line x1="${"20"}" y1="${"9"}" x2="${"23"}" y2="${"9"}"></line><line x1="${"20"}" y1="${"14"}" x2="${"23"}" y2="${"14"}"></line><line x1="${"1"}" y1="${"9"}" x2="${"4"}" y2="${"9"}"></line><line x1="${"1"}" y1="${"14"}" x2="${"4"}" y2="${"14"}"></line></svg>`;
});
const CreditCardIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-credit-card " + escape(customClass, true)}"><rect x="${"1"}" y="${"4"}" width="${"22"}" height="${"16"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"1"}" y1="${"10"}" x2="${"23"}" y2="${"10"}"></line></svg>`;
});
const CropIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-crop " + escape(customClass, true)}"><path d="${"M6.13 1L6 16a2 2 0 0 0 2 2h15"}"></path><path d="${"M1 6.13L16 6a2 2 0 0 1 2 2v15"}"></path></svg>`;
});
const CrosshairIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-crosshair " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"22"}" y1="${"12"}" x2="${"18"}" y2="${"12"}"></line><line x1="${"6"}" y1="${"12"}" x2="${"2"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"6"}" x2="${"12"}" y2="${"2"}"></line><line x1="${"12"}" y1="${"22"}" x2="${"12"}" y2="${"18"}"></line></svg>`;
});
const DatabaseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-database " + escape(customClass, true)}"><ellipse cx="${"12"}" cy="${"5"}" rx="${"9"}" ry="${"3"}"></ellipse><path d="${"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}"></path><path d="${"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}"></path></svg>`;
});
const DeleteIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-delete " + escape(customClass, true)}"><path d="${"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}"></path><line x1="${"18"}" y1="${"9"}" x2="${"12"}" y2="${"15"}"></line><line x1="${"12"}" y1="${"9"}" x2="${"18"}" y2="${"15"}"></line></svg>`;
});
const DiscIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-disc " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg>`;
});
const DivideCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-divide-circle " + escape(customClass, true)}"><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"16"}"></line><line x1="${"12"}" y1="${"8"}" x2="${"12"}" y2="${"8"}"></line><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle></svg>`;
});
const DivideSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-divide-square " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"16"}"></line><line x1="${"12"}" y1="${"8"}" x2="${"12"}" y2="${"8"}"></line></svg>`;
});
const DivideIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-divide " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"6"}" r="${"2"}"></circle><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line><circle cx="${"12"}" cy="${"18"}" r="${"2"}"></circle></svg>`;
});
const DollarSignIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-dollar-sign " + escape(customClass, true)}"><line x1="${"12"}" y1="${"1"}" x2="${"12"}" y2="${"23"}"></line><path d="${"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}"></path></svg>`;
});
const DownloadCloudIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-download-cloud " + escape(customClass, true)}"><polyline points="${"8 17 12 21 16 17"}"></polyline><line x1="${"12"}" y1="${"12"}" x2="${"12"}" y2="${"21"}"></line><path d="${"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}"></path></svg>`;
});
const DownloadIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-download " + escape(customClass, true)}"><path d="${"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}"></path><polyline points="${"7 10 12 15 17 10"}"></polyline><line x1="${"12"}" y1="${"15"}" x2="${"12"}" y2="${"3"}"></line></svg>`;
});
const DribbbleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-dribbble " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"}"></path></svg>`;
});
const DropletIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-droplet " + escape(customClass, true)}"><path d="${"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"}"></path></svg>`;
});
const Edit2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-edit-2 " + escape(customClass, true)}"><path d="${"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}"></path></svg>`;
});
const Edit3Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-edit-3 " + escape(customClass, true)}"><path d="${"M12 20h9"}"></path><path d="${"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}"></path></svg>`;
});
const EditIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-edit " + escape(customClass, true)}"><path d="${"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}"></path><path d="${"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}"></path></svg>`;
});
const EyeOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-eye-off " + escape(customClass, true)}"><path d="${"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}"></path><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const EyeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-eye " + escape(customClass, true)}"><path d="${"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg>`;
});
const FacebookIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-facebook " + escape(customClass, true)}"><path d="${"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}"></path></svg>`;
});
const FastForwardIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-fast-forward " + escape(customClass, true)}"><polygon points="${"13 19 22 12 13 5 13 19"}"></polygon><polygon points="${"2 19 11 12 2 5 2 19"}"></polygon></svg>`;
});
const FeatherIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-feather " + escape(customClass, true)}"><path d="${"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}"></path><line x1="${"16"}" y1="${"8"}" x2="${"2"}" y2="${"22"}"></line><line x1="${"17.5"}" y1="${"15"}" x2="${"9"}" y2="${"15"}"></line></svg>`;
});
const FigmaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-figma " + escape(customClass, true)}"><path d="${"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}"></path><path d="${"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}"></path><path d="${"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}"></path><path d="${"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}"></path><path d="${"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}"></path></svg>`;
});
const FileMinusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-file-minus " + escape(customClass, true)}"><path d="${"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}"></path><polyline points="${"14 2 14 8 20 8"}"></polyline><line x1="${"9"}" y1="${"15"}" x2="${"15"}" y2="${"15"}"></line></svg>`;
});
const FilePlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-file-plus " + escape(customClass, true)}"><path d="${"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}"></path><polyline points="${"14 2 14 8 20 8"}"></polyline><line x1="${"12"}" y1="${"18"}" x2="${"12"}" y2="${"12"}"></line><line x1="${"9"}" y1="${"15"}" x2="${"15"}" y2="${"15"}"></line></svg>`;
});
const FileIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-file " + escape(customClass, true)}"><path d="${"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}"></path><polyline points="${"13 2 13 9 20 9"}"></polyline></svg>`;
});
const FilmIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-film " + escape(customClass, true)}"><rect x="${"2"}" y="${"2"}" width="${"20"}" height="${"20"}" rx="${"2.18"}" ry="${"2.18"}"></rect><line x1="${"7"}" y1="${"2"}" x2="${"7"}" y2="${"22"}"></line><line x1="${"17"}" y1="${"2"}" x2="${"17"}" y2="${"22"}"></line><line x1="${"2"}" y1="${"12"}" x2="${"22"}" y2="${"12"}"></line><line x1="${"2"}" y1="${"7"}" x2="${"7"}" y2="${"7"}"></line><line x1="${"2"}" y1="${"17"}" x2="${"7"}" y2="${"17"}"></line><line x1="${"17"}" y1="${"17"}" x2="${"22"}" y2="${"17"}"></line><line x1="${"17"}" y1="${"7"}" x2="${"22"}" y2="${"7"}"></line></svg>`;
});
const FilterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-filter " + escape(customClass, true)}"><polygon points="${"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}"></polygon></svg>`;
});
const FlagIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-flag " + escape(customClass, true)}"><path d="${"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}"></path><line x1="${"4"}" y1="${"22"}" x2="${"4"}" y2="${"15"}"></line></svg>`;
});
const FolderMinusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-folder-minus " + escape(customClass, true)}"><path d="${"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}"></path><line x1="${"9"}" y1="${"14"}" x2="${"15"}" y2="${"14"}"></line></svg>`;
});
const FolderPlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-folder-plus " + escape(customClass, true)}"><path d="${"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}"></path><line x1="${"12"}" y1="${"11"}" x2="${"12"}" y2="${"17"}"></line><line x1="${"9"}" y1="${"14"}" x2="${"15"}" y2="${"14"}"></line></svg>`;
});
const FolderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-folder " + escape(customClass, true)}"><path d="${"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}"></path></svg>`;
});
const FramerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-framer " + escape(customClass, true)}"><path d="${"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"}"></path></svg>`;
});
const FrownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-frown " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M16 16s-1.5-2-4-2-4 2-4 2"}"></path><line x1="${"9"}" y1="${"9"}" x2="${"9.01"}" y2="${"9"}"></line><line x1="${"15"}" y1="${"9"}" x2="${"15.01"}" y2="${"9"}"></line></svg>`;
});
const GiftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-gift " + escape(customClass, true)}"><polyline points="${"20 12 20 22 4 22 4 12"}"></polyline><rect x="${"2"}" y="${"7"}" width="${"20"}" height="${"5"}"></rect><line x1="${"12"}" y1="${"22"}" x2="${"12"}" y2="${"7"}"></line><path d="${"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}"></path><path d="${"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}"></path></svg>`;
});
const GitBranchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-git-branch " + escape(customClass, true)}"><line x1="${"6"}" y1="${"3"}" x2="${"6"}" y2="${"15"}"></line><circle cx="${"18"}" cy="${"6"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"18"}" r="${"3"}"></circle><path d="${"M18 9a9 9 0 0 1-9 9"}"></path></svg>`;
});
const GitCommitIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-git-commit " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle><line x1="${"1.05"}" y1="${"12"}" x2="${"7"}" y2="${"12"}"></line><line x1="${"17.01"}" y1="${"12"}" x2="${"22.96"}" y2="${"12"}"></line></svg>`;
});
const GitMergeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-git-merge " + escape(customClass, true)}"><circle cx="${"18"}" cy="${"18"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"6"}" r="${"3"}"></circle><path d="${"M6 21V9a9 9 0 0 0 9 9"}"></path></svg>`;
});
const GitPullRequestIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-git-pull-request " + escape(customClass, true)}"><circle cx="${"18"}" cy="${"18"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"6"}" r="${"3"}"></circle><path d="${"M13 6h3a2 2 0 0 1 2 2v7"}"></path><line x1="${"6"}" y1="${"9"}" x2="${"6"}" y2="${"21"}"></line></svg>`;
});
const GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-github " + escape(customClass, true)}"><path d="${"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}"></path></svg>`;
});
const GitlabIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-gitlab " + escape(customClass, true)}"><path d="${"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}"></path></svg>`;
});
const GlobeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-globe " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"2"}" y1="${"12"}" x2="${"22"}" y2="${"12"}"></line><path d="${"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}"></path></svg>`;
});
const GridIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-grid " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"7"}" height="${"7"}"></rect><rect x="${"14"}" y="${"3"}" width="${"7"}" height="${"7"}"></rect><rect x="${"14"}" y="${"14"}" width="${"7"}" height="${"7"}"></rect><rect x="${"3"}" y="${"14"}" width="${"7"}" height="${"7"}"></rect></svg>`;
});
const HardDriveIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-hard-drive " + escape(customClass, true)}"><line x1="${"22"}" y1="${"12"}" x2="${"2"}" y2="${"12"}"></line><path d="${"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}"></path><line x1="${"6"}" y1="${"16"}" x2="${"6.01"}" y2="${"16"}"></line><line x1="${"10"}" y1="${"16"}" x2="${"10.01"}" y2="${"16"}"></line></svg>`;
});
const HashIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-hash " + escape(customClass, true)}"><line x1="${"4"}" y1="${"9"}" x2="${"20"}" y2="${"9"}"></line><line x1="${"4"}" y1="${"15"}" x2="${"20"}" y2="${"15"}"></line><line x1="${"10"}" y1="${"3"}" x2="${"8"}" y2="${"21"}"></line><line x1="${"16"}" y1="${"3"}" x2="${"14"}" y2="${"21"}"></line></svg>`;
});
const HeadphonesIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-headphones " + escape(customClass, true)}"><path d="${"M3 18v-6a9 9 0 0 1 18 0v6"}"></path><path d="${"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}"></path></svg>`;
});
const HeartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-heart " + escape(customClass, true)}"><path d="${"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}"></path></svg>`;
});
const HelpCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-help-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}"></path><line x1="${"12"}" y1="${"17"}" x2="${"12.01"}" y2="${"17"}"></line></svg>`;
});
const HexagonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-hexagon " + escape(customClass, true)}"><path d="${"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}"></path></svg>`;
});
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-home " + escape(customClass, true)}"><path d="${"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}"></path><polyline points="${"9 22 9 12 15 12 15 22"}"></polyline></svg>`;
});
const ImageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-image " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><circle cx="${"8.5"}" cy="${"8.5"}" r="${"1.5"}"></circle><polyline points="${"21 15 16 10 5 21"}"></polyline></svg>`;
});
const InboxIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-inbox " + escape(customClass, true)}"><polyline points="${"22 12 16 12 14 15 10 15 8 12 2 12"}"></polyline><path d="${"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}"></path></svg>`;
});
const InstagramIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-instagram " + escape(customClass, true)}"><rect x="${"2"}" y="${"2"}" width="${"20"}" height="${"20"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}"></path><line x1="${"17.5"}" y1="${"6.5"}" x2="${"17.51"}" y2="${"6.5"}"></line></svg>`;
});
const ItalicIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-italic " + escape(customClass, true)}"><line x1="${"19"}" y1="${"4"}" x2="${"10"}" y2="${"4"}"></line><line x1="${"14"}" y1="${"20"}" x2="${"5"}" y2="${"20"}"></line><line x1="${"15"}" y1="${"4"}" x2="${"9"}" y2="${"20"}"></line></svg>`;
});
const KeyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-key " + escape(customClass, true)}"><path d="${"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}"></path></svg>`;
});
const LayersIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-layers " + escape(customClass, true)}"><polygon points="${"12 2 2 7 12 12 22 7 12 2"}"></polygon><polyline points="${"2 17 12 22 22 17"}"></polyline><polyline points="${"2 12 12 17 22 12"}"></polyline></svg>`;
});
const LayoutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-layout " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"3"}" y1="${"9"}" x2="${"21"}" y2="${"9"}"></line><line x1="${"9"}" y1="${"21"}" x2="${"9"}" y2="${"9"}"></line></svg>`;
});
const LifeBuoyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-life-buoy " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle><line x1="${"4.93"}" y1="${"4.93"}" x2="${"9.17"}" y2="${"9.17"}"></line><line x1="${"14.83"}" y1="${"14.83"}" x2="${"19.07"}" y2="${"19.07"}"></line><line x1="${"14.83"}" y1="${"9.17"}" x2="${"19.07"}" y2="${"4.93"}"></line><line x1="${"14.83"}" y1="${"9.17"}" x2="${"18.36"}" y2="${"5.64"}"></line><line x1="${"4.93"}" y1="${"19.07"}" x2="${"9.17"}" y2="${"14.83"}"></line></svg>`;
});
const Link2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-link-2 " + escape(customClass, true)}"><path d="${"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"}"></path><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const LinkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-link " + escape(customClass, true)}"><path d="${"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}"></path><path d="${"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}"></path></svg>`;
});
const LinkedinIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-linkedin " + escape(customClass, true)}"><path d="${"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}"></path><rect x="${"2"}" y="${"9"}" width="${"4"}" height="${"12"}"></rect><circle cx="${"4"}" cy="${"4"}" r="${"2"}"></circle></svg>`;
});
const ListIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-list " + escape(customClass, true)}"><line x1="${"8"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><line x1="${"8"}" y1="${"12"}" x2="${"21"}" y2="${"12"}"></line><line x1="${"8"}" y1="${"18"}" x2="${"21"}" y2="${"18"}"></line><line x1="${"3"}" y1="${"6"}" x2="${"3.01"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"12"}" x2="${"3.01"}" y2="${"12"}"></line><line x1="${"3"}" y1="${"18"}" x2="${"3.01"}" y2="${"18"}"></line></svg>`;
});
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-loader " + escape(customClass, true)}"><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"6"}"></line><line x1="${"12"}" y1="${"18"}" x2="${"12"}" y2="${"22"}"></line><line x1="${"4.93"}" y1="${"4.93"}" x2="${"7.76"}" y2="${"7.76"}"></line><line x1="${"16.24"}" y1="${"16.24"}" x2="${"19.07"}" y2="${"19.07"}"></line><line x1="${"2"}" y1="${"12"}" x2="${"6"}" y2="${"12"}"></line><line x1="${"18"}" y1="${"12"}" x2="${"22"}" y2="${"12"}"></line><line x1="${"4.93"}" y1="${"19.07"}" x2="${"7.76"}" y2="${"16.24"}"></line><line x1="${"16.24"}" y1="${"7.76"}" x2="${"19.07"}" y2="${"4.93"}"></line></svg>`;
});
const LockIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-lock " + escape(customClass, true)}"><rect x="${"3"}" y="${"11"}" width="${"18"}" height="${"11"}" rx="${"2"}" ry="${"2"}"></rect><path d="${"M7 11V7a5 5 0 0 1 10 0v4"}"></path></svg>`;
});
const LogInIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-log-in " + escape(customClass, true)}"><path d="${"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}"></path><polyline points="${"10 17 15 12 10 7"}"></polyline><line x1="${"15"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line></svg>`;
});
const LogOutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-log-out " + escape(customClass, true)}"><path d="${"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}"></path><polyline points="${"16 17 21 12 16 7"}"></polyline><line x1="${"21"}" y1="${"12"}" x2="${"9"}" y2="${"12"}"></line></svg>`;
});
const MailIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-mail " + escape(customClass, true)}"><path d="${"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}"></path><polyline points="${"22,6 12,13 2,6"}"></polyline></svg>`;
});
const MapPinIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-map-pin " + escape(customClass, true)}"><path d="${"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}"></path><circle cx="${"12"}" cy="${"10"}" r="${"3"}"></circle></svg>`;
});
const MapIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-map " + escape(customClass, true)}"><polygon points="${"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}"></polygon><line x1="${"8"}" y1="${"2"}" x2="${"8"}" y2="${"18"}"></line><line x1="${"16"}" y1="${"6"}" x2="${"16"}" y2="${"22"}"></line></svg>`;
});
const Maximize2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-maximize-2 " + escape(customClass, true)}"><polyline points="${"15 3 21 3 21 9"}"></polyline><polyline points="${"9 21 3 21 3 15"}"></polyline><line x1="${"21"}" y1="${"3"}" x2="${"14"}" y2="${"10"}"></line><line x1="${"3"}" y1="${"21"}" x2="${"10"}" y2="${"14"}"></line></svg>`;
});
const MaximizeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-maximize " + escape(customClass, true)}"><path d="${"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}"></path></svg>`;
});
const MehIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-meh " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"8"}" y1="${"15"}" x2="${"16"}" y2="${"15"}"></line><line x1="${"9"}" y1="${"9"}" x2="${"9.01"}" y2="${"9"}"></line><line x1="${"15"}" y1="${"9"}" x2="${"15.01"}" y2="${"9"}"></line></svg>`;
});
const MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-menu " + escape(customClass, true)}"><line x1="${"3"}" y1="${"12"}" x2="${"21"}" y2="${"12"}"></line><line x1="${"3"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"18"}" x2="${"21"}" y2="${"18"}"></line></svg>`;
});
const MessageCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-message-circle " + escape(customClass, true)}"><path d="${"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}"></path></svg>`;
});
const MessageSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-message-square " + escape(customClass, true)}"><path d="${"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}"></path></svg>`;
});
const MicOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-mic-off " + escape(customClass, true)}"><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line><path d="${"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}"></path><path d="${"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}"></path><line x1="${"12"}" y1="${"19"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"8"}" y1="${"23"}" x2="${"16"}" y2="${"23"}"></line></svg>`;
});
const MicIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-mic " + escape(customClass, true)}"><path d="${"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}"></path><path d="${"M19 10v2a7 7 0 0 1-14 0v-2"}"></path><line x1="${"12"}" y1="${"19"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"8"}" y1="${"23"}" x2="${"16"}" y2="${"23"}"></line></svg>`;
});
const Minimize2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-minimize-2 " + escape(customClass, true)}"><polyline points="${"4 14 10 14 10 20"}"></polyline><polyline points="${"20 10 14 10 14 4"}"></polyline><line x1="${"14"}" y1="${"10"}" x2="${"21"}" y2="${"3"}"></line><line x1="${"3"}" y1="${"21"}" x2="${"10"}" y2="${"14"}"></line></svg>`;
});
const MinimizeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-minimize " + escape(customClass, true)}"><path d="${"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}"></path></svg>`;
});
const MinusCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-minus-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const MinusSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-minus-square " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const MinusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-minus " + escape(customClass, true)}"><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line></svg>`;
});
const MonitorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-monitor " + escape(customClass, true)}"><rect x="${"2"}" y="${"3"}" width="${"20"}" height="${"14"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"8"}" y1="${"21"}" x2="${"16"}" y2="${"21"}"></line><line x1="${"12"}" y1="${"17"}" x2="${"12"}" y2="${"21"}"></line></svg>`;
});
const MoonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-moon " + escape(customClass, true)}"><path d="${"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}"></path></svg>`;
});
const MousePointerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-mouse-pointer " + escape(customClass, true)}"><path d="${"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}"></path><path d="${"M13 13l6 6"}"></path></svg>`;
});
const MoveIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-move " + escape(customClass, true)}"><polyline points="${"5 9 2 12 5 15"}"></polyline><polyline points="${"9 5 12 2 15 5"}"></polyline><polyline points="${"15 19 12 22 9 19"}"></polyline><polyline points="${"19 9 22 12 19 15"}"></polyline><line x1="${"2"}" y1="${"12"}" x2="${"22"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"22"}"></line></svg>`;
});
const MusicIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-music " + escape(customClass, true)}"><path d="${"M9 18V5l12-2v13"}"></path><circle cx="${"6"}" cy="${"18"}" r="${"3"}"></circle><circle cx="${"18"}" cy="${"16"}" r="${"3"}"></circle></svg>`;
});
const Navigation2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-navigation-2 " + escape(customClass, true)}"><polygon points="${"12 2 19 21 12 17 5 21 12 2"}"></polygon></svg>`;
});
const NavigationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-navigation " + escape(customClass, true)}"><polygon points="${"3 11 22 2 13 21 11 13 3 11"}"></polygon></svg>`;
});
const OctagonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-octagon " + escape(customClass, true)}"><polygon points="${"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}"></polygon></svg>`;
});
const PackageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-package " + escape(customClass, true)}"><line x1="${"16.5"}" y1="${"9.4"}" x2="${"7.5"}" y2="${"4.21"}"></line><path d="${"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}"></path><polyline points="${"3.27 6.96 12 12.01 20.73 6.96"}"></polyline><line x1="${"12"}" y1="${"22.08"}" x2="${"12"}" y2="${"12"}"></line></svg>`;
});
const PaperclipIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-paperclip " + escape(customClass, true)}"><path d="${"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}"></path></svg>`;
});
const PauseCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-pause-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"10"}" y1="${"15"}" x2="${"10"}" y2="${"9"}"></line><line x1="${"14"}" y1="${"15"}" x2="${"14"}" y2="${"9"}"></line></svg>`;
});
const PauseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-pause " + escape(customClass, true)}"><rect x="${"6"}" y="${"4"}" width="${"4"}" height="${"16"}"></rect><rect x="${"14"}" y="${"4"}" width="${"4"}" height="${"16"}"></rect></svg>`;
});
const PenToolIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-pen-tool " + escape(customClass, true)}"><path d="${"M12 19l7-7 3 3-7 7-3-3z"}"></path><path d="${"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}"></path><path d="${"M2 2l7.586 7.586"}"></path><circle cx="${"11"}" cy="${"11"}" r="${"2"}"></circle></svg>`;
});
const PercentIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-percent " + escape(customClass, true)}"><line x1="${"19"}" y1="${"5"}" x2="${"5"}" y2="${"19"}"></line><circle cx="${"6.5"}" cy="${"6.5"}" r="${"2.5"}"></circle><circle cx="${"17.5"}" cy="${"17.5"}" r="${"2.5"}"></circle></svg>`;
});
const PhoneCallIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-call " + escape(customClass, true)}"><path d="${"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PhoneForwardedIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-forwarded " + escape(customClass, true)}"><polyline points="${"19 1 23 5 19 9"}"></polyline><line x1="${"15"}" y1="${"5"}" x2="${"23"}" y2="${"5"}"></line><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PhoneIncomingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-incoming " + escape(customClass, true)}"><polyline points="${"16 2 16 8 22 8"}"></polyline><line x1="${"23"}" y1="${"1"}" x2="${"16"}" y2="${"8"}"></line><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PhoneMissedIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-missed " + escape(customClass, true)}"><line x1="${"23"}" y1="${"1"}" x2="${"17"}" y2="${"7"}"></line><line x1="${"17"}" y1="${"1"}" x2="${"23"}" y2="${"7"}"></line><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PhoneOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-off " + escape(customClass, true)}"><path d="${"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}"></path><line x1="${"23"}" y1="${"1"}" x2="${"1"}" y2="${"23"}"></line></svg>`;
});
const PhoneOutgoingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone-outgoing " + escape(customClass, true)}"><polyline points="${"23 7 23 1 17 1"}"></polyline><line x1="${"16"}" y1="${"8"}" x2="${"23"}" y2="${"1"}"></line><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PhoneIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-phone " + escape(customClass, true)}"><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></svg>`;
});
const PieChartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-pie-chart " + escape(customClass, true)}"><path d="${"M21.21 15.89A10 10 0 1 1 8 2.83"}"></path><path d="${"M22 12A10 10 0 0 0 12 2v10z"}"></path></svg>`;
});
const PlayCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-play-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><polygon points="${"10 8 16 12 10 16 10 8"}"></polygon></svg>`;
});
const PlayIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-play " + escape(customClass, true)}"><polygon points="${"5 3 19 12 5 21 5 3"}"></polygon></svg>`;
});
const PlusSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-plus-square " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"12"}" y1="${"8"}" x2="${"12"}" y2="${"16"}"></line><line x1="${"8"}" y1="${"12"}" x2="${"16"}" y2="${"12"}"></line></svg>`;
});
const PlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-plus " + escape(customClass, true)}"><line x1="${"12"}" y1="${"5"}" x2="${"12"}" y2="${"19"}"></line><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line></svg>`;
});
const PocketIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-pocket " + escape(customClass, true)}"><path d="${"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}"></path><polyline points="${"8 10 12 14 16 10"}"></polyline></svg>`;
});
const PowerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-power " + escape(customClass, true)}"><path d="${"M18.36 6.64a9 9 0 1 1-12.73 0"}"></path><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"12"}"></line></svg>`;
});
const PrinterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-printer " + escape(customClass, true)}"><polyline points="${"6 9 6 2 18 2 18 9"}"></polyline><path d="${"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}"></path><rect x="${"6"}" y="${"14"}" width="${"12"}" height="${"8"}"></rect></svg>`;
});
const RadioIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-radio " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"2"}"></circle><path d="${"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"}"></path></svg>`;
});
const RefreshCcwIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-refresh-ccw " + escape(customClass, true)}"><polyline points="${"1 4 1 10 7 10"}"></polyline><polyline points="${"23 20 23 14 17 14"}"></polyline><path d="${"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}"></path></svg>`;
});
const RefreshCwIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-refresh-cw " + escape(customClass, true)}"><polyline points="${"23 4 23 10 17 10"}"></polyline><polyline points="${"1 20 1 14 7 14"}"></polyline><path d="${"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}"></path></svg>`;
});
const RepeatIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-repeat " + escape(customClass, true)}"><polyline points="${"17 1 21 5 17 9"}"></polyline><path d="${"M3 11V9a4 4 0 0 1 4-4h14"}"></path><polyline points="${"7 23 3 19 7 15"}"></polyline><path d="${"M21 13v2a4 4 0 0 1-4 4H3"}"></path></svg>`;
});
const RewindIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-rewind " + escape(customClass, true)}"><polygon points="${"11 19 2 12 11 5 11 19"}"></polygon><polygon points="${"22 19 13 12 22 5 22 19"}"></polygon></svg>`;
});
const RotateCcwIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-rotate-ccw " + escape(customClass, true)}"><polyline points="${"1 4 1 10 7 10"}"></polyline><path d="${"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}"></path></svg>`;
});
const RotateCwIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-rotate-cw " + escape(customClass, true)}"><polyline points="${"23 4 23 10 17 10"}"></polyline><path d="${"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}"></path></svg>`;
});
const RssIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-rss " + escape(customClass, true)}"><path d="${"M4 11a9 9 0 0 1 9 9"}"></path><path d="${"M4 4a16 16 0 0 1 16 16"}"></path><circle cx="${"5"}" cy="${"19"}" r="${"1"}"></circle></svg>`;
});
const SaveIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-save " + escape(customClass, true)}"><path d="${"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}"></path><polyline points="${"17 21 17 13 7 13 7 21"}"></polyline><polyline points="${"7 3 7 8 15 8"}"></polyline></svg>`;
});
const ScissorsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-scissors " + escape(customClass, true)}"><circle cx="${"6"}" cy="${"6"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"18"}" r="${"3"}"></circle><line x1="${"20"}" y1="${"4"}" x2="${"8.12"}" y2="${"15.88"}"></line><line x1="${"14.47"}" y1="${"14.48"}" x2="${"20"}" y2="${"20"}"></line><line x1="${"8.12"}" y1="${"8.12"}" x2="${"12"}" y2="${"12"}"></line></svg>`;
});
const ServerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-server " + escape(customClass, true)}"><rect x="${"2"}" y="${"2"}" width="${"20"}" height="${"8"}" rx="${"2"}" ry="${"2"}"></rect><rect x="${"2"}" y="${"14"}" width="${"20"}" height="${"8"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"6"}" y1="${"6"}" x2="${"6.01"}" y2="${"6"}"></line><line x1="${"6"}" y1="${"18"}" x2="${"6.01"}" y2="${"18"}"></line></svg>`;
});
const SettingsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-settings " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><path d="${"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}"></path></svg>`;
});
const Share2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-share-2 " + escape(customClass, true)}"><circle cx="${"18"}" cy="${"5"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"12"}" r="${"3"}"></circle><circle cx="${"18"}" cy="${"19"}" r="${"3"}"></circle><line x1="${"8.59"}" y1="${"13.51"}" x2="${"15.42"}" y2="${"17.49"}"></line><line x1="${"15.41"}" y1="${"6.51"}" x2="${"8.59"}" y2="${"10.49"}"></line></svg>`;
});
const ShareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-share " + escape(customClass, true)}"><path d="${"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}"></path><polyline points="${"16 6 12 2 8 6"}"></polyline><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"15"}"></line></svg>`;
});
const ShieldOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shield-off " + escape(customClass, true)}"><path d="${"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"}"></path><path d="${"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"}"></path><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const ShieldIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shield " + escape(customClass, true)}"><path d="${"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}"></path></svg>`;
});
const ShoppingBagIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shopping-bag " + escape(customClass, true)}"><path d="${"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}"></path><line x1="${"3"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><path d="${"M16 10a4 4 0 0 1-8 0"}"></path></svg>`;
});
const ShoppingCartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shopping-cart " + escape(customClass, true)}"><circle cx="${"9"}" cy="${"21"}" r="${"1"}"></circle><circle cx="${"20"}" cy="${"21"}" r="${"1"}"></circle><path d="${"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}"></path></svg>`;
});
const ShuffleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shuffle " + escape(customClass, true)}"><polyline points="${"16 3 21 3 21 8"}"></polyline><line x1="${"4"}" y1="${"20"}" x2="${"21"}" y2="${"3"}"></line><polyline points="${"21 16 21 21 16 21"}"></polyline><line x1="${"15"}" y1="${"15"}" x2="${"21"}" y2="${"21"}"></line><line x1="${"4"}" y1="${"4"}" x2="${"9"}" y2="${"9"}"></line></svg>`;
});
const SidebarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sidebar " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"9"}" y1="${"3"}" x2="${"9"}" y2="${"21"}"></line></svg>`;
});
const SkipBackIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-skip-back " + escape(customClass, true)}"><polygon points="${"19 20 9 12 19 4 19 20"}"></polygon><line x1="${"5"}" y1="${"19"}" x2="${"5"}" y2="${"5"}"></line></svg>`;
});
const SkipForwardIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-skip-forward " + escape(customClass, true)}"><polygon points="${"5 4 15 12 5 20 5 4"}"></polygon><line x1="${"19"}" y1="${"5"}" x2="${"19"}" y2="${"19"}"></line></svg>`;
});
const SlackIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-slack " + escape(customClass, true)}"><path d="${"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}"></path><path d="${"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}"></path><path d="${"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}"></path><path d="${"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}"></path><path d="${"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}"></path><path d="${"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}"></path><path d="${"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}"></path><path d="${"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}"></path></svg>`;
});
const SlashIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-slash " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"4.93"}" y1="${"4.93"}" x2="${"19.07"}" y2="${"19.07"}"></line></svg>`;
});
const SlidersIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sliders " + escape(customClass, true)}"><line x1="${"4"}" y1="${"21"}" x2="${"4"}" y2="${"14"}"></line><line x1="${"4"}" y1="${"10"}" x2="${"4"}" y2="${"3"}"></line><line x1="${"12"}" y1="${"21"}" x2="${"12"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"8"}" x2="${"12"}" y2="${"3"}"></line><line x1="${"20"}" y1="${"21"}" x2="${"20"}" y2="${"16"}"></line><line x1="${"20"}" y1="${"12"}" x2="${"20"}" y2="${"3"}"></line><line x1="${"1"}" y1="${"14"}" x2="${"7"}" y2="${"14"}"></line><line x1="${"9"}" y1="${"8"}" x2="${"15"}" y2="${"8"}"></line><line x1="${"17"}" y1="${"16"}" x2="${"23"}" y2="${"16"}"></line></svg>`;
});
const SmartphoneIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-smartphone " + escape(customClass, true)}"><rect x="${"5"}" y="${"2"}" width="${"14"}" height="${"20"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"12"}" y1="${"18"}" x2="${"12.01"}" y2="${"18"}"></line></svg>`;
});
const SmileIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-smile " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M8 14s1.5 2 4 2 4-2 4-2"}"></path><line x1="${"9"}" y1="${"9"}" x2="${"9.01"}" y2="${"9"}"></line><line x1="${"15"}" y1="${"9"}" x2="${"15.01"}" y2="${"9"}"></line></svg>`;
});
const SpeakerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-speaker " + escape(customClass, true)}"><rect x="${"4"}" y="${"2"}" width="${"16"}" height="${"20"}" rx="${"2"}" ry="${"2"}"></rect><circle cx="${"12"}" cy="${"14"}" r="${"4"}"></circle><line x1="${"12"}" y1="${"6"}" x2="${"12.01"}" y2="${"6"}"></line></svg>`;
});
const SquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-square " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect></svg>`;
});
const StarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-star " + escape(customClass, true)}"><polygon points="${"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}"></polygon></svg>`;
});
const StopCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-stop-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><rect x="${"9"}" y="${"9"}" width="${"6"}" height="${"6"}"></rect></svg>`;
});
const SunIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sun " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"5"}"></circle><line x1="${"12"}" y1="${"1"}" x2="${"12"}" y2="${"3"}"></line><line x1="${"12"}" y1="${"21"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"4.22"}" y1="${"4.22"}" x2="${"5.64"}" y2="${"5.64"}"></line><line x1="${"18.36"}" y1="${"18.36"}" x2="${"19.78"}" y2="${"19.78"}"></line><line x1="${"1"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line><line x1="${"21"}" y1="${"12"}" x2="${"23"}" y2="${"12"}"></line><line x1="${"4.22"}" y1="${"19.78"}" x2="${"5.64"}" y2="${"18.36"}"></line><line x1="${"18.36"}" y1="${"5.64"}" x2="${"19.78"}" y2="${"4.22"}"></line></svg>`;
});
const SunriseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sunrise " + escape(customClass, true)}"><path d="${"M17 18a5 5 0 0 0-10 0"}"></path><line x1="${"12"}" y1="${"2"}" x2="${"12"}" y2="${"9"}"></line><line x1="${"4.22"}" y1="${"10.22"}" x2="${"5.64"}" y2="${"11.64"}"></line><line x1="${"1"}" y1="${"18"}" x2="${"3"}" y2="${"18"}"></line><line x1="${"21"}" y1="${"18"}" x2="${"23"}" y2="${"18"}"></line><line x1="${"18.36"}" y1="${"11.64"}" x2="${"19.78"}" y2="${"10.22"}"></line><line x1="${"23"}" y1="${"22"}" x2="${"1"}" y2="${"22"}"></line><polyline points="${"8 6 12 2 16 6"}"></polyline></svg>`;
});
const SunsetIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sunset " + escape(customClass, true)}"><path d="${"M17 18a5 5 0 0 0-10 0"}"></path><line x1="${"12"}" y1="${"9"}" x2="${"12"}" y2="${"2"}"></line><line x1="${"4.22"}" y1="${"10.22"}" x2="${"5.64"}" y2="${"11.64"}"></line><line x1="${"1"}" y1="${"18"}" x2="${"3"}" y2="${"18"}"></line><line x1="${"21"}" y1="${"18"}" x2="${"23"}" y2="${"18"}"></line><line x1="${"18.36"}" y1="${"11.64"}" x2="${"19.78"}" y2="${"10.22"}"></line><line x1="${"23"}" y1="${"22"}" x2="${"1"}" y2="${"22"}"></line><polyline points="${"16 5 12 9 8 5"}"></polyline></svg>`;
});
const TabletIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-tablet " + escape(customClass, true)}"><rect x="${"4"}" y="${"2"}" width="${"16"}" height="${"20"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"12"}" y1="${"18"}" x2="${"12.01"}" y2="${"18"}"></line></svg>`;
});
const TagIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-tag " + escape(customClass, true)}"><path d="${"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}"></path><line x1="${"7"}" y1="${"7"}" x2="${"7.01"}" y2="${"7"}"></line></svg>`;
});
const TargetIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-target " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"6"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${"2"}"></circle></svg>`;
});
const TerminalIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-terminal " + escape(customClass, true)}"><polyline points="${"4 17 10 11 4 5"}"></polyline><line x1="${"12"}" y1="${"19"}" x2="${"20"}" y2="${"19"}"></line></svg>`;
});
const ThermometerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-thermometer " + escape(customClass, true)}"><path d="${"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"}"></path></svg>`;
});
const ThumbsDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-thumbs-down " + escape(customClass, true)}"><path d="${"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}"></path></svg>`;
});
const ThumbsUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-thumbs-up " + escape(customClass, true)}"><path d="${"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}"></path></svg>`;
});
const ToggleLeftIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-toggle-left " + escape(customClass, true)}"><rect x="${"1"}" y="${"5"}" width="${"22"}" height="${"14"}" rx="${"7"}" ry="${"7"}"></rect><circle cx="${"8"}" cy="${"12"}" r="${"3"}"></circle></svg>`;
});
const ToggleRightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-toggle-right " + escape(customClass, true)}"><rect x="${"1"}" y="${"5"}" width="${"22"}" height="${"14"}" rx="${"7"}" ry="${"7"}"></rect><circle cx="${"16"}" cy="${"12"}" r="${"3"}"></circle></svg>`;
});
const ToolIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-tool " + escape(customClass, true)}"><path d="${"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}"></path></svg>`;
});
const Trash2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-trash-2 " + escape(customClass, true)}"><polyline points="${"3 6 5 6 21 6"}"></polyline><path d="${"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}"></path><line x1="${"10"}" y1="${"11"}" x2="${"10"}" y2="${"17"}"></line><line x1="${"14"}" y1="${"11"}" x2="${"14"}" y2="${"17"}"></line></svg>`;
});
const TrashIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-trash " + escape(customClass, true)}"><polyline points="${"3 6 5 6 21 6"}"></polyline><path d="${"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}"></path></svg>`;
});
const TrelloIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-trello " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><rect x="${"7"}" y="${"7"}" width="${"3"}" height="${"9"}"></rect><rect x="${"14"}" y="${"7"}" width="${"3"}" height="${"5"}"></rect></svg>`;
});
const TrendingDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-trending-down " + escape(customClass, true)}"><polyline points="${"23 18 13.5 8.5 8.5 13.5 1 6"}"></polyline><polyline points="${"17 18 23 18 23 12"}"></polyline></svg>`;
});
const TrendingUpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-trending-up " + escape(customClass, true)}"><polyline points="${"23 6 13.5 15.5 8.5 10.5 1 18"}"></polyline><polyline points="${"17 6 23 6 23 12"}"></polyline></svg>`;
});
const TriangleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-triangle " + escape(customClass, true)}"><path d="${"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}"></path></svg>`;
});
const TruckIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-truck " + escape(customClass, true)}"><rect x="${"1"}" y="${"3"}" width="${"15"}" height="${"13"}"></rect><polygon points="${"16 8 20 8 23 11 23 16 16 16 16 8"}"></polygon><circle cx="${"5.5"}" cy="${"18.5"}" r="${"2.5"}"></circle><circle cx="${"18.5"}" cy="${"18.5"}" r="${"2.5"}"></circle></svg>`;
});
const TvIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-tv " + escape(customClass, true)}"><rect x="${"2"}" y="${"7"}" width="${"20"}" height="${"15"}" rx="${"2"}" ry="${"2"}"></rect><polyline points="${"17 2 12 7 7 2"}"></polyline></svg>`;
});
const TwitchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-twitch " + escape(customClass, true)}"><path d="${"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}"></path></svg>`;
});
const TwitterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-twitter " + escape(customClass, true)}"><path d="${"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}"></path></svg>`;
});
const TypeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-type " + escape(customClass, true)}"><polyline points="${"4 7 4 4 20 4 20 7"}"></polyline><line x1="${"9"}" y1="${"20"}" x2="${"15"}" y2="${"20"}"></line><line x1="${"12"}" y1="${"4"}" x2="${"12"}" y2="${"20"}"></line></svg>`;
});
const UmbrellaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-umbrella " + escape(customClass, true)}"><path d="${"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"}"></path></svg>`;
});
const UnderlineIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-underline " + escape(customClass, true)}"><path d="${"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}"></path><line x1="${"4"}" y1="${"21"}" x2="${"20"}" y2="${"21"}"></line></svg>`;
});
const UnlockIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-unlock " + escape(customClass, true)}"><rect x="${"3"}" y="${"11"}" width="${"18"}" height="${"11"}" rx="${"2"}" ry="${"2"}"></rect><path d="${"M7 11V7a5 5 0 0 1 9.9-1"}"></path></svg>`;
});
const UploadCloudIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-upload-cloud " + escape(customClass, true)}"><polyline points="${"16 16 12 12 8 16"}"></polyline><line x1="${"12"}" y1="${"12"}" x2="${"12"}" y2="${"21"}"></line><path d="${"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"}"></path><polyline points="${"16 16 12 12 8 16"}"></polyline></svg>`;
});
const UploadIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-upload " + escape(customClass, true)}"><path d="${"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}"></path><polyline points="${"17 8 12 3 7 8"}"></polyline><line x1="${"12"}" y1="${"3"}" x2="${"12"}" y2="${"15"}"></line></svg>`;
});
const UserCheckIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user-check " + escape(customClass, true)}"><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><polyline points="${"17 11 19 13 23 9"}"></polyline></svg>`;
});
const UserMinusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user-minus " + escape(customClass, true)}"><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><line x1="${"23"}" y1="${"11"}" x2="${"17"}" y2="${"11"}"></line></svg>`;
});
const UserPlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user-plus " + escape(customClass, true)}"><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><line x1="${"20"}" y1="${"8"}" x2="${"20"}" y2="${"14"}"></line><line x1="${"23"}" y1="${"11"}" x2="${"17"}" y2="${"11"}"></line></svg>`;
});
const UserXIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user-x " + escape(customClass, true)}"><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><line x1="${"18"}" y1="${"8"}" x2="${"23"}" y2="${"13"}"></line><line x1="${"23"}" y1="${"8"}" x2="${"18"}" y2="${"13"}"></line></svg>`;
});
const UserIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user " + escape(customClass, true)}"><path d="${"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}"></path><circle cx="${"12"}" cy="${"7"}" r="${"4"}"></circle></svg>`;
});
const VideoOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-video-off " + escape(customClass, true)}"><path d="${"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"}"></path><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const VideoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-video " + escape(customClass, true)}"><polygon points="${"23 7 16 12 23 17 23 7"}"></polygon><rect x="${"1"}" y="${"5"}" width="${"15"}" height="${"14"}" rx="${"2"}" ry="${"2"}"></rect></svg>`;
});
const VoicemailIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-voicemail " + escape(customClass, true)}"><circle cx="${"5.5"}" cy="${"11.5"}" r="${"4.5"}"></circle><circle cx="${"18.5"}" cy="${"11.5"}" r="${"4.5"}"></circle><line x1="${"5.5"}" y1="${"16"}" x2="${"18.5"}" y2="${"16"}"></line></svg>`;
});
const Volume1Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-volume-1 " + escape(customClass, true)}"><polygon points="${"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}"></polygon><path d="${"M15.54 8.46a5 5 0 0 1 0 7.07"}"></path></svg>`;
});
const Volume2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-volume-2 " + escape(customClass, true)}"><polygon points="${"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}"></polygon><path d="${"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}"></path></svg>`;
});
const VolumeXIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-volume-x " + escape(customClass, true)}"><polygon points="${"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}"></polygon><line x1="${"23"}" y1="${"9"}" x2="${"17"}" y2="${"15"}"></line><line x1="${"17"}" y1="${"9"}" x2="${"23"}" y2="${"15"}"></line></svg>`;
});
const VolumeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-volume " + escape(customClass, true)}"><polygon points="${"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}"></polygon></svg>`;
});
const WatchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-watch " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"7"}"></circle><polyline points="${"12 9 12 12 13.5 13.5"}"></polyline><path d="${"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"}"></path></svg>`;
});
const WifiOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-wifi-off " + escape(customClass, true)}"><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line><path d="${"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}"></path><path d="${"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}"></path><path d="${"M10.71 5.05A16 16 0 0 1 22.58 9"}"></path><path d="${"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}"></path><path d="${"M8.53 16.11a6 6 0 0 1 6.95 0"}"></path><line x1="${"12"}" y1="${"20"}" x2="${"12.01"}" y2="${"20"}"></line></svg>`;
});
const WifiIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-wifi " + escape(customClass, true)}"><path d="${"M5 12.55a11 11 0 0 1 14.08 0"}"></path><path d="${"M1.42 9a16 16 0 0 1 21.16 0"}"></path><path d="${"M8.53 16.11a6 6 0 0 1 6.95 0"}"></path><line x1="${"12"}" y1="${"20"}" x2="${"12.01"}" y2="${"20"}"></line></svg>`;
});
const WindIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-wind " + escape(customClass, true)}"><path d="${"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}"></path></svg>`;
});
const XCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-x-circle " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"15"}" y1="${"9"}" x2="${"9"}" y2="${"15"}"></line><line x1="${"9"}" y1="${"9"}" x2="${"15"}" y2="${"15"}"></line></svg>`;
});
const XSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-x-square " + escape(customClass, true)}"><rect x="${"3"}" y="${"3"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"9"}" y1="${"9"}" x2="${"15"}" y2="${"15"}"></line><line x1="${"15"}" y1="${"9"}" x2="${"9"}" y2="${"15"}"></line></svg>`;
});
const XIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-x " + escape(customClass, true)}"><line x1="${"18"}" y1="${"6"}" x2="${"6"}" y2="${"18"}"></line><line x1="${"6"}" y1="${"6"}" x2="${"18"}" y2="${"18"}"></line></svg>`;
});
const YoutubeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-youtube " + escape(customClass, true)}"><path d="${"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}"></path><polygon points="${"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}"></polygon></svg>`;
});
const ZapOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-zap-off " + escape(customClass, true)}"><polyline points="${"12.41 6.75 13 2 10.57 4.92"}"></polyline><polyline points="${"18.57 12.91 21 10 15.66 10"}"></polyline><polyline points="${"8 8 3 14 12 14 11 22 16 16"}"></polyline><line x1="${"1"}" y1="${"1"}" x2="${"23"}" y2="${"23"}"></line></svg>`;
});
const ZapIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-zap " + escape(customClass, true)}"><polygon points="${"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}"></polygon></svg>`;
});
const ZoomInIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-zoom-in " + escape(customClass, true)}"><circle cx="${"11"}" cy="${"11"}" r="${"8"}"></circle><line x1="${"21"}" y1="${"21"}" x2="${"16.65"}" y2="${"16.65"}"></line><line x1="${"11"}" y1="${"8"}" x2="${"11"}" y2="${"14"}"></line><line x1="${"8"}" y1="${"11"}" x2="${"14"}" y2="${"11"}"></line></svg>`;
});
const ZoomOutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-zoom-out " + escape(customClass, true)}"><circle cx="${"11"}" cy="${"11"}" r="${"8"}"></circle><line x1="${"21"}" y1="${"21"}" x2="${"16.65"}" y2="${"16.65"}"></line><line x1="${"8"}" y1="${"11"}" x2="${"14"}" y2="${"11"}"></line></svg>`;
});
const FeatherIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Feather Icons | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Feather", pageTitle: "Icons" }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h4 class="${"card-title"}">Examples</h4>
                        <p class="${"text-muted mb-0"}">Use <code>&lt;ActivityIcon /&gt;</code> class.</p>`;
                }
              })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ActivityIcon, "ActivityIcon").$$render($$result, {}, {}, {})}ActivityIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertCircleIcon, "AlertCircleIcon").$$render($$result, {}, {}, {})}AlertCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertOctagonIcon, "AlertOctagonIcon").$$render($$result, {}, {}, {})}AlertOctagonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertTriangleIcon, "AlertTriangleIcon").$$render($$result, {}, {}, {})}AlertTriangleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlignCenterIcon, "AlignCenterIcon").$$render($$result, {}, {}, {})}AlignCenterIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlignJustifyIcon, "AlignJustifyIcon").$$render($$result, {}, {}, {})}AlignJustifyIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlignLeftIcon, "AlignLeftIcon").$$render($$result, {}, {}, {})}AlignLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlignRightIcon, "AlignRightIcon").$$render($$result, {}, {}, {})}AlignRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AnchorIcon, "AnchorIcon").$$render($$result, {}, {}, {})}AnchorIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ApertureIcon, "ApertureIcon").$$render($$result, {}, {}, {})}ApertureIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArchiveIcon, "ArchiveIcon").$$render($$result, {}, {}, {})}ArchiveIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowDownCircleIcon, "ArrowDownCircleIcon").$$render($$result, {}, {}, {})}ArrowDownCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowDownLeftIcon, "ArrowDownLeftIcon").$$render($$result, {}, {}, {})}ArrowDownLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowDownRightIcon, "ArrowDownRightIcon").$$render($$result, {}, {}, {})}ArrowDownRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowDownIcon, "ArrowDownIcon").$$render($$result, {}, {}, {})}ArrowDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowLeftCircleIcon, "ArrowLeftCircleIcon").$$render($$result, {}, {}, {})}ArrowLeftCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowLeftIcon, "ArrowLeftIcon").$$render($$result, {}, {}, {})}ArrowLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowRightCircleIcon, "ArrowRightCircleIcon").$$render($$result, {}, {}, {})}ArrowRightCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowRightIcon, "ArrowRightIcon").$$render($$result, {}, {}, {})}ArrowRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowUpCircleIcon, "ArrowUpCircleIcon").$$render($$result, {}, {}, {})}ArrowUpCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowUpLeftIcon, "ArrowUpLeftIcon").$$render($$result, {}, {}, {})}ArrowUpLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowUpRightIcon, "ArrowUpRightIcon").$$render($$result, {}, {}, {})}ArrowUpRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArrowUpIcon, "ArrowUpIcon").$$render($$result, {}, {}, {})}ArrowUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AtSignIcon, "AtSignIcon").$$render($$result, {}, {}, {})}AtSignIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AwardIcon, "AwardIcon").$$render($$result, {}, {}, {})}AwardIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BarChart2Icon, "BarChart2Icon").$$render($$result, {}, {}, {})}BarChart2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BarChartIcon, "BarChartIcon").$$render($$result, {}, {}, {})}BarChartIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BatteryChargingIcon, "BatteryChargingIcon").$$render($$result, {}, {}, {})}BatteryChargingIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BatteryIcon, "BatteryIcon").$$render($$result, {}, {}, {})}BatteryIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BellOffIcon, "BellOffIcon").$$render($$result, {}, {}, {})}BellOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BellIcon, "BellIcon").$$render($$result, {}, {}, {})}BellIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BluetoothIcon, "BluetoothIcon").$$render($$result, {}, {}, {})}BluetoothIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BoldIcon, "BoldIcon").$$render($$result, {}, {}, {})}BoldIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BookOpenIcon, "BookOpenIcon").$$render($$result, {}, {}, {})}BookOpenIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BookIcon, "BookIcon").$$render($$result, {}, {}, {})}BookIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BookmarkIcon, "BookmarkIcon").$$render($$result, {}, {}, {})}BookmarkIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BoxIcon, "BoxIcon").$$render($$result, {}, {}, {})}BoxIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(BriefcaseIcon, "BriefcaseIcon").$$render($$result, {}, {}, {})}BriefcaseIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CalendarIcon, "CalendarIcon").$$render($$result, {}, {}, {})}CalendarIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CameraOffIcon, "CameraOffIcon").$$render($$result, {}, {}, {})}CameraOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CameraIcon, "CameraIcon").$$render($$result, {}, {}, {})}CameraIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CastIcon, "CastIcon").$$render($$result, {}, {}, {})}CastIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CheckCircleIcon, "CheckCircleIcon").$$render($$result, {}, {}, {})}CheckCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CheckSquareIcon, "CheckSquareIcon").$$render($$result, {}, {}, {})}CheckSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CheckIcon, "CheckIcon").$$render($$result, {}, {}, {})}CheckIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronDownIcon, "ChevronDownIcon").$$render($$result, {}, {}, {})}ChevronDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronLeftIcon, "ChevronLeftIcon").$$render($$result, {}, {}, {})}ChevronLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronRightIcon, "ChevronRightIcon").$$render($$result, {}, {}, {})}ChevronRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronUpIcon, "ChevronUpIcon").$$render($$result, {}, {}, {})}ChevronUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronsDownIcon, "ChevronsDownIcon").$$render($$result, {}, {}, {})}ChevronsDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronsLeftIcon, "ChevronsLeftIcon").$$render($$result, {}, {}, {})}ChevronsLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronsRightIcon, "ChevronsRightIcon").$$render($$result, {}, {}, {})}ChevronsRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChevronsUpIcon, "ChevronsUpIcon").$$render($$result, {}, {}, {})}ChevronsUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ChromeIcon, "ChromeIcon").$$render($$result, {}, {}, {})}ChromeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CircleIcon, "CircleIcon").$$render($$result, {}, {}, {})}CircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ClipboardIcon, "ClipboardIcon").$$render($$result, {}, {}, {})}ClipboardIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ClockIcon, "ClockIcon").$$render($$result, {}, {}, {})}ClockIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudDrizzleIcon, "CloudDrizzleIcon").$$render($$result, {}, {}, {})}CloudDrizzleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudLightningIcon, "CloudLightningIcon").$$render($$result, {}, {}, {})}CloudLightningIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudOffIcon, "CloudOffIcon").$$render($$result, {}, {}, {})}CloudOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudRainIcon, "CloudRainIcon").$$render($$result, {}, {}, {})}CloudRainIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudSnowIcon, "CloudSnowIcon").$$render($$result, {}, {}, {})}CloudSnowIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CloudIcon, "CloudIcon").$$render($$result, {}, {}, {})}CloudIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CodeIcon, "CodeIcon").$$render($$result, {}, {}, {})}CodeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CodepenIcon, "CodepenIcon").$$render($$result, {}, {}, {})}CodepenIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CodesandboxIcon, "CodesandboxIcon").$$render($$result, {}, {}, {})}CodesandboxIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CoffeeIcon, "CoffeeIcon").$$render($$result, {}, {}, {})}CoffeeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ColumnsIcon, "ColumnsIcon").$$render($$result, {}, {}, {})}ColumnsIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CommandIcon, "CommandIcon").$$render($$result, {}, {}, {})}CommandIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CompassIcon, "CompassIcon").$$render($$result, {}, {}, {})}CompassIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CopyIcon, "CopyIcon").$$render($$result, {}, {}, {})}CopyIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerDownLeftIcon, "CornerDownLeftIcon").$$render($$result, {}, {}, {})}CornerDownLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerDownRightIcon, "CornerDownRightIcon").$$render($$result, {}, {}, {})}CornerDownRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerLeftDownIcon, "CornerLeftDownIcon").$$render($$result, {}, {}, {})}CornerLeftDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerLeftUpIcon, "CornerLeftUpIcon").$$render($$result, {}, {}, {})}CornerLeftUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerRightDownIcon, "CornerRightDownIcon").$$render($$result, {}, {}, {})}CornerRightDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerRightUpIcon, "CornerRightUpIcon").$$render($$result, {}, {}, {})}CornerRightUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerUpLeftIcon, "CornerUpLeftIcon").$$render($$result, {}, {}, {})}CornerUpLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CornerUpRightIcon, "CornerUpRightIcon").$$render($$result, {}, {}, {})}CornerUpRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CpuIcon, "CpuIcon").$$render($$result, {}, {}, {})}CpuIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CreditCardIcon, "CreditCardIcon").$$render($$result, {}, {}, {})}CreditCardIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CropIcon, "CropIcon").$$render($$result, {}, {}, {})}CropIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(CrosshairIcon, "CrosshairIcon").$$render($$result, {}, {}, {})}CrosshairIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DatabaseIcon, "DatabaseIcon").$$render($$result, {}, {}, {})}DatabaseIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DeleteIcon, "DeleteIcon").$$render($$result, {}, {}, {})}DeleteIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DiscIcon, "DiscIcon").$$render($$result, {}, {}, {})}DiscIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DivideCircleIcon, "DivideCircleIcon").$$render($$result, {}, {}, {})}DivideCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DivideSquareIcon, "DivideSquareIcon").$$render($$result, {}, {}, {})}DivideSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DivideIcon, "DivideIcon").$$render($$result, {}, {}, {})}DivideIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DollarSignIcon, "DollarSignIcon").$$render($$result, {}, {}, {})}DollarSignIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DownloadCloudIcon, "DownloadCloudIcon").$$render($$result, {}, {}, {})}DownloadCloudIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DownloadIcon, "DownloadIcon").$$render($$result, {}, {}, {})}DownloadIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DribbbleIcon, "DribbbleIcon").$$render($$result, {}, {}, {})}DribbbleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(DropletIcon, "DropletIcon").$$render($$result, {}, {}, {})}DropletIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Edit2Icon, "Edit2Icon").$$render($$result, {}, {}, {})}Edit2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Edit3Icon, "Edit3Icon").$$render($$result, {}, {}, {})}Edit3Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(EditIcon, "EditIcon").$$render($$result, {}, {}, {})}EditIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ExternalLinkIcon, "ExternalLinkIcon").$$render($$result, {}, {}, {})}ExternalLinkIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(EyeOffIcon, "EyeOffIcon").$$render($$result, {}, {}, {})}EyeOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(EyeIcon, "EyeIcon").$$render($$result, {}, {}, {})}EyeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FacebookIcon, "FacebookIcon").$$render($$result, {}, {}, {})}FacebookIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FastForwardIcon, "FastForwardIcon").$$render($$result, {}, {}, {})}FastForwardIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FeatherIcon, "FeatherIcon").$$render($$result, {}, {}, {})}FeatherIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FigmaIcon, "FigmaIcon").$$render($$result, {}, {}, {})}FigmaIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FileMinusIcon, "FileMinusIcon").$$render($$result, {}, {}, {})}FileMinusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FilePlusIcon, "FilePlusIcon").$$render($$result, {}, {}, {})}FilePlusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FileTextIcon, "FileTextIcon").$$render($$result, {}, {}, {})}FileTextIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FileIcon, "FileIcon").$$render($$result, {}, {}, {})}FileIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FilmIcon, "FilmIcon").$$render($$result, {}, {}, {})}FilmIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FilterIcon, "FilterIcon").$$render($$result, {}, {}, {})}FilterIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FlagIcon, "FlagIcon").$$render($$result, {}, {}, {})}FlagIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FolderMinusIcon, "FolderMinusIcon").$$render($$result, {}, {}, {})}FolderMinusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FolderPlusIcon, "FolderPlusIcon").$$render($$result, {}, {}, {})}FolderPlusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FolderIcon, "FolderIcon").$$render($$result, {}, {}, {})}FolderIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FramerIcon, "FramerIcon").$$render($$result, {}, {}, {})}FramerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(FrownIcon, "FrownIcon").$$render($$result, {}, {}, {})}FrownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GiftIcon, "GiftIcon").$$render($$result, {}, {}, {})}GiftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GitBranchIcon, "GitBranchIcon").$$render($$result, {}, {}, {})}GitBranchIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GitCommitIcon, "GitCommitIcon").$$render($$result, {}, {}, {})}GitCommitIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GitMergeIcon, "GitMergeIcon").$$render($$result, {}, {}, {})}GitMergeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GitPullRequestIcon, "GitPullRequestIcon").$$render($$result, {}, {}, {})}GitPullRequestIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GithubIcon, "GithubIcon").$$render($$result, {}, {}, {})}GithubIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GitlabIcon, "GitlabIcon").$$render($$result, {}, {}, {})}GitlabIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GlobeIcon, "GlobeIcon").$$render($$result, {}, {}, {})}GlobeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(GridIcon, "GridIcon").$$render($$result, {}, {}, {})}GridIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HardDriveIcon, "HardDriveIcon").$$render($$result, {}, {}, {})}HardDriveIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HashIcon, "HashIcon").$$render($$result, {}, {}, {})}HashIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HeadphonesIcon, "HeadphonesIcon").$$render($$result, {}, {}, {})}HeadphonesIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HeartIcon, "HeartIcon").$$render($$result, {}, {}, {})}HeartIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HelpCircleIcon, "HelpCircleIcon").$$render($$result, {}, {}, {})}HelpCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HexagonIcon, "HexagonIcon").$$render($$result, {}, {}, {})}HexagonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(HomeIcon, "HomeIcon").$$render($$result, {}, {}, {})}HomeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ImageIcon, "ImageIcon").$$render($$result, {}, {}, {})}ImageIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(InboxIcon, "InboxIcon").$$render($$result, {}, {}, {})}InboxIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(InfoIcon, "InfoIcon").$$render($$result, {}, {}, {})}InfoIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(InstagramIcon, "InstagramIcon").$$render($$result, {}, {}, {})}InstagramIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ItalicIcon, "ItalicIcon").$$render($$result, {}, {}, {})}ItalicIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(KeyIcon, "KeyIcon").$$render($$result, {}, {}, {})}KeyIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LayersIcon, "LayersIcon").$$render($$result, {}, {}, {})}LayersIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LayoutIcon, "LayoutIcon").$$render($$result, {}, {}, {})}LayoutIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LifeBuoyIcon, "LifeBuoyIcon").$$render($$result, {}, {}, {})}LifeBuoyIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Link2Icon, "Link2Icon").$$render($$result, {}, {}, {})}Link2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LinkIcon, "LinkIcon").$$render($$result, {}, {}, {})}LinkIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LinkedinIcon, "LinkedinIcon").$$render($$result, {}, {}, {})}LinkedinIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ListIcon, "ListIcon").$$render($$result, {}, {}, {})}ListIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, {}, {}, {})}LoaderIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LockIcon, "LockIcon").$$render($$result, {}, {}, {})}LockIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LogInIcon, "LogInIcon").$$render($$result, {}, {}, {})}LogInIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(LogOutIcon, "LogOutIcon").$$render($$result, {}, {}, {})}LogOutIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MailIcon, "MailIcon").$$render($$result, {}, {}, {})}MailIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MapPinIcon, "MapPinIcon").$$render($$result, {}, {}, {})}MapPinIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MapIcon, "MapIcon").$$render($$result, {}, {}, {})}MapIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Maximize2Icon, "Maximize2Icon").$$render($$result, {}, {}, {})}Maximize2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MaximizeIcon, "MaximizeIcon").$$render($$result, {}, {}, {})}MaximizeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MehIcon, "MehIcon").$$render($$result, {}, {}, {})}MehIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MenuIcon, "MenuIcon").$$render($$result, {}, {}, {})}MenuIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MessageCircleIcon, "MessageCircleIcon").$$render($$result, {}, {}, {})}MessageCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MessageSquareIcon, "MessageSquareIcon").$$render($$result, {}, {}, {})}MessageSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MicOffIcon, "MicOffIcon").$$render($$result, {}, {}, {})}MicOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MicIcon, "MicIcon").$$render($$result, {}, {}, {})}MicIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Minimize2Icon, "Minimize2Icon").$$render($$result, {}, {}, {})}Minimize2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MinimizeIcon, "MinimizeIcon").$$render($$result, {}, {}, {})}MinimizeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MinusCircleIcon, "MinusCircleIcon").$$render($$result, {}, {}, {})}MinusCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MinusSquareIcon, "MinusSquareIcon").$$render($$result, {}, {}, {})}MinusSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MinusIcon, "MinusIcon").$$render($$result, {}, {}, {})}MinusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MonitorIcon, "MonitorIcon").$$render($$result, {}, {}, {})}MonitorIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MoonIcon, "MoonIcon").$$render($$result, {}, {}, {})}MoonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MoreHorizontalIcon, "MoreHorizontalIcon").$$render($$result, {}, {}, {})}MoreHorizontalIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MoreVerticalIcon, "MoreVerticalIcon").$$render($$result, {}, {}, {})}MoreVerticalIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MousePointerIcon, "MousePointerIcon").$$render($$result, {}, {}, {})}MousePointerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MoveIcon, "MoveIcon").$$render($$result, {}, {}, {})}MoveIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(MusicIcon, "MusicIcon").$$render($$result, {}, {}, {})}MusicIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Navigation2Icon, "Navigation2Icon").$$render($$result, {}, {}, {})}Navigation2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(NavigationIcon, "NavigationIcon").$$render($$result, {}, {}, {})}NavigationIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(OctagonIcon, "OctagonIcon").$$render($$result, {}, {}, {})}OctagonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PackageIcon, "PackageIcon").$$render($$result, {}, {}, {})}PackageIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PaperclipIcon, "PaperclipIcon").$$render($$result, {}, {}, {})}PaperclipIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PauseCircleIcon, "PauseCircleIcon").$$render($$result, {}, {}, {})}PauseCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PauseIcon, "PauseIcon").$$render($$result, {}, {}, {})}PauseIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PenToolIcon, "PenToolIcon").$$render($$result, {}, {}, {})}PenToolIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PercentIcon, "PercentIcon").$$render($$result, {}, {}, {})}PercentIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneCallIcon, "PhoneCallIcon").$$render($$result, {}, {}, {})}PhoneCallIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneForwardedIcon, "PhoneForwardedIcon").$$render($$result, {}, {}, {})}PhoneForwardedIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneIncomingIcon, "PhoneIncomingIcon").$$render($$result, {}, {}, {})}PhoneIncomingIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneMissedIcon, "PhoneMissedIcon").$$render($$result, {}, {}, {})}PhoneMissedIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneOffIcon, "PhoneOffIcon").$$render($$result, {}, {}, {})}PhoneOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneOutgoingIcon, "PhoneOutgoingIcon").$$render($$result, {}, {}, {})}PhoneOutgoingIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PhoneIcon, "PhoneIcon").$$render($$result, {}, {}, {})}PhoneIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PieChartIcon, "PieChartIcon").$$render($$result, {}, {}, {})}PieChartIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PlayCircleIcon, "PlayCircleIcon").$$render($$result, {}, {}, {})}PlayCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PlayIcon, "PlayIcon").$$render($$result, {}, {}, {})}PlayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PlusCircleIcon, "PlusCircleIcon").$$render($$result, {}, {}, {})}PlusCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PlusSquareIcon, "PlusSquareIcon").$$render($$result, {}, {}, {})}PlusSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PlusIcon, "PlusIcon").$$render($$result, {}, {}, {})}PlusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PocketIcon, "PocketIcon").$$render($$result, {}, {}, {})}PocketIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PowerIcon, "PowerIcon").$$render($$result, {}, {}, {})}PowerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(PrinterIcon, "PrinterIcon").$$render($$result, {}, {}, {})}PrinterIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RadioIcon, "RadioIcon").$$render($$result, {}, {}, {})}RadioIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RefreshCcwIcon, "RefreshCcwIcon").$$render($$result, {}, {}, {})}RefreshCcwIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RefreshCwIcon, "RefreshCwIcon").$$render($$result, {}, {}, {})}RefreshCwIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RepeatIcon, "RepeatIcon").$$render($$result, {}, {}, {})}RepeatIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RewindIcon, "RewindIcon").$$render($$result, {}, {}, {})}RewindIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RotateCcwIcon, "RotateCcwIcon").$$render($$result, {}, {}, {})}RotateCcwIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RotateCwIcon, "RotateCwIcon").$$render($$result, {}, {}, {})}RotateCwIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(RssIcon, "RssIcon").$$render($$result, {}, {}, {})}RssIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SaveIcon, "SaveIcon").$$render($$result, {}, {}, {})}SaveIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ScissorsIcon, "ScissorsIcon").$$render($$result, {}, {}, {})}ScissorsIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})}SearchIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SendIcon, "SendIcon").$$render($$result, {}, {}, {})}SendIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ServerIcon, "ServerIcon").$$render($$result, {}, {}, {})}ServerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SettingsIcon, "SettingsIcon").$$render($$result, {}, {}, {})}SettingsIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Share2Icon, "Share2Icon").$$render($$result, {}, {}, {})}Share2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShareIcon, "ShareIcon").$$render($$result, {}, {}, {})}ShareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShieldOffIcon, "ShieldOffIcon").$$render($$result, {}, {}, {})}ShieldOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShieldIcon, "ShieldIcon").$$render($$result, {}, {}, {})}ShieldIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShoppingBagIcon, "ShoppingBagIcon").$$render($$result, {}, {}, {})}ShoppingBagIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShoppingCartIcon, "ShoppingCartIcon").$$render($$result, {}, {}, {})}ShoppingCartIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ShuffleIcon, "ShuffleIcon").$$render($$result, {}, {}, {})}ShuffleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SidebarIcon, "SidebarIcon").$$render($$result, {}, {}, {})}SidebarIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SkipBackIcon, "SkipBackIcon").$$render($$result, {}, {}, {})}SkipBackIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SkipForwardIcon, "SkipForwardIcon").$$render($$result, {}, {}, {})}SkipForwardIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SlackIcon, "SlackIcon").$$render($$result, {}, {}, {})}SlackIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SlashIcon, "SlashIcon").$$render($$result, {}, {}, {})}SlashIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SlidersIcon, "SlidersIcon").$$render($$result, {}, {}, {})}SlidersIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SmartphoneIcon, "SmartphoneIcon").$$render($$result, {}, {}, {})}SmartphoneIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SmileIcon, "SmileIcon").$$render($$result, {}, {}, {})}SmileIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SpeakerIcon, "SpeakerIcon").$$render($$result, {}, {}, {})}SpeakerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SquareIcon, "SquareIcon").$$render($$result, {}, {}, {})}SquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(StarIcon, "StarIcon").$$render($$result, {}, {}, {})}StarIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(StopCircleIcon, "StopCircleIcon").$$render($$result, {}, {}, {})}StopCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SunIcon, "SunIcon").$$render($$result, {}, {}, {})}SunIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SunriseIcon, "SunriseIcon").$$render($$result, {}, {}, {})}SunriseIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(SunsetIcon, "SunsetIcon").$$render($$result, {}, {}, {})}SunsetIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TabletIcon, "TabletIcon").$$render($$result, {}, {}, {})}TabletIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TagIcon, "TagIcon").$$render($$result, {}, {}, {})}TagIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TargetIcon, "TargetIcon").$$render($$result, {}, {}, {})}TargetIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TerminalIcon, "TerminalIcon").$$render($$result, {}, {}, {})}TerminalIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ThermometerIcon, "ThermometerIcon").$$render($$result, {}, {}, {})}ThermometerIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ThumbsDownIcon, "ThumbsDownIcon").$$render($$result, {}, {}, {})}ThumbsDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ThumbsUpIcon, "ThumbsUpIcon").$$render($$result, {}, {}, {})}ThumbsUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ToggleLeftIcon, "ToggleLeftIcon").$$render($$result, {}, {}, {})}ToggleLeftIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ToggleRightIcon, "ToggleRightIcon").$$render($$result, {}, {}, {})}ToggleRightIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ToolIcon, "ToolIcon").$$render($$result, {}, {}, {})}ToolIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, {}, {}, {})}Trash2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TrashIcon, "TrashIcon").$$render($$result, {}, {}, {})}TrashIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TrelloIcon, "TrelloIcon").$$render($$result, {}, {}, {})}TrelloIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TrendingDownIcon, "TrendingDownIcon").$$render($$result, {}, {}, {})}TrendingDownIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TrendingUpIcon, "TrendingUpIcon").$$render($$result, {}, {}, {})}TrendingUpIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TriangleIcon, "TriangleIcon").$$render($$result, {}, {}, {})}TriangleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TruckIcon, "TruckIcon").$$render($$result, {}, {}, {})}TruckIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TvIcon, "TvIcon").$$render($$result, {}, {}, {})}TvIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TwitchIcon, "TwitchIcon").$$render($$result, {}, {}, {})}TwitchIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TwitterIcon, "TwitterIcon").$$render($$result, {}, {}, {})}TwitterIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(TypeIcon, "TypeIcon").$$render($$result, {}, {}, {})}TypeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UmbrellaIcon, "UmbrellaIcon").$$render($$result, {}, {}, {})}UmbrellaIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UnderlineIcon, "UnderlineIcon").$$render($$result, {}, {}, {})}UnderlineIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UnlockIcon, "UnlockIcon").$$render($$result, {}, {}, {})}UnlockIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UploadCloudIcon, "UploadCloudIcon").$$render($$result, {}, {}, {})}UploadCloudIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UploadIcon, "UploadIcon").$$render($$result, {}, {}, {})}UploadIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UserCheckIcon, "UserCheckIcon").$$render($$result, {}, {}, {})}UserCheckIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UserMinusIcon, "UserMinusIcon").$$render($$result, {}, {}, {})}UserMinusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UserPlusIcon, "UserPlusIcon").$$render($$result, {}, {}, {})}UserPlusIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UserXIcon, "UserXIcon").$$render($$result, {}, {}, {})}UserXIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UserIcon, "UserIcon").$$render($$result, {}, {}, {})}UserIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(UsersIcon, "UsersIcon").$$render($$result, {}, {}, {})}UsersIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(VideoOffIcon, "VideoOffIcon").$$render($$result, {}, {}, {})}VideoOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(VideoIcon, "VideoIcon").$$render($$result, {}, {}, {})}VideoIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(VoicemailIcon, "VoicemailIcon").$$render($$result, {}, {}, {})}VoicemailIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Volume1Icon, "Volume1Icon").$$render($$result, {}, {}, {})}Volume1Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Volume2Icon, "Volume2Icon").$$render($$result, {}, {}, {})}Volume2Icon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(VolumeXIcon, "VolumeXIcon").$$render($$result, {}, {}, {})}VolumeXIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(VolumeIcon, "VolumeIcon").$$render($$result, {}, {}, {})}VolumeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(WatchIcon, "WatchIcon").$$render($$result, {}, {}, {})}WatchIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(WifiOffIcon, "WifiOffIcon").$$render($$result, {}, {}, {})}WifiOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(WifiIcon, "WifiIcon").$$render($$result, {}, {}, {})}WifiIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(WindIcon, "WindIcon").$$render($$result, {}, {}, {})}WindIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(XCircleIcon, "XCircleIcon").$$render($$result, {}, {}, {})}XCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(XOctagonIcon, "XOctagonIcon").$$render($$result, {}, {}, {})}XOctagonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(XSquareIcon, "XSquareIcon").$$render($$result, {}, {}, {})}XSquareIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(XIcon, "XIcon").$$render($$result, {}, {}, {})}XIcon,
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(YoutubeIcon, "YoutubeIcon").$$render($$result, {}, {}, {})}YoutubeIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ZapOffIcon, "ZapOffIcon").$$render($$result, {}, {}, {})}ZapOffIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ZapIcon, "ZapIcon").$$render($$result, {}, {}, {})}ZapIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ZoomInIcon, "ZoomInIcon").$$render($$result, {}, {}, {})}ZoomInIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ZoomOutIcon, "ZoomOutIcon").$$render($$result, {}, {}, {})}ZoomOutIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, {}, {}, {})}AirplayIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertCircleIcon, "AlertCircleIcon").$$render($$result, {}, {}, {})}AlertCircleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertOctagonIcon, "AlertOctagonIcon").$$render($$result, {}, {}, {})}AlertOctagonIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertTriangleIcon, "AlertTriangleIcon").$$render($$result, {}, {}, {})}AlertTriangleIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AnchorIcon, "AnchorIcon").$$render($$result, {}, {}, {})}AnchorIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ApertureIcon, "ApertureIcon").$$render($$result, {}, {}, {})}ApertureIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArchiveIcon, "ArchiveIcon").$$render($$result, {}, {}, {})}ArchiveIcon
                            `;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ClockIcon, "ClockIcon").$$render($$result, {}, {}, {})}ClockIcon
                            `;
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
                </div>
            `;
        }
      })}
        

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h4 class="${"card-title"}">Sizes</h4>
                        <p class="${"text-muted mb-0"}">Use
                            <code>&lt;AirplayIcon class=&quot;icon-**&quot;&gt;</code>. Available sizes
                            <code>xs, sm,md,lg,xl,xxl</code></p>`;
                }
              })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "24" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "1x" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "1.5x" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "2x" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "3x" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { size: "4x" }, {}, {})}AirplayIcon
                            `;
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
                </div>
            `;
        }
      })}
        

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h4 class="${"card-title"}">Two Tones Color Icons</h4>
                        <p class="${"text-muted mb-0"}">Use
                            <code>&lt;AirplayIcon class=&quot;icon-dual-**&quot;&gt;</code>.
                        </p>`;
                }
              })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AirplayIcon, "AirplayIcon").$$render($$result, { class: "icon-dual" }, {}, {})}AirplayIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertCircleIcon, "AlertCircleIcon").$$render($$result, { class: "icon-dual-primary" }, {}, {})}AlertCircleIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertOctagonIcon, "AlertOctagonIcon").$$render($$result, { class: "icon-dual-success" }, {}, {})}AlertOctagonIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AlertTriangleIcon, "AlertTriangleIcon").$$render($$result, { class: "icon-dual-info" }, {}, {})}AlertTriangleIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(AnchorIcon, "AnchorIcon").$$render($$result, { class: "icon-dual-warning" }, {}, {})}AnchorIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ApertureIcon, "ApertureIcon").$$render($$result, { class: "icon-dual-danger" }, {}, {})}ApertureIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ArchiveIcon, "ArchiveIcon").$$render($$result, { class: "icon-dual-dark" }, {}, {})}ArchiveIcon
                            `;
                        }
                      })}

                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(ClockIcon, "ClockIcon").$$render($$result, { class: "icon-dual-secondary" }, {}, {})}ClockIcon
                            `;
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
                </div>
            `;
        }
      })}`;
    }
  })}</div>`;
});
export { FeatherIcons as default };
