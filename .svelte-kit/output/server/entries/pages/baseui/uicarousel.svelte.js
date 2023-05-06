import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import Slide from "./UiCarousel/slide.svelte.js";
import Slidewithcontrol from "./UiCarousel/Slidewithcontrol.svelte.js";
import Slidewithindicator from "./UiCarousel/Slidewithindicator.svelte.js";
import Slidewithcaption from "./UiCarousel/Slidewithcaption.svelte.js";
import Darkvariant from "./UiCarousel/Darkvariant.svelte.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import "../../../chunks/CardHeader-84e061db.js";
import "../../../chunks/CarouselItem-9c725c3c.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-3-4c804a8b.js";
import "../../../chunks/CarouselControl-fa4dc4fe.js";
import "../../../chunks/img-4-f8adc4d4.js";
import "../../../chunks/img-5-1aac893f.js";
import "../../../chunks/img-6-3ccff08f.js";
import "../../../chunks/CarouselIndicators-82ff5491.js";
import "../../../chunks/CarouselCaption-7e2b4f95.js";
import "../../../chunks/img-7-4861de06.js";
import "../../../chunks/img-9-422942e7.js";
const Uicarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const slideOnlyCode = `<Carousel {items} bind:activeIndex>
<div class="carousel-inner">
    {#each items as item, index}
    <CarouselItem bind:activeIndex itemIndex={index}>
        <img src={item} class="d-block w-100" />
    </CarouselItem>
    {/each}
</div>
</Carousel>
`;
  const withControlCode = `<Carousel {items} bind:activeIndex>
    <div class="carousel-inner">
      {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <img src={item} class="d-block w-100" />
        </CarouselItem>
      {/each}
    </div>
  
    <CarouselControl direction="prev" bind:activeIndex {items} />
    <CarouselControl direction="next" bind:activeIndex {items} />
  </Carousel>
`;
  const withIndicatorCode = `<Carousel {items} bind:activeIndex>
    <CarouselIndicators bind:activeIndex {items} />

    <div class="carousel-inner">
        {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
            <img src={item} class="d-block w-100" />
        </CarouselItem>
        {/each}
    </div>

<CarouselControl direction="prev" bind:activeIndex {items} />
<CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
`;
  const withCaptionCode = `<Carousel {items} bind:activeIndex ride interval={2000}>
    <CarouselIndicators bind:activeIndex {items} />
  
    <div class="carousel-inner">
      {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <img src={item.url} class="d-block w-100" alt={item.title} />
          <CarouselCaption
            captionHeader={item.title}
            captionText={item.subTitle}
          />
        </CarouselItem>
      {/each}
    </div>
  
    <CarouselControl direction="prev" bind:activeIndex {items} />
    <CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
`;
  const darkvariant = `<Carousel dark {items} bind:activeIndex>
    <CarouselIndicators bind:activeIndex {items} />
  
    <div class="carousel-inner">
      {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <img
            src={item.url}
            class="d-block w-100"
          
          />
          <CarouselCaption
            captionHeader={item.title}
            captionText={item.subTitle}
          />
        </CarouselItem>
      {/each}
    </div>
  
    <CarouselControl direction="prev" bind:activeIndex {items} />
    <CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>`;
  return `${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Carousel", pageTitle: "Base UI" }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Slides Only" }, {}, {})}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Slide, "Slide").$$render($$result, {}, {}, {})}</div>
                        <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: slideOnlyCode, id: "slideOnlyCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "With Controls" }, {}, {})}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Slidewithcontrol, "Slidewithcontrol").$$render($$result, {}, {}, {})}</div>
                        <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: withControlCode,
                        id: "withControlCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "with Indicators" }, {}, {})}

                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Slidewithindicator, "Slidewithindicator").$$render($$result, {}, {}, {})}</div>

                        <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: withIndicatorCode,
                        id: "withIndicatorCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "with Captions" }, {}, {})}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Slidewithcaption, "Slidewithcaption").$$render($$result, {}, {}, {})}</div>
                        <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: withCaptionCode,
                        id: "withCaptionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dark variant" }, {}, {})}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Darkvariant, "Darkvariant").$$render($$result, {}, {}, {})}</div>
                        <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: darkvariant, id: "darkvariant" }, {}, {})}</div>`;
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
export { Uicarousel as default };
