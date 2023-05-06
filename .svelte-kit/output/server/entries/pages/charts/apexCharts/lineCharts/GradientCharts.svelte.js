import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const GradientCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"gradientcharts"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { GradientCharts as default };
