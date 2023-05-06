import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, v as validate_component, p as createEventDispatcher, o as onDestroy, b as escape, y as get_store_value, a as subscribe, e as each, m as missing_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { w as writable } from "../../../chunks/index-bddc6f42.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { l as logosm } from "../../../chunks/logo-sm-b3903361.js";
import "../../../chunks/CardHeader-84e061db.js";
const ToastBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "toast-body");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ToastHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let tagClassName;
  let $$restProps = compute_rest_props($$props, ["class", "icon", "toggle", "closeAriaLabel"]);
  let { class: className = "" } = $$props;
  let { icon = null } = $$props;
  let { toggle = null } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  classes = classnames(className, "toast-header");
  tagClassName = classnames("me-auto", { "ms-2": icon != null });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${icon ? `<svg${add_attribute("class", `rounded text-${icon}`, 0)} width="${"20"}" height="${"20"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid slice"}" focusable="${"false"}" role="${"img"}"><rect fill="${"currentColor"}" width="${"100%"}" height="${"100%"}"></rect></svg>` : `${slots.icon ? slots.icon({}) : ``}`}
  <strong${add_attribute("class", tagClassName, 0)}>${slots.default ? slots.default({}) : ``}</strong>
  ${toggle ? `${slots.close ? slots.close({}) : `
      ${validate_component(Button, "Button").$$render($$result, {
    close: true,
    "aria-label": closeAriaLabel
  }, {}, {})}
    `}` : ``}</div>`;
});
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "autohide", "body", "delay", "duration", "fade", "header", "isOpen", "toggle"]);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { autohide = false } = $$props;
  let { body = false } = $$props;
  let { delay = 5e3 } = $$props;
  let { duration = 200 } = $$props;
  let { fade = true } = $$props;
  let { header = void 0 } = $$props;
  let { isOpen = true } = $$props;
  let { toggle = null } = $$props;
  let timeout;
  onDestroy(() => {
    return () => clearTimeout(timeout);
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.autohide === void 0 && $$bindings.autohide && autohide !== void 0)
    $$bindings.autohide(autohide);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  {
    if (isOpen && autohide) {
      timeout = setTimeout(() => isOpen = false, delay);
    }
  }
  classes = classnames(className, "toast", { show: isOpen });
  return `${isOpen ? `<div${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    { role: "alert" }
  ], {})}>${header ? `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle }, {}, {
    default: () => {
      return `${escape(header)}`;
    }
  })}` : ``}
    ${body ? `${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>` : ``}`;
});
function notificationsStore(initialValue = []) {
  const store = writable(initialValue);
  const { set, update, subscribe: subscribe2 } = store;
  let defaultOptions = {
    duration: 3e3,
    placement: "bottom-right",
    type: "info",
    theme: "dark"
  };
  function add(options) {
    const {
      duration = 3e3,
      placement = "bottom-right",
      type = "info",
      theme = "dark",
      ...rest
    } = { ...defaultOptions, ...options };
    const uid = Date.now();
    const obj = {
      ...rest,
      uid,
      placement,
      type,
      theme,
      duration,
      remove: () => {
        update((v) => v.filter((i) => i.uid !== uid));
      },
      update: (data) => {
        delete data.uid;
        const index = get_store_value(store)?.findIndex((v) => v?.uid === uid);
        if (index > -1) {
          update((v) => [
            ...v.slice(0, index),
            { ...v[index], ...data },
            ...v.slice(index + 1)
          ]);
        }
      }
    };
    update((v) => [...v, obj]);
    if (duration > 0) {
      setTimeout(() => {
        obj.remove();
        if (typeof obj.onRemove === "function")
          obj.onRemove();
      }, duration);
    }
    return obj;
  }
  function getById(uid) {
    return get_store_value(store)?.find((v) => v?.uid === uid);
  }
  function clearAll() {
    set([]);
  }
  function clearLast() {
    update((v) => {
      return v.slice(0, v.length - 1);
    });
  }
  function setDefaults(options) {
    defaultOptions = { ...defaultOptions, ...options };
  }
  return {
    subscribe: subscribe2,
    add,
    success: getHelper("success", add),
    info: getHelper("info", add),
    error: getHelper("error", add),
    warning: getHelper("warning", add),
    clearAll,
    clearLast,
    getById,
    setDefaults
  };
}
const toasts = notificationsStore([]);
function getHelper(type, add) {
  return function() {
    if (typeof arguments[0] === "object") {
      const options = arguments[0];
      return add({ ...options, type });
    } else if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
      const options = arguments[2] || {};
      return add({
        ...options,
        type,
        title: arguments[0],
        description: arguments[1]
      });
    } else if (typeof arguments[0] === "string") {
      const options = arguments[1] || {};
      return add({
        ...options,
        type,
        description: arguments[0]
      });
    }
  };
}
var ToastContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1rg6zyw.svelte-1rg6zyw{list-style:none;margin:0;padding:0}li.svelte-1rg6zyw.svelte-1rg6zyw{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.toast-container.svelte-1rg6zyw.svelte-1rg6zyw{z-index:9999;position:fixed;padding:4px;box-sizing:border-box;color:#fff;width:max-content;max-width:100%;pointer-events:none}.toast-container.bottom-right.svelte-1rg6zyw.svelte-1rg6zyw{bottom:1em;right:1em}.toast-container.bottom-left.svelte-1rg6zyw.svelte-1rg6zyw{bottom:1em;left:1em}.toast-container.top-left.svelte-1rg6zyw.svelte-1rg6zyw{top:1em;left:1em}.toast-container.top-right.svelte-1rg6zyw.svelte-1rg6zyw{top:1em;right:1em}.toast-container.top-center.svelte-1rg6zyw.svelte-1rg6zyw{top:1em;right:50%;left:50%;transform:translate(-50%, 0)}.toast-container.bottom-center.svelte-1rg6zyw.svelte-1rg6zyw{bottom:1em;right:50%;left:50%;transform:translate(-50%, 0)}.toast-container.center-center.svelte-1rg6zyw.svelte-1rg6zyw{top:50%;right:50%;left:50%;transform:translate(-50%, -50%)}.toast-container.svelte-1rg6zyw>.svelte-1rg6zyw:not(:last-child){margin-bottom:10px}",
  map: null
};
const ToastContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let { theme = "dark" } = $$props;
  let { placement = "bottom-right" } = $$props;
  let { type = "info" } = $$props;
  let { showProgress = false } = $$props;
  let { duration = 3e3 } = $$props;
  let { width = "320px" } = $$props;
  const placements = [
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
    "top-center",
    "bottom-center",
    "center-center"
  ];
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.showProgress === void 0 && $$bindings.showProgress && showProgress !== void 0)
    $$bindings.showProgress(showProgress);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$1);
  $$unsubscribe_toasts();
  return `${each(placements, (placement2) => {
    return `<div class="${"toast-container " + escape(placement2, true) + " svelte-1rg6zyw"}" style="${"width: " + escape(width, true)}"><ul class="${"svelte-1rg6zyw"}">${each($toasts.filter((n) => n.placement === placement2).reverse(), (toast) => {
      return `<li class="${"svelte-1rg6zyw"}">${toast.component ? `${validate_component(toast.component || missing_component, "svelte:component").$$render($$result, { data: toast }, {}, {})}` : `${slots.default ? slots.default({ data: toast }) : ``}`}
        </li>`;
    })}</ul>
  </div>`;
  })}`;
});
var BootstrapToast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".st-toast.svelte-1t011t6.svelte-1t011t6{width:100%;pointer-events:auto;cursor:pointer;z-index:10000;max-width:100%;font-size:0.875rem;pointer-events:auto;background-color:rgba(255, 255, 255, 0.85);background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.1);box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);border-radius:0.25rem}.st-toast.success.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(22, 163, 74);color:#fff}.st-toast.info.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(2, 132, 199);color:#fff}.st-toast.error.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(225, 29, 72);color:#fff}.st-toast.warning.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(202, 138, 4);color:#fff}.st-toast.dark.svelte-1t011t6.svelte-1t011t6{color:#fff;background:#393939}.st-toast.dark.svelte-1t011t6 .st-toast-close-btn svg.svelte-1t011t6{fill:#fff}.st-toast.dark.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6:focus{border:solid 1px #fff;border-radius:3px}.st-toast.dark.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6:focus:focus{border-color:#fff;outline:none}.st-toast.dark.success.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(22, 163, 74);color:#fff}.st-toast.dark.success.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:solid 1px #fff}.st-toast.dark.info.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(2, 132, 199);color:#fff}.st-toast.dark.info.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:solid 1px #fff}.st-toast.dark.error.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(225, 29, 72);color:#fff}.st-toast.dark.error.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:solid 1px #fff}.st-toast.dark.warning.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(202, 138, 4);color:#fff}.st-toast.dark.warning.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:solid 1px #fff}.st-toast.light.svelte-1t011t6.svelte-1t011t6{color:#161616}.st-toast.light.svelte-1t011t6 .st-toast-close-btn svg.svelte-1t011t6{color:#161616}.st-toast.light.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6:focus{border:solid 1px #fff;border-radius:3px}.st-toast.light.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6:focus:focus{border-color:#fff;outline:none}.st-toast.light.success.svelte-1t011t6.svelte-1t011t6{border-color:rgb(22, 163, 74);background:rgba(22, 163, 74, 0.2)}.st-toast.light.success.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(22, 163, 74);color:#fff}.st-toast.light.success.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:1px solid rgb(22, 163, 74)}.st-toast.light.info.svelte-1t011t6.svelte-1t011t6{border-color:rgb(2, 132, 199);background:rgba(2, 132, 199, 0.2)}.st-toast.light.info.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(2, 132, 199);color:#fff}.st-toast.light.info.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:1px solid rgb(2, 132, 199)}.st-toast.light.error.svelte-1t011t6.svelte-1t011t6{border-color:rgb(225, 29, 72);background:rgba(225, 29, 72, 0.2)}.st-toast.light.error.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(225, 29, 72);color:#fff}.st-toast.light.error.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:1px solid rgb(225, 29, 72)}.st-toast.light.warning.svelte-1t011t6.svelte-1t011t6{border-color:rgb(202, 138, 4);background:rgba(202, 138, 4, 0.2)}.st-toast.light.warning.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{fill:rgb(202, 138, 4);color:#fff}.st-toast.light.warning.svelte-1t011t6 .st-toast-header.svelte-1t011t6{border-bottom:1px solid rgb(202, 138, 4)}.st-toast-header.svelte-1t011t6.svelte-1t011t6{display:flex;align-items:center;align-items:center;padding:0.5rem 0.75rem;background-clip:padding-box;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.st-toast-header.svelte-1t011t6 .st-toast-title.svelte-1t011t6{flex:1;text-align:left;margin-left:0.5rem;outline:none}.st-toast-header.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6{margin-right:-0.375rem;margin-left:0.75rem;background:transparent;border:0}.st-toast-body.svelte-1t011t6.svelte-1t011t6{position:relative;padding:0.75rem 2rem 0.75rem 2rem;word-wrap:break-word;text-align:left}.st-toast-body.st-toast-no-title.svelte-1t011t6.svelte-1t011t6{padding-left:0.75rem}.st-toast-body.st-toast-no-title.svelte-1t011t6 .st-toast-icon.svelte-1t011t6{display:inline-block;position:relative;top:-1px}.st-toast-body.st-toast-no-title.svelte-1t011t6 .st-toast-description.svelte-1t011t6{margin-left:0.5rem}.st-toast-body.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6{position:absolute;right:10px;top:13px}.st-toast-body.svelte-1t011t6 .st-toast-close-btn.svelte-1t011t6:focus{border-color:#fff}",
  map: null
};
const BootstrapToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = "light" } = $$props;
  let { data = {} } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"st-toast bootstrap " + escape(data.theme || theme, true) + " " + escape(data.type || "info", true) + " svelte-1t011t6"}" role="${"alert"}" aria-live="${"assertive"}" aria-atomic="${"true"}">${data.title ? `<div class="${"st-toast-header svelte-1t011t6"}">${slots.icon ? slots.icon({}) : `
        ${data.type === "success" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}"></path><path fill="${"none"}" d="${"M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `${data.type === "info" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"}"></path></svg>` : `${data.type === "error" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}"></path><path d="${"M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}"></path><path d="${"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>`}`}`}
      `}
      <strong class="${"st-toast-title svelte-1t011t6"}">${escape(data.title)}</strong>
      
      <button data-notification-btn class="${"st-toast-close-btn svelte-1t011t6"}" type="${"button"}" aria-label="${"close"}">${slots["close-icon"] ? slots["close-icon"]({}) : `
          <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--toast-notification__close-icon svelte-1t011t6"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>
        `}</button></div>` : ``}
  <div class="${["st-toast-body svelte-1t011t6", !data.title ? "st-toast-no-title" : ""].join(" ").trim()}">${!data.title ? `${slots.icon ? slots.icon({}) : `
        ${data.type === "success" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}"></path><path fill="${"none"}" d="${"M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `${data.type === "info" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"}"></path></svg>` : `${data.type === "error" ? `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}"></path><path d="${"M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `<svg class="${"st-toast-icon svelte-1t011t6"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}"></path><path d="${"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>`}`}`}
      `}` : ``}
    <span class="${"st-toast-description svelte-1t011t6"}">${escape(data.description)}</span>
    ${!data.title ? `<button data-notification-btn class="${"st-toast-close-btn svelte-1t011t6"}" type="${"button"}" aria-label="${"close"}">${slots["close-icon"] ? slots["close-icon"]({}) : `
          <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--toast-notification__close-icon svelte-1t011t6"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>
        `}</button>` : ``}
    <div class="${"st-toast-extra"}">${slots.extra ? slots.extra({}) : ``}</div></div>
</div>`;
});
var FlatToast_svelte_svelte_type_style_lang = "";
const Uinotifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast1 = true;
  let toast2 = true;
  let toast3 = true;
  let toast4 = true;
  let toast5 = true;
  let toast6 = true;
  let toast7 = false;
  let toast8 = false;
  let toast9 = false;
  let toast10 = false;
  let toast11 = true;
  let position = "";
  const bootstrapToastsCode = `<!-- Default Toast --> 
	let toast1 = true;

<Toast isOpen={toast1}>
    <ToastHeader toggle={() => (toast1 = !toast1)}>
        <img src={logosm} class="rounded me-2" alt="..." height="20" />
        <span class="fw-semibold me-auto">Velzon</span>
        <small style="margin-left:140px">06 mins ago</small>
    </ToastHeader>
    <ToastBody>
        Hello, world! This is a toast message.
    </ToastBody>
</Toast>

<!-- Translucent Toast --> 
let toast2 = true;

<Toast isOpen={toast2}>
    <ToastHeader toggle={() => (toast2 = !toast2)}>
        <img src={logosm} class="rounded me-2" alt="..." height="20" />
    <span class="fw-semibold me-auto">Velzon</span>
    <small style="margin-left:"150px">11 mins ago</small>
    </ToastHeader>
    <ToastBody>
        Hello, world! This is a toast message.
    </ToastBody>
</Toast>

<!-- Stacking Toast --> 
let toast3 = true;

<Toast isOpen={toast3}>
    <ToastHeader toggle={() => (toast3 = !toast3)}>
        <img src={logosm} class="rounded me-2" alt="..." height="20" />
        <span class="fw-semibold me-auto">Velzon</span>
        <small style="margin-left:165px">Just now</small>
    </ToastHeader>
    <ToastBody>
        See? Just like this.
    </ToastBody>
</Toast>

<!-- Placement Toast --> 
let toast5 = true;

<div class="bg-light" style="position: 'relative'; min-height: '200px'">
    <Toast isOpen={toast5} style="position: 'absolute'; top: '16px'; right: '16px'">
        <ToastHeader toggle={() => (toast5 = !toast5)}>
            <img src={logosm} class="rounded me-2" alt="..." height="20" />
            <span class="fw-semibold me-auto">Velzon</span>
            <small style="margin-left:140px">06 mins ago</small>
        </ToastHeader>
        <ToastBody>
            Hello, world! This is a toast message.
        </ToastBody>
    </Toast>
</div>

 <!-- Flexbox container for aligning the toasts -->
 let toast6 = true;

<div class="bg-light d-flex justify-content-center align-items-center" style="height: 200px">
    <Toast isOpen={toast6}>
        <ToastHeader toggle={() => (toast6 = !toast6)}>
             <img src={logosm} class="rounded me-2" alt="..." height="20" />
             <span class="fw-semibold me-auto">Velzon</span>
             <small style="margin-left:"150px">11 mins ago</small>
        </ToastHeader>
        <ToastBody>
             Hello, world! This is a toast message.
        </ToastBody>
    </Toast>
</div>
`;
  const toastPlacementCode = `let toast11 = true;

let position = "";
const setPosition = (newpos) =>{
	position = newpos
}

<Form>
	<div class="mb-3">
		<select class="form-select mt-2" on:change={(e) => setPosition(e.currentTarget.value)}>
			<option value="" defaultValue>Select a position...</option>
			<option value="top-0 start-0">Top left</option>
			<option value="top-0 start-50 translate-middle-x">Top center</option>
			<option value="top-0 end-0">Top right</option>
			<option value="top-50 start-0 translate-middle-y">Middle left</option>
			<option value="top-50 start-50 translate-middle">Middle center</option>
			<option value="top-50 end-0 translate-middle-y">Middle right</option>
			<option value="bottom-0 start-0">Bottom left</option>
			<option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
			<option value="bottom-0 end-0">Bottom right</option>
		</select>
	</div>
</Form>
<div aria-live="polite" aria-atomic="true" class="bd-example bg-light position-relative" style="min-height: 300px">
	<div class={"toast-container position-absolute p-3 " + position} id="toastPlacement">
		<Toast isOpen={toast11}>
			<ToastHeader toggle={() =>
				(toast11 = !toast11)}>
				<img src={logosm} class="rounded me-2"
					alt="..." height="20" />
				<strong class="me-auto">Velzon</strong>
				<small style="margin-left: 150px">11 mins ago</small>
			</ToastHeader>
			<ToastBody>
				Hello, world! This is a toast message.
			</ToastBody>
		</Toast>
	</div>
</div>

`;
  const borderIconCode = `
<!-- Bordered With Icon Toast -->
<div class="hstack flex-wrap gap-2">
    <Button class="btn btn-primary" id="borderedToast1Btn" on:click={() => (toast7 = !toast7)} >Primary Toast</Button>
    <Button class="btn btn-success" id="borderedToast2Btn" on:click={() => (toast8 = !toast8)} >Success Toast</Button>
    <Button class="btn btn-warning" id="borderedTost3Btn" on:click={() => (toast9 = !toast9)} >Warning Toast</Button>
    <Button class="btn btn-danger" id="borderedToast4Btn" on:click={() => (toast10 = !toast10)} >Danger Toast</Button>
</div>
    
<div style="z-index: 11">
    <Toast isOpen={toast7} id="borderedToast1" class="toast-border-primary overflow-hidden mt-3">
        <ToastBody>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                    <i class="ri-user-smile-line align-middle"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="mb-0">Your application was successfully sent.</h6>
                </div>
            </div>
        </ToastBody>
    </Toast>
</div>
    
<div style="z-index: 11">
    <Toast isOpen={toast8} id="borderedToast2" class="toast-border-success overflow-hidden mt-3">
        <ToastBody>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                        <i class="ri-checkbox-circle-fill align-middle"></i>
                </div>
                <div class="flex-grow-1">
                        <h6 class="mb-0">Yey! Everything worked!</h6>
                </div>
            </div>
        </ToastBody>
    </Toast>
</div>
    
<div style="z-index: 11">
    <Toast isOpen={toast9} id="borderedToast3" class="toast-border-warning overflow-hidden mt-3">
        <ToastBody>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                    <i class="ri-notification-off-line align-middle"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="mb-0">Something went wrong, try again.</h6>
                </div>
            </div>
        </ToastBody>
    </Toast>
</div>
    
<div style="z-index: 11">
    <Toast isOpen={toast10} id="borderedToast4" class="toast-border-danger overflow-hidden mt-3">
        <ToastBody>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                    <i class="ri-alert-line align-middle"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="mb-0">Something is very wrong!  <Link href="#!" class="text-decoration-underline">See detailed report.</Link></h6>
                </div>
            </div>
        </ToastBody>
    </Toast>
</div>
`;
  const toastifyCode = `<!-- Toast -->
const defaultnotify = () => toast("Welcome Back! This is a Toast Notification", { position: "top-right", hideProgressBar: true, class: 'bg-primary text-white' });
const successnotify = () => toast("Your application was successfully sent", { position: "top-center", hideProgressBar: true, closeOn:click: false, class: 'bg-success text-white' });
const warningnotify = () => toast("Warning ! Something went wrong try again", { position: "top-center", hideProgressBar: true, closeOn:click: false, class: 'bg-warning text-white' });
const errornotify = () => toast("Error ! An error occurred.", { position: "top-center", hideProgressBar: true, closeOn:click: false, class: 'bg-danger text-white' });

<Button color="light" class="w-xs" on:click={defaultnotify}>Default</Button>
<Button color="light" class="w-xs" on:click={successnotify}>Success</Button>
<Button color="light" class="w-xs" on:click={warningnotify}>Warning</Button>
<Button color="light" class="w-xs" on:click={errornotify}>Error</Button>
<ToastContainer />

<!-- Display Position -->
const topleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-left", hideProgressBar: true, class: 'bg-success text-white' });
const topcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-center", hideProgressBar: true, class: 'bg-success text-white' });
const toprightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, class: 'bg-success text-white' });
const bottomleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-left", hideProgressBar: true, class: 'bg-success text-white' });
const bottomcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-center", hideProgressBar: true, class: 'bg-success text-white' });
const bottomrightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-right", hideProgressBar: true, class: 'bg-success text-white' });

<Button color="light" class="w-xs" on:click={topleftnotify}>Top Left</Button>
<Button color="light" class="w-xs" on:click={topcenternotify}>Top Center</Button>
<Button color="light" class="w-xs" on:click={toprightnotify}>Top Right</Button>
<Button color="light" class="w-xs" on:click={bottomleftnotify}>Bottom Left</Button>
<Button color="light" class="w-xs" on:click={bottomcenternotify}>Bottom Center</Button>
<Button color="light" class="w-xs" on:click={bottomrightnotify}>Bottom Right</Button>

<!-- Offset Position -->
const offsetnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, class: 'bg-success text-white m-5' });
<Button color="light" class="w-xs" on:click={offsetnotify} >Click Me</Button>

<!-- Close icon Display -->
const closeiconnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, class: 'bg-success text-white' });
<Button color="light" class="w-xs" on:click={closeiconnotify} >Click Me</Button>

<!-- Duration -->
const durationnotify = () => toast("Toast Duration 5s", { position: "top-right", hideProgressBar: false, class: 'bg-success text-white' });
<Button color="light" class="w-xs" on:click={durationnotify} >Click Me</Button>
`;
  return `${$$result.head += `${$$result.title = `<title>Notifications | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Notifications",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Bootstrap Toasts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<h5 class="${"fs-14 mb-3"}">Default Toast</h5>
									<div class="${"p-3 my-2 rounded"}">${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast1 }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast1 = !toast1 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
												<span class="${"fw-semibold me-auto"}">Velzon</span>
												<small style="${"margin-left: 140px"}">06 mins ago</small>`;
                                    }
                                  })}
											${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Hello, world! This is a toast
												message.`;
                                    }
                                  })}`;
                                }
                              })}</div>
									<div class="${"mt-4"}"><h5 class="${"fs-14"}">Translucent</h5>
										<p class="${"text-muted"}">Toasts are slightly translucent,
											too, so they blend over whatever
											they might appear over.
										</p>

										<div class="${"p-3 bg-light"}">${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast2 }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast2 = !toast2 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
													<span class="${"fw-semibold me-auto"}">Velzon</span>
													<small style="${"margin-left: 150px"}">11 mins ago</small>`;
                                    }
                                  })}
												${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Hello, world! This is a
													toast message.`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-14"}">Stacking</h5>
										<p class="${"text-muted"}">When you have multiple toasts, we
											default to vertically stacking them
											in a readable manner.
										</p>

										<div class="${"p-3 bg-light"}">${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast3 }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast3 = !toast3 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
													<span class="${"fw-semibold me-auto"}">Velzon</span>
													<small style="${"margin-left: 165px"}">Just now</small>`;
                                    }
                                  })}
												${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `See? Just like this.`;
                                    }
                                  })}`;
                                }
                              })}

											${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast4 }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast4 = !toast4 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
													<span class="${"fw-semibold me-auto"}">Velzon</span>
													<small style="${"margin-left: 130px"}">2 seconds ago</small>`;
                                    }
                                  })}
												${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Heads up, toasts will stack
													automatically`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}

							<div class="${"mt-5"}"><h5 class="${"fs-14"}">Placement</h5>
								${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><p class="${"text-muted"}">Place toasts with custom CSS as
												you need them. The top right is
												often used for notifications, as
												is the top middle. If you\u2019re
												only ever going to show one
												toast at a time, put the
												positioning styles right on the <code>.toast</code>.
											</p>
											<div class="${"bg-light"}" style="${"position: relative; min-height: 200px"}">${validate_component(Toast, "Toast").$$render($$result, {
                                isOpen: toast5,
                                style: "position: absolute; top: 16px; right: 16px"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast5 = !toast5 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
														<span class="${"fw-semibold me-auto"}">Velzon</span>
														<small style="${"margin-left: 140px"}">06 mins ago</small>`;
                                    }
                                  })}
													${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Hello, world! This is a
														toast message.`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}

									${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div><p class="${"text-muted"}">You can also get fancy with
												flexbox utilities to align
												toasts horizontally and/or
												vertically.
											</p>
											<div class="${"bg-light d-flex justify-content-center align-items-center"}" style="${"height: 200px"}">${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast6 }, {}, {
                                default: () => {
                                  return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast6 = !toast6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
														<span class="${"fw-semibold me-auto"}">Velzon</span>
														<small style="${"margin-left: 150px"}">11 mins ago</small>`;
                                    }
                                  })}
													${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Hello, world! This is a
														toast message.`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: bootstrapToastsCode,
                        id: "bootstrapToastsCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Toast Placement" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Various example of <code>toast placement</code>.</p>
						<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}"><select class="${"form-select mt-2"}"><option value="${""}" defaultvalue>Select a position...</option><option value="${"top-0 start-0"}">Top left</option><option value="${"top-0 start-50 translate-middle-x"}">Top center</option><option value="${"top-0 end-0"}">Top right</option><option value="${"top-50 start-0 translate-middle-y"}">Middle left</option><option value="${"top-50 start-50 translate-middle"}">Middle center</option><option value="${"top-50 end-0 translate-middle-y"}">Middle right</option><option value="${"bottom-0 start-0"}">Bottom left</option><option value="${"bottom-0 start-50 translate-middle-x"}">Bottom center</option><option value="${"bottom-0 end-0"}">Bottom right</option></select></div>`;
                        }
                      })}
							<div aria-live="${"polite"}" aria-atomic="${"true"}" class="${"bd-example bg-light position-relative"}" style="${"min-height: 300px"}"><div${add_attribute("class", "toast-container position-absolute p-3 " + position, 0)} id="${"toastPlacement"}">${validate_component(Toast, "Toast").$$render($$result, { isOpen: toast11 }, {}, {
                        default: () => {
                          return `${validate_component(ToastHeader, "ToastHeader").$$render($$result, { toggle: () => toast11 = !toast11 }, {}, {
                            default: () => {
                              return `<img${add_attribute("src", logosm, 0)} class="${"rounded me-2"}" alt="${"..."}" height="${"20"}">
											<strong class="${"me-auto"}">Velzon</strong>
											<small style="${"margin-left: 150px"}">11 mins ago</small>`;
                            }
                          })}
										${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `Hello, world! This is a toast message.
										`;
                            }
                          })}`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: toastPlacementCode,
                        id: "toastPlacementCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Bordered with Icon Toast" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>toast-border-</code> with below-mentioned color
							variation to set a toast with border and icon.
						</p>
						<div class="${"live-preview"}"><div class="${"position-relative"}"><div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-primary",
                        id: "borderedToast1Btn"
                      }, {}, {
                        default: () => {
                          return `Primary Toast`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-success",
                        id: "borderedToast2Btn"
                      }, {}, {
                        default: () => {
                          return `Success Toast`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-warning",
                        id: "borderedTost3Btn"
                      }, {}, {
                        default: () => {
                          return `Warning Toast`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-danger",
                        id: "borderedToast4Btn"
                      }, {}, {
                        default: () => {
                          return `Danger Toast`;
                        }
                      })}</div>

								<div style="${"z-index: 11"}">${validate_component(Toast, "Toast").$$render($$result, {
                        isOpen: toast7,
                        id: "borderedToast1",
                        class: "toast-border-primary overflow-hidden mt-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><i class="${"ri-user-smile-line align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Your application was
														successfully sent.
													</h6></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

								<div style="${"z-index: 11"}">${validate_component(Toast, "Toast").$$render($$result, {
                        isOpen: toast8,
                        id: "borderedToast2",
                        class: "toast-border-success overflow-hidden mt-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><i class="${"ri-checkbox-circle-fill align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Yey! Everything worked!
													</h6></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

								<div style="${"z-index: 11"}">${validate_component(Toast, "Toast").$$render($$result, {
                        isOpen: toast9,
                        id: "borderedToast3",
                        class: "toast-border-warning overflow-hidden mt-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><i class="${"ri-notification-off-line align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Something went wrong,
														try again.
													</h6></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
								<div style="${"z-index: 11"}">${validate_component(Toast, "Toast").$$render($$result, {
                        isOpen: toast10,
                        id: "borderedToast4",
                        class: "toast-border-danger overflow-hidden mt-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ToastBody, "ToastBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><i class="${"ri-alert-line align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">Something is very wrong! ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `See detailed
															report.`;
                                }
                              })}</h6></div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: borderIconCode,
                        id: "borderIconCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Toastify JS" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Default`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Error`;
                        }
                      })}
								${validate_component(ToastContainer, "ToastContainer").$$render($$result, {}, {}, {
                        default: ({ data }) => {
                          return `${validate_component(BootstrapToast, "BootstrapToast").$$render($$result, { data }, {}, {})}`;
                        }
                      })}</div>
							<div class="${"mt-4 pt-2"}"><h5 class="${"fs-14 mb-3"}">Display Position</h5>
								<div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Top Left`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Top Center`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Top Right`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Bottom Left`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Bottom Center`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                        default: () => {
                          return `Bottom Right`;
                        }
                      })}</div></div>

							${validate_component(Row, "Row").$$render($$result, { class: "mt-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4"}"><h5 class="${"fs-14 mb-3"}">Offset Position
										</h5>
										<div class="${"d-flex align-items-center flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                                default: () => {
                                  return `Click Me`;
                                }
                              })}</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4"}"><h5 class="${"fs-14 mb-3"}">Close icon Display
										</h5>
										<div class="${"d-flex align-items-center flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                                default: () => {
                                  return `Click Me`;
                                }
                              })}</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4"}"><h5 class="${"fs-14 mb-3"}">Duration</h5>
										<div class="${"d-flex align-items-center flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-xs" }, {}, {
                                default: () => {
                                  return `Click Me`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: toastifyCode, id: "toastifyCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Uinotifications as default };
