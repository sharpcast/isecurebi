import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardNFT-8513f480.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import PopularityChart from "./PopularityChart.svelte.js";
import "../../../chunks/img-06-fae769a6.js";
import "../../../chunks/img-04-688285cd.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
const Popularity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-0 pb-0" }, {}, {
            default: () => {
              return `<h6 class="${"card-title mb-0"}">Popularity</h6>`;
            }
          })}
        <div>${validate_component(PopularityChart, "PopularityChart").$$render($$result, {
            dataColors: ["--vz-success", "--vz-warning"]
          }, {}, {})}</div>`;
        }
      })}

    ${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
            default: () => {
              return `<h6 class="${"card-title mb-0 flex-grow-1"}">History of Bids</h6>
            ${validate_component(Link, "Link").$$render($$result, {
                class: "text-muted",
                href: "/NFTmarketplace/Itemdetails/apps-nft-item-details"
              }, {}, {
                default: () => {
                  return `See All <i class="${"ri-arrow-right-line align-bottom"}"></i>`;
                }
              })}`;
            }
          })}
        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"table-responsive table-card"}"><div id="${"scrollbar"}" data-simplebar style="${"max-height: 375px"}"><ul class="${"list-group list-group-flush"}">${each(MOCK_DATA.popularityData, (item) => {
                return `<li class="${"list-group-item list-group-item-action"}"><div class="${"d-flex align-items-center"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xs object-cover rounded-circle"}">
                                    <div class="${"ms-3 flex-grow-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "stretched-link" }, {}, {
                  default: () => {
                    return `<h6 class="${"fs-14 mb-1"}">${escape(item.author)}</h6>
                                        `;
                  }
                })}
                                        <p class="${"mb-0 text-muted"}">${escape(item.username)}</p></div>
                                    <div><h6>${escape(item.price)}</h6>
                                    </div></div>
                            </li>`;
              })}</ul></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Popularity as default };
