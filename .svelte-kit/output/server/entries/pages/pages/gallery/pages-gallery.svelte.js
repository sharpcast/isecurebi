import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, b as escape } from "../../../../chunks/index-584434b3.js";
import { M as MasonryLayout } from "../../../../chunks/MasonryLayout-6ce8edd3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { i as img1 } from "../../../../chunks/img-1-6a9b26f3.js";
import { i as img2 } from "../../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../../chunks/img-5-1aac893f.js";
import { i as img6 } from "../../../../chunks/img-6-3ccff08f.js";
import { i as img7 } from "../../../../chunks/img-7-4861de06.js";
import { i as img8 } from "../../../../chunks/img-8-19298a6b.js";
import { i as img9 } from "../../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../../chunks/img-10-09bc0399.js";
import { a as img11, i as img12 } from "../../../../chunks/img-12-ccf074a3.js";
const Pages_gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var gallery = [
    {
      id: 1,
      img: img1,
      title: "Glasses and laptop from above",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: "Project"
    },
    {
      id: 2,
      img: img2,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Project"
    },
    {
      id: 3,
      img: img3,
      title: "Photo was taken in Beach",
      auther: "Elwood Arter",
      likes: "2.2K",
      comments: "1.3K",
      category: "Project"
    },
    {
      id: 4,
      img: img4,
      title: "Drawing a sketch",
      auther: "Jason McQuaid",
      likes: "2.2K",
      comments: "1.3K",
      category: "Project"
    },
    {
      id: 5,
      img: img5,
      title: "Working from home little spot",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: "Project"
    },
    {
      id: 6,
      img: img6,
      title: "Glasses and laptop from above",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K",
      category: "Designing"
    },
    {
      id: 7,
      img: img7,
      title: "Sunrise above a beach",
      auther: "James Ballard",
      likes: "2.2K",
      comments: "1.3K",
      category: "Development"
    },
    {
      id: 8,
      img: img8,
      title: "Project discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Designing"
    },
    {
      id: 9,
      img: img9,
      title: "Dramatic clouds at the Golden Gate Bridge",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: "Photography"
    },
    {
      id: 10,
      img: img10,
      title: "Fun day at the Hill Station",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: "Development"
    },
    {
      id: 11,
      img: img11,
      title: "Cycling in the countryside",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Designing"
    },
    {
      id: 12,
      img: img12,
      title: "A mix of friends and strangers heading off to find an adventure.",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K",
      category: "Designing"
    },
    {
      id: 13,
      img: img8,
      title: "Project discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Photography"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Gallery | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}


<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Gallery", pageTitle: "Pages" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${""}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
                        default: () => {
                          return `<div class="${"text-center"}"><ul class="${"list-inline categories-filter animation-nav"}" id="${"filter"}"><li class="${"list-inline-item"}"><a${add_attribute("href", null, 0)}${add_attribute("class", "categories active", 0)} data-filter="${"*"}">All</a></li>
										<li class="${"list-inline-item"}"><a${add_attribute("href", null, 0)}${add_attribute("class", "categories", 0)} data-filter="${".project"}">Project</a></li>
										<li class="${"list-inline-item"}"><a${add_attribute("href", null, 0)}${add_attribute("class", "categories", 0)} data-filter="${".designing"}">Designing</a></li>
										<li class="${"list-inline-item"}"><a${add_attribute("href", null, 0)}${add_attribute("class", "categories", 0)} data-filter="${".photography"}">Photography</a></li>
										<li class="${"list-inline-item"}"><a${add_attribute("href", null, 0)}${add_attribute("class", "categories", 0)} data-filter="${".development"}">Development</a></li></ul></div>

								${validate_component(MasonryLayout, "MasonryLayout").$$render($$result, {
                            gallery,
                            class: "row gallery-wrapper",
                            breakpointCols: { default: 4 }
                          }, {}, {
                            default: () => {
                              return `${each(gallery, (item) => {
                                return `<div class="${"col element-item project designing development"}">${validate_component(Card, "Card").$$render($$result, { class: "gallery-box" }, {}, {
                                  default: () => {
                                    return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, {
                                      class: "image-popup",
                                      href: item.img,
                                      title: ""
                                    }, {}, {
                                      default: () => {
                                        return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", item.img, 0)} alt="${""}">
														<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">${escape(item.title)}</h5></div>
													`;
                                      }
                                    })}</div>

												<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                                      href: "#!",
                                      class: "text-body text-truncate"
                                    }, {}, {
                                      default: () => {
                                        return `${escape(item.auther)}`;
                                      }
                                    })}</div>
														<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i>
																	${escape(item.likes)}</button>
																<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i>
																	${escape(item.comments)}</button>
															</div></div>
													</div></div>
											`;
                                  }
                                })}
										</div>`;
                              })}`;
                            }
                          })}
								<div class="${"text-center my-2"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "text-success" }, {}, {
                            default: () => {
                              return `<i class="${"mdi mdi-loading mdi-spin fs-20 align-middle me-2"}"></i> Load More
									`;
                            }
                          })}</div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Pages_gallery as default };
