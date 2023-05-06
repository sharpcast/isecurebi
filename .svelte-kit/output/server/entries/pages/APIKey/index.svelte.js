import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { C as CDeleteModal } from "../../../chunks/CDeleteModal-5ffe0ce6.js";
import Widgets from "./Widgets.svelte.js";
import { html } from "gridjs";
import { G as Gridjs } from "../../../chunks/gridjs-2f6b3743.js";
import { S as SvelteWrapper } from "../../../chunks/plugins-351ed961.js";
import Actions from "./Actions.svelte.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/Progress-4a564725.js";
import "../../../chunks/counter-768545ac.js";
import "../../../chunks/AlertOctagonIcon-557990d9.js";
import "../../../chunks/CheckCircleIcon-2fcd72ab.js";
import "../../../chunks/DropdownMenu-36ba586e.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/DropdownToggle-396a8e94.js";
const apiKey = [
  {
    id: "1",
    name: "Streamlab",
    createBy: "Michael Morris",
    apikey: "fef67078-6fb6-4689-b342-6ddc24481728",
    status: "Disable",
    color: "danger",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "2",
    name: "Streamlab",
    createBy: "Zynthia Marrow",
    apikey: "ed4c0d11-7d49-4c94-aae8-83fafb226ee9",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "3",
    name: "Streamlab",
    createBy: "Philippa Santiago",
    apikey: "0b53e8e2-e53d-4067-8be0-9cddea19e45e",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "4",
    name: "Streamlab",
    createBy: "Elizabeth Allen",
    apikey: "b69ee258-1053-4e08-adbd-d37837f9c558",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "5",
    name: "Streamlab",
    createBy: "Cassian Jenning",
    apikey: "33ec3a35-8b44-48f3-ba68-f3ea1e9ef214",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "6",
    name: "Streamlab",
    createBy: "Harley Watkins",
    apikey: "84540348-f97d-41de-87c6-f5eae32aecc5",
    status: "Disable",
    color: "danger",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "7",
    name: "Streamlab",
    createBy: "Addison Black",
    apikey: "aecc1ede-f613-48d5-8140-7108b324f0bd",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "8",
    name: "Streamlab",
    createBy: "Nicki Butler",
    apikey: "8abba6e5-9622-46d2-8c52-c937e1d20ba2",
    status: "Active",
    color: "success",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  },
  {
    id: "9",
    name: "Streamlab",
    createBy: "Tara Hawkins",
    apikey: "9e6d336a-2f98-43e9-9fa6-11b4d5cdaf62",
    status: "Disable",
    color: "danger",
    create_date: "24 Sep 2022",
    expiry_date: "24 Jan 2023"
  }
];
const MOCK_DATA = {
  apiKey
};
const APIKey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var show = false;
  const handleClose = () => show = !show;
  let deleteModal = false;
  let deleteModalMulti = false;
  const data = MOCK_DATA.apiKey;
  const columns = [
    {
      name: "#",
      width: "40px",
      formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
    },
    { id: "name", name: "Name" },
    { id: "createBy", name: "Created By" },
    {
      id: "apikey",
      name: "API Key",
      formatter: (cell) => html(`<input type="text" class="form-control apikey-value" readonly="" value="${cell}">`)
    },
    { id: "color", name: "color", hidden: true },
    {
      id: "status",
      name: "Status",
      formatter: (cell, row) => {
        {
          if (cell == "Active") {
            return html(`<span class="badge badge-soft-${row.cells[4].data}">${cell}</span>`);
          } else if (cell == "Disable") {
            return html(`<span class="badge badge-soft-${row.cells[4].data}">${cell}</span>`);
          } else {
            return null;
          }
        }
      }
    },
    { id: "create_date", name: "Created Date" },
    { id: "expiry_date", name: "Expiry Date" },
    {
      name: "Action",
      plugin: {
        component: SvelteWrapper,
        props: { component: Actions }
      }
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>API Key | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(CDeleteModal, "DeleteModal").$$render($$result, {
    show: deleteModal,
    onCloseClick: () => deleteModal = !deleteModal
  }, {}, {})}
    ${validate_component(CDeleteModal, "DeleteModal").$$render($$result, {
    show: deleteModalMulti,
    onDeleteClick: () => {
      deleteModalMulti = false;
    },
    onCloseClick: () => deleteModalMulti = !deleteModalMulti
  }, {}, {})}
    ${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "API Key", pageTitle: "Apps" }, {}, {})}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { id: "apiKeyList" }, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "d-flex align-items-center" }, {}, {
                    default: () => {
                      return `<h5 class="${"card-title flex-grow-1 mb-0"}">API Keys</h5>
              <div class="${"d-flex gap-1 flex-wrap"}">${validate_component(Button, "Button").$$render($$result, {
                        type: "button",
                        color: "success",
                        class: "btn create-btn",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#api-key-modal"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-add-line align-bottom me-1"}"></i> Add API
                  Key
                `;
                        }
                      })}</div>`;
                    }
                  })}
            ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div><div class="${"table-card gridjs-border-none"}">${validate_component(Gridjs, "Grid").$$render($$result, {
                        data,
                        columns,
                        className: { th: "text-muted" },
                        pagination: { enabled: true, limit: 10 }
                      }, {}, {})}</div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>

  <div class="${"modal fade"}" id="${"api-key-modal"}" tabindex="${"-1"}" aria-labelledby="${"exampleModalLabel"}" aria-hidden="${"true"}"><div class="${"modal-dialog"}">${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: show,
    toggle: handleClose,
    class: "modal-content"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "modal-header" }, {}, {
        default: () => {
          return `Create API Key`;
        }
      })}
        ${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "modal-body" }, {}, {
        default: () => {
          return `<form autocomplete="${"off"}"><div id="${"api-key-error-msg"}" class="${"alert alert-danger py-2 d-none"}"></div>
            ${validate_component(Input, "Input").$$render($$result, { type: "hidden", id: "apikeyId" }, {}, {})}
            <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlFor: "api-key-name",
            class: "form-label"
          }, {}, {
            default: () => {
              return `API Key Name <span class="${"text-danger"}">*</span>`;
            }
          })}
              ${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "api-key-name",
            placeholder: "Enter api key name"
          }, {}, {})}</div>
            <div class="${"mb-3"}" id="${"apikey-element"}" style="${"display: none"}">${validate_component(Label, "Label").$$render($$result, { htmlFor: "api-key", class: "form-label" }, {}, {
            default: () => {
              return `API Key
              `;
            }
          })}
              ${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "api-key",
            disabled: true,
            value: "b5815DE8A7224438932eb296Z5"
          }, {}, {})}</div></form>`;
        }
      })}
        <div class="${"modal-footer"}"><div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, {
        type: "button",
        class: "btn btn-secondary",
        "data-bs-dismiss": "modal"
      }, {}, {
        default: () => {
          return `Close
            `;
        }
      })}
            ${validate_component(Button, "Button").$$render($$result, {
        type: "button",
        color: "primary",
        id: "createApi-btn"
      }, {}, {
        default: () => {
          return `Create API
            `;
        }
      })}</div></div>`;
    }
  })}</div></div>`;
});
export { APIKey as default };
