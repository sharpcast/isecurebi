import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
const Advance_ui_highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const htmlHighlightCode = `<!DOCTYPE html>
<html>
    <head>
        {document.title ="Velzon - Responsive Admin Dashboard Template"}
    </head>
    <body>
        <div>
            <h1>This is a Heading 1</h1>
            <h2>This is a Heading 2</h2>
            <h3>This is a Heading 3</h3>
            <h4>This is a Heading 4</h4>
        </div>
        <!-- end div content -->
    </body>
</html>
`;
  const cssHighlightCode = `body {
    color: #212529; 
    background-color: #f3f3f9;
    font-family: "Poppins",sans-serif;
}

.example {
    margin: 0;
    color: #74788d; 
}
`;
  const javaScriptCode = `function myFunction() {
    var divElement = document.getElementById("myDIV");
    if (divElement.style.display === "none") {
      divElement.style.display = "block";
    } else {
      divElement.style.display = "none";
    }
}
`;
  return `${$$result.head += `${$$result.title = `<title>Highlight | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Highlight",
        pageTitle: "Advance UI"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h4 class="${"card-title mb-0"}">HTML Highlight</h4></div>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">HTML highlight is used to mark or highlight text
							that is of property, relevance, or special interest
							to an HTML document. here is the example shown
							below.
						</p>

						<div class="${"live-preview"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: htmlHighlightCode,
                        id: "htmlHighlightCode"
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
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h4 class="${"card-title mb-0"}">CSS Highlight</h4></div>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">CSS highlight is used to mark or highlight text that
							is of property, relevance, or special interest to a
							CSS document. Here is the example shown below.
						</p>
						<div class="${"live-preview"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: cssHighlightCode,
                        id: "cssHighlightCode"
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
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1"}"><h4 class="${"card-title mb-0"}">Javascript Highlight
							</h4></div>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Javascript highlight is used to mark or highlight
							text that is of property, relevance, or special
							interest to a Javascript document. Here is the
							example shown below.
						</p>
						<div class="${"live-preview"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: javaScriptCode,
                        id: "javaScriptCode"
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
export { Advance_ui_highlight as default };
