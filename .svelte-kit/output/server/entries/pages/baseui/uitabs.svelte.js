import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { i as img3 } from "../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../chunks/img-7-4861de06.js";
import { i as img8 } from "../../../chunks/img-8-19298a6b.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
const Uitabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  let justifyTab = 1;
  let pillsTab = 1;
  let justifyPillsTab = 1;
  let verticalTab = 1;
  let cardHeaderTab = 1;
  let customActiveTab = 1;
  let arrowNavTab = 1;
  let headerJustifyTab = 1;
  let bottomCardTab = 1;
  let customHoverTab = 1;
  let customverticalTab = 1;
  let animationNavTab = 1;
  let navBadgeTab = 1;
  let topBorderjustifyTab = 1;
  let topBorderTab = 1;
  let colorNavTab = 1;
  let lightNavTab = 1;
  let outlineborderTab = 1;
  let customNav = 1;
  return `${$$result.head += `${$$result.title = `<title>Tabs | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Tabs", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Default Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">A default tabbed interface.</p>

						${validate_component(Nav, "Nav").$$render($$result, { tabs: true, class: "nav-tabs mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: activeTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: activeTab == 2
                              }, {}, {
                                default: () => {
                                  return `Product
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: activeTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: activeTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "home"
                          }, {}, {
                            default: () => {
                              return `<h6>Graphic Design</h6>
								<p class="${"mb-0"}">They all have something to say beyond the
									words on the page. They can come across as
									casual or neutral, exotic or graphic. That&#39;s
									why it&#39;s important to think about your
									message, then choose a font that fits. Cosby
									sweater eu banh mi, qui irure terry
									richardson ex squid.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "product"
                          }, {}, {
                            default: () => {
                              return `<h6>Product</h6>
								<p class="${"mb-0"}">You&#39;ve probably heard that opposites
									attract. The same is true for fonts. Don&#39;t
									be afraid to combine font styles that are
									different but complementary, like sans serif
									with serif, short with tall, or decorative
									with simple. Qui photo booth letterpress,
									commodo enim craft beer mlkshk aliquip jean
									shorts ullamco ad vinyl cillum PBR.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "messages"
                          }, {}, {
                            default: () => {
                              return `<h6>Messages</h6>
								<p class="${"mb-0"}">Etsy mixtape wayfarers, ethical wes anderson
									tofu before they sold out mcsweeney&#39;s
									organic lomo retro fanny pack lo-fi
									farm-to-table readymade. Messenger bag
									gentrify pitchfork tattooed craft beer,
									iphone skateboard locavore carles etsy
									salvia banksy hoodie helvetica. DIY synth
									PBR banksy irony.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "settings"
                          }, {}, {
                            default: () => {
                              return `<h6>Settings</h6>
								<p class="${"mb-0"}">Trust fund seitan letterpress, keytar raw
									denim keffiyeh etsy art party before they
									sold out master cleanse gluten-free squid
									scenester freegan cosby sweater. Fanny pack
									portland seitan DIY, art party locavore wolf
									cliche high life echo park Austin. Cred
									vinyl keffiyeh DIY salvia PBR, banh mi
									before they sold out farm-to-table VHS.
								</p>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Justify Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-justified</code> class to generate equal-width
							elements with all horizontal space will be occupied by
							nav links.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav-tabs nav-justified mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyTab == 2
                              }, {}, {
                                default: () => {
                                  return `Product
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "base-justified-home"
                          }, {}, {
                            default: () => {
                              return `<h6>Graphic Design</h6>
								<p class="${"mb-0"}">They all have something to say beyond the
									words on the page. They can come across as
									casual or neutral, exotic or graphic. That&#39;s
									why it&#39;s important to think about your
									message, then choose a font that fits. Cosby
									sweater eu banh mi, qui irure terry
									richardson ex squid.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "product"
                          }, {}, {
                            default: () => {
                              return `<h6>Product</h6>
								<p class="${"mb-0"}">You&#39;ve probably heard that opposites
									attract. The same is true for fonts. Don&#39;t
									be afraid to combine font styles that are
									different but complementary, like sans serif
									with serif, short with tall, or decorative
									with simple. Qui photo booth letterpress,
									commodo enim craft beer mlkshk aliquip jean
									shorts ullamco ad vinyl cillum PBR.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "base-justified-messages"
                          }, {}, {
                            default: () => {
                              return `<h6>Messages</h6>
								<p class="${"mb-0"}">Etsy mixtape wayfarers, ethical wes anderson
									tofu before they sold out mcsweeney&#39;s
									organic lomo retro fanny pack lo-fi
									farm-to-table readymade. Messenger bag
									gentrify pitchfork tattooed craft beer,
									iphone skateboard locavore carles etsy
									salvia banksy hoodie helvetica. DIY synth
									PBR banksy irony.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "base-justified-settings"
                          }, {}, {
                            default: () => {
                              return `<h6>Settings</h6>
								<p class="${"mb-0"}">Trust fund seitan letterpress, keytar raw
									denim keffiyeh etsy art party before they
									sold out master cleanse gluten-free squid
									scenester freegan cosby sweater. Fanny pack
									portland seitan DIY, art party locavore wolf
									cliche high life echo park Austin. Cred
									vinyl keffiyeh DIY salvia PBR, banh mi
									before they sold out farm-to-table VHS.
								</p>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Pills Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-pills</code> class to generate particular
							selected nav links without borders.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, { pills: true, class: "nav-success mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: pillsTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: pillsTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: pillsTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: pillsTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "home-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of
										them jean shorts Austin. Nesciunt tofu
										stumptown aliqua, retro synth master
										cleanse.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in
										the example below, can make things
										unpleasant for the reader. The goal is
										to make your text as comfortable to read
										as possible.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "profile-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your
										tracking to create a certain artistic
										effect. It can also help you fix fonts
										that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken
										possession of my entire soul, like these
										sweet mornings of spring which I enjoy
										with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "messages-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of
										art birthed into this world, and while
										you have the opportunity to be creative
										and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "settings-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different
										opinions and graphic design basics, I
										came up with a list of 30 graphic design
										tips that you can start implementing.
									</div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Pills Justified Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-pills nav-justified</code> class to generate
							equal-width elements without borders, all horizontal
							space will be occupied by nav links.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, { pills: true, class: "nav-justified mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyPillsTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyPillsTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyPillsTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: justifyPillsTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "pill-justified-home-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of
										them jean shorts Austin. Nesciunt tofu
										stumptown aliqua, retro synth master
										cleanse.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in
										the example below, can make things
										unpleasant for the reader. The goal is
										to make your text as comfortable to read
										as possible.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "pill-justified-profile-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your
										tracking to create a certain artistic
										effect. It can also help you fix fonts
										that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken
										possession of my entire soul, like these
										sweet mornings of spring which I enjoy
										with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "pill-justified-messages-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of
										art birthed into this world, and while
										you have the opportunity to be creative
										and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "pill-justified-settings-1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different
										opinions and graphic design basics, I
										came up with a list of 30 graphic design
										tips that you can start implementing.
									</div></div>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Vertical Nav Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>flex-column</code> class to create Vertical
							nav tabs.
						</p>
						${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Nav, "Nav").$$render($$result, {
                                pills: true,
                                class: "flex-column",
                                id: "v-pills-tab"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: verticalTab == 1,
                                        class: "mb-2",
                                        id: "v-pills-home-tab"
                                      }, {}, {
                                        default: () => {
                                          return `Home
										`;
                                        }
                                      })}`;
                                    }
                                  })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: verticalTab == 2,
                                        class: "mb-2",
                                        id: "v-pills-profile-tab"
                                      }, {}, {
                                        default: () => {
                                          return `Profile
										`;
                                        }
                                      })}`;
                                    }
                                  })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: verticalTab == 3,
                                        class: "mb-2",
                                        id: "v-pills-messages-tab"
                                      }, {}, {
                                        default: () => {
                                          return `Messages
										`;
                                        }
                                      })}`;
                                    }
                                  })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: verticalTab == 4,
                                        id: "v-pills-settings-tab"
                                      }, {}, {
                                        default: () => {
                                          return `Settings
										`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(Col, "Col").$$render($$result, { md: 9 }, {}, {
                            default: () => {
                              return `${validate_component(TabContent, "TabContent").$$render($$result, {
                                class: "text-muted mt-4 mt-md-0",
                                id: "v-pills-tabContent"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "active",
                                    id: "v-pills-home"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-2"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img4, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">You always want to make sure
													that your fonts work well
													together and try to limit
													the number of fonts you use
													to three or less. Experiment
													and play around with the
													fonts that you already have
													in the software you\u2019re
													working with reputable font
													websites.
												</p></div></div>
										<p class="${"mb-0"}">This may be the most commonly
											encountered tip I received from the
											designers I spoke with. They highly
											encourage that you use different
											fonts in one design, but do not
											over-exaggerate and go overboard.
										</p>`;
                                    }
                                  })}
									${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "",
                                    id: "v-pills-profile"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-2"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img5, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">I also decreased the
													transparency in the text so
													that the mountains come
													through the text, bringing
													the quote truly to life.
													Make sure that the placement
													of your text is pleasing to
													look at, and you try to
													achieve symmetry for this
													effect.
												</p></div></div>
										<p class="${"mb-0"}">You&#39;ve probably heard that opposites
											attract. The same is true for fonts.
											Don&#39;t be afraid to combine font
											styles that are different but
											complementary. You can always play
											around with the text that is
											overlaid on an image.
										</p>`;
                                    }
                                  })}
									${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "",
                                    id: "v-pills-messages"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-2"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img6, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">In this image, you can see
													that the line height has
													been reduced significantly,
													and the size was brought up
													exponentially. Experiment
													and play around with the
													fonts that you already have
													in the software you\u2019re
													working with reputable font
													websites.
												</p></div></div>
										<p class="${"mb-0"}">They highly encourage that you use
											different fonts in one design, but
											do not over-exaggerate and go
											overboard This may be the most
											commonly encountered tip I received
											from the designers I spoke with.
										</p>`;
                                    }
                                  })}

									${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "",
                                    id: "v-pills-settings"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-2"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img7, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">When designing, the goal is
													to draw someone\u2019s attention
													and portray to them what
													you\u2019re trying to say. You
													can make a big statement by
													using little tricks, like
													this one. Use contrasting
													fonts. you can use a bold
													sanserif font with a
													cursive.
												</p></div></div>
										<p class="${"mb-0"}">If you\u2019re using multiple elements,
											make sure that your principal object
											is larger than the others, as the
											eye of your viewer will
											automatically be drawn to the larger
											of the two objects.
										</p>`;
                                    }
                                  })}`;
                                }
                              })}`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Card Header Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"card-header align-items-center d-flex"}"><div class="${"flex-grow-1 oveflow-hidden"}"><p class="${"text-muted text-truncates mb-0"}">Use <code>card-header-tabs</code> class to create
								card header tabs.
							</p></div>
						<div class="${"flex-shrink-0 ms-2"}">${validate_component(Nav, "Nav").$$render($$result, {
                    tabs: true,
                    class: "nav justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
                  }, {}, {
                    default: () => {
                      return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: cardHeaderTab == 1
                          }, {}, {
                            default: () => {
                              return `Home
									`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: cardHeaderTab == 2
                          }, {}, {
                            default: () => {
                              return `Profile
									`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: cardHeaderTab == 3
                          }, {}, {
                            default: () => {
                              return `Messages
									`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div></div>
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "home2"
                          }, {}, {
                            default: () => {
                              return `<p class="${"flex-grow-1 mb-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-lg rounded float-start me-3"}">
									Food truck fixie locavore, accusamus mcsweeney&#39;s
									marfa nulla single-origin coffee squid. Exercitation
									+1 labore velit, blog sartorial PBR leggings
									next level wes anderson artisan four loko farm-to-table
									craft beer twee. commodo enim craft beer mlkshk
									aliquip jean shorts ullamco ad vinyl cillum PBR.
									Homo nostrud organic, assumenda labore aesthetic
									magna delectus.commodo enim craft beer mlkshk
									aliquip jean shorts ullamco ad vinyl cillum PBR.
									Homo nostrud organic, assumenda labore aesthetic
									magna delectus. If you\u2019re using multiple elements,
									make sure that your principal object is larger
									than assumenda.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "profile2"
                          }, {}, {
                            default: () => {
                              return `<p class="${"me-3 mb-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-lg rounded float-end ms-3"}"> Experiment and play around with the fonts
									that you already have in the software you\u2019re
									working with reputable font websites. commodo
									enim craft beer mlkshk aliquip jean shorts ullamco
									ad vinyl cillum PBR. Homo nostrud organic, assumenda
									labore aesthetic magna delectus.commodo enim
									craft beer mlkshk aliquip jean shorts ullamco
									ad vinyl cillum PBR. Homo nostrud organic, assumenda
									labore aesthetic magna delectus Scale all elements
									of your design: text, elements, buttons, everything.
									Increase or decrease the letter spacing depending
									on the situation and try, try again until it
									looks right, and each /.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "messages2"
                          }, {}, {
                            default: () => {
                              return `<p class="${"ms-3 mb-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-lg rounded float-start me-3"}">Trust fund seitan letterpress, keytar raw
									denim keffiyeh etsy art party before they
									sold out master cleanse gluten-free squid
									scenester freegan cosby sweater. Fanny pack
									portland seitan DIY, art party locavore wolf
									cliche high life echo park Austin. Cred
									vinyl keffiyeh DIY salvia PBR, beer mlkshk
									aliquip jean shorts ullamco ad vinyl cillum
									PBR. Homo nostrud organic, assumenda labore
									aes Homo nostrud organic, assumenda labore
									aesthetic magna delectus Scale all elements
									of your design: text, elements, buttons,
									everything.Increase or decrease the letter
									spacing depending on the situation and try,
									try again until it looks right, and each.
								</p>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Custom Tabs Bordered</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-tabs-custom</code> class to create custom
							tabs with borders.
						</p>
						${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customActiveTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customActiveTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customActiveTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customActiveTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "home1"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-multiple-blank-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Trust fund seitan letterpress, keytar
										raw denim keffiyeh etsy art party before
										they sold out master cleanse gluten-free
										squid scenester freegan cosby sweater.
										Fanny pack portland seitan DIY, art
										party locavore wolf cliche high life
										echo park Austin. Cred vinyl keffiyeh
										DIY salvia PBR.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "btn btn-sm btn-soft-primary"
                              }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-multiple-blank-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">When, while the lovely valley teems with
										vapour around me, and the meridian sun
										strikes the upper surface of the
										impenetrable foliage of my trees, and
										but a few stray gleams steal into the
										inner sanctuary, I throw myself down
										among the tall grass by the trickling
										stream; and, as I lie close to the
										earth, a thousand unknown.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "btn btn-sm btn-soft-primary"
                              }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-multiple-blank-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Etsy mixtape wayfarers, ethical wes
										anderson tofu before they sold out
										mcsweeney&#39;s organic lomo retro fanny
										pack lo-fi farm-to-table readymade.
										Messenger bag gentrify pitchfork
										tattooed craft beer, iphone skateboard
										locavore carles etsy salvia banksy
										hoodie helvetica. DIY synth PBR banksy
										irony.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "btn btn-sm btn-soft-primary"
                              }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-multiple-blank-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">when darkness overspreads my eyes, and
										heaven and earth seem to dwell in my
										soul and absorb its power, like the form
										of a beloved mistress, then I often
										think with longing, Oh, would I could
										describe these conceptions, could
										impress upon paper all that is living so
										full and warm within me, that it might
										be the.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "btn btn-sm btn-soft-primary"
                              }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Arrow Nav tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>arrow-navtabs </code>class to create arrow
							nav tabs.
						</p>
						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav nav-pills arrow-navtabs nav-success bg-light mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: arrowNavTab == 1
                              }, {}, {
                                default: () => {
                                  return `Overview
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: arrowNavTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: arrowNavTab == 3
                              }, {}, {
                                default: () => {
                                  return `Contact
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "arrow-overview"
                          }, {}, {
                            default: () => {
                              return `<h6>Give your text a good structure</h6>
								<p class="${"mb-0"}">Contrary to popular belief, you don\u2019t have
									to work endless nights and hours to create a ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Fantastic Design</b>`;
                                }
                              })} by using complicated 3D elements. Flat design
									is your friend. Remember that. And the great
									thing about flat design is that it has become
									more and more popular over the years, which is
									excellent news to the beginner and advanced designer.
								</p>`;
                            }
                          })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "arrow-profile"
                          }, {}, {
                            default: () => {
                              return `<h6>Use a color palette</h6>
								<p class="${"mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s
									in our nature to be interested in the
									unusual, and that\u2019s why using contrasting
									colors in ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Graphic Design</b>`;
                                }
                              })} is a must. It\u2019s eye-catching, it makes a statement,
									it\u2019s impressive graphic design. Increase or decrease
									the letter spacing depending on the situation
									and try, try again until it looks right, and
									each letter has the perfect spot of its own.
								</p>`;
                            }
                          })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "arrow-contact"
                          }, {}, {
                            default: () => {
                              return `<h6>Contact</h6>
								<p class="${"mb-0"}">Consistency is the one thing that can take
									all of the different elements in your
									design, and tie them all together and make
									them work. In an awareness campaign, it is
									vital for people to begin put 2 and 2
									together and begin to recognize your cause.
									Consistency piques people\u2019s interest is that
									it has become more and more popular over the
									years, which is excellent news to the
									beginner and advanced ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Contact Designer</b>`;
                                }
                              })}.
								</p>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Header Justify Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"card-header align-items-xl-center d-xl-flex"}"><p class="${"text-muted flex-grow-1 mb-xl-0"}">Use <code>card-header-pills</code> class to create header
							justify tab.
						</p>
						<div class="${"flex-shrink-0"}">${validate_component(Nav, "Nav").$$render($$result, { pills: true, class: "card-header-pills" }, {}, {
                    default: () => {
                      return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: headerJustifyTab == 1
                          }, {}, {
                            default: () => {
                              return `Developers
									`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: headerJustifyTab == 2
                          }, {}, {
                            default: () => {
                              return `Designers
									`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: headerJustifyTab == 3
                          }, {}, {
                            default: () => {
                              return `Managers
									`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div></div>
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "developers"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Dominic Charlton
												</h6>
												<p class="${"mb-0"}">520 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Charlie Pritchard
												</h6>
												<p class="${"mb-0"}">45.2K Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Harvey Wells
												</h6>
												<p class="${"mb-0"}">1025 Followers
												</p></div></div>`;
                                    }
                                  })}
									${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mt-3 mt-sm-0"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Amelie Townsend
												</h6>
												<p class="${"mb-0"}">6584 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Emily Slater
												</h6>
												<p class="${"mb-0"}">24.8K Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Declan Long
												</h6>
												<p class="${"mb-0"}">1.5K Followers
												</p></div></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "designers"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Luke Brown
												</h6>
												<p class="${"mb-0"}">654 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Matilda Walker
												</h6>
												<p class="${"mb-0"}">270 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Leo Stokes
												</h6>
												<p class="${"mb-0"}">4120 Followers
												</p></div></div>`;
                                    }
                                  })}
									${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mt-3 mt-sm-0"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Chelsea Preston
												</h6>
												<p class="${"mb-0"}">9854 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Jennifer Barker
												</h6>
												<p class="${"mb-0"}">15.8K Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Callum Murray
												</h6>
												<p class="${"mb-0"}">2K Followers</p></div></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "managers"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Dominic Charlton
												</h6>
												<p class="${"mb-0"}">784 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Matilda Walker
												</h6>
												<p class="${"mb-0"}">6549 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Jennifer Barker
												</h6>
												<p class="${"mb-0"}">2100 Followers
												</p></div></div>`;
                                    }
                                  })}
									${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mt-3 mt-sm-0"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Amelie Townsend
												</h6>
												<p class="${"mb-0"}">4565 Followers
												</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Emily Slater
												</h6>
												<p class="${"mb-0"}">8K Followers</p></div></div>
										<div class="${"d-flex mt-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1 fs-14"}">Declan Long
												</h6>
												<p class="${"mb-0"}">9800 Followers
												</p></div></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Bottom Card Nav Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>card-footer-tabs</code> class to create the
							bottom card nav justify tab.
						</p>
						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "bottomtabs-home"
                          }, {}, {
                            default: () => {
                              return `<h5><i class="${"ri-home-3-line align-bottom me-1"}"></i> Home
								</h5>
								<p class="${"mb-2"}">On the note of consistency, color
									consistency is a MUST. If you\u2019re not trying
									to create crazy contrast in your design,
									then a great idea would be for you to use a
									color palette throughout your entire design.
									It will subconsciously interest viewers and
									also is very pleasing to look at.
								</p>
								<p class="${"mb-0"}">Any bypasser will stop to see what you have
									to see, even if your design has nothing to
									do with them, for the simple fact that it is
									beautiful to look at.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "bottomtabs-profile"
                          }, {}, {
                            default: () => {
                              return `<h5><i class="${"ri-user-2-line align-bottom me-1"}"></i> Profile
								</h5>
								<p class="${"mb-2"}">Just like in the image where we talked about
									using multiple fonts, you can see that the
									background in this graphic design is
									blurred. Whenever you put text on top of an
									image, it\u2019s important that your viewers can
									understand the text, and sometimes that
									means applying a gaussian readable.
								</p>
								<p class="${"mb-0"}">A very bad quack might jinx zippy fowls. Few
									quips galvanized the mock jury box. Quick
									brown dogs jump over the lazy fox. The jay,
									pig, fox, zebra, and my wolves.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "bottomtabs-messages"
                          }, {}, {
                            default: () => {
                              return `<h5><i class="${"ri-mail-line align-bottom me-1"}"></i>
									Messages
								</h5>
								<p class="${"mb-2"}">Blowzy red vixens fight for a quick jump.
									Joaquin Phoenix was gazed by MTV for luck. A
									wizard\u2019s job is to vex chumps quickly in
									fog. Watch &quot;Jeopardy! &quot;, Alex Trebek&#39;s fun
									TV quiz game. Woven silk pyjamas exchanged
									for blue quartz. Brawny gods just flocked up
									to quiz and vex him.
								</p>
								<p class="${"mb-0"}">Big July earthquakes confound zany
									experimental vow. My girl wove six dozen
									plaid jackets before she quit. Six big
									devils from Japan quickly forgot how to
									waltz.
								</p>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
					<div class="${"card-footer bg-transparent border-top"}">${validate_component(Nav, "Nav").$$render($$result, {
                    pills: true,
                    class: "nav-justified card-footer-tabs fs-17"
                  }, {}, {
                    default: () => {
                      return `${validate_component(NavItem, "NavItem").$$render($$result, { id: "home" }, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: bottomCardTab == 1
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-home-3-line"}"></i>`;
                            }
                          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "home" }, {}, {
                            default: () => {
                              return `Home`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(NavItem, "NavItem").$$render($$result, { id: "profile" }, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: bottomCardTab == 2
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-user-2-line"}"></i>`;
                            }
                          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "profile" }, {}, {
                            default: () => {
                              return `Profile`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(NavItem, "NavItem").$$render($$result, { id: "messages" }, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: bottomCardTab == 3
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-mail-line"}"></i>`;
                            }
                          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "messages" }, {}, {
                            default: () => {
                              return `Messages`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Custom Hover Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>custom-hover-nav-tabs</code> class to create
							custom hover tabs.
						</p>`;
                    }
                  })}
					<div class="${"border"}">${validate_component(Nav, "Nav").$$render($$result, {
                    pills: true,
                    class: "nav nav-pills custom-hover-nav-tabs"
                  }, {}, {
                    default: () => {
                      return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: customHoverTab == 1
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-user-fill nav-icon nav-tab-position"}"></i>
									<h5 class="${"nav-titl nav-tab-position m-0"}">Customer
									</h5>`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: customHoverTab == 2
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-file-text-line nav-icon nav-tab-position"}"></i>
									<h5 class="${"nav-titl nav-tab-position m-0"}">Description
									</h5>`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            style: "cursor: pointer",
                            active: customHoverTab == 3
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-star-half-line nav-icon nav-tab-position"}"></i>
									<h5 class="${"nav-titl nav-tab-position m-0"}">Reviews
									</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "custom-hover-customere"
                          }, {}, {
                            default: () => {
                              return `<h6>Customer Details</h6>
								<div class="${"table-responsive"}"><table class="${"table mb-0"}"><thead><tr><th scope="${"col"}">#</th>
												<th scope="${"col"}">Name</th>
												<th scope="${"col"}">Address</th>
												<th scope="${"col"}">Country</th>
												<th scope="${"col"}">Pincode</th></tr></thead>
										<tbody><tr><th scope="${"row"}">1</th>
												<td>Ruby Butcher</td>
												<td>412 Rosewood Lane</td>
												<td>New York</td>
												<td>10019</td></tr>
											<tr><th scope="${"row"}">2</th>
												<td>Martha T Goldberg</td>
												<td>2760 Clarksburg Park Road</td>
												<td>Arizona</td>
												<td>86038</td></tr></tbody></table></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "custom-hover-customere"
                          }, {}, {
                            default: () => {
                              return `<h6>Description</h6>
								<div class="${"table-responsive"}"><table class="${"table mb-0"}"><thead><tr><th scope="${"col"}">Title</th>
												<th scope="${"col"}">Categories</th>
												<th scope="${"col"}">Author</th></tr></thead>
										<tbody><tr><td>Building Web Apps With
													Wordpress</td>
												<td>Web, Wordpress, Design</td>
												<td>Lucia Victor</td></tr>
											<tr><th>Information Technology</th>
												<td>Management, Manager, Design</td>
												<td>Arora Sumita</td></tr></tbody></table></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "custom-hover-reviews"
                          }, {}, {
                            default: () => {
                              return `<h6>Customer Reviews</h6>
								<div class="${"table-responsive"}"><table class="${"table mb-0"}"><thead><tr><th scope="${"col"}">Name</th>
												<th scope="${"col"}">Location</th>
												<th scope="${"col"}">Amount</th>
												<th scope="${"col"}">Ratings</th></tr></thead>
										<tbody><tr><td>Luke Brown</td>
												<td>New York</td>
												<td>$745</td>
												<td>4.4 <i class="${"ri-star-s-fill ms-1 text-warning align-middle"}"></i></td></tr>
											<tr><td>Matilda Walker</td>
												<td>USA</td>
												<td>$87.125</td>
												<td>2.7 <i class="${"ri-star-s-fill ms-1 text-warning align-middle"}"></i></td></tr></tbody></table></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Custom Vertical Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>custom-verti-nav-pills</code> class to create
							custom vertical tabs.
						</p>
						${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Nav, "Nav").$$render($$result, {
                                pills: true,
                                class: "nav nav-pills flex-column nav-pills-tab custom-verti-nav-pills text-center"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: customverticalTab == 1,
                                        class: "mb-2",
                                        id: "custom-v-pills-home-tab"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-home-4-line d-block fs-20 mb-1"}"></i>
											Home
										`;
                                        }
                                      })}`;
                                    }
                                  })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: customverticalTab == 2,
                                        class: "mb-2",
                                        id: "custom-v-pills-profile-tab"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-user-2-line d-block fs-20 mb-1"}"></i>
											Profile
										`;
                                        }
                                      })}`;
                                    }
                                  })}
									${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: customverticalTab == 3,
                                        class: "mb-2",
                                        id: "custom-v-pills-messages-tab"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-mail-line d-block fs-20 mb-1"}"></i>
											Messages
										`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted mt-3 mt-lg-0" }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "active",
                                    id: "custom-v-pills-home"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img4, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">Experiment and play around
													with the fonts that you
													already have in the software
													you\u2019re working with
													reputable font websites.
													commodo enim craft beer
													mlkshk aliquip jean shorts
													ullamco ad vinyl cillum PBR.
													Homo nostrud organic,
													assumenda labore aesthetic
													magna delectus.
												</p></div></div>
										<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}"><p class="${"mb-0"}">Always want to make sure
													that your fonts work well
													together and try to limit
													the number of fonts you use
													to three or less. Experiment
													and play around with the
													fonts that you already have
													in the software you\u2019re
													working with reputable font
													websites.
												</p></div>
											<div class="${"flex-shrink-0"}"><img${add_attribute("src", img5, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>`;
                                    }
                                  })}
									${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "",
                                    id: "custom-v-pills-profile"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img3, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">In some designs, you might
													adjust your tracking to
													create a certain artistic
													effect. It can also help you
													fix fonts that are poorly
													spaced to begin with. A
													wonderful serenity has taken
													possession of my entire
													soul, like these sweet
													mornings of spring which I
													enjoy with my whole heart.
												</p></div></div>
										<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}"><p class="${"mb-0"}">Each design is a new, unique
													piece of art birthed into
													this world, and while you
													have the opportunity to be
													creative and make your own
													style choices. For that very
													reason, I went on a quest
													and spoke to many different
													professional graphic
													designers.
												</p></div>
											<div class="${"flex-shrink-0"}"><img${add_attribute("src", img6, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>`;
                                    }
                                  })}
									${validate_component(TabPane, "TabPane").$$render($$result, {
                                    class: "",
                                    id: "custom-v-pills-messages"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", img7, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div>
											<div class="${"flex-grow-1 ms-3"}"><p class="${"mb-0"}">Trust fund seitan
													letterpress, keytar raw
													denim keffiyeh etsy art
													party before they sold out
													master cleanse gluten-free
													squid scenester freegan
													cosby sweater. Fanny pack
													portland seitan DIY, art
													party locavore wolf cliche
													high life echo park Austin.
													Cred vinyl keffiyeh DIY
													salvia PBR.
												</p></div></div>
										<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}"><p class="${"mb-0"}">They all have something to
													say beyond the words on the
													page. They can come across
													as casual or neutral, exotic
													or graphic. That&#39;s why it&#39;s
													important to think about
													your message, then choose a
													font that fits. Cosby
													sweater eu banh mi, qui
													irure terry richardson ex
													squid.
												</p></div>
											<div class="${"flex-shrink-0"}"><img${add_attribute("src", img8, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Animation Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>animation-nav</code> class to create animated
							tabs.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav nav-pills animation-nav nav-justified gap-2 mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: animationNavTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: animationNavTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: animationNavTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: animationNavTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "animation-home"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of
										them jean shorts Austin. Nesciunt tofu
										stumptown aliqua, retro synth master
										cleanse.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in
										the example below, can make things
										unpleasant for the reader. The goal is
										to make your text as comfortable to read
										as possible.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "animation-profile"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your
										tracking to create a certain artistic
										effect. It can also help you fix fonts
										that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken
										possession of my entire soul, like these
										sweet mornings of spring which I enjoy
										with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "animation-messages"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of
										art birthed into this world, and while
										you have the opportunity to be creative
										and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "animation-settings"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different
										opinions and graphic design basics, I
										came up with a list of 30 graphic design
										tips that you can start implementing.
									</div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Nav with Badge</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of nav tabs with badge wrapped in nav item.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav-tabs nav-justified mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: navBadgeTab == 1
                              }, {}, {
                                default: () => {
                                  return `Explore
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: navBadgeTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile <span class="${"badge bg-success"}">Done</span>`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: navBadgeTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages <span class="${"badge bg-danger rounded-circle"}">5</span>`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: navBadgeTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "nav-badge-home"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of
										them jean shorts Austin. Nesciunt tofu
										stumptown aliqua, retro synth master
										cleanse.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in
										the example below, can make things
										unpleasant for the reader. The goal is
										to make your text as comfortable to read
										as possible.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-badge-profile"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your
										tracking to create a certain artistic
										effect. It can also help you fix fonts
										that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken
										possession of my entire soul, like these
										sweet mornings of spring which I enjoy
										with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-badge-messages"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of
										art birthed into this world, and while
										you have the opportunity to be creative
										and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-badge-settings"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different
										opinions and graphic design basics, I
										came up with a list of 30 graphic design
										tips that you can start implementing.
									</div></div>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Border Top Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-border-top</code> class to create nav tabs
							with border at top.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav nav-tabs nav-border-top nav-border-top-primary mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderjustifyTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderjustifyTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderjustifyTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderjustifyTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "nav-border-top-home"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-line text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Trust fund seitan letterpress, keytar
										raw denim keffiyeh etsy art party before
										they sold out master cleanse gluten-free
										squid scenester freegan cosby sweater.
										Fanny pack portland seitan DIY, art
										party locavore wolf cliche high life
										echo park Austin. Cred vinyl keffiyeh
										DIY salvia PBR.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-link" }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-border-top-profile"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-line text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">When, while the lovely valley teems with
										vapour around me, and the meridian sun
										strikes the upper surface of the
										impenetrable foliage of my trees, and
										but a few stray gleams steal into the
										inner sanctuary, I throw myself down
										among the tall grass by the trickling
										stream; and, as I lie close to the
										earth, a thousand unknown.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-link" }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-border-top-messages"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-line text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Etsy mixtape wayfarers, ethical wes
										anderson tofu before they sold out
										mcsweeney&#39;s organic lomo retro fanny
										pack lo-fi farm-to-table readymade.
										Messenger bag gentrify pitchfork
										tattooed craft beer, iphone skateboard
										locavore carles etsy salvia banksy
										hoodie helvetica. DIY synth PBR banksy
										irony.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-link" }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-border-top-settings"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-line text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">when darkness overspreads my eyes, and
										heaven and earth seem to dwell in my
										soul and absorb its power, like the form
										of a beloved mistress, then I often
										think with longing, Oh, would I could
										describe these conceptions, could
										impress upon paper all that is living so
										full and warm within me, that it might
										be the.
										<div class="${"mt-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-link" }, {}, {
                                default: () => {
                                  return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
                                }
                              })}</div></div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Border Top Nav Justified Tabs</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-border-top nav-justified</code> class to
							create nav tabs with border at top with justified tabs
							position.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        tabs: true,
                        class: "nav nav-tabs nav-justified nav-border-top nav-border-top-success mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderTab == 1
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-home-5-line align-middle me-1"}"></i> Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderTab == 2
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-line me-1 align-middle"}"></i>
									Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: topBorderTab == 3
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-question-answer-line align-middle me-1"}"></i>Messages
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "nav-border-justified-home"
                          }, {}, {
                            default: () => {
                              return `<h6>Give your text a good structure</h6>
								<p class="${"mb-0"}">Contrary to popular belief, you don\u2019t have
									to work endless nights and hours to create a ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Fantastic Design</b>`;
                                }
                              })} by using complicated 3D elements. Flat design
									is your friend. Remember that. And the great
									thing about flat design is that it has become
									more and more popular over the years, which is
									excellent news to the beginner and advanced designer.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-border-justified-profile"
                          }, {}, {
                            default: () => {
                              return `<h6>Use a color palette</h6>
								<p class="${"mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s
									in our nature to be interested in the
									unusual, and that\u2019s why using contrasting
									colors in ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Graphic Design</b>`;
                                }
                              })} is a must. It\u2019s eye-catching, it makes a statement,
									it\u2019s impressive graphic design. Increase or decrease
									the letter spacing depending on the situation
									and try, try again until it looks right, and
									each letter has the perfect spot of its own.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-border-justified-messages"
                          }, {}, {
                            default: () => {
                              return `<h6>Message</h6>
								<p class="${"mb-0"}">Consistency is the one thing that can take
									all of the different elements in your
									design, and tie them all together and make
									them work. In an awareness campaign, it is
									vital for people to begin put 2 and 2
									together and begin to recognize your cause.
									Consistency piques people\u2019s interest is that
									it has become more and more popular over the
									years, which is excellent news to the
									beginner and advanced ${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "text-decoration-underline"
                              }, {}, {
                                default: () => {
                                  return `<b>Contact Designer</b>`;
                                }
                              })}.
								</p>`;
                            }
                          })}`;
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

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Outline Border Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav-custom-outline nav-primary mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: outlineborderTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: outlineborderTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: outlineborderTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: outlineborderTab == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "1",
                            id: "border-nav-home",
                            class: "active"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of them jean shorts Austin.
										Nesciunt tofu stumptown aliqua, retro synth master cleanse.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The
										goal is to make your text as comfortable to read as possible.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "2",
                            id: "border-nav-profile",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help
										you fix fonts that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
										enjoy with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "3",
                            id: "border-nav-messages",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to
										be creative and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest and spoke to many different professional graphic designers and
										asked them what graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "4",
                            id: "border-nav-settings",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest and spoke to many different professional graphic designers and
										asked them what graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different opinions and graphic design basics, I came up with a list of 30
										graphic design tips that you can start implementing.
									</div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Custom Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav-customs nav-danger mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customNav == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customNav == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customNav == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: customNav == 4
                              }, {}, {
                                default: () => {
                                  return `Settings
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "1",
                            id: "border-navs-home",
                            class: "active"
                          }, {}, {
                            default: () => {
                              return `<div class="${"tab-pane active"}" id="${"border-navs-home"}" role="${"tabpanel"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
										<div class="${"flex-grow-1 ms-2"}">Raw denim you probably haven&#39;t heard of them jean shorts Austin.
											Nesciunt tofu stumptown aliqua, retro synth master cleanse.
										</div></div>
									<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
										<div class="${"flex-grow-1 ms-2"}">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The
											goal is to make your text as comfortable to read as possible.
										</div></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "2",
                            id: "border-navs-profile",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help
										you fix fonts that are poorly spaced to begin with.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
										enjoy with my whole heart.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "3",
                            id: "border-navs-messages",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to
										be creative and make your own style choices.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest and spoke to many different professional graphic designers and
										asked them what graphic design tips they live.
									</div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            tabId: "4",
                            id: "border-navs-settings",
                            class: ""
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">For that very reason, I went on a quest and spoke to many different professional graphic designers and
										asked them what graphic design tips they live.
									</div></div>
								<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
									<div class="${"flex-grow-1 ms-2"}">After gathering lots of different opinions and graphic design basics, I came up with a list of 30
										graphic design tips that you can start implementing.
									</div></div>`;
                            }
                          })}`;
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
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Colored Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-custom-</code> class with modifier class
							to color tabs.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav nav-pills nav-custom nav-custom-success mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: colorNavTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: colorNavTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: colorNavTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "nav-colored-home"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-md rounded"}"></div>
									<div class="${"flex-grow-1 ms-3"}">Food truck fixie locavore, accusamus
										mcsweeney&#39;s marfa nulla single-origin
										coffee squid. Exercitation +1 labore
										velit, blog sartorial PBR leggings next
										level wes anderson artisan four loko
										farm-to-table craft beer twee. commodo
										enim craft beer mlkshk aliquip jean
										shorts ullamco.
									</div></div>
								<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}">For that very reason, I went on a quest
										and spoke to many different professional
										graphic designers and asked them what
										graphic design tips they live. vinyl
										cillum PBR. Homo nostrud organic,
										assumenda labore aesthetic magna
										delectus.
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-md rounded"}"></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-colored-profile"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-md rounded"}"></div>
									<div class="${"flex-grow-1 ms-3"}">Increase or decrease the letter spacing
										depending on the situation and try, try
										again until it looks right, and each.
										next level wes anderson artisan four
										loko farm-to-table craft beer twee.
										commodo enim craft beer mlkshk aliquip
										jean shorts ullamco.
									</div></div>
								<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}">Experiment and play around with the
										fonts that you already have in the
										software you\u2019re working with reputable
										font websites. commodo enim craft beer
										mlkshk aliquip jean shorts ullamco ad
										vinyl cillum PBR. Homo nostrud organic.
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-md rounded"}"></div></div>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-colored-messages"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-md rounded"}"></div>
									<div class="${"flex-grow-1 ms-3"}">Trust fund seitan letterpress, keytar
										raw denim keffiyeh etsy art party before
										they sold out master cleanse gluten-free
										squid scenester freegan cosby sweater.
										Fanny pack portland seitan DIY, art
										party locavore wolf cliche high life
										echo park Austin.
									</div></div>
								<div class="${"d-flex"}"><div class="${"flex-grow-1 me-3"}">Increase or decrease the letter spacing
										depending on the situation and try, try
										again until it looks right, and each
										assumenda labore aes Homo nostrud
										organic, assumenda labore aesthetic
										magna elements, buttons, everything..
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-md rounded"}"></div></div>`;
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

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<h5 class="${"mb-3"}">Light Nav</h5>
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nav-custom-light</code> class to lighten the
							nav tabs area.
						</p>

						${validate_component(Nav, "Nav").$$render($$result, {
                        pills: true,
                        class: "nav nav-pills nav-custom nav-custom-light mb-3"
                      }, {}, {
                        default: () => {
                          return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: lightNavTab == 1
                              }, {}, {
                                default: () => {
                                  return `Home
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: lightNavTab == 2
                              }, {}, {
                                default: () => {
                                  return `Profile
								`;
                                }
                              })}`;
                            }
                          })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                style: "cursor: pointer",
                                active: lightNavTab == 3
                              }, {}, {
                                default: () => {
                                  return `Messages
								`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

						${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                        default: () => {
                          return `${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "active",
                            id: "nav-light-home"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-1"}"><div class="${"flex-grow-1 me-3"}">Experiment and play around with the
										fonts that you already have in the
										software you\u2019re working with reputable
										font websites. commodo enim craft beer
										mlkshk aliquip jean shorts ullamco ad
										vinyl cillum PBR. Homo nostrud organic,
										assumenda labore aesthetic magna
										delectus. pposites attract, and that\u2019s a
										fact. It\u2019s in our nature to be
										interested in the unusual, and that\u2019s
										why using contrasting.
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", img4, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>
								<p class="${"mb-0"}">Food truck fixie locavore, accusamus
									mcsweeney&#39;s marfa nulla single-origin coffee
									squid. Exercitation +1 labore velit, blog
									sartorial PBR leggings next level wes
									anderson artisan four loko farm-to-table
									craft beer twee. commodo enim craft beer
									mlkshk aliquip jean shorts ullamco.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-light-profile"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-1"}"><div class="${"flex-grow-1 me-3"}">Just like in the image where we talked
										about using multiple fonts, you can see
										that the background in this graphic
										design is blurred. Whenever you put text
										on top of an image, it\u2019s important that
										your viewers can understand the text,
										and sometimes that means applying a
										gaussian readable Any bypasser will stop
										to see what you have to see, even if
										your design has nothing to do with them.
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", img5, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>
								<p class="${"mb-0"}">It makes a statement, it\u2019s impressive
									graphic design. Increase or decrease the
									letter spacing depending on the situation
									and try, try again until it looks right, and
									each letter has the perfect spot of its own.
									commodo enim craft beer mlkshk aliquip jean
									shorts ullamco.
								</p>`;
                            }
                          })}

							${validate_component(TabPane, "TabPane").$$render($$result, {
                            class: "",
                            id: "nav-colored-messages"
                          }, {}, {
                            default: () => {
                              return `<div class="${"d-flex mb-1"}"><div class="${"flex-grow-1 me-3"}">Trust fund seitan letterpress, keytar
										raw denim keffiyeh etsy art party before
										they sold out master cleanse gluten-free
										squid scenester freegan cosby sweater.
										Fanny pack portland seitan DIY, art
										party locavore wolf cliche high life
										echo park Austin On the note of
										consistency, color consistency is a
										MUST. If you\u2019re not trying to create
										crazy contrast in your design.
									</div>
									<div class="${"flex-shrink-0"}"><img${add_attribute("src", img5, 0)} alt="${""}" width="${"150"}" class="${"rounded"}"></div></div>
								<p class="${"mb-0"}">Big July earthquakes confound zany
									experimental vow. My girl wove six dozen
									plaid jackets before she quit. Six big
									devils from Japan quickly forgot how to
									waltz. try again until it looks right, and
									each assumenda labore aes Homo nostrud
									organic, assumenda labore aesthetic magna
									elements, buttons, everything.
								</p>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Uitabs as default };
