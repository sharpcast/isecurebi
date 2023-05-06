import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Market = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = MOCK_DATA.market;
  const columns = [
    { id: "coinName", hidden: true },
    {
      name: "Currency",
      id: "img",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center fw-medium">
                <img src=${cell} alt="" class="avatar-xxs me-2" />
                <a href="#!" class="currency_name">${row.cells[0].data}</a>
            </div>`)
    },
    { name: "Price", id: "price" },
    { name: "Pairs", id: "pairs" },
    { name: "24 High", id: "high" },
    { name: "24 Low", id: "low" },
    {
      name: "Market Volume",
      id: "marketVolume"
    },
    { id: "percentage", hidden: true },
    { id: "icon", hidden: true },
    {
      name: "Volume %",
      id: "iconClass",
      formatter: (cell, row) => html(`<h6 class="text-${cell} fs-13 mb-0">
                    <i class="${row.cells[8].data} align-middle me-1"></i>
                    ${row.cells[7].data}
                </h6>`)
    },
    {
      name: "Action",
      formatter: (cell) => html(`<button class="btn btn-sm btn-soft-info">Trade Now</button>`)
    }
  ];
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "border-bottom-dashed" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">Markets</h5>`;
                }
              })}
            <div class="${"col-auto ms-auto"}"><div class="${"d-flex gap-2"}"><button class="${"btn btn-success"}"><i class="${"ri-equalizer-line align-bottom me-1"}"></i> Filters</button></div></div>`;
            }
          })}`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, {
        class: "p-0 border-bottom border-bottom-dashed"
      }, {}, {
        default: () => {
          return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control search border-0 py-3"}" placeholder="${"Search to currency..."}">
            <i class="${"ri-search-line search-icon"}"></i></div>`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
            data,
            columns,
            className: { th: "text-muted" },
            pagination: { enabled: true, limit: 8 }
          }, {}, {})}</div>`;
        }
      })}`;
    }
  })}`;
});
export { Market as default };
