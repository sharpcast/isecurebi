import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
const Forms_advanced = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultCounter = 5;
  let lightCounter = 5;
  let fullwidthCounter = 5;
  let lfullwidthCounter = 5;
  let blueCounter = 5;
  let skyCounter = 5;
  let greenCounter = 5;
  let tealCounter = 5;
  let yellowCounter = 5;
  let redCounter = 5;
  return `${$$result.head += `${$$result.title = `<title>Form Advanced | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Form Advanced",
        pageTitle: "Forms"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Form Input Spin</h4>`;
                    }
                  })}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div>${validate_component(Row, "Row").$$render($$result, { class: "gy-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 fw-medium text-muted"}">Default</h5>
										<div class="${"input-step"}"><button type="${"button"}" class="${"minus"}">\u2013
											</button>
											${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "product-quantity",
                                value: defaultCounter,
                                min: "0",
                                max: "100",
                                readOnly: true
                              }, {}, {})}
											<button type="${"button"}" class="${"plus"}">+
											</button></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 fw-medium text-muted"}">Light</h5>
										<div class="${"input-step light"}"><button type="${"button"}" class="${"minus"}">\u2013
											</button>
											${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "product-quantity",
                                value: lightCounter,
                                min: "0",
                                max: "100",
                                readOnly: true
                              }, {}, {})}
											<button type="${"button"}" class="${"plus"}">+
											</button></div></div>`;
                            }
                          })}`;
                        }
                      })}

							<div class="${"mt-4 pt-2"}">${validate_component(Row, "Row").$$render($$result, { class: "gy-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 fw-medium text-muted"}">Default (Full width)</h5>
											<div class="${"input-step full-width"}"><button type="${"button"}" class="${"minus"}">\u2013
												</button>
												${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "product-quantity",
                                value: fullwidthCounter,
                                min: "0",
                                max: "100",
                                readOnly: true
                              }, {}, {})}
												<button type="${"button"}" class="${"plus"}">+
												</button></div></div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-13 fw-medium text-muted"}">Light (Full width)</h5>
											<div class="${"input-step full-width light"}"><button type="${"button"}" class="${"minus"}">\u2013
												</button>
												${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "product-quantity",
                                value: lfullwidthCounter,
                                min: "0",
                                max: "100",
                                readOnly: true
                              }, {}, {})}
												<button type="${"button"}" class="${"plus"}">+
												</button></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

							${validate_component(Row, "Row").$$render($$result, { class: "mt-4 pt-2" }, {}, {
                        default: () => {
                          return `<h5 class="${"fs-13 fw-medium text-muted"}">Colored</h5>
								<div class="${"d-flex flex-wrap align-items-start gap-2"}"><div class="${"input-step step-primary"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: blueCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div>
									<div class="${"input-step step-secondary"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: skyCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div>
									<div class="${"input-step step-success"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: greenCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div>
									<div class="${"input-step step-info"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: tealCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div>
									<div class="${"input-step step-warning"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: yellowCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div>
									<div class="${"input-step step-danger"}"><button type="${"button"}" class="${"minus"}">\u2013
										</button>
										${validate_component(Input, "Input").$$render($$result, {
                            type: "number",
                            class: "product-quantity",
                            value: redCounter,
                            min: "0",
                            max: "100",
                            readOnly: true
                          }, {}, {})}
										<button type="${"button"}" class="${"plus"}">+
										</button></div></div>`;
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
    }
  })}</div>`;
});
export { Forms_advanced as default };
