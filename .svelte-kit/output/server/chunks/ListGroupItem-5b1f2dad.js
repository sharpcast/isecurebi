import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const ListGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "flush", "numbered"]);
  let { class: className = "" } = $$props;
  let { flush = false } = $$props;
  let { numbered = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.numbered === void 0 && $$bindings.numbered && numbered !== void 0)
    $$bindings.numbered(numbered);
  classes = classnames(className, "list-group", {
    "list-group-flush": flush,
    "list-group-numbered": numbered
  });
  return `${numbered ? `<ol${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListGroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "color", "action", "href", "tag"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { color = "" } = $$props;
  let { action = false } = $$props;
  let { href = null } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "list-group-item", {
    active,
    disabled,
    "list-group-item-action": action || tag === "button",
    [`list-group-item-${color}`]: color
  });
  return `${href ? `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { href: escape_attribute_value(href) },
    { disabled: disabled || null },
    { active: escape_attribute_value(active) }
  ], {})}>${slots.default ? slots.default({}) : ``}</a>` : `${tag === "button" ? `<button${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { type: "button" },
    { disabled: disabled || null },
    { active: escape_attribute_value(active) }
  ], {})}>${slots.default ? slots.default({}) : ``}</button>` : `<li${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { disabled: disabled || null },
    { active: escape_attribute_value(active) }
  ], {})}>${slots.default ? slots.default({}) : ``}</li>`}`}`;
});
export { ListGroup as L, ListGroupItem as a };
