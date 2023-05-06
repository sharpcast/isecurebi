import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar9 } from "../../../chunks/avatar-9-f5d371f4.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
const Candidates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const candidateList = [
    {
      id: 1,
      img: avatar10,
      name: "Tonya Noble",
      username: "@tonya",
      designation: "Web Developer"
    },
    {
      id: 2,
      img: avatar1,
      name: "Nicholas Ball",
      username: "@nicholas",
      designation: "Assistant / Store Keeper"
    },
    {
      id: 3,
      img: avatar9,
      name: "Zynthia Marrow",
      username: "@zynthia",
      designation: "Full Stack Engineer"
    },
    {
      id: 4,
      img: avatar2,
      name: "Cheryl Moore",
      username: "@cheryl",
      designation: "Product Designer"
    },
    {
      id: 5,
      img: avatar5,
      name: "Jennifer Bailey",
      username: "@jennifer",
      designation: "Marketing Director"
    },
    {
      id: 6,
      img: avatar8,
      name: "Hadley Leonard",
      username: "@hadley",
      designation: "Executive, HR Operations"
    }
  ];
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 4 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center"}"><h6 class="${"card-title mb-0 flex-grow-1"}">Popular Candidates</h6>
                <div class="${"flex-shrink-0"}">${validate_component(Link, "Link").$$render($$result, {
                href: "/Jobs/CandidateList/ListView",
                class: "link-primary"
              }, {}, {
                default: () => {
                  return `View All <i class="${"ri-arrow-right-line"}"></i>`;
                }
              })}</div></div>`;
            }
          })}
        ${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "border-end" }, {}, {
                    default: () => {
                      return `<div class="${"search-box"}"><input type="${"text"}" class="${"form-control bg-light border-light"}" autocomplete="${"off"}" id="${"searchList"}" placeholder="${"Search candidate..."}">
                        <i class="${"ri-search-line search-icon"}"></i></div>
                    <div data-simplebar style="${"max-height: 190px"}" class="${"px-3 mx-n3"}"><ul class="${"list-unstyled mb-0 pt-2"}" id="${"candidate-list"}">${each(candidateList, (item) => {
                        return `<li>${validate_component(Link, "Link").$$render($$result, {
                          href: "#!",
                          class: "d-flex align-items-center py-2"
                        }, {}, {
                          default: () => {
                            return `<div class="${"flex-shrink-0 me-2"}"><div class="${"avatar-xs"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"img-fluid rounded-circle candidate-img"}">
                                            </div></div>
                                        <div class="${"flex-grow-1"}"><h5 class="${"fs-13 mb-1 text-truncate"}"><span class="${"candidate-name"}">${escape(item.name)}</span>${escape(" ")}
                                                <span class="${"text-muted fw-normal"}">${escape(item.username)}</span></h5>
                                            <div class="${"d-none candidate-position"}">${escape(item.designation)}
                                            </div></div>
                                    `;
                          }
                        })}
                                </li>`;
                      })}</ul></div>`;
                    }
                  })}`;
                }
              })}
            ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-md mb-3 mx-auto"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" id="${"candidate-img"}" class="${"img-thumbnail rounded-circle shadow-none"}"></div>

                    <h5 id="${"candidate-name"}" class="${"mb-0"}">Tonya Noble</h5>
                    <p id="${"candidate-position"}" class="${"text-muted"}">Web Developer
                    </p>

                    <div class="${"d-flex gap-2 justify-content-center mb-3"}"><button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Google"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-google-line"}"></i></span></button>

                        <button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Linkedin"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-linkedin-line"}"></i></span></button>
                        <button type="${"button"}" class="${"btn avatar-xs p-0"}" data-bs-toggle="${"tooltip"}" data-bs-placement="${"top"}" title="${"Dribbble"}"><span class="${"avatar-title rounded-circle bg-light text-body"}"><i class="${"ri-dribbble-fill"}"></i></span></button></div>

                    <div><button type="${"button"}"${add_attribute("class", "btn btn-success custom-toggle w-100", 0)}><span class="${"icon-on"}"><i class="${"ri-add-line align-bottom me-1"}"></i> Follow
                            </span>
                            <span class="${"icon-off"}"><i class="${"ri-user-unfollow-line align-bottom me-1"}"></i>${escape(" ")}
                                Unfollow
                            </span></button></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden shadow-none" }, {}, {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-danger" }, {}, {
            default: () => {
              return `<div class="${"d-flex align-items-center"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-sm"}"><div class="${"avatar-title bg-soft-danger text-danger rounded-circle fs-17"}"><i class="${"ri-gift-line"}"></i></div></div></div>
                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-16"}">Invite your friends to Velzon</h6>
                    <p class="${"text-muted mb-0"}">Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but because occasionally.
                    </p></div></div>
            <div class="${"mt-3 text-end"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-danger" }, {}, {
                default: () => {
                  return `Invite Friends`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Candidates as default };
