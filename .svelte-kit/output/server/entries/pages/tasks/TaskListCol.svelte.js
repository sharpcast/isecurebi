import { c as create_ssr_component, e as each, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
const TaskListCol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let { row } = $$props;
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  items = row.cell(6).data;
  return `<div class="${"avatar-group"}">${each(items, (item, index) => {
    return `${validate_component(Link, "Link").$$render($$result, {
      href: "#!",
      class: "avatar-group-item",
      id: "avatar" + index
    }, {}, {
      default: () => {
        return `<img${add_attribute("src", item.img, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
        `;
      }
    })}
        ${validate_component(Tooltip, "Tooltip").$$render($$result, {
      target: "avatar" + index,
      placement: "top"
    }, {}, {
      default: () => {
        return `Alexis
          `;
      }
    })}`;
  })}</div>`;
});
export { TaskListCol as default };
