import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { b as btc, l as ltc } from "../../../../chunks/ltc-734c3a3e.js";
import { x as xmr, f as fil, d as dot } from "../../../../chunks/dot-814d6ec7.js";
const RecentTransaction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"card-title mb-0"}">Recent Transaction</h5>`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", btc, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
            <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bitcoin (BTC)</h6>
                <p class="${"text-muted mb-0"}">Today</p></div>
            <div><h6 class="${"text-danger mb-0"}">- $422.89</h6></div></div>
        <div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", ltc, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
            <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Litecoin (LTC)</h6>
                <p class="${"text-muted mb-0"}">Yesterday</p></div>
            <div><h6 class="${"text-success mb-0"}">+ $784.20</h6></div></div>
        <div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", xmr, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
            <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monero (XMR)</h6>
                <p class="${"text-muted mb-0"}">01 Jan, 2022</p></div>
            <div><h6 class="${"text-danger mb-0"}">- $356.74</h6></div></div>
        <div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", fil, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
            <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Filecoin (FIL)</h6>
                <p class="${"text-muted mb-0"}">30 Dec, 2021</p></div>
            <div><h6 class="${"text-success mb-0"}">+ $1,247.00</h6></div></div>
        <div class="${"d-flex mb-3"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", dot, 0)} alt="${""}" class="${"avatar-xxs"}"></div>
            <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Polkadot (DOT)</h6>
                <p class="${"text-muted mb-0"}">27 Dec, 2021</p></div>
            <div><h6 class="${"text-success btn mb-0"}">+ $7,365.80</h6></div></div>
        <div><a href="${"/crypto/transaction/apps-crypto-transactions"}" class="${"btn btn-soft-info w-100"}">View All Transactions <i class="${"ri-arrow-right-line align-bottom"}"></i></a></div>`;
        }
      })}`;
    }
  })}`;
});
export { RecentTransaction as default };
