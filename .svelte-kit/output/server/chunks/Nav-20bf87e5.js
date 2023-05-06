import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return `flex-${vertical}-column`;
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card"
  ]);
  let { class: className = "" } = $$props;
  let { tabs = false } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  let { horizontal = "" } = $$props;
  let { justified = false } = $$props;
  let { fill = false } = $$props;
  let { navbar = false } = $$props;
  let { card = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  classes = classnames(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  });
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ul>`;
});
export { Nav as N };
