import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const Actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
        tag: "a",
        class: "btn btn-soft-secondary btn-sm"
      }, {}, {
        default: () => {
          return `<i class="${"ri-more-fill align-middle"}"></i>`;
        }
      })}
	${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
        default: () => {
          return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            href: "/support/ticketsdetails/apps-tickets-details"
          }, {}, {
            default: () => {
              return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i> View`;
            }
          })}</li>
		<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            class: "edit-item-btn",
            href: "#showModal",
            "data-bs-toggle": "modal"
          }, {}, {
            default: () => {
              return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Edit`;
            }
          })}</li>
		<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            class: "remove-item-btn",
            "data-bs-toggle": "modal",
            href: "#deleteOrder"
          }, {}, {
            default: () => {
              return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete
			`;
            }
          })}</li>`;
        }
      })}`;
    }
  })}`;
});
export { Actions as default };
