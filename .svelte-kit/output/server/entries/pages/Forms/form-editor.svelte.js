import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { E as Editor } from "../../../chunks/Editor-4e26f76e.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
const Form_editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link href="${"//cdn.quilljs.com/1.3.6/quill.snow.css"}" rel="${"stylesheet"}" data-svelte="svelte-1r52y1u">`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Form Editor", pageTitle: "Forms" }, {}, {})}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Tinymce Editor</h4>`;
                    }
                  })}

                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Editor, "Editor").$$render($$result, {}, {}, {})}`;
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
export { Form_editor as default };
