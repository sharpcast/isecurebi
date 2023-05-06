import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const Scatter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartBoxBasicColors = getChartColorsArray();
  ({
    chart: {
      toolbar: { show: false },
      type: "boxPlot",
      height: 350
    },
    series: [
      {
        name: "Box",
        type: "boxPlot",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: [54, 66, 69, 75, 88]
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: [43, 65, 69, 76, 81]
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: [31, 39, 45, 51, 59]
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: [39, 46, 55, 65, 71]
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: [29, 31, 35, 39, 44]
          }
        ]
      },
      {
        name: "Outliers",
        type: "scatter",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: 32
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: 25
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: 64
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 27
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 78
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: 15
          }
        ]
      }
    ],
    colors: chartBoxBasicColors,
    title: {
      text: "BoxPlot - Scatter Chart",
      align: "left",
      style: { fontWeight: 500 }
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        formatter(val) {
          return new Date(val).getFullYear();
        }
      }
    },
    plotOptions: {
      boxPlot: {
        colors: { upper: "#f06548", lower: "#405189" }
      }
    },
    tooltip: { shared: false, intersect: true }
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"scatterchart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { Scatter as default };
