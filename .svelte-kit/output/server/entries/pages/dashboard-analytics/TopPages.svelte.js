import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const analytucsTopPages = [
  {
    id: 1,
    page: "/themesbrand/skote-25867",
    active: "99",
    user: "25.3%"
  },
  {
    id: 2,
    page: "/dashonic/chat-24518",
    active: "86",
    user: "22.7%"
  },
  {
    id: 3,
    page: "/skote/timeline-27391",
    active: "64",
    user: "18.7%"
  },
  {
    id: 4,
    page: "/themesbrand/minia-26441",
    active: "53",
    user: "14.2%"
  },
  {
    id: 5,
    page: "/dashon/dashboard-29873",
    active: "33",
    user: "12.6%"
  },
  {
    id: 6,
    page: "/doot/chats-29964",
    active: "20",
    user: "10.9%"
  },
  {
    id: 7,
    page: "/minton/pages-29739",
    active: "10",
    user: "07.3%"
  }
];
const MOCK_DATA = {
  analytucsTopPages
};
const TopPages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Top Pages</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    color: "",
                    class: "text-reset dropdown-btn p-0",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted fs-16"}"><i class="${"mdi mdi-dots-vertical align-middle"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
              return `<div class="${"table-responsive table-card"}"><table class="${"table align-middle table-borderless table-centered table-nowrap mb-0"}"><thead class="${"text-muted table-light"}"><tr><th scope="${"col"}" style="${"width: 62"}">Active Page</th>
							<th scope="${"col"}">Active</th>
							<th scope="${"col"}">Users</th></tr></thead>
					<tbody>${each(MOCK_DATA.analytucsTopPages, (item) => {
                return `<tr><td><a${add_attribute("href", null, 0)}>${escape(item.page)}</a></td>
                            <td>${escape(item.active)}</td>
                            <td>${escape(item.user)}</td>
                        </tr>`;
              })}</tbody></table></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { TopPages as default };
