import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { D as Dropzone } from "../../../chunks/Dropzone-221db829.js";
import { E as Editor } from "../../../chunks/Editor-4e26f76e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "tslib";
const Apps_projects_create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let files = { accepted: [], rejected: [] };
  const SingleOptions = [
    { value: "Ui/Ux", label: "Ui/Ux" },
    { value: "Figma", label: "Figma" },
    { value: "Html", label: "Html" },
    { value: "Css", label: "Css" },
    { value: "Javascript", label: "Javascript" },
    { value: "C#", label: "C#" },
    { value: "Nodejs", label: "Nodejs" }
  ];
  const options = [
    {
      value: "Brent Gonzalez",
      label: "Brent Gonzalez"
    },
    {
      value: "Darline Williams",
      label: "Darline Williams"
    },
    {
      value: "Sylvia Wright",
      label: "Sylvia Wright"
    },
    {
      value: "Ellen Smith",
      label: "Ellen Smith"
    },
    {
      value: "Jeffrey Salazar",
      label: "Jeffrey Salazar"
    },
    {
      value: "Mark Williams",
      label: "Mark Williams"
    }
  ];
  const categoryOption = [
    { value: "Designing", label: "Designing" },
    {
      value: "Development",
      label: "Development"
    }
  ];
  const statusOption = [
    { value: "Inprogress", label: "Inprogress" },
    { value: "Completed", label: "Completed" }
  ];
  const priorityOptions = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Create Project | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Create Project",
        pageTitle: "Projects"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        class: "form-label",
                        for: "project-title-input"
                      }, {}, {
                        default: () => {
                          return `Project Title`;
                        }
                      })}
							<input type="${"text"}" class="${"form-control"}" id="${"project-title-input"}" placeholder="${"Enter project title"}"></div>

						<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        class: "form-label",
                        for: "project-thumbnail-img"
                      }, {}, {
                        default: () => {
                          return `Thumbnail Image`;
                        }
                      })}
							<input class="${"form-control"}" id="${"project-thumbnail-img"}" type="${"file"}" accept="${"image/png, image/gif, image/jpeg"}"></div>

						<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        class: "form-label",
                        for: "project-description-input"
                      }, {}, {
                        default: () => {
                          return `Project Description`;
                        }
                      })}
							${validate_component(Editor, "Editor").$$render($$result, {}, {}, {})}</div>

						${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div class="${"col-lg-4"}"><div class="${"mb-3 mb-lg-0"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-priority-input",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Priority`;
                            }
                          })}
									${validate_component(Select, "Select").$$render($$result, {
                            class: "form-select",
                            id: "choices-priority-input",
                            items: priorityOptions
                          }, {}, {})}</div></div>
							<div class="${"col-lg-4"}"><div class="${"mb-3 mb-lg-0"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "choices-status-input",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Status`;
                            }
                          })}
									${validate_component(Select, "Select").$$render($$result, {
                            class: "form-select",
                            id: "choices-status-input",
                            items: statusOption
                          }, {}, {})}</div></div>
							<div class="${"col-lg-4"}"><div>${validate_component(Label, "Label").$$render($$result, {
                            for: "datepicker-deadline-input",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Deadline`;
                            }
                          })}
									${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                            class: "form-control",
                            options: { dateFormat: "d M, Y" },
                            placeholder: "Selact Date"
                          }, {}, {})}</div></div>`;
                        }
                      })}`;
                    }
                  })}
					`;
                }
              })}
				

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Attached files</h5>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><p class="${"text-muted"}">Add Attached files here.</p>
							${validate_component(Dropzone, "Dropzone").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div><div class="${"dz-message needsclick"}"><div class="${"dz-message needsclick"}"><div class="${"mb-3"}"><i class="${"display-4 text-muted bx bxs-cloud-upload"}"></i></div>
											<h4>Drop files here or click to upload.</h4></div></div></div>`;
                        }
                      })}
							
							<div class="${"dropzone-previews mt-3"}" id="${"file-previews"}">${each(files.accepted, (item) => {
                        return `${validate_component(Card, "Card").$$render($$result, {
                          class: "mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        }, {}, {
                          default: () => {
                            return `<div class="${"p-2"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                              default: () => {
                                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(Link, "Link").$$render($$result, {
                                      href: "#!",
                                      class: "text-muted font-weight-bold"
                                    }, {}, {
                                      default: () => {
                                        return `${escape(item.name)}
													`;
                                      }
                                    })}
													<p class="${"mb-0"}"><strong>${escape(item.size)}</strong></p>
												`;
                                  }
                                })}
											`;
                              }
                            })}</div>
									`;
                          }
                        })}`;
                      })}</div>

							</div>`;
                    }
                  })}`;
                }
              })}
				
				<div class="${"text-end mb-4"}">${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "w-sm" }, {}, {
                default: () => {
                  return `Delete`;
                }
              })}
					${validate_component(Button, "Button").$$render($$result, { color: "secondary", class: "w-sm" }, {}, {
                default: () => {
                  return `Draft`;
                }
              })}
					${validate_component(Button, "Button").$$render($$result, { color: "success", class: "w-sm" }, {}, {
                default: () => {
                  return `Create`;
                }
              })}</div>`;
            }
          })}
			
			${validate_component(Col, "Col").$$render($$result, { class: "col-lg-4" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Privacy</h5>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-privacy-status-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}
							${validate_component(Select, "Select").$$render($$result, {
                        class: "form-select",
                        id: "choices-privacy-status-input",
                        items: options
                      }, {}, {})}</div>`;
                    }
                  })}
					`;
                }
              })}
				

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Tags</h5>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-categories-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Categories`;
                        }
                      })}
							${validate_component(Select, "Select").$$render($$result, {
                        class: "form-select",
                        id: "choices-categories-input",
                        items: categoryOption
                      }, {}, {})}</div>

						<div>${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-text-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Skills`;
                        }
                      })}
							${validate_component(Select, "Select").$$render($$result, {
                        class: "form-control",
                        id: "choices-text-input",
                        isMulti: true,
                        items: SingleOptions
                      }, {}, {})}</div>`;
                    }
                  })}
					`;
                }
              })}
				

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Members</h5>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-lead-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Team Lead`;
                        }
                      })}
							${validate_component(Select, "Select").$$render($$result, { class: "form-select", items: options }, {}, {})}</div>

						<div>${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                        default: () => {
                          return `Team Members`;
                        }
                      })}
							<div class="${"avatar-group"}"><a${add_attribute("href", null, 0)} class="${"avatar-group-item"}" id="${"tooltip-1"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></a>
								${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-1", placement: "top" }, {}, {
                        default: () => {
                          return `Brent Gonzalez`;
                        }
                      })}
								<a${add_attribute("href", null, 0)} class="${"avatar-group-item"}" id="${"tooltip-2"}" title="${"Sylvia Wright"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-secondary"}">S</div></div></a>
								${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-2", placement: "top" }, {}, {
                        default: () => {
                          return `Sylvia Wright`;
                        }
                      })}

								<a${add_attribute("href", null, 0)} class="${"avatar-group-item"}" id="${"tooltip-3"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle img-fluid"}"></div></a>
								${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-3", placement: "top" }, {}, {
                        default: () => {
                          return `Ellen Smith`;
                        }
                      })}

								<a${add_attribute("href", null, 0)} class="${"avatar-group-item"}" id="${"tooltip-4"}"><div class="${"avatar-xs"}" data-bs-toggle="${"modal"}" data-bs-target="${"#inviteMembersModal"}"><div class="${"avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary"}">+
										</div></div></a>
								${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-4", placement: "top" }, {}, {
                        default: () => {
                          return `Add Members`;
                        }
                      })}</div></div>`;
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
    }
  })}</div>`;
});
export { Apps_projects_create as default };
