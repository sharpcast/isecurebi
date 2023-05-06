import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
const Uiutilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const stacksVerticalCode = `
<!-- Stacks - Vertical -->
<div class="vstack gap-3">
    <div class="bg-light border p-1 px-2">First item</div>
    <div class="bg-light border p-1 px-2">Second item</div>
    <div class="bg-light border p-1 px-2">Third item</div>
</div>

<div class="vstack gap-2">
    <Button color="primary">Save changes</Button>
    <Button color="secondary" outline>Cancel</Button>
</div>
`;
  const stacksHorizontalCode = `
<!-- Stacks - Horizontal -->
<div class="hstack gap-3">
    <div class="bg-light border p-1 px-2">First item</div>
    <div class="bg-light border p-1 px-2">Second item</div>
    <div class="bg-light border p-1 px-2">Third item</div>
</div>

<div class="hstack gap-3">
    <div class="bg-light border p-1 px-2">First item</div>
    <div class="bg-light border p-1 px-2 ms-auto">Second item</div>
    <div class="bg-light border p-1 px-2">Third item</div>
</div>

<div class="hstack gap-3">
    <div class="bg-light border p-1 px-2">First item</div>
    <div class="vr"></div>
    <div class="bg-light border p-1 px-2">Second item</div>
    
    <div class="bg-light border p-1 px-2 ms-auto">Third item</div>
</div>

<div class="hstack gap-3"> 
    <Input class="form-control me-auto" type="text" placeholder="Add your item here..." />
    <Button color="primary">Submit</Button>
    <div class="vr"></div>
    <Button color="secondary" outline>Reset</Button>
</div>
`;
  const textSelectionCode = `
<!-- Text Selection -->
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>

<p class="user-select-auto">This paragraph has default select behavior.</p>

<p class="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
`;
  const pointerEventsCode = `
<!-- Pointer events -->
<p><Link href="#!" class="text-success pe-none" tabIndex="-1" aria-disabled="true">This link</Link> can not be clicked.</p>

<p><Link href="#!" class="text-success pe-auto">This link</Link> can be clicked (this is default behavior).</p>
    
<p class="pe-none mb-0"><Link href="#!" class="text-success" tabindex="-1" aria-disabled="true">This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link href="#!" class="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
`;
  const overflowCode = `
<!-- Overflow -->
    <div class="overflow-hidden p-3 mb-0 bg-light" style="height: 100px">
        This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    
    <div class="overflow-visible p-3 mb-0 bg-light" style="height: 100px">
        This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    
    <div class="overflow-scroll p-3 mb-0 bg-light" style="height: 100px">
        This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
`;
  const positionCode = `
<!-- Arrange elements -->
<div class="position-relative p-5 bg-light m-3 border rounded" style="height: 180px">
    <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
<div class="position-relative m-3 bg-light border rounded" style="height: 180px">
    <div class="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div class="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div class="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
    <div class="position-relative m-3 bg-light border rounded" style="height: 180px">
    <div class="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
    <div class="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

    <div class="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div class="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>

    <div class="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div class="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div class="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>
`;
  const shadowsCode = `
<!-- Shadows -->
<div class="shadow-none p-3 bg-light rounded">No shadow</div>

<div class="shadow-sm p-3 bg-light rounded">Small shadow</div>

<div class="shadow p-3 bg-light rounded">Regular shadow</div>

<div class="shadow-lg p-3 bg-light rounded">Larger shadow</div>
`;
  const widthCode = `
<!-- Width -->
<div class="w-25 p-3 bg-light">Width 25%</div>

<div class="w-50 p-3 bg-light">Width 50%</div>

<div class="w-75 p-3 bg-light">Width 75%</div>

<div class="w-100 p-3 bg-light">Width 100%</div>

<div class="w-auto p-3 bg-light">Width auto</div>
`;
  const heightCode = `
<!-- Height -->
<div class="h-25 p-3 bg-light">Height25%</div>

<div class="h-50 p-3 bg-light">Height50%</div>

<div class="h-75 p-3 bg-light">Height75%</div>

<div class="h-100 p-3 bg-light">Height100%</div>

<div class="h-auto p-3 bg-light">Height auto</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Utilities | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Utilities", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Borders</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use border utilities to add or remove an element\u2019s
							borders. Choose from all borders or one at a time.
						</p>

						<div class="${"live-preview"}"><div><div><h5 class="${"fs-13 mb-3"}">Border width</h5>
									<div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><div class="${"border border-1 border-light avatar-md bg-transparent mx-auto mb-1"}"></div>
											<p><code>.border.border-1</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-2 border-light avatar-md bg-transparent mx-auto mb-1"}"></div>
											<p><code>.border.border-2</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-3 border-light avatar-md bg-transparent mx-auto mb-1"}"></div>
											<p><code>.border.border-3</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-4 border-light avatar-md bg-transparent mx-auto mb-1"}"></div>
											<p><code>.border.border-4</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-5 border-light avatar-md bg-transparent mx-auto mb-1"}"></div>
											<p><code>.border.border-5</code></p></div></div></div>
								${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Additive</h5>
											${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border avatar-md border-success bg-light mx-auto mb-1"}"></div>
														<p><code>.border</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-top avatar-md border-success bg-light mx-auto mb-1"}"></div>
														<p><code>.border-top</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-end avatar-md border-success bg-light mx-auto mb-1"}"></div>
														<p><code>.border-end</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-bottom avatar-md border-success bg-light mx-auto mb-1"}"></div>
														<p><code>.border-bottom</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-start avatar-md border-success bg-light mx-auto mb-1"}"></div>
														<p><code>.border-start</code></p></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Subtractive
											</h5>
											${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-0 border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-0</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border border-success border-top-0 avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-top-0</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border border-success border-end-0 avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-end-0</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border border-success border-bottom-0 avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-bottom-0</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { xl: 2, sm: 4, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border border-start-0 border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-start-0</code></p></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}
								<div class="${"mt-4"}"><h5 class="${"fs-13 mb-3"}">Border Color</h5>
									<div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><div class="${"border border-primary avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-primary</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-secondary avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-secondary</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-success avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-success</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-info avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-info</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-warning avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-warning</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-danger avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-danger</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-dark avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-dark</code></p></div></div></div>
								${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Border Style
											</h5>
											<div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><div class="${"border border-primary border-dotted avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-dotted</code></p></div>
												<div class="${"text-center"}"><div class="${"border border-secondary border-dashed avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-dashed</code></p></div>
												<div class="${"text-center"}"><div class="${"border border-success border-groove avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-groove</code></p></div>
												<div class="${"text-center"}"><div class="${"border border-info border-outset avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-outset</code></p></div>
												<div class="${"text-center"}"><div class="${"border border-warning border-ridge avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-ridge</code></p></div>
												<div class="${"text-center"}"><div class="${"border border-danger border-inset avatar-md bg-light mx-auto mb-1"}"></div>
													<p><code>.border-inset</code></p></div></div></div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Additive</h5>
											${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 3, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-start border-start-dashed border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-start-dashed</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { sm: 3, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-top border-top-dashed border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-top-dashed</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { sm: 3, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-end border-end-dashed border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-end-dashed</code></p></div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { sm: 3, class: "col" }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center"}"><div class="${"border-bottom border-bottom-dashed border-success avatar-md bg-light mx-auto mb-1"}"></div>
														<p><code>.border-bottom-dashed</code></p></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}
								<div class="${"mt-4"}"><h5 class="${"fs-13 mb-3"}">Border Opacity</h5>
									<div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><div class="${"border border-success border-opacity-10 avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-opacity-10</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-success border-opacity-25 avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-opacity-25</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-success border-opacity-50 avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-opacity-50</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-success border-opacity-75 avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-opacity-75</code></p></div>
										<div class="${"text-center"}"><div class="${"border border-success border-opacity-100 avatar-md bg-light mx-auto mb-1"}"></div>
											<p><code>.border-opacity-100</code></p></div></div></div></div></div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Border Radius</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use below-mentioned class to an element to easily
							round its corners.
						</p>
						<div class="${"live-preview"}"><div><div><div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded"}" alt="${"rounded"}">
											<p><code>.rounded</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-top"}" alt="${"rounded-top"}">
											<p><code>.rounded-top</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-end"}" alt="${"rounded-end"}">
											<p><code>.rounded-end</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-bottom"}" alt="${"rounded-bottom"}">
											<p><code>.rounded-bottom</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-start"}" alt="${"rounded-start"}">
											<p><code>.rounded-start</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-circle"}" alt="${"rounded-circle"}">
											<p><code>.rounded-circle</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-md rounded-top"}" alt="${"rounded-top"}">
											<p><code>.rounded-top</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", img2, 0)} class="${"avatar-md w-auto rounded-pill"}" alt="${"rounded-pill"}">
											<p><code>.rounded-pill</code></p></div></div></div>
								<div><h5 class="${"fs-13 mb-3"}">Sizes</h5>
									<div class="${"d-flex align-items-start flex-wrap gap-4"}"><div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-0"}" alt="${"rounded-0"}">
											<p><code>.rounded-0</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-1"}" alt="${"rounded-1"}">
											<p><code>.rounded-1</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-2"}" alt="${"rounded-2"}">
											<p><code>.rounded-2</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-3"}" alt="${"rounded-3"}">
											<p><code>.rounded-3</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-4"}" alt="${"rounded-4"}">
											<p><code>.rounded-4</code></p></div>
										<div class="${"text-center"}"><img${add_attribute("src", avatar1, 0)} class="${"avatar-md rounded-5"}" alt="${"rounded-5"}">
											<p><code>.rounded-5</code></p></div></div></div></div></div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Display Property</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use below-mentioned class to an element to display
							the value of components and more with our display
							utilities.
						</p>
						<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Display classes
											</h5>
											<div class="${"table-responsive"}"><table class="${"table table-bordered"}"><thead class="${"table-light"}"><tr><th scope="${"col"}" style="${"width: 40%"}">Display
																Property</th>
															<th scope="${"col"}">Class</th></tr></thead>
													<tbody><tr><td>Display : none</td>
															<td><code>.d-none</code></td></tr>
														<tr><td>Display :
																inline</td>
															<td><code>.d-inline</code></td></tr>
														<tr><td>Display :
																inline-block</td>
															<td><code>.d-inline-block</code></td></tr>
														<tr><td>Display : block</td>
															<td><code>.d-block</code></td></tr>
														<tr><td>Display : table</td>
															<td><code>.d-table</code></td></tr>
														<tr><td>Display :
																table-cell</td>
															<td><code>.d-table-cell</code></td></tr>
														<tr><td>Display :
																table-row</td>
															<td><code>.d-table-row</code></td></tr>
														<tr><td>Display : flex</td>
															<td><code>.d-flex</code></td></tr>
														<tr><td>Display :
																inline-flex</td>
															<td><code>.d-inline-flex</code></td></tr></tbody></table></div></div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 mb-3"}">Hiding elements
											</h5>
											<div class="${"table-responsive"}"><table class="${"table table-bordered"}"><thead class="${"table-light"}"><tr><th scope="${"col"}">Screen Size</th>
															<th scope="${"col"}">Class</th></tr></thead>
													<tbody><tr><td>Hidden on all</td>
															<td><code>.d-none</code></td></tr>
														<tr><td>Hidden only on
																xs</td>
															<td><code>.d-none
																	.d-sm-block</code></td></tr>
														<tr><td>Hidden only on
																sm</td>
															<td><code>.d-sm-none
																	.d-md-block</code></td></tr>
														<tr><td>Hidden only on
																md</td>
															<td><code>.d-md-none
																	.d-lg-block</code></td></tr>
														<tr><td>Hidden only on
																lg</td>
															<td><code>.d-lg-none
																	.d-xl-block</code></td></tr>
														<tr><td>Hidden only on
																xl</td>
															<td><code>.d-xl-none</code></td></tr>
														<tr><td>Visible on all</td>
															<td><code>.d-block</code></td></tr>
														<tr><td>Visible only on
																xs</td>
															<td><code>.d-block
																	.d-sm-none</code></td></tr>
														<tr><td>Visible only on
																sm</td>
															<td><code>.d-none
																	.d-sm-block
																	.d-md-none</code></td></tr>
														<tr><td>Visible only on
																md</td>
															<td><code>.d-none
																	.d-md-block
																	.d-lg-none</code></td></tr>
														<tr><td>Visible only on
																lg</td>
															<td><code>.d-none
																	.d-lg-block
																	.d-xl-none</code></td></tr>
														<tr><td>Visible only on
																xl</td>
															<td><code>.d-none
																	.d-xl-block</code></td></tr></tbody></table></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
							<div class="${"mt-4"}"><h5 class="${"fs-13"}">Display in print</h5>
								<p class="${"text-muted"}">Change the display value of elements when
									printing with our print display utility
									classes.
								</p>

								<ul class="${"ps-4 mb-0"}"><li class="${"py-1"}"><code>.d-print-none</code></li>
									<li class="${"py-1"}"><code>.d-print-inline</code></li>
									<li class="${"py-1"}"><code>.d-print-inline-block</code></li>
									<li class="${"py-1"}"><code>.d-print-block</code></li>
									<li class="${"py-1"}"><code>.d-print-table</code></li>
									<li class="${"py-1"}"><code>.d-print-table-row</code></li>
									<li class="${"py-1"}"><code>.d-print-table-cell</code></li>
									<li class="${"py-1"}"><code>.d-print-flex</code></li>
									<li class="${"py-1"}"><code>.d-print-inline-flex</code></li></ul></div></div>`;
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
                      return `<h4 class="${"card-title mb-0"}">Custom Class</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the below-mentioned class to an element to
							custom display the value of components and more with
							our display utilities.
						</p>
						<div class="${"live-preview"}"><div><div class="${"table-responsive"}"><table class="${"table table-bordered mb-0"}"><thead class="${"table-light"}"><tr><th scope="${"col"}" style="${"width: 40%;"}">Property</th>
												<th scope="${"col"}">Class</th></tr></thead>
										<tbody><tr><td>font-family: &#39;Poppins&#39;, sans-serif;</td>
												<td><code>.ff-base</code></td></tr>
											<tr><td>font-family: &#39;hkgrotesk&#39;, sans-serif;</td>
												<td><code>.ff-secondary</code></td></tr>
											<tr><td>font-weight: 500;</td>
												<td><code>.fw-medium</code></td></tr>
											<tr><td>min-width: 80px;</td>
												<td><code>.w-xs</code></td></tr>
											<tr><td>min-width: 95px;</td>
												<td><code>.w-sm</code></td></tr>
											<tr><td>min-width: 110px;</td>
												<td><code>.w-md</code></td></tr>
											<tr><td>min-width: 140px;</td>
												<td><code>.w-lg</code></td></tr>
											<tr><td>min-width: 160px;</td>
												<td><code>.w-xl</code></td></tr></tbody></table></div></div></div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Stacks - Vertical" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-3"}">Use <code>vstack</code> class to create vertical
							layouts. Stacked items are full-width by default.
							Use <code>gap-</code> class with variation to add space
							between items.
						</p>
						<div class="${"live-preview"}"><div class="${"vstack gap-3"}"><div class="${"bg-light border p-1 px-2"}">First item
								</div>
								<div class="${"bg-light border p-1 px-2"}">Second item
								</div>
								<div class="${"bg-light border p-1 px-2"}">Third item
								</div></div>

							<div class="${"mt-5"}"><h5 class="${"fs-14 mb-3"}">Vertical Stacks Examples
								</h5>
								<div class="${"vstack gap-2 col-md-5 mx-auto"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Save changes`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "secondary", outline: true }, {}, {
                        default: () => {
                          return `Cancel`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: stacksVerticalCode,
                        id: "stacksVerticalCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Stacks - Horizontal" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-3"}">Use <code>hstack</code> class to create horizontal
							layouts. Stacked items are full-width by default.
							Use <code>gap-</code> class with variation to add space
							between items.
						</p>

						<div class="${"live-preview"}"><div class="${"hstack gap-3"}"><div class="${"bg-light border p-1 px-2"}">First item
								</div>
								<div class="${"bg-light border p-1 px-2"}">Second item
								</div>
								<div class="${"bg-light border p-1 px-2"}">Third item
								</div></div>
							<div class="${"mt-4"}"><p class="${"text-muted mb-3"}">Using horizontal margin utilities like
									<code>ms-auto</code> as spacers:
								</p>

								<div class="${"hstack gap-3"}"><div class="${"bg-light border p-1 px-2"}">First item
									</div>
									<div class="${"bg-light border p-1 px-2 ms-auto"}">Second item
									</div>
									<div class="${"bg-light border p-1 px-2"}">Third item
									</div></div>
								<div class="${"hstack gap-3 mt-3"}"><div class="${"bg-light border p-1 px-2"}">First item
									</div>
									<div class="${"vr"}"></div>
									<div class="${"bg-light border p-1 px-2"}">Second item
									</div>

									<div class="${"bg-light border p-1 px-2 ms-auto"}">Third item
									</div></div></div>

							<div class="${"mt-5"}"><h5 class="${"fs-13 mb-3"}">Horizontal Stacks Examples
								</h5>
								<div class="${"hstack gap-3"}">${validate_component(Input, "Input").$$render($$result, {
                        class: "form-control me-auto",
                        type: "text",
                        placeholder: "Add your item here..."
                      }, {}, {})}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Submit`;
                        }
                      })}
									<div class="${"vr"}"></div>
									${validate_component(Button, "Button").$$render($$result, { color: "secondary", outline: true }, {}, {
                        default: () => {
                          return `Reset`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: stacksHorizontalCode,
                        id: "stacksHorizontalCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Text Selection" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-3"}">Use <code>user-select-all</code>,
							<code>user-select-auto</code>, or
							<code>user-select-none</code> class to the content which
							is selected when the user interacts with it.
						</p>

						<div class="${"live-preview"}"><div><p class="${"user-select-all"}">This paragraph will be entirely selected
									when clicked by the user.
								</p>
								<p class="${"user-select-auto"}">This paragraph has default select behavior.
								</p>
								<p class="${"user-select-none mb-0"}">This paragraph will not be selectable when
									clicked by the user.
								</p></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: textSelectionCode,
                        id: "textSelectionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Pointer Events" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-3"}">Use <code>pe-none</code> class to prevent and
							<code>pe-auto</code> class to add element interactions
							respectively.
						</p>

						<div class="${"live-preview"}"><div><p>${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-success pe-none",
                        tabIndex: "-1"
                      }, {}, {
                        default: () => {
                          return `This link`;
                        }
                      })} can not be clicked.
								</p>
								<p>${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-success pe-auto"
                      }, {}, {
                        default: () => {
                          return `This link`;
                        }
                      })} can be clicked (this is default behavior).
								</p>
								<p class="${"pe-none mb-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-success",
                        tabIndex: "-1"
                      }, {}, {
                        default: () => {
                          return `This link`;
                        }
                      })} can not be clicked because the
									<code>pointer-events</code>
									property is inherited from its parent. However,
									${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "pe-auto" }, {}, {
                        default: () => {
                          return `this link`;
                        }
                      })} has a <code>pe-auto</code> class and can be
									clicked.
								</p></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: pointerEventsCode,
                        id: "pointerEventsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Overflow" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>overflow</code> property on the fly with four
							default values and classes.
						</p>
						<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-xl-0"}"><h5 class="${"fs-13"}">Overflow Auto</h5>

											<div class="${"d-md-flex bg-light"}"><div class="${"overflow-auto p-3 mb-0 bg-light"}" style="${"height: 100px"}">This is an example of using <code>.overflow-auto</code>
													on an element with set width
													and height dimensions. By design,
													this content will vertically
													scroll. Lorem ipsum dolor sit
													amet, consectetuer adipiscing
													elit. Aenean commodo ligula eget
													dolor. Aenean massa. Cum sociis
													natoque penatibus et
												</div></div></div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { xl: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-xl-0"}"><h5 class="${"fs-13"}">Overflow Hidden
											</h5>

											<div class="${"d-md-flex bg-light"}"><div class="${"overflow-hidden p-3 mb-0 bg-light"}" style="${"height: 100px"}">This is an example of using
													<code>.overflow-hidden</code> on an element with set width
													and height dimensions. Lorem
													ipsum dolor sit amet, consectetur
													adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et
													dolore magna aliqua.
												</div></div></div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { xl: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-xl-0"}"><h5 class="${"fs-13"}">Overflow Visible
											</h5>

											<div class="${"d-md-flex bg-light"}"><div class="${"overflow-visible p-3 mb-0 bg-light"}" style="${"height: 100px"}">This is an example of using
													<code>.overflow-visible</code> on an element with set width
													and height dimensions.Lorem ipsum
													dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt
													ut labore et dolore magna aliqua.
												</div></div></div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { xl: 3, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-xl-0"}"><h5 class="${"fs-13"}">Overflow Scroll
											</h5>

											<div class="${"d-md-flex bg-light"}"><div class="${"overflow-scroll p-3 mb-0 bg-light"}" style="${"height: 100px"}">This is an example of using
													<code>.overflow-scroll</code> on an element with set width
													and height dimensions. Lorem
													ipsum dolor sit amet, consectetur
													adipiscing elit, sed do eiusmod
													tempor incididunt ut labore et
													dolore magna aliqua.
												</div></div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: overflowCode, id: "overflowCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Position" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13"}">Arrange elements
											</h5>

											<div class="${"position-relative p-5 bg-light m-3 border rounded"}" style="${"height: 180px"}"><div class="${"position-absolute top-0 start-0 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-0 end-0 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-50 start-50 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"}"></div></div></div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { xl: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-sm-0"}"><h5 class="${"fs-13 mb-4"}">Center elements
											</h5>

											<div class="${"position-relative m-3 bg-light border rounded"}" style="${"height: 180px"}"><div class="${"position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"}"></div>

												<div class="${"position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"}"></div>

												<div class="${"position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"}"></div></div></div>`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { xl: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-sm-0"}"><h5 class="${"fs-13"}">Center elements
											</h5>

											<div class="${"position-relative m-3 bg-light border rounded"}" style="${"height: 180px"}"><div class="${"position-absolute top-0 start-0 avatar-xs bg-dark rounded "}"></div>
												<div class="${"position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-0 end-0 avatar-xs bg-dark rounded"}"></div>

												<div class="${"position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"}"></div>

												<div class="${"position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"}"></div>
												<div class="${"position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"}"></div></div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: positionCode, id: "positionCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Shadows" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">While shadows on components are disabled by default
							in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with
							our
							<code>box-shadow</code>
							utility classes. Includes support for
							<code>.shadow-none</code> and three default sizes (which
							have associated variables to match).
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"shadow-none p-3 bg-light rounded"}">No shadow
									</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"shadow-sm p-3 bg-light rounded"}">Small shadow
									</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"shadow p-3 bg-light rounded"}">Regular shadow
									</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"shadow-lg p-3 bg-light rounded"}">Larger shadow
									</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: shadowsCode, id: "shadowsCode" }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Width" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use
							<code>w-25</code>,<code>w-50</code>,<code>w-75</code>,<code>w-100</code> or
							<code>w-auto</code> class to set width
							<code>25%</code>, <code>50%</code>,
							<code>75%</code>, <code>100%</code>, or
							<code>auto</code> by default respectively.
						</p>
						<div class="${"live-preview"}"><div><div class="${"w-25 p-3 bg-light"}">Width 25%</div>
								<div class="${"w-50 p-3 bg-light"}">Width 50%</div>
								<div class="${"w-75 p-3 bg-light"}">Width 75%</div>
								<div class="${"w-100 p-3 bg-light"}">Width 100%</div>
								<div class="${"w-auto p-3 bg-light"}">Width auto
								</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: widthCode, id: "widthCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Height" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use
							<code>h-25</code>,<code>h-50</code>,<code>h-75</code>,<code>h-100</code> or
							<code>h-auto</code> class to set height
							<code>25%</code>, <code>50%</code>,
							<code>75%</code>, <code>100%</code>, or
							<code>auto</code> by default respectively.
						</p>
						<div class="${"live-preview"}"><div class="${"row text-center"}" style="${"height: 255px"}">${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                        default: () => {
                          return `<div class="${"h-25 p-3 bg-light"}">Height25%
									</div>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                        default: () => {
                          return `<div class="${"h-50 p-3 bg-light"}">Height 50%
									</div>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                        default: () => {
                          return `<div class="${"h-75 p-3 bg-light"}">Height 75%
									</div>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                        default: () => {
                          return `<div class="${"h-100 p-3 bg-light"}">Height 100%
									</div>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                        default: () => {
                          return `<div class="${"h-auto p-3 bg-light"}">Height auto
									</div>`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: heightCode, id: "heightCode" }, {}, {})}</div>`;
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
export { Uiutilities as default };
