import { c as create_ssr_component, h as compute_rest_props, o as onDestroy, j as spread, k as escape_object, d as add_attribute } from "./index-584434b3.js";
const InlineContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let ref;
  let portal;
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { InlineContainer as I, Portal as P };
