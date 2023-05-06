import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { E as Editor } from "../../../chunks/Editor-4e26f76e.js";
import { D as Dropzone } from "../../../chunks/Dropzone-221db829.js";
import "../../../chunks/index-bddc6f42.js";
import "tslib";
const Apps_ecommerce_add_product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let files = { accepted: [], rejected: [] };
  let customActiveTab = 1;
  const options = [
    { value: "Published", label: "Published" },
    { value: "Scheduled", label: "Scheduled" },
    { value: "Draft", label: "Draft" }
  ];
  const optionvisibility = [{ value: "Public", label: "Public" }, { value: "Hidden", label: "Hidden" }];
  const optioncategory = [
    { value: "All", label: "All" },
    { value: "Appliances", label: "Appliances" },
    { value: "Fashion", label: "Fashion" },
    {
      value: "Electronics",
      label: "Electronics"
    },
    { value: "Grocery", label: "Grocery" },
    {
      value: "Home & Furniture",
      label: "Home & Furniture"
    },
    { value: "Kids", label: "Kids" },
    { value: "Mobiles", label: "Mobiles" }
  ];
  const tags = [
    { value: "All", label: "All" },
    { value: "Product", label: "Product" },
    { value: "Sale", label: "Sale" },
    { value: "Cotton", label: "Cotton" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Add Product | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Create Product",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<form>${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        class: "form-label",
                        for: "product-title-input"
                      }, {}, {
                        default: () => {
                          return `Product Title`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "product-title-input",
                        placeholder: "Enter product title"
                      }, {}, {})}</div>
							<div class="${"mb-3"}">${validate_component(Editor, "Editor").$$render($$result, {}, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Product Gallery</h5>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-4"}"><h5 class="${"fs-14 mb-1"}">Product Image</h5>
								<p class="${"text-muted"}">Add Product main Image.</p>
								<div class="${"text-center"}"><div class="${"position-relative d-inline-block"}"><div class="${"position-absolute top-100 start-100 translate-middle"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "product-image-input",
                        class: "mb-0",
                        "data-bs-toggle": "tooltip",
                        "data-bs-placement": "right",
                        title: "Select Image"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-xs"}"><div class="${"avatar-title bg-light border rounded-circle text-muted cursor-pointer"}"><i class="${"ri-image-fill"}"></i></div></div>`;
                        }
                      })}
											<input class="${"form-control d-none"}" value="${""}" id="${"product-image-input"}" type="${"file"}" accept="${"image/png, image/gif, image/jpeg"}"></div>
										<div class="${"avatar-lg"}"><div class="${"avatar-title bg-light rounded"}"><img src="${""}" id="${"product-img"}" alt="${""}" class="${"avatar-md h-auto"}"></div></div></div></div></div>
							<div><h5 class="${"fs-14 mb-1"}">Product Gallery</h5>
								<p class="${"text-muted"}">Add Product Gallery Images.</p>
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
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}

					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Nav, "Nav").$$render($$result, {
                        class: "nav-tabs-custom card-header-tabs border-bottom-0"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                href: "#!",
                                active: customActiveTab == 1
                              }, {}, {
                                default: () => {
                                  return `General Info`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                href: "#!",
                                active: customActiveTab == 2
                              }, {}, {
                                default: () => {
                                  return `Meta Data`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}

						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 1,
                            class: "active"
                          }, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                for: "manufacturer-name-input"
                              }, {}, {
                                default: () => {
                                  return `Manufacturer Name
										`;
                                }
                              })}
										${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control",
                                id: "manufacturer-name-input",
                                placeholder: "Enter manufacturer name"
                              }, {}, {})}</div>
									${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                        class: "form-label",
                                        for: "manufacturer-brand-input"
                                      }, {}, {
                                        default: () => {
                                          return `Manufacturer Brand
												`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        id: "manufacturer-brand-input",
                                        placeholder: "Enter manufacturer brand"
                                      }, {}, {})}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                            default: () => {
                                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                                class: "form-label",
                                                for: "product-price-input"
                                              }, {}, {
                                                default: () => {
                                                  return `Price`;
                                                }
                                              })}
														<div class="${"input-group mb-3"}"><span class="${"input-group-text"}" id="${"product-price-addon"}">$ </span>
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "product-price-input",
                                                placeholder: "Enter price",
                                                "aria-label": "Price",
                                                "aria-describedby": "product-price-addon"
                                              }, {}, {})}</div></div>`;
                                            }
                                          })}
												${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                            default: () => {
                                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                                class: "form-label",
                                                for: "product-discount-input"
                                              }, {}, {
                                                default: () => {
                                                  return `Discount
														`;
                                                }
                                              })}
														<div class="${"input-group mb-3"}"><span class="${"input-group-text"}" id="${"product-discount-addon"}">% </span>
															${validate_component(Input, "Input").$$render($$result, {
                                                type: "text",
                                                class: "form-control",
                                                id: "product-discount-input",
                                                placeholder: "Enter discount",
                                                "aria-label": "discount",
                                                "aria-describedby": "product-discount-addon"
                                              }, {}, {})}</div></div>`;
                                            }
                                          })}`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: 2,
                            class: ""
                          }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                        class: "form-label",
                                        for: "meta-title-input"
                                      }, {}, {
                                        default: () => {
                                          return `Meta title`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        placeholder: "Enter meta title",
                                        id: "meta-title-input"
                                      }, {}, {})}</div>`;
                                    }
                                  })}

										${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                        class: "form-label",
                                        for: "meta-keywords-input"
                                      }, {}, {
                                        default: () => {
                                          return `Meta Keywords
												`;
                                        }
                                      })}
												${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        placeholder: "Enter meta keywords",
                                        id: "meta-keywords-input"
                                      }, {}, {})}</div>`;
                                    }
                                  })}`;
                                }
                              })}

									<div>${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                for: "meta-description-input"
                              }, {}, {
                                default: () => {
                                  return `Meta Description
										`;
                                }
                              })}
										${validate_component(Input, "Input").$$render($$result, {
                                type: "textarea",
                                class: "form-control",
                                id: "meta-description-input",
                                placeholder: "Enter meta description",
                                rows: "3"
                              }, {}, {})}</div>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}

					<div class="${"text-end mb-3"}"><button type="${"submit"}" class="${"btn btn-success w-sm"}">Submit </button></div></form>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Publish</h5>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-publish-status-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}

							${validate_component(Select, "Select").$$render($$result, {
                        class: "form-select",
                        placeholder: "Choose ...",
                        title: "features",
                        items: options
                      }, {}, {})}</div>

						<div>${validate_component(Label, "Label").$$render($$result, {
                        for: "choices-publish-visibility-input",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Visibility`;
                        }
                      })}
							${validate_component(Select, "Select").$$render($$result, {
                        class: "form-select",
                        title: "features",
                        items: optionvisibility
                      }, {}, {})}</div>`;
                    }
                  })}
					`;
                }
              })}
				

				<div class="${"card"}">${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">Publish Schedule</h5>`;
                }
              })}
					
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div>${validate_component(Label, "Label").$$render($$result, {
                    for: "datepicker-publish-input",
                    class: "form-label"
                  }, {}, {
                    default: () => {
                      return `Publish Date &amp; Time`;
                    }
                  })}
							${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                    class: "form-control",
                    placeholder: "Enter publish date",
                    options: {
                      mode: "range",
                      dateFormat: "d M, Y",
                      defaultDate: ["01 Jan 2022", "31 Jan 2022"]
                    }
                  }, {}, {})}</div>`;
                }
              })}</div>
				

				<div class="${"card"}">${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">Product Categories</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted mb-2"}"><a${add_attribute("href", null, 0)} class="${"float-end text-decoration-underline"}">Add New</a>Select product
							category
						</p>

						${validate_component(Select, "Select").$$render($$result, {
                    class: "form-select",
                    title: "features",
                    name: "choices-category-input",
                    items: optioncategory
                  }, {}, {})}`;
                }
              })}
					</div>
				
				<div class="${"card"}">${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">Product Tags</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"hstack gap-3 align-items-start"}"><div class="${"flex-grow-1"}">${validate_component(Select, "Select").$$render($$result, { items: tags, isMulti: true }, {}, {})}</div></div>`;
                }
              })}
					</div>
				

				<div class="${"card"}">${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">Product Short Description</h5>`;
                }
              })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted mb-2"}">Add short description for product</p>
						<textarea class="${"form-control"}" placeholder="${"Must enter minimum of a 100 characters"}" rows="${"3"}"></textarea>`;
                }
              })}
					</div>
				`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_add_product as default };
