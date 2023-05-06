import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardcrm-c5028973.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
const UpcomingActivities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 5 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Upcoming Activities</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "card-header-dropdown",
                direction: "start"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    tag: "a",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-vertical"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                    class: "dropdown-menu dropdown-menu-end",
                    end: true
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Edit`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Remove`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body pt-0" }, {}, {
            default: () => {
              return `<ul class="${"list-group list-group-flush border-dashed"}">${each(MOCK_DATA.activities, (item) => {
                return `<li class="${"list-group-item ps-0"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                  default: () => {
                    return `<div class="${"col-auto"}"><div class="${"avatar-sm p-1 py-2 h-auto bg-light rounded-3"}"><div class="${"text-center"}"><h5 class="${"mb-0"}">${escape(item.date)}</h5>
										<div class="${"text-muted"}">${escape(item.weekDay)}</div></div>
								</div></div>
							<div class="${"col"}"><h5 class="${"text-muted mt-0 mb-1 fs-13"}">${escape(item.time)}</h5>
								<a${add_attribute("href", null, 0)} class="${"text-reset fs-14 mb-0"}">${escape(item.caption)}</a></div>
							<div class="${"col-sm-auto"}"><div class="${"avatar-group"}">${each(item.subItem, (subItem) => {
                      return `<div class="${"avatar-group-item"}"><a${add_attribute("href", null, 0)} class="${"d-inline-block"}"><img${add_attribute("src", subItem.img, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}"></a>
										</div>`;
                    })}
									<div class="${"avatar-group-item"}"><a${add_attribute("href", null, 0)}><div class="${"avatar-xxs"}"><span${add_attribute("class", "avatar-title rounded-circle " + item.bgcolor + " text-white", 0)}>${escape(item.imgNumber)}
												</span></div>
										</a></div>
								</div></div>
						`;
                  }
                })}
					</li>`;
              })}</ul>
			<div class="${"align-items-center mt-2 row g-3 text-center text-sm-start"}"><div class="${"col-sm"}"><div class="${"text-muted"}">Showing <span class="${"fw-semibold"}">4</span> of <span class="${"fw-semibold"}">125</span> Results
					</div></div>
				<div class="${"col-sm-auto"}"><ul class="${"pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0"}"><li class="${"page-item disabled"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">\u2190</a></li>
						<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">1</a></li>
						<li class="${"page-item active"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">2</a></li>
						<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">3</a></li>
						<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">\u2192</a></li></ul></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { UpcomingActivities as default };
