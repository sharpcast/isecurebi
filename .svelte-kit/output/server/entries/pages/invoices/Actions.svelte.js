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
        class: "btn-soft-secondary btn-sm dropdown",
        tag: "button"
      }, {}, {
        default: () => {
          return `<i class="${"ri-more-fill align-middle"}"></i>`;
        }
      })}
	${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            href: "/ecommerce/apps-ecommerce-product-details"
          }, {}, {
            default: () => {
              return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i>
			View
		`;
            }
          })}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/invoices/apps-invoices-create" }, {}, {
            default: () => {
              return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i>
			Edit
		`;
            }
          })}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
            href: "/ecommerce/apps-ecommerce-add-product"
          }, {}, {
            default: () => {
              return `<i class="${"ri-download-2-line align-bottom me-2 text-muted"}"></i>
			Download
		`;
            }
          })}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}

		${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i>
			Delete
		`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Actions as default };
