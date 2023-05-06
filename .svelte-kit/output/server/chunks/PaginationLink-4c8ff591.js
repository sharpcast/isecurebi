import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let listClasses;
  let $$restProps = compute_rest_props($$props, ["class", "listClassName", "size", "ariaLabel"]);
  let { class: className = "" } = $$props;
  let { listClassName = "" } = $$props;
  let { size = "" } = $$props;
  let { ariaLabel = "pagination" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.listClassName === void 0 && $$bindings.listClassName && listClassName !== void 0)
    $$bindings.listClassName(listClassName);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  classes = classnames(className);
  listClasses = classnames(listClassName, "pagination", { [`pagination-${size}`]: !!size });
  return `<nav${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    {
      "aria-label": escape_attribute_value(ariaLabel)
    }
  ], {})}><ul${add_attribute("class", listClasses, 0)}>${slots.default ? slots.default({}) : ``}</ul></nav>`;
});
const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  classes = classnames(className, "page-item", { active, disabled });
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const PaginationLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let realLabel;
  let $$restProps = compute_rest_props($$props, ["class", "next", "previous", "first", "last", "ariaLabel", "href"]);
  let { class: className = "" } = $$props;
  let { next = false } = $$props;
  let { previous = false } = $$props;
  let { first = false } = $$props;
  let { last = false } = $$props;
  let { ariaLabel = "" } = $$props;
  let { href = "" } = $$props;
  let defaultAriaLabel;
  let defaultCaret;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.previous === void 0 && $$bindings.previous && previous !== void 0)
    $$bindings.previous(previous);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "page-link");
  {
    if (previous) {
      defaultAriaLabel = "Previous";
    } else if (next) {
      defaultAriaLabel = "Next";
    } else if (first) {
      defaultAriaLabel = "First";
    } else if (last) {
      defaultAriaLabel = "Last";
    }
  }
  realLabel = ariaLabel || defaultAriaLabel;
  {
    if (previous) {
      defaultCaret = "\u2039";
    } else if (next) {
      defaultCaret = "\u203A";
    } else if (first) {
      defaultCaret = "\xAB";
    } else if (last) {
      defaultCaret = "\xBB";
    }
  }
  return `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { href: escape_attribute_value(href) }
  ], {})}>${previous || next || first || last ? `<span aria-hidden="${"true"}">${slots.default ? slots.default({}) : `${escape(defaultCaret)}`}</span>
    <span class="${"visually-hidden"}">${escape(realLabel)}</span>` : `${slots.default ? slots.default({}) : ``}`}</a>`;
});
export { Pagination as P, PaginationItem as a, PaginationLink as b };
