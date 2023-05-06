import { c as create_ssr_component, d as add_attribute, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Attachement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { attachement } = $$props;
  if ($$props.attachement === void 0 && $$bindings.attachement && attachement !== void 0)
    $$bindings.attachement(attachement);
  return `<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-light text-secondary rounded fs-20"}"><i${add_attribute("class", attachement.foldericon, 0)}></i></div></div></div>
		<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "text-body text-truncate d-block"
  }, {}, {
    default: () => {
      return `${escape(attachement.foldername)}`;
    }
  })}</h5>
			<div class="${"text-muted"}">${escape(attachement.foldersize)}</div></div>
		<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-icon text-muted btn-sm fs-18"}"><i class="${"ri-download-2-line"}"></i></button>
				${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
        tag: "button",
        class: "btn btn-icon text-muted btn-sm fs-18 dropdown p-0",
        color: ""
      }, {}, {
        default: () => {
          return `<i class="${"ri-more-fill"}"></i>`;
        }
      })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `<i class="${"ri-share-line align-bottom me-2 text-muted"}"></i>${escape(" ")}
							Share
						`;
            }
          })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `<i class="${"ri-bookmark-line align-bottom me-2 text-muted"}"></i>${escape(" ")}
							Bookmark
						`;
            }
          })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `<i class="${"ri-delete-bin-line align-bottom me-2 text-muted"}"></i>${escape(" ")}
							Delete
						`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div></div></div>`;
});
export { Attachement as default };
