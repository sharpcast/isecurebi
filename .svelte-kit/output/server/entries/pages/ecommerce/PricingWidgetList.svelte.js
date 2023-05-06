import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const PricingWidgetList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pricingDetails } = $$props;
  if ($$props.pricingDetails === void 0 && $$bindings.pricingDetails && pricingDetails !== void 0)
    $$bindings.pricingDetails(pricingDetails);
  return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
    default: () => {
      return `<div class="${"p-2 border border-dashed rounded"}"><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm me-2"}"><div class="${"avatar-title rounded bg-transparent text-success fs-24"}"><i${add_attribute("class", pricingDetails.icon, 0)}></i></div></div>
			<div class="${"flex-grow-1"}"><p class="${"text-muted mb-1"}">${escape(pricingDetails.label)} :</p>
				<h5 class="${"mb-0"}">${escape(pricingDetails.labelDetail)}</h5></div></div></div>`;
    }
  })}`;
});
export { PricingWidgetList as default };
