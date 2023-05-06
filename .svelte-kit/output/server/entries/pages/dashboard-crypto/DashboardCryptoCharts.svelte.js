import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
const DashboardCryptoCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seriesData, chartsColor, id } = $$props;
  if ($$props.seriesData === void 0 && $$bindings.seriesData && seriesData !== void 0)
    $$bindings.seriesData(seriesData);
  if ($$props.chartsColor === void 0 && $$bindings.chartsColor && chartsColor !== void 0)
    $$bindings.chartsColor(chartsColor);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", "dashboardcryptochart" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { DashboardCryptoCharts as default };
