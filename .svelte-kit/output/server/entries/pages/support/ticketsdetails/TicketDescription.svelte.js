import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { F as Form } from "../../../../chunks/Form-51a4628d.js";
import { L as Label } from "../../../../chunks/Label-1c7919d2.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import TicketsDetailsCode from "./TicketsDetailsCode.svelte.js";
import { a as avatar6 } from "../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import "../../../../chunks/Prism-c9306ada.js";
const TicketDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 9 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
            default: () => {
              return `<h6 class="${"fw-semibold text-uppercase mb-3"}">Ticket Discripation</h6>
			<p class="${"text-muted"}">It would also help to know what the errors are - it could be something simple like a message
				saying delivery is not available which could be a problem with your shipping templates. Too
				much or too little spacing, as in the example below, can make things unpleasant for the
				reader. The goal is to make your text as comfortable to read as possible. On the note of
				consistency, color consistency is a MUST. If you\u2019re not trying to create crazy contrast in
				your design, then a great idea would be for you to use a color palette throughout your
				entire design. It will subconsciously interest viewers and also is very pleasing to look at. ${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "link-secondary text-decoration-underline"
              }, {}, {
                default: () => {
                  return `Example`;
                }
              })}</p>
			<h6 class="${"fw-semibold text-uppercase mb-3"}">Create an Excellent UI for a Dashboard</h6>
			<ul class="${"text-muted vstack gap-2 mb-4"}"><li>Pick a Dashboard Type</li>
				<li>Categorize information when needed</li>
				<li>Provide Context</li>
				<li>On using colors</li>
				<li>On using the right graphs</li></ul>
			<div class="${"mt-4"}"><h6 class="${"fw-semibold text-uppercase mb-3"}">Here is the code you&#39;ve requsted</h6>
				<div>${validate_component(TicketsDetailsCode, "TicketsDetailsCode").$$render($$result, {}, {}, {})}</div></div>`;
            }
          })}
		
		${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4" }, {}, {
            default: () => {
              return `<h5 class="${"card-title mb-4"}">Comments</h5>

			<div data-simplebar style="${"height: 300px;"}" class="${"px-3 mx-n3"}"><div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Joseph Parker <small class="${"text-muted"}">20 Dec 2021 - 05:47AM</small></h5>
						<p class="${"text-muted"}">I am getting message from customers that when they place order always get error
							message .
						</p>
						${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "badge text-muted bg-light"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                }
              })}
						<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
							<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Alexis Clarke <small class="${"text-muted"}">22 Dec 2021 - 02:32PM</small></h5>
								<p class="${"text-muted"}">Please be sure to check your Spam mailbox to see if your email filters have
									identified the email from Dell as spam.
								</p>
								${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "badge text-muted bg-light"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                }
              })}</div></div></div></div>
				<div class="${"d-flex mb-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Donald Palmer <small class="${"text-muted"}">24 Dec 2021 - 05:20PM</small></h5>
						<p class="${"text-muted"}">If you have further questions, please contact Customer Support from the \u201CAction Menu\u201D
							on your <a${add_attribute("href", null, 0)} class="${"text-decoration-underline"}">Online Order Support</a>.
						</p>
						${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "badge text-muted bg-light"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                }
              })}</div></div>
				<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Alexis Clarke <small class="${"text-muted"}">26 min ago</small></h5>
						<p class="${"text-muted"}">Your ${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "text-decoration-underline"
              }, {}, {
                default: () => {
                  return `Online Order Support`;
                }
              })}
							provides you with the most current status of your order. To help manage your order refer
							to the \u201CAction Menu\u201D to initiate return, contact Customer Support and more.
						</p>
						<div class="${"row g-2 mb-3"}">${validate_component(Col, "Col").$$render($$result, { lg: 1, sm: 2, xs: 6 }, {}, {
                default: () => {
                  return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                }
              })}
							${validate_component(Col, "Col").$$render($$result, { lg: 1, sm: 2, xs: 6 }, {}, {
                default: () => {
                  return `<img${add_attribute("src", img5, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                }
              })}</div>
						${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "badge text-muted bg-light"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                }
              })}
						<div class="${"d-flex mt-4"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
							<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-13"}">Donald Palmer <small class="${"text-muted"}">8 sec ago</small></h5>
								<p class="${"text-muted"}">Other shipping methods are available at checkout if you want your purchase
									delivered faster.
								</p>
								${validate_component(Link, "Link").$$render($$result, {
                href: null,
                class: "badge text-muted bg-light"
              }, {}, {
                default: () => {
                  return `<i class="${"mdi mdi-reply"}"></i> Reply`;
                }
              })}</div></div></div></div></div>
			${validate_component(Form, "Form").$$render($$result, { action: "/#", class: "mt-3" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "exampleFormControlTextarea1",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Leave a Comments`;
                            }
                          })}
						<textarea class="${"form-control bg-light border-light"}" id="${"exampleFormControlTextarea1"}" rows="${"3"}" placeholder="${"Enter comments"}"></textarea>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { lg: 12, class: "text-end" }, {}, {
                        default: () => {
                          return `${validate_component(Link, "Link").$$render($$result, { href: null, class: "btn btn-success" }, {}, {
                            default: () => {
                              return `Post Comments`;
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
		`;
        }
      })}
	`;
    }
  })}`;
});
export { TicketDescription as default };
