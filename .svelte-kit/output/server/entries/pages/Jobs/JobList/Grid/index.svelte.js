import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../../chunks/DropdownToggle-396a8e94.js";
import { F as Form } from "../../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../../chunks/Input-db5b479a.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../../../chunks/Flatpickr-9498e32b.js";
import { M as MOCK_DATA } from "../../../../../chunks/appsJobs-3a727122.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import "../../../../../chunks/popper-e421ff0f.js";
import "../../../../../chunks/index-bddc6f42.js";
import "../../../../../chunks/img-2-d003c89a.js";
import "../../../../../chunks/img-4-f8adc4d4.js";
import "../../../../../chunks/img-7-4861de06.js";
import "../../../../../chunks/img-5-9ef0dff2.js";
import "../../../../../chunks/img-2-674a1784.js";
import "../../../../../chunks/img-3-127a32b6.js";
import "../../../../../chunks/img-4-5ac753e7.js";
import "../../../../../chunks/img-6-7ff883ab.js";
import "../../../../../chunks/img-7-06bdf5b0.js";
import "../../../../../chunks/img-8-ebcd4c34.js";
import "../../../../../chunks/img-9-995f69e7.js";
import "../../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../../chunks/avatar-7-46aa251f.js";
import "../../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../../chunks/slack-e58caefb.js";
import "../../../../../chunks/mail_chimp-a5132002.js";
import "../../../../../chunks/bitbucket-59cc1b30.js";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Job Grid | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}"><div class="${"container-fluid"}">${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
    title: "Job Grid Lists",
    pageTitle: "Jobs"
  }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-light" }, {}, {
                default: () => {
                  return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, sm: 12 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search bg-light border-light",
                                id: "searchJob",
                                autoComplete: "off",
                                placeholder: "Search for jobs or companies..."
                              }, {}, {})}
                      <i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 4 }, {}, {
                            default: () => {
                              return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                class: "form-control",
                                id: "datepicker-publish-input",
                                placeholder: "Select a date",
                                options: {
                                  altInput: true,
                                  altFormat: "F j, Y",
                                  mode: "multiple",
                                  dateFormat: "d.m.y"
                                }
                              }, {}, {})}`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"input-light"}"><select class="${"form-control"}" data-choices data-choices-search-false name="${"choices-idType"}" id="${"idType"}"><option value="${"all"}" defaultvalue>All
                        </option><option value="${"Full Time"}">Full Time</option><option value="${"Part Time"}">Part Time</option><option value="${"Intership"}">Intership</option><option value="${"Freelance"}">Freelance</option></select></div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 4 }, {}, {
                            default: () => {
                              return `<div class="${"input-light"}"><select class="${"form-control"}" data-choices data-choices-search-false name="${"choices-single-default"}" id="${"idStatus"}"><option value="${"all"}" defaultvalue>All
                        </option><option value="${"Active"}">Active</option><option value="${"New"}">New</option><option value="${"Close"}">Close</option></select></div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 1, sm: 4 }, {}, {
                            default: () => {
                              return `<button type="${"button"}" class="${"btn btn-primary w-100"}"><i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>${escape(" ")}
                      Filters
                    </button>`;
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
          return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><p class="${"text-muted fs-14 mb-0"}">Result: <span id="${"total-result"}">7</span></p></div>
            <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "dropdown" }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn text-muted fs-14 dropdown-toggle p-0",
                href: "#!",
                role: "button",
                tag: "button",
                type: "button",
                color: ""
              }, {}, {
                default: () => {
                  return `All View
                `;
                }
              })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                class: "dropdown-menu",
                "aria-labelledby": "dropdownMenuLink"
              }, {}, {
                default: () => {
                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                    default: () => {
                      return `Action
                    `;
                    }
                  })}</li>
                  <li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                    default: () => {
                      return `Another action
                    `;
                    }
                  })}</li>
                  <li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                    default: () => {
                      return `Something else here
                    `;
                    }
                  })}</li>`;
                }
              })}`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

      ${validate_component(Row, "Row").$$render($$result, { id: "job-list" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 3, md: 6, id: "job-widget" }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100 bg-info bg-job" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-5" }, {}, {
                default: () => {
                  return `<h2 class="${"lh-base text-white"}">Velzon invites young professionals for an intership!
                    </h2>
                    <p class="${"text-white-75 mb-0 fs-14"}">Don&#39;t miss your opportunity to improve your skills!
                    </p>
                    <div class="${"mt-5 pt-2"}"><button type="${"button"}" class="${"btn btn-light w-100"}">View More${escape(" ")}
                        <i class="${"ri-arrow-right-line align-bottom"}"></i></button></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

            ${each(MOCK_DATA.jobGrid, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { lg: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<button type="${"button"}" class="${"btn btn-icon btn-soft-primary float-end"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button>
                    <div class="${"avatar-sm mb-4"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", item.companyLogo, 0)} alt="${""}" class="${"avatar-xxs"}">
                    </div></div>
                    ${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                      default: () => {
                        return `<h5>${escape(item.jobTitle)}</h5>
                    `;
                      }
                    })}
                    <p class="${"text-muted"}">${escape(item.companyName)}</p>
                    <div class="${"d-flex gap-4 mb-3"}"><div><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                        ${escape(item.location)}</div>
                    <div><i class="${"ri-time-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                        ${escape(item.postDate)}
                    </div></div>
                    <p class="${"text-muted"}">${escape(item.description)}</p>
                    <div class="${"hstack gap-2"}">${each(item.requirement, (subItem) => {
                      return `${subItem === "Full Time" ? `<span class="${"badge badge-soft-success"}">${escape(subItem)}</span>` : `${subItem === "Freelance" ? `<span class="${"badge badge-soft-primary"}">${escape(subItem)}</span>` : `<span class="${"badge badge-soft-danger"}">${escape(subItem)}</span>`}`}`;
                    })}</div>
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
                      href: "/apps-job-details",
                      class: "btn btn-soft-success w-100"
                    }, {}, {
                      default: () => {
                        return `Overview
                    `;
                      }
                    })}</div>
                `;
                  }
                })}
                `;
              }
            })}
            `;
          }
        })}`;
      })}`;
    }
  })}

      ${validate_component(Row, "Row").$$render($$result, {
    class: "g-0 justify-content-end mb-4",
    id: "pagination-element"
  }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
        default: () => {
          return `<div class="${"pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><div class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "page-link",
            id: "page-prev"
          }, {}, {
            default: () => {
              return `Previous
              `;
            }
          })}</div>
            <span id="${"page-num"}" class="${"pagination"}"></span>
            <div class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "page-link",
            id: "page-next"
          }, {}, {
            default: () => {
              return `Next
              `;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { Grid as default };
