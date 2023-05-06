import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { F as Form } from "../../../chunks/Form-51a4628d.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { O as Offcanvas } from "../../../chunks/Offcanvas-493a27d8.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
import { S as Select } from "../../../chunks/Select-6990402e.js";
import "../../../chunks/Portal-94847a25.js";
const selectCountry = "Select country";
const CrmFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show, onCloseClick } = $$props;
  const country = [
    {
      label: "Select country",
      value: "Select country"
    },
    { label: "Argentina", value: "Argentina" },
    { label: "Belgium", value: "Belgium" },
    { label: "Brazil", value: "Brazil" },
    { label: "Colombia", value: "Colombia" },
    { label: "Denmark", value: "Denmark" },
    { label: "France", value: "France" },
    { label: "Germany", value: "Germany" },
    { label: "Mexico", value: "Mexico" },
    { label: "Russia", value: "Russia" },
    { label: "Spain", value: "Spain" },
    { label: "Syria", value: "Syria" },
    {
      label: "United Kingdom",
      value: "United Kingdom"
    },
    {
      label: "United States of America",
      value: "United States of America"
    }
  ];
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.onCloseClick === void 0 && $$bindings.onCloseClick && onCloseClick !== void 0)
    $$bindings.onCloseClick(onCloseClick);
  return `${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    placement: "end",
    isOpen: show,
    onCloseClick
  }, {}, {
    default: () => {
      return `<div class="${"offcanvas-header bg-light"}">Leads Fliters</div>
	
	${validate_component(Form, "Form").$$render($$result, {
        action: "",
        class: "d-flex flex-column justify-content-end h-100"
      }, {}, {
        default: () => {
          return `<div class="${"offcanvas-body"}"><div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
            for: "datepicker-range",
            class: "form-label text-muted text-uppercase fw-semibold mb-3"
          }, {}, {
            default: () => {
              return `Date`;
            }
          })}
				${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
            class: "form-control",
            id: "datepicker-publish-input",
            placeholder: "Select a date",
            items: {
              altInput: true,
              altFormat: "F j, Y",
              mode: "multiple",
              dateFormat: "d.m.y"
            }
          }, {}, {})}</div>
			<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
            for: "country-select",
            class: "form-label text-muted text-uppercase fw-semibold mb-3"
          }, {}, {
            default: () => {
              return `Country`;
            }
          })}
				${validate_component(Select, "Select").$$render($$result, {
            className: "mb-0",
            value: selectCountry,
            items: country,
            id: "country-select"
          }, {}, {})}</div>
			<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
            for: "status-select",
            class: "form-label text-muted text-uppercase fw-semibold mb-3"
          }, {}, {
            default: () => {
              return `Status`;
            }
          })}
				<div class="${"row g-2"}"><div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox1"}" value="${"option1"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "inlineCheckbox1"
          }, {}, {
            default: () => {
              return `New Leads`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox2"}" value="${"option2"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "inlineCheckbox2"
          }, {}, {
            default: () => {
              return `Old Leads`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox3"}" value="${"option3"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "inlineCheckbox3"
          }, {}, {
            default: () => {
              return `Loss Leads`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox4"}" value="${"option4"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "inlineCheckbox4"
          }, {}, {
            default: () => {
              return `Follow Up`;
            }
          })}</div></div></div></div>
			<div class="${"mb-4"}">${validate_component(Label, "Label").$$render($$result, {
            for: "leadscore",
            class: "form-label text-muted text-uppercase fw-semibold mb-3"
          }, {}, {
            default: () => {
              return `Lead Score`;
            }
          })}
				<div class="${"row g-2 align-items-center"}"><div class="${"col-lg"}">${validate_component(Input, "Input").$$render($$result, {
            type: "number",
            class: "form-control",
            id: "leadscore",
            placeholder: "0"
          }, {}, {})}</div>
					<div class="${"col-lg-auto"}">To</div>
					<div class="${"col-lg"}">${validate_component(Input, "Input").$$render($$result, {
            type: "number",
            class: "form-control",
            id: "leadscore",
            placeholder: "0"
          }, {}, {})}</div></div></div>
			<div>${validate_component(Label, "Label").$$render($$result, {
            for: "leads-tags",
            class: "form-label text-muted text-uppercase fw-semibold mb-3"
          }, {}, {
            default: () => {
              return `Tags`;
            }
          })}
				<div class="${"row g-3"}"><div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"marketing"}" value="${"marketing"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "marketing"
          }, {}, {
            default: () => {
              return `Marketing`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"management"}" value="${"management"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "management"
          }, {}, {
            default: () => {
              return `Management`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"business"}" value="${"business"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "business"
          }, {}, {
            default: () => {
              return `Business`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"investing"}" value="${"investing"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "investing"
          }, {}, {
            default: () => {
              return `Investing`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"partner"}" value="${"partner"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "partner"
          }, {}, {
            default: () => {
              return `Partner`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"lead"}" value="${"lead"}">
							${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "lead" }, {}, {
            default: () => {
              return `Leads`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"sale"}" value="${"sale"}">
							${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "sale" }, {}, {
            default: () => {
              return `Sale`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"owner"}" value="${"owner"}">
							${validate_component(Label, "Label").$$render($$result, { class: "form-check-label", for: "owner" }, {}, {
            default: () => {
              return `Owner`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"banking"}" value="${"banking"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "banking"
          }, {}, {
            default: () => {
              return `Banking`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"banking"}" value="${"banking"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "banking"
          }, {}, {
            default: () => {
              return `Exiting`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"banking"}" value="${"banking"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "banking"
          }, {}, {
            default: () => {
              return `Finance`;
            }
          })}</div></div>
					<div class="${"col-lg-6"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"banking"}" value="${"banking"}">
							${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "banking"
          }, {}, {
            default: () => {
              return `Fashion`;
            }
          })}</div></div></div></div></div>
		
		<div class="${"offcanvas-footer border-top p-3 text-center hstack gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "w-100" }, {}, {
            default: () => {
              return `Clear Filter`;
            }
          })}
			${validate_component(Button, "Button").$$render($$result, { color: "success", class: "w-100" }, {}, {
            default: () => {
              return `Filters`;
            }
          })}</div>
		`;
        }
      })}`;
    }
  })}`;
});
export { CrmFilter as default };
