import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../../chunks/Collapse-6781eb46.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
var faqimg = "/_app/assets/faq-img-bb0203dd.png";
const Pages_faqs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>FAQs | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "mb-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {
                class: "rounded-0 bg-soft-success mx-n4 mt-n4 border-top"
              }, {}, {
                default: () => {
                  return `<div class="${"px-4"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xxl: 5, class: "align-self-center" }, {}, {
                        default: () => {
                          return `<div class="${"py-4"}"><h4 class="${"display-6 coming-soon-text"}">Frequently asked questions</h4>
									<p class="${"text-success fs-15 mt-3"}">If you can not find answer to your question in our FAQ, you can always contact
										us or email us. We will answer you shortly!
									</p>
									<div class="${"hstack flex-wrap gap-2"}"><button type="${"button"}" class="${"btn btn-primary btn-label rounded-pill"}"><i class="${"ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"}"></i>
											Email Us</button>
										<button type="${"button"}" class="${"btn btn-info btn-label rounded-pill"}"><i class="${"ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"}"></i>
											Send Us Tweet</button></div></div>`;
                        }
                      })}
							${validate_component(Col, "Col").$$render($$result, { xxl: 3, class: "ms-auto" }, {}, {
                        default: () => {
                          return `<div class="${"mb-n5 pb-1 faq-img d-none d-xxl-block"}"><img${add_attribute("src", faqimg, 0)} alt="${""}" class="${"img-fluid"}"></div>`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}

				${validate_component(Row, "Row").$$render($$result, { class: "justify-content-evenly" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div class="${"mt-3"}"><div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0 me-1"}"><i class="${"ri-question-line fs-24 align-middle text-success me-1"}"></i></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-16 mb-0 fw-semibold"}">General Questions</h5></div></div>

							<div class="${"accordion accordion-border-box"}" id="${"genques-accordion"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"genques-headingOne"}"><button class="${"accordion-button"}" type="${"button"}" id="${"genques-collapseOne"}">What is Lorem Ipsum ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "genques-collapseOne",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">If several languages coalesce, the grammar of the resulting language is more
											simple and regular than that of the individual languages. The new common
											language will be more simple and regular than the existing European languages.
											It will be as simple their most common words.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"genques-headingTwo"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"genques-collapseTwo"}">Why do we use it ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#genques-collapseTwo",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">The new common language will be more simple and regular than the existing
											European languages. It will be as simple as Occidental; in fact, it will be
											Occidental. To an English person, it will seem like simplified English, as a
											skeptical Cambridge friend of mine told me what Occidental is.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"genques-headingThree"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"genques-collapseThree"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#genques-collapseThree",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">he wise man therefore always holds in these matters to this principle of
											selection: he rejects pleasures to secure other greater pleasures, or else he
											endures pains to avoid worse pains.But I must explain to you how all this
											mistaken idea of denouncing pleasure and praising pain was born and I will
											give you a complete.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"genques-headingFour"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"genques-collapseFour"}">Where can I get some ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#genques-collapseFour",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis
											in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
											consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>`;
                    }
                  })}

					${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div class="${"mt-3"}"><div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0 me-1"}"><i class="${"ri-user-settings-line fs-24 align-middle text-success me-1"}"></i></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-16 mb-0 fw-semibold"}">Manage Account</h5></div></div>

							<div class="${"accordion accordion-border-box"}" id="${"manageaccount-accordion"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"manageaccount-headingOne"}"><button class="${"accordion-button collapsed"}" type="${"button"}" data-bs-toggle="${"collapse"}" id="${"manageaccount-collapseOne"}" aria-expanded="${"false"}" aria-controls="${"manageaccount-collapseOne"}">Where can I get some ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#manageaccount-collapseOne",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">If several languages coalesce, the grammar of the resulting language is more
											simple and regular than that of the individual languages. The new common
											language will be more simple and regular than the existing European languages.
											It will be as simple their most common words.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"manageaccount-headingTwo"}"><button class="${"accordion-button"}" type="${"button"}" id="${"manageaccount-collapseTwo"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#manageaccount-collapseTwo",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">The new common language will be more simple and regular than the existing
											European languages. It will be as simple as Occidental; in fact, it will be
											Occidental. To an English person, it will seem like simplified English, as a
											skeptical Cambridge friend of mine told me what Occidental is.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"manageaccount-headingThree"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"manageaccount-collapseThree"}">Why do we use it ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "manageaccount-collapseThree",
                        class: "accordion-collapse",
                        "aria-labelledby": "manageaccount-headingThree",
                        "data-bs-parent": "#manageaccount-accordion"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">he wise man therefore always holds in these matters to this principle of
											selection: he rejects pleasures to secure other greater pleasures, or else he
											endures pains to avoid worse pains.But I must explain to you how all this
											mistaken idea of denouncing pleasure and praising pain was born and I will
											give you a complete.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"manageaccount-headingFour"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"manageaccount-collapseFour"}">What is Lorem Ipsum ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#manageaccount-collapseFour",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis
											in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
											consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>`;
                    }
                  })}

					${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div class="${"mt-3"}"><div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0 me-1"}"><i class="${"ri-shield-keyhole-line fs-24 align-middle text-success me-1"}"></i></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-16 mb-0 fw-semibold"}">Privacy &amp; Security</h5></div></div>

							<div class="${"accordion accordion-border-box"}" id="${"privacy-accordion"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"privacy-headingOne"}"><button class="${"accordion-button"}" type="${"button"}" id="${"privacy-collapseOne"}">Why do we use it ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#privacy-collapseOne",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">If several languages coalesce, the grammar of the resulting language is more
											simple and regular than that of the individual languages. The new common
											language will be more simple and regular than the existing European languages.
											It will be as simple their most common words.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"privacy-headingTwo"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"privacy-collapseTwo"}">Where can I get some ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#privacy-collapseTwo",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">The new common language will be more simple and regular than the existing
											European languages. It will be as simple as Occidental; in fact, it will be
											Occidental. To an English person, it will seem like simplified English, as a
											skeptical Cambridge friend of mine told me what Occidental is.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"privacy-headingThree"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"privacy-collapseThree"}">What is Lorem Ipsum ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#privacy-collapseThree",
                        class: "accordion-collapse",
                        "aria-labelledby": "privacy-headingThree",
                        "data-bs-parent": "#privacy-accordion"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">he wise man therefore always holds in these matters to this principle of
											selection: he rejects pleasures to secure other greater pleasures, or else he
											endures pains to avoid worse pains.But I must explain to you how all this
											mistaken idea of denouncing pleasure and praising pain was born and I will
											give you a complete.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"privacy-headingFour"}"><button class="${"accordion-button collapsed"}" type="${"button"}" id="${"privacy-collapseFour"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#privacy-collapseFour",
                        class: "accordion-collapse",
                        "aria-labelledby": "privacy-headingFour",
                        "data-bs-parent": "#privacy-accordion"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis
											in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
											consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>`;
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
export { Pages_faqs as default };
