import { c as create_ssr_component, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const NatworkSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataColors } = $$props;
  if ($$props.dataColors === void 0 && $$bindings.dataColors && dataColors !== void 0)
    $$bindings.dataColors(dataColors);
  return `${validate_component(Col, "Col").$$render($$result, { class: "col-xxl-4 col-md-6" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
            class: "card-header align-items-center d-flex"
          }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Your Network Summary
        </h4>
        <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "text-reset dropdown-btn p-0",
                    tag: "a",
                    type: "a",
                    href: "#!",
                    color: ""
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-bold text-uppercase fs-12"}">Sort by:${escape(" ")}</span>
              <span class="${"text-muted"}">Monthly<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
            ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Today`;
                        }
                      })}
              ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Weekly`;
                        }
                      })}
              ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Monthly`;
                        }
                      })}
              ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Yearly`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
      ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pb-0" }, {}, {
            default: () => {
              return `<div id="${"networksummary"}" class="${"apex-charts"}" dir="${"ltr"}"></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { NatworkSummary as default };