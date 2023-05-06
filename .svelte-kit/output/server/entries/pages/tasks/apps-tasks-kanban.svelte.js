import { c as create_ssr_component, a as subscribe, p as createEventDispatcher, b as escape, d as add_attribute, B as add_styles, v as validate_component, e as each, C as set_store_value } from "../../../chunks/index-584434b3.js";
import { w as writable } from "../../../chunks/index-bddc6f42.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import "../../../chunks/Col-cf9b7547.js";
class Lang {
  constructor(lang = "en") {
    this.lang = lang;
  }
  getStr(str) {
    return Lang[this.lang][str];
  }
}
Lang.en = {
  Yes: "Yes",
  No: "No",
  Done: "Done",
  Todo: "Todo",
  Card: "Card",
  Cards: "Cards",
  AddACard: "Add a card",
  NewCard: "New card",
  new: "new",
  task: "task",
  personal: "personal",
  work: "work",
  important: "important"
};
Lang.fr = {
  Yes: "Oui",
  No: "Non",
  Done: "Termin\xE9",
  Todo: "\xC0 faire",
  Card: "T\xE2che",
  Cards: "T\xE2ches",
  AddACard: "Nouvelle t\xE2che",
  NewCard: "Nouvelle t\xE2che",
  new: "nouveau",
  task: "t\xE2che",
  personal: "personnel",
  work: "travail",
  important: "important"
};
const columns = writable([]);
const globalLang = writable(new Lang());
var Card_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".card.svelte-1dlxd0l.svelte-1dlxd0l{background:white;display:flex;flex-direction:column;width:11rem;height:5.5rem;position:absolute;padding:0.5rem;margin-left:0.5rem;margin-top:0.25rem;border:1px solid rgba(0, 0, 0, 0.1);border-radius:0.25rem;z-index:inherit;overflow:inherit}.card-category.svelte-1dlxd0l.svelte-1dlxd0l{font-size:0.75rem;line-height:1rem;padding:0.25rem 0.5rem;display:block;cursor:pointer;border-radius:0.375rem;float:left;border:none;cursor:pointer}.categories-list.svelte-1dlxd0l.svelte-1dlxd0l{position:absolute;top:1.75rem;left:0px;display:flex;flex-direction:column;border-radius:0.375rem;z-index:10;overflow:hidden;background:white;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)}.card-remove.svelte-1dlxd0l.svelte-1dlxd0l{background:transparent;border:transparent;float:right;width:1.5rem;height:1.5rem;border-radius:0.375rem;justify-content:center;align-items:center;display:flex}.card-remove.svelte-1dlxd0l.svelte-1dlxd0l:hover{cursor:pointer;background:#e5e7eb}.save-button.svelte-1dlxd0l.svelte-1dlxd0l{font-size:0.75rem;line-height:1rem;position:absolute;background-color:transparent;width:1.5rem;height:1.5rem;display:flex;justify-content:center;align-items:center;border-radius:0.375rem;border:none;cursor:pointer;color:#4b5563}.save-button.svelte-1dlxd0l.svelte-1dlxd0l:hover{background:rgba(0, 0, 0, 0.2)}.input-date.svelte-1dlxd0l.svelte-1dlxd0l,.input-title.svelte-1dlxd0l.svelte-1dlxd0l{font-size:0.65rem;line-height:1.25rem;padding:0.2rem 0.3rem;width:4rem;float:left;border-radius:0.25rem;border:1px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);color:#374151;border:none;cursor:pointer}.input-date.svelte-1dlxd0l.svelte-1dlxd0l:focus,.input-title.svelte-1dlxd0l.svelte-1dlxd0l:focus{outline:none}.input-title.svelte-1dlxd0l.svelte-1dlxd0l{text-align:center}.button-title.svelte-1dlxd0l.svelte-1dlxd0l{background:transparent;font-weight:bold;border-radius:0.375rem;padding-left:0.5rem;padding-right:0.5rem;font-size:1.125rem;line-height:1.5rem;letter-spacing:0.05em;border:none;cursor:pointer}.button-title.svelte-1dlxd0l.svelte-1dlxd0l:hover,.button-date.svelte-1dlxd0l.svelte-1dlxd0l:hover{background-color:#d1d5db}.button-date.svelte-1dlxd0l.svelte-1dlxd0l{background:transparent;font-size:0.75rem;line-height:1rem;float:left;border-radius:0.375rem;padding-left:0.75rem;padding-right:0.75rem;color:#6b7280;border:none;cursor:pointer}.category-circle.svelte-1dlxd0l.svelte-1dlxd0l{display:inline-block;border-radius:50%;width:0.75rem;height:0.75rem;margin-right:0.25rem}.category-button.svelte-1dlxd0l.svelte-1dlxd0l{display:flex;justify-content:flex-start;align-items:center;font-size:0.75rem;line-height:1rem;padding:0.5rem;background:transparent;color:#6b7280;border:none;cursor:pointer}.category-button.svelte-1dlxd0l.svelte-1dlxd0l:hover{background:rgba(0, 0, 0, 0.1)}.draggable.svelte-1dlxd0l.svelte-1dlxd0l{cursor:-webkit-grab;cursor:grab}.card.svelte-1dlxd0l:hover .card-arrows.svelte-1dlxd0l,.card.svelte-1dlxd0l:active .card-arrows.svelte-1dlxd0l{display:flex !important}.card-part.svelte-1dlxd0l.svelte-1dlxd0l{display:flex;width:100%;position:relative}.card-arrows.svelte-1dlxd0l.svelte-1dlxd0l{position:absolute;left:5rem;background:transparent;width:1.75rem;height:1.75rem;display:flex;justify-content:center;align-items:center;border-radius:50%;border:none;cursor:pointer}.card-arrows.svelte-1dlxd0l.svelte-1dlxd0l:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalLang, $$unsubscribe_globalLang;
  let $$unsubscribe_columns;
  $$unsubscribe_globalLang = subscribe(globalLang, (value) => $globalLang = value);
  $$unsubscribe_columns = subscribe(columns, (value) => value);
  createEventDispatcher();
  let { id } = $$props;
  let { id_col } = $$props;
  let { title = $globalLang.getStr("NewCard") } = $$props;
  let { description = "empty" } = $$props;
  let { category = {
    label: "default",
    bgColor: "gray",
    color: "white"
  } } = $$props;
  let { date = "01/01/2021" } = $$props;
  let { categories_list } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.id_col === void 0 && $$bindings.id_col && id_col !== void 0)
    $$bindings.id_col(id_col);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.categories_list === void 0 && $$bindings.categories_list && categories_list !== void 0)
    $$bindings.categories_list(categories_list);
  $$result.css.add(css$4);
  $$unsubscribe_globalLang();
  $$unsubscribe_columns();
  return `<div id="${"card-" + escape(id, true) + "-col-" + escape(id_col, true)}" style="${"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"}" class="${"card draggable svelte-1dlxd0l"}" draggable="${"true"}"><div class="${"card-part svelte-1dlxd0l"}"><div style="${"flex:1; display:flex;justfiy-content:flex-start; align-items:center;"}"><button class="${"card-category svelte-1dlxd0l"}" style="${"background:" + escape(category.bgColor, true) + "; color:" + escape(category.color, true)}">${escape(category.label)}</button>
            ${``}</div>
        <div style="${"flex:1; display:flex;justify-content:flex-end; align-items:center;"}"><button id="${"remove-" + escape(id, true) + "-col-" + escape(id_col, true)}" class="${"card-remove svelte-1dlxd0l"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--la"}" width="${"15"}" height="${"15"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 32 32"}"><path d="${"M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781L7.22 26.22L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"}" fill="${"currentColor"}"></path></svg></button></div></div>
    <div class="${"card-part svelte-1dlxd0l"}" style="${"justify-content:center;"}"><button id="${"modify-title-" + escape(id, true) + "-col-" + escape(id_col, true)}" class="${"button-title svelte-1dlxd0l"}">${escape(title)}</button>
        <input id="${"input-title-" + escape(id, true) + "-col-" + escape(id_col, true)}"${add_attribute("value", title, 0)} type="${"text"}" style="${"display:none;"}" class="${"input-title svelte-1dlxd0l"}">
        <button id="${"save-title-" + escape(id, true) + "-col-" + escape(id_col, true)}" style="${"display:none;right:1rem; top:0.25rem;"}" class="${"save-button svelte-1dlxd0l"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi"}" width="${"15"}" height="${"15"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"}" fill="${"currentColor"}"></path></svg></button></div>
    <div class="${"card-part svelte-1dlxd0l"}"><button class="${"button-date svelte-1dlxd0l"}" id="${"modify-date-" + escape(id, true) + "-col-" + escape(id_col, true)}">${escape(date)}</button>
        <input id="${"input-date-" + escape(id, true) + "-col-" + escape(id_col, true)}"${add_attribute("value", date, 0)} type="${"text"}" style="${"display:none;"}" class="${"input-date svelte-1dlxd0l"}">
        <button id="${"save-date-" + escape(id, true) + "-col-" + escape(id_col, true)}" style="${"display:none;right:4rem;"}" class="${"save-button svelte-1dlxd0l"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi"}" width="${"15"}" height="${"15"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"}" fill="${"currentColor"}"></path></svg></button></div>

    <button style="${"display:none; top:0rem"}" class="${"card-arrows svelte-1dlxd0l"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi-light"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M5.843 15.407L11.5 9.75l5.657 5.657l-.707.707l-4.95-4.95l-4.95 4.95l-.707-.707z"}" fill="${"currentColor"}"></path></svg></button>

    <button style="${"display:none; top:4.75rem;"}" class="${"card-arrows svelte-1dlxd0l"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi-light"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M5.843 9.593L11.5 15.25l5.657-5.657l-.707-.707l-4.95 4.95l-4.95-4.95l-.707.707z"}" fill="${"currentColor"}"></path></svg></button>
</div>`;
});
var OptionsColumn_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".button-options.svelte-1q8fda8{background:transparent;border:transparent;color:#374151;width:1rem;height:1rem;transform:rotate(0deg);cursor:pointer;position:absolute;top:0.375rem;right:1rem}.button-options.svelte-1q8fda8:hover{cursor:pointer;filter:brightness(0.9);transform:rotate(-15deg)}",
  map: null
};
const OptionsColumn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { index_col } = $$props;
  let { bool_show_options } = $$props;
  let { fontPrimary } = $$props;
  if ($$props.index_col === void 0 && $$bindings.index_col && index_col !== void 0)
    $$bindings.index_col(index_col);
  if ($$props.bool_show_options === void 0 && $$bindings.bool_show_options && bool_show_options !== void 0)
    $$bindings.bool_show_options(bool_show_options);
  if ($$props.fontPrimary === void 0 && $$bindings.fontPrimary && fontPrimary !== void 0)
    $$bindings.fontPrimary(fontPrimary);
  $$result.css.add(css$3);
  return `<div class="${"options-column"}">${bool_show_options ? `<button id="${"options-column" + escape(index_col, true)}" class="${"button-options svelte-1q8fda8"}"${add_styles({ "color": fontPrimary })}><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ion"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 512 512"}"><path d="${"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z"}" fill="${"none"}"></path><path d="${"M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32zM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416zM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14z"}" fill="${"currentColor"}"></path></svg></button>` : `<button id="${"save-column" + escape(index_col, true) + " "}" class="${"button-options svelte-1q8fda8"}"${add_styles({ "color": fontPrimary })}><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"}" fill="${"currentColor"}"></path></svg></button>`}
</div>`;
});
var Column_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".column.svelte-192o45z.svelte-192o45z{width:13rem;min-width:13rem;max-width:13rem;display:flex;flex-direction:column;border-radius:0.375rem;margin:0.75rem 0.375rem;border-color:transparent}.column.light.svelte-192o45z.svelte-192o45z{background-color:var(--light-column-bg)}.column.dark.svelte-192o45z.svelte-192o45z{background-color:var(--dark-column-bg)}.column.svelte-192o45z .title.svelte-192o45z{font-style:bold;display:flex;justify-content:center;align-items:center;position:relative;letter-spacing:0.05em;font-size:1rem;margin-top:3px}.button-title.svelte-192o45z.svelte-192o45z{background-color:transparent;padding:0.5rem 0.75rem;border-radius:0.375rem;border:none;cursor:pointer}.light.svelte-192o45z .button-title.svelte-192o45z{color:inherit}.dark.svelte-192o45z .button-title.svelte-192o45z{color:white}.add-card.svelte-192o45z.svelte-192o45z{background-color:transparent;color:var(--light-gray-font);font-weight:400;margin-left:auto;margin-right:auto;padding-left:0.75rem;padding-right:0.75rem;border-radius:0.375rem;display:flex;align-items:center;border:none;cursor:pointer;margin-bottom:5px}.add-card.svelte-192o45z.svelte-192o45z:hover,.button-title.svelte-192o45z.svelte-192o45z:hover{background-color:rgba(0, 0, 0, 0.1)}.empty-slot.svelte-192o45z.svelte-192o45z{display:flex;background-color:rgba(0, 0, 0, 0.1);z-index:1;position:relative;width:100%;height:1.5rem;margin:0.375rem;padding:0.25rem;border-radius:0.375rem}.not-empty.svelte-192o45z.svelte-192o45z{display:flex;background:transparent;position:relative;width:100%;height:1.75rem}.content.svelte-192o45z.svelte-192o45z{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.cards-count.svelte-192o45z.svelte-192o45z{display:flex;justify-content:flex-start;align-items:center;margin-left:0.75rem;margin-bottom:0.25rem;color:#6b7280;font-size:0.875rem;line-height:1.25rem}.title-input.svelte-192o45z.svelte-192o45z{text-align:center;padding:0.125rem 0.25rem;width:50%;border:none;margin-top:5px;background:transparent;border-bottom:1px solid}.light.svelte-192o45z .title-input.svelte-192o45z{color:inherit;border-color:black}.dark.svelte-192o45z .title-input.svelte-192o45z{color:#fff;border-color:white}.title-input.svelte-192o45z.svelte-192o45z:focus{outline:none}.title-container.svelte-192o45z.svelte-192o45z{display:flex;justify-content:center}.title.svelte-192o45z:hover .column-arrows.svelte-192o45z{display:flex !important}.column-arrows.svelte-192o45z.svelte-192o45z{position:absolute;background:transparent;width:1.75rem;height:1.75rem;display:none;justify-content:center;align-items:center;border-radius:50%;border:none;cursor:pointer}.column-arrows.left.svelte-192o45z.svelte-192o45z{left:2.5rem}.column-arrows.right.svelte-192o45z.svelte-192o45z{right:2.5rem}.column-arrows.svelte-192o45z.svelte-192o45z:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.save-column.svelte-192o45z.svelte-192o45z{text-align:center;background:transparent;border:transparent;color:#374151;width:2rem;height:2rem;border-radius:0.375rem;position:absolute;top:0px;left:10.5rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.save-column.svelte-192o45z.svelte-192o45z:hover{background:rgba(0, 0, 0, 0.1)}.animate.svelte-192o45z.svelte-192o45z{-webkit-animation:svelte-192o45z-growingSlot .3s ease-out forwards;animation:svelte-192o45z-growingSlot .3s ease-out forwards}@-webkit-keyframes svelte-192o45z-growingSlot{from{height:0px}to{height:120px}}@keyframes svelte-192o45z-growingSlot{from{height:0px}to{height:120px}}",
  map: null
};
const Column = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let $$unsubscribe_columns;
  let $globalLang, $$unsubscribe_globalLang;
  $$unsubscribe_columns = subscribe(columns, (value) => value);
  $$unsubscribe_globalLang = subscribe(globalLang, (value) => $globalLang = value);
  let bool_show_options = true;
  let { title } = $$props;
  let { index_col } = $$props;
  let { slots } = $$props;
  let { show_fake_slot } = $$props;
  let { categories_list } = $$props;
  let { theme } = $$props;
  let { secondary } = $$props;
  let { fontPrimary } = $$props;
  let { fontSecondary } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.index_col === void 0 && $$bindings.index_col && index_col !== void 0)
    $$bindings.index_col(index_col);
  if ($$props.slots === void 0 && $$bindings.slots && slots !== void 0)
    $$bindings.slots(slots);
  if ($$props.show_fake_slot === void 0 && $$bindings.show_fake_slot && show_fake_slot !== void 0)
    $$bindings.show_fake_slot(show_fake_slot);
  if ($$props.categories_list === void 0 && $$bindings.categories_list && categories_list !== void 0)
    $$bindings.categories_list(categories_list);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.fontPrimary === void 0 && $$bindings.fontPrimary && fontPrimary !== void 0)
    $$bindings.fontPrimary(fontPrimary);
  if ($$props.fontSecondary === void 0 && $$bindings.fontSecondary && fontSecondary !== void 0)
    $$bindings.fontSecondary(fontSecondary);
  $$result.css.add(css$2);
  $$unsubscribe_columns();
  $$unsubscribe_globalLang();
  return `<div class="${"column " + escape(theme, true) + " svelte-192o45z"}"${add_styles({ "background": secondary })}><div class="${"title svelte-192o45z"}">${`<button class="${"button-title svelte-192o45z"}" id="${"title-column" + escape(index_col, true)}"${add_styles({ "color": fontPrimary })}>${escape(title)}</button>`}

        ${validate_component(OptionsColumn, "OptionsColumn").$$render($$result, {
    index_col,
    bool_show_options,
    fontPrimary
  }, {}, {})}
        <button class="${"column-arrows left svelte-192o45z"}"${add_styles({ "color": fontPrimary })}><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ic"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"}"></path></svg></button>
        <button class="${"column-arrows right svelte-192o45z"}"${add_styles({ "color": fontPrimary })}><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ic"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"}"></path></svg></button></div>

    <div class="${"cards-count svelte-192o45z"}"${add_styles({ "color": fontSecondary })}>${escape(slots.length)} Card${escape(slots.length > 1 ? "s" : "")}</div>

    <div class="${"content svelte-192o45z"}">${slots.length > 0 ? `${each(slots, (slot, index) => {
    return `<div class="${escape(slot.animate == true ? "animate" : "", true) + " not-empty animate svelte-192o45z"}">${slot.empty == false ? `${validate_component(Card, "Card").$$render($$result, {
      id: index,
      id_col: index_col,
      categories_list,
      title: slot.title,
      description: slot.description,
      category: slot.category,
      date: slot.date
    }, {}, {})}` : `<div class="${"animate empty-slot svelte-192o45z"}"></div>`}
                </div>`;
  })}` : ``}</div>
    <button class="${"add-card svelte-192o45z"}"${add_styles({ "color": fontSecondary })}><span>${escape($globalLang.getStr("AddACard"))}</span>
        <svg style="${"display:inline-block"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi-light"}" width="${"22"}" height="${"22"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z"}" fill="${"currentColor"}"></path></svg></button>
</div>`;
});
var AddColumnBtn_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".add-column.svelte-mzl7ui.svelte-mzl7ui{position:absolute;left:0.75rem;top:2rem;display:block;display:flex;justify-content:center;align-items:center;cursor:pointer}.add-column.light.svelte-mzl7ui.svelte-mzl7ui{background-color:rgba(255, 255, 255, 0.5);border:1px solid darkgray;width:3rem;height:3rem;border-radius:50%}.add-column.cuphead.svelte-mzl7ui.svelte-mzl7ui{--button_radius:0.75em;--button_color:#e8e8e8;--button_outline_color:#000000;font-size:17px;font-weight:bold;border:none;border-radius:var(--button_radius);background:var(--button_outline_color)}.cuphead.svelte-mzl7ui .button_top.svelte-mzl7ui{display:block;box-sizing:border-box;border:2px solid var(--button_outline_color);border-radius:var(--button_radius);padding:0.75em 1.5em;background:var(--button_color);color:var(--button_outline_color);transform:translateY(-0.2em);transition:transform 0.1s ease}.cuphead.svelte-mzl7ui:hover .button_top.svelte-mzl7ui{transform:translateY(-0.33em)}.cuphead.svelte-mzl7ui:active .button_top.svelte-mzl7ui{transform:translateY(0)}.add-column.light.svelte-mzl7ui.svelte-mzl7ui:hover{filter:brightness(0.75)}.add-column.light.svelte-mzl7ui.svelte-mzl7ui:active{filter:brightness(0.5)}",
  map: null
};
const AddColumnBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { theme } = $$props;
  let { fontPrimary } = $$props;
  let { secondary } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.fontPrimary === void 0 && $$bindings.fontPrimary && fontPrimary !== void 0)
    $$bindings.fontPrimary(fontPrimary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$1);
  return `<div style="${"position:relative;"}"><button id="${"add-column"}" class="${"add-column " + escape(theme, true) + " svelte-mzl7ui"}"${add_styles({
    "color": fontPrimary,
    "background-color": secondary
  })}><span class="${"button_top svelte-mzl7ui"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi-light"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z"}" fill="${"currentColor"}"></path></svg></span></button>
</div>`;
});
var Kanban_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--light-bg:rgb(243, 244, 246);--dark-bg:#052C39;--light-column-bg:rgb(243, 244, 246);--dark-column-bg:#031D26;--light-gray-font:rgb(107, 114, 128)}.kanban.svelte-1vxptfu.svelte-1vxptfu{height:100%;width:100%;text-align:center;padding:1rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.layout.svelte-1vxptfu.svelte-1vxptfu{display:flex;width:100%;height:100%;flex-direction:column}.header.svelte-1vxptfu.svelte-1vxptfu{height:150px;display:flex;justify-content:center;width:100%}.footer.svelte-1vxptfu.svelte-1vxptfu{height:75px;margin-top:0.625rem}.kanban-container.svelte-1vxptfu.svelte-1vxptfu{display:flex;flex:1;width:100%;justify-content:flex-start}.kanban.light.svelte-1vxptfu.svelte-1vxptfu,.light.svelte-1vxptfu .kanban-container.svelte-1vxptfu,.light.svelte-1vxptfu .footer.svelte-1vxptfu{background:#fff}.kanban.dark.svelte-1vxptfu.svelte-1vxptfu,.dark.svelte-1vxptfu .kanban-container.svelte-1vxptfu,.dark.svelte-1vxptfu .footer.svelte-1vxptfu{background:var(--dark-bg)}',
  map: null
};
const Kanban = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $columns, $$unsubscribe_columns;
  $$unsubscribe_columns = subscribe(columns, (value) => $columns = value);
  createEventDispatcher();
  let { theme = "light" } = $$props;
  let { primary = null } = $$props;
  let { secondary = null } = $$props;
  let { third = null } = $$props;
  let { fontPrimary = null } = $$props;
  let { fontSecondary = null } = $$props;
  let { lang = "en" } = $$props;
  let { minimalist = false } = $$props;
  let { maxColumns = 5 } = $$props;
  const tempLang = new Lang(lang);
  let { categories_list = [
    {
      label: tempLang.getStr("new"),
      color: "white",
      bgColor: "#0A99FF"
    },
    {
      label: tempLang.getStr("important"),
      color: "white",
      bgColor: "#EA0B38"
    },
    {
      label: tempLang.getStr("task"),
      color: "black",
      bgColor: "#00F5DC"
    },
    {
      label: tempLang.getStr("personal"),
      color: "white",
      bgColor: "#629387"
    },
    {
      label: tempLang.getStr("work"),
      color: "black",
      bgColor: "#13F644"
    }
  ] } = $$props;
  let { colsList = [
    { name: tempLang.getStr("Todo"), cards: [] },
    { name: tempLang.getStr("Done"), cards: [] }
  ] } = $$props;
  colsList.forEach(function(column, index) {
    set_store_value(columns, $columns[index] = {
      title: column.name,
      coordinates: {
        x_start: 0,
        x_end: 0,
        y_start: 0,
        y_end: 0
      },
      rect: {},
      slots: column.cards || []
    }, $columns);
  });
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.third === void 0 && $$bindings.third && third !== void 0)
    $$bindings.third(third);
  if ($$props.fontPrimary === void 0 && $$bindings.fontPrimary && fontPrimary !== void 0)
    $$bindings.fontPrimary(fontPrimary);
  if ($$props.fontSecondary === void 0 && $$bindings.fontSecondary && fontSecondary !== void 0)
    $$bindings.fontSecondary(fontSecondary);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.minimalist === void 0 && $$bindings.minimalist && minimalist !== void 0)
    $$bindings.minimalist(minimalist);
  if ($$props.maxColumns === void 0 && $$bindings.maxColumns && maxColumns !== void 0)
    $$bindings.maxColumns(maxColumns);
  if ($$props.categories_list === void 0 && $$bindings.categories_list && categories_list !== void 0)
    $$bindings.categories_list(categories_list);
  if ($$props.colsList === void 0 && $$bindings.colsList && colsList !== void 0)
    $$bindings.colsList(colsList);
  $$result.css.add(css);
  $$unsubscribe_columns();
  return `<div class="${"kanban " + escape(theme, true) + " svelte-1vxptfu"}"${add_styles({ "background": primary })}><div class="${"layout svelte-1vxptfu"}"><div class="${"kanban-container svelte-1vxptfu"}">${each($columns, (column, index_col) => {
    return `${validate_component(Column, "Column").$$render($$result, {
      theme,
      categories_list,
      slots: column.slots,
      title: column.title,
      index_col,
      secondary,
      third,
      fontPrimary,
      fontSecondary
    }, {}, {})}`;
  })}
			${validate_component(AddColumnBtn, "AddColumnBtn").$$render($$result, {
    theme,
    secondary,
    third,
    fontPrimary,
    fontSecondary
  }, {}, {})}</div>
		<div class="${"footer svelte-1vxptfu"}"${add_styles({ "background": primary })}></div></div>
</div>`;
});
const Apps_tasks_kanban = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>kanban Board | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Kanban Board",
        pageTitle: "Tasks"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"kanbanboard"}" style="${"width:100%; height: 100%;"}">${validate_component(Kanban, "Kanban").$$render($$result, {
            colsList: [{ name: "Todo", cards: [] }, { name: "Done", cards: [] }]
          }, {}, {})}</div>`;
        }
      })}`;
    }
  })}</div>`;
});
export { Apps_tasks_kanban as default };
