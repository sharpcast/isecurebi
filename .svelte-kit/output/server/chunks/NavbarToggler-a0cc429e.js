import { c as create_ssr_component, h as compute_rest_props, v as validate_component } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { B as Button } from "./Button-ba828d9c.js";
const NavbarToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "navbar-toggler");
  return `${validate_component(Button, "Button").$$render($$result, Object.assign($$restProps, { class: classes }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : `
    <span class="${"navbar-toggler-icon"}"></span>
  `}`;
    }
  })}`;
});
export { NavbarToggler as N };
