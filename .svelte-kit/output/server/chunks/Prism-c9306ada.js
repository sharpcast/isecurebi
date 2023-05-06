import { c as create_ssr_component, d as add_attribute } from "./index-584434b3.js";
const Prism = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code, id } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<pre class="${"language-markup"}" style="${"max-height: 352px;"}" tabindex="${"0"}"><code class="${"language-markup"}"${add_attribute("id", id, 0)}></code></pre>`;
});
export { Prism as P };
