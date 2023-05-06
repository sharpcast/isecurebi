import { c as create_ssr_component, h as compute_rest_props, v as validate_component, m as missing_component, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape } from "./index-584434b3.js";
import { c as createPopper } from "./popper-e421ff0f.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { I as InlineContainer, P as Portal } from "./Portal-94847a25.js";
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let outer;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "animation",
    "children",
    "container",
    "dismissible",
    "isOpen",
    "placement",
    "target",
    "title",
    "trigger"
  ]);
  let { class: className = "" } = $$props;
  let { animation = true } = $$props;
  let { children = void 0 } = $$props;
  let { container = void 0 } = $$props;
  let { dismissible = false } = $$props;
  let { isOpen = false } = $$props;
  let { placement = "top" } = $$props;
  let { target = "" } = $$props;
  let { title = "" } = $$props;
  let { trigger = "click" } = $$props;
  let targetEl;
  let popoverEl;
  let popperInstance;
  let bsPlacement;
  let popperPlacement = placement;
  const checkPopperPlacement = {
    name: "checkPopperPlacement",
    enabled: true,
    phase: "main",
    fn({ state }) {
      popperPlacement = state.placement;
    }
  };
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  {
    {
      if (isOpen && popoverEl) {
        popperInstance = createPopper(targetEl, popoverEl, {
          placement,
          modifiers: [
            checkPopperPlacement,
            {
              name: "offset",
              options: {
                offset: () => {
                  return [0, 8];
                }
              }
            }
          ]
        });
      } else if (popperInstance) {
        popperInstance.destroy();
        popperInstance = void 0;
      }
    }
  }
  {
    if (!target) {
      throw new Error("Need target!");
    }
  }
  {
    {
      if (popperPlacement === "left")
        bsPlacement = "start";
      else if (popperPlacement === "right")
        bsPlacement = "end";
      else
        bsPlacement = popperPlacement;
    }
  }
  classes = classnames(className, "popover", animation ? "fade" : false, `bs-popover-${bsPlacement}`, isOpen ? "show" : false);
  outer = container === "inline" ? InlineContainer : Portal;
  return `${isOpen ? `${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `<div${spread([
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { role: "tooltip" },
        {
          "x-placement": escape_attribute_value(popperPlacement)
        }
      ], {})}${add_attribute("this", popoverEl, 0)}><div class="${"popover-arrow"}" data-popper-arrow></div>
      <h3 class="${"popover-header"}">${slots.title ? slots.title({}) : `${escape(title)}`}</h3>
      <div class="${"popover-body"}">${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</div></div>`;
    }
  })}` : ``}`;
});
export { Popover as P };
