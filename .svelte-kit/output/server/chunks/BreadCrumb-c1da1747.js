import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from "./index-584434b3.js";
import { C as Col } from "./Col-cf9b7547.js";
import "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "./Row-089822f8.js";
const BreadCrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, pageTitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
        default: () => {
          return `<div class="${"page-title-box d-sm-flex align-items-center justify-content-between"}"><h4 class="${"mb-sm-0"}">${escape(title)}</h4>

			<div class="${"page-title-right"}"><ol class="${"breadcrumb m-0"}"><li class="${"breadcrumb-item"}"><a${add_attribute("href", null, 0)}>${escape(pageTitle)}</a></li>
					<li class="${"breadcrumb-item active"}">${escape(title)}</li></ol></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { BreadCrumb as B };
