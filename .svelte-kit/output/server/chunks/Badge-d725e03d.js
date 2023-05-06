import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "children", "color", "href", "pill"]);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { color = "secondary" } = $$props;
  let { href = void 0 } = $$props;
  let { pill = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  classes = classnames(className, "badge", `bg-${color}`, pill ? "rounded-pill" : false);
  return `${href ? `<a${spread([
    escape_object($$restProps),
    { href: escape_attribute_value(href) },
    { class: escape_attribute_value(classes) }
  ], {})}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</span>`}`;
});
export { Badge as B };
