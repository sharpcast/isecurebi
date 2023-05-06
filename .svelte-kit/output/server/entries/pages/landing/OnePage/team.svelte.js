import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar6 } from "../../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../../chunks/avatar-10-def8cdb7.js";
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section bg-light"}" id="${"team"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 8 }, {}, {
            default: () => {
              return `<div class="${"text-center mb-5"}"><h3 class="${"mb-3 fw-semibold"}">Our <span class="${"text-danger"}">Team</span></h3>
                    <p class="${"text-muted mb-4 ff-secondary"}">To achieve this, it would be necessary to have uniform grammar,
                        pronunciation and more common words. If several languages coalesce the grammar.</p></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Nancy Martino`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Team Leader</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Henry Baird`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Full Stack Developer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Frank Hook`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Project Manager</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Donald Palmer`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">UI/UX Designer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Erica Kernan`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Web Designer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Alexis Clarke`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Backend Developer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Marie Ward`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">Full Stack Developer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}


            ${validate_component(Col, "Col").$$render($$result, { lg: 3, sm: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "text-center p-4" }, {}, {
                    default: () => {
                      return `<div class="${"avatar-xl mx-auto mb-4 position-relative"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"img-fluid rounded-circle"}">
                            ${validate_component(Link, "Link").$$render($$result, {
                        href: "/emailInbox/apps-mailbox",
                        class: "btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                      }, {}, {
                        default: () => {
                          return `<div class="${"avatar-title bg-transparent"}"><i class="${"ri-mail-fill align-bottom"}"></i></div>`;
                        }
                      })}</div>

                        <h5 class="${"mb-1"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "/pages/profile/simple/simplepage",
                        class: "text-body"
                      }, {}, {
                        default: () => {
                          return `Jack Gough`;
                        }
                      })}</h5>
                        <p class="${"text-muted mb-0 ff-secondary"}">React Js Developer</p>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-lg-12"}"><div class="${"text-center mt-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "/pages/team/team",
            class: "btn btn-primary"
          }, {}, {
            default: () => {
              return `View All Members <i class="${"ri-arrow-right-line ms-1 align-bottom"}"></i>`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}</section>`;
});
export { Team as default };
