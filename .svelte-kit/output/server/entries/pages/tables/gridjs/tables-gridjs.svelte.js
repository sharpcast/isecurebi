import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { html } from "gridjs";
var tablesGridjs_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';",
  map: null
};
const Tables_gridjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    [
      "01",
      "Jonathan",
      "jonathan@example.com",
      "Senior Implementation Architect",
      "Hauck Inc",
      "Holy See"
    ],
    [
      "02",
      "Harold",
      "harold@example.com",
      "Forward Creative Coordinator",
      "Metz Inc",
      "Iran"
    ],
    [
      "03",
      "Shannon",
      "shannon@example.com",
      "Legacy Functionality Associate",
      "Zemlak Group",
      "South Georgia"
    ],
    [
      "04",
      "Robert",
      "robert@example.com",
      "Product Accounts Technician",
      "Hoeger",
      "San Marino"
    ],
    [
      "05",
      "Noel",
      "noel@example.com",
      "Customer Data Director",
      "Howell - Rippin",
      "Germany"
    ],
    [
      "06",
      "Traci",
      "traci@example.com",
      "Corporate Identity Director",
      "Koelpin - Goldner",
      "Vanuatu"
    ],
    [
      "07",
      "Kerry",
      "kerry@example.com",
      "Lead Applications Associate",
      "Feeney, Langworth and Tremblay",
      "Niger"
    ],
    [
      "08",
      "Patsy",
      "patsy@example.com",
      "Dynamic Assurance Director",
      "Streich Group",
      "Niue"
    ],
    [
      "09",
      "Cathy",
      "cathy@example.com",
      "Customer Data Director",
      "Ebert, Schamberger and Johnston",
      "Mexico"
    ],
    [
      "10",
      "Tyrone",
      "tyrone@example.com",
      "Senior Response Liaison",
      "Raynor, Rolfson and Daugherty",
      "Qatar"
    ]
  ];
  const data1 = [
    ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid"],
    ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
    ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
    ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
    ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
    ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
    ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
    ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
    ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
    ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"]
  ];
  const data2 = [
    [
      "Jonathan",
      "jonathan@example.com",
      "Senior Implementation Architect",
      "Hauck Inc",
      "Holy See"
    ],
    [
      "Harold",
      "harold@example.com",
      "Forward Creative Coordinator",
      "Metz Inc",
      "Iran"
    ],
    [
      "Shannon",
      "shannon@example.com",
      "Legacy Functionality Associate",
      "Zemlak Group",
      "South Georgia"
    ],
    [
      "Robert",
      "robert@example.com",
      "Product Accounts Technician",
      "Hoeger",
      "San Marino"
    ],
    [
      "Noel",
      "noel@example.com",
      "Customer Data Director",
      "Howell - Rippin",
      "Germany"
    ],
    [
      "Traci",
      "traci@example.com",
      "Corporate Identity Director",
      "Koelpin - Goldner",
      "Vanuatu"
    ],
    [
      "Kerry",
      "kerry@example.com",
      "Lead Applications Associate",
      "Feeney, Langworth and Tremblay",
      "Niger"
    ],
    [
      "Patsy",
      "patsy@example.com",
      "Dynamic Assurance Director",
      "Streich Group",
      "Niue"
    ],
    [
      "Cathy",
      "cathy@example.com",
      "Customer Data Director",
      "Ebert, Schamberger and Johnston",
      "Mexico"
    ],
    [
      "Tyrone",
      "tyrone@example.com",
      "Senior Response Liaison",
      "Raynor, Rolfson and Daugherty",
      "Qatar"
    ]
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Grid js | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "GRID JS", pageTitle: "Tables" }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0 flex-grow-1"}">Base Example</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-gridjs"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns: [
                          "ID",
                          "Name",
                          {
                            name: "Email",
                            width: "180px",
                            formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
                          },
                          { name: "Position", width: "228px" },
                          "Company",
                          "Country",
                          {
                            name: "Actions",
                            width: "120px",
                            formatter: (cell) => html(`<a href="javascript://" class="text-reset text-decoration-underline"> Details </a>`)
                          }
                        ],
                        search: true,
                        sort: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Card Table</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-card"}" class="${"table-card"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data: data2,
                        columns: [
                          "Name",
                          { name: "Email", width: "200px" },
                          "Position",
                          "Company",
                          { name: "Country", width: "160px" }
                        ],
                        sort: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pagination</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-pagination"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data: data1,
                        columns: [
                          {
                            name: "ID",
                            width: "120px",
                            formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
                          },
                          "Name",
                          "Date",
                          "Total",
                          "Status",
                          {
                            name: "Actions",
                            width: "100px",
                            formatter: (cell) => html(`<button type='button' class='btn btn-sm btn-light'> Details </button>`)
                          }
                        ],
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Search</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-search"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data: data2,
                        columns: [
                          "Name",
                          { name: "Email", width: "200px" },
                          "Position",
                          "Company",
                          { name: "Country", width: "160px" }
                        ],
                        search: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Sorting</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-sorting"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data: data2,
                        columns: ["Name", "Email", "Position", "Company", "Country"],
                        sort: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Loading State</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-loading-state"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data() {
                          return new Promise(function(resolve) {
                            setTimeout(function() {
                              resolve(data2);
                            }, 2e3);
                          });
                        },
                        columns: ["Name", "Email", "Position", "Company", "Country"],
                        sort: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Fixed Header</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-fixed-header"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data: data2,
                        columns: ["Name", "Email", "Position", "Company", "Country"],
                        sort: true,
                        pagination: { enabled: true, limit: 10 },
                        fixedHeader: true,
                        height: "400px"
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Hidden Columns</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div id="${"table-hidden-column"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns: [
                          { name: "ID", hidden: true },
                          "Name",
                          "Email",
                          "Position",
                          "Company",
                          { name: "Country", hidden: true }
                        ],
                        sort: true,
                        pagination: { enabled: true, limit: 5 }
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
export { Tables_gridjs as default };
