import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, d as add_attribute, b as escape, v as validate_component } from "../../../chunks/index-584434b3.js";
import { c as classnames } from "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { P as Pagination, a as PaginationItem, b as PaginationLink } from "../../../chunks/PaginationLink-4c8ff591.js";
import { P as Popover } from "../../../chunks/Popover-38c1335f.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { S as Spinner } from "../../../chunks/Spinner-5b52a5e3.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/CardHeader-84e061db.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listClasses;
  let $$restProps = compute_rest_props($$props, ["class", "children", "listClassName"]);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { listClassName = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.listClassName === void 0 && $$bindings.listClassName && listClassName !== void 0)
    $$bindings.listClassName(listClassName);
  listClasses = classnames("breadcrumb", listClassName);
  return `<nav${spread([escape_object($$restProps), { class: escape_attribute_value(className) }], {})}><ol${add_attribute("class", listClasses, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</ol></nav>`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "children"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { children = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  classes = classnames(className, active ? "active" : false, "breadcrumb-item");
  return `<li${spread([
    escape_object($$restProps),
    { class: escape_attribute_value(classes) },
    {
      "aria-current": escape_attribute_value(active ? "page" : void 0)
    }
  ], {})}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</li>`;
});
const Uigeneral = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const popoversCode = `
<!-- Popovers -->
<div class="hstack flex-wrap gap-2">
	<Button color="light" id="PopoverTop"
		>Popover on top</Button
	>
	<Popover
		placement="top"
		target="PopoverTop"
		title="Top Popover"
	>
		Vivamus sagittis lacus vel augue laoreet
		rutrum faucibus.
	</Popover>
	<Button color="light" id="PopoverRight"
		>Popover on right</Button
	>
	<Popover
		placement="right"
		target="PopoverRight"
		title="Right Popover"
	>
		Vivamus sagittis lacus vel augue laoreet
		rutrum faucibus.
	</Popover>

	<Button color="light" id="PopoverBottom"
		>Popover on right</Button
	>
	<Popover
		placement="bottom"
		target="PopoverBottom"
		title="Bottom Popover"
	>
		Vivamus sagittis lacus vel augue laoreet
		rutrum faucibus.
	</Popover>

	<Button color="light" id="PopoverLeft"
		>Popover on right</Button
	>
	<Popover
		placement="left"
		target="PopoverLeft"
		title="Left Popover"
	>
		Vivamus sagittis lacus vel augue laoreet
		rutrum faucibus.
	</Popover>

	<Button color="success" id="PopoverDismissible"
		>Dismissible popover</Button
	>
	<Popover
		placement="right"
		target="PopoverDismissible"
		title="Dismissible popover"
	>
		And here's some amazing content. It's very
		engaging. Right?
	</Popover>
</div>
`;
  const tooltipsCode = `
<!-- Tooltips -->
<div class="hstack flex-wrap gap-2">
	<Button color="light" id="tooltipTop"
		>Tooltip on top</Button
	>
	<Tooltip placement="top" target="tooltipTop"
		>Tooltip on top</Tooltip
	>

	<Button color="light" id="tooltipRight"
		>Tooltip on right</Button
	>
	<Tooltip placement="right" target="tooltipRight"
		>Tooltip on right</Tooltip
	>

	<Button color="light" id="tooltipBottom"
		>Tooltip on bottom</Button
	>
	<Tooltip
		placement="bottom"
		target="tooltipBottom"
		>Tooltip on bottom</Tooltip
	>

	<Button color="light" id="tooltipLeft"
		>Tooltip on left</Button
	>
	<Tooltip placement="left" target="tooltipLeft"
		>Tooltip on left</Tooltip
	>

	<Button color="primary" id="tooltipwithHtml"
		>Tooltip with HTML</Button
	>
	<Tooltip
		placement="top"
		target="tooltipwithHtml"
	>
		<em>Tooltip</em> <u>with</u> <b>HTML</b>
	</Tooltip>
</div>
`;
  const breadcrumbCode = `
<Breadcrumb listClassName="p-3 py-2 bg-light">
	<BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb listClassName="p-3 py-2 bg-light">
	<BreadcrumbItem
		><Link href="#!">Home</Link></BreadcrumbItem
	>
	<BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb listClassName="p-3 py-2 bg-light">
	<BreadcrumbItem
		><Link href="#!">Home</Link></BreadcrumbItem
	>
	<BreadcrumbItem
		><Link href="#!">Base UI</Link
		></BreadcrumbItem
	>
	<BreadcrumbItem active>General</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb listClassName="p-3 py-2 bg-light mb-0">
	<BreadcrumbItem
		><Link href="#!"
			><i class="ri-home-5-fill" /></Link
		></BreadcrumbItem
	>
	<BreadcrumbItem
		><Link href="#!">Base UI</Link
		></BreadcrumbItem
	>
	<BreadcrumbItem active>General</BreadcrumbItem>
</Breadcrumb>
`;
  const paginationCode = `
<Pagination class="mb-3">
	<PaginationItem>
		<PaginationLink href="#!"
			>Previous</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>Next</PaginationLink
		></PaginationItem
	>
</Pagination>

<Pagination class="mb-3">
	<PaginationItem>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>


<!-- Pagination Disabled & Active -->
<Pagination class="mb-3">
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>

<Pagination class="mb-3">
	<PaginationItem disabled>
		<PaginationLink href="#!"
			><i
				class="mdi mdi-chevron-left"
			/></PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			><i
				class="mdi mdi-chevron-right"
			/></PaginationLink
		>
	</PaginationItem>
</Pagination>


<!-- Pagination sizing -->

<!-- Pagination Large -->
<Pagination size="lg">
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>

<Pagination size="sm">
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>


<!-- Pagination Alignment -->

<!-- Center Alignment -->
<Pagination
	listClassName="justify-content-center"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>

<Pagination
	listClassName="justify-content-end"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190 &nbsp; Prev</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>2</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem>
		<PaginationLink href="#!"
			>Next &nbsp; \u2192</PaginationLink
		>
	</PaginationItem>
</Pagination>

<!-- Pagination Custom -->
<Pagination
	class="pagination-lg pagination-separated"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>

<Pagination
	class="pagination-separated"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>

<Pagination
	class="pagination-sm pagination-separated"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>

<!-- Pagination Rounded -->
<Pagination
	class="pagination-lg pagination-rounded"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>

<Pagination class="pagination-rounded">
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>

<Pagination
	class="pagination-sm pagination-rounded"
>
	<PaginationItem disabled>
		<PaginationLink href="#!"
			>\u2190</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>1</PaginationLink
		></PaginationItem
	>
	<PaginationItem active>
		<PaginationLink href="#!"
			>2</PaginationLink
		>
	</PaginationItem>
	<PaginationItem
		><PaginationLink href="#!"
			>3</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>4</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>5</PaginationLink
		></PaginationItem
	>
	<PaginationItem
		><PaginationLink href="#!"
			>\u2192</PaginationLink
		></PaginationItem
	>
</Pagination>
`;
  const spinnersCode = `
<!-- Border spinner -->

<Spinner color="primary"> Loading... </Spinner>

<Spinner color="secondary"> Loading... </Spinner>

<Spinner color="success"> Loading... </Spinner>

<Spinner color="info"> Loading... </Spinner>

<Spinner color="warning"> Loading... </Spinner>

<Spinner color="danger"> Loading... </Spinner>

<Spinner color="dark"> Loading... </Spinner>

<Spinner color="light"> Loading... </Spinner>


<!-- Growing spinner -->

<Spinner color="primary" type="grow" > Loading... </Spinner>

<Spinner color="secondary" type="grow" > Loading... </Spinner>

<Spinner color="success" type="grow" > Loading... </Spinner>

<Spinner color="info" type="grow" > Loading... </Spinner>

<Spinner color="warning" type="grow" > Loading... </Spinner>

<Spinner color="danger" type="grow" > Loading... </Spinner>

<Spinner color="dark" type="grow" > Loading... </Spinner>

<Spinner color="light" type="grow" > Loading... </Spinner>
`;
  return `${$$result.head += `${$$result.title = `<title>General | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "General", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Popovers" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Popovers example are available with follwing options
							, Directions are mirrored when using Bootstrap in
							RTL.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", id: "PopoverTop" }, {}, {
                        default: () => {
                          return `Popover on top`;
                        }
                      })}
								${validate_component(Popover, "Popover").$$render($$result, {
                        placement: "top",
                        target: "PopoverTop",
                        title: "Top Popover"
                      }, {}, {
                        default: () => {
                          return `Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "PopoverRight" }, {}, {
                        default: () => {
                          return `Popover on right`;
                        }
                      })}
								${validate_component(Popover, "Popover").$$render($$result, {
                        placement: "right",
                        target: "PopoverRight",
                        title: "Right Popover"
                      }, {}, {
                        default: () => {
                          return `Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "PopoverBottom" }, {}, {
                        default: () => {
                          return `Popover on bottom`;
                        }
                      })}
								${validate_component(Popover, "Popover").$$render($$result, {
                        placement: "bottom",
                        target: "PopoverBottom",
                        title: "Bottom Popover"
                      }, {}, {
                        default: () => {
                          return `Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "PopoverLeft" }, {}, {
                        default: () => {
                          return `Popover on left`;
                        }
                      })}
								${validate_component(Popover, "Popover").$$render($$result, {
                        placement: "left",
                        target: "PopoverLeft",
                        title: "Left Popover"
                      }, {}, {
                        default: () => {
                          return `Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, {
                        color: "success",
                        id: "PopoverDismissible"
                      }, {}, {
                        default: () => {
                          return `Dismissible popover`;
                        }
                      })}
								${validate_component(Popover, "Popover").$$render($$result, {
                        placement: "right",
                        target: "PopoverDismissible",
                        title: "Dismissible popover"
                      }, {}, {
                        default: () => {
                          return `And here&#39;s some amazing content. It&#39;s very
									engaging. Right?
								`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: popoversCode, id: "popoversCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Tooltips" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Tooltip example are available with follwing options,
							Directions are mirrored when using Bootstrap in RTL.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "light", id: "tooltipTop" }, {}, {
                        default: () => {
                          return `Tooltip on top`;
                        }
                      })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "tooltipTop" }, {}, {
                        default: () => {
                          return `Tooltip on top`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "tooltipRight" }, {}, {
                        default: () => {
                          return `Tooltip on right`;
                        }
                      })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, {
                        placement: "right",
                        target: "tooltipRight"
                      }, {}, {
                        default: () => {
                          return `Tooltip on right`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "tooltipBottom" }, {}, {
                        default: () => {
                          return `Tooltip on bottom`;
                        }
                      })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, {
                        placement: "bottom",
                        target: "tooltipBottom"
                      }, {}, {
                        default: () => {
                          return `Tooltip on bottom`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "light", id: "tooltipLeft" }, {}, {
                        default: () => {
                          return `Tooltip on left`;
                        }
                      })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "left", target: "tooltipLeft" }, {}, {
                        default: () => {
                          return `Tooltip on left`;
                        }
                      })}

								${validate_component(Button, "Button").$$render($$result, { color: "primary", id: "tooltipwithHtml" }, {}, {
                        default: () => {
                          return `Tooltip with HTML`;
                        }
                      })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, {
                        placement: "top",
                        target: "tooltipwithHtml"
                      }, {}, {
                        default: () => {
                          return `<em>Tooltip</em> <u>with</u> <b>HTML</b>`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: tooltipsCode, id: "tooltipsCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Breadcrumb" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Indicate the current page\u2019s location within a
							navigational hierarchy
						</p>
						<div class="${"live-preview"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { listClassName: "p-3 py-2 bg-light" }, {}, {
                        default: () => {
                          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { active: true }, {}, {
                            default: () => {
                              return `Home`;
                            }
                          })}`;
                        }
                      })}

							${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { listClassName: "p-3 py-2 bg-light" }, {}, {
                        default: () => {
                          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Home`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { active: true }, {}, {
                            default: () => {
                              return `Library`;
                            }
                          })}`;
                        }
                      })}

							${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { listClassName: "p-3 py-2 bg-light" }, {}, {
                        default: () => {
                          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Home`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Base UI`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { active: true }, {}, {
                            default: () => {
                              return `General`;
                            }
                          })}`;
                        }
                      })}

							${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { listClassName: "p-3 py-2 bg-light mb-0" }, {}, {
                        default: () => {
                          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `<i class="${"ri-home-5-fill"}"></i>`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                default: () => {
                                  return `Base UI`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { active: true }, {}, {
                            default: () => {
                              return `General`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: breadcrumbCode,
                        id: "breadcrumbCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Pagination" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<h5 class="${"fs-15"}">Default Pagination</h5>
									<p class="${"text-muted"}">Use <code>Pagination</code> attribute to
										ul element to indicate a series of related
										content exists across multiple pages.
									</p>
									${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Previous`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

									${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
										${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><h5 class="${"fs-15"}">Disabled and Active states
										</h5>
										<p class="${"text-muted"}">Use <code>disabled</code> attribute
											to PaginationItem to links that
											appear un-clickable and
											<code>active</code> class to indicate
											the current page.
										</p>
										${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<i class="${"mdi mdi-chevron-left"}"></i>`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<i class="${"mdi mdi-chevron-right"}"></i>`;
                                        }
                                      })}`;
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
                              return `<div class="${"mt-4"}"><h5 class="${"fs-15"}">Sizing</h5>
										<p class="${"text-muted"}">Use <code>pagination-lg</code> or
											<code>pagination-sm</code> to set different
											pagination sizes.
										</p>

										${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3", size: "lg" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3", size: "sm" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4"}"><h5 class="${"fs-15"}">Alignment</h5>

										<p class="${"text-muted"}">Use <code>justify-content-start</code>,
											<code>justify-content-start</code>,
											or
											<code>justify-content-start</code>,
											class to pagination class to change
											the alignment of pagination
											respectively.
										</p>

										${validate_component(Pagination, "Pagination").$$render($$result, { listClassName: "justify-content-center" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, { listClassName: "justify-content-end" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190 \xA0 Prev`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `Next \xA0 \u2192`;
                                        }
                                      })}`;
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
                              return `<div class="${"mt-4"}"><h5 class="${"fs-15"}">Custom Separated Pagination
										</h5>
										<p class="${"text-muted"}">Use <code>pagination-separated</code> class to pagination class to set custom
											separated pagination.
										</p>

										${validate_component(Pagination, "Pagination").$$render($$result, {
                                size: "lg",
                                class: "mb-3 pagination-lg pagination-separated"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, { class: "mb-3 pagination-separated" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, {
                                size: "sm",
                                class: "mb-3 pagination-sm pagination-separated"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4"}"><h5 class="${"fs-15"}">Custom Rounded Pagination
										</h5>
										<p class="${"text-muted"}">Use <code>pagination-rounded</code> class
											to pagination class to set custom rounded
											pagination.
										</p>

										${validate_component(Pagination, "Pagination").$$render($$result, {
                                size: "lg",
                                class: "pagination-lg pagination-rounded mb-3"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, { class: "pagination-rounded mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}

										${validate_component(Pagination, "Pagination").$$render($$result, {
                                size: "sm",
                                class: "pagination-sm pagination-rounded mb-3"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(PaginationItem, "PaginationItem").$$render($$result, { disabled: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2190`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `1`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active: true }, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `2`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `3`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `4`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `5`;
                                        }
                                      })}`;
                                    }
                                  })}
											${validate_component(PaginationItem, "PaginationItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `\u2192`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: paginationCode,
                        id: "paginationCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Spinners" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-15"}">Border spinner</h5>
										<p class="${"text-muted"}">Use <code>Spinner</code> attribute for
											a lightweight loading indicator.
										</p>
										<div class="${"d-flex flex-wrap gap-3 mb-2"}">${validate_component(Spinner, "Spinner").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "secondary" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "success" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "info" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "warning" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "danger" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "dark" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}</div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div><h5 class="${"fs-15"}">Growing spinner</h5>
										<p class="${"text-muted"}">Use <code>spinner-grow</code> class for
											a lightweight spinner with growing effect.
										</p>
										<div class="${"d-flex flex-wrap gap-3 mb-2"}">${validate_component(Spinner, "Spinner").$$render($$result, { color: "primary", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "secondary", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "success", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "info", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "warning", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "danger", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "dark", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}
											${validate_component(Spinner, "Spinner").$$render($$result, { color: "light", type: "grow" }, {}, {
                                default: () => {
                                  return `Loading...`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: spinnersCode, id: "spinnersCode" }, {}, {})}</div>`;
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
export { Uigeneral as default };
