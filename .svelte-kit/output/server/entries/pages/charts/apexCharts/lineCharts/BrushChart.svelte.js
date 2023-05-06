import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const BrushChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
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
  generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 185, { min: 30, max: 90 });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"brushchart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { BrushChart as default };
