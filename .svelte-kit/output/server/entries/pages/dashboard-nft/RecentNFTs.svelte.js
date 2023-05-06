import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardNFT-8513f480.js";
import { u as usFlag, r as russiaFlag, s as spainFlag, i as italyFlag, g as germanyFlag } from "../../../chunks/russia-18f81616.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       *//* empty css                                       */import { N as Navigation } from "../../../chunks/navigation-98db8aa9.js";
import { P as Pagination } from "../../../chunks/pagination-317dcc2b.js";
import { A as Autoplay } from "../../../chunks/autoplay-ee87b360.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { M as Map } from "../../../chunks/Map-45314136.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/img-06-fae769a6.js";
import "../../../chunks/img-04-688285cd.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "../../../chunks/create-element-if-not-defined-c750ea09.js";
const RecentNFTs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Recent NFTs</h4>
                <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "a",
                        class: "text-reset dropdown-btn p-0",
                        role: "button",
                        color: ""
                      }, {}, {
                        default: () => {
                          return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by:
                            </span><span class="${"text-muted"}">Popular <i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Popular`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Newest`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Oldest`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</div>`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"table-responsive table-card"}"><table class="${"table table-borderless table-centered align-middle table-nowrap mb-0"}"><thead class="${"text-muted bg-soft-light"}"><tr><th>Collection</th>
                                <th>Volume</th>
                                <th>24h %</th>
                                <th>Creators</th>
                                <th>Items</th></tr></thead>
                        <tbody>${each(MOCK_DATA.recentNFTsData, (item) => {
                    return `<tr><td><div class="${"d-flex align-items-center"}"><div class="${"me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
                                            <div class="${"flex-grow-1"}"><h6 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                      href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                      class: "link-dark"
                    }, {}, {
                      default: () => {
                        return `${escape(item.title)}`;
                      }
                    })}</h6>
                                                <p class="${"text-muted fs-13 mb-0"}">${escape(item.category)}
                                                </p></div>
                                        </div></td>
                                    <td><img${add_attribute("src", item.icon, 0)} class="${"avatar-xxs me-2"}" alt="${""}">${escape(item.volume)}</td>
                                    <td><span${add_attribute("class", item.textColor ? "text-danger mb-0" : "text-success mb-0", 0)}><i class="${"mdi mdi-trending-up align-middle me-1"}"></i>${escape(item.hours)}
                                        </span></td>
                                    <td>${escape(item.creators)}</td>
                                    <td>${escape(item.items)}</td>
                                </tr>`;
                  })}</tbody></table></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Worldwide Top Creators
                </h4>
                <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">Export Report
                    </button></div>`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div style="${"height: 265px"}">${validate_component(Map, "Map").$$render($$result, { latitude: -34.397, longitude: 150.644 }, {}, {})}</div>
                <div class="${"mt-1"}"><p class="${"mb-1"}"><img${add_attribute("src", usFlag, 0)} alt="${""}" height="${"15"}" class="${"rounded me-2"}">
                        United States <span class="${"float-end"}">34%</span></p>
                    <p class="${"mb-1"}"><img${add_attribute("src", russiaFlag, 0)} alt="${""}" height="${"15"}" class="${"rounded me-2"}">
                        Russia <span class="${"float-end"}">27%</span></p>
                    <p class="${"mb-1"}"><img${add_attribute("src", spainFlag, 0)} alt="${""}" height="${"15"}" class="${"rounded me-2"}">
                        Spain <span class="${"float-end"}">21%</span></p>
                    <p class="${"mb-1"}"><img${add_attribute("src", italyFlag, 0)} alt="${""}" height="${"15"}" class="${"rounded me-2"}">
                        Italy <span class="${"float-end"}">13%</span></p>
                    <p class="${"mb-0"}"><img${add_attribute("src", germanyFlag, 0)} alt="${""}" height="${"15"}" class="${"rounded me-2"}">
                        Germany <span class="${"float-end"}">5%</span></p></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 6 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                default: () => {
                  return `<h6 class="${"card-title flex-grow-1 mb-0"}">Top Collections</h6>
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "/NFTmarketplace/Collections/apps-nft-collections",
                    type: "button",
                    class: "btn btn-soft-primary btn-sm flex-shrink-0"
                  }, {}, {
                    default: () => {
                      return `See All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                    }
                  })}`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                    modules: [Autoplay, Pagination, Navigation],
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                      el: ".swiper-pagination",
                      clickable: true
                    },
                    navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev"
                    },
                    loop: true,
                    autoplay: { delay: 2500, disableOnInteraction: false },
                    class: "mySwiper swiper collection-slider"
                  }, {}, {
                    default: () => {
                      return `${each(MOCK_DATA.topCollectionData, (item) => {
                        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                          default: () => {
                            return `<div class="${"dash-collection overflow-hidden rounded-top position-relative"}"><img${add_attribute("src", item.img, 0)} alt="${""}" height="${"220"}" class="${"object-cover w-100"}">
                                <div class="${"content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center"}"><div class="${"flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                              default: () => {
                                return `<h5 class="${"text-white fs-16 mb-1"}">${escape(item.category)}</h5>
                                        `;
                              }
                            })}
                                        <p class="${"text-white-75 mb-0"}">${escape(item.items)} Items
                                        </p></div>
                                    <div class="${"avatar-xxs"}"><div class="${"avatar-title bg-white rounded-circle"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "link-success" }, {}, {
                              default: () => {
                                return `<i class="${"ri-arrow-right-line"}"></i>`;
                              }
                            })}
                                        </div></div>
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
          })}
        ${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                default: () => {
                  return `<h5 class="${"card-title flex-grow-1 mb-0"}">Popular Creators</h5>
                ${validate_component(Link, "Link").$$render($$result, {
                    href: "/NFTmarketplace/Creators/apps-nft-creators",
                    type: "button",
                    class: "btn btn-soft-primary btn-sm flex-shrink-0"
                  }, {}, {
                    default: () => {
                      return `See All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                    }
                  })}`;
                }
              })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                    modules: [Autoplay, Pagination, Navigation],
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                      el: ".swiper-pagination",
                      clickable: true
                    },
                    navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev"
                    },
                    loop: true,
                    autoplay: { delay: 2500, disableOnInteraction: false },
                    class: "mySwiper swiper collection-slider"
                  }, {}, {
                    default: () => {
                      return `${each(MOCK_DATA.popularCreatorsData, (item) => {
                        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                          default: () => {
                            return `<div class="${"d-flex"}"><div class="${"flex-shink-0"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm object-cover rounded"}"></div>
                                <div class="${"ms-3 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                              default: () => {
                                return `<h5 class="${"mb-1"}">${escape(item.author)}</h5>
                                    `;
                              }
                            })}
                                    <p class="${"text-muted mb-0"}"><i class="${"mdi mdi-ethereum text-primary fs-14"}"></i>
                                        ${escape(item.price)}
                                    </p></div>
                                <div>${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "float-end" }, {}, {
                              default: () => {
                                return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                  tag: "a",
                                  class: "btn btn-ghost-primary btn-icon dropdown p-0",
                                  role: "button",
                                  color: ""
                                }, {}, {
                                  default: () => {
                                    return `<i class="${"ri-more-fill align-middle fs-16"}"></i>
                                        `;
                                  }
                                })}
                                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                                  default: () => {
                                    return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                      default: () => {
                                        return `View`;
                                      }
                                    })}
                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                      default: () => {
                                        return `Share`;
                                      }
                                    })}
                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                      default: () => {
                                        return `Report`;
                                      }
                                    })}
                                        `;
                                  }
                                })}
                                    `;
                              }
                            })}
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
  })}`;
});
export { RecentNFTs as default };
