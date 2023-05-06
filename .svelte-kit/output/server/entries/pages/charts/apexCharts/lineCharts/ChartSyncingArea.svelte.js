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
const ChartSyncingArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var ChartSyncingAreaColors = getChartColorsArray();
  ({
    chart: {
      id: "yt",
      group: "social",
      type: "area",
      height: 160,
      toolbar: { show: false }
    },
    series: [
      {
        data: generateDayWiseTimeSeriesline(new Date("11 Feb 2017").getTime(), 20, { min: 10, max: 60 })
      }
    ],
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 3 },
    toolbar: { tools: { selection: false } },
    colors: ChartSyncingAreaColors,
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
  return `<div id="${"SyncingArea"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { ChartSyncingArea as default };
