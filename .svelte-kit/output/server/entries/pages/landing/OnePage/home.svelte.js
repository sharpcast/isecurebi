import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                           *//* empty css                                          */import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
import { E as EffectFade } from "../../../../chunks/effect-fade-096c09c5.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
var imgpattern = "/_app/assets/img-pattern-9288958a.png";
var defaultDemo = "/_app/assets/default-c599f66b.png";
var saasDemo = "/_app/assets/saas-e0fd3800.png";
var materialDemo = "/_app/assets/material-4aa5ef8e.png";
var minimalDemo = "/_app/assets/minimal-cea24dc8.png";
var creativeDemo = "/_app/assets/creative-5cf5e19d.png";
var modernDemo = "/_app/assets/modern-6070af53.png";
var interactiveDemo = "/_app/assets/interactive-e7f74b72.png";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section pb-0 hero-section"}" id="${"hero"}"><div class="${"bg-overlay bg-overlay-pattern"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8, sm: 10 }, {}, {
            default: () => {
              return `<div class="${"text-center mt-lg-5 pt-5"}"><h1 class="${"display-6 fw-semibold mb-3 lh-base"}">The better way to manage your website with <span class="${"text-success"}">Velzon
                        </span></h1>
                    <p class="${"lead text-muted lh-base"}">Velzon is a fully responsive, multipurpose and premium
                        Bootstrap 5 Admin &amp; Dashboard Template built in multiple
                        frameworks.
                    </p>

                    <div class="${"d-flex gap-2 justify-content-center mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/authenticationInner/register/auth-signup-basic",
                class: "btn btn-primary"
              }, {}, {
                default: () => {
                  return `Get Started <i class="${"ri-arrow-right-line align-middle ms-1"}"></i>`;
                }
              })}
                        ${validate_component(Link, "Link").$$render($$result, {
                href: "/pages/pricing/pages-pricing",
                class: "btn btn-danger"
              }, {}, {
                default: () => {
                  return `View Plans <i class="${"ri-eye-line align-middle ms-1"}"></i>`;
                }
              })}</div></div>

                <div class="${"mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel"}"><div class="${"demo-img-patten-top d-none d-sm-block"}"><img${add_attribute("src", imgpattern, 0)} class="${"d-block img-fluid"}" alt="${"..."}"></div>
                    <div class="${"demo-img-patten-bottom d-none d-sm-block"}"><img${add_attribute("src", imgpattern, 0)} class="${"d-block img-fluid"}" alt="${"..."}"></div>
                    ${validate_component(Swiper_1, "Swiper").$$render($$result, {
                spaceBetween: 30,
                effect: "fade",
                loop: true,
                pagination: { clickable: true },
                autoplay: { delay: 2e3, disableOnInteraction: false },
                modules: [EffectFade, Autoplay],
                class: "mySwiper"
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", defaultDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", saasDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", materialDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", minimalDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", creativeDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", modernDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {
                    class: "carousel-inner shadow-lg p-2 bg-white rounded"
                  }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", interactiveDemo, 0)} class="${"d-block w-100"}" alt="${"..."}">`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}

    <div class="${"position-absolute start-0 end-0 bottom-0 hero-shape-svg"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" version="${"1.1"}" viewBox="${"0 0 1440 120"}"><g mask="${"url(&quot;#SvgjsMask1003&quot;)"}" fill="${"none"}"><path d="${"M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"}"></path></g></svg></div></section>`;
});
export { Home as default };
