import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardEcommerce-9ba23a89.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/img-1-6f6b648d.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
const RecentOrders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Recent Orders</h4>
			<div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-info btn-sm"}"><i class="${"ri-file-list-3-line align-middle"}"></i> Generate Report
				</button></div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless table-centered align-middle table-nowrap mb-0"}"><thead class="${"text-muted table-light"}"><tr><th scope="${"col"}">Order ID</th>
							<th scope="${"col"}">Customer</th>
							<th scope="${"col"}">Product</th>
							<th scope="${"col"}">Amount</th>
							<th scope="${"col"}">Vendor</th>
							<th scope="${"col"}">Status</th>
							<th scope="${"col"}">Rating</th></tr></thead>
					<tbody>${each(MOCK_DATA.recentOrders, (item) => {
                return `<tr><td><a href="${"/ecommerce/apps-ecommerce-order-details"}" class="${"fw-medium link-primary"}">${escape(item.orderId)}</a></td>
								<td><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
										<div class="${"flex-grow-1"}">${escape(item.name)}</div>
									</div></td>
								<td>${escape(item.product)}</td>
								<td><span class="${"text-success"}">$${escape(item.amount)}</span></td>
								<td>${escape(item.vendor)}</td>
								<td><span${add_attribute("class", "badge badge-soft-" + item.statusClass, 0)}>${escape(item.status)}</span></td>
								<td><h5 class="${"fs-14 fw-medium mb-0"}">${escape(item.rating)}<span class="${"text-muted fs-11 ms-1"}">(${escape(item.votes)} votes)</span>
									</h5></td>
							</tr>`;
              })}</tbody></table></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { RecentOrders as default };
