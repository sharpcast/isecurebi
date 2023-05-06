import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar9 } from "../../../chunks/avatar-9-f5d371f4.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
var taskImg = "/_app/assets/task-41429aeb.png";
const todoTaskList = [
  {
    id: 1,
    task: "Added Select2",
    subItem: [
      {
        img: avatar1
      },
      {
        img: avatar3
      }
    ],
    dueDate: "25 Jan, 2022",
    status: "Pending",
    priority: "High"
  },
  {
    id: 2,
    task: "Additional Calendar",
    subItem: [
      {
        img: avatar5
      },
      {
        img: avatar9
      },
      {
        img: avatar10
      }
    ],
    dueDate: "23 Apr, 2022",
    status: "Completed",
    priority: "Medium"
  },
  {
    id: 3,
    task: "Add Dynamic Contact List",
    subItem: [
      {
        img: avatar5
      },
      {
        img: avatar6
      },
      {
        img: avatar7
      },
      {
        img: avatar8
      }
    ],
    dueDate: "24 Apr, 2022",
    status: "Inprogress",
    priority: "Low"
  },
  {
    id: 4,
    task: "Brand Logo design",
    subItem: [
      {
        img: avatar2
      },
      {
        img: avatar10
      },
      {
        img: avatar9
      }
    ],
    dueDate: "25 Apr, 2022",
    status: "New",
    priority: "Medium"
  },
  {
    id: 5,
    task: "Change email option process",
    subItem: [
      {
        img: avatar3
      },
      {
        img: avatar10
      },
      {
        img: avatar9
      }
    ],
    dueDate: "25 Apr, 2022",
    status: "Completed",
    priority: "High"
  },
  {
    id: 6,
    task: "Make a creating an account profile",
    subItem: [
      {
        img: avatar3
      }
    ],
    dueDate: "26 Apr, 2022",
    status: "Completed",
    priority: "Medium"
  },
  {
    id: 7,
    task: "Profile Page Structure",
    subItem: [
      {
        img: avatar4
      },
      {
        img: avatar5
      }
    ],
    dueDate: "27 Apr, 2022",
    status: "New",
    priority: "Low"
  },
  {
    id: 8,
    task: "Datatable with jQuery cdn",
    subItem: [
      {
        img: avatar6
      },
      {
        img: avatar7
      },
      {
        img: avatar8
      }
    ],
    dueDate: "28 Apr, 2022",
    status: "Pending",
    priority: "High"
  },
  {
    id: 9,
    task: "Added File Manager Apps",
    subItem: [
      {
        img: avatar3
      },
      {
        img: avatar4
      },
      {
        img: avatar5
      }
    ],
    dueDate: "29 Apr, 2022",
    status: "Completed",
    priority: "Medium"
  },
  {
    id: 10,
    task: "Added Back to Top button",
    subItem: [
      {
        img: avatar6
      },
      {
        img: avatar7
      }
    ],
    dueDate: "30 Apr, 2022",
    status: "Inprogress",
    priority: "High"
  },
  {
    id: 11,
    task: "Added bdge new style - gradient",
    subItem: [
      {
        img: avatar3
      },
      {
        img: avatar10
      },
      {
        img: avatar9
      }
    ],
    dueDate: "01 May, 2022",
    status: "Inprogress",
    priority: "Medium"
  },
  {
    id: 12,
    task: "Added new tabs styles",
    subItem: [
      {
        img: avatar2
      }
    ],
    dueDate: "01 May, 2022",
    status: "New",
    priority: "Low"
  },
  {
    id: 13,
    task: "Make a creating an account profile",
    subItem: [
      {
        img: avatar5
      },
      {
        img: avatar6
      },
      {
        img: avatar7
      },
      {
        img: avatar8
      }
    ],
    dueDate: "02 May, 2022",
    status: "Completed",
    priority: "Low"
  },
  {
    id: 14,
    task: "Additional Mailbox",
    subItem: [
      {
        img: avatar5
      },
      {
        img: avatar9
      },
      {
        img: avatar10
      }
    ],
    dueDate: "02 Apr, 2022",
    status: "Pending",
    priority: "Medium"
  },
  {
    id: 15,
    task: "Added Email Templates",
    subItem: [
      {
        img: avatar1
      },
      {
        img: avatar3
      }
    ],
    dueDate: "03 Apr, 2022",
    status: "Inprogress",
    priority: "High"
  }
];
const MOCK_DATA = {
  todoTaskList
};
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalTodo = false;
  const toggle = () => modalTodo = !modalTodo;
  const assignee = [
    {
      id: 1,
      img: avatar2,
      name: "James Forbes"
    },
    { id: 2, img: avatar3, name: "John Robles" },
    { id: 3, img: avatar4, name: "Mary Gant" },
    {
      id: 4,
      img: avatar1,
      name: "Curtis Saenz"
    },
    {
      id: 5,
      img: avatar5,
      name: "Virgie Price"
    },
    {
      id: 6,
      img: avatar10,
      name: "Anthony Mills"
    },
    {
      id: 7,
      img: avatar6,
      name: "Marian Angel"
    },
    {
      id: 8,
      img: avatar7,
      name: "Johnnie Walton"
    },
    {
      id: 9,
      img: avatar8,
      name: "Donna Weston"
    },
    {
      id: 10,
      img: avatar9,
      name: "Diego Norris"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>ToDo | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1"}"><div class="${"file-manager-sidebar"}"><div class="${"p-4 d-flex flex-column h-100"}"><div class="${"mb-3"}"><button class="${"btn btn-success w-100"}"><i class="${"ri-add-line align-bottom"}"></i> Add Project</button></div>

                    <div class="${"px-4 mx-n4"}" data-simplebar style="${"height: calc(100vh - 468px);"}"><ul class="${"to-do-menu list-unstyled"}" id="${"projectlist-data"}"><li>${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "nav-link fs-13 active",
        id: "velzonAdmin"
      }, {}, {
        default: () => {
          return `Velzon Admin &amp; Dashboard`;
        }
      })}

                                ${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#velzonAdmin", isOpen: true }, {}, {
        default: () => {
          return `<ul class="${"mb-0 sub-menu list-unstyled ps-3 vstack gap-2 mb-2"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-danger"}"></i> v1.4.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-secondary"}"></i> v1.5.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-info"}"></i> v1.6.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-primary"}"></i> v1.7.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-warning"}"></i> v1.8.0`;
            }
          })}</li></ul>`;
        }
      })}</li>
                            <li>${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "nav-link fs-13",
        id: "projectManagement"
      }, {}, {
        default: () => {
          return `Project Management`;
        }
      })}
                                ${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#projectManagement" }, {}, {
        default: () => {
          return `<ul class="${"mb-0 sub-menu list-unstyled ps-3 vstack gap-2 mb-2"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-danger"}"></i> v2.1.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-secondary"}"></i> v2.2.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-info"}"></i> v2.3.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-primary"}"></i> v2.4.0`;
            }
          })}</li></ul>`;
        }
      })}</li>
                            <li>${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "nav-link fs-13",
        id: "skoteAdmin"
      }, {}, {
        default: () => {
          return `Skote Admin &amp; Dashboard`;
        }
      })}
                                ${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#skoteAdmin" }, {}, {
        default: () => {
          return `<ul class="${"mb-0 sub-menu list-unstyled ps-3 vstack gap-2 mb-2"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-danger"}"></i> v4.1.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-secondary"}"></i> v4.2.0`;
            }
          })}</li></ul>`;
        }
      })}</li>
                            <li>${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "nav-link fs-13",
        id: "ecommerceProject"
      }, {}, {
        default: () => {
          return `Doot - Chat App Template`;
        }
      })}
                                ${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#ecommerceProject" }, {}, {
        default: () => {
          return `<ul class="${"mb-0 sub-menu list-unstyled ps-3 vstack gap-2 mb-2"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-danger"}"></i> v1.0.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-secondary"}"></i> v1.1.0`;
            }
          })}</li>
                                        <li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<i class="${"ri-stop-mini-fill align-middle fs-15 text-info"}"></i> v1.2.0`;
            }
          })}</li></ul>`;
        }
      })}</li></ul></div>


                    <div class="${"mt-auto text-center"}"><img${add_attribute("src", taskImg, 0)} alt="${"Task"}" class="${"img-fluid"}"></div></div></div>
            <div class="${"file-manager-content w-100 p-4 pb-0"}"><div class="${"row mb-4"}"><div class="${"col-auto order-1 d-block d-lg-none"}"><button type="${"button"}" class="${"btn btn-soft-success btn-icon btn-sm fs-16 file-menu-btn"}"><i class="${"ri-menu-2-fill align-bottom"}"></i></button></div>
                    <div class="${"col-sm order-3 order-sm-2 mt-3 mt-sm-0"}"><h5 class="${"fw-semibold mb-0"}">Velzon Admin &amp; Dashboard <span class="${"badge bg-primary align-bottom ms-2"}">v2.0.0</span></h5></div>

                    <div class="${"col-auto order-2 order-sm-3 ms-auto"}"><div class="${"hstack gap-2"}"><div class="${"btn-group"}" role="${"group"}" aria-label="${"Basic example"}"><button class="${"btn btn-icon fw-semibold btn-soft-danger"}"><i class="${"ri-arrow-go-back-line"}"></i></button>
                                <button class="${"btn btn-icon fw-semibold btn-soft-success"}"><i class="${"ri-arrow-go-forward-line"}"></i></button></div></div></div></div>
                <div class="${"p-3 bg-light rounded mb-4"}">${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-auto" }, {}, {
            default: () => {
              return `<select class="${"form-control"}" name="${"choices-select-sortlist"}" id="${"choices-select-sortlist"}"><option value="${""}">Sort</option><option value="${"By ID"}">By ID</option><option value="${"By Name"}">By Name</option></select>`;
            }
          })}
                        ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-auto" }, {}, {
            default: () => {
              return `<select class="${"form-control"}" name="${"choices-select-status"}" id="${"choices-select-status"}"><option value="${""}">All Tasks</option><option value="${"Completed"}">Completed</option><option value="${"Inprogress"}">Inprogress</option><option value="${"Pending"}">Pending</option><option value="${"New"}">New</option></select>`;
            }
          })}
                        ${validate_component(Col, "Col").$$render($$result, { class: "col-lg" }, {}, {
            default: () => {
              return `<div class="${"search-box"}"><input type="${"text"}" id="${"searchTaskList"}" class="${"form-control search"}" placeholder="${"Search task name"}">
                                <i class="${"ri-search-line search-icon"}"></i></div>`;
            }
          })}
                        ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-auto" }, {}, {
            default: () => {
              return `<button class="${"btn btn-primary createTask"}" type="${"button"}"><i class="${"ri-add-fill align-bottom"}"></i> Add Tasks
                            </button>`;
            }
          })}`;
        }
      })}</div>

                <div class="${"todo-content position-relative px-4 mx-n4"}" id="${"todo-content"}">${!MOCK_DATA.todoTaskList ? `<div id="${"elmLoader"}"><div class="${"spinner-border text-primary avatar-sm"}" role="${"status"}"><span class="${"visually-hidden"}">Loading...</span></div></div>` : ``}

                    <div class="${"todo-task"}" id="${"todo-task"}"><div class="${"table-responsive"}"><table class="${"table align-middle position-relative table-nowrap table-nowrap"}"><thead class="${"table-active"}"><tr><th scope="${"col"}">Task Name</th>
                                        <th scope="${"col"}">Assigned</th>
                                        <th scope="${"col"}">Due Date</th>
                                        <th scope="${"col"}">Status</th>
                                        <th scope="${"col"}">Priority</th>
                                        <th scope="${"col"}">Action</th></tr></thead>

                                <tbody id="${"task-list"}">${each(MOCK_DATA.todoTaskList, (item) => {
        return `<tr><td><div class="${"d-flex align-items-start"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"task-handle px-1 bg-light rounded"}">: :
                                                        </div></div>
                                                    <div class="${"flex-grow-1"}"><div class="${"form-check"}"><input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${"13"}"${add_attribute("id", "todo" + item.id, 0)} ${(item.status === "Completed" ? "checked" : "") ? "checked" : ""}>
                                                            ${validate_component(Label, "Label").$$render($$result, {
          class: "form-check-label",
          htmlfor: "todo" + item.id
        }, {}, {
          default: () => {
            return `${escape(item.task)} `;
          }
        })}
                                                        </div></div>
                                                </div></td>
                                            <td><div class="${"avatar-group"}">${each(item.subItem, (item2) => {
          return `${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-group-item" }, {}, {
            default: () => {
              return `<img${add_attribute("src", item2.img, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
                                                        `;
            }
          })}`;
        })}
                                                </div></td>
                                            <td>${escape(item.dueDate)}</td>
                                            <td>${item.status == "New" ? `<span class="${"badge badge-soft-info text-uppercase"}">New</span>` : `${item.status == "Pending" ? `<span class="${"badge badge-soft-warning text-uppercase"}">Pending</span>` : `${item.status == "Inprogress" ? `<span class="${"badge badge-soft-secondary text-uppercase"}">Inprogress</span>` : `${item.status == "Completed" ? `<span class="${"badge badge-soft-success text-uppercase"}">Completed</span>` : `<span class="${"badge badge-soft-success text-uppercase"}">Completed</span>`}`}`}`}</td>
                                            <td>${item.priority == "High" ? `<span class="${"badge bg-danger text-uppercase"}">High</span>` : `${item.priority == "Medium" ? `<span class="${"badge bg-warning text-uppercase"}">Medium</span>` : `${item.priority == "Low" ? `<span class="${"badge bg-success text-uppercase"}">Low</span>` : `<span class="${"badge bg-success text-uppercase"}">Low</span>`}`}`}</td>
                                            <td><div class="${"hstack gap-2"}"><button class="${"btn btn-sm btn-soft-danger remove-list"}"><i class="${"ri-delete-bin-5-fill align-bottom"}"></i></button>
                                                    <button class="${"btn btn-sm btn-soft-info edit-list"}"><i class="${"ri-pencil-fill align-bottom"}"></i></button>
                                                </div></td>
                                        </tr>`;
      })}</tbody></table></div></div>
                    <div class="${"py-4 mt-4 text-center"}" id="${"noresult"}" style="${"display: none"}"><lord-icon src="${"https://cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 72px; height: 72px"}"></lord-icon>
                        <h5 class="${"mt-4"}">Sorry! No Result Found</h5></div></div></div></div>`;
    }
  })}</div>

${validate_component(Modal, "Modal").$$render($$result, {
    id: "createTask",
    isOpen: modalTodo,
    toggle,
    centered: true,
    tabIndex: "-1"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle, class: "p-3 bg-soft-success" }, {}, {
        default: () => {
          return `Create Task `;
        }
      })}
    ${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div id="${"task-error-msg"}" class="${"alert alert-danger py-2"}"></div>
        ${validate_component(Form, "Form").$$render($$result, { id: "creattask-form" }, {}, {
            default: () => {
              return `<input type="${"hidden"}" id="${"taskid-input"}" class="${"form-control"}">
            <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                htmlfor: "task-title-input",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Task Title`;
                }
              })}
                <input type="${"text"}" id="${"task-title-input"}" class="${"form-control"}" placeholder="${"Enter task title"}" name="${"task"}"></div>
            <div class="${"mb-3 position-relative"}">${validate_component(Label, "Label").$$render($$result, {
                htmlfor: "task-assign-input",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Assigned To`;
                }
              })}

                <div class="${"avatar-group justify-content-center"}" id="${"assignee-member"}"></div>
                <div class="${"select-element"}"><button class="${"btn btn-light w-100 d-flex justify-content-between"}" type="${"button"}"><span>Assigned To<b id="${"total-assignee"}" class="${"mx-1"}">0</b>Members</span> <i class="${"mdi mdi-chevron-down"}"></i></button>
                    ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "w-100" }, {}, {
                    default: () => {
                      return `<div data-simplebar style="${"max-height: 141px"}"><ul class="${"list-unstyled mb-0"}">${each(assignee, (item) => {
                        return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
                          class: "d-flex align-items-center",
                          href: "#!"
                        }, {}, {
                          default: () => {
                            return `<div class="${"avatar-xxs flex-shrink-0 me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
                                                <div class="${"flex-grow-1"}">${escape(item.name)}</div>
                                            `;
                          }
                        })}
                                        </li>`;
                      })}</ul></div>`;
                    }
                  })}`;
                }
              })}</div></div>
            ${validate_component(Row, "Row").$$render($$result, { class: "g-4 mb-3" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, {
                        htmlfor: "task-status",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}
                    <select id="${"task-status"}" name="${"taskstatus"}" class="${"form-control"}"><option value="${"New"}">New</option><option value="${"Pending"}">Pending</option><option value="${"Inprogress"}">Inprogress</option><option value="${"Completed"}">Completed</option></select>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, {
                        name: "priority",
                        htmlfor: "priority-field",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Priority`;
                        }
                      })}
                    <select id="${"priority-status"}" name="${"priority"}" class="${"form-control"}"><option value="${"High"}">High</option><option value="${"Medium"}">Medium</option><option value="${"Low"}">Low</option></select>`;
                    }
                  })}`;
                }
              })}
            <div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
                htmlfor: "task-duedate-input",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Due Date:`;
                }
              })}
                ${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                name: "dueDate",
                id: "date-field",
                class: "form-control",
                placeholder: "Due date",
                options: {
                  altInput: true,
                  altFormat: "d M, Y",
                  dateFormat: "d M, Y"
                }
              }, {}, {})}</div>

            <div class="${"hstack gap-2 justify-content-end"}"><button type="${"button"}" class="${"btn btn-ghost-success"}"><i class="${"ri-close-fill align-bottom"}"></i> Close</button>
                <button type="${"submit"}" class="${"btn btn-primary"}" id="${"addNewTodo"}">Add Task</button></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Todo as default };
