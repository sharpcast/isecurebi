import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { F as Flatpickr } from "../../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../../chunks/Select-6990402e.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../../chunks/gridjs-2f6b3743.js";
import { M as MOCK_DATA } from "../../../../chunks/cryptoPage-37f78f14.js";
import "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Row-089822f8.js";
import "../../../../chunks/ltc-734c3a3e.js";
import "../../../../chunks/dash-a9bce606.js";
import "../../../../chunks/aave-961ba45c.js";
import "../../../../chunks/eth-105a4f91.js";
import "../../../../chunks/ark-1864eee7.js";
import "../../../../chunks/dot-814d6ec7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-8-ebcd4c34.js";
const Apps_crypto_orders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ordeType = [
    {
      value: "Select Type",
      label: "Select Type"
    },
    { value: "Buy", label: "Buy" },
    { value: "Sell", label: "Sell" }
  ];
  const ordeStatus = [
    {
      value: "Select Status",
      label: "Select Status"
    },
    { value: "Successful", label: "Successful" },
    { value: "Cancelled", label: "Cancelled" },
    { value: "Pending", label: "Pending" }
  ];
  const data = MOCK_DATA.CryptoOrders;
  const columns = [
    { id: "time", hidden: true },
    {
      name: "Date",
      id: "date",
      formatter: (cell, row) => html(`${cell} <small class="text-muted">${row.cells[0].data}</small>`)
    },
    { id: "coinName", hidden: true },
    {
      name: "Name",
      id: "img",
      formatter: (cell, row) => html(`<div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src=${cell} alt="" class="avatar-xxs" />
                        </div>
                        <a href="#!" class="currency_name flex-grow-1 ms-2">${row.cells[2].data}</a>
                    </div>`)
    },
    {
      name: "Type",
      id: "type",
      formatter: (cell) => {
        {
          if (cell == "Buy") {
            return html(`<span class="type text-success">${cell}</span>`);
          } else {
            return html(`<span class="type text-danger">${cell}</span>`);
          }
        }
      }
    },
    { id: "quantity", name: "Quantity" },
    { id: "orderValue", name: "Order Value" },
    { id: "avgPrice", name: "Avg Price" },
    { id: "price", name: "Price" },
    {
      id: "status",
      name: "Status",
      formatter: (cell) => {
        if (cell == "Pending") {
          return html(`<span class="badge badge-soft-warning text-uppercase">${cell}</span>`);
        } else if (cell == "Successful") {
          return html(`<span class="badge badge-soft-success text-uppercase">${cell}</span>`);
        } else if (cell == "Cancelled") {
          return html(`<span class="badge badge-soft-danger text-uppercase">${cell}</span>`);
        } else {
          return null;
        }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Orders | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Orders", pageTitle: "Crypto" }, {}, {})}

		<div class="${"row"}" id="${"contactList"}"><div class="${"col-lg-12"}"><div class="${"card"}"><div class="${"card-header d-flex align-items-center border-0"}"><h5 class="${"card-title mb-0 flex-grow-1"}">All Orders</h5>
						<div class="${"flex-shrink-0"}"><div class="${"flax-shrink-0 hstack gap-2"}"><button class="${"btn btn-primary"}">Today&#39;s Orders</button>
								<button class="${"btn btn-soft-info"}">Past Orders</button></div></div></div>
					<div class="${"card-body border border-dashed border-end-0 border-start-0"}"><div class="${"row g-2"}"><div class="${"col-xl-4 col-md-6"}"><div class="${"search-box"}"><input type="${"text"}" class="${"form-control search"}" placeholder="${"Search to orders..."}">
									<i class="${"ri-search-line search-icon"}"></i></div></div>
							
							<div class="${"col-xl-3 col-md-6"}"><div class="${"input-group"}"><span class="${"input-group-text"}" id="${"basic-addon1"}"><i class="${"ri-calendar-2-line"}"></i></span>
									${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
        class: "form-control",
        options: { dateFormat: "d M, Y" },
        placeholder: "Selact Date"
      }, {}, {})}</div></div>
							
							<div class="${"col-xl-2 col-md-4"}"><div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
        class: "form-control",
        id: "choices-single-default",
        placeholder: "Select Type",
        items: ordeType
      }, {}, {})}</div></div>
							
							<div class="${"col-xl-2 col-md-4"}"><div class="${"select-single"}">${validate_component(Select, "Select").$$render($$result, {
        class: "form-control",
        id: "choices-single-default2",
        placeholder: "Select Status",
        items: ordeStatus
      }, {}, {})}</div></div>
							
							<div class="${"col-xl-1 col-md-4"}"><button class="${"btn btn-success w-100"}">Filters</button></div></div>
						</div>
					<div class="${"card-body"}"><div class="${"table-responsive table-card gridjs-border-none"}">${MOCK_DATA.CryptoOrders.length > 0 ? `${validate_component(Gridjs, "Grid").$$render($$result, {
        data,
        columns,
        pagination: { enabled: true, limit: 10 }
      }, {}, {})}` : `<div class="${"noresult"}" style="${"display: none"}"><div class="${"text-center"}"><lord-icon src="${"//cdn.lordicon.com/msoeawqm.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width:75px;height:75px"}"></lord-icon>
										<h5 class="${"mt-2"}">Sorry! No Result Found
										</h5>
										<p class="${"text-muted mb-0"}">We&#39;ve searched more than 150+ orders
											We did not find any orders for you
											search.
										</p></div></div>`}</div></div></div>
				</div>
			</div>`;
    }
  })}</div>`;
});
export { Apps_crypto_orders as default };
