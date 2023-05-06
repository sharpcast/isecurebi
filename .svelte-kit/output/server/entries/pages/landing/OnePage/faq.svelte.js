import { c as create_ssr_component, h as compute_rest_props, p as createEventDispatcher, a as subscribe, s as setContext, j as spread, l as escape_attribute_value, k as escape_object, d as add_attribute, g as getContext, v as validate_component, b as escape } from "../../../../chunks/index-584434b3.js";
import { c as classnames } from "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { w as writable } from "../../../../chunks/index-bddc6f42.js";
import { C as Collapse } from "../../../../chunks/Collapse-6781eb46.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["flush", "stayOpen", "class"]);
  let $open, $$unsubscribe_open;
  const dispatch = createEventDispatcher();
  let { flush = false } = $$props;
  let { stayOpen = false } = $$props;
  let { class: className = "" } = $$props;
  const open = writable();
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  setContext("accordion", {
    open,
    stayOpen,
    toggle: (id) => {
      if ($open === id)
        open.set();
      else
        open.set(id);
      dispatch("toggle", { [id]: $open === id });
    }
  });
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.stayOpen === void 0 && $$bindings.stayOpen && stayOpen !== void 0)
    $$bindings.stayOpen(stayOpen);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "accordion", { "accordion-flush": flush });
  $$unsubscribe_open();
  return `<div${spread([{ class: escape_attribute_value(classes) }, escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const AccordionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "accordion-button");
  return `<h2${spread([{ class: "accordion-header" }, escape_object($$restProps)], {})}><button type="${"button"}"${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</button></h2>`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let accordionOpen;
  let $open, $$unsubscribe_open;
  let { class: className = "" } = $$props;
  let { header = "" } = $$props;
  let { active = false } = $$props;
  let accordionId;
  createEventDispatcher();
  const { stayOpen, toggle, open } = getContext("accordion");
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = classnames(className, "accordion-item");
  accordionOpen = stayOpen ? active : $open === accordionId;
  $$unsubscribe_open();
  return `<div${add_attribute("class", classes, 0)}${add_attribute("this", accordionId, 0)}>${validate_component(AccordionHeader, "AccordionHeader").$$render($$result, { class: !accordionOpen && "collapsed" }, {}, {
    default: () => {
      return `${slots.header ? slots.header({}) : ``}
    ${escape(header)}`;
    }
  })}
  ${validate_component(Collapse, "Collapse").$$render($$result, {
    isOpen: accordionOpen,
    class: "accordion-collapse"
  }, {}, {
    default: () => {
      return `<div class="${"accordion-body"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}</div>`;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h3 class="${"mb-3 fw-semibold"}">Frequently Asked Questions</h3>
                    <p class="${"text-muted mb-4 ff-secondary"}">If you can not find answer to your question in our FAQ,
                        you can always contact us or email us. We will answer
                        you shortly!
                    </p>

                    <div class="${""}"><button type="${"button"}" class="${"btn btn-primary btn-label rounded-pill me-1"}"><i class="${"ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"}"></i> Email Us</button>
                        <button type="${"button"}" class="${"btn btn-info btn-label rounded-pill"}"><i class="${"ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"}"></i> Send Us Tweet</button></div></div>`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, { class: "g-lg-5 g-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0 me-1"}"><i class="${"ri-question-line fs-24 align-middle text-success me-1"}"></i></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"mb-0 fw-semibold"}">General Questions</h5></div></div>
                ${validate_component(Accordion, "Accordion").$$render($$result, {
                class: "custom-accordionwithicon custom-accordion-border accordion-border-box"
              }, {}, {
                default: () => {
                  return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {
                    active: true,
                    header: "What is the purpose of using themes ?"
                  }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">A theme is a set of colors, fonts, effects, and more
                            that can be applied to your entire presentation to
                            give it a consistent, professional look. You&#39;ve
                            already been using a theme, even if you didn&#39;t know
                            it: the default Office theme, which consists.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {
                    header: "Can a theme have more than one theme?"
                  }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">A story can have as many themes as the reader can
                            identify based on recurring patterns and parallels
                            within the story itself. In looking at ways to
                            separate themes into a hierarchy, we might find it
                            useful to follow the example of a single book.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { header: "What are theme features?" }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">Theme features is a set of specific functionality
                            that may be enabled by theme authors. Themes must
                            register each individual Theme Feature that the
                            author wishes to support. Theme support functions
                            should be called in the theme&#39;s functions.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { header: " What is simple theme?" }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">Simple is a free WordPress theme, by Themify, built
                            exactly what it is named for: simplicity.
                            Immediately upgrade the quality of your WordPress
                            site with the simple theme To use the built-in
                            Chrome theme editor.
                        </div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center mb-2"}"><div class="${"flex-shrink-0 me-1"}"><i class="${"ri-shield-keyhole-line fs-24 align-middle text-success me-1"}"></i></div>
                    <div class="${"flex-grow-1"}"><h5 class="${"mb-0 fw-semibold"}">Privacy &amp; Security</h5></div></div>

                ${validate_component(Accordion, "Accordion").$$render($$result, {
                class: "custom-accordionwithicon custom-accordion-border accordion-border-box"
              }, {}, {
                default: () => {
                  return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {
                    active: true,
                    header: "Does Word have night mode?"
                  }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">You can run Microsoft Word in dark mode, which uses
                            a dark color palette to help reduce eye strain in
                            low light settings. You can choose to make the
                            document white or black using the Switch Modes
                            button in the ribbon&#39;s View tab.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { header: "Is theme an opinion?" }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">A theme is an opinion the author expresses on the
                            subject, for instance, the author&#39;s dissatisfaction
                            with the narrow confines of French bourgeois
                            marriage during that period theme is an idea that a
                            writer repeats.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { header: "How do you develop a theme?" }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">A short story, novella, or novel presents a
                            narrative to its reader. Perhaps that narrative
                            involves mystery, terror, romance, comedy, or all of
                            the above. These works of fiction may also contain
                            memorable characters, vivid world-building, literary
                            devices.
                        </div>`;
                    }
                  })}
                    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { header: "Do stories need themes?" }, {}, {
                    default: () => {
                      return `<div class="${"ff-secondary"}">A story can have as many themes as the reader can
                            identify based on recurring patterns and parallels
                            within the story itself. In looking at ways to
                            separate themes into a hierarchy, we might find it
                            useful to follow the example of a single book.
                        </div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
export { Faq as default };
