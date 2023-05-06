import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Carousel, a as CarouselItem } from "../../../../chunks/CarouselItem-9c725c3c.js";
import { C as CarouselControl } from "../../../../chunks/CarouselControl-fa4dc4fe.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../../chunks/img-6-3ccff08f.js";
const Slidewithcontrol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [img4, img5, img6];
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
        })}</div>
  
    ${validate_component(CarouselControl, "CarouselControl").$$render($$result, { direction: "prev", items, activeIndex }, {
          activeIndex: ($$value) => {
            activeIndex = $$value;
            $$settled = false;
          }
        }, {})}
    ${validate_component(CarouselControl, "CarouselControl").$$render($$result, { direction: "next", items, activeIndex }, {
          activeIndex: ($$value) => {
            activeIndex = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Slidewithcontrol as default };
