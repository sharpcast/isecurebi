import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as escape, d as add_attribute, q as compute_slots, p as createEventDispatcher, v as validate_component, m as missing_component } from "./index-584434b3.js";
import { I as InlineContainer, P as Portal } from "./Portal-94847a25.js";
import { c as classnames, b as browserEvent } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const OffcanvasBackdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = classnames(className, "offcanvas-backdrop");
  return `${isOpen ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const OffcanvasBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "offcanvas-body");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const OffcanvasHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "children", "closeAriaLabel", "toggle"]);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { toggle = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  classes = classnames(className, "offcanvas-header");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}><h5 class="${"offcanvas-title"}">${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</h5>
  ${slots.close ? slots.close({}) : `
    ${typeof toggle === "function" ? `<button${add_attribute("aria-label", closeAriaLabel, 0)} class="${"btn-close"}" type="${"button"}"></button>` : ``}
  `}</div>`;
});
const css = {
  code: ".overflow-noscroll{overflow:hidden;padding-right:0px}",
  map: null
};
const Offcanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let outer;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "backdrop",
    "body",
    "container",
    "fade",
    "header",
    "isOpen",
    "placement",
    "scroll",
    "style",
    "toggle"
  ]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { backdrop = true } = $$props;
  let { body = true } = $$props;
  let { container = "body" } = $$props;
  let { fade = true } = $$props;
  let { header = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { placement = "start" } = $$props;
  let { scroll = false } = $$props;
  let { style = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let isTransitioning = false;
  let element;
  let removeEscListener;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.scroll === void 0 && $$bindings.scroll && scroll !== void 0)
    $$bindings.scroll(scroll);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  $$result.css.add(css);
  {
    if (isOpen && toggle && typeof window !== "undefined") {
      removeEscListener = browserEvent(document, "keydown", (event) => {
        if (event.key && event.key === "Escape")
          toggle();
      });
    }
  }
  {
    if (!isOpen && removeEscListener) {
      removeEscListener();
    }
  }
  classes = classnames("offcanvas", `offcanvas-${placement}`, className, { show: isOpen });
  outer = container === "inline" ? InlineContainer : Portal;
  return `

${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `<div${spread([
        escape_object($$restProps),
        {
          "aria-hidden": escape_attribute_value(!isOpen ? true : void 0)
        },
        {
          "aria-modal": escape_attribute_value(isOpen ? true : void 0)
        },
        { class: escape_attribute_value(classes) },
        {
          role: escape_attribute_value(isOpen || isTransitioning ? "dialog" : void 0)
        },
        {
          style: escape_attribute_value(`visibility: ${isOpen || isTransitioning ? "visible" : "hidden"};${style}`)
        },
        { tabindex: "-1" }
      ], {})}${add_attribute("this", element, 0)}>${toggle || header || $$slots.header ? `${validate_component(OffcanvasHeader, "OffcanvasHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `${header ? `${escape(header)}` : ``}
        ${slots.header ? slots.header({}) : ``}`;
        }
      })}` : ``}
    ${body ? `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</div>
  ${backdrop ? `${validate_component(OffcanvasBackdrop, "OffcanvasBackdrop").$$render($$result, { fade, isOpen }, {}, {})}` : ``}`;
    }
  })}`;
});
export { Offcanvas as O, OffcanvasBody as a };
