import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
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
const DealsStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 7 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Deals Status</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted"}">02 Nov 2021 to 31 Dec 2021<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Today`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Week`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Month`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Current Year`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless table-hover table-nowrap align-middle mb-0"}"><thead class="${"table-light"}"><tr class="${"text-muted"}"><th scope="${"col"}">Name</th>
							<th scope="${"col"}" style="${"width: 20%"}">Last Contacted</th>
							<th scope="${"col"}">Sales Representative</th>
							<th scope="${"col"}" style="${"width: 16%"}">Status</th>
							<th scope="${"col"}" style="${"width: 12%"}">Deal Value</th></tr></thead>

					<tbody>${each(MOCK_DATA.dealsStatus, (item) => {
                return `<tr><td>${escape(item.name)}</td>
								<td>${escape(item.date)}</td>
								<td><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle me-2"}">
									<a${add_attribute("href", null, 0)} class="${"text-body fw-medium"}">${escape(item.representativeName)}</a></td>
								<td><span${add_attribute("class", "badge badge-soft-" + item.badgeClass + " p-2", 0)}>${escape(item.status)}</span></td>
								<td><div class="${"text-nowrap"}">${escape(item.statusValue)}</div></td>
							</tr>`;
              })}</tbody></table></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { DealsStatus as default };
