import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"text-muted"}"><h6 class="${"mb-3 fw-semibold text-uppercase"}">Summary</h6>
			<p>It will be as simple as occidental in fact, it will be Occidental. To an English person, it
				will seem like simplified English, as a skeptical Cambridge friend of mine told me what
				Occidental is. The European languages are members of the same family. Their separate
				existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The
				languages only differ in their grammar, their pronunciation and their most common words.
			</p>

			<h6 class="${"mb-3 fw-semibold text-uppercase"}">Sub-tasks</h6>
			<ul class="${"ps-3 list-unstyled vstack gap-2"}"><li><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"productTask"}">
						${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "productTask"
          }, {}, {
            default: () => {
              return `Product Design, Figma (Software), Prototype
						`;
            }
          })}</div></li>
				<li><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"dashboardTask"}" checked>
						${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "dashboardTask"
          }, {}, {
            default: () => {
              return `Dashboards : Ecommerce, Analytics, Project,etc.
						`;
            }
          })}</div></li>
				<li><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"calenderTask"}">
						${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "calenderTask"
          }, {}, {
            default: () => {
              return `Create calendar, chat and email app pages
						`;
            }
          })}</div></li>
				<li><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"authenticationTask"}">
						${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            for: "authenticationTask"
          }, {}, {
            default: () => {
              return `Add authentication pages
						`;
            }
          })}</div></li></ul>

			<div class="${"pt-3 border-top border-top-dashed mt-4"}"><h6 class="${"mb-3 fw-semibold text-uppercase"}">Tasks Tags</h6>
				<div class="${"hstack flex-wrap gap-2 fs-15"}"><div class="${"badge fw-medium badge-soft-info"}">UI/UX</div>
					<div class="${"badge fw-medium badge-soft-info"}">Dashboard</div>
					<div class="${"badge fw-medium badge-soft-info"}">Design</div></div></div></div>`;
        }
      })}`;
    }
  })}`;
});
export { Summary as default };
