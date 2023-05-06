import { c as create_ssr_component } from "../../../../../chunks/index-584434b3.js";
const MultipleSeries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  function getChartColorsArray(colors) {
  }
  var chartMultiSeriesColors = getChartColorsArray();
  ({
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: { show: false }
    },
    series: [
      {
        name: "George Washington",
        data: [
          {
            x: "President",
            y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()]
          }
        ]
      },
      {
        name: "John Adams",
        data: [
          {
            x: "President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
          },
          {
            x: "Vice President",
            y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
          }
        ]
      },
      {
        name: "Thomas Jefferson",
        data: [
          {
            x: "President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()]
          },
          {
            x: "Vice President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
          },
          {
            x: "Secretary of State",
            y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()]
          }
        ]
      },
      {
        name: "Aaron Burr",
        data: [
          {
            x: "Vice President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()]
          }
        ]
      },
      {
        name: "George Clinton",
        data: [
          {
            x: "Vice President",
            y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()]
          }
        ]
      },
      {
        name: "John Jay",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()]
          }
        ]
      },
      {
        name: "Edmund Randolph",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()]
          }
        ]
      },
      {
        name: "Timothy Pickering",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()]
          }
        ]
      },
      {
        name: "Charles Lee",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()]
          }
        ]
      },
      {
        name: "John Marshall",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()]
          }
        ]
      }
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "35%",
        rangeBarGroupRows: true
      }
    },
    fill: { type: "solid" },
    legend: { position: "right" },
    xaxis: { type: "datetime" },
    tooltip: {
      custom(opts) {
        const fromYear = new Date(opts.y1).getFullYear();
        const toYear = new Date(opts.y2).getFullYear();
        const values = opts.ctx.rangeBar.getTooltipValues(opts);
        return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + values.color + '">' + (values.seriesName ? values.seriesName : "") + '</span></div><div> <span class="category">' + values.ylabel + ' </span> <span class="value start-value">' + fromYear + '</span> <span class="separator">-</span> <span class="value end-value">' + toYear + "</span></div></div>";
      }
    },
    colors: chartMultiSeriesColors
  });
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `<div id="${"multipleserieschart"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
});
export { MultipleSeries as default };
