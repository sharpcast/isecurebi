import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../../chunks/Table-b6431bfe.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { c as company6 } from "../../../../chunks/img-6-7ff883ab.js";
import { M as MOCK_DATA } from "../../../../chunks/appsJobs-3a727122.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-7-4861de06.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/mail_chimp-a5132002.js";
import "../../../../chunks/bitbucket-59cc1b30.js";
const CompaniesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Companies List | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "container-fluid" }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Companies", pageTitle: "Job" }, {}, {})}
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { xxl: 5, sm: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control search bg-light border-light",
                                    id: "searchCompany",
                                    placeholder: "Search for company, industry type..."
                                  }, {}, {})}
                      <i class="${"ri-search-line search-icon"}"></i></div>`;
                                }
                              })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
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
                                  return `<div class="${"input-light"}"><select class="${"form-control"}" name="${"choices-single-default"}" id="${"idType"}"><option value="${"all"}" defaultvalue>All
                        </option><option value="${"Full Time"}">Full Time</option><option value="${"Part Time"}">Part Time</option><option value="${"Intership"}">Intership</option><option value="${"Freelance"}">Freelance</option></select></div>`;
                                }
                              })}

                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 4 }, {}, {
                                default: () => {
                                  return `<button type="${"button"}" class="${"btn btn-success w-100"}"><i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>${escape(" ")}
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
              })}

          ${validate_component(Row, "Row").$$render($$result, {
                class: "job-list-row",
                id: "companies-list"
              }, {}, {
                default: () => {
                  return `${each(MOCK_DATA.jobCompanies, (item) => {
                    return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, { class: "card companiesList-card" }, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                              default: () => {
                                return `<div class="${"avatar-sm mx-auto"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", item.image_src, 0)} alt="${""}" class="${"avatar-xxs companyLogo-img"}">
                      </div></div>
                    <div class="${"text-center"}"><a href="${"#!"}"><h5 class="${"mt-3 company-name"}">${escape(item.lable)}</h5></a>
                      <div class="${"d-none company-desc"}">${escape(item.company_info)}</div>
                      <p class="${"text-muted industry-type"}">${escape(item.industry_type)}</p>
                      <div class="${"d-none"}"><span class="${"employee"}">${escape(item.employee)}</span>
                        <span class="${"location"}">${escape(item.location)}</span>
                        <span class="${"rating"}">${escape(item.rating)}</span>
                        <span class="${"website"}">${escape(item.website)}</span>
                        <span class="${"email"}">${escape(item.email)}</span>
                        <span class="${"since"}">${escape(item.since)}</span>
                      </div></div>
                    <div><button type="${"button"}" class="${"btn btn-soft-primary w-100 viewcompany-list"}"><span class="${"vacancy"}">${escape(item.vacancy)}</span> Jobs
                        Available
                      </button></div>
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
                  return `${validate_component(Col, "Col").$$render($$result, { sm: "6" }, {}, {
                    default: () => {
                      return `<div class="${"pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><div class="${"page-item"}">${validate_component(NavLink, "NavLink").$$render($$result, {
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
                <div class="${"page-item"}">${validate_component(NavLink, "NavLink").$$render($$result, {
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
              })}`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "company-overview" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"avatar-lg mx-auto mb-3"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", company6, 0)} alt="${""}" class="${"avatar-sm company-logo"}"></div></div>

              <div class="${"text-center"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<h5 class="${"overview-companyname"}">Syntyce Solutions
                  </h5>`;
                        }
                      })}
                <p class="${"text-muted overview-industryType"}">IT Department
                </p>

                <ul class="${"list-inline mb-0"}"><li class="${"list-inline-item avatar-xs"}">${validate_component(NavLink, "NavLink").$$render($$result, {
                        href: "",
                        class: "avatar-title bg-soft-success text-success fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-global-line"}"></i>`;
                        }
                      })}</li>
                  <li class="${"list-inline-item avatar-xs"}">${validate_component(NavLink, "NavLink").$$render($$result, {
                        href: "",
                        class: "avatar-title bg-soft-danger text-danger fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-mail-line"}"></i>`;
                        }
                      })}</li>
                  <li class="${"list-inline-item avatar-xs"}">${validate_component(NavLink, "NavLink").$$render($$result, {
                        href: "",
                        class: "avatar-title bg-soft-warning text-warning fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-question-answer-line"}"></i>`;
                        }
                      })}</li></ul></div>`;
                    }
                  })}

            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Information
              </h6>
              <p class="${"text-muted mb-4 overview-companydesc"}">The IT department of NavLink company ensures that the
                network of computers within the organisation are
                well-connected and functioning properly. All the other
                departments within the company rely on them to ensure that
                their respective functions can go on seamlessly.
              </p>

              <div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, { class: "table table-borderless mb-4" }, {}, {
                        default: () => {
                          return `<tbody><tr><td class="${"fw-medium"}">Industry Type</td>
                      <td class="${"overview-industryType"}">Chemical Industries
                      </td></tr>
                    <tr><td class="${"fw-medium"}">Location</td>
                      <td class="${"overview-company_location"}">Damascus, Syria
                      </td></tr>
                    <tr><td class="${"fw-medium"}">Employee</td>
                      <td class="${"overview-employee"}">10-50</td></tr>
                    <tr><td class="${"fw-medium"}">Vacancy</td>
                      <td class="${"overview-vacancy"}">23</td></tr>
                    <tr><td class="${"fw-medium"}">Rating</td>
                      <td><span class="${"overview-rating"}">4.8</span>${escape(" ")}
                        <i class="${"ri-star-fill text-warning align-bottom"}"></i></td></tr>
                    <tr><td class="${"fw-medium"}">Website</td>
                      <td>${validate_component(NavLink, "NavLink").$$render($$result, {
                            href: "",
                            class: "link-primary text-decoration-underline overview-website"
                          }, {}, {
                            default: () => {
                              return `www.syntycesolution.com
                        `;
                            }
                          })}</td></tr>
                    <tr><td class="${"fw-medium"}">Contact Email</td>
                      <td class="${"overview-email"}">info@syntycesolution.com
                      </td></tr>
                    <tr><td class="${"fw-medium"}">Since</td>
                      <td class="${"overview-since"}">1995</td></tr></tbody>`;
                        }
                      })}</div>

              <div class="${"hstack gap-3"}"><button type="${"button"}" class="${"btn btn-soft-success custom-toggle w-100"}" data-bs-toggle="${"button"}"><span class="${"icon-on"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Follow
                  </span>
                  <span class="${"icon-off"}"><i class="${"ri-user-unfollow-line align-bottom me-1"}"></i>${escape(" ")}
                    Unfollow
                  </span></button>
                <a href="${"#!"}" class="${"btn btn-primary w-100"}">More View${escape(" ")}
                  <i class="${"ri-arrow-right-line align-bottom"}"></i></a></div>`;
                    }
                  })}`;
                }
              })}

          ${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden shadow-none" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-danger" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle fs-17"}"><i class="${"ri-gift-line"}"></i></div></div></div>
                <div class="${"flex-grow-1 ms-2"}"><h6 class="${"fs-16"}">Free trial</h6>
                  <p class="${"text-muted mb-0"}">28 days left</p></div>
                <div><a href="${"/pages/pricing/pages-pricing"}" class="${"btn btn-danger"}">Upgrade
                  </a></div></div>`;
                    }
                  })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "bg-soft-danger border-top border-danger border-opacity-25 border-top-dashed"
                  }, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        href: "#!",
                        class: "d-flex justify-content-between align-items-center text-body"
                      }, {}, {
                        default: () => {
                          return `<span>See benefits</span>
                <i class="${"ri-arrow-right-s-line fs-18"}"></i>`;
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
export { CompaniesList as default };
