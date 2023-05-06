import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
const CompanyAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul class="${"list-inline hstack gap-2 mb-0"}"><li class="${"list-inline-item edit"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "text-muted d-inline-block"
  }, {}, {
    default: () => {
      return `<i class="${"ri-phone-line fs-16"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item edit"}">${validate_component(Link, "Link").$$render($$result, {
    href: "#!",
    class: "text-muted d-inline-block"
  }, {}, {
    default: () => {
      return `<i class="${"ri-question-answer-line fs-16"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-eye-fill align-bottom text-muted"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { class: "edit-item-btn", href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-pencil-fill align-bottom text-muted"}"></i>`;
    }
  })}</li>
	<li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { class: "remove-item-btn", href: "#!" }, {}, {
    default: () => {
      return `<i class="${"ri-delete-bin-fill align-bottom text-muted"}"></i>`;
    }
  })}</li></ul>`;
});
export { CompanyAction as default };
