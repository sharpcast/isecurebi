import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Table } from "../../../chunks/Table-b6431bfe.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const TimeTracking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timeTraking = [
    {
      value: "Select Task board",
      label: "Select Task board"
    },
    { value: "Unassigned", label: "Unassigned" },
    { value: "To Do", label: "To Do" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "In Reviews", label: "In Reviews" },
    { value: "Completed", label: "Completed" }
  ];
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center" }, {}, {
        default: () => {
          return `<h6 class="${"card-title mb-3 flex-grow-1 text-start"}">Time Tracking</h6>
		<div class="${"mb-2"}"><lord-icon src="${"//cdn.lordicon.com/kbtmbyzy.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#02a8b5"}" style="${"width:90px;height:90px"}"></lord-icon></div>
		<h3 class="${"mb-1"}">9 hrs 13 min</h3>
		<h5 class="${"fs-14 mb-4"}">Profile Page Satructure</h5>
		<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "btn-sm" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-circle-line align-bottom me-1"}"></i> Stop`;
            }
          })}
			${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-sm" }, {}, {
            default: () => {
              return `<i class="${"ri-play-circle-line align-bottom me-1"}"></i> Start`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}
${validate_component(Card, "Card").$$render($$result, { class: "mb-3" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"mb-4 select-single"}">${validate_component(Select, "Select").$$render($$result, {
            class: "form-control",
            name: "choices-single-default",
            items: timeTraking
          }, {}, {})}</div>
		<div class="${"table-card"}">${validate_component(Table, "Table").$$render($$result, { class: "mb-0" }, {}, {
            default: () => {
              return `<tbody><tr><td class="${"fw-medium"}">Tasks No</td>
						<td>#VLZ456</td></tr>
					<tr><td class="${"fw-medium"}">Tasks Title</td>
						<td>Profile Page Satructure</td></tr>
					<tr><td class="${"fw-medium"}">Project Name</td>
						<td>Velzon - Admin Dashboard</td></tr>
					<tr><td class="${"fw-medium"}">Priority</td>
						<td><span class="${"badge badge-soft-danger"}">High</span></td></tr>
					<tr><td class="${"fw-medium"}">Status</td>
						<td><span class="${"badge badge-soft-secondary"}">Inprogress</span></td></tr>
					<tr><td class="${"fw-medium"}">Due Date</td>
						<td>05 Jan, 2022</td></tr></tbody>`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}
${validate_component(Card, "Card").$$render($$result, { class: "mb-3" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex mb-3"}"><h6 class="${"card-title mb-0 flex-grow-1"}">Assigned To</h6>
			<div class="${"flex-shrink-0"}">${validate_component(Button, "Button").$$render($$result, {
            color: "",
            class: "btn btn-soft-danger btn-sm"
          }, {}, {
            default: () => {
              return `<i class="${"ri-share-line me-1 align-bottom"}"></i> Assigned Member`;
            }
          })}</div></div>
		<ul class="${"list-unstyled vstack gap-3 mb-0"}"><li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
            default: () => {
              return `Tonya Noble`;
            }
          })}</h6>
						<p class="${"text-muted mb-0"}">Full Stack Developer</p></div>
					<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}</div></div></li>
			<li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
            default: () => {
              return `Thomas Taylor`;
            }
          })}</h6>
						<p class="${"text-muted mb-0"}">UI/UX Designer</p></div>
					<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}</div></div></li>
			<li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
            default: () => {
              return `Nancy Martino`;
            }
          })}</h6>
						<p class="${"text-muted mb-0"}">Web Designer</p></div>
					<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-eye-fill text-muted me-2 align-bottom"}"></i>View`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-star-fill text-muted me-2 align-bottom"}"></i>Favourite`;
                    }
                  })}</div>
								<div>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-fill text-muted me-2 align-bottom"}"></i>Delete`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}</div></div></li></ul>`;
        }
      })}`;
    }
  })}
${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"card-title mb-3"}">Attachments</h5>
		<div class="${"vstack gap-2"}"><div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "text-body text-truncate d-block"
          }, {}, {
            default: () => {
              return `App pages.zip`;
            }
          })}</h5>
						<div>2.2MB</div></div>
					<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
            color: "",
            class: "btn btn-icon text-muted btn-sm fs-18"
          }, {}, {
            default: () => {
              return `<i class="${"ri-download-2-line"}"></i>`;
            }
          })}
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                    }
                  })}</li>
									<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                    }
                  })}</li>`;
                }
              })}`;
            }
          })}</div></div></div></div>

			<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-file-ppt-2-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "text-body text-truncate d-block"
          }, {}, {
            default: () => {
              return `Velzon admin.ppt`;
            }
          })}</h5>
						<div>2.4MB</div></div>
					<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
            color: "",
            class: "btn btn-icon text-muted btn-sm fs-18"
          }, {}, {
            default: () => {
              return `<i class="${"ri-download-2-line"}"></i>`;
            }
          })}
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                    }
                  })}</li>
									<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                    }
                  })}</li>`;
                }
              })}`;
            }
          })}</div></div></div></div>

			<div class="${"border rounded border-dashed p-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-13 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "text-body text-truncate d-block"
          }, {}, {
            default: () => {
              return `Images.zip`;
            }
          })}</h5>
						<div>1.2MB</div></div>
					<div class="${"flex-shrink-0 ms-2"}"><div class="${"d-flex gap-1"}">${validate_component(Button, "Button").$$render($$result, {
            color: "",
            class: "btn btn-icon text-muted btn-sm fs-18"
          }, {}, {
            default: () => {
              return `<i class="${"ri-download-2-line"}"></i>`;
            }
          })}
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
                color: ""
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-fill"}"></i>`;
                }
              })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-pencil-fill align-bottom me-2 text-muted"}"></i> Rename`;
                    }
                  })}</li>
									<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                    }
                  })}</li>`;
                }
              })}`;
            }
          })}</div></div></div></div>
			<div class="${"mt-2 text-center"}">${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
            default: () => {
              return `View more`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}`;
});
export { TimeTracking as default };
