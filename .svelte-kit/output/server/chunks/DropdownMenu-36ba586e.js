import { c as create_ssr_component, h as compute_rest_props, s as setContext, g as getContext, o as onDestroy, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, a as subscribe } from "./index-584434b3.js";
import { c as createPopper } from "./popper-e421ff0f.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { w as writable } from "./index-bddc6f42.js";
function createPopperActions(initOptions) {
  let contentNode;
  let options = initOptions;
  let popperInstance = null;
  let referenceNode;
  const initPopper = () => {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };
  const deinitPopper = () => {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };
  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      }
    };
  };
  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = Object.assign(Object.assign({}, initOptions), contentOptions);
    initPopper();
    return {
      update(newContentOptions) {
        options = Object.assign(Object.assign({}, initOptions), newContentOptions);
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      },
      destroy() {
        deinitPopper();
      }
    };
  };
  return [referenceAction, contentAction, () => popperInstance];
}
const createContext = () => writable({});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subItemIsActive;
  let classes;
  let handleToggle;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "direction",
    "dropup",
    "group",
    "inNavbar",
    "isOpen",
    "nav",
    "setActiveFromChild",
    "size",
    "toggle"
  ]);
  const noop = () => void 0;
  let context = createContext();
  setContext("dropdownContext", context);
  const navbarContext = getContext("navbar");
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { direction = "down" } = $$props;
  let { dropup = false } = $$props;
  let { group = false } = $$props;
  let { inNavbar = navbarContext ? navbarContext.inNavbar : false } = $$props;
  let { isOpen = false } = $$props;
  let { nav = false } = $$props;
  let { setActiveFromChild = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  const [popperRef, popperContent] = createPopperActions();
  const validDirections = ["up", "down", "left", "right", "start", "end"];
  if (validDirections.indexOf(direction) === -1) {
    throw new Error(`Invalid direction sent: '${direction}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`);
  }
  let component;
  let dropdownDirection;
  function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== 9))
      return;
    if (component.contains(e.target) && component !== e.target && (e.type !== "keyup" || e.which === 9)) {
      return;
    }
    handleToggle(e);
  }
  onDestroy(() => {
    if (typeof document !== "undefined") {
      ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.dropup === void 0 && $$bindings.dropup && dropup !== void 0)
    $$bindings.dropup(dropup);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inNavbar === void 0 && $$bindings.inNavbar && inNavbar !== void 0)
    $$bindings.inNavbar(inNavbar);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.setActiveFromChild === void 0 && $$bindings.setActiveFromChild && setActiveFromChild !== void 0)
    $$bindings.setActiveFromChild(setActiveFromChild);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  subItemIsActive = !!(setActiveFromChild && component && typeof component.querySelector === "function" && component.querySelector(".active"));
  {
    {
      if (direction === "left")
        dropdownDirection = "start";
      else if (direction === "right")
        dropdownDirection = "end";
      else
        dropdownDirection = direction;
    }
  }
  handleToggle = toggle || (() => isOpen = !isOpen);
  classes = classnames(className, direction !== "down" && `drop${dropdownDirection}`, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
    "btn-group": group,
    [`btn-group-${size}`]: !!size,
    dropdown: !group,
    show: isOpen,
    "nav-item": nav
  });
  {
    {
      if (typeof document !== "undefined") {
        if (isOpen) {
          ["click", "touchstart", "keyup"].forEach((event) => document.addEventListener(event, handleDocumentClick, true));
        } else {
          ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
        }
      }
    }
  }
  {
    {
      context.update(() => {
        return {
          toggle: handleToggle,
          isOpen,
          direction: direction === "down" && dropup ? "up" : direction,
          inNavbar: nav || inNavbar,
          popperRef: nav ? noop : popperRef,
          popperContent: nav ? noop : popperContent
        };
      });
    }
  }
  return `${nav ? `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "divider", "header", "toggle", "href"]);
  let $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => value);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { divider = false } = $$props;
  let { header = false } = $$props;
  let { toggle = true } = $$props;
  let { href = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, {
    disabled,
    "dropdown-item": !divider && !header,
    active,
    "dropdown-header": header,
    "dropdown-divider": divider
  });
  $$unsubscribe_context();
  return `${header ? `<h6${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</h6>` : `${divider ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>` : `${href ? `<a${spread([
    escape_object($$restProps),
    { click: true },
    { href: escape_attribute_value(href) },
    { class: escape_attribute_value(classes) }
  ], {})}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread([
    { type: "button" },
    escape_object($$restProps),
    { class: escape_attribute_value(classes) }
  ], {})}>${slots.default ? slots.default({}) : ``}</button>`}`}`}`;
});
const DropdownMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "dark", "end", "right"]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { dark = false } = $$props;
  let { end = false } = $$props;
  let { right = false } = $$props;
  const popperPlacement = (direction, end2) => {
    let prefix = direction;
    if (direction === "up")
      prefix = "top";
    else if (direction === "down")
      prefix = "bottom";
    let suffix = end2 ? "end" : "start";
    return `${prefix}-${suffix}`;
  };
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  ({
    modifiers: [
      { name: "flip" },
      {
        name: "offset",
        options: { offset: [0, 2] }
      }
    ],
    placement: popperPlacement($context.direction, end || right)
  });
  classes = classnames(className, "dropdown-menu", {
    "dropdown-menu-dark": dark,
    "dropdown-menu-end": end || right,
    show: $context.isOpen
  });
  $$unsubscribe_context();
  return `<div${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    {
      "data-bs-popper": escape_attribute_value($context.inNavbar ? "static" : void 0)
    }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Dropdown as D, DropdownMenu as a, DropdownItem as b };
