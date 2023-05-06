import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute, e as each } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardEcommerce-9ba23a89.js";
import { R as ReviewSlider } from "../../../chunks/ReviewSlider-5c633861.js";
import { i as img01 } from "../../../chunks/img-1-6f6b648d.js";
import { i as img02 } from "../../../chunks/img-2-4d0b6815.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       */import "../../../chunks/mousewheel-b011c830.js";
import "../../../chunks/autoplay-ee87b360.js";
var giftbox = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABBCAMAAABvjOMSAAAB1FBMVEUAAAC9qv91Tf27p/9zUPv7xRK7qf9zTv3/zRD5xRLnQDj7xxH7xxH7xxL7xBD7yBAgyHfjQDwgzXDlPz2+q/90T/7kQDrfQEDjPz0gx3cgyHcgyHYgyHb8xxIgyHblPzvlPzwgx3fkPjzmPztlO/plOvcgyHYgynUgx3e/qv+3ofd0Tv77xxEgyHflPzwgyHflPzzmPzwgyHf6xhL5xhIgx3fjPjz4xhF2T//6xRBwUP/lPzz7xxK9qf91T/7lvWe9kH/7xxLmPzx1Tv68qf+8qv91Tv3bt4fHmWr7yRL7xxK9qP90UP36yBCtlf/isjogyXbJr8+QZs4gyXbfr0DkQDv6xBB1UPr6yhB4UP8gyHjfQT91T/69qv/7xxJmPPoYETxzTf3MscSXbcLImmzkvGuynf6ynP65i4jcuIiKbCe1oP+GXt/lPzzEruGLXsDDkmnZqU7rv001KDdtVSzCmRwgyHeXdySnfKXywzS0jh9+Wv58VO/Yt5fImmsmHDlRPjHquC+mgyLxviDesBftvBSbgP6HZf55Vf7BrPDJr9LHqsOVa8HUtabgunnAk3netWvZrmrRol3Xp01CNDVDMzRgSS58YSrBmBzQpRnfsBfsuxXyp8W5AAAAXHRSTlMAYGBAQGCAgBCAIN+/j0Ag30AQ37++MBBQQO/PoJ9wYO+AgHBgYGAwIBD37+/ez7++r66goJCQcE8wEP7u39/fz8+/r6CQj4CAf35wcG9gYFFQUFBQMTEwMCAgECkfV0MAAALcSURBVFjD7Zh3UxNBGIdXIBrTOIKkE5rSi4AUe++9N3w5QEWiCBqSQADp9t7Ll3U3u95uQg7SbiRMnj9u5n479+Tdd/cy2aAVsA3bkIbYKw0o69HvtOhV0vSxmABj0sVNb6RrPwmM0kKhchMwTrHkdmqrdJZaAuFFMCr+QiMszQfoSBeNOsuT0nIRwSfLsg8O6lntRviBgxAQ9tDQUJSKXgcRvsqYMTDT0Axj5N5Px3QodcxU4ZcJPrCQ7BqZDNeb09DvoIpZOULARDLTT3r3nS15+voAFc6S8i1sLvKv9KvvAoqPlY9d7fMya1USvbepvLDMQRfzW7ixtLQx7BftUJiIvrhIbW15/f4liPBnhtoT7o3dUFxmiF++ERgheUyZykwIGEZ9AvphgkPtxWL8VioOLSp23JqUmsP97aCKSa12q1VFn79R4Phmwv4hzgORA5HhE5sEuiPylmCw7VZU9xFlwx2Bd0AYEpLJnig+AGFcjPKwxNNmRR0tKA5bRP1TILzmwcOeaB4B4bMYHcYSVw2eQTBB/ePV9E/EqARLmpwI1bg003ubnBekCs30qNrt9iKN9Iz/oT8q6t8DoV/Qv4zWDwDhmRgdW1Ffd2Rv/eA/6j8t4Kcn+gcVnvf0caYG5vDwwpcpJWnYV7ILrcK2Xs4oEEZ64zIChFEh2YofX9/6c/c5H4HwRkj6OG/pwgpJXgJ68VvtHts7nGX75q6QrDt9lU07vd2Omsu003eWa9ocgyPLlzanz+mT0W+3xVqtmdCr/SL2uoJSbab0rYeGm6Pqr5acqEKyZkjvKCuvjDqOeLz44q7RqjmeCnyRnBnTx/zP5HRV13ZI2m3My27JU5s1+z6nz+nXqN5hR4yq1kzpuxXJ1d1FygdVIZE6QTYNhGkhecFl48uO/De5xYDUOM1lryaIYUI8HE4qx8K5mGNhwxmUEHX5HIuOcFFICiiXzpOBKwUK1+Od2v4CF76IsJGNHdEAAAAASUVORK5CYII=";
const RecentActivity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-auto layout-rightside-col"}" id="${"layout-rightside-coll"}"><div class="${"overlay"}"></div>
	<div class="${"layout-rightside"}">${validate_component(Card, "Card").$$render($$result, { class: "h-100 rounded-0" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
        default: () => {
          return `<div class="${"p-3"}"><h6 class="${"text-muted mb-0 text-uppercase fw-semibold"}">Recent Activity
					</h6></div>
				<div data-simplebar style="${"max-height: 410px;"}" class="${"p-3 pt-0"}"><div class="${"acitivity-timeline acitivity-main"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}"><i class="${"ri-shopping-cart-2-line"}"></i></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Purchase by James Price
								</h6>
								<p class="${"text-muted mb-1"}">Product noise evolve smartwatch${escape(" ")}</p>
								<small class="${"mb-0 text-muted"}">02:14 PM Today</small></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle"}"><i class="${"ri-stack-fill"}"></i></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Added new${escape(" ")}
									<span class="${"fw-semibold"}">style collection</span></h6>
								<p class="${"text-muted mb-1"}">By Nesta Technologies
								</p>
								<div class="${"d-inline-flex gap-2 border border-dashed p-2 mb-2"}"><a href="${"/ecommerce/apps-ecommerce-product-details"}" class="${"bg-light rounded p-1"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}"></a>
									<a href="${"/ecommerce/apps-ecommerce-product-details"}" class="${"bg-light rounded p-1"}"><img${add_attribute("src", img02, 0)} alt="${""}" class="${"img-fluid d-block"}"></a>
									<a href="${"/ecommerce/apps-ecommerce-product-details"}" class="${"bg-light rounded p-1"}"><img${add_attribute("src", img01, 0)} alt="${""}" class="${"img-fluid d-block"}"></a></div>
								<p class="${"mb-0 text-muted"}"><small>9:47 PM Yesterday</small></p></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Natasha Carey have liked the products
								</h6>
								<p class="${"text-muted mb-1"}">Allow users to like products in your
									WooCommerce store.
								</p>
								<small class="${"mb-0 text-muted"}">25 Dec, 2021</small></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-secondary"}"><i class="${"mdi mdi-sale fs-14"}"></i></div></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Today offers by${escape(" ")}
									<a href="${"/ecommerce/apps-ecommerce-seller-details"}" class="${"link-secondary"}">Digitech Galaxy
									</a></h6>
								<p class="${"text-muted mb-2"}">Offer is valid on orders of Rs.500 Or above
									for selected products only.
								</p>
								<small class="${"mb-0 text-muted"}">12 Dec, 2021</small></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-bookmark-fill"}"></i></div></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Favoried Product</h6>
								<p class="${"text-muted mb-2"}">Esther James have favorited product.
								</p>
								<small class="${"mb-0 text-muted"}">25 Nov, 2021</small></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-secondary"}"><i class="${"mdi mdi-sale fs-14"}"></i></div></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Flash sale starting${escape(" ")}
									<span class="${"text-primary"}">Tomorrow.</span></h6>
								<p class="${"text-muted mb-0"}">Flash sale by${escape(" ")}
									<a${add_attribute("href", null, 0)} class="${"link-secondary fw-medium"}">Zoetic Fashion
									</a></p>
								<small class="${"mb-0 text-muted"}">22 Oct, 2021</small></div></div>
						<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Monthly sales report
								</h6>
								<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>${escape(" ")}
									notification to submit the monthly sales report.${escape(" ")}
									<a${add_attribute("href", null, 0)} class="${"link-warning text-decoration-underline"}">Reports Builder
									</a></p>
								<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
						<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
							<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 lh-base"}">Frank Hook Commented
								</h6>
								<p class="${"text-muted mb-2 fst-italic"}">&quot; A product that has reviews is more likable
									to be sold than a product. &quot;
								</p>
								<small class="${"mb-0 text-muted"}">26 Aug, 2021</small></div></div></div></div>

				<div class="${"p-3 mt-2"}"><h6 class="${"text-muted mb-3 text-uppercase fw-semibold"}">Top 10 Categories
					</h6>

					<ol class="${"ps-3 text-muted"}">${each(MOCK_DATA.topCategories, (item) => {
            return `<li class="${"py-1"}"><a${add_attribute("href", null, 0)} class="${"text-muted"}">${escape(item.category)}${escape(" ")}
									<span class="${"float-end"}">(${escape(item.total)})</span></a>
							</li>`;
          })}</ol>
					<div class="${"mt-3 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">View all Categories
						</a></div></div>
				<div class="${"p-3"}"><h6 class="${"text-muted mb-3 text-uppercase fw-semibold"}">Products Reviews
					</h6>
					${validate_component(ReviewSlider, "ReviewSlider").$$render($$result, {}, {}, {})}</div>

				<div class="${"p-3"}"><h6 class="${"text-muted mb-3 text-uppercase fw-semibold"}">Customer Reviews
					</h6>
					<div class="${"bg-light px-3 py-2 rounded-2 mb-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"fs-16 align-middle text-warning"}"><i class="${"ri-star-fill"}"></i>
									<i class="${"ri-star-fill"}"></i>
									<i class="${"ri-star-fill"}"></i>
									<i class="${"ri-star-fill"}"></i>
									<i class="${"ri-star-half-fill"}"></i></div></div>
							<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">4.5 out of 5</h6></div></div></div>
					<div class="${"text-center"}"><div class="${"text-muted"}">Total <span class="${"fw-medium"}">5.50k</span> reviews
						</div></div>

					<div class="${"mt-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
            default: () => {
              return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">5 star</h6></div></div>
							<div class="${"col"}"><div class="${"p-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                bar: true,
                class: "animated-progess progress-sm",
                color: "success",
                value: "50.16"
              }, {}, {})}</div></div>
							<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">2758</h6></div></div>`;
            }
          })}

						${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
            default: () => {
              return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">4 star</h6></div></div>
							<div class="${"col"}"><div class="${"p-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                bar: true,
                class: "animated-progess progress-sm",
                color: "success",
                value: "29.32"
              }, {}, {})}</div></div>
							<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">1063</h6></div></div>`;
            }
          })}

						${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
            default: () => {
              return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">3 star</h6></div></div>
							<div class="${"col"}"><div class="${"p-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                bar: true,
                class: "animated-progess progress-sm",
                color: "warning",
                value: "18.12"
              }, {}, {})}</div></div>
							<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">997</h6></div></div>`;
            }
          })}

						${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
            default: () => {
              return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">2 star</h6></div></div>
							<div class="${"col"}"><div class="${"p-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                bar: true,
                class: "animated-progess progress-sm",
                color: "success",
                value: "4.98"
              }, {}, {})}</div></div>

							<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">227</h6></div></div>`;
            }
          })}

						${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
            default: () => {
              return `<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0"}">1 star</h6></div></div>
							<div class="${"col"}"><div class="${"p-1"}">${validate_component(Progress, "Progress").$$render($$result, {
                bar: true,
                class: "animated-progess progress-sm",
                color: "danger",
                value: "7.42"
              }, {}, {})}</div></div>
							<div class="${"col-auto"}"><div class="${"p-1"}"><h6 class="${"mb-0 text-muted"}">408</h6></div></div>`;
            }
          })}</div></div>

				${validate_component(Card, "Card").$$render($$result, {
            class: "sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3"
          }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<img${add_attribute("src", giftbox, 0)} alt="${""}">
						<div class="${"mt-4"}"><h5>Invite New Seller</h5>
							<p class="${"text-muted lh-base"}">Refer a new seller to us and earn $100 per
								refer.
							</p>
							<button type="${"button"}" class="${"btn btn-primary btn-label rounded-pill"}"><i class="${"ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"}"></i>${escape(" ")}
								Invite Now
							</button></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export { RecentActivity as default };
