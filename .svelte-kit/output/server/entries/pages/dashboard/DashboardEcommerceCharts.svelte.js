import { c as create_ssr_component } from "../../../chunks/index-aeca7bd0.js";
const DashboardEcommerceCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"dashboardecommercechart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { DashboardEcommerceCharts as default };
