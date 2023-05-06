import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
const Select2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sortbyname = [
    { label: "Alabama", value: "AL" },
    { label: "Madrid", value: "MA" },
    { label: "Toronto", value: "TO" },
    { label: "Londan", value: "LO" },
    { label: "Wyoming", value: "WY" }
  ];
  const sortbyMulti = [
    {
      label: "London",
      value: "London",
      group: "UK"
    },
    {
      label: "Manchester",
      value: "Manchester",
      group: "UK"
    },
    {
      label: "Liverpool",
      value: "Liverpool",
      group: "UK"
    },
    {
      label: "Paris",
      value: "Paris",
      group: "FR"
    },
    {
      label: "Lyon",
      value: "Lyon",
      group: "FR"
    },
    {
      label: "Marseille",
      value: "Marseille",
      group: "FR"
    },
    {
      label: "Madrid",
      value: "Madrid",
      group: "SP"
    },
    {
      label: "Barcelona",
      value: "Barcelona",
      group: "SP"
    },
    {
      label: "Malaga",
      value: "Malaga",
      group: "SP"
    },
    {
      label: "Montreal",
      value: "Montreal",
      group: "CA"
    },
    {
      label: "Toronto",
      value: "Toronto",
      group: "CA"
    },
    {
      label: "Vancouver",
      value: "Vancouver",
      group: "CA"
    }
  ];
  const ajaxSelectOption = [
    {
      label: "enhancement",
      value: "enhancement"
    },
    { label: "bug", value: "bug" },
    { label: "duplicate", value: "duplicate" },
    { label: "invalid", value: "invalid" },
    { label: "wontfix", value: "wontfix" }
  ];
  const tempOption = [
    {
      label: "Alaska",
      value: "AK",
      group: "Alaskan/Hawaiian Time Zone"
    },
    {
      label: "Hawaii",
      value: "HI",
      group: "Alaskan/Hawaiian Time Zone"
    },
    {
      label: "California",
      value: "CA",
      group: "Pacific Time Zone"
    },
    {
      label: "Nevada",
      value: "NV",
      group: "Pacific Time Zone"
    },
    {
      label: "Oregon",
      value: "OR",
      group: "Pacific Time Zone"
    },
    {
      label: "Washington",
      value: "WA",
      group: "Pacific Time Zone"
    }
  ];
  const selTempOption = [
    {
      label: "Alaska",
      value: "AK",
      group: "Alaskan/Hawaiian Time Zone"
    },
    {
      label: "Hawaii",
      value: "HI",
      group: "Alaskan/Hawaiian Time Zone"
    },
    {
      label: "California",
      value: "CA",
      group: "Pacific Time Zone"
    },
    {
      label: "Nevada",
      value: "NV",
      group: "Pacific Time Zone"
    },
    {
      label: "Oregon",
      value: "OR",
      group: "Pacific Time Zone"
    },
    {
      label: "Washington",
      value: "WA",
      group: "Pacific Time Zone"
    }
  ];
  const dissortbyname = [
    { label: "Alabama", value: "AL" },
    { label: "Madrid", value: "MA" },
    { label: "Toronto", value: "TO" },
    { label: "Londan", value: "LO" },
    { label: "Wyoming", value: "WY" }
  ];
  const dissortbyMulti = [
    {
      label: "London",
      value: "London",
      group: "UK"
    },
    {
      label: "Manchester",
      value: "Manchester",
      group: "UK"
    },
    {
      label: "Liverpool",
      value: "Liverpool",
      group: "UK"
    },
    {
      label: "Paris",
      value: "Paris",
      group: "FR"
    },
    {
      label: "Lyon",
      value: "Lyon",
      group: "FR"
    },
    {
      label: "Marseille",
      value: "Marseille",
      group: "FR"
    },
    {
      label: "Madrid",
      value: "Madrid",
      group: "SP"
    },
    {
      label: "Barcelona",
      value: "Barcelona",
      group: "SP"
    },
    {
      label: "Malaga",
      value: "Malaga",
      group: "SP"
    },
    {
      label: "Montreal",
      value: "Montreal",
      group: "CA"
    },
    {
      label: "Toronto",
      value: "Toronto",
      group: "CA"
    },
    {
      label: "Vancouver",
      value: "Vancouver",
      group: "CA"
    }
  ];
  let disable = false;
  return `${$$result.head += `${$$result.title = `<title>Select2 | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Select2", pageTitle: "Forms" }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Basic Select2</h5>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>js-example-basic-single</code>, <code>js-example-basic-multiple</code>, <code>js-example-data-array</code>, <code>js-example-templating</code>, <code>select-flag-templating</code>,  class to show select2 example.</p>
                        ${validate_component(Row, "Row").$$render($$result, { class: "g-4" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<h6 class="${"fw-semibold"}">Basic Select</h6>
                                ${validate_component(Select, "Select").$$render($$result, {
                                items: sortbyname,
                                id: "choices-single-default",
                                class: "js-example-basic-single mb-0",
                                name: "state"
                              }, {}, {})}`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<h6 class="${"fw-semibold"}">Multi Select</h6>

                                ${validate_component(Select, "Select").$$render($$result, { isMulti: true, items: sortbyMulti }, {}, {})}`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<h6 class="${"fw-semibold"}">Ajax Select</h6>

                                ${validate_component(Select, "Select").$$render($$result, { items: ajaxSelectOption, isLoading: true }, {}, {})}`;
                            }
                          })}

                            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<h6 class="${"fw-semibold"}">Templating</h6>

                                ${validate_component(Select, "Select").$$render($$result, {
                                items: tempOption,
                                id: "choices-single-default",
                                class: "js-example-templating mb-0"
                              }, {}, {})}`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<h6 class="${"fw-semibold"}">Selections Templating</h6>

                                ${validate_component(Select, "Select").$$render($$result, {
                                items: selTempOption,
                                id: "choices-single-default",
                                class: "select-flag-templating mb-0"
                              }, {}, {})}`;
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
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-0"}">Disabling a Select2 Control</h5>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Select2 will respond to the disabled attribute on <code>&lt;select&gt;</code> elements. You can also initialize Select2 with disabled: true to get the same effect.</p>
                        <div class="${"vstack gap-3"}">${validate_component(Select, "Select").$$render($$result, {
                        items: dissortbyname,
                        class: "js-example-disabled mb-0",
                        isDisabled: disable
                      }, {}, {})}

                            ${validate_component(Select, "Select").$$render($$result, {
                        isMulti: true,
                        items: dissortbyMulti,
                        isDisabled: disable
                      }, {}, {})}</div>
                        <div class="${"hstack gap-2 mt-3"}"><button type="${"button"}" class="${"js-programmatic-enable btn btn-primary"}">Enable
                            </button>
                            <button type="${"button"}" class="${"js-programmatic-disable btn btn-success"}">Disable
                            </button></div>`;
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
export { Select2 as default };
