import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { M as MOCK_DATA } from "../../../chunks/ecommerce-55cf8690.js";
import PricingWidgetList from "./PricingWidgetList.svelte.js";
import { i as img01 } from "../../../chunks/img-1-6f6b648d.js";
import { i as img6 } from "../../../chunks/img-6-fd986b52.js";
import { i as img8 } from "../../../chunks/img-8-1e4e4e71.js";
import { i as img10 } from "../../../chunks/img-10-09bc0399.js";
import { i as img12, a as img11 } from "../../../chunks/img-12-ccf074a3.js";
import { i as isObject, $, b as now, S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
/* empty css                                   *//* empty css                                       */import { N as Navigation } from "../../../chunks/navigation-98db8aa9.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/img-2-4d0b6815.js";
import "../../../chunks/img-3-6f709142.js";
import "../../../chunks/img-4-aea6c737.js";
import "../../../chunks/img-7-0d61b03f.js";
import "../../../chunks/img-10-2971869e.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/img-6-7ff883ab.js";
import "../../../chunks/img-7-06bdf5b0.js";
import "../../../chunks/img-8-ebcd4c34.js";
import "../../../chunks/create-element-if-not-defined-c750ea09.js";
function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass))
      return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null)
      return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === "undefined")
        slideToIndex = nextIndex;
      else if (typeof nextIndex === "undefined")
        slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex)
        slideToIndex = nextIndex;
      else
        slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized)
      return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        if (typeof prevThumbsIndex === "undefined") {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === "undefined") {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1)
          ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper)
      return;
    init();
    update(true);
  });
  on("slideChange update resize observerUpdate", () => {
    update();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}
function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl)
        newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
            return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed)
                return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed)
              return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}
const Apps_ecommerce_product_details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let thumbsSwiper = null;
  return `${$$result.head += `${$$result.title = `<title>Product Details | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Product Details",
        pageTitle: "Ecommerce"
      }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "gx-lg-5" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 8, class: "mx-auto" }, {}, {
                            default: () => {
                              return `<div class="${"product-img-slider sticky-side-div"}">${validate_component(Swiper_1, "Swiper").$$render($$result, {
                                style: "--swiper-navigation-color: #fff;--swiper-pagination-color: #fff",
                                loop: true,
                                spaceBetween: 10,
                                navigation: true,
                                thumbs: { swiper: thumbsSwiper },
                                modules: [freeMode, Navigation, Thumb],
                                class: "mySwiper2 swiper product-thumbnail-slider p-2 rounded bg-light"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                                    }
                                  })}
										${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                                    }
                                  })}
										${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", img01, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                                    }
                                  })}
										${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block"}">`;
                                    }
                                  })}`;
                                }
                              })}

									<div class="${"product-nav-slider mt-2"}">${validate_component(Swiper_1, "Swiper").$$render($$result, {
                                spaceBetween: 10,
                                slidesPerView: 4,
                                freeMode: true,
                                watchSlidesProgress: true,
                                modules: [freeMode, Navigation, Thumb],
                                class: "mySwiper swiper product-nav-slider mt-2 overflow-hidden"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, { class: "rounded" }, {}, {
                                    default: () => {
                                      return `<div class="${"nav-slide-item"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block rounded"}"></div>`;
                                    }
                                  })}
											${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"nav-slide-item"}"><img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid d-block rounded"}"></div>`;
                                    }
                                  })}
											${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"nav-slide-item"}"><img${add_attribute("src", img01, 0)} alt="${""}" class="${"img-fluid d-block rounded"}"></div>`;
                                    }
                                  })}
											${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"nav-slide-item"}"><img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid d-block rounded"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}

							${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
                            default: () => {
                              return `<div class="${"mt-xl-0 mt-5"}"><div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h4>Full Sleeve Sweatshirt for Men (Pink)</h4>
											<div class="${"hstack gap-3 flex-wrap"}"><div><a${add_attribute("href", null, 0)} class="${"text-primary d-block"}">Tommy Hilfiger</a></div>
												<div class="${"vr"}"></div>
												<div class="${"text-muted"}">Seller : <span class="${"text-body fw-medium"}">Zoetic Fashion</span></div>
												<div class="${"vr"}"></div>
												<div class="${"text-muted"}">Published : <span class="${"text-body fw-medium"}">26 Mar, 2021</span></div></div></div>
										<div class="${"flex-shrink-0"}"><div><a href="${"/ecommerce/apps-ecommerce-add-product"}" class="${"btn btn-light"}" id="${"edit-product"}"><i class="${"ri-pencil-fill align-bottom"}"></i></a>
												${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "edit-product", placement: "top" }, {}, {
                                default: () => {
                                  return `Edit`;
                                }
                              })}</div></div></div>

									<div class="${"d-flex flex-wrap gap-2 align-items-center mt-3"}"><div class="${"text-muted fs-16"}"><span class="${"mdi mdi-star text-warning"}"></span>
											<span class="${"mdi mdi-star text-warning"}"></span>
											<span class="${"mdi mdi-star text-warning"}"></span>
											<span class="${"mdi mdi-star text-warning"}"></span>
											<span class="${"mdi mdi-star text-warning"}"></span></div>
										<div class="${"text-muted"}">( 5.50k Customer Review )</div></div>

									${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                                default: () => {
                                  return `${each(MOCK_DATA.productDetailsWidgets, (pricingDetails) => {
                                    return `${validate_component(PricingWidgetList, "PricingWidgetList").$$render($$result, { pricingDetails }, {}, {})}`;
                                  })}`;
                                }
                              })}

									${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-4"}"><h5 class="${"fs-14"}">Sizes :</h5>
												<div class="${"d-flex flex-wrap gap-2 btn-checkbox"}"><div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"Out of Stock"}">${validate_component(Input, "Input").$$render($$result, {
                                        type: "radio",
                                        class: "btn-check",
                                        name: "productsize-radio",
                                        id: "productsize-radio1",
                                        disabled: true
                                      }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center",
                                        for: "productsize-radio1"
                                      }, {}, {
                                        default: () => {
                                          return `S`;
                                        }
                                      })}</div>

													<div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"04 Items Available"}">${validate_component(Input, "Input").$$render($$result, {
                                        type: "radio",
                                        class: "btn-check",
                                        name: "productsize-radio",
                                        id: "productsize-radio2"
                                      }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center",
                                        for: "productsize-radio2"
                                      }, {}, {
                                        default: () => {
                                          return `M`;
                                        }
                                      })}</div>
													<div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"06 Items Available"}">${validate_component(Input, "Input").$$render($$result, {
                                        type: "radio",
                                        class: "btn-check",
                                        name: "productsize-radio",
                                        id: "productsize-radio3"
                                      }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center",
                                        for: "productsize-radio3"
                                      }, {}, {
                                        default: () => {
                                          return `L`;
                                        }
                                      })}</div>

													<div data-bs-toggle="${"tooltip"}" data-bs-trigger="${"hover"}" data-bs-placement="${"top"}" title="${"Out of Stock"}">${validate_component(Input, "Input").$$render($$result, {
                                        type: "radio",
                                        class: "btn-check",
                                        name: "productsize-radio",
                                        id: "productsize-radio4",
                                        disabled: true
                                      }, {}, {})}
														${validate_component(Label, "Label").$$render($$result, {
                                        class: "btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center",
                                        for: "productsize-radio4"
                                      }, {}, {
                                        default: () => {
                                          return `XL`;
                                        }
                                      })}</div></div></div>`;
                                    }
                                  })}
										

										${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-4"}"><h5 class="${"fs-14"}">Colors :</h5>
												<div class="${"d-flex flex-wrap gap-2"}">${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-1", placement: "top" }, {}, {
                                        default: () => {
                                          return `Out of Stock`;
                                        }
                                      })}
													${validate_component(Button, "Button").$$render($$result, {
                                        type: "button",
                                        id: "color-1",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary",
                                        disabled: true
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-2", placement: "top" }, {}, {
                                        default: () => {
                                          return `03 Items Available`;
                                        }
                                      })}

													${validate_component(Button, "Button").$$render($$result, {
                                        type: "button",
                                        id: "color-2",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-secondary"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-3", placement: "top" }, {}, {
                                        default: () => {
                                          return `03 Items Available`;
                                        }
                                      })}

													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-3",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-4", placement: "top" }, {}, {
                                        default: () => {
                                          return `02 Items Available`;
                                        }
                                      })}
													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-4",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-info"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-5" }, {}, {
                                        default: () => {
                                          return `01 Items Available`;
                                        }
                                      })}
													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-5",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-warning"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-6" }, {}, {
                                        default: () => {
                                          return `04 Items Available`;
                                        }
                                      })}

													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-6",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-danger"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-7" }, {}, {
                                        default: () => {
                                          return `03 Items Available`;
                                        }
                                      })}

													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-7",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-light"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}

													${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "color-8" }, {}, {
                                        default: () => {
                                          return `04 Items Available`;
                                        }
                                      })}

													${validate_component(Button, "Button").$$render($$result, {
                                        id: "color-8",
                                        type: "button",
                                        color: "",
                                        class: "btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-dark"
                                      }, {}, {
                                        default: () => {
                                          return `<i class="${"ri-checkbox-blank-circle-fill"}"></i>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}
										`;
                                }
                              })}
									

									<div class="${"mt-4 text-muted"}"><h5 class="${"fs-14"}">Description :</h5>
										<p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material
											composition is 100% organic cotton. This is one of the world\u2019s leading
											designer lifestyle brands and is internationally recognized for celebrating
											the essence of classic American cool style, featuring preppy with a twist
											designs.
										</p></div>

									${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"col-sm-6"}"><div class="${"mt-3"}"><h5 class="${"fs-14"}">Features :</h5>
												<ul class="${"list-unstyled"}"><li class="${"py-1"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
														Full Sleeve
													</li>
													<li class="${"py-1"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
														Cotton
													</li>
													<li class="${"py-1"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
														All Sizes available
													</li>
													<li class="${"py-1"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
														4 Different Color
													</li></ul></div></div>
										<div class="${"col-sm-6"}"><div class="${"mt-3"}"><h5 class="${"fs-14"}">Services :</h5>
												<ul class="${"list-unstyled product-desc-list"}"><li class="${"py-1"}">10 Days Replacement</li>
													<li class="${"py-1"}">Cash on Delivery available</li></ul></div></div>`;
                                }
                              })}

									<div class="${"product-content mt-5"}"><h5 class="${"fs-14 mb-3"}">Product Description :</h5>

										${validate_component(Nav, "Nav").$$render($$result, {
                                tabs: true,
                                class: "nav-tabs-custom nav-success"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        class: "active"
                                      }, {}, {
                                        default: () => {
                                          return `Specification
												`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        class: ""
                                      }, {}, {
                                        default: () => {
                                          return `Details
												`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}
										${validate_component(TabContent, "TabContent").$$render($$result, {
                                id: "nav-tabContent",
                                class: "border border-top-0 p-4"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    id: "nav-speci",
                                    tabId: 1,
                                    class: "active"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"table-responsive"}"><table class="${"table mb-0"}"><tbody><tr><th scope="${"row"}" style="${"width: 200px;"}">Category</th>
																<td>T-Shirt</td></tr>
															<tr><th scope="${"row"}">Brand</th>
																<td>Tommy Hilfiger</td></tr>
															<tr><th scope="${"row"}">Color</th>
																<td>Blue</td></tr>
															<tr><th scope="${"row"}">Material</th>
																<td>Cotton</td></tr>
															<tr><th scope="${"row"}">Weight</th>
																<td>140 Gram</td></tr></tbody></table></div>`;
                                    }
                                  })}
											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 2,
                                    class: ""
                                  }, {}, {
                                    default: () => {
                                      return `<div><h5 class="${"font-size-16 mb-3"}">Tommy Hilfiger Sweatshirt for Men (Pink)
													</h5>
													<p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton.
														Material composition is 100% organic cotton. This is one of the world\u2019s
														leading designer lifestyle brands and is internationally recognized for
														celebrating the essence of classic American cool style, featuring preppy
														with a twist designs.
													</p>
													<div><p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
															Machine Wash
														</p>
														<p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
															Fit Type: Regular
														</p>
														<p class="${"mb-2"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
															100% Cotton
														</p>
														<p class="${"mb-0"}"><i class="${"mdi mdi-circle-medium me-1 text-muted align-middle"}"></i>
															Long sleeve
														</p></div></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>
									

									<div class="${"mt-5"}"><div><h5 class="${"fs-14 mb-3"}">Ratings &amp; Reviews</h5></div>
										${validate_component(Row, "Row").$$render($$result, { class: "gy-4 gx-0" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                    default: () => {
                                      return `<div><div class="${"pb-3"}"><div class="${"bg-light px-3 py-2 rounded-2 mb-2"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"fs-16 align-middle text-warning"}"><i class="${"ri-star-fill"}"></i>
																		<i class="${"ri-star-fill"}"></i>
																		<i class="${"ri-star-fill"}"></i>
																		<i class="${"ri-star-fill"}"></i>
																		<i class="${"ri-star-half-fill"}"></i></div></div>
																<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">4.5 out of 5</h6></div></div></div>
														<div class="${"text-center"}"><div class="${"text-muted"}">Total <span class="${"fw-medium"}">5.50k</span> reviews
															</div></div></div>

													<div class="${"mt-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                        default: () => {
                                          return `<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0"}">5 star</h6></div></div>
															<div class="${"col"}"><div class="${"p-2"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                                            bar: true,
                                            color: "success",
                                            value: 50.16
                                          }, {}, {})}</div></div></div>
															<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">2758</h6></div></div>`;
                                        }
                                      })}
														

														${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                        default: () => {
                                          return `<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0"}">4 star</h6></div></div>
															<div class="${"col"}"><div class="${"p-2"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                                            bar: true,
                                            color: "success",
                                            value: 19.32
                                          }, {}, {})}</div></div></div>
															<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">1063</h6></div></div>`;
                                        }
                                      })}
														

														${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                        default: () => {
                                          return `<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0"}">3 star</h6></div></div>
															<div class="${"col"}"><div class="${"p-2"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, {
                                            bar: true,
                                            color: "success",
                                            value: 18.12
                                          }, {}, {})}</div></div></div>
															<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">997</h6></div></div>`;
                                        }
                                      })}
														

														${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                        default: () => {
                                          return `<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0"}">2 star</h6></div></div>
															<div class="${"col"}"><div class="${"p-2"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "warning", value: 7.42 }, {}, {})}</div></div></div>

															<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">408</h6></div></div>`;
                                        }
                                      })}
														

														${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-2" }, {}, {
                                        default: () => {
                                          return `<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0"}">1 star</h6></div></div>
															<div class="${"col"}"><div class="${"p-2"}"><div class="${"progress animated-progess progress-sm"}">${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "danger", value: 4.98 }, {}, {})}</div></div></div>
															<div class="${"col-auto"}"><div class="${"p-2"}"><h6 class="${"mb-0 text-muted"}">274</h6></div></div>`;
                                        }
                                      })}
														</div></div>`;
                                    }
                                  })}
											

											${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
                                    default: () => {
                                      return `<div class="${"ps-lg-4"}"><div class="${"d-flex flex-wrap align-items-start gap-3"}"><h5 class="${"fs-14"}">Reviews:</h5></div>

													<div class="${"me-lg-n3 pe-lg-4"}" data-simplebar style="${"max-height: 225px"}"><ul class="${"list-unstyled mb-0"}"><li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i>
																				4.2
																			</div>
																			<div class="${"vr"}"></div>
																			<div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Superb sweatshirt. I loved it. It is for winter.
																				</p></div></div></div>

																	<div class="${"d-flex flex-grow-1 gap-2 mb-3"}"><a${add_attribute("href", null, 0)} class="${"d-block"}"><img${add_attribute("src", img12, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}"></a>
																		<a${add_attribute("href", null, 0)} class="${"d-block"}"><img${add_attribute("src", img11, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}"></a>
																		<a${add_attribute("href", null, 0)} class="${"d-block"}"><img${add_attribute("src", img10, 0)} alt="${""}" class="${"avatar-sm rounded object-cover"}"></a></div>

																	<div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Henry</h5></div>

																		<div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">12 Jul, 21</p></div></div></div></li>
															<li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i>
																				4.0
																			</div>
																			<div class="${"vr"}"></div>
																			<div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Great at this price, Product quality and look is awesome.
																				</p></div></div></div>
																	<div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Nancy</h5></div>

																		<div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">06 Jul, 21</p></div></div></div></li>

															<li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i>
																				4.2
																			</div>
																			<div class="${"vr"}"></div>
																			<div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Good product. I am so happy.</p></div></div></div>
																	<div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Joseph</h5></div>

																		<div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">06 Jul, 21</p></div></div></div></li>

															<li class="${"py-2"}"><div class="${"border border-dashed rounded p-3"}"><div class="${"d-flex align-items-start mb-3"}"><div class="${"hstack gap-3"}"><div class="${"badge rounded-pill bg-success mb-0"}"><i class="${"mdi mdi-star"}"></i>
																				4.1
																			</div>
																			<div class="${"vr"}"></div>
																			<div class="${"flex-grow-1"}"><p class="${"text-muted mb-0"}">Nice Product, Good Quality.</p></div></div></div>
																	<div class="${"d-flex align-items-end"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14 mb-0"}">Jimmy</h5></div>

																		<div class="${"flex-shrink-0"}"><p class="${"text-muted fs-13 mb-0"}">24 Jun, 21</p></div></div></div></li></ul></div></div>`;
                                    }
                                  })}
											`;
                                }
                              })}
										</div>
									</div>`;
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
          })}
			`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_ecommerce_product_details as default };
