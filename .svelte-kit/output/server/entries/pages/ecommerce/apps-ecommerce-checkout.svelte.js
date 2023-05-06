import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { i as img7 } from "../../../chunks/img-7-0d61b03f.js";
import { i as img03 } from "../../../chunks/img-3-6f709142.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/index-bddc6f42.js";
const Apps_ecommerce_checkout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const productState = [
    {
      label: "Select State...",
      value: "Select State"
    },
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    {
      label: "American Samoa",
      value: "American Samoa"
    },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    {
      label: "District Of Columbia",
      value: "District Of Columbia"
    },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Guam", value: "Guam" },
    { label: "Hawaii", value: "Hawaii" },
    { label: "Idaho", value: "Idaho" },
    { label: "Kansas", value: "Kansas" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Montana", value: "Montana" },
    { label: "Nevada", value: "Nevada" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "New York", value: "New York" }
  ];
  const productCountry = [
    {
      label: "Select Country...",
      value: "Select Country"
    },
    {
      label: "United States",
      value: "United States"
    }
  ];
  let checkoutTab = 1;
  let open = false;
  const toggle = () => open = !open;
  let deletemodalopen = false;
  const toggledeletemodal = () => deletemodalopen = !deletemodalopen;
  return `${$$result.head += `${$$result.title = `<title>Checkout | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Checkout",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "checkout-tab" }, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                        default: () => {
                          return `<div class="${"step-arrow-nav mt-n3 mx-n3 mb-3"}">${validate_component(Nav, "Nav").$$render($$result, {
                            pills: true,
                            class: "nav-justified custom-nav",
                            role: "tablist"
                          }, {}, {
                            default: () => {
                              return `${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    class: "fs-15 p-3 done",
                                    id: "pills-bill-info-tab",
                                    active: checkoutTab == 1
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"}"></i>
											Personal Info`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    class: "fs-15 p-3",
                                    id: "pills-bill-address-tab",
                                    active: checkoutTab == 2
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-truck-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"}"></i>
											Shipping Info`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    class: "fs-15 p-3",
                                    id: "pills-payment-tab",
                                    active: checkoutTab == 3
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-bank-card-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"}"></i>
											Payment Info`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, { role: "presentation" }, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    class: "fs-15 p-3",
                                    id: "pills-finish-tab",
                                    active: checkoutTab == 4
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"}"></i>Finish`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>

							${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "pills-bill-info",
                                tabId: 1,
                                class: "active"
                              }, {}, {
                                default: () => {
                                  return `<div><h5 class="${"mb-1"}">Billing Information</h5>
										<p class="${"text-muted mb-4"}">Please fill all information below</p></div>

									<div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "billinginfo-firstName",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `First Name`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "billinginfo-firstName",
                                            placeholder: "Enter first name",
                                            value: ""
                                          }, {}, {})}</div>`;
                                        }
                                      })}

											${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "billinginfo-lastName",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Last Name`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "billinginfo-lastName",
                                            placeholder: "Enter last name",
                                            value: ""
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}

										${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "billinginfo-email",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Email
														<span class="${"text-muted"}">(Optional)</span>`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "email",
                                            class: "form-control",
                                            id: "billinginfo-email",
                                            placeholder: "Enter email"
                                          }, {}, {})}</div>`;
                                        }
                                      })}

											${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "billinginfo-phone",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Phone`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "billinginfo-phone",
                                            placeholder: "Enter phone no."
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}

										<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "billinginfo-address",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Address`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "textarea",
                                    class: "form-control",
                                    id: "billinginfo-address",
                                    placeholder: "Enter address",
                                    rows: "3"
                                  }, {}, {})}</div>

										${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "country", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Country`;
                                            }
                                          })}
													${validate_component(Select, "Select").$$render($$result, {
                                            class: "form-select",
                                            id: "country",
                                            items: productCountry
                                          }, {}, {})}</div>`;
                                        }
                                      })}

											${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "state", class: "form-label" }, {}, {
                                            default: () => {
                                              return `State`;
                                            }
                                          })}
													${validate_component(Select, "Select").$$render($$result, {
                                            class: "form-select",
                                            id: "state",
                                            items: productState
                                          }, {}, {})}</div>`;
                                        }
                                      })}

											${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "zip", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Zip Code`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "zip",
                                            placeholder: "Enter zip code"
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}

										<div class="${"d-flex align-items-start gap-3 mt-3"}">${validate_component(Button, "Button").$$render($$result, {
                                    color: "primary",
                                    class: "btn-label right ms-auto nexttab",
                                    "data-nexttab": "pills-bill-address-tab"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-truck-line label-icon align-middle fs-16 ms-2"}"></i>Proceed to
												Shipping`;
                                    }
                                  })}</div></div>`;
                                }
                              })}
								

								${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "pills-bill-address",
                                tabId: 2,
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `<div><h5 class="${"mb-1"}">Shipping Information</h5>
										<p class="${"text-muted mb-4"}">Please fill all information below</p></div>

									<div class="${"mt-4"}"><div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Saved Address</h5></div>
											<div class="${"flex-shrink-0"}">
												${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-sm mb-3" }, {}, {
                                    default: () => {
                                      return `Add Address
												`;
                                    }
                                  })}</div></div>
										${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "shippingAddress01",
                                            name: "shippingAddress",
                                            type: "radio",
                                            class: "form-check-input",
                                            checked: true
                                          }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "shippingAddress01"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"mb-4 fw-semibold d-block text-muted text-uppercase"}">Home Address</span>

														<span class="${"fs-14 mb-2 d-block"}">Marcus Alfaro</span>
														<span class="${"text-muted fw-normal text-wrap mb-1 d-block"}">4739 Bubby Drive Austin, TX 78729</span>
														<span class="${"text-muted fw-normal d-block"}">Mo. 012-345-6789</span>`;
                                            }
                                          })}</div>
												<div class="${"d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1"}"><div>${validate_component(Link, "Link").$$render($$result, {
                                            href: null,
                                            class: "d-block text-body p-1 px-2"
                                          }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-pencil-fill text-muted align-bottom me-1"}"></i>
															Edit`;
                                            }
                                          })}</div>
													<div>${validate_component(Link, "Link").$$render($$result, {
                                            href: null,
                                            class: "d-block text-body p-1 px-2"
                                          }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-delete-bin-fill text-muted align-bottom me-1"}"></i>
															Remove`;
                                            }
                                          })}</div></div>`;
                                        }
                                      })}
											${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "shippingAddress02",
                                            name: "shippingAddress",
                                            type: "radio",
                                            class: "form-check-input"
                                          }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "shippingAddress02"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"mb-4 fw-semibold d-block text-muted text-uppercase"}">Office Address</span>

														<span class="${"fs-14 mb-2 d-block"}">James Honda</span>
														<span class="${"text-muted fw-normal text-wrap mb-1 d-block"}">1246 Virgil Street Pensacola, FL 32501
														</span>
														<span class="${"text-muted fw-normal d-block"}">Mo. 012-345-6789</span>`;
                                            }
                                          })}</div>
												<div class="${"d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1"}"><div>${validate_component(Link, "Link").$$render($$result, { class: "d-block text-body p-1 px-2" }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-pencil-fill text-muted align-bottom me-1"}"></i>
															Edit`;
                                            }
                                          })}</div>
													<div>${validate_component(Link, "Link").$$render($$result, {
                                            href: null,
                                            class: "d-block text-body p-1 px-2"
                                          }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-delete-bin-fill text-muted align-bottom me-1"}"></i>
															Remove`;
                                            }
                                          })}</div></div>`;
                                        }
                                      })}`;
                                    }
                                  })}

										<div class="${"mt-4"}"><h5 class="${"fs-14 mb-3"}">Shipping Method</h5>

											${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "shippingMethod01",
                                            name: "shippingMethod",
                                            type: "radio",
                                            class: "form-check-input",
                                            checked: true
                                          }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "shippingMethod01"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"fs-20 float-end mt-2 text-wrap d-block fw-semibold"}">Free</span>
															<span class="${"fs-14 mb-1 text-wrap d-block"}">Free Delivery</span>
															<span class="${"text-muted fw-normal text-wrap d-block"}">Expected Delivery 3 to 5 Days</span>`;
                                            }
                                          })}</div>`;
                                        }
                                      })}
												${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "shippingMethod02",
                                            name: "shippingMethod",
                                            type: "radio",
                                            class: "form-check-input",
                                            checked: true
                                          }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "shippingMethod02"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"fs-20 float-end mt-2 text-wrap d-block fw-semibold"}">$24.99</span>
															<span class="${"fs-14 mb-1 text-wrap d-block"}">Express Delivery</span>
															<span class="${"text-muted fw-normal text-wrap d-block"}">Delivery within 24hrs.</span>`;
                                            }
                                          })}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}</div></div>

									<div class="${"d-flex align-items-start gap-3 mt-4"}">${validate_component(Button, "Button").$$render($$result, {
                                    color: "light",
                                    class: "btn-label previestab",
                                    "data-previous": "pills-bill-info-tab"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>Back to
											Personal Info`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, {
                                    color: "primary",
                                    class: "btn-label right ms-auto nexttab",
                                    "data-nexttab": "pills-payment-tab"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-bank-card-line label-icon align-middle fs-16 ms-2"}"></i>Continue to
											Payment`;
                                    }
                                  })}</div>`;
                                }
                              })}
								

								${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "pills-payment",
                                tabId: 3,
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `<div><h5 class="${"mb-1"}">Payment Selection</h5>
										<p class="${"text-muted mb-4"}">Please select and enter your billing information</p></div>

									${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div><div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "paymentMethod01",
                                            name: "paymentMethod",
                                            type: "radio",
                                            class: "form-check-input"
                                          }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "paymentMethod01"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"fs-16 text-muted me-2"}"><i class="${"ri-paypal-fill align-bottom"}"></i></span>
														<span class="${"fs-14 text-wrap"}">Paypal</span>`;
                                            }
                                          })}</div></div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div><div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "paymentMethod02",
                                            name: "paymentMethod",
                                            type: "radio",
                                            class: "form-check-input"
                                          }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "paymentMethod02"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"fs-16 text-muted me-2"}"><i class="${"ri-bank-card-fill align-bottom"}"></i></span>
														<span class="${"fs-14 text-wrap"}">Credit / Debit Card</span>`;
                                            }
                                          })}</div></div>`;
                                        }
                                      })}

										${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div><div class="${"form-check card-radio"}">${validate_component(Input, "Input").$$render($$result, {
                                            id: "paymentMethod03",
                                            name: "paymentMethod",
                                            type: "radio",
                                            class: "form-check-input"
                                          }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-check-label",
                                            for: "paymentMethod03"
                                          }, {}, {
                                            default: () => {
                                              return `<span class="${"fs-16 text-muted me-2"}"><i class="${"ri-money-dollar-box-fill align-bottom"}"></i></span>
														<span class="${"fs-14 text-wrap"}">Cash on Delivery</span>`;
                                            }
                                          })}</div></div>`;
                                        }
                                      })}`;
                                    }
                                  })}

									<div id="${"paymentmethodCollapse"}">${validate_component(Card, "Card").$$render($$result, {
                                    class: "p-4 border shadow-none mb-0 mt-4"
                                  }, {}, {
                                    default: () => {
                                      return `${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                                        default: () => {
                                          return `${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "cc-name", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Name on card`;
                                                }
                                              })}
													${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "cc-name",
                                                placeholder: "Enter name"
                                              }, {}, {})}
													<small class="${"text-muted"}">Full name as displayed on card</small>`;
                                            }
                                          })}

												${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "cc-number", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Credit card number`;
                                                }
                                              })}
													${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "cc-number",
                                                placeholder: "xxxx xxxx xxxx xxxx"
                                              }, {}, {})}`;
                                            }
                                          })}

												${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, {
                                                for: "cc-expiration",
                                                class: "form-label"
                                              }, {}, {
                                                default: () => {
                                                  return `Expiration`;
                                                }
                                              })}
													${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "cc-expiration",
                                                placeholder: "MM/YY"
                                              }, {}, {})}`;
                                            }
                                          })}

												${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "cc-cvv", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `CVV`;
                                                }
                                              })}
													${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "cc-cvv",
                                                placeholder: "xxx"
                                              }, {}, {})}`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}
										<div class="${"text-muted mt-2 fst-italic"}"><i data-feather="${"lock"}" class="${"text-muted icon-xs"}"></i> Your transaction is secured
											with SSL encryption
										</div></div>

									<div class="${"d-flex align-items-start gap-3 mt-4"}">${validate_component(Button, "Button").$$render($$result, {
                                    color: "light",
                                    class: "btn-label previestab",
                                    "data-previous": "pills-bill-address-tab"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>Back to
											Shipping`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, {
                                    color: "primary",
                                    class: "btn-label right ms-auto nexttab",
                                    "data-nexttab": "pills-finish-tab"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-shopping-basket-line label-icon align-middle fs-16 ms-2"}"></i>Complete Order`;
                                    }
                                  })}</div>`;
                                }
                              })}
								

								${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "pills-finish",
                                tabId: 4,
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `<div class="${"text-center py-5"}"><div class="${"mb-4"}"><lord-icon src="${"//cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c,secondary:#405189"}" style="${"width:120px;height:120px"}"></lord-icon></div>
										<h5>Thank you ! Your Order is Completed !</h5>
										<p class="${"text-muted"}">You will receive an order confirmation email with details of your order.
										</p>

										<h3 class="${"fw-semibold"}">Order ID: ${validate_component(Link, "Link").$$render($$result, {
                                    href: "/ecommerce/apps-ecommerce-order-details",
                                    class: "text-decoration-underline"
                                  }, {}, {
                                    default: () => {
                                      return `VZ2451`;
                                    }
                                  })}</h3></div>`;
                                }
                              })}
								`;
                            }
                          })}
							`;
                        }
                      })}`;
                    }
                  })}
					`;
                }
              })}
				`;
            }
          })}
			

			${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Order Summary</h5></div></div>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, {
                        class: "table table-borderless align-middle mb-0"
                      }, {}, {
                        default: () => {
                          return `<thead class="${"table-light text-muted"}"><tr><th style="${"width: 90px;"}" scope="${"col"}">Product</th>
										<th scope="${"col"}">Product Info</th>
										<th scope="${"col"}" class="${"text-end"}">Price</th></tr></thead>
								<tbody><tr><td><div class="${"avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}"></div></td>
										<td><h5 class="${"fs-14"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "text-dark"
                          }, {}, {
                            default: () => {
                              return `Sweatshirt for Men (Pink)`;
                            }
                          })}</h5>
											<p class="${"text-muted mb-0"}">$ 119.99 x 2</p></td>
										<td class="${"text-end"}">$ 239.98</td></tr>
									<tr><td><div class="${"avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid d-block"}"></div></td>
										<td><h5 class="${"fs-14"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "text-dark"
                          }, {}, {
                            default: () => {
                              return `Noise Evolve Smartwatch`;
                            }
                          })}</h5>
											<p class="${"text-muted mb-0"}">$ 94.99 x 1</p></td>
										<td class="${"text-end"}">$ 94.99</td></tr>
									<tr><td><div class="${"avatar-md bg-light rounded p-1"}"><img${add_attribute("src", img03, 0)} alt="${""}" class="${"img-fluid d-block"}"></div></td>
										<td><h5 class="${"fs-14"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "text-dark"
                          }, {}, {
                            default: () => {
                              return `350 ml Glass Grocery Container`;
                            }
                          })}</h5>
											<p class="${"text-muted mb-0"}">$ 24.99 x 1</p></td>
										<td class="${"text-end"}">$ 24.99</td></tr>
									<tr><td class="${"fw-semibold"}" colspan="${"2"}">Sub Total :</td>
										<td class="${"fw-semibold text-end"}">$ 359.96</td></tr>
									<tr><td colspan="${"2"}">Discount <span class="${"text-muted"}">(VELZON15)</span>
											:
										</td>
										<td class="${"text-end"}">- $ 50.00</td></tr>
									<tr><td colspan="${"2"}">Shipping Charge :</td>
										<td class="${"text-end"}">$ 24.99</td></tr>
									<tr><td colspan="${"2"}">Estimated Tax (12%): </td>
										<td class="${"text-end"}">$ 18.20</td></tr>
									<tr class="${"table-active"}"><th colspan="${"2"}">Total (USD) :</th>
										<td class="${"text-end"}"><span class="${"fw-semibold"}">$353.15 </span></td></tr></tbody>`;
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
  })}</div>
${validate_component(Modal, "Modal").$$render($$result, {
    id: "addAddressModal",
    class: "zoomIn",
    isOpen: open,
    toggle
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `<h5 class="${"modal-title"}" id="${"addAddressModalLabel"}">Address</h5>`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "addaddress-Name",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Name`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "addaddress-Name",
            placeholder: "Enter name"
          }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "addaddress-textarea",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Address`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "textarea",
            class: "form-control",
            id: "addaddress-textarea",
            placeholder: "Enter address",
            rows: "2"
          }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "addaddress-Name",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Phone`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "addaddress-Name",
            placeholder: "Enter phone no."
          }, {}, {})}</div>

			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "state", class: "form-label" }, {}, {
            default: () => {
              return `Address Type`;
            }
          })}
				<select class="${"form-select"}" id="${"state"}" data-choices data-choices-search-false><option value="${"homeAddress"}">Home (7am to 10pm)</option><option value="${"officeAddress"}">Office (11am to 7pm)</option></select></div></div>`;
        }
      })}
	<div class="${"modal-footer"}"><button type="${"button"}" class="${"btn btn-light"}">Close</button>
		<button type="${"button"}" class="${"btn btn-success"}">Save</button></div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: deletemodalopen,
    role: "dialog",
    autoFocus: true,
    centered: true,
    id: "removeItemModal",
    toggle: toggledeletemodal
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggledeletemodal }, {}, {})}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"mt-2 text-center"}"><lord-icon src="${"//cdn.lordicon.com/gsqxdxog.json"}" trigger="${"loop"}" colors="${"primary:#f7b84b,secondary:#f06548"}" style="${"width: 100px; height: 100px;"}"></lord-icon>
			<div class="${"mt-4 pt-2 fs-15 mx-4 mx-sm-5"}"><h4>Are you Sure ?</h4>
				<p class="${"text-muted mx-4 mb-0"}">Are you Sure You want to Remove this Address ?</p></div></div>
		<div class="${"d-flex gap-2 justify-content-center mt-4 mb-2"}"><button type="${"button"}" class="${"btn w-sm btn-light"}">Close </button>
			<button type="${"button"}" class="${"btn w-sm btn-danger"}">Yes, Delete It!
			</button></div>`;
        }
      })}`;
    }
  })}`;
});
export { Apps_ecommerce_checkout as default };
