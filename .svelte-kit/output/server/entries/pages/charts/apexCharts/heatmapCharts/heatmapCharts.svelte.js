import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import BasicHeatmap from "./BasicHeatmap.svelte.js";
import MultipleHeatmap from "./MultipleHeatmap.svelte.js";
import ColorRange from "./ColorRange.svelte.js";
import RangeWithoutShades from "./RangeWithoutShades.svelte.js";
const HeatmapCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Apex heatmap Charts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Heatmap Charts",
        pageTitle: "Apexcharts"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Basic Heatmap Chart</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(BasicHeatmap, "BasicHeatmap").$$render($$result, { dataColors: ["--vz-success"] }, {}, {})}</div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Heatmap - Multiple Series
						</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(MultipleHeatmap, "MultipleHeatmap").$$render($$result, {
                        dataColors: [
                          "--vz-primary",
                          "--vz-secondary",
                          "--vz-success",
                          "--vz-info",
                          "--vz-warning",
                          "--vz-danger",
                          "--vz-dark",
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
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"card-header"}"><h4 class="${"card-title mb-0"}">Heatmap Color Range</h4></div>

					<div class="${"card-body"}">${validate_component(ColorRange, "ColorRange").$$render($$result, {
                    dataColors: [
                      "--vz-info",
                      "--vz-success",
                      "--vz-primary",
                      "--vz-warning"
                    ]
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"card-header"}"><h4 class="${"card-title mb-0"}">Heatmap - Range Without Shades
						</h4></div>

					<div class="${"card-body"}">${validate_component(RangeWithoutShades, "RangeWithoutShades").$$render($$result, {
                    dataColors: ["--vz-info", "--vz-primary"]
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { HeatmapCharts as default };
