import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uialerts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary">
    <strong> Hi! </strong> A simple <b>Primary alert</b> \u2014check it out!
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary">
    <strong> How are you! </strong> A simple <b>secondary alert</b> \u2014check it out!
</Alert>

<!-- Success Alert -->
<Alert color="success">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> \u2014check it out!
</Alert>

<!-- Danger Alert -->
<Alert color="danger">
    <strong> Something is very wrong! </strong> A simple <b>danger alert</b> \u2014check it out!
</Alert>

<!-- Warning Alert -->
<Alert color="warning">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> \u2014check it out!
</Alert>

<!-- Info Alert -->
<Alert color="info">
    <strong> Don't forget' it ! </strong> A simple <b>info alert</b> \u2014check it out!
</Alert>

<!-- Light Alert -->
<Alert color="light">
    <strong> Mind Your Step! </strong> A simple <b>light alert</b> \u2014check it out!
</Alert>

<!-- Dark Alert -->
<Alert color="dark">
    <strong> Did you know? </strong> A simple <b>dark alert</b> \u2014check it out!
</Alert>
`;
  const borderlessAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-borderless">
    <strong> Hi! </strong> A simple <b>Primary alert</b> \u2014check it out!
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-borderless">
    <strong> How are you! </strong> A simple <b>secondary alert</b> \u2014check it out!
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-borderless">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> \u2014check it out!
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-borderless mb-xl-0">
    <strong> Something is very wrong! </strong> A simple danger alert\u2014check it out!
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-borderless">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> \u2014check it out!
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-borderless">
    <strong>Don't forget' it !</strong> A simple <b>info alert</b> \u2014check it out!
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-borderless bg-light">
    <strong>Mind Your Step!</strong> A simple <b>light alert</b> \u2014check it out!
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-borderless mb-0">
    <strong>Did you know?</strong> A simple <b>dark alert</b> \u2014check it out!
</Alert>`;
  const dismissingAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary">
    <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> \u2014 check it out!
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary">
    <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b> \u2014check it out!
</Alert>

<!-- Success Alert -->
<Alert color="success">
    <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> \u2014check it out!
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="mb-xl-0">
    <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> \u2014check it out!
</Alert>

<!-- Warning Alert -->
<Alert color="warning">
    <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> \u2014check it out!
</Alert>

<!-- Info Alert -->
<Alert color="info">
    <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b> \u2014check it out!
</Alert>

<!-- Light Alert -->
<Alert color="light">
    <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b> \u2014check it out!
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="mb-0">
    <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b> \u2014check it out!
</Alert>`;
  const linkColorAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary">
    A simple Primary alert with <Link href="#!" class="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary">
    A simple Secondary alert with <Link href="#!" class="alert-link">an example link</Link>.  Give it a click if you like.
</Alert>

<!-- Success Alert -->
<Alert color="success">
    A simple Success alert with <Link href="#!" class="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="mb-xl-0">
    A simple Danger alert with <Link href="#!" class="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Warning Alert -->
<Alert color="warning">
    A simple Warning alert with <Link href="#!" class="alert-link">an example link</Link>. Give  it a click if you like.
</Alert>

<!-- Info Alert -->
<Alert color="info">
    A simple Info alert with <Link href="#!" class="alert-link">an example link</Link>. Give it  a click if you like.
</Alert>

<!-- Light Alert -->
<Alert color="light">
    A simple Light alert with <Link href="#!" class="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="mb-0">
    A simple Dark alert with <Link href="#!" class="alert-link">an example link</Link>. Give it a click if you like.
</Alert>`;
  const liveAlertsCode = `
const [show, setShow] = useState(false);
<Alert color="success" isOpen={show} toggle={() => setShow(false)}>
    Nice, you triggered this alert message!
</Alert>
<button type="button" class="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>`;
  const outlineAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-outline">
    <strong> Hi! </strong> - Outline <b>primary alert</b> example
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-outline">
    <strong> How are you! </strong> - Outline <b>secondary alert</b> example
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-outline">
    <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-outline mb-xl-0">
    <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-outline">
    <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-outline">
    <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-outline mb-0">
    <strong>Did you know?</strong> - Outline <b>dark alert</b> example
</Alert>`;
  const leftBorderAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-border-left">
    <i class="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border alert
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-border-left">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong> - Left border alert
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-border-left">
    <i class="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left border alert
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-border-left mb-xl-0">
    <i class="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong> - Left border alert
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-border-left">
    <i class="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong> - Left border alert
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-border-left">
    <i class="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong> - Left border alert
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-border-left">
    <i class="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong> - Left border alert
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-border-left mb-0">
    <i class="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong> - Left border alert
</Alert>`;
  const labelIconAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-solid alert-label-icon">
    <i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> -Label icon alert 
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-solid alert-label-icon">
    <i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon alert
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-solid alert-label-icon">
    <i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon alert
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-solid alert-label-icon mb-xl-0">
    <i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon alert
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-solid alert-label-icon">
    <i class="ri-alert-line label-icon"></i><strong>warning</strong> - Label icon alert
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-solid alert-label-icon">
    <i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon alert
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-solid alert-label-icon">
    <i class="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon alert
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-solid alert-label-icon mb-0">
    <i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon alert
</Alert>`;
  const topBarAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-top-border">
    <i class="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong> - Top border alert
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-top-border">
    <i class="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong> - Top border alert
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-top-border">
    <i class="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong> - Top border alert
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-top-border mb-xl-0">
    <i class="ri-error-warning-line me-3 align-middle fs-16 text-danger "></i><strong>Danger</strong> - Top border alert
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-top-border">
    <i class="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong> - Top border alert
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-top-border">
    <i class="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong> - Top border alert
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-top-border">
    <i class="ri-mail-line me-3 align-middle fs-16 text-dark"></i><strong>Light</strong> - Top border alert
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-top-border mb-0">
    <i class="ri-refresh-line me-3 align-middle fs-16 text-dark"></i><strong>Dark</strong> - Top border alert
</Alert>`;
  const labelIconArrowAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-label-icon label-arrow ">
 <i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow alert
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-label-icon label-arrow ">
    <i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow alert
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-label-icon label-arrow ">
    <i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon arrow alert
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-label-icon label-arrow mb-xl-0">
    <i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon arrow alert
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-label-icon label-arrow ">
    <i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow alert
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-label-icon label-arrow ">
    <i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow alert
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-label-icon label-arrow ">
    <i class="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon arrow alert
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-label-icon label-arrow mb-0">
    <i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon arrow alert
</Alert>`;
  const roundedLabelIconAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-label-icon rounded-label">
    <i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Rounded label alert 
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-label-icon rounded-label">
    <i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Rounded label alert
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-label-icon rounded-label">
    <i class="ri-notification-off-line label-icon"></i><strong>Success</strong> - Rounded label alert
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-label-icon rounded-label">
    <i class="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Rounded label alert
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-label-icon rounded-label">
    <i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded label alert 
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-label-icon rounded-label">
    <i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Rounded label alert
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-label-icon rounded-label">
    <i class="ri-mail-line label-icon"></i><strong>Light</strong> - Rounded label alert
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-label-icon rounded-label">
    <i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Rounded label alert
</Alert>`;
  const additionalContentAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-additional">
<div class="alert-body">
    <div class="d-flex">
        <div class="flex-shrink-0 me-3">
            <i class="ri-error-warning-line fs-16 align-middle"></i>
        </div>
        <div class="flex-grow-1">
        <h5 class="alert-heading">Well done !</h5>
            <p class="mb-0">Aww yeah, you successfully read this important alert message. </p>
        </div>
    </div>
</div>
<div class="alert-content">
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-additional">
<div class="alert-body">
    <div class="d-flex">
        <div class="flex-shrink-0 me-3">
            <i class="ri-notification-off-line fs-16 align-middle"></i>
        </div>
        <div class="flex-grow-1">
        <h5 class="alert-heading">Yey! Everything worked!</h5>
            <p class="mb-0">This alert needs your attention, but it's not super important.</p>
        </div>
    </div>
</div>
<div class="alert-content">
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-additional mb-xl-0">
<div class="alert-body">
    <div class="d-flex">
        <div class="flex-shrink-0 me-3">
            <i class="ri-alert-line fs-16 align-middle"></i>
        </div>
        <div class="flex-grow-1">
        <h5 class="alert-heading">Something is very wrong!</h5>
            <p class="mb-0">Change a few things up and try submitting again.</p>
        </div>
    </div>
</div>
<div class="alert-content">
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-additional mb-0">
<div class="alert-body">
    <div class="d-flex">
        <div class="flex-shrink-0 me-3">
            <i class="ri-alert-line fs-16 align-middle"></i>
        </div>
        <div class="flex-grow-1">
        <h5 class="alert-heading">Uh oh, something went wrong!</h5>
            <p class="mb-0">Better check yourself, you're not looking too good.</p>
        </div>
    </div>
</div>
<div class="alert-content">
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</Alert>
`;
  const solidAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" class="alert-solid">
    <strong>Hi!</strong> - Solid <b>primary alert</b> example
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" class="alert-solid">
    <strong>How are you!</strong> - Solid <b>secondary alert</b> example
</Alert>

<!-- Success Alert -->
<Alert color="success" class="alert-solid">
    <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
</Alert>

<!-- Danger Alert -->
<Alert color="danger" class="alert-solid mb-xl-0">
    <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
</Alert>

<!-- Warning Alert -->
<Alert color="warning" class="alert-solid">
    <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
</Alert>

<!-- Info Alert -->
<Alert color="info" class="alert-solid">
    <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
</Alert>

<!-- Light Alert -->
<Alert color="light" class="alert-solid">
    <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
</Alert>

<!-- Dark Alert -->
<Alert color="dark" class="alert-solid mb-0">
    <strong>Did you know?</strong> - Solid <b>dark alert</b> example
</Alert>`;
  return `${$$result.head += `${$$result.title = `<title>Alerts | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Alerts", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>Alert</code> tag to show a default alert.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `<strong>Hi! </strong> A simple
										<b>Primary alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "secondary" }, {}, {
                                default: () => {
                                  return `<strong>How are you! </strong> A simple
										<b>secondary alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "success" }, {}, {
                                default: () => {
                                  return `<strong>Yey! Everything worked!
										</strong>
										A simple <b>success alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "danger", class: "mb-0" }, {}, {
                                default: () => {
                                  return `<strong>Something is very wrong!
										</strong>
										A simple <b>danger alert</b> \u2014check it out!
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "warning" }, {}, {
                                default: () => {
                                  return `<strong>Uh oh, something went wrong
										</strong>
										A simple <b>warning alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "info" }, {}, {
                                default: () => {
                                  return `<strong>Don&#39;t forget&#39; it !</strong> A
										simple <b>info alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `<strong>Mind Your Step!</strong> A
										simple <b>light alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "dark", class: "mb-0" }, {}, {
                                default: () => {
                                  return `<strong>Did you know?</strong> A simple
										<b>dark alert</b> \u2014check it out!
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultAlertsCode,
                        id: "defaultAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Borderless Alerts" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-borderless</code> class to set alert
							without border.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-borderless"
                              }, {}, {
                                default: () => {
                                  return `<strong>Hi! </strong> A simple
										<b>Primary alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-borderless"
                              }, {}, {
                                default: () => {
                                  return `<strong>How are you! </strong> A simple
										<b>secondary alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-borderless"
                              }, {}, {
                                default: () => {
                                  return `<strong>Yey! Everything worked!
										</strong>
										A simple <b>success alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-borderless mb-xl-0"
                              }, {}, {
                                default: () => {
                                  return `<strong>Something is very wrong!
										</strong> A simple danger alert\u2014check it
										out!
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-borderless"
                              }, {}, {
                                default: () => {
                                  return `<strong>Uh oh, something went wrong
										</strong>
										A simple <b>warning alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "info", class: "alert-borderless" }, {}, {
                                default: () => {
                                  return `<strong>Don&#39;t forget&#39; it !</strong> A
										simple <b>info alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-borderless bg-light"
                              }, {}, {
                                default: () => {
                                  return `<strong>Mind Your Step!</strong> A
										simple <b>light alert</b> \u2014check it out!
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-borderless mb-0"
                              }, {}, {
                                default: () => {
                                  return `<strong>Did you know?</strong> A simple
										<b>dark alert</b> \u2014check it out!
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: borderlessAlertsCode,
                        id: "borderlessAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dismissing Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>Alert</code> tag to add dismissing button
							to the alert.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "primary", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>Hi! </strong> A simple
										<b>Dismissible primary Alert </b> \u2014 check
										it out!
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "secondary", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>How are you! </strong> A simple
										<b>Dismissible secondary alert</b> \u2014check
										it out!
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "success", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>Right Way !</strong> A simple
										<b>Dismissible success alert</b> \u2014check it
										out!
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                dismissible: true,
                                class: "mb-xl-0"
                              }, {}, {
                                default: () => {
                                  return `<strong>Something is very wrong!
										</strong>
										A simple
										<b>Dismissible danger alert</b> \u2014check it
										out!
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "warning", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>Welcome Back!</strong> A simple
										<b>Dismissible warning alert</b> \u2014check it
										out!
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "info", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>Don&#39;t forget&#39; it !</strong> A
										simple <b>Dismissible info alert</b> \u2014check
										it out!
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "light", dismissible: true }, {}, {
                                default: () => {
                                  return `<strong>Mind Your Step!</strong> A
										simple <b>Dismissible light alert</b> \u2014check
										it out!
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                dismissible: true,
                                class: "mb-0"
                              }, {}, {
                                default: () => {
                                  return `<strong>Did you know?</strong> A simple
										<b>Dismissible dark alert</b> \u2014check it out!
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: dismissingAlertsCode,
                        id: "dismissingAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Link Color Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-link</code> class at &lt;a&gt; tag
							to show matching colored links within the given alert.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>

									${validate_component(Alert, "Alert").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `A simple Primary alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "secondary" }, {}, {
                                default: () => {
                                  return `A simple Secondary alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "success" }, {}, {
                                default: () => {
                                  return `A simple Success alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "danger", class: "mb-xl-0" }, {}, {
                                default: () => {
                                  return `A simple Danger alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "warning" }, {}, {
                                default: () => {
                                  return `A simple Warning alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "info" }, {}, {
                                default: () => {
                                  return `A simple Info alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `A simple Light alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "dark", class: "mb-0" }, {}, {
                                default: () => {
                                  return `A simple Dark alert with ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "alert-link" }, {}, {
                                    default: () => {
                                      return `an example link`;
                                    }
                                  })}. Give it a click if you like.
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: linkColorAlertsCode,
                        id: "linkColorAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Live Alert Example" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Click the Show live alert button to show an alert on
							button click.
						</p>
						<div class="${"live-preview"}"><div id="${"liveAlertPlaceholder"}">${validate_component(Alert, "Alert").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Nice, you triggered this alert message!`;
                        }
                      })}
								<button type="${"button"}" class="${"btn btn-primary"}" id="${"liveAlertBtn"}">Show live alert</button></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: liveAlertsCode,
                        id: "liveAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Outline Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-outline</code> class to set an alert
							with outline.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Outline Alert</h6>

									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-outline",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Hi! </strong> - Outline
										<b>primary alert</b> example
									`;
                                }
                              })}

									<h6>Secondary Outline Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-outline",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>How are you! </strong> -
										Outline <b>secondary alert</b> example
									`;
                                }
                              })}

									<h6>Success Outline Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-outline",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Yey! Everything worked!
										</strong>
										- Outline <b>success alert</b> example
									`;
                                }
                              })}

									<h6>Danger Outline Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-outline mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Something is very wrong!
										</strong>
										- Outline <b>danger alert</b> example
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Outline Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-outline",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Uh oh, something went wrong!
										</strong>
										- Outline <b>warning alert</b> example
									`;
                                }
                              })}

									<h6>Info Outline Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-outline",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Don&#39;t forget&#39; it !</strong> -
										Outline <b>info alert</b> example
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-outline mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<strong>Did you know?</strong> - Outline
										<b>dark alert</b> example
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: outlineAlertsCode,
                        id: "outlineAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Left Border Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-border-left </code> class to set
							an alert with the left border.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line me-3 align-middle fs-16"}"></i><strong>Primary</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line me-3 align-middle fs-16"}"></i><strong>Secondary</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-notification-off-line me-3 align-middle fs-16"}"></i><strong>Success</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-border-left mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line me-3 align-middle fs-16"}"></i><strong>Danger</strong>
										- Left border alert
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-alert-line me-3 align-middle fs-16"}"></i><strong>Warning</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line me-3 align-middle fs-16"}"></i><strong>Info</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-border-left",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-line me-3 align-middle fs-16"}"></i><strong>Light</strong>
										- Left border alert
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-border-left mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-refresh-line me-3 align-middle fs-16"}"></i><strong>Dark</strong>
										- Left border alert
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: leftBorderAlertsCode,
                        id: "leftBorderAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Label Icon Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-label-icon</code> class to set an
							alert with a label icon.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon"}"></i><strong>Primary</strong> -Label icon alert
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon"}"></i><strong>Secondary</strong>
										- Label icon alert
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-notification-off-line label-icon"}"></i><strong>Success</strong>
										- Label icon alert
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-solid alert-label-icon mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line label-icon"}"></i><strong>Danger</strong>
										- Label icon alert
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-alert-line label-icon"}"></i><strong>warning</strong> - Label icon alert
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line label-icon"}"></i><strong>Info</strong> - Label icon alert
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-solid alert-label-icon",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-line label-icon"}"></i><strong>Light</strong> - Label icon alert
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-solid alert-label-icon mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-refresh-line label-icon"}"></i><strong>Dark</strong> - Label icon alert
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: labelIconAlertsCode,
                        id: "labelIconAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Additional Content Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-additional</code> class and Use
							the <code>alert-</code> class to HTML elements like headings,
							paragraphs, dividers etc.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>

									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-additional",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"alert-body"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 me-3"}"><i class="${"ri-error-warning-line fs-16 align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h5 class="${"alert-heading"}">Well done !
													</h5>
													<p class="${"mb-0"}">Aww yeah, you
														successfully read this
														important alert message.
													</p></div></div></div>
										<div class="${"alert-content"}"><p class="${"mb-0"}">Whenever you need to, be sure to
												use margin utilities to keep
												things nice and tidy.
											</p></div>`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-additional mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"alert-body"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 me-3"}"><i class="${"ri-alert-line fs-16 align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h5 class="${"alert-heading"}">Something is very wrong!
													</h5>
													<p class="${"mb-0"}">Change a few things up
														and try submitting
														again.
													</p></div></div></div>
										<div class="${"alert-content"}"><p class="${"mb-0"}">Whenever you need to, be sure to
												use margin utilities to keep
												things nice and tidy.
											</p></div>`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-additional",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"alert-body"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 me-3"}"><i class="${"ri-notification-off-line fs-16 align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h5 class="${"alert-heading"}">Yey! Everything worked!
													</h5>
													<p class="${"mb-0"}">This alert needs your
														attention, but it&quot;s not
														super important.
													</p></div></div></div>
										<div class="${"alert-content"}"><p class="${"mb-0"}">Whenever you need to, be sure to
												use margin utilities to keep
												things nice and tidy.
											</p></div>`;
                                }
                              })}

									<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-additional mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"alert-body"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 me-3"}"><i class="${"ri-alert-line fs-16 align-middle"}"></i></div>
												<div class="${"flex-grow-1"}"><h5 class="${"alert-heading"}">Uh oh, something went
														wrong!
													</h5>
													<p class="${"mb-0"}">Better check yourself,
														you&#39;re not looking too
														good.
													</p></div></div></div>
										<div class="${"alert-content"}"><p class="${"mb-0"}">Whenever you need to, be sure to
												use margin utilities to keep
												things nice and tidy.
											</p></div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: additionalContentAlertsCode,
                        id: "additionalContentAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Top Border with Outline Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-top-border</code> class to set an
							alert with the top border and outline.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line me-3 align-middle fs-16 text-primary"}"></i><strong>Primary</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line me-3 align-middle fs-16 text-secondary"}"></i><strong>Secondary</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-notification-off-line me-3 align-middle fs-16 text-success"}"></i><strong>Success</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-top-border mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line me-3 align-middle fs-16 text-danger "}"></i><strong>Danger</strong>
										- Top border alert
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-alert-line me-3 align-middle fs-16 text-warning"}"></i><strong>Warning</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line me-3 align-middle fs-16 text-info"}"></i><strong>Info</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-top-border",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-line me-3 align-middle fs-16 text-dark"}"></i><strong>Light</strong>
										- Top border alert
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-top-border mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-refresh-line me-3 align-middle fs-16 text-dark"}"></i><strong>Dark</strong>
										- Top border alert
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: topBarAlertsCode,
                        id: "topBarAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Label Icon Arrow Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-label-icon label-arrow</code> class
							to show an alert with label icon and arrow.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon"}"></i><strong>Primary</strong> - Label icon arrow
										alert
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon"}"></i><strong>Secondary</strong> - Label icon
										arrow alert
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-notification-off-line label-icon"}"></i><strong>Success</strong>
										- Label icon arrow alert
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-label-icon label-arrow mb-xl-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line label-icon"}"></i><strong>Danger</strong>
										- Label icon arrow alert
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-alert-line label-icon"}"></i><strong>Warning</strong> - Label icon arrow
										alert
									`;
                                }
                              })}

									<h6>info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line label-icon"}"></i><strong>Info</strong> - Label icon arrow
										alert
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-label-icon label-arrow ",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-line label-icon"}"></i><strong>Light</strong>
										- Label icon arrow alert
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-label-icon label-arrow mb-0",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-refresh-line label-icon"}"></i><strong>Dark</strong>
										- Label icon arrow alert
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: labelIconArrowAlertsCode,
                        id: "labelIconArrowAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Rounded Label Icon Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-label-icon rounded-label</code> class
							to set an alert with a rounded label icon.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "primary",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon"}"></i><strong>Primary</strong> - Rounded label
										alert
									`;
                                }
                              })}

									<h6>Secondary Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "secondary",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon"}"></i><strong>Secondary</strong>
										- Rounded label alert
									`;
                                }
                              })}

									<h6>Success Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "success",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-notification-off-line label-icon"}"></i><strong>Success</strong>
										- Rounded label alert
									`;
                                }
                              })}

									<h6>Danger Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line label-icon"}"></i><strong>Danger</strong>
										- Rounded label alert
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "warning",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-alert-line label-icon"}"></i><strong>Warning</strong> - Rounded label
										alert
									`;
                                }
                              })}

									<h6>Info Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "info",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line label-icon"}"></i><strong>Info</strong> - Rounded label alert
									`;
                                }
                              })}

									<h6>Light Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "light",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-line label-icon"}"></i><strong>Light</strong> - Rounded label
										alert
									`;
                                }
                              })}

									<h6>Dark Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "dark",
                                class: "alert-label-icon rounded-label",
                                dismissible: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-refresh-line label-icon"}"></i><strong>Dark</strong> - Rounded label alert
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: roundedLabelIconAlertsCode,
                        id: "roundedLabelIconAlertsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Solid Alerts" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>alert-solid</code> class to set an alert
							with solid style.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Primary Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "primary", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>Hi!</strong> - Solid
										<b>primary alert</b> example
									`;
                                }
                              })}

									<h6>Secondary Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "secondary", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>How are you!</strong> - Solid
										<b>secondary alert</b> example
									`;
                                }
                              })}

									<h6>Success Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "success", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>Yey! Everything worked!
										</strong>
										- Solid <b>success alert</b> example
									`;
                                }
                              })}

									<h6>Danger Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, {
                                color: "danger",
                                class: "alert-solid mb-xl-0"
                              }, {}, {
                                default: () => {
                                  return `<strong>Something is very wrong!</strong>
										- Solid <b>danger alert</b> example
									`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
                            default: () => {
                              return `<h6>Warning Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "warning", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>Uh oh, something went wrong!</strong>
										- Solid <b>warning alert</b> example
									`;
                                }
                              })}

									<h6>Info Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "info", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>Don&#39;t forget&#39; it !</strong> -
										Solid <b>info alert</b> example
									`;
                                }
                              })}

									<h6>Light Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "light", class: "alert-solid" }, {}, {
                                default: () => {
                                  return `<strong>Mind Your Step!</strong> - Solid
										<b>secondary alert</b> example
									`;
                                }
                              })}

									<h6>Dark Solid Alert</h6>
									${validate_component(Alert, "Alert").$$render($$result, { color: "dark", class: "alert-solid mb-0" }, {}, {
                                default: () => {
                                  return `<strong>Did you know?</strong> - Solid
										<b>dark alert</b> example
									`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: solidAlertsCode,
                        id: "solidAlertsCode"
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
export { Uialerts as default };
