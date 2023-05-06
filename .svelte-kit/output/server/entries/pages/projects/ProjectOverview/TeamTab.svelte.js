import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { M as Modal } from "../../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Portal-94847a25.js";
const TeamTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const toggle = () => open = !open;
  return `${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-3" }, {}, {
    default: () => {
      return `<div class="${"col-sm"}"><div class="${"d-flex"}"><div class="${"search-box me-2"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Search member..."}">
				<i class="${"ri-search-line search-icon"}"></i></div></div></div>
	<div class="${"col-sm-auto"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
        default: () => {
          return `<i class="${"ri-share-line me-1 align-bottom"}"></i> Invite Member`;
        }
      })}</div></div>`;
    }
  })}


<div class="${"team-list list-view-filter"}">${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Nancy Martino</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Team Leader &amp; HR</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">225</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">197</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn active"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle"}">HB</div></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Henry Baird</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Full Stack Developer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">352</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">376</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn active"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Frank Hook</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Project Manager</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">164</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">182</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Jennifer Carter</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">UI/UX Designer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">225</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">197</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">ME</div></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Megan Elmore</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Team Leader &amp; Web Developer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">201</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">263</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Alexis Clarke</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Backend Developer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">132</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">147</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><div class="${"avatar-title bg-soft-info text-info rounded-circle"}">NC</div></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Nathan Cole</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Front-End Developer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">352</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">376</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Joseph Parker</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Team Leader &amp; HR</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">64</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">93</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"img-fluid d-block rounded-circle"}"></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Erica Kernan</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Web Designer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">345</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">298</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "team-box" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center team-row" }, {}, {
            default: () => {
              return `<div class="${"col team-settings"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                default: () => {
                  return `<div class="${"col"}"><div class="${"flex-shrink-0 me-2"}">${validate_component(Button, "Button").$$render($$result, {
                    color: "",
                    class: "btn fs-16 p-0 favourite-btn"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill"}"></i>`;
                    }
                  })}</div></div>
						${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "col text-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", href: null, class: "p-0" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-fill fs-17"}"></i>`;
                        }
                      })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
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
                  })}`;
                }
              })}</div>
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `<div class="${"team-profile-img"}"><div class="${"avatar-lg img-thumbnail rounded-circle"}"><div class="${"avatar-title border bg-light text-primary rounded-circle"}">DP</div></div>
						<div class="${"team-content"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block" }, {}, {
                    default: () => {
                      return `<h5 class="${"fs-16 mb-1"}">Donald Palmer</h5>`;
                    }
                  })}
							<p class="${"text-muted mb-0"}">Wed Developer</p></div></div>`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "col" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "text-muted text-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-6 border-end border-end-dashed"}"><h5 class="${"mb-1"}">97</h5>
							<p class="${"text-muted mb-0"}">Projects</p></div>
						<div class="${"col-6"}"><h5 class="${"mb-1"}">135</h5>
							<p class="${"text-muted mb-0"}">Tasks</p></div>`;
                    }
                  })}`;
                }
              })}
				<div class="${"col-lg-2 col"}"><div class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/profile/simple/simplepage",
                class: "btn btn-light view-btn"
              }, {}, {
                default: () => {
                  return `View Profile`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>


${validate_component(Row, "Row").$$render($$result, {
    class: "g-0 text-center text-sm-start align-items-center mb-3"
  }, {}, {
    default: () => {
      return `<div class="${"col-sm-6"}"><div><p class="${"mb-sm-0"}">Showing 1 to 10 of 12 entries</p></div></div>
	
	<div class="${"col-sm-6"}"><ul class="${"pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
        default: () => {
          return `<i class="${"mdi mdi-chevron-left"}"></i>`;
        }
      })}</li>
			<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
        default: () => {
          return `1`;
        }
      })}</li>
			<li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "page-link" }, {}, {
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
      })}</li></ul></div>
	`;
    }
  })}
${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: open,
    toggle,
    centered: true,
    class: "border-0"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        toggle,
        class: "p-3 ps-4 bg-soft-success"
      }, {}, {
        default: () => {
          return `Members
    `;
        }
      })}
    ${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "p-4" }, {}, {
        default: () => {
          return `<div class="${"search-box mb-3"}">${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control bg-light border-light",
            placeholder: "Search here..."
          }, {}, {})}
            <i class="${"ri-search-line search-icon"}"></i></div>

        <div class="${"mb-4 d-flex align-items-center"}"><div class="${"me-2"}"><h5 class="${"mb-0 fs-13"}">Members :</h5></div>
            <div class="${"avatar-group justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "avatar-group-item",
            "data-bs-toggle": "tooltip",
            "data-bs-trigger": "hover",
            "data-bs-placement": "top",
            title: "",
            "data-bs-original-title": "Brent Gonzalez"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>`;
            }
          })}
                ${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "avatar-group-item",
            "data-bs-toggle": "tooltip",
            "data-bs-trigger": "hover",
            "data-bs-placement": "top",
            title: "",
            "data-bs-original-title": "Sylvia Wright"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-secondary"}">S
                        </div></div>`;
            }
          })}
                ${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "avatar-group-item",
            "data-bs-toggle": "tooltip",
            "data-bs-trigger": "hover",
            "data-bs-placement": "top",
            title: "",
            "data-bs-original-title": "Ellen Smith"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>`;
            }
          })}</div></div>
        <div class="${"mx-n4 px-4"}" data-simplebar="${"init"}" style="${"max-height : 225px"}"><div class="${"vstack gap-3"}"><div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Nancy Martino`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div>

                <div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle"}">HB
                        </div></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Henry Baird`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div>

                <div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div>

                <div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Jennifer Carter`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div>

                <div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">AC
                        </div></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Alexis Clarke`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div>

                <div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0 me-3"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-body d-block" }, {}, {
            default: () => {
              return `Joseph Parker`;
            }
          })}</h5></div>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-light btn-sm"}">Add</button></div></div></div></div>`;
        }
      })}
    <div class="${"modal-footer"}"><button type="${"button"}" class="${"btn btn-light w-xs"}">Cancel</button>
        <button type="${"button"}" class="${"btn btn-success w-xs"}">Invite</button></div>`;
    }
  })}`;
});
export { TeamTab as default };
