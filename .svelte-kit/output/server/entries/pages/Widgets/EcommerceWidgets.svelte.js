import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       *//* empty css                                   */import "../../../chunks/autoplay.min-76e4ebdf.js";
import { M as Mousewheel } from "../../../chunks/mousewheel-b011c830.js";
import { A as Autoplay } from "../../../chunks/autoplay-ee87b360.js";
import { i as img03 } from "../../../chunks/img-3-6f709142.js";
import { i as img4, a as img5 } from "../../../chunks/img-4-aea6c737.js";
import { i as img6 } from "../../../chunks/img-6-fd986b52.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
const EcommerceWidgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let setCount = 2;
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
        default: () => {
          return `<h5 class="${"text-decoration-underline mb-3 mt-2 pb-3"}">Ecommerce Widgets</h5>`;
        }
      })}`;
    }
  })}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Hot Products</h4>
                <div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, { class: "text-muted", href: "!#" }, {}, {
                default: () => {
                  return `View All
                    `;
                }
              })}</div></div>
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                    direction: "horizontal",
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    mousewheel: true,
                    loop: false,
                    autoplay: { delay: 2e3, disableOnInteraction: false },
                    modules: [Autoplay, Mousewheel],
                    class: "mySwiper vertical-swiper"
                  }, {}, {
                    default: () => {
                      return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { style: "max-width: 200px" }, {}, {
                        default: () => {
                          return `<div><div class="${"bg-soft-info rounded"}"><img${add_attribute("src", img03, 0)} alt="${""}" style="${"max-height: 210px;max-width: auto"}"></div>
                            <div class="${"pt-3"}"><h5 class="${"text-secondary"}">$99.94</h5>
                                <a href="${"#!"}"><h6 class="${"fs-15 lh-base text-truncate mb-0"}">350 ml Glass Grocery Container</h6></a></div></div>`;
                        }
                      })}
                    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { style: "max-width: 200px" }, {}, {
                        default: () => {
                          return `<div><div class="${"bg-soft-success rounded"}"><img${add_attribute("src", img4, 0)} alt="${""}" style="${"max-height: 210px;max-width: auto"}"></div>
                            <div class="${"pt-3"}"><h5 class="${"text-secondary"}">$99.94</h5>
                                <a href="${"#!"}"><h6 class="${"fs-15 lh-base text-truncate mb-0"}">Fabric Dual Tone Living Room Chair</h6></a></div></div>`;
                        }
                      })}
                    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { style: "max-width: 200px" }, {}, {
                        default: () => {
                          return `<div><div class="${"bg-soft-warning rounded"}"><img${add_attribute("src", img5, 0)} alt="${""}" style="${"max-height: 210px;max-width: auto"}"></div>
                            <div class="${"pt-3"}"><h5 class="${"text-secondary"}">$99.94</h5>
                                <a href="${"#!"}"><h6 class="${"fs-15 lh-base text-truncate mb-0"}">Crux Motorsports Helmet</h6></a></div></div>`;
                        }
                      })}
                    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { style: "max-width: 200px" }, {}, {
                        default: () => {
                          return `<div><div class="${"bg-soft-secondary rounded"}"><img${add_attribute("src", img6, 0)} alt="${""}" style="${"max-height: 210px;max-width: auto"}"></div>
                            <div class="${"pt-3"}"><h5 class="${"text-secondary"}">$99.94</h5>
                                <a href="${"#!"}"><h6 class="${"fs-15 lh-base text-truncate mb-0"}">Half Sleeve T-Shirts (Blue)</h6></a></div></div>`;
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

    ${validate_component(Col, "Col").$$render($$result, { xl: 3, ms: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center mb-3"}"><div class="${"avatar-sm me-3 flex-shrink-0"}"><div class="${"avatar-title bg-soft-info rounded"}"><img${add_attribute("src", img6, 0)} alt="${""}" class="${"avatar-xs"}"></div></div>
                    <div class="${"flex-grow-1"}"><p class="${"text-muted mb-2"}">Adidas</p>
                        <h5 class="${"fs-15 fw-bold mb-0"}">Half Sleeve T-Shirts (Blue)</h5></div></div>
                <p class="${"text-muted pb-1"}">If you couldn&#39;t relate to the information in the previous point, you might be looking for the singlet T-shirt, which is also known as the half T-shirt.</p>

                ${validate_component(Row, "Row").$$render($$result, { class: "mb-4" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                        default: () => {
                          return `<h6 class="${"fs-14 mb-2"}">Sizes</h6>
                        <ul class="${"clothes-size list-unstyled hstack gap-2 mb-0"}"><li><input type="${"radio"}" name="${"sizes"}" id="${"color-1"}" disabled>
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-1"
                          }, {}, {
                            default: () => {
                              return `S`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-2"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-2"
                          }, {}, {
                            default: () => {
                              return `M`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-3"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-3"
                          }, {}, {
                            default: () => {
                              return `L`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-4"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-4"
                          }, {}, {
                            default: () => {
                              return `XL`;
                            }
                          })}</li></ul>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                        default: () => {
                          return `<div><h6 class="${"fs-14 mb-2"}">Colors</h6>
                            <div class="${"d-flex flex-wrap gap-2 select-color"}"><div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"Out of Stock"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-primary"}" disabled><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"03 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-secondary"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"03 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-success"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"02 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-info"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div></div></div>`;
                        }
                      })}`;
                    }
                  })}

                <div class="${"d-flex mb-4 align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"text-primary fs-18 mb-0"}"><span>$22.45</span> <small class="${"text-decoration-line-through text-muted fs-13"}">$37.45</small></h5></div>
                    
                    <div class="${"input-step flex-shrink-0"}"><button type="${"button"}" class="${"minus"}">\u2013</button>
                        <input type="${"number"}" class="${"product-quantity"}"${add_attribute("value", setCount, 0)} min="${"0"}" max="${"100"}">
                        <button type="${"button"}" class="${"plus"}">+</button></div></div>

                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "btn btn-soft-danger d-block"
                  }, {}, {
                    default: () => {
                      return `Add to Cart`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xl: 3, md: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "position-relative" }, {}, {
                default: () => {
                  return `<h5 class="${"mb-3 fw-semibold"}">Select Bank</h5>
                <div class="${"vstack gap-2"}"><div class="${"form-check card-radio"}"><input id="${"listGroupRadioGrid1"}" name="${"listGroupRadioGrid"}" type="${"radio"}" class="${"form-check-input"}"> 
                        ${validate_component(Label, "Label").$$render($$result, {
                    class: "form-check-label",
                    "html-for": "listGroupRadioGrid1"
                  }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-soft-success text-success fs-18 rounded"}"><i class="${"ri-visa-fill"}"></i></div></div></div>
                                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Visa Card</h6>
                                    <b class="${"pay-amount"}">$8,500</b></div></div>`;
                    }
                  })}</div>
                    <div class="${"form-check card-radio"}"><input id="${"listGroupRadioGrid2"}" name="${"listGroupRadioGrid"}" type="${"radio"}" class="${"form-check-input"}">
                        ${validate_component(Label, "Label").$$render($$result, {
                    class: "form-check-label",
                    "html-for": "listGroupRadioGrid2"
                  }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-soft-info text-info fs-18 rounded"}"><i class="${"ri-bank-card-2-line"}"></i></div></div></div>
                                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Credit Card</h6>
                                    <b class="${"pay-amount"}">$8,326</b></div></div>`;
                    }
                  })}</div>
                    <div class="${"form-check card-radio"}"><input id="${"listGroupRadioGrid3"}" name="${"listGroupRadioGrid"}" type="${"radio"}" class="${"form-check-input"}">
                        ${validate_component(Label, "Label").$$render($$result, {
                    class: "form-check-label",
                    "html-for": "listGroupRadioGrid3"
                  }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-soft-danger text-danger fs-18 rounded"}"><i class="${"ri-mastercard-line"}"></i></div></div></div>
                                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Mastercard Card</h6>
                                    <b class="${"pay-amount"}">$8,400</b></div></div>`;
                    }
                  })}</div></div>
    
                <button type="${"button"}" class="${"btn btn-success w-100 mt-3"}" id="${"confirm-btn"}">Confirm</button>
    
                <div id="${"notification-warn"}" class="${"position-absolute top-0 start-0 end-0 d-none"}"><div class="${"alert alert-warning"}" role="${"alert"}">Select at list one item
                    </div></div>
    
                <div class="${"notification-elem"}" id="${"notification-overlay"}"><div class="${"text-center"}"><lord-icon src="${"https://cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#0ab39c,secondary:#405189"}" style="${"width:10px;height:20px"}"></lord-icon>
                        <div class="${"mt-4 pt-2"}"><h5 class="${"mb-1 success-pay"}">$6,201 Payment Successfully</h5>
                            <p class="${"text-muted mx-4"}">Aww yeah, you successfully read this important message.</p>
    
                            <div><button type="${"button"}" class="${"btn btn-danger btn-sm w-sm"}" id="${"back-btn"}">Back to Home</button></div></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { xl: 3, ms: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"d-flex align-items-center mb-3"}"><div class="${"avatar-sm me-3 flex-shrink-0"}"><div class="${"avatar-title bg-soft-info rounded"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"avatar-xs"}"></div></div>
                    <div class="${"flex-grow-1"}"><p class="${"text-muted mb-2"}">Adidas</p>
                        <h5 class="${"fs-15 fw-bold mb-0"}">Half Sleeve T-Shirts (Blue)</h5></div></div>
                <p class="${"text-muted pb-1"}">If you couldn&#39;t relate to the information in the previous point, you might be looking for the singlet T-shirt, which is also known as the half T-shirt.</p>

                ${validate_component(Row, "Row").$$render($$result, { class: "mb-4" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                        default: () => {
                          return `<h6 class="${"fs-14 mb-2"}">Sizes</h6>
                        <ul class="${"clothes-size list-unstyled hstack gap-2 mb-0"}"><li><input type="${"radio"}" name="${"sizes"}" id="${"color-1"}" disabled>
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-1"
                          }, {}, {
                            default: () => {
                              return `S`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-2"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-2"
                          }, {}, {
                            default: () => {
                              return `M`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-3"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-3"
                          }, {}, {
                            default: () => {
                              return `L`;
                            }
                          })}</li>
                            <li><input type="${"radio"}" name="${"sizes"}" id="${"color-4"}">
                                ${validate_component(Label, "Label").$$render($$result, {
                            class: "avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle",
                            "html-for": "color-4"
                          }, {}, {
                            default: () => {
                              return `XL`;
                            }
                          })}</li></ul>`;
                        }
                      })}
                    ${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                        default: () => {
                          return `<div><h6 class="${"fs-14 mb-2"}">Colors</h6>
                            <div class="${"d-flex flex-wrap gap-2 select-color"}"><div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"Out of Stock"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-primary"}" disabled><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"03 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-secondary"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"03 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-success"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div>
                                <div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"02 Items Available"}"><button type="${"button"}" class="${"btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-info"}"><i class="${"ri-checkbox-blank-circle-fill"}"></i></button></div></div></div>`;
                        }
                      })}`;
                    }
                  })}

                <div class="${"d-flex mb-4 align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"text-primary fs-18 mb-0"}"><span>$22.45</span> <small class="${"text-decoration-line-through text-muted fs-13"}">$37.45</small></h5></div>
                    
                    <div class="${"input-step flex-shrink-0"}"><button type="${"button"}" class="${"minus"}">\u2013</button>
                        <input type="${"number"}" class="${"product-quantity"}"${add_attribute("defaultvalue", setCount, 0)} min="${"0"}" max="${"100"}">
                        <button type="${"button"}" class="${"plus"}">+</button></div></div>

                ${validate_component(Link, "Link").$$render($$result, {
                    href: "#!",
                    class: "btn btn-soft-danger d-block"
                  }, {}, {
                    default: () => {
                      return `Add to Cart`;
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
      return `${validate_component(Col, "Col").$$render($$result, { class: "col-xxl-5" }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                    default: () => {
                      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-end" }, {}, {
                        default: () => {
                          return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control bg-light border-light"}" autocomplete="${"off"}" id="${"searchList"}" placeholder="${"Search candidate..."}">
                            <i class="${"ri-search-line search-icon"}"></i></div>
                        <div data-simplebar style="${"max-height: 190px;"}" class="${"px-3 mx-n3"}"><ul class="${"list-unstyled mb-0 pt-2"}" id="${"candidate-list"}"><li>${validate_component(Link, "Link").$$render($$result, {
                            href: "!#",
                            class: "d-flex align-items-center py-2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}"></div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">Anna Adame</span> <span class="${"text-muted fw-normal"}">@Anna</span></h5>
                                            <div class="${"d-none candidate-position"}">Web Developer</div></div>`;
                            }
                          })}</li>

                                <li>${validate_component(Link, "Link").$$render($$result, {
                            href: "!#",
                            class: "d-flex align-items-center py-2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}"></div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">Patricia Cavin</span> <span class="${"text-muted fw-normal"}">@Patricia</span></h5>
                                            <div class="${"d-none candidate-position"}">Web Developer</div></div>`;
                            }
                          })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, {
                            href: "!#",
                            class: "d-flex align-items-center py-2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}"></div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">Jason Tran</span> <span class="${"text-muted fw-normal"}">@Jason</span></h5>
                                            <div class="${"d-none candidate-position"}">Magento Developer</div></div>`;
                            }
                          })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, {
                            href: "!#",
                            class: "d-flex align-items-center py-2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}"></div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">Cheryl Moore</span> <span class="${"text-muted fw-normal"}">@Cheryl</span></h5>
                                            <div class="${"d-none candidate-position"}">Product Designer</div></div>`;
                            }
                          })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, {
                            href: "!#",
                            class: "d-flex align-items-center py-2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}"></div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">Jennifer Bailey</span> <span class="${"text-muted fw-normal"}">@Jennifer</span></h5>
                                            <div class="${"d-none candidate-position"}">Marketing Director</div></div>`;
                            }
                          })}</li></ul></div>`;
                        }
                      })}`;
                    }
                  })}
                <div class="${"col-lg-6"}"><div class="${"card-body text-center"}"><div class="${"avatar-md mb-3 mx-auto"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" id="${"candidate-img"}" class="${"img-thumbnail rounded-circle shadow-none"}"></div>

                        <h5 id="${"candidate-name"}" class="${"mb-0"}">Anna Adame</h5>
                        <p id="${"candidate-position"}" class="${"text-muted"}">Web Developer</p>

                        <div class="${"d-flex gap-2 justify-content-center mb-3"}"><button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Google"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-google-line"}"></i></span></button>

                            <button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Linkedin"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-linkedin-line"}"></i></span></button>
                            <button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Dribbble"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-dribbble-fill"}"></i></span></button></div>

                        <div><button type="${"button"}" class="${"btn btn-success rounded-pill w-sm"}"><i class="${"ri-add-fill me-1 align-bottom"}"></i> Follow</button></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { EcommerceWidgets as default };
