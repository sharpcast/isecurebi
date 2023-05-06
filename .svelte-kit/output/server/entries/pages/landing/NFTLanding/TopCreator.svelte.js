import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/LandingNFT-5443bfa5.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/binance-8a9ae9f5.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/img-06-fae769a6.js";
const TopCreator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"creators"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h2 class="${"mb-3 fw-semibold lh-base"}">Top Creator This Week</h2>
                    <p class="${"text-muted"}">NFTs are valuable because they verify the authenticity of a non-fungible asset. This makes these assets unique and one of a kind.</p></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.topCreatorData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="${"d-flex"}"><div class="${"flex-shink-0"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-sm object-cover rounded"}"></div>
                            <div class="${"ms-3 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "pages-profile" }, {}, {
                          default: () => {
                            return `<h5 class="${"mb-1"}">${escape(item.title)}</h5>
                                `;
                          }
                        })}
                                <p class="${"text-muted mb-0"}"><i class="${"mdi mdi-ethereum text-primary fs-14"}"></i> ${escape(item.price)}</p></div>
                            <div>${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "float-end" }, {}, {
                          default: () => {
                            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                              tag: "button",
                              class: "btn btn-ghost-primary btn-icon",
                              color: ""
                            }, {}, {
                              default: () => {
                                return `<i class="${"ri-more-fill align-middle fs-16"}"></i>
                                `;
                              }
                            })}
                                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                              default: () => {
                                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "view-item-btn" }, {}, {
                                  default: () => {
                                    return `Share`;
                                  }
                                })}
                                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "edit-item-btn" }, {}, {
                                  default: () => {
                                    return `Report`;
                                  }
                                })}
                                `;
                              }
                            })}
                            `;
                          }
                        })}
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
      })}`;
    }
  })}</section>`;
});
export { TopCreator as default };
