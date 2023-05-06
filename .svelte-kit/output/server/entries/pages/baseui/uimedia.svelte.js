import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
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
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uimedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defultCode = `
<div class="d-flex align-items-start text-muted mb-4">
    <div class="flex-shrink-0 me-3">
        <img src={avatar2} class="avatar-sm rounded" alt="...">
    </div>
    
    <div class="flex-grow-1">
        <h5 class="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
</div>

<div class="d-flex align-items-start text-muted mb-4">
    <div class="flex-grow-1">
        <h5 class="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
    <div class="flex-shrink-0 ms-3">
        <img src={avatar3} class="avatar-sm rounded" alt="...">
    </div>
</div>

<div class="d-flex align-items-start text-muted">
    <div class="flex-shrink-0 me-3">
        <img src={avatar2} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
        <h5 class="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
</div>
`;
  const nestingCode = `
<!-- Nesting Example -->
<div class="d-flex align-items-start text-muted mb-4">
    <div class="flex-shrink-0 me-3">
        <img src={avatar2} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
        <h5 class="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
        <div class="d-flex align-items-start text-muted mt-3">
            <div class="flex-shrink-0 me-3">
                <img src={avatar3} class="avatar-sm rounded" alt="...">
            </div>
            <div class="flex-grow-1">
                <h5 class="fs-14">Media heading</h5>
                This is some content from a media component. You can replace this with any content and adjust it as needed.
            </div>
        </div>
    </div>
</div>

<div class="d-flex align-items-start text-muted">
    <div class="flex-shrink-0 me-3">
        <img src={avatar4} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
        <h5 class="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
</div>

`;
  const mediaCode = `
<!-- Media Alignment -->
<div class="d-flex align-items-start text-muted mb-4">
    <div class="flex-shrink-0 me-3">
    <img src={avatar2} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
    <h5 class="fs-14">Top Aligned media</h5>
    <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>

<div class="d-flex align-items-center text-muted mb-4">
    <div class="flex-shrink-0 me-3">
    <img src={avatar6} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
    <h5 class="fs-14">Center Aligned media</h5>
    <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>

<div class="d-flex align-items-end text-muted">
    <div class="flex-shrink-0 me-3">
    <img src={avatar8} class="avatar-sm rounded" alt="...">
    </div>
    <div class="flex-grow-1">
    <h5 class="fs-14">Bottom Aligned media</h5>
    <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Media Object | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Media object",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Examples" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-4"}">Use few flex utilities that allow even more
							flexibility and customization than before.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex align-items-start text-muted mb-4"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>

								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
									This is some content from a media component.
									You can replace this with any content and adjust
									it as needed.
								</div></div>

							<div class="${"d-flex align-items-start text-muted mb-4"}"><div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
									This is some content from a media component.
									You can replace this with any content and adjust
									it as needed.
								</div>
								<div class="${"flex-shrink-0 ms-3"}"><img${add_attribute("src", avatar3, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div></div>

							<div class="${"d-flex align-items-start text-muted"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
									This is some content from a media component.
									You can replace this with any content and adjust
									it as needed.
								</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: defultCode, id: "defultCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Nesting Example" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-4"}">Media objects can be infinitely nested, though we
							suggest you stop at some point. Place nested <code>d-flex align-items-start</code>
							within the <code>flex-grow-1</code>
							of a parent media object.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex align-items-start text-muted mb-4"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
									This is some content from a media component.
									You can replace this with any content and adjust
									it as needed.
									<div class="${"d-flex align-items-start text-muted mt-3"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar3, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>
										<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
											This is some content from a media component.
											You can replace this with any content
											and adjust it as needed.
										</div></div></div></div>

							<div class="${"d-flex align-items-start text-muted"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar4, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>
								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Media heading</h5>
									This is some content from a media component.
									You can replace this with any content and adjust
									it as needed.
								</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: nestingCode, id: "nestingCode" }, {}, {})}</div>`;
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Media Alignment" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted mb-4"}">The images or other media can be aligned top,
							middle, or bottom. The default is top aligned.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex align-items-start text-muted mb-4"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar2, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>

								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Top Aligned media</h5>
									<p class="${"mb-1"}">Cras sit amet nibh libero, in gravida
										nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio,
										vestibulum in vulputate at, tempus
										viverra turpis. Fusce condimentum nunc
										ac nisi vulputate fringilla. Donec
										lacinia congue felis in faucibus.
									</p>
									<p class="${"mb-0"}">Donec sed odio dui. Nullam quis risus
										eget urna mollis ornare vel eu leo. Cum
										sociis natoque penatibus et magnis dis
										parturient montes, nascetur ridiculus
										mus.
									</p></div></div>

							<div class="${"d-flex align-items-center text-muted mb-4"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar6, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>

								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Center Aligned media</h5>
									<p class="${"mb-1"}">Cras sit amet nibh libero, in gravida
										nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio,
										vestibulum in vulputate at, tempus
										viverra turpis. Fusce condimentum nunc
										ac nisi vulputate fringilla. Donec
										lacinia congue felis in faucibus.
									</p>
									<p class="${"mb-0"}">Donec sed odio dui. Nullam quis risus
										eget urna mollis ornare vel eu leo. Cum
										sociis natoque penatibus et magnis dis
										parturient montes, nascetur ridiculus
										mus.
									</p></div></div>

							<div class="${"d-flex align-items-end text-muted"}"><div class="${"flex-shrink-0 me-3"}"><img${add_attribute("src", avatar8, 0)} class="${"avatar-sm rounded"}" alt="${"..."}"></div>

								<div class="${"flex-grow-1"}"><h5 class="${"fs-14"}">Bottom Aligned media</h5>
									<p class="${"mb-1"}">Cras sit amet nibh libero, in gravida
										nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio,
										vestibulum in vulputate at, tempus
										viverra turpis. Fusce condimentum nunc
										ac nisi vulputate fringilla. Donec
										lacinia congue felis in faucibus.
									</p>
									<p class="${"mb-0"}">Donec sed odio dui. Nullam quis risus
										eget urna mollis ornare vel eu leo. Cum
										sociis natoque penatibus et magnis dis
										parturient montes, nascetur ridiculus
										mus.
									</p></div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: mediaCode, id: "mediaCode" }, {}, {})}</div>`;
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
export { Uimedia as default };
