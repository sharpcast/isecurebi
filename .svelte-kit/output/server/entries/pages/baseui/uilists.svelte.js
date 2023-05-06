import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { L as ListGroup, a as ListGroupItem } from "../../../chunks/ListGroupItem-5b1f2dad.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uilists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultListCode = `
<!-- Default List -->
<ListGroup>
    <ListGroupItem><i class="ri-bill-line align-middle me-2"></i> Send the billing agreement</ListGroupItem>
    <ListGroupItem><i class="ri-file-copy-2-line align-middle me-2"></i>Send over all the documentation.</ListGroupItem>
    <ListGroupItem><i class="ri-question-answer-line align-middle me-2"></i>Meeting with daron to review the intake form</ListGroupItem>
    <ListGroupItem><i class="ri-secure-payment-line align-middle me-2"></i>Check uikings theme and give customer support</ListGroupItem>
</ListGroup>
`;
  const activeItemCode = `
<!-- Active Item -->
<ListGroup>
    <ListGroupItem active>Send the billing agreement</ListGroupItem>
    <ListGroupItem>Send over all the documentation.</ListGroupItem>
    <ListGroupItem>Meeting with daron to review the intake form</ListGroupItem>
    <ListGroupItem>Check uikings theme and give customer support</ListGroupItem>
    <ListGroupItem>Start making a presentation</ListGroupItem>
</ListGroup>
`;
  const disabledItemCode = `
<!-- Disabled Items -->
<ListGroup>
    <ListGroupItem disabled>
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar1} alt="" class="avatar-xs rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-2">
                James Ballard
            </div>
        </div>
    </ListGroupItem>
    <ListGroupItem>
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar2} alt="" class="avatar-xs rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-2">
                Nancy Martino
            </div>
        </div>
    </ListGroupItem>
    <ListGroupItem>
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar3} alt="" class="avatar-xs rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-2">
                Henry Baird
            </div>
        </div>
    </ListGroupItem>
    <ListGroupItem>
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar3} alt="" class="avatar-xs rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-2">
                Erica Kernan
            </div>
        </div>
    </ListGroupItem>
</ListGroup>
`;
  const listlinkCode = `
<!-- List with Link -->
<ListGroup class="list-group-fill-success">
    <ListGroupItem tag="a" href="#!" class="list-group-item-action active"><i class="ri-download-2-fill align-middle me-2"></i>Category Download</ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action"><i class="ri-shield-check-line align-middle me-2"></i>Security Access</ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action"><i class="ri-database-2-line align-middle me-2"></i>Storage folder</ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action"><i class="ri-notification-3-line align-middle me-2"></i>Push Notification</ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action disabled" tabIndex="-1"><i class="ri-moon-fill align-middle me-2"></i>Dark Mode</ListGroupItem>
</ListGroup>
`;
  const listButtonCode = `
<!-- List with Button -->
<ListGroup>
    <ListGroupItem tag="button" class="list-group-item-action active"><i class="ri-reply-fill align-middle me-2"></i>Reply</ListGroupItem>
    <ListGroupItem tag="button" class="list-group-item-action"><i class="ri-share-forward-fill align-middle me-2"></i>Forward Message</ListGroupItem>
    <ListGroupItem tag="button" class="list-group-item-action"><i class="ri-equalizer-line align-middle me-2"></i>Filter Message</ListGroupItem>
    <ListGroupItem tag="button" class="list-group-item-action"><i class="ri-delete-bin-5-line align-middle me-2"></i>Delete Message</ListGroupItem>
    <ListGroupItem tag="button" class="list-group-item-action" disabled><i class="ri-forbid-line align-middle me-2"></i>Block "Mark Spencer</ListGroupItem>
</ListGroup>
`;
  const flushListCode = `
<!-- Flush List -->
<ListGroup flush>
    <ListGroupItem>Send the billing agreement</ListGroupItem>
    <ListGroupItem>Send over all the documentation.</ListGroupItem>
    <ListGroupItem>Meeting with daron to review the intake form</ListGroupItem>
    <ListGroupItem>Check uikings theme and give customer support</ListGroupItem>
    <ListGroupItem>Start making a presentation</ListGroupItem>
</ListGroup>
`;
  const horizontalListCode = `
<!-- Start Alignment -->
<ListGroup class="mb-3" horizontal>
    <ListGroupItem>Inbox</ListGroupItem>
    <ListGroupItem>Work</ListGroupItem>
    <ListGroupItem>Shopping</ListGroupItem>
</ListGroup>
<ListGroup class="justify-content-center mb-3" horizontal>
    <ListGroupItem>Inbox</ListGroupItem>
    <ListGroupItem>Work</ListGroupItem>
    <ListGroupItem>Shopping</ListGroupItem>
</ListGroup>
<ListGroup class="justify-content-end" horizontal>
    <ListGroupItem>Inbox</ListGroupItem>
    <ListGroupItem>Work</ListGroupItem>
    <ListGroupItem>Shopping</ListGroupItem>
</ListGroup>
`;
  const contextualClassCode = `
<!-- Contextual Classes -->
<ListGroup>
    <ListGroupItem >Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem color="primary">A simple primary list group item</ListGroupItem>
    <ListGroupItem color="secondary">A simple secondary list group item</ListGroupItem>
    <ListGroupItem color="success">A simple success list group item</ListGroupItem>
    <ListGroupItem color="danger">A simple danger list group item</ListGroupItem>
    <ListGroupItem color="warning">A simple warning list group item</ListGroupItem>
    <ListGroupItem color="info">A simple info list group item</ListGroupItem>
    <ListGroupItem color="light">A simple light list group item</ListGroupItem>
    <ListGroupItem color="dark">A simple dark list group item</ListGroupItem>
</ListGroup>
`;
  const contextualLinkCode = `
<!-- Contextual Classes with Link -->
<ListGroup>
    <ListGroupItem color="" tag="a" href="#!" class="list-group-item-action">A simple default list group item</ListGroupItem>
    <ListGroupItem color="primary" tag="a" href="#!" class="list-group-item-action">A simple primary list group item</ListGroupItem>
    <ListGroupItem color="secondary" tag="a" href="#!" class="list-group-item-action">A simple secondary list group item</ListGroupItem>
    <ListGroupItem color="success" tag="a" href="#!" class="list-group-item-action">A simple success list group item</ListGroupItem>
    <ListGroupItem color="danger" tag="a" href="#!" class="list-group-item-action">A simple danger list group item</ListGroupItem>
    <ListGroupItem color="warning" tag="a" href="#!" class="list-group-item-action">A simple warning list group item</ListGroupItem>
    <ListGroupItem color="info" tag="a" href="#!" class="list-group-item-action">A simple info list group item</ListGroupItem>
    <ListGroupItem color="light" tag="a" href="#!" class="list-group-item-action">A simple light list group item</ListGroupItem>
    <ListGroupItem color="dark" tag="a" href="#!" class="list-group-item-action">A simple dark list group item</ListGroupItem>
</ListGroup>
`;
  const coloredListCode = `
<!-- Colored Lists -->
<ListGroup>
    <ListGroupItem >Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem class="list-group-fill-primary">A simple primary list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-secondary">A simple secondary list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-success">A simple success list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-danger">A simple danger list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-warning">A simple warning list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-info">A simple info list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-light">A simple light list group item</ListGroupItem>
    <ListGroupItem class="list-group-fill-dark">A simple dark list group item</ListGroupItem>
</ListGroup>
`;
  const customContentCode = `
<!-- Custom Content -->
<ListGroup>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action active">
        <div class="float-end">
            Pending
        </div>
        <div class="d-flex mb-2 align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar1} alt="" class="avatar-sm rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5 class="list-title fs-15 mb-1">Charlie Pritchard</h5>
                <p class="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p class="list-text mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
    </ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action">
        <div class="float-end">
            Pending
        </div>
        <div class="d-flex mb-2 align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar2} alt="" class="avatar-sm rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5 class="list-title fs-15 mb-1">Dominic Charlton</h5>
                <p class="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p class="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.</p>
    </ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action">
        <div class="float-end">
            Rejected
        </div>
        <div class="d-flex mb-2 align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar3} alt="" class="avatar-sm rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5 class="list-title fs-15 mb-1">Declan Long</h5>
                <p class="list-text mb-0 fs-12">12 min Ago</p>
            </div>
        </div>
        <p class="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
    </ListGroupItem>
    <ListGroupItem tag="a" href="#!" class="list-group-item-action">
        <div class="float-end">
            Successful
        </div>
        <div class="d-flex mb-2 align-items-center">
            <div class="flex-shrink-0">
                <img src={avatar4} alt="" class="avatar-sm rounded-circle" />
            </div>
            <div class="flex-grow-1 ms-3">
                <h5 class="list-title fs-15 mb-1">Angela Bernier</h5>
                <p class="list-text mb-0 fs-12">5 days Ago</p>
            </div>
        </div>
        <p class="list-text mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it\u2019s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.</p>
    </ListGroupItem>
</ListGroup>
`;
  const listBadgeCode = `
<!-- List with Badges -->
<ListGroup>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Send the billing agreement <span class="badge bg-success">High</span>
    </ListGroupItem>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Send over all the documentation
    </ListGroupItem>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Meeting with daron to review the intake form <span class="badge bg-danger">Low</span>
    </ListGroupItem>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Check uikings theme and give customer support <span class="badge bg-secondary">Medium</span>
    </ListGroupItem>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Start making a presentation <span class="badge bg-success">High</span>
    </ListGroupItem>
</ListGroup>
`;
  const listCheckboxCode = `
<!-- List with Checkboxs -->
<ListGroup>
    <ListGroupItem tag="label">
        <Input class="form-check-input me-1" type="checkbox" value="" />
        Declined Payment
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input me-1" type="checkbox" value="" checked />
        Delivery Error
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input me-1" type="checkbox" value="" checked />
        Wrong Amount
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input me-1" type="checkbox" value="" />
        Wrong Address
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input me-1" type="checkbox" value="" />
        Wrong UX/UI Solution
    </ListGroupItem>
</ListGroup>
`;
  const listRadioCode = `
<!-- List with Radios -->
<ListGroup>
    <ListGroupItem tag="label">
        <Input class="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Declined Payment
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" checked />
        Delivery Error
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong Amount
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong Address
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input class="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong UX/UI Solution
    </ListGroupItem>
</ListGroup>
`;
  const listIconCode = `
<!-- List with Icon -->
<ListGroup>
    <ListGroupItem><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the billing agreement</ListGroupItem>
    <ListGroupItem><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over all the documentation.</ListGroupItem>
    <ListGroupItem><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting with daron to review the intake form</ListGroupItem>
    <ListGroupItem><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check uikings theme and give customer support</ListGroupItem>
    <ListGroupItem><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start making a presentation</ListGroupItem>
</ListGroup>
`;
  const listNumberedCode = `
<!-- List with Numbered -->
<ListGroup class="list-group-numbered">
    <ListGroupItem>Send the billing agreement</ListGroupItem>
    <ListGroupItem>Send over all the documentation.</ListGroupItem>
    <ListGroupItem>Meeting with daron to review the intake form</ListGroupItem>
    <ListGroupItem>Check uikings theme and give customer support</ListGroupItem>
    <ListGroupItem>Start making a presentation</ListGroupItem>
</ListGroup>
`;
  const customListCode = `
<!-- Custom Content Lists -->
<SimpleBar style="max-height: 215px">
    <ListGroup class="mb-1">
        <ListGroupItem>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="d-flex">
                        <div class="flex-shrink-0 avatar-xs">
                            <div class="avatar-title bg-soft-danger text-danger rounded">
                                <i class="ri-netflix-fill"></i>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-2">
                            <h6 class="fs-14 mb-0">Netfilx</h6>
                            <small class="text-muted">2 min Ago</small>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-danger">-$25.50</span>
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="d-flex">
                        <div class="flex-shrink-0 avatar-xs">
                            <div class="avatar-title bg-soft-success text-success rounded">
                                <i class="ri-spotify-fill"></i>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-2">
                            <h6 class="fs-14 mb-0">Spotify</h6>
                            <small class="text-muted">5 days Ago</small>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-success">$48.25</span>
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <img src={avatar2} alt="" class="avatar-xs rounded" />
                        </div>
                        <div class="flex-shrink-0 ms-2">
                            <h6 class="fs-14 mb-0">Emily Slater</h6>
                            <small class="text-muted">8 days Ago</small>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-success">$354.90</span>
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="d-flex">
                        <div class="flex-shrink-0 avatar-xs">
                            <div class="avatar-title bg-soft-secondary text-secondary rounded">
                                <i class="ri-paypal-fill"></i>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-2">
                            <h6 class="fs-14 mb-0">Paypal</h6>
                            <small class="text-muted">1 month Ago</small>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-danger">-$12.22</span>
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <img src={avatar3} alt="" class="avatar-xs rounded" />
                        </div>
                        <div class="flex-shrink-0 ms-2">
                            <h6 class="fs-14 mb-0">Harvey Wells</h6>
                            <small class="text-muted">4 month Ago</small>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-success">-$459.78</span>
                </div>
            </div>
        </ListGroupItem>
    </ListGroup>
</SimpleBar>
`;
  return `${$$result.head += `${$$result.title = `<title>Lists | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "List", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default List" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>ListGroup</code> attribute in an unordered
							list and
							<code>ListGroupItem</code> attribute to create a default
							list group.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-bill-line align-middle me-2"}"></i> Send the billing agreement`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-file-copy-2-line align-middle me-2"}"></i>Send over all the documentation.`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-question-answer-line align-middle me-2"}"></i>Meeting with daron to review the intake
									form`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"ri-secure-payment-line align-middle me-2"}"></i>Check uikings theme and give customer
									support`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultListCode,
                        id: "defaultListCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Active Item" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>active</code> attribute to
							<code>ListGroupItem</code> to indicate the current active
							selection.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { active: true }, {}, {
                            default: () => {
                              return `Send the billing agreement`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Send over all the documentation.`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Meeting with daron to review the intake
									form`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Check uikings theme and give customer
									support`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Start making a presentation`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: activeItemCode,
                        id: "activeItemCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Disabled Items" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>disabled</code> attribute to
							<code>ListGroupItem</code>
							to make it
							<em>appear</em> disabled.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { disabled: true }, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-2"}">James Ballard
										</div></div>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-2"}">Nancy Martino
										</div></div>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-2"}">Henry Baird
										</div></div>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-2"}">Erica Kernan
										</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: disabledItemCode,
                        id: "disabledItemCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Link" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>tag=&quot;a&quot;</code> to create actionable list group
							items with hover, disabled, and active states by adding
							list-group-item-action.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "list-group-fill-success" }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action active"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-download-2-fill align-middle me-2"}"></i>Category Download`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-shield-check-line align-middle me-2"}"></i>Security Access`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-database-2-line align-middle me-2"}"></i>Storage folder`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-notification-3-line align-middle me-2"}"></i>Push Notification`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action disabled",
                            tabIndex: "-1"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-moon-fill align-middle me-2"}"></i>Dark Mode`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: listlinkCode, id: "listlinkCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Button" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>tag=&quot;button&quot;</code> to create actionable list
							group items with hover, disabled, and active states by
							adding list-group-item-action.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "button",
                            class: "list-group-item-action active"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-reply-fill align-middle me-2"}"></i>Reply`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "button",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-share-forward-fill align-middle me-2"}"></i>Forward Message`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "button",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-equalizer-line align-middle me-2"}"></i>Filter Message`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "button",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-delete-bin-5-line align-middle me-2"}"></i>Delete Message`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "button",
                            class: "list-group-item-action",
                            disabled: true
                          }, {}, {
                            default: () => {
                              return `<i class="${"ri-forbid-line align-middle me-2"}"></i>Block &quot;Mark Spencer`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: listButtonCode,
                        id: "listButtonCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Flush List" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>flush</code> attribute to ListGroup to remove
							some borders and rounded corners to render list group
							items.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { flush: true }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Send the billing agreement`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Send over all the documentation.`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Meeting with daron to review the intake
									form`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Check uikings theme and give customer
									support`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Start making a presentation`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: flushListCode, id: "flushListCode" }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Horizontal List" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>horizontal</code> attribute to ListGroup to
							change the layout of list group items from vertical to
							horizontal across all breakpoints.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "mb-3 list-group-horizontal" }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Inbox`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Work`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Shopping`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(ListGroup, "ListGroup").$$render($$result, {
                        class: "justify-content-center mb-3 list-group-horizontal"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Inbox`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Work`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Shopping`;
                            }
                          })}`;
                        }
                      })}
							${validate_component(ListGroup, "ListGroup").$$render($$result, {
                        class: "justify-content-end list-group-horizontal"
                      }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Inbox`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Work`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Shopping`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: horizontalListCode,
                        id: "horizontalListCode"
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Contextual Classes" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>color=&quot;Required color&quot;</code> to style list
							items with a stateful background and color.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Dapibus ac facilisis in`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "primary" }, {}, {
                            default: () => {
                              return `A simple primary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "secondary" }, {}, {
                            default: () => {
                              return `A simple secondary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "success" }, {}, {
                            default: () => {
                              return `A simple success list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "danger" }, {}, {
                            default: () => {
                              return `A simple danger list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "warning" }, {}, {
                            default: () => {
                              return `A simple warning list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "info" }, {}, {
                            default: () => {
                              return `A simple info list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "light" }, {}, {
                            default: () => {
                              return `A simple light list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { color: "dark" }, {}, {
                            default: () => {
                              return `A simple dark list group item`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: contextualClassCode,
                        id: "contextualClassCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Contextual Classes with Link" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>tag=&quot;a&quot; href=&quot;#!&quot;</code> to add link. Note the
							addition of the hover styles here not present in the
							previous example.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple default list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "primary",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple primary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "secondary",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple secondary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "success",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple success list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "danger",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple danger list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "warning",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple warning list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "info",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple info list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "light",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple light list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            color: "dark",
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `A simple dark list group item`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: contextualLinkCode,
                        id: "contextualLinkCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Colored Lists" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>list-group-fill-</code> with modifier class
							to style list items with a stateful background and color.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Dapibus ac facilisis in`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-primary" }, {}, {
                            default: () => {
                              return `A simple primary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-secondary" }, {}, {
                            default: () => {
                              return `A simple secondary list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-success" }, {}, {
                            default: () => {
                              return `A simple success list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-danger" }, {}, {
                            default: () => {
                              return `A simple danger list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-warning" }, {}, {
                            default: () => {
                              return `A simple warning list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-info" }, {}, {
                            default: () => {
                              return `A simple info list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-light" }, {}, {
                            default: () => {
                              return `A simple light list group item`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { class: "list-group-fill-dark" }, {}, {
                            default: () => {
                              return `A simple dark list group item`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: coloredListCode,
                        id: "coloredListCode"
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Content" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Add nearly any HTML within, even for linked list
							groups like the one below, with the help of ${validate_component(Link, "Link").$$render($$result, {
                        href: "/getbootstrap.com/docs/5.1/utilities/flex/"
                      }, {}, {
                        default: () => {
                          return `flexbox utilities`;
                        }
                      })}.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action active"
                          }, {}, {
                            default: () => {
                              return `<div class="${"float-end"}">Pending</div>
									<div class="${"d-flex mb-2 align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-3"}"><h5 class="${"list-title fs-15 mb-1"}">Charlie Pritchard
											</h5>
											<p class="${"list-text mb-0 fs-12"}">12 min Ago
											</p></div></div>
									<p class="${"list-text mb-0"}">They all have something to say beyond
										the words on the page. They can come
										across as casual or neutral, exotic or
										graphic. That&#39;s why it&#39;s important to
										think about your message, then choose a
										font that fits. Cosby sweater eu banh
										mi, qui irure terry richardson ex squid.
									</p>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<div class="${"float-end"}">Pending</div>
									<div class="${"d-flex mb-2 align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-3"}"><h5 class="${"list-title fs-15 mb-1"}">Dominic Charlton
											</h5>
											<p class="${"list-text mb-0 fs-12"}">12 min Ago
											</p></div></div>
									<p class="${"list-text mb-0"}">Trust fund seitan letterpress, keytar
										raw denim keffiyeh etsy art party before
										they sold out master cleanse gluten-free
										squid scenester freegan cosby sweater.
										Fanny pack portland seitan DIY, art
										party locavore wolf cliche high life
										echo park Austin.
									</p>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<div class="${"float-end"}">Rejected</div>
									<div class="${"d-flex mb-2 align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-3"}"><h5 class="${"list-title fs-15 mb-1"}">Declan Long
											</h5>
											<p class="${"list-text mb-0 fs-12"}">12 min Ago
											</p></div></div>
									<p class="${"list-text mb-0"}">Big July earthquakes confound zany
										experimental vow. My girl wove six dozen
										plaid jackets before she quit. Six big
										devils from Japan quickly forgot how to
										waltz. try again until it looks right,
										and each assumenda labore aes Homo
										nostrud organic, assumenda labore
										aesthetic magna elements, buttons,
										everything.
									</p>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            tag: "a",
                            href: "#!",
                            class: "list-group-item-action"
                          }, {}, {
                            default: () => {
                              return `<div class="${"float-end"}">Successful</div>
									<div class="${"d-flex mb-2 align-items-center"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"avatar-sm rounded-circle"}"></div>
										<div class="${"flex-grow-1 ms-3"}"><h5 class="${"list-title fs-15 mb-1"}">Angela Bernier
											</h5>
											<p class="${"list-text mb-0 fs-12"}">5 days Ago
											</p></div></div>
									<p class="${"list-text mb-0"}">Just like in the image where we talked
										about using multiple fonts, you can see
										that the background in this graphic
										design is blurred. Whenever you put text
										on top of an image, it\u2019s important that
										your viewers can understand the text,
										and sometimes that means applying a
										gaussian readable.
									</p>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: customContentCode,
                        id: "customContentCode"
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use badges to any list group item to show unread
							counts, activity, and more with the help of some ${validate_component(Link, "Link").$$render($$result, {
                        href: "/getbootstrap.com/docs/5.1/utilities/"
                      }, {}, {
                        default: () => {
                          return `utilities`;
                        }
                      })}.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            class: "d-flex justify-content-between align-items-center"
                          }, {}, {
                            default: () => {
                              return `Send the billing agreement <span class="${"badge bg-success"}">High</span>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            class: "d-flex justify-content-between align-items-center"
                          }, {}, {
                            default: () => {
                              return `Send over all the documentation
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            class: "d-flex justify-content-between align-items-center"
                          }, {}, {
                            default: () => {
                              return `Meeting with daron to review the intake form <span class="${"badge bg-danger"}">Low</span>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            class: "d-flex justify-content-between align-items-center"
                          }, {}, {
                            default: () => {
                              return `Check uikings theme and give customer
									support <span class="${"badge bg-secondary"}">Medium</span>`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {
                            class: "d-flex justify-content-between align-items-center"
                          }, {}, {
                            default: () => {
                              return `Start making a presentation <span class="${"badge bg-success"}">High</span>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: listBadgeCode, id: "listBadgeCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Checkboxs" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use Bootstrap\u2019s checkboxes within list group items
							and customize as needed.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${""}">
									Declined Payment
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${""}" checked>
									Delivery Error
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${""}" checked>
									Wrong Amount
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${""}">
									Wrong Address
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input me-1"}" type="${"checkbox"}" value="${""}">
									Wrong UX/UI Solution
								`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: listCheckboxCode,
                        id: "listCheckboxCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Radios" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use Bootstrap\u2019s radios within list group items and
							customize as needed.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input fs-14 mt-0 align-middle me-1"}" name="${"exampleRadios"}" type="${"radio"}" value="${""}">
									Declined Payment
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input fs-14 mt-0 align-middle me-1"}" name="${"exampleRadios"}" type="${"radio"}" value="${""}" checked>
									Delivery Error
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input fs-14 mt-0 align-middle me-1"}" name="${"exampleRadios"}" type="${"radio"}" value="${""}">
									Wrong Amount
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input fs-14 mt-0 align-middle me-1"}" name="${"exampleRadios"}" type="${"radio"}" value="${""}">
									Wrong Address
								`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { tag: "label" }, {}, {
                            default: () => {
                              return `<input class="${"form-check-input fs-14 mt-0 align-middle me-1"}" name="${"exampleRadios"}" type="${"radio"}" value="${""}">
									Wrong UX/UI Solution
								`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: listRadioCode, id: "listRadioCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Icon" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use icons to any list group item to show icons to
							list group items.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-check-bold align-middle lh-1 me-2"}"></i> Send the billing agreement`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-check-bold align-middle lh-1 me-2"}"></i> Send over all the documentation.`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-check-bold align-middle lh-1 me-2"}"></i> Meeting with daron to review the intake form`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-check-bold align-middle lh-1 me-2"}"></i> Check uikings theme and give customer support`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-check-bold align-middle lh-1 me-2"}"></i> Start making a presentation`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: listIconCode, id: "listIconCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "List with Numbered" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>list-group-numbered</code> class
							(optionally use an <code>&lt;ol&gt;</code> element) to
							show numbered list group items.
						</p>
						<div class="${"live-preview"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "list-group-numbered" }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Send the billing agreement`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Send over all the documentation.`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Meeting with daron to review the intake
									form`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Check uikings theme and give customer
									support`;
                            }
                          })}
								${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Start making a presentation`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: listNumberedCode,
                        id: "listNumberedCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 4, xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Content Lists" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Add nearly any HTML within, even for linked list
							groups like the one below, with the help of ${validate_component(Link, "Link").$$render($$result, {
                        href: "/getbootstrap.com/docs/5.1/utilities/flex/"
                      }, {}, {
                        default: () => {
                          return `flexbox utilities`;
                        }
                      })}.
						</p>
						<div class="${"live-preview"}"><div data-simplebar style="${"max-height: 215px"}">${validate_component(ListGroup, "ListGroup").$$render($$result, { class: "mb-1" }, {}, {
                        default: () => {
                          return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-danger text-danger rounded"}"><i class="${"ri-netflix-fill"}"></i></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><h6 class="${"fs-14 mb-0"}">Netfilx
														</h6>
														<small class="${"text-muted"}">2 min Ago</small></div></div></div>
											<div class="${"flex-shrink-0"}"><span class="${"text-danger"}">-$25.50</span></div></div>`;
                            }
                          })}
									${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-success text-success rounded"}"><i class="${"ri-spotify-fill"}"></i></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><h6 class="${"fs-14 mb-0"}">Spotify
														</h6>
														<small class="${"text-muted"}">5 days Ago</small></div></div></div>
											<div class="${"flex-shrink-0"}"><span class="${"text-success"}">$48.25</span></div></div>`;
                            }
                          })}
									${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded"}"></div>
													<div class="${"flex-shrink-0 ms-2"}"><h6 class="${"fs-14 mb-0"}">Emily Slater
														</h6>
														<small class="${"text-muted"}">8 days Ago</small></div></div></div>
											<div class="${"flex-shrink-0"}"><span class="${"text-success"}">$354.90</span></div></div>`;
                            }
                          })}
									${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-secondary text-secondary rounded"}"><i class="${"ri-paypal-fill"}"></i></div></div>
													<div class="${"flex-shrink-0 ms-2"}"><h6 class="${"fs-14 mb-0"}">Paypal
														</h6>
														<small class="${"text-muted"}">1 month Ago</small></div></div></div>
											<div class="${"flex-shrink-0"}"><span class="${"text-danger"}">-$12.22</span></div></div>`;
                            }
                          })}
									${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"avatar-xs rounded"}"></div>
													<div class="${"flex-shrink-0 ms-2"}"><h6 class="${"fs-14 mb-0"}">Harvey Wells
														</h6>
														<small class="${"text-muted"}">4 month Ago</small></div></div></div>
											<div class="${"flex-shrink-0"}"><span class="${"text-success"}">-$459.78</span></div></div>`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: customListCode,
                        id: "customListCode"
                      }, {}, {})}</div>`;
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
export { Uilists as default };
