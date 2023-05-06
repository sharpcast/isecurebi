import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const JobDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"mb-3"}">Job Description</h5>

      <p class="${"text-muted mb-2"}">A Product Designer of a company is responsible for the user
        experience of a product, which usually includes taking direction on
        the business goals and objectives from product management. Product
        Designers are typically associated with the vis ual or tactile
        aspects of a product but sometimes they can also play a role in the
        information architecture and system design of a product.
      </p>
      <p class="${"text-muted mb-4"}">Product designer is an exceptional career choice. The demand for
        product designers is increasing with each passing day but there is a
        huge shortage for a skilful product designer in the market. With
        hard work and an apt skill set, a product designer can make a
        handsome amount of money.
      </p>
      <div><h5 class="${"mb-3"}">Responsibilities of Product Designer</h5>
        <p class="${"text-muted"}">Provided below are the responsibilities of a Product Designer:
        </p>
        <ul class="${"text-muted vstack gap-2"}"><li>To visualise and create drawings and design concepts to
            determine the best product.
          </li>
          <li>To present ideas and concepts to relevant team members for
            brainstorming.
          </li>
          <li>To employ design concepts into functional prototypes.</li>
          <li>To analyse, modify and revise existing designs or products and
            meet customer expectations.
          </li>
          <li>To coordinate with team members and to ensure accurate
            efficiency in the design phase.
          </li>
          <li>Excellent attention to detail</li>
          <li>Meticulous and diligent</li></ul></div>

      <div><h5 class="${"mb-3"}">Skill &amp; Experience</h5>
        <ul class="${"text-muted vstack gap-2"}"><li>Communication skills</li>
          <li>Sound visualisation abilities</li>
          <li>Observation skills</li>
          <li>Problem-solving abilities</li>
          <li>Eye for aesthetic design and understanding of customer appeal
          </li>
          <li>Artistic &amp; innovative flair</li>
          <li>Strong knowledge of the industry &amp; market trends</li>
          <li>Relevant work experience in a particular field is mandatory
          </li></ul></div>

      <ul class="${"list-inline mb-0"}"><li class="${"list-inline-item"}"><h5 class="${"mb-0"}">Share this job:</h5></li>
        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-icon btn-soft-info"
          }, {}, {
            default: () => {
              return `<i class="${"ri-facebook-line"}"></i>`;
            }
          })}</li>
        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-icon btn-soft-success"
          }, {}, {
            default: () => {
              return `<i class="${"ri-whatsapp-line"}"></i>`;
            }
          })}</li>
        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-icon btn-soft-secondary"
          }, {}, {
            default: () => {
              return `<i class="${"ri-twitter-line"}"></i>`;
            }
          })}</li>
        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-icon btn-soft-danger"
          }, {}, {
            default: () => {
              return `<i class="${"ri-mail-line"}"></i>`;
            }
          })}</li></ul>`;
        }
      })}`;
    }
  })}`;
});
export { JobDescription as default };
