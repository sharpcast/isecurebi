import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    i++;
  }
  return series;
}
const BasicHeatmap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartHeatMapBasicColors = getChartColorsArray();
  generateData();
  ({
    chart: {
      height: 450,
      type: "heatmap",
      toolbar: { show: false }
    },
    series: [
      {
        name: "Metric1",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric2",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric3",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric4",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric5",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric6",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric7",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric8",
        data: generateData(18, { min: 0, max: 90 })
      },
      {
        name: "Metric9",
        data: generateData(18, { min: 0, max: 90 })
      }
    ],
    dataLabels: { enabled: false },
    colors: chartHeatMapBasicColors,
    title: {
      text: "HeatMap Chart (Single color)",
      style: { fontWeight: 500 }
    }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"basicheatmapchart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { BasicHeatmap as default };
