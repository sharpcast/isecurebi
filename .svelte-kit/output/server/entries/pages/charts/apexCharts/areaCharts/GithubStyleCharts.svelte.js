import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
import MOCK_DATA from "../../../../endpoints/charts/apexCharts/series.js";
const GithubStyleCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var areachartMonthsColors = getChartColorsArray();
  ({
    chart: {
      id: "chartyear",
      type: "area",
      height: 120,
      toolbar: { show: false, autoSelected: "pan" },
      events: {
        mounted(chart) {
        },
        updated(chart) {
        }
      }
    },
    series: [
      {
        name: "commits",
        data: MOCK_DATA.githubdata.series
      }
    ],
    colors: areachartMonthsColors,
    stroke: { width: 0, curve: "smooth" },
    dataLabels: { enabled: false },
    fill: { opacity: 1, type: "solid" },
    yaxis: { show: false, tickAmount: 3 },
    xaxis: { type: "datetime" }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"githubstylechart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { GithubStyleCharts as default };
