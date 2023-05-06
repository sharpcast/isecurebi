import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
import dayjs from "dayjs";
const MultiSeries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  function convertTime(todaydate) {
    const datwe = dayjs(todaydate);
    return datwe;
  }
  var chartTimelineMultiSeriesColors = getChartColorsArray();
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
            y: [new Date("2019-03-08").getTime(), new Date("2019-03-11").getTime()]
          },
          {
            x: "Test",
            y: [new Date("2019-03-11").getTime(), new Date("2019-03-16").getTime()]
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
            x: "Code",
            y: [new Date("2019-03-06").getTime(), new Date("2019-03-09").getTime()]
          },
          {
            x: "Test",
            y: [new Date("2019-03-10").getTime(), new Date("2019-03-19").getTime()]
          }
        ]
      }
    ],
    plotOptions: { bar: { horizontal: true } },
    dataLabels: {
      enabled: true,
      formatter(val) {
        var a = convertTime(val[0]);
        var b = convertTime(val[1]);
        var diff = b.diff(a, "days");
        return diff + (diff > 1 ? " days" : " day");
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: void 0,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    xaxis: { type: "datetime" },
    legend: { position: "top" },
    colors: chartTimelineMultiSeriesColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"multiserieschart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { MultiSeries as default };
