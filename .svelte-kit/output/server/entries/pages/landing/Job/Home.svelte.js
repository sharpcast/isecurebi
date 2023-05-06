import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../../chunks/Tooltip-8300c9d3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar9 } from "../../../../chunks/avatar-9-f5d371f4.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/Portal-94847a25.js";
var JobProfile2 = "/_app/assets/job-profile2-4b74f953.png";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section job-hero-section bg-light pb-0"}" id="${"hero"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {
        class: "justify-content-between align-items-center"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `<div><h1 class="${"display-6 fw-bold text-capitalize mb-3 lh-base"}">Find your next job and build your dream here
            </h1>
            <p class="${"lead text-muted lh-base mb-4"}">Find jobs, create trackable resumes and enrich your
              applications. Carefully crafted after analyzing the needs of
              different industries.
            </p>
            ${validate_component(Form, "Form").$$render($$result, { action: "#", class: "job-panel-filter" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-md-0 g-2" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { class: "col-md-4" }, {}, {
                        default: () => {
                          return `<div>${validate_component(Input, "Input").$$render($$result, {
                            type: "search",
                            id: "job-title",
                            class: "form-control filter-input-box",
                            placeholder: "Job, Company name..."
                          }, {}, {})}</div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-4" }, {}, {
                        default: () => {
                          return `<div><select class="${"form-control"}" data-choices><option value="${""}">Select job type</option><option value="${"Full Time"}">Full Time</option><option value="${"Part Time"}">Part Time</option><option value="${"Freelance"}">Freelance</option><option value="${"Intership"}">Intership</option></select></div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { class: "col-md-4" }, {}, {
                        default: () => {
                          return `<div class="${"h-100"}"><button class="${"btn btn-primary submit-btn w-100 h-100"}" type="${"submit"}"><i class="${"ri-search-2-line align-bottom me-1"}"></i>${escape(" ")}
                      Find Job
                    </button></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}

            <ul class="${"treding-keywords list-inline mb-0 mt-3 fs-13"}"><li class="${"list-inline-item text-danger fw-semibold"}"><i class="${"mdi mdi-tag-multiple-outline align-middle"}"></i>${escape(" ")}
                Trending Keywords:
              </li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `Design,
                `;
                }
              })}</li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `Development,
                `;
                }
              })}</li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `Manager,
                `;
                }
              })}</li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `Senior
                `;
                }
              })}</li></ul></div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `<div class="${"position-relative home-img text-center mt-5 mt-lg-0"}">${validate_component(Card, "Card").$$render($$result, {
                class: "card-bg-fill p-3 rounded shadow-lg inquiry-box"
              }, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-warning text-warning rounded fs-18"}"><i class="${"ri-mail-send-line"}"></i></div></div>
                <h5 class="${"fs-15 lh-base mb-0"}">Work Inquiry from velzon
                </h5></div>`;
                }
              })}

            ${validate_component(Card, "Card").$$render($$result, {
                class: "card-bg-fill p-3 rounded shadow-lg application-box"
              }, {}, {
                default: () => {
                  return `<h5 class="${"fs-15 lh-base mb-3"}">Applications</h5>
              <div class="${"avatar-group"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    id: "brent"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "brent" }, {}, {
                        default: () => {
                          return `Brent Gonzalez
                  `;
                        }
                      })}
                  <div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>`;
                    }
                  })}
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item ",
                    id: "ellen"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "ellen" }, {}, {
                        default: () => {
                          return `Ellen Smith
                  `;
                        }
                      })}
                  <div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-danger"}">S
                    </div></div>`;
                    }
                  })}
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    id: "smith"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "smith" }, {}, {
                        default: () => {
                          return `Ellen Smith
                  `;
                        }
                      })}
                  <div class="${"avatar-xs"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>`;
                    }
                  })}
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    "data-bs-toggle": "tooltip",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "top"
                  }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-success"}">Z
                    </div></div>`;
                    }
                  })}
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    id: "gonzalez"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "gonzalez" }, {}, {
                        default: () => {
                          return `Brent Gonzalez
                  `;
                        }
                      })}
                  <div class="${"avatar-xs"}"><img${add_attribute("src", avatar9, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>`;
                    }
                  })}
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    id: "more"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
                        default: () => {
                          return `More Appliances
                  `;
                        }
                      })}
                  <div class="${"avatar-xs"}"><div class="${"avatar-title fs-13 rounded-circle bg-light border-dashed border text-primary"}">2k+
                    </div></div>`;
                    }
                  })}</div>`;
                }
              })}
            <img${add_attribute("src", JobProfile2, 0)} alt="${""}" class="${"user-img"}">

            <div class="${"circle-effect"}"><div class="${"circle"}"></div>
              <div class="${"circle2"}"></div>
              <div class="${"circle3"}"></div>
              <div class="${"circle4"}"></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Home as default };
