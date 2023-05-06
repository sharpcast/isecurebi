import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as Base } from "../../../../chunks/Base-0af8d950.js";
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Base, "Base").$$render($$result, Object.assign($$props, { type: "pie" }), {}, {})}`;
});
const PieChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var pieChartColors = getChartColorsArray();
  const data = {
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 180],
        backgroundColor: pieChartColors,
        hoverBackgroundColor: pieChartColors,
        hoverBorderColor: "#fff"
      }
    ]
  };
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Pie, "Pie").$$render($$result, {
    class: "chartjs-chart",
    data,
    option: {
      responsive: true,
      maintainAspectRatio: false
    }
  }, {}, {})}`;
});
export { PieChart as default };
