import { c as create_ssr_component, h as compute_rest_props, o as onDestroy, v as validate_component, m as missing_component, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape } from "./index-584434b3.js";
import { c as createPopper } from "./popper-e421ff0f.js";
import { u as uuid, c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { I as InlineContainer, P as Portal } from "./Portal-94847a25.js";
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let outer;
  let $$restProps = compute_rest_props($$props, ["class", "animation", "children", "container", "id", "isOpen", "placement", "target"]);
  let { class: className = "" } = $$props;
  let { animation = true } = $$props;
  let { children = void 0 } = $$props;
  let { container = void 0 } = $$props;
  let { id = `tooltip_${uuid()}` } = $$props;
  let { isOpen = false } = $$props;
  let { placement = "top" } = $$props;
  let { target = "" } = $$props;
  let bsPlacement;
  let popperInstance;
  let popperPlacement = placement;
  let targetEl;
  let tooltipEl;
  const checkPopperPlacement = {
    name: "checkPopperPlacement",
    enabled: true,
    phase: "main",
    fn({ state }) {
      popperPlacement = state.placement;
    }
  };
  const open = () => isOpen = true;
  const close = () => isOpen = false;
  onDestroy(unregisterEventListeners);
  function registerEventListeners() {
    if (target == null || target.length == 0) {
      targetEl = null;
      return;
    }
    try {
      if (target instanceof HTMLElement) {
        targetEl = target;
      }
    } catch (e) {
    }
    if (targetEl == null) {
      try {
        targetEl = document.querySelector(`#${target}`);
      } catch (e) {
      }
    }
    if (targetEl) {
      targetEl.addEventListener("mouseover", open);
      targetEl.addEventListener("mouseleave", close);
      targetEl.addEventListener("focus", open);
      targetEl.addEventListener("blur", close);
    }
  }
  function unregisterEventListeners() {
    if (targetEl) {
      targetEl.removeEventListener("mouseover", open);
      targetEl.removeEventListener("mouseleave", close);
      targetEl.removeEventListener("focus", open);
      targetEl.removeEventListener("blur", close);
      targetEl.removeAttribute("aria-describedby");
    }
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  {
    {
      if (isOpen && tooltipEl) {
        popperInstance = createPopper(targetEl, tooltipEl, {
          placement,
          modifiers: [checkPopperPlacement]
        });
      } else if (popperInstance) {
        popperInstance.destroy();
        popperInstance = void 0;
      }
    }
  }
  {
    if (target) {
      unregisterEventListeners();
      registerEventListeners();
    }
  }
  {
    if (targetEl) {
      if (isOpen)
        targetEl.setAttribute("aria-describedby", id);
      else
        targetEl.removeAttribute("aria-describedby");
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
  classes = classnames(className, "tooltip", animation ? "fade" : false, `bs-tooltip-${bsPlacement}`, isOpen ? "show" : false);
  outer = container === "inline" ? InlineContainer : Portal;
  return `${isOpen ? `${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `<div${spread([
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { id: escape_attribute_value(id) },
        { role: "tooltip" },
        {
          "x-placement": escape_attribute_value(popperPlacement)
        }
      ], {})}${add_attribute("this", tooltipEl, 0)}><div class="${"tooltip-arrow"}" data-popper-arrow></div>
      <div class="${"tooltip-inner"}">${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</div></div>`;
    }
  })}` : ``}`;
});
export { Tooltip as T };
