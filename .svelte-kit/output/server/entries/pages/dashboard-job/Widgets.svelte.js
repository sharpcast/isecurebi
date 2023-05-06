import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { M as MOCK_DATA } from "../../../chunks/dashboardJobs-69be2afb.js";
import DashboardCharts from "./DashboardCharts.svelte.js";
import "../../../chunks/img-5-9ef0dff2.js";
import "../../../chunks/img-3-127a32b6.js";
import "../../../chunks/img-2-674a1784.js";
import "../../../chunks/img-4-5ac753e7.js";
import "../../../chunks/avatar-1-413c6ccd.js";
import "../../../chunks/avatar-2-5b5618a1.js";
import "../../../chunks/avatar-3-5bcc58a8.js";
import "../../../chunks/avatar-4-3a2dbf60.js";
import "../../../chunks/avatar-6-ef07d98c.js";
import "../../../chunks/avatar-10-def8cdb7.js";
import "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/avatar-9-f5d371f4.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
    default: () => {
      return `<div class="${"d-flex flex-column h-100"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(MOCK_DATA.jobWidgets, (widget) => {
            return `${validate_component(Col, "Col").$$render($$result, { xl: 6, md: 6 }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, { class: "card-animate overflow-hidden" }, {}, {
                  default: () => {
                    return `<div class="${"position-absolute start-0"}" style="${"z-Index: 0"}"><svg version="${"1.2"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 200 120"}" width="${"200"}" height="${"120"}"><path id="${"Shape 8"}" style="${"opacity: .05;fill: #0ab39c;"}" d="${"m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"}"></path></svg></div>
              ${validate_component(CardBody, "CardBody").$$render($$result, { style: "z-Index: 1" }, {}, {
                      default: () => {
                        return `<div class="${"d-flex align-items-center"}"><div class="${"flex-grow-1 overflow-hidden"}"><p class="${"text-uppercase fw-medium text-muted text-truncate mb-3"}">${escape(" ")}
                      ${escape(widget.lable)}</p>
                    <h4 class="${"fs-22 fw-semibold ff-secondary mb-0"}"><span class="${"counter-value"}"${add_attribute("data-target", widget.jobs, 0)}></span>
                    </h4></div>
                  <div class="${"flex-shrink-0"}">${validate_component(DashboardCharts, "DashboardCharts").$$render($$result, {
                          seriesData: widget.series,
                          colors: widget.color,
                          id: "widget" + widget.id
                        }, {}, {})}
                  </div></div>
              `;
                      }
                    })}
            `;
                  }
                })}
          `;
              }
            })}`;
          })}`;
        }
      })}</div>`;
    }
  })}`;
});
export { Widgets as default };
