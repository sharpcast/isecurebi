import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
        href: "#!",
        class: "btn-soft-secondary btn-sm",
        tag: "button"
      }, {}, {
        default: () => {
          return `<i class="${"ri-more-fill align-middle"}"></i>`;
        }
      })}
	${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "edit-item-btn" }, {}, {
            default: () => {
              return `Rename
		`;
            }
          })}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "regenerate-api-btn" }, {}, {
            default: () => {
              return `Regenerate Key
		`;
            }
          })}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "disable-btn", href: "#!" }, {}, {
            default: () => {
              return `Disable
		`;
            }
          })}
        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "remove-item-btn", href: "#!" }, {}, {
            default: () => {
              return `Delete
		`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Actions as default };
