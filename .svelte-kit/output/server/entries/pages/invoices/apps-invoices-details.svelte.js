import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { l as logo_dark } from "../../../chunks/logo-dark-ec4d2828.js";
import { L as LogoLight } from "../../../chunks/logo-light-461ccdee.js";
const Apps_invoices_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Invoice Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Invoice Details",
        pageTitle: "Invoices"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "demo" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-bottom-dashed p-4" }, {}, {
                    default: () => {
                      return `<div class="${"d-sm-flex"}"><div class="${"flex-grow-1"}"><img${add_attribute("src", logo_dark, 0)} class="${"card-logo card-logo-dark"}" alt="${"logo dark"}" height="${"17"}">
								<img${add_attribute("src", LogoLight, 0)} class="${"card-logo card-logo-light"}" alt="${"logo light"}" height="${"17"}">
								<div class="${"mt-sm-5 mt-4"}"><h6 class="${"text-muted text-uppercase fw-semibold"}">Address</h6>
									<p class="${"text-muted mb-1"}" id="${"address-details"}">California, United States</p>
									<p class="${"text-muted mb-0"}" id="${"zip-code"}"><span>Zip-code:</span> 90201</p></div></div>
							<div class="${"flex-shrink-0 mt-sm-0 mt-3"}"><h6><span class="${"text-muted fw-normal"}">Legal Registration No:</span>
									<span id="${"legal-register-no"}">987654</span></h6>
								<h6><span class="${"text-muted fw-normal"}">Email:</span>
									<span id="${"email"}">velzon@themesbrand.com</span></h6>
								<h6><span class="${"text-muted fw-normal"}">Website:</span>
									<a href="${"/themesbrand.com/"}" class="${"link-primary"}" target="${"_blank"}" id="${"website"}">www.themesbrand.com</a></h6>
								<h6 class="${"mb-0"}"><span class="${"text-muted fw-normal"}">Contact No: </span><span id="${"contact-no"}">+(01) 234 6789</span></h6></div></div>`;
                    }
                  })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xs: 6, lg: 3 }, {}, {
                            default: () => {
                              return `<p class="${"text-muted mb-2 text-uppercase fw-semibold"}">Invoice No</p>
								<h5 class="${"fs-14 mb-0"}">#VL<span id="${"invoice-no"}">25000355</span></h5>`;
                            }
                          })}
							
							${validate_component(Col, "Col").$$render($$result, { xs: 6, lg: 3 }, {}, {
                            default: () => {
                              return `<p class="${"text-muted mb-2 text-uppercase fw-semibold"}">Date</p>
								<h5 class="${"fs-14 mb-0"}"><span id="${"invoice-date"}">23 Nov, 2021</span>
									<small class="${"text-muted"}" id="${"invoice-time"}">02:36PM</small></h5>`;
                            }
                          })}
							
							${validate_component(Col, "Col").$$render($$result, { xs: 6, lg: 3 }, {}, {
                            default: () => {
                              return `<p class="${"text-muted mb-2 text-uppercase fw-semibold"}">Payment Status</p>
								<span class="${"badge badge-soft-success fs-11"}" id="${"payment-status"}">Paid</span>`;
                            }
                          })}
							
							${validate_component(Col, "Col").$$render($$result, { xs: 6, lg: 3 }, {}, {
                            default: () => {
                              return `<p class="${"text-muted mb-2 text-uppercase fw-semibold"}">Total Amount</p>
								<h5 class="${"fs-14 mb-0"}">$<span id="${"total-amount"}">415.96</span></h5>`;
                            }
                          })}
							`;
                        }
                      })}
						`;
                    }
                  })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "p-4 border-top border-top-dashed"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Billing Address</h6>
								<p class="${"fw-medium mb-2"}" id="${"billing-name"}">David Nichols</p>
								<p class="${"text-muted mb-1"}" id="${"billing-address-line-1"}">305 S San Gabriel Blvd</p>
								<p class="${"text-muted mb-1"}"><span>Phone: +</span><span id="${"billing-phone-no"}">(123) 456-7890</span></p>
								<p class="${"text-muted mb-0"}"><span>Tax: </span><span id="${"billing-tax-no"}">12-3456789</span></p>`;
                            }
                          })}
							
							${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Shipping Address</h6>
								<p class="${"fw-medium mb-2"}" id="${"shipping-name"}">David Nichols</p>
								<p class="${"text-muted mb-1"}" id="${"shipping-address-line-1"}">305 S San Gabriel Blvd</p>
								<p class="${"text-muted mb-1"}"><span>Phone: +</span><span id="${"shipping-phone-no"}">(123) 456-7890</span></p>`;
                            }
                          })}
							`;
                        }
                      })}
						`;
                    }
                  })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `<div class="${"table-responsive"}"><table class="${"table table-borderless text-center table-nowrap align-middle mb-0"}"><thead><tr class="${"table-active"}"><th scope="${"col"}" style="${"width: 50px;"}">#</th>
										<th scope="${"col"}">Product Details</th>
										<th scope="${"col"}">Rate</th>
										<th scope="${"col"}">Quantity</th>
										<th scope="${"col"}" class="${"text-end"}">Amount</th></tr></thead>
								<tbody id="${"products-list"}"><tr><th scope="${"row"}">01</th>
										<td class="${"text-start"}"><span class="${"fw-medium"}">Sweatshirt for Men (Pink)</span>
											<p class="${"text-muted mb-0"}">Graphic Print Men &amp; Women Sweatshirt</p></td>
										<td>$119.99</td>
										<td>02</td>
										<td class="${"text-end"}">$239.98</td></tr>
									<tr><th scope="${"row"}">02</th>
										<td class="${"text-start"}"><span class="${"fw-medium"}">Noise NoiseFit Endure Smart Watch</span>
											<p class="${"text-muted mb-0"}">32.5mm (1.28 Inch) TFT Color Touch Display</p></td>
										<td>$94.99</td>
										<td>01</td>
										<td class="${"text-end"}">$94.99</td></tr>
									<tr><th scope="${"row"}">03</th>
										<td class="${"text-start"}"><span class="${"fw-medium"}">350 ml Glass Grocery Container</span>
											<p class="${"text-muted mb-0"}">Glass Grocery Container (Pack of 3, White)</p></td>
										<td>$24.99</td>
										<td>01</td>
										<td class="${"text-end"}">$24.99</td></tr>
									<tr><th scope="${"row"}">04</th>
										<td class="${"text-start"}"><span class="${"fw-medium"}">Fabric Dual Tone Living Room Chair</span>
											<p class="${"text-muted mb-0"}">Chair (White)</p></td>
										<td>$340.00</td>
										<td>01</td>
										<td class="${"text-end"}">$340.00</td></tr></tbody></table>
							</div>
						<div class="${"border-top border-top-dashed mt-2"}"><table class="${"table table-borderless table-nowrap align-middle mb-0 ms-auto"}" style="${"width:250px"}"><tbody><tr><td>Sub Total</td>
										<td class="${"text-end"}">$699.96</td></tr>
									<tr><td>Estimated Tax (12.5%)</td>
										<td class="${"text-end"}">$44.99</td></tr>
									<tr><td>Discount <small class="${"text-muted"}">(VELZON15)</small></td>
										<td class="${"text-end"}">- $53.99</td></tr>
									<tr><td>Shipping Charge</td>
										<td class="${"text-end"}">$65.00</td></tr>
									<tr class="${"border-top border-top-dashed fs-15"}"><th scope="${"row"}">Total Amount</th>
										<th class="${"text-end"}">$755.96</th></tr></tbody></table>
							</div>
						<div class="${"mt-3"}"><h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Payment Details:</h6>
							<p class="${"text-muted mb-1"}">Payment Method: <span class="${"fw-medium"}" id="${"payment-method"}">Mastercard</span></p>
							<p class="${"text-muted mb-1"}">Card Holder: <span class="${"fw-medium"}" id="${"card-holder-name"}">David Nichols</span></p>
							<p class="${"text-muted mb-1"}">Card Number: <span class="${"fw-medium"}" id="${"card-number"}">xxx xxxx xxxx 1234</span></p>
							<p class="${"text-muted"}">Total Amount: <span class="${"fw-medium"}" id="${""}">$ </span><span id="${"card-total-amount"}">755.96</span></p></div>
						<div class="${"mt-4"}"><div class="${"alert alert-info"}"><p class="${"mb-0"}"><span class="${"fw-semibold"}">NOTES:</span>
									<span id="${"note"}">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
										credit card or direct payment online. If account is not paid within 7
										days the credits details supplied as confirmation of work undertaken
										will be charged the agreed quoted fee noted above.
									</span></p></div></div>
						<div class="${"hstack gap-2 justify-content-end d-print-none mt-4"}"><button type="${"submit"}" class="${"btn btn-success"}"><i class="${"ri-printer-line align-bottom me-1"}"></i> Print</button>
							${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-primary" }, {}, {
                        default: () => {
                          return `<i class="${"ri-download-2-line align-bottom me-1"}"></i> Send Invoice`;
                        }
                      })}</div>`;
                    }
                  })}
					`;
                }
              })}
				`;
            }
          })}
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_invoices_details as default };
