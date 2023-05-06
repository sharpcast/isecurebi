import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { S as Swiper_1, a as Swiper_slide } from "../../../../chunks/swiper.min-94ceb916.js";
import { N as Navigation } from "../../../../chunks/navigation-98db8aa9.js";
/* empty css                                          */import { a as avatar3 } from "../../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar7 } from "../../../../chunks/avatar-7-46aa251f.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img6 } from "../../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../../chunks/img-7-4861de06.js";
import { i as img9 } from "../../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../../chunks/img-10-09bc0399.js";
import "../../../../chunks/create-element-if-not-defined-c750ea09.js";
let thumbsSwiper = null;
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Timeline | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Timeline", pageTitle: "Pages" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div><h5>Center Timeline</h5>
					<div class="${"timeline"}"><div class="${"timeline-item left"}"><i class="${"icon ri-stack-line"}"></i>
							<div class="${"date"}">15 Dec 2021</div>
							<div class="${"content"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"avatar-sm rounded"}"></div>
									<div class="${"flex-grow-1 ms-3"}"><h5 class="${"fs-15"}">@Erica245 <small class="${"text-muted fs-13 fw-normal"}">- 10 min Ago</small></h5>
										<p class="${"text-muted mb-2"}">Wish someone a sincere \u2018good luck in your new job\u2019 with these sweet messages.
											Make sure you pick out a good luck new job card to go with the words, and pop
											a beautiful bunch of flowers from our gift range in your basket, to make them
											feel super special.
										</p>
										<div class="${"hstack gap-2"}">${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn btn-sm btn-light"
              }, {}, {
                default: () => {
                  return `<span class="${"me-1"}">\u{1F525}</span> 19`;
                }
              })}
											${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn btn-sm btn-light"
              }, {}, {
                default: () => {
                  return `<span class="${"me-1"}">\u{1F929}</span> 22`;
                }
              })}</div></div></div></div></div>
						<div class="${"timeline-item right"}"><i class="${"icon ri-vip-diamond-line"}"></i>
							<div class="${"date"}">22 Oct 2021</div>
							<div class="${"content"}"><h5>Adding a new event with attachments</h5>
								<p class="${"text-muted"}">Too much or too little spacing, as in the example below, can make things
									unpleasant for the reader.
								</p>
								${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                    default: () => {
                      return `<div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-danger text-danger fs-15 rounded"}"><i class="${"ri-image-2-line"}"></i></div></div>
											<div class="${"flex-shrink-0"}"></div>
											<div class="${"flex-grow-1 overflow-hidden ms-2"}"><h6 class="${"text-truncate mb-0"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "stretched-link" }, {}, {
                        default: () => {
                          return `Business Template - UI/UX design`;
                        }
                      })}</h6>
												<small>685 KB</small></div></div>`;
                    }
                  })}
									${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                    default: () => {
                      return `<div class="${"d-flex border border-dashed p-2 rounded position-relative"}"><div class="${"flex-shrink-0 avatar-xs"}"><div class="${"avatar-title bg-soft-info text-info fs-15 rounded"}"><i class="${"ri-file-zip-line"}"></i></div></div>
											<div class="${"flex-grow-1 ms-2 overflow-hidden"}"><h6 class="${"mb-0 text-truncate"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "stretched-link" }, {}, {
                        default: () => {
                          return `Bank Management System - PSD`;
                        }
                      })}</h6>
												<small>8.78 MB</small></div></div>`;
                    }
                  })}`;
                }
              })}</div></div>
						<div class="${"timeline-item left"}"><i class="${"icon ri-gift-line"}"></i>
							<div class="${"date"}">10 Jul 2021</div>
							<div class="${"content"}"><h5>Create new project buildng product</h5>
								<p class="${"text-muted"}">Every team project can have a velzon. Use the velzon to share information with
									your team to understand and contribute to your project.
								</p>
								<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "",
                "data-bs-original-title": "Christi"
              }, {}, {
                default: () => {
                  return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "",
                "data-bs-original-title": "Frank Hook"
              }, {}, {
                default: () => {
                  return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "",
                "data-bs-original-title": " Ruby"
              }, {}, {
                default: () => {
                  return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R</div></div>`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "avatar-group-item",
                "data-bs-toggle": "tooltip",
                "data-bs-trigger": "hover",
                "data-bs-placement": "top",
                title: "",
                "data-bs-original-title": "more"
              }, {}, {
                default: () => {
                  return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+</div></div>`;
                }
              })}</div></div></div>
						<div class="${"timeline-item right"}"><i class="${"icon ri-shield-star-line"}"></i>
							<div class="${"date"}">18 May 2021</div>
							<div class="${"content"}"><h5>Donald Palmer <small class="${"text-muted fs-13 fw-normal"}">- Has changed 2 attributes</small></h5>
								<p class="${"text-muted fst-italic mb-2"}">&quot; This is an awesome admin dashboard template. It is extremely well structured and
									uses state of the art components (e.g. one of the only templates using boostrap
									5.1.3 so far). I integrated it into a Rails 6 project. Needs manual integration
									work of course but the template structure made it easy. &quot;
								</p>
								<div class="${"hstack gap-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-sm bg-light" }, {}, {
                default: () => {
                  return `<span class="${"me-1"}">\u{1F497}</span> 35`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn btn-sm btn-light"
              }, {}, {
                default: () => {
                  return `<span class="${"me-1"}">\u{1F44D}</span> 10`;
                }
              })}
									${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "btn btn-sm btn-light"
              }, {}, {
                default: () => {
                  return `<span class="${"me-1"}">\u{1F64F}</span> 10`;
                }
              })}</div></div></div>
						<div class="${"timeline-item left"}"><i class="${"icon ri-user-smile-line"}"></i>
							<div class="${"date"}">10 Feb 2021</div>
							<div class="${"content"}"><h5>Velzon admin dashboard templates layout upload</h5>
								<p class="${"text-muted"}">Powerful, clean &amp; modern responsive bootstrap 5 admin template. The maximum file
									size for uploads in this demo :
								</p>
								${validate_component(Row, "Row").$$render($$result, {
                class: "border border-dashed rounded gx-2 p-2"
              }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}
									${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}
									${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}
									${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                    default: () => {
                      return `<img${add_attribute("src", img6, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                    }
                  })}`;
                }
              })}</div></div>
						<div class="${"timeline-item right"}"><i class="${"icon ri-fire-line"}"></i>
							<div class="${"date"}">01 Jan 2021</div>
							<div class="${"content"}"><h5>New ticket received <span class="${"badge bg-soft-success text-success fs-10 align-middle ms-1"}">Completed</span></h5>
								<p class="${"text-muted mb-2"}">It is important for us that we receive email notifications when a ticket is
									created as our IT staff are mobile and will not always be looking at the dashboard
									for new tickets.
								</p>
								${validate_component(Link, "Link").$$render($$result, {
                href: "#!",
                class: "link-primary text-decoration-underline"
              }, {}, {
                default: () => {
                  return `Read More <i class="${"ri-arrow-right-line"}"></i>`;
                }
              })}</div></div></div></div>`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div><h5 class="${"mb-4"}">Left Timeline</h5>
					<div class="${"timeline-2"}"><div class="${"timeline-year"}"><p>12 Dec 2021</p></div>
						<div class="${"timeline-continue"}">${validate_component(Row, "Row").$$render($$result, { class: "timeline-right" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<p class="${"timeline-date"}">02:35AM to 04:30PM</p>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-box"}"><div class="${"timeline-text"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-sm rounded"}">
												<div class="${"flex-grow-1 ms-3"}"><h5 class="${"mb-1"}">Frank hook joined with our company</h5>
													<p class="${"text-muted mb-0"}">It makes a statement, it\u2019s impressive graphic design. Increase or
														decrease the letter spacing depending on the situation and try, try
														again until it looks right, and each letter has the perfect spot of its
														own.
													</p></div></div></div></div>`;
                    }
                  })}`;
                }
              })}

							${validate_component(Row, "Row").$$render($$result, { class: "timeline-right" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<p class="${"timeline-date"}">02:35AM to 04:30PM</p>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-box"}"><div class="${"timeline-text"}"><h5>Trip planning</h5>
											<p class="${"text-muted"}">In the trip planner, keep only one or two activities in a day if the purpose
												of the trip is to relax and take it easy during the vacation :
											</p>
											${validate_component(Row, "Row").$$render($$result, {
                        class: "border border-dashed rounded gx-2 p-2"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img7, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}`;
                            }
                          })}
												${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}`;
                            }
                          })}
												${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img10, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}`;
                            }
                          })}
												${validate_component(Col, "Col").$$render($$result, { xs: 3 }, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}

							${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-year"}"><p>08 Dec 2021</p></div>`;
                    }
                  })}`;
                }
              })}

							${validate_component(Row, "Row").$$render($$result, { class: "timeline-right" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<p class="${"timeline-date"}">02:35AM to 04:30PM</p>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-box"}"><div class="${"timeline-text"}"><h5>Velzon - Project Discussion</h5>
											<p class="${"text-muted mb-0"}">The purpose of the discussion is to interpret and describe the significance
												of your findings in light of what was already known about the research
												problem being investigated, and to explain any new understanding or fresh
												insights about the problem after you&#39;ve taken the findings into
												consideration.
											</p></div></div>`;
                    }
                  })}`;
                }
              })}

							${validate_component(Row, "Row").$$render($$result, { class: "timeline-right" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<p class="${"timeline-date"}">10:24AM to 11:15PM</p>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-box"}"><div class="${"timeline-text"}"><h5>Client Meeting (Nancy Martino)</h5>
											<p class="${"text-muted mb-0"}">A client meeting, meaning, direct collaboration and communication with a
												customer, is the best way to understand their needs and how you can help
												support them.
											</p></div></div>`;
                    }
                  })}`;
                }
              })}

							${validate_component(Row, "Row").$$render($$result, { class: "timeline-right" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<p class="${"timeline-date"}">9:20AM to 10:05PM</p>`;
                    }
                  })}
								${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
                    default: () => {
                      return `<div class="${"timeline-box"}"><div class="${"timeline-text"}"><h5>Designer &amp; Developer Meeting</h5>
											<ul class="${"mb-0 text-muted vstack gap-2"}"><li>Last updates</li>
												<li>Weekly Planning</li>
												<li>Work Distribution</li></ul></div></div>`;
                    }
                  })}`;
                }
              })}</div>

						<div class="${"timeline-year"}"><p><span>05 Dec 2021</span></p></div>
						<div class="${"timeline-launch"}"><div class="${"timeline-box"}"><div class="${"timeline-text"}"><h5>Our Company Activity</h5>
									<p class="${"text-muted text-capitalize mb-0"}">Wow...!!! What a Journey So Far...!!!
									</p></div></div></div></div></div>`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, { class: "mt-4" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div><h5>Horizontal Timeline</h5>
					<div class="${"horizontal-timeline my-3"}">${validate_component(Swiper_1, "Swiper").$$render($$result, {
                class: "timelineSlider",
                navigation: true,
                thumbs: { swiper: thumbsSwiper },
                slidesPerView: 5,
                modules: [Navigation]
              }, {}, {
                default: () => {
                  return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted fw-medium mb-0"}">December, 2020</p>
											<h6 class="${"mb-0"}">Plateform Development</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">10 : 35 PM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">January, 2021</p>
											<h6 class="${"mb-0"}">Release Bank &amp; Cards Phase</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">8 : 10 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">March, 2021</p>
											<h6 class="${"mb-0"}">Beta Launch of Plateform</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">01 : 47 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">April, 2021</p>
											<h6 class="${"mb-0"}">First Crypto Bank Transfers</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">07 : 53 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">May, 2021</p>
											<h6 class="${"mb-0"}">Launch Ethbay Services</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">4 : 05 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">June, 2021</p>
											<h6 class="${"mb-0"}">Fastest Crypto Transaction</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">02 : 40 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">July, 2021</p>
											<h6 class="${"mb-0"}">Crypto Blockchain Release</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">9 : 27 AM</span></div></div>`;
                    }
                  })}
							${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"card pt-2 border-0 item-box text-center"}"><div class="${"timeline-content p-3 rounded"}"><div><p class="${"text-muted mb-1"}">August, 2021</p>
											<h6 class="${"mb-0"}">Launch Ethereum Classifieds</h6></div></div>
									<div class="${"time"}"><span class="${"badge bg-success"}">06 : 19 AM</span></div></div>`;
                    }
                  })}`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Timeline as default };
