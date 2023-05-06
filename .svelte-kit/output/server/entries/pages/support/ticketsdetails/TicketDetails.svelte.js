import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
const TicketDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const allStatus = [
    { label: "Stauts", value: "Stauts" },
    { label: "New", value: "New" },
    { label: "Open", value: "Open" },
    { label: "Inprogress", value: "Inprogress" },
    { label: "Closed", value: "Closed" }
  ];
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<h5 class="${"card-title mb-0"}">Ticket Details</h5>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless align-middle mb-0"}"><tbody><tr><td class="${"fw-medium"}">Ticket</td>
							<td>#VLZ<span id="${"t-no"}">135</span></td></tr>
						<tr><td class="${"fw-medium"}">Client</td>
							<td id="${"t-client"}">Themesbrand</td></tr>
						<tr><td class="${"fw-medium"}">Project</td>
							<td>Velzon - Admin Dashboard</td></tr>
						<tr><td class="${"fw-medium"}">Assigned To:</td>
							<td><div class="${"avatar-group"}">${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "avatar-group-item",
                "data-bs-original-title": "Erica Kernan"
              }, {}, {
                default: () => {
                  return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-group-item" }, {}, {
                default: () => {
                  return `<img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-group-item" }, {}, {
                default: () => {
                  return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-group-item" }, {}, {
                default: () => {
                  return `<div class="${"avatar-xs"}"><div class="${"avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary"}">+
											</div></div>`;
                }
              })}</div></td></tr>
						<tr><td class="${"fw-medium"}">Status:</td>
							<td class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                class: "form-select",
                id: "t-status",
                items: allStatus
              }, {}, {})}</td></tr>
						<tr><td class="${"fw-medium"}">Priority</td>
							<td><span class="${"badge bg-danger"}" id="${"t-priority"}">High</span></td></tr>
						<tr><td class="${"fw-medium"}">Create Date</td>
							<td id="${"c-date"}">20 Dec, 2021</td></tr>
						<tr><td class="${"fw-medium"}">Due Date</td>
							<td id="${"d-date"}">29 Dec, 2021</td></tr>
						<tr><td class="${"fw-medium"}">Last Activity</td>
							<td>14 min ago</td></tr>
						<tr><td class="${"fw-medium"}">Labels</td>
							<td class="${"hstack text-wrap gap-1"}"><span class="${"badge badge-soft-primary"}">Admin</span>
								<span class="${"badge badge-soft-primary"}">UI</span>
								<span class="${"badge badge-soft-primary"}">Dashboard</span>
								<span class="${"badge badge-soft-primary"}">Design</span></td></tr></tbody></table></div>`;
            }
          })}
		`;
        }
      })}
	
	${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<h6 class="${"card-title fw-semibold mb-0"}">Files Attachment</h6>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center border border-dashed p-2 rounded"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><i class="${"ri-file-zip-line fs-20 text-primary"}"></i></div></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                default: () => {
                  return `Velzon-admin.zip`;
                }
              })}</h6>
					<small class="${"text-muted"}">3.2 MB</small></div>
				<div class="${"hstack gap-3 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-muted" }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
					${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-muted" }, {}, {
                default: () => {
                  return `<i class="${"ri-delete-bin-line"}"></i>`;
                }
              })}</div></div>
			<div class="${"d-flex align-items-center border border-dashed p-2 rounded mt-2"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><i class="${"ri-file-ppt-2-line fs-20 text-danger"}"></i></div></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                default: () => {
                  return `Velzon-admin.ppt`;
                }
              })}</h6>
					<small class="${"text-muted"}">4.5 MB</small></div>
				<div class="${"hstack gap-3 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-muted" }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
					${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-muted" }, {}, {
                default: () => {
                  return `<i class="${"ri-delete-bin-line"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { TicketDetails as default };
