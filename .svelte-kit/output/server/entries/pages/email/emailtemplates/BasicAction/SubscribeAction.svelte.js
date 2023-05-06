import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { l as logo_dark } from "../../../../../chunks/logo-dark-ec4d2828.js";
const SubscribeAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `<div class="${"justify-content-between d-flex align-items-center mt-3 mb-4"}"><h5 class="${"mb-0 pb-1 text-decoration-underline"}">Subscribe Action</h5></div>`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
        default: () => {
          return `<table class="${"body-wrap"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;"}"><tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"}" valign="${"top"}"></td>
                <td class="${"container"}" width="${"600"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"}" valign="${"top"}"><div class="${"content"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;"}"><table class="${"main"}" width="${"100%"}" cellpadding="${"0"}" cellspacing="${"0"}" itemprop="${"action"}" itemscope itemtype="${"http://schema.org/ConfirmAction"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;"}"><tr style="${"font-family: 'Roboto', sans-serif; font-size: 14px; margin: 0;"}"><td class="${"content-wrap"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 3px 15px rgba(30,32,37,.06); ;border-radius: 7px; background-color: #fff;"}" valign="${"top"}"><meta itemprop="${"name"}" content="${"Confirm Email"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}">
                                    <table width="${"100%"}" cellpadding="${"0"}" cellspacing="${"0"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"}" valign="${"top"}"><div style="${"text-align: center;margin-bottom: 15px;"}"><img${add_attribute("src", logo_dark, 0)} alt="${""}" height="${"23"}"></div></td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; line-height: 1.5; font-size: 24px; vertical-align: top; margin: 0; padding: 0 0 10px;text-align: center; font-weight: 500;"}" valign="${"top"}">Please confirm subscription
                                            </td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"}" valign="${"top"}">Since yesterday, I&#39;ve been receiving thousands of emails, asking me to confirm the subscription.
                                            </td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" itemprop="${"handler"}" itemscope itemtype="${"http://schema.org/HttpActionHandler"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"}" valign="${"top"}">${validate_component(Link, "Link").$$render($$result, {
            href: "!#",
            itemprop: "url",
            style: "font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: .8125rem;font-weight: 400; color: #FFF; text-decoration: none;text-align: center; cursor: pointer; display: inline-block; border-radius: .25rem; text-transform: capitalize; background-color: #0ab39c; margin: 0; border-color: #0ab39c; border-style: solid; border-width: 1px; padding: .5rem .9rem;",
            onMouseOver: "this.style.background='#099885'",
            onMouseOut: "this.style.background='#0ab39c'"
          }, {}, {
            default: () => {
              return `Yes, subscribe me`;
            }
          })}</td></tr>

                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; border-top: 1px solid #e9ebec;"}"><td class="${"content-block"}" style="${"color: #878a99; text-align: center;font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0; padding-top: 15px"}" valign="${"top"}">If you received this email by mistake, simply delete it. You won&#39;t be subscribed if you don&#39;t click the confirmation link above.
                                            </td></tr></table></td></tr></table>
                        <div style="${"text-align: center; margin: 0px auto;"}"><ul style="${"list-style: none;display: flex; justify-content: space-evenly; padding-top: 25px;margin-bottom: 20px; padding-left: 0px; font-family: 'Roboto', sans-serif;"}"><li>${validate_component(Link, "Link").$$render($$result, { href: "!#", style: "color: #495057;" }, {}, {
            default: () => {
              return `Help Center`;
            }
          })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "!#", style: "color: #495057;" }, {}, {
            default: () => {
              return `Support 24/7`;
            }
          })}</li>
                                <li>${validate_component(Link, "Link").$$render($$result, { href: "!#", style: "color: #495057;" }, {}, {
            default: () => {
              return `Account`;
            }
          })}</li></ul>
                            <p style="${"font-family: 'Roboto', sans-serif; font-size: 14px;color: #98a6ad; margin: 0px;"}">2022 Velzon. Design &amp; Develop by Themesbrand</p></div></div></td></tr></table>`;
        }
      })}`;
    }
  })}`;
});
export { SubscribeAction as default };
