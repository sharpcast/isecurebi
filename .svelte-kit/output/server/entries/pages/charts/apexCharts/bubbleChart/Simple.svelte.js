import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const Simple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartBubbleSimpleColors = getChartColorsArray();
  const generateData = (baseval, count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      i++;
    }
    return series;
  };
  ({
    chart: {
      height: 350,
      type: "bubble",
      toolbar: { show: false }
    },
    series: [
      {
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Bubble2",
        data: generateData(new Date("12 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Bubble3",
        data: generateData(new Date("13 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Bubble4",
        data: generateData(new Date("14 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      }
    ],
    dataLabels: { enabled: false },
    fill: { opacity: 0.8 },
    title: {
      text: "Simple Bubble Chart",
      style: { fontWeight: 500 }
    },
    xaxis: { tickAmount: 12, type: "category" },
    yaxis: { max: 70 },
    colors: chartBubbleSimpleColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"simplebubblechart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { Simple as default };
