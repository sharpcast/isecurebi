import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { C as Card } from "../../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../../chunks/CardHeader-84e061db.js";
import { L as Label } from "../../../../../chunks/Label-1c7919d2.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { T as Table } from "../../../../../chunks/Table-b6431bfe.js";
import { c as company3 } from "../../../../../chunks/img-3-127a32b6.js";
const RightSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { class: "card" }, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-header" }, {}, {
        default: () => {
          return `<h5 class="${"mb-0"}">Job Overview</h5>`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
        default: () => {
          return `<div class="${"table-responsive table-card"}">${validate_component(Table, "Table").$$render($$result, { class: "table mb-0" }, {}, {
            default: () => {
              return `<tbody><tr><td class="${"fw-medium"}">Title</td>
              <td>Product Designer</td></tr>
            <tr><td class="${"fw-medium"}">Company Name</td>
              <td>Themesbrand</td></tr>
            <tr><td class="${"fw-medium"}">Location</td>
              <td>Zuweihir, UAE</td></tr>
            <tr><td class="${"fw-medium"}">Time</td>
              <td><span class="${"badge badge-soft-success"}">Full Time</span></td></tr>
            <tr><td class="${"fw-medium"}">Job Application</td>
              <td>54 Application</td></tr>
            <tr><td class="${"fw-medium"}">Post Date</td>
              <td>15 Sep, 2021</td></tr>
            <tr><td class="${"fw-medium"}">Salary</td>
              <td>$35k - $45k</td></tr>
            <tr><td class="${"fw-medium"}">Experience</td>
              <td>5+ Years</td></tr>
            <tr><td class="${"fw-medium"}">Qualification</td>
              <td>Master Degree</td></tr></tbody>`;
            }
          })}</div>
      <div class="${"mt-4 pt-2 hstack gap-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-primary w-100"
          }, {}, {
            default: () => {
              return `Apply Now
        `;
            }
          })}
        ${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-soft-danger btn-icon custom-toggle flex-shrink-0"
          }, {}, {
            default: () => {
              return `${`<span class="${"icon-on"}"><i class="${"ri-bookmark-line align-bottom"}"></i></span>`}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}

  ${validate_component(Card, "Card").$$render($$result, { class: "card" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
        default: () => {
          return `<div class="${"avatar-sm mx-auto"}"><div class="${"avatar-title bg-soft-warning rounded"}"><img${add_attribute("src", company3, 0)} alt="${""}" class="${"avatar-xxs"}"></div></div>
      <div class="${"text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
            default: () => {
              return `<h5 class="${"mt-3"}">Themesbrand</h5>`;
            }
          })}
        <p class="${"text-muted"}">IT Department</p></div>

      <div class="${"table-responsive"}">${validate_component(Table, "Table").$$render($$result, { class: "table mb-0" }, {}, {
            default: () => {
              return `<tbody><tr><td class="${"fw-medium"}">Company Size</td>
              <td>5</td></tr>
            <tr><td class="${"fw-medium"}">Industry Type</td>
              <td>Software</td></tr>
            <tr><td class="${"fw-medium"}">Founded in</td>
              <td>2016</td></tr>
            <tr><td class="${"fw-medium"}">Phone</td>
              <td>+(234) 12345 67890</td></tr>
            <tr><td class="${"fw-medium"}">Email</td>
              <td>themesbrand@gmail.com</td></tr>
            <tr><td class="${"fw-medium"}">Social media</td>
              <td><ul class="${"list-inline mb-0"}"><li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-whatsapp-line"}"></i>`;
                }
              })}</li>
                  <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-facebook-line"}"></i>`;
                }
              })}</li>
                  <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-twitter-line"}"></i>`;
                }
              })}</li>
                  <li class="${"list-inline-item"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-youtube-line"}"></i>`;
                }
              })}</li></ul></td></tr></tbody>`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}

  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-header" }, {}, {
        default: () => {
          return `<h5 class="${"mb-0"}">Job Location</h5>`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
        default: () => {
          return `<div class="${"ratio ratio-4x3"}"><iframe src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861227.8137337372!2d51.654904288504646!3d24.33915646928631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1664257145153!5m2!1sen!2sin"}" height="${"450"}" style="${"border: 0"}" title="${"abc"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div>`;
        }
      })}`;
    }
  })}

  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "card-header" }, {}, {
        default: () => {
          return `<h5 class="${"mb-0"}">Contact Us</h5>`;
        }
      })}
    ${validate_component(CardBody, "CardBody").$$render($$result, { class: "card-body" }, {}, {
        default: () => {
          return `<form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlfor: "nameInput",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Name
          `;
            }
          })}
          <input type="${"text"}" class="${"form-control"}" id="${"nameInput"}" placeholder="${"Enter your name"}"></div>
        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlfor: "emailInput",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Email
          `;
            }
          })}
          <input type="${"text"}" class="${"form-control"}" id="${"emailInput"}" placeholder="${"Enter your email"}"></div>
        <div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlfor: "messageInput",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Message
          `;
            }
          })}
          <textarea class="${"form-control"}" id="${"messageInput"}" rows="${"3"}" placeholder="${"Message"}"></textarea></div>
        <div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Send Message
          </button></div></form>`;
        }
      })}`;
    }
  })}`;
});
export { RightSection as default };
