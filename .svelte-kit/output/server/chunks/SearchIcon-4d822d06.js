import { c as create_ssr_component, d as add_attribute, b as escape } from "./index-584434b3.js";
const InfoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-info " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"12"}"></line><line x1="${"12"}" y1="${"8"}" x2="${"12.01"}" y2="${"8"}"></line></svg>`;
});
const MoreVerticalIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-more-vertical " + escape(customClass, true)}"><circle cx="${"12"}" cy="${"12"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"5"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"19"}" r="${"1"}"></circle></svg>`;
});
const SearchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-search " + escape(customClass, true)}"><circle cx="${"11"}" cy="${"11"}" r="${"8"}"></circle><line x1="${"21"}" y1="${"21"}" x2="${"16.65"}" y2="${"16.65"}"></line></svg>`;
});
export { InfoIcon as I, MoreVerticalIcon as M, SearchIcon as S };
