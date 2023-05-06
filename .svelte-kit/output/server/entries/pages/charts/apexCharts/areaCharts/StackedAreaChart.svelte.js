import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const StackedAreaChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var BasicAreaChartsColors = getChartColorsArray();
  var generateDayWiseTimeSeries = function(baseval, count, yrange) {
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
  };
  ({
    chart: {
      type: "area",
      height: 350,
      stacked: true,
      toolbar: { show: false },
      events: {
        selection(chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    series: [
      {
        name: "South",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "North",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 20 })
      },
      {
        name: "Central",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 15 })
      }
    ],
    colors: BasicAreaChartsColors,
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    fill: {
      type: "gradient",
      gradient: { opacityFrom: 0.6, opacityTo: 0.8 }
    },
    legend: { position: "top", horizontalAlign: "left" },
    xaxis: { type: "datetime" }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"stackedareachart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { StackedAreaChart as default };
