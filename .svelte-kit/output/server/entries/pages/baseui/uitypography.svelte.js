import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Badge } from "../../../chunks/Badge-d725e03d.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
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
import { L as Link } from "../../../chunks/Link-71b36253.js";
const Uitypography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const displayHeadingCode = `
<!-- Display Headings -->
<h1 class="display-1">Display 1</h1>

<h1 class="display-2">Display 2</h1>

<h1 class="display-3">Display 3</h1>

<h1 class="display-4">Display 4</h1>

<h1 class="display-5">Display 5</h1>

<h1 class="display-6">Display 6</h1>
`;
  const headingsCode = `
<!-- Headings -->
<h1 class="mb-3">h1. Bootstrap heading <small class="text-muted">Semibold 2.03125rem (32.5px)</small></h1>

<h2 class="mb-3">h2. Bootstrap heading <small class="text-muted">Semibold 1.625rem (26px)</small></h2>

<h3 class="mb-3">h3. Bootstrap heading <small class="text-muted">Semibold 1.42188rem (22.8px)</small></h3>

<h4 class="mb-3">h4. Bootstrap heading <small class="text-muted">Semibold 1.21875rem (19.5px)</small></h4>

<h5 class="mb-3">h5. Bootstrap heading <small class="text-muted">Semibold 1.01563rem (16.25px)</small></h5>

<h6 class="mb-1">h6. Bootstrap heading <small class="text-muted">Semibold 0.8125rem (13px)</small></h6>
`;
  const blockquotesCode = `
<!-- Blockquotes -->
<blockquote class="blockquote fs-14">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

<blockquote class="blockquote blockquote-reverse fs-14">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
`;
  const blockquoteColorCode = `
<!-- Blockquote Background Color -->
<blockquote class="blockquote custom-blockquote blockquote-primary rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Primary Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-secondary rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Secondary Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-success rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Success Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-info rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Info Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-danger rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Danger Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-warning rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Warning Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-dark rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Dark Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>
`;
  const blockquoteBorderColorCode = `
<!-- Blockquote Border Color -->
<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Primary Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Secondary Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Success Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Info Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Danger Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Warning Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote class="blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0">
    <p class="text-dark mb-2">Custom Blockquote Outline Dark Example</p>
    <footer class="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>
`;
  const inlineTextCode = `
<!-- Inline Text -->
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

<p>You can use the mark tag to <mark>highlight</mark> text.</p>

<p><del>This line of text is meant to be treated as deleted text.</del></p>

<p><s>This line of text is meant to be treated as no longer accurate.</s></p>

<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>

<p><u>This line of text will render as underlined</u></p>

<p><small>This line of text is meant to be treated as fine print.</small></p>

<p><strong>This line rendered as bold text.</strong></p>

<p><em>This line rendered as italicized text.</em></p>
`;
  const unstyleListCode = `
<!-- Unstyle List -->
<ul class="list-unstyled">
    <li>Integer molestie lorem at massa</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
</ul>
`;
  const inlineListCode = `
<!-- Inline List -->
<ul class="list-inline">
    <li class="list-inline-item">Lorem ipsum</li>
    <li class="list-inline-item">Phasellus iaculis</li>
    <li class="list-inline-item">Nulla volutpat</li>
</ul>
`;
  const descriptionListCode = `
<!-- Description List -->
<dl class="row mb-0">
    <dt class="col-sm-3">Description lists</dt>
    <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

    <dt class="col-sm-3">Euismod</dt>
    <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

    <dt class="col-sm-3">Malesuada porta</dt>
    <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

    <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

    <dt class="col-sm-3">Nesting</dt>
    <dd class="col-sm-9 mb-0">
        <dl class="row mb-0">
            <dt class="col-sm-4">Nested definition list</dt>
            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
    </dd>
</dl>
`;
  const textWrappingCode = `
<!-- Text Wrap -->
<Badge color="primary" class="text-wrap" style="width: 6rem">
    This text should wrap.
</Badge>

<!-- Text nowrap -->
<div class="text-nowrap border bg-light mt-3" style="width: 8rem">
    This text should overflow the parent.
</div>
`;
  const fontSizeCode = `
<!-- Font size -->
<p class="fs-1">.fs-1 text</p>

<p class="fs-2">.fs-2 text</p>

<p class="fs-3">.fs-3 text</p>

<p class="fs-4">.fs-4 text</p>

<p class="fs-5">.fs-5 text</p>

<p class="fs-6">.fs-6 text</p>
`;
  const wordBreakCode = `
<!-- Word Break -->
<p class="text-break mb-0">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>;
`;
  const fontWeightCode = `
<!-- Font weight and italics -->
<p class="fw-bold">Bold text.</p>

<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>

<p class="fw-normal">Normal weight text.</p>

<p class="fw-light">Light weight text.</p>

<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>

<p class="fst-italic">Italic text.</p>

<p class="fst-normal mb-0">Text with normal font style</p>
`;
  const lineHeightCode = `
<!-- Line height -->
<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>

<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>

<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>

<p class="lh-lg mb-0">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>
`;
  const textTransformCode = `
<!-- Text Transform -->
<p class="text-lowercase">Lowercased text.</p>

<p class="text-uppercase">Uppercased text.</p>

<p class="text-capitalize mb-0">CapiTaliZed text.</p>
`;
  const textDecrationCode = `
<!-- Text Decoration -->
<p class="text-decoration-underline">This text has a line underneath it.</p>

<p class="text-decoration-line-through">This text has a line going through it.</p>

<Link href="#!" class="text-decoration-none">This link has its text decoration removed</Link>
`;
  const textTruncationCode = `
<!-- Block level -->
<Row>
    <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
    </div>
</Row>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px">
    This text is quite long, and will be truncated once displayed.
</span>
`;
  const visibilityCode = `
<!-- Visibility -->
<div class="visible">text visible Lorem ipsum dolor sit amet</div>

<div class="invisible">text invisible Lorem ipsum dolor sit amet</div>
`;
  const clearfixCode = `
<!-- Clearfix -->
<div class="bg-light clearfix">
    <Button color="secondary" class="float-start">Example Button floated left</Button>
    <Button color="success" class="float-end">Example Button floated right</Button>
</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Typography | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Typography",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Font Family</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted"}"><p>Body Font Family</p>
										<div><p class="${"display-4 text-dark fw-medium"}">Aa
											</p></div>
										<div><p class="${"mb-2"}">Font Family</p>
											<h5 class="${"mb-0"}">&quot;Poppins&quot;, sans-serif
											</h5></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted mt-4 mt-sm-0"}"><p>Heading Font Family</p>
										<div><h1 class="${"display-4 text-dark fw-medium"}">Aa
											</h1></div>
										<div><p class="${"mb-2"}">Font Family</p>
											<h5 class="${"mb-0"}">&quot;Poppins&quot;, sans-serif
											</h5></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Headings" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">All HTML headings, <code>&lt;h1&gt;</code> through
							<code>&lt;h6&gt;</code>, are available.
						</p>

						<div class="${"live-preview"}"><h1 class="${"mb-3"}">h1. Bootstrap heading <small class="${"text-muted"}">Semibold 2.03125rem (32.5px)</small></h1>
							<h2 class="${"mb-3"}">h2. Bootstrap heading <small class="${"text-muted"}">Semibold 1.625rem (26px)</small></h2>
							<h3 class="${"mb-3"}">h3. Bootstrap heading <small class="${"text-muted"}">Semibold 1.42188rem (22.8px)</small></h3>
							<h4 class="${"mb-3"}">h4. Bootstrap heading <small class="${"text-muted"}">Semibold 1.21875rem (19.5px)</small></h4>
							<h5 class="${"mb-3"}">h5. Bootstrap heading <small class="${"text-muted"}">Semibold 1.01563rem (16.25px)</small></h5>
							<h6 class="${"mb-1"}">h6. Bootstrap heading <small class="${"text-muted"}">Semibold 0.8125rem (13px)</small></h6></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: headingsCode, id: "headingsCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Display Headings" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Traditional heading elements are designed to work
							best in the meat of your page content.
						</p>

						<div class="${"live-preview"}"><h1 class="${"display-1 mb-4"}">Display 1</h1>
							<h1 class="${"display-2 mb-4"}">Display 2</h1>
							<h1 class="${"display-3 mb-4"}">Display 3</h1>
							<h1 class="${"display-4 mb-4"}">Display 4</h1>
							<h1 class="${"display-5 mb-4"}">Display 5</h1>
							<h1 class="${"display-6 mb-0"}">Display 6</h1></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: displayHeadingCode,
                        id: "displayHeadingCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Blockquotes" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>&lt;blockquote class=&quot;blockquote&quot;&gt;</code> class for quoting blocks of content from another source
							within your document .
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><blockquote class="${"blockquote fs-14 mb-0"}"><p>Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Integer posuere erat a ante.
											</p>
											<footer class="${"blockquote-footer mt-0"}">Someone famous in <cite title="${"Source Title"}">Source Title</cite></footer></blockquote></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><blockquote class="${"blockquote blockquote-reverse fs-14 mb-0"}"><p>Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Integer posuere erat a ante.
											</p>
											<footer class="${"blockquote-footer mt-0"}">Someone famous in <cite title="${"Source Title"}">Source Title</cite></footer></blockquote></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: blockquotesCode,
                        id: "blockquotesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Blockquote Background Color" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted text-muted"}">Use <code>blockquote-</code> class with the below-mentioned
							color variation to set the blockquote background color.
						</p>
						<div class="${"live-preview"}"><div class="${"row gy-4"}"><div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-primary rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Primary Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-secondary rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Secondary Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-success rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Success Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-info rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Info Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-danger rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Danger Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-warning rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Warning Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-dark rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Dark Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: blockquoteColorCode,
                        id: "blockquoteColorCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Blockquote Border Color" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted text-muted"}">Use <code>blockquote-outline</code> class to set blockquote
							border color.
						</p>
						<div class="${"live-preview"}"><div class="${"row gy-4"}"><div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Primary
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Secondary
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Success
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Info
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Danger
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Warning
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div>

								<div class="${"col-xl-4 col-md-6"}"><blockquote class="${"blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0"}"><p class="${"text-dark mb-2"}">Custom Blockquote Outline Dark
											Example
										</p>
										<footer class="${"blockquote-footer mt-0"}">Angie Burt <cite title="${"Source Title"}">Designer</cite></footer></blockquote></div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: blockquoteBorderColorCode,
                        id: "blockquoteBorderColorCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Inline Text Elements" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Styling for inline HTML5 elements.
						</p>
						<div class="${"live-preview"}"><p class="${"lead"}">Vivamus sagittis lacus vel augue laoreet rutrum
								faucibus dolor auctor.
							</p>
							<p>You can use the mark tag to <mark>highlight</mark> text.
							</p>
							<p><del>This line of text is meant to be treated as
									deleted text.</del></p>
							<p><s>This line of text is meant to be treated as
									no longer accurate.</s></p>
							<p><ins>This line of text is meant to be treated as
									an addition to the document.</ins></p>
							<p><u>This line of text will render as underlined</u></p>
							<p><small>This line of text is meant to be treated as
									fine print.</small></p>
							<p><strong>This line rendered as bold text.</strong></p>
							<p class="${"mb-0"}"><em>This line rendered as italicized text.</em></p></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: inlineTextCode,
                        id: "inlineTextCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Unstyled List" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>list-unstyled</code> class Remove the
							default list-style and left margin on list items
							(immediate children only).
							<strong>This only applies to immediate children list
								items</strong>, meaning you will need to add the class for any
							nested lists.
						</p>

						<div class="${"live-preview"}"><ul class="${"list-unstyled mb-0"}"><li>Integer molestie lorem at massa</li>
								<li>Nulla volutpat aliquam velit
									<ul><li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem
										</li></ul></li>
								<li>Faucibus porta lacus fringilla vel</li></ul></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: unstyleListCode,
                        id: "unstyleListCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Inline List" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>list-inline</code> and
							<code>list-inline-item</code> class combination to remove
							a list\u2019s bullets and apply some light margin.
						</p>

						<div class="${"live-preview"}"><ul class="${"list-inline mb-0"}"><li class="${"list-inline-item"}">Lorem ipsum</li>
								<li class="${"list-inline-item"}">Phasellus iaculis
								</li>
								<li class="${"list-inline-item"}">Nulla volutpat</li></ul></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: inlineListCode,
                        id: "inlineListCode"
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
          return `<div class="${"col-xl-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Description List Alignment" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted"}">Align terms and descriptions horizontally by using
							our grid system\u2019s predefined classes (or semantic
							mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.
						</p>

						<div class="${"live-preview"}"><dl class="${"row mb-0"}"><dt class="${"col-sm-3"}">Description lists</dt><dd class="${"col-sm-9"}">A description list is perfect for defining
									terms.
								</dd><dt class="${"col-sm-3"}">Euismod</dt><dd class="${"col-sm-9"}">Vestibulum id ligula porta felis euismod
									semper eget lacinia odio sem nec elit.
								</dd><dd class="${"col-sm-9 offset-sm-3"}">Donec id elit non mi porta gravida at eget
									metus.
								</dd><dt class="${"col-sm-3"}">Malesuada porta</dt><dd class="${"col-sm-9"}">Etiam porta sem malesuada magna mollis
									euismod.
								</dd><dt class="${"col-sm-3 text-truncate"}">Truncated term is truncated
								</dt><dd class="${"col-sm-9"}">Fusce dapibus, tellus ac cursus commodo,
									tortor mauris condimentum nibh, ut fermentum
									massa justo sit amet risus.
								</dd><dt class="${"col-sm-3"}">Nesting</dt><dd class="${"col-sm-9 mb-0"}"><dl class="${"row mb-0"}"><dt class="${"col-sm-4"}">Nested definition list
										</dt><dd class="${"col-sm-8"}">Aenean posuere, tortor sed cursus
											feugiat, nunc augue blandit nunc.
										</dd></dl></dd></dl></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                    code: descriptionListCode,
                    id: "descriptionListCode"
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Text Wrapping and Overflow" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div><p class="${"text-muted"}">Use <code>text-wrap</code> class to wrap the
									text.
								</p>
								${validate_component(Badge, "Badge").$$render($$result, {
                        color: "primary",
                        class: "text-wrap",
                        style: "width: 6rem"
                      }, {}, {
                        default: () => {
                          return `This text should wrap.
								`;
                        }
                      })}</div>
							<div class="${"mt-4"}"><p class="${"text-muted"}">Use <code>text-nowrap</code> class to prevent
									text from wrapping.
								</p>
								<div class="${"text-nowrap border bg-light mt-3"}" style="${"width: 8rem"}">This text should overflow the parent.
								</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: textWrappingCode,
                        id: "textWrappingCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Word Break" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div><p class="${"text-muted"}">Use <code>text-break</code> class to prevent
									long strings of text from breaking your components&#39;
									layout.
								</p>
								<p class="${"text-break mb-0"}">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
								</p></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: wordBreakCode, id: "wordBreakCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Font size" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>fs-1</code>, <code>fs-2</code>,
							<code>fs-3</code>, <code>fs-4</code>,
							<code>fs-5</code>, or <code>fs-6</code>, class to
							change the font-size respectively.
						</p>
						<div class="${"live-preview"}"><p class="${"fs-1"}">.fs-1 text</p>
							<p class="${"fs-2"}">.fs-2 text</p>
							<p class="${"fs-3"}">.fs-3 text</p>
							<p class="${"fs-4"}">.fs-4 text</p>
							<p class="${"fs-5"}">.fs-5 text</p>
							<p class="${"fs-6"}">.fs-6 text</p></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: fontSizeCode, id: "fontSizeCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Font weight and italics" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>fst-</code>with modifier class to change
							font-style and Use
							<code>fw-</code>with modifier class to change
							font-weight.
						</p>

						<div class="${"live-preview"}"><p class="${"fw-bold"}">Bold text.</p>
							<p class="${"fw-bolder"}">Bolder weight text (relative to the parent
								element).
							</p>
							<p class="${"fw-semibold"}">Semibold weight text.</p>
							<p class="${"fw-normal"}">Normal weight text.</p>
							<p class="${"fw-light"}">Light weight text.</p>
							<p class="${"fw-lighter"}">Lighter weight text (relative to the parent
								element).
							</p>
							<p class="${"fst-italic"}">Italic text.</p>
							<p class="${"fst-normal mb-0"}">Text with normal font style
							</p></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: fontWeightCode,
                        id: "fontWeightCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Line height" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>lh-</code> with modifier class to change the
							line height of an element.
						</p>

						<div class="${"live-preview"}"><p class="${"lh-1"}">This is a long paragraph written to show how the
								line-height of an element is affected by our
								utilities. Classes are applied to the element
								itself or sometimes the parent element. These
								classes can be customized as needed with our
								utility API.
							</p>
							<p class="${"lh-sm"}">This is a long paragraph written to show how the
								line-height of an element is affected by our
								utilities. Classes are applied to the element
								itself or sometimes the parent element. These
								classes can be customized as needed with our
								utility API.
							</p>
							<p class="${"lh-base"}">This is a long paragraph written to show how the
								line-height of an element is affected by our
								utilities. Classes are applied to the element
								itself or sometimes the parent element.
							</p>
							<p class="${"lh-lg mb-0"}">This is a long paragraph written to show how the
								line-height of an element is affected by our
								utilities. Classes are applied to the element
								itself or sometimes the parent element.
							</p></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: lineHeightCode,
                        id: "lineHeightCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Text Transform" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>text-lowercase</code>,
							<code>text-uppercase</code>, or
							<code>text-capitalize</code> to transform the text.
						</p>
						<div class="${"live-preview"}"><p class="${"text-lowercase"}">Lowercased text.</p>
							<p class="${"text-uppercase"}">Uppercased text.</p>
							<p class="${"text-capitalize mb-0"}">CapiTaliZed text.
							</p></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: textTransformCode,
                        id: "textTransformCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Text Decoration" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>text-decoration-underline</code>,
							<code>text-decoration-line-through</code>, or
							<code>text-decoration-none</code> class to decorate text
							in components respectively.
						</p>
						<div class="${"live-preview"}"><p class="${"text-decoration-underline"}">This text has a line underneath it.
							</p>
							<p class="${"text-decoration-line-through"}">This text has a line going through it.
							</p>
							${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "text-decoration-none"
                      }, {}, {
                        default: () => {
                          return `This link has its text decoration removed`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: textDecrationCode,
                        id: "textDecrationCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Text Truncation" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>text-truncate</code> class to truncate the
							text with an ellipsis. Requires
							<code>display: inline-block</code>
							or <code>display: block</code>.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div class="${"col-2 text-truncate"}">This text is quite long, and will be
									truncated once displayed.
								</div>`;
                        }
                      })}

							<span class="${"d-inline-block text-truncate"}" style="${"max-width:150px"}">This text is quite long, and will be truncated
								once displayed.
							</span></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: textTruncationCode,
                        id: "textTruncationCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Visibility" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>visible</code> or <code>invisible</code> class
							to show or to hide elements respectively.
						</p>

						<div class="${"live-preview"}"><div class="${"visible"}">text visible Lorem ipsum dolor sit amet
							</div>
							<div class="${"invisible"}">text invisible Lorem ipsum dolor sit amet
							</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: visibilityCode,
                        id: "visibilityCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Clearfix" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>clearfix</code> class to clear/set floated
							content within a container.
						</p>
						<div class="${"live-preview"}"><div class="${"bg-light clearfix p-3"}">${validate_component(Button, "Button").$$render($$result, { color: "secondary", class: "float-start" }, {}, {
                        default: () => {
                          return `Example Button floated left`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", class: "float-end" }, {}, {
                        default: () => {
                          return `Example Button floated right`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: clearfixCode, id: "clearfixCode" }, {}, {})}</div>`;
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
export { Uitypography as default };
