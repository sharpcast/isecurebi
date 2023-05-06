import { c as create_ssr_component, v as validate_component, e as each, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../chunks/jobLanding-03c3f263.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
const Process = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"process"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h1 class="${"mb-3 ff-secondary fw-semibold lh-base"}">How <span class="${"text-primary"}">it&#39;s work</span> creative
              jobs &amp; quickly features
            </h1>
            <p class="${"text-muted"}">A creative person has the ability to invent and develop
              original ideas, especially in the arts. Like so many creative
              people, he was never satisfied.
            </p></div>`;
            }
          })}`;
        }
      })}
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.jobProcess, (item, key) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 3, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {
                  class: key === 0 ? "card shadow-lg" : "card shadow-none card-border-effect-none border-0"
                }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                      default: () => {
                        return `<h1 class="${"fw-bold display-5 ff-secondary mb-4 text-success position-relative"}"><div class="${"job-icon-effect"}"></div>
                  <span>${escape(item.id)}</span></h1>
                <h6 class="${"fs-18 mb-2"}">${escape(item.lable)}</h6>
                <p class="${"text-muted mb-0 fs-17"}">${escape(item.desc)}</p>
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
  })}</section>`;
});
export { Process as default };
