import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { B as Button } from "../../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../../chunks/ModalBody-69b040c2.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { M as MultiUser } from "../../../../chunks/multi-user-a29f58d1.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { C as CDeleteModal } from "../../../../chunks/CDeleteModal-5ffe0ce6.js";
import { M as MOCK_DATA } from "../../../../chunks/appsJobs-3a727122.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-7-4861de06.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/mail_chimp-a5132002.js";
import "../../../../chunks/bitbucket-59cc1b30.js";
const selectCountry = "Select Options";
const Application = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var option = [
    { label: "Status", value: "Status" },
    { label: "Approved", value: "Approved" },
    { label: "New", value: "New" },
    { label: "Pending", value: "Pending" },
    { label: "Rejected", value: "Rejected" }
  ];
  var option1 = [
    {
      label: "Select Options",
      value: "Select Options"
    },
    { label: "Full Time", value: "Full Time" },
    { label: "Part Time", value: "Part Time" }
  ];
  let deleteModal = false;
  const setDeleteModal = (status) => {
    deleteModal = status;
  };
  var show = false;
  var handleClose = () => show = !show;
  var data = MOCK_DATA.jobApplication;
  const columns = [
    {
      name: "#",
      id: "appid",
      width: "40px",
      formatter: (cell) => html(`<a href="#!" class="fw-medium link-primary">${cell}</a>`)
    },
    {
      id: "company",
      name: "Name",
      formatter: (cell) => html(`<div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                  <img src=${cell[0]} alt="" class="avatar-xxs rounded-circle image_src object-cover">
              </div>
              <div class="flex-grow-1 ms-2">${cell[1]}</div>
          </div>`)
    },
    { id: "designation", name: "Designation" },
    { id: "date", name: "Date" },
    { id: "contacts", name: "Contact" },
    { id: "type", name: "Type" },
    {
      id: "status",
      name: "Status",
      formatter: (cell) => {
        {
          if (cell == "New") {
            return html(`<span class="badge badge-soft-info text-uppercase">${cell}</span>`);
          } else if (cell == "Rejected") {
            return html(`<span class="badge badge-soft-danger text-uppercase">${cell}</span>`);
          } else if (cell == "Pending") {
            return html(`<span class="badge badge-soft-warning text-uppercase">${cell}</span>`);
          } else if (cell == "Approved") {
            return html(`<span class="badge badge-soft-success text-uppercase">${cell}</span>`);
          } else {
            return null;
          }
        }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Application | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(CDeleteModal, "DeleteModal").$$render($$result, {
    show: deleteModal,
    onCloseClick: () => setDeleteModal(false)
  }, {}, {})}
    ${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Application", pageTitle: "Jobs" }, {}, {})}
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                    default: () => {
                      return `<div class="${"d-md-flex align-items-center"}"><h5 class="${"card-title mb-3 mb-md-0 flex-grow-1"}">Job Application</h5>
                <div class="${"flex-shrink-0"}"><div class="${"d-flex gap-1 flex-wrap"}"><button type="${"button"}" class="${"btn btn-success add-btn"}" data-bs-toggle="${"modal"}" id="${"create-btn"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Create Application</button>
                        <button type="${"button"}" class="${"btn btn-info"}"><i class="${"ri-file-download-line align-bottom me-1"}"></i> Import</button>
                        <button class="${"btn btn-soft-danger"}" id="${"remove-actions"}"><i class="${"ri-delete-bin-2-line"}"></i></button></div></div></div>`;
                    }
                  })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {
                    class: "border border-dashed border-end-0 border-start-0"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { xxl: 5, sm: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control search",
                                    placeholder: "Search for application ID, company, designation status or something..."
                                  }, {}, {})}
                      <i class="${"ri-search-line search-icon"}"></i></div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 6 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                    class: "form-control",
                                    id: "datepicker-publish-input",
                                    placeholder: "Select date",
                                    options: {
                                      altInput: true,
                                      altFormat: "F j, Y",
                                      mode: "multiple",
                                      dateFormat: "d.m.y"
                                    }
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 4 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Select, "Select").$$render($$result, {
                                    items: option,
                                    name: "choices-single-default",
                                    id: "idStatus"
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { xxl: 2, sm: 4 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Select, "Select").$$render($$result, {
                                    items: option1,
                                    name: "choices-single-default",
                                    id: "idType",
                                    value: selectCountry
                                  }, {}, {})}</div>`;
                                }
                              })}
                  ${validate_component(Col, "Col").$$render($$result, { xxl: 1, sm: 4 }, {}, {
                                default: () => {
                                  return `<div>${validate_component(Button, "Button").$$render($$result, {
                                    type: "button",
                                    color: "primary",
                                    class: "btn w-100"
                                  }, {}, {
                                    default: () => {
                                      return `${escape(" ")}
                        <i class="${"ri-equalizer-fill me-1 align-bottom"}"></i>
                        Filters
                      `;
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
            ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                    default: () => {
                      return `<div>${validate_component(Nav, "Nav").$$render($$result, {
                        class: "nav nav-tabs nav-tabs-custom nav-success mb-3",
                        role: "tablist"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                class: "active All py-3",
                                "data-bs-toggle": "tab",
                                id: "All",
                                href: "#!",
                                role: "tab",
                                "aria-selected": "true"
                              }, {}, {
                                default: () => {
                                  return `All Application
                    `;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                class: "py-3 New",
                                "data-bs-toggle": "tab",
                                id: "New",
                                href: "#!",
                                role: "tab",
                                "aria-selected": "false"
                              }, {}, {
                                default: () => {
                                  return `New
                    `;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                class: "py-3 Pending",
                                "data-bs-toggle": "tab",
                                id: "Pending",
                                href: "#!",
                                role: "tab",
                                "aria-selected": "false"
                              }, {}, {
                                default: () => {
                                  return `Pending${escape(" ")}
                      <span class="${"badge bg-danger align-middle ms-1"}">2
                      </span>`;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                class: "py-3 Approved",
                                "data-bs-toggle": "tab",
                                id: "Approved",
                                href: "#!",
                                role: "tab",
                                "aria-selected": "false"
                              }, {}, {
                                default: () => {
                                  return `Approved
                    `;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                class: "py-3 Rejected",
                                "data-bs-toggle": "tab",
                                id: "Rejected",
                                href: "#!",
                                role: "tab",
                                "aria-selected": "false"
                              }, {}, {
                                default: () => {
                                  return `Rejected
                    `;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
                ${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}</div>
              <div class="${"modal fade"}" id="${"showModal"}" tabindex="${"-1"}" aria-labelledby="${"exampleModalLabel"}" aria-hidden="${"true"}"><div class="${"modal-dialog modal-dialog-centered"}">${validate_component(Modal, "Modal").$$render($$result, {
                        isOpen: show,
                        toggle: handleClose,
                        centered: true,
                        class: "modal-content"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Form, "Form").$$render($$result, { action: "#", autoComplete: "off" }, {}, {
                            default: () => {
                              return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "modal-body" }, {}, {
                                default: () => {
                                  return `${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "id-field" }, {}, {})}

                        <div class="${"mb-3 d-none"}" id="${"modal-id"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "applicationId",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `ID
                          `;
                                    }
                                  })}
                          ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "applicationId",
                                    class: "form-control",
                                    placeholder: "ID",
                                    readOnly: true
                                  }, {}, {})}</div>

                        <div class="${"text-center"}"><div class="${"position-relative d-inline-block"}"><div class="${"position-absolute bottom-0 end-0"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "companylogo-image-input",
                                    class: "mb-0",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "right",
                                    title: "Select Image"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"avatar-xs cursor-pointer"}"><div class="${"avatar-title bg-light border rounded-circle text-muted"}"><i class="${"ri-image-fill"}"></i></div></div>`;
                                    }
                                  })}
                              ${validate_component(Input, "Input").$$render($$result, {
                                    class: "form-control d-none",
                                    id: "companylogo-image-input",
                                    type: "file",
                                    accept: "image/png, image/gif, image/jpeg"
                                  }, {}, {})}</div>
                            <div class="${"avatar-lg p-1"}"><div class="${"avatar-title bg-light rounded-circle"}"><img${add_attribute("src", MultiUser, 0)} id="${"companylogo-img"}" class="${"avatar-md h-auto rounded-circle object-cover"}" alt="${""}"></div></div></div></div>

                        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "company-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Company
                          `;
                                    }
                                  })}
                          ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "company-field",
                                    class: "form-control",
                                    placeholder: "Enter company name",
                                    required: true
                                  }, {}, {})}</div>

                        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "designation-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Designation
                          `;
                                    }
                                  })}
                          ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "designation-field",
                                    class: "form-control",
                                    placeholder: "Enter designation",
                                    required: true
                                  }, {}, {})}</div>

                        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "date-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Apply Date
                          `;
                                    }
                                  })}
                          ${validate_component(Input, "Input").$$render($$result, {
                                    type: "date",
                                    id: "date-field",
                                    class: "form-control",
                                    "data-provider": "flatpickr",
                                    "data-date-format": "d M, Y",
                                    required: true,
                                    placeholder: "Select date"
                                  }, {}, {})}</div>

                        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    htmlFor: "contact-field",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Contacts
                          `;
                                    }
                                  })}
                          ${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    id: "contact-field",
                                    class: "form-control",
                                    placeholder: "Enter contact",
                                    required: true
                                  }, {}, {})}</div>

                        ${validate_component(Row, "Row").$$render($$result, { class: "gy-4 mb-3" }, {}, {
                                    default: () => {
                                      return `<div class="${"col-md-6"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                        htmlFor: "status-input",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Status
                              `;
                                        }
                                      })}
                              <select class="${"form-control"}" data-trigger name="${"status-input"}" id="${"status-input"}"><option value="${""}">Status</option><option value="${"Approved"}">Approved</option><option value="${"New"}">New</option><option value="${"Pending"}">Pending</option><option value="${"Rejected"}">Rejected</option></select></div></div>
                          <div class="${"col-md-6"}"><div>${validate_component(Label, "Label").$$render($$result, {
                                        htmlFor: "type-input",
                                        class: "form-label"
                                      }, {}, {
                                        default: () => {
                                          return `Type
                              `;
                                        }
                                      })}
                              <select class="${"form-control"}" data-trigger name="${"type-input"}" id="${"type-input"}"><option value="${""}">Select Type</option><option value="${"Full Time"}">Full Time</option><option value="${"Part Time"}">Part Time</option></select></div></div>`;
                                    }
                                  })}`;
                                }
                              })}
                      <div class="${"modal-footer"}"><div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, {
                                type: "button",
                                class: "btn btn-light",
                                "data-bs-dismiss": "modal"
                              }, {}, {
                                default: () => {
                                  return `Close
                          `;
                                }
                              })}
                          ${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                type: "submit",
                                id: "add-btn"
                              }, {}, {
                                default: () => {
                                  return `Add
                          `;
                                }
                              })}
                          ${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                type: "button",
                                id: "edit-btn"
                              }, {}, {
                                default: () => {
                                  return `Update
                          `;
                                }
                              })}</div></div>`;
                            }
                          })}`;
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
  })}</div>`;
});
export { Application as default };
