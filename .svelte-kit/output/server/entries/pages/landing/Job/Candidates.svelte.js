import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
import { M as Mousewheel } from "../../../../chunks/mousewheel-b011c830.js";
import { A as Autoplay } from "../../../../chunks/autoplay-ee87b360.js";
/* empty css                                      */var pagination = "";
const Candidates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"candidates"}"><div class="${"bg-overlay bg-overlay-pattern"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-8" }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h1 class="${"mb-3 ff-secondary fw-semibold text-capitalize lh-base"}">Hire Experts <span class="${"text-primary"}">Team</span></h1>
                    <p class="${"text-muted mb-4"}">Hiring experts costs more per hour than hiring entry- or
                        mid-level freelancers, but they can usually get the work
                        done faster\u2014and better.
                    </p></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-12" }, {}, {
            default: () => {
              return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                autoplay: { delay: 2e3, disableOnInteraction: false },
                modules: [Autoplay, Mousewheel],
                slidesPerView: 4,
                spaceBetween: 24,
                Autoplay: true,
                class: "swiper candidate-swiper"
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                    default: () => {
                      return `<div class="${"card text-center"}"><div class="${"card-body p-4"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle avatar-md mx-auto d-block"}">
                                    <h5 class="${"fs-17 mt-3 mb-2"}">Nancy Martino
                                    </h5>
                                    <p class="${"text-muted fs-13 mb-3"}">Creative Designer
                                    </p>

                                    <p class="${"text-muted mb-4 fs-14"}"><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                                        Escondido, California
                                    </p>

                                    <a href="${"#!"}" class="${"btn btn-primary w-100"}">View Profile
                                    </a></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                    default: () => {
                      return `<div class="${"card text-center"}"><div class="${"card-body p-4"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-md mx-auto d-block"}">
                                    <h5 class="${"fs-17 mt-3 mb-2"}">Glen Matney</h5>
                                    <p class="${"text-muted fs-13 mb-3"}">Marketing Director
                                    </p>

                                    <p class="${"text-muted mb-4 fs-14"}"><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                                        Escondido, California
                                    </p>

                                    <a href="${"#!"}" class="${"btn btn-primary w-100"}">View Profile
                                    </a></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                    default: () => {
                      return `<div class="${"card text-center"}"><div class="${"card-body p-4"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle avatar-md mx-auto d-block"}">
                                    <h5 class="${"fs-17 mt-3 mb-2"}">Alexis Clarke
                                    </h5>
                                    <p class="${"text-muted fs-13 mb-3"}">Product Manager
                                    </p>

                                    <p class="${"text-muted mb-4 fs-14"}"><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                                        Escondido, California
                                    </p>

                                    <a href="${"#!"}" class="${"btn btn-primary w-100"}">View Profile
                                    </a></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                    default: () => {
                      return `<div class="${"card text-center"}"><div class="${"card-body p-4"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded-circle avatar-md mx-auto d-block"}">
                                    <h5 class="${"fs-17 mt-3 mb-2"}">James Price</h5>
                                    <p class="${"text-muted fs-13 mb-3"}">Product Designer
                                    </p>

                                    <p class="${"text-muted mb-4 fs-14"}"><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                                        Escondido, California
                                    </p>

                                    <a href="${"#!"}" class="${"btn btn-primary w-100"}">View Profile
                                    </a></div></div>`;
                    }
                  })}
                        ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "swiper-slide" }, {}, {
                    default: () => {
                      return `<div class="${"card text-center"}"><div class="${"card-body p-4"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle avatar-md mx-auto d-block"}">
                                    <h5 class="${"fs-17 mt-3 mb-2"}">Michael Morris
                                    </h5>
                                    <p class="${"text-muted fs-13 mb-3"}">Full Stack Developer
                                    </p>

                                    <p class="${"text-muted mb-4 fs-14"}"><i class="${"ri-map-pin-2-line text-primary me-1 align-bottom"}"></i>${escape(" ")}
                                        Escondido, California
                                    </p>

                                    <a href="${"#!"}" class="${"btn btn-primary w-100"}">View Profile
                                    </a></div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Candidates as default };
