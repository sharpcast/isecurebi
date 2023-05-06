import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
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
const Uiembedvideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ratio169Code = `
<!-- Ratio Video 16:9 -->
<div class="ratio ratio-16x9">
    <iframe src="//www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>
</div>
`;
  const ratio219Code = `
<!-- Ratio Video 21:9 -->
<div class="ratio ratio-21x9">
    <iframe src="//www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowfullscreen></iframe>
</div>
`;
  const ratio43Code = `
<!-- Ratio Video 4:3 -->
<div class="ratio ratio-4x3">
    <iframe src="//www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>
</div>
`;
  const ratio11Code = `
<!-- Ratio Video 1:1 -->
<div class="ratio ratio-1x1">
    <iframe src="//www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen></iframe>
</div>

`;
  const customRationCode = `
<!-- Custom Ratio Video -->
<div class="ratio ratio-16x9">
    <iframe src="//www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowfullscreen></iframe>
</div>

`;
  return `${$$result.head += `${$$result.title = `<title>Embed Video | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Embed Video",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ratio Video 16:9" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Wrap any embed in<code>&lt;iframe&gt;</code> tag, in
							a parent element, use
							<code>ratio-16x9</code> class to set aspect ratio 16:9.
						</p>
						<div class="${"live-preview"}"><div class="${"ratio ratio-16x9"}"><iframe class="${"rounded"}" src="${"//www.youtube.com/embed/1y_kfWUCFDQ"}" title="${"YouTube video"}" allowfullscreen></iframe></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ratio169Code, id: "ratio169Code" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ratio Video 4:3" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>ratio-4x3</code> class to set aspect ratio
							4:3.
						</p>
						<div class="${"live-preview"}"><div class="${"ratio ratio-4x3"}"><iframe class="${"rounded"}" src="${"//www.youtube.com/embed/PHcgN1GTjdU"}" title="${"YouTube video"}" allowfullscreen></iframe></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ratio43Code, id: "ratio43Code" }, {}, {})}</div>

						<div class="${"d-none code-view"}"><pre class="${"language-markup"}">                                <code>&lt;!-- Ratio Video 4:3 --&gt;
                                    &lt;div class=&quot;ratio ratio-4x3&quot;&gt;
                                    &lt;iframe src=&quot;//www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowFullScreen&gt;&lt;/iframe&gt;
                                    &lt;/div&gt;</code></pre></div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Ratios" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>--vz-aspect-ratio: 50%</code> to style element
							to set aspect ratio 2:1.
						</p>
						<div class="${"live-preview"}"><div class="${"ratio ratio-16x9"}"><iframe class="${"rounded"}" src="${"//www.youtube.com/embed/2RZQN_ko0iU"}" title="${"YouTube video"}" allowfullscreen></iframe></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: customRationCode,
                        id: "customRationCode"
                      }, {}, {})}</div>

						<div class="${"d-none code-view"}"><pre class="${"language-markup"}">                                <code>&lt;!-- Custom Ratio Video --&gt;
                                    &lt;div class=&quot;ratio&quot; style=&quot;--vz-aspect-ratio: 50%;&quot;&gt;
                                    &lt;iframe src=&quot;//www.youtube.com/embed/2RZQN_ko0iU&quot; title=&quot;YouTube video&quot; allowFullScreen&gt;&lt;/iframe&gt;
                                    &lt;/div&gt;</code></pre></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ratio Video 21:9" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>ratio-21x9</code> class to set aspect ratio
							21:9.
						</p>
						<div class="${"live-preview"}"><div class="${"ratio ratio-21x9"}"><iframe class="${"rounded"}" src="${"//www.youtube.com/embed/Z-fV2lGKnnU"}" title="${"YouTube video"}" allowfullscreen></iframe></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ratio219Code, id: "ratio219Code" }, {}, {})}</div>

						<div class="${"d-none code-view"}"><pre class="${"language-markup"}">                                <code>&lt;!-- Ratio Video 21:9 --&gt;
                                    &lt;div class=&quot;ratio ratio-21x9&quot;&gt;
                                    &lt;iframe src=&quot;//www.youtube.com/embed/Z-fV2lGKnnU&quot; title=&quot;YouTube video&quot; allowFullScreen&gt;&lt;/iframe&gt;
                                    &lt;/div&gt;</code></pre></div>`;
                    }
                  })}`;
                }
              })}

				${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Ratio Video 1:1" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>ratio-1x1</code> class to set aspect ratio
							1:1.
						</p>
						<div class="${"live-preview"}"><div class="${"ratio ratio-1x1"}"><iframe class="${"rounded"}" src="${"//www.youtube.com/embed/GfSZtaoc5bw"}" title="${"YouTube video"}" allowfullscreen></iframe></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: ratio11Code, id: "ratio11Code" }, {}, {})}</div>`;
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
export { Uiembedvideo as default };
