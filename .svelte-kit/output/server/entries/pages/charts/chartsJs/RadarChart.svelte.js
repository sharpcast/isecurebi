import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as Base } from "../../../../chunks/Base-0af8d950.js";
const Radar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Base, "Base").$$render($$result, Object.assign($$props, { type: "radar" }), {}, {})}`;
});
const RadarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var radarChartColors = getChartColorsArray();
  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        label: "Desktops",
        backgroundColor: radarChartColors[0],
        borderColor: radarChartColors[1],
        pointBackgroundColor: radarChartColors[1],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[1],
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "Tablets",
        backgroundColor: radarChartColors[2],
        borderColor: radarChartColors[3],
        pointBackgroundColor: radarChartColors[3],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[3],
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Radar, "Radar").$$render($$result, {
    data,
    option: { responsive: true },
    class: "chartjs-chart"
  }, {}, {})}`;
});
export { RadarChart as default };
