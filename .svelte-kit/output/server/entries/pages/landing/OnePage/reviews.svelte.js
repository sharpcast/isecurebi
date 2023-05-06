import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                          *//* empty css                                          */import "../../../../chunks/autoplay.min-76e4ebdf.js";
import { N as Navigation } from "../../../../chunks/navigation-98db8aa9.js";
import { P as Pagination } from "../../../../chunks/pagination-317dcc2b.js";
import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-primary"}" id="${"reviews"}"><div class="${"bg-overlay bg-overlay-pattern"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 10 }, {}, {
            default: () => {
              return `<div class="${"text-center"}"><div><i class="${"ri-double-quotes-l text-success display-3"}"></i></div>
                    <h4 class="${"text-white mb-5"}"><span class="${"text-success"}">19k</span>+ Satisfied clients</h4>

                    ${validate_component(Swiper_1, "Swiper").$$render($$result, {
                modules: [Navigation, Pagination, Autoplay],
                pagination: { clickable: true },
                navigation: true,
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
                class: "mySwiper swiper client-review-swiper rounded"
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"row justify-content-center"}"><div class="${"col-10"}"><div class="${"text-white-50"}"><p class="${"fs-20 ff-secondary mb-4"}">&quot; I am givng 5 stars. Theme is great and everyone one stuff everything in theme. Future request should not affect current
                                            state of theme. &quot;</p>

                                        <div><h5 class="${"text-white"}">gregoriusus</h5>
                                            <p>- Skote User</p></div></div></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"row justify-content-center"}"><div class="${"col-10"}"><div class="${"text-white-50"}"><p class="${"fs-20 ff-secondary mb-4"}">&quot; Awesome support. Had few issues while setting up because of my device, the support team helped me fix them up in a day.
                                            Everything looks clean and good. Highly recommended! &quot;</p>

                                        <div><h5 class="${"text-white"}">GeekyGreenOwl</h5>
                                            <p>- Skote User</p></div></div></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"row justify-content-center"}"><div class="${"col-10"}"><div class="${"text-white-50"}"><p class="${"fs-20 ff-secondary mb-4"}">&quot; Amazing template, Redux store and components is nicely designed.
                                            It&#39;s a great start point for an admin based project. Clean Code and good documentation. Template is
                                            completely in React and absolutely no usage of jQuery &quot;</p>

                                        <div><h5 class="${"text-white"}">sreeks456</h5>
                                            <p>- Veltrix User</p></div></div></div></div>`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Reviews as default };
