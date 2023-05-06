import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { l as logo_dark } from "../../../chunks/logo-dark-ec4d2828.js";
import { L as LogoLight } from "../../../chunks/logo-light-461ccdee.js";
let isStatus = "Select Payment Status";
let isCurrency = "$";
let ispaymentDetails = "Payment Method";
const Apps_invoices_create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const paymentdetails = [
    {
      label: "Payment Method",
      value: "Payment Method"
    },
    { label: "Mastercard", value: "Mastercard" },
    {
      label: "Credit Card",
      value: "Credit Card"
    },
    { label: "Visa", value: "Visa" },
    { label: "Paypal", value: "Paypal" }
  ];
  const allstatus = [
    {
      label: "Select Payment Status",
      value: "Select Payment Status"
    },
    { label: "Paid", value: "Paid" },
    { label: "Unpaid", value: "Unpaid" },
    { label: "Refund", value: "Refund" }
  ];
  const allcurrency = [
    { label: "$", value: "($)" },
    { label: "\xA3", value: "(\xA3)" },
    { label: "\u20B9", value: "(\u20B9)" },
    { label: "\u20AC", value: "(\u20AC)" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Create Invoice | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Create Invoice",
        pageTitle: "Invoices"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Form, "Form").$$render($$result, { class: "needs-validation" }, {}, {
                    default: () => {
                      return `${validate_component(CardBody, "CardBody").$$render($$result, {
                        class: "border-bottom border-bottom-dashed p-4"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"profile-user mx-auto mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                                    id: "profile-img-file-input",
                                    type: "file",
                                    class: "profile-img-file-input"
                                  }, {}, {})}
										${validate_component(Label, "Label").$$render($$result, {
                                    for: "profile-img-file-input",
                                    class: "d-block"
                                  }, {}, {
                                    default: () => {
                                      return `<span class="${"overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded"}" style="${"height: 60px; width: 256px;"}"><img${add_attribute("src", logo_dark, 0)} class="${"card-logo card-logo-dark user-profile-image img-fluid"}" alt="${"logo dark"}">
												<img${add_attribute("src", LogoLight, 0)} class="${"card-logo card-logo-light user-profile-image img-fluid"}" alt="${"logo light"}"></span>`;
                                    }
                                  })}</div>
									<div><div>${validate_component(Label, "Label").$$render($$result, { for: "companyAddress" }, {}, {
                                    default: () => {
                                      return `Address`;
                                    }
                                  })}</div>
										<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "textarea",
                                    class: "form-control bg-light border-0",
                                    id: "companyAddress",
                                    rows: "3",
                                    placeholder: "Company Address"
                                  }, {}, {})}
											<div class="${"invalid-feedback"}">Please enter a address</div></div>
										<div>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "companyaddpostalcode",
                                    minLength: "5",
                                    maxLength: "6",
                                    placeholder: "Enter Postal Code"
                                  }, {}, {})}
											<div class="${"invalid-feedback"}">The US zip code must contain 5 digits, Ex. 45678
											</div></div></div>`;
                                }
                              })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "ms-auto" }, {}, {
                                default: () => {
                                  return `<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "registrationNumber",
                                    maxLength: "12",
                                    placeholder: "Legal Registration No"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a registration no, Ex., 012345678912
										</div></div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "email",
                                    class: "form-control bg-light border-0",
                                    id: "companyEmail",
                                    placeholder: "Email Address"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a valid email, Ex., example@gamil.com
										</div></div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "companyWebsite",
                                    placeholder: "Website"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a website, Ex., www.example.com</div></div>
									<div>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    "data-plugin": "cleave-phone",
                                    id: "compnayContactno",
                                    placeholder: "Contact No"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a contact number</div></div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "invoicenoInput" }, {}, {
                                    default: () => {
                                      return `Invoice No`;
                                    }
                                  })}
									${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "invoicenoInput",
                                    placeholder: "Invoice No",
                                    defaultValue: "#VL25000355"
                                  }, {}, {})}`;
                                }
                              })}
								${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { for: "date-field" }, {}, {
                                    default: () => {
                                      return `Date`;
                                    }
                                  })}
										${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "date-field",
                                    "data-provider": "flatpickr",
                                    "data-time": "true",
                                    placeholder: "Select Date-time"
                                  }, {}, {})}</div>`;
                                }
                              })}
								${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "choices-payment-status" }, {}, {
                                    default: () => {
                                      return `Payment Status`;
                                    }
                                  })}
									<div class="${"input-light select-single"}">${validate_component(Select, "Select").$$render($$result, { value: isStatus, items: allstatus }, {}, {})}</div>`;
                                }
                              })}
								${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, { for: "totalamountInput" }, {}, {
                                    default: () => {
                                      return `Total Amount`;
                                    }
                                  })}
										${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "totalamountInput",
                                    placeholder: "$0.00"
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(CardBody, "CardBody").$$render($$result, {
                        class: "p-4 border-top border-top-dashed"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                                    for: "billingName",
                                    class: "text-muted text-uppercase fw-semibold"
                                  }, {}, {
                                    default: () => {
                                      return `Billing Address
										`;
                                    }
                                  })}</div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "billingName",
                                    placeholder: "Full Name"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a full name</div></div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "textarea",
                                    class: "form-control bg-light border-0",
                                    id: "billingAddress",
                                    rows: "3",
                                    placeholder: "Address",
                                    defaultValue: ""
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a address</div></div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    "data-plugin": "cleave-phone",
                                    id: "billingPhoneno",
                                    placeholder: "(123)456-7890"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a phone number</div></div>
									<div class="${"mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "billingTaxno",
                                    placeholder: "Tax Number"
                                  }, {}, {})}
										<div class="${"invalid-feedback"}">Please enter a tax number</div></div>
									<div class="${"form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"same"}" name="${"same"}">
										${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "same" }, {}, {
                                    default: () => {
                                      return `Will your Billing and Shipping address same?
										`;
                                    }
                                  })}</div>`;
                                }
                              })}
								${validate_component(Col, "Col").$$render($$result, { sm: 6, class: "ms-auto" }, {}, {
                                default: () => {
                                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "shippingName",
                                            class: "text-muted text-uppercase fw-semibold"
                                          }, {}, {
                                            default: () => {
                                              return `Shipping Address
												`;
                                            }
                                          })}</div>
											<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control bg-light border-0",
                                            id: "shippingName",
                                            placeholder: "Full Name"
                                          }, {}, {})}
												<div class="${"invalid-feedback"}">Please enter a full name</div></div>
											<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                            type: "textarea",
                                            class: "form-control bg-light border-0",
                                            id: "shippingAddress",
                                            rows: "3",
                                            placeholder: "Address",
                                            defaultValue: ""
                                          }, {}, {})}
												<div class="${"invalid-feedback"}">Please enter a address</div></div>
											<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control bg-light border-0",
                                            "data-plugin": "cleave-phone",
                                            id: "shippingPhoneno",
                                            placeholder: "(123)456-7890"
                                          }, {}, {})}
												<div class="${"invalid-feedback"}">Please enter a phone number</div></div>
											<div>${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control bg-light border-0",
                                            id: "shippingTaxno",
                                            placeholder: "Tax Number"
                                          }, {}, {})}
												<div class="${"invalid-feedback"}">Please enter a tax number</div></div>`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                        default: () => {
                          return `<div class="${"table-responsive"}">${validate_component(Table, "Table").$$render($$result, {
                            class: "invoice-table table-borderless table-nowrap mb-0"
                          }, {}, {
                            default: () => {
                              return `<thead class="${"align-middle"}"><tr class="${"table-active"}"><th scope="${"col"}" style="${"width: 50px;"}">#</th>
                                            <th scope="${"col"}">Product Details
                                            </th>
                                            <th scope="${"col"}" style="${"width: 120px;"}"><div class="${"d-flex currency-select input-light align-items-center"}">Rate  
                                                ${validate_component(Select, "Select").$$render($$result, {
                                id: "choices-payment-currency",
                                value: isCurrency,
                                items: allcurrency
                              }, {}, {})}</div></th>
                                            <th scope="${"col"}" style="${"width: 120px;"}">Quantity</th>
                                            <th scope="${"col"}" class="${"text-end"}" style="${"width: 150px;"}">Amount</th>
                                            <th scope="${"col"}" class="${"text-end"}" style="${"width: 105px;"}"></th></tr></thead>
									<tbody id="${"newlink"}"><tr id="${"1"}" class="${"product"}"><th scope="${"row"}" class="${"product-id"}">1 </th>
											<td class="${"text-start"}"><div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control bg-light border-0",
                                id: "productName",
                                placeholder: "Product Name"
                              }, {}, {})}
													<div class="${"invalid-feedback"}">Please enter a product name</div></div>
												${validate_component(Input, "Input").$$render($$result, {
                                type: "textarea",
                                class: "form-control bg-light border-0",
                                id: "productDetails",
                                rows: "2",
                                placeholder: "Product Details",
                                defaultValue: ""
                              }, {}, {})}</td>
											<td>${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "form-control product-price bg-light border-0",
                                placeholder: "0.00"
                              }, {}, {})}
												<div class="${"invalid-feedback"}">Please enter a rate</div></td>
											<td><div class="${"input-step"}"><button type="${"button"}" class="${"minus"}">\u2013 </button>
													${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "product-quantity",
                                defaultValue: "0",
                                readOnly: true
                              }, {}, {})}
													<button type="${"button"}" class="${"plus"}">+ </button></div></td>
											<td class="${"text-end"}"><div>${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control bg-light border-0 product-line-price",
                                placeholder: "$0.00",
                                readOnly: true
                              }, {}, {})}</div></td>
											<td class="${"product-removal"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                                default: () => {
                                  return `Delete`;
                                }
                              })}</td></tr>

										<tr id="${"newForm"}" style="${"display: none"}"></tr>
										<tr><td colspan="${"9"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "btn btn-soft-secondary fw-medium"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-add-fill me-1 align-bottom"}"></i>
													Add Item
												`;
                                }
                              })}</td></tr>
										<tr class="${"border-top border-top-dashed mt-2"}"><td colspan="${"3"}"></td>
											<td colspan="${"2"}" class="${"p-0"}">${validate_component(Table, "Table").$$render($$result, {
                                class: "table-borderless table-sm table-nowrap align-middle mb-0"
                              }, {}, {
                                default: () => {
                                  return `<tbody><tr><th scope="${"row"}">Sub Total</th>
															<td style="${"width: 150px"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "cart-subtotal",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</td></tr>
														<tr><th scope="${"row"}">Estimated Tax (12.5%)</th>
															<td>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "cart-tax",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</td></tr>
														<tr><th scope="${"row"}">Discount
																<small class="${"text-muted"}">(VELZON15) </small></th>
															<td>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "cart-discount",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</td></tr>
														<tr><th scope="${"row"}">Shipping Charge</th>
															<td>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "cart-shipping",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</td></tr>
														<tr class="${"border-top border-top-dashed"}"><th scope="${"row"}">Total Amount</th>
															<td>${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control bg-light border-0",
                                    id: "cart-total",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</td></tr></tbody>`;
                                }
                              })}</td></tr></tbody>`;
                            }
                          })}</div>
							${validate_component(Row, "Row").$$render($$result, { class: "mt-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-2"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "choices-payment-type",
                                    class: "form-label text-muted text-uppercase fw-semibold"
                                  }, {}, {
                                    default: () => {
                                      return `Payment Details
										`;
                                    }
                                  })}
										<div class="${"input-light select-single"}">${validate_component(Select, "Select").$$render($$result, {
                                    value: ispaymentDetails,
                                    items: paymentdetails,
                                    id: "idStatus"
                                  }, {}, {})}</div></div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control bg-light border-0",
                                    type: "text",
                                    id: "cardholderName",
                                    placeholder: "Card Holder Name"
                                  }, {}, {})}</div>
									<div class="${"mb-2"}">${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control bg-light border-0",
                                    type: "text",
                                    id: "cardNumber",
                                    placeholder: "xxxx xxxx xxxx xxxx"
                                  }, {}, {})}</div>
									<div>${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control  bg-light border-0",
                                    type: "text",
                                    id: "amountTotalPay",
                                    placeholder: "$0.00",
                                    readOnly: true
                                  }, {}, {})}</div>`;
                                }
                              })}`;
                            }
                          })}
							<div class="${"mt-4"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "exampleFormControlTextarea1",
                            class: "form-label text-muted text-uppercase fw-semibold"
                          }, {}, {
                            default: () => {
                              return `NOTES
								`;
                            }
                          })}
								${validate_component(Input, "Input").$$render($$result, {
                            type: "textarea",
                            class: "form-control alert alert-info",
                            id: "exampleFormControlTextarea1",
                            placeholder: "Notes",
                            rows: "2",
                            value: "All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above."
                          }, {}, {})}</div>
							<div class="${"hstack gap-2 justify-content-end d-print-none mt-4"}"><button type="${"submit"}" class="${"btn btn-success"}"><i class="${"ri-printer-line align-bottom me-1"}"></i> Save
								</button>
								${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-primary" }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-line align-bottom me-1"}"></i>
									Download Invoice
								`;
                            }
                          })}
								${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-danger" }, {}, {
                            default: () => {
                              return `<i class="${"ri-send-plane-fill align-bottom me-1"}"></i>
									Send Invoice
								`;
                            }
                          })}</div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_invoices_create as default };
