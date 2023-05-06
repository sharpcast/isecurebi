import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { i as img10 } from "../../../../../chunks/img-10-09bc0399.js";
import { i as img7 } from "../../../../../chunks/img-7-06bdf5b0.js";
import AppSummary from "./AppSummary.svelte.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../../chunks/appsJobs-3a727122.js";
import "../../../../../chunks/img-2-d003c89a.js";
import "../../../../../chunks/img-4-f8adc4d4.js";
import "../../../../../chunks/img-7-4861de06.js";
import "../../../../../chunks/img-5-9ef0dff2.js";
import "../../../../../chunks/img-2-674a1784.js";
import "../../../../../chunks/img-3-127a32b6.js";
import "../../../../../chunks/img-4-5ac753e7.js";
import "../../../../../chunks/img-6-7ff883ab.js";
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
var perPage = 8;
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const candidatelist = [
    {
      id: "1",
      name: "Tonya Noble",
      designation: "Web Designer",
      location: "Cullera, Spain",
      type: "Part Time",
      rating: "4.2",
      ratingCount: "2.2k",
      bookmark: "true"
    },
    {
      id: "2",
      name: "Nicholas Ball",
      designation: "Assistant / Store Keeper",
      location: "San Lorenzo",
      type: "Full Time",
      rating: "4.1",
      ratingCount: "1.72k",
      bookmark: "true"
    },
    {
      id: "3",
      name: "Zynthia Marrow",
      designation: "Assistant / Store Keeper",
      location: "Cullera, Spain",
      type: "Freelancer",
      rating: "4.0",
      ratingCount: "42.5k",
      bookmark: "false"
    },
    {
      id: "4",
      name: "Philippa Santiago",
      designation: "Project Manager ",
      location: "Ugashik, US",
      type: "Part Time",
      rating: "4.3",
      ratingCount: "15k",
      bookmark: "true"
    },
    {
      id: "5",
      name: "Elizabeth Allen",
      designation: "Education Training ",
      location: "Zuweihir, UAE",
      type: "Freelancer",
      rating: "3.5",
      ratingCount: "7.3k",
      bookmark: "false"
    },
    {
      id: "6",
      name: "Cassian Jenning",
      designation: "Graphic Designer ",
      location: "Limestone, US",
      type: "Part Time",
      rating: "4.3",
      ratingCount: "13.2k",
      bookmark: "false"
    },
    {
      id: "7",
      name: "Scott Holt",
      designation: "UI/UX Designer ",
      location: "Germany",
      type: "Part Time",
      rating: "3.5",
      ratingCount: "7.3k",
      bookmark: "false"
    },
    {
      id: "8",
      name: "Philbert Schwartz",
      designation: "React Developer ",
      location: "Zuweihir, UAE",
      type: "Full Time",
      rating: "4.1",
      ratingCount: "1.74k",
      bookmark: "true"
    },
    {
      id: "9",
      name: "Larry Villa",
      designation: "Assistant / Store Keeper",
      location: "San Lorenzo",
      type: "Full Time",
      rating: "4.0",
      ratingCount: "1.72k",
      bookmark: "false"
    },
    {
      id: "10",
      name: "Harley Watkins",
      designation: "Project Manager ",
      location: "Texanna, US",
      type: "Full Time",
      rating: "4.2",
      ratingCount: "3.21k",
      bookmark: "false"
    },
    {
      id: "11",
      name: "Marie Stewart",
      designation: "Web Designer",
      location: "Cullera, Spain",
      type: "Part Time",
      rating: "4.2",
      ratingCount: "2.2k",
      bookmark: "true"
    },
    {
      id: "12",
      name: "Hadley Leonard",
      designation: "Executive, HR Operations ",
      location: "Zuweihir, UAE",
      type: "Full Time",
      rating: "4.0",
      ratingCount: "3.2k",
      bookmark: "false"
    },
    {
      id: "13",
      name: "Zoderick Rodriquez",
      designation: "Full Stack Developer",
      location: "Muhtarqah, UAE",
      type: "Freelancer",
      rating: "3.9",
      ratingCount: "98.65k",
      bookmark: "false"
    },
    {
      id: "14",
      name: "Nadia Harding",
      designation: "Web Designer",
      location: "Pahoa, US",
      type: "Freelancer",
      rating: "4.3",
      ratingCount: "2.93k",
      bookmark: "true"
    },
    {
      id: "15",
      name: "Addison Black",
      designation: "UI/UX Designer",
      location: "Phoenix, Arizona",
      type: "Part Time",
      rating: "3.8",
      ratingCount: "10.32k",
      bookmark: "false"
    },
    {
      id: "16",
      name: "Priscilla Wise",
      designation: "Executive, HR Operations",
      location: "Ghurayfah, UAE",
      type: "Full Time",
      rating: "4.0",
      ratingCount: "7.36k",
      bookmark: "false"
    },
    {
      id: "17",
      name: "Lizzie Chandler",
      designation: "React Developer",
      location: "Maidaq, UAE",
      type: "Part Time",
      rating: "3.9",
      ratingCount: "1.35k",
      bookmark: "false"
    },
    {
      id: "18",
      name: "Jenson Carlson",
      designation: "Graphic Designer",
      location: "Quesada, US",
      type: "Freelancer",
      rating: "4.2",
      ratingCount: "3.16k",
      bookmark: "false"
    },
    {
      id: "19",
      name: "Jaylee Ward",
      designation: "Education Training",
      location: "Cullera, Spain",
      type: "Full Time",
      rating: "4.0",
      ratingCount: "3.21k",
      bookmark: "true"
    },
    {
      id: "20",
      name: "Trista Guerrero",
      designation: "Product Director",
      location: "Jereirah, UAE",
      type: "Full Time",
      rating: "4.1",
      ratingCount: "4.31k",
      bookmark: "false"
    },
    {
      id: "21",
      name: "James Stone",
      designation: "Graphic Designer",
      location: "Quesada, US",
      type: "Freelancer",
      rating: "4.2",
      ratingCount: "3.16k",
      bookmark: "false"
    },
    {
      id: "22",
      name: "Mike Watson",
      designation: "Product Director",
      location: "Jereirah, UAE",
      type: "Full Time",
      rating: "4.1",
      ratingCount: "4.13k",
      bookmark: "false"
    },
    {
      id: "23",
      name: "Mary Sak",
      designation: "Education Training",
      location: "Cullera, Spain",
      type: "Full Time",
      rating: "4.0",
      ratingCount: "3.21k",
      bookmark: "true"
    },
    {
      id: "24",
      name: "Roderick Jones",
      designation: "React Developer",
      location: "Maidaq, UAE",
      type: "Part Time",
      rating: "3.9",
      ratingCount: "1.35k",
      bookmark: "false"
    }
  ];
  var pages = [];
  var page = 1;
  var setPages = () => {
    let numberOfPages = Math.ceil(candidatelist.length / perPage);
    pages = [];
    for (let index = 1; index <= numberOfPages; index++) {
      pages.push(index);
    }
  };
  var paginate = (candidatelist2) => {
    var page2 = page2;
    var perPage2 = perPage2;
    let from = page2 * perPage2 - perPage2;
    let to = page2 * perPage2;
    return candidatelist2.slice(from, to);
  };
  setPages();
  paginate(candidatelist);
  return `${$$result.head += `${$$result.title = `<title>Job Lists | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}"><div class="${"container-fluid"}">${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Job Lists", pageTitle: "Jobs" }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-light" }, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center"}"><h6 class="${"card-title mb-0 flex-grow-1 fw-bold"}">Search Jobs
                </h6>
                <div class="${"flex-shrink-0"}"><button class="${"btn btn-primary"}" data-bs-toggle="${"modal"}" data-bs-target="${"#CreateJobModal"}"><i class="${"ri-add-line align-bottom me-1"}"></i>
                    Create New Job
                  </button></div></div>

              ${validate_component(Row, "Row").$$render($$result, { class: "mt-3 gy-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xxl: 10, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control search bg-light border-light"}" id="${"searchJob"}" autocomplete="${"off"}" placeholder="${"Search for jobs or companies..."}">
                    <i class="${"ri-search-line search-icon"}"></i></div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { xxl: 2, ms: 6 }, {}, {
                        default: () => {
                          return `<div class="${"input-light"}"><select class="${"form-control"}" data-choices data-choices-search-false name="${"choices-single-default"}" id="${"idStatus"}"><option value="${"All"}">All Selected</option><option value="${"Newest"}" defaultvalue>Newest
                      </option><option value="${"Popluar"}">Popluar</option><option value="${"Oldest"}">Oldest</option></select></div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, {
                        class: "col-xl-12 d-none",
                        id: "found-job-alert"
                      }, {}, {
                        default: () => {
                          return `<div class="${"alert alert-success mb-0 text-center"}" role="${"alert"}"><strong id="${"total-result"}">253</strong> jobs found
                  </div>`;
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
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
        default: () => {
          return `<div id="${"job-list"}">${each(MOCK_DATA.jobList, (item) => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "joblist-card" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"d-flex mb-4"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", item.companyLogo, 0)} alt="${""}" class="${"avatar-xxs companyLogo-img"}">
                      </div></div>
                    <div class="${"ms-3 flex-grow-1"}"><img${add_attribute("src", item.coverImg, 0)} alt="${""}" class="${"d-none cover-img"}">
                      ${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                      default: () => {
                        return `<h5 class="${"job-title"}">${escape(item.jobTitle)}</h5>
                      `;
                      }
                    })}
                      <p class="${"company-name text-muted mb-0"}">${escape(item.companyName)}
                      </p></div>
                    <div><button type="${"button"}" class="${"btn btn-ghost-primary btn-icon custom-toggle"}" data-bs-toggle="${"button"}"><span class="${"icon-on"}"><i class="${"ri-bookmark-line"}"></i></span>
                        <span class="${"icon-off"}"><i class="${"ri-bookmark-fill"}"></i>
                        </span></button>
                    </div></div>
                  <p class="${"text-muted job-description"}">${escape(item.description)}</p>
                  <div>${each(item.tags, (subItem) => {
                      return `<span class="${"badge badge-soft-primary me-1"}">${escape(subItem)}</span>`;
                    })}</div>
                `;
                  }
                })}
                ${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-footer border-top-dashed" }, {}, {
                  default: () => {
                    return `<div class="${"d-flex justify-content-between align-items-center flex-wrap gap-3"}"><div><i class="${"ri-briefcase-2-line align-bottom me-1"}"></i>${escape(" ")}
                      <span class="${"job-type"}">${escape(item.type)}</span></div>
                    <div class="${"d-none"}"><span class="${"job-experience"}">${escape(item.experience)}
                      </span></div>
                    <div><i class="${"ri-map-pin-2-line align-bottom me-1"}"></i>${escape(" ")}
                      <span class="${"job-location"}">${escape(item.location)}</span></div>
                    <div><i class="${"ri-user-3-line align-bottom me-1"}"></i>
                      ${escape(item.applied)}</div>
                    <div><i class="${"ri-time-line align-bottom me-1"}"></i>${escape(" ")}
                      <span class="${"job-postdate"}">${escape(item.postDate)}</span></div>
                    <div>${validate_component(Link, "Link").$$render($$result, {
                      href: "#!",
                      class: "btn btn-primary viewjob-list"
                    }, {}, {
                      default: () => {
                        return `View More${escape(" ")}
                        <i class="${"ri-arrow-right-line align-bottom ms-1"}"></i>
                      `;
                      }
                    })}
                    </div></div>
                `;
                  }
                })}
              `;
              }
            })}`;
          })}</div>

          ${validate_component(Row, "Row").$$render($$result, {
            class: "g-0 justify-content-end mb-4",
            id: "pagination-element"
          }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                default: () => {
                  return `${pages.length < 1 ? `<div class="${"pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><div class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "",
                    class: "page-link",
                    id: "page-prev"
                  }, {}, {
                    default: () => {
                      return `Previous
                        `;
                    }
                  })}</div>
                        <span id="${"page-num"}" class="${"pagination"}">${each(pages, (pagenumber) => {
                    return `<div class="${"page-item active"}"><a class="${"page-link clickPageNumber"}" href="${"!#"}" target="${"_self"}"${add_attribute("onclick", page = pagenumber, 0)}>${escape(pagenumber)}</a>
                                </div>`;
                  })}</span>
                        <div class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "",
                    class: "page-link",
                    id: "page-next",
                    onClick: () => page++
                  }, {}, {
                    default: () => {
                      return `Next
                        `;
                    }
                  })}</div></div>` : ``}

              <div class="${"pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><div class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, {
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
          })}`;
        }
      })}
        ${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {
            class: "job-list-view-card overflow-hidden",
            id: "job-overview"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", img10, 0)} alt="${""}" id="${"cover-img"}" class="${"img-fluid background object-cover"}">
            ${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
                default: () => {
                  return `<div class="${"avatar-md mt-n5"}"><div class="${"avatar-title bg-light rounded-circle"}"><img${add_attribute("src", img7, 0)} alt="${""}" class="${"avatar-xs view-companylogo"}"></div></div>
              <div class="${"mt-3"}"><h5 class="${"view-title"}">Product Designer</h5>
                <div class="${"hstack gap-3 mb-3"}"><span class="${"text-muted"}"><i class="${"ri-building-line me-1 align-bottom"}"></i>${escape(" ")}
                    <span class="${"view-companyname"}">Themesbrand</span></span>
                  <span class="${"text-muted"}"><i class="${"ri-map-pin-2-line me-1 align-bottom"}"></i>${escape(" ")}
                    <span class="${"view-location"}">United Kingdom</span></span></div>
                <p class="${"text-muted view-desc"}">A UI/UX designer&#39;s job is to create user-friendly
                  interfaces that enable users to understand how to use
                  complex technical products. If you&#39;re passionate about the
                  latest technology trends and devices, you&#39;ll find great
                  fulfillment in being involved in the design process for
                  the next hot gadget.
                </p>
                <div class="${"py-3 border border-dashed border-start-0 border-end-0 mt-4"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium fs-12 text-muted"}">Job Type
                        </p>
                        <h5 class="${"fs-14 mb-0 view-type"}">Full Time</h5></div>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium fs-12 text-muted"}">Post Date
                        </p>
                        <h5 class="${"fs-14 mb-0 view-postdate"}">15 Sep, 2022
                        </h5></div>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium fs-12 text-muted"}">Experience
                        </p>
                        <h5 class="${"fs-14 mb-0 view-experience"}">0 - 5 Year
                        </h5></div>`;
                        }
                      })}`;
                    }
                  })}</div></div>

              <div class="${"mt-4"}"><h5 class="${"mb-3"}">Application Summary</h5>
                <div>${validate_component(AppSummary, "AppSummaryChart").$$render($$result, {
                    dataColors: [
                      "--vz-info",
                      "--vz-primary",
                      "--vz-danger",
                      "--vz-danger",
                      "--vz-info"
                    ]
                  }, {}, {})}</div></div>
              <div class="${"mt-4"}"><button type="${"button"}" class="${"btn btn-success w-100"}">Apply Now
                </button></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { List as default };
