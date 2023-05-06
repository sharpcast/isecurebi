import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardJobs-69be2afb.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-9-f5d371f4.js";
const FeaturedCompanies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Featured Companies</h4>
        <div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn btn-soft-primary btn-sm"
              }, {}, {
                default: () => {
                  return `View All Companies${escape(" ")}
            <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}</div>`;
            }
          })}

      ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, {
                class: "table table-centered table-hover align-middle table-nowrap mb-0"
              }, {}, {
                default: () => {
                  return `<tbody>${each(MOCK_DATA.featuredCompany, (company) => {
                    return `<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-xs me-2 flex-shrink-0"}"><div${add_attribute("class", "avatar-title bg-soft-" + company.bgColor + " rounded", 0)}><img${add_attribute("src", company.img, 0)} alt="${""}" height="${"16"}">
                            </div></div>
                        <h6 class="${"mb-0"}">${escape(company.lable)}</h6>
                        </div></td>
                    <td><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                        ${escape(company.city)}</td>
                    <td><ul class="${"list-inline mb-0"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-secondary" }, {}, {
                      default: () => {
                        return `<i class="${"ri-facebook-fill"}"></i>
                            `;
                      }
                    })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-danger" }, {}, {
                      default: () => {
                        return `<i class="${"ri-mail-line"}"></i>
                            `;
                      }
                    })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-primary" }, {}, {
                      default: () => {
                        return `<i class="${"ri-global-line"}"></i>
                            `;
                      }
                    })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-info" }, {}, {
                      default: () => {
                        return `<i class="${"ri-twitter-line"}"></i>
                            `;
                      }
                    })}</li>
                        </ul></td>
                    <td>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-link btn-sm" }, {}, {
                      default: () => {
                        return `View More${escape(" ")}
                        <i class="${"ri-arrow-right-line align-bottom"}"></i>
                        `;
                      }
                    })}</td>
                    </tr>`;
                  })}</tbody>`;
                }
              })}</div>
        <div class="${"align-items-center mt-4 pt-2 justify-content-between d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"text-muted"}">Showing <span class="${"fw-semibold"}">5</span> of${escape(" ")}
              <span class="${"fw-semibold"}">25</span> Results
            </div></div>
          <ul class="${"pagination pagination-separated pagination-sm mb-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `\u2190
              `;
                }
              })}</li>
            <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `1
              `;
                }
              })}</li>
            <li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `2
              `;
                }
              })}</li>
            <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `3
              `;
                }
              })}</li>
            <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
                default: () => {
                  return `\u2192
              `;
                }
              })}</li></ul></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { FeaturedCompanies as default };
