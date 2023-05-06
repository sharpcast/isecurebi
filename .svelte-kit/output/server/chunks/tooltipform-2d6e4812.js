import { y as get_store_value, c as create_ssr_component, a as subscribe, v as validate_component, b as escape, d as add_attribute } from "./index-584434b3.js";
import { C as Card } from "./Card-f8372b29.js";
import { C as CardBody } from "./CardBody-1c493a94.js";
import { C as Col } from "./Col-cf9b7547.js";
import { L as Label } from "./Label-1c7919d2.js";
import "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "./Row-089822f8.js";
import { P as Prism } from "./Prism-c9306ada.js";
import { P as PreviewCardHeader } from "./PreviewCardHeader-2d4cc9f7.js";
import { d as derived, w as writable } from "./index-bddc6f42.js";
import * as yup from "yup";
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)();
  });
}
function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function isNullish(value) {
  return value === void 0 || value === null;
}
function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}
function getValues(object) {
  let results = [];
  for (const [, value] of Object.entries(object)) {
    const values = typeof value === "object" ? getValues(value) : [value];
    results = [...results, ...values];
  }
  return results;
}
function getErrorsFromSchema(initialValues, schema, errors = {}) {
  for (const key in schema) {
    switch (true) {
      case (schema[key].type === "object" && !isEmpty(schema[key].fields)): {
        errors[key] = getErrorsFromSchema(initialValues[key], schema[key].fields, { ...errors[key] });
        break;
      }
      case schema[key].type === "array": {
        const values = initialValues && initialValues[key] ? initialValues[key] : [];
        errors[key] = values.map((value) => {
          const innerError = getErrorsFromSchema(value, schema[key].innerType.fields, { ...errors[key] });
          return Object.keys(innerError).length > 0 ? innerError : "";
        });
        break;
      }
      default: {
        errors[key] = "";
      }
    }
  }
  return errors;
}
const deepEqual = dequal;
function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] = typeof object[key] === "object" && !isNullish(object[key]) ? assignDeep(object[key], value) : value;
  }
  return copy;
}
function set(object, path, value) {
  if (new Object(object) !== object)
    return object;
  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  const result = path.slice(0, -1).reduce((accumulator, key, index) => new Object(accumulator[key]) === accumulator[key] ? accumulator[key] : accumulator[key] = Math.trunc(Math.abs(path[index + 1])) === +path[index + 1] ? [] : {}, object);
  result[path[path.length - 1]] = value;
  return object;
}
const util = {
  assignDeep,
  cloneDeep,
  deepEqual,
  getErrorsFromSchema,
  getValues,
  isEmpty,
  isNullish,
  set,
  subscribeOnce,
  update
};
const NO_ERROR = "";
const IS_TOUCHED = true;
function isCheckbox(element) {
  return element.getAttribute && element.getAttribute("type") === "checkbox";
}
function isFileInput(element) {
  return element.getAttribute && element.getAttribute("type") === "file";
}
function resolveValue(element) {
  if (isFileInput(element)) {
    return element.files;
  } else if (isCheckbox(element)) {
    return element.checked;
  } else {
    return element.value;
  }
}
const createForm = (config) => {
  let initialValues = config.initialValues || {};
  const validationSchema = config.validationSchema;
  const validateFunction = config.validate;
  const onSubmit = config.onSubmit;
  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(initialValues, validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED)
  };
  const form = writable(getInitial.values());
  const errors = writable(getInitial.errors());
  const touched = writable(getInitial.touched());
  const isSubmitting = writable(false);
  const isValidating = writable(false);
  const isValid = derived(errors, ($errors) => {
    const noErrors = util.getValues($errors).every((field) => field === NO_ERROR);
    return noErrors;
  });
  const modified = derived(form, ($form) => {
    const object = util.assignDeep($form, false);
    for (let key in $form) {
      object[key] = !util.deepEqual($form[key], initialValues[key]);
    }
    return object;
  });
  const isModified = derived(modified, ($modified) => {
    return util.getValues($modified).includes(true);
  });
  function validateField(field) {
    return util.subscribeOnce(form).then((values) => validateFieldValue(field, values[field]));
  }
  function validateFieldValue(field, value) {
    updateTouched(field, true);
    if (validationSchema) {
      isValidating.set(true);
      return validationSchema.validateAt(field, get_store_value(form)).then(() => util.update(errors, field, "")).catch((error) => util.update(errors, field, error.message)).finally(() => {
        isValidating.set(false);
      });
    }
    if (validateFunction) {
      isValidating.set(true);
      return Promise.resolve().then(() => validateFunction({ [field]: value })).then((errs) => util.update(errors, field, !util.isNullish(errs) ? errs[field] : "")).finally(() => {
        isValidating.set(false);
      });
    }
    return Promise.resolve();
  }
  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }
  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = resolveValue(element);
    return updateValidateField(field, value);
  }
  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    isSubmitting.set(true);
    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFunction === "function") {
        isValidating.set(true);
        return Promise.resolve().then(() => validateFunction(values)).then((error) => {
          if (util.isNullish(error) || util.getValues(error).length === 0) {
            return clearErrorsAndSubmit(values);
          } else {
            errors.set(error);
            isSubmitting.set(false);
          }
        }).finally(() => isValidating.set(false));
      }
      if (validationSchema) {
        isValidating.set(true);
        return validationSchema.validate(values, { abortEarly: false }).then(() => clearErrorsAndSubmit(values)).catch((yupErrors) => {
          if (yupErrors && yupErrors.inner) {
            const updatedErrors = getInitial.errors();
            yupErrors.inner.map((error) => util.set(updatedErrors, error.path, error.message));
            errors.set(updatedErrors);
          }
          isSubmitting.set(false);
        }).finally(() => isValidating.set(false));
      }
      return clearErrorsAndSubmit(values);
    });
  }
  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }
  function clearErrorsAndSubmit(values) {
    return Promise.resolve().then(() => errors.set(getInitial.errors())).then(() => onSubmit(values, form, errors)).finally(() => isSubmitting.set(false));
  }
  function updateField(field, value) {
    util.update(form, field, value);
  }
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }
  function updateInitialValues(newValues) {
    initialValues = newValues;
    handleReset();
  }
  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: derived([
      form,
      errors,
      touched,
      modified,
      isValid,
      isValidating,
      isSubmitting,
      isModified
    ], ([
      $form,
      $errors,
      $touched,
      $modified,
      $isValid,
      $isValidating,
      $isSubmitting,
      $isModified
    ]) => ({
      form: $form,
      errors: $errors,
      touched: $touched,
      modified: $modified,
      isValid: $isValid,
      isSubmitting: $isSubmitting,
      isValidating: $isValidating,
      isModified: $isModified
    }))
  };
};
const Tooltipform = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      fnm: "Mark",
      lnm: "Otto",
      unm: "",
      city: "",
      stateV: ""
    },
    validationSchema: yup.object().shape({
      fnm: yup.string().required("Please Enter Valid First Name"),
      lnm: yup.string().required("Please Enter Valid Last Name"),
      unm: yup.string().required("Please Enter User Name"),
      city: yup.string().required("Please Enter Your City"),
      stateV: yup.string().required("Please Enter Your State")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const code = `<form
    class="needs-validation was-validated"
    on:submit={handleSubmit}
>
    <Row>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltip01">
            First name
        </Label>
        <input
            type="text"
            class="form-control"
            id="validationTooltip01"
            placeholder="Mark"
            name="fnm"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.fnm}
            required
        />
        {#if $errors.fnm}
        <div class="invalid-tooltip">{$errors.fnm}</div>
        {:else}
        <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltip02">Last name</Label>
        <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            placeholder="Otto"
            name="lnm"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.lnm}
            required
        />
        {#if $errors.lnm}
            <div class="invalid-tooltip">{$errors.lnm}</div>
        {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="4" class="position-relative">
        
        <Label htmlfor="validationTooltipUsername">
            Username
        </Label>
        <div class="input-group">
            <div class="input-group-prepend">
            <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
            >
                @
            </span>
            </div>
            <input
                type="text"
                class="form-control"
                name="unm"
                id="validationTooltipUsername"
                placeholder="Username"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.unm}
                required
            />
            {#if $errors.unm}
            <div class="invalid-tooltip">{$errors.unm}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
        </div>
    </Col>
    <Col md="6" class="position-relative">
        
        <Label htmlfor="validationTooltip03">City</Label>
        <input
            type="text"
            class="form-control"
            name="city"
            id="validationTooltip03"
            placeholder="City"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.city}
            required
        />
        {#if $errors.city}
            <div class="invalid-tooltip">{$errors.city}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    <Col md="6" class="position-relative">
        
        <Label htmlfor="validationTooltip04">State</Label>
        <input
            type="text"
            name="stateV"
            class="form-control"
            id="validationTooltip04"
            placeholder="State"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.stateV}
            required
        />
        {#if $errors.stateV}
        <div class="invalid-tooltip">{$errors.stateV}</div>
            {:else}
            <div class="valid-tooltip">Looks good!</div>
            {/if}
    </Col>
    </Row>
    <button class="btn btn-primary" type="submit">
    Submit form
    </button>
</form>`;
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Svelte Validation(Tooltips)" }, {}, {})}
        ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted"}">If your form layout allows it, you can swap the
            <code>.${escape("{valid|invalid-}")}feedback</code> classes for
            <code>.${escape("{valid|invalid-}")}-tooltip</code> classes to
            display validation feedback in a styled tooltip.
          </p>
          <div class="${"live-preview"}"><form class="${"needs-validation was-validated"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { md: "4", class: "position-relative" }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationTooltip01" }, {}, {
                            default: () => {
                              return `First name
                    `;
                            }
                          })}
                    <input type="${"text"}" class="${"form-control"}" id="${"validationTooltip01"}" placeholder="${"Mark"}" name="${"fnm"}" required${add_attribute("value", $form.fnm, 0)}>
                    ${$errors.fnm ? `<div class="${"invalid-tooltip"}">${escape($errors.fnm)}</div>` : `<div class="${"valid-tooltip"}">Looks good!</div>`}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "position-relative" }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationTooltip02" }, {}, {
                            default: () => {
                              return `Last name`;
                            }
                          })}
                    <input type="${"text"}" class="${"form-control"}" id="${"validationTooltip02"}" placeholder="${"Otto"}" name="${"lnm"}" required${add_attribute("value", $form.lnm, 0)}>
                    ${$errors.lnm ? `<div class="${"invalid-tooltip"}">${escape($errors.lnm)}</div>` : `<div class="${"valid-tooltip"}">Looks good!</div>`}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "position-relative" }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationTooltipUsername" }, {}, {
                            default: () => {
                              return `Username
                    `;
                            }
                          })}
                    <div class="${"input-group"}"><div class="${"input-group-prepend"}"><span class="${"input-group-text"}" id="${"validationTooltipUsernamePrepend"}">@
                        </span></div>
                      <input type="${"text"}" class="${"form-control"}" name="${"unm"}" id="${"validationTooltipUsername"}" placeholder="${"Username"}" required${add_attribute("value", $form.unm, 0)}>
                      ${$errors.unm ? `<div class="${"invalid-tooltip"}">${escape($errors.unm)}</div>` : `<div class="${"valid-tooltip"}">Looks good!</div>`}</div>`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: "6", class: "position-relative" }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationTooltip03" }, {}, {
                            default: () => {
                              return `City`;
                            }
                          })}
                    <input type="${"text"}" class="${"form-control"}" name="${"city"}" id="${"validationTooltip03"}" placeholder="${"City"}" required${add_attribute("value", $form.city, 0)}>
                    ${$errors.city ? `<div class="${"invalid-tooltip"}">${escape($errors.city)}</div>` : `<div class="${"valid-tooltip"}">Looks good!</div>`}`;
                        }
                      })}
                ${validate_component(Col, "Col").$$render($$result, { md: "6", class: "position-relative" }, {}, {
                        default: () => {
                          return `${validate_component(Label, "Label").$$render($$result, { htmlfor: "validationTooltip04" }, {}, {
                            default: () => {
                              return `State`;
                            }
                          })}
                    <input type="${"text"}" name="${"stateV"}" class="${"form-control"}" id="${"validationTooltip04"}" placeholder="${"State"}" required${add_attribute("value", $form.stateV, 0)}>
                    ${$errors.stateV ? `<div class="${"invalid-tooltip"}">${escape($errors.stateV)}</div>` : `<div class="${"valid-tooltip"}">Looks good!</div>`}`;
                        }
                      })}`;
                    }
                  })}
              <button class="${"btn btn-primary"}" type="${"submit"}">Submit form
              </button></form></div>
          <div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code, id: "tooltipform" }, {}, {})}</div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Tooltipform as T, createForm as c };
