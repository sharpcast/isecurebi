import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as Table } from "../../../../chunks/Table-b6431bfe.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const DocumentsTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex align-items-center mb-4"}"><h5 class="${"card-title flex-grow-1"}">Documents</h5></div>
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, {
                    class: "table-borderless align-middle mb-0"
                  }, {}, {
                    default: () => {
                      return `<thead class="${"table-light"}"><tr><th scope="${"col"}">File Name</th>
								<th scope="${"col"}">Type</th>
								<th scope="${"col"}">Size</th>
								<th scope="${"col"}">Upload Date</th>
								<th scope="${"col"}" style="${"width: 120px"}">Action</th></tr></thead>
						<tbody><tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-folder-zip-line"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Artboard-documents.zip`;
                        }
                      })}</h5></div></div></td>
								<td>Zip File</td>
								<td>4.57 MB</td>
								<td>12 Dec 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-danger rounded fs-24"}"><i class="${"ri-file-pdf-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Bank Management System`;
                        }
                      })}</h5></div></div></td>
								<td>PDF File</td>
								<td>8.89 MB</td>
								<td>24 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-secondary rounded fs-24"}"><i class="${"ri-video-line"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Tour-video.mp4`;
                        }
                      })}</h5></div></div></td>
								<td>MP4 File</td>
								<td>14.62 MB</td>
								<td>19 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-success rounded fs-24"}"><i class="${"ri-file-excel-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Account-statement.xsl`;
                        }
                      })}</h5></div></div></td>
								<td>XSL File</td>
								<td>2.38 KB</td>
								<td>14 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-warning rounded fs-24"}"><i class="${"ri-folder-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Project Screenshots Collection`;
                        }
                      })}</h5></div></div></td>
								<td>Floder File</td>
								<td>87.24 MB</td>
								<td>08 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr>
							<tr><td><div class="${"d-flex align-items-center"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-light text-danger rounded fs-24"}"><i class="${"ri-image-2-fill"}"></i></div></div>
										<div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-dark" }, {}, {
                        default: () => {
                          return `Velzon-logo.png`;
                        }
                      })}</h5></div></div></td>
								<td>PNG File</td>
								<td>879 KB</td>
								<td>02 Nov 2021</td>
								<td>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            href: "#!",
                            class: "btn btn-soft-secondary btn-sm btn-icon p-0"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-more-fill"}"></i>`;
                            }
                          })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-eye-fill me-2 align-bottom text-muted"}"></i>View`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-download-2-fill me-2 align-bottom text-muted"}"></i>Download`;
                                }
                              })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-fill me-2 align-bottom text-muted"}"></i>Delete`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</td></tr></tbody>`;
                    }
                  })}</div>
				<div class="${"text-center mt-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-success " }, {}, {
                    default: () => {
                      return `<i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i> Load more
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
  })}`;
});
export { DocumentsTab as default };
