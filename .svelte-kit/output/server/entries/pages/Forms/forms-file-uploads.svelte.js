import { c as create_ssr_component, v as validate_component, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { D as Dropzone } from "../../../chunks/Dropzone-221db829.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import "tslib";
const Forms_file_uploads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let files = { accepted: [], rejected: [] };
  return `${$$result.head += `${$$result.title = `<title>File Upload | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "File Upload", pageTitle: "Forms" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-header" }, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Dropzone</h4>`;
                    }
                  })}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image
							previews.
						</p>

						${validate_component(Dropzone, "Dropzone").$$render($$result, {}, {}, {
                        default: () => {
                          return `<div><div class="${"dz-message needsclick"}"><div class="${"dz-message needsclick"}"><div class="${"mb-3"}"><i class="${"display-4 text-muted ri-upload-cloud-2-fill"}"></i></div>
										<h4>Drop files here or click to upload.</h4></div></div></div>`;
                        }
                      })}

						<div class="${"dropzone-previews mt-3"}" id="${"file-previews"}">${each(files.accepted, (item) => {
                        return `${validate_component(Card, "Card").$$render($$result, {
                          class: "mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        }, {}, {
                          default: () => {
                            return `<div class="${"p-2"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                              default: () => {
                                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(Link, "Link").$$render($$result, {
                                      href: "#!",
                                      class: "text-muted font-weight-bold"
                                    }, {}, {
                                      default: () => {
                                        return `${escape(item.name)}
												`;
                                      }
                                    })}
												<p class="${"mb-0"}"><strong>${escape(item.size)}</strong></p>
											`;
                                  }
                                })}
										`;
                              }
                            })}</div>
								`;
                          }
                        })}`;
                      })}</div>`;
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
export { Forms_file_uploads as default };
