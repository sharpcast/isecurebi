import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
var processArrow = "/_app/assets/process-arrow-img-aeadf1e9.png";
const WorkProcess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h3 class="${"mb-3 fw-semibold"}">Our Work Process</h3>
                    <p class="${"text-muted mb-4 ff-secondary"}">In an ideal world this website wouldn\u2019t exist, a client would
                        acknowledge the importance of having web copy before the Proin vitae ipsum vel ex
                        finibus semper design starts.</p></div>`;
            }
          })}`;
        }
      })}


        ${validate_component(Row, "Row").$$render($$result, { class: "text-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `<div class="${"process-card mt-4"}"><div class="${"process-arrow-img d-none d-lg-block"}"><img${add_attribute("src", processArrow, 0)} alt="${""}" class="${"img-fluid"}"></div>
                    <div class="${"avatar-sm icon-effect mx-auto mb-4"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h1"}"><i class="${"ri-quill-pen-line"}"></i></div></div>

                    <h5>Tell us what you need</h5>
                    <p class="${"text-muted ff-secondary"}">The profession and the employer and your desire to make your mark.</p></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `<div class="${"process-card mt-4"}"><div class="${"process-arrow-img d-none d-lg-block"}"><img${add_attribute("src", processArrow, 0)} alt="${""}" class="${"img-fluid"}"></div>
                    <div class="${"avatar-sm icon-effect mx-auto mb-4"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h1"}"><i class="${"ri-user-follow-line"}"></i></div></div>

                    <h5>Get free quotes</h5>
                    <p class="${"text-muted ff-secondary"}">The most important aspect of beauty was, therefore, an inherent part.</p></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `<div class="${"process-card mt-4"}"><div class="${"avatar-sm icon-effect mx-auto mb-4"}"><div class="${"avatar-title bg-transparent text-success rounded-circle h1"}"><i class="${"ri-book-mark-line"}"></i></div></div>

                    <h5>Deliver high quality product</h5>
                    <p class="${"text-muted ff-secondary"}">We quickly learn to fear and thus automatically avoid potentially.</p></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { WorkProcess as default };
