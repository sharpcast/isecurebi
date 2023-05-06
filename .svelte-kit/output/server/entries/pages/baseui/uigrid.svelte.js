import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
const Uigrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const verticalStartCode = `
<!-- Vertical alignment (align-items-start) -->
<Row class="align-items-start">
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;
  const verticalCenterCode = `
<!-- Vertical alignment (align-items-center) -->
<Row class="align-items-center">
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;
  const verticalEndCode = `
<!-- Vertical alignment (align-items-end) -->
<Row class="align-items-end">
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;
  const alignSelfCode = `
<!-- Align Self -->
<Row>
    <Col sm={4} class="align-self-start">
        ...
    </Col>
    <Col sm={4} class="align-self-center">
        ...
    </Col>
    <Col sm={4} class="align-self-end">
        ...
    </Col>
</Row>
`;
  const horizontalAlignCode = `
<!-- Horizontal Alignment -->
<Row class="justify-content-start">
    <Col sm={4}>
        ...
    </Col>
</Row>
<Row class="justify-content-center">
    <Col sm={4}>
        ...
    </Col>
</Row>
<Row class="justify-content-end">
<Col sm={4}>
        ...
</Col>
</Row>
`;
  return `${$$result.head += `${$$result.title = `<title>Grid | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Grid", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Grid Options</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">See how aspects of the Bootstrap grid system work
							across multiple devices with a handy table.
						</p>
						<div class="${"table-responsive"}"><table class="${"table table-bordered table-nowrap mb-0"}"><thead><tr><th scope="${"col"}"></th>
										<th scope="${"col"}" class="${"text-center"}">xs<br>
											<span class="${"fw-normal"}">&lt;576px</span></th>
										<th scope="${"col"}" class="${"text-center"}">sm<br>
											<span class="${"fw-normal"}">\u2265576px</span></th>
										<th scope="${"col"}" class="${"text-center"}">md<br>
											<span class="${"fw-normal"}">\u2265768px</span></th>
										<th scope="${"col"}" class="${"text-center"}">lg<br>
											<span class="${"fw-normal"}">\u2265992px</span></th>
										<th scope="${"col"}" class="${"text-center"}">xl<br>
											<span class="${"fw-normal"}">\u22651200px</span></th>
										<th scope="${"col"}" class="${"text-center"}">xxl<br>
											<span class="${"fw-normal"}">\u22651400px</span></th></tr></thead>
								<tbody><tr><th class="${"text-nowrap"}" scope="${"row"}">Grid behavior</th>
										<td>Horizontal at all times</td>
										<td colspan="${"5"}">Collapsed to start, horizontal
											above breakpoints</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Max container width</th>
										<td>None (auto)</td>
										<td>540px</td>
										<td>720px</td>
										<td>960px</td>
										<td>1140px</td>
										<td>1320px</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Class prefix</th>
										<td><code>col-</code></td>
										<td><code>col-sm-</code></td>
										<td><code>col-md-</code></td>
										<td><code>col-lg-</code></td>
										<td><code>col-xl-</code></td>
										<td><code>col-xxl-</code></td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}"># of columns</th>
										<td colspan="${"6"}">12</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Gutter width</th>
										<td colspan="${"6"}">24px (12px on each side of a
											column)</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Custom gutters</th>
										<td colspan="${"6"}">Yes</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Nestable</th>
										<td colspan="${"6"}">Yes</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Offsets</th>
										<td colspan="${"6"}">Yes</td></tr>
									<tr><th class="${"text-nowrap"}" scope="${"row"}">Column ordering</th>
										<td colspan="${"6"}">Yes</td></tr></tbody></table></div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, {
                    title: "Vertical alignment (align-items-start)"
                  }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>align-items-start</code> class to vertically
							align-items at the start.
						</p>
						<div class="${"live-preview"}"><div class="${"bg-light p-3 text-center"}">${validate_component(Row, "Row").$$render($$result, {
                        class: "align-items-start",
                        style: "min-height: 6rem"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: verticalStartCode,
                        id: "verticalStartCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, {
                    title: "Vertical alignment (align-items-center)"
                  }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>align-items-center</code> class to vertically
							align-items at the center.
						</p>

						<div class="${"live-preview"}"><div class="${"bg-light p-3 text-center"}">${validate_component(Row, "Row").$$render($$result, {
                        class: "align-items-center",
                        style: "min-height: 6rem"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: verticalCenterCode,
                        id: "verticalCenterCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, {
                    title: "Vertical alignment (align-items-end)"
                  }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>align-items-end</code> class to vertically
							align-items at the end.
						</p>
						<div class="${"live-preview"}"><div class="${"bg-light p-3 text-center"}">${validate_component(Row, "Row").$$render($$result, {
                        class: "align-items-end",
                        style: "min-height: 6rem"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">col-sm-4
										</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: verticalEndCode,
                        id: "verticalEndCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Align Self" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>align-self-start</code>,<code>align-self-center</code>, or
							<code>align-self-end</code> class respectively to vertically
							align items with a different position.
						</p>

						<div class="${"live-preview"}"><div class="${"bg-light p-3 text-center"}">${validate_component(Row, "Row").$$render($$result, { class: "g-2", style: "min-height: 9rem" }, {}, {
                        default: () => {
                          return `<div class="${"col-sm-4 align-self-start"}"><div class="${"bg-soft-primary text-primary rounded p-2"}">align-self-start
										</div></div>
									<div class="${"col-sm-4 align-self-center"}"><div class="${"bg-soft-primary text-primary rounded p-2"}">align-self-center
										</div></div>
									<div class="${"col-sm-4 align-self-end"}"><div class="${"bg-soft-primary text-primary rounded p-2"}">align-self-end
										</div></div>`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: alignSelfCode, id: "alignSelfCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Horizontal Alignment" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or
							<code>justify-content-end</code> class respectively to
							horizontally align items with a different position.
						</p>
						<div class="${"live-preview"}"><div class="${"bg-light p-3 text-center"}">${validate_component(Row, "Row").$$render($$result, { class: "justify-content-start" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2"}">justify-content-start
										</div>`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">justify-content-center
										</div>`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-end" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"bg-soft-primary text-primary rounded p-2 mt-2 mt-sm-0"}">justify-content-end
										</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: horizontalAlignCode,
                        id: "horizontalAlignCode"
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
  })}</div>`;
});
export { Uigrid as default };
