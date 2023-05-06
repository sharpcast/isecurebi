import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as escape, d as add_attribute } from "./index-584434b3.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let progressBarClasses;
  let percent;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "bar",
    "multi",
    "value",
    "max",
    "animated",
    "striped",
    "color",
    "barClassName"
  ]);
  let { class: className = "" } = $$props;
  let { bar = false } = $$props;
  let { multi = false } = $$props;
  let { value = 0 } = $$props;
  let { max = 100 } = $$props;
  let { animated = false } = $$props;
  let { striped = false } = $$props;
  let { color = "" } = $$props;
  let { barClassName = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bar === void 0 && $$bindings.bar && bar !== void 0)
    $$bindings.bar(bar);
  if ($$props.multi === void 0 && $$bindings.multi && multi !== void 0)
    $$bindings.multi(multi);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.barClassName === void 0 && $$bindings.barClassName && barClassName !== void 0)
    $$bindings.barClassName(barClassName);
  classes = classnames(className, "progress");
  progressBarClasses = classnames("progress-bar", bar ? className || barClassName : barClassName, animated ? "progress-bar-animated" : null, color ? `bg-${color}` : null, striped || animated ? "progress-bar-striped" : null);
  percent = parseInt(value, 10) / parseInt(max, 10) * 100;
  return `${bar ? `${multi ? `${slots.default ? slots.default({}) : ``}` : `<div${spread([
    escape_object($$restProps),
    {
      class: escape_attribute_value(progressBarClasses)
    },
    {
      style: "width: " + escape(percent, true) + "%"
    },
    { role: "progressbar" },
    {
      "aria-valuenow": escape_attribute_value(value)
    },
    { "aria-valuemin": "0" },
    {
      "aria-valuemax": escape_attribute_value(max)
    }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>`}` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${multi ? `${slots.default ? slots.default({}) : ``}` : `<div${add_attribute("class", progressBarClasses, 0)} style="${"width: " + escape(percent, true) + "%"}" role="${"progressbar"}"${add_attribute("aria-valuenow", value, 0)} aria-valuemin="${"0"}"${add_attribute("aria-valuemax", max, 0)}>${slots.default ? slots.default({}) : ``}</div>`}</div>`}`;
});
export { Progress as P };
