import { c as create_ssr_component, e as each, v as validate_component, b as escape, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { M as MOCK_DATA } from "../../../../chunks/appsJobs-3a727122.js";
import Charts from "./Charts.svelte.js";
import "../../../../chunks/img-2-d003c89a.js";
import "../../../../chunks/img-4-f8adc4d4.js";
import "../../../../chunks/img-7-4861de06.js";
import "../../../../chunks/img-5-9ef0dff2.js";
import "../../../../chunks/img-2-674a1784.js";
import "../../../../chunks/img-3-127a32b6.js";
import "../../../../chunks/img-4-5ac753e7.js";
import "../../../../chunks/img-6-7ff883ab.js";
import "../../../../chunks/img-7-06bdf5b0.js";
import "../../../../chunks/img-8-ebcd4c34.js";
import "../../../../chunks/img-9-995f69e7.js";
import "../../../../chunks/avatar-1-413c6ccd.js";
import "../../../../chunks/avatar-2-5b5618a1.js";
import "../../../../chunks/avatar-4-3a2dbf60.js";
import "../../../../chunks/avatar-5-c7d43f40.js";
import "../../../../chunks/avatar-6-ef07d98c.js";
import "../../../../chunks/avatar-7-46aa251f.js";
import "../../../../chunks/avatar-8-f9de7a45.js";
import "../../../../chunks/avatar-9-f5d371f4.js";
import "../../../../chunks/avatar-10-def8cdb7.js";
import "../../../../chunks/slack-e58caefb.js";
import "../../../../chunks/mail_chimp-a5132002.js";
import "../../../../chunks/bitbucket-59cc1b30.js";
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(MOCK_DATA.jobWidgets, (item) => {
    return `${validate_component(Col, "Col").$$render($$result, { class: "col-xl-3 col-md-6" }, {}, {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { class: "card card-height-100" }, {}, {
          default: () => {
            return `<div class="${"d-flex"}"><div class="${"flex-grow-1 p-3"}"><h5 class="${"mb-3"}">${escape(item.lable)}</h5>
            <p class="${"mb-0 text-muted"}"><span${add_attribute("class", "badge bg-light text-" + item.badgeColor + " mb-0", 0)}>${escape(" ")}
                <i${add_attribute("class", item.icon + "align-middle", 0)}></i> ${escape(item.number)}
                </span>${escape(" ")}
                vs. previous month
            </p></div>
            <div>${validate_component(Charts, "Charts").$$render($$result, {
              seriesData: item.series,
              dataColors: item.chartColor,
              id: item.id
            }, {}, {})}
            </div></div>
        `;
          }
        })}
    `;
      }
    })}`;
  })}`;
});
export { Widgets as default };
