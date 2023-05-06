import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
const ActiveProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeProjects } = $$props;
  if ($$props.activeProjects === void 0 && $$bindings.activeProjects && activeProjects !== void 0)
    $$bindings.activeProjects(activeProjects);
  return `${validate_component(Col, "Col").$$render($$result, { xl: 7 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
            default: () => {
              return `<h4 class="${"card-title flex-grow-1 mb-0"}">Active Projects</h4>
			<div class="${"flex-shrink-0"}"><a${add_attribute("href", null, 0)} class="${"btn btn-soft-info btn-sm"}">Export Report</a></div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><table class="${"table table-nowrap table-centered align-middle"}"><thead class="${"bg-light text-muted"}"><tr><th scope="${"col"}">Project Name</th>
							<th scope="${"col"}">Project Lead</th>
							<th scope="${"col"}">Progress</th>
							<th scope="${"col"}">Assignee</th>
							<th scope="${"col"}">Status</th>
							<th scope="${"col"}" style="${"width: 10%"}">Due Date</th></tr></thead>

					<tbody>${each(activeProjects, (item) => {
                return `<tr><td class="${"fw-medium"}">${escape(item.projectName)}</td>
								<td><img${add_attribute("src", item.img, 0)} class="${"avatar-xxs rounded-circle me-1"}" alt="${""}">
									<a${add_attribute("href", null, 0)} class="${"text-reset"}">${escape(item.projectLead)}</a></td>
								<td><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-1 text-muted fs-13"}">${escape(item.percentage)}</div>
                                        ${validate_component(Progress, "Progress").$$render($$result, {
                  class: "progress-sm flex-grow-1 rounded",
                  color: "primary",
                  value: item.percentage
                }, {}, {})}
									</div></td>
								<td><div class="${"avatar-group flex-nowrap"}">${each(item.subItem, (item2) => {
                  return `<div class="${"avatar-group-item"}"><a${add_attribute("href", null, 0)} class="${"d-inline-block"}"><img${add_attribute("src", item2.assImg, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}"></a>
											</div>`;
                })}
									</div></td>
								<td><span${add_attribute("class", "badge badge-soft-" + item.badgeClass, 0)}>${escape(item.badge)}</span></td>
								<td class="${"text-muted"}">${escape(item.dueDate)}</td>
							</tr>`;
              })}</tbody></table></div>
			<div class="${"align-items-center mt-xl-3 mt-4 justify-content-between d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"text-muted"}">Showing <span class="${"fw-semibold"}">5</span> of <span class="${"fw-semibold"}">25</span> Results
					</div></div>
				<ul class="${"pagination pagination-separated pagination-sm mb-0"}"><li class="${"page-item disabled"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">\u2190</a></li>
					<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">1</a></li>
					<li class="${"page-item active"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">2</a></li>
					<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">3</a></li>
					<li class="${"page-item"}"><a${add_attribute("href", null, 0)} class="${"page-link"}">\u2192</a></li></ul></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { ActiveProjects as default };
