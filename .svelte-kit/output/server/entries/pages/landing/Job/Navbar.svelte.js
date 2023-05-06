import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../../chunks/Collapse-6781eb46.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as NavLink } from "../../../../chunks/NavLink-7c96aa43.js";
import { N as NavbarToggler } from "../../../../chunks/NavbarToggler-a0cc429e.js";
import { l as logo_dark } from "../../../../chunks/logo-dark-ec4d2828.js";
import { L as LogoLight } from "../../../../chunks/logo-light-461ccdee.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/Button-ba828d9c.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var navClass = "";
  let isOpen = true;
  return `<nav${add_attribute("class", "navbar navbar-expand-lg navbar-landing fixed-top job-navbar" + navClass, 0)} id="${"navbar"}">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "custom-container" }, {}, {
    default: () => {
      return `${validate_component(Link, "Link").$$render($$result, {
        class: "navbar-brand",
        href: "/dashboard"
      }, {}, {
        default: () => {
          return `<img${add_attribute("src", logo_dark, 0)} class="${"card-logo card-logo-dark"}" alt="${"logo dark"}" height="${"17"}">
            <img${add_attribute("src", LogoLight, 0)} class="${"card-logo card-logo-light"}" alt="${"logo light"}" height="${"17"}">`;
        }
      })}
        ${validate_component(NavbarToggler, "NavbarToggler").$$render($$result, {
        class: "navbar-toggler py-0 fs-20 text-body",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, {}, {
        default: () => {
          return `<i class="${"mdi mdi-menu"}"></i>`;
        }
      })}

        ${validate_component(Collapse, "Collapse").$$render($$result, {
        class: "navbar-collapse",
        id: "navbarSupportedContent",
        isOpen
      }, {}, {
        default: () => {
          return `<nav class="${"navbar-nav mx-auto mt-2 mt-lg-0"}" id="${"navbar-example"}"><li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#hero" }, {}, {
            default: () => {
              return `Home`;
            }
          })}</li>
                <li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#process" }, {}, {
            default: () => {
              return `Process`;
            }
          })}</li>
                <li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#categories" }, {}, {
            default: () => {
              return `Categories
                    `;
            }
          })}</li>
                <li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#findJob" }, {}, {
            default: () => {
              return `Find Jobs`;
            }
          })}</li>
                <li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#candidates" }, {}, {
            default: () => {
              return `Candidates
                    `;
            }
          })}</li>
                <li class="${"nav-item"}">${validate_component(NavLink, "NavLink").$$render($$result, { href: "#blog" }, {}, {
            default: () => {
              return `Blog`;
            }
          })}</li></nav>

            <div>${validate_component(Link, "Link").$$render($$result, {
            href: "/authenticationInner/login/auth-signin-basic",
            class: "btn btn-soft-primary"
          }, {}, {
            default: () => {
              return `<i class="${"ri-user-3-line align-bottom me-1"}"></i> Login &amp; Register
                `;
            }
          })}</div>`;
        }
      })}`;
    }
  })}</nav>`;
});
export { Navbar as default };
