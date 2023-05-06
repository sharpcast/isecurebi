import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import "../../../chunks/img-1-6f6b648d.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/img-6-fd986b52.js";
import "../../../chunks/img-7-0d61b03f.js";
import "../../../chunks/img-8-1e4e4e71.js";
import "../../../chunks/img-10-2971869e.js";
import "../../../chunks/img-12-ccf074a3.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/img-6-7ff883ab.js";
import "../../../chunks/img-7-06bdf5b0.js";
import "../../../chunks/img-8-ebcd4c34.js";
const Apps_ecommerce_cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Cart | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Shopping Cart",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center gy-3 mb-3" }, {}, {
                default: () => {
                  return `<div class="${"col-sm"}"><div><h5 class="${"fs-14 mb-0"}">Your Cart (03 items)</h5></div></div>
					<div class="${"col-sm-auto"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/ecommerce/apps-ecommerce-products",
                    class: "link-primary text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Continue Shopping
						`;
                    }
                  })}</div>`;
                }
              })}
				${each(MOCK_DATA.shoppingCart, (cartItem) => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "product" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                          default: () => {
                            return `<div class="${"col-sm-auto"}"><div class="${"avatar-lg bg-light rounded p-1"}"><img${add_attribute("src", cartItem.img, 0)} alt="${""}" class="${"img-fluid d-block"}">
									</div></div>
								<div class="${"col-sm"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, {
                              href: "/ecommerce/apps-ecommerce-product-details",
                              class: "text-dark"
                            }, {}, {
                              default: () => {
                                return `${escape(cartItem.name)}
										`;
                              }
                            })}</h5>
									<ul class="${"list-inline text-muted"}"><li class="${"list-inline-item"}">Color :${escape(" ")}
											<span class="${"fw-medium"}">${escape(cartItem.color)}
											</span></li>
										<li class="${"list-inline-item"}">Size :${escape(" ")}
											<span class="${"fw-medium"}">${escape(cartItem.size)}</span>
										</li></ul>

									<div class="${"input-step"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                              default: () => {
                                return `-`;
                              }
                            })}
										${validate_component(Input, "Input").$$render($$result, {
                              type: "text",
                              class: "product-quantity",
                              value: cartItem.data_attr,
                              name: "demo_vertical",
                              readOnly: true
                            }, {}, {})}
										${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                              default: () => {
                                return `+`;
                              }
                            })}
									</div></div>
								<div class="${"col-sm-auto"}"><div class="${"text-lg-end"}"><p class="${"text-muted mb-1"}">Item Price:</p>
										<h5 class="${"fs-14"}">$
											<span id="${"ticket_price"}" class="${"product-price"}">${escape(cartItem.price)}
											</span></h5>
									</div></div>
							`;
                          }
                        })}
						`;
                      }
                    })}

						<div class="${"card-footer"}"><div class="${"row align-items-center gy-3"}"><div class="${"col-sm"}"><div class="${"d-flex flex-wrap my-n1"}"><div>${validate_component(Link, "Link").$$render($$result, {
                      href: "#!",
                      class: "d-block text-body p-1 px-2"
                    }, {}, {
                      default: () => {
                        return `<i class="${"ri-delete-bin-fill text-muted align-bottom me-1"}"></i>${escape(" ")}
												Remove
											`;
                      }
                    })}</div>
										<div>${validate_component(Link, "Link").$$render($$result, {
                      href: "#!",
                      class: "d-block text-body p-1 px-2"
                    }, {}, {
                      default: () => {
                        return `<i class="${"ri-star-fill text-muted align-bottom me-1"}"></i>${escape(" ")}
												Add Wishlist
											`;
                      }
                    })}</div>
									</div></div>
								<div class="${"col-sm-auto"}"><div class="${"d-flex align-items-center gap-2 text-muted"}"><div>Total :</div>
										<h5 class="${"fs-14 mb-0"}">$
											<span class="${"product-line-price"}">${escape(" ")}
												${escape(cartItem.total)}
											</span></h5>
									</div></div>
							</div></div>
					`;
                  }
                })}`;
              })}
				<div class="${"text-end mb-4"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/ecommerce/apps-ecommerce-checkout",
                class: "btn btn-success btn-label right ms-auto"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-arrow-right-line label-icon align-bottom fs-16 ms-2"}"></i>${escape(" ")}
						Checkout
					`;
                }
              })}</div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
            default: () => {
              return `<div class="${"sticky-side-div"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-bottom-dashed" }, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Order Summary</h5>`;
                    }
                  })}
						${validate_component(CardHeader, "CardHeader").$$render($$result, {
                    class: "bg-soft-light border-bottom-dashed"
                  }, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><h6 class="${"mb-2"}">Have a <span class="${"fw-semibold"}">promo</span> code ?
								</h6></div>
							<div class="${"hstack gap-3 px-3 mx-n3"}"><input class="${"form-control me-auto"}" type="${"text"}" placeholder="${"Enter coupon code"}" aria-label="${"Add Promo Code here..."}">
								<button type="${"button"}" class="${"btn btn-success w-xs"}">Apply </button></div>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-2" }, {}, {
                    default: () => {
                      return `<div class="${"table-responsive"}"><table class="${"table table-borderless mb-0"}"><tbody><tr><td>Sub Total :</td>
											<td class="${"text-end"}" id="${"cart-subtotal"}">$ 359.96 </td></tr>
										<tr><td>Discount${escape(" ")}
												<span class="${"text-muted"}">(VELZON15)</span> :${escape(" ")}</td>
											<td class="${"text-end"}" id="${"cart-discount"}">- $ 53.99 </td></tr>
										<tr><td>Shipping Charge :</td>
											<td class="${"text-end"}" id="${"cart-shipping"}">$ 65.00 </td></tr>
										<tr><td>Estimated Tax (12.5%) : </td>
											<td class="${"text-end"}" id="${"cart-tax"}">$ 44.99 </td></tr>
										<tr class="${"table-active"}"><th>Total (USD) :</th>
											<td class="${"text-end"}"><span class="${"fw-semibold"}" id="${"cart-total"}">$415.96 </span></td></tr></tbody></table></div>`;
                    }
                  })}`;
                }
              })}

					${validate_component(Alert, "Alert").$$render($$result, { color: "danger", class: "border-dashed" }, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center"}"><lord-icon src="${"//cdn.lordicon.com/nkmsrxys.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#f06548"}" style="${"width:80px;height:80px"}"></lord-icon>
							<div class="${"ms-2"}"><h5 class="${"fs-14 text-danger fw-semibold"}">${escape(" ")}
									Buying for a loved one?
								</h5>
								<p class="${"text-black mb-1"}">Gift wrap and personalised message on card, <br>
									Only for <span class="${"fw-semibold"}">$9.99</span> USD
								</p>
								<button type="${"button"}" class="${"btn ps-0 btn-sm btn-link text-danger text-uppercase"}">Add Gift Wrap
								</button></div></div>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_cart as default };
