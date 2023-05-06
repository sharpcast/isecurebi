import { c as create_ssr_component, v as validate_component, e as each } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
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
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { M as MOCK_DATA } from "../../../chunks/crm-9d118fb5.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import LeadDiscover from "./leadDiscover.svelte.js";
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
import "../../../chunks/Collapse-6781eb46.js";
import "../../../chunks/Link-71b36253.js";
let sortBy = "Owner";
const Apps_crm_deals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sortbyname = [
    { label: "Owner", value: "Owner" },
    { label: "Company", value: "Company" },
    { label: "Location", value: "Location" }
  ];
  let open = false;
  const toggle = () => open = !open;
  return `${$$result.head += `${$$result.title = `<title>Deals | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Deals", pageTitle: "CRM" }, {}, {})}
		${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                    default: () => {
                      return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control search",
                        placeholder: "Search for deals..."
                      }, {}, {})}
							<i class="${"ri-search-line search-icon"}"></i></div>`;
                    }
                  })}
					<div class="${"col-md-auto ms-auto"}"><div class="${"d-flex hastck gap-2 flex-wrap"}"><div class="${"d-flex align-items-center gap-2"}"><span class="${"text-muted"}">Sort by: </span>
								${validate_component(Select, "Select").$$render($$result, {
                    class: "mb-0",
                    value: sortBy,
                    items: sortbyname,
                    id: "choices-single-default"
                  }, {}, {})}</div>
							<button class="${"btn btn-success"}"><i class="${"ri-add-fill align-bottom me-1"}"></i> Add Deals
							</button>
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        href: "#!",
                        class: "btn-soft-info btn-icon fs-14",
                        tag: "button"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-settings-4-line"}"></i>`;
                        }
                      })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                            default: () => {
                              return `Copy`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                            default: () => {
                              return `Move to pipline`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                            default: () => {
                              return `Add to exceptions`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                            default: () => {
                              return `Switch to common form view
									`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                            default: () => {
                              return `Reset form view to default
									`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.deals, (deal, index) => {
            return `${validate_component(LeadDiscover, "LeadDiscover").$$render($$result, { deal, index }, {}, {})}`;
          })}`;
        }
      })}`;
    }
  })}</div>

${validate_component(Modal, "Modal").$$render($$result, {
    id: "adddeals",
    isOpen: open,
    toggle,
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "bg-light p-3", toggle }, {}, {
        default: () => {
          return `Create Deals`;
        }
      })}
	${validate_component(Form, "Form").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "dealTitle", class: "form-label" }, {}, {
                default: () => {
                  return `Deal Title`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "email",
                class: "form-control",
                id: "dealTitle",
                placeholder: "Enter title"
              }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "dealValue", class: "form-label" }, {}, {
                default: () => {
                  return `Value (USD)`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "dealValue",
                placeholder: "Enter value"
              }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "dealOwner", class: "form-label" }, {}, {
                default: () => {
                  return `Deals Owner`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "dealOwner",
                placeholder: "Enter owner name"
              }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "dueDate", class: "form-label" }, {}, {
                default: () => {
                  return `Due Date`;
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
              }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                for: "contactNumber",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Contact`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "contactNumber",
                placeholder: "Enter contact number"
              }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                for: "contactNumber",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Description`;
                }
              })}
				${validate_component(Input, "Input").$$render($$result, {
                name: "text",
                type: "textarea",
                class: "form-control",
                id: "exampleFormControlTextarea1",
                rows: "3",
                placeholder: "Enter description"
              }, {}, {})}</div>`;
            }
          })}
		${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                default: () => {
                  return `Close`;
                }
              })}
			${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                default: () => {
                  return `<i class="${"ri-save-line align-bottom me-1"}"></i> Save
			`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Apps_crm_deals as default };
