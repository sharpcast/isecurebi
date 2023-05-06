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
const MultipleHeatmap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartHeatMapMultipleColors = getChartColorsArray();
  generateData();
  ({
    chart: {
      height: 450,
      type: "heatmap",
      toolbar: { show: false }
    },
    series: [
      {
        name: "W1",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W2",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W3",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W4",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W5",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W6",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W7",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W8",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W9",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W10",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W11",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W12",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W13",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W14",
        data: generateData(8, { min: 0, max: 90 })
      },
      {
        name: "W15",
        data: generateData(8, { min: 0, max: 90 })
      }
    ],
    dataLabels: { enabled: false },
    colors: chartHeatMapMultipleColors,
    xaxis: {
      type: "category",
      categories: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"]
    },
    title: {
      text: "HeatMap Chart (Different color shades for each series)",
      style: { fontWeight: 500 }
    },
    grid: { padding: { right: 20 } }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"multipleheatmapchart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { MultipleHeatmap as default };
