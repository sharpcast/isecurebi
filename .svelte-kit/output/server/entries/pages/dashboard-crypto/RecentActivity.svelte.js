import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { A as ArrowDownCircleIcon, S as SendIcon, a as ArrowUpCircleIcon } from "../../../chunks/SendIcon-e4767035.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const RecentActivity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, lg: 5 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
            class: "card-header align-items-center d-flex"
          }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Recent Activity</h4>
			<div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"fw-semibold text-uppercase fs-12"}">Sort by: </span><span class="${"text-muted"}">Current Week<i class="${"mdi mdi-chevron-down ms-1"}"></i></span>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end", end: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Today`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Week`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Last Month`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Current Year`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
            default: () => {
              return `<div data-simplebar style="${"height: 390px;"}"><div class="${"p-3"}"><h6 class="${"text-muted text-uppercase mb-3 fs-11"}">25 Dec 2021</h6>
					<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(ArrowDownCircleIcon, "ArrowDownCircleIcon").$$render($$result, { class: "icon-dual-success icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Bought Bitcoin</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-success fs-15 align-middle"}"></i>
								Visa Debit Card ***6
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-success"}">+0.04025745<span class="${"text-uppercase ms-1"}">Btc</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">+878.52 USD</p></div></div>
					<div class="${"d-flex align-items-center mt-3"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(SendIcon, "SendIcon").$$render($$result, { class: "icon-dual-warning icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Sent Eathereum</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-warning fs-15 align-middle"}"></i>
								Sofia Cunha
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-muted"}">-0.09025182<span class="${"text-uppercase ms-1"}">Eth</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">-659.35 USD</p></div></div>

					<h6 class="${"text-muted text-uppercase mb-3 mt-4 fs-11"}">24 Dec 2021</h6>
					<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(ArrowUpCircleIcon, "ArrowUpCircleIcon").$$render($$result, { class: "icon-dual-danger icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Sell Dash</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-danger fs-15 align-middle"}"></i>
								www.cryptomarket.com
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-danger"}">-98.6025422<span class="${"text-uppercase ms-1"}">Dash</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">-1508.98 USD</p></div></div>
					<div class="${"d-flex align-items-center mt-3"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(ArrowUpCircleIcon, "ArrowUpCircleIcon").$$render($$result, { class: "icon-dual-danger icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Sell Dogecoin</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-success fs-15 align-middle"}"></i>
								www.coinmarket.com
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-danger"}">-1058.08025142<span class="${"text-uppercase ms-1"}">Doge</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">-89.36 USD</p></div></div>
					<div class="${"d-flex align-items-center mt-3"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(ArrowUpCircleIcon, "ArrowUpCircleIcon").$$render($$result, { class: "icon-dual-success icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Bought Litecoin</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-warning fs-15 align-middle"}"></i>
								Payment via Wallet
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-success"}">+0.07225912<span class="${"text-uppercase ms-1"}">Ltc</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">+759.45 USD</p></div></div>

					<h6 class="${"text-muted text-uppercase mb-3 mt-4 fs-11"}">20 Dec 2021</h6>
					<div class="${"d-flex align-items-center"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(SendIcon, "SendIcon").$$render($$result, { class: "icon-dual-warning icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Sent Eathereum</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-warning fs-15 align-middle"}"></i>
								Sofia Cunha
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-muted"}">-0.09025182<span class="${"text-uppercase ms-1"}">Eth</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">-659.35 USD</p></div></div>

					<div class="${"d-flex align-items-center mt-3"}"><div class="${"avatar-xs flex-shrink-0"}"><span class="${"avatar-title bg-light rounded-circle"}">${validate_component(ArrowDownCircleIcon, "ArrowDownCircleIcon").$$render($$result, { class: "icon-dual-success icon-sm" }, {}, {})}</span></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-14 mb-1"}">Bought Bitcoin</h6>
							<p class="${"text-muted fs-12 mb-0"}"><i class="${"mdi mdi-circle-medium text-success fs-15 align-middle"}"></i>
								Visa Debit Card ***6
							</p></div>
						<div class="${"flex-shrink-0 text-end"}"><h6 class="${"mb-1 text-success"}">+0.04025745<span class="${"text-uppercase ms-1"}">Btc</span></h6>
							<p class="${"text-muted fs-13 mb-0"}">+878.52 USD</p></div></div>

					<div class="${"mt-3 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">Load More</a></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { RecentActivity as default };
