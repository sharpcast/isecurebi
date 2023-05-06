import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../../chunks/appsJobs-3a727122.js";
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
const RelatedJobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-0"}">Related Jobs</h5></div>
        <div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-ghost-success"
          }, {}, {
            default: () => {
              return `View All${escape(" ")}
            <i class="${"ri-arrow-right-line ms-1 align-bottom"}"></i>`;
            }
          })}</div></div>`;
        }
      })}
    ${each(MOCK_DATA.overviewJobs, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<button type="${"button"}" class="${"btn btn-icon btn-soft-primary float-end"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button>
            <div class="${"avatar-sm mb-4"}"><div class="${"avatar-title bg-soft-secondary rounded"}"><img${add_attribute("src", item.companyLogo, 0)} alt="${""}" class="${"avatar-xxs"}">
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
                ${escape(item.time)}
              </div></div>

            <p class="${"text-muted"}">${escape(item.description)}</p>

            <div class="${"hstack gap-2"}"><span class="${"badge badge-soft-success"}">${escape(item.s1)}</span>
              <span class="${"badge badge-soft-primary"}">${escape(item.s2)}</span>
              <span class="${"badge badge-soft-danger"}">${escape(item.s3)}</span></div>

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
  })}`;
});
export { RelatedJobs as default };
