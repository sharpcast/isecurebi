import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, p as createEventDispatcher, o as onDestroy, v as validate_component, m as missing_component } from "./index-584434b3.js";
import { c as classnames, u as uuid } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { I as InlineContainer, P as Portal } from "./Portal-94847a25.js";
const ModalBackdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  let loaded = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = classnames(className, "modal-backdrop");
  return `${isOpen && loaded ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const css = {
  code: ".modal-open{overflow:hidden;padding-right:0}",
  map: null
};
const dialogBaseClass = "modal-dialog";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outer;
  compute_rest_props($$props, [
    "class",
    "static",
    "isOpen",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "scrollable",
    "size",
    "toggle",
    "labelledBy",
    "backdrop",
    "wrapClassName",
    "modalClassName",
    "contentClassName",
    "fade",
    "unmountOnClose",
    "returnFocusAfterClose"
  ]);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { static: staticModal = false } = $$props;
  let { isOpen = false } = $$props;
  let { autoFocus = true } = $$props;
  let { body = false } = $$props;
  let { centered = false } = $$props;
  let { container = void 0 } = $$props;
  let { fullscreen = false } = $$props;
  let { header = void 0 } = $$props;
  let { scrollable = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { labelledBy = header ? `modal-${uuid()}` : void 0 } = $$props;
  let { backdrop = true } = $$props;
  let { wrapClassName = "" } = $$props;
  let { modalClassName = "" } = $$props;
  let { contentClassName = "" } = $$props;
  let { fade = true } = $$props;
  let { unmountOnClose = true } = $$props;
  let { returnFocusAfterClose = true } = $$props;
  onDestroy(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.static === void 0 && $$bindings.static && staticModal !== void 0)
    $$bindings.static(staticModal);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.wrapClassName === void 0 && $$bindings.wrapClassName && wrapClassName !== void 0)
    $$bindings.wrapClassName(wrapClassName);
  if ($$props.modalClassName === void 0 && $$bindings.modalClassName && modalClassName !== void 0)
    $$bindings.modalClassName(modalClassName);
  if ($$props.contentClassName === void 0 && $$bindings.contentClassName && contentClassName !== void 0)
    $$bindings.contentClassName(contentClassName);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.unmountOnClose === void 0 && $$bindings.unmountOnClose && unmountOnClose !== void 0)
    $$bindings.unmountOnClose(unmountOnClose);
  if ($$props.returnFocusAfterClose === void 0 && $$bindings.returnFocusAfterClose && returnFocusAfterClose !== void 0)
    $$bindings.returnFocusAfterClose(returnFocusAfterClose);
  $$result.css.add(css);
  classnames(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  return `${``}
${backdrop && !staticModal ? `${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalBackdrop, "ModalBackdrop").$$render($$result, { fade, isOpen }, {}, {})}`;
    }
  })}` : ``}`;
});
export { Modal as M };
