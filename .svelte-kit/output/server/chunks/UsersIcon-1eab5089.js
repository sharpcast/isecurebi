import { c as create_ssr_component, d as add_attribute, b as escape } from "./index-584434b3.js";
const UsersIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-users " + escape(customClass, true)}"><path d="${"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"9"}" cy="${"7"}" r="${"4"}"></circle><path d="${"M23 21v-2a4 4 0 0 0-3-3.87"}"></path><path d="${"M16 3.13a4 4 0 0 1 0 7.75"}"></path></svg>`;
});
export { UsersIcon as U };
