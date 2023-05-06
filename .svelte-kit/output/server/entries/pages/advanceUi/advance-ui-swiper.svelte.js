import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { c as getDocument, $, n as nextTick, S as Swiper_1, a as Swiper_slide } from "../../../chunks/swiper.min-94ceb916.js";
import { M as Mousewheel } from "../../../chunks/mousewheel-b011c830.js";
import { N as Navigation } from "../../../chunks/navigation-98db8aa9.js";
import { P as Pagination } from "../../../chunks/pagination-317dcc2b.js";
import { c as createElementIfNotDefined } from "../../../chunks/create-element-if-not-defined-c750ea09.js";
import { A as Autoplay } from "../../../chunks/autoplay-ee87b360.js";
import { e as effectInit, a as effectTarget, b as effectVirtualTransitionEnd, E as EffectFade } from "../../../chunks/effect-fade-096c09c5.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
/* empty css                                       *//* empty css                                       *//* empty css                                        *//* empty css                                        */import "../../../chunks/autoplay.min-76e4ebdf.js";
import { i as img1 } from "../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../chunks/img-7-4861de06.js";
import { i as img8 } from "../../../chunks/img-8-19298a6b.js";
import { i as img9 } from "../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../chunks/img-10-09bc0399.js";
import { a as img11, i as img12 } from "../../../chunks/img-12-ccf074a3.js";
function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1e3);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    swiper.scrollbar.$dragEl.transition(duration);
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = "";
    $dragEl[0].style.height = "";
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      $el[0].style.display = "none";
    } else {
      $el[0].style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
    }
    return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);
    if (params.hide) {
      $el.css("opacity", 1);
    }
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css("scroll-snap-type", "none");
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched)
      return;
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched)
      return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css("scroll-snap-type", "");
      $wrapperEl.transition("");
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        $el.css("opacity", 0);
        $el.transition(400);
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    if (!$el)
      return;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target)
      return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    events("off");
  }
  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el)
      return;
    let $el = $(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }
    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });
    if (params.draggable) {
      enableDraggable();
    }
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const $el = swiper.scrollbar.$el;
    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on("update resize observerUpdate lock unlock", () => {
    updateSize();
  });
  on("setTranslate", () => {
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    setTransition(duration);
  });
  on("enable disable", () => {
    const {
      $el
    } = swiper.scrollbar;
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}
function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
  if (!$shadowEl.length) {
    $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`);
    $shadowContainer.append($shadowEl);
  }
  return $shadowEl;
}
function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });
  const createSlideShadows = ($slideEl, progress, params) => {
    let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
    if (shadowBefore.length === 0) {
      shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (shadowAfter.length === 0) {
      shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore.length)
      shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length)
      shadowAfter[0].style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const params = swiper.params.flipEffect;
    swiper.slides.each((slideEl) => {
      const $slideEl = $(slideEl);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows($slideEl, progress, params);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, params);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };
  const setTransition = (duration) => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3)
        translateX = 0;
      if (Math.abs(translateY) < 1e-3)
        translateY = 0;
      if (Math.abs(translateZ) < 1e-3)
        translateZ = 0;
      if (Math.abs(rotateY) < 1e-3)
        rotateY = 0;
      if (Math.abs(rotateX) < 1e-3)
        rotateX = 0;
      if (Math.abs(scale) < 1e-3)
        scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? "left" : "top");
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? "right" : "bottom");
        }
        if ($shadowBeforeEl.length)
          $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length)
          $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = (duration) => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}
function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string")
      return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children(".swiper-slide-shadow");
        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = createShadow(params, $slideEl);
        }
        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });
      if (data.origin) {
        $targetEl.css("transform-origin", data.origin);
      }
    }
  };
  const setTransition = (duration) => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
const Advance_ui_swiper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Swiper Slider | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Swiper Slider",
        pageTitle: "Advance UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Default Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>default-swiper</code> class to set a default
							swiper.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        modules: [Autoplay],
                        spaceBetween: 50,
                        slidesPerView: 1,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        paceBetween: 30,
                        centeredSlides: true,
                        class: "mySwiper"
                      }, {}, {
                        default: () => {
                          return `
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img1, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Navigation &amp; Pagination Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>navigation-swiper</code> class to set a swiper
							with navigation and pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        modules: [Navigation, Pagination, Autoplay],
                        spaceBetween: 50,
                        slidesPerView: 1,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        navigation: true,
                        paceBetween: 30,
                        centeredSlides: true,
                        class: "mySwiper swiper navigation-swiper rounded"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pagination Dynamic Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>pagination-dynamic-swiper</code> class to set
							a dynamic swiper with pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        pagination: { clickable: true, dynamicBullets: true },
                        modules: [Pagination, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper pagination-dynamic-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pagination Fraction Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>pagination-fraction-swiper</code> class to
							set a fraction swiper with pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        pagination: { type: "fraction", clickable: true },
                        navigation: true,
                        modules: [Pagination, Navigation, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper pagination-fraction-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img11, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img12, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pagination Custom Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>pagination-custom-swiper</code> class to set
							a swiper with custom pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        modules: [Autoplay, Pagination, Navigation],
                        pagination: true,
                        navigation: true,
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper pagination-custom-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							<div class="${"swiper-pagination pagination-custom"}"></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Pagination Progress Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>pagination-progress-swiper</code> class to
							set a swiper with progress pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        pagination: { type: "progressbar" },
                        navigation: true,
                        modules: [Pagination, Navigation, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper pagination-progress-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Scrollbar Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>pagination-scrollbar-swiper</code> class to
							set a swiper with scrollbar pagination.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        scrollbar: { hide: true },
                        modules: [Scrollbar, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper pagination-scrollbar-swiper rounded"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Vertical Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>vertical-swiper</code> class to set a vertical
							swiper.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        direction: "vertical",
                        pagination: { clickable: true },
                        modules: [Pagination, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper vertical-swiper rounded dynamic-pagination",
                        style: "height: 324px"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img11, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img12, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img1, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Mousewheel Control Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>mousewheel-control-swiper</code> class to set
							a swiper with mousewheel scroll.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        direction: "vertical",
                        slidesPerView: 1,
                        spaceBetween: 30,
                        mousewheel: true,
                        pagination: { clickable: true },
                        modules: [Mousewheel, Pagination, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper mousewheel-control-swiper rounded dynamic-pagination",
                        style: "height: 324px"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Effect Fade Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>effect-fade-swiper</code> class to set a swiper
							with fade effect.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        spaceBetween: 30,
                        effect: "fade",
                        pagination: { clickable: true },
                        modules: [EffectFade, Pagination, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper effect-fade-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Effect Creative Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>effect-creative-swiper</code> class to set
							a swiper with creative custom effect.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        grabCursor: true,
                        effect: "creative",
                        pagination: { clickable: true },
                        creativeEffect: {
                          prev: { shadow: true, translate: [0, 0, -400] },
                          next: { translate: ["100%", 0, 0] }
                        },
                        modules: [EffectCreative, Pagination, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper swiper effect-creative-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img11, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Effect Flip Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>effect-flip-swiper</code> class to set a swiper
							with flip effect.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        grabCursor: true,
                        pagination: { clickable: true },
                        modules: [EffectFlip, Pagination, Navigation, Autoplay],
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        class: "mySwiper effect-flip-swiper rounded dynamic-pagination"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img12, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img1, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Effect Coverflow Swiper</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>effect-coverflow-swiper</code> class to set
							a swiper with coverflow effect.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        effect: "coverflow",
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: "4",
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false },
                        coverflowEffect: {
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true
                        },
                        pagination: { clickable: true, dynamicBullets: true },
                        modules: [EffectCoverflow, Pagination, Autoplay],
                        class: "mySwiper swiper effect-coverflow-swiper rounded pb-5"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img8, 0)} alt="${""}" class="${"img-fluid"}">`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}">`;
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
          })}

			${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Responsive Breakpoints Swiper
						</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>responsive-swiper</code> class to set a responsive
							swiper.
						</p>

						${validate_component(Swiper_1, "Swiper").$$render($$result, {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        pagination: { clickable: true },
                        breakpoints: {
                          640: { slidesPerView: 2, spaceBetween: 20 },
                          768: { slidesPerView: 3, spaceBetween: 40 },
                          1024: { slidesPerView: 4, spaceBetween: 50 }
                        },
                        loop: true,
                        modules: [Pagination],
                        class: "mySwiper swiper responsive-swiper rounded gallery-light pb-4"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"gallery-box card"}"><div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                class: "image-popup",
                                href: img1,
                                title: ""
                              }, {}, {
                                default: () => {
                                  return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img1, 0)} alt="${""}">
												<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Glasses and laptop from
														above
													</h5></div>`;
                                }
                              })}</div>
										<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                href: "",
                                class: "text-body text-truncate"
                              }, {}, {
                                default: () => {
                                  return `Ron Mackie`;
                                }
                              })}</div>
												<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 2.2K
														</button>
														<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.3K
														</button></div></div></div></div></div>`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"gallery-box card"}"><div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                class: "image-popup",
                                href: img2,
                                title: ""
                              }, {}, {
                                default: () => {
                                  return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img2, 0)} alt="${""}">
												<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Working at a coffee shop
													</h5></div>`;
                                }
                              })}</div>
										<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                href: "",
                                class: "text-body text-truncate"
                              }, {}, {
                                default: () => {
                                  return `Nancy Martino`;
                                }
                              })}</div>
												<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 3.2K
														</button>
														<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.1K
														</button></div></div></div></div></div>`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"gallery-box card mb-0"}"><div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                class: "image-popup",
                                href: img10,
                                title: ""
                              }, {}, {
                                default: () => {
                                  return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img10, 0)} alt="${""}">
												<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Fun day at the Hill
														Station
													</h5></div>`;
                                }
                              })}</div>
										<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                href: "",
                                class: "text-body text-truncate"
                              }, {}, {
                                default: () => {
                                  return `Henry Baird`;
                                }
                              })}</div>
												<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 632
														</button>
														<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 95
														</button></div></div></div></div></div>`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"gallery-box card"}"><div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                class: "image-popup",
                                href: img4,
                                title: ""
                              }, {}, {
                                default: () => {
                                  return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img4, 0)} alt="${""}">
												<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Drawing a sketch
													</h5></div>`;
                                }
                              })}</div>
										<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                href: "",
                                class: "text-body text-truncate"
                              }, {}, {
                                default: () => {
                                  return `Jason McQuaid`;
                                }
                              })}</div>
												<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 825
														</button>
														<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 101
														</button></div></div></div></div></div>`;
                            }
                          })}
								${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"gallery-box card"}"><div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                class: "image-popup",
                                href: img6,
                                title: ""
                              }, {}, {
                                default: () => {
                                  return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img6, 0)} alt="${""}">
												<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Project discussion with
														team
													</h5></div>`;
                                }
                              })}</div>
										<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                href: "",
                                class: "text-body text-truncate"
                              }, {}, {
                                default: () => {
                                  return `Erica Kernan`;
                                }
                              })}</div>
												<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 3.4K
														</button>
														<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.3k
														</button></div></div></div></div></div>`;
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
        }
      })}`;
    }
  })}</div>`;
});
export { Advance_ui_swiper as default };
