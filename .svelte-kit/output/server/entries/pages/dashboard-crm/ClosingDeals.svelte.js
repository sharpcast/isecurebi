import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardcrm-c5028973.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
const ClosingDeals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 7 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Closing Deals</h4>
			<div class="${"flex-shrink-0"}"><select class="${"form-select form-select-sm"}"><option defaultvalue="${""}" value="${"Closed Deals"}">Closed Deals</option><option value="${"1"}">Active Deals</option><option value="${"2"}">Paused Deals</option><option value="${"3"}">Canceled Deals</option></select></div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive"}"><table class="${"table table-bordered table-nowrap align-middle mb-0"}"><thead><tr><th scope="${"col"}" style="${"width: 30%"}">Deal Name</th>
							<th scope="${"col"}" style="${"width: 30%"}">Sales Rep</th>
							<th scope="${"col"}" style="${"width: 20%"}">Amount</th>
							<th scope="${"col"}" style="${"width: 20%"}">Close Date</th></tr></thead>

					<tbody>${each(MOCK_DATA.closingDeals, (item) => {
                return `<tr><td>${escape(item.dealName)}</td>
								<td><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle me-2"}">
									<a${add_attribute("href", null, 0)} class="${"text-body fw-medium"}">${escape(item.salesRep)}</a></td>
								<td>$${escape(item.amount)}K</td>
								<td>${escape(item.closeDate)}</td>
							</tr>`;
              })}</tbody></table></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { ClosingDeals as default };
