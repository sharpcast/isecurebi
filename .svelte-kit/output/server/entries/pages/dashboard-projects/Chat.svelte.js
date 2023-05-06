import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { i as img1 } from "../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, lg: 6 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Chat</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "card-header-dropdown",
                direction: "start"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-reset p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted"}"><i class="${"ri-settings-4-line align-bottom me-1"}"></i>Setting
							<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-user-2-fill align-bottom text-muted me-2"}"></i> View Profile`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-inbox-archive-line align-bottom text-muted me-2"}"></i> Archive`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-mic-off-line align-bottom text-muted me-2"}"></i> Muted`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line align-bottom text-muted me-2"}"></i> Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}

		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
            default: () => {
              return `<div class="${"chat-conversation p-3"}" data-simplebar style="${"height: 400px;"}"><ul class="${"list-unstyled chat-conversation-list chat-sm"}" id="${"users-conversation"}"><li class="${"chat-list left"}"><div class="${"conversation-list"}"><div class="${"chat-avatar"}"><img${add_attribute("src", avatar2, 0)} alt="${""}"></div>
							<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Good morning \u{1F60A}</p></div>
									${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "align-self-start message-box-drop"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "p-0",
                    tag: "a",
                    color: "",
                    href: null
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
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item" }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>
								<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:07 am</small>
									<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

					<li class="${"chat-list right"}"><div class="${"conversation-list"}"><div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Good morning, How are you? What about our next meeting?
										</p></div>
									${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "align-self-start message-box-drop"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "p-0",
                    tag: "a",
                    color: "",
                    href: null
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
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item" }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>
								<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:08 am</small>
									<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

					<li class="${"chat-list left"}"><div class="${"conversation-list"}"><div class="${"chat-avatar"}"><img${add_attribute("src", avatar2, 0)} alt="${""}"></div>
							<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
										</p></div>
									${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "align-self-start message-box-drop"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "p-0",
                    tag: "a",
                    color: "",
                    href: null
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
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item" }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>
								<div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Hey, I&#39;m going to meet a friend of mine at the department store. I have to buy
											some presents for my parents \u{1F381}.
										</p></div>
									${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "align-self-start message-box-drop"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "p-0",
                    tag: "a",
                    color: "",
                    href: null
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
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item" }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>
								<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:10 am</small>
									<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

					<li class="${"chat-list right"}"><div class="${"conversation-list"}"><div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"ctext-wrap-content"}"><p class="${"mb-0 ctext-content"}">Wow that&#39;s great</p></div>
									${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "align-self-start message-box-drop"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "p-0",
                    tag: "a",
                    color: "",
                    href: null
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
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-file-copy-line me-2 text-muted align-bottom"}"></i>Copy`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item" }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>
								<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:12 am</small>
									<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li>

					<li class="${"chat-list left"}"><div class="${"conversation-list"}"><div class="${"chat-avatar"}"><img${add_attribute("src", avatar2, 0)} alt="${""}"></div>
							<div class="${"user-chat-content"}"><div class="${"ctext-wrap"}"><div class="${"message-img mb-0"}"><div class="${"message-img-list"}"><div><a class="${"popup-img d-inline-block"}"${add_attribute("href", img1, 0)}><img${add_attribute("src", img1, 0)} alt="${""}" class="${"rounded border"}"></a></div>
											<div class="${"message-img-link"}"><ul class="${"list-inline mb-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "list-inline-item" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "dropdown-toggle p-0",
                    color: "",
                    href: null,
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
														${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: avatar1, download: "" }, {}, {
                        default: () => {
                          return `<i class="${"ri-download-2-line me-2 text-muted align-bottom"}"></i>Download`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item", href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</ul></div></div>

										<div class="${"message-img-list"}"><div><a class="${"popup-img d-inline-block"}"${add_attribute("href", null, 0)}><img${add_attribute("src", img2, 0)} alt="${""}" class="${"rounded border"}"></a></div>
											<div class="${"message-img-link"}"><ul class="${"list-inline mb-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "list-inline-item" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "dropdown-toggle p-0",
                    color: "",
                    href: null,
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-more-fill"}"></i>`;
                    }
                  })}
														${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: avatar1, download: "" }, {}, {
                        default: () => {
                          return `<i class="${"ri-download-2-line me-2 text-muted align-bottom"}"></i>Download`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-reply-line me-2 text-muted align-bottom"}"></i>Reply`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-share-line me-2 text-muted align-bottom"}"></i>Forward`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-bookmark-line me-2 text-muted align-bottom"}"></i>Bookmark`;
                        }
                      })}
															${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "delete-item", href: null }, {}, {
                        default: () => {
                          return `<i class="${"ri-delete-bin-5-line me-2 text-muted align-bottom"}"></i>Delete`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</ul></div></div></div></div>

								<div class="${"conversation-name"}"><small class="${"text-muted time"}">09:30 am</small>
									<span class="${"text-success check-message-icon"}"><i class="${"ri-check-double-line align-bottom"}"></i></span></div></div></div></li></ul></div>
			<div class="${"border-top border-top-dashed"}"><div class="${"row g-2 mx-3 mt-2 mb-3"}"><div class="${"col"}"><div class="${"position-relative"}"><input type="${"text"}" class="${"form-control border-light bg-light"}" placeholder="${"Enter Message..."}"></div></div>
					<div class="${"col-auto"}"><button type="${"submit"}" class="${"btn btn-info"}"><span class="${"d-none d-sm-inline-block me-2"}">Send</span>
							<i class="${"mdi mdi-send float-end"}"></i></button></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Chat as default };
