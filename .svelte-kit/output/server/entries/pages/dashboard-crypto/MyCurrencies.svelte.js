import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../chunks/crypto-26d55d11.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/ltc-734c3a3e.js";
import "../../../chunks/usdt-bb1667f7.js";
import "../../../chunks/dash-a9bce606.js";
import "../../../chunks/aave-961ba45c.js";
import "../../../chunks/eth-105a4f91.js";
import "../../../chunks/doge-aae7bd6c.js";
import "../../../chunks/img-1-6a9b26f3.js";
import "../../../chunks/img-2-d003c89a.js";
import "../../../chunks/img-3-4c804a8b.js";
import "../../../chunks/img-6-3ccff08f.js";
const MyCurrencies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">My Currencies</h4>
			<div class="${"flex-shrink-0"}"><button class="${"btn btn-soft-info btn-sm"}">24H</button></div>
			<div class="${"flex-shrink-0 ms-2"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {
                class: "card-header-dropdown dropdown-menu-end"
              }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    class: "btn btn-soft-primary btn-sm",
                    color: "",
                    role: "button",
                    tag: "a"
                  }, {}, {
                    default: () => {
                      return `Get Report<i class="${"mdi mdi-chevron-down align-middle ms-1"}"></i>`;
                    }
                  })}
					${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                    class: "dropdown-menu dropdown-menu-end",
                    end: true
                  }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Download Report`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Export`;
                        }
                      })}
						${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `Import`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}
		<div class="${"card-body"}"><div class="${"table-responsive table-card"}"><table class="${"table table-hover table-borderless table-centered align-middle table-nowrap mb-0"}"><thead class="${"text-muted bg-soft-light"}"><tr><th>Coin Name</th>
							<th>Price</th>
							<th>24h Change</th>
							<th>Total Balance</th>
							<th>Total Coin</th>
							<th>Actions</th></tr></thead>
					<tbody>${each(MOCK_DATA.currencies, (item) => {
            return `<tr><td><div class="${"d-flex align-items-center"}"><div class="${"me-2"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
										<div><h6 class="${"fs-14 mb-0"}">${escape(item.coinName)}</h6></div>
									</div></td>
								<td>$${escape(item.price)}</td>
								<td><h6${add_attribute("class", "fs-13 mb-0 text-" + item.iconClass, 0)}><i${add_attribute("class", "align-middle me-1 " + item.icon, 0)}></i>${escape(item.change)}
									</h6></td>
								<td>$${escape(item.balance)}</td>
								<td>${escape(item.totalCoin)}</td>
								<td><a href="${"/crypto/buysell/apps-crypto-buy-sell"}" class="${"btn btn-sm btn-soft-primary"}">Trade</a></td>
							</tr>`;
          })}</tbody></table></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { MyCurrencies as default };
