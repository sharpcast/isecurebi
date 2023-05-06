import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const Advanced = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartTimelineAdvancedColors = getChartColorsArray();
  ({
    chart: {
      toolbar: { show: false },
      type: "rangeBar",
      height: 350
    },
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [new Date("2019-03-05").getTime(), new Date("2019-03-08").getTime()]
          },
          {
            x: "Code",
            y: [new Date("2019-03-02").getTime(), new Date("2019-03-05").getTime()]
          },
          {
            x: "Code",
            y: [new Date("2019-03-05").getTime(), new Date("2019-03-07").getTime()]
          },
          {
            x: "Test",
            y: [new Date("2019-03-03").getTime(), new Date("2019-03-09").getTime()]
          },
          {
            x: "Test",
            y: [new Date("2019-03-08").getTime(), new Date("2019-03-11").getTime()]
          },
          {
            x: "Validation",
            y: [new Date("2019-03-11").getTime(), new Date("2019-03-16").getTime()]
          },
          {
            x: "Design",
            y: [new Date("2019-03-01").getTime(), new Date("2019-03-03").getTime()]
          }
        ]
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [new Date("2019-03-02").getTime(), new Date("2019-03-05").getTime()]
          },
          {
            x: "Test",
            y: [new Date("2019-03-06").getTime(), new Date("2019-03-16").getTime()]
          },
          {
            x: "Code",
            y: [new Date("2019-03-03").getTime(), new Date("2019-03-07").getTime()]
          },
          {
            x: "Deployment",
            y: [new Date("2019-03-20").getTime(), new Date("2019-03-22").getTime()]
          },
          {
            x: "Design",
            y: [new Date("2019-03-10").getTime(), new Date("2019-03-16").getTime()]
          }
        ]
      },
      {
        name: "Dan",
        data: [
          {
            x: "Code",
            y: [new Date("2019-03-10").getTime(), new Date("2019-03-17").getTime()]
          },
          {
            x: "Validation",
            y: [new Date("2019-03-05").getTime(), new Date("2019-03-09").getTime()]
          }
        ]
      }
    ],
    plotOptions: {
      bar: { horizontal: true, barHeight: "80%" }
    },
    xaxis: { type: "datetime" },
    stroke: { width: 1 },
    fill: { type: "solid", opacity: 0.6 },
    legend: { position: "top", horizontalAlign: "left" },
    colors: chartTimelineAdvancedColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"advancedtimelinechart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { Advanced as default };
