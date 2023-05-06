import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BriefcaseIcon, A as AwardIcon } from "../../../chunks/BriefcaseIcon-f0d97152.js";
import { C as ClockIcon } from "../../../chunks/ClockIcon-8408cbfa.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectsWidgets } = $$props;
  if ($$props.projectsWidgets === void 0 && $$bindings.projectsWidgets && projectsWidgets !== void 0)
    $$bindings.projectsWidgets(projectsWidgets);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(projectsWidgets, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0"}"><span${add_attribute("class", `avatar-title bg-soft-${item.feaIconClass} text-${item.feaIconClass} rounded-2 fs-2`, 0)}>${item.feaIcon === "briefcase" ? `${validate_component(BriefcaseIcon, "BriefcaseIcon").$$render($$result, {
                      class: `text-${item.feaIconClass}`,
                      size: "24"
                    }, {}, {})}` : ``}
								${item.feaIcon === "award" ? `${validate_component(AwardIcon, "AwardIcon").$$render($$result, {
                      class: `text-${item.feaIconClass}`,
                      size: "24"
                    }, {}, {})}` : ``}
								${item.feaIcon === "clock" ? `${validate_component(ClockIcon, "ClockIcon").$$render($$result, {
                      class: `text-${item.feaIconClass}`,
                      size: "24"
                    }, {}, {})}` : ``}
							</span></div>
						<div class="${"flex-grow-1 overflow-hidden ms-3"}"><p class="${"text-uppercase fw-medium text-muted text-truncate mb-3"}">${escape(item.label)}</p>
							<div class="${"d-flex align-items-center mb-3"}"><h4 class="${"fs-4 flex-grow-1 mb-0"}">${each(item.subCounter, (item2) => {
                      return `<span class="${"counter-value"}"${add_attribute("data-target", item2.counter, 0)}>0</span>${escape(item2.suffix)} ${escape(" ")}`;
                    })}</h4>
								<span${add_attribute("class", "fs-12 badge badge-soft-" + item.badgeClass, 0)}><i${add_attribute("class", "fs-13 align-middle me-1 " + item.icon, 0)}></i>${escape(item.percentage)}</span></div>
							<p class="${"text-muted text-truncate mb-0"}">${escape(item.caption)}</p>
						</div></div>
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
export { Widgets as default };
