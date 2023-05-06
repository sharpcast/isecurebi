import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                           *//* empty css                                          */import { P as Pagination } from "../../../../chunks/pagination-317dcc2b.js";
import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
var amazon = "/_app/assets/amazon-8ca60649.svg";
var walmart = "/_app/assets/walmart-11e1c5c6.svg";
var lenovo = "/_app/assets/lenovo-43f1623d.svg";
var paypal = "/_app/assets/paypal-79c9f1cb.svg";
var shopify = "/_app/assets/shopify-64f24327.svg";
var verizon = "/_app/assets/verizon-f25aee44.svg";
const Client = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pt-5 mt-5"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"text-center mt-5"}"><h5 class="${"fs-20"}">Trusted <span class="${"text-primary text-decoration-underline"}">by</span> the world&#39;s best</h5>
                    ${validate_component(Swiper_1, "Swiper").$$render($$result, {
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: false,
                breakpoints: {
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 }
                },
                loop: true,
                autoplay: { delay: 1e3, disableOnInteraction: false },
                modules: [Pagination, Autoplay],
                class: "mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", amazon, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", walmart, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", lenovo, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", paypal, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", shopify, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"client-images"}"><img${add_attribute("src", verizon, 0)} alt="${"client-img"}" class="${"mx-auto img-fluid d-block"}"></div>`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Client as default };
