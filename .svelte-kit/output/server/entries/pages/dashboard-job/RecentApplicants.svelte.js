import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardJobs-69be2afb.js";
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
const RecentApplicants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 8 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Recent Applicants</h4>
        <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-info btn-sm"}"><i class="${"ri-file-list-3-line align-bottom"}"></i> Generate
            Report
          </button></div>`;
            }
          })}

      ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, {
                class: "table table-borderless table-centered align-middle table-nowrap mb-0"
              }, {}, {
                default: () => {
                  return `<thead class="${"text-muted table-light"}"><tr><th scope="${"col"}">ID</th>
                <th scope="${"col"}">Candidate Name</th>
                <th scope="${"col"}">Designation</th>
                <th scope="${"col"}">Rate/hr</th>
                <th scope="${"col"}">Location</th>
                <th scope="${"col"}">Type</th>
                <th scope="${"col"}">Rating</th></tr></thead>
            <tbody>${each(MOCK_DATA.recentApplicants, (item) => {
                    return `<tr><td>${validate_component(Link, "Link").$$render($$result, {
                      href: "#!",
                      class: "fw-medium link-primary"
                    }, {}, {
                      default: () => {
                        return `${escape(item.no)}
                      `;
                      }
                    })}</td>
                    <td><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
                        <div class="${"flex-grow-1"}">${escape(item.name)}</div>
                      </div></td>
                    <td>${escape(item.designation)}</td>
                    <td><span class="${"text-success"}">${escape(item.rate)}</span></td>
                    <td>${escape(item.city)}</td>
                    <td><span${add_attribute("class", "badge badge-soft-" + item.typeColor, 0)}>${escape(item.type)}
                      </span></td>
                    <td><h5 class="${"fs-14 fw-medium mb-0"}">${escape(item.rating)}
                        <span class="${"text-muted fs-11 ms-1"}">${escape(item.ratingDetails)}</span>
                      </h5></td>
                  </tr>`;
                  })}</tbody>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { RecentApplicants as default };
