import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const CTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"py-5 bg-primary position-relative"}"><div class="${"bg-overlay bg-overlay-pattern opacity-50"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
            default: () => {
              return `<div><h4 class="${"text-white mb-0 fw-semibold"}">Create and Sell Your NFT&#39;s</h4></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
            default: () => {
              return `<div>${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/CreateNFT/apps-nft-create",
                class: "btn bg-gradient btn-danger me-1"
              }, {}, {
                default: () => {
                  return `Create NFT`;
                }
              })}
                    ${validate_component(Link, "Link").$$render($$result, {
                href: "/NFTmarketplace/ExploreNow/apps-nft-explore",
                class: "btn bg-gradient btn-info"
              }, {}, {
                default: () => {
                  return `Discover More`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { CTA as default };
