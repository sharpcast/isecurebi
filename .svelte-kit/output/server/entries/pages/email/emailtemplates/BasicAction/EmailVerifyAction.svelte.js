import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index-584434b3.js";
import { C as Col } from "../../../../../chunks/Col-cf9b7547.js";
import "../../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../../../chunks/Link-71b36253.js";
import { l as logo_dark } from "../../../../../chunks/logo-dark-ec4d2828.js";
const EmailVerifyAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
        default: () => {
          return `<div class="${"justify-content-between d-flex align-items-center mt-3 mb-4"}"><h5 class="${"mb-0 pb-1 text-decoration-underline"}">Email Verify Action</h5></div>`;
        }
      })}

    ${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
        default: () => {
          return `<table class="${"body-wrap"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;"}"><tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"}" valign="${"top"}"></td>
                <td class="${"container"}" width="${"600"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"}" valign="${"top"}"><div class="${"content"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;"}"><table class="${"main"}" width="${"100%"}" cellpadding="${"0"}" cellspacing="${"0"}" itemprop="${"action"}" itemscope itemtype="${"http://schema.org/ConfirmAction"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;"}"><tr style="${"font-family: 'Roboto', sans-serif; font-size: 14px; margin: 0;"}"><td class="${"content-wrap"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 3px 15px rgba(30,32,37,.06); ;border-radius: 7px; background-color: #fff;"}" valign="${"top"}"><meta itemprop="${"name"}" content="${"Confirm Email"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}">
                                    <table width="${"100%"}" cellpadding="${"0"}" cellspacing="${"0"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"}" valign="${"top"}"><div style="${"text-align: center;margin-bottom: 15px;"}"><img${add_attribute("src", logo_dark, 0)} alt="${""}" height="${"23"}"></div></td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 24px; vertical-align: top; margin: 0; padding: 0 0 10px; text-align: center;"}" valign="${"top"}"><h4 style="${"font-family: 'Roboto', sans-serif; font-weight: 500;"}">Please Verify your email</h4></td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"font-family: 'Roboto', sans-serif; color: #878a99; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 26px; text-align: center;"}" valign="${"top"}">Yes, we know
                                                <p style="${"margin-bottom: 13px;"}">An email to verify an email.</p>
                                                <p style="${"margin-bottom: 0;"}">Please validate your email address in order to get started using product.</p></td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" itemprop="${"handler"}" itemscope itemtype="${"http://schema.org/HttpActionHandler"}" style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 22px; text-align: center;"}" valign="${"top"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            itemprop: "url",
            style: "font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: .8125rem; color: #FFF; text-decoration: none; font-weight: 400; text-align: center; cursor: pointer; display: inline-block; border-radius: .25rem; text-transform: capitalize; background-color: #405189; margin: 0; border-color: #405189; border-style: solid; border-width: 1px; padding: .5rem .9rem;"
          }, {}, {
            default: () => {
              return `Verify Your Email`;
            }
          })}</td></tr>
                                        <tr style="${"font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"}"><td class="${"content-block"}" style="${"color: #878a99; text-align: center;font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0; padding-top: 5px"}" valign="${"top"}"><p style="${"margin-bottom: 10px;"}">Or verify using this link: </p>
                                                ${validate_component(Link, "Link").$$render($$result, {
            href: "https://themesbrand.com/velzon/",
            target: "_blank"
          }, {}, {
            default: () => {
              return `https://themesbrand.com/velzon/`;
            }
          })}</td></tr></table></td></tr></table>
                        <div style="${"text-align: center; margin: 25px auto 0px auto;font-family: 'Roboto', sans-serif;"}"><h4 style="${"font-weight: 500; line-height: 1.5;font-family: 'Roboto', sans-serif;"}">Need Help ?</h4>
                            <p style="${"color: #878a99; line-height: 1.5;"}">Please send and feedback or bug info to ${validate_component(Link, "Link").$$render($$result, { href: "!#", style: "font-weight: 500;" }, {}, {
            default: () => {
              return `info@velzon.com`;
            }
          })}</p>
                            <p style="${"font-family: 'Roboto', sans-serif; font-size: 14px;color: #98a6ad; margin: 0px;"}">2022 Velzon. Design &amp; Develop by Themesbrand</p></div></div></td></tr></table>`;
        }
      })}`;
    }
  })}`;
});
export { EmailVerifyAction as default };
