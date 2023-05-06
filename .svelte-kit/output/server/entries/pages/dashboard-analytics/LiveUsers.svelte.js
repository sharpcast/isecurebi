import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import CountriesCharts from "./CountriesCharts.svelte.js";
import { M as Map } from "../../../chunks/Map-45314136.js";
const LiveUsers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { xxl: 7 }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "h-100" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
                default: () => {
                  return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Live Users By Country</h4>
                    <div class="${"flex-shrink-0"}"><button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">Export Report
                        </button></div></div>

                ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"text-center"}" style="${"height: 252px"}">${validate_component(Map, "Map").$$render($$result, { latitude: -34.397, longitude: 150.644 }, {}, {})}</div>

                    <div class="${"table-responsive table-card mt-3"}"><table class="${"table table-borderless table-sm table-centered align-middle table-nowrap mb-1"}"><thead class="${"text-muted border-dashed border border-start-0 border-end-0 bg-soft-light"}"><tr><th>Duration (Secs)</th>
                                    <th style="${"width: 30%"}">Sessions</th>
                                    <th style="${"width: 30%"}">Views</th></tr></thead>
                            <tbody class="${"border-0"}"><tr><td>0-30</td>
                                    <td>2,250</td>
                                    <td>4,250</td></tr>
                                <tr><td>31-60</td>
                                    <td>1,501</td>
                                    <td>2,050</td></tr>
                                <tr><td>61-120</td>
                                    <td>750</td>
                                    <td>1,600</td></tr>
                                <tr><td>121-240</td>
                                    <td>540</td>
                                    <td>1,040</td></tr></tbody></table></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

        ${validate_component(Col, "Col").$$render($$result, { xl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "card-height-100" }, {}, {
                default: () => {
                  return `<div class="${"card-header align-items-center d-flex"}"><h4 class="${"card-title mb-0 flex-grow-1"}">Sessions by Countries</h4>
                    <div class="${"d-flex gap-1"}"><button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">ALL
                        </button>
                        <button type="${"button"}" class="${"btn btn-soft-primary btn-sm"}">1M
                        </button>
                        <button type="${"button"}" class="${"btn btn-soft-secondary btn-sm"}">6M
                        </button></div></div>
                <div class="${"card-body p-0"}"><div><div id="${"countries_charts"}" class="${"apex-charts"}" dir="${"ltr"}">${validate_component(CountriesCharts, "CountriesCharts").$$render($$result, {
                    dataColors: [
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-danger",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info",
                      "--vz-info"
                    ]
                  }, {}, {})}</div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { LiveUsers as default };
