import { c as create_ssr_component, d as add_attribute, b as escape } from "./index-584434b3.js";
const CheckCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-check-circle " + escape(customClass, true)}"><path d="${"M22 11.08V12a10 10 0 1 1-5.93-9.14"}"></path><polyline points="${"22 4 12 14.01 9 11.01"}"></polyline></svg>`;
});
export { CheckCircleIcon as C };
