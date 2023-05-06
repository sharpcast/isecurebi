import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape, e as each } from "./index-584434b3.js";
import { L as Link } from "./Link-71b36253.js";
import { B as Button } from "./Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "./DropdownMenu-36ba586e.js";
import { D as DropdownToggle } from "./DropdownToggle-396a8e94.js";
import "./Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { O as Offcanvas } from "./Offcanvas-493a27d8.js";
import { a as avatar1 } from "./avatar-1-413c6ccd.js";
import { a as avatar2 } from "./avatar-2-5b5618a1.js";
import { a as avatar3 } from "./avatar-3-5bcc58a8.js";
import { a as avatar4 } from "./avatar-4-3a2dbf60.js";
import { a as avatar5 } from "./avatar-5-c7d43f40.js";
import { a as avatar6 } from "./avatar-6-ef07d98c.js";
import { a as avatar7 } from "./avatar-7-46aa251f.js";
import { a as avatar10 } from "./avatar-10-def8cdb7.js";
import { M as MultiUser } from "./multi-user-a29f58d1.js";
import Attachement from "../entries/pages/apps-chat/attachement.svelte.js";
import { i as img9 } from "./img-9-422942e7.js";
import { u as userdummyimg } from "./user-dummy-img-0cebca03.js";
const direactContact = [
  {
    id: 1,
    roomId: 1,
    status: "offline",
    name: "Lisa Parker",
    image: avatar2,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  },
  {
    id: 2,
    roomId: 2,
    status: "offline",
    name: "Frank Thomas",
    image: avatar3,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 8
  },
  {
    id: 3,
    roomId: 3,
    status: "offline",
    name: "Clifford Taylor",
    bgColor: "danger",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  },
  {
    id: 4,
    roomId: 4,
    status: "offline",
    name: "Janette Caster",
    image: avatar4,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  },
  {
    id: 5,
    roomId: 5,
    status: "offline",
    name: "Sarah Beattie",
    image: avatar5,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 5
  },
  {
    id: 6,
    roomId: 6,
    status: "offline",
    name: "Nellie Cornett",
    image: avatar6,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 2
  },
  {
    id: 7,
    roomId: 7,
    status: "offline",
    name: "Chris Kiernan",
    bgColor: "warning",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  },
  {
    id: 8,
    roomId: 8,
    status: "offline",
    name: "Edith Evans",
    bgColor: "info",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  },
  {
    id: 9,
    roomId: 9,
    status: "offline",
    name: "Joseph Siegel",
    image: avatar7,
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA"
  }
];
const channelsList = [
  {
    id: 1,
    name: "Landing Design",
    unReadMessage: 7,
    image: MultiUser
  },
  {
    id: 2,
    name: "General",
    image: MultiUser
  },
  {
    id: 3,
    name: "Project Tasks",
    unReadMessage: 3,
    image: MultiUser
  },
  {
    id: 4,
    name: "Meeting",
    image: MultiUser
  },
  {
    id: 5,
    name: "Reporting",
    image: MultiUser
  }
];
const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 2,
    roomId: 1,
    sender: "Anna Adame",
    message: "Good morning, How are you? What about our next meeting?",
    createdAt: "09:08 am"
  },
  {
    id: 3,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM",
    createdAt: "09:10 am"
  },
  {
    id: 4,
    roomId: 1,
    sender: "Lisa Parker",
    message: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents \u{1F381}.",
    createdAt: "09:10 am"
  },
  {
    id: 5,
    roomId: 1,
    sender: "Anna Adame",
    message: "Wow that's great",
    createdAt: "09:12 am"
  },
  {
    id: 6,
    roomId: 2,
    sender: "Frank Thomas",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 7,
    roomId: 3,
    sender: "Clifford Taylor",
    message: "Hello \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 8,
    roomId: 4,
    sender: "Janette Caster",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 9,
    roomId: 5,
    sender: "Sarah Beattie",
    message: "Hii \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 10,
    roomId: 6,
    sender: "Nellie Cornett",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 11,
    roomId: 7,
    sender: "Chris Kiernan",
    message: "How Are You \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 12,
    roomId: 8,
    sender: "Edith Evans",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  },
  {
    id: 13,
    roomId: 9,
    sender: "Joseph Siegel",
    message: "Good morning \u{1F60A}",
    createdAt: "09:07 am"
  }
];
const attachements = [
  {
    id: 1,
    foldericon: "ri-folder-zip-line",
    foldername: "App pages.zip",
    foldersize: "2.2MB"
  },
  {
    id: 2,
    foldericon: "ri-file-ppt-2-line",
    foldername: "Velzon admin.ppt",
    foldersize: "2.4MB"
  },
  {
    id: 3,
    foldericon: "ri-folder-zip-line",
    foldername: "Images.zip",
    foldersize: "1.2MB"
  },
  {
    id: 4,
    foldericon: "ri-image-2-line",
    foldername: "bg-pattern.png",
    foldersize: "1.1MB"
  }
];
const chatContactData = [
  {
    title: "A",
    contacts: [
      {
        id: 1,
        name: "Alice Cruickshank",
        status: "offline",
        roomId: 5
      }
    ]
  },
  {
    title: "B",
    contacts: [
      {
        id: 1,
        name: "Barrett Brown",
        status: "offline",
        roomId: 1,
        image: avatar4
      }
    ]
  },
  {
    title: "C",
    contacts: [
      {
        id: 1,
        name: "Chris Kiernan",
        status: "offline",
        roomId: 3
      },
      {
        id: 2,
        name: "Clifford Taylor",
        status: "offline",
        roomId: 4
      }
    ]
  },
  {
    title: "E",
    contacts: [
      {
        id: 1,
        name: "Edith Evans",
        status: "offline",
        roomId: 5
      }
    ]
  },
  {
    title: "F",
    contacts: [
      {
        id: 1,
        name: "Frank Thomas",
        status: "offline",
        roomId: 6,
        image: avatar3
      }
    ]
  },
  {
    title: "G",
    contacts: [
      {
        id: 1,
        name: "Gilbert Beer",
        status: "offline",
        roomId: 7
      }
    ]
  },
  {
    title: "J",
    contacts: [
      {
        id: 1,
        name: "Janette Caster",
        status: "offline",
        roomId: 8,
        image: avatar4
      },
      {
        id: 2,
        name: "Joseph Siegel",
        status: "offline",
        roomId: 9,
        image: avatar7
      },
      {
        id: 3,
        name: "Justyn Wisoky",
        status: "offline",
        roomId: 2,
        image: avatar1
      }
    ]
  },
  {
    title: "K",
    contacts: [
      {
        id: 1,
        name: "Keaton King",
        status: "offline",
        roomId: 11,
        image: avatar5
      }
    ]
  },
  {
    title: "L",
    contacts: [
      {
        id: 1,
        name: "Lisa Parker",
        status: "offline",
        roomId: 1,
        image: avatar2
      }
    ]
  },
  {
    title: "M",
    contacts: [
      {
        id: 1,
        name: "Marian Moen",
        status: "offline",
        roomId: 3
      }
    ]
  },
  {
    title: "N",
    contacts: [
      {
        id: 1,
        name: "Nellie Cornett",
        status: "offline",
        roomId: 4,
        image: avatar6
      }
    ]
  },
  {
    title: "R",
    contacts: [
      {
        id: 1,
        name: "Ronald Downey",
        status: "offline",
        roomId: 5
      }
    ]
  },
  {
    title: "S",
    contacts: [
      {
        id: 1,
        name: "Sarah Beattie",
        status: "offline",
        roomId: 6,
        image: avatar5
      }
    ]
  },
  {
    title: "V",
    contacts: [
      {
        id: 1,
        name: "Victor Beahan",
        status: "offline",
        roomId: 7,
        image: avatar10
      }
    ]
  },
  {
    title: "W",
    contacts: [
      {
        id: 1,
        name: "Wayne Runte",
        status: "offline",
        roomId: 8,
        image: avatar2
      }
    ]
  }
];
const MOCK_DATA = {
  direactContact,
  channelsList,
  messages,
  attachements,
  chatContactData
};
const PersonalInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentuser, cuurentiseImg, show, onCloseClick } = $$props;
  if ($$props.currentuser === void 0 && $$bindings.currentuser && currentuser !== void 0)
    $$bindings.currentuser(currentuser);
  if ($$props.cuurentiseImg === void 0 && $$bindings.cuurentiseImg && cuurentiseImg !== void 0)
    $$bindings.cuurentiseImg(cuurentiseImg);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.onCloseClick === void 0 && $$bindings.onCloseClick && onCloseClick !== void 0)
    $$bindings.onCloseClick(onCloseClick);
  return `${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: show,
    placement: "end",
    class: "offcanvas-end border-0 profile-details-canvas"
  }, {}, {
    default: () => {
      return `<div class="${"profile-offcanvas p-0"}"><div class="${"team-cover"}"><img${add_attribute("src", img9, 0)} alt="${""}" class="${"img-fluid"}"></div>
    <div class="${"p-1 pb-4 pt-0"}"><div class="${"team-settings"}"><div class="${"row g-0"}"><div class="${"col"}"><div class="${"btn nav-btn"}">${validate_component(Button, "Button").$$render($$result, {
        color: "",
        class: "btn-close btn-close-white"
      }, {}, {})}</div></div>
          <div class="${"col-auto"}"><div class="${"user-chat-nav d-flex"}"><button type="${"button"}" class="${"btn nav-btn favourite-btn active"}"><i class="${"ri-star-fill"}"></i></button>

              ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
            class: "btn nav-btn p-0 text-white",
            color: "",
            tag: "a"
          }, {}, {
            default: () => {
              return `<i class="${"ri-more-2-fill"}"></i>`;
            }
          })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-inbox-archive-line align-bottom text-muted me-2"}"></i>
                    Archive
                  `;
                }
              })}
                  ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-mic-off-line align-bottom text-muted me-2"}"></i>
                    Muted
                  `;
                }
              })}
                  ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-delete-bin-5-line align-bottom text-muted me-2"}"></i>
                    Delete
                  `;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div></div></div></div>
    <div class="${"p-3 text-center"}">${cuurentiseImg ? `<img${add_attribute("src", cuurentiseImg, 0)} alt="${""}" class="${"avatar-lg img-thumbnail rounded-circle mx-auto"}">` : `<img${add_attribute("src", userdummyimg, 0)} alt="${""}" class="${"avatar-lg img-thumbnail rounded-circle mx-auto"}">`}

      <div class="${"mt-3"}"><h5 class="${"fs-16 mb-1"}">${validate_component(Link, "Link").$$render($$result, {
        href: null,
        class: "link-primary username"
      }, {}, {
        default: () => {
          return `${escape(currentuser)}`;
        }
      })}</h5>
        <p class="${"text-muted"}"><i class="${"ri-checkbox-blank-circle-fill me-1 align-bottom text-success"}"></i>
          Online
        </p></div>
      <div class="${"d-flex gap-2 justify-content-center"}"><button type="${"button"}" class="${"btn avatar-xs p-0"}"><span class="${"avatar-title rounded bg-light text-body"}"><i class="${"ri-question-answer-line"}"></i></span></button>

        <button type="${"button"}" class="${"btn avatar-xs p-0"}"><span class="${"avatar-title rounded bg-light text-body"}"><i class="${"ri-star-line"}"></i></span></button>

        <button type="${"button"}" class="${"btn avatar-xs p-0"}"><span class="${"avatar-title rounded bg-light text-body"}"><i class="${"ri-phone-line"}"></i></span></button>

        ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
            class: "btn avatar-xs p-0",
            color: "",
            tag: "a"
          }, {}, {
            default: () => {
              return `<span class="${"avatar-title bg-light text-body rounded"}"><i class="${"ri-more-fill"}"></i></span>`;
            }
          })}
          ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-end" }, {}, {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-inbox-archive-line align-bottom text-muted me-2"}"></i>
              Archive
            `;
                }
              })}
            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-mic-off-line align-bottom text-muted me-2"}"></i>
              Muted
            `;
                }
              })}
            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#!" }, {}, {
                default: () => {
                  return `<i class="${"ri-delete-bin-5-line align-bottom text-muted me-2"}"></i>
              Delete
            `;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>
    <div class="${"border-top border-top-dashed p-3"}"><h5 class="${"fs-15 mb-3"}">Personal Details</h5>
      <div class="${"mb-3"}"><p class="${"text-muted text-uppercase fw-medium fs-12 mb-1"}">Number</p>
        <h6>+(256) 2451 8974</h6></div>
      <div class="${"mb-3"}"><p class="${"text-muted text-uppercase fw-medium fs-12 mb-1"}">Email</p>
        <h6>lisaparker@gmail.com</h6></div>
      <div><p class="${"text-muted text-uppercase fw-medium fs-12 mb-1"}">Location</p>
        <h6 class="${"mb-0"}">California, USA</h6></div></div>

    <div class="${"border-top border-top-dashed p-3"}"><h5 class="${"fs-15 mb-3"}">Attached Files</h5>

      <div class="${"vstack gap-2"}">${each(MOCK_DATA.attachements, (attachement) => {
        return `${validate_component(Attachement, "Attachements").$$render($$result, { attachement }, {}, {})}`;
      })}

        <div class="${"text-center mt-2"}"><button type="${"button"}" class="${"btn btn-danger"}">Load more${escape(" ")}
            <i class="${"ri-arrow-right-fill align-bottom ms-1"}"></i></button></div></div></div></div>`;
    }
  })}`;
});
export { MOCK_DATA as M, PersonalInfo as P };
