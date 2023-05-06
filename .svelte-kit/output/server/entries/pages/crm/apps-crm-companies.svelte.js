import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
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
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/crm-9d118fb5.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import CompanyAction from "./CompanyAction.svelte.js";
import { m as mail_chimp } from "../../../chunks/mail_chimp-a5132002.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
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
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/Link-71b36253.js";
let sortBy = "Owner";
const Apps_crm_companies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const toggle = () => open = !open;
  const sortbyname = [
    { label: "Owner", value: "Owner" },
    { label: "Company", value: "Company" },
    { label: "Location", value: "Location" }
  ];
  const industrytype = [
    {
      label: "Select industry type",
      value: "Select industry type"
    },
    {
      label: "Computer Industry",
      value: "Computer Industry"
    },
    {
      label: "Chemical Industries",
      value: "Chemical Industries"
    },
    {
      label: "Health Services",
      value: "Health Services"
    },
    {
      label: "Telecommunications Services",
      value: "Telecommunications Services"
    },
    {
      label: "Textiles: Clothing, Footwear",
      value: "Textiles: Clothing, Footwear"
    }
  ];
  const data = MOCK_DATA.companies;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check">
              <input class="form-check-input" type="checkbox" name="checkAll" value="option1" />
            </div>`)
    },
    { id: "img", hidden: true },
    {
      id: "companyName",
      name: "Company Name",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src=${row.cells[1].data}
                  alt=""
                  class="avatar-xxs rounded-circle"
                />
              </div>
              <div class="flex-grow-1 ms-2 name">
                ${cell}
              </div>
            </div>`)
    },
    { id: "owner", name: "Owner" },
    {
      id: "industryType",
      name: "Industry Type"
    },
    {
      id: "rating",
      name: "Rating",
      formatter: (cell) => html(`<span class="star_value">${cell}</span> <i class="ri-star-fill text-warning align-bottom"></i>`)
    },
    { id: "location", name: "Location" },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: CompanyAction }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Companies | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Companies", pageTitle: "CRM" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center flex-wrap gap-2"}"><div class="${"flex-grow-1"}">${validate_component(Button, "Button").$$render($$result, { class: "btn btn-info add-btn" }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-fill me-1 align-bottom"}"></i>
									Add Company`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"hstack text-nowrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "",
                        class: "btn btn-soft-danger",
                        id: "remove-actions"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-2-line"}"></i>`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, {
                        color: "danger",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#addmembers"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-filter-2-line me-1 align-bottom"}"></i> Filters`;
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
              return `${validate_component(Card, "Card").$$render($$result, { id: "companyList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search",
                                placeholder: "Search for company..."
                              }, {}, {})}
									<i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}
							<div class="${"col-md-auto ms-auto"}"><div class="${"d-flex align-items-center gap-2"}"><span class="${"text-muted"}">Sort by: </span>
									<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                            id: "choices-single-default",
                            value: sortBy,
                            items: sortbyname
                          }, {}, {})}</div></div></div>`;
                        }
                      })}`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div class="${"table-responsive table-card gridjs-border-none"}">${MOCK_DATA.companies.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        className: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}` : `<div class="${"noresult"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
											<h5 class="${"mt-2"}">Sorry! No Result Found
											</h5>
											<p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+
												companies We did not find any
												companies for you search.
											</p></div></div>`}</div></div>

						${validate_component(Modal, "Modal").$$render($$result, { id: "showModal", isOpen: open, toggle }, {}, {
                        default: () => {
                          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "bg-soft-info p-3", toggle }, {}, {})}
							${validate_component(Form, "Form").$$render($$result, { action: "" }, {}, {
                            default: () => {
                              return `${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "id-field" }, {}, {})}
									<div class="${"row g-3"}">${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
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
                                        placeholder: "Enter company name",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "owner-field", class: "form-label" }, {}, {
                                        default: () => {
                                          return `Owner Name`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "owner-field",
                                        class: "form-control",
                                        placeholder: "Enter owner name",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "industry_type-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Industry Type`;
                                        }
                                      })}
												${validate_component(Select, "Select").$$render($$result, {
                                        id: "industry_type-field",
                                        items: industrytype
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "star_value-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Rating`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "star_value-field",
                                        class: "form-control",
                                        placeholder: "Enter rating",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "location-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `location`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "location-field",
                                        class: "form-control",
                                        placeholder: "Enter location",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "employee-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Employee`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "employee-field",
                                        class: "form-control",
                                        placeholder: "Enter employee",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "website-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Website`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "website-field",
                                        class: "form-control",
                                        placeholder: "Enter website",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                                        for: "contact_email-field",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Contact Email`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "contact_email-field",
                                        class: "form-control",
                                        placeholder: "Enter contact email",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                    default: () => {
                                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "since-field", class: "form-label" }, {}, {
                                        default: () => {
                                          return `Since`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        id: "since-field",
                                        class: "form-control",
                                        placeholder: "Enter since",
                                        required: true
                                      }, {}, {})}</div>`;
                                    }
                                  })}</div>`;
                                }
                              })}
								<div class="${"modal-footer"}"><div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, { class: "btn btn-light" }, {}, {
                                default: () => {
                                  return `Close`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { class: "btn btn-success", id: "add-btn" }, {}, {
                                default: () => {
                                  return `Add Company`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                class: "btn btn-success d-none",
                                id: "edit-btn"
                              }, {}, {
                                default: () => {
                                  return `Update`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}
						`;
                    }
                  })}`;
                }
              })}
				`;
            }
          })}
			
			${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "company-view-detail" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center" }, {}, {
                    default: () => {
                      return `<div class="${"position-relative d-inline-block"}"><div class="${"avatar-md"}"><div class="${"avatar-title bg-light rounded-circle"}"><img${add_attribute("src", mail_chimp, 0)} alt="${""}" class="${"avatar-xs"}"></div></div></div>
						<h5 class="${"mt-3 mb-1"}">Syntyce Solution</h5>
						<p class="${"text-muted"}">Michael Morris</p>

						<ul class="${"list-inline mb-0"}"><li class="${"list-inline-item avatar-xs"}"><a${add_attribute("href", null, 0)} class="${"avatar-title bg-soft-success text-success fs-15 rounded"}"><i class="${"ri-global-line"}"></i></a></li>
							<li class="${"list-inline-item avatar-xs"}"><a${add_attribute("href", null, 0)} class="${"avatar-title bg-soft-danger text-danger fs-15 rounded"}"><i class="${"ri-mail-line"}"></i></a></li>
							<li class="${"list-inline-item avatar-xs"}"><a${add_attribute("href", null, 0)} class="${"avatar-title bg-soft-warning text-warning fs-15 rounded"}"><i class="${"ri-question-answer-line"}"></i></a></li></ul>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h6 class="${"text-muted text-uppercase fw-semibold mb-3"}">Information
						</h6>
						<p class="${"text-muted mb-4"}">A company incurs fixed and variable costs such as
							the purchase of raw materials, salaries and
							overhead, as explained by AccountingTools, Inc.
							Business owners have the discretion to determine the
							actions.
						</p>
						<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, { class: "table table-borderless mb-0" }, {}, {
                        default: () => {
                          return `<tbody><tr><td class="${"fw-medium"}">Industry Type</td>
										<td>Chemical Industries</td></tr>
									<tr><td class="${"fw-medium"}">Location</td>
										<td>Damascus, Syria</td></tr>
									<tr><td class="${"fw-medium"}">Employee</td>
										<td>10-50</td></tr>
									<tr><td class="${"fw-medium"}">Rating</td>
										<td>4.0 <i class="${"ri-star-fill text-warning align-bottom"}"></i></td></tr>
									<tr><td class="${"fw-medium"}">Website</td>
										<td><a${add_attribute("href", null, 0)} class="${"link-primary text-decoration-underline"}">www.syntycesolution.com</a></td></tr>
									<tr><td class="${"fw-medium"}">Contact Email</td>
										<td>info@syntycesolution.com</td></tr>
									<tr><td class="${"fw-medium"}">Since</td>
										<td>1995</td></tr></tbody>`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}
				`;
            }
          })}
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_crm_companies as default };
