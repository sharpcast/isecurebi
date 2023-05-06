import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const ModalHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "toggle", "closeAriaLabel", "children", "id"]);
  let { class: className = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { children = void 0 } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  classes = classnames(className, "modal-header");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}><h5 class="${"modal-title"}"${add_attribute("id", id, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</h5>
  ${slots.close ? slots.close({}) : `
    ${typeof toggle === "function" ? `<button type="${"button"}" class="${"btn-close"}"${add_attribute("aria-label", closeAriaLabel, 0)}></button>` : ``}
  `}</div>`;
});
export { ModalHeader as M };
