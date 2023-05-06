import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"custom-footer bg-dark py-5 position-relative"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-lg-4 mt-4" }, {}, {
            default: () => {
              return `<div><div><img${add_attribute("src", LogoLight, 0)} alt="${"logo light"}" height="${"17"}"></div>
            <div class="${"mt-4 fs-13"}"><p>Premium Multipurpose Admin &amp; Dashboard Template</p>
              <p>You can build any type of web application like eCommerce,
                CRM, CMS, Project management apps, Admin Panels, etc using
                Velzon.
              </p>
              <ul class="${"list-inline mb-0 footer-social-link"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "avatar-xs d-block" }, {}, {
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
              })}</li></ul></div></div>`;
            }
          })}

        ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-7 ms-lg-auto" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-4 mt-4" }, {}, {
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
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/team/team" }, {}, {
                        default: () => {
                          return `Team`;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/pricing/pages-pricing" }, {}, {
                        default: () => {
                          return `Pricing`;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/timeline/timeline" }, {}, {
                        default: () => {
                          return `Timeline`;
                        }
                      })}</li></ul></div>`;
                    }
                  })}
            ${validate_component(Col, "Col").$$render($$result, { class: "col-sm-4 mt-4" }, {}, {
                    default: () => {
                      return `<h5 class="${"text-white mb-0"}">For Jobs</h5>
              <div class="${"text-muted mt-3"}"><ul class="${"list-unstyled ff-secondary footer-list"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "/Jobs/JobList/List" }, {}, {
                        default: () => {
                          return `Job List`;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/Jobs/Application" }, {}, {
                        default: () => {
                          return `application
                    `;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/Jobs/NewJob" }, {}, {
                        default: () => {
                          return `New Job`;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/Jobs/CompaniesList" }, {}, {
                        default: () => {
                          return `Company List
                    `;
                        }
                      })}</li></ul></div>`;
                    }
                  })}
            ${validate_component(Col, "Col").$$render($$result, { class: "col-sm-4 mt-4" }, {}, {
                    default: () => {
                      return `<h5 class="${"text-white mb-0"}">Support</h5>
              <div class="${"text-muted mt-3"}"><ul class="${"list-unstyled ff-secondary footer-list"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/faqs/pages-faqs" }, {}, {
                        default: () => {
                          return `FAQ`;
                        }
                      })}</li>
                  <li>${validate_component(Link, "Link").$$render($$result, { href: "/pages/faqs/pages-faqs" }, {}, {
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
          return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-6" }, {}, {
            default: () => {
              return `<div><p class="${"copy-rights mb-0"}">${escape(new Date().getFullYear())} \xA9
              Velzon - Themesbrand
            </p></div>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { class: "col-sm-6" }, {}, {
            default: () => {
              return `<div class="${"text-sm-end mt-3 mt-sm-0"}"><ul class="${"list-inline mb-0 footer-list gap-4 fs-13"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages/privacypolicy" }, {}, {
                default: () => {
                  return `Privacy Policy`;
                }
              })}</li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages-term-conditions" }, {}, {
                default: () => {
                  return `Terms &amp; Conditions
                `;
                }
              })}</li>
              <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "/pages-privacy-policy" }, {}, {
                default: () => {
                  return `Security`;
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
