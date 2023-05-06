import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Ico = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ordeType = [
    { value: "Active", label: "Active" },
    { value: "Ended", label: "Ended" },
    { value: "Upcoming", label: "Upcoming" }
  ];
  const rating = [
    {
      value: "Select Rating",
      label: "Select Rating"
    },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, lg: 6 }, {}, {
                default: () => {
                  return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Search to ICOs..."}">
					<i class="${"ri-search-line search-icon"}"></i></div>`;
                }
              })}
			
			${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 6 }, {}, {
                default: () => {
                  return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                    class: "form-control",
                    options: { dateFormat: "d M, Y" },
                    placeholder: "Selact Date"
                  }, {}, {})}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 2, lg: 4 }, {}, {
                default: () => {
                  return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                    class: "form-control",
                    name: "choices-single-default2",
                    id: "choices-single-default2",
                    items: ordeType
                  }, {}, {})}</div>`;
                }
              })}
			
			${validate_component(Col, "Col").$$render($$result, { xxl: 2, lg: 4 }, {}, {
                default: () => {
                  return `<div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
                    class: "form-control",
                    name: "choices-single-default",
                    id: "choices-single-default",
                    items: rating
                  }, {}, {})}</div>`;
                }
              })}
			
			<div class="${"col-xxl-1 col-lg-4"}"><button class="${"btn btn-primary w-100"}"><i class="${"ri-equalizer-line align-bottom me-1"}"></i> Filters</button></div>`;
            }
          })}
		`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(MOCK_DATA.icoWidgetsList, (item) => {
        return `${item.title == "Active ICOs" ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-success" }, {}, {
                  default: () => {
                    return `<h5 class="${"fs-17 text-center mb-0"}">${escape(item.title)}</h5>
					`;
                  }
                })}
				`;
              }
            })}
				${each(item.subItem, (subItem) => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "mb-2" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", subItem.img, 0)} alt="${""}" class="${"avatar-xxs"}">
									</div></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15 mb-1"}">${escape(subItem.label)}</h5>
									<p class="${"text-muted mb-2"}">${escape(subItem.caption)}
									</p></div>
								<div>${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "badge badge-soft-primary"
                      }, {}, {
                        default: () => {
                          return `Visit Website <i class="${"ri-arrow-right-up-line align-bottom"}"></i>`;
                        }
                      })}
								</div></div>
							<h6 class="${"text-muted mb-0"}">${escape(subItem.amount)}
								<span class="${"badge badge-soft-success"}">89.97%</span></h6>
						`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-top border-top-dashed" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">${escape(subItem.rating)}
										<i class="${"ri-star-fill align-bottom text-warning"}"></i>
									</h6></div>
								<h6${add_attribute("class", "flex-shrink-0 text-" + subItem.dateClass + " mb-0", 0)}><i class="${"ri-time-line align-bottom"}"></i>
									${escape(subItem.date)}
								</h6></div>
						`;
                    }
                  })}
					`;
                }
              })}`;
            })}
			`;
          }
        })}` : `${item.title == "Ended ICOs" ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-danger" }, {}, {
                  default: () => {
                    return `<h5 class="${"fs-17 text-center mb-0"}">${escape(item.title)}</h5>
					`;
                  }
                })}
				`;
              }
            })}
				${each(item.subItem, (subItem) => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "mb-2" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", subItem.img, 0)} alt="${""}" class="${"avatar-xxs"}">
									</div></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15 mb-1"}">${escape(subItem.label)}</h5>
									<p class="${"text-muted mb-2"}">${escape(subItem.caption)}
									</p></div>
								<div>${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "badge badge-soft-primary"
                      }, {}, {
                        default: () => {
                          return `Visit Website <i class="${"ri-arrow-right-up-line align-bottom"}"></i>`;
                        }
                      })}
								</div></div>
							<h6 class="${"text-muted mb-0"}">${escape(subItem.amount)}
								<span class="${"badge badge-soft-success"}">${escape(subItem.percentage)}</span></h6>
						`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-top border-top-dashed" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">${escape(subItem.rating)}
										<i class="${"ri-star-fill align-bottom text-warning"}"></i>
									</h6></div>
								<h6${add_attribute("class", "flex-shrink-0 text-" + subItem.dateClass + " mb-0", 0)}><i class="${"ri-time-line align-bottom"}"></i>
									${escape(subItem.date)}
								</h6></div>
						`;
                    }
                  })}
					`;
                }
              })}`;
            })}
			`;
          }
        })}` : `${item.title == "Upcoming ICOs" ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-primary" }, {}, {
                  default: () => {
                    return `<h5 class="${"fs-17 text-center mb-0"}">${escape(item.title)}</h5>
					`;
                  }
                })}
				`;
              }
            })}
				${each(item.subItem, (subItem) => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "mb-2" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", subItem.img, 0)} alt="${""}" class="${"avatar-xxs"}">
									</div></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15 mb-1"}">${escape(subItem.label)}</h5>
									<p class="${"text-muted mb-2"}">${escape(subItem.caption)}
									</p></div>
								<div>${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "badge badge-soft-primary"
                      }, {}, {
                        default: () => {
                          return `Visit Website <i class="${"ri-arrow-right-up-line align-bottom"}"></i>`;
                        }
                      })}
								</div></div>
							<h6 class="${"text-muted mb-0"}">${escape(subItem.amount)}
								${subItem.percentage ? `<span class="${"badge badge-soft-success"}">${escape(subItem.percentage)}</span>` : ``}</h6>
						`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-top border-top-dashed" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">${escape(subItem.rating)}
										<i class="${"ri-star-fill align-bottom text-warning"}"></i>
									</h6></div>
								<h6${add_attribute("class", "flex-shrink-0 text-" + subItem.dateClass + " mb-0", 0)}><i class="${"ri-time-line align-bottom"}"></i>
									${escape(subItem.date)}
								</h6></div>
						`;
                    }
                  })}
					`;
                }
              })}`;
            })}
			`;
          }
        })}` : `${item.title == "Trading ICOs" ? `${validate_component(Col, "Col").$$render($$result, { xxl: 3, md: 6 }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-info" }, {}, {
                  default: () => {
                    return `<h5 class="${"fs-17 text-center mb-0"}">${escape(item.title)}</h5>
					`;
                  }
                })}
				`;
              }
            })}
				${each(item.subItem, (subItem) => {
              return `${validate_component(Card, "Card").$$render($$result, {
                class: "mb-2 ribbon-box ribbon-fill right"
              }, {}, {
                default: () => {
                  return `<div class="${"ribbon ribbon-info shadow-none"}"><i class="${"ri-flashlight-fill me-1"}"></i>${escape(subItem.ribbonNumber)}</div>
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><div class="${"avatar-title bg-light rounded"}"><img${add_attribute("src", subItem.img, 0)} alt="${""}" class="${"avatar-xxs"}">
									</div></div>
								<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15 mb-1"}">${escape(subItem.label)}</h5>
									<p class="${"text-muted mb-2"}">${escape(subItem.caption)}
									</p></div>
								<div class="${"me-4"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "badge badge-soft-primary"
                      }, {}, {
                        default: () => {
                          return `Visit Website <i class="${"ri-arrow-right-up-line align-bottom"}"></i>`;
                        }
                      })}
								</div></div>
							<h6 class="${"text-muted mb-0"}">${escape(subItem.amount)}
								<span class="${"badge badge-soft-success"}">${escape(subItem.percentage)}</span></h6>
						`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-top border-top-dashed" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}">${escape(subItem.rating)}
										<i class="${"ri-star-fill align-bottom text-warning"}"></i>
									</h6></div>
								<h6${add_attribute("class", "flex-shrink-0 text-" + subItem.dateClass + " mb-0", 0)}><i class="${"ri-time-line align-bottom"}"></i>
									${escape(subItem.date)}
								</h6></div>
						`;
                    }
                  })}
					`;
                }
              })}`;
            })}
			`;
          }
        })}` : `${escape(null)}`}`}`}`}`;
      })}`;
    }
  })}`;
});
export { Ico as default };
