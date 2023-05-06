import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardTitle } from "../../../../chunks/CardTitle-33d99fc1.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
const MaterialDesign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Material Design | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Material Design",
        pageTitle: "Icons"
      }, {}, {})}
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `New Icons`;
                        }
                      })}
              <p class="${"card-title-desc mb-2"}">Use${escape(" ")}
                <code>&lt;i class=&quot;mdi mdi-*-*&quot;&gt;&lt;/i&gt;</code>
                <span class="${"badge bg-success"}">v 6.5.95</span>.
              </p>

              ${validate_component(Row, "Row").$$render($$result, {
                        class: "icon-demo-content",
                        id: "newIcons"
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}

          ${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `All Icons`;
                        }
                      })}
              ${validate_component(Row, "Row").$$render($$result, {
                        class: "icon-demo-content",
                        id: "allicon"
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
          return `${validate_component(Col, "Col").$$render($$result, { xs: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `Size`;
                        }
                      })}

              ${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-18px mdi-account"}"></i> mdi-18px
                `;
                            }
                          })}

                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-24px mdi-account"}"></i> mdi-24px
                `;
                            }
                          })}

                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-36px mdi-account"}"></i> mdi-36px
                `;
                            }
                          })}

                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-48px mdi-account"}"></i> mdi-48px
                `;
                            }
                          })}`;
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

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `Rotate`;
                        }
                      })}

              ${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-45 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-45
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-90 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-90
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-135 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-135
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-180 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-180
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-225 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-225
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-270 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-270
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-rotate-315 mdi-account"}"></i>${escape(" ")}
                  mdi-rotate-315
                `;
                            }
                          })}`;
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

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `Spin`;
                        }
                      })}

              ${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-spin mdi-loading"}"></i> mdi-spin
                `;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "3", lg: "4", sm: "6" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-spin mdi-star"}"></i> mdi-spin
                `;
                            }
                          })}`;
                        }
                      })}`;
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
export { MaterialDesign as default };
