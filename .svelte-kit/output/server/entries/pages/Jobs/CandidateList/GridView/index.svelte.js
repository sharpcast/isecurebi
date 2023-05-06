import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../../../chunks/Input-db5b479a.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../../chunks/appsJobs-3a727122.js";
import { B as BreadCrumb } from "../../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
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
const GridView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Candidates Grid View | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "container-fluid" }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Grid View",
        pageTitle: "Candidates Grid"
      }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
            default: () => {
              return `<div>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                default: () => {
                  return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add
              Candidate
            `;
                }
              })}</div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
            default: () => {
              return `<div class="${"d-md-flex justify-content-sm-end gap-2"}"><div class="${"search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0"}">${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "searchJob",
                placeholder: "Search for candidate name or designation...",
                autoComplete: "off"
              }, {}, {})}
              <i class="${"ri-search-line search-icon"}"></i></div>

            <select class="${"form-control w-md"}" data-choices data-choices-search-false><option value="${"All"}">All</option><option value="${"Today"}">Today</option><option value="${"Yesterday"}" defaultvalue>Yesterday</option><option value="${"Last 7 Days"}">Last 7 Days</option><option value="${"Last 30 Days"}">Last 30 Days</option><option value="${"This Month"}">This Month</option><option value="${"Last Year"}">Last Year</option></select></div>`;
            }
          })}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, { class: "gy-2 mb-2", id: "candidate-list" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.jobCandidates, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}">${item.nickname ? `<div class="${"avatar-lg rounded"}"><div class="${"avatar-title border bg-light text-primary rounded text-uppercase fs-24"}">${escape(item.nickname)}</div>
                        </div>` : `<div class="${"avatar-lg rounded"}"><img${add_attribute("src", item.userImg, 0)} alt="${""}" class="${"member-img img-fluid d-block rounded"}">
                      </div>`}</div>
                  <div class="${"flex-grow-1 ms-3"}"><a href="${"/pages/profile/simple/simplepage"}"><h5 class="${"fs-16 mb-1"}">${escape(item.candidateName)}</h5></a>
                    <p class="${"text-muted mb-2"}">${escape(item.designation)}</p>
                    <div class="${"d-flex flex-wrap gap-2 align-items-center"}"><div class="${"badge text-bg-success"}"><i class="${"mdi mdi-star me-1"}"></i>
                        ${escape(item.rating[0])}</div>
                      <div class="${"text-muted"}">${escape(item.rating[1])}</div></div>
                    <div class="${"d-flex gap-4 mt-2 text-muted"}"><div><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                        ${escape(item.location)}</div>
                      <div><i class="${"ri-time-line text-primary me-1 align-bottom"}"></i>
                        ${item.type === "Part Time" ? `<span class="${"badge badge-soft-danger"}">${escape(item.type)}</span>` : `${item.type === "Full Time" ? `<span class="${"badge badge-soft-success"}">${escape(item.type)}</span>` : `<span class="${"badge badge-soft-info"}">${escape(item.type)}</span>`}`}
                      </div></div>
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
                href: "!#",
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
                href: "!#",
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
  })}</div>`;
});
export { GridView as default };
