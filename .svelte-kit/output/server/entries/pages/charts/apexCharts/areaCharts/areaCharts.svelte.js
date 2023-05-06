import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import BasicAreaCharts from "./BasicAreaCharts.svelte.js";
import SplineAreaChart from "./SplineAreaChart.svelte.js";
import AxisChart from "./AxisChart.svelte.js";
import NegativeAreaChart from "./NegativeAreaChart.svelte.js";
import GithubStyleCharts from "./GithubStyleCharts.svelte.js";
import GithubStyleCharts1 from "./GithubStyleCharts1.svelte.js";
import StackedAreaChart from "./StackedAreaChart.svelte.js";
import IrregularAreaCharts from "./IrregularAreaCharts.svelte.js";
import AreaNullValueChart from "./AreaNullValueChart.svelte.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../endpoints/charts/apexCharts/series.js";
import "dayjs";
const AreaCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Apex Area Charts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Area Charts",
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
                      return `<h4 class="${"card-title mb-0"}">Basic Area Chart</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(BasicAreaCharts, "BasicAreaCharts").$$render($$result, { dataColors: ["--vz-success"] }, {}, {})}`;
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
                      return `<h4 class="${"card-title mb-0"}">Spline Area Chart</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(SplineAreaChart, "SplineAreaChart").$$render($$result, {
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Area Chart - Datetime X - Axis Chart
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div class="${"toolbar d-flex align-items-start justify-content-center flex-wrap gap-2"}"><button type="${"button"}" class="${"btn btn-soft-primary timeline-btn btn-sm"}" id="${"one_month"}">1M
								</button>
								<button type="${"button"}" class="${"btn btn-soft-primary timeline-btn btn-sm"}" id="${"six_months"}">6M
								</button>
								<button type="${"button"}" class="${"btn btn-soft-primary timeline-btn btn-sm active"}" id="${"one_year"}">1Y
								</button>
								<button type="${"button"}" class="${"btn btn-soft-primary timeline-btn btn-sm"}" id="${"all"}">ALL
								</button></div>
							${validate_component(AxisChart, "AxisChart").$$render($$result, { dataColors: ["--vz-info"] }, {}, {})}</div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Area with Negative Values Chart
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NegativeAreaChart, "NegativeAreaChart").$$render($$result, {
                        dataColors: ["--vz-success", "--vz-info"]
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Area Chart - Github Style
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div class="${"bg-light"}">${validate_component(GithubStyleCharts, "GithubStyleCharts").$$render($$result, { dataColors: ["--vz-danger"] }, {}, {})}</div>

							<div class="${"github-style d-flex align-items-center my-2"}"><div class="${"flex-shrink-0 me-2"}"><img class="${"avatar-sm rounded"}"${add_attribute("src", avatar2, 0)} data-hovercard-user-id="${"634573"}" alt="${""}"></div>
								<div class="${"flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "font-size-14 text-dark fw-medium"
                      }, {}, {
                        default: () => {
                          return `coder`;
                        }
                      })}
									<div class="${"cmeta text-muted font-size-11"}"><span class="${"commits text-dark fw-medium"}"></span> commits
									</div></div></div>

							<div class="${"bg-light"}">${validate_component(GithubStyleCharts1, "GithubStyleCharts1").$$render($$result, { dataColors: ["--vz-success"] }, {}, {})}</div></div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Stacked Area Chart</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(StackedAreaChart, "StackedAreaChart").$$render($$result, {
                        dataColors: ["--vz-success", "--vz-info", "--vz-light"]
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Irregular Timeseries Chart
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(IrregularAreaCharts, "IrregularAreaCharts").$$render($$result, {
                        dataColors: ["--vz-primary", "--vz-warning", "--vz-success"]
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
                      return `<h4 class="${"card-title mb-0"}">Area Chart With Null Values Chart
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(AreaNullValueChart, "AreaNullValueChart").$$render($$result, { dataColors: ["--vz-success"] }, {}, {})}`;
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
export { AreaCharts as default };
