import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { A as ActivityIcon, E as ExternalLinkIcon } from "../../../chunks/ExternalLinkIcon-2852acf2.js";
import { C as ClockIcon } from "../../../chunks/ClockIcon-8408cbfa.js";
import { U as UsersIcon } from "../../../chunks/UsersIcon-1eab5089.js";
const Widget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">Users</p>
						<h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}" data-target="${"28.05"}">0</span>k
						</h2>
						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> 16.24 %
							</span> vs. previous month
						</p></div>
					<div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded-circle fs-2"}">${validate_component(UsersIcon, "UsersIcon").$$render($$result, { class: "text-info", size: "24" }, {}, {})}</span></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

	${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">Sessions</p>
						<h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}" data-target="${"97.66"}">0</span>k
						</h2>
						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-danger mb-0"}"><i class="${"ri-arrow-down-line align-middle"}"></i> 3.96 %
							</span> vs. previous month
						</p></div>
					<div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded-circle fs-2"}">${validate_component(ActivityIcon, "ActivityIcon").$$render($$result, { class: "text-info", size: "24" }, {}, {})}</span></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">Avg. Visit Duration</p>
						<h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}" data-target="${"3"}">0</span>m
							<span class="${"counter-value"}" data-target="${"40"}">0</span>sec
						</h2>
						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-danger mb-0"}"><i class="${"ri-arrow-down-line align-middle"}"></i> 0.24 %
							</span> vs. previous month
						</p></div>
					<div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded-circle fs-2"}">${validate_component(ClockIcon, "ClockIcon").$$render($$result, { class: "text-info", size: "24" }, {}, {})}</span></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

	${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex justify-content-between"}"><div><p class="${"fw-medium text-muted mb-0"}">Bounce Rate</p>
						<h2 class="${"mt-4 ff-secondary fw-semibold"}"><span class="${"counter-value"}" data-target="${"33.48"}">0</span>%
						</h2>

						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> 7.05 %
							</span> vs. previous month
						</p></div>
					<div><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded-circle fs-2"}">${validate_component(ExternalLinkIcon, "ExternalLinkIcon").$$render($$result, { class: "text-info", size: "24" }, {}, {})}</span></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Widget as default };
