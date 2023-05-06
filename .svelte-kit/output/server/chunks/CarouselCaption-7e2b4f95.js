import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const CarouselCaption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "captionHeader", "captionText"]);
  let classes = "";
  let { class: className = "" } = $$props;
  let { captionHeader = "" } = $$props;
  let { captionText = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.captionHeader === void 0 && $$bindings.captionHeader && captionHeader !== void 0)
    $$bindings.captionHeader(captionHeader);
  if ($$props.captionText === void 0 && $$bindings.captionText && captionText !== void 0)
    $$bindings.captionText(captionText);
  classes = classnames(className, "carousel-caption", "d-none", "d-md-block");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${captionHeader ? `<h5>${escape(captionHeader)}</h5>` : ``}
  ${captionText ? `<p>${escape(captionText)}</p>` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
export { CarouselCaption as C };
