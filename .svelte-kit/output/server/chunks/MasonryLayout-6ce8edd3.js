import { c as create_ssr_component, b as escape, d as add_attribute } from "./index-584434b3.js";
var MasonryLayout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".masonry-grid.svelte-1w5blnt{display:grid;gap:var(--gap);grid-template-columns:var(--columns);grid-auto-rows:0;width:var(--width);height:var(--height)}",
  map: null
};
const MasonryLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { gap = "10px" } = $$props;
  let { updateInterval = 300 } = $$props;
  let { columns = "repeat(auto-fill, minmax(250px, 1fr))" } = $$props;
  let { width = null } = $$props;
  let { height = null } = $$props;
  let { breakpointCols = null } = $$props;
  let { columnWidth = 0 } = $$props;
  let grid = null;
  let { class: className = "" } = $$props;
  const updateGrid = (items2) => {
  };
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.updateInterval === void 0 && $$bindings.updateInterval && updateInterval !== void 0)
    $$bindings.updateInterval(updateInterval);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.breakpointCols === void 0 && $$bindings.breakpointCols && breakpointCols !== void 0)
    $$bindings.breakpointCols(breakpointCols);
  if ($$props.columnWidth === void 0 && $$bindings.columnWidth && columnWidth !== void 0)
    $$bindings.columnWidth(columnWidth);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.updateGrid === void 0 && $$bindings.updateGrid && updateGrid !== void 0)
    $$bindings.updateGrid(updateGrid);
  $$result.css.add(css);
  return `

<div class="${"masonry-grid " + escape(className, true) + " svelte-1w5blnt"}"${add_attribute("this", grid, 0)}>${slots.default ? slots.default({ updateGrid, columnWidth, items }) : ``}
</div>`;
});
export { MasonryLayout as M };
