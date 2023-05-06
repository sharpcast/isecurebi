import { c as create_ssr_component, v as validate_component, b as escape } from "./index-584434b3.js";
import { C as Col } from "./Col-cf9b7547.js";
import { M as Modal } from "./Modal-235662c0.js";
import { M as ModalBody } from "./ModalBody-69b040c2.js";
import "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "./Row-089822f8.js";
const CDeleteModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let { onDeleteClick } = $$props;
  let { onCloseClick } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.onDeleteClick === void 0 && $$bindings.onDeleteClick && onDeleteClick !== void 0)
    $$bindings.onDeleteClick(onDeleteClick);
  if ($$props.onCloseClick === void 0 && $$bindings.onCloseClick && onCloseClick !== void 0)
    $$bindings.onCloseClick(onCloseClick);
  return `<div class="${"add-event-modal"}">${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: show,
    fade: true,
    centered: true,
    toggle: onCloseClick
  }, {}, {
    default: () => {
      return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "py-3 px-5" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                default: () => {
                  return `<div class="${"text-center"}"><i class="${"mdi mdi-alert-circle-outline"}" style="${"font-size: 9em; color: orange;"}"></i>
                        <h2>Are you sure?</h2>
                        <h4>${escape("You won't be able to revert this!")}</h4></div>`;
                }
              })}`;
            }
          })}
            ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"text-center mt-3"}"><button type="${"button"}" class="${"btn btn-success btn-lg ms-2"}">Yes, delete it!
                        </button>
                        <button type="${"button"}" class="${"btn btn-danger btn-lg ms-2"}">Cancel
                        </button></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { CDeleteModal as C };
