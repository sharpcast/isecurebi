import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalFooter } from "../../../chunks/ModalFooter-e48425ab.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { C as CDeleteModal } from "../../../chunks/CDeleteModal-5ffe0ce6.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import { M as MOCK_DATA } from "../../../chunks/crm-9d118fb5.js";
import ContactAction from "./ContactAction.svelte.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/mail_chimp-a5132002.js";
import "../../../chunks/bitbucket-59cc1b30.js";
import "../../../chunks/slack-e58caefb.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/img-6-7ff883ab.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-9-f5d371f4.js";
let sortBy = "Name";
const Apps_crm_contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let deleteModal = false;
  let open = false;
  const toggle = () => open = !open;
  const sortbyname = [
    { label: "Owner", value: "Owner" },
    { label: "Company", value: "Company" },
    { label: "Location", value: "Location" }
  ];
  const setDeleteModal = (status) => {
    deleteModal = status;
  };
  const data = MOCK_DATA.crmcontacts;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    { id: "img", hidden: true },
    {
      id: "name",
      name: "Name",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center">
						<div class="flex-shrink-0"><img src=${row.cells[1].data} alt="" class="avatar-xs rounded-circle"></div>
						<div class="flex-grow-1 ms-2 name">${cell}</div>
					</div>`)
    },
    { id: "company", name: "Company" },
    { id: "email", name: "Email id" },
    { id: "phone", name: "Phone No" },
    { id: "score", name: "Lead Score" },
    {
      id: "date",
      name: "Last Contacted",
      formatter: (contact) => html(`${contact[0]} <small class="text-muted">${contact[1]}</small>`)
    },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: ContactAction }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Contacts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Contacts", pageTitle: "CRM" }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center flex-wrap gap-2"}"><div class="${"flex-grow-1"}">${validate_component(Button, "Button").$$render($$result, { color: "", class: "btn btn-info add-btn" }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-fill me-1 align-bottom"}"></i> Add
									Contacts
								`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"hstack text-nowrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        class: "btn btn-soft-danger",
                        color: "danger"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-2-line"}"></i>`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `<i class="${"ri-filter-2-line me-1 align-bottom"}"></i>${escape(" ")}
										Filters
									`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "", class: "btn btn-soft-success" }, {}, {
                        default: () => {
                          return `Import`;
                        }
                      })}

									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-info",
                            color: ""
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-2-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `All`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Last Week`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Last Month`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Last Year`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "contactList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search",
                                placeholder: "Search for contact..."
                              }, {}, {})}
									<i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}
							<div class="${"col-md-auto ms-auto"}"><div class="${"d-flex align-items-center gap-2"}"><span class="${"text-muted"}">Sort by: </span>
									<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                            value: sortBy,
                            items: sortbyname,
                            id: "choices-single-default"
                          }, {}, {})}</div></div></div>`;
                        }
                      })}`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div>${MOCK_DATA.crmcontacts.length > 0 ? `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        className: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}</div>` : `<div class="${"noresult"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
										<h5 class="${"mt-2"}">Sorry! No Result Found
										</h5>
										<p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+
											contacts We did not find any
											contacts for you search.
										</p></div></div>`}</div>

						${validate_component(Modal, "Modal").$$render($$result, {
                        id: "showModal",
                        isOpen: open,
                        toggle,
                        centered: true
                      }, {}, {
                        default: () => {
                          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "bg-soft-info p-3", toggle }, {}, {
                            default: () => {
                              return `Add Contact`;
                            }
                          })}

							${validate_component(Form, "Form").$$render($$result, { action: "" }, {}, {
                            default: () => {
                              return `${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "id-field" }, {}, {})}
									${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, { for: "name-field", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Name`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            id: "customername-field",
                                            class: "form-control",
                                            placeholder: "Enter name"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "company_name-field",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Company Name`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            id: "company_name-field",
                                            class: "form-control",
                                            placeholder: "Enter company name"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "email_id-field",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Email ID`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            id: "email_id-field",
                                            class: "form-control",
                                            placeholder: "Enter email"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, { for: "phone-field", class: "form-label" }, {}, {
                                            default: () => {
                                              return `Phone`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            id: "phone-field",
                                            class: "form-control",
                                            placeholder: "Enter phone no"
                                          }, {}, {})}</div>`;
                                        }
                                      })}
										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Label, "Label").$$render($$result, {
                                            for: "lead_score-field",
                                            class: "form-label"
                                          }, {}, {
                                            default: () => {
                                              return `Lead Score`;
                                            }
                                          })}
												${validate_component(Input, "Input").$$render($$result, {
                                            type: "text",
                                            id: "lead_score-field",
                                            class: "form-control",
                                            placeholder: "Enter value"
                                          }, {}, {})}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}
								${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                    default: () => {
                                      return `Close`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, {
                                    type: "submit",
                                    class: "btn btn-success d-none",
                                    id: "add-btn"
                                  }, {}, {
                                    default: () => {
                                      return `Add Contact
										`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", id: "edit-btn" }, {}, {
                                    default: () => {
                                      return `Update`;
                                    }
                                  })}</div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(CDeleteModal, "DeleteModal").$$render($$result, {
                        show: deleteModal,
                        onCloseClick: () => setDeleteModal(false)
                      }, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center" }, {}, {
                    default: () => {
                      return `<div class="${"position-relative d-inline-block"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-lg rounded-circle img-thumbnail"}">
							<span class="${"contact-active position-absolute rounded-circle bg-success"}"><span class="${"visually-hidden"}"></span></span></div>
						<h5 class="${"mt-4 mb-1"}">Tonya Noble</h5>
						<p class="${"text-muted"}">Nesta Technologies</p>

						<ul class="${"list-inline mb-0"}"><li class="${"list-inline-item avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-success text-success fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-phone-line"}"></i>`;
                        }
                      })}</li>
							<li class="${"list-inline-item avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-danger text-danger fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-mail-line"}"></i>`;
                        }
                      })}</li>
							<li class="${"list-inline-item avatar-xs"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "avatar-title bg-soft-warning text-warning fs-15 rounded"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-question-answer-line"}"></i>`;
                        }
                      })}</li></ul>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Personal Information
						</h6>
						<p class="${"text-muted mb-4"}">Hello, I&#39;m Tonya Noble, The most effective objective
							is one that is tailored to the job you are applying
							for. It states what kind of career you are seeking,
							and what skills and experiences.
						</p>
						<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, { class: "table table-borderless mb-0" }, {}, {
                        default: () => {
                          return `<tbody><tr><td class="${"fw-medium"}">Designation </td>
										<td>Lead Designer / Developer</td></tr>
									<tr><td class="${"fw-medium"}">Email ID </td>
										<td>tonyanoble@velzon.com</td></tr>
									<tr><td class="${"fw-medium"}">Phone No </td>
										<td>414-453-5725</td></tr>
									<tr><td class="${"fw-medium"}">Lead Score </td>
										<td>154</td></tr>
									<tr><td class="${"fw-medium"}">Tags </td>
										<td><span class="${"badge badge-soft-primary me-1"}">Lead
											</span>
											<span class="${"badge badge-soft-primary"}">Partner
											</span></td></tr>
									<tr><td class="${"fw-medium"}">Last Contacted
										</td>
										<td>15 Dec, 2021${escape(" ")}
											<small class="${"text-muted"}">08:58AM</small></td></tr></tbody>`;
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
  })}</div>`;
});
export { Apps_crm_contacts as default };
