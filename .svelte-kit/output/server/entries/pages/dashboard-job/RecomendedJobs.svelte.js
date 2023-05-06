import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
const RecomendedJobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, { class: "g-4 align-items-center" }, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { class: "col-sm-auto" }, {}, {
                    default: () => {
                      return `<div><h4 class="${"card-title mb-0 flex-grow-1"}">Recomended Jobs
              </h4></div>`;
                    }
                  })}
          ${validate_component(Col, "Col").$$render($$result, { class: "col-sm" }, {}, {
                    default: () => {
                      return `<div class="${"d-flex justify-content-sm-end"}"><div class="${"search-box ms-2"}"><input type="${"text"}" class="${"form-control"}" id="${"searchResultList"}" placeholder="${"Search for jobs..."}">
                <i class="${"ri-search-line search-icon"}"></i></div></div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
      ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
            default: () => {
              return `<div role="${"complementary"}" class="${"gridjs gridjs-container"}" style="${"width: 100%;"}"><div class="${"gridjs-wrapper"}" style="${"height: auto;"}"><table role="${"grid"}" class="${"gridjs-table"}" style="${"height: auto;"}"><thead class="${"gridjs-thead"}"><tr class="${"gridjs-tr"}"><th data-column-id="${"position"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Position</div></th>
            <th data-column-id="${"companyName"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Company Name</div></th>
            <th data-column-id="${"location"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Location</div></th>
            <th data-column-id="${"salary"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Salary</div></th>
            <th data-column-id="${"experience"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Experience</div></th>
            <th data-column-id="${"jobType"}" class="${"gridjs-th gridjs-th-sort"}" tabindex="${"0"}"><div class="${"gridjs-th-content"}">Job Type</div></th></tr></thead>
            <tbody class="${"gridjs-tbody"}"><tr class="${"gridjs-tr"}"><td class="${"gridjs-td"}">Full Stack Engineer</td>
            <td class="${"gridjs-td"}">Syntyce Solutions</td>
            <td class="${"gridjs-td"}">Zuweihir, UAE</td>
            <td class="${"gridjs-td"}">$650 - $900</td>
            <td class="${"gridjs-td"}">0-1+ year</td>
            <td class="${"gridjs-td"}">Part Time</td></tr>
            <tr class="${"gridjs-tr"}"><td class="${"gridjs-td"}">UI/UX designer</td>
            <td class="${"gridjs-td"}">Zoetic Fashion</td>
            <td class="${"gridjs-td"}">Cullera, Spain</td>
            <td class="${"gridjs-td"}">$400+</td>
            <td class="${"gridjs-td"}">$600 - $870</td>
            <td class="${"gridjs-td"}">Freelancer</td></tr>
            <tr class="${"gridjs-tr"}"><td class="${"gridjs-td"}">Project Manager</td>
            <td class="${"gridjs-td"}">Meta4Systems</td>
            <td class="${"gridjs-td"}">Limestone, US</td>
            <td class="${"gridjs-td"}">$210 - $300</td>
            <td class="${"gridjs-td"}">0-2+ year</td>
            <td class="${"gridjs-td"}">Intership</td></tr>
            <tr class="${"gridjs-tr"}"><td class="${"gridjs-td"}">Assistant / Store Keeper</td>
            <td class="${"gridjs-td"}">Moetic Fashion</td>
            <td class="${"gridjs-td"}">Limestone, US</td>
            <td class="${"gridjs-td"}">$600 - $870</td>
            <td class="${"gridjs-td"}">0-3 year</td>
            <td class="${"gridjs-td"}">Full Time</td></tr>
            <tr class="${"gridjs-tr"}"><td class="${"gridjs-td"}">Marketing Director</td>
            <td class="${"gridjs-td"}">Meta4Systems</td>
            <td class="${"gridjs-td"}">Vinninga, Sweden</td>
            <td class="${"gridjs-td"}">$210 - $300</td>
            <td class="${"gridjs-td"}">0-2 year</td>
            <td class="${"gridjs-td"}">Full Time</td></tr></tbody></table></div>
        <div class="${"gridjs-footer"}"><div class="${"gridjs-pagination"}"><div role="${"status"}" aria-live="${"polite"}" class="${"gridjs-summary"}" title="${"Page 1 of 2"}">Showing <b>1</b> to <b>5</b> of <b>6</b> results</div>
        <div class="${"gridjs-pages"}"><button tabindex="${"0"}" disabled="${""}" title="${"Previous"}" aria-label="${"Previous"}" class="${""}">Previous</button>
            <button tabindex="${"0"}" class="${"gridjs-currentPage"}" title="${"Page 1"}" aria-label="${"Page 1"}">1</button>
            <button tabindex="${"0"}" class="${""}" title="${"Page 2"}" aria-label="${"Page 2"}">2</button>
            <button tabindex="${"0"}" title="${"Next"}" aria-label="${"Next"}" class="${""}">Next</button></div></div></div>
        <div id="${"gridjs-temp"}" class="${"gridjs-temp"}"></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { RecomendedJobs as default };
