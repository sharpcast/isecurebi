import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardTitle } from "../../../chunks/CardTitle-33d99fc1.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { R as RangeSlider } from "../../../chunks/RangeSlider-5437e8ff.js";
import "../../../chunks/index-bddc6f42.js";
const Forms_range_sliders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Range Slider | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}" id="${"app"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Advanced Kit",
        breadcrumbItem: "Range Slider"
      }, {}, {})}
  
      <div class="${"row"}"><div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "h4" }, {}, {
                default: () => {
                  return `ION Range slider`;
                }
              })}
              <p class="${"card-title-desc"}">Cool, comfortable, responsive and easily customizable range slider
              </p>
              ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Default</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        first: "label",
                        last: "label",
                        values: [11]
                      }, {}, {})}</div>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Min-Max</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        min: 100,
                        max: 200,
                        pips: true,
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}
              ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Prefix</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        range: true,
                        values: [30, 70],
                        prefix: "$",
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Range</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        range: true,
                        values: [20, 60],
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}
              ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Step</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        step: 2.5,
                        pipstep: 10,
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Float</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        float: true,
                        hover: true,
                        values: [40, 60],
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}
              ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Max value</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        id: "reverse-pips",
                        max: 20,
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}
                ${validate_component(Col, "Col").$$render($$result, { xl: "6" }, {}, {
                    default: () => {
                      return `<div class="${"p-3"}"><h5 class="${"fs-14 mb-3 mt-0"}">Suffix</h5>
                    ${validate_component(RangeSlider, "RangeSlider").$$render($$result, {
                        pips: true,
                        range: true,
                        values: [40, 60],
                        suffix: "%",
                        all: "label"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>`;
    }
  })}</div>`;
});
export { Forms_range_sliders as default };
