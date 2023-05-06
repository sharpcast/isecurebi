import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const ContactAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul class="${"list-inline hstack gap-2 mb-0"}"><li class="${"list-inline-item edit"}" title="${"Call"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "text-muted d-inline-block"
  }, {}, {
    default: () => {
      return `<i class="${"ri-phone-line fs-16"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item edit"}" title="${"Message"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "text-muted d-inline-block"
  }, {}, {
    default: () => {
      return `<i class="${"ri-question-answer-line fs-16"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
        href: "#!",
        class: "btn-soft-secondary btn-sm dropdown",
        tag: "button"
      }, {}, {
        default: () => {
          return `<i class="${"ri-more-fill align-middle"}"></i>`;
        }
      })}
			${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i>
					View
				`;
            }
          })}
				${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            class: "dropdown-item edit-item-btn",
            href: "#!"
          }, {}, {
            default: () => {
              return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i>
					Edit
				`;
            }
          })}
				${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            class: "dropdown-item remove-item-btn",
            href: "#!"
          }, {}, {
            default: () => {
              return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i>
					Delete
				`;
            }
          })}`;
        }
      })}`;
    }
  })}</li></ul>`;
});
export { ContactAction as default };
