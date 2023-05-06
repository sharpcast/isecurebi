import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import WatchListChart from "./watchListChart.svelte.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
/* empty css                                      *//* empty css                                          */import { M as Mousewheel } from "../../../../chunks/mousewheel-b011c830.js";
import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Watchlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"d-flex align-items-center mb-3"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-0"}">Watchlist</h5></div>
	<div class="${"flexshrink-0"}"><button class="${"btn btn-success btn-sm"}"><i class="${"ri-star-line align-bottom"}"></i> Add Watchlist</button></div></div>
${validate_component(Swiper_1, "Swiper").$$render($$result, {
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: true,
    autoplay: { delay: 2e3, disableOnInteraction: false },
    modules: [Autoplay, Mousewheel],
    class: "cryptoSlider"
  }, {}, {
    default: () => {
      return `${each(MOCK_DATA.watchlist, (item) => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"float-end"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "", class: "text-reset p-0" }, {}, {
                          default: () => {
                            return `<span class="${"text-muted fs-18"}"><i class="${"mdi mdi-dots-horizontal"}"></i></span>
							`;
                          }
                        })}
							${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                          default: () => {
                            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                              default: () => {
                                return `View Details`;
                              }
                            })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                              default: () => {
                                return `Remove Watchlist`;
                              }
                            })}
							`;
                          }
                        })}
						`;
                      }
                    })}</div>
					<div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} class="${"bg-light rounded-circle p-1 avatar-xs img-fluid"}" alt="${""}">
						<h6 class="${"ms-2 mb-0 fs-14"}">${escape(item.coinName)}</h6></div>
					${validate_component(Row, "Row").$$render($$result, { class: "align-items-end g-0" }, {}, {
                      default: () => {
                        return `${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                          default: () => {
                            return `<h5 class="${"mb-1 mt-4"}">${escape(item.price)}</h5>
							<p${add_attribute("class", "fs-13 fw-medium mb-0 text-" + item.percentageClass, 0)}>${escape(item.percentage)}
								<span class="${"text-muted ms-2 fs-10"}">(${escape(item.coinNameAbbr)})</span></p>
						`;
                          }
                        })}
						${validate_component(Col, "Col").$$render($$result, { xs: 6 }, {}, {
                          default: () => {
                            return `<div class="${"apex-charts crypto-widget"}" id="${"bitcoin_sparkline_charts"}" dir="${"ltr"}">${validate_component(WatchListChart, "WatchListChart").$$render($$result, {
                              id: item.id,
                              seriesData: item.series,
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
});
export { Watchlist as default };
