import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { B as ButtonGroup } from "../../../chunks/ButtonGroup-50e6fe93.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { S as Spinner } from "../../../chunks/Spinner-5b52a5e3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/CardHeader-84e061db.js";
const ButtonToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "btn-toolbar");
  return `<div${spread([
    escape_object($$restProps),
    { role: "toolbar" },
    { class: escape_attribute_value(classes) }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Uibuttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultButtonsCode = `
<!-- Base Buttons -->
<Button color="primary"> Primary </Button>

<Button color="secondary"> Secondary </Button>

<Button color="success"> Success </Button>

<Button color="info"> Info </Button>

<Button color="warning"> Warning </Button>

<Button color="danger"> Danger </Button>

<Button color="dark"> Dark </Button>

<Button color="link"> Link </Button>

<Button color="light"> Light </Button>
`;
  const outlineButtonsCode = `
<!-- Outline Buttons -->
<Button color="primary" outline > primary </Button>

<Button color="secondary" outline > Secondary </Button>

<Button color="success" outline > Success </Button>

<Button color="info" outline > Info </Button>

<Button color="warning" outline > Warning </Button>

<Button color="danger" outline > Danger </Button>

<Button color="dark" outline > Dark </Button>

<Button color="light" outline > Light </Button>
`;
  const roundedButtonsCode = `
<!-- Rounded Buttons -->
<Button color="primary" class="rounded-pill"> Primary </Button>

<Button color="secondary" class="rounded-pill"> Secondary </Button>

<Button color="success" class="rounded-pill"> Success </Button>

<Button color="info" class="rounded-pill"> Info </Button>

<Button color="warning" class="rounded-pill"> Warning </Button>

<Button color="danger" class="rounded-pill"> Danger </Button>

<Button color="dark" class="rounded-pill"> Dark </Button>

<Button color="light" class="rounded-pill"> Light </Button>
`;
  const softButtonsCode = `
<!-- Soft Buttons -->
<Button class="btn-soft-primary"> Primary </Button>

<Button class="btn-soft-secondary"> Secondary </Button>

<Button class="btn-soft-success"> Success </Button>

<Button class="btn-soft-info"> Info </Button>

<Button class="btn-soft-warning"> Warning </Button>

<Button class="btn-soft-danger"> Danger </Button>

<Button class="btn-soft-dark"> Dark </Button>
`;
  const gradientButtonsCode = `
<!-- Gradient Buttons -->
<Button color="primary" class="bg-gradient"> Primary </Button>

<Button color="secondary" class="bg-gradient"> Secondary </Button>

<Button color="success" class="bg-gradient"> Success </Button>

<Button color="info" class="bg-gradient"> Info </Button>

<Button color="warning" class="bg-gradient"> Warning </Button>

<Button color="danger" class="bg-gradient"> Danger </Button>

<Button color="dark" class="bg-gradient"> Dark </Button>

<Button color="light" class="bg-gradient"> Light </Button>
`;
  const animationButtonsCode = `
<!-- Animation Buttons -->
<Button color="primary" class="btn-animation" data-text="Primary"> <span>Primary</span> </Button>

<Button color="secondary" class="btn-animation" data-text="Secondary"> <span>Secondary</span> </Button>

<Button color="success" class="btn-animation" data-text="Success"> <span>Success</span> </Button>

<Button color="info" class="btn-animation" data-text="Info"> <span>Info</span> </Button>

<Button color="warning" class="btn-animation" data-text="Warning"> <span>Warning</span> </Button>

<Button color="danger" class="btn-animation" data-text="Danger"> <span>Danger</span> </Button>

<Button color="dark" class="btn-animation" data-text="Dark"> <span>Dark</span> </Button>
`;
  const labelButtonsCode = `
<!-- Buttons with Label -->
<Button color="primary" class="btn-label"> <i class="ri-user-smile-line label-icon align-middle fs-16 me-2"></i> Primary </Button>

<Button color="success" class="btn-label"> <i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success </Button>

<Button color="warning" class="btn-label"> <i class="ri-error-warning-line label-icon align-middle fs-16 me-2"></i> Warning </Button>

<!-- Rounded with Label -->
<Button color="primary" class="btn-label rounded-pill"> <i class="ri-user-smile-line label-icon align-middle fs-16 me-2"></i> Primary </Button>

<Button color="success" class="btn-label rounded-pill"> <i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success </Button>

<Button color="warning" class="btn-label rounded-pill"> <i class="ri-error-warning-line label-icon align-middle fs-16 me-2"></i> Warning </Button>

<!-- Buttons with Label Right -->
<Button color="primary" class="btn-label right"> <i class="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Primary </Button>

<Button color="success" class="btn-label right rounded-pill"> <i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i> Success </Button>
`;
  const sizeButtonsCode = `
<!-- Large Button -->
<Button size="lg" color="primary"> Large button </Button>

<Button size="lg" color="light"> Large button </Button>

<!-- Small Button -->
<Button size="sm" color="primary"> Small button </Button>

<Button size="sm" color="light"> Small button </Button>
`;
  const borderButtonsCode = `<!-- Border Buttons -->

<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button color="primary" class="btn-border">Primary</Button>
    <Button color="secondary" class="btn-border">Secondary</Button>
    <Button color="success" class="btn-border">Success</Button>
    <Button color="warning" class="btn-border">Warning</Button>
    <Button color="danger" class="btn-border">Danger</Button>
</div>

<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button color="primary" outline class="btn-border">Primary</Button>
    <Button color="secondary" outline class="btn-border">Secondary</Button>
    <Button color="success" outline class="btn-border">Success</Button>
    <Button class="btn-soft-warning btn-border">Warning</Button>
    <Button class="btn-soft-danger btn-border">Danger</Button>
    <Button class="btn-soft-dark btn-border">Dark</Button>
</div>
`;
  const customToggleButtonsCode = `<!-- Custom Toggle Buttons -->

<div class="d-flex flex-wrap align-items-center gap-2">
    <Button color='primary' class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
        <span class="icon-off">Unactive</span>
    </Button>
    <Button color='secondary' class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i> Connect</span>
        <span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i> Unconnect</span>
    </Button>
    <Button color='success' class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
        <span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
    </Button>
    <Button color='warning' class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button color='danger' class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on">On</span>
        <span class="icon-off">Off</span>
    </Button>
    <Button color='dark' class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
    </Button>
</div>

<div class="d-flex flex-wrap align-items-center gap-2">
    <Button color="primary" outline class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on">Active</span>
        <span class="icon-off">Unactive</span>
    </Button>
    <Button color="secondary" outline class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button color="success" outline class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on">On</span>
        <span class="icon-off">Off</span>
    </Button>
    <Button color="warning" outline class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on">Follow</span>
        <span class="icon-off">Unfollow</span>
    </Button>
    <Button color="danger" outline class="custom-toggle" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on">On</span>
        <span class="icon-off">Off</span>
    </Button>
    <Button color="dark" outline class="custom-toggle active" onClick={(e) => favouriteBtn(e.target)}>
        <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
    </Button>
</div>
`;
  const widthButtonsCode = `
<!-- Width Button -->
<Button color="primary" class="w-xs"> Xs </Button>

<Button color="danger" class="w-sm"> Small </Button>

<Button color="warning" class="w-md"> Medium </Button>

<Button color="success" class="w-lg"> Large </Button>
`;
  const tagButtonsCode = `
<!-- Tag Button -->
<Link href="#!" class="btn btn-primary"> Link </Link>

<Button color="success" type="submit"> Button </Button>

<Button color="info" type="button"> Input </Button>

<Button color="success" type="submit"> Submit </Button>

<Button color="warning" type="reset"> Reset </Button>
`;
  const gridButtonsCode = `
<!-- Buttons Grid -->
<div class="d-grid gap-2">
    <Button color="primary"> Button </Button>
    <Button color="primary"> Button </Button>
</div>
`;
  const checkButtonsCode = `<div class="d-flex flex-wrap align-items-center gap-2">
<ButtonGroup>
    <input type="checkbox" class="btn-check" id="btncheck1" checked />
    <Button color="primary" class="mb-0" id="btncheck1"> Checkbox 1 </Button>

    <input type="checkbox" class="btn-check" id="btncheck2" />
    <Button color="primary" class="mb-0" id="btncheck2"> Checkbox 2 </Button>

    <input type="checkbox" class="btn-check" id="btncheck3" />
    <Button color="primary" class="mb-0" id="btncheck3"> Checkbox 3 </Button>
</ButtonGroup>

<ButtonGroup>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
    <Button color="secondary" class="mb-0" id="btnradio1" outline> Radio 1 </Button>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
    <Button color="secondary" class="mb-0" id="btnradio2" outline> Radio 2 </Button>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
    <Button color="secondary" class="mb-0" id="btnradio3" outline> Radio 3 </Button>

</ButtonGroup>
</div>
`;
  const groupButtonsCode = `
<!-- Buttons Group -->
<ButtonGroup>
    <Button color="primary"> Left </Button>
    <Button color="primary"> Middle </Button>
    <Button color="primary"> Right </Button>
</ButtonGroup>

<!-- Radio Buttons -->
<ButtonGroup class="mt-4 mt-sm-0">
    <Button color="light" class="btn-icon"> <i class="ri-align-right" /> </Button>
    <Button color="light" class="btn-icon"> <i class="ri-align-center" /> </Button>
    <Button color="light" class="btn-icon"> <i class="ri-align-left" /> </Button>
</ButtonGroup>
`;
  const iconButtonsCode = `
<!-- Buttons Group -->
<Button color="primary" class="btn-icon"> <i class="ri-map-pin-line" /> </Button>
<Button color="danger" class="btn-icon"> <i class="ri-delete-bin-5-line" /> </Button>
<Button color="success" class="btn-icon"> <i class="ri-check-double-line" /> </Button>
<Button color="light" class="btn-icon"> <i class="ri-brush-2-fill" /> </Button>

<Button color="primary" class="btn-icon" outline> <i class="ri-24-hours-fill" /> </Button>
<Button color="danger" class="btn-icon" outline> <i class="ri-customer-service-2-line" /> </Button>
<Button color="success" class="btn-icon" outline> <i class="ri-mail-send-line" /> </Button>
<Button color="warning" class="btn-icon" outline> <i class="ri-menu-2-line" /> </Button>
`;
  const toolbarButtonsCode = `
<!-- Buttons Toolbar -->
<ButtonToolbar>
    <ButtonGroup class="me-2">
        <Button color="light">1</Button>
        <Button color="light">2</Button>
        <Button color="light">3</Button>
        <Button color="light">4</Button>
    </ButtonGroup>
    <ButtonGroup class="me-2">
        <Button color="light">5</Button>
        <Button color="light">6</Button>
        <Button color="light">7</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button color="light">8</Button>
    </ButtonGroup>
</ButtonToolbar>
`;
  const groupSizingButtonsCode = `
<!-- Group Buttons Sizing -->
<ButtonGroup size="lg">
    <Button color="primary">Left</Button>
    <Button color="primary">Middle</Button>
    <Button color="primary">Right</Button>
</ButtonGroup>

<ButtonGroup class="mt-2">
    <Button color="light">Left</Button>
    <Button color="light">Middle</Button>
    <Button color="light">Right</Button>
</ButtonGroup>

<ButtonGroup size="sm" class="mt-2">
    <Button color="secondary">Left</Button>
    <Button color="secondary">Middle</Button>
    <Button color="secondary">Right</Button>
</ButtonGroup>
`;
  const verticalButtonsCode = `<Row>
<div class="col-auto">
    <ButtonGroup>
        <Button color="primary">1</Button>
        <Button color="primary">2</Button>
        <Dropdown id="btnGroupDrop1">
            <DropdownToggle color="primary" caret>
                Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem> Dropdown link </DropdownItem>
                <DropdownItem> Dropdown link </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </ButtonGroup>
</div>
<div class="col-auto">
    <ButtonGroup vertical>
        <Button color="light">Button</Button>

        <Dropdown id="btnGroupVerticalDrop1">
            <DropdownToggle color="light" caret>
                Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem> Dropdown link </DropdownItem>
                <DropdownItem> Dropdown link </DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <Button color="light">Button</Button>
        <Button color="light">Button</Button>
    </ButtonGroup>
</div>
<div class="col-auto">
    <ButtonGroup vertical>
        <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked />
        <Button color="secondary" for="vbtn-radio1" outline>Radio 1</Button>
        <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2" />
        <Button color="secondary" for="vbtn-radio2" outline>Radio 2</Button>
        <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3" />
        <Button color="secondary" for="vbtn-radio3" outline>Radio 3</Button>
    </ButtonGroup>
</div>
</Row>
`;
  const ghostButtonsCode = `
<!-- Ghost Buttons -->

<Button color="primary" outline class="btn btn-ghost-primary">Primary</Button>

<Button color="secondary" outline class="btn btn-ghost-secondary">Secondary</Button>

<Button color="success" outline class="btn btn-ghost-success">Success</Button>

<Button color="info" outline class="btn btn-ghost-info">Info</Button>

<Button color="warning" outline class="btn btn-ghost-warning">Warning</Button>

<Button color="danger" outline class="btn btn-ghost-danger">Danger</Button>

<Button color="dark" outline class="btn btn-ghost-dark">Dark</Button>
`;
  const loadingbuttonsCode = `
<!-- Load More Buttons -->

<div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button color="primary" class="btn-load" outline>
        <span class="d-flex align-items-center">
            <Spinner size="sm" class="flex-shrink-0"> Loading... </Spinner>
            <span class="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button color="success" class="btn-load">
        <span class="d-flex align-items-center">
            <Spinner size="sm" class="flex-shrink-0"> Loading... </Spinner>
            <span class="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button color="secondary" class="btn-load" outline>
        <span class="d-flex align-items-center">
            <Spinner size="sm" type="grow" class="flex-shrink-0"> Loading... </Spinner>
            <span class="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button color="danger" class="btn-load">
        <span class="d-flex align-items-center">
            <Spinner size="sm" type="grow" class="flex-shrink-0"> Loading... </Spinner>
            <span class="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
</div>

<div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
    <Button color="primary" class="btn-load" outline>
        <span class="d-flex align-items-center">
            <span class="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner size="sm" class="flex-shrink-0" role="status"> Loading... </Spinner>
        </span>
    </Button>
    <Button color="success" class="btn-load">
        <span class="d-flex align-items-center">
            <span class="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner size="sm" class="flex-shrink-0" role="status"> Loading... </Spinner>
        </span>
    </Button>
    <Button color="warning" class="btn-load" outline>
        <span class="d-flex align-items-center">
            <span class="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner size="sm" type="grow" class="flex-shrink-0" role="status"> Loading... </Spinner>
        </span>
    </Button>
    <Button color="info" class="btn-load">
        <span class="d-flex align-items-center">
            <span class="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner size="sm" type="grow" class="flex-shrink-0" role="status"> Loading... </Spinner>
        </span>
    </Button>
</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Buttons | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Buttons", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Buttons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>Button</code> tag to show the default button
							style.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "info" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "link" }, {}, {
                        default: () => {
                          return `Link`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultButtonsCode,
                        id: "defaultButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Outline Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>outline</code> atrribute with the below-mentioned
							variation to create a button with the outline.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", outline: true }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary", outline: true }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", outline: true }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "info", outline: true }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning", outline: true }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger", outline: true }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "dark", outline: true }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", outline: true }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: outlineButtonsCode,
                        id: "outlineButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Rounded Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>rounded-pill </code>class to make a
							rounded button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "secondary",
                        class: "rounded-pill"
                      }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "info", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "dark", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", class: "rounded-pill" }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: roundedButtonsCode,
                        id: roundedButtonsCode
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Soft Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-soft-</code> class with the below-mentioned
							variation to create a button with the soft background.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-primary" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-secondary" }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-success" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-info" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-warning" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-danger" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-dark" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: softButtonsCode,
                        id: "softButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ghost Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-ghost-</code> class with the below-mentioned
							variation to create a button with the transparent background.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "primary",
                        outline: true,
                        class: "btn btn-ghost-primary"
                      }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "secondary",
                        outline: true,
                        class: "btn btn-ghost-secondary"
                      }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "success",
                        outline: true,
                        class: "btn btn-ghost-success"
                      }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "info",
                        outline: true,
                        class: "btn btn-ghost-info"
                      }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "warning",
                        outline: true,
                        class: "btn btn-ghost-warning"
                      }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "danger",
                        outline: true,
                        class: "btn btn-ghost-danger"
                      }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "dark",
                        outline: true,
                        class: "btn btn-ghost-dark"
                      }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: ghostButtonsCode,
                        id: "ghostButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Gradient Buttons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>bg-gradient </code>class to create a
							gradient button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "info", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "dark", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", class: "bg-gradient" }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: gradientButtonsCode,
                        id: "gradientButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Animation Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>bg-animation </code>class to create an
							animated button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "primary",
                        class: "btn-animation",
                        "data-text": "Primary"
                      }, {}, {
                        default: () => {
                          return `<span>Primary</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "secondary",
                        class: "btn-animation",
                        "data-text": "Secondary"
                      }, {}, {
                        default: () => {
                          return `<span>Secondary</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "success",
                        class: "btn-animation",
                        "data-text": "Success"
                      }, {}, {
                        default: () => {
                          return `<span>Success</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "info",
                        class: "btn-animation",
                        "data-text": "Info"
                      }, {}, {
                        default: () => {
                          return `<span>Info</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "warning",
                        class: "btn-animation",
                        "data-text": "Warning"
                      }, {}, {
                        default: () => {
                          return `<span>Warning</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "danger",
                        class: "btn-animation",
                        "data-text": "Danger"
                      }, {}, {
                        default: () => {
                          return `<span>Danger</span>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "dark",
                        class: "btn-animation",
                        "data-text": "Dark"
                      }, {}, {
                        default: () => {
                          return `<span>Dark</span>`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: animationButtonsCode,
                        id: "animationButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons with Label" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-label </code>class to create a button
							with the label.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "btn-label" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon align-middle fs-16 me-2"}"></i> Primary
										`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-label" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon align-middle fs-16 me-2"}"></i> Success
										`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "btn-label" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line label-icon align-middle fs-16 me-2"}"></i> Warning
										`;
                                }
                              })}</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "btn-label rounded-pill"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon align-middle fs-16 me-2"}"></i> Primary
										`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                class: "btn-label rounded-pill"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon align-middle fs-16 me-2"}"></i> Success
										`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "warning",
                                class: "btn-label rounded-pill"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-error-warning-line label-icon align-middle fs-16 me-2"}"></i> Warning
										`;
                                }
                              })}</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "btn-label right"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-user-smile-line label-icon align-middle fs-16 ms-2"}"></i> Primary
										`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                class: "btn-label right rounded-pill"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"}"></i> Success
										`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: labelButtonsCode,
                        id: "labelButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Load More Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of loading buttons.</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"hstack flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "btn-load",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: "sm", class: "flex-shrink-0" }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}
												<span class="${"flex-grow-1 ms-2"}">Loading...
												</span></span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-load" }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: "sm", class: "flex-shrink-0" }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}
												<span class="${"flex-grow-1 ms-2"}">Loading...
												</span></span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                class: "btn-load",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}">${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    type: "grow",
                                    class: "flex-shrink-0"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}
												<span class="${"flex-grow-1 ms-2"}">Loading...
												</span></span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "btn-load" }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}">${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    type: "grow",
                                    class: "flex-shrink-0"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}
												<span class="${"flex-grow-1 ms-2"}">Loading...
												</span></span>`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "btn-load",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}"><span class="${"flex-grow-1 me-2"}">Loading...
												</span>
												${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    class: "flex-shrink-0",
                                    role: "status"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-load" }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}"><span class="${"flex-grow-1 me-2"}">Loading...
												</span>
												${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    class: "flex-shrink-0",
                                    role: "status"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...`;
                                    }
                                  })}</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "warning",
                                class: "btn-load",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}"><span class="${"flex-grow-1 me-2"}">Loading...
												</span>
												${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    type: "grow",
                                    class: "flex-shrink-0",
                                    role: "status"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...
												`;
                                    }
                                  })}</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "info", class: "btn-load" }, {}, {
                                default: () => {
                                  return `<span class="${"d-flex align-items-center"}"><span class="${"flex-grow-1 me-2"}">Loading...
												</span>
												${validate_component(Spinner, "Spinner").$$render($$result, {
                                    size: "sm",
                                    type: "grow",
                                    class: "flex-shrink-0",
                                    role: "status"
                                  }, {}, {
                                    default: () => {
                                      return `Loading...
												`;
                                    }
                                  })}</span>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: loadingbuttonsCode,
                        id: "loadingbuttonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Border Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of simple bottom borderd buttons.</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"hstack flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "btn-border" }, {}, {
                                default: () => {
                                  return `Primary`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "secondary", class: "btn-border" }, {}, {
                                default: () => {
                                  return `Secondary`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-border" }, {}, {
                                default: () => {
                                  return `Success`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "btn-border" }, {}, {
                                default: () => {
                                  return `Warning`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "btn-border" }, {}, {
                                default: () => {
                                  return `Danger`;
                                }
                              })}</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"hstack flex-wrap gap-2 mb-3 mb-lg-0"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                outline: true,
                                class: "btn-border"
                              }, {}, {
                                default: () => {
                                  return `Primary`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                outline: true,
                                class: "btn-border"
                              }, {}, {
                                default: () => {
                                  return `Secondary`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                outline: true,
                                class: "btn-border"
                              }, {}, {
                                default: () => {
                                  return `Success`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-warning btn-border" }, {}, {
                                default: () => {
                                  return `Warning`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-danger btn-border" }, {}, {
                                default: () => {
                                  return `Danger`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { class: "btn-soft-dark btn-border" }, {}, {
                                default: () => {
                                  return `Dark`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: borderButtonsCode,
                        id: "borderButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Toggle Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of toggle buttons.</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap align-items-center gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-alarm-line align-bottom"}"></i> Active</span>
											<span class="${"icon-off"}">Unactive</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-user-add-line align-bottom me-1"}"></i> Connect</span>
											<span class="${"icon-off"}"><i class="${"ri-check-fill align-bottom me-1"}"></i> Unconnect</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "custom-toggle" }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-thumb-up-line align-bottom me-1"}"></i> Yes</span>
											<span class="${"icon-off"}"><i class="${"ri-thumb-down-line align-bottom me-1"}"></i> No</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "warning",
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Follow</span>
											<span class="${"icon-off"}"><i class="${"ri-user-unfollow-line align-bottom me-1"}"></i> Unfollow</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "custom-toggle" }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}">On</span>
											<span class="${"icon-off"}">Off</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "dark", class: "custom-toggle" }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-bookmark-line align-bottom me-1"}"></i> Bookmark</span>
											<span class="${"icon-off"}"><i class="${"ri-bookmark-3-fill align-bottom me-1"}"></i> Unbookmark</span>`;
                                }
                              })}</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"d-flex flex-wrap align-items-center gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                outline: true,
                                class: "custom-toggle"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}">Active</span>
											<span class="${"icon-off"}">Unactive</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                outline: true,
                                class: "custom-toggle"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Follow</span>
											<span class="${"icon-off"}"><i class="${"ri-user-unfollow-line align-bottom me-1"}"></i> Unfollow</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                outline: true,
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}">On</span>
											<span class="${"icon-off"}">Off</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "warning",
                                outline: true,
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}">Follow</span>
											<span class="${"icon-off"}">Unfollow</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "danger",
                                outline: true,
                                class: "custom-toggle"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}">On</span>
											<span class="${"icon-off"}">Off</span>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "dark",
                                outline: true,
                                class: "custom-toggle active"
                              }, {}, {
                                default: () => {
                                  return `<span class="${"icon-on"}"><i class="${"ri-bookmark-line align-bottom"}"></i></span>
											<span class="${"icon-off"}"><i class="${"ri-bookmark-3-fill align-bottom"}"></i></span>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: customToggleButtonsCode,
                        id: "customToggleButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Sizes" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-lg</code> class to create a large size
							button and <code>btn-sm</code> class to create a small
							size button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap align-items-center gap-2"}">${validate_component(Button, "Button").$$render($$result, { size: "lg", color: "primary" }, {}, {
                        default: () => {
                          return `Large button`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { size: "lg", color: "light" }, {}, {
                        default: () => {
                          return `Large button`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "primary" }, {}, {
                        default: () => {
                          return `Small button`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "light" }, {}, {
                        default: () => {
                          return `Small button`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: sizeButtonsCode,
                        id: "sizeButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Width" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different
							sized buttons respectively.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "w-xs" }, {}, {
                        default: () => {
                          return `Xs`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "w-sm" }, {}, {
                        default: () => {
                          return `Small`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning", class: "w-md" }, {}, {
                        default: () => {
                          return `Medium`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", class: "w-lg" }, {}, {
                        default: () => {
                          return `Large`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: widthButtonsCode,
                        id: "widthButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Tag" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn</code> class with different HTML elements.
							(though some browsers may apply a slightly different
							rendering)
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-primary" }, {}, {
                        default: () => {
                          return `Link`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", type: "submit" }, {}, {
                        default: () => {
                          return `Button`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "info", type: "button" }, {}, {
                        default: () => {
                          return `Input`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success", type: "submit" }, {}, {
                        default: () => {
                          return `Submit`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "warning", type: "reset" }, {}, {
                        default: () => {
                          return `Reset`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: tagButtonsCode,
                        id: "tagButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Toggle Status" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>data-bs-toggle=&quot;button&quot;</code> to toggle a
							button\u2019s active state.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "primary",
                        "data-bs-toggle": "button",
                        "aria-pressed": "false"
                      }, {}, {
                        default: () => {
                          return `Single toggle
								`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}"><pre class="${"language-markup"}">                                <code>&lt;!-- Toggle Button Status --&gt;
                                    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary waves-effect waves-light&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
                                    Single toggle
                                    &lt;/button&gt;</code></pre></div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Grid" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>d-grid</code> class to create a full-width
							block button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-grid gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Button`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Button`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: gridButtonsCode,
                        id: "gridButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Checkbox & Radio Buttons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Combine button-like <code>checkbox and radio</code>
							<a href="${"//getbootstrap.com/docs/5.1/forms/checks-radios/"}">toggle buttons</a> into a seamless looking button group.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap align-items-center gap-2"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `<input type="${"checkbox"}" class="${"btn-check"}" id="${"btncheck1"}" checked>
									${validate_component(Button, "Button").$$render($$result, {
                            color: "primary",
                            class: "mb-0",
                            id: "btncheck1"
                          }, {}, {
                            default: () => {
                              return `Checkbox 1`;
                            }
                          })}

									<input type="${"checkbox"}" class="${"btn-check"}" id="${"btncheck2"}">
									${validate_component(Button, "Button").$$render($$result, {
                            color: "primary",
                            class: "mb-0",
                            id: "btncheck2"
                          }, {}, {
                            default: () => {
                              return `Checkbox 2`;
                            }
                          })}

									<input type="${"checkbox"}" class="${"btn-check"}" id="${"btncheck3"}">
									${validate_component(Button, "Button").$$render($$result, {
                            color: "primary",
                            class: "mb-0",
                            id: "btncheck3"
                          }, {}, {
                            default: () => {
                              return `Checkbox 3`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `<input type="${"radio"}" class="${"btn-check"}" name="${"btnradio"}" id="${"btnradio1"}" checked>
									${validate_component(Button, "Button").$$render($$result, {
                            color: "secondary",
                            class: "mb-0",
                            id: "btnradio1",
                            outline: true
                          }, {}, {
                            default: () => {
                              return `Radio 1`;
                            }
                          })}

									<input type="${"radio"}" class="${"btn-check"}" name="${"btnradio"}" id="${"btnradio2"}">
									${validate_component(Button, "Button").$$render($$result, {
                            color: "secondary",
                            class: "mb-0",
                            id: "btnradio2",
                            outline: true
                          }, {}, {
                            default: () => {
                              return `Radio 2`;
                            }
                          })}

									<input type="${"radio"}" class="${"btn-check"}" name="${"btnradio"}" id="${"btnradio3"}">
									${validate_component(Button, "Button").$$render($$result, {
                            color: "secondary",
                            class: "mb-0",
                            id: "btnradio3",
                            outline: true
                          }, {}, {
                            default: () => {
                              return `Radio 3`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: checkButtonsCode,
                        id: "checkButtonsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Group" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>btn-group </code> class in the parent class
							to wrap a series of buttons.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                    default: () => {
                                      return `Left`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                    default: () => {
                                      return `Middle`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                    default: () => {
                                      return `Right`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "mt-4 mt-sm-0" }, {}, {
                                default: () => {
                                  return `${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-icon" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-align-right"}"></i>`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-icon" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-align-center"}"></i>`;
                                    }
                                  })}
										${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-icon" }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-align-left"}"></i>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: groupButtonsCode,
                        id: "groupButtonsCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Icon Buttons" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-icon</code> class to wrap icon in button
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"hstack gap-2 "}">${validate_component(Button, "Button").$$render($$result, { color: "primary", class: "btn-icon" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-map-pin-line"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "danger", class: "btn-icon" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-delete-bin-5-line"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "success", class: "btn-icon" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-check-double-line"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-icon" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-brush-2-fill"}"></i>`;
                                }
                              })}</div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"hstack gap-2 mt-4 mt-sm-0"}">${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                class: "btn-icon",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-24-hours-fill"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "danger",
                                class: "btn-icon",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-customer-service-2-line"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "success",
                                class: "btn-icon",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-mail-send-line"}"></i>`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, {
                                color: "warning",
                                class: "btn-icon",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-menu-2-line"}"></i>`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: iconButtonsCode,
                        id: "iconButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Buttons Toolbar" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-toolbar</code> class to combine sets of
							button groups into more complex components.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(ButtonToolbar, "ButtonToolbar").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "me-2" }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `1`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `3`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `4`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "me-2" }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `5`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `6`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `7`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `8`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: toolbarButtonsCode,
                        id: "toolbarButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Button Group Sizing" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-group-</code> class with the below-mentioned
							variation to set the different sizes of button groups.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap align-items-center gap-2"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { size: "lg" }, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                            default: () => {
                              return `Left`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                            default: () => {
                              return `Middle`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                            default: () => {
                              return `Right`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "mt-2" }, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                            default: () => {
                              return `Left`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                            default: () => {
                              return `Middle`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                            default: () => {
                              return `Right`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { size: "sm", class: "mt-2" }, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                            default: () => {
                              return `Left`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                            default: () => {
                              return `Middle`;
                            }
                          })}
									${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                            default: () => {
                              return `Right`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: groupSizingButtonsCode,
                        id: "groupSizingButtonsCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Vertical Variation" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Make a set of buttons appear <code>vertically</code>
							stacked .Split button dropdowns are not supported here.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div class="${"col-auto"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `1`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}
										${validate_component(Dropdown, "Dropdown").$$render($$result, { id: "btnGroupDrop1" }, {}, {
                                default: () => {
                                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "primary", caret: true }, {}, {
                                    default: () => {
                                      return `Dropdown`;
                                    }
                                  })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `Dropdown link`;
                                        }
                                      })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `Dropdown link`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}</div>
								<div class="${"col-auto"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { vertical: true }, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `Button`;
                                }
                              })}

										${validate_component(Dropdown, "Dropdown").$$render($$result, { id: "btnGroupVerticalDrop1" }, {}, {
                                default: () => {
                                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { color: "light", caret: true }, {}, {
                                    default: () => {
                                      return `Dropdown`;
                                    }
                                  })}
											${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `Dropdown link`;
                                        }
                                      })}
												${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `Dropdown link`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `Button`;
                                }
                              })}
										${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `Button`;
                                }
                              })}`;
                            }
                          })}</div>
								<div class="${"col-auto"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { vertical: true }, {}, {
                            default: () => {
                              return `<input type="${"radio"}" class="${"btn-check"}" name="${"vbtn"}" id="${"vbtn-radio1"}" checked>
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                for: "vbtn-radio1",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `Radio 1`;
                                }
                              })}
										<input type="${"radio"}" class="${"btn-check"}" name="${"vbtn"}" id="${"vbtn-radio2"}">
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                for: "vbtn-radio2",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `Radio 2`;
                                }
                              })}
										<input type="${"radio"}" class="${"btn-check"}" name="${"vbtn"}" id="${"vbtn-radio3"}">
										${validate_component(Button, "Button").$$render($$result, {
                                color: "secondary",
                                for: "vbtn-radio3",
                                outline: true
                              }, {}, {
                                default: () => {
                                  return `Radio 3`;
                                }
                              })}`;
                            }
                          })}</div>`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: verticalButtonsCode,
                        id: "verticalButtonsCode"
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
export { Uibuttons as default };
