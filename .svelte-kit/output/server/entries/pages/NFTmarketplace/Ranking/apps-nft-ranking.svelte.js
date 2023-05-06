import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import { html } from "gridjs";
import { M as MOCK_DATA } from "../../../../chunks/NFTMarketplace-529e1248.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Row-089822f8.js";
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
import "../../../../chunks/binance-8a9ae9f5.js";
const Apps_nft_ranking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = MOCK_DATA.NFTRanking;
  const columns = [
    {
      name: "Ranking",
      id: "ranking",
      formatter: (cell) => {
        if (cell < 4) {
          return html(`<div class="ranking text-info fw-semibold">#${cell}</div>`);
        } else {
          return html(`<div class="ranking">#${cell}</div>`);
        }
      }
    },
    { id: "img", hidden: true },
    {
      name: "Collection",
      id: "collection",
      filterable: false,
      formatter: (cell, row) => {
        return html(`<div class="collection">
                    <div class="d-flex align-items-center">
                        <img src=${row.cells[1].data} alt="" class="avatar-xs rounded-circle object-cover me-2" /> <a href="/NFTmarketplace/Itemdetails/apps-nft-item-details" class="link-dark">${cell}</a>
                    </div>
                </div>`);
      }
    },
    {
      name: "Volume",
      id: "volume_price",
      filterable: false
    },
    {
      name: "24h%",
      id: "hours",
      filterable: false,
      formatter: (cell) => {
        if (cell > 0) {
          return html(`<h6 class="text-success mb-1 24h" > ${cell} ETH</h6 >`);
        } else {
          return html(`<h6 class="text-danger mb-1 24h">${cell} ETH</h6>`);
        }
      }
    },
    {
      name: "7d%",
      id: "day",
      filterable: false,
      formatter: (cell) => {
        if (cell > 0) {
          return html(`<h6 class="text-success mb-1 7d" > ${cell} ETH</h6 >`);
        } else {
          return html(`<h6 class="text-danger mb-1 7d">${cell} ETH</h6>`);
        }
      }
    },
    {
      name: "Item",
      id: "item",
      filterable: false
    },
    {
      name: "Floor Price",
      id: "floor_price",
      filterable: false
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Ranking | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Ranking",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        <div class="${"row"}"><div class="${"col-lg-12"}"><div class="${"card"}" id="${"contactList"}"><div class="${"card-header border-0"}"><div class="${"d-flex align-items center"}"><h5 class="${"card-title mb-0 flex-grow-1"}">The top NFTs ranking on Velzon</h5>
                            <p class="${"text-muted mb-0"}">Updated: 28 April, 2022 08:05:00</p></div></div>
                    <div class="${"card-body"}">${data.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
        data,
        columns,
        pagination: { enabled: true, limit: 10 }
      }, {}, {})}` : `<div class="${"noresult"}"><div class="${"text-center"}"><lord-icon src="${"https://cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#8c68cd,secondary:#4788ff"}" style="${"width: 75px; height: 75px"}"></lord-icon>
                                    <h5 class="${"mt-2"}">Sorry! No Result Found</h5>
                                    <p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+ transactions We did not find any transactions for you search.</p></div></div>`}</div></div></div></div>`;
    }
  })}</div>`;
});
export { Apps_nft_ranking as default };
