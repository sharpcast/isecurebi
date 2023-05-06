import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
const WidgetsCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors, id, seriesData } = $$props;
  function getChartColorsArray(colors) {
  }
  var areachartbitcoinColors = getChartColorsArray();
  ({
    chart: {
      width: 140,
      type: "area",
      sparkline: { enabled: true },
      toolbar: { show: false }
    },
    series: [...seriesData],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 1.5 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100]
      }
    },
    colors: areachartbitcoinColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.seriesData === void 0 && $$bindings.seriesData && seriesData !== void 0)
    $$bindings.seriesData(seriesData);
  return `<div${add_attribute("id", "otherwidget" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { WidgetsCharts as default };
