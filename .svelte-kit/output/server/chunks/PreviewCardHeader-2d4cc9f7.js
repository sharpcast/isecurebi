import { c as create_ssr_component, v as validate_component, b as escape } from "./index-584434b3.js";
import { C as CardHeader } from "./CardHeader-84e061db.js";
import "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const PreviewCardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
    default: () => {
      return `<h4 class="${"card-title mb-0 flex-grow-1"}">${escape(title)}</h4>
	`;
    }
  })}`;
});
export { PreviewCardHeader as P };
