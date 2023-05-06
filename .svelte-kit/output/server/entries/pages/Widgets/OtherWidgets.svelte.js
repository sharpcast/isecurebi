import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { A as AlertTriangleIcon } from "../../../chunks/AlertTriangleIcon-fbe21b84.js";
import { u as userillustarator } from "../../../chunks/user-illustarator-2-5db54d81.js";
var userillustarator1 = "/_app/assets/user-illustarator-1-151968e0.png";
const OtherWidgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { otherWidgets2 } = $$props;
  if ($$props.otherWidgets2 === void 0 && $$bindings.otherWidgets2 && otherWidgets2 !== void 0)
    $$bindings.otherWidgets2(otherWidgets2);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
        default: () => {
          return `<h5 class="${"text-decoration-underline mb-3 mt-2 pb-3"}">Other Widgets</h5>`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Alert, "Alert").$$render($$result, {
                    color: "warning",
                    class: "border-0 rounded-top rounded-0 m-0 d-flex align-items-center"
                  }, {}, {
                    default: () => {
                      return `${validate_component(AlertTriangleIcon, "AlertTriangleIcon").$$render($$result, { class: "text-warning me-2 icon-sm" }, {}, {})}
					<div class="${"flex-grow-1 text-truncate"}">Your free trial expired in <b>17</b> days.
					</div>
					<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/pricing/pages-pricing",
                        class: "text-reset text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `<b>Upgrade</b>`;
                        }
                      })}</div>`;
                    }
                  })}

				${validate_component(Row, "Row").$$render($$result, { class: "align-items-end" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 8 }, {}, {
                        default: () => {
                          return `<div class="${"p-3"}"><p class="${"fs-16 lh-base"}">Upgrade your plan from a <span class="${"fw-bold"}">Free trial</span>, to \u2018Premium
								Plan\u2019 <i class="${"mdi mdi-arrow-right"}"></i></p>
							<div class="${"mt-3"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/pages/pricing/pages-pricing",
                            class: "btn btn-success"
                          }, {}, {
                            default: () => {
                              return `Upgrade Account!`;
                            }
                          })}</div></div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `<div class="${"px-3"}"><img${add_attribute("src", userillustarator, 0)} class="${"img-fluid"}" alt="${""}"></div>`;
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
	${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "bg-primary" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Alert, "Alert").$$render($$result, {
                    color: "danger",
                    class: "rounded-top alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center"
                  }, {}, {
                    default: () => {
                      return `<i class="${"ri-error-warning-line label-icon"}"></i>
					<div class="${"flex-grow-1 text-truncate"}">Your free trial expired in <b>17</b> days.
					</div>
					<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/pricing/pages-pricing",
                        class: "text-reset text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `<b>Upgrade</b>`;
                        }
                      })}</div>`;
                    }
                  })}

				${validate_component(Row, "Row").$$render($$result, { class: "align-items-end" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 8 }, {}, {
                        default: () => {
                          return `<div class="${"p-3"}"><p class="${"fs-16 lh-base text-white"}">Upgrade your plan from a <span class="${"fw-bold"}">Free trial</span>, to \u2018Premium
								Plan\u2019 <i class="${"mdi mdi-arrow-right"}"></i></p>
							<div class="${"mt-3"}">${validate_component(Link, "Link").$$render($$result, {
                            href: "/pages/pricing/pages-pricing",
                            class: "btn btn-info"
                          }, {}, {
                            default: () => {
                              return `Upgrade Account!`;
                            }
                          })}</div></div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `<div class="${"px-3"}"><img${add_attribute("src", userillustarator1, 0)} class="${"img-fluid"}" alt="${""}"></div>`;
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

	${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Alert, "Alert").$$render($$result, {
                    color: "warning",
                    class: "border-0 rounded-top rounded-0 m-0 d-flex align-items-center"
                  }, {}, {
                    default: () => {
                      return `<div class="${"flex-grow-1 text-truncate"}">We will choose a gift for you in <b>5</b> days.
					</div>
					<div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/pricing/pages-pricing",
                        class: "text-reset text-decoration-underline"
                      }, {}, {
                        default: () => {
                          return `<b>Get Free Gift</b>`;
                        }
                      })}</div>`;
                    }
                  })}
				<div class="${"d-flex p-3"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-md me-3"}"><span class="${"avatar-title bg-soft-danger rounded-circle fs-1"}"><i class="${"ri-gift-2-line text-danger"}"></i></span></div></div>
					<div><p class="${"fs-16 lh-base"}">Personalized <span class="${"fw-semibold"}">Gift Boxes</span>, with attitude, Let&#39;s collect
							your Xmas box <i class="${"mdi mdi-arrow-right"}"></i></p>
						<div class="${"mt-3"}">${validate_component(Link, "Link").$$render($$result, {
                    href: "/pages/pricing/pages-pricing",
                    class: "btn btn-secondary"
                  }, {}, {
                    default: () => {
                      return `Get a Free Gift`;
                    }
                  })}</div></div></div>`;
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
      return `${each(otherWidgets2, (item) => {
        return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h5 class="${"fs-16 fw-semibold"}">${escape(item.title)}</h5>
					<p class="${"text-muted"}">${escape(item.subTitle)}</p>
					<div class="${"d-flex flex-wrap justify-content-evenly"}">${each(item.subItem, (item2) => {
                      return `<p class="${"text-muted mb-0"}"><i${add_attribute("class", "fs-18 align-middle me-2 " + item2.icon + " text-" + item2.iconClass, 0)}></i>${escape(item2.label)}
							</p>`;
                    })}</div>
				`;
                  }
                })}
				<div class="${"progress animated-progess rounded-bottom rounded-0"}" style="${"height: 6px"}">${each(item.progressBar, (item2) => {
                  return `<div${add_attribute("class", "progress-bar rounded-0 " + item2.bgColor, 0)} role="${"progressbar"}" style="${"width: " + escape(item2.width, true)}" aria-valuenow="${"30"}" aria-valuemin="${"0"}" aria-valuemax="${"100"}"></div>`;
                })}</div>
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
export { OtherWidgets as default };
