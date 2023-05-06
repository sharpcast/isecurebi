import { c as create_ssr_component, d as add_attribute, b as escape } from "./index-584434b3.js";
const CalendarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-calendar " + escape(customClass, true)}"><rect x="${"3"}" y="${"4"}" width="${"18"}" height="${"18"}" rx="${"2"}" ry="${"2"}"></rect><line x1="${"16"}" y1="${"2"}" x2="${"16"}" y2="${"6"}"></line><line x1="${"8"}" y1="${"2"}" x2="${"8"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"10"}" x2="${"21"}" y2="${"10"}"></line></svg>`;
});
export { CalendarIcon as C };
