import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section nft-hero"}" id="${"hero"}"><div class="${"bg-overlay"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8, sm: 10 }, {}, {
            default: () => {
              return `<div class="${"text-center"}"><h1 class="${"display-4 fw-medium mb-4 lh-base text-white"}">Discover Digital Art &amp; Collect <span class="${"text-success"}">NFT Marketplace</span></h1>
                    <p class="${"lead text-white-50 lh-base mb-4 pb-2"}">Can artwork be NFT? NFTs (non-fungible tokens) are one-of-a-kind digital assets. Given they&#39;re digital in nature, can physical works of art be turned into NFTs?.</p>

                    <div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/CreateNFT/apps-nft-create",
                class: "btn btn-primary"
              }, {}, {
                default: () => {
                  return `Create Own <i class="${"ri-arrow-right-line align-middle ms-1"}"></i>`;
                }
              })}
                        ${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/ExploreNow/apps-nft-explore",
                class: "btn btn-danger"
              }, {}, {
                default: () => {
                  return `Explore Now <i class="${"ri-arrow-right-line align-middle ms-1"}"></i>`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Home as default };
