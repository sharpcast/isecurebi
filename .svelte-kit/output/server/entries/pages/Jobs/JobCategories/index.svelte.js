import { c as create_ssr_component, v as validate_component, b as escape, e as each, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../../chunks/DropdownMenu-36ba586e.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../../chunks/DropdownToggle-396a8e94.js";
import { I as Input } from "../../../../chunks/Input-db5b479a.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../../chunks/appsJobs-3a727122.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import "../../../../chunks/popper-e421ff0f.js";
import "../../../../chunks/index-bddc6f42.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-7-4861de06.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/mail_chimp-a5132002.js";
import "../../../../chunks/bitbucket-59cc1b30.js";
const JobCategories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Job Categories | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "container-fluid" }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Job Categories",
        pageTitle: "Jobs"
      }, {}, {})}
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-between gy-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 3 }, {}, {
                            default: () => {
                              return `<div class="${"search-box"}">${validate_component(Input, "Input").$$render($$result, {
                                type: "text",
                                class: "form-control search",
                                placeholder: "Search for job categories..."
                              }, {}, {})}
                    <i class="${"ri-search-line search-icon"}"></i></div>`;
                            }
                          })}
                ${validate_component(Col, "Col").$$render($$result, { class: "col-lg-auto" }, {}, {
                            default: () => {
                              return `<div class="${"d-md-flex text-nowrap gap-2"}"><button class="${"btn btn-info add-btn"}" data-bs-toggle="${"modal"}" data-bs-target="${"#showModal"}"><i class="${"ri-add-fill me-1 align-bottom"}"></i> Add
                      Categories
                    </button>
                    <button class="${"btn btn-danger"}"><i class="${"ri-filter-2-line me-1 align-bottom"}"></i>${escape(" ")}
                      Filters
                    </button>
                    ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                    type: "button",
                                    role: "button",
                                    tag: "button",
                                    id: "dropdownMenuLink1",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": "false",
                                    class: "btn btn-soft-info"
                                  }, {}, {
                                    default: () => {
                                      return `<i class="${"ri-more-2-fill"}"></i>`;
                                    }
                                  })}
                      ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {
                                    class: "dropdown-menu",
                                    "aria-labelledby": "dropdownMenuLink1"
                                  }, {}, {
                                    default: () => {
                                      return `<li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                        default: () => {
                                          return `All
                          `;
                                        }
                                      })}</li>
                        <li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                        default: () => {
                                          return `Last Week
                          `;
                                        }
                                      })}</li>
                        <li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                        default: () => {
                                          return `Last Month
                          `;
                                        }
                                      })}</li>
                        <li>${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "dropdown-item", href: "#!" }, {}, {
                                        default: () => {
                                          return `Last Year
                          `;
                                        }
                                      })}</li>`;
                                    }
                                  })}`;
                                }
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
          })}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {
        class: "row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1"
      }, {}, {
        default: () => {
          return `${each(MOCK_DATA.jobCategories, (item) => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center py-4" }, {}, {
                      default: () => {
                        return `<lord-icon${add_attribute("src", item.icon, 0)} trigger="${"hover"}" colors="${"primary:#405189"}" target="${"div"}" style="${"width: 50px; height: 50px"}"></lord-icon>
                        ${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "stretched-link" }, {}, {
                          default: () => {
                            return `<h5 class="${"mt-4"}">${escape(item.lable)}</h5>
                        `;
                          }
                        })}
                        <p class="${"text-muted mb-0"}">${escape(item.position)}</p>
                    `;
                      }
                    })}
                `;
                  }
                })}
            `;
              }
            })}`;
          })}`;
        }
      })}

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-3"}"><button class="${"btn btn-link text-info mt-2"}" id="${"loadmore"}"><i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i>${escape(" ")}
              Load More${escape(" ")}</button></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { JobCategories as default };
