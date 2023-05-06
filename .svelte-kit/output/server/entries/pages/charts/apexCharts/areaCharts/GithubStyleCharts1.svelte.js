import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
import MOCK_DATA from "../../../../endpoints/charts/apexCharts/series.js";
const GithubStyleCharts1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var BasicAreaChartsColors = getChartColorsArray();
  ({
    chart: {
      height: 170,
      type: "area",
      toolbar: { autoSelected: "selection" },
      brush: { enabled: true, target: "chartyear" },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("26 Jan 2014").getTime(),
          max: new Date("29 Mar 2015").getTime()
        }
      }
    },
    series: [
      {
        name: "commits",
        data: MOCK_DATA.githubdata.series
      }
    ],
    colors: BasicAreaChartsColors,
    dataLabels: { enabled: false },
    stroke: { width: 0, curve: "smooth" },
    fill: { opacity: 1, type: "solid" },
    legend: { position: "top", horizontalAlign: "left" },
    xaxis: { type: "datetime" }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"githubstylechart1"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { GithubStyleCharts1 as default };
