import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                       */import { M as Mousewheel } from "../../../chunks/mousewheel-b011c830.js";
import { A as Autoplay } from "../../../chunks/autoplay-ee87b360.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../chunks/crypto-26d55d11.js";
import DashboardCryptoCharts from "./DashboardCryptoCharts.svelte.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "../../../chunks/aave-961ba45c.js";
import "../../../chunks/eth-105a4f91.js";
import "../../../chunks/doge-aae7bd6c.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-3-4c804a8b.js";
import "../../../chunks/img-6-3ccff08f.js";
const Widgets1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
    default: () => {
      return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
        slidesPerView: 5,
        spaceBetween: 24,
        mousewheel: true,
        autoplay: { delay: 2e3, disableOnInteraction: false },
        modules: [Autoplay, Mousewheel],
        class: "cryptoSlider"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.cryptoSlider, (item) => {
            return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"float-end"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                          default: () => {
                            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                              class: "text-reset p-0",
                              color: "",
                              tag: "a",
                              role: "button"
                            }, {}, {
                              default: () => {
                                return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-horizontal"}"></i></span>
								`;
                              }
                            })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                              class: "dropdown-menu dropdown-menu-end",
                              end: true
                            }, {}, {
                              default: () => {
                                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                  default: () => {
                                    return `Details`;
                                  }
                                })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                  default: () => {
                                    return `Cancel`;
                                  }
                                })}
								`;
                              }
                            })}
							`;
                          }
                        })}</div>
						<div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} class="${"bg-light rounded-circle p-1 avatar-xs img-fluid"}" alt="${""}">
							<h6 class="${"ms-2 mb-0 fs-14"}">${escape(item.label)}</h6></div>
						${validate_component(Row, "Row").$$render($$result, { class: "align-items-end g-0" }, {}, {
                          default: () => {
                            return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                              default: () => {
                                return `<h5 class="${"mb-1 mt-4"}">${escape(item.price)}</h5>
								<p${add_attribute("class", "fs-13 fw-medium mb-0 text-" + item.changeClass, 0)}>${escape(item.change)}<span class="${"text-muted ms-2 fs-10 text-uppercase"}">(${escape(item.coinName)})</span></p>
							`;
                              }
                            })}
							${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                              default: () => {
                                return `<div class="${"apex-charts crypto-widget"}" dir="${"ltr"}">${validate_component(DashboardCryptoCharts, "DashboardCryptoCharts").$$render($$result, {
                                  seriesData: item.series,
                                  id: item.id,
                                  chartsColor: item.chartsColor
                                }, {}, {})}</div>
							`;
                              }
                            })}
						`;
                          }
                        })}
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
    }
  })}`;
});
export { Widgets1 as default };
