import { c as create_ssr_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardcrm-c5028973.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-xl-12"}"><div class="${"card crm-widget"}"><div class="${"card-body p-0"}"><div class="${"row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0"}">${each(MOCK_DATA.crmWidgets, (widget) => {
    return `<div class="${"col"}"><div class="${"py-4 px-3"}"><h5 class="${"text-muted text-uppercase fs-13"}">${escape(widget.label)}<i${add_attribute("class", widget.badge + " fs-18 float-end align-middle", 0)}></i></h5>
							<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i${add_attribute("class", widget.icon + " display-6 text-muted", 0)}></i></div>
								<div class="${"flex-grow-1 ms-3"}"><h2 class="${"mb-0"}">${escape(widget.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", widget.counter, 0)}>0</span>${escape(widget.suffix)}
									</h2></div>
							</div></div>
					</div>`;
  })}</div></div></div></div>`;
});
export { Widgets as default };
