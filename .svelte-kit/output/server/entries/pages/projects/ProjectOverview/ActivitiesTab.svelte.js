import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../../chunks/Tooltip-8300c9d3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar1 } from "../../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar6 } from "../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/Portal-94847a25.js";
const ActivitiesTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"card-title"}">Activities</h5>
		<div class="${"acitivity-timeline py-3"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
					<p class="${"text-muted mb-2"}">We talked about a project on linkedin.</p>
					<small class="${"mb-0 text-muted"}">Today</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N</div></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
					<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create new project Buildng product
					</p>
					<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: null,
            class: "avatar-group-item",
            id: "tooltip-1",
            "data-bs-toggle": "tooltip",
            "data-bs-placement": "top",
            title: "",
            "data-bs-original-title": "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-1", placement: "top" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}

						${validate_component(Link, "Link").$$render($$result, {
            href: null,
            class: "avatar-group-item",
            id: "tooltip-2",
            "data-bs-original-title": "Frank Hook"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-2", placement: "top" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

						${validate_component(Link, "Link").$$render($$result, {
            href: null,
            class: "avatar-group-item",
            id: "tooltip-3"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R</div></div>`;
            }
          })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-3", placement: "top" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

						${validate_component(Link, "Link").$$render($$result, {
            href: null,
            class: "avatar-group-item",
            id: "tooltip-4"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+</div></div>`;
            }
          })}
						${validate_component(Tooltip, "Tooltip").$$render($$result, { target: "tooltip-4", placement: "top" }, {}, {
            default: () => {
              return `More`;
            }
          })}</div>
					<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
					<p class="${"text-muted mb-2"}">Adding a new event with attachments</p>
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                default: () => {
                  return `<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 4 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}</div>
							`;
                }
              })}`;
            }
          })}
					<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
					<p class="${"text-muted mb-2"}">added a new member to velzon dashboard</p>
					<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
					<p class="${"text-muted mb-2"}">These customers can rest assured their order has been placed.
					</p>
					<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
					<p class="${"text-muted mb-2"}">They all have something to say beyond the words on the page. They can come across as
						casual or neutral, exotic or graphic.
					</p>
					<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
			<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
					<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span> notification to submit the monthly sales
						report.
						<a${add_attribute("href", null, 0)} class="${"link-warning text-decoration-underline"}">Reports Builder</a></p>
					<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
			<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
				<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
					<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted a ticket.
					</p>
					<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { ActivitiesTab as default };
