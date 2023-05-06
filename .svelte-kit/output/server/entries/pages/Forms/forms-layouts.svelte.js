import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { I as InputGroup } from "../../../chunks/InputGroup-94216050.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import "../../../chunks/CardHeader-84e061db.js";
const Forms_layouts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const FormGrid = `<Col md={6}>
<div class="mb-3">
    <Label for="firstNameinput" class="form-label">First Name</Label>
    <Input type="text" class="form-control" placeholder="Enter your firstname" id="firstNameinput"/>
</div>
</Col>
<Col md={6}>
    <div class="mb-3">
        <Label for="lastNameinput" class="form-label">Last Name</Label>
        <Input type="text" class="form-control" placeholder="Enter your lastname" id="lastNameinput"/>
    </div>
</Col>
<Col md={12}>
    <div class="mb-3">
        <Label for="compnayNameinput" class="form-label">Company Name</Label>
        <Input type="text" class="form-control" placeholder="Enter company name" id="compnayNameinput"/>
    </div>
</Col>
<Col md={6}>
    <div class="mb-3">
        <Label for="phonenumberInput" class="form-label">Phone Number</Label>
        <Input type="tel" class="form-control" placeholder="+(245) 451 45123" id="phonenumberInput"/>
    </div>
</Col>
<Col md={6}>
    <div class="mb-3">
        <Label for="emailidInput" class="form-label">Email Address</Label>
        <Input type="email" class="form-control" placeholder="example@gamil.com" id="emailidInput"/>
    </div>
</Col>
<Col md={12}>
    <div class="mb-3">
        <Label for="address1ControlTextarea" class="form-label">Address</Label>
        <Input type="text" class="form-control" placeholder="Address 1" id="address1ControlTextarea"/>
    </div>
</Col>
<Col md={6}>
    <div class="mb-3">
        <Label for="citynameInput" class="form-label">City</Label>
        <Input type="email" class="form-control" placeholder="Enter your city" id="citynameInput"/>
    </div>
</Col>
<Col md={6}>
    <div class="mb-3">
        <Label for="ForminputState" class="form-label">State</Label>
        <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
            <option>Choose...</option>
            <option>...</option>
        </select>
    </div>
</Col>
<Col md={12}>
    <div class="text-end">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</Col>
`;
  const Gutters = `
<Col md={12}>
<Label for="fullnameInput" class="form-label">Name</Label>
<Input type="text" class="form-control" id="fullnameInput" placeholder="Enter your name"/>
</Col>
<Col md={6}>
    <Label for="inputEmail4" class="form-label">Email</Label>
    <Input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
</Col>
<Col md={6}>
    <Label for="inputPassword4" class="form-label">Password</Label>
    <Input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
</Col>
<Col xs={12}>
    <Label for="inputAddress" class="form-label">Address</Label>
    <Input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
</Col>
<Col xs={12}>
    <Label for="inputAddress2" class="form-label">Address 2</Label>
    <Input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
</Col>
<Col md={6}>
    <Label for="inputCity" class="form-label">City</Label>
    <Input type="text" class="form-control" id="inputCity" placeholder="Enter your city"/>
</Col>
<Col md={4}>
    <Label for="inputState" class="form-label">State</Label>
    <select id="inputState" class="form-select" data-choices data-choices-sorting="true">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</Col>
<Col md={2}>
    <Label for="inputZip" class="form-label">Zip</Label>
    <Input type="text" class="form-control" id="inputZip" placeholder="Zin code"/>
</Col>
<Col xs={12}>
    <div class="form-check">
        <Input class="form-check-input" type="checkbox" id="gridCheck"/>
        <Label class="form-check-label" for="gridCheck">
            Check me out
        </Label>
    </div>
</Col>
<Col xs={12}>
    <div class="text-end">
        <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
</Col>
`;
  const VerticalForm = `
<div class="mb-3">
<Label for="employeeName" class="form-label">Employee Name</Label>
    <Input type="text" class="form-control" id="employeeName" placeholder="Enter emploree name"/>
</div>
<div class="mb-3">
    <Label for="employeeUrl" class="form-label">Employee Department URL</Label>
    <Input type="url" class="form-control" id="employeeUrl" placeholder="Enter emploree url"/>
</div>
<div class="mb-3">
    <Label for="StartleaveDate" class="form-label">Start Leave Date</Label>
    <Flatpickr
        class="form-control"
        options={{
        dateFormat: "d M, Y"
        }}
    />
</div>
<div class="mb-3">
    <Label for="EndleaveDate" class="form-label">End Leave Date</Label>
    <Flatpickr
        class="form-control"
        options={{
        dateFormat: "d M, Y"
        }}
    />
</div>
<div class="mb-3">
    <Label for="VertimeassageInput" class="form-label">Message</Label>
    <textarea class="form-control" id="VertimeassageInput" rows="3" placeholder="Enter your message"></textarea>
</div>
<div class="text-end">
    <button type="submit" class="btn btn-primary">Add Leave</button>
</div>
`;
  const HorizontalForm = `<Row class="mb-3">
<Col lg={3} >
    <Label for="nameInput" class="form-label">Name</Label>
</Col>
<Col lg={9} >
    <Input type="text" class="form-control" id="nameInput" placeholder="Enter your name"/>
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="websiteUrl" class="form-label">Website URL</Label>
</Col>
<Col lg={9} >
    <Input type="url" class="form-control" id="websiteUrl" placeholder="Enter your url"/>
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="dateInput" class="form-label">Date</Label>
</Col>
<Col lg={9} >
    <Flatpickr
        class="form-control"
        options={{
        dateFormat: "d M, Y"
        }}
    />
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="timeInput" class="form-label">Time</Label>
</Col>
<Col lg={9} >
<Flatpickr
    class="form-control"
    options={{
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    }}
/>
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="leaveemails" class="form-label">Email Id</Label>
</Col>
<Col lg={9} >
    <Input type="email" class="form-control" id="leaveemails" placeholder="Enter your email"/>
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="contactNumber" class="form-label">Contact Number</Label>
</Col>
<Col lg={9} >
    <Input type="number" class="form-control" id="contactNumber" placeholder="+91 9876543210"/>
</Col>
</Row>
<Row class="mb-3">
<Col lg={3} >
    <Label for="meassageInput" class="form-label">Message</Label>
</Col>
<Col lg={9} >
    <textarea class="form-control" id="meassageInput" rows="3" placeholder="Enter your message"></textarea>
</Col>
</Row>
<div class="text-end">
<button type="submit" class="btn btn-primary">Add Leave</button>
</div>
`;
  const HorizontalFormLabelSizing = `<Col xxl={4}>
<Row>
    <Label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</Label>
    <div class="col-sm-10">
        <Input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
    </div>
</Row>
</Col>
<Col xxl={4}>
<Row>
    <Label for="colFormLabel" class="col-sm-2 col-form-label">Email</Label>
    <div class="col-sm-10">
        <Input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label"/>
    </div>
</Row>
</Col>
<Col xxl={4}>
<Row>
    <Label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</Label>
    <div class="col-sm-10">
        <Input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
    </div>
</Row>
</Col>
`;
  const ColumnSizing = `<Col sm={6}>
<Input type="text" class="form-control" placeholder="Firstname" aria-label="First-Name"/>
</Col>
<Col sm={6}>
    <Input type="text" class="form-control" placeholder="Lastname" aria-label="Last-Name"/>
</Col>
<Col sm={4}>
    <Input type="text" class="form-control" placeholder="Email id" aria-label="Email Id"/>
</Col>
<Col sm={4}>
    <Input type="password" class="form-control" placeholder="Password" aria-label="Password"/>
</Col>
<Col sm={4}>
    <Input type="password" class="form-control" placeholder="Confirm Password" aria-label="confirm-password"/>
</Col>
<Col sm={7}>
    <Input type="text" class="form-control" placeholder="City" aria-label="City"/>
</Col>
<Col sm>
    <Input type="text" class="form-control" placeholder="State" aria-label="State"/>
</Col>
<Col sm>
    <Input type="text" class="form-control" placeholder="Zip" aria-label="Zip"/>
</Col>
    `;
  const AutoSizing = `<Form action="#">
<Row class="gy-2 gx-3 mb-3 align-items-center">
    <Col sm>
        <Label class="visually-hidden" for="autoSizingInput">Name</Label>
        <Input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe"/>
    </Col>
    <Col sm>
        <Label class="visually-hidden" for="autoSizingInputGroup">Username</Label>
        <div class="input-group">
            <div class="input-group-text">@</div>
            <Input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username"/>
        </div>
    </Col>
    <Col sm>
        <Label class="visually-hidden" for="autoSizingSelect">Preference</Label>
        <select class="form-select" data-choices data-choices-sorting="true" id="autoSizingSelect">
            <option >Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </Col>
    <Col class="sm-auto">
        <div class="form-check">
            <Input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
            <Label class="form-check-label" for="autoSizingCheck">
                Remember me
            </Label>
        </div>
    </Col>
    <Col class="sm-auto">
        <button type="submit" class="btn btn-primary">Submit</button>
    </Col>
</Row>
</Form>

<Form>
<Row class="gx-3 gy-2 align-items-center">
    <Col sm={3}>
        <Label class="visually-hidden" for="specificSizeInputName">Name</Label>
        <Input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe"/>
    </Col>
    <Col sm={3}>
        <Label class="visually-hidden" for="specificSizeInputGroupUsername">Username</Label>
        <InputGroup>
            <div class="input-group-text">@</div>
            <Input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username"/>
        </InputGroup>
    </Col>
    <Col sm={3}>
        <Label class="visually-hidden" for="specificSizeSelect">Preference</Label>
        <select class="form-select" data-choices data-choices-sorting="true" id="specificSizeSelect">
            <option >Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </Col>
    <div class="col-auto">
        <div class="form-check">
            <Input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
            <Label class="form-check-label" for="autoSizingCheck2">
                Remember me
            </Label>
        </div>
    </div>
    <Col >
        <button type="submit" class="btn btn-primary">Submit</button>
    </Col>
</Row>
</Form>
`;
  const InlineForms = `<Row class="row-cols-lg-auto g-3 align-items-center">
<Col xs={12}>
    <Label class="visually-hidden" for="inlineFormInputGroupUsername">Username</Label>
    <div class="input-group">
        <div class="input-group-text">@</div>
        <Input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
    </div>
</Col>
<Col xs={12}>
    <Label class="visually-hidden" for="inlineFormSelectPref">Preference</Label>
    <select class="form-select" data-choices data-choices-sorting="true" id="inlineFormSelectPref">
        <option >Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</Col>
<Col xs={12}>
    <div class="form-check">
        <Input class="form-check-input" type="checkbox" id="inlineFormCheck" />
        <Label class="form-check-label" for="inlineFormCheck">
            Remember me
        </Label>
    </div>
</Col>
<Col xs={12}>
    <button type="submit" class="btn btn-primary">Submit</button>
</Col>
</Row>
`;
  const FloatingLabels = `<Form action="#">
<Row class="g-3">
    <Col lg={6}>
        <div class="form-floating">
            <Input type="text" class="form-control" id="firstnamefloatingInput" placeholder="Enter your firstname"/>
            <Label for="firstnamefloatingInput">First Name</Label>
        </div>
    </Col>
    <Col lg={6}>
        <div class="form-floating">
            <Input type="text" class="form-control" id="lastnamefloatingInput" placeholder="Enter your Lastname"/>
            <Label for="lastnamefloatingInput">Last Name</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <Input type="email" class="form-control" id="emailfloatingInput" placeholder="Enter your email"/>
            <Label for="emailfloatingInput">Email Address</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <Input type="password" class="form-control" id="passwordfloatingInput" placeholder="Enter your password"/>
            <Label for="passwordfloatingInput">Password</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <Input type="password" class="form-control" id="passwordfloatingInput1" placeholder="Confirm password"/>
            <Label for="passwordfloatingInput1">Confirm Password</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <Input type="text" class="form-control" id="cityfloatingInput" placeholder="Enter your city"/>
            <Label for="cityfloatingInput">City</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option >Choose...</option>
              <option value="1">USA</option>
              <option value="2">Brazil</option>
              <option value="3">France</option>
              <option value="4">Germany</option>
            </select>
            <Label for="floatingSelect">Country</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div class="form-floating">
            <Input type="number" class="form-control" id="zipfloatingInput" placeholder="Enter your zipcode"/>
            <Label for="zipfloatingInput">Zipcode</Label>
        </div>
    </Col>
    <Col lg={12}>
        <div class="text-end">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </Col>
</Row>
</Form>
`;
  return `${$$result.head += `${$$result.title = `<title>Form Layout | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Form Layouts",
        pageTitle: "Forms"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Form Grid" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">More complex forms can be built using our grid
							classes. Use these for form layouts that require
							multiple columns, varied widths, and additional
							alignment options. <span class="${"fw-medium"}">Requires the <code>$enable-grid-classes</code> Sass
								variable to be enabled</span> (on by default).
						</p>
						<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "firstNameinput",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `First Name`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "Enter your firstname",
                                    id: "firstNameinput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "lastNameinput",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Last Name`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "Enter your lastname",
                                    id: "lastNameinput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "compnayNameinput",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Company Name`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "Enter company name",
                                    id: "compnayNameinput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "phonenumberInput",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Phone Number`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "tel",
                                    class: "form-control",
                                    placeholder: "+(245) 451 45123",
                                    id: "phonenumberInput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "emailidInput", class: "form-label" }, {}, {
                                    default: () => {
                                      return `Email Address`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "email",
                                    class: "form-control",
                                    placeholder: "example@gamil.com",
                                    id: "emailidInput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "address1ControlTextarea",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Address`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "Address 1",
                                    id: "address1ControlTextarea"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "citynameInput",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `City`;
                                    }
                                  })}
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "email",
                                    class: "form-control",
                                    placeholder: "Enter your city",
                                    id: "citynameInput"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                                    for: "ForminputState",
                                    class: "form-label"
                                  }, {}, {
                                    default: () => {
                                      return `State`;
                                    }
                                  })}
											<select id="${"ForminputState"}" class="${"form-select"}" data-choices data-choices-sorting="${"true"}"><option value="${"Choose..."}">Choose...</option><option value="${"..."}">...</option></select></div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Submit</button></div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: FormGrid, id: "FormGridcode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Gutters" }, {}, {})}
					<div class="${"card-body"}"><p class="${"text-muted"}">By adding ${validate_component(Link, "Link").$$render($$result, {
                    href: "/docs/5.1/layout/gutters/",
                    class: "text-decoration-underline"
                  }, {}, {
                    default: () => {
                      return `gutter modifier classes`;
                    }
                  })}, you can have control over the gutter width in as
							well the inline as block direction.
							<span class="${"fw-medium"}">Also requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).
						</p>
						<div class="${"live-preview"}"><form action="${"#"}" class="${"row g-3"}">${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, {
                        for: "fullnameInput",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Name`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "fullnameInput",
                        placeholder: "Enter your name"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, { for: "inputEmail4", class: "form-label" }, {}, {
                        default: () => {
                          return `Email`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "email",
                        class: "form-control",
                        id: "inputEmail4",
                        placeholder: "Email"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, {
                        for: "inputPassword4",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Password`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "password",
                        class: "form-control",
                        id: "inputPassword4",
                        placeholder: "Password"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, { for: "inputAddress", class: "form-label" }, {}, {
                        default: () => {
                          return `Address`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "inputAddress",
                        placeholder: "1234 Main St"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, {
                        for: "inputAddress2",
                        class: "form-label"
                      }, {}, {
                        default: () => {
                          return `Address 2`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "inputAddress2",
                        placeholder: "Apartment, studio, or floor"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, { for: "inputCity", class: "form-label" }, {}, {
                        default: () => {
                          return `City`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "inputCity",
                        placeholder: "Enter your city"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, { for: "inputState", class: "form-label" }, {}, {
                        default: () => {
                          return `State`;
                        }
                      })}
									<select id="${"inputState"}" class="${"form-select"}" data-choices data-choices-sorting="${"true"}"><option value="${"Choose..."}">Choose...</option><option value="${"..."}">...</option></select>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { md: 2 }, {}, {
                    default: () => {
                      return `${validate_component(Label, "Label").$$render($$result, { for: "inputZip", class: "form-label" }, {}, {
                        default: () => {
                          return `Zip`;
                        }
                      })}
									${validate_component(Input, "Input").$$render($$result, {
                        type: "text",
                        class: "form-control",
                        id: "inputZip",
                        placeholder: "Zin code"
                      }, {}, {})}`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"gridCheck"}">
										${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "gridCheck"
                      }, {}, {
                        default: () => {
                          return `Check me out`;
                        }
                      })}</div>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Sign in</button></div>`;
                    }
                  })}</form></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: Gutters, id: "formGutters" }, {}, {})}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Vertical Form" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                        default: () => {
                          return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "employeeName", class: "form-label" }, {}, {
                            default: () => {
                              return `Employee Name`;
                            }
                          })}
									${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "employeeName",
                            placeholder: "Enter emploree name"
                          }, {}, {})}</div>
								<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "employeeUrl", class: "form-label" }, {}, {
                            default: () => {
                              return `Employee Department URL`;
                            }
                          })}
									${validate_component(Input, "Input").$$render($$result, {
                            type: "url",
                            class: "form-control",
                            id: "employeeUrl",
                            placeholder: "Enter emploree url"
                          }, {}, {})}</div>
								<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "StartleaveDate",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Start Leave Date`;
                            }
                          })}
									${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                            class: "form-control",
                            options: { dateFormat: "d M, Y" }
                          }, {}, {})}</div>
								<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { for: "EndleaveDate", class: "form-label" }, {}, {
                            default: () => {
                              return `End Leave Date`;
                            }
                          })}
									${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                            class: "form-control",
                            options: { dateFormat: "d M, Y" }
                          }, {}, {})}</div>
								<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
                            for: "VertimeassageInput",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Message`;
                            }
                          })}
									<textarea class="${"form-control"}" id="${"VertimeassageInput"}" rows="${"3"}" placeholder="${"Enter your message"}"></textarea></div>
								<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Add Leave</button></div>`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: VerticalForm, id: "verticalForm" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Horizontal Form" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><form action="${"#"}">${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { for: "nameInput", class: "form-label" }, {}, {
                                default: () => {
                                  return `Name`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control",
                                id: "nameInput",
                                placeholder: "Enter your name"
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { for: "websiteUrl", class: "form-label" }, {}, {
                                default: () => {
                                  return `Website URL`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, {
                                type: "url",
                                class: "form-control",
                                id: "websiteUrl",
                                placeholder: "Enter your url"
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { for: "dateInput", class: "form-label" }, {}, {
                                default: () => {
                                  return `Date`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                class: "form-control",
                                options: { dateFormat: "d M, Y" }
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { for: "timeInput", class: "form-label" }, {}, {
                                default: () => {
                                  return `Time`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
                                class: "form-control",
                                options: {
                                  enableTime: true,
                                  noCalendar: true,
                                  dateFormat: "H:i"
                                }
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { for: "leaveemails", class: "form-label" }, {}, {
                                default: () => {
                                  return `Email Id`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, {
                                type: "email",
                                class: "form-control",
                                id: "leaveemails",
                                placeholder: "Enter your email"
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, {
                                for: "contactNumber",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Contact Number`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `${validate_component(Input, "Input").$$render($$result, {
                                type: "number",
                                class: "form-control",
                                id: "contactNumber",
                                placeholder: "+91 9876543210"
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Row, "Row").$$render($$result, { class: "mb-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, {
                                for: "meassageInput",
                                class: "form-label"
                              }, {}, {
                                default: () => {
                                  return `Message`;
                                }
                              })}`;
                            }
                          })}
									${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `<textarea class="${"form-control"}" id="${"meassageInput"}" rows="${"3"}" placeholder="${"Enter your message"}"></textarea>`;
                            }
                          })}`;
                        }
                      })}
								<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Add Leave</button></div></form></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: HorizontalForm,
                        id: "horizontalForm"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Horizontal Form Label Sizing" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>col-form-label-sm</code> class to set
							small size form label or
							<code>col-form-label-lg</code> class to set large size
							form label to &lt;label&gt;. No such class is required
							for the default size form label.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    for: "colFormLabelSm",
                                    class: "col-sm-2 col-form-label col-form-label-sm"
                                  }, {}, {
                                    default: () => {
                                      return `Email`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { sm: 10 }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render($$result, {
                                        type: "email",
                                        class: "form-control form-control-sm",
                                        id: "colFormLabelSm",
                                        placeholder: "col-form-label-sm"
                                      }, {}, {})}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    for: "colFormLabel",
                                    class: "col-sm-2 col-form-label"
                                  }, {}, {
                                    default: () => {
                                      return `Email`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { sm: 10 }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render($$result, {
                                        type: "email",
                                        class: "form-control",
                                        id: "colFormLabel",
                                        placeholder: "col-form-label"
                                      }, {}, {})}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    for: "colFormLabelLg",
                                    class: "col-sm-2 col-form-label col-form-label-lg"
                                  }, {}, {
                                    default: () => {
                                      return `Email`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { sm: 10 }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render($$result, {
                                        type: "email",
                                        class: "form-control form-control-lg",
                                        id: "colFormLabelLg",
                                        placeholder: "col-form-label-lg"
                                      }, {}, {})}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: HorizontalFormLabelSizing,
                        id: "horizontalFormLabelSizing"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Column Sizing" }, {}, {})}
					<div class="${"card-body"}"><p class="${"text-muted"}">Use <code>sm=${escape(`required size`)}</code> size value to set
							column size as per your requirement.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "Firstname",
                            "aria-label": "First-Name"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "Lastname",
                            "aria-label": "Last-Name"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "Email id",
                            "aria-label": "Email Id"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "password",
                            class: "form-control",
                            placeholder: "Password",
                            "aria-label": "Password"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "password",
                            class: "form-control",
                            placeholder: "Confirm Password",
                            "aria-label": "confirm-password"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: 7 }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "City",
                            "aria-label": "City"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: true }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "State",
                            "aria-label": "State"
                          }, {}, {})}`;
                        }
                      })}
								${validate_component(Col, "Col").$$render($$result, { sm: true }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            placeholder: "Zip",
                            "aria-label": "Zip"
                          }, {}, {})}`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ColumnSizing, id: "columnSizing" }, {}, {})}</div></div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Auto Sizing" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {
                            class: "gy-2 gx-3 mb-3 align-items-center"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { sm: true }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "autoSizingInput"
                                  }, {}, {
                                    default: () => {
                                      return `Name`;
                                    }
                                  })}
										${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "autoSizingInput",
                                    placeholder: "Jane Doe"
                                  }, {}, {})}`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { sm: true }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "autoSizingInputGroup"
                                  }, {}, {
                                    default: () => {
                                      return `Username`;
                                    }
                                  })}
										<div class="${"input-group"}"><div class="${"input-group-text"}">@
											</div>
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "autoSizingInputGroup",
                                    placeholder: "Username"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { sm: true }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "autoSizingSelect"
                                  }, {}, {
                                    default: () => {
                                      return `Preference`;
                                    }
                                  })}
										<select class="${"form-select"}" data-choices data-choices-sorting="${"true"}" id="${"autoSizingSelect"}"><option value="${"Choose..."}">Choose...</option><option value="${"1"}">One</option><option value="${"2"}">Two</option><option value="${"3"}">Three</option></select>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { class: "sm-auto" }, {}, {
                                default: () => {
                                  return `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"autoSizingCheck"}">
											${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    for: "autoSizingCheck"
                                  }, {}, {
                                    default: () => {
                                      return `Remember me`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { class: "sm-auto" }, {}, {
                                default: () => {
                                  return `<button type="${"submit"}" class="${"btn btn-primary"}">Submit</button>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

							${validate_component(Form, "Form").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "gx-3 gy-2 align-items-center" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { sm: 3 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "specificSizeInputName"
                                  }, {}, {
                                    default: () => {
                                      return `Name`;
                                    }
                                  })}
										${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "specificSizeInputName",
                                    placeholder: "Jane Doe"
                                  }, {}, {})}`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { sm: 3 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "specificSizeInputGroupUsername"
                                  }, {}, {
                                    default: () => {
                                      return `Username`;
                                    }
                                  })}
										${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<div class="${"input-group-text"}">@
											</div>
											${validate_component(Input, "Input").$$render($$result, {
                                        type: "text",
                                        class: "form-control",
                                        id: "specificSizeInputGroupUsername",
                                        placeholder: "Username"
                                      }, {}, {})}`;
                                    }
                                  })}`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { sm: 3 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "specificSizeSelect"
                                  }, {}, {
                                    default: () => {
                                      return `Preference`;
                                    }
                                  })}
										<select class="${"form-select"}" data-choices data-choices-sorting="${"true"}" id="${"specificSizeSelect"}"><option value="${"Choose..."}">Choose...</option><option value="${"1"}">One</option><option value="${"2"}">Two</option><option value="${"3"}">Three</option></select>`;
                                }
                              })}
									<div class="${"col-auto"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"autoSizingCheck2"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "autoSizingCheck2"
                              }, {}, {
                                default: () => {
                                  return `Remember me`;
                                }
                              })}</div></div>
									${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<button type="${"submit"}" class="${"btn btn-primary"}">Submit</button>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: AutoSizing, id: "autoSizing" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Inline Forms" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>row-cols-*</code> class to set form inline.
						</p>
						<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {
                            class: "row-cols-lg-auto g-3 align-items-center"
                          }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "inlineFormInputGroupUsername"
                                  }, {}, {
                                    default: () => {
                                      return `Username`;
                                    }
                                  })}
										<div class="${"input-group"}"><div class="${"input-group-text"}">@
											</div>
											${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "inlineFormInputGroupUsername",
                                    placeholder: "Username"
                                  }, {}, {})}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, {
                                    class: "visually-hidden",
                                    for: "inlineFormSelectPref"
                                  }, {}, {
                                    default: () => {
                                      return `Preference`;
                                    }
                                  })}
										<select class="${"form-select"}" data-choices data-choices-sorting="${"true"}" id="${"inlineFormSelectPref"}"><option value="${"Choose..."}">Choose...</option><option value="${"1"}">One</option><option value="${"2"}">Two</option><option value="${"3"}">Three</option></select>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineFormCheck"}">
											${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    for: "inlineFormCheck"
                                  }, {}, {
                                    default: () => {
                                      return `Remember me`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                                default: () => {
                                  return `<button type="${"submit"}" class="${"btn btn-primary"}">Submit</button>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: InlineForms, id: "inlineForms" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Floating Labels" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>form-floating</code> class to enable floating
							labels with Bootstrap\u2019s textual form fields.
						</p>
						<div class="${"live-preview"}">${validate_component(Form, "Form").$$render($$result, { action: "#" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "firstnamefloatingInput",
                                    placeholder: "Enter your firstname"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "firstnamefloatingInput" }, {}, {
                                    default: () => {
                                      return `First Name`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "lastnamefloatingInput",
                                    placeholder: "Enter your Lastname"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "lastnamefloatingInput" }, {}, {
                                    default: () => {
                                      return `Last Name`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "email",
                                    class: "form-control",
                                    id: "emailfloatingInput",
                                    placeholder: "Enter your email"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "emailfloatingInput" }, {}, {
                                    default: () => {
                                      return `Email Address`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "password",
                                    class: "form-control",
                                    id: "passwordfloatingInput",
                                    placeholder: "Enter your password"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "passwordfloatingInput" }, {}, {
                                    default: () => {
                                      return `Password`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "password",
                                    class: "form-control",
                                    id: "passwordfloatingInput1",
                                    placeholder: "Confirm password"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "passwordfloatingInput1" }, {}, {
                                    default: () => {
                                      return `Confirm Password`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "text",
                                    class: "form-control",
                                    id: "cityfloatingInput",
                                    placeholder: "Enter your city"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "cityfloatingInput" }, {}, {
                                    default: () => {
                                      return `City`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}"><select class="${"form-select"}" id="${"floatingSelect"}" aria-label="${"Floating label select example"}"><option value="${"Choose..."}">Choose...</option><option value="${"1"}">USA</option><option value="${"2"}">Brazil</option><option value="${"3"}">France</option><option value="${"4"}">Germany</option></select>
											${validate_component(Label, "Label").$$render($$result, { for: "floatingSelect" }, {}, {
                                    default: () => {
                                      return `Country`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                                default: () => {
                                  return `<div class="${"form-floating"}">${validate_component(Input, "Input").$$render($$result, {
                                    type: "number",
                                    class: "form-control",
                                    id: "zipfloatingInput",
                                    placeholder: "Enter your zipcode"
                                  }, {}, {})}
											${validate_component(Label, "Label").$$render($$result, { for: "zipfloatingInput" }, {}, {
                                    default: () => {
                                      return `Zipcode`;
                                    }
                                  })}</div>`;
                                }
                              })}
									${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                                default: () => {
                                  return `<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Submit</button></div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: FloatingLabels,
                        id: "floatingLabels"
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
export { Forms_layouts as default };
