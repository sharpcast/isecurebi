import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Carousel, a as CarouselItem } from "../../../../chunks/CarouselItem-9c725c3c.js";
import { C as CarouselCaption } from "../../../../chunks/CarouselCaption-7e2b4f95.js";
import { C as CarouselControl } from "../../../../chunks/CarouselControl-fa4dc4fe.js";
import { C as CarouselIndicators } from "../../../../chunks/CarouselIndicators-82ff5491.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { i as img1 } from "../../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
const Darkvariant = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      url: img1,
      title: "Slide 1",
      subTitle: "Slide 1"
    },
    {
      url: img2,
      title: "Slide 2",
      subTitle: "Slide 2"
    },
    {
      url: img3,
      title: "Slide 3",
      subTitle: "Slide 3"
    }
  ];
  let activeIndex = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Carousel, "Carousel").$$render($$result, { dark: true, items, activeIndex }, {
      activeIndex: ($$value) => {
        activeIndex = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(CarouselIndicators, "CarouselIndicators").$$render($$result, { items, activeIndex }, {
          activeIndex: ($$value) => {
            activeIndex = $$value;
            $$settled = false;
          }
        }, {})}
  
    <div class="${"carousel-inner"}">${each(items, (item, index) => {
          return `${validate_component(CarouselItem, "CarouselItem").$$render($$result, { itemIndex: index, activeIndex }, {
            activeIndex: ($$value) => {
              activeIndex = $$value;
              $$settled = false;
            }
          }, {
            default: () => {
              return `<img${add_attribute("src", item.url, 0)} class="${"d-block w-100"}"${add_attribute("alt", `${item} ${index + 1}`, 0)}>
          ${validate_component(CarouselCaption, "CarouselCaption").$$render($$result, {
                captionHeader: item.title,
                captionText: item.subTitle
              }, {}, {})}
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
export { Darkvariant as default };