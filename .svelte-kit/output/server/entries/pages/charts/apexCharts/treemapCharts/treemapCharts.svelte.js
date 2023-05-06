import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import BasicTreemap from "./BasicTreemap.svelte.js";
import MultiTreemap from "./MultiTreemap.svelte.js";
import DiffColorTreemap from "./DiffColorTreemap.svelte.js";
import ColorRangeTreemap from "./ColorRangeTreemap.svelte.js";
const TreemapCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Apex Treemap Charts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Treemap Charts",
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
                      return `<h4 class="${"card-title mb-0"}">Basic Treemap Charts</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(BasicTreemap, "BasicTreemap").$$render($$result, { dataColors: ["--vz-success"] }, {}, {})}`;
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
                      return `<h4 class="${"card-title mb-0"}">Multi-Dimensional Treemap Chart
						</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(MultiTreemap, "MultiTreemap").$$render($$result, {
                        dataColors: ["--vz-primary", "--vz-success"]
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
                      return `<h4 class="${"card-title mb-0"}">Distributed Treemap Chart (Different Color for each
							Cell)
						</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DiffColorTreemap, "DiffColorTreemap").$$render($$result, {
                        dataColors: [
                          "--vz-primary",
                          "--vz-secondary",
                          "--vz-success",
                          "--vz-info",
                          "--vz-warning",
                          "--vz-danger"
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
                      return `<h4 class="${"card-title mb-0"}">Treemap Chart with Color Ranges
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(ColorRangeTreemap, "ColorRangeTreemap").$$render($$result, { dataColors: ["--vz-info", "--vz-danger"] }, {}, {})}`;
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
export { TreemapCharts as default };
