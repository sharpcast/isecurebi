import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../chunks/TabPane-b01382c8.js";
import OverviewTab from "./OverviewTab.svelte.js";
import DocumentsTab from "./DocumentsTab.svelte.js";
import ActivitiesTab from "./ActivitiesTab.svelte.js";
import TeamTab from "./TeamTab.svelte.js";
import { s as slack } from "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/Button-ba828d9c.js";
import "../../../../chunks/DropdownMenu-36ba586e.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-5-1aac893f.js";
import "../../../../chunks/Table-b6431bfe.js";
import "../../../../chunks/Tooltip-8300c9d3.js";
import "../../../../chunks/Portal-94847a25.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-3-4c804a8b.js";
import "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Modal-235662c0.js";
import "../../../../chunks/ModalBody-69b040c2.js";
import "../../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "mt-n4 mx-n4 border-0" }, {}, {
            default: () => {
              return `<div class="${"bg-soft-warning"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "pb-0 px-4" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                    default: () => {
                      return `<div class="${"col-md"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                        default: () => {
                          return `<div class="${"col-md-auto"}"><div class="${"avatar-md"}"><div class="${"avatar-title bg-white rounded-circle"}"><img${add_attribute("src", slack, 0)} alt="${""}" class="${"avatar-xs"}"></div></div></div>
								<div class="${"col-md"}"><div><h4 class="${"fw-bold"}">Velzon - Admin &amp; Dashboard</h4>
										<div class="${"hstack gap-3 flex-wrap"}"><div><i class="${"ri-building-line align-bottom me-1"}"></i> Themesbrand</div>
											<div class="${"vr"}"></div>
											<div>Create Date : <span class="${"fw-medium"}">15 Sep, 2021</span></div>
											<div class="${"vr"}"></div>
											<div>Due Date : <span class="${"fw-medium"}">29 Dec, 2021</span></div>
											<div class="${"vr"}"></div>
											<div class="${"badge rounded-pill bg-info fs-12"}">New</div>
											<div class="${"badge rounded-pill bg-danger fs-12"}">High</div></div></div></div>`;
                        }
                      })}</div>
						<div class="${"col-md-auto"}"><div class="${"hstack gap-1 flex-wrap"}"><button type="${"button"}" class="${"btn py-0 fs-16 favourite-btn active"}"><i class="${"ri-star-fill"}"></i></button>
								<button type="${"button"}" class="${"btn py-0 fs-16 text-body"}"><i class="${"ri-share-line"}"></i></button>
								<button type="${"button"}" class="${"btn py-0 fs-16 text-body"}"><i class="${"ri-flag-line"}"></i></button></div></div>`;
                    }
                  })}

					${validate_component(Nav, "Nav").$$render($$result, {
                    class: "nav-tabs-custom border-bottom-0",
                    role: "tablist"
                  }, {}, {
                    default: () => {
                      return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            active: activeTab == 1,
                            class: "fw-semibold",
                            href: "#!"
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
                            active: activeTab == 2,
                            class: "fw-semibold",
                            href: "#!"
                          }, {}, {
                            default: () => {
                              return `Documents
							`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            active: activeTab == 3,
                            class: "fw-semibold",
                            href: "#!"
                          }, {}, {
                            default: () => {
                              return `Activities
							`;
                            }
                          })}`;
                        }
                      })}
						${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(NavLink, "NavLink").$$render($$result, {
                            active: activeTab == 4,
                            class: "fw-semibold",
                            href: "#!"
                          }, {}, {
                            default: () => {
                              return `Team
							`;
                            }
                          })}`;
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
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(TabContent, "TabContent").$$render($$result, { activeTab, class: "text-muted" }, {}, {
            default: () => {
              return `${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 1,
                class: "active"
              }, {}, {
                default: () => {
                  return `${validate_component(OverviewTab, "OverviewTab").$$render($$result, {}, {}, {})}`;
                }
              })}
			${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 2,
                class: ""
              }, {}, {
                default: () => {
                  return `${validate_component(DocumentsTab, "DocumentsTab").$$render($$result, {}, {}, {})}`;
                }
              })}
			${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 3,
                class: ""
              }, {}, {
                default: () => {
                  return `${validate_component(ActivitiesTab, "ActivitiesTab").$$render($$result, {}, {}, {})}`;
                }
              })}
			${validate_component(TabPane, "TabPane").$$render($$result, {
                tabId: 4,
                class: ""
              }, {}, {
                default: () => {
                  return `${validate_component(TeamTab, "TeamTab").$$render($$result, {}, {}, {})}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Section as default };
