import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { s as slack } from "../../../../../chunks/slack-e58caefb.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "mt-n4 mx-n4" }, {}, {
        default: () => {
          return `<div class="${"bg-soft-warning"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "px-4 pb-4" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                default: () => {
                  return `<div class="${"col-md"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                    default: () => {
                      return `<div class="${"col-md-auto"}"><div class="${"avatar-md"}"><div class="${"avatar-title bg-white rounded-circle"}"><img${add_attribute("src", slack, 0)} alt="${""}" class="${"avatar-xs"}"></div></div></div>
                    <div class="${"col-md"}"><div><h4 class="${"fw-bold"}">Product Designer</h4>
                        <div class="${"hstack gap-3 flex-wrap"}"><div><i class="${"ri-building-line align-bottom me-1"}"></i>${escape(" ")}
                            Themesbrand
                          </div>
                          <div class="${"vr"}"></div>
                          <div><i class="${"ri-map-pin-2-line align-bottom me-1"}"></i>${escape(" ")}
                            Zuweihir, UAE
                          </div>
                          <div class="${"vr"}"></div>
                          <div>Post Date :${escape(" ")}
                            <span class="${"fw-medium"}">15 Sep, 2021</span></div>
                          <div class="${"vr"}"></div>
                          <div class="${"badge rounded-pill bg-success fs-12"}">Full Time
                          </div></div></div></div>`;
                    }
                  })}</div>
    
                <div class="${"col-md-auto"}"><div class="${"hstack gap-1 flex-wrap mt-4 mt-md-0"}"><button type="${"button"}" class="${"btn btn-icon btn-sm btn-ghost-warning fs-16"}"><i class="${"ri-star-fill"}"></i></button>
                    <button type="${"button"}" class="${"btn btn-icon btn-sm btn-ghost-primary fs-16"}"><i class="${"ri-share-line"}"></i></button>
                    <button type="${"button"}" class="${"btn btn-icon btn-sm btn-ghost-primary fs-16"}"><i class="${"ri-flag-line"}"></i></button></div></div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}`;
});
export { Header as default };
