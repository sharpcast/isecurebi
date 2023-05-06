import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardEcommerce-9ba23a89.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
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
const BestSellingProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Best Selling Products</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    color: "",
                    class: "text-reset p-0",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by:
						</span><span class="${"text-muted"}">Today<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Today`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Yesterday`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 7 Days`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last 30 Days`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `This Month`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Month`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><table class="${"table table-hover table-centered align-middle table-nowrap mb-0"}"><tbody>${each(MOCK_DATA.bestSellingProducts, (item) => {
                return `<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm bg-light rounded p-1 me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"img-fluid d-block"}"></div>
										<div><h5 class="${"fs-14 my-1"}"><a href="${"/ecommerce/apps-ecommerce-product-details"}" class="${"text-reset"}">${escape(item.label)}</a></h5>
											<span class="${"text-muted"}">${escape(item.date)}</span></div>
									</div></td>
								<td><h5 class="${"fs-14 my-1 fw-normal"}">$${escape(item.price)}</h5>
									<span class="${"text-muted"}">Price</span></td>
								<td><h5 class="${"fs-14 my-1 fw-normal"}">${escape(item.orders)}</h5>
									<span class="${"text-muted"}">Orders</span></td>
								<td><h5 class="${"fs-14 my-1 fw-normal"}">${item.stock ? `${escape(item.stock)}` : `<span class="${"badge badge-soft-danger"}">Out of stock</span>`}</h5>
									<span class="${"text-muted"}">Stock</span></td>
								<td><h5 class="${"fs-14 my-1 fw-normal"}">$${escape(item.amount)}</h5>
									<span class="${"text-muted"}">Amount</span></td>
							</tr>`;
              })}</tbody></table></div>

			<div class="${"align-items-center mt-4 pt-2 justify-content-between d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"text-muted"}">Showing <span class="${"fw-semibold"}">5</span> of <span class="${"fw-semibold"}">25</span> Results
					</div></div>
				<ul class="${"pagination pagination-separated pagination-sm mb-0"}"><li class="${"page-item disabled"}"><a href="${"!#"}" class="${"page-link"}">\u2190</a></li>
					<li class="${"page-item"}"><a href="${"!#"}" class="${"page-link"}">1</a></li>
					<li class="${"page-item active"}"><a href="${"!#"}" class="${"page-link"}">2</a></li>
					<li class="${"page-item"}"><a href="${"!#"}" class="${"page-link"}">3</a></li>
					<li class="${"page-item"}"><a href="${"!#"}" class="${"page-link"}">\u2192</a></li></ul></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { BestSellingProducts as default };