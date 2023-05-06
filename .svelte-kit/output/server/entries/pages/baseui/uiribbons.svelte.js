import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uiribbons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const roundedRibbonCode = `
<!-- Rounded Ribbon -->
<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-primary round-shape">Primary</div>
            <h5 class="fs-14 text-end">Rounded Ribbon</h5>
        <div class="ribbon-content mt-4 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-success round-shape">Success</div>
            <h5 class="fs-14 text-end">Rounded Ribbon</h5>
        <div class="ribbon-content mt-4 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<!-- Right Ribbon -->
<Card class="ribbon-box border shadow-none right mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-info round-shape">Info</div>
            <h5 class="fs-14 text-start">Rounded Ribbon Right</h5>
        <div class="ribbon-content mt-4 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>
`;
  const ribbonShapeCode = `
<!-- Ribbon Shape -->
<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-primary ribbon-shape">Primary</div>
        <h5 class="fs-14 text-end">Ribbon Shape</h5>
        <div class="ribbon-content text-muted mt-4">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-success ribbon-shape">Success</div>
        <h5 class="fs-14 text-end">Ribbon Shape</h5>
        <div class="ribbon-content text-muted mt-4">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0 right">
    <CardBody>
        <div class="ribbon ribbon-info ribbon-shape">Info</div>
        <h5 class="fs-14 text-start">Ribbon Shape Right</h5>
        <div class="ribbon-content text-muted mt-4">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>
`;
  const filledRibbonsCode = `
<!-- Filled Ribbons -->
<Card class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-primary">- 10 %</div>
        <h5 class="fs-14 text-end">Fill Ribbon</h5>
        <div class="ribbon-content mt-5 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<Card class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-success">- 20 %</div>
        <h5 class="fs-14 text-end">Fill Ribbon</h5>
        <div class="ribbon-content mt-5 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</Card>

<!-- Right Ribbon -->
<Card class="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
    <CardBody>
        <div class="ribbon ribbon-info">- 30 %</div>
        <h5 class="fs-14 text-start">Fill Ribbon Right</h5>
        <div class="ribbon-content mt-5 text-muted">
            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </CardBody>
</div>
`;
  const boxedRibbonsCode = `
<!-- Boxed Ribbons -->
<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <div class="ribbon-two ribbon-two-primary"><span>Primary</span></div>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <div class="ribbon-two ribbon-two-success"><span>Success</span></div>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <div class="ribbon-two ribbon-two-success"><span>Success</span></div>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>
`;
  const ribbonsCode = `
<!-- Ribbons -->
<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <span class="ribbon-three ribbon-three-primary"><span>Primary</span></span>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <div class="ribbon-three ribbon-three-success"><span>Success</span></div>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>

<Card class="ribbon-box border shadow-none mb-lg-0">
    <CardBody class="text-muted">
        <div class="ribbon-three ribbon-three-info"><span>Success</span></div>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </CardBody>
</Card>
`;
  const ribbonsHoverCode = `
<!-- Ribbons Hover -->
<Card class="ribbon-box border shadow-none overflow-hidden">
    <CardBody class="text-muted">
        <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </div>
</Card>

<Card class="ribbon-box border shadow-none overflow-hidden">
    <CardBody class="text-muted">
        <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span class="trending-ribbon-text">Trending</span> <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </div>
</Card>

<Card class="ribbon-box right border shadow-none overflow-hidden">
    <CardBody class="text-muted">
        <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
            <i class="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span class="trending-ribbon-text">Trending</span>
        </div>
        <h5 class="fs-14 mb-3">Ribbon Right Shape</h5>
        <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </div>
</Card>
`;
  return `${$$result.head += `${$$result.title = `<title>Ribbons | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Ribbons", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Rounded Ribbon" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>round-shape</code> class to show round-shaped
									ribbon.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-primary round-shape"}">Primary
											</div>
											<h5 class="${"fs-14 text-end"}">Rounded Ribbon
											</h5>

											<div class="${"ribbon-content mt-4 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-success round-shape"}">Success
											</div>
											<h5 class="${"fs-14 text-end"}">Rounded Ribbon
											</h5>
											<div class="${"ribbon-content mt-4 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none right mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-info round-shape"}">Info
											</div>
											<h5 class="${"fs-14 text-start"}">Rounded Ribbon Right
											</h5>
											<div class="${"ribbon-content mt-4 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: roundedRibbonCode,
                        id: "roundedRibbonCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ribbon Shape" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>ribbon-shape</code> class to show ribbon
									shaped ribbon.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-primary ribbon-shape"}">Primary
											</div>
											<h5 class="${"fs-14 text-end"}">Ribbon Shape
											</h5>
											<div class="${"ribbon-content text-muted mt-4"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-success ribbon-shape"}">Success
											</div>
											<h5 class="${"fs-14 text-end"}">Ribbon Shape
											</h5>
											<div class="${"ribbon-content text-muted mt-4"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0 right"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-info ribbon-shape"}">Info
											</div>
											<h5 class="${"fs-14 text-start"}">Ribbon Shape Right
											</h5>
											<div class="${"ribbon-content text-muted mt-4"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: ribbonShapeCode,
                        id: "ribbonShapeCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Filled Ribbons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>ribbon-fill</code> class to show fill-shaped
									ribbon.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border ribbon-fill shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-primary"}">New
											</div>
											<h5 class="${"fs-14 text-end"}">Fill Ribbon
											</h5>
											<div class="${"ribbon-content mt-3 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border ribbon-fill shadow-none mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-success"}">Sale
											</div>
											<h5 class="${"fs-14 text-end"}">Fill Ribbon
											</h5>
											<div class="${"ribbon-content mt-3 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border ribbon-fill shadow-none right mb-lg-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"ribbon ribbon-info"}">New
											</div>
											<h5 class="${"fs-14 text-start"}">Fill Ribbon Right
											</h5>
											<div class="${"ribbon-content mt-3 text-muted"}"><p class="${"mb-0"}">Quisque nec turpis at urna
													dictum luctus. Suspendisse
													convallis dignissim eros at
													volutpat. In egestas mattis
													dui. Aliquam mattis dictum
													aliquet. Nulla sapien
													mauris, eleifend et sem ac,
													commodo dapibus odio.
												</p></div>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: filledRibbonsCode,
                        id: "filledRibbonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Boxed Ribbons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>ribbon-box</code> class with
									<code>ribbon-two</code> class at child element
									to show below-mentioned shaped ribbon.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}"><div class="${"card-body text-muted"}"><div class="${"ribbon-two ribbon-two-primary"}"><span>Basic</span></div>
											<h5 class="${"fs-14 text-end mb-3"}">Box Ribbon
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}"><div class="${"card-body text-muted"}"><div class="${"ribbon-two ribbon-two-success"}"><span>Standard</span></div>
											<h5 class="${"fs-14 text-end mb-3"}">Box Ribbon
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0 right"}"><div class="${"card-body text-muted"}"><div class="${"ribbon-two ribbon-two-info"}"><span>Premium</span></div>
											<h5 class="${"fs-14 mb-3"}">Box Ribbon Right
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus
												elementum ornare.
											</p></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: boxedRibbonsCode,
                        id: "boxedRibbonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ribbons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>ribbon-box</code> class with
									<code>ribbon-three</code> class at child element
									to show below-mentioned shaped ribbon.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}"><div class="${"card-body text-muted"}"><span class="${"ribbon-three ribbon-three-primary"}"><span>Featured</span></span>
											<h5 class="${"fs-14 text-end mb-3"}">Ribbon Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0"}"><div class="${"card-body text-muted"}"><span class="${"ribbon-three ribbon-three-success"}"><span>Featured</span></span>
											<h5 class="${"fs-14 text-end mb-3"}">Ribbon Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none mb-lg-0 right"}"><div class="${"card-body text-muted"}"><span class="${"ribbon-three ribbon-three-info"}"><span>Featured</span></span>
											<h5 class="${"fs-14 mb-3"}">Ribbon Right Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ribbonsCode, id: "ribbonsCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ribbons Hover" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `<p class="${"text-muted"}">Use <code>trending-ribbon</code> class to show
									ribbon with hovering effect.
								</p>
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none overflow-hidden mb-lg-0"}"><div class="${"card-body text-muted"}"><div class="${"ribbon ribbon-info ribbon-shape trending-ribbon"}"><span class="${"trending-ribbon-text"}">Trending</span>
												<i class="${"ri-flashlight-fill text-white align-bottom float-end ms-1"}"></i></div>
											<h5 class="${"fs-14 text-end mb-3"}">Ribbon Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box border shadow-none overflow-hidden mb-lg-0"}"><div class="${"card-body text-muted"}"><div class="${"ribbon ribbon-info ribbon-shape trending-ribbon"}"><span class="${"trending-ribbon-text"}">Trending</span>
												<i class="${"ri-flashlight-fill text-white align-bottom float-end ms-1"}"></i></div>
											<h5 class="${"fs-14 text-end mb-3"}">Ribbon Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `<div class="${"card ribbon-box right border shadow-none overflow-hidden mb-lg-0"}"><div class="${"card-body text-muted"}"><div class="${"ribbon ribbon-info ribbon-shape trending-ribbon"}"><i class="${"ri-flashlight-fill text-white align-bottom float-start me-1"}"></i>
												<span class="${"trending-ribbon-text"}">Trending</span></div>
											<h5 class="${"fs-14 mb-3"}">Ribbon Right Shape
											</h5>
											<p class="${"mb-0"}">Quisque nec turpis at urna
												dictum luctus. Suspendisse
												convallis dignissim eros at
												volutpat. In egestas mattis dui.
												Aliquam mattis dictum aliquet.
												Nulla sapien mauris, eleifend et
												sem ac, commodo dapibus odio.
												Vivamus pretium nec odio cursus.
											</p></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: ribbonsHoverCode,
                        id: "ribbonsHoverCode"
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
export { Uiribbons as default };
