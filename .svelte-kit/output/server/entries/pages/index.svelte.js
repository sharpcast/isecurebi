import { c as create_ssr_component } from "../../chunks/index-584434b3.js";
async function load({ session }) {
  let { user } = session;
  if (user == null) {
    return { status: 302, redirect: "/dashboard" };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export { Routes as default, load };
