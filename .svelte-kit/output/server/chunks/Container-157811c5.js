import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Container as C };
