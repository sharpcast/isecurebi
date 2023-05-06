import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const CarouselControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "direction", "directionText", "activeIndex", "items", "wrap"]);
  let classes = "";
  let { class: className = "" } = $$props;
  let srText = "";
  let { direction = "" } = $$props;
  let { directionText = "" } = $$props;
  let { activeIndex = 0 } = $$props;
  let { items = [] } = $$props;
  let { wrap = true } = $$props;
  const getSrText = (direction2) => {
    if (direction2 === "next") {
      return "Next";
    } else if (direction2 === "prev") {
      return "Previous";
    }
  };
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.directionText === void 0 && $$bindings.directionText && directionText !== void 0)
    $$bindings.directionText(directionText);
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0)
    $$bindings.activeIndex(activeIndex);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  classes = classnames(`carousel-control-${direction}`, className);
  srText = directionText ? directionText : getSrText(direction);
  return `<a${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { role: "button" },
    { href: "#" + escape(direction, true) }
  ], {})}><span class="${"carousel-control-" + escape(direction, true) + "-icon"}" aria-hidden="${"true"}"></span>
  <span class="${"visually-hidden"}">${escape(srText)}</span></a>`;
});
export { CarouselControl as C };
