import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
const SellerChats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color, data, id } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", "sellercharts" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { SellerChats as default };
