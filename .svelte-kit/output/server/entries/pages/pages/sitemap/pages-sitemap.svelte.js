import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
const Pages_sitemap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sitemap | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div><div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "SiteMap", pageTitle: "Pages" }, {}, {})}
			${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Responsive Sitemap</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"sitemap-content"}"><figure class="${"sitemap-horizontal"}"><ul class="${"administration"}"><li><ul class="${"director"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Velzon Admin</span>`;
                        }
                      })}
													<ul class="${"subdirector"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Contact Us</span>`;
                        }
                      })}</li></ul>
													<ul class="${"departments"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Main Pages</span>`;
                        }
                      })}</li>

														<li class="${"department"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Account Management</span>`;
                        }
                      })}
															<ul><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Sign Up</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Login</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Profile Settings</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Modify Reservation</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Cancel Reservation</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Write Reviews</span>`;
                        }
                      })}</li></ul></li>
														<li class="${"department"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>About Us</span>`;
                        }
                      })}
															<ul><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Overview</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Connect Via Social Media</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Careers</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Team Members</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Policies</span>`;
                        }
                      })}</li></ul></li>
														<li class="${"department"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Book a Trip</span>`;
                        }
                      })}
															<ul><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Travel Details</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Reservation Process</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Payment Option</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Comfirmation</span>`;
                        }
                      })}</li></ul></li>
														<li class="${"department"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Destination</span>`;
                        }
                      })}
															<ul><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Architecture</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Art</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Entertainment</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>History</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Science</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Sports</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Music</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Tracking Camp</span>`;
                        }
                      })}</li></ul></li>
														<li class="${"department"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `<span>Travel Tips</span>`;
                        }
                      })}
															<ul><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>General Travel</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Helpth Concerns</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>Safety Measures</span>`;
                        }
                      })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `<span>FAQ&#39;s</span>`;
                        }
                      })}</li></ul></li></ul></li></ul></li></ul></figure></div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Horizontal</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"hori-sitemap"}"><ul class="${"list-unstyled mb-0"}"><li class="${"p-0 parent-title"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium fs-14" }, {}, {
                        default: () => {
                          return `My Account`;
                        }
                      })}</li>
									<ul class="${"list-unstyled row g-0"}"><li class="${"col-sm-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium sub-title" }, {}, {
                        default: () => {
                          return `About Us`;
                        }
                      })}
											<ul class="${"list-unstyled row g-0 second-list"}"><li class="${"col-sm-6"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Overview`;
                        }
                      })}</li>
												<li class="${"col-sm-6"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `History`;
                        }
                      })}</li></ul></li>
										<li class="${"col-sm-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `My self-care Plan`;
                        }
                      })}
											<ul class="${"list-unstyled second-list pt-0"}"><li><div>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Basic`;
                        }
                      })}
														${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Early Physiotherapy`;
                        }
                      })}
														${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Intermediate Physiotherapy`;
                        }
                      })}
														${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Return to Normal Activity`;
                        }
                      })}</div></li></ul></li>
										<li class="${"col-sm-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium sub-title" }, {}, {
                        default: () => {
                          return `Support Us`;
                        }
                      })}
											<ul class="${"list-unstyled row g-0 sub-list"}"><li class="${"col-sm-6"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Contact Us`;
                        }
                      })}</li>
												<li class="${"col-sm-6"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Customer Services`;
                        }
                      })}
													<ul class="${"list-unstyled second-list"}"><li><div>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Chat With Us`;
                        }
                      })}
																${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `Connect Information`;
                        }
                      })}
																${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                        default: () => {
                          return `FAQ&#39;S`;
                        }
                      })}</div></li></ul></li></ul></li>
										<li class="${"col-sm-3"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium" }, {}, {
                        default: () => {
                          return `Terms &amp; Conditions`;
                        }
                      })}</li></ul></ul></div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h4 class="${"card-title mb-0"}">Vertical</h4>`;
                    }
                  })}
						${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"verti-sitemap"}"><ul class="${"list-unstyled mb-0"}"><li class="${"p-0 parent-title"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium fs-14" }, {}, {
                                default: () => {
                                  return `Nancy Martino - Project Director`;
                                }
                              })}</li>
											<li><div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `Erica Kernan - Team Leader`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Jason McQuaid - Member`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Elwood Arter - Member`;
                                }
                              })}</li></ul></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `Mary Jones - Project Manager`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Jordyn Jones - Designer`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Ashlee Haney - Developer`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Rashad Charles - BackEnd Developer`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Walter Newman - Frontend Developer`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Adam Moss - Designer`;
                                }
                              })}</li></ul></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `Tilly Kent - Executive Manager`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Tyler Porter - Account Executive`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Alicia Thompson - Sales Executive`;
                                }
                              })}
															<ul class="${"third-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Jack Coates - Member`;
                                }
                              })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Owen Jarvis - Member`;
                                }
                              })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Ashlee Haney - Member`;
                                }
                              })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Archie Cook - Member`;
                                }
                              })}</li></ul></li></ul></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `Rachel Rose - HR`;
                                }
                              })}</div></div></li></ul></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"verti-sitemap"}"><ul class="${"mb-0 list-unstyled"}"><li class="${"p-0 parent-title"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "fw-medium fs-14" }, {}, {
                                default: () => {
                                  return `Velzon`;
                                }
                              })}</li>
											<li><div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-airplay-line me-1 align-bottom"}"></i> Dashboards`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Analytics`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `CRM`;
                                }
                              })}</li></ul></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-pencil-ruler-2-line me-1 align-bottom"}"></i> App Pages`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Calender`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Chat`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Email`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Ecommerce`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Projects`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Tasks`;
                                }
                              })}</li></ul></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-file-list-3-line me-1 align-bottom"}"></i> Pages`;
                                }
                              })}</div></div>
												<div class="${"first-list"}"><div class="${"list-wrap"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "fw-medium text-primary"
                              }, {}, {
                                default: () => {
                                  return `<i class="${"ri-stack-line me-1 align-bottom"}"></i> Components`;
                                }
                              })}</div>
													<ul class="${"second-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Base UI`;
                                }
                              })}</li>
														<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Advance UI`;
                                }
                              })}
															<ul class="${"third-list list-unstyled"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Sweet Alerts`;
                                }
                              })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Range Slider`;
                                }
                              })}</li>
																<li>${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Nestable List`;
                                }
                              })}</li></ul></li></ul></div></li></ul></div>`;
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
      })}`;
    }
  })}</div></div>`;
});
export { Pages_sitemap as default };
