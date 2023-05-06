import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                          *//* empty css                                      */import "../../../../chunks/autoplay.min-76e4ebdf.js";
import { N as Navigation } from "../../../../chunks/navigation-98db8aa9.js";
import { P as Pagination } from "../../../../chunks/pagination-317dcc2b.js";
import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
import { d as Img06, I as Img03, c as Img05, a as Img02, b as Img01 } from "../../../../chunks/img-06-fae769a6.js";
import { I as Img04 } from "../../../../chunks/img-04-688285cd.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
const Trending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"categories"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h2 class="${"mb-3 fw-semibold lh-base"}">Trending All Categories</h2>
                    <p class="${"text-muted"}">The process of creating an NFT may cost less than a dollar, but the process of selling it can cost up to a thousand dollars. For example, Allen Gannett, a software developer.</p></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                modules: [Navigation, Autoplay, Pagination],
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true
                },
                breakpoints: {
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  1024: { slidesPerView: 4, spaceBetween: 30 }
                },
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
                class: "mySwiper swiper mySwiper pb-4"
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", Img06, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                            <img src="${"https://img.themesbrand.com/velzon/images/img-2.gif"}" alt="${""}" class="${"img-fluid rounded mt-1"}">`;
                                    }
                                  })}
                                        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img src="${"https://img.themesbrand.com/velzon/images/img-5.gif"}" alt="${""}" class="${"img-fluid rounded mb-1"}">
                                            <img${add_attribute("src", Img03, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                default: () => {
                                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                }
                              })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Artwork <span class="${"badge badge-soft-success"}">206</span>`;
                                }
                              })}</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", Img05, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                            <img src="${"https://img.themesbrand.com/velzon/images/img-1.gif"}" alt="${""}" class="${"img-fluid rounded mt-1"}">`;
                                    }
                                  })}
                                        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img src="${"https://img.themesbrand.com/velzon/images/img-4.gif"}" alt="${""}" class="${"img-fluid rounded mb-1"}">
                                            <img${add_attribute("src", Img04, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                default: () => {
                                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                }
                              })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Crypto Card <span class="${"badge badge-soft-success"}">743</span>`;
                                }
                              })}</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", Img02, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                            <img src="${"https://img.themesbrand.com/velzon/images/img-3.gif"}" alt="${""}" class="${"img-fluid rounded mt-1"}">`;
                                    }
                                  })}
                                        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img src="${"https://img.themesbrand.com/velzon/images/img-1.gif"}" alt="${""}" class="${"img-fluid rounded mb-1"}">
                                            <img${add_attribute("src", Img01, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                default: () => {
                                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                }
                              })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Music <span class="${"badge badge-soft-success"}">679</span>`;
                                }
                              })}</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", Img03, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                            <img src="${"https://img.themesbrand.com/velzon/images/img-5.gif"}" alt="${""}" class="${"img-fluid rounded mt-1"}">`;
                                    }
                                  })}
                                        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img src="${"https://img.themesbrand.com/velzon/images/img-2.gif"}" alt="${""}" class="${"img-fluid rounded mb-1"}">
                                            <img${add_attribute("src", Img05, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                default: () => {
                                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                }
                              })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Games <span class="${"badge badge-soft-success"}">341</span>`;
                                }
                              })}</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-1 mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", Img02, 0)} alt="${""}" class="${"img-fluid rounded"}">
                                            <img src="${"https://img.themesbrand.com/velzon/images/img-3.gif"}" alt="${""}" class="${"img-fluid rounded mt-1"}">`;
                                    }
                                  })}
                                        ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                    default: () => {
                                      return `<img src="${"https://img.themesbrand.com/velzon/images/img-1.gif"}" alt="${""}" class="${"img-fluid rounded mb-1"}">
                                            <img${add_attribute("src", Img01, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "float-end" }, {}, {
                                default: () => {
                                  return `View All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                                }
                              })}
                                    <h5 class="${"mb-0 fs-16"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Photography <span class="${"badge badge-soft-success"}">1452</span>`;
                                }
                              })}</h5>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}
                    <div class="${"swiper-pagination swiper-pagination-dark"}"></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Trending as default };
