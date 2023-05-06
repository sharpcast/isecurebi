import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import { html } from "gridjs";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const AllTransactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Sortby = [
    { label: "All", value: "All" },
    { label: "USD", value: "USD" },
    { label: "ETH", value: "ETH" },
    { label: "BTC", value: "BTC" },
    { label: "EUR", value: "EUR" },
    { label: "JPY", value: "JPY" }
  ];
  const columns = [
    { id: "icon", hidden: true },
    {
      name: "iconClass",
      formatter: (cell, row) => html(`<div class="avatar-xs">
                <div class="avatar-title bg-soft-${cell} text-${cell} rounded-circle fs-16">
                    <i class=${row.cells[0].data}></i>
                </div>
            </div>`)
    },
    { id: "time", hidden: true },
    { id: "image", hidden: true },
    {
      id: "date",
      name: "Timestamp",
      formatter: (cell, row) => html(`${cell}${row.cells[2].data}</small>`)
    },
    {
      id: "currency",
      name: "Currency",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center">
                <img src=${row.cells[3].data} alt="" class="avatar-xxs me-2" />
                ${cell}
            </div>`)
    },
    { name: "From", id: "from" },
    { name: "To", id: "to" },
    { name: "Details", id: "details" },
    { name: "Transaction ID", id: "id" },
    { name: "Type", id: "type" },
    { id: "amount1", hidden: true },
    {
      name: "Amount",
      id: "amount",
      formatter: (cell, row) => html(`<h6 class="text-${row.cells[1].data} amount mb-1">-${cell}</h6>
                <p class="text-muted mb-0">${row.cells[11].data}</p>`)
    },
    {
      name: "Status",
      id: "status",
      formatter: (cell) => {
        if (cell === "Processing") {
          return html(`<span class='badge badge-soft-warning fs-11'><i class="ri-time-line align-bottom"></i>${cell}</span>`);
        } else if (cell === "Success") {
          return html(`<span class='badge badge-soft-success fs-11'><i class="ri-checkbox-circle-line align-bottom"></i>${cell}</span>`);
        } else if (cell === "Failed") {
          return html(`<span class="badge badge-soft-danger fs-11"><i class="ri-close-circle-line align-bottom"></i>${cell}</span>`);
        } else {
          return null;
        }
      }
    }
  ];
  const data = MOCK_DATA.transactions;
  return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center mb-4 g-3" }, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { sm: 3 }, {}, {
        default: () => {
          return `<div class="${"d-flex align-items-center gap-2"}"><span class="${"text-muted flex-shrink-0"}">Sort by: </span>
            <div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
            name: "choices-single-default",
            id: "choices-single-default",
            items: Sortby,
            value: "All"
          }, {}, {})}</div></div>`;
        }
      })}
    <div class="${"col-sm-auto ms-auto"}"><div class="${"d-flex gap-2"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        "data-bs-toggle": "modal",
        class: "btn btn-info"
      }, {}, {
        default: () => {
          return `Deposite`;
        }
      })}
            ${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        "data-bs-toggle": "modal",
        class: "btn btn-danger"
      }, {}, {
        default: () => {
          return `Withdraw`;
        }
      })}</div></div>`;
    }
  })}

${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                default: () => {
                  return `<h5 class="${"card-title mb-0"}">All Transactions</h5>`;
                }
              })}
            <div class="${"col-md-auto ms-auto"}"><div class="${"d-flex gap-2"}"><div class="${"search-box"}"><input type="${"text"}" class="${"form-control search"}" placeholder="${"Search for transactions..."}">
                        <i class="${"ri-search-line search-icon"}"></i></div>
                    <button class="${"btn btn-success"}"><i class="${"ri-equalizer-line align-bottom me-1"}"></i>
                        Filters
                    </button></div></div>`;
            }
          })}`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `${MOCK_DATA.transactions.length > 0 ? `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
            data,
            columns,
            className: { th: "text-muted" },
            pagination: { enabled: true, limit: 8 }
          }, {}, {})}</div>` : `<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:75px;height:75px"}"></lord-icon>
                    <h5 class="${"mt-2"}">Sorry! No Result Found</h5>
                    <p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+ leads We did not find any
                        leads for you search.
                    </p></div></div>`}`;
        }
      })}`;
    }
  })}`;
});
export { AllTransactions as default };
