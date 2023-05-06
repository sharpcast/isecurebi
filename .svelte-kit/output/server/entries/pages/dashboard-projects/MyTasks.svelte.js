import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const MyTasks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectTasks } = $$props;
  if ($$props.projectTasks === void 0 && $$bindings.projectTasks && projectTasks !== void 0)
    $$bindings.projectTasks(projectTasks);
  return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
            class: "card-header align-items-center d-flex"
          }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1 py-1"}">My Tasks</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    tag: "a",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted"}">All Tasks <i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `All Tasks`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Completed`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Inprogress`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Pending`;
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
              return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, {
                class: "table-borderless table-nowrap table-centered align-middle mb-0"
              }, {}, {
                default: () => {
                  return `<thead class="${"table-light text-muted"}"><tr><th scope="${"col"}">Name</th>
							<th scope="${"col"}">Dedline</th>
							<th scope="${"col"}">Status</th>
							<th scope="${"col"}">Assignee</th></tr></thead>
					<tbody>${each(projectTasks, (item) => {
                    return `<tr><td><div class="${"form-check"}"><input class="${"form-check-input fs-15"}" type="${"checkbox"}" value="${""}"${add_attribute("id", item.forId, 0)}>
										${validate_component(Label, "Label").$$render($$result, {
                      class: "form-check-label ms-1",
                      for: item.forId
                    }, {}, {
                      default: () => {
                        return `${escape(item.label)}
										`;
                      }
                    })}
									</div></td>
								<td class="${"text-muted"}">${escape(item.dedline)}</td>
								<td><span${add_attribute("class", "badge badge-soft-" + item.statusClass, 0)}>${escape(item.status)}</span></td>
								<td><a${add_attribute("href", null, 0)} class="${"d-inline-block"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
									</a></td>
							</tr>`;
                  })}</tbody>`;
                }
              })}</div>
			<div class="${"mt-3 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">Load More</a></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { MyTasks as default };
