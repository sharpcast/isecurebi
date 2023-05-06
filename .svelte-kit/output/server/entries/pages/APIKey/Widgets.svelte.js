import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import { A as AlertOctagonIcon } from "../../../chunks/AlertOctagonIcon-557990d9.js";
import { C as CheckCircleIcon } from "../../../chunks/CheckCircleIcon-2fcd72ab.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
${validate_component(Col, "Col").$$render($$result, { class: "col-lg-4" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
            default: () => {
              return `<h5 class="${"card-title mb-3"}">Developer Plan</h5>
            <div class="${"progress animated-progress custom-progress mb-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                value: 38,
                color: "info",
                class: "progress-bar bg-info",
                role: "progressbar",
                style: "width: 38%",
                "aria-valuenow": "38",
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              }, {}, {})}</div>
            <p class="${"text-muted mb-2"}">You used 215 of 2000 of your API</p>
            <div class="${"text-end"}"><button type="${"button"}" class="${"btn btn-success btn-sm create-btn"}" data-bs-toggle="${"modal"}" data-bs-target="${"#api-key-modal"}">Create API Key
                </button></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
${validate_component(Col, "Col").$$render($$result, { class: "col-lg-4" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {
        class: "card card-animate card-height-100"
      }, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
            default: () => {
              return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">Successful conversions
                    </p>
                    <h2 class="${"mt-4 ff-secondary fw-bold"}"><span class="${"counter-value"}" data-target="${"50"}"></span></h2>
                    <p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> 8.24 %${escape(" ")}
                        </span>${escape(" ")}
                        7 last week
                    </p></div>
                <div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-success rounded-circle fs-2"}">${validate_component(CheckCircleIcon, "CheckCircleIcon").$$render($$result, { class: "text-success" }, {}, {})}</span></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
${validate_component(Col, "Col").$$render($$result, { class: "col-lg-4" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {
        class: "card card-animate card-height-100"
      }, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
            default: () => {
              return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-semibold text-muted mb-0"}">Failed conversions
                    </p>
                    <h1 class="${"mt-4 ff-secondary fw-bold"}"><span class="${"counter-value"}" data-target="${"8"}"></span></h1>
                    <p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-danger mb-0"}"><i class="${"ri-arrow-down-line align-middle"}"></i> 25.87
                            %${escape(" ")}
                        </span>${escape(" ")}
                        7 last week
                    </p></div>
                <div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-danger rounded-circle fs-2"}">${validate_component(AlertOctagonIcon, "AlertOctagonIcon").$$render($$result, { class: "text-danger" }, {}, {})}</span></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Widgets as default };
