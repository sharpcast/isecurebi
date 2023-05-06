import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
const Forms_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const SingleOptions = [
    { value: "Choices 1", label: "Choices 1" },
    { value: "Choices 2", label: "Choices 2" },
    { value: "Choices 3", label: "Choices 3" },
    { value: "Choices 4", label: "Choices 4" }
  ];
  const GroupOptions = [
    {
      label: "UK",
      options: [
        { label: "London", value: "London" },
        { label: "Manchester", value: "Manchester" },
        { label: "Liverpool", value: "Liverpool" }
      ]
    },
    {
      label: "FR",
      options: [
        { label: "Paris", value: "Paris" },
        { label: "Lyon", value: "Lyon" },
        { label: "Marseille", value: "Marseille" }
      ]
    },
    {
      label: "DE",
      options: [
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
        { label: "Berlin", value: "Berlin" }
      ]
    },
    {
      label: "US",
      options: [
        { label: "New York", value: "New York" },
        { label: "Washington", value: "Washington" },
        { label: "Michigan", value: "Michigan" }
      ]
    },
    {
      label: "SP",
      options: [
        { label: "Madrid", value: "Madrid" },
        { label: "Barcelona", value: "Barcelona" },
        { label: "Malaga", value: "Malaga" }
      ]
    },
    {
      label: "CA",
      options: [
        { label: "Montreal", value: "Montreal" },
        { label: "Toronto", value: "Toronto" },
        { label: "Vancouver", value: "Vancouver" }
      ]
    }
  ];
  const GroupOptions2 = [
    { value: "Zero", label: "Zero" },
    { value: "Two", label: "Two" },
    { value: "Four", label: "Four" },
    { value: "One", label: "One" },
    { value: "Five", label: "Five" },
    { value: "Three", label: "Three" },
    { value: "Six", label: "Six" }
  ];
  const noSortingGroup = [
    { value: "Madrid", label: "Madrid" },
    { value: "Toronto", label: "Toronto" },
    { value: "Vancouver", label: "Vancouver" },
    { value: "London", label: "London" },
    { value: "Manchester", label: "Manchester" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Paris", label: "Paris" },
    { value: "Malaga", label: "Malaga" },
    { value: "Washington", label: "Washington" },
    { value: "Lyon", label: "Lyon" },
    { value: "Marseille", label: "Marseille" },
    { value: "Hamburg", label: "Hamburg" },
    { value: "Munich", label: "Munich" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Berlin", label: "Berlin" },
    { value: "Montreal", label: "Montreal" },
    { value: "New York", label: "New York" },
    { value: "Michigan", label: "Michigan" }
  ];
  const options = [
    {
      label: "josh@joshuajohnson.co.uk",
      value: 1,
      disabled: true
    },
    {
      label: "joe@bloggs.co.uk",
      value: 2,
      disabled: true
    }
  ];
  const DefaultSelect = `<Row>
<Col lg={6}>
    <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Select your Status </option>
        <option>Declined Payment</option>
        <option>Delivery Error</option>
        <option>Wrong Amount</option>
    </select>
</Col>
<Col lg={6}>
    <select class="form-select rounded-pill mb-3" aria-label="Default select example">
        <option selected>Search for services</option>
        <option>Information Architecture</option>
        <option>UI/UX Design</option>
        <option>Back End Development</option>
    </select>
</Col>
<Col lg={6}>
    <select class="form-select" aria-label="Disabled select example" disabled>
        <option selected>Open this select menu (Disabled)</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
    </select>
</Col>
</Row>
`;
  const MenuSize = `<Row>
    <Col lg={6}>
        <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Select your Status </option>
            <option>Declined Payment</option>
            <option>Delivery Error</option>
            <option>Wrong Amount</option>
        </select>
    </Col>
    <Col lg={6}>
        <select class="form-select rounded-pill mb-3" aria-label="Default select example">
            <option selected>Search for services</option>
            <option>Information Architecture</option>
            <option>UI/UX Design</option>
            <option>Back End Development</option>
        </select>
    </Col>
    <Col lg={6}>
        <select class="form-select" aria-label="Disabled select example" disabled>
            <option selected>Open this select menu (Disabled)</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </Col>
    </Row>
    `;
  const SelectSize = `<Row>
    <Col lg={6}>
        <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Select your Status </option>
            <option>Declined Payment</option>
            <option>Delivery Error</option>
            <option>Wrong Amount</option>
        </select>
    </Col>
    <Col lg={6}>
        <select class="form-select rounded-pill mb-3" aria-label="Default select example">
            <option selected>Search for services</option>
            <option>Information Architecture</option>
            <option>UI/UX Design</option>
            <option>Back End Development</option>
        </select>
    </Col>
    <Col lg={6}>
        <select class="form-select" aria-label="Disabled select example" disabled>
            <option selected>Open this select menu (Disabled)</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </Col>
    </Row>
    `;
  return `${$$result.head += `${$$result.title = `<title>Form Select | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}"><div class="${"container-fluid"}">${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Form Select", pageTitle: "Forms" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Select" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<select class="${"form-select mb-3"}" aria-label="${"Default select example"}"><option selected value="${"Select your Status\n										"}">Select your Status
										</option><option value="${"1"}">Declined Payment</option><option value="${"2"}">Delivery Error</option><option value="${"3"}">Wrong Amount</option></select>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<select class="${"form-select rounded-pill mb-3"}" aria-label="${"Default select example"}"><option selected value="${"Search for services"}">Search for services</option><option value="${"1"}">Information Architecture</option><option value="${"2"}">UI/UX Design</option><option value="${"3"}">Back End Development</option></select>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<select class="${"form-select"}" aria-label="${"Disabled select example"}" disabled><option selected value="${"Open this select menu (Disabled)"}">Open this select menu (Disabled)</option><option value="${"1"}">One</option><option value="${"2"}">Two</option><option value="${"3"}">Three</option></select>`;
                        }
                      })}`;
                    }
                  })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: DefaultSelect, id: "defaultSelect" }, {}, {})}</div>`;
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
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Menu Size" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "gy-4" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<select class="${"form-select"}" multiple aria-label="${"multiple select example"}"><option selected value="${"Open this select menu (multiple\n											select option)"}">Open this select menu (multiple
											select option)</option><option value="${"One"}">One</option><option value="${"Two"}">Two</option><option value="${"Three"}">Three</option></select>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<select class="${"form-select"}" size="${"3"}" aria-label="${"size 3 select example"}"><option selected value="${"Open this select menu (select menu\n											size)"}">Open this select menu (select menu
											size)</option><option value="${"One"}">One</option><option value="${"Two"}">Two</option><option value="${"Three"}">Three</option><option value="${"Four"}">Four</option><option value="${"Five"}">Five</option></select>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: MenuSize, id: "formmenuSize" }, {}, {})}</div>`;
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
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Select Size" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted"}">Use <code>form-select-sm</code> class to set small
							select size and
							<code>form-select-lg</code> class to form-select class
							to set large select size. No such class is required for
							default select size.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                        default: () => {
                          return `<select class="${"form-select form-select-sm"}" aria-label="${".form-select-sm example"}"><option selected value="${"Open this select menu"}">Open this select menu</option><option value="${"1"}">One</option><option value="${"2"}">Two</option><option value="${"3"}">Three</option></select>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                        default: () => {
                          return `<select class="${"form-select"}" aria-label="${".form-select-sm example"}"><option selected value="${"Open this select menu"}">Open this select menu</option><option value="${"One"}">One</option><option value="${"Two"}">Two</option><option value="${"Three"}">Three</option></select>`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                        default: () => {
                          return `<select class="${"form-select form-select-lg"}" aria-label="${".form-select-lg example"}"><option selected value="${"Open this select menu"}">Open this select menu</option><option value="${"One"}">One</option><option value="${"Two"}">Two</option><option value="${"Three"}">Three</option></select>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: SelectSize, id: "formselectSize" }, {}, {})}</div>`;
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
                  return `<h4 class="${"card-title mb-0"}">Choices</h4>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-single-default",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Default`;
                            }
                          })}
											<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, { items: SingleOptions }, {}, {})}</div></div>`;
                        }
                      })}

									${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-single-groups",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Option Groups`;
                            }
                          })}
											<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, { items: GroupOptions }, {}, {})}</div></div>`;
                        }
                      })}

									${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-single-no-search",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Options added via config with
												no search`;
                            }
                          })}
											<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, { isClearable: true, items: GroupOptions2 }, {}, {})}</div></div>`;
                        }
                      })}

									${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-single-no-sorting",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Options added via config with
												no sorting`;
                            }
                          })}
											<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, { items: noSortingGroup }, {}, {})}</div></div>`;
                        }
                      })}`;
                    }
                  })}</div>

							<div class="${"mt-4"}"><h5 class="${"fs-14 mb-3"}">Multiple select input
								</h5>
								${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-multiple-default",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Default`;
                            }
                          })}
											${validate_component(Select, "Select").$$render($$result, { isMulti: true, items: SingleOptions }, {}, {})}</div>`;
                        }
                      })}

									${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-multiple-remove-button",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `With remove button`;
                            }
                          })}
											${validate_component(Select, "Select").$$render($$result, {
                            isMulti: true,
                            isClearable: true,
                            items: SingleOptions
                          }, {}, {})}</div>`;
                        }
                      })}

									${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-multiple-groups",
                            class: "form-label text-muted"
                          }, {}, {
                            default: () => {
                              return `Option groups`;
                            }
                          })}
											${validate_component(Select, "Select").$$render($$result, {
                            isMulti: true,
                            items: GroupOptions,
                            closeMenuOnSelect: false
                          }, {}, {})}</div>`;
                        }
                      })}`;
                    }
                  })}</div>

							<div class="${"mt-4"}"><div>${validate_component(Label, "Label").$$render($$result, {
                    for: "choices-text-disabled",
                    class: "form-label text-muted"
                  }, {}, {
                    default: () => {
                      return `Disabled`;
                    }
                  })}
									${validate_component(Select, "Select").$$render($$result, {
                    id: "dropdown",
                    items: options,
                    isOptionDisabled: (option) => option.disabled
                  }, {}, {})}</div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { Forms_select as default };
