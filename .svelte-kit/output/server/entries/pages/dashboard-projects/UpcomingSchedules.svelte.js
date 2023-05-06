import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { F as Flatpickr } from "../../../chunks/Flatpickr-9498e32b.js";
const UpcomingSchedules = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-xxl-4"}"><div class="${"card"}"><div class="${"card-header border-0"}"><h4 class="${"card-title mb-0"}">Upcoming Schedules</h4></div>
        <div class="${"card-body pt-0"}"><div class="${"upcoming-scheduled"}">${validate_component(Flatpickr, "Flatpickr").$$render($$result, {
    class: "form-control",
    options: { dateFormat: "d M, Y", inline: true }
  }, {}, {})}</div>

            <h6 class="${"text-uppercase fw-semibold mt-4 mb-3 text-muted"}">Events:</h6>
            <div class="${"mini-stats-wid d-flex align-items-center mt-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><span class="${"mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"}">09
                    </span></div>
                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Development planning</h6>
                    <p class="${"text-muted mb-0"}">iTest Factory </p></div>
                <div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">9:20 <span class="${"text-uppercase"}">am</span></p></div></div>
            <div class="${"mini-stats-wid d-flex align-items-center mt-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><span class="${"mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"}">12
                    </span></div>
                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Design new UI and check sales</h6>
                    <p class="${"text-muted mb-0"}">Meta4Systems</p></div>
                <div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">11:30 <span class="${"text-uppercase"}">am</span></p></div></div>
            <div class="${"mini-stats-wid d-flex align-items-center mt-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><span class="${"mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"}">25
                    </span></div>
                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Weekly catch-up </h6>
                    <p class="${"text-muted mb-0"}">Nesta Technologies</p></div>
                <div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">02:00 <span class="${"text-uppercase"}">pm</span></p></div></div>
            <div class="${"mini-stats-wid d-flex align-items-center mt-3"}"><div class="${"flex-shrink-0 avatar-sm"}"><span class="${"mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"}">27
                    </span></div>
                <div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">James Bangs (Client) Meeting</h6>
                    <p class="${"text-muted mb-0"}">Nesta Technologies</p></div>
                <div class="${"flex-shrink-0"}"><p class="${"text-muted mb-0"}">03:45 <span class="${"text-uppercase"}">pm</span></p></div></div>

            <div class="${"mt-3 text-center"}"><a${add_attribute("href", null, 0)} class="${"text-muted text-decoration-underline"}">View all Events</a></div></div></div></div>`;
});
export { UpcomingSchedules as default };
