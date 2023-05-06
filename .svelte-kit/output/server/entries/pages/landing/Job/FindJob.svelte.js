import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../../chunks/Tooltip-8300c9d3.js";
import { M as MOCK_DATA } from "../../../../chunks/jobLanding-03c3f263.js";
import { c as company1, a as company5 } from "../../../../chunks/img-5-9ef0dff2.js";
import { c as cimg2 } from "../../../../chunks/img-2-674a1784.js";
import { i as img7 } from "../../../../chunks/img-7-06bdf5b0.js";
import { c as company8 } from "../../../../chunks/img-8-ebcd4c34.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-9-995f69e7.js";
const FindJob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"findJob"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-7" }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h1 class="${"mb-3 ff-secondary fw-semibold text-capitalize lh-base"}">Find Your <span class="${"text-primary"}">Career</span> You
              Deserve it
            </h1>
            <p class="${"text-muted"}">Post a job to tell us about your project. We&#39;ll quickly match you with the right freelancers.
            </p></div>`;
            }
          })}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.findJob, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6" }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "shadow-lg" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-warning rounded"}"><img${add_attribute("src", item.company, 0)} alt="${""}" class="${"avatar-xxs"}">
                    </div></div>
                  <div class="${"ms-3 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                          default: () => {
                            return `<h5>${escape(item.lable)}</h5>
                    `;
                          }
                        })}
                    <ul class="${"list-inline text-muted mb-3"}"><li class="${"list-inline-item"}"><i class="${"ri-building-line align-bottom me-1"}"></i>${escape(" ")}
                        ${escape(item.name)}</li>
                      <li class="${"list-inline-item"}"><i class="${"ri-map-pin-2-line align-bottom me-1"}"></i>${escape(" ")}
                        ${escape(item.location)}</li>
                      <li class="${"list-inline-item"}"><i class="${"ri-money-dollar-circle-line align-bottom me-1"}"></i>${escape(" ")}
                        ${escape(item.salary)}
                      </li></ul>
                    <div class="${"hstack gap-2"}"><span${add_attribute("class", "badge badge-soft-" + item.s1[1], 0)}>${escape(item.s1[0])}</span>
                      <span${add_attribute("class", "badge badge-soft-" + item.s2[1], 0)}>${escape(item.s2[0])}</span>
                      ${item.s3 ? `<span${add_attribute("class", "badge badge-soft-" + item.s3[1], 0)}>${escape(item.s3[0])}
                        </span>` : ``}
                    </div></div>
                  <div><button type="${"button"}" class="${"btn btn-ghost-primary btn-icon custom-toggle"}" data-bs-toggle="${"button"}"><span class="${"icon-on"}"><i class="${"ri-bookmark-line"}"></i></span>
                      <span class="${"icon-off"}"><i class="${"ri-bookmark-fill"}"></i>
                      </span></button>
                  </div></div>
              `;
                      }
                    })}
            `;
                  }
                })}
          `;
              }
            })}`;
          })}

        <div class="${"col-lg-12"}"><div class="${"text-center mt-4"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-ghost-primary"
          }, {}, {
            default: () => {
              return `View More Jobs${escape(" ")}
              <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}</section>
  <section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-6 order-2 order-lg-1" }, {}, {
            default: () => {
              return `<div class="${"text-muted mt-5 mt-lg-0"}"><h5 class="${"fs-12 text-uppercase text-success"}">Hot Featured Company
            </h5>
            <h1 class="${"mb-3 ff-secondary fw-bold text-capitalize lh-base"}">Get <span class="${"text-primary"}">10,000+</span> Featured
              Companies
            </h1>
            <p class="${"ff-secondary mb-2"}">The demand for content writing services is growing. This is
              because content is required in almost every industry.${escape(" ")}
              <b>Many companies have discovered how effective content
                marketing is.
              </b>${escape(" ")}
              This is Link major reason for this increase in demand.
            </p>
            <p class="${"mb-4 ff-secondary"}">A Content Writer is Link professional who writes
              informative and engaging articles to help brands showcase
              their products.
            </p>

            <div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/dashboard",
                class: "btn btn-primary"
              }, {}, {
                default: () => {
                  return `View More Companies${escape(" ")}
                <i class="${"ri-arrow-right-line align-middle ms-1"}"></i>`;
                }
              })}</div></div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, {
            class: "col-lg-4 col-sm-7 col-10 ms-lg-auto mx-auto order-1 order-lg-2"
          }, {}, {
            default: () => {
              return `<div>${validate_component(Card, "Card").$$render($$result, { class: "shadow-lg" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<button type="${"button"}" class="${"btn btn-icon btn-soft-primary float-end"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button>
                <div class="${"avatar-sm mb-4"}"><div class="${"avatar-title bg-soft-secondary rounded"}"><img${add_attribute("src", company1, 0)} alt="${""}" class="${"avatar-xxs"}"></div></div>
                ${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<h5>New Web designer</h5>`;
                        }
                      })}
                <p class="${"text-muted"}">Themesbrand</p>

                <div class="${"d-flex gap-4 mb-3"}"><div><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                    Escondido,California
                  </div>

                  <div><i class="${"ri-time-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                    3 min ago
                  </div></div>

                <p class="${"text-muted"}">As NavLink Product Designer, you will work within NavLink
                  Product Delivery Team fused with UX, engineering, product
                  and data talent.
                </p>

                <div class="${"hstack gap-2"}"><span class="${"badge badge-soft-success"}">Full Time
                  </span>
                  <span class="${"badge badge-soft-primary"}">Freelance
                  </span>
                  <span class="${"badge badge-soft-danger"}">Urgent</span></div>

                <div class="${"mt-4 hstack gap-2"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "btn btn-soft-primary w-100"
                      }, {}, {
                        default: () => {
                          return `Apply Job
                  `;
                        }
                      })}
                  ${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "btn btn-soft-success w-100"
                      }, {}, {
                        default: () => {
                          return `Overview
                  `;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}
            ${validate_component(Card, "Card").$$render($$result, {
                class: "shadow-lg mb-0 features-company-widgets rounded-3 card-bg-fill"
              }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"text-white fs-16 mb-4"}">10,000+ Featured Companies
                </h5>

                <div class="${"d-flex gap-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", id: "abc" }, {}, {
                        default: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "abc" }, {}, {
                            default: () => {
                              return `Brent Gonzalez
                    `;
                            }
                          })}
                    <div class="${"avatar-xs"}"><div class="${"avatar-title bg-light bg-opacity-25 rounded-circle"}"><img${add_attribute("src", company5, 0)} alt="${""}" height="${"15"}"></div></div>`;
                        }
                      })}
                  ${validate_component(Link, "Link").$$render($$result, { href: "#!", id: "abs" }, {}, {
                        default: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "abs" }, {}, {
                            default: () => {
                              return `Brent Gonzalez
                    `;
                            }
                          })}
                    <div class="${"avatar-xs"}"><div class="${"avatar-title bg-light bg-opacity-25 rounded-circle"}"><img${add_attribute("src", cimg2, 0)} alt="${""}" height="${"15"}"></div></div>`;
                        }
                      })}
                  ${validate_component(Link, "Link").$$render($$result, { href: "#!", id: "brent" }, {}, {
                        default: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "brent" }, {}, {
                            default: () => {
                              return `Brent Gonzalez
                    `;
                            }
                          })}
                    <div class="${"avatar-xs"}"><div class="${"avatar-title bg-light bg-opacity-25 rounded-circle"}"><img${add_attribute("src", company8, 0)} alt="${""}" height="${"15"}"></div></div>`;
                        }
                      })}
                  ${validate_component(Link, "Link").$$render($$result, { href: "#!", id: "ellen" }, {}, {
                        default: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "ellen" }, {}, {
                            default: () => {
                              return `Ellen Smith
                    `;
                            }
                          })}
                    <div class="${"avatar-xs"}"><div class="${"avatar-title bg-light bg-opacity-25 rounded-circle"}"><img${add_attribute("src", img7, 0)} alt="${""}" height="${"15"}"></div></div>`;
                        }
                      })}
                  ${validate_component(Link, "Link").$$render($$result, { href: "#!", id: "more" }, {}, {
                        default: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
                            default: () => {
                              return `More Companies
                    `;
                            }
                          })}
                    <div class="${"avatar-xs"}"><div class="${"avatar-title fs-11 rounded-circle bg-light bg-opacity-25 text-white"}">1k+
                      </div></div>`;
                        }
                      })}</div>`;
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
export { FindJob as default };
