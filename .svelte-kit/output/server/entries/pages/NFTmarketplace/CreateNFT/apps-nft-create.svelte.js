import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
const Apps_nft_create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Create NFT | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Create NFT",
        pageTitle: "NFT Marketplace"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Create New File</h5>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<h5 class="${"fw-semibold mb-3"}">Image, Video, Audio, or 3D Model</h5>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    htmlfor: "productName",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Product Name`;
                                    }
                                  })}
                                    <input type="${"text"}" class="${"form-control"}" id="${"productName"}" placeholder="${"Enter product name"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    htmlfor: "discription",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Discription`;
                                    }
                                  })}
                                    <textarea class="${"form-control"}" id="${"discription"}" rows="${"3"}" placeholder="${"Enter discription"}"></textarea>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    htmlfor: "externalLink",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `External link`;
                                    }
                                  })}
                                    <input type="${"text"}" class="${"form-control"}" id="${"externalLink"}" placeholder="${"Enter external link"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    htmlfor: "itemPrice",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Item Price`;
                                    }
                                  })}
                                    <input type="${"text"}" class="${"form-control"}" id="${"itemPrice"}" placeholder="${"Price"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "size", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Size`;
                                    }
                                  })}
                                    <input type="${"text"}" class="${"form-control"}" id="${"size"}" placeholder="${"Size"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    htmlfor: "properties",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Properties`;
                                    }
                                  })}
                                    <input type="${"text"}" class="${"form-control"}" id="${"properties"}" placeholder="${"Properties"}">`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox1"}" value="${"option1"}">
                                            ${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    htmlfor: "inlineCheckbox1"
                                  }, {}, {
                                    default: () => {
                                      return `Put on sale`;
                                    }
                                  })}</div>
                                        <div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox2"}" value="${"option2"}">
                                            ${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    htmlfor: "inlineCheckbox2"
                                  }, {}, {
                                    default: () => {
                                      return `Instant sale price`;
                                    }
                                  })}</div>
                                        <div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox3"}" value="${"option3"}">
                                            ${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    htmlfor: "inlineCheckbox3"
                                  }, {}, {
                                    default: () => {
                                      return `Unlock one purchased`;
                                    }
                                  })}</div></div>`;
                                }
                              })}
                                ${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"text-end"}"><button class="${"btn btn-primary"}">Create Item</button></div>`;
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
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_nft_create as default };
