import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
const CardFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "card-footer");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LeadDiscover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { deal, index } = $$props;
  if ($$props.deal === void 0 && $$bindings.deal && deal !== void 0)
    $$bindings.deal(deal);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `<div class="${"col"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "card-header bg-soft-" + deal.bgColor,
        id: "leadDiscovered" + index
      }, {}, {
        default: () => {
          return `<h5 class="${"card-title text-uppercase fw-semibold mb-1 fs-15"}">${escape(deal.title)}</h5>
			<p class="${"text-muted mb-0"}">${escape(deal.price)}${escape(" ")}
				<span class="${"fw-medium"}">${escape(deal.deals)} Deals</span></p>`;
        }
      })}`;
    }
  })}
	${validate_component(Collapse, "Collapse").$$render($$result, {
    toggler: "#leadDiscovered" + index,
    isOpen: true
  }, {}, {
    default: () => {
      return `${each(deal.subItems, (subitem, subitemkey) => {
        return `${validate_component(Card, "Card").$$render($$result, {
          class: subitem.isRibbon ? "mb-1 ribbon-box ribbon-fill ribbon-sm" : "mb-1"
        }, {}, {
          default: () => {
            return `${subitem.isRibbon ? `<div class="${"ribbon ribbon-info"}"><i class="${"ri-flashlight-fill"}"></i>
					</div>` : ``}
				${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Link, "Link").$$render($$result, {
                  href: "#!",
                  class: "d-flex align-items-center",
                  id: "leadInnerDiscovered" + index + subitemkey
                }, {}, {
                  default: () => {
                    return `<div class="${"flex-shrink-0"}"><img${add_attribute("src", subitem.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">${escape(subitem.title)}</h6>
							<p class="${"text-muted mb-0"}">${escape(subitem.price)} - ${escape(subitem.date)}
							</p></div>
					`;
                  }
                })}
				`;
              }
            })}
				${validate_component(Collapse, "Collapse").$$render($$result, {
              class: "border-top border-top-dashed",
              toggler: "#leadInnerDiscovered" + index + subitemkey,
              isOpen: subitem.isOpen === true ? true : false
            }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h6 class="${"fs-14 mb-1"}">${escape(subitem.subTitle)}${escape(" ")}
							<small${add_attribute("class", "badge badge-soft-" + subitem.timeDurationClass, 0)}>${escape(subitem.timeDuration)}
							</small></h6>
						<p class="${"text-muted"}">As a company grows however, you find it&#39;s not as
							easy to shout across
						</p>
						<ul class="${"list-unstyled vstack gap-2 mb-0"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xxs text-muted"}"><i class="${"ri-question-answer-line"}"></i></div>
									<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Meeting with Thomas
										</h6>
										<small class="${"text-muted"}">Yesterday at 9:12AM
										</small></div>
								</div></li>
							<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xxs text-muted"}"><i class="${"ri-mac-line"}"></i></div>
									<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Product Demo</h6>
										<small class="${"text-muted"}">Monday at 04:41PM
										</small></div>
								</div></li>
							<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xxs text-muted"}"><i class="${"ri-earth-line"}"></i></div>
									<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Marketing Team Meeting
										</h6>
										<small class="${"text-muted"}">Monday at 04:41PM
										</small>
									</div></div>
							</li></ul>
					`;
                  }
                })}
					${validate_component(CardFooter, "CardFooter").$$render($$result, { class: "hstack gap-2" }, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "btn-sm w-100" }, {}, {
                      default: () => {
                        return `<i class="${"ri-phone-line align-bottom me-1"}"></i> Call
						`;
                      }
                    })}
						${validate_component(Button, "Button").$$render($$result, { color: "info", class: "btn-sm w-100" }, {}, {
                      default: () => {
                        return `<i class="${"ri-question-answer-line align-bottom me-1"}"></i>${escape(" ")}
							Message
						`;
                      }
                    })}
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
  })}</div>`;
});
export { LeadDiscover as default };
