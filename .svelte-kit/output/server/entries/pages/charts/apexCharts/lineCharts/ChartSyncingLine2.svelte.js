import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
function generateDayWiseTimeSeriesline(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 864e5;
    i++;
  }
  return series;
}
const ChartSyncingLine2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartSyncingColors2 = getChartColorsArray();
  ({
    chart: {
      id: "tw",
      group: "social",
      type: "line",
      height: 160,
      toolbar: { show: false }
    },
    series: [
      {
        data: generateDayWiseTimeSeriesline(new Date("11 Feb 2017").getTime(), 20, { min: 10, max: 30 })
      }
    ],
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 3 },
    colors: chartSyncingColors2,
    markers: { size: 4, hover: { size: 6 } },
    tooltip: {
      followCursor: false,
      x: { show: false },
      marker: { show: false },
      y: {
        title: {
          formatter() {
            return "";
          }
        }
      }
    },
    grid: { clipMarkers: false },
    yaxis: { tickAmount: 2 },
    xaxis: { type: "datetime" }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"Syncingline2"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { ChartSyncingLine2 as default };
