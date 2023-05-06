import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const Datetime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartScatterDateTimeColors = getChartColorsArray();
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([baseval, y]);
      baseval += 864e5;
      i++;
    }
    return series;
  };
  ({
    chart: {
      height: 350,
      type: "scatter",
      zoom: { type: "xy" },
      toolbar: { show: false }
    },
    series: [
      {
        name: "TEAM 1",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "TEAM 2",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "TEAM 3",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 30, { min: 10, max: 60 })
      },
      {
        name: "TEAM 4",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, { min: 10, max: 60 })
      },
      {
        name: "TEAM 5",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 30, { min: 10, max: 60 })
      }
    ],
    dataLabels: { enabled: false },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } }
    },
    xaxis: { type: "datetime" },
    yaxis: { max: 70 },
    colors: chartScatterDateTimeColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"datetimescatterchart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { Datetime as default };
