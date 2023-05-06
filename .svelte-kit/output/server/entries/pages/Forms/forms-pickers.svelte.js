import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
const Forms_pickers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Pickers | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Pickers", pageTitle: "Forms" }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Flatpickr - Datepicker</h4>`;
                    }
                  })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Basic`;
                                    }
                                  })}
                    ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: { dateFormat: "d M, Y" }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `DateTime`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      dateFormat: "Y-m-d H:i"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Human-Friendly Dates`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control flatpickr-input",
                                    options: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      dateFormat: "Y-m-d"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `MinDate and MaxDate`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      minDate: "today",
                                      maxDate: new Date().fp_incr(14)
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Default Date`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      dateFormat: "Y-m-d",
                                      defaultDate: ["2022-01-20"]
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Disabling Dates`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      disable: [
                                        "2022-01-30",
                                        "2022-02-21",
                                        "2022-03-08",
                                        new Date(2025, 4, 9)
                                      ],
                                      dateFormat: "Y-m-d"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Selecting Multiple Dates`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: { mode: "multiple", dateFormat: "Y-m-d" }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Range`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: { mode: "range", dateFormat: "Y-m-d" }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Inline`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: { inline: true, dateFormat: "Y-m-d" }
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
                      return `<h4 class="${"card-title mb-0"}">Flatpickr - Timepicker</h4>`;
                    }
                  })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Timepicker`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      noCalendar: true,
                                      dateFormat: "H:i"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `24-hour Time Picker`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      noCalendar: true,
                                      dateFormat: "H:i",
                                      time_24hr: true
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Time Picker w/ Limits`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      noCalendar: true,
                                      dateFormat: "H:i",
                                      minTime: "16:00",
                                      maxTime: "22:30"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Preloading Time`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      noCalendar: true,
                                      dateFormat: "H:i",
                                      defaultDate: "13:45"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mt-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                                    default: () => {
                                      return `Inline`;
                                    }
                                  })}
                      ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    options: {
                                      enableTime: true,
                                      noCalendar: true,
                                      inline: true
                                    }
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
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Forms_pickers as default };
