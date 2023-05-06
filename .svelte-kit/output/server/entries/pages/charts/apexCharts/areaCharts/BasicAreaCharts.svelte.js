import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
import MOCK_DATA from "../../../../endpoints/charts/apexCharts/series.js";
const BasicAreaCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var BasicAreaChartsColors = getChartColorsArray();
  ({
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false }
    },
    series: [
      {
        name: "STOCK ABC",
        data: MOCK_DATA.seriesData.monthDataSeries1.prices
      }
    ],
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
      style: { fontWeight: 500 }
    },
    subtitle: { text: "Price Movements", align: "left" },
    labels: MOCK_DATA.seriesData.monthDataSeries1.dates,
    xaxis: { type: "datetime" },
    yaxis: { opposite: true },
    legend: { horizontalAlign: "left" },
    colors: BasicAreaChartsColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"basicareachart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { BasicAreaCharts as default };
