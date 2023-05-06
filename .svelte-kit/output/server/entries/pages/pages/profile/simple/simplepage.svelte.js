import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { C as Collapse } from "../../../../../chunks/Collapse-6781eb46.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../../../chunks/Label-1c7919d2.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../../chunks/TabPane-b01382c8.js";
import { i as img2 } from "../../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../../../chunks/img-7-4861de06.js";
import { i as img9 } from "../../../../../chunks/img-9-422942e7.js";
import { a as avatar1 } from "../../../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../../chunks/avatar-8-f9de7a45.js";
import { p as profilebg } from "../../../../../chunks/profile-bg-1b981fff.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                             */import "../../../../../chunks/popper-e421ff0f.js";
import "../../../../../chunks/index-bddc6f42.js";
const Simplepage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  let activeTimelineTab = 1;
  return `${$$result.head += `${$$result.title = `<title>Profile | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"profile-foreground position-relative mx-n4 mt-n4"}"><div class="${"profile-wid-bg"}"><img${add_attribute("src", profilebg, 0)} alt="${""}" class="${"profile-wid-img"}"></div></div>
		<div class="${"pt-4 mb-4 mb-lg-3 pb-lg-4"}">${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
        default: () => {
          return `<div class="${"col-auto"}"><div class="${"avatar-lg"}"><img${add_attribute("src", avatar1, 0)} alt="${"user-img"}" class="${"img-thumbnail rounded-circle"}"></div></div>

				<div class="${"col"}"><div class="${"p-2"}"><h3 class="${"text-white mb-1"}">Anna Adame</h3>
						<p class="${"text-white-75"}">Owner &amp; Founder</p>
						<div class="${"hstack text-white-50 gap-1"}"><div class="${"me-2"}"><i class="${"ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"}"></i>California,
								United States
							</div>
							<div><i class="${"ri-building-line me-1 text-white-75 fs-16 align-middle"}"></i>Themesbrand
							</div></div></div></div>

				<div class="${"col-12 col-lg-auto order-last order-lg-0"}"><div class="${"row text text-white-50 text-center"}">${validate_component(Col, "Col").$$render($$result, { lg: 6, class: "col-4" }, {}, {
            default: () => {
              return `<div class="${"p-2"}"><h4 class="${"text-white mb-1"}">24.3K</h4>
								<p class="${"fs-14 mb-0"}">Followers</p></div>`;
            }
          })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6, class: "col-4" }, {}, {
            default: () => {
              return `<div class="${"p-2"}"><h4 class="${"text-white mb-1"}">1.3K</h4>
								<p class="${"fs-14 mb-0"}">Following</p></div>`;
            }
          })}</div></div>`;
        }
      })}</div>

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div><div class="${"d-flex"}">${validate_component(Nav, "Nav").$$render($$result, {
                pills: true,
                class: "animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
              }, {}, {
                default: () => {
                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fs-14", active: activeTab == 1 }, {}, {
                        default: () => {
                          return `<i class="${"ri-airplay-fill d-inline-block d-md-none"}"></i>
									<span class="${"d-none d-md-inline-block"}">Overview</span>`;
                        }
                      })}`;
                    }
                  })}

							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fs-14", active: activeTab == 2 }, {}, {
                        default: () => {
                          return `<i class="${"ri-list-unordered d-inline-block d-md-none"}"></i>
									<span class="${"d-none d-md-inline-block"}">Activities</span>`;
                        }
                      })}`;
                    }
                  })}

							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fs-14", active: activeTab == 3 }, {}, {
                        default: () => {
                          return `<i class="${"ri-price-tag-line d-inline-block d-md-none"}"></i>
									<span class="${"d-none d-md-inline-block"}">Projects</span>`;
                        }
                      })}`;
                    }
                  })}

							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fs-14", active: activeTab == 4 }, {}, {
                        default: () => {
                          return `<i class="${"ri-folder-4-line d-inline-block d-md-none"}"></i>
									<span class="${"d-none d-md-inline-block"}">Documents</span>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}
						<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/settings/pages-profile-settings",
                class: "btn btn-info"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-edit-box-line align-bottom"}"></i> Edit Profile`;
                }
              })}</div></div>

					${validate_component(TabContent, "TabContent").$$render($$result, { class: "pt-4 text-muted" }, {}, {
                default: () => {
                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                    id: "overview-tab",
                    tabId: 1,
                    class: "active",
                    role: "tabpanel"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h5 class="${"card-title mb-5"}">Complete Your Profile</h5>

											<div class="${"progress animated-progress custom-progress progress-label"}"><div class="${"progress-bar bg-info"}" role="${"progressbar"}" style="${"width: 30%"}"><div class="${"label"}">30%</div></div></div>`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h5 class="${"card-title mb-3"}">Info</h5>
											<div class="${"table-responsive"}"><table class="${"table table-borderless mb-0"}"><tbody><tr><th class="${"ps-0"}" scope="${"row"}">Full Name :</th>
															<td class="${"text-muted"}">Anna Adame</td></tr>
														<tr><th class="${"ps-0"}" scope="${"row"}">Mobile :</th>
															<td class="${"text-muted"}">+(1) 987 6543</td></tr>
														<tr><th class="${"ps-0"}" scope="${"row"}">E-mail :</th>
															<td class="${"text-muted"}">daveadame@velzon.com</td></tr>
														<tr><th class="${"ps-0"}" scope="${"row"}">Location :</th>
															<td class="${"text-muted"}">California, United States </td></tr>
														<tr><th class="${"ps-0"}" scope="${"row"}">Joining Date</th>
															<td class="${"text-muted"}">24 Nov 2021</td></tr></tbody></table></div>`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h5 class="${"card-title mb-4"}">Portfolio</h5>
											<div class="${"d-flex flex-wrap gap-2"}"><div>${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-xs d-block" }, {}, {
                                        default: () => {
                                          return `<span class="${"avatar-title rounded-circle fs-16 bg-dark text-light"}"><i class="${"ri-github-fill"}"></i></span>`;
                                        }
                                      })}</div>
												<div>${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-xs d-block" }, {}, {
                                        default: () => {
                                          return `<span class="${"avatar-title rounded-circle fs-16 bg-primary"}"><i class="${"ri-global-fill"}"></i></span>`;
                                        }
                                      })}</div>
												<div>${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-xs d-block" }, {}, {
                                        default: () => {
                                          return `<span class="${"avatar-title rounded-circle fs-16 bg-success"}"><i class="${"ri-dribbble-fill"}"></i></span>`;
                                        }
                                      })}</div>
												<div>${validate_component(Link, "Link").$$render($$result, { href: null, class: "avatar-xs d-block" }, {}, {
                                        default: () => {
                                          return `<span class="${"avatar-title rounded-circle fs-16 bg-danger"}"><i class="${"ri-pinterest-fill"}"></i></span>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h5 class="${"card-title mb-4"}">Skills</h5>
											<div class="${"d-flex flex-wrap gap-2 fs-15"}">${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `Photoshop`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `illustrator`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `HTML`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `CSS`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `Javascript`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `Php`;
                                        }
                                      })}
												${validate_component(Link, "Link").$$render($$result, {
                                        href: null,
                                        class: "badge badge-soft-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `Python`;
                                        }
                                      })}</div>`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Suggestions</h5></div>
												<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-more-2-fill fs-14"}"></i>`;
                                            }
                                          })}

														${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                                            class: "dropdown-menu-end",
                                            "aria-labelledby": "dropdownMenuLink2"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `View`;
                                                }
                                              })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `Edit`;
                                                }
                                              })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `Delete`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div></div>
											<div><div class="${"d-flex align-items-center py-3"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
													<div class="${"flex-grow-1"}"><div><h5 class="${"fs-15 mb-1"}">Esther James</h5>
															<p class="${"fs-13 text-muted mb-0"}">Frontend Developer</p></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><button type="${"button"}" class="${"btn btn-sm btn-outline-info"}"><i class="${"ri-user-add-line align-middle"}"></i></button></div></div>
												<div class="${"d-flex align-items-center py-3"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
													<div class="${"flex-grow-1"}"><div><h5 class="${"fs-15 mb-1"}">Jacqueline Steve</h5>
															<p class="${"fs-13 text-muted mb-0"}">UI/UX Designer</p></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><button type="${"button"}" class="${"btn btn-sm btn-outline-info"}"><i class="${"ri-user-add-line align-middle"}"></i></button></div></div>
												<div class="${"d-flex align-items-center py-3"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
													<div class="${"flex-grow-1"}"><div><h5 class="${"fs-15 mb-1"}">George Whalen</h5>
															<p class="${"fs-13 text-muted mb-0"}">Backend Developer</p></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><button type="${"button"}" class="${"btn btn-sm btn-outline-info"}"><i class="${"ri-user-add-line align-middle"}"></i></button></div></div></div>`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Popular Posts</h5></div>
												<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null }, {}, {
                                            default: () => {
                                              return `<i class="${"ri-more-2-fill fs-14"}"></i>`;
                                            }
                                          })}

														${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `View`;
                                                }
                                              })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `Edit`;
                                                }
                                              })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                                default: () => {
                                                  return `Delete`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div></div>
											<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img4, 0)} alt="${""}" height="${"50"}" class="${"rounded"}"></div>
												<div class="${"flex-grow-1 ms-3 overflow-hidden"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                        default: () => {
                                          return `<h6 class="${"text-truncate fs-14"}">Design your apps in your own way</h6>`;
                                        }
                                      })}
													<p class="${"text-muted mb-0"}">15 Dec 2021</p></div></div>
											<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img5, 0)} alt="${""}" height="${"50"}" class="${"rounded"}"></div>
												<div class="${"flex-grow-1 ms-3 overflow-hidden"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                        default: () => {
                                          return `<h6 class="${"text-truncate fs-14"}">Smartest Applications for Business</h6>`;
                                        }
                                      })}
													<p class="${"text-muted mb-0"}">28 Nov 2021</p></div></div>
											<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img6, 0)} alt="${""}" height="${"50"}" class="${"rounded"}"></div>
												<div class="${"flex-grow-1 ms-3 overflow-hidden"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                        default: () => {
                                          return `<h6 class="${"text-truncate fs-14"}">How to get creative in your work</h6>`;
                                        }
                                      })}
													<p class="${"text-muted mb-0"}">21 Nov 2021</p></div></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

								<div class="${"col-xxl-9"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 class="${"card-title mb-3"}">About</h5>
											<p>Hi I&#39;m Anna Adame, It will be as simple as Occidental; in fact, it will be
												Occidental. To an English person, it will seem like simplified English, as a
												skeptical Cambridge friend of mine told me what Occidental is European
												languages are members of the same family.
											</p>
											<p>You always want to make sure that your fonts work well together and try to
												limit the number of fonts you use to three or less. Experiment and play
												around with the fonts that you already have in the software you\u2019re working
												with reputable font websites. This may be the most commonly encountered tip
												I received from the designers I spoke with. They highly encourage that you
												use different fonts in one design, but do not over-exaggerate and go
												overboard.
											</p>
											${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { xs: 6, md: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0 avatar-xs align-self-center me-3"}"><div class="${"avatar-title bg-light rounded-circle fs-16 text-primary"}"><i class="${"ri-user-2-fill"}"></i></div></div>
														<div class="${"flex-grow-1 overflow-hidden"}"><p class="${"mb-1"}">Designation :</p>
															<h6 class="${"text-truncate mb-0"}">Lead Designer / Developer</h6></div></div>`;
                                        }
                                      })}

												${validate_component(Col, "Col").$$render($$result, { xs: 6, md: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0 avatar-xs align-self-center me-3"}"><div class="${"avatar-title bg-light rounded-circle fs-16 text-primary"}"><i class="${"ri-global-line"}"></i></div></div>
														<div class="${"flex-grow-1 overflow-hidden"}"><p class="${"mb-1"}">Website :</p>
															${validate_component(Link, "Link").$$render($$result, { href: null, class: "fw-semibold" }, {}, {
                                            default: () => {
                                              return `www.velzon.com`;
                                            }
                                          })}</div></div>`;
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
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                                        default: () => {
                                          return `<h4 class="${"card-title mb-0 me-2"}">Recent Activity</h4>
													<div class="${"flex-shrink-0 ms-auto"}">${validate_component(Nav, "Nav").$$render($$result, {
                                            class: "justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0",
                                            role: "tablist"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTimelineTab == 1 }, {}, {
                                                    default: () => {
                                                      return `Today
																`;
                                                    }
                                                  })}`;
                                                }
                                              })}
															${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTimelineTab == 2 }, {}, {
                                                    default: () => {
                                                      return `Weekly
																`;
                                                    }
                                                  })}`;
                                                }
                                              })}
															${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTimelineTab == 3 }, {}, {
                                                    default: () => {
                                                      return `Monthly
																`;
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
                                          return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                                            default: () => {
                                              return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                                tabId: 1,
                                                class: "active",
                                                id: "today",
                                                role: "tabpanel"
                                              }, {}, {
                                                default: () => {
                                                  return `<div class="${"profile-timeline"}"><div class="${"accordion accordion-flush"}" id="${"todayExample"}"><div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingOne"}">${validate_component(Link, "Link").$$render($$result, {
                                                    id: "collapseOne",
                                                    class: "accordion-button p-2 shadow-none"
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Jacqueline Steve</h6>
																						<small class="${"text-muted"}">We has changed 2 attributes on 05:16PM</small></div></div>`;
                                                    }
                                                  })}</div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "collapseOne",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}">In an awareness campaign, it is vital for people to begin
																				put 2 and 2 together and begin to recognize your cause. Too
																				much or too little spacing, as in the example below, can
																				make things unpleasant for the reader. The goal is to make
																				your text as comfortable to read as possible. A wonderful
																				serenity has taken possession of my entire soul, like these
																				sweet mornings of spring which I enjoy with my whole heart.
																			</div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingTwo"}">${validate_component(Link, "Link").$$render($$result, {
                                                    class: "accordion-button p-2 shadow-none",
                                                    id: "collapseTwo"
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-success rounded-circle"}">M
																						</div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Megan Elmore</h6>
																						<small class="${"text-muted"}">Adding a new event with attachments - 04:45PM</small></div></div>`;
                                                    }
                                                  })}</div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "collapseTwo",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}"><div class="${"row g-2"}"><div class="${"col-auto"}"><div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0"}"><i class="${"ri-image-2-line fs-17 text-secondary"}"></i></div>
																							<div class="${"flex-grow-1 ms-2"}"><h6>${validate_component(Link, "Link").$$render($$result, { href: null, class: "stretched-link" }, {}, {
                                                        default: () => {
                                                          return `Business Template - UI/UX design`;
                                                        }
                                                      })}</h6>
																								<small>685 KB</small></div></div></div>
																					<div class="${"col-auto"}"><div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0"}"><i class="${"ri-file-zip-line fs-17 text-secondary"}"></i></div>
																							<div class="${"flex-grow-1 ms-2"}"><h6>${validate_component(Link, "Link").$$render($$result, { href: null, class: "stretched-link" }, {}, {
                                                        default: () => {
                                                          return `Bank Management System - PSD`;
                                                        }
                                                      })}</h6>
																								<small>8.78 MB</small></div></div></div></div></div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingThree"}">${validate_component(Link, "Link").$$render($$result, {
                                                    class: "accordion-button p-2 shadow-none",
                                                    id: "collapsethree"
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">New ticket received</h6>
																						<small class="${"text-muted mb-2"}">User
																							<span class="${"text-secondary"}">Erica245</span>
																							submitted a ticket - 02:33PM</small></div></div>`;
                                                    }
                                                  })}</div></div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingFour"}">${validate_component(Link, "Link").$$render($$result, {
                                                    class: "accordion-button p-2 shadow-none",
                                                    id: "collapseFour"
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-muted rounded-circle"}"><i class="${"ri-user-3-fill"}"></i></div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Nancy Martino</h6>
																						<small class="${"text-muted"}">Commented on 12:57PM</small></div></div>`;
                                                    }
                                                  })}</div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "collapseFour",
                                                    class: "accordion-collapse",
                                                    "aria-labelledby": "headingFour",
                                                    "data-bs-parent": "#accordionExample",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5 fst-italic"}">&quot; A wonderful serenity has taken possession of my entire
																				soul, like these sweet mornings of spring which I enjoy with
																				my whole heart. Each design is a new, unique piece of art
																				birthed into this world, and while you have the opportunity
																				to be creative and make your own style choices. &quot;
																			</div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"headingFive"}">${validate_component(Link, "Link").$$render($$result, {
                                                    class: "accordion-button p-2 shadow-none",
                                                    id: "collapseFive"
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Lewis Arnold</h6>
																						<small class="${"text-muted"}">Create new project buildng product - 10:05AM</small></div></div>`;
                                                    }
                                                  })}</div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "collapseFive",
                                                    class: "accordion-collapse",
                                                    "aria-labelledby": "headingFive",
                                                    "data-bs-parent": "#accordionExample",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}"><p class="${"text-muted mb-2"}">Every team project can have a velzon. Use the velzon to
																					share information with your team to understand and
																					contribute to your project.
																				</p>
																				<div class="${"avatar-group"}">${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "Christi"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "Frank Hook"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": " Ruby"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
																							</div></div>`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "more"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+</div></div>`;
                                                        }
                                                      })}</div></div>`;
                                                    }
                                                  })}</div></div></div>`;
                                                }
                                              })}
														${validate_component(TabPane, "TabPane").$$render($$result, {
                                                tabId: 2,
                                                class: ""
                                              }, {}, {
                                                default: () => {
                                                  return `<div class="${"profile-timeline"}"><div class="${"accordion accordion-flush"}" id="${"weeklyExample"}"><div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading6"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse6"}" aria-expanded="${"true"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Joseph Parker</h6>
																						<small class="${"text-muted"}">New people joined with our company - Yesterday</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse6",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}">It makes a statement, it\u2019s impressive graphic design.
																				Increase or decrease the letter spacing depending on the
																				situation and try, try again until it looks right, and each
																				letter has the perfect spot of its own.
																			</div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading7"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse7"}" aria-expanded="${"false"}"><div class="${"d-flex"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Your order is placed <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
																						<small class="${"text-muted"}">These customers can rest assured their order has been
																							placed - 1 week Ago</small></div></div></a></div></div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading8"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse8"}" aria-expanded="${"true"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-success rounded-circle"}"><i class="${"ri-home-3-line"}"></i></div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Velzon admin dashboard templates layout upload
																						</h6>
																						<small class="${"text-muted"}">We talked about a project on linkedin - 1 week Ago</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse8",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5 fst-italic"}">Powerful, clean &amp; modern responsive bootstrap 5 admin
																				template. The maximum file size for uploads in this demo :
																				<div class="${"row mt-2"}"><div class="${"col-xxl-6"}"><div class="${"row border border-dashed gx-2 p-2"}"><div class="${"col-3"}"><img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>

																							<div class="${"col-3"}"><img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>

																							<div class="${"col-3"}"><img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>

																							<div class="${"col-3"}"><img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid rounded"}"></div></div></div></div></div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading9"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse9"}" aria-expanded="${"false"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">New ticket created <span class="${"badge bg-soft-info text-info align-middle"}">Inprogress</span></h6>
																						<small class="${"text-muted mb-2"}">User
																							<span class="${"text-secondary"}">Jack365</span>
																							submitted a ticket - 2 week Ago</small></div></div></a></div></div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading10"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse10"}" aria-expanded="${"true"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Jennifer Carter</h6>
																						<small class="${"text-muted"}">Commented - 4 week Ago</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse10",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}"><p class="${"text-muted fst-italic mb-2"}">&quot; This is an awesome admin dashboard template. It is
																					extremely well structured and uses state of the art
																					components (e.g. one of the only templates using boostrap
																					5.1.3 so far). I integrated it into a Rails 6 project.
																					Needs manual integration work of course but the template
																					structure made it easy. &quot;
																				</p></div>`;
                                                    }
                                                  })}</div></div></div>`;
                                                }
                                              })}
														${validate_component(TabPane, "TabPane").$$render($$result, {
                                                tabId: 3,
                                                class: ""
                                              }, {}, {
                                                default: () => {
                                                  return `<div class="${"profile-timeline"}"><div class="${"accordion accordion-flush"}" id="${"monthlyExample"}"><div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading11"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse11"}" aria-expanded="${"false"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-success rounded-circle"}">M
																						</div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Megan Elmore</h6>
																						<small class="${"text-muted"}">Adding a new event with attachments - 1 month Ago.</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse11",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}"><div class="${"row g-2"}"><div class="${"col-auto"}"><div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0"}"><i class="${"ri-image-2-line fs-17 text-secondary"}"></i></div>
																							<div class="${"flex-grow-1 ms-2"}"><h6>${validate_component(Link, "Link").$$render($$result, { href: null, class: "stretched-link" }, {}, {
                                                        default: () => {
                                                          return `Business Template - UI/UX design`;
                                                        }
                                                      })}</h6>
																								<small>685 KB</small></div></div></div>
																					<div class="${"col-auto"}"><div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0"}"><i class="${"ri-file-zip-line fs-17 text-secondary"}"></i></div>
																							<div class="${"flex-grow-1 ms-2"}"><h6>${validate_component(Link, "Link").$$render($$result, { href: null, class: "stretched-link" }, {}, {
                                                        default: () => {
                                                          return `Bank Management System - PSD`;
                                                        }
                                                      })}</h6>
																								<small>8.78 MB</small></div></div></div>
																					<div class="${"col-auto"}"><div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0"}"><i class="${"ri-file-zip-line fs-17 text-secondary"}"></i></div>
																							<div class="${"flex-grow-1 ms-2"}"><h6>${validate_component(Link, "Link").$$render($$result, { href: null, class: "stretched-link" }, {}, {
                                                        default: () => {
                                                          return `Bank Management System - PSD`;
                                                        }
                                                      })}</h6>
																								<small>8.78 MB</small></div></div></div></div></div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading12"}"><a class="${"accordion-button p-2 shadow-none"}" data-bs-toggle="${"collapse"}" id="${"collapse12"}" aria-expanded="${"true"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Jacqueline Steve</h6>
																						<small class="${"text-muted"}">We has changed 2 attributes on 3 month Ago</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse12",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}">In an awareness campaign, it is vital for people to begin
																				put 2 and 2 together and begin to recognize your cause. Too
																				much or too little spacing, as in the example below, can
																				make things unpleasant for the reader. The goal is to make
																				your text as comfortable to read as possible. A wonderful
																				serenity has taken possession of my entire soul, like these
																				sweet mornings of spring which I enjoy with my whole heart.
																			</div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading13"}"><a class="${"accordion-button p-2 shadow-none"}" id="${"collapse13"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">New ticket received</h6>
																						<small class="${"text-muted mb-2"}">User
																							<span class="${"text-secondary"}">Erica245</span>
																							submitted a ticket - 5 month Ago</small></div></div></a></div></div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading14"}"><a class="${"accordion-button p-2 shadow-none"}" id="${"collapse14"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-light text-muted rounded-circle"}"><i class="${"ri-user-3-fill"}"></i></div></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Nancy Martino</h6>
																						<small class="${"text-muted"}">Commented on 24 Nov, 2021.</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse14",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5 fst-italic"}">&quot; A wonderful serenity has taken possession of my entire
																				soul, like these sweet mornings of spring which I enjoy with
																				my whole heart. Each design is a new, unique piece of art
																				birthed into this world, and while you have the opportunity
																				to be creative and make your own style choices. &quot;
																			</div>`;
                                                    }
                                                  })}</div>
																	<div class="${"accordion-item border-0"}"><div class="${"accordion-header"}" id="${"heading15"}"><a class="${"accordion-button p-2 shadow-none"}" id="${"collapse15"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
																					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Lewis Arnold</h6>
																						<small class="${"text-muted"}">Create new project buildng product - 8 month Ago</small></div></div></a></div>
																		${validate_component(Collapse, "Collapse").$$render($$result, {
                                                    toggler: "#collapse15",
                                                    class: "accordion-collapse",
                                                    isOpen: true
                                                  }, {}, {
                                                    default: () => {
                                                      return `<div class="${"accordion-body ms-2 ps-5"}"><p class="${"text-muted mb-2"}">Every team project can have a velzon. Use the velzon to
																					share information with your team to understand and
																					contribute to your project.
																				</p>
																				<div class="${"avatar-group"}">${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "Christi"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "Frank Hook"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": " Ruby"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
																							</div></div>`;
                                                        }
                                                      })}
																					${validate_component(Link, "Link").$$render($$result, {
                                                        href: "javascript: void(0);",
                                                        class: "avatar-group-item",
                                                        "data-bs-toggle": "tooltip",
                                                        "data-bs-trigger": "hover",
                                                        "data-bs-placement": "top",
                                                        title: "",
                                                        "data-bs-original-title": "more"
                                                      }, {}, {
                                                        default: () => {
                                                          return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+</div></div>`;
                                                        }
                                                      })}</div></div>`;
                                                    }
                                                  })}</div></div></div>`;
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

									${validate_component(Card, "Card").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 class="${"card-title"}">Projects</h5>
											<div class="${"d-flex justify-content-end gap-2 mb-2"}"><div class="${"slider-button-prev swiper-button-disabled"}" tabindex="${"-1"}" role="${"button"}" aria-label="${"Previous slide"}" aria-controls="${"swiper-wrapper-d9c950ed1019f4a72"}" aria-disabled="${"true"}"><div class="${"avatar-title fs-18 rounded px-1"}"><i class="${"ri-arrow-left-s-line"}"></i></div></div>
												<div class="${"slider-button-next"}" tabindex="${"0"}" role="${"button"}" aria-label="${"Next slide"}" aria-controls="${"swiper-wrapper-d9c950ed1019f4a72"}" aria-disabled="${"false"}"><div class="${"avatar-title fs-18 rounded px-1"}"><i class="${"ri-arrow-right-s-line"}"></i></div></div></div>
											${validate_component(Swiper_1, "Swiper").$$render($$result, {
                                    class: "project-swiper",
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                    autoplay: { delay: 3e3, disableOnInteraction: false },
                                    pagination: { clickable: true }
                                  }, {}, {
                                    default: () => {
                                      return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Card, "Card").$$render($$result, {
                                            class: "profile-project-card shadow-none profile-project-success mb-0"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                                default: () => {
                                                  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                                                    default: () => {
                                                      return `ABC Project Customization`;
                                                    }
                                                  })}</h5>
																	<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">4 hr Ago</span></p></div>
																<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>
															<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																		<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">A
																					</div></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}

												${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Card, "Card").$$render($$result, {
                                            class: "profile-project-card shadow-none profile-project-danger mb-0"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                                default: () => {
                                                  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                                                    default: () => {
                                                      return `Client - John`;
                                                    }
                                                  })}</h5>
																	<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">1 hr Ago</span></p></div>
																<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-success fs-10"}">Completed</div></div></div>
															<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																		<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">C
																					</div></div></div></div></div></div></div>`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}
												${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Card, "Card").$$render($$result, {
                                            class: "profile-project-card shadow-none profile-project-info mb-0"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                                default: () => {
                                                  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                                                    default: () => {
                                                      return `Brand logo Design`;
                                                    }
                                                  })}</h5>
																	<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">2 hr Ago</span></p></div>
																<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>
															<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																		<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}
												${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Card, "Card").$$render($$result, {
                                            class: "profile-project-card shadow-none profile-project-danger mb-0"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                                default: () => {
                                                  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                                                    default: () => {
                                                      return `Project update`;
                                                    }
                                                  })}</h5>
																	<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">4 hr Ago</span></p></div>
																<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-success fs-10"}">Completed</div></div></div>

															<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																		<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}

												${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Card, "Card").$$render($$result, {
                                            class: "profile-project-card shadow-none profile-project-warning mb-0"
                                          }, {}, {
                                            default: () => {
                                              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                                default: () => {
                                                  return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                                                    default: () => {
                                                      return `Chat App`;
                                                    }
                                                  })}</h5>
																	<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">1 hr Ago</span></p></div>
																<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>

															<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																		<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																			<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">A
																					</div></div></div></div></div></div></div>`;
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
                        }
                      })}`;
                    }
                  })}
						${validate_component(TabPane, "TabPane").$$render($$result, {
                    id: "activities",
                    tabId: 2,
                    class: "",
                    role: "tabpanel"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<h5 class="${"card-title mb-3"}">Activities</h5>
									<div class="${"acitivity-timeline"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
												<p class="${"text-muted mb-2"}">We talked about a project on linkedin.</p>
												<small class="${"mb-0 text-muted"}">Today</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
												</div></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
												<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i>
													Create new project Buildng product
												</p>
												<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "javascript: void(0);",
                                class: "avatar-group-item",
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "",
                                "data-bs-original-title": "Christi"
                              }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                }
                              })}
													${validate_component(Link, "Link").$$render($$result, {
                                href: "javascript: void(0);",
                                class: "avatar-group-item",
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "",
                                "data-bs-original-title": "Frank Hook"
                              }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                                }
                              })}
													${validate_component(Link, "Link").$$render($$result, {
                                href: "javascript: void(0);",
                                class: "avatar-group-item",
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "",
                                "data-bs-original-title": " Ruby"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R</div></div>`;
                                }
                              })}
													${validate_component(Link, "Link").$$render($$result, {
                                href: "javascript: void(0);",
                                class: "avatar-group-item",
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "",
                                "data-bs-original-title": "more"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+</div></div>`;
                                }
                              })}</div>
												<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
												<p class="${"text-muted mb-2"}">Adding a new event with attachments</p>
												${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"col-xxl-4"}"><div class="${"row border border-dashed gx-2 p-2 mb-2"}"><div class="${"col-4"}"><img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>

															<div class="${"col-4"}"><img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>

															<div class="${"col-4"}"><img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}"></div></div></div>`;
                                }
                              })}
												<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
												<p class="${"text-muted mb-2"}">added a new member to velzon dashboard</p>
												<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-primary text-primary"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
												<p class="${"text-muted mb-2"}">These customers can rest assured their order has been placed.
												</p>
												<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
												<p class="${"text-muted mb-2"}">They all have something to say beyond the words on the page. They can come
													across as casual or neutral, exotic or graphic.
												</p>
												<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
										<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-primary text-primary"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
												<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span> notification to submit the
													monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
                                href: null,
                                class: "link-primary text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `Reports Builder`;
                                }
                              })}</p>
												<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
										<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
												<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted a ticket.
												</p>
												<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}

						${validate_component(TabPane, "TabPane").$$render($$result, {
                    id: "projects",
                    tabId: 3,
                    class: "",
                    role: "tabpanel"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-primary"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Chat App Update`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">2 year Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">J
																			</div></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-success"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `ABC Project Customization`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">2 month Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-primary fs-10"}">Progress</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-primary"}">2+</div></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-info"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Client - Frank Hook`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">1 hr Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-info fs-10"}">New</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">M
																			</div></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-primary"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Velzon Project`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">11 hr Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-success fs-10"}">Completed</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-success"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Brand Logo Design`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">10 min Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-info fs-10"}">New</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">E
																			</div></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-info"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Chat App`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">8 hr Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
																			</div></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-warning"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Project Update`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">48 min Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-warning fs-10"}">Inprogress</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"card profile-project-card shadow-none profile-project-success"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                        default: () => {
                                          return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                            default: () => {
                                              return `Client - Jennifer`;
                                            }
                                          })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">30 min Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-primary fs-10"}">Process</div></div></div>

													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {
                                        class: "profile-project-card shadow-none mb-xxl-0   profile-project-info"
                                      }, {}, {
                                        default: () => {
                                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                            default: () => {
                                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                                default: () => {
                                                  return `Bsuiness Template - UI/UX design`;
                                                }
                                              })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">7 month Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-success fs-10"}">Completed</div></div></div>
													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-primary"}">2+</div></div></div></div></div></div></div>`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {
                                        class: "profile-project-card shadow-none mb-xxl-0  profile-project-success"
                                      }, {}, {
                                        default: () => {
                                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                            default: () => {
                                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                                default: () => {
                                                  return `Update Project`;
                                                }
                                              })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">1 month Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-info fs-10"}">New</div></div></div>
													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">A
																			</div></div></div></div></div></div></div>`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {
                                        class: "profile-project-card shadow-none mb-sm-0  profile-project-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                            default: () => {
                                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                                default: () => {
                                                  return `Bank Management System`;
                                                }
                                              })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">10 month Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-success fs-10"}">Completed</div></div></div>
													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div>
																	<div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-primary"}">2+</div></div></div></div></div></div></div>`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Card, "Card").$$render($$result, {
                                        class: "profile-project-card shadow-none mb-0  profile-project-primary"
                                      }, {}, {
                                        default: () => {
                                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                                            default: () => {
                                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1 text-muted overflow-hidden"}"><h5 class="${"fs-14 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-dark" }, {}, {
                                                default: () => {
                                                  return `PSD to HTML Convert`;
                                                }
                                              })}</h5>
															<p class="${"text-muted text-truncate mb-0"}">Last Update : <span class="${"fw-semibold text-dark"}">29 min Ago</span></p></div>
														<div class="${"flex-shrink-0 ms-2"}"><div class="${"badge badge-soft-info fs-10"}">New</div></div></div>
													<div class="${"d-flex mt-4"}"><div class="${"flex-grow-1"}"><div class="${"d-flex align-items-center gap-2"}"><div><h5 class="${"fs-12 text-muted mb-0"}">Members :</h5></div>
																<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></div></div></div></div></div>`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-4"}"><ul class="${"pagination pagination-separated justify-content-center mb-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `<i class="${"mdi mdi-chevron-left"}"></i>`;
                                        }
                                      })}</li>
													<li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}</li>
													<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}</li>
													<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}</li>
													<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}</li>
													<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}</li>
													<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
                                        default: () => {
                                          return `<i class="${"mdi mdi-chevron-right"}"></i>`;
                                        }
                                      })}</li></ul></div>`;
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

						${validate_component(TabPane, "TabPane").$$render($$result, {
                    id: "documents",
                    tabId: 4,
                    class: "",
                    role: "tabpanel"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center mb-4"}"><h5 class="${"card-title flex-grow-1 mb-0"}">Documents</h5>
										<div class="${"flex-shrink-0"}"><input class="${"form-control d-none"}" type="${"file"}" id="${"formFile"}">
											${validate_component(Label, "Label").$$render($$result, {
                                for: "formFile",
                                class: "btn btn-primary"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-upload-2-fill me-1 align-bottom"}"></i> Upload File`;
                                }
                              })}</div></div>
									${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div class="${"table-responsive"}"><table class="${"table table-borderless align-middle mb-0"}"><thead class="${"table-light"}"><tr><th scope="${"col"}">File Name</th>
															<th scope="${"col"}">Type</th>
															<th scope="${"col"}">Size</th>
															<th scope="${"col"}">Upload Date</th>
															<th scope="${"col"}">Action</th></tr></thead>
													<tbody><tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-primary text-primary rounded fs-20"}"><i class="${"ri-file-zip-fill"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Artboard-documents.zip</a></h6></div></div></td>
															<td>Zip File</td>
															<td>4.57 MB</td>
															<td>12 Dec 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink15"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink15"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download</a></li>
																		<li class="${"dropdown-divider"}"></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete</a></li></ul></div></td></tr>
														<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded fs-20"}"><i class="${"ri-file-pdf-fill"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Bank
																				Management System</a></h6></div></div></td>
															<td>PDF File</td>
															<td>8.89 MB</td>
															<td>24 Nov 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink3"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink3"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download</a></li>
																		<li class="${"dropdown-divider"}"></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete</a></li></ul></div></td></tr>
														<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-secondary text-secondary rounded fs-20"}"><i class="${"ri-video-line"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Tour-video.mp4</a></h6></div></div></td>
															<td>MP4 File</td>
															<td>14.62 MB</td>
															<td>19 Nov 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink4"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink4"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download</a></li>
																		<li class="${"dropdown-divider"}"></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete</a></li></ul></div></td></tr>
														<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-success text-success rounded fs-20"}"><i class="${"ri-file-excel-fill"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Account-statement.xsl</a></h6></div></div></td>
															<td>XSL File</td>
															<td>2.38 KB</td>
															<td>14 Nov 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink5"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink5"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download</a></li>
																		<li class="${"dropdown-divider"}"></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete</a></li></ul></div></td></tr>
														<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-info text-info rounded fs-20"}"><i class="${"ri-folder-line"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Project
																				Screenshots Collection</a></h6></div></div></td>
															<td>Floder File</td>
															<td>87.24 MB</td>
															<td>08 Nov 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink6"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink6"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle"}"></i>Download</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete</a></li></ul></div></td></tr>
														<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded fs-20"}"><i class="${"ri-image-2-fill"}"></i></div></div>
																	<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}"><a${add_attribute("href", null, 0)} class="${"link-dark"}">Velzon-logo.png</a></h6></div></div></td>
															<td>PNG File</td>
															<td>879 KB</td>
															<td>02 Nov 2021</td>
															<td><div class="${"dropdown"}"><a href="${"/dashboard"}" class="${"btn btn-light btn-icon"}" id="${"dropdownMenuLink7"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"true"}"><i class="${"ri-equalizer-fill"}"></i></a>
																	<ul class="${"dropdown-menu dropdown-menu-end"}" aria-labelledby="${"dropdownMenuLink7"}"><li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-eye-fill me-2 align-middle"}"></i>View</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-download-2-fill me-2 align-middle"}"></i>Download</a></li>
																		<li><a class="${"dropdown-item"}"${add_attribute("href", null, 0)}><i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete</a></li></ul></div></td></tr></tbody></table></div>
											<div class="${"text-center mt-3"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "text-info" }, {}, {
                                        default: () => {
                                          return `<i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i>
													Load more
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
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Simplepage as default };
