import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { P as PlusCircleIcon } from "../../../chunks/PlusCircleIcon-0c7635d7.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
const EmailSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const toggle = () => open = !open;
  const chatData = [
    {
      id: 1,
      img: avatar2,
      name: "Scott Median",
      caption: "Hello ! are you there?"
    },
    {
      id: 2,
      img: avatar4,
      name: "Julian Rosa",
      caption: "What about our next.."
    },
    {
      id: 3,
      img: avatar3,
      name: "David Medina",
      caption: "Yeah everything is fine"
    },
    {
      id: 4,
      img: avatar5,
      name: "Jay Baker",
      caption: "Wow that's great"
    }
  ];
  let setInfo = [];
  return `<div class="${"email-menu-sidebar"}"><div class="${"p-4 d-flex flex-column h-100"}"><div class="${"pb-4 border-bottom border-bottom-dashed"}"><button type="${"button"}" class="${"btn btn-danger w-100"}" data-bs-toggle="${"modal"}" data-bs-target="${"#composemodal"}">${validate_component(PlusCircleIcon, "PlusCircleIcon").$$render($$result, { class: "icon-xs me-1 icon-dual-light" }, {}, {})}
				Compose
			</button></div>

		<div class="${"mx-n4 px-4 email-menu-sidebar-scroll"}" data-simplebar><div class="${"mail-list mt-3 h-auto"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "active" }, {}, {
    default: () => {
      return `<i class="${"ri-mail-fill me-3 align-middle fw-medium"}"></i>
                    <span class="${"mail-list-link"}">All</span>`;
    }
  })}
                ${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-inbox-archive-fill me-3 align-middle fw-medium"}"></i>
                    Inbox
                    <span class="${"badge badge-soft-success ms-auto "}">5</span>`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-send-plane-2-fill me-3 align-middle fw-medium"}"></i>${escape(" ")}
					Sent
				`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-edit-2-fill me-3 align-middle fw-medium"}"></i>
					Draft
				`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-error-warning-fill me-3 align-middle fw-medium"}"></i>
					Spam
				`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-delete-bin-5-fill me-3 align-middle fw-medium"}"></i>
					Trash
				`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-star-fill me-3 align-middle fw-medium"}"></i>
					Starred
				`;
    }
  })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-price-tag-3-fill me-3 align-middle fw-medium"}"></i>
					Important
				`;
    }
  })}</div>

			<div><h5 class="${"fs-12 text-uppercase text-muted mt-4"}">Labels</h5>

				<div class="${"mail-list mt-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<span class="${"ri-checkbox-blank-circle-line me-2 text-info"}"></span>${escape(" ")}
						Theme Support${escape(" ")}
						<span class="${"badge badge-soft-success ms-auto"}">3</span>`;
    }
  })}
					${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<span class="${"ri-checkbox-blank-circle-line me-2 text-warning"}"></span>${escape(" ")}
						Freelance
					`;
    }
  })}
					${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<span class="${"ri-checkbox-blank-circle-line me-2 text-primary"}"></span>${escape(" ")}
						Social
					`;
    }
  })}
					${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<span class="${"ri-checkbox-blank-circle-line me-2 text-danger"}"></span>${escape(" ")}
						Friends
						<span class="${"badge badge-soft-success ms-auto"}">2</span>`;
    }
  })}
					${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<span class="${"ri-checkbox-blank-circle-line me-2 text-success"}"></span>${escape(" ")}
						Family
					`;
    }
  })}</div></div>

			<div class="${"border-top border-top-dashed pt-3 mt-3"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "btn btn-icon btn-sm btn-soft-info btn-rounded float-end"
  }, {}, {
    default: () => {
      return `<i class="${"bx bx-plus fs-16"}"></i>`;
    }
  })}
				<h5 class="${"fs-12 text-uppercase text-muted mb-3"}">Chat</h5>

				<div class="${"mt-2 vstack gap-3 email-chat-list mx-n4"}">${each(chatData, (item) => {
    return `${validate_component(Link, "Link").$$render($$result, {
      href: "#!",
      class: "d-flex align-items-center"
    }, {}, {
      default: () => {
        return `<div class="${"flex-shrink-0 me-2 avatar-xxs"}"><img class="${"img-fluid rounded-circle"}"${add_attribute("src", item.img, 0)} alt="${""}"></div>

						<div class="${"flex-grow-1 chat-user-box overflow-hidden"}"><h5 class="${"fs-13 text-truncate mb-0"}">${escape(item.name)}</h5>
							<small class="${"text-muted text-truncate mb-0"}">${escape(item.caption)}
							</small></div>
					`;
      }
    })}`;
  })}</div></div></div>

		<div class="${"mt-auto"}"><h5 class="${"fs-13"}">1.75 GB of 10 GB used</h5>
			${validate_component(Progress, "Progress").$$render($$result, {
    color: "success",
    class: "progress-sm",
    value: 25
  }, {}, {})}</div></div></div>

<div class="${"email-chat-detail"}" id="${"emailchat-detailElem"}">${validate_component(Card, "Card").$$render($$result, { class: "mb-0" }, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
        class: "align-items-center d-flex bg-primary text-white-50"
      }, {}, {
        default: () => {
          return `<div class="${"flex-grow-1"}"><h5 class="${"fs-13 text-white mb-1 profile-username"}">${escape(setInfo.name)}</h5>
				<p class="${"mb-0 fs-12 lh-1"}">Active</p></div>
			<div class="${"flex-shrink-0"}"><div class="${"mt-n3 me-n3"}"><button type="${"button"}" class="${"btn btn-link text-white fs-16 text-decoration-none"}" id="${"emailchat-btn-close"}"><i class="${"ri-close-fill"}"></i></button></div></div>`;
        }
      })}

		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
        default: () => {
          return `<div id="${"users-chat"}"><div data-simplebar class="${"chat-conversation p-3"}" id="${"chat-conversation"}" style="${"height: 250px"}"><ul class="${"list-unstyled chat-conversation-list chat-sm"}" id="${"users-conversation"}"><li class="${"chat-list left"}"><div class="${"conversation-list"}"><div class="${"chat-avatar"}"><img${add_attribute("src", setInfo.img, 0)} alt="${""}"></div>
								<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Good morning \u{1F60A}</p></div>

										${validate_component(Dropdown, "Dropdown").$$render($$result, {
            class: "align-self-start message-box-drop"
          }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                tag: "a",
                role: "button",
                color: "",
                class: "p-0"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-2-fill"}"></i>`;
                }
              })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
									<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:07 am</small> <span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

						<li class="${"chat-list right"}"><div class="${"conversation-list"}"><div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Good morning, How are you? What about our next meeting?</p></div>
										${validate_component(Dropdown, "Dropdown").$$render($$result, {
            class: "align-self-start message-box-drop"
          }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                tag: "a",
                role: "button",
                color: "",
                class: "p-0"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-2-fill"}"></i>`;
                }
              })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
									<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:08 am</small> <span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

						<li class="${"chat-list left"}"><div class="${"conversation-list"}"><div class="${"chat-avatar"}"><img${add_attribute("src", setInfo.img, 0)} alt="${""}"></div>
								<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p></div>
										${validate_component(Dropdown, "Dropdown").$$render($$result, {
            class: "align-self-start message-box-drop"
          }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                tag: "a",
                role: "button",
                color: "",
                class: "p-0"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-2-fill"}"></i>`;
                }
              })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
									<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:10 am</small> <span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

						<li class="${"chat-list right"}"><div class="${"conversation-list"}"><div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Wow that&#39;s great</p></div>
										${validate_component(Dropdown, "Dropdown").$$render($$result, {
            class: "align-self-start message-box-drop"
          }, {}, {
            default: () => {
              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                tag: "a",
                role: "button",
                color: "",
                class: "p-0"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-more-2-fill"}"></i>`;
                }
              })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                    }
                  })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
									<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:12 am</small> <span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li></ul></div></div>

			<div class="${"border-top border-top-dashed"}">${validate_component(Row, "Row").$$render($$result, { class: "g-2 mx-3 mt-2 mb-3" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { class: "col" }, {}, {
                default: () => {
                  return `<div class="${"position-relative"}"><input type="${"text"}" class="${"form-control border-light bg-light"}" placeholder="${"Enter Message..."}"></div>`;
                }
              })}
					${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                default: () => {
                  return `<button type="${"submit"}" class="${"btn btn-info"}"><i class="${"mdi mdi-send"}"></i></button>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}</div>

${validate_component(Modal, "Modal").$$render($$result, {
    id: "composemodal",
    class: "modal-lg",
    isOpen: open,
    toggle,
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "p-3 bg-light", toggle }, {}, {
        default: () => {
          return `New Message`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div><div class="${"mb-3 position-relative"}">${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control email-compose-input",
            defaultValue: "support@themesbrand.com"
          }, {}, {})}
				<div class="${"position-absolute top-0 end-0"}"><div class="${"d-flex"}"><button class="${"btn btn-link text-reset fw-semibold px-2"}" type="${"button"}">Cc
						</button>
						<button class="${"btn btn-link text-reset fw-semibold px-2"}" type="${"button"}">Bcc
						</button></div></div></div>
			<div class="${"collapse"}" id="${"CcRecipientsCollapse"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Cc:`;
            }
          })}
					${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            placeholder: "Cc recipients"
          }, {}, {})}</div></div>
			<div class="${"collapse"}" id="${"BccRecipientsCollapse"}"><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Bcc:`;
            }
          })}
					${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            placeholder: "Bcc recipients"
          }, {}, {})}</div></div>

			<div class="${"mb-3"}">${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            placeholder: "Subject"
          }, {}, {})}</div></div>`;
        }
      })}
	<div class="${"modal-footer"}"><button type="${"button"}" class="${"btn btn-ghost-danger"}">Discard
		</button>

		${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "btn-group" }, {}, {
        default: () => {
          return `<button type="${"button"}" class="${"btn btn-success"}">Send
			</button>
			${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
            tag: "button",
            type: "button",
            class: "btn btn-success",
            split: true
          }, {}, {
            default: () => {
              return `<span class="${"visually-hidden"}">Toggle Dropdown</span>`;
            }
          })}
			${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
            default: () => {
              return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-timer-line text-muted me-1 align-bottom"}"></i>${escape(" ")}
						Schedule Send
					`;
                }
              })}</li>`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}`;
});
export { EmailSidebar as default };
