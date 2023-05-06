import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Progress } from "../../../chunks/Progress-4a564725.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uiprogress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultProgressCode = `
<!-- Base Examples -->
<div class="mb-4">
    <Progress value={0} />
</div>

<div class="mb-4">
    <Progress value={25} />
</div>

<div class="mb-4">
    <Progress value={50} />
</div>

<div class="mb-4">
    <Progress value={75} />
</div>

<div>
    <Progress value={100} />
</div>`;
  const backgroundColorCode = `
<!-- Backgrounds -->
<div class="mb-4">
    <Progress color="primary" value={15} />
</div>

<div class="mb-4">
    <Progress color="success" value={25} />
</div>

<div class="mb-4">
    <Progress color="info" value={50} />
</div>

<div class="mb-4">
    <Progress color="warning" value={75} />
</div>

<div>
    <Progress color="danger" value={100} />
</div>`;
  const labelCode = `
<!-- Labels Example -->
<Progress color="primary" value={25}> 25% </Progress>
`;
  const multipleBarsCode = `
<!-- Multiple Bars -->
<Progress multi>
    <Progress bar value="15" />
    <Progress bar color="success" value="30" />
    <Progress bar color="info" value="20" />
</Progress>
`;
  const heightCode = `
<!-- Prgress sm -->
<div class="mb-4">
    <h5 class="fs-13">Small Progress</h5>
    <Progress color="primary" value={25} class="progress-sm" />
</div>

<!-- Prgress Default -->
<div class="mb-4">
    <h5 class="fs-13">Default Progress </h5>
    <Progress color="success" value={40} class="progress-md" />
</div>

<!-- Prgress lg -->
<div class="mb-4">
    <h5 class="fs-13">Large Progress</h5>
    <Progress color="warning" value={50} class="progress-lg" />
</div>

<!-- Prgress xl -->
<div>
    <h5 class="fs-13">Extra Large Progress</h5>
    <Progress color="danger" value={70} class="progress-xl" />
</div>
`;
  const stripedCode = `
<!-- Striped Prgress -->
<div class="mb-4">
    <Progress striped value={25} />
</div>
<div>
    <Progress color="success" striped value={40} />
</div>
`;
  const animatedStripedCode = `
<!-- Animated Striped Progress -->
<div>
    <Progress value={75} striped animated />
</div>
`;
  const gradientCode = `
<!-- Gradient -->
<div class="mb-4">
    <Progress value={15} class="bg-gradient" />
</div>
<div class="mb-4">
    <Progress color="success" value={25} class="bg-gradient" />
</div>
<div class="mb-4">
    <Progress color="info" value={50} class="bg-gradient" />
</div>
<div class="mb-4">
    <Progress color="warning" value={75} class="bg-gradient" />
</div>
<div>
    <Progress color="danger" value={100} class="bg-gradient" />
</div>
`;
  const animatedCode = `
<!-- Animated Progress -->
<div class="mb-4">
    <Progress value={15} class="animated-progess" />
</div>
<div class="mb-4">
    <Progress value={25} color="success" class="animated-progess" />
</div>
<div class="mb-4">
    <Progress value={50} color="info" class="animated-progess" />
</div>
<div class="mb-4">
    <Progress value={75} color="warning" class="animated-progess" />
</div>
<div>
    <Progress value={100} color="danger" class="animated-progess" />
</div>
`;
  const customCode = `
<!-- Custom Progress -->
<div class="mb-4">
    <Progress value={15} color="primary" class="animated-progess custom-progress" />
</div>
<div class="mb-4">
    <Progress value={25} color="success" class="animated-progess custom-progress" />
</div>
<div class="mb-4">
    <Progress value={50} color="info" class="animated-progess custom-progress" />
</div>
<div class="mb-4">
    <Progress value={75} color="warning" class="animated-progess custom-progress" />
</div>
<div>
    <Progress value={100} color="danger" class="animated-progess custom-progress" />
</div>
`;
  const customProgressCode = `
<!-- Custom Progress with Label -->
<div class="d-flex align-items-center pb-2 mt-4">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-facebook"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
        <div>
            <Progress value={15} color="primary" class="animated-progess custom-progress progress-label" ><div class="label">15%</div> </Progress>
        </div>
    </div>
</div>

<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-twitter"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
        <div>
            <Progress value={25} color="success" class="animated-progess custom-progress progress-label" ><div class="label">25%</div> </Progress>
        </div>
    </div>
</div>

<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-github"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
        <div>
            <Progress value={50} color="info" class="animated-progess custom-progress progress-label" ><div class="label">30%</div> </Progress>
        </div>
    </div>
</div>
`;
  const contentCode = `
<!-- Content Progress -->
<Card class="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-secondary">30%</b> Update in
                    progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">1 min left</h6>
            </div>
        </div>
    </CardBody>
    <div >
        <Progress value={30} color="info" class="bg-soft-info rounded-0" />
    </div>
</Card>

<Card class="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-success">60%</b> Update in
                    progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">45s left</h6>
            </div>
        </div>
    </CardBody>
    <div>
        <Progress value={60} color="success" class="bg-soft-success rounded-0" />
    </div>
</Card>

<Card class="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-danger">82%</b> Update in
                    progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">25s left</h6>
            </div>
        </div>
    </CardBody>
    <div>
        <Progress value={82} color="danger" class="bg-soft-danger rounded-0" />
    </div>
</Card>
`;
  const progressWithStepCode = `
<!-- Progress with Steps -->
<div class="position-relative m-4">
    <Progress value={50} style="height: 1px" />
    <Button size="sm" color="primary" class="position-absolute top-0 start-0 translate-middle rounded-pill" style="width: 2rem; height: 2rem">1</Button>
    <Button size="sm" color="primary" class="position-absolute top-0 start-50 translate-middle rounded-pill" style="width: 2rem; height: 2rem">2</Button>
    <Button size="sm" color="light" class="position-absolute top-0 start-100 translate-middle rounded-pill" style="width: 2rem; height: 2rem">3</Button>
</div>
`;
  const stepProgressArrowCode = `
<!-- Step Progress with Arrow -->
<Progress multi class='progress-step-arrow progress-info'>
    <Progress bar value="35"> Step 1 </Progress>
    <Progress bar value="35"> Step 2 </Progress>
    <Progress bar value="35" color="light" class="text-dark"> Step 3 </Progress>
</Progress>
`;
  return `${$$result.head += `${$$result.title = `<title>Progress | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Progress", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">A Default Progress Example.</p>

						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 0 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 25 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 50 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 75 }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, { value: 100 }, {}, {})}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultProgressCode,
                        id: "defaultProgressCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Progress with background color" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>color=&quot;Required Color&quot;</code> attribute to
							progress bar class with the below-mentioned color variation
							to set the background color progress bar.
						</p>

						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { color: "primary", value: 15 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { color: "success", value: 25 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { color: "info", value: 50 }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { color: "warning", value: 75 }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, { color: "danger", value: 100 }, {}, {})}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: backgroundColorCode,
                        id: "backgroundColorCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Progress with Label" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Add labels to your progress bars by placing text
							within the progress-bar.
						</p>

						<div class="${"live-preview"}">${validate_component(Progress, "Progress").$$render($$result, { color: "primary", value: 25 }, {}, {
                        default: () => {
                          return `25%`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: labelCode, id: "labelCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Multiple Bars" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Multiple bar color to change the appearance of
							individual progress bars.
						</p>

						<div class="${"live-preview"}"><div>${validate_component(Progress, "Progress").$$render($$result, { multi: true }, {}, {
                        default: () => {
                          return `${validate_component(Progress, "Progress").$$render($$result, { bar: true, value: "15" }, {}, {})}
									${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "success", value: "30" }, {}, {})}
									${validate_component(Progress, "Progress").$$render($$result, { bar: true, color: "info", value: "20" }, {}, {})}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: multipleBarsCode,
                        id: "multipleBarsCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Height" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>progress-sm</code>,
							<code>progress-lg</code>, or
							<code>progress-xl</code> class to set the different heights
							of progress.
						</p>
						<div class="${"live-preview"}"><div class="${"mb-4"}"><h5 class="${"fs-13"}">Small Progress</h5>
								${validate_component(Progress, "Progress").$$render($$result, {
                        color: "primary",
                        value: 25,
                        class: "progress-sm"
                      }, {}, {})}</div>
							<div class="${"mb-4"}"><h5 class="${"fs-13"}">Default Progress</h5>
								${validate_component(Progress, "Progress").$$render($$result, {
                        color: "success",
                        value: 40,
                        class: "progress-md"
                      }, {}, {})}</div>
							<div class="${"mb-4"}"><h5 class="${"fs-13"}">Large Progress</h5>
								${validate_component(Progress, "Progress").$$render($$result, {
                        color: "warning",
                        value: 50,
                        class: "progress-lg"
                      }, {}, {})}</div>
							<div><h5 class="${"fs-13"}">Extra Large Progress</h5>
								${validate_component(Progress, "Progress").$$render($$result, {
                        color: "danger",
                        value: 70,
                        class: "progress-xl"
                      }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: heightCode, id: "heightCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Striped Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>striped</code> attribute to add strip to the
							progress.
						</p>
						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { striped: true, value: 25 }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, {
                        color: "success",
                        striped: true,
                        value: 40
                      }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: stripedCode, id: "stripedCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Animated Striped Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>striped animated</code> attribute to add strip
							with animation to the progress.
						</p>

						<div class="${"live-preview"}"><div>${validate_component(Progress, "Progress").$$render($$result, { value: 75, striped: true, animated: true }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: animatedStripedCode,
                        id: "animatedStripedCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Gradient Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>bg-gradient</code> class to show gradient progress
							bar.
						</p>

						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 15, class: "bg-gradient" }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        color: "success",
                        value: 25,
                        class: "bg-gradient"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        color: "info",
                        value: 50,
                        class: "bg-gradient"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        color: "warning",
                        value: 75,
                        class: "bg-gradient"
                      }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, {
                        color: "danger",
                        value: 100,
                        class: "bg-gradient"
                      }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: gradientCode, id: "gradientCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Animated Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>animated-progess</code> class to show progress
							with animation.
						</p>
						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 15, class: "animated-progess" }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 25,
                        color: "success",
                        class: "animated-progess"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 50,
                        color: "info",
                        class: "animated-progess"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 75,
                        color: "warning",
                        class: "animated-progess"
                      }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, {
                        value: 100,
                        color: "danger",
                        class: "animated-progess"
                      }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: animatedCode, id: "animatedCode" }, {}, {})}</div>`;
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Progress" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>animated-progess custom-progess </code> class
							to show custom progress with animation.
						</p>
						<div class="${"live-preview"}"><div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 15,
                        color: "primary",
                        class: "animated-progess custom-progress"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 25,
                        color: "success",
                        class: "animated-progess custom-progress"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 50,
                        color: "info",
                        class: "animated-progess custom-progress"
                      }, {}, {})}</div>
							<div class="${"mb-4"}">${validate_component(Progress, "Progress").$$render($$result, {
                        value: 75,
                        color: "warning",
                        class: "animated-progess custom-progress"
                      }, {}, {})}</div>
							<div>${validate_component(Progress, "Progress").$$render($$result, {
                        value: 100,
                        color: "danger",
                        class: "animated-progess custom-progress"
                      }, {}, {})}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: customCode, id: "customCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Progress with Label" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>animated-progess custom-progess progress-label</code> class to show custom progress with animation and label.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex align-items-center pb-2 mt-4"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-light rounded-circle text-muted fs-16"}"><i class="${"mdi mdi-facebook"}"></i></div></div></div>
								<div class="${"flex-grow-1"}"><div>${validate_component(Progress, "Progress").$$render($$result, {
                        value: 15,
                        color: "primary",
                        class: "animated-progess custom-progress progress-label"
                      }, {}, {
                        default: () => {
                          return `<div class="${"label"}">15%</div>`;
                        }
                      })}</div></div></div>

							<div class="${"d-flex align-items-center py-2"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-light rounded-circle text-muted fs-16"}"><i class="${"mdi mdi-twitter"}"></i></div></div></div>
								<div class="${"flex-grow-1"}"><div>${validate_component(Progress, "Progress").$$render($$result, {
                        value: 25,
                        color: "success",
                        class: "animated-progess custom-progress progress-label"
                      }, {}, {
                        default: () => {
                          return `<div class="${"label"}">25%</div>`;
                        }
                      })}</div></div></div>

							<div class="${"d-flex align-items-center py-2"}"><div class="${"flex-shrink-0 me-3"}"><div class="${"avatar-xs"}"><div class="${"avatar-title bg-light rounded-circle text-muted fs-16"}"><i class="${"mdi mdi-github"}"></i></div></div></div>
								<div class="${"flex-grow-1"}"><div>${validate_component(Progress, "Progress").$$render($$result, {
                        value: 50,
                        color: "info",
                        class: "animated-progess custom-progress progress-label"
                      }, {}, {
                        default: () => {
                          return `<div class="${"label"}">30%</div>`;
                        }
                      })}</div></div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: customProgressCode,
                        id: "customProgressCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Content Progress" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted pb-2"}">Example of progress with content wrapped in
							progress.
						</p>

						<div class="${"live-preview"}">${validate_component(Card, "Card").$$render($$result, {
                        class: "bg-light overflow-hidden shadow-none"
                      }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}"><b class="${"text-secondary"}">30%</b> Update in progress...
											</h6></div>
										<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">1 min left</h6></div></div>`;
                            }
                          })}
								<div>${validate_component(Progress, "Progress").$$render($$result, {
                            value: 30,
                            color: "info",
                            class: "bg-soft-info rounded-0"
                          }, {}, {})}</div>`;
                        }
                      })}

							${validate_component(Card, "Card").$$render($$result, {
                        class: "bg-light overflow-hidden shadow-none"
                      }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}"><b class="${"text-success"}">60%</b> Update
												in progress...
											</h6></div>
										<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">45s left</h6></div></div>`;
                            }
                          })}
								<div>${validate_component(Progress, "Progress").$$render($$result, {
                            value: 60,
                            color: "success",
                            class: "bg-soft-success rounded-0"
                          }, {}, {})}</div>`;
                        }
                      })}

							${validate_component(Card, "Card").$$render($$result, {
                        class: "bg-light overflow-hidden shadow-none"
                      }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"d-flex"}"><div class="${"flex-grow-1"}"><h6 class="${"mb-0"}"><b class="${"text-danger"}">82%</b> Update
												in progress...
											</h6></div>
										<div class="${"flex-shrink-0"}"><h6 class="${"mb-0"}">25s left</h6></div></div>`;
                            }
                          })}
								<div>${validate_component(Progress, "Progress").$$render($$result, {
                            value: 82,
                            color: "danger",
                            class: "bg-soft-danger rounded-0"
                          }, {}, {})}</div>`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: contentCode, id: "contentCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Progress with Steps" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted pb-2"}">Here is the example of progress which is represented
							by steps completion.
						</p>

						<div class="${"live-preview"}"><div class="${"position-relative m-4"}">${validate_component(Progress, "Progress").$$render($$result, { value: 50, style: "height: 1px" }, {}, {})}
								${validate_component(Button, "Button").$$render($$result, {
                        size: "sm",
                        color: "primary",
                        class: "position-absolute top-0 start-0 translate-middle rounded-pill",
                        style: "width: 2rem; height: 2rem"
                      }, {}, {
                        default: () => {
                          return `1`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        size: "sm",
                        color: "primary",
                        class: "position-absolute top-0 start-50 translate-middle rounded-pill",
                        style: "width: 2rem; height: 2rem"
                      }, {}, {
                        default: () => {
                          return `2`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        size: "sm",
                        color: "light",
                        class: "position-absolute top-0 start-100 translate-middle rounded-pill",
                        style: "width: 2rem; height: 2rem"
                      }, {}, {
                        default: () => {
                          return `3`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: progressWithStepCode,
                        id: "progressWithStepCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Step Progress with Arrow" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted pb-2"}">Use <code>progress-step-arrow </code>class to create
							step progress with an arrow.
						</p>
						<div class="${"live-preview"}">${validate_component(Progress, "Progress").$$render($$result, {
                        multi: true,
                        class: "progress-step-arrow progress-info"
                      }, {}, {
                        default: () => {
                          return `${validate_component(Progress, "Progress").$$render($$result, { bar: true, value: "35" }, {}, {
                            default: () => {
                              return `Step 1`;
                            }
                          })}
								${validate_component(Progress, "Progress").$$render($$result, { bar: true, value: "35" }, {}, {
                            default: () => {
                              return `Step 2`;
                            }
                          })}
								${validate_component(Progress, "Progress").$$render($$result, {
                            bar: true,
                            value: "35",
                            color: "light",
                            class: "text-dark"
                          }, {}, {
                            default: () => {
                              return `Step 3`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: stepProgressArrowCode,
                        id: "stepProgressArrowCode"
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
export { Uiprogress as default };
