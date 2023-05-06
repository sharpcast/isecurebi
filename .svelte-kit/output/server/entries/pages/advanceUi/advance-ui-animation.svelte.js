import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import AOS from "aos";
var macimg = "/_app/assets/mac-img-82d3efbb.png";
var aos = "";
const Advance_ui_animation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fadeUpCode = `<div data-aos="fade-up"></div>`;
  const fadeDownCode = `<div data-aos="fade-down"></div>`;
  const fadeRightCode = `<div data-aos="fade-right"></div>`;
  const fadeLeftCode = `<div data-aos="fade-left"></div>`;
  const fadeUpRightCode = `<div data-aos="fade-up-right"></div>`;
  const fadeDownLeftCode = `<div data-aos="fade-down-left"></div>`;
  const flipLeftCode = `<div data-aos="flip-left"></div>`;
  const flipRightCode = `<div data-aos="flip-right"></div>`;
  const filpUpCode = `<div data-aos="flip-up"></div>`;
  const filpDownCode = `<div data-aos="flip-down"></div>`;
  const zoomInCode = `<div data-aos="zoom-in"></div>`;
  const zoomOutCode = `<div data-aos="zoom-out"></div>`;
  const zoomInUpCode = `<div data-aos="zoom-in-up"></div>`;
  const zoomOutUpCode = `<div data-aos="zoom-out-up"></div>`;
  const zoomInDownCode = `<div data-aos="zoom-in-down"></div>`;
  const zoomOutDownCode = `<div data-aos="zoom-out-down"></div>`;
  const zoomInRightCode = `<div data-aos="zoom-in-right"></div>`;
  const zoomOutRightCode = `<div data-aos="zoom-out-right"></div>`;
  const zoomInLeftCode = `<div data-aos="zoom-in-left"></div>`;
  const zoomOutLeftCode = `<div data-aos="zoom-out-left"></div>`;
  const durationCode = `<div data-aos="fade-up" data-aos-duration="3000"></div>`;
  const easingLinearCode = `<div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></div>`;
  const offset1Code = `<div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"></div>`;
  const offset2Code = `<div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500"></div>`;
  const easeInBackCode = `<div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"></div>`;
  const easeOutCubicCode = `<div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>`;
  AOS.init();
  return `${$$result.head += `${$$result.title = `<title>Animation | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Animation",
        pageTitle: "Advance UI"
      }, {}, {})}
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"text-center"}"><h4 class="${"card-title mb-0"}">Fade Animation</h4></div>`;
                    }
                  })}

          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Up</h4>
                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: fadeUpCode, id: "advanceuifadeup" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, lg: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-up"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Down</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeDownCode,
                                id: "advanceuifadedown"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, lg: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-down"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}

                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeRightCode,
                                id: "advanceuifaderight"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeLeftCode,
                                id: "advanceuifadeleft"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}

                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Up Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeUpRightCode,
                                id: "advanceuifadeupright"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-up-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Up Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeUpRightCode,
                                id: "advanceuifadeupleft"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-up-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Down Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeUpRightCode,
                                id: "advanceuifadedownright"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-down-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Fade Down Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: fadeDownLeftCode,
                                id: "advanceuifadedownleft"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-down-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
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
                      return `<div class="${"text-center"}"><h4 class="${"card-title mb-0"}">Flip Animation</h4></div>`;
                    }
                  })}

          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Flip Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: flipLeftCode, id: "flipLeftCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"flip-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Flip Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: flipRightCode, id: "flipRightCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"flip-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}

                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Flip Up</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: filpUpCode, id: "filpUpCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"flip-up"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Flip Down</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: filpDownCode, id: "filpDownCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"flip-down"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
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
                      return `<div class="${"text-center"}"><h4 class="${"card-title mb-0"}">Zoom Animation</h4></div>`;
                    }
                  })}

          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom In</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: zoomInCode, id: "zoomInCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-in"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom In Up</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: zoomInUpCode, id: "zoomInUpCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-in-up"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom In Down</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomInDownCode,
                                id: "zoomInDownCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-in-down"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom In Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomInRightCode,
                                id: "zoomInRightCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-in-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom In Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomInLeftCode,
                                id: "zoomInLeftCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-in-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom Out</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: zoomOutCode, id: "zoomOutCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-out"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom Out Up</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: zoomOutUpCode, id: "zoomOutUpCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-out-up"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom Out Down</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomOutDownCode,
                                id: "zoomOutDownCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-out-down"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom Out Right</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomOutRightCode,
                                id: "zoomOutRightCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-out-right"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>

                    <div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Zoom Out Left</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: zoomOutLeftCode,
                                id: "zoomOutLeftCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"zoom-out-left"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
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
                      return `<div class="${"text-center"}"><h4 class="${"card-title mb-0"}">Animation Examples</h4></div>`;
                    }
                  })}
          ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Duration</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: durationCode, id: "durationCode" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-up"}" data-aos-duration="${"3000"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Easing=&quot;linear&quot;</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: easingLinearCode,
                                id: "easingLinearCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-down"}" data-aos-easing="${"linear"}" data-aos-duration="${"1500"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}

                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Offset</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: offset1Code, id: "offset1Code" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-right"}" data-aos-offset="${"300"}" data-aos-easing="${"ease-in-sine"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Offset</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, { code: offset2Code, id: "offset2Code" }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-left"}" data-aos-offset="${"500"}" data-aos-duration="${"500"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}

                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Easing=&quot;ease-in-back&quot;</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: easeInBackCode,
                                id: "easeInBackCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"fade-zoom-in"}" data-aos-easing="${"ease-in-back"}" data-aos-delay="${"300"}" data-aos-offset="${"0"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

                  ${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"p-4 pb-0 border mt-4"}"><h4 class="${"mb-4 text-center"}">Easing=&quot;ease-out-cubic&quot;</h4>

                      ${validate_component(Prism, "PrismCode").$$render($$result, {
                                code: easeOutCubicCode,
                                id: "easeOutCubicCode"
                              }, {}, {})}

                      ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { sm: 10, md: 8 }, {}, {
                                    default: () => {
                                      return `<div data-aos="${"flip-left"}" data-aos-easing="${"ease-out-cubic"}" data-aos-duration="${"2000"}"><img${add_attribute("src", macimg, 0)} alt="${"Mac "}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div></div>`;
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
export { Advance_ui_animation as default };
