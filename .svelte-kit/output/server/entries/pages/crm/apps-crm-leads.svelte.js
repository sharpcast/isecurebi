import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { C as CDeleteModal } from "../../../chunks/CDeleteModal-5ffe0ce6.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { M as MOCK_DATA } from "../../../chunks/crm-9d118fb5.js";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { html } from "gridjs";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import CompanyAction from "./CompanyAction.svelte.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import CrmFilter from "./CrmFilter.svelte.js";
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
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/Link-71b36253.js";
import "../../../chunks/Form-51a4628d.js";
import "../../../chunks/Offcanvas-493a27d8.js";
import "../../../chunks/Select-6990402e.js";
const Apps_crm_leads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let filteropen = false;
  let deleteModal = false;
  const data = MOCK_DATA.leads;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    { id: "name", name: "Name" },
    { id: "company", name: "Company" },
    { id: "score", name: "Leads Score" },
    { id: "phone", name: "Phone No" },
    { id: "location", name: "Location" },
    { id: "date", name: "Create Date" },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: CompanyAction }
      }
    }
  ];
  const setDeleteModal = (status) => {
    deleteModal = status;
  };
  const setIsInfoDetails = (status) => {
    filteropen = status;
  };
  const toggle = () => open = !open;
  return `${$$result.head += `${$$result.title = `<title>Leads | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Leads", pageTitle: "CRM" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "leadsList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "g-4 align-items-center" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 3 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search",
                                placeholder: "Search for..."
                              }, {}, {})}
									<i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}
							<div class="${"col-sm-auto ms-auto"}"><div class="${"hstack gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                            class: "btn btn-soft-danger",
                            onClick: "deleteMultiple()"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-2-line"}"></i>`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { type: "button", class: "btn btn-info" }, {}, {
                            default: () => {
                              return `<i class="${"ri-filter-3-line align-bottom me-1"}"></i> Fliters`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, {
                            type: "button",
                            class: "btn btn-success add-btn"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add Leads`;
                            }
                          })}
									${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                class: "btn btn-soft-info btn-icon fs-14",
                                color: "",
                                id: "dropdownMenuButton1"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-settings-4-line"}"></i>`;
                                }
                              })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `Copy`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `Move to pipline`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `Add to exceptions`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `Switch to common form view`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                                    default: () => {
                                      return `Reset form view to default`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div class="${"table-responsive table-card gridjs-border-none"}">${MOCK_DATA.leads.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        className: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}` : `<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
											<h5 class="${"mt-2"}">Sorry! No Result Found
											</h5>
											<p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+
												leads We did not find any leads
												for you search.
											</p></div></div>`}</div></div>
						${validate_component(Modal, "Modal").$$render($$result, { id: "showModal", isOpen: open, toggle }, {}, {
                        default: () => {
                          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle, class: "bg-light p-3" }, {}, {
                            default: () => {
                              return `Add Leads`;
                            }
                          })}
							<form action="${""}">${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "id-field" }, {}, {})}
									${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                default: () => {
                                  return `<div class="${"col-lg-12"}"><div>${validate_component(Label, "Label").$$render($$result, { for: "name-field", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Name`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "customername-field",
                                    class: "form-control",
                                    placeholder: "Enter Name",
                                    required: true
                                  }, {}, {})}</div></div>
										
										<div class="${"col-lg-12"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                    for: "company_name-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Company Name`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "email",
                                    id: "company_name-field",
                                    class: "form-control",
                                    placeholder: "Enter company name",
                                    required: true
                                  }, {}, {})}</div></div>
										
										<div class="${"col-lg-6"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                    for: "leads_score-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Leads Score`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "leads_score-field",
                                    class: "form-control",
                                    placeholder: "Enter lead score",
                                    required: true
                                  }, {}, {})}</div></div>
										
										<div class="${"col-lg-6"}"><div>${validate_component(Label, "Label").$$render($$result, { for: "phone-field", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Phone`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "phone-field",
                                    class: "form-control",
                                    placeholder: "Enter phone no",
                                    required: true
                                  }, {}, {})}</div></div>
										
										<div class="${"col-lg-12"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                    for: "location-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Location`;
                                    }
                                  })}
												${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "location-field",
                                    class: "form-control",
                                    placeholder: "Enter location",
                                    required: true
                                  }, {}, {})}</div></div>
										
										<div class="${"col-lg-12"}"><div>${validate_component(Label, "Label").$$render($$result, { for: "date-field", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Created Date`;
                                    }
                                  })}
												${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    id: "datepicker-publish-input",
                                    placeholder: "Select a date",
                                    items: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      mode: "multiple",
                                      dateFormat: "d.m.y"
                                    }
                                  }, {}, {})}</div></div>
										`;
                                }
                              })}
									`;
                            }
                          })}
								<div class="${"modal-footer"}"><div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, {
                            type: "button",
                            class: "btn btn-light",
                            "data-bs-dismiss": "modal"
                          }, {}, {
                            default: () => {
                              return `Close`;
                            }
                          })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", id: "add-btn" }, {}, {
                            default: () => {
                              return `Add leads`;
                            }
                          })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", id: "edit-btn" }, {}, {
                            default: () => {
                              return `Update`;
                            }
                          })}</div></div></form>`;
                        }
                      })}
						

						${validate_component(CDeleteModal, "DeleteModal").$$render($$result, {
                        show: deleteModal,
                        onCloseClick: () => setDeleteModal(false)
                      }, {}, {})}

						${validate_component(CrmFilter, "CrmFilter").$$render($$result, {
                        show: filteropen,
                        onCloseClick: () => setIsInfoDetails(false)
                      }, {}, {})}

						`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_crm_leads as default };
