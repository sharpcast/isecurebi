import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import FileManagerCharts from "./FileManagerCharts.svelte.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
const DeleteModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let { onCloseClick } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.onCloseClick === void 0 && $$bindings.onCloseClick && onCloseClick !== void 0)
    $$bindings.onCloseClick(onCloseClick);
  return `${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: show,
    toggle: onCloseClick,
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "py-3 px-5" }, {}, {
        default: () => {
          return `<div class="${"mt-2 text-center"}"><lord-icon src="${"https://cdn.lordicon.com/gsqxdxog.json"}" trigger="${"loop"}" colors="${"primary:#f7b84b,secondary:#f06548"}" style="${"width: 100px; height: 100px"}"></lord-icon>
        <div class="${"mt-4 pt-2 fs-15 mx-4 mx-sm-5"}"><h4>Are you sure ?</h4>
          <p class="${"text-muted mx-4 mb-0"}">Are you sure you want to remove this record ?
          </p></div></div>
      <div class="${"d-flex gap-2 justify-content-center mt-4 mb-2"}"><button type="${"button"}" class="${"btn w-sm btn-light"}" data-bs-dismiss="${"modal"}"${add_attribute("onclick", onCloseClick, 0)}>Close
        </button>
        <button type="${"button"}" class="${"btn w-sm btn-danger "}" id="${"delete-record"}"${add_attribute("onclick", onCloseClick, 0)}>Yes, Delete It!
        </button></div>`;
        }
      })}`;
    }
  })}`;
});
const recentFile = [
  {
    id: 1,
    icon: "ri-gallery-fill",
    iconClass: "success",
    fileName: "logo-dark.png",
    fileType: "Media",
    fileItem: "01",
    size: "1.3 MB",
    createDate: "24 May, 2022"
  },
  {
    id: 2,
    icon: "ri-file-pdf-fill",
    iconClass: "danger",
    fileName: "velzon-invoice.pdf",
    fileType: "Documents",
    fileItem: "01",
    size: "1.1 MB",
    createDate: "05 May, 2022"
  },
  {
    id: 3,
    icon: "ri-folder-2-fill",
    iconClass: "warning",
    fileName: "Velzon React",
    fileType: "Media",
    fileItem: "367",
    size: "934 MB",
    createDate: "28 Apr, 2022"
  },
  {
    id: 4,
    icon: "ri-file-text-fill",
    iconClass: "secondary",
    fileName: "html.docx",
    fileType: "Documents",
    fileItem: "01",
    size: "0.3 KB",
    createDate: "19 Apr, 2022"
  },
  {
    id: 5,
    icon: "ri-gallery-fill",
    iconClass: "success",
    fileName: "default.jpg",
    fileType: "Media",
    fileItem: "01",
    size: "1.7 MB",
    createDate: "06 Apr, 2022"
  }
];
const folderList = [
  { id: 1, folderName: "Projects", folderFile: "349", size: "4.10" },
  { id: 2, folderName: "Documents", folderFile: "2349", size: "27.01" },
  { id: 3, folderName: "Media", folderFile: "12480", size: "20.87" },
  { id: 4, folderName: "Velzon v1.7.0", folderFile: "180", size: "478.65" }
];
const MOCK_DATA = {
  recentFile,
  folderList
};
const Filemanager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let deleteModal = false;
  const setDeleteModal = (status) => {
    deleteModal = status;
  };
  var sidebarData = [];
  return `${$$result.head += `${$$result.title = `<title>File Manager | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(DeleteModal, "DeleteModal").$$render($$result, {
    show: deleteModal,
    onCloseClick: () => setDeleteModal(false)
  }, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1"}"><div class="${"file-manager-sidebar"}"><div class="${"p-3 d-flex flex-column h-100"}"><div class="${"mb-3"}"><h5 class="${"mb-0 fw-semibold"}">My Drive</h5></div>
                    <div class="${"search-box"}"><input type="${"text"}" class="${"form-control bg-light border-light"}" placeholder="${"Search here..."}">
                        <i class="${"ri-search-2-line search-icon"}"></i></div>
                    <div class="${"mt-3 mx-n4 px-4 file-menu-sidebar-scroll"}" data-simplebar><ul class="${"list-unstyled file-manager-menu"}"><li><a data-bs-toggle="${"collapse"}" href="${"#collapseExample"}" role="${"button"}" aria-expanded="${"true"}" aria-controls="${"collapseExample"}"><i class="${"ri-folder-2-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">My Drive</span></a>
                                <div class="${"collapse show"}" id="${"collapseExample"}"><ul class="${"sub-menu list-unstyled"}"><li><a href="${"#!"}">Assets</a></li>
                                        <li><a href="${"#!"}">Marketing</a></li>
                                        <li><a href="${"#!"}">Personal</a></li>
                                        <li><a href="${"#!"}">Projects</a></li>
                                        <li><a href="${"#!"}">Templates</a></li></ul></div></li>
                            <li><a href="${"#!"}"><i class="${"ri-file-list-2-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">Documents</span></a></li>
                            <li><a href="${"#!"}"><i class="${"ri-image-2-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">Media</span></a></li>
                            <li><a href="${"#!"}"><i class="${"ri-history-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">Recents</span></a></li>
                            <li><a href="${"#!"}"><i class="${"ri-star-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">Important</span></a></li>
                            <li><a href="${"#!"}"><i class="${"ri-delete-bin-line align-bottom me-2"}"></i> <span class="${"file-list-link"}">Deleted</span></a></li></ul></div>

                    <div class="${"mt-auto"}"><h6 class="${"fs-11 text-muted text-uppercase mb-3"}">Storage Status</h6>
                        <div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-database-2-line fs-17"}"></i></div>
                            <div class="${"flex-grow-1 ms-3 overflow-hidden"}"><div class="${"progress mb-2 progress-sm"}"><div class="${"progress-bar bg-success"}" role="${"progressbar"}" style="${"width: 25%"}" aria-valuenow="${"25"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div></div>
                                <span class="${"text-muted fs-12 d-block text-truncate"}"><b>47.52</b>GB used of <b>119</b>GB</span></div></div></div></div></div>
            <div class="${"file-manager-content w-100 p-3 py-0"}"><div class="${"mx-n3 pt-4 px-4 file-manager-content-scroll"}" data-simplebar><div id="${"folder-list"}" class="${"mb-2"}">${validate_component(Row, "Row").$$render($$result, {
        class: "justify-content-beetwen g-2 mb-3"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2 d-block d-lg-none"}"><button type="${"button"}" class="${"btn btn-soft-success btn-icon btn-sm fs-16 file-menu-btn"}"><i class="${"ri-menu-2-fill align-bottom"}"></i></button></div>
                                    <div class="${"flex-grow-1"}"><h5 class="${"fs-16 mb-0"}">Folders</h5></div></div>`;
            }
          })}
                            ${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
            default: () => {
              return `<div class="${"d-flex gap-2 align-items-start mb-4"}"><select class="${"form-control"}" name="${"choices-single-default"}" id="${"file-type"}"><option value="${""}">File Type</option><option value="${"All"}" defaultvalue>All</option><option value="${"Video"}">Video</option><option value="${"Images"}">Images</option><option value="${"Music"}">Music</option><option value="${"Documents"}">Documents</option></select>

                                    <button class="${"btn btn-success w-sm create-folder-modal flex-shrink-0"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Create Folders</button></div>`;
            }
          })}`;
        }
      })}

                        ${validate_component(Row, "Row").$$render($$result, { id: "folderlist-data" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.folderList, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, class: "col-6 folder-card" }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {
                  class: "bg-light shadow-none",
                  id: "folder-" + item.id
                }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex mb-1"}"><div class="${"form-check form-check-danger mb-3 fs-15 flex-grow-1"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}"${add_attribute("id", "folderlistCheckbox_" + item.id, 0)}>
                                                    ${validate_component(Label, "Label").$$render($$result, {
                          class: "form-check-label",
                          htmlfor: "folderlistCheckbox_" + item.id
                        }, {}, {})}</div>

                                                ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                              tag: "button",
                              class: "btn btn-ghost-primary btn-icon btn-sm dropdown p-0",
                              color: ""
                            }, {}, {
                              default: () => {
                                return `<i class="${"ri-more-2-fill fs-16 align-bottom"}"></i>
                                                    `;
                              }
                            })}
                                                    ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                              default: () => {
                                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "view-item-btn" }, {}, {
                                  default: () => {
                                    return `Open`;
                                  }
                                })}
                                                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "edit-folder-list" }, {}, {
                                  default: () => {
                                    return `Rename`;
                                  }
                                })}
                                                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Delete`;
                                  }
                                })}
                                                    `;
                              }
                            })}
                                                `;
                          }
                        })}</div>

                                            <div class="${"text-center"}"><div class="${"mb-2"}"><i class="${"ri-folder-2-fill align-bottom text-warning display-5"}"></i></div>
                                                <h6 class="${"fs-15 folder-name"}">${escape(item.folderName)}</h6></div>
                                            <div class="${"hstack mt-4 text-muted"}"><span class="${"me-auto"}"><b>${escape(item.folderFile)}</b> Files</span>
                                                <span><b>${escape(item.size)}</b>GB</span></div>
                                        `;
                      }
                    })}
                                    `;
                  }
                })}
                                `;
              }
            })}`;
          })}`;
        }
      })}</div>
                    <div><div class="${"d-flex align-items-center mb-3"}"><h5 class="${"flex-grow-1 fs-16 mb-0"}" id="${"filetype-title"}">Recent File</h5>
                            <div class="${"flex-shrink-0"}"><button class="${"btn btn-success createFile-modal"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Create File</button></div></div>
                        <div class="${"table-responsive"}"><table class="${"table align-middle table-nowrap mb-0"}"><thead class="${"table-active"}"><tr><th scope="${"col"}">Name</th>
                                        <th scope="${"col"}">File Item</th>
                                        <th scope="${"col"}">File Size</th>
                                        <th scope="${"col"}">Recent Date</th>
                                        <th scope="${"col"}" class="${"text-center"}">Actions</th></tr></thead>
                                <tbody id="${"file-list"}">${each(MOCK_DATA.recentFile, (item) => {
        return `<tr><td><input class="${"form-control filelist-id"}" type="${"hidden"}" value="${"1"}" id="${"filelist-1"}">
                                                <div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 fs-17 me-2 filelist-icon"}"><i${add_attribute("class", item.icon + " text-" + item.iconClass + " align-bottom", 0)}></i></div>
                                                    <div class="${"flex-grow-1 filelist-name"}">${escape(item.fileName)}</div>
                                                    <div class="${"d-none filelist-type"}">${escape(item.fileType)}</div>
                                                </div></td>
                                            <td>${escape(item.fileItem)}</td>
                                            <td class="${"filelist-size"}">${escape(item.size)}</td>
                                            <td class="${"filelist-create"}">${escape(item.createDate)}</td>
                                            <td><div class="${"d-flex gap-3 justify-content-center"}"><button type="${"button"}" class="${"btn btn-ghost-primary btn-icon btn-sm favourite-btn"}"><i class="${"ri-star-fill fs-13 align-bottom"}"></i></button>
                                                    ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
              tag: "button",
              class: "btn btn-light btn-icon btn-sm dropdown",
              id: "dropdownMenuButton"
            }, {}, {
              default: () => {
                return `<i class="${"ri-more-fill align-bottom"}"></i>
                                                        `;
              }
            })}
                                                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "viewfile-list" }, {}, {
                  default: () => {
                    return `View`;
                  }
                })}
                                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "edit-list" }, {}, {
                  default: () => {
                    return `Rename`;
                  }
                })}
                                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "remove-list" }, {}, {
                  default: () => {
                    return `Delete`;
                  }
                })}
                                                        `;
              }
            })}
                                                    `;
          }
        })}
                                                </div></td>
                                        </tr>`;
      })}</tbody></table></div>

                        <ul id="${"pagination"}" class="${"pagination pagination-lg"}"></ul>

                        <div class="${"align-items-center mt-2 row g-3 text-center text-sm-start"}"><div class="${"col-sm"}"><div class="${"text-muted"}">Showing<span class="${"fw-semibold"}">4</span> of <span class="${"fw-semibold"}">125</span> Results
                                </div></div>
                            <div class="${"col-sm-auto"}"><ul class="${"pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0"}"><li class="${"page-item disabled"}">${validate_component(Link, "Link").$$render($$result, { href: "!#", class: "page-link" }, {}, {
        default: () => {
          return `\u2190`;
        }
      })}</li>
                                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "!#", class: "page-link" }, {}, {
        default: () => {
          return `1`;
        }
      })}</li>
                                    <li class="${"page-item active"}">${validate_component(Link, "Link").$$render($$result, { href: "!#", class: "page-link" }, {}, {
        default: () => {
          return `2`;
        }
      })}</li>
                                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "!#", class: "page-link" }, {}, {
        default: () => {
          return `3`;
        }
      })}</li>
                                    <li class="${"page-item"}">${validate_component(Link, "Link").$$render($$result, { href: "!#", class: "page-link" }, {}, {
        default: () => {
          return `\u2192`;
        }
      })}</li></ul></div></div></div></div></div>
            <div class="${"file-manager-detail-content p-3 py-0"}"><div class="${"mx-n3 pt-3 px-3 file-detail-content-scroll"}" data-simplebar><div id="${"folder-overview"}"><div class="${"d-flex align-items-center pb-3 border-bottom border-bottom-dashed"}"><h5 class="${"flex-grow-1 fw-semibold mb-0"}">Overview</h5>
                            <div><button type="${"button"}" class="${"btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview"}"><i class="${"ri-close-fill align-bottom"}"></i></button></div></div>
                        ${validate_component(FileManagerCharts, "SimpleDonutCharts").$$render($$result, {
        dataColors: ["--vz-info", "--vz-danger", "--vz-primary", "--vz-success"],
        class: "apex-charts mt-3",
        dir: "ltr"
      }, {}, {})}
                        <div class="${"mt-4"}"><ul class="${"list-unstyled vstack gap-4"}"><li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded bg-soft-secondary text-secondary"}"><i class="${"ri-file-text-line fs-17"}"></i></div></div></div>
                                        <div class="${"flex-grow-1 ms-3"}"><h5 class="${"mb-1 fs-15"}">Documents</h5>
                                            <p class="${"mb-0 fs-12 text-muted"}">2348 files</p></div>
                                        <b>27.01 GB</b></div></li>
                                <li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded bg-soft-success text-success"}"><i class="${"ri-gallery-line fs-17"}"></i></div></div></div>
                                        <div class="${"flex-grow-1 ms-3"}"><h5 class="${"mb-1 fs-15"}">Media</h5>
                                            <p class="${"mb-0 fs-12 text-muted"}">12480 files</p></div>
                                        <b>20.87 GB</b></div></li>
                                <li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded bg-soft-warning text-warning"}"><i class="${"ri-folder-2-line fs-17"}"></i></div></div></div>
                                        <div class="${"flex-grow-1 ms-3"}"><h5 class="${"mb-1 fs-15"}">Projects</h5>
                                            <p class="${"mb-0 fs-12 text-muted"}">349 files</p></div>
                                        <b>4.10 GB</b></div></li>
                                <li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title rounded bg-soft-primary text-primary"}"><i class="${"ri-error-warning-line fs-17"}"></i></div></div></div>
                                        <div class="${"flex-grow-1 ms-3"}"><h5 class="${"mb-1 fs-15"}">Others</h5>
                                            <p class="${"mb-0 fs-12 text-muted"}">9873 files</p></div>
                                        <b>33.54 GB</b></div></li></ul></div>
                        <div class="${"pb-3 mt-auto"}"><div class="${"alert alert-danger d-flex align-items-center mb-0"}"><div class="${"flex-shrink-0"}"><i class="${"ri-cloud-line text-danger align-bottom display-5"}"></i></div>
                                <div class="${"flex-grow-1 ms-3"}"><h5 class="${"text-danger fs-14"}">Upgrade to Pro</h5>
                                    <p class="${"text-muted mb-2"}">Get more space for your...</p>
                                    <button class="${"btn btn-sm btn-danger"}"><i class="${"ri-upload-cloud-line align-bottom"}"></i> Upgrade Now</button></div></div></div></div>

                    <div id="${"file-overview"}" class="${"h-100"}"><div class="${"d-flex h-100 flex-column"}"><div class="${"d-flex align-items-center pb-3 border-bottom border-bottom-dashed mb-3 gap-2"}"><h5 class="${"flex-grow-1 fw-semibold mb-0"}">File Preview</h5>
                                <div><button type="${"button"}" class="${"btn btn-ghost-primary btn-icon btn-sm fs-16 favourite-btn"}"><i class="${"ri-star-fill align-bottom"}"></i></button>
                                    <button type="${"button"}" class="${"btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview"}"><i class="${"ri-close-fill align-bottom"}"></i></button></div></div>

                            <div class="${"pb-3 border-bottom border-bottom-dashed mb-3"}"><div class="${"file-details-box bg-light p-3 text-center rounded-3 border border-light mb-3"}"><div class="${"display-4 file-icon"}"><i${add_attribute("class", sidebarData.icon + " text-" + sidebarData.iconClass, 0)}></i></div></div>
                                <button type="${"button"}" class="${"btn btn-icon btn-sm btn-ghost-success float-end fs-16"}"><i class="${"ri-share-forward-line"}"></i></button>
                                <h5 class="${"fs-16 mb-1 file-name"}">${escape(sidebarData.fileName)}</h5>
                                <p class="${"text-muted mb-0 fs-12"}"><span class="${"file-size"}">${escape(sidebarData.size)}</span>, <span class="${"create-date"}">${escape(sidebarData.createDate)}</span></p></div>
                            <div><h5 class="${"fs-12 text-uppercase text-muted mb-3"}">File Description :</h5>

                                <div class="${"table-responsive"}"><table class="${"table table-borderless table-nowrap table-sm"}"><tbody><tr><th scope="${"row"}" style="${"width: 35%"}">File Name :</th>
                                                <td class="${"file-name"}">${escape(sidebarData.fileName)}</td></tr>
                                            <tr><th scope="${"row"}">File Type :</th>
                                                <td class="${"file-type"}">${escape(sidebarData.fileType)}</td></tr>
                                            <tr><th scope="${"row"}">Size :</th>
                                                <td class="${"file-size"}">${escape(sidebarData.size)}</td></tr>
                                            <tr><th scope="${"row"}">Created :</th>
                                                <td class="${"create-date"}">${escape(sidebarData.createDate)}</td></tr>
                                            <tr><th scope="${"row"}">Path :</th>
                                                <td class="${"file-path"}"><div class="${"user-select-all text-truncate"}">*:\\projects\\src\\assets\\images</div></td></tr></tbody></table></div>

                                <div><h5 class="${"fs-12 text-uppercase text-muted mb-3"}">Share Information:</h5>
                                    <div class="${"table-responsive"}"><table class="${"table table-borderless table-nowrap table-sm"}"><tbody><tr><th scope="${"row"}" style="${"width: 35%"}">Share Name :</th>
                                                    <td class="${"share-name"}">\\\\*\\Projects</td></tr>
                                                <tr><th scope="${"row"}">Share Path :</th>
                                                    <td class="${"share-path"}">velzon:\\Documents\\</td></tr></tbody></table></div></div></div>

                            <div class="${"mt-auto border-top border-top-dashed py-3"}"><div class="${"hstack gap-2"}"><button type="${"button"}" class="${"btn btn-soft-primary w-100"}"><i class="${"ri-download-2-line align-bottom me-1"}"></i> Download</button>
                                    <button type="${"button"}" class="${"btn btn-soft-danger w-100 remove-file-overview"}"><i class="${"ri-close-fill align-bottom me-1"}"></i> Delete</button></div></div></div></div></div></div></div>`;
    }
  })}</div>`;
});
export { Filemanager as default };
