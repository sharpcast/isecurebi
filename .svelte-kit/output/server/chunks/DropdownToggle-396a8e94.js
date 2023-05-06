import { c as create_ssr_component, h as compute_rest_props, g as getContext, a as subscribe, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const DropdownToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let btnClasses;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "ariaLabel",
    "active",
    "block",
    "caret",
    "color",
    "disabled",
    "inner",
    "nav",
    "outline",
    "size",
    "split",
    "tag"
  ]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { ariaLabel = "Toggle Dropdown" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { caret = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { inner = void 0 } = $$props;
  let { nav = false } = $$props;
  let { outline = false } = $$props;
  let { size = "" } = $$props;
  let { split = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.caret === void 0 && $$bindings.caret && caret !== void 0)
    $$bindings.caret(caret);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, {
    "dropdown-toggle": caret || split,
    "dropdown-toggle-split": split,
    "nav-link": nav
  });
  btnClasses = classnames(classes, "btn", `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  $$unsubscribe_context();
  return `${nav ? `<a${spread([
    escape_object($$restProps),
    { href: "#nav" },
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</a>` : `${tag === "div" ? `<div${spread([
    escape_object($$restProps),
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</div>` : `${tag === "span" ? `<span${spread([
    escape_object($$restProps),
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    { class: escape_attribute_value(classes) }
  ], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</span>` : `<button${spread([
    escape_object($$restProps),
    { type: "button" },
    {
      "aria-expanded": escape_attribute_value($context.isOpen)
    },
    {
      class: escape_attribute_value(btnClasses)
    }
  ], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</button>`}`}`}`;
});
export { DropdownToggle as D };
