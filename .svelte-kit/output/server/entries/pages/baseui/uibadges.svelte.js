import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { B as Badge } from "../../../chunks/Badge-d725e03d.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uibadges = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultBadgesCode = `
<Badge color="primary"> Primary </Badge>

<Badge color="secondary"> Secondary </Badge>

<Badge color="success"> Success </Badge>

<Badge color="info"> Info </Badge>

<Badge color="warning"> Warning </Badge>

<Badge color="danger"> Danger </Badge>

<Badge color="dark"> Dark </Badge>

<Badge color="light" class="text-dark"> Light </Badge>
`;
  const softBadgesCode = `
<span class="badge badge-soft-primary">Primary</span>

<span class="badge badge-soft-secondary">Secondary</span>

<span class="badge badge-soft-success">Success</span>

<span class="badge badge-soft-info">Info</span>

<span class="badge badge-soft-warning">Warning</span>

<span class="badge badge-soft-danger">Danger</span>

<span class="badge badge-soft-dark">Dark</span>

<span class="badge badge-soft-light">Light</span>
`;
  const outlineBadgesCode = `
<span class="badge badge-outline-primary">Primary</span>

<span class="badge badge-outline-secondary">Secondary</span>

<span class="badge badge-outline-success">Success</span>

<span class="badge badge-outline-info">Info</span>

<span class="badge badge-outline-warning">Warning</span>

<span class="badge badge-outline-danger">Danger</span>

<span class="badge badge-outline-dark">Dark</span>    
`;
  const roundedPillBadgesCode = `
<Badge color="primary" pill> Primary </Badge>

<Badge color="secondary" pill> Secondary </Badge>

<Badge color="success" pill> Success </Badge>

<Badge color="info" pill> Info </Badge>

<Badge color="warning" pill> Warning </Badge>

<Badge color="danger" pill> Danger </Badge>

<Badge color="dark" pill> Dark </Badge>

<Badge color="light" class="text-dark" pill> Light </Badge>

`;
  const labelPillBadgesCode = `
<Badge color="primary" pill> Primary </Badge>

<Badge color="secondary" pill> Secondary </Badge>

<Badge color="success" pill> Success </Badge>

<Badge color="info" pill> Info </Badge>

<Badge color="warning" pill> Warning </Badge>

<Badge color="danger" pill> Danger </Badge>

<Badge color="dark" pill> Dark </Badge>

<Badge color="light" class="text-dark" pill> Light </Badge>

`;
  const htmlBadgesCode = `
<h1>Example heading  <Badge color="secondary"> New </Badge> </h1>

<h2>Example heading  <Badge color="secondary"> New </Badge> </h2>

<h3>Example heading  <Badge color="secondary"> New </Badge> </h3>

<h4>Example heading  <Badge color="secondary"> New </Badge> </h4>

<h5>Example heading  <Badge color="secondary"> New </Badge> </h5>

<h6 class="mb-0">Example heading  <Badge color="secondary"> New </Badge> </h6>

`;
  const roundSoftBadgesCode = `
<span class="badge rounded-pill badge-soft-primary">Primary</span>

<span class="badge rounded-pill badge-soft-secondary">Secondary</span>

<span class="badge rounded-pill badge-soft-success">Success</span>

<span class="badge rounded-pill badge-soft-info">Info</span>

<span class="badge rounded-pill badge-soft-warning">Warning</span>

<span class="badge rounded-pill badge-soft-danger">Danger</span>

<span class="badge rounded-pill badge-soft-dark">Dark</span>

<span class="badge rounded-pill badge-soft-light">Light</span>
`;
  const softBorderBadgesCode = `
<span class="badge badge-soft-primary badge-border">Primary</span>

<span class="badge badge-soft-secondary badge-border">Secondary</span>

<span class="badge badge-soft-success badge-border">Success</span>

<span class="badge badge-soft-info badge-border">Info</span>

<span class="badge badge-soft-warning badge-border">Warning</span>

<span class="badge badge-soft-danger badge-border">Danger</span>

<span class="badge badge-soft-dark badge-border">Dark</span>

<span class="badge badge-soft-light badge-border">Light</span>
`;
  const outlinePillBadgesCode = `
<span class="badge rounded-pill badge-outline-primary">Primary</span>

<span class="badge rounded-pill badge-outline-secondary">Secondary</span>

<span class="badge rounded-pill badge-outline-success">Success</span>

<span class="badge rounded-pill badge-outline-info">Info</span>

<span class="badge rounded-pill badge-outline-warning">Warning</span>

<span class="badge rounded-pill badge-outline-danger">Danger</span>

<span class="badge rounded-pill badge-outline-dark">Dark</span>

<span class="badge rounded-pill badge-outline-light">Light</span>
`;
  const buttonPositionBadgesCode = `
<Button color="primary" class="position-relative">
    Mails 
    <Badge pill color="success" class="position-absolute top-0 start-100 translate-middle">+99
        <span class="visually-hidden">unread messages</span></Badge>
</Button>

<Button color="light" class="position-relative">
    Alerts <span
        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span
            class="visually-hidden">unread messages</span></span>
</Button>

<Button type="button" color="primary" class="position-relative p-0 avatar-xs rounded">
    <span class="avatar-title bg-transparent">
        <i class="bx bxs-envelope"></i>
    </span>
    <span
        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span
            class="visually-hidden">unread messages</span></span>
</Button>

<Button color="light" class="position-relative p-0 avatar-xs rounded-circle">
    <span class="avatar-title bg-transparent text-reset">
        <i class="bx bxs-bell"></i>
    </span>
</Button>

<Button color="light" class="position-relative p-0 avatar-xs rounded-circle">
    <span class="avatar-title bg-transparent text-reset">
        <i class="bx bx-menu"></i>
    </span>
    <span
        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span
            class="visually-hidden">unread messages</span></span>
</Button>
`;
  const buttonBadgesCode = `
<Button color="primary">
    Notifications <Badge color="success" class="ms-1">4</Badge>
</Button>
<Button color="success">
    Messages <Badge color="danger" class="ms-1">2</Badge>
</Button>
<Button color="secondary" outline>
    Draft <Badge color="success" class="ms-1">2</Badge>
</Button>
`;
  return `${$$result.head += `${$$result.title = `<title>Badges | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Badges", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>Badge</code> tag to set a default badge.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Badge, "Badge").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "info" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "warning" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "dark" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "light", class: "text-dark" }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultBadgesCode,
                        id: "defaultBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Soft Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>badge-soft-</code> class with the below-mentioned
							variation to create a softer badge.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}"><span class="${"badge badge-soft-primary"}">Primary</span>
								<span class="${"badge badge-soft-secondary"}">Secondary</span>
								<span class="${"badge badge-soft-success"}">Success</span>
								<span class="${"badge badge-soft-info"}">Info</span>
								<span class="${"badge badge-soft-warning"}">Warning</span>
								<span class="${"badge badge-soft-danger"}">Danger</span>
								<span class="${"badge badge-soft-dark"}">Dark</span>
								<span class="${"badge badge-soft-light text-dark"}">Light</span></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: softBadgesCode,
                        id: "softBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Outline Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>badge-outline-</code> class with the below-mentioned
							variation to create a badge with the outline.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}"><span class="${"badge badge-outline-primary"}">Primary</span>
								<span class="${"badge badge-outline-secondary"}">Secondary</span>
								<span class="${"badge badge-outline-success"}">Success</span>
								<span class="${"badge badge-outline-info"}">Info</span>
								<span class="${"badge badge-outline-warning"}">Warning</span>
								<span class="${"badge badge-outline-danger"}">Danger</span>
								<span class="${"badge badge-outline-dark"}">Dark</span>
								<span class="${"badge badge-outline-light text-dark"}">Light</span></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: outlineBadgesCode,
                        id: "outlineBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Rounded Pill Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>rounded-pill</code> class to make badges
							more rounded with a larger border-radius.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Badge, "Badge").$$render($$result, { color: "primary", pill: true }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "secondary", pill: true }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "success", pill: true }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "info", pill: true }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "warning", pill: true }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "danger", pill: true }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "dark", pill: true }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, {
                        color: "light",
                        class: "text-dark",
                        pill: true
                      }, {}, {
                        default: () => {
                          return `Light`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: roundedPillBadgesCode,
                        id: "roundedPillBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, {
                    title: "Rounded Pill Badges with soft effect"
                  }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>rounded-pill badge-soft-</code> class with
							the below-mentioned variation to create a badge more
							rounded with a soft background.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}"><span class="${"badge rounded-pill badge-soft-primary"}">Primary</span>
								<span class="${"badge rounded-pill badge-soft-secondary"}">Secondary</span>
								<span class="${"badge rounded-pill badge-soft-success"}">Success</span>
								<span class="${"badge rounded-pill badge-soft-info"}">Info</span>
								<span class="${"badge rounded-pill badge-soft-warning"}">Warning</span>
								<span class="${"badge rounded-pill badge-soft-danger"}">Danger</span>
								<span class="${"badge rounded-pill badge-soft-dark"}">Dark</span>
								<span class="${"badge rounded-pill badge-soft-light text-dark"}">Light</span></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: roundSoftBadgesCode,
                        id: "roundSoftBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Soft Border Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>badge-border</code> and
							<code>badge-soft-</code> with below mentioned modifier
							classes to make badges with border &amp; soft backgorund.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}"><span class="${"badge badge-soft-primary badge-border"}">Primary</span>
								<span class="${"badge badge-soft-secondary badge-border"}">Secondary</span>
								<span class="${"badge badge-soft-success badge-border"}">Success</span>
								<span class="${"badge badge-soft-danger badge-border"}">Danger</span>
								<span class="${"badge badge-soft-warning badge-border"}">Warning</span>
								<span class="${"badge badge-soft-info badge-border"}">Info</span>
								<span class="${"badge badge-soft-dark badge-border"}">Dark</span>
								<span class="${"badge badge-soft-light badge-border text-dark"}">Light</span></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: softBorderBadgesCode,
                        id: "softBorderBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Outline Pill Badges" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>rounded-pill badge-outline-</code> class
							with the below-mentioned variation to create a outline
							Pill badge.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}"><span class="${"badge rounded-pill badge-outline-primary"}">Primary</span>
								<span class="${"badge rounded-pill badge-outline-secondary"}">Secondary</span>
								<span class="${"badge rounded-pill badge-outline-success"}">Success</span>
								<span class="${"badge rounded-pill badge-outline-info"}">Info</span>
								<span class="${"badge rounded-pill badge-outline-warning"}">Warning</span>
								<span class="${"badge rounded-pill badge-outline-danger"}">Danger</span>
								<span class="${"badge rounded-pill badge-outline-dark"}">Dark</span>
								<span class="${"badge rounded-pill badge-outline-light text-dark"}">Light</span></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: outlinePillBadgesCode,
                        id: "outlinePillBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Label Badges" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>badge-label</code> class to create a badge
							with the label.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Badge, "Badge").$$render($$result, { color: "primary", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Primary
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "secondary", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Secondary
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "success", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Success
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "danger", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Danger
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "warning", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Warning
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "info", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Info
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { color: "dark", class: "badge-label" }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Dark
								`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, {
                        color: "light",
                        class: "badge-label text-dark"
                      }, {}, {
                        default: () => {
                          return `<i class="${"mdi mdi-circle-medium"}"></i> Light
								`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: labelPillBadgesCode,
                        id: "labelPillBadgesCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Gradient Badges" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-primary" }, {}, {
                        default: () => {
                          return `Primary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-secondary" }, {}, {
                        default: () => {
                          return `Secondary`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-success" }, {}, {
                        default: () => {
                          return `Success`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-danger" }, {}, {
                        default: () => {
                          return `Danger`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-warning" }, {}, {
                        default: () => {
                          return `Warning`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-info" }, {}, {
                        default: () => {
                          return `Info`;
                        }
                      })}
								${validate_component(Badge, "Badge").$$render($$result, { class: "badge-gradient-dark" }, {}, {
                        default: () => {
                          return `Dark`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: labelPillBadgesCode,
                        id: "labelPillBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Button Position Badges" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the below utilities to modify a badge and
							position it in the corner of a link or button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Button, "Button").$$render($$result, {
                        color: "primary",
                        class: "position-relative"
                      }, {}, {
                        default: () => {
                          return `Mails ${validate_component(Badge, "Badge").$$render($$result, {
                            pill: true,
                            color: "success",
                            class: "position-absolute top-0 start-100 translate-middle"
                          }, {}, {
                            default: () => {
                              return `+99
										<span class="${"visually-hidden"}">unread messages</span>`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, {
                        color: "light",
                        class: "position-relative"
                      }, {}, {
                        default: () => {
                          return `Alerts <span class="${"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"}"><span class="${"visually-hidden"}">unread messages</span></span>`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, {
                        type: "button",
                        color: "primary",
                        class: "position-relative p-0 avatar-xs rounded"
                      }, {}, {
                        default: () => {
                          return `<span class="${"avatar-title bg-transparent"}"><i class="${"bx bxs-envelope"}"></i></span>
									<span class="${"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"}"><span class="${"visually-hidden"}">unread messages</span></span>`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, {
                        color: "light",
                        class: "position-relative p-0 avatar-xs rounded-circle"
                      }, {}, {
                        default: () => {
                          return `<span class="${"avatar-title bg-transparent text-reset"}"><i class="${"bx bxs-bell"}"></i></span>`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, {
                        color: "light",
                        class: "position-relative p-0 avatar-xs rounded-circle"
                      }, {}, {
                        default: () => {
                          return `<span class="${"avatar-title bg-transparent text-reset"}"><i class="${"bx bx-menu"}"></i></span>
									<span class="${"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"}"><span class="${"visually-hidden"}">unread messages</span></span>`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: buttonPositionBadgesCode,
                        id: "buttonPositionBadgesCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Badges With Button" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Badges can be used as part of buttons to provide a
							counter.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Notifications ${validate_component(Badge, "Badge").$$render($$result, { color: "success", class: "ms-1" }, {}, {
                            default: () => {
                              return `4`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Messages ${validate_component(Badge, "Badge").$$render($$result, { color: "danger", class: "ms-1" }, {}, {
                            default: () => {
                              return `2`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary", outline: true }, {}, {
                        default: () => {
                          return `Draft ${validate_component(Badge, "Badge").$$render($$result, { color: "success", class: "ms-1" }, {}, {
                            default: () => {
                              return `2`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: buttonBadgesCode,
                        id: "buttonBadgesCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Badges with Heading" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of the badge used in the HTML Heading.
						</p>
						<div class="${"live-preview"}"><h1>Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h1>
							<h2>Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h2>
							<h3>Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h3>
							<h4>Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h4>
							<h5>Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h5>
							<h6 class="${"mb-0"}">Example heading ${validate_component(Badge, "Badge").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `New`;
                        }
                      })}</h6></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: htmlBadgesCode,
                        id: "htmlBadgesCode"
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
export { Uibadges as default };
