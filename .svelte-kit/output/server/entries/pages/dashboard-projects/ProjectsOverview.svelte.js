import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import ProjectsOverviewCharts from "./ProjectsOverviewCharts.svelte.js";
const ProjectsOverview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CardHeader, "CardHeader").$$render($$result, {
                class: "border-0 align-items-center d-flex"
              }, {}, {
                default: () => {
                  return `<h4 class="${"card-title mb-0 flex-grow-1"}">Projects Overview</h4>
				<div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">ALL </button>
					<button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">1M </button>
					<button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">6M </button>
					<button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">1Y </button></div>`;
                }
              })}

			${validate_component(CardHeader, "CardHeader").$$render($$result, { class: "p-0 border-0 bg-soft-light" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, { class: "g-0 text-center" }, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                        default: () => {
                          return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"9851"}">0</span></h5>

							<p class="${"text-muted mb-0"}">Number of Projects</p></div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                        default: () => {
                          return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}"><span class="${"counter-value"}" data-target="${"1026"}">0</span></h5>

							<p class="${"text-muted mb-0"}">Active Projects</p></div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                        default: () => {
                          return `<div class="${"p-3 border border-dashed border-start-0"}"><h5 class="${"mb-1"}">$<span class="${"counter-value"}" data-target="${"228.89"}">0</span>k</h5>

							<p class="${"text-muted mb-0"}">Revenue</p></div>`;
                        }
                      })}
					${validate_component(Col, "Col").$$render($$result, { xs: 6, sm: 3 }, {}, {
                        default: () => {
                          return `<div class="${"p-3 border border-dashed border-start-0 border-end-0"}"><h5 class="${"mb-1 text-success"}"><span class="${"counter-value"}" data-target="${"10589"}">0</span>h
							</h5>

							<p class="${"text-muted mb-0"}">Working Hours</p></div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}
			${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-0 pb-2" }, {}, {
                default: () => {
                  return `<div><div dir="${"ltr"}" class="${"apex-charts"}">${validate_component(ProjectsOverviewCharts, "ProjectsOverviewCharts").$$render($$result, {
                    dataColors: ["--vz-primary", "--vz-warning", "--vz-success"]
                  }, {}, {})}</div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { ProjectsOverview as default };
