import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import Basic from "./Basic.svelte.js";
import Scatter from "./Scatter.svelte.js";
import Horizontal from "./Horizontal.svelte.js";
const BoxplotCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Apex Boxplot Charts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Boxplot Charts",
        pageTitle: "Apexcharts"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Basic Box Chart</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Basic, "Basic").$$render($$result, {
                        dataColors: ["--vz-primary", "--vz-info"]
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Boxplot with Scatter Chart
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Scatter, "Scatter").$$render($$result, {
                        dataColors: [
                          "--vz-danger",
                          "--vz-info",
                          "--vz-danger",
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
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Horizontal BoxPlot</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Horizontal, "Horizontal").$$render($$result, {
                        dataColors: ["--vz-light", "--vz-card-custom"]
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
export { BoxplotCharts as default };
