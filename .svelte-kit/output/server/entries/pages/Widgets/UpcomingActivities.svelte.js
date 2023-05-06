import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { L as ListGroup, a as ListGroupItem } from "../../../chunks/ListGroupItem-5b1f2dad.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Pagination, a as PaginationItem, b as PaginationLink } from "../../../chunks/PaginationLink-4c8ff591.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import WidgetsCharts from "./WidgetsCharts.svelte.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { i as img02 } from "../../../chunks/img-2-4d0b6815.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { i as img10 } from "../../../chunks/img-10-2971869e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const UpcomingActivities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { widgetsActivities, widgetsTasks } = $$props;
  const chartDataOptions = [
    {
      id: 1,
      title: "Application",
      persantage: "16.24",
      series: [
        {
          name: "Results",
          data: [0, 68, 35, 90, 99]
        }
      ],
      dataColors: '["--vz-success" , "--vz-transparent"]'
    },
    {
      id: 2,
      title: "Interviewed",
      persantage: "34.24",
      series: [
        {
          name: "Results",
          data: [0, 98, 85, 90, 67]
        }
      ],
      dataColors: '["--vz-danger" , "--vz-transparent"]'
    },
    {
      id: 3,
      title: "Hired",
      persantage: "6.67",
      series: [
        {
          name: "Results",
          data: [0, 65, 103, 75, 120]
        }
      ],
      dataColors: '["--vz-success" , "--vz-transparent"]'
    }
  ];
  if ($$props.widgetsActivities === void 0 && $$bindings.widgetsActivities && widgetsActivities !== void 0)
    $$bindings.widgetsActivities(widgetsActivities);
  if ($$props.widgetsTasks === void 0 && $$bindings.widgetsTasks && widgetsTasks !== void 0)
    $$bindings.widgetsTasks(widgetsTasks);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 5 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Upcoming Activities</h4>
				<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                    class: "card-header-dropdown",
                    direction: "start"
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "a",
                        class: "text-reset dropdown-btn p-0",
                        role: "button",
                        color: ""
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-vertical"}"></i></span>`;
                        }
                      })}
						${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Edit`;
                            }
                          })}
							${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Remove`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}

			${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                default: () => {
                  return `${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "border-dashed", flush: true }, {}, {
                    default: () => {
                      return `${each(widgetsActivities, (item) => {
                        return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "ps-0" }, {}, {
                          default: () => {
                            return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                              default: () => {
                                return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                                  default: () => {
                                    return `<div class="${"avatar-sm p-1 py-2 h-auto bg-light rounded-3"}"><div class="${"text-center"}"><h5 class="${"mb-0"}">${escape(item.date)}</h5>
											<div class="${"text-muted"}">${escape(item.weekDay)}</div>
										</div></div>
								`;
                                  }
                                })}
								${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                                  default: () => {
                                    return `<h5 class="${"text-muted mt-0 mb-1 fs-13"}">${escape(item.time)}</h5>
									${validate_component(Link, "Link").$$render($$result, {
                                      href: "#!",
                                      class: "text-reset fs-15 mb-0"
                                    }, {}, {
                                      default: () => {
                                        return `${escape(item.caption)}`;
                                      }
                                    })}
								`;
                                  }
                                })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
                                  default: () => {
                                    return `<div class="${"avatar-group"}">${each(item.subItem, (item2) => {
                                      return `${item2.img ? `<div class="${"avatar-group-item"}">${validate_component(Link, "Link").$$render($$result, {
                                        href: "#!",
                                        class: "d-inline-block",
                                        id: item2.targetId
                                      }, {}, {
                                        default: () => {
                                          return `<img${add_attribute("src", item2.img, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
													`;
                                        }
                                      })}
												</div>` : `<div class="${"avatar-group-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<div class="${"avatar-xxs"}"><span${add_attribute("class", "avatar-title rounded-circle text-white " + item2.bgcolor, 0)}>${escape(item2.imgNumber)}
															</span></div>
													`;
                                        }
                                      })}
												</div>`}`;
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

				${validate_component(Row, "Row").$$render($$result, {
                    class: "align-items-center mt-2 text-center text-sm-start"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
                        default: () => {
                          return `<div class="${"text-muted"}">Showing<span class="${"fw-semibold"}">4</span> of <span class="${"fw-semibold"}">125</span> Results
						</div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
                        default: () => {
                          return `${validate_component(Pagination, "Pagination").$$render($$result, {
                            size: "sm",
                            class: "pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0"
                          }, {}, {
                            default: () => {
                              return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `\u2190`;
                                    }
                                  })}`;
                                }
                              })}
							${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}`;
                                }
                              })}
							${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `2`;
                                    }
                                  })}`;
                                }
                              })}
							${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `3`;
                                    }
                                  })}`;
                                }
                              })}
							${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `\u2192`;
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
              })}`;
            }
          })}`;
        }
      })}
	${validate_component(Col, "Col").$$render($$result, { xxl: 7 }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
                    default: () => {
                      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                        default: () => {
                          return `<h4 class="${"card-title mb-0 flex-grow-1"}">My Tasks</h4>
						<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "a",
                                class: "text-reset dropdown-btn p-0",
                                role: "button",
                                color: ""
                              }, {}, {
                                default: () => {
                                  return `<span class="${"text-muted"}"><i class="${"ri-settings-4-line align-middle me-1 fs-15"}"></i>Settings</span>`;
                                }
                              })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Edit`;
                                    }
                                  })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Remove`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>`;
                        }
                      })}

					${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                        default: () => {
                          return `<div class="${"align-items-center p-3 justify-content-between d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"text-muted"}"><span class="${"fw-semibold"}">4</span> of <span class="${"fw-semibold"}">10</span> remaining
								</div></div>
							${validate_component(Button, "Button").$$render($$result, { color: "success", size: "sm" }, {}, {
                            default: () => {
                              return `<i class="${"ri-add-line align-middle me-1"}"></i> Add Task`;
                            }
                          })}</div>

						<div data-simplebar style="${"max-height: 257px;"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "border-dashed px-3", flush: true }, {}, {
                            default: () => {
                              return `${each(widgetsTasks, (item) => {
                                return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "ps-0" }, {}, {
                                  default: () => {
                                    return `<div class="${"d-flex align-items-start"}"><div class="${"form-check ps-0 flex-sharink-0"}"><input type="${"checkbox"}" class="${"form-check-input ms-0"}"${add_attribute("id", item.forId, 0)}></div>
											<div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                      class: "form-check-label mb-0 ps-2",
                                      for: item.forId
                                    }, {}, {
                                      default: () => {
                                        return `${escape(item.text)}`;
                                      }
                                    })}</div>
											<div class="${"flex-shrink-0 ms-2"}"><p class="${"text-muted fs-13 mb-0"}">${escape(item.date)}</p>
											</div></div>
									`;
                                  }
                                })}`;
                              })}`;
                            }
                          })}</div>
						<div class="${"p-3"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "#!",
                            class: "text-muted text-decoration-underline"
                          }, {}, {
                            default: () => {
                              return `Show more...`;
                            }
                          })}</div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
                    default: () => {
                      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
                        class: "border-bottom-dashed align-items-center d-flex"
                      }, {}, {
                        default: () => {
                          return `<h4 class="${"card-title mb-0 flex-grow-1"}">Recent Activity</h4>
						<div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">View All Activity </button></div>`;
                        }
                      })}
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                        default: () => {
                          return `<div data-simplebar style="${"max-height: 364px;"}" class="${"p-3"}"><div class="${"acitivity-timeline acitivity-main m-0"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}"><i class="${"ri-shopping-cart-2-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Purchase by James Price</h6>
										<p class="${"text-muted mb-1"}">Product noise evolve smartwatch</p>
										<small class="${"mb-0 text-muted"}">02:14 PM Today</small></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-primary text-primary rounded-circle"}"><i class="${"ri-stack-fill"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Added new <span class="${"fw-bold"}">style collection</span></h6>
										<p class="${"text-muted mb-1"}">By Nesta Technologies</p>
										<div class="${"d-inline-flex gap-2 border border-dashed p-2 mb-2 w-75"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "bg-light rounded p-1"
                          }, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                            }
                          })}
											${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "bg-light rounded p-1"
                          }, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img02, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                            }
                          })}
											${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-product-details",
                            class: "bg-light rounded p-1"
                          }, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                            }
                          })}</div>
										<p class="${"mb-0 text-muted"}"><small>9:47 PM Yesterday</small></p></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey have liked the products</h6>
										<p class="${"text-muted mb-1"}">Allow users to like products in your WooCommerce store.
										</p>
										<small class="${"mb-0 text-muted"}">25 Dec, 2021</small></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-secondary"}"><i class="${"mdi mdi-sale fs-14"}"></i></div></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Today offers by ${validate_component(Link, "Link").$$render($$result, {
                            href: "/ecommerce/apps-ecommerce-seller-details",
                            class: "link-secondary"
                          }, {}, {
                            default: () => {
                              return `Digitech Galaxy`;
                            }
                          })}</h6>
										<p class="${"text-muted mb-2"}">Offer is valid on orders of Rs.500 Or above for selected products only.
										</p>
										<small class="${"mb-0 text-muted"}">12 Dec, 2021</small></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-bookmark-fill"}"></i></div></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Favoried Product</h6>
										<p class="${"text-muted mb-2"}">Esther James have favorited product.</p>
										<small class="${"mb-0 text-muted"}">25 Nov, 2021</small></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-secondary"}"><i class="${"mdi mdi-sale fs-14"}"></i></div></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Flash sale starting <span class="${"text-primary"}">Tomorrow.</span></h6>
										<p class="${"text-muted mb-0"}">Flash sale by ${validate_component(Link, "Link").$$render($$result, {
                            href: "#!",
                            class: "link-secondary fw-medium"
                          }, {}, {
                            default: () => {
                              return `Zoetic Fashion`;
                            }
                          })}</p>
										<small class="${"mb-0 text-muted"}">22 Oct, 2021</small></div></div>
								<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
										<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span> notification to submit the
											monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
                            href: "#!",
                            class: "link-warning text-decoration-underline"
                          }, {}, {
                            default: () => {
                              return `Reports Builder`;
                            }
                          })}</p>
										<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
								<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Frank Hook Commented</h6>
										<p class="${"text-muted mb-2 fst-italic"}">&quot; A product that has reviews is more likable to be sold than a product. &quot;
										</p>
										<small class="${"mb-0 text-muted"}">26 Aug, 2021</small></div></div></div></div>`;
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
  })}
${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(chartDataOptions, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
              default: () => {
                return `<div class="${"d-flex"}"><div class="${"flex-grow-1 p-3"}"><h5 class="${"mb-3"}">${escape(item.title)}</h5>
						<p class="${"mb-0 text-muted"}"><span class="${"badge bg-light text-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> ${escape(item.persantage)} % </span> vs. previous month</p></div>
					<div>${validate_component(WidgetsCharts, "OtherWidgetsCharts").$$render($$result, {
                  dataColors: item.dataColors,
                  id: item.id,
                  seriesData: item.series
                }, {}, {})}
					</div></div>
			`;
              }
            })}
		`;
          }
        })}`;
      })}`;
    }
  })}`;
});
export { UpcomingActivities as default };
