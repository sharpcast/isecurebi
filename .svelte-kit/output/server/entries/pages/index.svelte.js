import { c as create_ssr_component } from "../../chunks/index-aeca7bd0.js";
async function load({ session }) {
  let { user } = session;
  if (user == null) {
    return { status: 302, redirect: "/dashboard" };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>`;
});
export { Routes as default, load };
