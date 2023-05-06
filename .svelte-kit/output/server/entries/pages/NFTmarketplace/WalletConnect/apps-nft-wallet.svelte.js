import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
import { m as metamask } from "../../../../chunks/binance-8a9ae9f5.js";
import "../../../../chunks/img-06-fae769a6.js";
import "../../../../chunks/img-04-688285cd.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-3-5bcc58a8.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
const Apps_nft_wallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Wallet Connect | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Wallet Connect",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-4"}"><h4>Your current wallet</h4>
                    <p class="${"text-muted fs-13"}">WalletConnect is a convenient open source tool that enables a mobile wallet to easily connect to decentralized web applications, and interact with them from your phone.</p></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mb-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "py-5 px-4" }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", metamask, 0)} alt="${""}" height="${"55"}" class="${"mb-3 pb-2"}">
                        <h5>Metamask</h5>
                        <p class="${"text-muted pb-1"}">MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.</p>
                        ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-danger" }, {}, {
                        default: () => {
                          return `Change Wallet`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 5 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-4"}"><h4>Connect with one of our other available wallet providers.</h4></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${each(MOCK_DATA.walletConnectData, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "text-center" }, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "py-5 px-4" }, {}, {
                      default: () => {
                        return `<img${add_attribute("src", item.img, 0)} alt="${""}" height="${"55"}" class="${"mb-3 pb-2"}">
                            <h5>${escape(item.title)}</h5>
                            <p class="${"text-muted pb-1"}">${escape(item.textContent)}</p>
                            ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-soft-info" }, {}, {
                          default: () => {
                            return `Connect Wallet`;
                          }
                        })}
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
  })}</div>`;
});
export { Apps_nft_wallet as default };
