import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { c as company4 } from "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "mt-n4 mx-n4 mb-n5" }, {}, {
        default: () => {
          return `<div class="${"bg-soft-warning"}">${validate_component(CardBody, "CardBody").$$render($$result, { class: "pb-4 mb-5" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"col-md"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                    default: () => {
                      return `<div class="${"col-md-auto"}"><div class="${"avatar-md mb-md-0 mb-4"}"><div class="${"avatar-title bg-white rounded-circle"}"><img${add_attribute("src", company4, 0)} alt="${""}" class="${"avatar-sm"}"></div></div></div>
							
							<div class="${"col-md"}"><h4 class="${"fw-semibold"}" id="${"ticket-title"}">#VLZ135 - Create an Excellent UI for a Dashboard
								</h4>
								<div class="${"hstack gap-3 flex-wrap"}"><div class="${"text-muted"}"><i class="${"ri-building-line align-bottom me-1"}"></i><span id="${"ticket-client"}">Themesbrand</span></div>
									<div class="${"vr"}"></div>
									<div class="${"text-muted"}">Create Date : <span class="${"fw-medium "}" id="${"create-date"}">20 Dec, 2021</span></div>
									<div class="${"vr"}"></div>
									<div class="${"text-muted"}">Due Date : <span class="${"fw-medium"}" id="${"due-date"}">29 Dec, 2021</span></div>
									<div class="${"vr"}"></div>
									<div class="${"badge rounded-pill bg-info fs-12"}" id="${"ticket-status"}">New</div>
									<div class="${"badge rounded-pill bg-danger fs-12"}" id="${"ticket-priority"}">High</div></div></div>
							`;
                    }
                  })}
						</div>
					
					<div class="${"col-md-auto mt-md-0 mt-4"}"><div class="${"hstack gap-1 flex-wrap"}"><button type="${"button"}" class="${"btn avatar-xs mt-n1 p-0 favourite-btn active"}"><span class="${"avatar-title bg-transparent fs-15"}"><i class="${"ri-star-fill"}"></i></span></button>
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                        tag: "button",
                        color: "",
                        type: "button",
                        class: "btn py-0 fs-16 text-body"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-share-line"}"></i>`;
                        }
                      })}

								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                        default: () => {
                          return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-eye-fill align-bottom me-2 text-muted"}"></i> View`;
                            }
                          })}</li>
									<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-share-forward-fill align-bottom me-2 text-muted"}"></i> Share with`;
                            }
                          })}</li>
									<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-fill align-bottom me-2 text-muted"}"></i> Delete`;
                            }
                          })}</li>`;
                        }
                      })}`;
                    }
                  })}
							<button type="${"button"}" class="${"btn py-0 fs-16 text-body"}"><i class="${"ri-flag-line"}"></i></button></div></div>
					`;
                }
              })}
				`;
            }
          })}
			</div>`;
        }
      })}
	`;
    }
  })}
`;
});
export { Section as default };
