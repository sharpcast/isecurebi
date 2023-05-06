import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../../chunks/Label-1c7919d2.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../../chunks/TabPane-b01382c8.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { F as Flatpickr } from "../../../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../../../chunks/Select-6990402e.js";
import { p as profilebg } from "../../../../../chunks/profile-bg-1b981fff.js";
import { a as avatar1 } from "../../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../../chunks/index-bddc6f42.js";
const Pages_profile_settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  const skillOptions = [
    {
      value: "Select your Skill",
      label: "Select your Skill"
    },
    { value: "CSS", label: "CSS" },
    { value: "HTML", label: "HTML" },
    { value: "PYTHON", label: "PYTHON" },
    { value: "JAVA", label: "JAVA" },
    { value: "ASP.NET", label: "ASP.NET" }
  ];
  const selectYears = [
    {
      value: "Select years",
      label: "Select years"
    },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2007", label: "2007" },
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Profile Settings | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"position-relative mx-n4 mt-n4"}"><div class="${"profile-wid-bg profile-setting-img"}"><img${add_attribute("src", profilebg, 0)} class="${"profile-wid-img"}" alt="${""}">
				<div class="${"overlay-content"}"><div class="${"text-end p-3"}"><div class="${"p-0 ms-auto rounded-circle profile-photo-edit"}">${validate_component(Input, "Input").$$render($$result, {
        id: "profile-foreground-img-file-input",
        type: "file",
        class: "profile-foreground-img-file-input"
      }, {}, {})}
							${validate_component(Label, "Label").$$render($$result, {
        for: "profile-foreground-img-file-input",
        class: "profile-photo-edit btn btn-light"
      }, {}, {
        default: () => {
          return `<i class="${"ri-image-edit-line align-bottom me-1"}"></i> Change Cover
							`;
        }
      })}</div></div></div></div></div>
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "mt-n5" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><div class="${"profile-user position-relative d-inline-block mx-auto mb-4"}"><img${add_attribute("src", avatar1, 0)} class="${"rounded-circle avatar-xl img-thumbnail user-profile-image"}" alt="${"user-profile"}">
								<div class="${"avatar-xs p-0 rounded-circle profile-photo-edit"}">${validate_component(Input, "Input").$$render($$result, {
                        id: "profile-img-file-input",
                        type: "file",
                        class: "profile-img-file-input"
                      }, {}, {})}
									${validate_component(Label, "Label").$$render($$result, {
                        for: "profile-img-file-input",
                        class: "profile-photo-edit avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-camera-fill"}"></i></span>`;
                        }
                      })}</div></div>
							<h5 class="${"fs-16 mb-1"}">Anna Adame</h5>
							<p class="${"text-muted mb-0"}">Lead Designer / Developer</p></div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center mb-5"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Complete Your Profile</h5></div>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: null,
                        class: "badge bg-light text-primary fs-12"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-edit-box-line align-bottom me-1"}"></i> Edit`;
                        }
                      })}</div></div>
						<div class="${"progress animated-progress custom-progress progress-label"}"><div class="${"progress-bar bg-info"}" role="${"progressbar"}" style="${"width: 30%"}" aria-valuenow="${"30"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"><div class="${"label"}">30%</div></div></div>`;
                    }
                  })}`;
                }
              })}
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"card-title mb-0"}">Portfolio</h5></div>
							<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: null,
                        class: "badge bg-light text-primary fs-12"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-fill align-bottom me-1"}"></i> Add`;
                        }
                      })}</div></div>
						<div class="${"mb-3 d-flex"}"><div class="${"avatar-xs d-block flex-shrink-0 me-3"}"><span class="${"avatar-title rounded-circle fs-16 bg-dark text-light"}"><i class="${"ri-github-fill"}"></i></span></div>
							${validate_component(Input, "Input").$$render($$result, {
                        type: "email",
                        class: "form-control",
                        id: "gitUsername",
                        placeholder: "Username",
                        value: "@daveadame"
                      }, {}, {})}</div>
						<div class="${"mb-3 d-flex"}"><div class="${"avatar-xs d-block flex-shrink-0 me-3"}"><span class="${"avatar-title rounded-circle fs-16 bg-primary"}"><i class="${"ri-global-fill"}"></i></span></div>
							${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "websiteInput",
                        placeholder: "www.example.com",
                        value: "www.velzon.com"
                      }, {}, {})}</div>
						<div class="${"mb-3 d-flex"}"><div class="${"avatar-xs d-block flex-shrink-0 me-3"}"><span class="${"avatar-title rounded-circle fs-16 bg-success"}"><i class="${"ri-dribbble-fill"}"></i></span></div>
							${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "dribbleName",
                        placeholder: "Username",
                        value: "@dave_adame"
                      }, {}, {})}</div>
						<div class="${"d-flex"}"><div class="${"avatar-xs d-block flex-shrink-0 me-3"}"><span class="${"avatar-title rounded-circle fs-16 bg-danger"}"><i class="${"ri-pinterest-fill"}"></i></span></div>
							${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "pinterestName",
                        placeholder: "Username",
                        value: "Advance Dave"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "mt-xxl-n5" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Nav, "Nav").$$render($$result, {
                        class: "nav-tabs-custom rounded card-header-tabs border-bottom-0",
                        role: "tablist"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fs-14", active: activeTab == 1 }, {}, {
                                default: () => {
                                  return `Personal Details
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, { href: null, active: activeTab == 2 }, {}, {
                                default: () => {
                                  return `Change Password
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, { href: null, active: activeTab == 3 }, {}, {
                                default: () => {
                                  return `Experience
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, { href: null, active: activeTab == 4 }, {}, {
                                default: () => {
                                  return `Privacy Policy
								`;
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
                      return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 1,
                            class: "active"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "firstnameInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `First Name`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "firstnameInput",
                                            placeholder: "Enter your firstname",
                                            value: "Dave"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "lastnameInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Last Name`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "lastnameInput",
                                            placeholder: "Enter your lastname",
                                            value: "Adame"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "phonenumberInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Phone Number`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "phonenumberInput",
                                            placeholder: "Enter your phone number",
                                            value: "+(1) 987 6543"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "emailInput", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Email Address`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "email",
                                            class: "form-control",
                                            id: "emailInput",
                                            placeholder: "Enter your email",
                                            value: "daveadame@velzon.com"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "JoiningdatInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Joining Date`;
                                            }
                                          })}
												${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                            class: "form-control",
                                            options: { dateFormat: "d M, Y" }
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "skillsInput", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Skills`;
                                            }
                                          })}

												${validate_component(Select, "Select").$$render($$result, {
                                            class: "form-select mb-3",
                                            placeholder: "Select your Skill",
                                            items: skillOptions
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "designationInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Designation`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "designationInput",
                                            placeholder: "Designation",
                                            value: "Lead Designer / Developer"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "websiteInput1",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Website`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "websiteInput1",
                                            placeholder: "www.example.com",
                                            value: "www.velzon.com"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "cityInput", class: "form-label" }, {}, {
                                            default: () => {
                                              return `City`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "cityInput",
                                            placeholder: "City",
                                            value: "California"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "countryInput", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Country`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            id: "countryInput",
                                            placeholder: "Country",
                                            value: "United States"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "zipcodeInput", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Zip Code`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            class: "form-control",
                                            minLength: "5",
                                            maxLength: "6",
                                            id: "zipcodeInput",
                                            placeholder: "Enter zipcode",
                                            value: "90011"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3 pb-2"}">${validate_component(Label, "Label").$$render($$result, {
                                            for: "exampleFormControlTextarea",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Description`;
                                            }
                                          })}
												<textarea class="${"form-control"}" id="${"exampleFormControlTextarea"}" rows="${"3"}">${"Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."}</textarea></div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"hstack gap-2 justify-content-end"}"><button type="${"button"}" class="${"btn btn-primary"}">Updates</button>
												<button type="${"button"}" class="${"btn btn-soft-info"}">Cancel</button></div>`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 2,
                            class: ""
                          }, {}, {
                            default: () => {
                              return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "oldpasswordInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Old Password*`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "password",
                                            class: "form-control",
                                            id: "oldpasswordInput",
                                            placeholder: "Enter current password"
                                          }, {}, {})}</div>`;
                                        }
                                      })}

										${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "newpasswordInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `New Password*`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "password",
                                            class: "form-control",
                                            id: "newpasswordInput",
                                            placeholder: "Enter new password"
                                          }, {}, {})}</div>`;
                                        }
                                      })}

										${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "confirmpasswordInput",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Confirm Password*`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "password",
                                            class: "form-control",
                                            id: "confirmpasswordInput",
                                            placeholder: "Confirm password"
                                          }, {}, {})}</div>`;
                                        }
                                      })}

										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                                            href: null,
                                            class: "link-primary text-decoration-underline"
                                          }, {}, {
                                            default: () => {
                                              return `Forgot Password ?`;
                                            }
                                          })}</div>`;
                                        }
                                      })}

										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div class="${"text-end"}"><button type="${"button"}" class="${"btn btn-info"}">Change Password</button></div>`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}
								<div class="${"mt-4 mb-3 border-bottom pb-2"}"><div class="${"float-end"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "link-primary" }, {}, {
                                default: () => {
                                  return `All Logout`;
                                }
                              })}</div>
									<h5 class="${"card-title"}">Login History</h5></div>
								<div class="${"d-flex align-items-center mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded-3 fs-18"}"><i class="${"ri-smartphone-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6>iPhone 12 Pro</h6>
										<p class="${"text-muted mb-0"}">Los Angeles, United States - March 16 at 2:47PM</p></div>
									<div>${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                default: () => {
                                  return `Logout`;
                                }
                              })}</div></div>
								<div class="${"d-flex align-items-center mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded-3 fs-18"}"><i class="${"ri-tablet-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6>Apple iPad Pro</h6>
										<p class="${"text-muted mb-0"}">Washington, United States - November 06 at 10:43AM
										</p></div>
									<div>${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                default: () => {
                                  return `Logout`;
                                }
                              })}</div></div>
								<div class="${"d-flex align-items-center mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded-3 fs-18"}"><i class="${"ri-smartphone-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6>Galaxy S21 Ultra 5G</h6>
										<p class="${"text-muted mb-0"}">Conneticut, United States - June 12 at 3:24PM</p></div>
									<div>${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                default: () => {
                                  return `Logout`;
                                }
                              })}</div></div>
								<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light text-primary rounded-3 fs-18"}"><i class="${"ri-macbook-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6>Dell Inspiron 14</h6>
										<p class="${"text-muted mb-0"}">Phoenix, United States - July 26 at 8:10AM</p></div>
									<div>${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                                default: () => {
                                  return `Logout`;
                                }
                              })}</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 3,
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<form><div id="${"newlink"}"><div id="${"1"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "jobTitle", class: "form-label" }, {}, {
                                        default: () => {
                                          return `Job Title`;
                                        }
                                      })}
														${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        id: "jobTitle",
                                        placeholder: "Job title",
                                        value: "Lead Designer / Developer"
                                      }, {}, {})}</div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "companyName", class: "form-label" }, {}, {
                                        default: () => {
                                          return `Company Name`;
                                        }
                                      })}
														${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        id: "companyName",
                                        placeholder: "Company name",
                                        value: "Themesbrand"
                                      }, {}, {})}</div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                        for: "experienceYear",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Experience Years`;
                                        }
                                      })}
														${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
                                            default: () => {
                                              return `${validate_component(Select, "Select").$$render($$result, {
                                                class: "form-control",
                                                name: "experienceYear",
                                                id: "experienceYear",
                                                placeholder: "Select years",
                                                items: selectYears
                                              }, {}, {})}`;
                                            }
                                          })}

															<div class="${"col-auto align-self-center"}">to</div>

															${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
                                            default: () => {
                                              return `${validate_component(Select, "Select").$$render($$result, {
                                                class: "form-control",
                                                items: selectYears,
                                                name: "choices-single-default2"
                                              }, {}, {})}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

												${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                        for: "jobDescription",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Job Description`;
                                        }
                                      })}</div>`;
                                    }
                                  })}

												<div class="${"hstack gap-2 justify-content-end"}">${validate_component(Link, "Link").$$render($$result, { class: "btn btn-info", href: "#" }, {}, {
                                    default: () => {
                                      return `Delete`;
                                    }
                                  })}</div>`;
                                }
                              })}</div></div>
									<div id="${"newForm"}" style="${"display: none"}"></div>

									${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"hstack gap-2"}"><button type="${"submit"}" class="${"btn btn-info"}">Update</button>
											${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-primary" }, {}, {
                                    default: () => {
                                      return `Add New`;
                                    }
                                  })}</div>`;
                                }
                              })}</form>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 4,
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"mb-4 pb-2"}"><h5 class="${"card-title text-decoration-underline mb-3"}">Security:</h5>
									<div class="${"d-flex flex-column flex-sm-row mb-4 mb-sm-0"}"><div class="${"flex-grow-1"}"><h6 class="${"fs-14 mb-1"}">Two-factor Authentication</h6>
											<p class="${"text-muted"}">Two-factor authentication is an enhanced security meansur. Once enabled,
												you&#39;ll be required to give two types of identification when you log into
												Google Authentication and SMS are Supported.
											</p></div>
										<div class="${"flex-shrink-0 ms-sm-3"}">${validate_component(Link, "Link").$$render($$result, {
                                href: null,
                                class: "btn btn-sm btn-primary"
                              }, {}, {
                                default: () => {
                                  return `Enable Two-facor Authentication`;
                                }
                              })}</div></div>
									<div class="${"d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2"}"><div class="${"flex-grow-1"}"><h6 class="${"fs-14 mb-1"}">Secondary Verification</h6>
											<p class="${"text-muted"}">The first factor is a password and the second commonly includes a text with
												a code sent to your smartphone, or biometrics using your fingerprint, face,
												or retina.
											</p></div>
										<div class="${"flex-shrink-0 ms-sm-3"}">${validate_component(Link, "Link").$$render($$result, {
                                href: null,
                                class: "btn btn-sm btn-primary"
                              }, {}, {
                                default: () => {
                                  return `Set up secondary method`;
                                }
                              })}</div></div>
									<div class="${"d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2"}"><div class="${"flex-grow-1"}"><h6 class="${"fs-14 mb-1"}">Backup Codes</h6>
											<p class="${"text-muted mb-sm-0"}">A backup code is automatically generated for you when you turn on two-factor
												authentication through your iOS or Android Twitter app. You can also
												generate a backup code on twitter.com.
											</p></div>
										<div class="${"flex-shrink-0 ms-sm-3"}">${validate_component(Link, "Link").$$render($$result, {
                                href: null,
                                class: "btn btn-sm btn-primary"
                              }, {}, {
                                default: () => {
                                  return `Generate backup codes`;
                                }
                              })}</div></div></div>
								<div class="${"mb-3"}"><h5 class="${"card-title text-decoration-underline mb-3"}">Application Notifications:
									</h5>
									<ul class="${"list-unstyled mb-0"}"><li class="${"d-flex"}"><div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                for: "directMessage",
                                class: "form-check-label fs-14"
                              }, {}, {
                                default: () => {
                                  return `Direct messages`;
                                }
                              })}
												<p class="${"text-muted"}">Messages from people you follow</p></div>
											<div class="${"flex-shrink-0"}"><div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"directMessage"}" checked></div></div></li>
										<li class="${"d-flex mt-2"}"><div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label fs-14",
                                for: "desktopNotification"
                              }, {}, {
                                default: () => {
                                  return `Show desktop notifications
												`;
                                }
                              })}
												<p class="${"text-muted"}">Choose the option you want as your default setting. Block a site: Next to
													&quot;Not allowed to send notifications,&quot; click Add.
												</p></div>
											<div class="${"flex-shrink-0"}"><div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"desktopNotification"}" checked></div></div></li>
										<li class="${"d-flex mt-2"}"><div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label fs-14",
                                for: "emailNotification"
                              }, {}, {
                                default: () => {
                                  return `Show email notifications
												`;
                                }
                              })}
												<p class="${"text-muted"}">Under Settings, choose Notifications. Under Select an account, choose the
													account to enable notifications for.
												</p></div>
											<div class="${"flex-shrink-0"}"><div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"emailNotification"}"></div></div></li>
										<li class="${"d-flex mt-2"}"><div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label fs-14",
                                for: "chatNotification"
                              }, {}, {
                                default: () => {
                                  return `Show chat notifications
												`;
                                }
                              })}
												<p class="${"text-muted"}">To prevent duplicate mobile notifications from the Gmail and Chat apps, in
													settings, turn off Chat notifications.
												</p></div>
											<div class="${"flex-shrink-0"}"><div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"chatNotification"}"></div></div></li>
										<li class="${"d-flex mt-2"}"><div class="${"flex-grow-1"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label fs-14",
                                for: "purchaesNotification"
                              }, {}, {
                                default: () => {
                                  return `Show purchase notifications
												`;
                                }
                              })}
												<p class="${"text-muted"}">Get real-time purchase alerts to protect yourself from fraudulent charges.
												</p></div>
											<div class="${"flex-shrink-0"}"><div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"purchaesNotification"}"></div></div></li></ul></div>
								<div><h5 class="${"card-title text-decoration-underline mb-3"}">Delete This Account:</h5>
									<p class="${"text-muted"}">Go to the Data &amp; Privacy section of your profile Account. Scroll to &quot;Your data &amp;
										privacy options.&quot; Delete your Profile Account. Follow the instructions to delete
										your account :
									</p>
									<div>${validate_component(Input, "Input").$$render($$result, {
                                type: "password",
                                class: "form-control",
                                id: "passwordInput",
                                placeholder: "Enter your password",
                                value: "make@321654987",
                                style: "max-width: 265px"
                              }, {}, {})}</div>
									<div class="${"hstack gap-2 mt-3"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-soft-info" }, {}, {
                                default: () => {
                                  return `Close &amp; Delete This Account`;
                                }
                              })}
										${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-light" }, {}, {
                                default: () => {
                                  return `Cancel`;
                                }
                              })}</div></div>`;
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
  })}</div>`;
});
export { Pages_profile_settings as default };
