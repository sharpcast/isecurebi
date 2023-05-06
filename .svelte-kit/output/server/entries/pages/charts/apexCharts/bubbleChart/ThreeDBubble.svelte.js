import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const ThreeDBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartBubbleColors = getChartColorsArray();
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
      toolbar: { show: false },
      type: "bubble",
      height: 350
    },
    series: [
      {
        name: "Product1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Product2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Product3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "Product4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      }
    ],
    dataLabels: { enabled: false },
    fill: { type: "gradient" },
    title: {
      text: "3D Bubble Chart",
      style: { fontWeight: 500 }
    },
    xaxis: {
      tickAmount: 12,
      type: "datetime",
      labels: { rotate: 0 }
    },
    yaxis: { max: 70 },
    theme: { palette: "palette2" },
    colors: chartBubbleColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"threedbubblechart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { ThreeDBubble as default };
