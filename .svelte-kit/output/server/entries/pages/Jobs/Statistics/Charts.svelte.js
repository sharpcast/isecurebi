import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
const Charts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors, seriesData, id } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  if ($$props.seriesData === void 0 && $$bindings.seriesData && seriesData !== void 0)
    $$bindings.seriesData(seriesData);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", "statisticschart" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { Charts as default };
