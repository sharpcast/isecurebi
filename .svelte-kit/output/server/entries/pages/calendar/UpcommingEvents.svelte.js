import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
const UpcommingEvents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  const getTime = (params) => {
    params = new Date(params);
    if (params.getHours() != null) {
      const hour = params.getHours();
      const minute = params.getMinutes() ? params.getMinutes() : "00";
      return hour + ":" + minute;
    }
  };
  const tConvert = (time) => {
    const t = time.split(":");
    var hours = t[0];
    var minutes = t[1];
    var newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + newformat;
  };
  const str_dt = function formatDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var d = new Date(date), month = "" + monthNames[d.getMonth()], day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
      month = "0" + month;
    if (day.length < 2)
      day = "0" + day;
    return [day + " " + month, year].join(",");
  };
  const category = event.className.split("-");
  var e_dt = event.end ? event.end : null;
  if (e_dt === "Invalid Date" || e_dt === void 0) {
    e_dt = null;
  } else {
    const newDate = new Date(e_dt).toLocaleDateString("en", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    e_dt = new Date(newDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }).split(" ").join(" ");
  }
  const st_date = event.start ? str_dt(event.start) : null;
  const ed_date = event.end ? str_dt(event.end) : null;
  if (st_date === ed_date) {
    e_dt = null;
  }
  var startDate = event.start;
  if (startDate === "Invalid Date" || startDate === void 0) {
    startDate = null;
  } else {
    const newDate = new Date(startDate).toLocaleDateString("en", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    startDate = new Date(newDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }).split(" ").join(" ");
  }
  var end_dt = e_dt ? " to " + e_dt : "";
  var e_time_s = tConvert(getTime(event.start));
  var e_time_e = tConvert(getTime(event.end));
  if (e_time_s === e_time_e) {
    e_time_s = "Full day event";
    e_time_e = null;
  }
  e_time_e = e_time_e ? " to " + e_time_e : "";
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  return `${validate_component(Card, "Card").$$render($$result, { class: "mb-3 h-auto" }, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"d-flex mb-3"}"><div class="${"flex-grow-1"}"><i${add_attribute("class", "mdi mdi-checkbox-blank-circle me-2 text-" + category[2], 0)}></i>
				<span class="${"fw-medium"}">${escape(startDate)}
					${escape(end_dt)}</span></div>
			<div class="${"flex-shrink-0"}"><small class="${"badge badge-soft-primary ms-auto"}">${escape(e_time_s)}
					${escape(e_time_e)}</small></div></div>
		<h6 class="${"card-title fs-16"}">${escape(event.title)}</h6>
		<p class="${"text-muted text-truncate-two-lines mb-0"}">${escape(event.description)}</p>`;
        }
      })}`;
    }
  })}`;
});
export { UpcommingEvents as default };
