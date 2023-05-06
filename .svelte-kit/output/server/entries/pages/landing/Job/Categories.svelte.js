import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../chunks/jobLanding-03c3f263.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"categories"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 7 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h1 class="${"mb-3 ff-secondary fw-semibold text-capitalize lh-base"}">High demand jobs${escape(" ")}
              <span class="${"text-primary"}">Categories</span> fratured
            </h1>
            <p class="${"text-muted"}">Post a job to tell us about your project. We&#39;ll quickly match
              you with the right freelancers.
            </p></div>`;
            }
          })}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.categories, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 3, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "shadow-none text-center py-3" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "py-4" }, {}, {
                      default: () => {
                        return `<div class="${"avatar-sm position-relative mb-4 mx-auto"}"><div class="${"job-icon-effect"}"></div>
                  <div class="${"avatar-title bg-transparent text-success rounded-circle"}"><i${add_attribute("class", item.icon, 0)}></i>
                  </div></div>
                ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "to-link" }, {}, {
                          default: () => {
                            return `<h5 class="${"fs-17 pt-1"}">${escape(item.lable)}</h5>
                `;
                          }
                        })}
                <p class="${"mb-0 text-muted"}">${escape(item.jobs)}</p>
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
    }
  })}</section>
<section class="${"py-5 bg-primary position-relative"}"><div class="${"bg-overlay bg-overlay-pattern opacity-50"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
            default: () => {
              return `<div><h4 class="${"text-white mb-2"}">Ready to Started?</h4>
            <p class="${"text-white-50 mb-0"}">Create new account and refer your friend
            </p></div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
            default: () => {
              return `<div>${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn bg-gradient btn-danger"
              }, {}, {
                default: () => {
                  return `Create Free Account
            `;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Categories as default };
