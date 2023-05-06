import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute, e as each } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../../chunks/ModalHeader-dfdb4a12.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../chunks/TabPane-b01382c8.js";
import { D as Dropzone } from "../../../../chunks/Dropzone-221db829.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/index-bddc6f42.js";
import "tslib";
var verificationimg = "/_app/assets/verification-img-ff7c06bb.png";
let selectCountry = "";
const KYCVerification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isKycVerification = false;
  const toggleKycVerification = () => {
    isKycVerification = !isKycVerification;
  };
  let files = { accepted: [], rejected: [] };
  let activeTab = 1;
  const country = [
    {
      label: "Select country",
      value: "Select country"
    },
    { label: "Argentina", value: "Argentina" },
    { label: "Belgium", value: "Belgium" },
    { label: "Brazil", value: "Brazil" },
    { label: "Colombia", value: "Colombia" },
    { label: "Denmark", value: "Denmark" },
    { label: "France", value: "France" },
    { label: "Germany", value: "Germany" },
    { label: "Mexico", value: "Mexico" },
    { label: "Russia", value: "Russia" },
    { label: "Spain", value: "Spain" },
    { label: "Syria", value: "Syria" },
    {
      label: "United Kingdom",
      value: "United Kingdom"
    },
    {
      label: "United States of America",
      value: "United States of America"
    }
  ];
  return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"text-center"}">${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                        default: () => {
                          return `<h4 class="${"mt-4 fw-semibold"}">KYC Verification</h4>
							<p class="${"text-muted mt-3"}">When you get your KYC verification process done,
								you have given the crypto exchange in this case,
								information.${escape(" ")}</p>
							<div class="${"mt-4"}"><button type="${"button"}" class="${"btn btn-primary"}" data-bs-toggle="${"modal"}" data-bs-target="${"#exampleModal"}">Click here for Verification
								</button></div>`;
                        }
                      })}`;
                    }
                  })}

					${validate_component(Row, "Row").$$render($$result, {
                    class: "justify-content-center mt-5 mb-2"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 7, xs: 8 }, {}, {
                        default: () => {
                          return `<img${add_attribute("src", verificationimg, 0)} alt="${""}" class="${"img-fluid"}">`;
                        }
                      })}`;
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
${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: isKycVerification,
    toggleKycVerification,
    centered: true,
    size: "lg"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "p-3 text-uppercase",
        toggleKycVerification
      }, {}, {
        default: () => {
          return `Verify your Account
	`;
        }
      })}
	<form action="${"#"}" class="${"checkout-tab"}">${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "p-0" }, {}, {
        default: () => {
          return `<div class="${"step-arrow-nav"}">${validate_component(Nav, "Nav").$$render($$result, {
            class: "nav-pills nav-justified custom-nav",
            role: "tablist"
          }, {}, {
            default: () => {
              return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "p-3", active: activeTab == 1 }, {}, {
                    default: () => {
                      return `Personal Info`;
                    }
                  })}`;
                }
              })}
					${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "p-3", active: activeTab == 2 }, {}, {
                    default: () => {
                      return `Bank Details`;
                    }
                  })}`;
                }
              })}
					${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "p-3", active: activeTab == 3 }, {}, {
                    default: () => {
                      return `Document Verification`;
                    }
                  })}`;
                }
              })}
					${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "p-3", active: activeTab == 4 }, {}, {
                    default: () => {
                      return `Verified`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}
		<div class="${"modal-body"}">${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TabPane, "TabPane").$$render($$result, {
            tabId: 1,
            class: "active"
          }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "firstName", class: "form-label" }, {}, {
                        default: () => {
                          return `First Name`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "firstName",
                        placeholder: "Enter your firstname"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "lastName", class: "form-label" }, {}, {
                        default: () => {
                          return `Last Name`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "lastName",
                        placeholder: "Enter your lastname"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "phoneNumber", class: "form-label" }, {}, {
                        default: () => {
                          return `Phone`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "phoneNumber",
                        placeholder: "Enter your phone number"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "dateofBirth", class: "form-label" }, {}, {
                        default: () => {
                          return `Date of Birth`;
                        }
                      })}
								${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                        class: "form-control",
                        options: { dateFormat: "d M, Y" },
                        placeholder: "Enter your date of birth"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "emailID", class: "form-label" }, {}, {
                        default: () => {
                          return `Email ID`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "email",
                        class: "form-control",
                        id: "emailID",
                        placeholder: "Enter your email"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "password", class: "form-label" }, {}, {
                        default: () => {
                          return `Password`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "password",
                        class: "form-control",
                        id: "password",
                        placeholder: "Enter your password"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                        for: "confirmPassword",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Confirm Password`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "password",
                        class: "form-control",
                        id: "confirmPassword",
                        placeholder: "Enter your confirm password"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "vatNo", class: "form-label" }, {}, {
                        default: () => {
                          return `VAT/TIN No.`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "vatNo",
                        placeholder: "Enter your VAT/TIN no"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "serviceTax", class: "form-label" }, {}, {
                        default: () => {
                          return `Service Tax No.`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "serviceTax",
                        placeholder: "Enter your service tax no"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div>${validate_component(Label, "Label").$$render($$result, {
                        for: "country-select",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Country`;
                        }
                      })}
								${validate_component(Select, "Select").$$render($$result, {
                        class: "mb-0",
                        value: selectCountry,
                        items: country,
                        id: "country-select"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-start gap-3 mt-3"}"><button type="${"button"}" class="${"btn btn-primary btn-label right ms-auto nexttab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>${escape(" ")}
									Next Step
								</button></div>`;
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
                        for: "banknameInput",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Bank Name`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "banknameInput",
                        placeholder: "Enter your bank name"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "branchInput", class: "form-label" }, {}, {
                        default: () => {
                          return `Branch`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "branchInput",
                        placeholder: "Branch"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "accountnameInput",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Account Holder Name`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "accountnameInput",
                        placeholder: "Enter account holder name"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                        for: "accountnumberInput",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Account Number`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "number",
                        class: "form-control",
                        id: "accountnumberInput",
                        placeholder: "Enter account number"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "ifscInput", class: "form-label" }, {}, {
                        default: () => {
                          return `IFSC`;
                        }
                      })}
								${validate_component(Input, "Input").$$render($$result, {
                        type: "number",
                        class: "form-control",
                        id: "ifscInput",
                        placeholder: "IFSC"
                      }, {}, {})}</div>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"hstack align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-light btn-label previestab"}" data-previous="${"pills-bill-info-tab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>
									Back to Personal Info
								</button>
								<button type="${"button"}" class="${"btn btn-primary btn-label right ms-auto nexttab"}" data-nexttab="${"pills-payment-tab"}"><i class="${"ri-arrow-right-line label-icon align-middle fs-16 ms-2"}"></i>
									Next Step
								</button></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

				${validate_component(TabPane, "TabPane").$$render($$result, {
            tabId: 3,
            class: ""
          }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Choose Document Type</h5>

					<div class="${"d-flex gap-2"}"><div><input type="${"radio"}" class="${"btn-check"}" id="${"passport"}" defaultchecked name="${"choose-document"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "btn btn-outline-info",
                for: "passport"
              }, {}, {
                default: () => {
                  return `Passport`;
                }
              })}</div>
						<div><input type="${"radio"}" class="${"btn-check"}" id="${"aadhar-card"}" name="${"choose-document"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "btn btn-outline-info",
                for: "aadhar-card"
              }, {}, {
                default: () => {
                  return `Aadhar Card`;
                }
              })}</div>
						<div><input type="${"radio"}" class="${"btn-check"}" id="${"pan-card"}" name="${"choose-document"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "btn btn-outline-info",
                for: "pan-card"
              }, {}, {
                default: () => {
                  return `Pan Card`;
                }
              })}</div>
						<div><input type="${"radio"}" class="${"btn-check"}" id="${"other"}" name="${"choose-document"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "btn btn-outline-info",
                for: "other"
              }, {}, {
                default: () => {
                  return `Other`;
                }
              })}</div></div>

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

					<div class="${"d-flex align-items-start gap-3 mt-4"}"><button type="${"button"}" class="${"btn btn-light btn-label previestab"}" data-previous="${"pills-bill-address-tab"}"><i class="${"ri-arrow-left-line label-icon align-middle fs-16 me-2"}"></i>
							Back to Bank Details
						</button>
						<button type="${"button"}" class="${"btn btn-primary btn-label right ms-auto nexttab"}" data-nexttab="${"pills-finish-tab"}"><i class="${"ri-save-line label-icon align-middle fs-16 ms-2"}"></i>
							Submit
						</button></div>`;
            }
          })}

				${validate_component(TabPane, "TabPane").$$render($$result, {
            tabId: 4,
            class: ""
          }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {
                class: "text-center justify-content-center"
              }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                    default: () => {
                      return `<div class="${"mb-4"}"><lord-icon src="${"//cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c,secondary:#405189"}" style="${"width:120px;height:120px"}"></lord-icon></div>
							<h5>Verification Completed</h5>
							<p class="${"text-muted mb-4"}">To stay verified, don&#39;t remove the meta tag form
								your site&#39;s home page. To avoid losing
								verification, you may want to add multiple
								methods form the${escape(" ")}
								<span class="${"fw-medium"}">Crypto KYC Application.</span></p>

							<div class="${"hstack justify-content-center gap-2"}"><button type="${"button"}" class="${"btn btn-ghost-success"}" data-bs-dismiss="${"modal"}">Done${escape(" ")}
									<i class="${"ri-thumb-up-fill align-bottom me-1"}"></i></button>
								<button type="${"button"}" class="${"btn btn-primary"}"><i class="${"ri-home-4-line align-bottom ms-1"}"></i>${escape(" ")}
									Back to Home
								</button></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></form>`;
    }
  })}`;
});
export { KYCVerification as default };
