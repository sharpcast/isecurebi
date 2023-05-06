import { c as create_ssr_component, h as compute_rest_props, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { B as ButtonGroup } from "../../../chunks/ButtonGroup-50e6fe93.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { O as Offcanvas, a as OffcanvasBody } from "../../../chunks/Offcanvas-493a27d8.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import { i as img6 } from "../../../chunks/img-6-3ccff08f.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/Portal-94847a25.js";
const ButtonDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Dropdown, "Dropdown").$$render($$result, Object.assign($$restProps, { group: true }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const mailbox = [
  {
    id: 1,
    forId: "flexCheck20",
    name: "Peter, me (3)",
    subject: "Hello",
    teaser: "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
    date: "Mar 6"
  },
  {
    id: 2,
    unread: true,
    forId: "flexCheck17",
    name: "me, Susanna (7)",
    subject: "Since you asked... and i'm inconceivably bored at the train station",
    badge: "Freelance",
    badgeClass: "warning",
    teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
    date: "Mar 6"
  },
  {
    id: 3,
    forId: "flexCheck16",
    name: "Web Support Dennis",
    subject: "Re: New mail settings",
    teaser: "Will you answer him asap?",
    date: "Mar 7"
  },
  {
    id: 4,
    forId: "flexCheck15",
    name: "me, Peter (2)",
    subject: "Off on Thursday",
    badge: "Support",
    badgeClass: "info",
    teaser: "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
    date: "Mar 4"
  },
  {
    id: 5,
    forId: "flexCheck14",
    name: "Medium",
    subject: "This Week's Top Stories",
    badge: "Social",
    badgeClass: "primary",
    teaser: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
    date: "Feb 28"
  },
  {
    id: 6,
    forId: "flexCheck13",
    name: "Death to Stock",
    subject: "Montly High-Res Photos",
    teaser: "To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
    date: "Feb 28"
  },
  {
    id: 7,
    unread: true,
    forId: "flexCheck12",
    name: "Randy, me (5)",
    subject: "Last pic over my village",
    badge: "Family",
    badgeClass: "success",
    teaser: "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
    date: "5:01 am"
  },
  {
    id: 8,
    forId: "flexCheck11",
    name: "Andrew Zimmer",
    subject: "Mochila Beta: Subscription Confirme",
    teaser: "You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...",
    date: "Mar 8"
  },
  {
    id: 9,
    forId: "flexCheck10",
    name: "Infinity HR",
    subject: "Sveriges Hetaste sommarjobb",
    teaser: "Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 2014', ett rekryteringsevent som erbjuder jobb p\xE5 16 semesterorter iSverige.",
    date: "Mar 8"
  },
  {
    id: 10,
    forId: "flexCheck09",
    name: "Revibe",
    subject: "Weekend on Revibe",
    badge: "Friends",
    badgeClass: "danger",
    teaser: "Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!",
    date: "Feb 27"
  },
  {
    id: 11,
    forId: "flexCheck08",
    name: "Erik, me (5)",
    subject: "Regarding our meeting",
    teaser: "That's great, see you on Thursday!",
    date: "Feb 24"
  },
  {
    id: 12,
    forId: "flexCheck07",
    name: "KanbanFlow",
    subject: "Task assigned: Clone ARP's website",
    badge: "Social",
    badgeClass: "primary",
    teaser: "You have been assigned a task by Alex@Work on the board Web.",
    date: "Feb 24"
  },
  {
    id: 13,
    forId: "flexCheck06",
    name: "Tobias Berggren",
    subject: "Let's go fishing!",
    teaser: "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
    date: "Feb 23"
  },
  {
    id: 14,
    forId: "flexCheck05",
    name: "Charukaw, me (7)",
    subject: "Hey man",
    teaser: "Nah man sorry i don't. Should i get it?",
    date: "Feb 23"
  },
  {
    id: 15,
    unread: true,
    forId: "flexCheck04",
    name: "me, Peter (5)",
    subject: "Home again!",
    badge: "Support",
    badgeClass: "info",
    teaser: "That's just perfect! See you tomorrow.",
    date: "Feb 21"
  },
  {
    id: 16,
    forId: "flexCheck03",
    name: "Stack Exchange",
    subject: "1 new items in your Stackexchange inbox",
    teaser: "The following items were added to your Stack Exchange global inbox since you last checked it.",
    date: "Feb 21"
  },
  {
    id: 17,
    forId: "flexCheck02",
    name: "Google Drive Team",
    subject: "You can now use your storage in GoogleDrive",
    teaser: "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
    date: "Feb 20"
  },
  {
    id: 18,
    forId: "flexCheck01",
    name: "me, Susanna (11)",
    subject: "Train/Bus",
    teaser: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
    date: "Feb 19"
  }
];
const MOCK_DATA = {
  mailbox
};
const EmailToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isRight = false;
  return `<div class="${"email-content"}"><div class="${"p-4 pb-0"}"><div class="${"border-bottom border-bottom-dashed"}">${validate_component(Row, "Row").$$render($$result, { class: "mt-n2 mb-3 mb-sm-0" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {
        class: "col-sm-auto order-1 d-block d-lg-none"
      }, {}, {
        default: () => {
          return `<button type="${"button"}" class="${"btn btn-soft-success btn-icon btn-sm fs-16 email-menu-btn"}"><i class="${"ri-menu-2-fill align-bottom"}"></i></button>`;
        }
      })}
				<div class="${"col-sm order-3 order-sm-2"}"><div class="${"hstack gap-sm-1 align-items-center flex-wrap email-topbar-link"}"><div class="${"form-check checkbox-wrapper-mail fs-14 m-0"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheck18"}">
							${validate_component(Label, "Label").$$render($$result, {
        class: "form-check-label",
        for: "flexCheck18"
      }, {}, {})}</div>
						${validate_component(Button, "Button").$$render($$result, {
        id: "archive",
        color: "",
        class: "btn-ghost-secondary btn-icon btn-sm fs-16"
      }, {}, {
        default: () => {
          return `<i class="${"ri-inbox-archive-fill align-bottom"}"></i>`;
        }
      })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "archive", placement: "top" }, {}, {
        default: () => {
          return `Archive`;
        }
      })}

						${validate_component(Button, "Button").$$render($$result, {
        id: "reportspam",
        color: "",
        class: "btn btn-ghost-secondary btn-icon btn-sm fs-16"
      }, {}, {
        default: () => {
          return `<i class="${"ri-error-warning-fill align-bottom"}"></i>`;
        }
      })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "reportspam", placement: "top" }, {}, {
        default: () => {
          return `Report Spam`;
        }
      })}
						${validate_component(Button, "Button").$$render($$result, {
        color: "",
        class: "btn btn-ghost-secondary btn-icon btn-sm fs-16 remove-mail",
        id: "trash"
      }, {}, {
        default: () => {
          return `<i class="${"ri-delete-bin-5-fill align-bottom"}"></i>`;
        }
      })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "trash", placement: "top" }, {}, {
        default: () => {
          return `Trash`;
        }
      })}

						<div class="${"vr align-self-center mx-2"}"></div>
						${validate_component(Button, "Button").$$render($$result, {
        class: "btn btn-ghost-secondary btn-icon btn-sm fs-16",
        color: "",
        id: "labels"
      }, {}, {
        default: () => {
          return `<i class="${"ri-mail-open-fill align-bottom"}"></i>`;
        }
      })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "labels", placement: "top" }, {}, {
        default: () => {
          return `Labels`;
        }
      })}
						${validate_component(Button, "Button").$$render($$result, {
        color: "",
        class: "btn btn-ghost-secondary btn-icon btn-sm fs-16",
        id: "labels1"
      }, {}, {
        default: () => {
          return `<i class="${"ri-price-tag-3-fill align-bottom"}"></i>`;
        }
      })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "labels1", placement: "top" }, {}, {
        default: () => {
          return `Labels`;
        }
      })}</div></div>
				<div class="${"col-auto order-2 order-sm-3"}"><div class="${"d-flex gap-sm-1 email-topbar-link"}"><button type="${"button"}" class="${"btn btn-ghost-secondary btn-icon btn-sm fs-16"}"><i class="${"ri-refresh-line align-bottom"}"></i></button>
						${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
            tag: "button",
            class: "btn btn-ghost-secondary btn-icon btn-sm fs-16 p-0",
            color: ""
          }, {}, {
            default: () => {
              return `<i class="${"ri-more-2-fill align-bottom"}"></i>`;
            }
          })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Mark as Unread`;
                }
              })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Mark as Important`;
                }
              })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Add to Tasks`;
                }
              })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Add Star`;
                }
              })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Mute`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>`;
    }
  })}

			${validate_component(Row, "Row").$$render($$result, { class: "align-items-center mt-3" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<ul class="${"nav nav-tabs nav-tabs-custom nav-success gap-1 text-center border-bottom-0"}" role="${"tablist"}">${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fw-semibold active", href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-inbox-fill align-bottom d-inline-block"}"></i>
								<span class="${"ms-1 d-none d-sm-inline-block"}">Primary</span>`;
                }
              })}`;
            }
          })}
						${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fw-semibold", href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-group-fill align-bottom d-inline-block"}"></i>
								<span class="${"ms-1 d-none d-sm-inline-block"}">Social</span>`;
                }
              })}`;
            }
          })}
						${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(NavLink, "NavLink").$$render($$result, { class: "fw-semibold", href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-price-tag-3-fill align-bottom d-inline-block"}"></i>
								<span class="${"ms-1 d-none d-sm-inline-block"}">Promotions</span>`;
                }
              })}`;
            }
          })}</ul>`;
        }
      })}
				<div class="${"col-auto"}"><div class="${"text-muted"}">1-50 of 154</div></div>`;
    }
  })}</div>

		<div class="${"message-list-content mx-n4 px-4 message-list-scroll"}" data-simplebar><ul class="${"message-list"}">${each(MOCK_DATA.mailbox, (item) => {
    return `<li${add_attribute("class", item.unread ? "unread" : null, 0)}><div class="${"col-mail col-mail-1"}"><div class="${"form-check checkbox-wrapper-mail fs-14"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}"${add_attribute("id", item.forId, 0)}>
								${validate_component(Label, "Label").$$render($$result, {
      class: "form-check-label",
      for: item.forId
    }, {}, {})}</div>
							<button type="${"button"}" class="${"btn avatar-xs p-0 favourite-btn fs-15 active"}"><i class="${"ri-star-fill"}"></i></button>
							${validate_component(Link, "Link").$$render($$result, { href: null, class: "title" }, {}, {
      default: () => {
        return `${escape(item.name)}`;
      }
    })}</div>
						<div class="${"col-mail col-mail-2"}"><div class="${"subject pointer"}" style="${"cursor: pointer;"}">${item.badge ? `<span${add_attribute("class", "badge me-2 bg-" + item.badgeClass, 0)}>${escape(item.badge)}</span>` : ``}
								${escape(item.subject)} -
								<span class="${"teaser"}">${escape(item.teaser)}</span></div>
							<div class="${"date"}">${escape(item.date)}</div></div>
					</li>`;
  })}</ul></div></div></div>

<div class="${"email-detail-content"}">${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    class: "offcanvas-p-0",
    isOpen: isRight,
    placement: "end",
    id: "offcanvasRight"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "overflow-hidden" }, {}, {
        default: () => {
          return `<div class="${"pb-4 border-bottom border-bottom-dashed"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${""}"><button type="${"button"}" class="${"btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-email"}"><i class="${"ri-close-fill align-bottom"}"></i></button></div>`;
                }
              })}
					${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                default: () => {
                  return `<div class="${"hstack gap-sm-1 align-items-center flex-wrap email-topbar-link"}"><button type="${"button"}" class="${"btn btn-ghost-secondary btn-icon btn-sm fs-16 favourite-btn active"}"><i class="${"ri-star-fill align-bottom"}"></i></button>
							<button class="${"btn btn-ghost-secondary btn-icon btn-sm fs-16"}"><i class="${"ri-printer-fill align-bottom"}"></i></button>
							<button class="${"btn btn-ghost-secondary btn-icon btn-sm fs-16"}"><i class="${"ri-delete-bin-5-fill align-bottom"}"></i></button>
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "button",
                        class: "btn btn-ghost-secondary btn-icon btn-sm fs-16 p-0",
                        color: ""
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-more-2-fill align-bottom"}"></i>`;
                        }
                      })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Mark as Unread`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Mark as Important`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Add to Tasks`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Add Star`;
                            }
                          })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Mute`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}</div>
			<div class="${"mx-n4 px-4 email-detail-content-scroll"}" data-simplebar><div class="${"mt-4 mb-3"}"><h5 class="${"fw-bold"}">New updates for Skote Theme</h5></div>
				<div class="${"accordion accordion-flush"}"><div class="${"accordion-item border-dashed"}"><div class="${"accordion-header"}">${validate_component(Link, "Link").$$render($$result, {
            role: "button",
            href: "#!",
            class: "btn w-100 text-start px-0 bg-transparent shadow-none collapsed",
            id: "email-collapseOne"
          }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center text-muted"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
									<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-0"}">Jack Davis
										</h5>
										<div class="${"text-truncate fs-12"}">to: me
										</div></div>
									<div class="${"flex-shrink-0 align-self-start"}"><div class="${"text-muted fs-12"}">09 Jan 2022, 11:12 AM
										</div></div></div>`;
            }
          })}</div>

						${validate_component(Collapse, "Collapse").$$render($$result, {
            toggler: "#email-collapseOne",
            class: "accordion-collapse collapse"
          }, {}, {
            default: () => {
              return `<div class="${"accordion-body text-body px-0"}"><div><p>Hi,</p>
									<p>Praesent dui ex, dapibus eget mauris ut,
										finibus vestibulum enim. Quisque arcu
										leo, facilisis in fringilla id, luctus
										in tortor.
									</p>
									<p>Sed elementum turpis eu lorem interdum,
										sed porttitor eros commodo. Nam eu
										venenatis tortor, id lacinia diam. Sed
										aliquam in dui et porta. Sed bibendum
										orci non tincidunt ultrices.
									</p>
									<p>Sincerly,</p>

									<div class="${"d-flex gap-3"}"><div class="${"border rounded avatar-xl h-auto"}"><img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rouned-top"}">
											<div class="${"py-2 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block fw-semibold" }, {}, {
                default: () => {
                  return `Download`;
                }
              })}</div></div>
										<div class="${"border rounded avatar-xl h-auto"}"><img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid rouned-top"}">
											<div class="${"py-2 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: null, class: "d-block fw-semibold" }, {}, {
                default: () => {
                  return `Download`;
                }
              })}</div></div></div></div></div>`;
            }
          })}</div>

					<div class="${"accordion-item border-dashed"}"><div class="${"accordion-header"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            role: "button",
            class: "btn w-100 text-start px-0 bg-transparent shadow-none collapsed",
            "data-bs-toggle": "collapse",
            id: "email-collapseTwo",
            "aria-expanded": "true",
            "aria-controls": "email-collapseTwo"
          }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center text-muted"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
									<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-0"}">Anna Adame
										</h5>
										<div class="${"text-truncate fs-12"}">to: jackdavis@email.com
										</div></div>
									<div class="${"flex-shrink-0 align-self-start"}"><div class="${"text-muted fs-12"}">09 Jan 2022, 02:15 PM
										</div></div></div>`;
            }
          })}</div>

						${validate_component(Collapse, "Collapse").$$render($$result, {
            toggler: "#email-collapseTwo",
            class: "accordion-collapse collapse"
          }, {}, {
            default: () => {
              return `<div class="${"accordion-body text-body px-0"}"><div><p>Hi,</p>
									<p>If several languages coalesce, the
										grammar of the resulting language is
										more simple and regular than that of the
										individual.
									</p>
									<p>Thank you</p></div></div>`;
            }
          })}</div>

					<div class="${"accordion-item border-dashed"}"><div class="${"accordion-header"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            role: "button",
            class: "btn w-100 text-start px-0 bg-transparent shadow-none",
            "data-bs-toggle": "collapse",
            id: "email-collapseThree",
            "aria-expanded": "true",
            "aria-controls": "email-collapseThree"
          }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center text-muted"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}"></div>
									<div class="${"flex-grow-1 overflow-hidden"}"><h5 class="${"fs-14 text-truncate mb-0"}">Jack Davis
										</h5>
										<div class="${"text-truncate fs-12"}">to: me
										</div></div>
									<div class="${"flex-shrink-0 align-self-start"}"><div class="${"text-muted fs-12"}">10 Jan 2022, 10:08 AM
										</div></div></div>`;
            }
          })}</div>

						${validate_component(Collapse, "Collapse").$$render($$result, {
            toggler: "#email-collapseThree",
            class: "accordion-collapse collapse",
            defaultOpen: true
          }, {}, {
            default: () => {
              return `<div class="${"accordion-body text-body px-0"}"><div><p>Hi,</p>
									<p>Everyone realizes why a new common
										language would be desirable: one could
										refuse to pay expensive translators. To
										achieve this, it would be necessary to
										have uniform grammar pronunciation.
									</p>
									<p>Thank you</p></div></div>`;
            }
          })}</div></div></div>`;
        }
      })}
		<div class="${"mt-auto p-4"}"><form class="${"mt-2"}"><div>${validate_component(Label, "Label").$$render($$result, {
        for: "exampleFormControlTextarea1",
        class: "form-label"
      }, {}, {
        default: () => {
          return `Reply :`;
        }
      })}
					<textarea class="${"form-control border-bottom-0 rounded-top rounded-0 border"}" id="${"exampleFormControlTextarea1"}" rows="${"3"}" placeholder="${"Enter message"}"></textarea>
					<div class="${"bg-light px-2 py-1 rouned-bottom border"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "light", id: "Bold1" }, {}, {
                    default: () => {
                      return `<i class="${"ri-bold align-bottom"}"></i>`;
                    }
                  })}
									${validate_component(Button, "Button").$$render($$result, {
                    size: "sm",
                    color: "light",
                    id: "Italic1"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-italic align-bottom"}"></i>`;
                    }
                  })}
									${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "light", id: "Link1" }, {}, {
                    default: () => {
                      return `<i class="${"ri-link align-bottom"}"></i>`;
                    }
                  })}
									${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "light", id: "Image1" }, {}, {
                    default: () => {
                      return `<i class="${"ri-image-2-line align-bottom"}"></i>`;
                    }
                  })}`;
                }
              })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Bold1" }, {}, {
                default: () => {
                  return `Bold`;
                }
              })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Italic1" }, {}, {
                default: () => {
                  return `Italic`;
                }
              })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Link1" }, {}, {
                default: () => {
                  return `Link`;
                }
              })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Image1" }, {}, {
                default: () => {
                  return `Image`;
                }
              })}`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
            default: () => {
              return `${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-sm" }, {}, {
                    default: () => {
                      return `<i class="${"ri-send-plane-2-fill align-bottom"}"></i>`;
                    }
                  })}
									${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "button",
                    class: "btn btn-success btn-sm",
                    split: true
                  }, {}, {})}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `<i class="${"ri-timer-line text-muted me-1 align-bottom"}"></i> Schedule Send`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div></form></div>`;
    }
  })}</div>`;
});
export { EmailToolbar as default };
