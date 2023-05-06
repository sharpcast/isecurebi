import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import UsersByDeviceCharts from "./UsersByDeviceCharts.svelte.js";
import { U as UsersIcon } from "../../../chunks/UsersIcon-1eab5089.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
const UsersByDevice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "align-items-center d-flex" }, {}, {
            default: () => {
              return `<h4 class="${"card-title mb-0 flex-grow-1"}">Users by Device</h4>
            <div class="${"flex-shrink-0"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "card-header-dropdown" }, {}, {
                default: () => {
                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                    tag: "a",
                    class: "text-reset dropdown-btn p-0",
                    color: "",
                    role: "button"
                  }, {}, {
                    default: () => {
                      return `<span class="${"text-muted fs-16"}"><i class="${"mdi mdi-dots-vertical align-middle"}"></i></span>`;
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
        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div dir="${"ltr"}">${validate_component(UsersByDeviceCharts, "UsersByDeviceCharts").$$render($$result, {
                dataColors: ["--vz-primary", "--vz-warning", "--vz-info"]
              }, {}, {})}</div>

            <div class="${"table-responsive mt-3"}"><table class="${"table table-borderless table-sm table-centered align-middle table-nowrap mb-0"}"><tbody class="${"border-0"}"><tr><td><h4 class="${"text-truncate fs-14 fs-medium mb-0"}"><i class="${"ri-stop-fill align-middle fs-18 text-primary me-2"}"></i>Desktop Users</h4></td>
                            <td><p class="${"text-muted mb-0"}">${validate_component(UsersIcon, "UsersIcon").$$render($$result, { class: "me-2 icon-sm" }, {}, {})}
                                78.56k</p></td>
                            <td class="${"text-end"}"><p class="${"text-success fw-medium fs-12 mb-0"}"><i class="${"ri-arrow-up-s-fill fs-5 align-middle"}"></i>2.08%</p></td></tr>
                        <tr><td><h4 class="${"text-truncate fs-14 fs-medium mb-0"}"><i class="${"ri-stop-fill align-middle fs-18 text-warning me-2"}"></i>Mobile Users</h4></td>
                            <td><p class="${"text-muted mb-0"}">${validate_component(UsersIcon, "UsersIcon").$$render($$result, { class: "me-2 icon-sm" }, {}, {})}
                                105.02k</p></td>
                            <td class="${"text-end"}"><p class="${"text-danger fw-medium fs-12 mb-0"}"><i class="${"ri-arrow-down-s-fill fs-5 align-middle"}"></i>10.52%</p></td></tr>
                        <tr><td><h4 class="${"text-truncate fs-14 fs-medium mb-0"}"><i class="${"ri-stop-fill align-middle fs-18 text-info me-2"}"></i>Tablet Users</h4></td>
                            <td><p class="${"text-muted mb-0"}">${validate_component(UsersIcon, "UsersIcon").$$render($$result, { class: "me-2 icon-sm" }, {}, {})}
                                42.89k</p></td>
                            <td class="${"text-end"}"><p class="${"text-danger fw-medium fs-12 mb-0"}"><i class="${"ri-arrow-down-s-fill fs-5 align-middle"}"></i>7.36%</p></td></tr></tbody></table></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { UsersByDevice as default };
