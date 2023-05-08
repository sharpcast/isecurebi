import { c as create_ssr_component, d as compute_rest_props, e as createEventDispatcher, f as spread, h as escape_attribute_value, j as escape_object, k as add_attribute, v as validate_component } from "../../../chunks/index-aeca7bd0.js";
import { C as Col } from "../../../chunks/Col-eedb9365.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-145966ab.js";
import { L as Link } from "../../../chunks/Link-ec28a239.js";
import { l as logolight } from "../../../chunks/logo-light-189a80ba.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread([
    {
      class: escape_attribute_value(classNames("splide", className))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread([
    {
      class: escape_attribute_value(classNames("splide__track", className))
    },
    escape_object($$restProps)
  ], {})}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread([
    {
      class: escape_attribute_value(classNames("splide__slide", className))
    },
    escape_object($$restProps)
  ], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
var splide_min = "";
const AuthSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
    default: () => {
      return `<div class="${"p-lg-5 p-4 auth-one-bg h-100"}"><div class="${"bg-overlay"}"></div>
		<div class="${"position-relative h-100 d-flex flex-column"}"><div class="${"mb-4"}">${validate_component(Link, "Link").$$render($$result, { href: "/dashboard", class: "d-block" }, {}, {
        default: () => {
          return `<img${add_attribute("src", logolight, 0)} alt="${""}" height="${"18"}">`;
        }
      })}</div>
			<div class="${"mt-auto"}"><div class="${"mb-3"}"><i class="${"ri-double-quotes-l display-4 text-success"}"></i></div>

				${validate_component(Splide_1, "Splide").$$render($$result, {
        options: { rewind: true, arrows: false },
        "aria-label": "Svelte Splide Example"
      }, {}, {
        default: () => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"carousel-inner text-center text-white-50 pb-5"}"><div class="${"item"}"><p class="${"fs-15 fst-italic"}">&quot; Great! Clean code, clean design, easy for
									customization. Thanks very much! &quot;
								</p></div></div>`;
            }
          })}
					${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"carousel-inner text-center text-white-50 pb-5"}"><div class="${"item"}"><p class="${"fs-15 fst-italic"}">&quot; The theme is really great with an amazing
									customer support.&quot;
								</p></div></div>`;
            }
          })}`;
        }
      })}</div></div></div>`;
    }
  })}`;
});
export { AuthSlider as default };
