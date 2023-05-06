import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
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
const MarketStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = MOCK_DATA.marketStatus;
  const columns = [
    { id: "img", hidden: true },
    {
      id: "coinName",
      name: "Name",
      formatter: (cell, row) => html(`
            <div class="d-flex align-items-center fw-medium">
                <img src=${row.cells[0].data} alt="" class="avatar-xxs me-2" />
                <a href="#!" class="currency_name">${cell}</a>
            </div>
            `)
    },
    { id: "quantity", name: "Quantity" },
    { id: "avgPrice", name: "Avg. Price" },
    { id: "value", name: "Current Value" },
    { id: "returns", name: "Returns" },
    { id: "icon", hidden: true },
    { id: "percentageClass", hidden: true },
    {
      id: "percentage",
      name: "Returns %",
      formatter: (cell, row) => html(`<h6 class="text-${row.cells[7].data} fs-13 mb-0">
                <i class="${row.cells[6].data} align-middle me-1"></i>
                ${cell}
            </h6> `)
    }
  ];
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
        class: "border-bottom-dashed d-flex align-items-center"
      }, {}, {
        default: () => {
          return `<h4 class="${"card-title mb-0 flex-grow-1"}">Market Status</h4>
		<div class="${"flex-shrink-0"}"><div class="${"btn-group"}" role="${"group"}" aria-label="${"Basic example"}"><button type="${"button"}" class="${"btn btn-primary btn-sm"}">Today</button>
				<button type="${"button"}" class="${"btn btn-outline-primary btn-sm"}">Overall</button></div></div>`;
        }
      })}
	${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
            data,
            columns,
            pagination: { enabled: true, limit: 6 }
          }, {}, {})}</div>`;
        }
      })}`;
    }
  })}`;
});
export { MarketStatus as default };
