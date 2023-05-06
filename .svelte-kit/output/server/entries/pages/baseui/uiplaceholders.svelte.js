import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
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
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { i as img1 } from "../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uiplaceholders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultPlaceholderCode = `
<!-- Base Examples -->
<Card>
	<img
		src={img1}
		class="card-img-top"
		alt="card img"
	/>

	<CardBody>
		<h5 class="card-title">
			Card title
		</h5>
		<p class="card-text">
			Some quick example text
			to build on the card
			title and make up the
			bulk of the card's
			content.
		</p>
		<Link
			href="#!"
			class="btn btn-primary"
			>Go somewhere</Link
		>
	</CardBody>
</Card>
<Card>
	<img
		src={img2}
		class="card-img-top"
		alt="card dummy img"
	/>
	<CardBody>
		<h5
			class="card-title placeholder-glow"
		>
			<span
				class="placeholder col-6"
			/>
		</h5>
		<p
			class="card-text placeholder-glow"
		>
			<span
				class="placeholder col-7"
			/>
			<span
				class="placeholder col-4"
			/>
			<span
				class="placeholder col-4"
			/>
			<span
				class="placeholder col-6"
			/>
		</p>
		<Link
			href="#!"
			tabIndex="-1"
			class="btn btn-primary disabled placeholder col-6"
		/>
	</CardBody>
</Card>

`;
  const widthCode = `
<!-- Width Sizing-->
<div class="live-preview">
    <span class="placeholder col-6"></span>
    <span class="placeholder w-75"></span>
    <span class="placeholder" style="width: 25%"></span>
</div>
`;
  const sizingCode = `
<!-- Sizing -->
<span class="placeholder col-12 placeholder-lg"></span>

<span class="placeholder col-12"></span>

<span class="placeholder col-12 placeholder-sm"></span>

<span class="placeholder col-12 placeholder-xs"></span>
`;
  const colorCode = `
<!-- Color -->
<span class="placeholder col-12 mb-3"></span>

<span class="placeholder col-12 mb-3 bg-primary"></span>

<span class="placeholder col-12 mb-3 bg-secondary"></span>

<span class="placeholder col-12 mb-3 bg-success"></span>

<span class="placeholder col-12 mb-3 bg-danger"></span>

<span class="placeholder col-12 mb-3 bg-warning"></span>

<span class="placeholder col-12 mb-3 bg-info"></span>

<span class="placeholder col-12 mb-3 bg-light"></span>

<span class="placeholder col-12 mb-3 bg-dark"></span>
`;
  return `${$$result.head += `${$$result.title = `<title>Placeholders | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Placeholders",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Placeholder" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">In the example below, we take a typical card
							component and recreate it with placeholders applied
							to create a \u201Cloading card\u201D.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 7 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-between" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 5, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `<img${add_attribute("src", img1, 0)} class="${"card-img-top"}" alt="${"card img"}">

												${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `<h5 class="${"card-title"}">Card title
													</h5>
													<p class="${"card-text"}">Some quick example text
														to build on the card
														title and make up the
														bulk of the card&#39;s
														content.
													</p>
													${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-primary" }, {}, {
                                                default: () => {
                                                  return `Go somewhere`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 5, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `<img${add_attribute("src", img2, 0)} class="${"card-img-top"}" alt="${"card dummy img"}">
												${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `<h5 class="${"card-title placeholder-glow"}"><span class="${"placeholder col-6"}"></span></h5>
													<p class="${"card-text placeholder-glow"}"><span class="${"placeholder col-7"}"></span>
														<span class="${"placeholder col-4"}"></span>
														<span class="${"placeholder col-4"}"></span>
														<span class="${"placeholder col-6"}"></span></p>
													${validate_component(Link, "Link").$$render($$result, {
                                                href: "#!",
                                                tabIndex: "-1",
                                                class: "btn btn-primary disabled placeholder col-6"
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
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultPlaceholderCode,
                        id: "defaultPlaceholderCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Width" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>w-25,w-50,w-75</code> or
							<code>w-100</code> class to placeholder class to set
							different widths to the placeholder.
						</p>
						<div class="${"live-preview"}"><span class="${"placeholder w-50"}"></span>
							<span class="${"placeholder w-75"}"></span>
							<span class="${"placeholder w-25"}"></span>
							<span class="${"placeholder w-100"}"></span></div>

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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Sizing" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>placeholder-lg</code>,
							<code>placeholder-sm</code>, or
							<code>placeholder-xs</code> class to placeholder class
							to set different size placeholder.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "gap-0" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder placeholder-lg w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder placeholder-sm w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder placeholder-xs w-100"}"></span>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: sizingCode, id: "sizingCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Color" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>bg-</code> class with the below-mentioned color
							variation to set a custom color.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-primary w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-secondary w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-success w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-danger w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-warning w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-info w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-light w-100"}"></span>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                            default: () => {
                              return `<span class="${"placeholder bg-dark w-100"}"></span>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: colorCode, id: "colorCode" }, {}, {})}</div>`;
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
export { Uiplaceholders as default };
