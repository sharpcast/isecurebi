import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as Base } from "../../../../chunks/Base-0af8d950.js";
const Polar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Base, "Base").$$render($$result, Object.assign($$props, { type: "polarArea" }), {}, {})}`;
});
const PolarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var polarAreaChartColors = getChartColorsArray();
  const data = {
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    datasets: [
      {
        data: [11, 16, 7, 18],
        backgroundColor: polarAreaChartColors,
        label: "My dataset",
        hoverBorderColor: "#fff"
      }
    ]
  };
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Polar, "Polar").$$render($$result, {
    data,
    option: { responsive: true },
    class: "chartjs-chart"
  }, {}, {})}`;
});
export { PolarChart as default };
