import { c as create_ssr_component, p as createEventDispatcher, b as escape, A as null_to_empty, d as add_attribute, g as getContext, a as subscribe, s as setContext, v as validate_component, h as compute_rest_props, o as onDestroy, j as spread, k as escape_object, q as compute_slots, e as each } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { O as Offcanvas, a as OffcanvasBody } from "../../../../chunks/Offcanvas-493a27d8.js";
import { P as Pagination, a as PaginationItem, b as PaginationLink } from "../../../../chunks/PaginationLink-4c8ff591.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../chunks/TabPane-b01382c8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { w as writable } from "../../../../chunks/index-bddc6f42.js";
import { i as img1 } from "../../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../../chunks/img-7-4861de06.js";
import { i as img8 } from "../../../../chunks/img-8-19298a6b.js";
import { i as img9 } from "../../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../../chunks/img-10-09bc0399.js";
import { i as img12, a as img11 } from "../../../../chunks/img-12-ccf074a3.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
/* empty css                                          */import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/Portal-94847a25.js";
var LightboxThumbnail_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.clickable.svelte-1u332e1{position:static;cursor:zoom-in}div.svelte-lightbox-unselectable.svelte-1u332e1{user-select:none;pointer-events:none}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { class: classes = "" } = $$props;
  let { style = "" } = $$props;
  let { protect = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.protect === void 0 && $$bindings.protect && protect !== void 0)
    $$bindings.protect(protect);
  $$result.css.add(css$6);
  return `<div class="${"clickable svelte-1u332e1"}"><div class="${[
    escape(null_to_empty(classes), true) + " svelte-1u332e1",
    protect ? "svelte-lightbox-unselectable" : ""
  ].join(" ").trim()}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var LightboxHeader_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-lightbox-header.svelte-fa0syz{width:auto;height:3rem;display:flex;justify-content:flex-end;align-items:center}div.fullscreen.svelte-fa0syz{position:fixed;z-index:5;top:0;left:0;right:0}button.svelte-fa0syz{background:transparent;font-size:3rem;border:none;color:white}button.svelte-fa0syz:hover{color:lightgray;cursor:pointer}button.svelte-fa0syz:active{background-color:transparent}button.fullscreen.svelte-fa0syz{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
  map: null
};
const LightboxHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { size = "xs" } = $$props;
  let { style = "" } = $$props;
  let { headerClasses = "" } = $$props;
  let { buttonClasses = "" } = $$props;
  let { closeButton = true } = $$props;
  let { fullscreen = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.headerClasses === void 0 && $$bindings.headerClasses && headerClasses !== void 0)
    $$bindings.headerClasses(headerClasses);
  if ($$props.buttonClasses === void 0 && $$bindings.buttonClasses && buttonClasses !== void 0)
    $$bindings.buttonClasses(buttonClasses);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  $$result.css.add(css$5);
  return `<div class="${[
    escape(null_to_empty("svelte-lightbox-header " + headerClasses), true) + " svelte-fa0syz",
    fullscreen ? "fullscreen" : ""
  ].join(" ").trim()}">${closeButton ? `<button${add_attribute("size", size, 0)}${add_attribute("style", style, 0)} class="${[
    escape(null_to_empty(buttonClasses), true) + " svelte-fa0syz",
    fullscreen ? "fullscreen" : ""
  ].join(" ").trim()}">\xD7
        </button>` : ``}
</div>`;
});
var LightboxBody_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-lightbox-body.svelte-3luti8{background-color:transparent;width:auto;height:auto;max-height:80vh}div.svelte-lightbox-body.fullscreen.svelte-3luti8{background-size:contain;background-repeat:no-repeat;background-position:center}div.fullscreen.svelte-3luti8{width:inherit;max-width:inherit;height:inherit;max-height:inherit}div.svelte-lightbox-unselectable.svelte-3luti8{user-select:none;pointer-events:none}div.svelte-lightbox-image-portrait.svelte-3luti8{height:90vh}div.expand.svelte-3luti8{width:90vw;height:auto;max-height:90vh}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imageClass;
  let $$unsubscribe_activeImageStore;
  let { image = {} } = $$props;
  let { protect = false } = $$props;
  let { portrait = false } = $$props;
  let { imagePreset = false } = $$props;
  let { fullscreen = false } = $$props;
  let { gallery = false } = $$props;
  const activeImageStore = getContext("svelte-lightbox-activeImage");
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => value);
  let imageParent;
  const getFullscreenSrc = () => {
    {
      queueMicrotask(getFullscreenSrc);
    }
  };
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.protect === void 0 && $$bindings.protect && protect !== void 0)
    $$bindings.protect(protect);
  if ($$props.portrait === void 0 && $$bindings.portrait && portrait !== void 0)
    $$bindings.portrait(portrait);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  $$result.css.add(css$4);
  imageClass = `${image.class ? image.class : ""} ${imagePreset ? imagePreset : ""}`;
  {
    if (fullscreen && !image?.src)
      getFullscreenSrc();
  }
  $$unsubscribe_activeImageStore();
  return `<div class="${[
    "svelte-lightbox-body svelte-3luti8",
    (protect ? "svelte-lightbox-unselectable" : "") + " " + (fullscreen ? "fullscreen" : "")
  ].join(" ").trim()}"${add_attribute("style", fullscreen ? `background-image: url(${image.src || ""})` : "", 0)}>${!fullscreen && image.src ? `<img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)}${add_attribute("style", image.style, 0)}${add_attribute("class", imageClass, 0)}>` : `<div class="${[
    "svelte-3luti8",
    (portrait ? "svelte-lightbox-image-portrait" : "") + " " + (imagePreset == "expand" ? "expand" : "") + " " + (imagePreset == "fit" ? "fit" : "") + " " + (fullscreen ? "fullscreen" : "")
  ].join(" ").trim()}"${add_attribute("this", imageParent, 0)}>${slots.default ? slots.default({}) : ``}</div>`}
</div>`;
});
var LightboxFooter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-lightbox-footer.svelte-1u8lh7d{background-color:transparent;color:white;text-align:left;width:inherit;height:auto}",
  map: null
};
const LightboxFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { galleryLength } = $$props;
  let { activeImage } = $$props;
  let { classes = "" } = $$props;
  let { style = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.galleryLength === void 0 && $$bindings.galleryLength && galleryLength !== void 0)
    $$bindings.galleryLength(galleryLength);
  if ($$props.activeImage === void 0 && $$bindings.activeImage && activeImage !== void 0)
    $$bindings.activeImage(activeImage);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `<div class="${escape(null_to_empty("svelte-lightbox-footer " + classes), true) + " svelte-1u8lh7d"}"${add_attribute("style", style, 0)}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${galleryLength ? `<p>Image ${escape(activeImage + 1)} of ${escape(galleryLength)}</p>` : ``}
</div>`;
});
var ModalCover_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `div.svelte-o5rrpx{position:fixed;z-index:1000000!important;background-color:rgba(43, 39, 45, 0.87);top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center}div.svelte-o5rrpx::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;z-index:-1}div.svelte-o5rrpx::after{content:"";clear:both;display:table}`,
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transitionDuration } = $$props;
  createEventDispatcher();
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$2);
  return `<div class="${"svelte-o5rrpx"}">${slots.default ? slots.default({}) : `
    `}
</div>`;
});
var Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-12ihcp1{position:relative;background-color:transparent;width:auto;height:auto;max-width:90vw;max-height:90vh}.fullscreen.svelte-12ihcp1{height:inherit;width:inherit;max-height:inherit;max-width:inherit}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { modalStyle } = $$props;
  let { modalClasses } = $$props;
  let { transitionDuration } = $$props;
  let { fullscreen = false } = $$props;
  if ($$props.modalStyle === void 0 && $$bindings.modalStyle && modalStyle !== void 0)
    $$bindings.modalStyle(modalStyle);
  if ($$props.modalClasses === void 0 && $$bindings.modalClasses && modalClasses !== void 0)
    $$bindings.modalClasses(modalClasses);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  $$result.css.add(css$1);
  return `<div class="${[
    escape(null_to_empty(modalClasses), true) + " svelte-12ihcp1",
    fullscreen ? "fullscreen" : ""
  ].join(" ").trim()}"${add_attribute("style", modalStyle, 0)}>${slots.default ? slots.default({}) : `
    `}
</div>`;
});
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullscreen;
  let $activeImageStore, $$unsubscribe_activeImageStore;
  createEventDispatcher();
  let { modalClasses = "" } = $$props;
  let { modalStyle = "" } = $$props;
  let { transitionDuration = 500 } = $$props;
  let { image = {} } = $$props;
  let { protect = false } = $$props;
  let { portrait = false } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { gallery = [] } = $$props;
  let { imagePreset } = $$props;
  let { closeButton } = $$props;
  const activeImageStore = new writable(0);
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => $activeImageStore = value);
  let actualTitle;
  let actualDescription;
  setContext("svelte-lightbox-activeImage", activeImageStore);
  if ($$props.modalClasses === void 0 && $$bindings.modalClasses && modalClasses !== void 0)
    $$bindings.modalClasses(modalClasses);
  if ($$props.modalStyle === void 0 && $$bindings.modalStyle && modalStyle !== void 0)
    $$bindings.modalStyle(modalStyle);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.protect === void 0 && $$bindings.protect && protect !== void 0)
    $$bindings.protect(protect);
  if ($$props.portrait === void 0 && $$bindings.portrait && portrait !== void 0)
    $$bindings.portrait(portrait);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actualTitle = title;
    actualDescription = description;
    {
      if (gallery && !title && !description) {
        actualTitle = gallery[$activeImageStore].title;
        actualDescription = gallery[$activeImageStore].description;
      }
    }
    fullscreen = imagePreset === "fullscreen";
    $$rendered = `${validate_component(ModalCover, "ModalCover").$$render($$result, { transitionDuration }, {
      transitionDuration: ($$value) => {
        transitionDuration = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Modal, "Modal").$$render($$result, {
          fullscreen,
          modalClasses,
          modalStyle,
          transitionDuration
        }, {
          modalClasses: ($$value) => {
            modalClasses = $$value;
            $$settled = false;
          },
          modalStyle: ($$value) => {
            modalStyle = $$value;
            $$settled = false;
          },
          transitionDuration: ($$value) => {
            transitionDuration = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `${validate_component(LightboxHeader, "Header").$$render($$result, { fullscreen, closeButton }, {
              closeButton: ($$value) => {
                closeButton = $$value;
                $$settled = false;
              }
            }, {})}

        ${validate_component(LightboxBody, "Body").$$render($$result, {
              imagePreset,
              fullscreen,
              gallery: !!gallery.length,
              image,
              protect,
              portrait
            }, {
              image: ($$value) => {
                image = $$value;
                $$settled = false;
              },
              protect: ($$value) => {
                protect = $$value;
                $$settled = false;
              },
              portrait: ($$value) => {
                portrait = $$value;
                $$settled = false;
              }
            }, {
              default: () => {
                return `${slots.default ? slots.default({}) : ``}`;
              }
            })}


        ${validate_component(LightboxFooter, "Footer").$$render($$result, {
              galleryLength: gallery ? gallery.length : false,
              title: actualTitle,
              description: actualDescription,
              activeImage: $activeImageStore
            }, {
              title: ($$value) => {
                actualTitle = $$value;
                $$settled = false;
              },
              description: ($$value) => {
                actualDescription = $$value;
                $$settled = false;
              },
              activeImage: ($$value) => {
                $activeImageStore = $$value;
                $$settled = false;
              }
            }, {})}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_activeImageStore();
  return $$rendered;
});
var InternalGallery_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1lrmlbr{max-height:inherit}div.fullscreen.svelte-1lrmlbr{height:100%;width:100%}.arrow.svelte-1lrmlbr{fill:none;stroke:var(--svelte-lightbox-arrows-color);stroke-linecap:round;stroke-linejoin:bevel;stroke-width:1.5px;margin:10px}button.svelte-1lrmlbr{background:transparent;border:none;font-size:1rem;width:50%;height:100%}button.svelte-1lrmlbr:active{background:transparent}button.svelte-1lrmlbr:disabled{color:gray}button:disabled.hideDisabled.svelte-1lrmlbr{visibility:hidden}.wrapper.svelte-1lrmlbr{position:relative;display:flex;width:auto;height:auto}.previous-button.svelte-1lrmlbr{position:absolute;top:0;bottom:0;left:0;right:50%;z-index:4;text-align:left}.slot.svelte-1lrmlbr{order:1;display:flex;justify-content:center}.next-button.svelte-1lrmlbr{position:absolute;top:0;bottom:0;right:0;z-index:4;text-align:right}svg.svelte-1lrmlbr{height:5rem}",
  map: null
};
const InternalGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeImage;
  let galleryArrowsColor;
  let galleryArrowsCharacter;
  let fullscreen;
  let $$unsubscribe_keyboardControlStore;
  let $arrowsCharacterStore, $$unsubscribe_arrowsCharacterStore;
  let $arrowsColorStore, $$unsubscribe_arrowsColorStore;
  let $activeImageStore, $$unsubscribe_activeImageStore;
  let { imagePreset = "" } = $$props;
  const activeImageStore = getContext("svelte-lightbox-activeImage");
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => $activeImageStore = value);
  const arrowsColorStore = new writable("black");
  $$unsubscribe_arrowsColorStore = subscribe(arrowsColorStore, (value) => $arrowsColorStore = value);
  const arrowsCharacterStore = new writable("unset");
  $$unsubscribe_arrowsCharacterStore = subscribe(arrowsCharacterStore, (value) => $arrowsCharacterStore = value);
  const keyboardControlStore = new writable(false);
  $$unsubscribe_keyboardControlStore = subscribe(keyboardControlStore, (value) => value);
  let slotContent;
  let images;
  setContext("svelte-lightbox-galleryArrowsColor", arrowsColorStore);
  setContext("svelte-lightbox-galleryArrowsCharacter", arrowsCharacterStore);
  setContext("svelte-lightbox-disableKeyboardArrowsControl", keyboardControlStore);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css);
  activeImage = $activeImageStore;
  galleryArrowsColor = $arrowsColorStore;
  galleryArrowsCharacter = $arrowsCharacterStore;
  images = slotContent?.children;
  fullscreen = imagePreset === "fullscreen";
  {
    {
      if (images && activeImage < images.length) {
        Object.values(images).forEach((img) => {
          img.hidden = true;
          return img;
        });
        if (!fullscreen) {
          images[activeImage].hidden = false;
        }
      } else if (images && activeImage >= images.length) {
        console.error("LightboxGallery: Selected image doesn't exist, invalid activeImage");
      }
    }
  }
  $$unsubscribe_keyboardControlStore();
  $$unsubscribe_arrowsCharacterStore();
  $$unsubscribe_arrowsColorStore();
  $$unsubscribe_activeImageStore();
  return `

<div class="${["wrapper svelte-1lrmlbr", fullscreen ? "fullscreen" : ""].join(" ").trim()}" style="${"--svelte-lightbox-arrows-color: " + escape(galleryArrowsColor, true)}">
    <button ${galleryArrowsCharacter !== "loop" && activeImage === 0 ? "disabled" : ""} class="${[
    "previous-button svelte-1lrmlbr",
    galleryArrowsCharacter === "hide" ? "hideDisabled" : ""
  ].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1lrmlbr"}"><g><path class="${"arrow svelte-1lrmlbr"}" d="${"M8.7,7.22,4.59,11.33a1,1,0,0,0,0,1.41l4,4"}"></path></g></svg></button>

    
    <div class="${"slot svelte-1lrmlbr"}"${add_attribute("this", slotContent, 0)}>${slots.default ? slots.default({}) : `
        `}</div>

    
    <button ${galleryArrowsCharacter !== "loop" && activeImage === images?.length - 1 ? "disabled" : ""} class="${[
    "next-button svelte-1lrmlbr",
    galleryArrowsCharacter === "hide" ? "hideDisabled" : ""
  ].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1lrmlbr"}"><g><path d="${"M15.3,16.78l4.11-4.11a1,1,0,0,0,0-1.41l-4-4"}" class="${"arrow svelte-1lrmlbr"}"></path></g></svg></button>
</div>`;
});
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { thumbnailClasses = "" } = $$props;
  let { thumbnailStyle = "" } = $$props;
  let { modalClasses = "" } = $$props;
  let { modalStyle = "" } = $$props;
  let { gallery = false } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { transitionDuration = 500 } = $$props;
  let { protect = false } = $$props;
  let { image = {} } = $$props;
  let { portrait = false } = $$props;
  let { noScroll = true } = $$props;
  let { thumbnail = false } = $$props;
  let { imagePreset = false } = $$props;
  let { clickToClose = false } = $$props;
  let { closeButton = true } = $$props;
  let { isVisible = false } = $$props;
  if ($$props.thumbnailClasses === void 0 && $$bindings.thumbnailClasses && thumbnailClasses !== void 0)
    $$bindings.thumbnailClasses(thumbnailClasses);
  if ($$props.thumbnailStyle === void 0 && $$bindings.thumbnailStyle && thumbnailStyle !== void 0)
    $$bindings.thumbnailStyle(thumbnailStyle);
  if ($$props.modalClasses === void 0 && $$bindings.modalClasses && modalClasses !== void 0)
    $$bindings.modalClasses(modalClasses);
  if ($$props.modalStyle === void 0 && $$bindings.modalStyle && modalStyle !== void 0)
    $$bindings.modalStyle(modalStyle);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.protect === void 0 && $$bindings.protect && protect !== void 0)
    $$bindings.protect(protect);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.portrait === void 0 && $$bindings.portrait && portrait !== void 0)
    $$bindings.portrait(portrait);
  if ($$props.noScroll === void 0 && $$bindings.noScroll && noScroll !== void 0)
    $$bindings.noScroll(noScroll);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.clickToClose === void 0 && $$bindings.clickToClose && clickToClose !== void 0)
    $$bindings.clickToClose(clickToClose);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(LightboxThumbnail, "Thumbnail").$$render($$result, {
      class: thumbnailClasses,
      style: thumbnailStyle,
      protect
    }, {
      class: ($$value) => {
        thumbnailClasses = $$value;
        $$settled = false;
      },
      style: ($$value) => {
        thumbnailStyle = $$value;
        $$settled = false;
      },
      protect: ($$value) => {
        protect = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${thumbnail || gallery ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
      }
    })}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Index, "Modal").$$render($$result, {
          modalClasses,
          modalStyle,
          transitionDuration,
          image,
          protect,
          portrait,
          title,
          description,
          gallery,
          imagePreset,
          closeButton
        }, {
          modalClasses: ($$value) => {
            modalClasses = $$value;
            $$settled = false;
          },
          modalStyle: ($$value) => {
            modalStyle = $$value;
            $$settled = false;
          },
          transitionDuration: ($$value) => {
            transitionDuration = $$value;
            $$settled = false;
          },
          image: ($$value) => {
            image = $$value;
            $$settled = false;
          },
          protect: ($$value) => {
            protect = $$value;
            $$settled = false;
          },
          portrait: ($$value) => {
            portrait = $$value;
            $$settled = false;
          },
          title: ($$value) => {
            title = $$value;
            $$settled = false;
          },
          description: ($$value) => {
            description = $$value;
            $$settled = false;
          },
          gallery: ($$value) => {
            gallery = $$value;
            $$settled = false;
          },
          imagePreset: ($$value) => {
            imagePreset = $$value;
            $$settled = false;
          },
          closeButton: ($$value) => {
            closeButton = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `${thumbnail ? `${slots.image ? slots.image({}) : ``}` : `${gallery ? `${validate_component(InternalGallery, "InternalGallery").$$render($$result, { imagePreset }, {}, {
              default: () => {
                return `${$$slots.thumbnail ? `<div>${slots.thumbnail ? slots.thumbnail({}) : ``}</div>` : ``}
					${slots.default ? slots.default({}) : `
					`}`;
              }
            })}` : `${slots.default ? slots.default({}) : ``}`}`}`;
          }
        })}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
var LightboxImage_svelte_svelte_type_style_lang = "";
const Pages_search_results = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  let activeTab = 1;
  const toggleOffCanvas = () => isOpen = !isOpen;
  const swiper = [
    { id: 1, img: img12, title: "Bootstrap" },
    { id: 2, img: img11, title: "Website" },
    { id: 3, img: img10, title: "Responsive" },
    { id: 4, img: img9, title: "Design" },
    { id: 5, img: img8, title: "eCommerce" },
    { id: 6, img: img7, title: "Templates" },
    { id: 7, img: img6, title: "Admin Panel" },
    { id: 8, img: img5, title: "Simple" },
    { id: 9, img: img3, title: "Dark" }
  ];
  const gallery = [
    {
      id: 1,
      img: img1,
      title: "Glasses and laptop from above",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 2,
      img: img2,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 3,
      img: img3,
      title: "Photo was taken in Beach",
      auther: "Elwood Arter",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 4,
      img: img4,
      title: "Drawing a sketch",
      auther: "Jason McQuaid",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 5,
      img: img5,
      title: "Working from home little spot",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 6,
      img: img6,
      title: "Glasses and laptop from above",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 7,
      img: img7,
      title: "Sunrise above a beach",
      auther: "James Ballard",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 8,
      img: img8,
      title: "Project discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 9,
      img: img9,
      title: "Dramatic clouds at the Golden Gate Bridge",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 10,
      img: img10,
      title: "Fun day at the Hill Station",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 11,
      img: img11,
      title: "Cycling in the countryside",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K"
    },
    {
      id: 12,
      img: img12,
      title: "A mix of friends and strangers heading off to find an adventure.",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K"
    }
  ];
  const news = [
    {
      id: 1,
      img: img1,
      badgeClass: "success",
      badgeText: "Business",
      title: "A mix of friends and strangers heading off to find an adventure",
      auther: "James Ballard",
      date: "23 Nov, 2021"
    },
    {
      id: 2,
      img: img2,
      badgeClass: "warning",
      badgeText: "Development",
      title: "How to get creative in your work ?",
      auther: "Ruby Griffin",
      date: "23 Nov, 2021"
    },
    {
      id: 3,
      img: img3,
      badgeClass: "info",
      badgeText: "Fashion",
      title: "How to become a best sale marketer in a year!",
      auther: "Elwood Arter",
      date: "23 Nov, 2021"
    },
    {
      id: 4,
      img: img4,
      badgeClass: "primary",
      badgeText: "Product",
      title: "Manage white space in responsive layouts ?",
      auther: "Nancy Martino",
      date: "23 Nov, 2021"
    },
    {
      id: 5,
      img: img5,
      badgeClass: "success",
      badgeText: "Business",
      title: "Stack designer Olivia Murphy offers freelancing advice",
      auther: "Erica Kernan",
      date: "11 Nov, 2021"
    },
    {
      id: 6,
      img: img6,
      badgeClass: "danger",
      badgeText: "Design",
      title: "A day in the of a professional fashion designer",
      auther: "Jason McQuaid",
      date: "14 Nov, 2021"
    },
    {
      id: 7,
      img: img7,
      badgeClass: "danger",
      badgeText: "Design",
      title: "Design your apps in your own way",
      auther: "Henry Baird",
      date: "19 Nov, 2021"
    },
    {
      id: 8,
      img: img8,
      badgeClass: "warning",
      badgeText: "Development",
      title: "How apps is changing the IT world",
      auther: "Elwood Arter",
      date: "10 Aug, 2021"
    }
  ];
  const video = [
    {
      id: 1,
      title: "Admin dashboard templates - Material Design for Velzon",
      siteLink: "https://themesbrand.com/velzon/index.html",
      videoLink: "//www.youtube.com/embed/GfSZtaoc5bw",
      description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
      likes: 335,
      comments: 102,
      auther: "Themesbrand"
    },
    {
      id: 2,
      title: "Create Responsive Admin Dashboard using Html CSS",
      siteLink: "https://themesbrand.com/velzon/index.html",
      videoLink: "//www.youtube.com/embed/Z-fV2lGKnnU",
      description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
      likes: 485,
      comments: 167,
      auther: "Themesbrand"
    },
    {
      id: 3,
      title: "Velzon - The Most Popular Bootstrap 5 HTML, Angular & React Js Admin",
      siteLink: "https://themesbrand.com/velzon/index.html",
      videoLink: "//www.youtube.com/embed/1y_kfWUCFDQ",
      description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
      likes: 122,
      comments: 51,
      auther: "Themesbrand"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Search Results | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}"><div class="${"container-fluid"}">${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
    title: "Search Results",
    pageTitle: "Pages"
  }, {}, {})}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mb-4" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<div class="${"position-relative mb-3"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control form-control-lg bg-light border-light",
                                    placeholder: "Search here..",
                                    defaultValue: "Admin Dashboard"
                                  }, {}, {})}
											${validate_component(Link, "Link").$$render($$result, {
                                    href: "#!",
                                    class: "btn btn-link link-success btn-lg position-absolute end-0 top-0",
                                    onClick: toggleOffCanvas
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-mic-fill"}"></i>`;
                                    }
                                  })}</div>`;
                                }
                              })}
									<div class="${"col-auto"}"><button type="${"submit"}" class="${"btn btn-primary btn-lg waves-effect waves-light"}"><i class="${"mdi mdi-magnify me-1"}"></i> Search</button></div>`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                        default: () => {
                          return `<h5 class="${"fs-16 fw-semibold text-center mb-0"}">Showing results for &quot;<span class="${"text-primary fw-medium fst-italic"}">Admin Dashboard</span> &quot;
								</h5>`;
                        }
                      })}`;
                    }
                  })}

						${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
                    isOpen,
                    placement: "top",
                    toggleOffCanvas,
                    tabIndex: "-1"
                  }, {}, {
                    default: () => {
                      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, {}, {}, {
                        default: () => {
                          return `<button type="${"button"}" class="${"btn-close text-reset float-end"}" data-bs-dismiss="${"offcanvas"}" aria-label="${"Close"}"></button>
								<div class="${"d-flex flex-column h-100 justify-content-center align-items-center"}"><div class="${"search-voice"}"><i class="${"ri-mic-fill align-middle"}"></i>
										<span class="${"voice-wave"}"></span>
										<span class="${"voice-wave"}"></span>
										<span class="${"voice-wave"}"></span></div>
									<h4>Talk to me, what can I do for you?</h4></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}
					<div>${validate_component(Nav, "Nav").$$render($$result, {
                class: "nav-tabs nav-tabs-custom",
                role: "tablist"
              }, {}, {
                default: () => {
                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { href: "#!", active: activeTab == 1 }, {}, {
                        default: () => {
                          return `<i class="${"ri-search-2-line text-muted align-bottom me-1"}"></i> All Results
								`;
                        }
                      })}`;
                    }
                  })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { href: "#!", active: activeTab == 2 }, {}, {
                        default: () => {
                          return `<i class="${"ri-image-fill text-muted align-bottom me-1"}"></i> Images
								`;
                        }
                      })}`;
                    }
                  })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { href: "#!", active: activeTab == 3 }, {}, {
                        default: () => {
                          return `<i class="${"ri-list-unordered text-muted align-bottom me-1"}"></i> News
								`;
                        }
                      })}`;
                    }
                  })}
							${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { href: "#!", active: activeTab == 4 }, {}, {
                        default: () => {
                          return `<i class="${"ri-video-line text-muted align-bottom me-1"}"></i> Videos
								`;
                        }
                      })}`;
                    }
                  })}
							<li class="${"nav-item ms-auto"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        class: "nav-link fw-medium text-reset mb-n1",
                        role: "button"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-settings-4-line align-middle me-1"}"></i> Settings
									`;
                        }
                      })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Search Settings`;
                            }
                          })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Advanced Search`;
                            }
                          })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Search History`;
                            }
                          })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Search Help`;
                            }
                          })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Dark Mode:Off`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}</li>`;
                }
              })}</div>
					${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
                default: () => {
                  return `${validate_component(TabContent, "TabContent").$$render($$result, { activeTab, class: "text-muted" }, {}, {
                    default: () => {
                      return `${validate_component(TabPane, "TabPane").$$render($$result, {
                        tabId: 1,
                        class: "active"
                      }, {}, {
                        default: () => {
                          return `<div class="${"pb-3"}"><h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Velzon - Responsive Bootstrap 5 Admin Dashboard`;
                            }
                          })}</h5>
									<p class="${"text-success mb-2"}">https://themesbrand.com/velzon/index.html</p>
									<p class="${"text-muted mb-2"}">Velzon admin is super flexible, powerful, clean, modern &amp; responsive admin
										template based on <span class="${"fw-semibold"}">bootstrap 5</span> stable with unlimited
										possibilities. You can simply change to any layout or mode by changing a couple of
										lines of code. You can start small and large projects or update design in your existing
										project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers
										the ultimate user experience.
									</p>
									<ul class="${"list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0"}"><li class="${"list-inline-item me-3"}"><i class="${"ri-thumb-up-line align-middle me-1"}"></i>10
										</li>
										<li class="${"list-inline-item me-3"}"><i class="${"ri-question-answer-line align-middle me-1"}"></i>8
										</li>
										<li class="${"list-inline-item"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-user-line"}"></i></div>
												<div class="${"flex-grow-1 fs-13 ms-1"}"><span class="${"fw-medium"}">Themesbrand</span></div></div></li></ul></div>

								<div class="${"border border-dashed"}"></div>

								<div class="${"py-3"}"><h5 class="${"fs-13 mb-3 text-muted fst-italic"}">Showing results Images</h5>
									${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { xl: 4, lg: 10 }, {}, {
                                default: () => {
                                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                                    default: () => {
                                      return `${validate_component(Col, "Col").$$render($$result, { md: 3, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Lightbox, "Lightbox").$$render($$result, { class: "image-popup d-block" }, {}, {
                                            default: () => {
                                              return `<img${add_attribute("src", img1, 0)} alt="${""}" class="${"img-fluid d-block rounded"}">`;
                                            }
                                          })}</div>`;
                                        }
                                      })}
												${validate_component(Col, "Col").$$render($$result, { md: 3, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Lightbox, "Lightbox").$$render($$result, { class: "image-popup d-block" }, {}, {
                                            default: () => {
                                              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid d-block rounded"}">`;
                                            }
                                          })}</div>`;
                                        }
                                      })}
												${validate_component(Col, "Col").$$render($$result, { md: 3, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div>${validate_component(Lightbox, "Lightbox").$$render($$result, { class: "image-popup d-block" }, {}, {
                                            default: () => {
                                              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid d-block rounded"}">`;
                                            }
                                          })}</div>`;
                                        }
                                      })}
												${validate_component(Col, "Col").$$render($$result, { md: 3, sm: 6 }, {}, {
                                        default: () => {
                                          return `<div class="${"search-more-results rounded"}">${validate_component(Lightbox, "Lightbox").$$render($$result, { class: "d-block" }, {}, {
                                            default: () => {
                                              return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid d-block rounded"}">
															<div class="${"bg-overlay"}"></div>
															<div class="${"nav-icon"}"><i class="${"ri-image-fill align-middle me-1"}"></i> 99+
															</div>`;
                                            }
                                          })}</div>`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>

								<div class="${"border border-dashed"}"></div>

								<div class="${"py-3"}"><h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Skote - Admin &amp; Dashboard Template by Themesbrand`;
                            }
                          })}</h5>
									<p class="${"text-success mb-2"}">https://themesbrand.com/skote/</p>
									<p class="${"text-muted mb-2"}">Skote is an admin dashboard template that is a beautifully crafted, clean &amp;
										minimal designed admin template with Dark, Light Layouts with RTL options. You
										can build any type of web application like Saas based interface, eCommerce,
										Crypto, CRM, CMS, Project management apps, Admin Panels, etc.
									</p>
									<ul class="${"list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0"}"><li class="${"list-inline-item me-3"}"><i class="${"ri-thumb-up-line align-middle me-1"}"></i>485
										</li>
										<li class="${"list-inline-item me-3"}"><i class="${"ri-question-answer-line align-middle me-1"}"></i>167
										</li>
										<li class="${"list-inline-item"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-user-line"}"></i></div>
												<div class="${"flex-grow-1 fs-13 ms-1"}"><span class="${"fw-medium"}">Themesbrand</span></div></div></li></ul></div>

								<div class="${"border border-dashed"}"></div>

								<div class="${"py-3"}"><h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Minia - React Js Admin &amp; Dashboard Template`;
                            }
                          })}</h5>
									<p class="${"text-success mb-2"}">https://themesbrand.com/minia/react/</p>
									<p class="${"text-muted mb-2"}">Minia react is a simple and beautiful admin template built with Bootstrap
										^5.1.3. It has <span class="${"fw-semibold"}">5+ different layouts and 3 modes</span>
										( Dark, Light &amp; RTL ) which are managed by SCSS only. You can simply change to any
										layouts or mode by changing a couple of lines code.
									</p>
									<ul class="${"list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0"}"><li class="${"list-inline-item me-3"}"><i class="${"ri-thumb-up-line align-middle me-1"}"></i>69
										</li>
										<li class="${"list-inline-item me-3"}"><i class="${"ri-question-answer-line align-middle me-1"}"></i>43
										</li>
										<li class="${"list-inline-item"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-user-line"}"></i></div>
												<div class="${"flex-grow-1 fs-13 ms-1"}"><span class="${"fw-medium"}">Themesbrand</span></div></div></li></ul></div>

								<div class="${"border border-dashed"}"></div>

								<div class="${"py-3"}"><h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                            default: () => {
                              return `Doson - Angular Admin &amp; Dashboard Template by Themesbrand`;
                            }
                          })}</h5>
									<p class="${"text-success mb-2"}">https://themesbrand.com/dason/angular/</p>
									<p class="${"text-muted mb-2"}">Dason is a simple and beautiful admin template built with Bootstrap ^5.1.3. It
										has 5+ different layouts and 3 modes ( Dark, Light &amp; RTL ) which are managed by
										SCSS only. You can simply change to any layouts or mode by changing a couple of
										lines code.
									</p>
									<ul class="${"list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0"}"><li class="${"list-inline-item me-3"}"><i class="${"ri-thumb-up-line align-middle me-1"}"></i>102
										</li>
										<li class="${"list-inline-item me-3"}"><i class="${"ri-question-answer-line align-middle me-1"}"></i>36
										</li>
										<li class="${"list-inline-item"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-user-line"}"></i></div>
												<div class="${"flex-grow-1 fs-13 ms-1"}"><span class="${"fw-medium"}">Themesbrand</span></div></div></li></ul></div>
								${validate_component(Pagination, "Pagination").$$render($$result, {
                            listClass: "justify-content-center",
                            class: "pagination-separated mb-0"
                          }, {}, {
                            default: () => {
                              return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-left"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `2`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `3`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `4`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `5`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-right"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                        tabId: 2,
                        class: ""
                      }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Swiper_1, "Swiper").$$render($$result, {
                                    loop: true,
                                    slidesPerView: 9,
                                    spaceBetween: 20,
                                    autoplay: { delay: 3e3 },
                                    pagination: { clickable: true },
                                    class: "images-menu mb-3 swiper-initialized swiper-horizontal swiper-pointer-events"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"swiper-wrapper"}">${each(swiper, (item) => {
                                        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                                          default: () => {
                                            return `<div class="${"d-flex align-items-center border border-dashed rounded p-2"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", item.img, 0)} alt="${""}" width="${"65"}" class="${"rounded"}"></div>
															<div class="${"flex-grow-1 ms-2"}">${validate_component(Link, "Link").$$render($$result, {
                                              href: "#!",
                                              class: "stretched-link fw-medium"
                                            }, {}, {
                                              default: () => {
                                                return `${escape(item.title)}`;
                                              }
                                            })}
															</div></div>
													`;
                                          }
                                        })}`;
                                      })}</div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
								<div class="${"gallery-light"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${each(gallery, (item) => {
                                return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                                  default: () => {
                                    return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box" }, {}, {
                                      default: () => {
                                        return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                          class: "image-popup",
                                          href: "",
                                          title: ""
                                        }, {}, {
                                          default: () => {
                                            return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", item.img, 0)} alt="${""}">
															<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">${escape(item.title)}</h5></div>
														`;
                                          }
                                        })}</div>
													<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-2"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                          href: "",
                                          class: "text-body text-truncate"
                                        }, {}, {
                                          default: () => {
                                            return `${escape(item.auther)}`;
                                          }
                                        })}</div>
															<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i>
																		${escape(item.likes)}</button>
																	<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i>
																		${escape(item.comments)}</button>
																</div></div>
														</div></div>
												`;
                                      }
                                    })}
											`;
                                  }
                                })}`;
                              })}`;
                            }
                          })}

									<div class="${"mt-4"}">${validate_component(Pagination, "Pagination").$$render($$result, {
                            listClass: "justify-content-center",
                            class: "pagination-separated mb-0"
                          }, {}, {
                            default: () => {
                              return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-left"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `2`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `3`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `4`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `5`;
                                    }
                                  })}`;
                                }
                              })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-right"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div></div>`;
                        }
                      })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                        tabId: 3,
                        class: ""
                      }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${each(news, (item) => {
                                return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                  default: () => {
                                    return `${validate_component(Card, "Card").$$render($$result, { class: "border" }, {}, {
                                      default: () => {
                                        return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                                          default: () => {
                                            return `<div class="${"d-sm-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", item.img, 0)} alt="${""}" width="${"115"}" class="${"rounded-1"}"></div>
														<div class="${"flex-grow-1 ms-sm-4 mt-3 mt-sm-0"}"><ul class="${"list-inline mb-2"}"><li class="${"list-inline-item"}"><span${add_attribute("class", `badge badge-soft-${item.badgeClass} fs-11`, 0)}>${escape(item.badgeText)}</span>
																</li></ul>
															<h5>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                              default: () => {
                                                return `${escape(item.title)}`;
                                              }
                                            })}</h5>
															<ul class="${"list-inline mb-0"}"><li class="${"list-inline-item"}"><i class="${"ri-user-3-fill text-success align-middle me-1"}"></i>
																	${escape(item.auther)}</li>
																<li class="${"list-inline-item"}"><i class="${"ri-calendar-2-fill text-success align-middle me-1"}"></i>
																	${escape(item.date)}
																</li></ul>
														</div></div>
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
                          })}

								${validate_component(Pagination, "Pagination").$$render($$result, {
                            listClass: "justify-content-center",
                            class: "pagination-separated mb-0 mt-4"
                          }, {}, {
                            default: () => {
                              return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-left"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `2`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `3`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `4`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `5`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"mdi mdi-chevron-right"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(TabPane, "TabPane").$$render($$result, {
                        tabId: 4,
                        class: ""
                      }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${each(video, (item) => {
                                return `${validate_component(Col, "Col").$$render($$result, { lg: 12, class: "video-list" }, {}, {
                                  default: () => {
                                    return `<div class="${"list-element mt-4"}"><h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                      default: () => {
                                        return `${escape(item.title)}`;
                                      }
                                    })}</h5>
												<p class="${"text-success"}">${escape(item.siteLink)}</p>
												<div class="${"d-flex flex-column flex-sm-row"}"><div class="${"flex-shrink-0"}"><iframe${add_attribute("src", item.videoLink, 0)} title="${"YouTube video"}" allowfullscreen class="${"rounded"}"></iframe></div>
													<div class="${"flex-grow-1 ms-sm-3 mt-2 mt-sm-0"}"><p class="${"text-muted mb-0"}">${escape(item.description)}</p>
														<div class="${"border border-dashed mb-1 mt-3"}"></div>
														<ul class="${"list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0"}"><li class="${"list-inline-item me-3"}"><i class="${"ri-thumb-up-line align-middle me-1"}"></i>${escape(item.likes)}</li>
															<li class="${"list-inline-item me-3"}"><i class="${"ri-question-answer-line align-middle me-1"}"></i>${escape(item.comments)}</li>
															<li class="${"list-inline-item"}"><div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><i class="${"ri-user-line"}"></i></div>
																	<div class="${"flex-grow-1 fs-13 ms-1"}"><span class="${"fw-medium"}">${escape(item.auther)}</span></div>
																</div></li>
														</ul></div>
												</div></div>
										`;
                                  }
                                })}`;
                              })}
									<div class="${"text-center"}"><button id="${"loadmore"}" class="${"btn btn-link text-success mt-2"}"><i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i> Load more
										</button></div>`;
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
  })}</div></div>`;
});
export { Pages_search_results as default };
