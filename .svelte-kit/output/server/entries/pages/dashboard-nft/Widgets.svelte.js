import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
var Bgd = "/_app/assets/bg-d-652e1889.png";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-marketplace d-flex" }, {}, {
                default: () => {
                  return `<div class="${"flex-grow-1"}"><h4 class="${"fs-18 lh-base mb-0"}">Discover, Collect, Sell and Create <br> your own <span class="${"text-success"}">NFTs.</span></h4>
                    <p class="${"mb-0 mt-2 pt-1 text-muted"}">The world&#39;s first and largest digital marketplace.</p>
                    <div class="${"d-flex gap-3 mt-4"}">${validate_component(Link, "Link").$$render($$result, { href: "/#", class: "btn btn-primary" }, {}, {
                    default: () => {
                      return `Discover Now `;
                    }
                  })}
                        ${validate_component(Link, "Link").$$render($$result, { href: "/#", class: "btn btn-success" }, {}, {
                    default: () => {
                      return `Create Your Own`;
                    }
                  })}</div></div>
                <img${add_attribute("src", Bgd, 0)} alt="${""}" class="${"img-fluid"}">`;
                }
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"float-end"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                    class: "card-header-dropdown",
                    direction: "start"
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "a",
                        class: "text-reset dropdown-btn p-0",
                        color: "",
                        role: "button"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-vertical align-middle"}"></i></span>`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Today`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Last Week`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Last Month`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Current Year`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>
                <div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded fs-3"}"><i class="${"bx bx-dollar-circle text-info"}"></i></span></div>
                    <div class="${"flex-grow-1 ps-3"}"><h5 class="${"text-muted text-uppercase fs-13 mb-0"}">Total Revenue</h5></div></div>
                <div class="${"mt-4 pt-1"}"><h4 class="${"fs-22 fw-semibold ff-secondary mb-0"}">$<span class="${"counter-value"}" data-target="${"559526.564"}"></span></h4>
                    <p class="${"mt-4 mb-0 text-muted"}"><span class="${"badge bg-soft-danger text-danger mb-0 me-1"}"><i class="${"ri-arrow-down-line align-middle"}"></i> 3.96 % </span> vs. previous month</p></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"float-end"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                    class: "card-header-dropdown",
                    direction: "start"
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "a",
                        class: "text-reset dropdown-btn p-0",
                        color: "",
                        role: "button"
                      }, {}, {
                        default: () => {
                          return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-vertical align-middle"}"></i></span>`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Today`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Last Week`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Last Month`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Current Year`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>
                <div class="${"d-flex align-items-center"}"><div class="${"avatar-sm flex-shrink-0"}"><span class="${"avatar-title bg-soft-info rounded fs-3"}"><i class="${"bx bx-wallet text-info"}"></i></span></div>
                    <div class="${"flex-grow-1 ps-3"}"><h5 class="${"text-muted text-uppercase fs-13 mb-0"}">Estimated</h5></div></div>
                <div class="${"mt-4 pt-1"}"><h4 class="${"fs-22 fw-semibold ff-secondary mb-0"}">$<span class="${"counter-value"}" data-target="${"624562.564"}"></span></h4>
                    <p class="${"mt-4 mb-0 text-muted"}"><span class="${"badge bg-soft-success text-success mb-0"}"><i class="${"ri-arrow-up-line align-middle"}"></i> 16.24 % </span> vs. previous month</p></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Widgets as default };
