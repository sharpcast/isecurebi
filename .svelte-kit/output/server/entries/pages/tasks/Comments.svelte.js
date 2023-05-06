import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import { i as img4 } from "../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../chunks/img-5-1aac893f.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<div>${validate_component(Nav, "Nav").$$render($$result, {
            class: "nav-tabs-custom rounded card-header-tabs border-bottom-0"
          }, {}, {
            default: () => {
              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 1 }, {}, {
                    default: () => {
                      return `Comments (5)`;
                    }
                  })}`;
                }
              })}
				${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 2 }, {}, {
                    default: () => {
                      return `Attachments File (4)
					`;
                    }
                  })}`;
                }
              })}
				${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 3 }, {}, {
                    default: () => {
                      return `Time Entries (9 hrs 13 min)
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
          return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 1,
                class: "active"
              }, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-4"}">Comments</h5>
				<div data-simplebar style="${"height: 508px;"}" class="${"px-3 mx-n3 mb-2"}"><div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                    default: () => {
                      return `Joseph Parker`;
                    }
                  })}
								<small class="${"text-muted"}">20 Dec 2021 - 05:47AM</small></h5>
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
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                    default: () => {
                      return `Tonya Noble`;
                    }
                  })}
										<small class="${"text-muted"}">22 Dec 2021 - 02:32PM</small></h5>
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
					<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                    default: () => {
                      return `Thomas Taylor`;
                    }
                  })}
								<small class="${"text-muted"}">24 Dec 2021 - 05:20PM</small></h5>
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
						<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                    default: () => {
                      return `Tonya Noble`;
                    }
                  })}
								<small class="${"text-muted"}">26 min ago</small></h5>
							<p class="${"text-muted"}">Your ${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `Online Order Support`;
                    }
                  })} provides
								you with the most current status of your order. To help manage your order refer to the
								\u201CAction Menu\u201D to initiate return, contact Customer Support and more.
							</p>
							<div class="${"row g-2 mb-3"}"><div class="${"col-lg-1 col-sm-2 col-6"}"><img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}"></div>
								<div class="${"col-lg-1 col-sm-2 col-6"}"><img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid rounded"}"></div></div>
							${validate_component(Link, "Link").$$render($$result, {
                    href: null,
                    class: "badge text-muted bg-light"
                  }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                    }
                  })}
							<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/profile/settings/pages-profile-settings"
                  }, {}, {
                    default: () => {
                      return `Nancy Martino`;
                    }
                  })}
										<small class="${"text-muted"}">8 sec ago</small></h5>
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
				<form class="${"mt-4"}"><div class="${"row g-3"}"><div class="${"col-lg-12"}">${validate_component(Label, "Label").$$render($$result, {
                    for: "exampleFormControlTextarea1",
                    class: "form-label"
                  }, {}, {
                    default: () => {
                      return `Leave a Comments`;
                    }
                  })}
							<textarea class="${"form-control bg-light border-light"}" id="${"exampleFormControlTextarea1"}" rows="${"3"}" placeholder="${"Enter comments"}"></textarea></div>
						
						<div class="${"col-12 text-end"}"><button type="${"button"}" class="${"btn btn-ghost-secondary btn-icon waves-effect me-1"}"><i class="${"ri-attachment-line fs-16"}"></i></button>
							${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-success" }, {}, {
                    default: () => {
                      return `Post Comments`;
                    }
                  })}</div></div>
					</form>`;
                }
              })}
			${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 2,
                class: ""
              }, {}, {
                default: () => {
                  return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless align-middle mb-0"}"><thead class="${"table-light text-muted"}"><tr><th scope="${"col"}">File Name</th>
								<th scope="${"col"}">Type</th>
								<th scope="${"col"}">Size</th>
								<th scope="${"col"}">Upload Date</th>
								<th scope="${"col"}">Action</th></tr></thead>
						<tbody><tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-primary text-primary rounded fs-20"}"><i class="${"ri-file-zip-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                    default: () => {
                      return `App pages.zip`;
                    }
                  })}</h6></div></div></td>
								<td>Zip File</td>
								<td>2.22 MB</td>
								<td>21 Dec, 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        href: null,
                        class: "btn btn-light btn-icon",
                        id: "dropdownMenuLink1"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-equalizer-fill"}"></i>`;
                        }
                      })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                        class: "dropdown-menu-end",
                        style: "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 23px);"
                      }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download`;
                            }
                          })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded fs-20"}"><i class="${"ri-file-pdf-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                    default: () => {
                      return `Velzon admin.ppt`;
                    }
                  })}</h6></div></div></td>
								<td>PPT File</td>
								<td>2.24 MB</td>
								<td>25 Dec, 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        href: null,
                        class: "btn btn-light btn-icon",
                        id: "dropdownMenuLink2"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-equalizer-fill"}"></i>`;
                        }
                      })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                        class: "dropdown-menu-end",
                        "aria-labelledby": "dropdownMenuLink2",
                        "data-popper-placement": "bottom-end",
                        style: "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 23px);"
                      }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-eye-fill me-2 align-middle text-muted"}"></i>View`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-fill me-2 align-middle text-muted"}"></i>Download`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-5-line me-2 align-middle text-muted"}"></i>Delete`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-info text-info rounded fs-20"}"><i class="${"ri-folder-line"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                    default: () => {
                      return `Images.zip`;
                    }
                  })}</h6></div></div></td>
								<td>ZIP File</td>
								<td>1.02 MB</td>
								<td>28 Dec, 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        href: null,
                        class: "btn btn-light btn-icon",
                        id: "dropdownMenuLink3"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-equalizer-fill"}"></i>`;
                        }
                      })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                        class: "dropdown-menu-end",
                        "aria-labelledby": "dropdownMenuLink3",
                        "data-popper-placement": "bottom-end",
                        style: "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 23px);"
                      }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-eye-fill me-2 align-middle"}"></i>View`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-fill me-2 align-middle"}"></i>Download`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded fs-20"}"><i class="${"ri-image-2-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h6 class="${"fs-15 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                    default: () => {
                      return `Bg-pattern.png`;
                    }
                  })}</h6></div></div></td>
								<td>PNG File</td>
								<td>879 KB</td>
								<td>02 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        href: null,
                        class: "btn btn-light btn-icon",
                        id: "dropdownMenuLink4"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-equalizer-fill"}"></i>`;
                        }
                      })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                        class: "dropdown-menu-end",
                        "aria-labelledby": "dropdownMenuLink4",
                        "data-popper-placement": "bottom-end",
                        style: "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 23px);"
                      }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-eye-fill me-2 align-middle"}"></i>View`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-fill me-2 align-middle"}"></i>Download`;
                            }
                          })}

											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</td></tr></tbody></table>
					</div>`;
                }
              })}
			${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 3,
                class: ""
              }, {}, {
                default: () => {
                  return `<h6 class="${"card-title mb-4 pb-2"}">Time Entries</h6>
				<div class="${"table-responsive table-card"}"><table class="${"table align-middle mb-0"}"><thead class="${"table-light text-muted"}"><tr><th scope="${"col"}">Member</th>
								<th scope="${"col"}">Date</th>
								<th scope="${"col"}">Duration</th>
								<th scope="${"col"}">Timer Idle</th>
								<th scope="${"col"}">Tasks Title</th></tr></thead>
						<tbody><tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
										<div class="${"flex-grow-1 ms-2"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/profile/simple/simplepage",
                    class: "fw-medium"
                  }, {}, {
                    default: () => {
                      return `Thomas Taylor`;
                    }
                  })}</div></div></th>
								<td>02 Jan, 2022</td>
								<td>3 hrs 12 min</td>
								<td>05 min</td>
								<td>Apps Pages</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
										<div class="${"flex-grow-1 ms-2"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/profile/simple/simplepage",
                    class: "fw-medium"
                  }, {}, {
                    default: () => {
                      return `Tonya Noble`;
                    }
                  })}</div></div></td>
								<td>28 Dec, 2021</td>
								<td>1 hrs 35 min</td>
								<td>-</td>
								<td>Profile Page Design</td></tr>
							<tr><th scope="${"row"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
										<div class="${"flex-grow-1 ms-2"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/profile/simple/simplepage",
                    class: "fw-medium"
                  }, {}, {
                    default: () => {
                      return `Tonya Noble`;
                    }
                  })}</div></div></th>
								<td>27 Dec, 2021</td>
								<td>4 hrs 26 min</td>
								<td>03 min</td>
								<td>Ecommerce Dashboard</td></tr></tbody></table>
					</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Comments as default };
