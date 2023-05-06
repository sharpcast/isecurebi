import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import { A as ActivityIcon, E as ExternalLinkIcon } from "../../../chunks/ExternalLinkIcon-2852acf2.js";
import { C as ClockIcon } from "../../../chunks/ClockIcon-8408cbfa.js";
import { U as UsersIcon } from "../../../chunks/UsersIcon-1eab5089.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const TileBoxs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { WidgetData } = $$props;
  if ($$props.WidgetData === void 0 && $$bindings.WidgetData && WidgetData !== void 0)
    $$bindings.WidgetData(WidgetData);
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
        default: () => {
          return `<h5 class="${"text-decoration-underline mb-3 pb-1"}">Tile Boxs</h5>`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(WidgetData.tileBoxs1, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate " + item.bgColor }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><p${add_attribute("class", "text-uppercase fw-medium mb-0 text-" + item.labelClass, 0)}>${escape(item.label)}
							</p></div>
						<div class="${"flex-shrink-0"}"><h5${add_attribute("class", "fs-14 mb-0 text-" + item.percentageClass, 0)}><i${add_attribute("class", "fs-13 align-middle " + item.percentageIcon, 0)}></i>
								${escape(item.percentage)}</h5>
						</div></div>
					<div class="${"d-flex align-items-end justify-content-between mt-4"}"><div><h4 class="${"fs-22 fw-secondary ff-secondary mb-4 " + escape(item.counterClass, true)}">${escape(item.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}</h4>
							${validate_component(Link, "Link").$$render($$result, {
                      href: "#!",
                      class: "text-decoration-underline " + item.captionClass
                    }, {}, {
                      default: () => {
                        return `${escape(item.caption)}`;
                      }
                    })}</div>
						<div class="${"avatar-sm flex-shrink-0"}"><span${add_attribute("class", "avatar-title rounded fs-3 bg-soft-" + item.iconClass, 0)}><i${add_attribute("class", item.icon + " text-" + item.iconClass, 0)}></i></span>
						</div></div>
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
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "crm-widget" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "row-cols-md-3 row-cols-1" }, {}, {
                    default: () => {
                      return `${each(WidgetData.tileBoxs2, (item) => {
                        return `${validate_component(Col, "Col").$$render($$result, {
                          class: item.id === 4 ? "col-lg" : "col-lg border-end"
                        }, {}, {
                          default: () => {
                            return `<div class="${"mt-3 mt-md-0 py-4 px-3"}"><h5 class="${"text-muted text-uppercase fs-14"}">${escape(item.label)}
									<i${add_attribute("class", "fs-18 float-end align-middle " + item.badge, 0)}></i></h5>
								<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i${add_attribute("class", "display-6 text-muted " + item.icon, 0)}></i></div>
									<div class="${"flex-grow-1 ms-3"}"><h2 class="${"mb-0"}">${escape(item.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}
										</h2></div>
								</div></div>
						`;
                          }
                        })}`;
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
      return `${each(WidgetData.tileBoxs3, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate " + item.bgColor }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"d-flex justify-content-between"}"><div><p${add_attribute("class", "fw-semibold mb-0 text-" + item.labelClass, 0)}>${escape(item.label)}</p>
							<h2${add_attribute("class", "mt-4 ff-secondary fw-secondary " + item.counterClass, 0)}>${each(item.subCounter, (item2) => {
                      return `${escape(item2.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item2.counter, 0)}>0</span>${escape(item2.suffix)}`;
                    })}</h2>
							<p${add_attribute("class", "mb-0 text-" + item.labelClass, 0)}><span${add_attribute("class", "mb-0 badge " + item.badgeClass, 0)}><i${add_attribute("class", "align-middle " + item.badge, 0)}></i>
									${escape(item.percentage)}</span> vs. previous month
							</p></div>
						<div><div class="${"avatar-sm flex-shrink-0"}"><span${add_attribute("class", "avatar-title rounded-circle fs-2 bg-soft-" + item.iconClass, 0)}>${item.feaIcon === "activity" ? `${validate_component(ActivityIcon, "ActivityIcon").$$render($$result, {
                      class: "text-" + item.iconClass,
                      size: "24"
                    }, {}, {})}` : `${item.feaIcon === "clock" ? `${validate_component(ClockIcon, "ClockIcon").$$render($$result, {
                      class: "text-" + item.iconClass,
                      size: "24"
                    }, {}, {})}` : `${item.feaIcon === "external-link" ? `${validate_component(ExternalLinkIcon, "ExternalLinkIcon").$$render($$result, {
                      class: "text-" + item.iconClass,
                      size: "24"
                    }, {}, {})}` : `${validate_component(UsersIcon, "UsersIcon").$$render($$result, {
                      class: "text-" + item.iconClass,
                      size: "24"
                    }, {}, {})}`}`}`}
								</span></div>
						</div></div>
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
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(WidgetData.tileBoxes4, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100 " + item.bgColor }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0"}"><span${add_attribute("class", "avatar-title rounded-2 fs-2 bg-soft-" + item.iconClass + " text-" + item.iconClass, 0)}><i${add_attribute("class", item.icon, 0)}></i>
							</span></div>
						<div class="${"flex-grow-1 ms-3"}"><p${add_attribute("class", "text-uppercase fw-semibold mb-3 text-" + item.labelClass, 0)}>${escape(item.label)}</p>
							<h4${add_attribute("class", "fs-4 mb-3 " + item.counterClass, 0)}>${escape(item.prefix)}<span class="${"counter-value"}"${add_attribute("data-target", item.counter, 0)}>0</span>${escape(item.suffix)}</h4>
							<p${add_attribute("class", "mb-0 text-" + item.captionClass, 0)}>${escape(item.caption)}
							</p></div>
						<div class="${"flex-shrink-0 align-self-center"}"><span${add_attribute("class", "fs-12 badge badge-soft-" + item.percentageClass, 0)}><i${add_attribute("class", "fs-13 align-middle me-1 " + item.badge, 0)}></i>${escape(item.percentage)}<span></span></span>
						</div></div>
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
  })}
${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(WidgetData.tileBoxes5, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { xl: 3, ms: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100 " + item.class }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "float-end" }, {}, {
                      default: () => {
                        return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                          tag: "a",
                          class: "text-reset dropdown-btn p-0",
                          href: "#!",
                          color: ""
                        }, {}, {
                          default: () => {
                            return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-vertical"}"></i></span>
						`;
                          }
                        })}
						${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                          default: () => {
                            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                              default: () => {
                                return `Favorite`;
                              }
                            })}
							${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                              default: () => {
                                return `Apply Now`;
                              }
                            })}
						`;
                          }
                        })}
					`;
                      }
                    })}
					<div class="${"mb-4 pb-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm"}"></div>
					${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                      default: () => {
                        return `<h6 class="${"fs-15 fw-bold"}">${escape(item.title)}
							<span class="${"text-muted fs-13"}">${escape(item.year)}</span></h6>
					`;
                      }
                    })}
					<p class="${"text-muted mb-0"}"><i class="${"ri-building-line align-bottom"}"></i> Themesbrand
						<span class="${"ms-2"}"><i class="${"ri-map-pin-2-line align-bottom"}"></i> California</span></p>
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
  })}`;
});
export { TileBoxs as default };
