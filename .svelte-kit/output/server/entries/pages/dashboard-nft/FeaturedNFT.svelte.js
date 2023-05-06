import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
import { N as Navigation } from "../../../chunks/navigation-98db8aa9.js";
import { A as Autoplay } from "../../../chunks/autoplay-ee87b360.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
/* empty css                                       *//* empty css                                       *//* empty css                                        *//* empty css                                        */import "../../../chunks/autoplay.min-76e4ebdf.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardNFT-8513f480.js";
import TopArtworkChart from "./TopArtworkChart.svelte.js";
import "../../../chunks/create-element-if-not-defined-c750ea09.js";
import "../../../chunks/img-06-fae769a6.js";
import "../../../chunks/img-04-688285cd.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
const FeaturedNFT = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 8 }, {}, {
        default: () => {
          return `<div class="${"d-flex pt-2 pb-4"}"><h5 class="${"card-title fs-18 mb-0"}">Featured NFTs Artworks</h5></div>
        ${validate_component(Swiper_1, "Swiper").$$render($$result, {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            breakpoints: {
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            },
            loop: true,
            autoplay: { delay: 2500, disableOnInteraction: false },
            className: "mySwiper marketplace-swiper rounded gallery-light pt-5"
          }, {}, {
            default: () => {
              return `${each(MOCK_DATA.featuredNFTData, (item) => {
                return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="${"card explore-box card-animate rounded"}"><div class="${"bookmark-icon position-absolute top-0 end-0 p-2"}"><button type="${"button"}" class="${"btn btn-icon active"}" data-bs-toggle="${"button"}" aria-pressed="${"true"}"><i class="${"mdi mdi-cards-heart fs-16"}"></i></button></div>
                        <div class="${"explore-place-bid-img"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"img-fluid card-img-top explore-img"}">
                            <div class="${"bg-overlay"}"></div>
                            <div class="${"place-bid-btn"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
                      default: () => {
                        return `<i class="${"ri-auction-fill align-bottom me-1"}"></i> Place Bid`;
                      }
                    })}
                            </div></div>
                        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<p class="${"fw-medium mb-0 float-end"}"><i class="${"mdi mdi-heart text-danger align-middle"}"></i>
                                ${escape(item.price)}</p>
                            <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                          href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                          class: "link-dark"
                        }, {}, {
                          default: () => {
                            return `${escape(item.title)}`;
                          }
                        })}</h5>
                            <p class="${"text-muted mb-0"}">${escape(item.category)}</p>
                        `;
                      }
                    })}
                        <div class="${"card-footer border-top border-top-dashed"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 fs-14"}"><i class="${"ri-price-tag-3-fill text-warning align-bottom me-1"}"></i>
                                    Highest:
                                    <span class="${"fw-medium"}">${escape(item.highest)}</span></div>
                                <h5 class="${"flex-shrink-0 fs-14 text-primary mb-0"}">${escape(item.price)}
                                </h5></div>
                        </div></div>
                `;
                  }
                })}`;
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Top Artworks</h4>
                <div class="${"flex-shrink-0"}"><div><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">See All
                        </button></div></div></div>
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"table-responsive table-card"}"><div data-simplebar style="${"max-height: 410px"}"><table class="${"table table-borderless align-middle"}"><tbody>${each(MOCK_DATA.topartWork, (item) => {
                    return `<tr><td><div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}">
                                                <div class="${"ms-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                      default: () => {
                        return `<h6 class="${"fs-15 mb-1"}">${escape(item.title)}</h6>
                                                    `;
                      }
                    })}
                                                    <p class="${"mb-0 text-muted"}">${escape(item.sales)} Sales
                                                    </p></div>
                                            </div></td>
                                        <td>${validate_component(TopArtworkChart, "TopArtworkChart").$$render($$result, {
                      seriesData: item.series,
                      chartsColor: item.chartsColor,
                      id: item.id
                    }, {}, {})}</td>
                                        <td class="${"text-end"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                      default: () => {
                        return `<h6 class="${"fs-15 mb-1"}">$${escape(item.collection)}+
                                                </h6>
                                            `;
                      }
                    })}
                                            <p class="${"mb-0 text-muted"}">Total USD
                                            </p></td>
                                    </tr>`;
                  })}</tbody></table></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { FeaturedNFT as default };
