import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
const Plans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"plans"}"><div class="${"bg-overlay bg-overlay-pattern"}"></div>
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h3 class="${"mb-3 fw-semibold"}">Choose the plan that&#39;s right for you</h3>
                    <p class="${"text-muted mb-4"}">Simple pricing. No hidden fees. Advanced features for you
                        business.</p>

                    <div class="${"d-flex justify-content-center align-items-center"}"><div><h5 class="${"fs-14 mb-0"}">Month</h5></div>
                        <div class="${"form-check form-switch fs-20 ms-3 "}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"plan-switch"}">
                            ${validate_component(Label, "Label").$$render($$result, {
                class: "form-check-label",
                htmlfor: "plan-switch"
              }, {}, {})}</div>
                        <div><h5 class="${"fs-14 mb-0"}">Annual <span class="${"badge badge-soft-success"}">Save 20%</span></h5></div></div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "gy-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "plan-box mb-0" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 m-2" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-1 fw-semibold"}">Basic Plan</h5>
                                <p class="${"text-muted mb-0"}">For Startup</p></div>
                            <div class="${"avatar-sm"}"><div class="${"avatar-title bg-light rounded-circle text-primary"}"><i class="${"ri-book-mark-line fs-20"}"></i></div></div></div>
                        <div class="${"py-4 text-center"}">${`<h1 class="${"month"}"><sup><small>$</small></sup><span class="${"ff-secondary fw-bold"}">19</span> <span class="${"fs-13 text-muted"}">/Month</span></h1>`}</div>

                        <div><ul class="${"list-unstyled text-muted vstack gap-3 ff-secondary"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Upto <b>3</b> Projects
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Upto <b>299</b> Customers
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Scalable Bandwidth
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>5</b> FTP Login
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-danger me-1"}"><i class="${"ri-close-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>24/7</b> Support
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-danger me-1"}"><i class="${"ri-close-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Storage
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-danger me-1"}"><i class="${"ri-close-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Domain
                                        </div></div></li></ul>
                            <div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "btn btn-soft-success w-100"
                      }, {}, {
                        default: () => {
                          return `Get
                                    Started`;
                        }
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "plan-box mb-0 ribbon-box right" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 m-2" }, {}, {
                    default: () => {
                      return `<div class="${"ribbon-two ribbon-two-danger"}"><span>Popular</span></div>
                        <div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-1 fw-semibold"}">Pro Business</h5>
                                <p class="${"text-muted mb-0"}">Professional plans</p></div>
                            <div class="${"avatar-sm"}"><div class="${"avatar-title bg-light rounded-circle text-primary"}"><i class="${"ri-medal-fill fs-20"}"></i></div></div></div>
                        <div class="${"py-4 text-center"}">${`<h1 class="${"month"}"><sup><small>$</small></sup><span class="${"ff-secondary fw-bold"}">29</span> <span class="${"fs-13 text-muted"}">/Month</span></h1>`}</div>

                        <div><ul class="${"list-unstyled text-muted vstack gap-3 ff-secondary"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Upto <b>15</b> Projects
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Customers
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Scalable Bandwidth
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>12</b> FTP Login
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>24/7</b> Support
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-danger me-1"}"><i class="${"ri-close-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Storage
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-danger me-1"}"><i class="${"ri-close-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Domain
                                        </div></div></li></ul>
                            <div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "btn btn-soft-success w-100"
                      }, {}, {
                        default: () => {
                          return `Get
                                    Started`;
                        }
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "plan-box mb-0" }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 m-2" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><h5 class="${"mb-1 fw-semibold"}">Platinum Plan</h5>
                                <p class="${"text-muted mb-0"}">Enterprise Businesses</p></div>
                            <div class="${"avatar-sm"}"><div class="${"avatar-title bg-light rounded-circle text-primary"}"><i class="${"ri-stack-fill fs-20"}"></i></div></div></div>
                        <div class="${"py-4 text-center"}">${`<h1 class="${"month"}"><sup><small>$</small></sup><span class="${"ff-secondary fw-bold"}">39</span> <span class="${"fs-13 text-muted"}">/Month</span></h1>`}</div>

                        <div><ul class="${"list-unstyled text-muted vstack gap-3 ff-secondary"}"><li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Projects
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Customers
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Scalable Bandwidth
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> FTP Login
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>24/7</b> Support
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}"><b>Unlimited</b> Storage
                                        </div></div></li>
                                <li><div class="${"d-flex"}"><div class="${"flex-shrink-0 text-success me-1"}"><i class="${"ri-checkbox-circle-fill fs-15 align-middle"}"></i></div>
                                        <div class="${"flex-grow-1"}">Domain
                                        </div></div></li></ul>
                            <div class="${"mt-4"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        class: "btn btn-soft-success w-100"
                      }, {}, {
                        default: () => {
                          return `Get
                                    Started`;
                        }
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Plans as default };
