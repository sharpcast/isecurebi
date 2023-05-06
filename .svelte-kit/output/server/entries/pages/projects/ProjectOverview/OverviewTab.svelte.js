import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar6 } from "../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const OverviewTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 9, lg: 8 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"text-muted"}"><h6 class="${"mb-3 fw-semibold text-uppercase"}">Summary</h6>
					<p>It will be as simple as occidental in fact, it will be Occidental. To an English person,
						it will seem like simplified English, as a skeptical Cambridge friend of mine told me
						what Occidental is. The European languages are members of the same family. Their
						separate existence is a myth. For science, music, sport, etc, Europe uses the same
						vocabulary. The languages only differ in their grammar, their pronunciation and their
						most common words.
					</p>

					<ul class="${"ps-4 vstack gap-2"}"><li>Product Design, Figma (Software), Prototype</li>
						<li>Four Dashboards : Ecommerce, Analytics, Project,etc.</li>
						<li>Create calendar, chat and email app pages.</li>
						<li>Add authentication pages.</li>
						<li>Content listing.</li></ul>

					<div>${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn btn-link link-success p-0"
                  }, {}, {
                    default: () => {
                      return `Read more`;
                    }
                  })}</div>

					<div class="${"pt-3 border-top border-top-dashed mt-4"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium"}">Create Date :</p>
									<h5 class="${"fs-15 mb-0"}">15 Sep, 2021</h5></div>`;
                        }
                      })}
							${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium"}">Due Date :</p>
									<h5 class="${"fs-15 mb-0"}">29 Dec, 2021</h5></div>`;
                        }
                      })}
							${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium"}">Priority :</p>
									<div class="${"badge bg-danger fs-12"}">High</div></div>`;
                        }
                      })}
							${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"mb-2 text-uppercase fw-medium"}">Status :</p>
									<div class="${"badge bg-warning fs-12"}">Inprogess</div></div>`;
                        }
                      })}`;
                    }
                  })}</div>

					<div class="${"pt-3 border-top border-top-dashed mt-4"}"><h6 class="${"mb-3 fw-semibold text-uppercase"}">Resources</h6>
						${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6, class: "col-xxl-4" }, {}, {
                        default: () => {
                          return `<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div></div>
										<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                            href: null,
                            class: "text-body text-truncate d-block"
                          }, {}, {
                            default: () => {
                              return `App pages.zip`;
                            }
                          })}</h5>
											<div>2.2MB</div></div>
										<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                            class: "btn btn-icon text-muted btn-sm fs-18",
                            color: ""
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-line"}"></i>`;
                            }
                          })}
												${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                                color: ""
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-more-fill"}"></i>`;
                                }
                              })}
													${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                                    }
                                  })}</li>
														<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                                    }
                                  })}</li>`;
                                }
                              })}`;
                            }
                          })}</div></div></div></div>`;
                        }
                      })}
							
							${validate_component(Col, "Col").$$render($$result, { lg: 6, class: "col-xxl-4" }, {}, {
                        default: () => {
                          return `<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded fs-24"}"><i class="${"ri-file-ppt-2-line"}"></i></div></div></div>
										<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                            href: null,
                            class: "text-body text-truncate d-block"
                          }, {}, {
                            default: () => {
                              return `Velzon admin.ppt`;
                            }
                          })}</h5>
											<div>2.4MB</div></div>
										<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                            class: "btn btn-icon text-muted btn-sm fs-18",
                            color: ""
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-line"}"></i>`;
                            }
                          })}
												${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                                color: ""
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-more-fill"}"></i>`;
                                }
                              })}
													${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                                    }
                                  })}</li>
														<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                                    }
                                  })}</li>`;
                                }
                              })}`;
                            }
                          })}</div></div></div></div>`;
                        }
                      })}
							`;
                    }
                  })}
						</div></div>`;
                }
              })}
			`;
            }
          })}
		

		${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Comments</h4>
				<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    href: null,
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted"}">Recent<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
						${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `Recent`;
                        }
                      })}
							${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `Top Rated`;
                        }
                      })}
							${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `Previous`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div>
			

			${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div data-simplebar style="${"height: 300px;"}" class="${"px-3 mx-n3 mb-2"}"><div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Joseph Parker <small class="${"text-muted ms-2"}">20 Dec 2021 - 05:47AM</small></h5>
							<p class="${"text-muted"}">I am getting message from customers that when they place order always get error
								message .
							</p>
							${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}
							<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Alexis Clarke <small class="${"text-muted ms-2"}">22 Dec 2021 - 02:32PM</small></h5>
									<p class="${"text-muted"}">Please be sure to check your Spam mailbox to see if your email filters have
										identified the email from Dell as spam.
									</p>
									${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}</div></div></div></div>
					<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Donald Palmer <small class="${"text-muted ms-2"}">24 Dec 2021 - 05:20PM</small></h5>
							<p class="${"text-muted"}">If you have further questions, please contact Customer Support from the \u201CAction
								Menu\u201D on your ${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Online Order Support`;
                    }
                  })}.
							</p>
							${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}</div></div>
					<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Alexis Clarke <small class="${"text-muted ms-2"}">26 min ago</small></h5>
							<p class="${"text-muted"}">Your ${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Online Order Support`;
                    }
                  })} provides you with the most current status of your order. To help manage your order
								refer to the \u201CAction Menu\u201D to initiate return, contact Customer Support and more.
							</p>
							${validate_component(Row, "Row").$$render($$result, { class: "g-2 mb-3" }, {}, {
                    default: () => {
                      return `<div class="${"col-lg-1 col-sm-2 col-6"}"><img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>
								<div class="${"col-lg-1 col-sm-2 col-6"}"><img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>`;
                    }
                  })}
							${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}
							<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Donald Palmer <small class="${"text-muted ms-2"}">8 sec ago</small></h5>
									<p class="${"text-muted"}">Other shipping methods are available at checkout if you want your purchase
										delivered faster.
									</p>
									${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}</div></div></div></div></div>
				<form class="${"mt-4"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `<div class="${"col-12"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "exampleFormControlTextarea1",
                        class: "form-label text-body"
                      }, {}, {
                        default: () => {
                          return `Leave a Comments`;
                        }
                      })}
							<textarea class="${"form-control bg-light border-light"}" id="${"exampleFormControlTextarea1"}" rows="${"3"}" placeholder="${"Enter your comment..."}"></textarea></div>
						<div class="${"col-12 text-end"}">${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-ghost-primary btn-icon waves-effect me-1",
                        color: ""
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-attachment-line fs-16"}"></i>`;
                        }
                      })}
							${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-success" }, {}, {
                        default: () => {
                          return `Post Comments`;
                        }
                      })}</div>`;
                    }
                  })}</form>`;
                }
              })}
			`;
            }
          })}
		`;
        }
      })}
	
	<div class="${"col-xl-3 col-lg-4"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<h5 class="${"card-title mb-4"}">Skills</h5>
				<div class="${"d-flex flex-wrap gap-2 fs-16"}"><div class="${"badge fw-medium badge-soft-secondary"}">UI/UX</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">Figma</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">HTML</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">CSS</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">Javascript</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">C#</div>
					<div class="${"badge fw-medium badge-soft-secondary"}">Nodejs</div></div>`;
            }
          })}
			`;
        }
      })}
		

		${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"card-header align-items-center d-flex border-bottom-dashed"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Members</h4>
				<div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
            class: "btn btn-soft-danger btn-sm",
            color: ""
          }, {}, {
            default: () => {
              return `<i class="${"ri-share-line me-1 align-bottom"}"></i> Invite Member`;
            }
          })}</div></div>

			${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div data-simplebar style="${"height: 235px;"}" class="${"mx-n3 px-3"}"><div class="${"vstack gap-3"}"><div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Nancy Martino</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						
						<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle"}">HB</div></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Henry Baird</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    color: "",
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						
						<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Frank Hook</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						
						<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Jennifer Carter</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						
						<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">AC</div></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Alexis Clarke</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						
						<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
							<div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}"><a${add_attribute("href", null, 0)} class="${"text-body d-block"}">Joseph Parker</a></h5></div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex align-items-center gap-1"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                default: () => {
                  return `Message`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div>
						</div>
					</div>`;
            }
          })}
			`;
        }
      })}
		

		${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"card-header align-items-center d-flex border-bottom-dashed"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Attachments</h4>
				<div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
            class: "btn btn-soft-info btn-sm",
            color: ""
          }, {}, {
            default: () => {
              return `<i class="${"ri-upload-2-fill me-1 align-bottom"}"></i> Upload`;
            }
          })}</div></div>

			${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"vstack gap-2"}"><div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div></div>
							<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "text-body text-truncate d-block"
              }, {}, {
                default: () => {
                  return `App-pages.zip`;
                }
              })}</h5>
								<div>2.2MB</div></div>
							<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "button",
                    color: "",
                    class: "btn btn-icon text-muted btn-sm fs-18 dropdown"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div></div>

					<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-file-ppt-2-line"}"></i></div></div></div>
							<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "text-body text-truncate d-block"
              }, {}, {
                default: () => {
                  return `Velzon-admin.ppt`;
                }
              })}</h5>
								<div>2.4MB</div></div>
							<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div></div>

					<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div></div>
							<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "text-body text-truncate d-block"
              }, {}, {
                default: () => {
                  return `Images.zip`;
                }
              })}</h5>
								<div>1.2MB</div></div>
							<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div></div>

					<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-image-2-line"}"></i></div></div></div>
							<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "text-body text-truncate d-block"
              }, {}, {
                default: () => {
                  return `bg-pattern.png`;
                }
              })}</h5>
								<div>1.1MB</div></div>
							<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-download-2-line"}"></i>`;
                }
              })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div></div></div></div>

					<div class="${"mt-2 text-center"}">${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                default: () => {
                  return `View more`;
                }
              })}</div></div>`;
            }
          })}
			`;
        }
      })}
		</div>
	`;
    }
  })}`;
});
export { OverviewTab as default };
