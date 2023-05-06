import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { C as Counter } from "../../../chunks/counter-768545ac.js";
import DashboardNFTCharts from "./DashboardNFTCharts.svelte.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const Marketplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new Date("Jan 1, 2023").getTime();
  setInterval(function() {
    new Date().getTime();
  }, 1e3);
  return `${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xxl: 8 }, {}, {
                        default: () => {
                          return `<div class="${""}">${validate_component(CardHeader, "CardHeader").$$render($$result, {
                            class: "border-0 align-items-center d-flex"
                          }, {}, {
                            default: () => {
                              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Marketplace</h4>
                                <div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">ALL
                                    </button>
                                    <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">1M
                                    </button>
                                    <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">6M
                                    </button>
                                    <button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">1Y
                                    </button></div>`;
                            }
                          })}
                            ${validate_component(Row, "Row").$$render($$result, { class: "g-0 text-center" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-6" }, {}, {
                                default: () => {
                                  return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"36.48"}">0</span>k</h5>
                                        <p class="${"text-muted mb-0"}">Aetworks</p></div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-6" }, {}, {
                                default: () => {
                                  return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"92.54"}">0</span>k</h5>
                                        <p class="${"text-muted mb-0"}">Auction</p></div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "col-6" }, {}, {
                                default: () => {
                                  return `<div class="${"p-3 border border-dashed border-end-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"8.62"}">0</span>k</h5>
                                        <p class="${"text-muted mb-0"}">Creators</p></div>`;
                                }
                              })}`;
                            }
                          })}
                            ${validate_component(DashboardNFTCharts, "MarketplaceChart").$$render($$result, {
                            dataColors: ["--vz-primary", "--vz-success", "--vz-gray-300"]
                          }, {}, {})}</div>`;
                        }
                      })}

                    ${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                        default: () => {
                          return `<div class="${"border-start p-4 h-100 d-flex flex-column"}"><div class="${"w-100"}"><div class="${"d-flex align-items-center"}"><img src="${"https://img.themesbrand.com/velzon/images/img-2.gif"}" class="${"img-fluid avatar-xs rounded-circle object-cover"}" alt="${""}">
                                    <div class="${"ms-3 flex-grow-1"}"><h5 class="${"fs-16 mb-1"}">Trendy Fashion Portraits</h5>
                                        <p class="${"text-muted mb-0"}">Artwork</p></div>

                                    ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "a",
                                class: "text-reset dropdown-btn p-0",
                                color: "",
                                role: "button"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-share-line fs-18"}"></i>`;
                                }
                              })}
                                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-twitter-fill text-primary align-bottom me-1"}"></i> Twitter`;
                                    }
                                  })}
                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-facebook-circle-fill text-info align-bottom me-1"}"></i> Facebook`;
                                    }
                                  })}
                                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-google-fill text-danger align-bottom me-1"}"></i> Google`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>

                                <h3 class="${"ff-secondary fw-bold mt-4"}"><i class="${"mdi mdi-ethereum text-primary"}"></i> 346.12 ETH</h3>
                                <p class="${"text-success mb-3"}">+586.85 (40.6%)</p>

                                <p class="${"text-muted"}">NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes explained Every NFT is unique duplicated.</p>

                                <div class="${"d-flex align-items-end justify-content-between mt-4"}"><div><p class="${"fs-14 text-muted mb-1"}">Current Bid</p>
                                        <h4 class="${"fs-20 ff-secondary fw-semibold mb-0"}">342.74 ETH</h4></div>

                                    <div><p class="${"fs-14 text-muted mb-1"}">Highest Bid</p>
                                        <h4 class="${"fs-20 ff-secondary fw-semibold mb-0"}">346.67 ETH</h4></div></div>

                                <div class="${"dash-countdown mt-4 pt-1"}"><div id="${"countdown"}" class="${"countdownlist"}"></div></div>

                                ${validate_component(Row, "Row").$$render($$result, { class: "mt-4 pt-2" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Link, "Link").$$render($$result, {
                                    href: "/NFTmarketplace/Itemdetails/apps-nft-item-details",
                                    class: "btn btn-primary w-100"
                                  }, {}, {
                                    default: () => {
                                      return `View Details`;
                                    }
                                  })}`;
                                }
                              })}
                                    ${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<button class="${"btn btn-info w-100"}">Bid Now</button>`;
                                }
                              })}`;
                            }
                          })}</div></div>`;
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
});
export { Marketplace as default };
