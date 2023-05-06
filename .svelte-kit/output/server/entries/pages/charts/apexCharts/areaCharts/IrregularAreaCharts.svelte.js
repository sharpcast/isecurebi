import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
import MOCK_DATA from "../../../../endpoints/charts/apexCharts/series.js";
import dayjs from "dayjs";
const IrregularAreaCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var BasicAreaChartsColors = getChartColorsArray();
  var ts1 = 13885344e5;
  var ts2 = 13886208e5;
  var ts3 = 13890528e5;
  var dataSet = [[], [], []];
  var i = 0;
  var j = 0;
  var k = 0;
  var innerArr = [];
  var innerArr1 = [];
  var innerArr3 = [];
  for (i = 0; i < 12; i++) {
    ts1 = ts1 + 864e5;
    innerArr = [ts1, MOCK_DATA.dataSeries[2][i].value];
    dataSet[0].push(innerArr);
  }
  for (j = 0; j < 18; j++) {
    ts2 = ts2 + 864e5;
    innerArr1 = [ts2, MOCK_DATA.dataSeries[1][j].value];
    dataSet[1].push(innerArr1);
  }
  for (k = 0; k < 12; k++) {
    ts3 = ts3 + 864e5;
    innerArr3 = [ts3, MOCK_DATA.dataSeries[0][k].value];
    dataSet[2].push(innerArr3);
  }
  function convertTime(todaydate) {
    const datwe = dayjs(todaydate).format("DD MMM YYYY");
    return datwe;
  }
  ({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    series: [
      { name: "PRODUCT A", data: dataSet[0] },
      { name: "PRODUCT B", data: dataSet[1] },
      { name: "PRODUCT C", data: dataSet[2] }
    ],
    dataLabels: { enabled: false },
    markers: { size: 0 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
    },
    yaxis: {
      labels: {
        style: { colors: "#8e8da4" },
        offsetX: 0,
        formatter(val) {
          return (val / 1e6).toFixed(2);
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    xaxis: {
      type: "datetime",
      tickAmount: 8,
      min: new Date("01/01/2014").getTime(),
      max: new Date("01/20/2014").getTime(),
      labels: {
        rotate: -15,
        rotateAlways: true,
        formatter(val, timestamp) {
          return convertTime(timestamp);
        }
      }
    },
    title: {
      text: "Irregular Data in Time Series",
      align: "left",
      offsetX: 14,
      style: { fontWeight: 500 }
    },
    tooltip: { shared: true },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: -10
    },
    colors: BasicAreaChartsColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"irregularareacharts"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { IrregularAreaCharts as default };
