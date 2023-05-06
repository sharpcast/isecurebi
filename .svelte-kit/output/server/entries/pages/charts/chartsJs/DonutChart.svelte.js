import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as Base } from "../../../../chunks/Base-0af8d950.js";
const Doughnut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Base, "Base").$$render($$result, Object.assign($$props, { type: "doughnut" }), {}, {})}`;
});
const DonutChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var doughnutChartColors = getChartColorsArray();
  const data = {
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 210],
        backgroundColor: doughnutChartColors,
        hoverBackgroundColor: doughnutChartColors,
        hoverBorderColor: "#fff"
      }
    ]
  };
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Doughnut, "Doughnut").$$render($$result, {
    data,
    option: { responsive: true },
    class: "chartjs-chart"
  }, {}, {})}`;
});
export { DonutChart as default };
