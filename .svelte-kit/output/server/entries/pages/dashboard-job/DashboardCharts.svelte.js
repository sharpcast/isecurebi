import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
const DashboardCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seriesData, colors, id } = $$props;
  if ($$props.seriesData === void 0 && $$bindings.seriesData && seriesData !== void 0)
    $$bindings.seriesData(seriesData);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", "total_jobs" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { DashboardCharts as default };
