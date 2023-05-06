import { c as create_ssr_component, h as compute_rest_props, s as setContext, v as validate_component, p as createEventDispatcher, j as spread, k as escape_object, l as escape_attribute_value, g as getContext, a as subscribe, b as escape } from "./index-584434b3.js";
import { w as writable } from "./index-bddc6f42.js";
import { c as classnames } from "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "./Nav-20bf87e5.js";
import { N as NavItem } from "./NavItem-0af381c7.js";
import { N as NavLink } from "./NavLink-7c96aa43.js";
const TabHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("tabs", true);
  return `${validate_component(Nav, "Nav").$$render($$result, Object.assign($$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "pills", "vertical"]);
  const dispatch = createEventDispatcher();
  let { class: className = "" } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  const activeTabId = writable();
  setContext("tabContent", {
    activeTabId,
    setActiveTab: (tabId) => {
      activeTabId.set(tabId);
      dispatch("tab", tabId);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  classes = classnames("tab-content", className, { "d-flex align-items-start": vertical });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${validate_component(TabHeader, "TabHeader").$$render($$result, {
    class: classnames({ "me-3": vertical }),
    pills,
    tabs: !pills,
    vertical
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const TabPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "tab", "tabId"]);
  let $activeTabId, $$unsubscribe_activeTabId;
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { tab = void 0 } = $$props;
  let { tabId = void 0 } = $$props;
  const tabs = getContext("tabs");
  const { activeTabId, setActiveTab } = getContext("tabContent");
  $$unsubscribe_activeTabId = subscribe(activeTabId, (value) => $activeTabId = value);
  let tabOpen = active;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0)
    $$bindings.tab(tab);
  if ($$props.tabId === void 0 && $$bindings.tabId && tabId !== void 0)
    $$bindings.tabId(tabId);
  {
    if ($activeTabId !== void 0)
      tabOpen = $activeTabId === tabId;
  }
  classes = classnames("tab-pane", className, { active: tabOpen, show: tabOpen });
  $$unsubscribe_activeTabId();
  return `${tabs ? `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavLink, "NavLink").$$render($$result, { active: tabOpen, disabled }, {}, {
        default: () => {
          return `${tab ? `${escape(tab)}` : ``}
      ${slots.tab ? slots.tab({}) : ``}`;
        }
      })}`;
    }
  })}` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
export { TabContent as T, TabPane as a };
