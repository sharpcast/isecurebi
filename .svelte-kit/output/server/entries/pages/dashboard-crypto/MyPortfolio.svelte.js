import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import PortfolioCharts from "./PortfolioCharts.svelte.js";
import { b as btc, l as ltc } from "../../../chunks/ltc-734c3a3e.js";
import { e as eth } from "../../../chunks/eth-105a4f91.js";
import { d as dash } from "../../../chunks/dash-a9bce606.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const MyPortfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-xxl-3"}"><div class="${"card card-height-100"}"><div class="${"card-header border-0 align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">My Portfolio</h4>
            <div>${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
        tag: "button",
        color: "",
        class: "btn btn-soft-primary btn-sm"
      }, {}, {
        default: () => {
          return `<span class="${"text-uppercase"}">Btc<i class="${"mdi mdi-chevron-down align-middle ms-1"}"></i></span>`;
        }
      })}
                    ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu dropdown-menu-end" }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `BTC`;
            }
          })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `USD`;
            }
          })}
                        ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Euro`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>
        <div class="${"card-body"}"><div id="${"portfolio_donut_charts"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(PortfolioCharts, "PortfolioCharts").$$render($$result, {
    dataColors: [
      "--vz-primary",
      "--vz-primary-rgb, 0.85",
      "--vz-primary-rgb, 0.65",
      "--vz-primary-rgb, 0.50"
    ]
  }, {}, {})}</div>

            <ul class="${"list-group list-group-flush border-dashed mb-0 mt-3 pt-2"}"><li class="${"list-group-item px-0"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><span class="${"avatar-title bg-light p-1 rounded-circle"}"><img${add_attribute("src", btc, 0)} class="${"img-fluid"}" alt="${""}"></span></div>
                        <div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">Bitcoin</h6>
                            <p class="${"fs-12 mb-0 text-muted"}"><i class="${"mdi mdi-circle fs-10 align-middle text-primary me-1"}"></i>BTC</p></div>
                        <div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1"}">BTC 0.00584875</h6>
                            <p class="${"text-success fs-12 mb-0"}">$19,405.12</p></div></div></li>
                <li class="${"list-group-item px-0"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><span class="${"avatar-title bg-light p-1 rounded-circle"}"><img${add_attribute("src", eth, 0)} class="${"img-fluid"}" alt="${""}"></span></div>
                        <div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">Ethereum</h6>
                            <p class="${"fs-12 mb-0 text-muted"}"><i class="${"mdi mdi-circle fs-10 align-middle text-info me-1"}"></i>ETH</p></div>
                        <div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1"}">ETH 2.25842108</h6>
                            <p class="${"text-danger fs-12 mb-0"}">$40552.18</p></div></div></li>
                <li class="${"list-group-item px-0"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><span class="${"avatar-title bg-light p-1 rounded-circle"}"><img${add_attribute("src", ltc, 0)} class="${"img-fluid"}" alt="${""}"></span></div>
                        <div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">Litecoin</h6>
                            <p class="${"fs-12 mb-0 text-muted"}"><i class="${"mdi mdi-circle fs-10 align-middle text-warning me-1"}"></i>LTC</p></div>
                        <div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1"}">LTC 10.58963217</h6>
                            <p class="${"text-success fs-12 mb-0"}">$15824.58</p></div></div></li>
                <li class="${"list-group-item px-0 pb-0"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><span class="${"avatar-title bg-light p-1 rounded-circle"}"><img${add_attribute("src", dash, 0)} class="${"img-fluid"}" alt="${""}"></span></div>
                        <div class="${"flex-grow-1 ms-2"}"><h6 class="${"mb-1"}">Dash</h6>
                            <p class="${"fs-12 mb-0 text-muted"}"><i class="${"mdi mdi-circle fs-10 align-middle text-success me-1"}"></i>DASH</p></div>
                        <div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1"}">DASH 204.28565885</h6>
                            <p class="${"text-success fs-12 mb-0"}">$30635.84</p></div></div></li></ul></div></div></div>`;
});
export { MyPortfolio as default };
