import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
var About = "/_app/assets/about-b6b2a2f8.jpg";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {
        class: "align-items-center justify-content-lg-between justify-content-center gy-4"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 5, sm: 7 }, {}, {
            default: () => {
              return `<div class="${"about-img-section mb-5 mb-lg-0 text-center"}">${validate_component(Card, "Card").$$render($$result, {
                class: "card-bg-fill rounded shadow-lg inquiry-box d-none d-lg-block"
              }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-sm flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-secondary text-secondary rounded-circle fs-18"}"><i class="${"ri-briefcase-2-line"}"></i></div></div>
                <h5 class="${"fs-15 lh-base mb-0"}">Search Over${escape(" ")}
                  <span class="${"text-secondary fw-semibold"}">1,00,000+</span>${escape(" ")}
                  Jobs
                </h5>`;
                    }
                  })}`;
                }
              })}

            ${validate_component(Card, "Card").$$render($$result, { class: "feedback-box card-bg-fill" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "d-flex shadow-lg" }, {}, {
                    default: () => {
                      return `<div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}"></div>
                <div class="${"flex-grow-1"}"><h5 class="${"fs-14 lh-base mb-0"}">Tonya Noble</h5>
                  <p class="${"text-muted fs-11 mb-1"}">UI/UX Designer</p>

                  <div class="${"text-warning"}"><i class="${"ri-star-s-fill me-1"}"></i>
                    <i class="${"ri-star-s-fill me-1"}"></i>
                    <i class="${"ri-star-s-fill me-1"}"></i>
                    <i class="${"ri-star-s-fill me-1"}"></i>
                    <i class="${"ri-star-s-line"}"></i></div></div>`;
                    }
                  })}`;
                }
              })}
            <img${add_attribute("src", About, 0)} alt="${""}" class="${"img-fluid mx-auto rounded-3"}"></div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `<div class="${"text-muted"}"><h1 class="${"mb-3 lh-base"}">Find Your <span class="${"text-primary"}">Dream Job</span> in
              One Place
            </h1>
            <p class="${"ff-secondary fs-16 mb-2"}">The first step in finding your <b>dream job </b> is deciding
              where to look for first-hand insight. Contact professionals
              who are already working in industries or positions that
              interest you.
            </p>
            <p class="${"ff-secondary fs-16"}">Schedule informational interviews and phone calls or ask for
              the opportunity to shadow them on the job.
            </p>

            <div class="${"vstack gap-2 mb-4 pb-1"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs icon-effect"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h2"}"><i class="${"ri-check-fill"}"></i></div></div></div>
                <div class="${"flex-grow-1"}"><p class="${"mb-0"}">Dynamic Conetnt</p></div></div>
              <div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs icon-effect"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h2"}"><i class="${"ri-check-fill"}"></i></div></div></div>
                <div class="${"flex-grow-1"}"><p class="${"mb-0"}">Setup plugin&#39;s information.</p></div></div>
              <div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs icon-effect"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h2"}"><i class="${"ri-check-fill"}"></i></div></div></div>
                <div class="${"flex-grow-1"}"><p class="${"mb-0"}">Themes customization information</p></div></div></div>

            <div>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-primary" }, {}, {
                default: () => {
                  return `Find Your Jobs${escape(" ")}
                <i class="${"ri-arrow-right-line align-bottom ms-1"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Features as default };
