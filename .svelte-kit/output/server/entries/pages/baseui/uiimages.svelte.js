import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar5 } from "../../../chunks/avatar-5-c7d43f40.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { a as avatar10 } from "../../../chunks/avatar-10-def8cdb7.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../chunks/img-4-f8adc4d4.js";
import { i as img5 } from "../../../chunks/img-5-1aac893f.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uiimages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgRoundedCircleCode = `
<!-- Rounded Image -->
<img class="rounded" alt="200x200" width="200" src={img4} />

<!-- Rounded-circle Image -->
<img class="rounded-circle avatar-xl" alt="200x200" src={avatar4} />
`;
  const imgThumbnailsCode = `
<!-- Thumbnails Images -->
<img class="img-thumbnail" alt="200x200" width="200" src={img3} />

<img class="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
`;
  const imgSizesCode = `
<!-- Image Sizes -->
<img src={avatar2} alt="" class="rounded avatar-xxs" />

<img src={avatar10} alt="" class="rounded avatar-xs" />

<img src={avatar3} alt="" class="rounded avatar-sm" />

<img src={avatar4} alt="" class="rounded avatar-md" />

<img src={avatar5} alt="" class="rounded avatar-lg" />

<img src={avatar8} alt="" class="rounded avatar-xl" />

<img src={avatar2} alt="" class="rounded-circle avatar-xxs" />

<img src={avatar10} alt="" class="rounded-circle avatar-xs" />

<img src={avatar3} alt="" class="rounded-circle avatar-sm" />

<img src={avatar4} alt="" class="rounded-circle avatar-md" />

<img src={avatar5} alt="" class="rounded-circle avatar-lg" />

<img src={avatar8} alt="" class="rounded-circle avatar-xl" />
`;
  const avatarCode = `
<!-- Avatar With Content -->
<div class="avatar-xxs">
    <div class="avatar-title rounded bg-soft-primary text-primary">
    XXS
    </div>
</div>

<div class="avatar-xs">
    <div class="avatar-title rounded bg-soft-secondary text-secondary">
    XS
    </div>
</div>

<div class="avatar-sm">
    <div class="avatar-title rounded bg-soft-success text-success">
    Sm
    </div>
</div>

<div class="avatar-md">
    <div class="avatar-title rounded bg-soft-info text-info">
    Md
    </div>
</div>

<div class="avatar-lg">
    <div class="avatar-title rounded bg-soft-warning text-warning">
    Lg
    </div>
</div>

<div class="avatar-xl">
    <div class="avatar-title rounded bg-soft-danger text-danger">
    Xl
    </div>
</div>
`;
  const avatarGroupCode = `
<!-- Simple Group -->
<div class="avatar-group">
    <div class="avatar-group-item">
        <img src={avatar4} alt="" class="rounded-circle avatar-sm" />
    </div>
    <div class="avatar-group-item">
    <img src={avatar5} alt="" class="rounded-circle avatar-sm" />
    </div>
    <div class="avatar-group-item">
        <div class="avatar-sm">
            <div class="avatar-title rounded-circle bg-light text-primary">
                A
            </div>
        </div>
    </div>
    <div class="avatar-group-item">
        <img src={avatar2} alt="" class="rounded-circle avatar-sm" />
    </div>
</div>

<!-- Avatar Group with Tooltip -->
<div class="mt-lg-0 mt-3">
    <p class="text-muted">Use <code>avatar-group</code> class with <code>data-bs-toggle="tooltip"</code> to show avatar group images with tooltip.</p>
    <div class="avatar-group">
        <Link href="#!" class="avatar-group-item" id="img1">
            <img src={avatar4} alt="" class="rounded-circle avatar-sm" />
        </Link>
        <Tooltip placement="top" target="img1" > Christi </Tooltip>
        <Link href="#!" class="avatar-group-item" id="img2">
            <img src={avatar3} alt="" class="rounded-circle avatar-sm" />
        </Link>
        <Tooltip placement="top" target="img2" > Frank Hook </Tooltip>
        <Link href="#!" class="avatar-group-item" id="img3">
            <div class="avatar-sm">
                <div class="avatar-title rounded-circle bg-light text-primary">
                    C
                </div>
            </div>
        </Link>
        <Tooltip placement="top" target="img3" > Christi </Tooltip>
        <Link href="#!" class="avatar-group-item" id="img4">
            <div class="avatar-sm">
                <div class="avatar-title rounded-circle">
                    2+
                </div>
            </div>  
        </Link>
        <Tooltip placement="top" target="img4" > mORE </Tooltip></div>
    </div>
`;
  const figuresCode = `
<!-- figures Images -->
<figure class="figure">
    <img src={img4} class="figure-img img-fluid rounded" alt="..." />
    <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>

<figure class="figure mb-0">
    <img src={img5} class="figure-img img-fluid rounded" alt="..." />
    <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
`;
  const responsiveCode = `
<!-- Responsive Images -->
<img src={img2} class="img-fluid" alt="Responsive image" />
`;
  return `${$$result.head += `${$$result.title = `<title>Images | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Images", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Image Rounded & Circle" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use
							<code>rounded</code> class and
							<code>rounded-circle</code> class to show an image with
							a round border and rounded shape respectively.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { class: "col-6" }, {}, {
                            default: () => {
                              return `<img class="${"rounded"}" alt="${"200x200"}" width="${"200"}"${add_attribute("src", img4, 0)}>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><img class="${"rounded-circle avatar-xl"}" alt="${"200x200"}"${add_attribute("src", avatar4, 0)}></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: imgRoundedCircleCode,
                        id: "imgRoundedCircleCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Image Thumbnails" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>img-thumbnail</code> class to give an image
							rounded 1px border appearance.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { class: "col-6" }, {}, {
                            default: () => {
                              return `<img class="${"img-thumbnail"}" alt="${"200x200"}" width="${"200"}"${add_attribute("src", img3, 0)}>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><img class="${"img-thumbnail rounded-circle avatar-xl"}" alt="${"200x200"}"${add_attribute("src", avatar3, 0)}></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: imgThumbnailsCode,
                        id: "imgThumbnailsCode"
                      }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Image Sizes" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-4"}">Use <code>avatar-xxs</code>, <code>avatar-xs</code>,
							<code>avatar-sm</code>,
							<code>avatar-md</code>, <code>avatar-lg</code>,
							<code>avatar-xl</code> class for different image sizes.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded avatar-xxs"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xxs</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded avatar-xs"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xs</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded avatar-sm"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-sm</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded avatar-md"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-md</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded avatar-lg"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-lg</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded avatar-xl"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xl</code></p></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { md: 12 }, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3 mt-5" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle avatar-xxs"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xxs</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar10, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xs</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-sm</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-md"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-md</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle avatar-lg"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-lg</code></p></div>`;
                                    }
                                  })}
										${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"rounded-circle avatar-xl"}">
												<p class="${"mt-2 mb-lg-0"}"><code>avatar-xl</code></p></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: imgSizesCode, id: "imgSizesCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Avatar With Content" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>avatar-xxs,
								avatar-xs,avatar-sm,avatar-md,avatar-lg,avatar-xl</code> class to set different avatar content.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-xxs mt-3"}"><div class="${"avatar-title rounded bg-soft-primary text-primary fs-10"}">XXS
										</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-xs mt-3"}"><div class="${"avatar-title rounded bg-soft-secondary text-secondary"}">XS
										</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-sm mt-3"}"><div class="${"avatar-title rounded bg-soft-success text-success fs-14"}">SM
										</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-md mt-3"}"><div class="${"avatar-title rounded bg-soft-info text-info fs-16"}">MD
										</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-lg mt-3"}"><div class="${"avatar-title rounded bg-soft-warning text-warning fs-20"}">LG
										</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 2, md: 4, class: "col-6" }, {}, {
                            default: () => {
                              return `<div class="${"avatar-xl mt-3"}"><div class="${"avatar-title rounded bg-soft-danger text-danger fs-22"}">XL
										</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: avatarCode, id: "avatarCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Avatar Group" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-lg-0 mt-3"}"><p class="${"text-muted"}">Use <code>avatar-group</code> class to
											show avatar images with the group.
										</p>
										<div class="${"avatar-group"}"><div class="${"avatar-group-item"}"><img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}"></div>
											<div class="${"avatar-group-item"}"><img${add_attribute("src", avatar5, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}"></div>
											<div class="${"avatar-group-item"}"><div class="${"avatar-sm"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">A
													</div></div></div>
											<div class="${"avatar-group-item"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}"></div></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-lg-0 mt-3"}"><p class="${"text-muted"}">Use <code>avatar-group</code> class
											with
											<code>data-bs-toggle=&quot;tooltip&quot;</code>
											to show avatar group images with tooltip.
										</p>
										<div class="${"avatar-group"}">${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "avatar-group-item",
                                id: "img1"
                              }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}">`;
                                }
                              })}
											${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "img1" }, {}, {
                                default: () => {
                                  return `Christi`;
                                }
                              })}
											${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "avatar-group-item",
                                id: "img2"
                              }, {}, {
                                default: () => {
                                  return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-sm"}">`;
                                }
                              })}
											${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "img2" }, {}, {
                                default: () => {
                                  return `Frank Hook`;
                                }
                              })}
											${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "avatar-group-item",
                                id: "img3"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"avatar-sm"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">C
													</div></div>`;
                                }
                              })}
											${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "img3" }, {}, {
                                default: () => {
                                  return `Christi`;
                                }
                              })}
											${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "avatar-group-item",
                                id: "img4"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"avatar-sm"}"><div class="${"avatar-title rounded-circle"}">2+
													</div></div>`;
                                }
                              })}
											${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "img4" }, {}, {
                                default: () => {
                                  return `More`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: avatarGroupCode,
                        id: "avatarGroupCode"
                      }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xl: 8 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Figures" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"card-title-desc text-muted"}">Use the included <code>figure</code>,
							<code>figure-img</code>
							and
							<code>figure-caption</code>
							classes to provide some baseline styles for the HTML5
							<code>&lt;figure&gt;</code>
							and
							<code>&lt;figcaption&gt;</code> elements.
						</p>

						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<figure class="${"figure mb-0"}"><img${add_attribute("src", img4, 0)} class="${"figure-img img-fluid rounded"}" alt="${"..."}">
										<figcaption class="${"figure-caption"}">A caption for the above image.
										</figcaption></figure>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { sm: 6 }, {}, {
                            default: () => {
                              return `<figure class="${"figure mb-0"}"><img${add_attribute("src", img5, 0)} class="${"figure-img img-fluid rounded"}" alt="${"..."}">
										<figcaption class="${"figure-caption text-end"}">A caption for the above image.
										</figcaption></figure>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: figuresCode, id: "figuresCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 4 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Responsive Images" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"card-title-desc text-muted"}">Responsive Images with <code>img-fluid,max-width: 100%; and height: auto;</code> to the image so that it scales with the parent width.
						</p>

						<div class="${"live-preview"}"><div><img${add_attribute("src", img2, 0)} class="${"img-fluid"}" alt="${"Responsive"}"></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: responsiveCode,
                        id: "responsiveCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Uiimages as default };
