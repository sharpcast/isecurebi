import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"contact"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h3 class="${"mb-3 fw-semibold"}">Get In Touch</h3>
                    <p class="${"text-muted mb-4 ff-secondary"}">We thrive when coming up with innovative ideas but also
                        understand that a smart concept should be supported with faucibus sapien odio measurable
                        results.</p></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `<div><div class="${"mt-4"}"><h5 class="${"fs-13 text-muted text-uppercase"}">Office Address 1:</h5>
                        <div class="${"ff-secondary fw-semibold"}">4461 Cedar Street Moro, <br>AR 72368</div></div>
                    <div class="${"mt-4"}"><h5 class="${"fs-13 text-muted text-uppercase"}">Office Address 2:</h5>
                        <div class="${"ff-secondary fw-semibold"}">2467 Swick Hill Street <br>New Orleans, LA</div></div>
                    <div class="${"mt-4"}"><h5 class="${"fs-13 text-muted text-uppercase"}">Working Hours:</h5>
                        <div class="${"ff-secondary fw-semibold"}">9:00am to 6:00pm</div></div></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div>${validate_component(Form, "Form").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
                            htmlfor: "name",
                            class: "form-label fs-13"
                          }, {}, {
                            default: () => {
                              return `Name`;
                            }
                          })}
                                    <input name="${"name"}" id="${"name"}" type="${"text"}" class="${"form-control bg-light border-light"}" placeholder="${"Your name*"}"></div>`;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
                            htmlfor: "email",
                            class: "form-label fs-13"
                          }, {}, {
                            default: () => {
                              return `Email`;
                            }
                          })}
                                    <input name="${"email"}" id="${"email"}" type="${"email"}" class="${"form-control bg-light border-light"}" placeholder="${"Your email*"}"></div>`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                        default: () => {
                          return `<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
                            htmlfor: "subject",
                            class: "form-label fs-13"
                          }, {}, {
                            default: () => {
                              return `Subject`;
                            }
                          })}
                                    <input type="${"text"}" class="${"form-control bg-light border-light"}" id="${"subject"}" name="${"subject"}" placeholder="${"Your Subject.."}"></div>`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            htmlfor: "comments",
                            class: "form-label fs-13"
                          }, {}, {
                            default: () => {
                              return `Message`;
                            }
                          })}
                                    <textarea name="${"comments"}" id="${"comments"}" rows="${"3"}" class="${"form-control bg-light border-light"}" placeholder="${"Your message..."}"></textarea></div>`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12, class: "text-end" }, {}, {
                        default: () => {
                          return `<input type="${"submit"}" id="${"submit"}" name="${"send"}" class="${"submitBnt btn btn-primary"}" value="${"Send Message"}">`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Contact as default };
