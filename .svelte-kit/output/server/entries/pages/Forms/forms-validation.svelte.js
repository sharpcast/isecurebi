import { c as create_ssr_component, h as compute_rest_props, q as compute_slots, j as spread, k as escape_object, l as escape_attribute_value, b as escape, a as subscribe, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { I as InputGroup } from "../../../chunks/InputGroup-94216050.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { c as createForm, T as Tooltipform } from "../../../chunks/tooltipform-2d6e4812.js";
import * as yup from "yup";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/CardHeader-84e061db.js";
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "check", "disabled", "floating", "inline", "label", "row", "tag"]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { check = false } = $$props;
  let { disabled = false } = $$props;
  let { floating = false } = $$props;
  let { inline = false } = $$props;
  let { label = "" } = $$props;
  let { row = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.floating === void 0 && $$bindings.floating && floating !== void 0)
    $$bindings.floating(floating);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "mb-3", {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  return `${tag === "fieldset" ? `<fieldset${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</fieldset>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</div>`}`;
});
const Forms_validation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      firstname: "Mark",
      lastname: "Otto",
      city: "",
      state: "",
      zip: ""
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("Please Enter Your First Name"),
      lastname: yup.string().required("Please Enter Your Last Name"),
      city: yup.string().required("Please Enter Your City"),
      state: yup.string().required("Please Enter Your State"),
      zip: yup.string().required("Please Enter Your Zip")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const BrowserDefaults = `<form class="row g-3">
<Col md={4}>
  <Label for="validationDefault01" class="form-label"
    >First name</Label
  >
  <Input
    type="text"
    class="form-control"
    id="validationDefault01"
    value="Mark"
    required
  />
</Col>
<Col md={4}>
  <Label for="validationDefault02" class="form-label"
    >Last name</Label
  >
  <Input
    type="text"
    class="form-control"
    id="validationDefault02"
    value="Otto"
    required
  />
</Col>
<Col md={4}>
  <Label for="validationDefaultUsername" class="form-label"
    >Username</Label
  >
  <InputGroup>
    <span class="input-group-text" id="inputGroupPrepend2"
      >@</span
    >
    <Input
      type="text"
      class="form-control"
      id="validationDefaultUsername"
      aria-describedby="inputGroupPrepend2"
      required
    />
  </InputGroup>
</Col>
<Col md={6}>
  <Label for="validationDefault03" class="form-label"
    >City</Label
  >
  <Input
    type="text"
    class="form-control"
    id="validationDefault03"
    required
  />
</Col>
<Col md={3}>
  <Label for="validationDefault04" class="form-label"
    >State</Label
  >
  <select class="form-select" id="validationDefault04" required>
    <option disabled value="">Choose...</option>
    <option>...</option>
  </select>
</Col>
<Col md={3}>
  <Label for="validationDefault05" class="form-label">Zip</Label
  >
  <Input
    type="text"
    class="form-control"
    id="validationDefault05"
    required
  />
</Col>
<Col xs={12}>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="invalidCheck2"
      required
    />
    <Label class="form-check-label" for="invalidCheck2">
      Agree to terms and conditions
    </Label>
  </div>
</Col>
<Col xs={12}>
  <button class="btn btn-primary" type="submit"
    >Submit form</button
  >
</Col>
</form>`;
  const Customstyle = `<form on:submit={handleSubmit} class="needs-validation was-validated">
<Row>
  <Col md="6">
    <FormGroup class="mb-3">
      <Label htmlfor="validationCustom01">First name</Label>
      <input
        name="firstname"
        placeholder="Mark"
        type="text"
        class="form-control"
        id="validationCustom01"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.firstname}
        required
      />
      {#if $errors.firstname}
        <div class="invalid-feedback" style="display: block">{$errors.firstname}</div>
      {/if}
    </FormGroup>
  </Col>
  <Col md="6">
    <FormGroup class="mb-3">
      <Label htmlfor="validationCustom02">Last name</Label>
      <input
        name="lastname"
        placeholder="Otto"
        type="text"
        class="form-control"
        id="validationCustom02"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.lastname}
        required
      />
        {#if $errors.lastname}
        <div class="invalid-feedback" style="display: block">{$errors.lastname}</div>
        {/if}
    </FormGroup>
  </Col>
</Row>
<Row>
  <Col md="4">
    <FormGroup class="mb-3">
      <Label htmlfor="validationCustom03">City</Label>
      <input
        name="city"
        placeholder="City"
        type="text"
        class="form-control"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.city}
        required
      />
      {#if $errors.city}
      <div class="invalid-feedback" style="display: block">{$errors.city}</div>
      {/if}
    </FormGroup>
  </Col>
  <Col md="4">
    <FormGroup class="mb-3">
      <Label htmlfor="validationCustom04">State</Label>
      <input
        name="state"
        placeholder="State"
        type="text"
        class="form-control"
        id="validationCustom04"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.state}
        required
      />
      {#if $errors.state}
      <div class="invalid-feedback" style="display: block">{$errors.state}</div>
      {/if}
    </FormGroup>
  </Col>
  <Col md="4">
    <FormGroup class="mb-3">
      <Label htmlfor="validationCustom05">Zip</Label>
      <input
        name="zip"
        placeholder="Zip"
        type="text"
        class="form-control"
        id="validationCustom05"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.zip}
        required
      />
      {#if $errors.zip}
      <div class="invalid-feedback" style="display: block">{$errors.zip}</div>
      {/if}
    </FormGroup>
  </Col>
</Row>
<Row>
  <Col lg="12">
    <FormGroup class="mb-3">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="invalidCheck"
          required  
        />
        <Label class="form-check-label" htmlfor="invalidCheck">
          {" "}
          Agree to terms and conditions
        </Label>
      </div>
    </FormGroup>
  </Col>
</Row>
<button class="btn btn-primary" type="submit">
  Submit form
</button>
</form>`;
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${$$result.head += `${$$result.title = `<title>Form Validation | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}
${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Form Validation",
        pageTitle: "Forms"
      }, {}, {})}
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Browser defaults" }, {}, {})}
          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Not interested in custom validation feedback messages or writing
              JavaScript to change form behaviors? All good, you can use the
              browser defaults. Try submitting the form below. Depending on your
              browser and OS, you will see a slightly different style of
              feedback.While these feedback styles cannot be styled with CSS,
              you can still customize the feedback text through JavaScript.
            </p>

            <div class="${"live-preview"}"><form class="${"row g-3"}">${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefault01",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `First name`;
                            }
                          })}
                  ${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "validationDefault01",
                            value: "Mark",
                            required: true
                          }, {}, {})}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefault02",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Last name`;
                            }
                          })}
                  ${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "validationDefault02",
                            value: "Otto",
                            required: true
                          }, {}, {})}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: 4 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefaultUsername",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Username`;
                            }
                          })}
                  ${validate_component(InputGroup, "InputGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `<span class="${"input-group-text"}" id="${"inputGroupPrepend2"}">@</span>
                    ${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control",
                                id: "validationDefaultUsername",
                                "aria-describedby": "inputGroupPrepend2",
                                required: true
                              }, {}, {})}`;
                            }
                          })}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefault03",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `City`;
                            }
                          })}
                  ${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "validationDefault03",
                            required: true
                          }, {}, {})}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefault04",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `State`;
                            }
                          })}
                  <select class="${"form-select"}" id="${"validationDefault04"}" required><option disabled value="${""}">Choose...</option><option value="${"..."}">...</option></select>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: 3 }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, {
                            for: "validationDefault05",
                            class: "form-label"
                          }, {}, {
                            default: () => {
                              return `Zip`;
                            }
                          })}
                  ${validate_component(Input, "Input").$$render($$result, {
                            type: "text",
                            class: "form-control",
                            id: "validationDefault05",
                            required: true
                          }, {}, {})}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                        default: () => {
                          return `<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"invalidCheck2"}" required>
                    ${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "invalidCheck2"
                          }, {}, {
                            default: () => {
                              return `Agree to terms and conditions
                    `;
                            }
                          })}</div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                        default: () => {
                          return `<button class="${"btn btn-primary"}" type="${"submit"}">Submit form</button>`;
                        }
                      })}</form></div>
            <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: BrowserDefaults,
                        id: "browserdefaults"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Styles" }, {}, {})}
          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">For custom Bootstrap form validation messages, you will need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you will see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls.
            </p>
            <div class="${"live-preview"}"><form class="${"needs-validation was-validated"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationCustom01" }, {}, {
                                    default: () => {
                                      return `First name`;
                                    }
                                  })}
                      <input name="${"firstname"}" placeholder="${"Mark"}" type="${"text"}" class="${"form-control"}" id="${"validationCustom01"}" required${add_attribute("value", $form.firstname, 0)}>
                      ${$errors.firstname ? `<div class="${"invalid-feedback"}" style="${"display: block"}">${escape($errors.firstname)}</div>` : ``}`;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationCustom02" }, {}, {
                                    default: () => {
                                      return `Last name`;
                                    }
                                  })}
                      <input name="${"lastname"}" placeholder="${"Otto"}" type="${"text"}" class="${"form-control"}" id="${"validationCustom02"}" required${add_attribute("value", $form.lastname, 0)}>
                        ${$errors.lastname ? `<div class="${"invalid-feedback"}" style="${"display: block"}">${escape($errors.lastname)}</div>` : ``}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationCustom03" }, {}, {
                                    default: () => {
                                      return `City`;
                                    }
                                  })}
                      <input name="${"city"}" placeholder="${"City"}" type="${"text"}" class="${"form-control"}" required${add_attribute("value", $form.city, 0)}>
                      ${$errors.city ? `<div class="${"invalid-feedback"}" style="${"display: block"}">${escape($errors.city)}</div>` : ``}`;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationCustom04" }, {}, {
                                    default: () => {
                                      return `State`;
                                    }
                                  })}
                      <input name="${"state"}" placeholder="${"State"}" type="${"text"}" class="${"form-control"}" id="${"validationCustom04"}" required${add_attribute("value", $form.state, 0)}>
                      ${$errors.state ? `<div class="${"invalid-feedback"}" style="${"display: block"}">${escape($errors.state)}</div>` : ``}`;
                                }
                              })}`;
                            }
                          })}
                  ${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationCustom05" }, {}, {
                                    default: () => {
                                      return `Zip`;
                                    }
                                  })}
                      <input name="${"zip"}" placeholder="${"Zip"}" type="${"text"}" class="${"form-control"}" id="${"validationCustom05"}" required${add_attribute("value", $form.zip, 0)}>
                      ${$errors.zip ? `<div class="${"invalid-feedback"}" style="${"display: block"}">${escape($errors.zip)}</div>` : ``}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: "12" }, {}, {
                            default: () => {
                              return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `<div class="${"form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"invalidCheck"}" required>
                        ${validate_component(Label, "Label").$$render($$result, {
                                    class: "form-check-label",
                                    htmlfor: "invalidCheck"
                                  }, {}, {
                                    default: () => {
                                      return `${escape(" ")}
                          Agree to terms and conditions
                        `;
                                    }
                                  })}</div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
                <button class="${"btn btn-primary"}" type="${"submit"}">Submit form
                </button></form></div>
            <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: Customstyle, id: "customstyle" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

      ${validate_component(Tooltipform, "Tooltipform").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export { Forms_validation as default };
