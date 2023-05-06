import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "type", "size", "color"]);
  let { class: className = "" } = $$props;
  let { type = "border" } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  classes = classnames(className, size ? `spinner-${type}-${size}` : false, `spinner-${type}`, color ? `text-${color}` : false);
  return `<div${spread([
    escape_object($$restProps),
    { role: "status" },
    { class: escape_attribute_value(classes) }
  ], {})}><span class="${"visually-hidden"}">${slots.default ? slots.default({}) : `Loading...`}</span></div>`;
});
export { Spinner as S };
