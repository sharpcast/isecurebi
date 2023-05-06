import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, e as each, d as add_attribute, z as add_classes, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const CarouselIndicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "items", "activeIndex"]);
  let { class: className = "" } = $$props;
  let classes = "";
  let { items = [] } = $$props;
  let { activeIndex = 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0)
    $$bindings.activeIndex(activeIndex);
  classes = classnames(className, "carousel-indicators");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${each(items, (item, index) => {
    return `<button data-bs-target${add_attribute("aria-current", activeIndex === index, 0)}${add_attribute("aria-label", item.title, 0)}${add_classes((activeIndex === index ? "active" : "").trim())}>${escape(item.title ? item.title : "")}
    </button>`;
  })}</div>`;
});
export { CarouselIndicators as C };
