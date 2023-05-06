import { c as create_ssr_component, h as compute_rest_props, o as onDestroy, j as spread, k as escape_object, l as escape_attribute_value, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "style",
    "items",
    "activeIndex",
    "dark",
    "ride",
    "interval",
    "pause",
    "keyboard"
  ]);
  let classes = "";
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { items = [] } = $$props;
  let { activeIndex = 0 } = $$props;
  let { dark = false } = $$props;
  let { ride = true } = $$props;
  let { interval = 5e3 } = $$props;
  let { pause = true } = $$props;
  let { keyboard = true } = $$props;
  onDestroy(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0)
    $$bindings.activeIndex(activeIndex);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.ride === void 0 && $$bindings.ride && ride !== void 0)
    $$bindings.ride(ride);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.keyboard === void 0 && $$bindings.keyboard && keyboard !== void 0)
    $$bindings.keyboard(keyboard);
  classes = classnames(className, "carousel", "slide", { "carousel-dark": dark });
  return `

<div${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { style: escape_attribute_value(style) }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const CarouselItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "itemIndex", "activeIndex"]);
  let classes = "";
  let { class: className = "" } = $$props;
  let { itemIndex = 0 } = $$props;
  let { activeIndex = 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.itemIndex === void 0 && $$bindings.itemIndex && itemIndex !== void 0)
    $$bindings.itemIndex(itemIndex);
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0)
    $$bindings.activeIndex(activeIndex);
  classes = classnames(className, "carousel-item");
  return `<div${spread([escape_object($$restProps), { class: escape(classes, true) + " active" }], {
    classes: itemIndex === activeIndex ? "active" : ""
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Carousel as C, CarouselItem as a };
