import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as ListGroup, a as ListGroupItem } from "../../../chunks/ListGroupItem-5b1f2dad.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import SessionsByCountries from "./sessionsByCountries.svelte.js";
import AudiencesMetrics from "./audiencesMetrics.svelte.js";
import MyPortfolio from "./myPortfolio.svelte.js";
import TopReferralsPages from "./topReferralsPages.svelte.js";
import { M as Map } from "../../../chunks/Map-45314136.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Chart_MapWidgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { widgetsAudiences, widgetsPortfolio } = $$props;
  if ($$props.widgetsAudiences === void 0 && $$bindings.widgetsAudiences && widgetsAudiences !== void 0)
    $$bindings.widgetsAudiences(widgetsAudiences);
  if ($$props.widgetsPortfolio === void 0 && $$bindings.widgetsPortfolio && widgetsPortfolio !== void 0)
    $$bindings.widgetsPortfolio(widgetsPortfolio);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
        default: () => {
          return `<h5 class="${"text-decoration-underline mb-3 mt-2 pb-3"}">Chart &amp; Map Widgets</h5>`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Live Users By Country</h4>
                <div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "primary",
                    size: "sm",
                    class: "btn-soft-primary"
                  }, {}, {
                    default: () => {
                      return `Export Report
                    `;
                    }
                  })}</div>`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"text-center"}" style="${"height: 252px"}">${validate_component(Map, "Map").$$render($$result, { latitude: -34.397, longitude: 150.644 }, {}, {})}</div>

                <div class="${"table-responsive table-card mt-3"}"><table class="${"table table-borderless table-sm table-centered align-middle table-nowrap mb-1"}"><thead class="${"text-muted border-dashed border border-start-0 border-end-0 bg-soft-light"}"><tr><th>Duration (Secs)</th>
                                <th style="${"width:30%"}">Sessions</th>
                                <th style="${"width:30%"}">Views</th></tr></thead>
                        <tbody class="${"border-0"}"><tr><td>0-30</td>
                                <td>2,250</td>
                                <td>4,250</td></tr>
                            <tr><td>31-60</td>
                                <td>1,501</td>
                                <td>2,050</td></tr>
                            <tr><td>61-120</td>
                                <td>750</td>
                                <td>1,600</td></tr>
                            <tr><td>121-240</td>
                                <td>540</td>
                                <td>1,040</td></tr></tbody></table></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Sessions by Countries</h4>
                <div>${validate_component(Button, "Button").$$render($$result, {
                    color: "secondary",
                    size: "sm",
                    class: "btn-soft-secondary me-1"
                  }, {}, {
                    default: () => {
                      return `ALL
                    `;
                    }
                  })}
                    ${validate_component(Button, "Button").$$render($$result, {
                    color: "primary",
                    size: "sm",
                    class: "btn-soft-primary me-1"
                  }, {}, {
                    default: () => {
                      return `1M
                    `;
                    }
                  })}
                    ${validate_component(Button, "Button").$$render($$result, {
                    color: "secondary",
                    size: "sm",
                    class: "btn-soft-secondary"
                  }, {}, {
                    default: () => {
                      return `6M
                    `;
                    }
                  })}</div>`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `<div><div id="${"countries_charts"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(SessionsByCountries, "SessionsByCountriesCharts").$$render($$result, {
                    dataColors: [
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-danger",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info"
                    ]
                  }, {}, {})}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
                class: "border-0 align-items-center d-flex"
              }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Audiences Metrics</h4>
                <div>${validate_component(Button, "Button").$$render($$result, {
                    color: "secondary",
                    size: "sm",
                    class: "btn-soft-secondary me-1"
                  }, {}, {
                    default: () => {
                      return `ALL
                    `;
                    }
                  })}
                    ${validate_component(Button, "Button").$$render($$result, {
                    color: "secondary",
                    size: "sm",
                    class: "btn-soft-secondary me-1"
                  }, {}, {
                    default: () => {
                      return `1M
                    `;
                    }
                  })}
                    ${validate_component(Button, "Button").$$render($$result, {
                    color: "secondary",
                    size: "sm",
                    class: "btn-soft-secondary me-1"
                  }, {}, {
                    default: () => {
                      return `6M
                    `;
                    }
                  })}
                    ${validate_component(Button, "Button").$$render($$result, {
                    color: "primary",
                    size: "sm",
                    class: "btn-soft-primary"
                  }, {}, {
                    default: () => {
                      return `1Y
                    `;
                    }
                  })}</div>`;
                }
              })}

            ${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Alert, "Alert").$$render($$result, {
                    color: "warning",
                    class: "alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center",
                    role: "alert"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-error-warning-line label-icon"}"></i>
                    <div class="${"flex-grow-1 text-truncate"}">Your free trial expired in <b>17</b> days.
                    </div>
                    <div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/pricing/pages-pricing",
                        class: "text-reset text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `<b>Upgrade</b>`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}
            ${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "p-0 border-0 bg-soft-light" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-0 text-center" }, {}, {
                    default: () => {
                      return `${each(widgetsAudiences, (item) => {
                        return `<div class="${"col-6 col-sm-4"}"><div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}">${each(item.subCounter, (item2) => {
                          return `${escape(item2.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item2.counter, 0)}>0</span>${escape(item2.suffix)}`;
                        })}
                                ${item.percentage ? `<span class="${"text-success ms-1 fs-13"}">${escape(item.percentage)}<i class="${"ri-arrow-right-up-line ms-1 align-middle"}"></i></span>` : ``}</h5>
                            <p class="${"text-muted mb-0"}">${escape(item.caption)}</p></div>
                    </div>`;
                      })}`;
                    }
                  })}`;
                }
              })}

            ${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0 pb-2" }, {}, {
                default: () => {
                  return `<div><div id="${"audiences_metrics_charts"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(AudiencesMetrics, "AudiencesMetricsCharts").$$render($$result, {
                    dataColors: ["--vz-success", "--vz-gray-300"]
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
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Sales by Locations</h4>
                <div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "primary",
                    size: "sm",
                    class: "btn-soft-primary"
                  }, {}, {
                    default: () => {
                      return `Export Report
                    `;
                    }
                  })}</div>`;
                }
              })}

            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div id="${"sales-by-locations"}" style="${"height: 269px"}">${validate_component(Map, "Map").$$render($$result, { latitude: -34.397, longitude: 150.644 }, {}, {})}</div>
                <div class="${"px-2 py-2 mt-1"}"><p class="${"mb-1"}">New Maxico <span class="${"float-end"}">75%</span></p>
                    ${validate_component(Progress, "Progress").$$render($$result, {
                    color: "primary",
                    value: 75,
                    striped: true,
                    class: "mt-2",
                    style: "height: 6px"
                  }, {}, {})}

                    <p class="${"mt-3 mb-1"}">California <span class="${"float-end"}">47%</span></p>
                    ${validate_component(Progress, "Progress").$$render($$result, {
                    color: "primary",
                    value: 47,
                    striped: true,
                    class: "mt-2",
                    style: "height: 6px"
                  }, {}, {})}

                    <p class="${"mt-3 mb-1"}">Texas <span class="${"float-end"}">82%</span></p>
                    ${validate_component(Progress, "Progress").$$render($$result, {
                    color: "primary",
                    value: 82,
                    striped: true,
                    class: "mt-2",
                    style: "height: 6px"
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
                class: "border-bottom-dashed align-items-center d-flex"
              }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">My Portfolio</h4>
                <div>${validate_component(Dropdown, "Dropdown").$$render($$result, {
                    class: "card-header-dropdown",
                    direction: "left"
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "button",
                        class: "btn btn-soft-primary btn-sm"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-uppercase"}">Btc<i class="${"mdi mdi-chevron-down align-middle ms-1"}"></i></span>`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `BTC`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `USD`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Euro`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}

            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div id="${"portfolio_donut_charts"}" dir="${"ltr"}">${validate_component(MyPortfolio, "MyPortfolioCharts").$$render($$result, {
                    dataColors: [
                      "--vz-primary",
                      "--vz-info",
                      "--vz-warning",
                      "--vz-success"
                    ]
                  }, {}, {})}</div>

                ${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "border-dashed mb-0", flush: true }, {}, {
                    default: () => {
                      return `${each(widgetsPortfolio, (item) => {
                        return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "px-0" }, {}, {
                          default: () => {
                            return `<div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><span class="${"avatar-title bg-light p-1 rounded-circle"}"><img${add_attribute("src", item.img, 0)} class="${"img-fluid"}" alt="${""}">
                                </span></div>
                            <div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">${escape(item.label)}</h6>
                                <p class="${"fs-13 mb-0 text-muted"}"><i${add_attribute("class", "mdi mdi-circle fs-10 align-middle me-1 text-" + item.coinNameClass, 0)}></i>${escape(item.coinName)}</p></div>
                            <div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1"}">${escape(item.coinName)} ${escape(item.coinVolume)}</h6>
                                <p${add_attribute("class", "fs-12 mb-0 text-" + item.priceClass, 0)}>${escape(item.price)}</p>
                            </div></div>
                    `;
                          }
                        })}`;
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Top Referrals Pages</h4>
                <div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "primary",
                    size: "sm",
                    class: "btn-soft-primary"
                  }, {}, {
                    default: () => {
                      return `Export Report
                    `;
                    }
                  })}</div>`;
                }
              })}

            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div id="${"color_heatmap"}" class="${"apex-charts mt-n3"}" dir="${"ltr"}">${validate_component(TopReferralsPages, "TopReferralsPagesCharts").$$render($$result, {
                    dataColors: [
                      "--vz-info",
                      "--vz-success",
                      "--vz-primary",
                      "--vz-warning",
                      "--vz-secondary"
                    ]
                  }, {}, {})}</div>

                ${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-15 mb-0"}"><i class="${"mdi mdi-circle align-middle text-primary me-2"}"></i>www.google.com</p></div>
                            <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">24.58%</p></div></div>
                        <div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-15 mb-0"}"><i class="${"mdi mdi-circle align-middle text-warning me-2"}"></i>www.medium.com</p></div>
                            <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">12.22%</p></div></div>
                        <div class="${"d-flex"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-15 mb-0"}"><i class="${"mdi mdi-circle align-middle text-secondary me-2"}"></i>Other</p></div>
                            <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">17.58%</p></div></div>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-info me-2"}"></i>www.youtube.com</p></div>
                            <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">17.51%</p></div></div>
                        <div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><p class="${"text-truncate text-muted fs-14 mb-0"}"><i class="${"mdi mdi-circle align-middle text-success me-2"}"></i>www.meta.com</p></div>
                            <div class="${"flex-shrink-0"}"><p class="${"mb-0"}">23.05%</p></div></div>`;
                        }
                      })}`;
                    }
                  })}

                <div class="${"mt-2 text-center"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "text-muted text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Show All`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Chart_MapWidgets as default };
