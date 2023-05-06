import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { B as Base } from "../../../../chunks/Base-0af8d950.js";
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Base, "Base").$$render($$result, Object.assign($$props, { type: "line" }), {}, {})}`;
});
const LineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var lineChartColor = getChartColorsArray();
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October"
    ],
    datasets: [
      {
        label: "Sales Analytics",
        fill: true,
        lineTension: 0.5,
        backgroundColor: lineChartColor[0],
        borderColor: lineChartColor[1],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: lineChartColor[1],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: lineChartColor[1],
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
      },
      {
        label: "Monthly Earnings",
        fill: true,
        lineTension: 0.5,
        backgroundColor: lineChartColor[2],
        borderColor: lineChartColor[3],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: lineChartColor[3],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: lineChartColor[3],
        pointHoverBorderColor: "#eef0f2",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
      }
    ]
  };
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Line, "Line").$$render($$result, {
    class: "chartjs-chart",
    data,
    option: { responsive: true }
  }, {}, {})}`;
});
export { LineChart as default };
