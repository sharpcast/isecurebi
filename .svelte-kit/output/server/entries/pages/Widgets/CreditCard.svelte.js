import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
const CreditCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
        default: () => {
          return `<h5 class="${"text-decoration-underline mb-3 mt-2 pb-3"}">Credit Card</h5>`;
        }
      })}`;
    }
  })}  

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
            default: () => {
              return `<div class="${"card-header"}"><h5 class="${"card-title mb-0"}">Credit Card - Custom</h5></div>
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"mx-auto"}" style="${"max-width: 350px"}"><div class="${"text-bg-info bg-gradient p-4 rounded-3 mb-3"}"><div class="${"d-flex"}"><div class="${"flex-grow-1"}"><i class="${"bx bx-chip h1 text-warning"}"></i></div>
                            <div class="${"flex-shrink-0"}"><i class="${"bx bxl-visa display-2 mt-n3"}"></i></div></div>
                        <div class="${"card-number fs-20"}" id="${"card-num-elem"}">XXXX XXXX XXXX XXXX
                        </div>

                        ${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                        default: () => {
                          return `<div><div class="${"text-white-50"}">Card Holder</div>
                                    <div id="${"card-holder-elem"}" class="${"fw-medium fs-14"}">Full Name</div></div>`;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                        default: () => {
                          return `<div class="${"expiry"}"><div class="${"text-white-50"}">Expires</div>
                                    <div class="${"fw-medium fs-14"}"><span id="${"expiry-month-elem"}">00</span>
                                        /
                                        <span id="${"expiry-year-elem"}">0000</span></div></div>`;
                        }
                      })}
                            ${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                        default: () => {
                          return `<div><div class="${"text-white-50"}">CVC</div>
                                    <div id="${"cvc-elem"}" class="${"fw-medium fs-14"}">---</div></div>`;
                        }
                      })}`;
                    }
                  })}</div></div>


                <form id="${"custom-card-form"}" autocomplete="${"off"}"><div class="${"mb-3"}"><label for="${"card-num-input"}" class="${"form-label"}">Card Number</label>
                        <input id="${"card-num-input"}" class="${"form-control"}" maxlength="${"19"}" placeholder="${"0000 0000 0000 0000"}"></div>

                    <div class="${"mb-3"}"><label for="${"card-holder-input"}" class="${"form-label"}">Card Holder</label>
                        <input type="${"text"}" class="${"form-control"}" id="${"card-holder-input"}" placeholder="${"Enter holder name"}"></div>

                    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"col-lg-4"}"><div><label for="${"expiry-month-input"}" class="${"form-label"}">Expiry Month</label>
                                <select class="${"form-select"}" id="${"expiry-month-input"}"><option value="${""}"></option><option value="${"01"}">01</option><option value="${"02"}">02</option><option value="${"03"}">03</option><option value="${"04"}">04</option><option value="${"05"}">05</option><option value="${"06"}">06</option><option value="${"07"}">07</option><option value="${"08"}">08</option><option value="${"09"}">09</option><option value="${"10"}">10</option><option value="${"11"}">11</option><option value="${"12"}">12</option></select></div></div>
                        

                        <div class="${"col-lg-4"}"><div><label for="${"expiry-year-input"}" class="${"form-label"}">Expiry Year</label>
                                <select class="${"form-select"}" id="${"expiry-year-input"}"><option value="${""}"></option><option value="${"2020"}">2020</option><option value="${"2021"}">2021</option><option value="${"2022"}">2022</option><option value="${"2023"}">2023</option><option value="${"2024"}">2024</option><option value="${"2025"}">2025</option><option value="${"2026"}">2026</option><option value="${"2027"}">2027</option><option value="${"2028"}">2028</option><option value="${"2029"}">2029</option><option value="${"2030"}">2030</option></select></div></div>
                        

                        <div class="${"col-lg-4"}"><div class="${"cvc"}"><label for="${"cvc-input"}" class="${"form-label"}">CVC</label>
                                <input type="${"text"}" id="${"cvc-input"}" class="${"form-control"}" maxlength="${"3"}"></div></div>`;
                    }
                  })}

                    <button class="${"btn btn-danger w-100 mt-3"}" type="${"submit"}">Pay Now</button></form>`;
                }
              })}`;
            }
          })}`;
        }
      })}
    
    <div class="${"col-xl-4"}"><div class="${"card"}"><div class="${"card-header"}"><h5 class="${"card-title mb-0"}">Credit Card - card js plugin</h5></div>
            <div class="${"card-body"}"><div class="${"card-wrapper mb-3"}"></div>

                <div class="${"form-container active"}"><form action="${""}" id="${"card-form-elem"}" autocomplete="${"off"}"><div class="${"mb-3"}"><label for="${"card-number-input"}" class="${"form-label"}">Card Number</label>
                            <input class="${"form-control"}" placeholder="${"Card number"}" type="${"tel"}" id="${"card-number-input"}"></div>
                        <div class="${"mb-3"}"><label for="${"card-name-input"}" class="${"form-label"}">Card Holder</label>
                            <input class="${"form-control"}" placeholder="${"Full name"}" type="${"text"}" id="${"card-name-input"}"></div>
                        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div class="${"mb-3"}"><label for="${"card-expiry-input"}" class="${"form-label"}">Expiry</label>
                                    <input class="${"form-control"}" placeholder="${"MM/YY"}" type="${"tel"}" id="${"card-expiry-input"}"></div>`;
            }
          })}
                            ${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div class="${"mb-3"}"><label for="${"card-cvc-input"}" class="${"form-label"}">CVC</label>
                                    <input class="${"form-control"}" placeholder="${"CVC"}" type="${"number"}" id="${"card-cvc-input"}"></div>`;
            }
          })}`;
        }
      })}
                        <button class="${"btn btn-danger w-100"}" type="${"submit"}">Pay Now</button></form></div></div></div></div>`;
    }
  })}`;
});
export { CreditCard as default };
