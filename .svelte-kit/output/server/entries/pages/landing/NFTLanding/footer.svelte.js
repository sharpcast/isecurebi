import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"custom-footer bg-dark py-5 position-relative"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 4, class: "mt-4" }, {}, {
            default: () => {
              return `<div><div><img${add_attribute("src", LogoLight, 0)} alt="${"logo light"}" height="${"17"}"></div>
                    <div class="${"mt-4"}"><p>Premium Multipurpose Admin &amp; Dashboard Template</p>
                        <p>You can build any type of web application like eCommerce, CRM, CMS, Project management apps, Admin Panels, etc using Velzon.</p></div></div>`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 7, class: "ms-lg-auto" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "mt-4" }, {}, {
                    default: () => {
                      return `<h5 class="${"text-white mb-0"}">Company</h5>
                        <div class="${"text-muted mt-3"}"><ul class="${"list-unstyled ff-secondary footer-list"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/profile/simple/simplepage" }, {}, {
                        default: () => {
                          return `About Us`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/gallery/pages-gallery" }, {}, {
                        default: () => {
                          return `Gallery`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/projects/apps-projects-overview" }, {}, {
                        default: () => {
                          return `Projects`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/timeline/timeline" }, {}, {
                        default: () => {
                          return `Timeline`;
                        }
                      })}</li></ul></div>`;
                    }
                  })}
                    ${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "mt-4" }, {}, {
                    default: () => {
                      return `<h5 class="${"text-white mb-0"}">Apps Pages</h5>
                        <div class="${"text-muted mt-3"}"><ul class="${"list-unstyled ff-secondary footer-list"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/pricing/pages-pricing" }, {}, {
                        default: () => {
                          return `Calendar`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/emailInbox/apps-mailbox" }, {}, {
                        default: () => {
                          return `Mailbox`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/apps-chat" }, {}, {
                        default: () => {
                          return `Chat`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/crm/apps-crm-deals" }, {}, {
                        default: () => {
                          return `Deals`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/tasks/apps-tasks-kanban" }, {}, {
                        default: () => {
                          return `Kanban Board`;
                        }
                      })}</li></ul></div>`;
                    }
                  })}
                    ${validate_component(Col, "Col").$$render($$result, { sm: 4, class: "mt-4" }, {}, {
                    default: () => {
                      return `<h5 class="${"text-white mb-0"}">Support</h5>
                        <div class="${"text-muted mt-3"}"><ul class="${"list-unstyled ff-secondary footer-list"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/faqs/pages-faqs" }, {}, {
                        default: () => {
                          return `FAQ`;
                        }
                      })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "/crm/apps-crm-contacts" }, {}, {
                        default: () => {
                          return `Contact`;
                        }
                      })}</li></ul></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {
        class: "text-center text-sm-start align-items-center mt-5"
      }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div><p class="${"copy-rights mb-0"}">${escape(new Date().getFullYear())} \xA9 Velzon - Themesbrand
                    </p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
            default: () => {
              return `<div class="${"text-sm-end mt-3 mt-sm-0"}"><ul class="${"list-inline mb-0 footer-social-link"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
                default: () => {
                  return `<div class="${"avatar-title rounded-circle"}"><i class="${"ri-facebook-fill"}"></i></div>`;
                }
              })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
                default: () => {
                  return `<div class="${"avatar-title rounded-circle"}"><i class="${"ri-github-fill"}"></i></div>`;
                }
              })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
                default: () => {
                  return `<div class="${"avatar-title rounded-circle"}"><i class="${"ri-linkedin-fill"}"></i></div>`;
                }
              })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
                default: () => {
                  return `<div class="${"avatar-title rounded-circle"}"><i class="${"ri-google-fill"}"></i></div>`;
                }
              })}</li>
                        <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
                default: () => {
                  return `<div class="${"avatar-title rounded-circle"}"><i class="${"ri-dribbble-line"}"></i></div>`;
                }
              })}</li></ul></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</footer>`;
});
export { Footer as default };
