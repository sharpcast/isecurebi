import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
const WatchListChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seriesData, chartsColor, id } = $$props;
  const areachartlitecoinColors = [chartsColor];
  ({
    chart: {
      width: 130,
      height: 46,
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
    colors: areachartlitecoinColors
  });
  if ($$props.seriesData === void 0 && $$bindings.seriesData && seriesData !== void 0)
    $$bindings.seriesData(seriesData);
  if ($$props.chartsColor === void 0 && $$bindings.chartsColor && chartsColor !== void 0)
    $$bindings.chartsColor(chartsColor);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", "watchkistchart" + id, 0)} class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { WatchListChart as default };
