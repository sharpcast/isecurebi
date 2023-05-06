import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../../chunks/ModalHeader-dfdb4a12.js";
import { O as Offcanvas, a as OffcanvasBody } from "../../../../chunks/Offcanvas-493a27d8.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { i as img1 } from "../../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../../chunks/img-7-4861de06.js";
import { i as img8 } from "../../../../chunks/img-8-19298a6b.js";
import { i as img9 } from "../../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../../chunks/img-10-09bc0399.js";
import { i as img12, a as img11 } from "../../../../chunks/img-12-ccf074a3.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Portal-94847a25.js";
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const toggle = () => {
    open = !open;
  };
  let openModal = false;
  const toggleOffCanvas = () => openModal = !openModal;
  const team = [
    {
      id: 1,
      backgroundImg: img9,
      userImage: avatar2,
      name: "Nancy Martino",
      jobPosition: "Team Leader & HR",
      projectCount: 225,
      taskCount: 197
    },
    {
      id: 2,
      backgroundImg: img12,
      userImage: null,
      userShortName: "HB",
      name: "Henry Baird",
      jobPosition: "Full Stack Developer",
      projectCount: 352,
      taskCount: 376,
      bgColor: "danger",
      textColor: "danger"
    },
    {
      id: 3,
      backgroundImg: img11,
      userImage: avatar3,
      name: "Frank Hook",
      jobPosition: "Project Manager",
      projectCount: 162,
      taskCount: 192
    },
    {
      id: 4,
      backgroundImg: img1,
      userImage: avatar8,
      name: "Jennifer Carter",
      jobPosition: "UI/UX Designer",
      projectCount: 241,
      taskCount: 205
    },
    {
      id: 5,
      backgroundImg: img10,
      userImage: null,
      userShortName: "ME",
      name: "Megan Elmore",
      jobPosition: "Team Leader & Web Developer",
      projectCount: 201,
      taskCount: 263,
      bgColor: "success",
      textColor: "success"
    },
    {
      id: 6,
      backgroundImg: img2,
      userImage: avatar4,
      name: "Alexis Clarke",
      jobPosition: "Backend Developer",
      projectCount: 132,
      taskCount: 147
    },
    {
      id: 7,
      backgroundImg: img4,
      userImage: null,
      userShortName: "NC",
      name: "Nathan Cole",
      jobPosition: "Front-End Developer",
      projectCount: 352,
      taskCount: 376,
      bgColor: "info",
      textColor: "info"
    },
    {
      id: 8,
      backgroundImg: img7,
      userImage: avatar6,
      name: "Joseph Parker",
      jobPosition: "Full Stack Developer",
      projectCount: 64,
      taskCount: 93
    },
    {
      id: 9,
      backgroundImg: img3,
      userImage: avatar5,
      name: "Erica Kernan",
      jobPosition: "Web Designer",
      projectCount: 345,
      taskCount: 298
    },
    {
      id: 10,
      backgroundImg: img5,
      userImage: null,
      userShortName: "DP",
      name: "Donald Palmer",
      jobPosition: "Wed Developer",
      projectCount: 95,
      taskCount: 135,
      bgColor: "light",
      textColor: "primary"
    },
    {
      id: 11,
      backgroundImg: img8,
      userImage: avatar7,
      name: "Jack Gough",
      jobPosition: "React Js Developer",
      projectCount: 87,
      taskCount: 121
    },
    {
      id: 12,
      backgroundImg: img6,
      userImage: null,
      userShortName: "MW",
      name: "Marie Ward",
      jobPosition: "Backend Developer",
      projectCount: 145,
      taskCount: 210,
      bgColor: "success",
      textColor: "success"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Team | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Team", pageTitle: "Pages" }, {}, {})}
		${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                    default: () => {
                      return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "Search for name, tasks, projects or something..."
                      }, {}, {})}
							<i class="${"ri-search-line search-icon"}"></i></div>`;
                    }
                  })}
					${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto ms-auto" }, {}, {
                    default: () => {
                      return `<div class="${"list-grid-nav hstack gap-1"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "info",
                        id: "grid-view-button",
                        class: "btn btn-soft-info nav-link btn-icon fs-14 active filter-button"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-grid-fill"}"></i>`;
                        }
                      })}
							${validate_component(Button, "Button").$$render($$result, {
                        color: "info",
                        id: "list-view-button",
                        class: "btn btn-soft-info nav-link  btn-icon fs-14 filter-button"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-list-unordered"}"></i>`;
                        }
                      })}
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            type: "button",
                            class: "btn btn-soft-info btn-icon fs-14"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-2-fill"}"></i>`;
                            }
                          })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `<li>${validate_component(Link, "Link").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                default: () => {
                                  return `All`;
                                }
                              })}</li>
									<li>${validate_component(Link, "Link").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                default: () => {
                                  return `Last Week`;
                                }
                              })}</li>
									<li>${validate_component(Link, "Link").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                default: () => {
                                  return `Last Month`;
                                }
                              })}</li>
									<li>${validate_component(Link, "Link").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                default: () => {
                                  return `Last Year`;
                                }
                              })}</li>`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-fill me-1 align-bottom"}"></i> Add Members`;
                        }
                      })}</div>`;
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
              return `<div>${validate_component(Row, "Row").$$render($$result, { class: "team-list grid-view-filter" }, {}, {
                default: () => {
                  return `${each(team, (item) => {
                    return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
                          default: () => {
                            return `<div class="${"team-cover"}"><img${add_attribute("src", item.backgroundImg, 0)} alt="${""}" class="${"img-fluid"}"></div>
									${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                              default: () => {
                                return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
                                  default: () => {
                                    return `${validate_component(Col, "Col").$$render($$result, { class: "team-settings" }, {}, {
                                      default: () => {
                                        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                          default: () => {
                                            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                              default: () => {
                                                return `<div class="${"bookmark-icon flex-shrink-0 me-2"}"><div class="${"flex-shrink-0 me-2"}"><button type="${"button"}" class="${"btn btn-light btn-icon rounded-circle btn-sm favourite-btn"}"><i class="${"ri-star-fill fs-14"}"></i></button>
															</div></div>
													`;
                                              }
                                            })}
													${validate_component(Dropdown, "Dropdown").$$render($$result, {
                                              direction: "start",
                                              class: "col text-end"
                                            }, {}, {
                                              default: () => {
                                                return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                                  tag: "a",
                                                  color: "",
                                                  class: "p-0 text-white",
                                                  id: "dropdownMenuLink2",
                                                  role: "button"
                                                }, {}, {
                                                  default: () => {
                                                    return `<i class="${"ri-more-fill fs-17"}"></i>
														`;
                                                  }
                                                })}
														${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                                  default: () => {
                                                    return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                      default: () => {
                                                        return `<i class="${"ri-eye-line me-2 align-middle"}"></i>View`;
                                                      }
                                                    })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                      default: () => {
                                                        return `<i class="${"ri-star-line me-2 align-middle"}"></i>Favorites`;
                                                      }
                                                    })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                      default: () => {
                                                        return `<i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete`;
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
											${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                                      default: () => {
                                        return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle flex-shrink-0"}">${item.userImage != null ? `<img${add_attribute("src", item.userImage, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}">` : `<div${add_attribute("class", "avatar-title rounded-circle bg-soft-" + item.bgColor + " text-" + item.textColor, 0)}>${escape(item.userShortName)}
															</div>`}</div>
													<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                          default: () => {
                                            return `<h5 class="${"fs-16 mb-1"}">${escape(item.name)}</h5>`;
                                          }
                                        })}
														<p class="${"text-muted mb-0"}">${escape(item.jobPosition)}</p>
													</div></div>
											`;
                                      }
                                    })}
											${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                                      default: () => {
                                        return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                                          default: () => {
                                            return `${validate_component(Col, "Col").$$render($$result, {
                                              xs: 6,
                                              class: "border-end border-end-dashed"
                                            }, {}, {
                                              default: () => {
                                                return `<h5 class="${"mb-1"}">${escape(item.projectCount)}</h5>
														<p class="${"text-muted mb-0"}">Projects</p>
													`;
                                              }
                                            })}
													${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                                              default: () => {
                                                return `<h5 class="${"mb-1"}">${escape(item.taskCount)}</h5>
														<p class="${"text-muted mb-0"}">Tasks</p>
													`;
                                              }
                                            })}
												`;
                                          }
                                        })}
											`;
                                      }
                                    })}
											${validate_component(Col, "Col").$$render($$result, { lg: 2, class: "col" }, {}, {
                                      default: () => {
                                        return `<div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                                          href: "/pages/profile/simple/simplepage",
                                          class: "btn btn-light view-btn"
                                        }, {}, {
                                          default: () => {
                                            return `View Profile`;
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
                            })}
								`;
                          }
                        })}
							`;
                      }
                    })}`;
                  })}

						${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"text-center mb-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-success" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i> Load More
								`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}

					${validate_component(Modal, "Modal").$$render($$result, { isOpen: open, toggle, centered: true }, {}, {
                default: () => {
                  return `<div class="${"modal-content"}">${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle }, {}, {
                    default: () => {
                      return `<h5 class="${"modal-title"}" id="${"myModalLabel"}">Add New Members</h5>`;
                    }
                  })}
							${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "teammembersName",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Name`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "teammembersName",
                                    placeholder: "Enter name"
                                  }, {}, {})}</div>`;
                                }
                              })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "designation", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Designation`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "designation",
                                    placeholder: "Enter designation"
                                  }, {}, {})}</div>`;
                                }
                              })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "totalProjects",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Projects`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "totalProjects",
                                    placeholder: "Total projects"
                                  }, {}, {})}</div>`;
                                }
                              })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "totalTasks", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Tasks`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "totalTasks",
                                    placeholder: "Total tasks"
                                  }, {}, {})}</div>`;
                                }
                              })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, { for: "formFile", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Profile Images`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control",
                                    type: "file",
                                    id: "formFile"
                                  }, {}, {})}</div>`;
                                }
                              })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"hstack gap-2 justify-content-end"}"><button type="${"button"}" class="${"btn btn-light"}" data-bs-dismiss="${"modal"}">Close</button>
												<button type="${"submit"}" class="${"btn btn-success"}">Add Member</button></div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}

					${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
                isOpen: openModal,
                placement: "end",
                toggle: toggleOffCanvas,
                class: "offcanvas-end border-0"
              }, {}, {
                default: () => {
                  return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "profile-offcanvas p-0" }, {}, {
                    default: () => {
                      return `<div class="${"team-cover"}"><img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}"></div>
							<div class="${"p-3"}"><div class="${"team-settings"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><button type="${"button"}" class="${"btn btn-light btn-icon rounded-circle btn-sm favourite-btn "}"><i class="${"ri-star-fill fs-14"}"></i></button></div>`;
                            }
                          })}
										${validate_component(Dropdown, "Dropdown").$$render($$result, {
                            direction: "start",
                            class: "col text-end"
                          }, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "a",
                                color: "",
                                class: "p-0 text-white",
                                id: "dropdownMenuLink14"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-more-fill fs-17"}"></i>`;
                                }
                              })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<i class="${"ri-eye-line me-2 align-middle"}"></i>View`;
                                    }
                                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<i class="${"ri-star-line me-2 align-middle"}"></i>Favorites`;
                                    }
                                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<i class="${"ri-delete-bin-5-line me-2 align-middle"}"></i>Delete`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>
							<div class="${"p-3 text-center"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-lg img-thumbnail rounded-circle mx-auto"}">
								<div class="${"mt-3"}"><h5 class="${"fs-15"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-primary" }, {}, {
                        default: () => {
                          return `Nancy Martino`;
                        }
                      })}</h5>
									<p class="${"text-muted"}">Team Leader &amp; HR</p></div>
								<div class="${"hstack gap-2 justify-content-center mt-4"}"><div class="${"avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-secondary text-secondary rounded fs-16"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-facebook-fill"}"></i>`;
                        }
                      })}</div>
									<div class="${"avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-success text-success rounded fs-16"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-slack-fill"}"></i>`;
                        }
                      })}</div>
									<div class="${"avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-info text-info rounded fs-16"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-linkedin-fill"}"></i>`;
                        }
                      })}</div>
									<div class="${"avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-danger text-danger rounded fs-16"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-dribbble-fill"}"></i>`;
                        }
                      })}</div></div></div>
							${validate_component(Row, "Row").$$render($$result, { class: "g-0 text-center" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}">124</h5>
										<p class="${"text-muted mb-0"}">Projects</p></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}">81</h5>
										<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                            }
                          })}`;
                        }
                      })}
							<div class="${"p-3"}"><h5 class="${"fs-15 mb-3"}">Personal Details</h5>
								<div class="${"mb-3"}"><p class="${"text-muted text-uppercase fw-semibold fs-12 mb-2"}">Number</p>
									<h6>+(256) 2451 8974</h6></div>
								<div class="${"mb-3"}"><p class="${"text-muted text-uppercase fw-semibold fs-12 mb-2"}">Email</p>
									<h6>nancymartino@email.com</h6></div>
								<div><p class="${"text-muted text-uppercase fw-semibold fs-12 mb-2"}">Location</p>
									<h6 class="${"mb-0"}">Carson City - USA</h6></div></div>
							<div class="${"p-3 border-top"}"><h5 class="${"fs-15 mb-4"}">File Manager</h5>
								<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-danger text-danger rounded fs-16"}"><i class="${"ri-image-2-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Images`;
                        }
                      })}</h6>
										<p class="${"text-muted mb-0"}">4469 Files</p></div>
									<div class="${"text-muted"}">12 GB</div></div>
								<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-secondary text-secondary rounded fs-16"}"><i class="${"ri-file-zip-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Documents`;
                        }
                      })}</h6>
										<p class="${"text-muted mb-0"}">46 Files</p></div>
									<div class="${"text-muted"}">3.46 GB</div></div>
								<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-success text-success rounded fs-16"}"><i class="${"ri-live-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Media`;
                        }
                      })}</h6>
										<p class="${"text-muted mb-0"}">124 Files</p></div>
									<div class="${"text-muted"}">4.3 GB</div></div>
								<div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-primary text-primary rounded fs-16"}"><i class="${"ri-error-warning-line"}"></i></div></div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Others`;
                        }
                      })}</h6>
										<p class="${"text-muted mb-0"}">18 Files</p></div>
									<div class="${"text-muted"}">846 MB</div></div></div>`;
                    }
                  })}
						<div class="${"offcanvas-foorter border p-3 hstack gap-3 text-center position-relative"}"><button class="${"btn btn-light w-100"}"><i class="${"ri-question-answer-fill align-bottom ms-1"}"></i> Send Message</button>
							${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/profile/simple/simplepage",
                    class: "btn btn-primary w-100"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-user-3-fill align-bottom ms-1"}"></i> View Profile`;
                    }
                  })}</div>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}

		<svg class="${"bookmark-hide"}"><symbol viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" fill="${"var(--color-svg)"}" id="${"icon-star"}"><path strokewidth="${".4"}" d="${"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}"></path></symbol></svg>`;
    }
  })}</div>`;
});
export { Team as default };
