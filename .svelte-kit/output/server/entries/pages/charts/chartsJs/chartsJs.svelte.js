import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import LineChart from "./LineChart.svelte.js";
import BarChart from "./BarChart.svelte.js";
import PieChart from "./PieChart.svelte.js";
import DonutChart from "./DonutChart.svelte.js";
import PolarChart from "./PolarChart.svelte.js";
import RadarChart from "./RadarChart.svelte.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import "../../../../chunks/Base-0af8d950.js";
const ChartsJs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>ChartJs | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Charts Js", pageTitle: "Charts" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Line Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(LineChart, "LineChart").$$render($$result, {
                        dataColors: [
                          "--vz-primary-rgb, 0.2",
                          "--vz-primary",
                          "--vz-success-rgb, 0.2",
                          "--vz-success"
                        ]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Bar Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(BarChart, "BarChart").$$render($$result, {
                        dataColors: ["--vz-primary-rgb, 0.8", "--vz-primary-rgb, 0.9"]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pie Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PieChart, "PieChart").$$render($$result, {
                        dataColors: ["--vz-success", "--vz-light"]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Donut Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DonutChart, "DonutChart").$$render($$result, {
                        dataColors: ["--vz-primary", "--vz-light"]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Polar Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PolarChart, "PolarChart").$$render($$result, {
                        dataColors: [
                          "--vz-danger",
                          "--vz-success",
                          "--vz-warning",
                          "--vz-primary"
                        ]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Radar Chart</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(RadarChart, "RadarChart").$$render($$result, {
                        dataColors: [
                          "--vz-success-rgb, 0.2",
                          "--vz-success",
                          "--vz-primary-rgb, 0.2",
                          "--vz-primary"
                        ]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { ChartsJs as default };
