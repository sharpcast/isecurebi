import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
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
const MyTasks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">My Tasks</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    tag: "a",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted"}"><i class="${"ri-settings-4-line align-middle me-1 fs-15"}"></i>Settings</span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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

		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
            default: () => {
              return `<div class="${"align-items-center p-3 justify-content-between d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"text-muted"}"><span class="${"fw-semibold"}">4</span> of <span class="${"fw-semibold"}">10</span> remaining
					</div></div>
				<button type="${"button"}" class="${"btn btn-sm btn-success"}"><i class="${"ri-add-line align-middle me-1"}"></i> Add Task</button></div>

			<div data-simplebar style="${"max-height: 219px;"}"><ul class="${"list-group list-group-flush border-dashed px-3"}">${each(MOCK_DATA.tasks, (item) => {
                return `<li class="${"list-group-item ps-0"}"><div class="${"d-flex align-items-start"}"><div class="${"form-check ps-0 flex-sharink-0"}"><input type="${"checkbox"}" class="${"form-check-input ms-0"}"${add_attribute("id", item.forId, 0)}></div>
								<div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                  class: "form-check-label mb-0 ps-2",
                  for: item.forId
                }, {}, {
                  default: () => {
                    return `${escape(item.text)}`;
                  }
                })}</div>
								<div class="${"flex-shrink-0 ms-2"}"><p class="${"text-muted fs-12 mb-0"}">${escape(item.date)}</p>
								</div></div>
						</li>`;
              })}</ul></div>
			<div class="${"p-3 pt-2"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">Show more...</a></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { MyTasks as default };
