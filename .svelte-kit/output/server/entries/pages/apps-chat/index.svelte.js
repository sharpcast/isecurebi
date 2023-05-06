import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { P as PersonalInfo, M as MOCK_DATA } from "../../../chunks/PersonalInfo-6bdd32c9.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as SearchIcon, I as InfoIcon, M as MoreVerticalIcon } from "../../../chunks/SearchIcon-4d822d06.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/Offcanvas-493a27d8.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-5-c7d43f40.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-7-46aa251f.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/multi-user-a29f58d1.js";
import "./attachement.svelte.js";
import "../../../chunks/img-9-422942e7.js";
import "../../../chunks/user-dummy-img-0cebca03.js";
let curMessage = "";
const Apps_chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentRoomId = 1;
  let Chat_Box_Image = avatar2;
  let search_Menu = false;
  let Chat_Box_Username = "Lisa Parker";
  let isInfoDetails = false;
  let activeTab = 1;
  const toggleInfo = () => isInfoDetails = !isInfoDetails;
  function toggleSearch() {
    search_Menu = !search_Menu;
  }
  return `${$$result.head += `${$$result.title = `<title>Chat | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<div class="${"chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1"}"><div class="${"chat-leftsidebar"}"><div class="${"px-4 pt-4 mb-4"}"><div class="${"d-flex align-items-start"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-4"}">Chats</h5></div>
						<div class="${"flex-shrink-0"}">${validate_component(Tooltip, "Tooltip").$$render($$result, {
        placement: "bottom",
        target: "addcontact"
      }, {}, {
        default: () => {
          return `Add Contact`;
        }
      })}

							${validate_component(Button, "Button").$$render($$result, {
        color: "",
        id: "addcontact",
        class: "btn btn-soft-success btn-sm"
      }, {}, {
        default: () => {
          return `<i class="${"ri-add-line align-bottom"}"></i>`;
        }
      })}</div></div>
					<div class="${"search-box"}"><input type="${"text"}" class="${"form-control bg-light border-light"}" placeholder="${"Search here..."}">
						<i class="${"ri-search-2-line search-icon"}"></i></div></div>
				${validate_component(Nav, "Nav").$$render($$result, {
        class: "nav-tabs nav-tabs-custom nav-success nav-justified"
      }, {}, {
        default: () => {
          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 1 }, {}, {
                default: () => {
                  return `Chats`;
                }
              })}`;
            }
          })}
					${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 2 }, {}, {
                default: () => {
                  return `Contacts`;
                }
              })}`;
            }
          })}`;
        }
      })}

				${validate_component(TabContent, "TabContent").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TabPane, "TabPane").$$render($$result, {
            tabId: 1,
            class: "active"
          }, {}, {
            default: () => {
              return `<div class="${"chat-room-list pt-3"}" data-simplebar><div class="${"d-flex align-items-center px-4 mb-2"}"><div class="${"flex-grow-1"}"><h4 class="${"mb-0 fs-11 text-muted text-uppercase"}">Direct Messages
								</h4></div>
							<div class="${"flex-shrink-0"}">${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "bottom", target: "addnewmsg" }, {}, {
                default: () => {
                  return `New Message`;
                }
              })}

								<button type="${"button"}" id="${"addnewmsg"}" class="${"btn btn-soft-success btn-sm"}"><i class="${"ri-add-line align-bottom"}"></i></button></div></div>

						<div class="${"chat-message-list"}"><ul class="${"list-unstyled chat-list chat-user-list"}" id="${"userList"}">${each(MOCK_DATA.direactContact, (chat) => {
                return `<li${add_attribute("class", currentRoomId === chat.roomId ? "active" : "", 0)}>${validate_component(Link, "Link").$$render($$result, { href: null }, {}, {
                  default: () => {
                    return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 chat-user-img online align-self-center me-2 ms-0"}"><div class="${"avatar-xxs"}">${chat.image ? `<img${add_attribute("src", chat.image, 0)} class="${"rounded-circle img-fluid userprofile"}" alt="${""}">` : `<div${add_attribute("class", "avatar-title rounded-circle bg-" + chat.bgColor + " userprofile", 0)}>${escape(chat.name.charAt(0))}
															</div>`}</div>
													<span class="${"user-status"}"></span></div>
												<div class="${"flex-grow-1 overflow-hidden"}"><p class="${"text-truncate mb-0"}">${escape(chat.name)}</p>
												</div></div>
										`;
                  }
                })}
									</li>`;
              })}</ul></div>

						<div class="${"d-flex align-items-center px-4 mt-4 pt-2 mb-2"}"><div class="${"flex-grow-1"}"><h4 class="${"mb-0 fs-11 text-muted text-uppercase"}">Channels
								</h4></div>
							<div class="${"flex-shrink-0"}">${validate_component(Tooltip, "Tooltip").$$render($$result, {
                placement: "bottom",
                target: "createnewmsg"
              }, {}, {
                default: () => {
                  return `Create group`;
                }
              })}
								${validate_component(Button, "Button").$$render($$result, {
                color: "",
                id: "createnewmsg",
                class: "btn btn-soft-success btn-sm"
              }, {}, {
                default: () => {
                  return `<i class="${"ri-add-line align-bottom"}"></i>`;
                }
              })}</div></div>

						<div class="${"chat-message-list"}"><ul class="${"list-unstyled chat-list chat-user-list mb-0"}" id="${"channelList"}">${each(MOCK_DATA.channelsList, (channel) => {
                return `<li><a${add_attribute("href", null, 0)} class="${"unread-msg-user"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 chat-user-img online align-self-center me-2 ms-0"}"><div class="${"avatar-xxs"}"><div class="${"avatar-title bg-light rounded-circle text-body"}">#
														</div>
													</div></div>
												<div class="${"flex-grow-1 overflow-hidden"}"><p class="${"text-truncate mb-0"}">${escape(channel.name)}
													</p></div>
												${channel.unReadMessage ? `<div class="${"flex-shrink-0"}"><span class="${"badge badge-soft-dark rounded p-1"}">${escape(channel.unReadMessage)}</span>
													</div>` : ``}
											</div></a>
									</li>`;
              })}</ul></div></div>`;
            }
          })}
				${validate_component(TabPane, "TabPane").$$render($$result, {
            tabId: 2,
            class: ""
          }, {}, {
            default: () => {
              return `<div class="${"chat-room-list pt-3"}" data-simplebar><div class="${"sort-contact"}">${each(MOCK_DATA.chatContactData, (item) => {
                return `<div class="${"mt-3 h-auto"}"><div class="${"contact-list-title"}">${escape(item.title)}</div>
								<ul${add_attribute("id", "contact-sort-" + item.title, 0)} class="${"list-unstyled contact-list"}">${each(item.contacts, (item2) => {
                  return `<li><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xxs"}">${item2.image ? `<img${add_attribute("src", item2.image, 0)} class="${"img-fluid rounded-circle"}" alt="${""}">` : `<span class="${"avatar-title rounded-circle bg-primary fs-10"}">${escape(item2.name.charAt(0) + item2.name.split(" ").slice(-1).toString().charAt(0))}
														</span>`}
												</div></div>

											<div class="${"flex-grow-1"}"><p class="${"text-truncate contactlist-name mb-0"}">${escape(item2.name)}</p></div>
											<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "a", class: "text-muted", color: "" }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-2-fill"}"></i>
												`;
                        }
                      })}
												${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-pencil-line text-muted me-2 align-bottom"}"></i>Edit`;
                            }
                          })}
													${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-forbid-2-line text-muted me-2 align-bottom"}"></i>Block`;
                            }
                          })}
													${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-6-line text-muted me-2 align-bottom"}"></i> Remove`;
                            }
                          })}
												`;
                        }
                      })}
												`;
                    }
                  })}
											</div></div>
										</li>`;
                })}</ul>
							</div>`;
              })}</div></div>`;
            }
          })}`;
        }
      })}</div>

			<div class="${"user-chat w-100 overflow-hidden"}"><div class="${"chat-content d-lg-flex"}"><div class="${"w-100 overflow-hidden position-relative"}"><div class="${"position-relative"}"><div class="${"p-3 user-chat-topbar"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 4, xs: 8 }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 d-block d-lg-none me-3"}"><a${add_attribute("href", null, 0)} class="${"user-chat-remove fs-18 p-1"}"><i class="${"ri-arrow-left-s-line align-bottom"}"></i></a></div>
											<div class="${"flex-grow-1 overflow-hidden"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0"}">${`<img${add_attribute("src", Chat_Box_Image, 0)} class="${"rounded-circle avatar-xs"}" alt="${""}">`}
														<span class="${"user-status"}"></span></div>
													<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"text-truncate mb-0 fs-16"}"><a class="${"text-reset username"}" data-bs-toggle="${"offcanvas"}" href="${"#userProfileCanvasExample"}" aria-controls="${"userProfileCanvasExample"}">${escape(Chat_Box_Username)}</a></h5>
														<p class="${"text-truncate text-muted fs-14 mb-0 userStatus"}"><small>Online</small></p></div></div></div></div>`;
            }
          })}
									${validate_component(Col, "Col").$$render($$result, { sm: 8, xs: 4 }, {}, {
            default: () => {
              return `<ul class="${"list-inline user-chat-nav text-end mb-0"}"><li class="${"list-inline-item m-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                isOpen: search_Menu,
                toggle: toggleSearch
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-ghost-secondary btn-icon p-0",
                    tag: "button",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `${validate_component(SearchIcon, "SearchIcon").$$render($$result, { class: "icon-sm" }, {}, {})}`;
                    }
                  })}
													${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                    class: "p-0 dropdown-menu-end dropdown-menu-lg"
                  }, {}, {
                    default: () => {
                      return `<div class="${"p-2"}"><div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control bg-light border-light",
                        placeholder: "Search here...",
                        id: "searchMessage"
                      }, {}, {})}
																<i class="${"ri-search-2-line search-icon"}"></i></div></div>`;
                    }
                  })}`;
                }
              })}</li>

											<li class="${"list-inline-item d-none d-lg-inline-block m-0"}"><button type="${"button"}" class="${"btn btn-ghost-secondary btn-icon"}">${validate_component(InfoIcon, "InfoIcon").$$render($$result, { class: "icon-sm" }, {}, {})}</button></li>

											<li class="${"list-inline-item m-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-ghost-secondary btn-icon p-0",
                    tag: "button",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `${validate_component(MoreVerticalIcon, "MoreVerticalIcon").$$render($$result, { class: "icon-sm" }, {}, {})}`;
                    }
                  })}
													${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {
                        href: null,
                        class: "d-block d-lg-none user-profile-show"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-user-2-fill align-bottom text-muted me-2"}"></i>${escape(" ")}
															View Profile
														`;
                        }
                      })}
														${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-inbox-archive-line align-bottom text-muted me-2"}"></i>${escape(" ")}
															Archive
														`;
                        }
                      })}
														${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-mic-off-line align-bottom text-muted me-2"}"></i>${escape(" ")}
															Muted
														`;
                        }
                      })}
														${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `${escape(" ")}
															<i class="${"ri-delete-bin-5-line align-bottom text-muted me-2"}"></i>${escape(" ")}
															Delete
														`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</li></ul>`;
            }
          })}`;
        }
      })}</div>

							<div class="${"position-relative"}" id="${"users-chat"}"><div class="${"chat-conversation p-3 p-lg-4 "}" id="${"chat-conversation"}" data-simplebar><ul class="${"list-unstyled chat-conversation-list"}" id="${"users-conversation"}">${each(MOCK_DATA.messages, (message) => {
        return `<li${add_attribute("class", message.sender === Chat_Box_Username ? " chat-list left" : "chat-list right", 0)}><div class="${"conversation-list"}">${message.sender === Chat_Box_Username ? `<div class="${"chat-avatar"}">${`<img${add_attribute("src", Chat_Box_Image, 0)} alt="${""}">`}
														</div>` : ``}

													<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">${escape(message.message)}
																</p></div>
															${validate_component(Dropdown, "Dropdown").$$render($$result, {
          class: "align-self-start message-box-drop"
        }, {}, {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
              href: null,
              class: "btn nav-btn p-0",
              tag: "i",
              color: ""
            }, {}, {
              default: () => {
                return `<i class="${"ri-more-2-fill"}"></i>
																`;
              }
            })}
																${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null, class: "reply-message" }, {}, {
                  default: () => {
                    return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>
																		Reply
																	`;
                  }
                })}
																	${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                  default: () => {
                    return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>
																		Forward
																	`;
                  }
                })}
																	${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                  default: () => {
                    return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>
																		Copy
																	`;
                  }
                })}
																	${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                  default: () => {
                    return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>
																		Bookmark
																	`;
                  }
                })}
																	${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                  default: () => {
                    return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>
																		Delete
																	`;
                  }
                })}
																`;
              }
            })}
															`;
          }
        })}</div>
														<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:07 am
															</small>${escape(" ")}
															<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i>
															</span></div>
													</div></div>
											</li>`;
      })}</ul></div></div>

							<div class="${"chat-input-section p-3 p-lg-4"}"><form id="${"chatinput-form"}">${validate_component(Row, "Row").$$render($$result, { class: "g-0 align-items-center" }, {}, {
        default: () => {
          return `<div class="${"col-auto"}"><div class="${"chat-input-links me-2"}"><div class="${"links-list-item"}"><button type="${"button"}" class="${"btn btn-link text-decoration-none emoji-btn"}" id="${"emoji-btn"}"><i class="${"bx bx-smile align-middle"}"></i></button></div></div></div>

										<div class="${"col"}"><div class="${"chat-input-feedback"}">Please Enter a Message
											</div>
											<input type="${"text"}"${add_attribute("value", curMessage, 0)} class="${"form-control chat-input bg-light border-light"}" id="${"chat-input"}" placeholder="${"Type your message..."}"></div>
										<div class="${"col-auto"}"><div class="${"chat-input-links ms-2"}"><div class="${"links-list-item"}">${validate_component(Button, "Button").$$render($$result, {
            type: "button",
            color: "success",
            class: "chat-send waves-effect waves-light"
          }, {}, {
            default: () => {
              return `<i class="${"ri-send-plane-2-fill align-bottom"}"></i>`;
            }
          })}</div></div></div>`;
        }
      })}</form></div>

							<div class="${"replyCard"}">${validate_component(Card, "Card").$$render($$result, { class: "mb-0" }, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "py-3" }, {}, {
            default: () => {
              return `<div class="${"replymessage-block mb-0 d-flex align-items-start"}"><div class="${"flex-grow-1"}"><p class="${"mb-0"}"></p></div>
											<div class="${"flex-shrink-0"}"><button type="${"button"}" id="${"close_toggle"}" class="${"btn btn-sm btn-link mt-n2 me-n3 fs-18"}"><i class="${"bx bx-x align-middle"}"></i></button></div></div>`;
            }
          })}`;
        }
      })}</div></div></div></div></div></div>`;
    }
  })}</div>

${validate_component(PersonalInfo, "PersonalInfo").$$render($$result, {
    show: isInfoDetails,
    onCloseClick: toggleInfo,
    currentuser: Chat_Box_Username,
    cuurentiseImg: Chat_Box_Image
  }, {}, {})}`;
});
export { Apps_chat as default };
