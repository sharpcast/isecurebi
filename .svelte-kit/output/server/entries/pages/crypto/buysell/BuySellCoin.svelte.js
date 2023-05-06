import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../../chunks/TabPane-b01382c8.js";
import "../../../../chunks/index-bddc6f42.js";
const BuySellCoin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Nav, "Nav").$$render($$result, {
                class: "nav-tabs-custom rounded card-header-tabs nav-justified border-bottom-0 mx-n3",
                role: "tablist"
              }, {}, {
                default: () => {
                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 1 }, {}, {
                        default: () => {
                          return `Buy`;
                        }
                      })}`;
                    }
                  })}
                ${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(NavLink, "NavLink").$$render($$result, { active: activeTab == 2 }, {}, {
                        default: () => {
                          return `Sell`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
        ${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0" }, {}, {
            default: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "text-muted" }, {}, {
                default: () => {
                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                    tabId: 1,
                    class: "active"
                  }, {}, {
                    default: () => {
                      return `<div class="${"p-3 bg-soft-warning"}"><div class="${"float-end ms-2"}"><h6 class="${"text-warning mb-0"}">USD Balance : <span class="${"text-dark"}">$12,426.07</span></h6></div>
                        <h6 class="${"mb-0 text-danger"}">Buy Coin</h6></div>
                    <div class="${"p-3"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { "xs-": 6 }, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Currency :`;
                                }
                              })}
                                    <select class="${"form-select"}"><option value="${"BTC"}">BTC</option><option value="${"ETH"}">ETH</option><option value="${"LTC"}">LTC</option></select></div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { "xs-": 6 }, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Payment Method :`;
                                }
                              })}
                                    <select class="${"form-select"}"><option value="${"Wallet Balance"}">Wallet Balance</option><option value="${"Credit / Debit Card"}">Credit / Debit Card</option><option value="${"PayPal"}">PayPal</option><option value="${"Payoneer"}">Payoneer</option></select></div>`;
                            }
                          })}`;
                        }
                      })}
                        <div><div class="${"input-group mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Amount`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "0"
                      }, {}, {})}</div>

                            <div class="${"input-group mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Price`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "2.045585"
                      }, {}, {})}
                                ${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `$`;
                        }
                      })}</div>

                            <div class="${"input-group mb-0"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Total`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "2700.16"
                      }, {}, {})}</div></div>
                        <div class="${"mt-3 pt-2"}"><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Transaction Fees<span class="${"text-muted ms-1 fs-11"}">(0.05%)</span></p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">$1.08</h6></div></div>
                            <div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Minimum Received<span class="${"text-muted ms-1 fs-11"}">(2%)</span></p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">$7.85</h6></div></div>
                            <div class="${"d-flex"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Estimated Rate</p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">1 BTC ~ $46982.70</h6></div></div></div>
                        <div class="${"mt-3 pt-2"}"><button type="${"button"}" class="${"btn btn-primary w-100"}">Buy Coin</button></div></div>`;
                    }
                  })}

                ${validate_component(TabPane, "TabPane").$$render($$result, {
                    tabId: 2,
                    class: ""
                  }, {}, {
                    default: () => {
                      return `<div class="${"p-3 bg-soft-warning"}"><div class="${"float-end ms-2"}"><h6 class="${"text-warning mb-0"}">USD Balance : <span class="${"text-dark"}">$12,426.07</span></h6></div>
                        <h6 class="${"mb-0 text-danger"}">Sell Coin</h6></div>
                    <div class="${"p-3"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { "xs-": 6 }, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Currency :`;
                                }
                              })}
                                    <select class="${"form-select"}"><option value="${"BTC"}">BTC</option><option value="${"ETH"}">ETH</option><option value="${"LTC"}">LTC</option></select></div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { "xs-": 6 }, {}, {
                            default: () => {
                              return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Email :`;
                                }
                              })}
                                    ${validate_component(Input, "Input").$$render($$result, {
                                type: "email",
                                class: "form-control",
                                placeholder: "example@email.com"
                              }, {}, {})}</div>`;
                            }
                          })}`;
                        }
                      })}
                        <div><div class="${"input-group mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Amount`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "0"
                      }, {}, {})}</div>
                            <div class="${"input-group mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Price`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "2.045585"
                      }, {}, {})}
                                ${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `$`;
                        }
                      })}</div>
                            <div class="${"input-group mb-0"}">${validate_component(Label, "Label").$$render($$result, { class: "input-group-text" }, {}, {
                        default: () => {
                          return `Total`;
                        }
                      })}
                                ${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        placeholder: "2700.16"
                      }, {}, {})}</div></div>
                        <div class="${"mt-3 pt-2"}"><div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Transaction Fees<span class="${"text-muted ms-1 fs-11"}">(0.05%)</span></p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">$1.08</h6></div></div>
                            <div class="${"d-flex mb-2"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Minimum Received<span class="${"text-muted ms-1 fs-11"}">(2%)</span></p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">$7.85</h6></div></div>
                            <div class="${"d-flex"}"><div class="${"flex-grow-1"}"><p class="${"fs-13 mb-0"}">Estimated Rate</p></div>
                                <div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">1 BTC ~ $34572.00</h6></div></div></div>
                        <div class="${"mt-3 pt-2"}"><button type="${"button"}" class="${"btn btn-danger w-100"}">Sell Coin</button></div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { BuySellCoin as default };
