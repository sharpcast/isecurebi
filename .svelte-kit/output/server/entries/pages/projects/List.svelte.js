import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { M as MoreHorizontalIcon } from "../../../chunks/MoreHorizontalIcon-80000d2a.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectList } = $$props;
  const customerstatus = [
    { label: "All", value: "All" },
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
    {
      label: "Last 7 Days",
      value: "Last 7 Days"
    },
    {
      label: "Last 30 Days",
      value: "Last 30 Days"
    },
    { label: "This Month", value: "This Month" },
    { label: "Last Year", value: "Last Year" }
  ];
  if ($$props.projectList === void 0 && $$bindings.projectList && projectList !== void 0)
    $$bindings.projectList(projectList);
  return `${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-3" }, {}, {
    default: () => {
      return `<div class="${"col-sm-auto"}"><div>${validate_component(Link, "Link").$$render($$result, {
        href: "/projects/apps-projects-create",
        class: "btn btn-success"
      }, {}, {
        default: () => {
          return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add New`;
        }
      })}</div></div>
	<div class="${"col-sm"}"><div class="${"d-flex align-items-start justify-content-sm-end gap-2"}"><div class="${"search-box ms-2"}">${validate_component(Input, "Input").$$render($$result, {
        type: "text",
        class: "form-control",
        placeholder: "Search..."
      }, {}, {})}
				<i class="${"ri-search-line search-icon"}"></i></div>

			<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
        class: "w-md",
        items: customerstatus,
        value: "Yesterday"
      }, {}, {})}</div></div></div>`;
    }
  })}
<div class="${"row"}">${each(projectList, (item) => {
    return `${item.isDesign1 ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6, class: "project-card" }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"d-flex flex-column h-100"}"><div class="${"d-flex"}"><div class="${"flex-grow-1"}"><p class="${"text-muted mb-4"}">${escape(item.time)}</p></div>
								<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-1 align-items-center"}"><button type="${"button"}"${add_attribute("class", `btn avatar-xs mt-n1 p-0 favourite-btn ${item.ratingClass}`, 0)}><span class="${"avatar-title bg-transparent fs-15"}"><i class="${"ri-star-fill"}"></i>
											</span></button>
										${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                      tag: "button",
                      color: "",
                      class: "btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
                    }, {}, {
                      default: () => {
                        return `${validate_component(MoreHorizontalIcon, "MoreHorizontalIcon").$$render($$result, { class: "icon-sm" }, {}, {})}
											`;
                      }
                    })}

											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                      default: () => {
                        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-overview" }, {}, {
                          default: () => {
                            return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i> View`;
                          }
                        })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-create" }, {}, {
                          default: () => {
                            return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Edit`;
                          }
                        })}
												<div class="${"dropdown-divider"}"></div>
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
                          href: "#!",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#removeProjectModal"
                        }, {}, {
                          default: () => {
                            return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Remove`;
                          }
                        })}
											`;
                      }
                    })}
										`;
                  }
                })}</div>
								</div></div>
							<div class="${"d-flex mb-2"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><span${add_attribute("class", "avatar-title rounded p-2 bg-soft-" + item.imgbgColor, 0)}><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"img-fluid p-1"}"></span>
									</div></div>
								<div class="${"flex-grow-1"}"><h5 class="${"mb-1 fs-15"}">${validate_component(Link, "Link").$$render($$result, {
                  href: "/projects/apps-projects-overview",
                  class: "text-dark"
                }, {}, {
                  default: () => {
                    return `${escape(item.label)}`;
                  }
                })}</h5>
									<p class="${"text-muted text-truncate-two-lines mb-3"}">${escape(item.caption)}</p>
								</div></div>
							<div class="${"mt-auto"}"><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><div>Tasks</div></div>
									<div class="${"flex-shrink-0"}"><div><i class="${"ri-list-check align-bottom me-1 text-muted"}"></i>
											${escape(item.number)}</div>
									</div></div>
								<div class="${"progress progress-sm animated-progess"}">${validate_component(Progress, "Progress").$$render($$result, {
                  bar: true,
                  color: "success",
                  value: item.progressBar
                }, {}, {})}</div>
							</div></div>
					`;
              }
            })}
					<div class="${"card-footer bg-transparent border-top-dashed py-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"avatar-group"}">${each(item.subItem, (item2) => {
              return `${item2.imgFooter ? `${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "Darline Williams"
              }, {}, {
                default: () => {
                  return `<div class="${"avatar-xxs"}"><img${add_attribute("src", item2.imgFooter, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>
											`;
                }
              })}` : `${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "Add Members"
              }, {}, {
                default: () => {
                  return `<div class="${"avatar-xxs"}"><div${add_attribute("class", item2.bgColor ? "avatar-title rounded-circle bg-" + item2.bgColor : "avatar-title rounded-circle bg-light border-dashed border text-primary fs-16 ", 0)}>${escape(item2.imgNumber)}
													</div></div>
											`;
                }
              })}`}`;
            })}
								</div></div>
							<div class="${"flex-shrink-0"}"><div class="${"text-muted"}"><i class="${"ri-calendar-event-fill me-1 align-bottom"}"></i>
									${escape(item.date)}
								</div></div>
						</div></div>
				`;
          }
        })}
			`;
      }
    })}` : `${item.isDesign2 ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6, class: "project-card" }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", `p-3 mt-n3 mx-n3 bg-soft-${item.cardHeaderClass} rounded-top`, 0)}><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-0 fs-14"}">${validate_component(Link, "Link").$$render($$result, {
                  href: "/projects/apps-projects-overview",
                  class: "text-dark"
                }, {}, {
                  default: () => {
                    return `${escape(item.label)}`;
                  }
                })}
									</h5></div>
								<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-1 align-items-center my-n2"}"><button type="${"button"}"${add_attribute("class", `btn avatar-xs p-0 favourite-btn ${item.ratingClass}`, 0)}><span class="${"avatar-title bg-transparent fs-15"}"><i class="${"ri-star-fill"}"></i>
											</span></button>
										${validate_component(Dropdown, "Dropdown").$$render($$result, { direction: "start" }, {}, {
                  default: () => {
                    return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                      color: "",
                      class: "btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                    }, {}, {
                      default: () => {
                        return `${validate_component(MoreHorizontalIcon, "MoreHorizontalIcon").$$render($$result, { class: "icon-sm" }, {}, {})}
											`;
                      }
                    })}

											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                      default: () => {
                        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-overview" }, {}, {
                          default: () => {
                            return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i> View`;
                          }
                        })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-create" }, {}, {
                          default: () => {
                            return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Edit`;
                          }
                        })}
												<div class="${"dropdown-divider"}"></div>
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
                          href: "#!",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#removeProjectModal"
                        }, {}, {
                          default: () => {
                            return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Remove`;
                          }
                        })}
											`;
                      }
                    })}
										`;
                  }
                })}
									</div></div>
							</div></div>

						<div class="${"py-3"}">${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                  default: () => {
                    return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                      default: () => {
                        return `<div><p class="${"text-muted mb-1"}">Status</p>
										<div${add_attribute("class", "fs-12 badge badge-soft-" + item.statusClass, 0)}>${escape(item.status)}</div></div>
								`;
                      }
                    })}
								${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                      default: () => {
                        return `<div><p class="${"text-muted mb-1"}">Deadline</p>
										<h5 class="${"fs-14"}">${escape(item.deadline)}</h5></div>
								`;
                      }
                    })}
							`;
                  }
                })}

							<div class="${"d-flex align-items-center mt-3"}"><p class="${"text-muted mb-0 me-2"}">Team :</p>
								<div class="${"avatar-group"}">${each(item.subItem, (item2) => {
                  return `${item2.imgTeam ? `${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    "data-bs-toggle": "tooltip",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "top",
                    title: "Darline Williams"
                  }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xxs"}"><img${add_attribute("src", item2.imgTeam, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>
											`;
                    }
                  })}` : `${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    "data-bs-toggle": "tooltip",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "top",
                    title: "Donna Kline"
                  }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xxs"}"><div${add_attribute("class", item2.bgColor ? "avatar-title rounded-circle bg-" + item2.bgColor : "avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary", 0)}>${escape(item2.imgNumber)}
													</div></div>
											`;
                    }
                  })}`}`;
                })}</div>
							</div></div>
						<div><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><div>Progress</div></div>
								<div class="${"flex-shrink-0"}"><div>${escape(item.progressBar)}</div>
								</div></div>
							<div class="${"progress progress-sm animated-progess"}">${validate_component(Progress, "Progress").$$render($$result, {
                  bar: true,
                  color: "success",
                  value: item.progressBar
                }, {}, {})}

							</div></div>
					`;
              }
            })}
				`;
          }
        })}
			`;
      }
    })}` : `${item.isDesign3 ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, sm: 6, class: "project-card" }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", `p-3 mt-n3 mx-n3 bg-${item.cardHeaderClass} rounded-top`, 0)}><div class="${"d-flex gap-1 align-items-center justify-content-end my-n2"}"><button type="${"button"}"${add_attribute("class", `btn avatar-xs p-0 favourite-btn ${item.ratingClass}`, 0)}><span class="${"avatar-title bg-transparent fs-15"}"><i class="${"ri-star-fill"}"></i>
									</span></button>
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                      color: "",
                      class: "btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                    }, {}, {
                      default: () => {
                        return `${validate_component(MoreHorizontalIcon, "MoreHorizontalIcon").$$render($$result, { class: "icon-sm" }, {}, {})}
									`;
                      }
                    })}

									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                      default: () => {
                        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-overview" }, {}, {
                          default: () => {
                            return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i> View`;
                          }
                        })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/projects/apps-projects-create" }, {}, {
                          default: () => {
                            return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Edit`;
                          }
                        })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
                          href: "#!",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#removeProjectModal"
                        }, {}, {
                          default: () => {
                            return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Remove`;
                          }
                        })}
									`;
                      }
                    })}
								`;
                  }
                })}</div>
							<div class="${"text-center pb-3"}"><img${add_attribute("src", item.img, 0)} alt="${""}" height="${"32"}">
							</div></div>

						<div class="${"py-3"}"><h5 class="${"fs-14 mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                  href: "/projects/apps-projects-overview",
                  class: "text-dark"
                }, {}, {
                  default: () => {
                    return `${escape(item.label)}`;
                  }
                })}</h5>
							${validate_component(Row, "Row").$$render($$result, { class: "gy-3" }, {}, {
                  default: () => {
                    return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                      default: () => {
                        return `<div><p class="${"text-muted mb-1"}">Status</p>
										<div${add_attribute("class", "fs-12 badge badge-soft-" + item.statusClass, 0)}>${escape(item.status)}</div></div>
								`;
                      }
                    })}
								${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                      default: () => {
                        return `<div><p class="${"text-muted mb-1"}">Deadline</p>
										<h5 class="${"fs-14"}">${escape(item.deadline)}</h5></div>
								`;
                      }
                    })}
							`;
                  }
                })}

							<div class="${"d-flex align-items-center mt-3"}"><p class="${"text-muted mb-0 me-2"}">Team :</p>
								<div class="${"avatar-group"}">${each(item.subItem, (item2) => {
                  return `${item2.imgTeam ? `${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    "data-bs-toggle": "tooltip",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "top",
                    title: "Darline Williams"
                  }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xxs"}"><img${add_attribute("src", item2.imgTeam, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div>
											`;
                    }
                  })}` : `${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "avatar-group-item",
                    "data-bs-toggle": "tooltip",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "top",
                    title: "Donna Kline"
                  }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xxs"}"><div${add_attribute("class", item2.bgColor ? "avatar-title rounded-circle bg-" + item2.bgColor : "avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary", 0)}>${escape(item2.imgNumber)}
													</div></div>
											`;
                    }
                  })}`}`;
                })}</div>
							</div></div>
						<div><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><div>Tasks</div></div>
								<div class="${"flex-shrink-0"}"><div><i class="${"ri-list-check align-bottom me-1 text-muted"}"></i> ${escape(item.number)}</div>
								</div></div>
							<div class="${"progress progress-sm animated-progess"}">${validate_component(Progress, "Progress").$$render($$result, {
                  bar: true,
                  color: "success",
                  value: item.progressBar
                }, {}, {})}

							</div></div>
					`;
              }
            })}
				`;
          }
        })}
			`;
      }
    })}` : `${escape(null)}`}`}`}`;
  })}</div>
${validate_component(Row, "Row").$$render($$result, {
    class: "g-0 text-center text-sm-start align-items-center mb-4"
  }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
        default: () => {
          return `<div><p class="${"mb-sm-0 text-muted"}">Showing <span class="${"fw-semibold"}">1</span> to <span class="${"fw-semibold"}">10</span> of
				<span class="${"fw-semibold text-decoration-underline"}">12</span> entries
			</p></div>`;
        }
      })}

	${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
        default: () => {
          return `<ul class="${"pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `Previous`;
            }
          })}</li>
			<li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `1`;
            }
          })}</li>
			<li class="${"page-item "}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `2`;
            }
          })}</li>
			<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `3`;
            }
          })}</li>
			<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `4`;
            }
          })}</li>
			<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `5`;
            }
          })}</li>
			<li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "page-link" }, {}, {
            default: () => {
              return `Next`;
            }
          })}</li></ul>`;
        }
      })}`;
    }
  })}`;
});
export { List as default };
