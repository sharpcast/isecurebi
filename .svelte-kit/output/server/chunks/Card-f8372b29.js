import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "body", "color", "inverse", "outline", "style"]);
  let { class: className = "" } = $$props;
  let { body = false } = $$props;
  let { color = "" } = $$props;
  let { inverse = false } = $$props;
  let { outline = false } = $$props;
  let { style = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  classes = classnames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? `${outline ? "border" : "bg"}-${color}` : false);
  return `<div${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { style: escape_attribute_value(style) }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Card as C };
