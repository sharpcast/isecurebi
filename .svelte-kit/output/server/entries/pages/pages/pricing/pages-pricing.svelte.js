import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const Pages_pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pricing1 = [
    {
      id: 1,
      type: "Starter",
      rate: 19,
      description: "The perfect way to get started and get used to our tools.",
      projects: 3,
      Customers: 299,
      FTP: 5,
      supportClass: "danger",
      supportClassSymbol: "close",
      storageClass: "danger",
      storageClassSymbol: "close",
      domainClass: "danger",
      domainClassSymbol: "close",
      ribbon: false,
      planButtonClassname: "primary",
      btntxt: "Your Current Plan",
      btnstatus: " disabled ",
      rateYear: "171",
      delrateYear: "228"
    },
    {
      id: 2,
      type: "Professional",
      rate: 29,
      description: "Excellent for scalling teams to build culture. Special plan for professional business.",
      projects: 8,
      Customers: 499,
      FTP: 7,
      supportClass: "success",
      supportClassSymbol: "checkbox",
      storageClass: "danger",
      storageClassSymbol: "close",
      domainClass: "danger",
      domainClassSymbol: "close",
      ribbon: false,
      planButtonClassname: "primary",
      btntxt: "Change Plan",
      rateYear: "261",
      delrateYear: "348"
    },
    {
      id: 3,
      type: "Enterprise",
      rate: 39,
      description: "This plan is for those who have a team alredy and running a large business.",
      projects: 15,
      Customers: "Unlimited",
      FTP: 12,
      supportClass: "success",
      supportClassSymbol: "checkbox",
      storageClass: "success",
      storageClassSymbol: "checkbox",
      domainClass: "danger",
      domainClassSymbol: "close",
      ribbon: true,
      planButtonClassname: "primary",
      btntxt: "Change Plan",
      rateYear: "351",
      delrateYear: "468"
    },
    {
      id: 4,
      type: "Unlimited",
      rate: 49,
      description: "For most businesses that want to optimize web queries.",
      projects: "Unlimited",
      Customers: "Unlimited",
      FTP: "Unlimited ",
      supportClass: "success",
      supportClassSymbol: "checkbox",
      storageClass: "success",
      storageClassSymbol: "checkbox",
      domainClass: "success",
      domainClassSymbol: "checkbox",
      ribbon: false,
      planButtonClassname: "primary",
      btntxt: "Change Plan",
      rateYear: "441",
      delrateYear: "588"
    }
  ];
  const pricing2 = [
    {
      id: 1,
      type: "Basic Plan",
      purpose: "For Startup",
      planIcon: "ri-book-mark-line",
      rate: 19,
      projects: 3,
      Customers: 299,
      FTP: 5,
      supportClass: "danger",
      supportClassSymbol: "close",
      storageClass: "danger",
      storageClassSymbol: "close",
      domainClass: "danger",
      domainClassSymbol: "close",
      ribbon: false,
      planButtonClassname: "soft-success",
      icon: "ri-book-mark-line",
      btntxt: "Sign up free"
    },
    {
      id: 2,
      type: "Pro Business",
      purpose: "Professional plans",
      planIcon: "ri-medal-line",
      rate: 29,
      projects: 15,
      Customers: "unlimited",
      FTP: 12,
      supportClass: "success",
      supportClassSymbol: "checkbox",
      storageClass: "danger",
      storageClassSymbol: "close",
      domainClass: "danger",
      domainClassSymbol: "close",
      ribbon: true,
      planButtonClassname: "success",
      icon: "ri-medal-line",
      btntxt: "Get started"
    },
    {
      id: 3,
      type: "Platinum Plan",
      purpose: "Enterprise Businesses",
      planIcon: "ri-stack-line",
      rate: 39,
      projects: "unlimited",
      Customers: "unlimited",
      FTP: "unlimited",
      supportClass: "success",
      supportClassSymbol: "checkbox",
      storageClass: "success",
      storageClassSymbol: "checkbox",
      domainClass: "success",
      domainClassSymbol: "checkbox",
      ribbon: false,
      planButtonClassname: "soft-success",
      icon: "ri-stack-line",
      btntxt: "Get started"
    }
  ];
  const pricing3 = [
    {
      id: 1,
      type: "Starter",
      purpose: "Starter plans",
      rate: 22,
      users: 1,
      storage: "01",
      domain: "No",
      support: "No",
      ribbon: false
    },
    {
      id: 2,
      type: "Professional",
      purpose: "Professional plans",
      rate: 29,
      users: 3,
      storage: "10",
      domain: "Yes",
      support: "No",
      ribbon: true
    },
    {
      id: 3,
      type: "Enterprise",
      purpose: "Enterprise plans",
      rate: 39,
      users: 3,
      storage: "20",
      domain: "Yes",
      support: "Yes",
      ribbon: true
    },
    {
      id: 4,
      type: "Unlimited",
      purpose: "Unlimited plans",
      rate: 49,
      users: 5,
      storage: "40",
      domain: "Yes",
      support: "Yes",
      ribbon: false
    }
  ];
  let activeTab = 1;
  return `${$$result.head += `${$$result.title = `<title>Pricing | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Pricing", pageTitle: "Pages" }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-4"}"><h4 class="${"fw-semibold fs-22"}">Plans &amp; Pricing</h4>
					<p class="${"text-muted mb-4 fs-15"}">Simple pricing. No hidden fees. Advanced features for you business.
					</p>

					<div class="${"d-inline-flex"}">${validate_component(Nav, "Nav").$$render($$result, {
                class: "nav-pills arrow-navtabs plan-nav rounded mb-3 p-1",
                id: "pills-tab"
              }, {}, {
                default: () => {
                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        class: "fw-semibold",
                        id: "month-tab",
                        active: activeTab == 1,
                        "aria-selected": "true"
                      }, {}, {
                        default: () => {
                          return `Monthly`;
                        }
                      })}`;
                    }
                  })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                        class: "fw-semibold",
                        id: "annual-tab",
                        active: activeTab == 2,
                        "aria-selected": "false"
                      }, {}, {
                        default: () => {
                          return `Annually <span class="${"badge bg-success"}">25% Off</span>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(pricing1, (price1) => {
            return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {
                  class: price1.ribbon === true ? "pricing-box ribbon-box right" : "pricing-box"
                }, {}, {
                  default: () => {
                    return `${price1.ribbon === true ? `<div class="${"ribbon-two ribbon-two-danger"}"><span>Popular</span>
							</div>` : ``}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-light m-2 p-4" }, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center mb-3"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-0 fw-semibold"}">${escape(price1.type)}</h5></div>
								<div class="${"ms-auto"}">${`<h2 class="${"month mb-0"}">$${escape(price1.rate)} <small class="${"fs-13 text-muted"}">/Month</small>
										</h2>`}
								</div></div>

							<p class="${"text-muted"}">${escape(price1.description)}</p>
							<ul class="${"list-unstyled vstack gap-3"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}"><b>${escape(price1.projects)}</b> Projects
										</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}"><b>${escape(price1.Customers)}</b> Customers
										</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}">Scalable Bandwidth</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}"><b>${escape(price1.FTP)}</b> FTP Login
										</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price1.supportClass, true) + " me-1"}"><i class="${"ri-" + escape(price1.supportClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}"><b>24/7</b> Support
										</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price1.storageClass, true) + " me-1"}"><i class="${"ri-" + escape(price1.storageClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}"><b>Unlimited</b> Storage
										</div>
									</div></li>
								<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price1.domainClass, true) + " me-1"}"><i class="${"ri-" + escape(price1.domainClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
										<div class="${"flex-grow-1"}">Domain</div></div>
								</li></ul>
							<div class="${"mt-3 pt-2"}">${validate_component(Link, "Link").$$render($$result, {
                          href: null,
                          class: "btn btn-" + price1.planButtonClassname + " " + price1.btnstatus + " w-100"
                        }, {}, {
                          default: () => {
                            return `${escape(price1.btntxt)}`;
                          }
                        })}</div>
						`;
                      }
                    })}
					`;
                  }
                })}
				`;
              }
            })}`;
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-5" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-4 pb-2"}"><h4 class="${"fw-semibold fs-22"}">Choose the plan that&#39;s right for you</h4>
					<p class="${"text-muted mb-4 fs-15"}">Simple pricing. No hidden fees. Advanced features for you business.
					</p></div>`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 9 }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(pricing2, (price2) => {
                    return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, {
                          class: price2.ribbon === true ? "pricing-box ribbon-box right" : "pricing-box"
                        }, {}, {
                          default: () => {
                            return `${price2.ribbon === true ? `<div class="${"ribbon-two ribbon-two-danger"}"><span>Popular</span>
									</div>` : ``}
								${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 m-2" }, {}, {
                              default: () => {
                                return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-1 fw-semibold"}">${escape(price2.type)}</h5>
											<p class="${"text-muted mb-0"}">${escape(price2.purpose)}</p></div>
										<div class="${"avatar-sm"}"><div class="${"avatar-title bg-light rounded-circle text-primary"}"><i class="${escape(price2.icon, true) + " fs-20"}"></i></div>
										</div></div>
									<div class="${"pt-4"}"><h2><sup><small>$</small></sup>${escape(price2.rate)}
											<span class="${"fs-13 text-muted"}">/Month</span>
										</h2></div>
									<hr class="${"my-4 text-muted"}">
									<div><ul class="${"list-unstyled text-muted vstack gap-3"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}">Upto <b>${escape(price2.projects)}</b> Projects
													</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}">Upto <b>${escape(price2.Customers)}</b> Customers
													</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}">Scalable Bandwidth</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}"><b>${escape(price2.FTP)}</b> FTP Login
													</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price2.supportClass, true) + " me-1"}"><i class="${"ri-" + escape(price2.supportClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}"><b>24/7</b> Support
													</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price2.storageClass, true) + " me-1"}"><i class="${"ri-" + escape(price2.storageClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}"><b>Unlimited</b> Storage
													</div>
												</div></li>
											<li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-" + escape(price2.domainClass, true) + " me-1"}"><i class="${"ri-" + escape(price2.domainClassSymbol, true) + "-circle-fill fs-15 align-middle"}"></i></div>
													<div class="${"flex-grow-1"}">Domain</div></div>
											</li></ul>
										<div class="${"mt-4"}"><a${add_attribute("href", null, 0)} class="${"btn btn-" + escape(price2.planButtonClassname, true) + " w-100 waves-effect waves-light"}">${escape(price2.btntxt)}</a>
										</div></div>
								`;
                              }
                            })}
							`;
                          }
                        })}
						`;
                      }
                    })}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-5" }, {}, {
        default: () => {
          return `<div class="${"col-lg-4"}"><div class="${"text-center mb-4 pb-2"}"><h4 class="${"fw-semibold fs-22"}">Simple Pricing Plan</h4>
					<p class="${"text-muted mb-4 fs-15"}">Simple pricing. No hidden fees. Advanced features for you business.
					</p></div></div>`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(pricing3, (price3) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {
                  class: price3.ribbon === true ? "pricing-box text-center ribbon-box ribbon-fill" : "pricing-box text-center"
                }, {}, {
                  default: () => {
                    return `${price3.ribbon == true ? `<div class="${"ribbon ribbon-primary"}">New</div>` : ``}
						${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
                      default: () => {
                        return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "h-100" }, {}, {
                              default: () => {
                                return `<div><h5 class="${"mb-1"}">${escape(price3.type)}</h5>
										<p class="${"text-muted"}">${escape(price3.purpose)}</p></div>

									<div class="${"py-4"}"><h2><sup><small>$</small></sup>${escape(price3.rate)}
											<span class="${"fs-13 text-muted"}">/Per month</span>
										</h2></div>

									<div class="${"text-center plan-btn mt-2"}"><a${add_attribute("href", null, 0)} class="${"btn btn-success w-sm waves-effect waves-light"}">Sign up</a></div>
								`;
                              }
                            })}
							`;
                          }
                        })}

							${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-start mt-4 mt-lg-0" }, {}, {
                              default: () => {
                                return `<div class="${"card-header bg-light"}"><h5 class="${"fs-15 mb-0"}">Plan Features:</h5></div>
									${validate_component(CardBody, "CardBody").$$render($$result, { class: "pb-0" }, {}, {
                                  default: () => {
                                    return `<ul class="${"list-unstyled vstack gap-3 mb-0"}"><li>Users: <span class="${"text-success fw-semibold"}">${escape(price3.users)}</span></li>
											<li>Storage: <span class="${"text-success fw-semibold"}">${escape(price3.storage)} GB</span></li>
											<li>Domain: <span class="${"text-success fw-semibold"}">${escape(price3.domain)}</span></li>
											<li>Support: <span class="${"text-success fw-semibold"}">${escape(price3.support)}</span>
											</li></ul>
									`;
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
                    })}
					`;
                  }
                })}
				`;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Pages_pricing as default };
