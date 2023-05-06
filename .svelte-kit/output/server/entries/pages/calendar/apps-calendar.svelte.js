import { c as create_ssr_component, d as add_attribute, v as validate_component, e as each, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { C as CalendarIcon } from "../../../chunks/CalendarIcon-5213eb98.js";
import { C as CDeleteModal } from "../../../chunks/CDeleteModal-5ffe0ce6.js";
import UpcommingEvents from "./UpcommingEvents.svelte.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import "../../../chunks/Portal-94847a25.js";
const FullCalendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canBeInitiated;
  let { class: classes = null } = $$props;
  let { style = null } = $$props;
  let { options } = $$props;
  function getAPI() {
    return calendar;
  }
  let calendarEl;
  let calendar;
  function initCalendar() {
    calendar = new Calendar(calendarEl, options);
    calendar.render();
  }
  function updateCalendarOptions() {
    calendar.pauseRendering();
    calendar.resetOptions(options);
    calendar.resumeRendering();
  }
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.getAPI === void 0 && $$bindings.getAPI && getAPI !== void 0)
    $$bindings.getAPI(getAPI);
  canBeInitiated = options && options.plugins && options.plugins.length && calendarEl && !calendar;
  {
    {
      if (calendar && options && options.plugins && options.plugins.length)
        updateCalendarOptions();
      if (canBeInitiated) {
        initCalendar();
      }
    }
  }
  return `<div${add_attribute("class", classes, 0)}${add_attribute("style", style, 0)}${add_attribute("this", calendarEl, 0)}></div>`;
});
const Draggable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = null } = $$props;
  let { style = null } = $$props;
  let { appendTo = null } = $$props;
  let { eventData } = $$props;
  let { itemSelector = null } = $$props;
  let { longPressDelay = null } = $$props;
  let { minDistance = null } = $$props;
  let elementRef = null;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.appendTo === void 0 && $$bindings.appendTo && appendTo !== void 0)
    $$bindings.appendTo(appendTo);
  if ($$props.eventData === void 0 && $$bindings.eventData && eventData !== void 0)
    $$bindings.eventData(eventData);
  if ($$props.itemSelector === void 0 && $$bindings.itemSelector && itemSelector !== void 0)
    $$bindings.itemSelector(itemSelector);
  if ($$props.longPressDelay === void 0 && $$bindings.longPressDelay && longPressDelay !== void 0)
    $$bindings.longPressDelay(longPressDelay);
  if ($$props.minDistance === void 0 && $$bindings.minDistance && minDistance !== void 0)
    $$bindings.minDistance(minDistance);
  return `<div${add_attribute("class", classes, 0)}${add_attribute("style", style, 0)}${add_attribute("this", elementRef, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
const defaultevent = [
  {
    "id": 1,
    "title": "World Braille Day",
    "start": "2022-01-01T00:00:00.000Z",
    "end": "2022-01-08T00:00:00.000",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 2,
    "title": "World Leprosy Day",
    "start": "2022-05-04",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 3,
    "title": "International Mother Language Day",
    "start": "2022-02-21",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 4,
    "title": "International Women's Day",
    "start": "2022-03-08",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 5,
    "title": "World Thinking Day",
    "start": "2022-02-22",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 6,
    "title": "International Mother Language Day",
    "start": "2022-03-21",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 7,
    "title": "World Water Day",
    "start": "2022-03-22",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 8,
    "title": "World Health Day",
    "start": "2022-04-07",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 9,
    "title": "International Special Librarians Day",
    "start": "2022-04-16",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  },
  {
    "id": 10,
    "title": "Earth Day",
    "start": "2022-04-22",
    "className": "bg-soft-info",
    "allDay": true,
    "description": "N.A.",
    "location": "N.A."
  }
];
const events = [
  {
    id: 153,
    title: "All Day Event",
    start: new Date(y, m, 1),
    className: "bg-soft-primary",
    location: "San Francisco, US",
    allDay: false,
    extendedProps: {
      department: "All Day Event"
    },
    description: "An all-day event is an event that lasts an entire day or longer"
  },
  {
    id: 136,
    title: "Visit Online Course",
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    allDay: false,
    className: "bg-soft-warning",
    location: "San Francisco, US",
    extendedProps: {
      department: "Long Event"
    },
    description: "Long Term Event means an incident that last longer than 12 hours."
  },
  {
    id: 999,
    title: "Client Meeting with Alexis",
    start: new Date(y, m, d + 22, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: false,
    className: "bg-soft-danger",
    location: "California, US",
    extendedProps: {
      department: "Meeting with Alexis"
    },
    description: "A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction, such as sharing information or reaching agreement."
  },
  {
    id: 991,
    title: "Repeating Event",
    start: new Date(y, m, d + 4, 16, 0),
    end: new Date(y, m, d + 9, 16, 0),
    allDay: false,
    className: "bg-soft-primary",
    location: "Las Vegas, US",
    extendedProps: {
      department: "Repeating Event"
    },
    description: "A recurring or repeating event is simply any event that you will occur more than once on your calendar. "
  },
  {
    id: 112,
    title: "Meeting With Designer",
    start: new Date(y, m, d, 12, 30),
    allDay: false,
    className: "bg-soft-success",
    location: "Head Office, US",
    extendedProps: {
      department: "Meeting"
    },
    description: "Tell how to boost website traffic"
  },
  {
    id: 113,
    title: "Weekly Strategy Planning",
    start: new Date(y, m, d + 9),
    end: new Date(y, m, d + 11),
    allDay: false,
    className: "bg-soft-danger",
    location: "Head Office, US",
    extendedProps: {
      department: "Lunch"
    },
    description: "Strategies for Creating Your Weekly Schedule"
  },
  {
    id: 875,
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    allDay: false,
    className: "bg-soft-success",
    location: "Los Angeles, US",
    extendedProps: {
      department: "Birthday Party"
    },
    description: "Family slumber party \u2013 Bring out the blankets and pillows and have a family slumber party! Play silly party games, share special snacks and wind down the fun with a special movie."
  },
  {
    id: 783,
    title: "Click for Google",
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: "http://google.com/",
    className: "bg-soft-dark"
  },
  {
    id: 456,
    title: "Velzon Project Discussion with Team",
    start: new Date(y, m, d + 23, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: false,
    className: "bg-soft-info",
    location: "Head Office, US",
    extendedProps: {
      department: "Discussion"
    },
    description: "Tell how to boost website traffic"
  }
];
const calenderDefaultCategories = [
  {
    id: 1,
    title: "New Event Planning",
    type: "success"
  },
  {
    id: 2,
    title: "Meeting",
    type: "info"
  },
  {
    id: 3,
    title: "Generating Reports",
    type: "warning"
  },
  {
    id: 4,
    title: "Create New theme",
    type: "danger"
  }
];
const MOCK_DATA = {
  calenderDefaultCategories,
  events,
  defaultevent
};
let calendarWeekends = true;
const Apps_calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  let calendarComponentRef;
  let modalcategory = false;
  let setEvent = {};
  let isedit = false;
  let deleteModal = false;
  const toggle = () => {
    isOpen = !isOpen;
    if (!isOpen) {
      setTimeout(() => {
        setEvent = {};
        isedit = false;
      }, 500);
    }
  };
  const eventData1 = {
    id: Math.floor(Math.random() * 100),
    title: "New Event Planning",
    start: new Date(),
    allDay: false,
    class: "bg-success text-white"
  };
  const eventData2 = {
    id: Math.floor(Math.random() * 100),
    title: "Meeting",
    start: new Date(),
    allDay: false,
    class: "bg-info text-white"
  };
  const eventData3 = {
    id: Math.floor(Math.random() * 100),
    title: "Generating Reports",
    start: new Date(),
    allDay: false,
    class: "bg-warning text-white"
  };
  const eventData4 = {
    id: Math.floor(Math.random() * 100),
    title: "Create New theme",
    start: new Date(),
    allDay: false,
    class: "bg-danger text-white"
  };
  function handleDateClick(arg) {
    toggle();
  }
  let options = {
    plugins: [BootstrapTheme, dayGridPlugin, interactionPlugin],
    events: MOCK_DATA.events,
    weekends: { calendarWeekends },
    themeSystem: "bootstrap",
    handleWindowResize: true,
    slotDuration: "00:15:00",
    editable: true,
    droppable: true,
    selectable: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay"
    },
    dateClick: (event) => handleDateClick(event.dateStr),
    eventClick: (event) => handleEventClick(event)
  };
  const handleEventClick = (arg) => {
    const event = arg.event;
    setEvent = {
      id: parseInt(event.id),
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0]
    };
    isedit = true;
    toggle();
  };
  const toggleCategory = () => {
    modalcategory = !modalcategory;
  };
  const handleDeleteEvent = () => {
    var calendarEvents = MOCK_DATA.events.filter((e, i) => {
      return e.id !== setEvent.id;
    });
    calendarEvents = [...calendarEvents];
    options = { ...options, events: calendarEvents };
    setDeleteModal(false);
    toggle();
  };
  const setDeleteModal = (status) => {
    deleteModal = status;
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Calendar | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(CDeleteModal, "CDeleteModal").$$render($$result, {
      show: deleteModal,
      onDeleteClick: handleDeleteEvent,
      onCloseClick: () => setDeleteModal(false)
    }, {}, {})}

<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
      default: () => {
        return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Calendar", pageTitle: "Apps" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Col, "Col").$$render($$result, { xl: 3 }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, { class: "card-h-100" }, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                              default: () => {
                                return `<button class="${"btn btn-primary w-100"}" id="${"btn-new-event"}"><i class="${"mdi mdi-plus"}"></i> Create New Event
								</button>

								<div id="${"external-events"}"><br>
									<p class="${"text-muted"}">Drag and drop your event or click in the
										calendar
									</p>
									${validate_component(Draggable, "Draggable").$$render($$result, {
                                  eventData: eventData1,
                                  class: "draggable"
                                }, {}, {
                                  default: () => {
                                    return `<div class="${"bg-soft-success external-event fc-event text-success"}"><i class="${"mdi mdi-checkbox-blank-circle font-size-11 me-2"}"></i>
											New Event Planning
										</div>`;
                                  }
                                })}

									${validate_component(Draggable, "Draggable").$$render($$result, {
                                  eventData: eventData2,
                                  class: "draggable"
                                }, {}, {
                                  default: () => {
                                    return `<div class="${"bg-soft-info external-event fc-event text-info"}"><i class="${"mdi mdi-checkbox-blank-circle font-size-11 me-2"}"></i>
											Meeting
										</div>`;
                                  }
                                })}

									${validate_component(Draggable, "Draggable").$$render($$result, {
                                  eventData: eventData3,
                                  class: "draggable"
                                }, {}, {
                                  default: () => {
                                    return `<div class="${"bg-soft-warning external-event fc-event text-warning"}"><i class="${"mdi mdi-checkbox-blank-circle font-size-11 me-2"}"></i>
											Generating Reports
										</div>`;
                                  }
                                })}

									${validate_component(Draggable, "Draggable").$$render($$result, {
                                  eventData: eventData4,
                                  class: "draggable"
                                }, {}, {
                                  default: () => {
                                    return `<div class="${"bg-soft-danger external-event fc-event text-danger"}"><i class="${"mdi mdi-checkbox-blank-circle font-size-11 me-2"}"></i>
											Create New theme
										</div>`;
                                  }
                                })}</div>`;
                              }
                            })}`;
                          }
                        })}
						<div><h5 class="${"mb-1"}">Upcoming Events</h5>
							<p class="${"text-muted"}">Don&#39;t miss scheduled events
							</p>
							<div class="${"pe-2 me-n1 mb-3"}" data-simplebar style="${"height: 400px"}"><div id="${"upcoming-event-list"}">${MOCK_DATA.defaultevent ? `${each(MOCK_DATA.defaultevent, (event) => {
                          return `${validate_component(UpcommingEvents, "UpcommingEvents").$$render($$result, { event }, {}, {})}`;
                        })}` : ``}</div></div></div>
						${validate_component(Card, "Card").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "bg-soft-info" }, {}, {
                              default: () => {
                                return `<div class="${"d-flex"}"><div class="${"flex-shrink-0"}">${validate_component(CalendarIcon, "CalendarIcon").$$render($$result, {
                                  class: "text-info icon-dual-info",
                                  size: "24"
                                }, {}, {})}</div>
									<div class="${"flex-grow-1 ms-3"}"><h6 class="${"fs-15"}">Welcome to your Calendar!
										</h6>
										<p class="${"text-muted mb-0"}">Event that applications book will
											appear here. Click on an event to
											see the details and manage
											applicants event.
										</p></div></div>`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}
					${validate_component(Col, "Col").$$render($$result, { xl: 9 }, {}, {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render($$result, { className: "card-h-100" }, {}, {
                          default: () => {
                            return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(FullCalendar, "FullCalendar").$$render($$result, { options, this: calendarComponentRef }, {
                                  this: ($$value) => {
                                    calendarComponentRef = $$value;
                                    $$settled = false;
                                  }
                                }, {})}`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>
${validate_component(Modal, "Modal").$$render($$result, { isOpen }, {}, {
      default: () => {
        return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggle, tag: "h4" }, {}, {
          default: () => {
            return `${escape(!!isedit ? "Edit Event" : "Add Event")}`;
          }
        })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
          default: () => {
            return `<form>${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                  default: () => {
                    return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "title" }, {}, {
                      default: () => {
                        return `Event Name`;
                      }
                    })}
						<input type="${"text"}" class="${"form-control"}" name="${"title"}" placeholder="${"Event Name"}"${add_attribute("value", setEvent && setEvent.title ? setEvent.title : "", 0)}></div>`;
                  }
                })}
				${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                  default: () => {
                    return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "category" }, {}, {
                      default: () => {
                        return `Category`;
                      }
                    })}
						<select name="${"category"}" class="${"form-control form-select"}" placeholder="${"Select Category"}"${add_attribute("value", setEvent ? setEvent.category : "bg-primary", 0)}><option value="${"bg-soft-danger"}">Danger</option><option value="${"bg-soft-success"}">Success</option><option value="${"bg-soft-primary"}">Primary</option><option value="${"bg-soft-info"}">Info</option><option value="${"bg-soft-dark"}">Dark</option><option value="${"bg-soft-warning"}">Warning</option></select></div>`;
                  }
                })}`;
              }
            })}
			${validate_component(Row, "Row").$$render($$result, { class: "mt-2" }, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, { xs: "12", class: "text-end" }, {}, {
                  default: () => {
                    return `${!!isedit ? `<button type="${"button"}" class="${"btn btn-danger"}">Delete</button>` : ``}
					<button type="${"button"}" class="${"btn btn-light me-2"}">Close
					</button>
					<button type="${"submit"}" class="${"btn btn-success save-event"}">Save
					</button>`;
                  }
                })}`;
              }
            })}</form>`;
          }
        })}`;
      }
    })}

${validate_component(Modal, "Modal").$$render($$result, { isOpen: modalcategory }, {}, {
      default: () => {
        return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { toggleCategory, tag: "h4" }, {}, {
          default: () => {
            return `${escape(!!isedit ? "Edit Event" : "Add Event")}`;
          }
        })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
          default: () => {
            return `<form>${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                  default: () => {
                    return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "title" }, {}, {
                      default: () => {
                        return `Event title`;
                      }
                    })}

						<input type="${"text"}" class="${"form-control"}" name="${"title"}" placeholder="${"Event Name"}" value="${""}"></div>`;
                  }
                })}
				${validate_component(Col, "Col").$$render($$result, { class: "col-12" }, {}, {
                  default: () => {
                    return `<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "category" }, {}, {
                      default: () => {
                        return `Category`;
                      }
                    })}
						<select name="${"category"}" class="${"form-control form-select"}" placeholder="${"Select Category"}"><option value="${"bg-soft-danger"}">Danger</option><option value="${"bg-soft-success"}">Success</option><option value="${"bg-soft-primary"}">Primary</option><option value="${"bg-soft-info"}">Info</option><option value="${"bg-soft-dark"}">Dark</option><option value="${"bg-soft-warning"}">Warning</option></select></div>`;
                  }
                })}`;
              }
            })}
			${validate_component(Row, "Row").$$render($$result, { class: "mt-2" }, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, { xs: "12", class: "text-end" }, {}, {
                  default: () => {
                    return `<button type="${"button"}" class="${"btn btn-light me-2"}">Close
					</button>

					<button type="${"submit"}" class="${"btn btn-success save-event"}">Save
					</button>`;
                  }
                })}`;
              }
            })}</form>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Apps_calendar as default };
