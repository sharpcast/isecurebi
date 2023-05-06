import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Carousel, a as CarouselItem } from "../../../../chunks/CarouselItem-9c725c3c.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { i as img1 } from "../../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [img1, img2, img3];
  let activeIndex = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Carousel, "Carousel").$$render($$result, { items, activeIndex }, {
      activeIndex: ($$value) => {
        activeIndex = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"carousel-inner"}">${each(items, (item, index) => {
          return `${validate_component(CarouselItem, "CarouselItem").$$render($$result, { itemIndex: index, activeIndex }, {
            activeIndex: ($$value) => {
              activeIndex = $$value;
              $$settled = false;
            }
          }, {
            default: () => {
              return `<img${add_attribute("src", item, 0)} class="${"d-block w-100"}"${add_attribute("alt", `${item} ${index + 1}`, 0)}>
    `;
            }
          })}`;
        })}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Slide as default };
