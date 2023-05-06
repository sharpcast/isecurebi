import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import TeamMembersCharts from "./TeamMembersCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const TeamMembers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { teamMembers } = $$props;
  if ($$props.teamMembers === void 0 && $$bindings.teamMembers && teamMembers !== void 0)
    $$bindings.teamMembers(teamMembers);
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Team Members</h4>
            <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by: </span><span class="${"text-muted"}">Last 30 Days<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
                    ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Today`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Yesterday`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 7 Days`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 30 Days`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `This Month`;
                        }
                      })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Month`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}

        <div class="${"card-body"}"><div class="${"table-responsive table-card"}"><table class="${"table table-borderless table-nowrap align-middle mb-0"}"><thead class="${"table-light text-muted"}"><tr><th scope="${"col"}">Member</th>
                            <th scope="${"col"}">Hours</th>
                            <th scope="${"col"}">Tasks</th>
                            <th scope="${"col"}">Status</th></tr></thead>
                    <tbody>${each(teamMembers, (item) => {
            return `<tr><td class="${"d-flex"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-3 me-2"}">
                                <div><h5 class="${"fs-13 mb-0"}">${escape(item.name)}</h5>
                                    <p class="${"fs-12 mb-0 text-muted"}">${escape(item.position)}</p>
                                </div></td>
                            <td><h6 class="${"mb-0"}">${escape(item.hours)}h : <span class="${"text-muted"}">150h </span></h6></td>
                            <td>${escape(item.tasks)}</td>
                            <td style="${"width: 5%"}">${validate_component(TeamMembersCharts, "TeamMembersCharts").$$render($$result, {
              seriesData: item.series,
              id: item.id,
              chartsColor: item.chartsColor
            }, {}, {})}</td>
                        </tr>`;
          })}</tbody></table></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { TeamMembers as default };
