import { c as create_ssr_component, d as add_attribute } from "./index-584434b3.js";
var Map_svelte_svelte_type_style_lang = "";
const css = {
  code: ".full-screen.svelte-13umd3y{width:100%;height:100%}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latitude } = $$props;
  let { longitude } = $$props;
  let container;
  if ($$props.latitude === void 0 && $$bindings.latitude && latitude !== void 0)
    $$bindings.latitude(latitude);
  if ($$props.longitude === void 0 && $$bindings.longitude && longitude !== void 0)
    $$bindings.longitude(longitude);
  $$result.css.add(css);
  return `<div class="${"full-screen svelte-13umd3y"}"${add_attribute("this", container, 0)}></div>`;
});
export { Map as M };
