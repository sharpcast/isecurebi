import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { u as userdummyimg } from "../../../chunks/user-dummy-img-0cebca03.js";
import { l as logo_dark } from "../../../chunks/logo-dark-ec4d2828.js";
import "../../../chunks/index-bddc6f42.js";
const Forms_wizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progressbarvalue = 0;
  let activeTab = 1;
  let activeArrowTab = 4;
  let activeVerticalTab = 7;
  return `${$$result.head += `${$$result.title = `<title>Wizard | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Forms", pageTitle: "Wizard" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Progress Nav Steps</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, { class: "form-steps", action: "#" }, {}, {
                        default: () => {
                          return `<div class="${"text-center pt-3 pb-4 mb-1"}"><h5>Signup Your Account</h5></div>

							<div class="${"progress-nav mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                            value: progressbarvalue,
                            style: "height: 1px"
                          }, {}, {})}

								${validate_component(Nav, "Nav").$$render($$result, {
                            class: "nav-pills progress-bar-tab custom-nav",
                            role: "tablist"
                          }, {}, {
                            default: () => {
                              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "pills-gen-info-tab",
                                    class: "rounded-pill done d-flex justify-content-center align-items-center",
                                    active: activeTab == 1,
                                    tag: "button"
                                  }, {}, {
                                    default: () => {
                                      return `1
										`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "pills-gen-info-tab",
                                    class: "rounded-pill d-flex justify-content-center align-items-center",
                                    active: activeTab == 2,
                                    tag: "button"
                                  }, {}, {
                                    default: () => {
                                      return `2
										`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "pills-gen-info-tab",
                                    class: "rounded-pill d-flex justify-content-center align-items-center",
                                    active: activeTab == 3,
                                    tag: "button"
                                  }, {}, {
                                    default: () => {
                                      return `3
										`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>

							${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TabPane, "TabPane").$$render($$result, { class: "active" }, {}, {
                                default: () => {
                                  return `<div><div class="${"mb-4"}"><div><h5 class="${"mb-1"}">General Information</h5>
												<p class="${"text-muted"}">Fill all Information as below</p></div></div>
										${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-label",
                                            for: "gen-info-email-input"
                                          }, {}, {
                                            default: () => {
                                              return `Email`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "gen-info-email-input",
                                            placeholder: "Enter Email"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
											${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-label",
                                            for: "gen-info-username-input"
                                          }, {}, {
                                            default: () => {
                                              return `User Name
													`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "gen-info-username-input",
                                            placeholder: "Enter User Name"
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}
										<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-label",
                                    for: "gen-info-password-input"
                                  }, {}, {
                                    default: () => {
                                      return `Password`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "password",
                                    class: "form-control",
                                    id: "gen-info-password-input",
                                    placeholder: "Enter Password"
                                  }, {}, {})}</div></div>
									<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
											Go to more info
										</button></div>`;
                                }
                              })}

								${validate_component(TabPane, "TabPane").$$render($$result, { class: "" }, {}, {
                                default: () => {
                                  return `<div><div class="${"text-center"}"><div class="${"profile-user position-relative d-inline-block mx-auto mb-2"}"><img${add_attribute("src", userdummyimg, 0)} class="${"rounded-circle avatar-lg img-thumbnail user-profile-image"}" alt="${""}">
												<div class="${"avatar-xs p-0 rounded-circle profile-photo-edit"}">${validate_component(Input, "Input").$$render($$result, {
                                    id: "profile-img-file-input",
                                    type: "file",
                                    class: "profile-img-file-input",
                                    accept: "image/png, image/jpeg"
                                  }, {}, {})}
													${validate_component(Label, "Label").$$render($$result, {
                                    for: "profile-img-file-input",
                                    class: "profile-photo-edit avatar-xs"
                                  }, {}, {
                                    default: () => {
                                      return `<span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-camera-fill"}"></i></span>`;
                                    }
                                  })}</div></div>
											<h5 class="${"fs-14"}">Add Image</h5></div>
										<div>${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-label",
                                    for: "gen-info-description-input"
                                  }, {}, {
                                    default: () => {
                                      return `Description
											`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "textarea",
                                    class: "form-control",
                                    placeholder: "Enter Description",
                                    id: "gen-info-description-input",
                                    rows: "2"
                                  }, {}, {})}</div></div>
									<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-link text-decoration-none btn-label previestab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>${escape(" ")}
											Back to General
										</button>
										<button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
											Submit
										</button></div>`;
                                }
                              })}

								${validate_component(TabPane, "TabPane").$$render($$result, { class: "" }, {}, {
                                default: () => {
                                  return `<div><div class="${"text-center"}"><div class="${"mb-4"}"><lord-icon src="${"//cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c,secondary:#405189"}" style="${"width:120px;height:120px"}"></lord-icon></div>
											<h5>Well Done !</h5>
											<p class="${"text-muted"}">You have Successfully Signed Up</p></div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Arrow Nav Steps</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "form-steps" }, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div class="${"text-center pt-3 pb-4 mb-1"}"><img${add_attribute("src", logo_dark, 0)} alt="${""}" height="${"17"}"></div>
							<div class="${"step-arrow-nav mb-4"}">${validate_component(Nav, "Nav").$$render($$result, {
                            class: "nav-pills custom-nav nav-justified",
                            role: "tablist"
                          }, {}, {
                            default: () => {
                              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "steparrow-gen-info-tab",
                                    class: "done",
                                    active: activeArrowTab == 4
                                  }, {}, {
                                    default: () => {
                                      return `General
										`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "steparrow-gen-info-tab",
                                    class: "",
                                    active: activeArrowTab == 5
                                  }, {}, {
                                    default: () => {
                                      return `Description
										`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                    href: "#!",
                                    id: "steparrow-gen-info-tab",
                                    class: "",
                                    active: activeArrowTab == 6
                                  }, {}, {
                                    default: () => {
                                      return `Finish
										`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>

							${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "steparrow-gen-info",
                                class: "active"
                              }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-label",
                                            for: "steparrow-gen-info-email-input"
                                          }, {}, {
                                            default: () => {
                                              return `Email
													`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "steparrow-gen-info-email-input",
                                            placeholder: "Enter Email"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
											${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            class: "form-label",
                                            for: "steparrow-gen-info-username-input"
                                          }, {}, {
                                            default: () => {
                                              return `User Name
													`;
                                            }
                                          })}
													${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "steparrow-gen-info-username-input",
                                            placeholder: "Enter User Name"
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}
										<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-label",
                                    for: "steparrow-gen-info-password-input"
                                  }, {}, {
                                    default: () => {
                                      return `Password
											`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "password",
                                    class: "form-control",
                                    id: "steparrow-gen-info-password-input",
                                    placeholder: "Enter Password"
                                  }, {}, {})}</div>
										<div>${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-label",
                                    for: "steparrow-gen-info-confirm-password-input"
                                  }, {}, {
                                    default: () => {
                                      return `Confirm Password
											`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "password",
                                    class: "form-control",
                                    id: "steparrow-gen-info-confirm-password-input",
                                    placeholder: "Enter Confirm Password"
                                  }, {}, {})}</div></div>
									<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
											Go to more info
										</button></div>`;
                                }
                              })}

								${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "steparrow-description-info",
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `<div><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "formFile", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Upload Image`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control",
                                    type: "file",
                                    id: "formFile"
                                  }, {}, {})}</div>
										<div>${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-label",
                                    for: "des-info-description-input"
                                  }, {}, {
                                    default: () => {
                                      return `Description
											`;
                                    }
                                  })}
											<textarea class="${"form-control"}" placeholder="${"Enter Description"}" id="${"des-info-description-input"}" rows="${"3"}"></textarea></div></div>
									<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-light btn-label previestab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>${escape(" ")}
											Back to General
										</button>
										<button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
											Submit
										</button></div>`;
                                }
                              })}

								${validate_component(TabPane, "TabPane").$$render($$result, {
                                id: "pills-experience",
                                class: ""
                              }, {}, {
                                default: () => {
                                  return `<div class="${"text-center"}"><div class="${"avatar-md mt-5 mb-4 mx-auto"}"><div class="${"avatar-title bg-light text-success display-4 rounded-circle"}"><i class="${"ri-checkbox-circle-fill"}"></i></div></div>
										<h5>Well Done !</h5>
										<p class="${"text-muted"}">You have Successfully Signed Up</p></div>`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Vertical nav Steps</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "form-steps" }, {}, {
                    default: () => {
                      return `<form class="${"vertical-navs-step"}">${validate_component(Row, "Row").$$render($$result, { class: "gy-5" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Nav, "Nav").$$render($$result, {
                                class: "flex-column custom-nav nav-pills"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        href: "#!",
                                        class: "",
                                        active: activeVerticalTab == 7
                                      }, {}, {
                                        default: () => {
                                          return `<span class="${"step-title me-2"}"><i class="${"ri-close-circle-fill step-icon me-2"}"></i>
													Step 1
												</span>
												Billing Info
											`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        href: "#!",
                                        class: "",
                                        active: activeVerticalTab == 8
                                      }, {}, {
                                        default: () => {
                                          return `<span class="${"step-title me-2"}"><i class="${"ri-close-circle-fill step-icon me-2"}"></i>
													Step 2
												</span>
												Address
											`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        href: "#!",
                                        class: "",
                                        active: activeVerticalTab == 9
                                      }, {}, {
                                        default: () => {
                                          return `<span class="${"step-title me-2"}"><i class="${"ri-close-circle-fill step-icon me-2"}"></i>
													Step 3
												</span>
												Payment
											`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        href: "#!",
                                        class: "",
                                        active: activeVerticalTab == 10
                                      }, {}, {
                                        default: () => {
                                          return `<span class="${"step-title me-2"}"><i class="${"ri-close-circle-fill step-icon me-2"}"></i>
													Step 4
												</span>
												Finish
											`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"px-lg-4"}">${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "active"
                                  }, {}, {
                                    default: () => {
                                      return `<div><h5>Billing Info</h5>
													<p class="${"text-muted"}">Fill all information below</p></div>

												<div>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                        default: () => {
                                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "firstName", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `First name`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "firstName",
                                                placeholder: "Enter First Name",
                                                defaultValue: ""
                                              }, {}, {})}`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "lastName", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Last name`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "lastName",
                                                placeholder: "Enter Last Name",
                                                defaultValue: ""
                                              }, {}, {})}`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "username", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Username`;
                                                }
                                              })}
															<div class="${"input-group"}"><span class="${"input-group-text"}">@ </span>
																${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "username",
                                                placeholder: "Username"
                                              }, {}, {})}</div>`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "email", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Email${escape(" ")}
																<span class="${"text-muted"}">(Optional) </span>`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "email",
                                                class: "form-control",
                                                id: "email",
                                                placeholder: "Enter Email"
                                              }, {}, {})}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>

												<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
														Go to Shipping
													</button></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: ""
                                  }, {}, {
                                    default: () => {
                                      return `<div><h5>Shipping Address</h5>
													<p class="${"text-muted"}">Fill all information below</p></div>

												<div>${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                        default: () => {
                                          return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "address", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Address`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "address",
                                                placeholder: "1234 Main St"
                                              }, {}, {})}`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "address2", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Address 2${escape(" ")}
																<span class="${"text-muted"}">(Optional) </span>`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "address2",
                                                placeholder: "Apartment or suite"
                                              }, {}, {})}`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { md: 5 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "country", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Country`;
                                                }
                                              })}
															<select class="${"form-select"}" id="${"country"}"><option defaultvalue="${""}" value="${"Choose..."}">Choose...</option><option value="${"United States"}">United States</option></select>`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "state", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `State`;
                                                }
                                              })}
															<select class="${"form-select"}" id="${"state"}"><option defaultvalue="${""}" value="${"Choose..."}">Choose...</option><option value="${"California"}">California</option></select>`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "zip", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Zip`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "zip",
                                                placeholder: ""
                                              }, {}, {})}`;
                                            }
                                          })}`;
                                        }
                                      })}

													<hr class="${"my-4 text-muted"}">

													<div class="${"form-check mb-2"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"same-address"}">
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "form-check-label",
                                        for: "same-address"
                                      }, {}, {
                                        default: () => {
                                          return `Shipping address is the same as my billing address
														`;
                                        }
                                      })}</div>

													<div class="${"form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"save-info"}">
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "form-check-label",
                                        for: "save-info"
                                      }, {}, {
                                        default: () => {
                                          return `Save this information for next time
														`;
                                        }
                                      })}</div></div>
												<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-light btn-label previestab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>${escape(" ")}
														Back to Billing Info
													</button>
													<button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
														Go to Payment
													</button></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: ""
                                  }, {}, {
                                    default: () => {
                                      return `<div><h5>Payment</h5>
													<p class="${"text-muted"}">Fill all information below</p></div>

												<div><div class="${"my-3"}"><div class="${"form-check form-check-inline"}"><input id="${"credit"}" name="${"paymentMethod"}" type="${"radio"}" class="${"form-check-input"}" defaultchecked required>
															${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "credit" }, {}, {
                                        default: () => {
                                          return `Credit card`;
                                        }
                                      })}</div>
														<div class="${"form-check form-check-inline"}"><input id="${"debit"}" name="${"paymentMethod"}" type="${"radio"}" class="${"form-check-input"}" required>
															${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "debit" }, {}, {
                                        default: () => {
                                          return `Debit card`;
                                        }
                                      })}</div>
														<div class="${"form-check form-check-inline"}"><input id="${"paypal"}" name="${"paymentMethod"}" type="${"radio"}" class="${"form-check-input"}" required>
															${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "paypal" }, {}, {
                                        default: () => {
                                          return `PayPal`;
                                        }
                                      })}</div></div>

													${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
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
                                                placeholder: "",
                                                required: true
                                              }, {}, {})}
															<small class="${"text-muted"}">Full name as displayed on card </small>
															<div class="${"invalid-feedback"}">Name on card is required</div>`;
                                            }
                                          })}

														${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                            default: () => {
                                              return `${validate_component(Label, "Label").$$render($$result, { for: "cc-number", class: "form-label" }, {}, {
                                                default: () => {
                                                  return `Credit card number
															`;
                                                }
                                              })}
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "cc-number",
                                                placeholder: "",
                                                required: true
                                              }, {}, {})}
															<div class="${"invalid-feedback"}">Credit card number is required</div>`;
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
                                                placeholder: "",
                                                required: true
                                              }, {}, {})}
															<div class="${"invalid-feedback"}">Expiration date required</div>`;
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
                                                placeholder: "",
                                                required: true
                                              }, {}, {})}
															<div class="${"invalid-feedback"}">Security code required</div>`;
                                            }
                                          })}`;
                                        }
                                      })}</div>

												<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-light btn-label previestab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>${escape(" ")}
														Back to Shipping Info
													</button>
													<button type="${"button"}" class="${"btn btn-success btn-label right ms-auto nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>${escape(" ")}
														Order Complete
													</button></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: ""
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"text-center pt-4 pb-2"}"><div class="${"mb-4"}"><lord-icon src="${"//cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c,secondary:#405189"}" style="${"width:120px;height:120px"}"></lord-icon></div>
													<h5>Your Order is Completed !</h5>
													<p class="${"text-muted"}">You Will receive an order confirmation email with details of your order.
													</p></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex justify-content-between align-items-center mb-3"}"><h5 class="${"fs-14 text-primary mb-0"}"><i class="${"ri-shopping-cart-fill align-middle me-2"}"></i>${escape(" ")}
											Your cart
										</h5>
										<span class="${"badge bg-danger rounded-pill"}">3 </span></div>
									<ul class="${"list-group mb-3"}"><li class="${"list-group-item d-flex justify-content-between lh-sm"}"><div><h6 class="${"my-0"}">Product name</h6>
												<small class="${"text-muted"}">Brief description </small></div>
											<span class="${"text-muted"}">$12</span></li>
										<li class="${"list-group-item d-flex justify-content-between lh-sm"}"><div><h6 class="${"my-0"}">Second product</h6>
												<small class="${"text-muted"}">Brief description </small></div>
											<span class="${"text-muted"}">$8</span></li>
										<li class="${"list-group-item d-flex justify-content-between lh-sm"}"><div><h6 class="${"my-0"}">Third item</h6>
												<small class="${"text-muted"}">Brief description </small></div>
											<span class="${"text-muted"}">$5</span></li>
										<li class="${"list-group-item d-flex justify-content-between bg-light"}"><div class="${"text-success"}"><h6 class="${"my-0"}">Discount code</h6>
												<small>\u2212$5 Discount</small></div>
											<span class="${"text-success"}">\u2212$5</span></li>
										<li class="${"list-group-item d-flex justify-content-between"}"><span>Total (USD)</span>
											<strong>$20</strong></li></ul>`;
                            }
                          })}`;
                        }
                      })}</form>`;
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
export { Forms_wizard as default };
