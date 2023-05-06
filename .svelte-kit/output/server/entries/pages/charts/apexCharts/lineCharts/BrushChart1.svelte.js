import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const BrushChart1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var BrushChart1Colors = getChartColorsArray();
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
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
  var data = generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 185, { min: 30, max: 90 });
  ({
    chart: {
      height: 130,
      type: "area",
      brush: { target: "chart2", enabled: true },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("19 Jun 2017").getTime(),
          max: new Date("14 Aug 2017").getTime()
        }
      }
    },
    series: [{ data }],
    colors: BrushChart1Colors,
    fill: {
      type: "gradient",
      gradient: { opacityFrom: 0.91, opacityTo: 0.1 }
    },
    xaxis: {
      type: "datetime",
      tooltip: { enabled: false }
    },
    yaxis: { tickAmount: 2 }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"brushchart1"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { BrushChart1 as default };
