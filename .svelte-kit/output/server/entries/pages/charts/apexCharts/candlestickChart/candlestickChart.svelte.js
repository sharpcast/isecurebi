import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import Basic from "./Basic.svelte.js";
import ComboCandlestick from "./ComboCandlestick.svelte.js";
import ComboCandlestick1 from "./ComboCandlestick1.svelte.js";
import Category from "./Category.svelte.js";
import CandlestickLine from "./CandlestickLine.svelte.js";
import "dayjs";
const CandlestickChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Apex Canlestick Charts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Candlestick Charts",
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
                      return `<h4 class="${"card-title mb-0"}">Basic Candlestick Chart</h4>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Basic, "Basic").$$render($$result, {
                        dataColors: ["--vz-success", "--vz-danger"]
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
                      return `<h4 class="${"card-title mb-0"}">Candlestick Synced with Brush Chart (Combo)
                        </h4>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div id="${"combo_candlestick"}">${validate_component(ComboCandlestick, "ComboCandlestick").$$render($$result, { dataColors: ["--vz-info", "--vz-danger"] }, {}, {})}</div>
                            <div id="${"combo_candlestick_chart"}">${validate_component(ComboCandlestick1, "ComboCandlestick1").$$render($$result, {
                        dataColors: ["--vz-warning", "--vz-danger"]
                      }, {}, {})}</div></div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Category X-Axis</h4>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Category, "Category").$$render($$result, {
                        dataColors: ["--vz-success", "--vz-danger"]
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
                      return `<h4 class="${"card-title mb-0"}">Candlestick with line</h4>`;
                    }
                  })}

                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CandlestickLine, "CandlestickLine").$$render($$result, {
                        dataColors: [
                          "--vz-success",
                          "--vz-danger",
                          "--vz-info",
                          "--vz-warning"
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
export { CandlestickChart as default };
