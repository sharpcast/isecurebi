import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
const NewJob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>New Job | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "container-fluid" }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "New Job", pageTitle: "Jobs" }, {}, {})}

        ${validate_component(Row, "Row").$$render($$result, { class: "row" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "card" }, {}, {
                default: () => {
                  return `${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                    default: () => {
                      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-header" }, {}, {
                        default: () => {
                          return `<h5 class="${"card-title mb-0"}">Create Job</h5>`;
                        }
                      })}
                        ${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "row g-4" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "job-title-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Job Title <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "job-title-Input",
                                    placeholder: "Enter job title",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "job-position-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Job Position <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "job-position-Input",
                                    placeholder: "Enter job position",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "job-category-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Job Category <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        <select class="${"form-control"}" data-choices name="${"job-category-Input"}" required><option value="${""}">Select Category</option><option value="${"Accounting & Finance"}">Accounting &amp; Finance
                                            </option><option value="${"Purchasing Manager"}">Purchasing Manager
                                            </option><option value="${"Education & training"}">Education &amp; training
                                            </option><option value="${"Marketing & Advertising"}">Marketing &amp; Advertising
                                            </option><option value="${"It / Software Jobs"}">It / Software Jobs
                                            </option><option value="${"Digital Marketing"}">Digital Marketing
                                            </option><option value="${"Administrative Officer"}">Administrative Officer
                                            </option><option value="${"Government Jobs"}">Government Jobs
                                            </option></select></div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "job-type-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Job Type <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        <select class="${"form-control"}" data-choices name="${"job-type-Input"}" required><option value="${""}">Select job type</option><option value="${"Full Time"}">Full Time</option><option value="${"Part Time"}">Part Time</option><option value="${"Freelance"}">Freelance</option><option value="${"Intership"}">Intership</option></select></div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-12" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "description-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Description <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        <textarea class="${"form-control"}" id="${"description-field"}" rows="${"3"}" placeholder="${"Enter description"}" required></textarea></div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "vancancy-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `No. of Vancancy${escape(" ")}
                                            <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "vancancy-Input",
                                    placeholder: "No. of vancancy",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "experience-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Experience <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        <select class="${"form-control"}" data-choices name="${"experience-Input"}"><option value="${""}">Select Experience</option><option value="${"0 Year"}">0 Year</option><option value="${"2 Yeasr"}">2 Years</option><option value="${"3 Years"}">3 Years</option><option value="${"4 Years"}">4 Years</option><option value="${"5 Years"}">5 Years</option></select></div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "last-apply-date-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Last Date of Apply${escape(" ")}
                                            <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    id: "datepicker-publish-input",
                                    placeholder: "Select a date",
                                    options: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      mode: "multiple",
                                      dateFormat: "d.m.y"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "close-date-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Close Date <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    id: "datepicker-publish-input",
                                    placeholder: "Select a date",
                                    options: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      mode: "multiple",
                                      dateFormat: "d.m.y"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "start-salary-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Start Salary
                                        `;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "start-salary-Input",
                                    placeholder: "Enter start salary",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "last-salary-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Last Salary
                                        `;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "last-salary-Input",
                                    placeholder: "Enter end salary",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "country-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Country <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "country-Input",
                                    placeholder: "Enter country",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-6" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "city-Input",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `State <span class="${"text-danger"}">*</span>`;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "city-Input",
                                    placeholder: "Enter city",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-12" }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "website-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Tags
                                        `;
                                    }
                                  })}
                                        ${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control",
                                    id: "choices-text-unique-values",
                                    "data-choices": true,
                                    "data-choices-text-unique-true": true,
                                    type: "text",
                                    defaultValue: "Design, Remote",
                                    required: true
                                  }, {}, {})}</div>`;
                                }
                              })}

                                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-12" }, {}, {
                                default: () => {
                                  return `<div class="${"hstack justify-content-end gap-2"}"><button type="${"button"}" class="${"btn btn-ghost-danger"}"><i class="${"ri-close-line align-bottom"}"></i>${escape(" ")}
                                            Cancel
                                        </button>
                                        <button type="${"submit"}" class="${"btn btn-primary"}">Add Job
                                        </button></div>`;
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
      })}`;
    }
  })}</div>`;
});
export { NewJob as default };
