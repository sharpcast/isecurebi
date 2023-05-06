import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { i as img7 } from "../../../chunks/img-7-0d61b03f.js";
import { i as img03 } from "../../../chunks/img-3-6f709142.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
const Apps_ecommerce_order_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Order Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Order Details",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><h5 class="${"card-title flex-grow-1 mb-0"}">Order #VL2667</h5>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/invoices/apps-invoices-details",
                        class: "btn btn-success btn-sm"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-download-2-fill align-middle me-1"}"></i> Invoice`;
                        }
                      })}</div></div>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"table-responsive table-card"}"><table class="${"table table-nowrap align-middle table-borderless mb-0"}"><thead class="${"table-light text-muted"}"><tr><th scope="${"col"}">Product Details</th>
										<th scope="${"col"}">Item Price</th>
										<th scope="${"col"}">Quantity</th>
										<th scope="${"col"}">Rating</th>
										<th scope="${"col"}" class="${"text-end"}">Total Amount</th></tr></thead>
								<tbody><tr><td><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}"></div>
												<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/ecommerce/apps-ecommerce-product-details",
                        class: "link-primary"
                      }, {}, {
                        default: () => {
                          return `Sweatshirt for Men (Pink)`;
                        }
                      })}</h5>
													<p class="${"text-muted mb-0"}">Color: <span class="${"fw-medium"}">Pink</span></p>
													<p class="${"text-muted mb-0"}">Size: <span class="${"fw-medium"}">M</span></p></div></div></td>
										<td>$119.99</td>
										<td>02</td>
										<td><div class="${"text-warning fs-15"}"><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-half-fill"}"></i></div></td>
										<td class="${"fw-medium text-end"}">$239.98 </td></tr>
									<tr><td><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid d-block"}"></div>
												<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/ecommerce/apps-ecommerce-product-details",
                        class: "link-primary"
                      }, {}, {
                        default: () => {
                          return `Noise NoiseFit Endure Smart Watch`;
                        }
                      })}</h5>
													<p class="${"text-muted mb-0"}">Color: <span class="${"fw-medium"}">Black</span></p>
													<p class="${"text-muted mb-0"}">Size: <span class="${"fw-medium"}">32.5mm</span></p></div></div></td>
										<td>$94.99</td>
										<td>01</td>
										<td><div class="${"text-warning fs-15"}"><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-half-fill"}"></i></div></td>
										<td class="${"fw-medium text-end"}">$94.99 </td></tr>
									<tr><td><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img03, 0)} alt="${""}" class="${"img-fluid d-block"}"></div>
												<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/ecommerce/apps-ecommerce-product-details",
                        class: "link-primary"
                      }, {}, {
                        default: () => {
                          return `350 ml Glass Grocery Container`;
                        }
                      })}</h5>
													<p class="${"text-muted mb-0"}">Color: <span class="${"fw-medium"}">White</span></p>
													<p class="${"text-muted mb-0"}">Size: <span class="${"fw-medium"}">350 ml</span></p></div></div></td>
										<td>$24.99</td>
										<td>01</td>
										<td><div class="${"text-warning fs-15"}"><i class="${"ri-star-fill"}"></i><i class="${"ri-star-fill"}"></i><i class="${"ri-star-half-fill"}"></i><i class="${"ri-star-line"}"></i><i class="${"ri-star-line"}"></i></div></td>
										<td class="${"fw-medium text-end"}">$24.99 </td></tr>
									<tr class="${"border-top border-top-dashed"}"><td colspan="${"3"}"></td>
										<td colspan="${"2"}" class="${"fw-medium p-0"}"><table class="${"table table-borderless mb-0"}"><tbody><tr><td>Sub Total :</td>
														<td class="${"text-end"}">$359.96</td></tr>
													<tr><td>Discount <span class="${"text-muted"}">(VELZON15)</span> : : </td>
														<td class="${"text-end"}">-$53.99</td></tr>
													<tr><td>Shipping Charge :</td>
														<td class="${"text-end"}">$65.00</td></tr>
													<tr><td>Estimated Tax :</td>
														<td class="${"text-end"}">$44.99</td></tr>
													<tr class="${"border-top border-top-dashed"}"><th scope="${"row"}">Total (USD) :</th>
														<th class="${"text-end"}">$415.96</th></tr></tbody></table></td></tr></tbody></table></div>`;
                    }
                  })}`;
                }
              })}
				
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-sm-flex align-items-center"}"><h5 class="${"card-title flex-grow-1 mb-0"}">Order Status</h5>
							<div class="${"flex-shrink-0 mt-2 mt-sm-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "javasccript:void(0;)",
                        class: "btn btn-soft-info btn-sm mt-2 mt-sm-0"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-map-pin-line align-middle me-1"}"></i> Change Address`;
                        }
                      })}
								${validate_component(Link, "Link").$$render($$result, {
                        href: "javasccript:void(0;)",
                        class: "btn btn-soft-danger btn-sm mt-2 mt-sm-0"
                      }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-archive-remove-outline align-middle me-1"}"></i> Cancel Order`;
                        }
                      })}</div></div>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"profile-timeline"}"><div class="${"accordion accordion-flush"}" id="${"accordionFlushExample"}"><div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingOne"}">${validate_component(Link, "Link").$$render($$result, {
                        class: "accordion-button p-2 shadow-none",
                        id: "collapseOne"
                      }, {}, {
                        default: () => {
                          return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-success rounded-circle"}"><i class="${"ri-shopping-bag-line"}"></i></div></div>
												<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-15 mb-0 fw-semibold"}">Order Placed - <span class="${"fw-normal"}">Wed, 15 Dec 2021</span></h6></div></div>`;
                        }
                      })}</div>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "collapseOne",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body ms-2 ps-5 pt-0"}"><h6 class="${"mb-1"}">An order has been placed.</h6>
											<p class="${"text-muted"}">Wed, 15 Dec 2021 - 05:34PM</p>

											<h6 class="${"mb-1"}">Seller has proccessed your order.</h6>
											<p class="${"text-muted mb-0"}">Thu, 16 Dec 2021 - 5:48AM</p></div>`;
                        }
                      })}</div>
								<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingTwo"}">${validate_component(Link, "Link").$$render($$result, {
                        class: "accordion-button p-2 shadow-none",
                        id: "collapseTwo"
                      }, {}, {
                        default: () => {
                          return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-success rounded-circle"}"><i class="${"mdi mdi-gift-outline"}"></i></div></div>
												<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-15 mb-1 fw-semibold"}">Packed - <span class="${"fw-normal"}">Thu, 16 Dec 2021</span></h6></div></div>`;
                        }
                      })}</div>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "collapseTwo",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body ms-2 ps-5 pt-0"}"><h6 class="${"mb-1"}">Your Item has been picked up by courier patner</h6>
											<p class="${"text-muted mb-0"}">Fri, 17 Dec 2021 - 9:45AM</p></div>`;
                        }
                      })}</div>
								<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingThree"}">${validate_component(Link, "Link").$$render($$result, {
                        class: "accordion-button p-2 shadow-none",
                        id: "collapseThree"
                      }, {}, {
                        default: () => {
                          return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-success rounded-circle"}"><i class="${"ri-truck-line"}"></i></div></div>
												<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-15 mb-1 fw-semibold"}">Shipping - <span class="${"fw-normal"}">Thu, 16 Dec 2021</span></h6></div></div>`;
                        }
                      })}</div>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "collapseThree",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body ms-2 ps-5 pt-0"}"><h6 class="${"fs-14"}">RQK Logistics - MFDS1400457854</h6>
											<h6 class="${"mb-1"}">Your item has been shipped.</h6>
											<p class="${"text-muted mb-0"}">Sat, 18 Dec 2021 - 4.54PM</p></div>`;
                        }
                      })}</div>
								<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingFour"}">${validate_component(Link, "Link").$$render($$result, {
                        class: "accordion-button p-2 shadow-none",
                        "data-bs-toggle": "collapse",
                        href: "#collapseFour",
                        "aria-expanded": "false"
                      }, {}, {
                        default: () => {
                          return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-success rounded-circle"}"><i class="${"ri-takeaway-fill"}"></i></div></div>
												<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-0 fw-semibold"}">Out For Delivery</h6></div></div>`;
                        }
                      })}</div></div>
								<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingFive"}">${validate_component(Link, "Link").$$render($$result, {
                        class: "accordion-button p-2 shadow-none",
                        "data-bs-toggle": "collapse",
                        href: "#collapseFile",
                        "aria-expanded": "false"
                      }, {}, {
                        default: () => {
                          return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-success rounded-circle"}"><i class="${"mdi mdi-package-variant"}"></i></div></div>
												<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-0 fw-semibold"}">Delivered</h6></div></div>`;
                        }
                      })}</div></div></div>
							</div>`;
                    }
                  })}`;
                }
              })}
				`;
            }
          })}
			
			<div class="${"col-xl-3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex"}"><h5 class="${"card-title flex-grow-1 mb-0"}"><i class="${"mdi mdi-truck-fast-outline align-middle me-1 text-muted"}"></i>
								Logistics Details
							</h5>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge badge-soft-primary fs-11"
                  }, {}, {
                    default: () => {
                      return `Track Order`;
                    }
                  })}</div></div>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/uetqnvvg.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width:80px;height:80px"}"></lord-icon>

							<h5 class="${"fs-16 mt-2"}">RQK Logistics</h5>
							<p class="${"text-muted mb-0"}">ID: MFDS1400457854</p>
							<p class="${"text-muted mb-0"}">Payment Mode : Debit Card</p></div>`;
                }
              })}`;
            }
          })}
				

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex"}"><h5 class="${"card-title flex-grow-1 mb-0"}">Customer Details</h5>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "link-secondary" }, {}, {
                    default: () => {
                      return `View Profile`;
                    }
                  })}</div></div>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<ul class="${"list-unstyled mb-0 vstack gap-3"}"><li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Joseph Parkers</h6>
										<p class="${"text-muted mb-0"}">Customer</p></div></div></li>
							<li><i class="${"ri-mail-line me-2 align-middle text-muted fs-16"}"></i>josephparker@gmail.com
							</li>
							<li><i class="${"ri-phone-line me-2 align-middle text-muted fs-16"}"></i>+(256) 245451 441
							</li></ul>`;
                }
              })}`;
            }
          })}
				
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}"><i class="${"ri-map-pin-line align-middle me-1 text-muted"}"></i> Billing Address
						</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<ul class="${"list-unstyled vstack gap-2 fs-13 mb-0"}"><li class="${"fw-medium fs-14"}">Joseph Parker</li>
							<li>+(256) 245451 451</li>
							<li>2186 Joyce Street Rocky Mount</li>
							<li>New York - 25645</li>
							<li>United States</li></ul>`;
                }
              })}`;
            }
          })}
				
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}"><i class="${"ri-map-pin-line align-middle me-1 text-muted"}"></i> Shipping Address
						</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<ul class="${"list-unstyled vstack gap-2 fs-13 mb-0"}"><li class="${"fw-medium fs-14"}">Joseph Parker</li>
							<li>+(256) 245451 451</li>
							<li>2186 Joyce Street Rocky Mount</li>
							<li>California - 24567</li>
							<li>United States</li></ul>`;
                }
              })}`;
            }
          })}
				

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}"><i class="${"ri-secure-payment-line align-bottom me-1 text-muted"}"></i> Payment Details
						</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">Transactions:</p></div>
							<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-0"}">#VLZ124561278124</h6></div></div>
						<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">Payment Method:</p></div>
							<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-0"}">Debit Card</h6></div></div>
						<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">Card Holder Name:</p></div>
							<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-0"}">Joseph Parker</h6></div></div>
						<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">Card Number:</p></div>
							<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-0"}">xxxx xxxx xxxx 2456</h6></div></div>
						<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">Total Amount:</p></div>
							<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-0"}">$415.96</h6></div></div>`;
                }
              })}`;
            }
          })}
				</div>
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_order_details as default };
