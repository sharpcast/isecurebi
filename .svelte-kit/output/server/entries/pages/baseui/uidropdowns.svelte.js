import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { D as Dropdown, a as DropdownMenu, b as DropdownItem } from "../../../chunks/DropdownMenu-36ba586e.js";
import { B as ButtonGroup } from "../../../chunks/ButtonGroup-50e6fe93.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { D as DropdownToggle } from "../../../chunks/DropdownToggle-396a8e94.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { N as Nav } from "../../../chunks/Nav-20bf87e5.js";
import { N as NavItem } from "../../../chunks/NavItem-0af381c7.js";
import { N as NavLink } from "../../../chunks/NavLink-7c96aa43.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as TabContent, a as TabPane } from "../../../chunks/TabPane-b01382c8.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/index-bddc6f42.js";
import "../../../chunks/CardHeader-84e061db.js";
var bell = "/_app/assets/bell-cd010907.svg";
const Uidropdowns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = 1;
  let NotificationTab = 1;
  let Notification1Tab = 1;
  const singleButtonDropdownCode = `
<!-- Single Button Dropdown -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
		id="dropdownMenuButton"
	>
		Dropdown button <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="a"
		class="btn btn-secondary"
	>
		Dropdown link <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
`;
  const colorDropdownCode = `
<!-- Dropdown Variant -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-primary"
	>
		Primary <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-success"
	>
		Success <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
	>
		Light <i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-info"
	>
		Info <i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Secondary <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-warning"
	>
		Warning <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-danger"
	>
		Danger <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-dark"
	>
		Dark <i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>
`;
  const splitButtonDropdownCode = `
<!-- Split Button Dropdown -->
<ButtonGroup>
	<Dropdown>
		<Button color="primary">Primary</Button>
		<DropdownToggle
			tag="button"
			color="primary"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="success">Success</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-success"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="light">Light</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-light"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="info">Info</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-info"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="secondary"
			>Secondary</Button
		>
		<DropdownToggle
			tag="button"
			class="btn btn-secondary"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="warning">Warning</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-warning"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="danger">Danger</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-danger"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<ButtonGroup>
	<Dropdown>
		<Button color="dark">Dark</Button>
		<DropdownToggle
			tag="button"
			class="btn btn-dark"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>
`;
  const sizingDropdownCode = `
<!-- Dropdown Sizing -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-primary btn-lg"
	>
		Large button <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>

<ButtonGroup>
	<Dropdown>
		<Button color="light" class="btn-lg"
			>Large split button</Button
		>
		<DropdownToggle
			tag="button"
			class="btn btn-light btn-lg"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-primary btn-sm"
	>
		Small button <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>

<ButtonGroup>
	<Dropdown>
		<Button color="light" class="btn-sm"
			>Small split button</Button
		>
		<DropdownToggle
			tag="button"
			class="btn btn-light btn-sm"
			split
		/>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>
`;
  const darkDropdownCode = `
<!-- Dark Dropdowns -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
		id="dropdownMenuButton2"
	>
		Dropdown button <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-dark">
		<DropdownItem active>Action</DropdownItem>
		<DropdownItem>Another action</DropdownItem>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem>Separated link</DropdownItem>
	</DropdownMenu>
</Dropdown>
`;
  const alignDropdownCode = `
<!-- Alignment options -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
		id="dropdownMenuButton"
	>
		Dropdown <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Right-aligned menu <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu end={true}>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Left-aligned, right-aligned lg <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu
		class="dropdown-menu-lg-end"
		end={true}
	>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Right-aligned, left-aligned lg <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu
		class="dropdown-menu-lg-start"
	>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown direction="start">
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Dropstart <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown direction="end">
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Dropend <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown direction="up">
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
	>
		Dropup<i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>
`;
  const optionDropdownCode = `
<!-- Dropdown Options -->
<Dropdown class="me-1">
	<DropdownToggle
		tag="button"
		class="btn btn-secondary"
		id="dropdownMenuOffset"
	>
		Dropup<i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
	</DropdownMenu>
</Dropdown>

<ButtonGroup>
	<Dropdown>
		<Button color="secondary"
			>Reference</Button
		>
		<DropdownToggle
			tag="button"
			class="btn btn-secondary"
			id="dropdownMenuReference"
			split
		>
			<span class="visually-hidden"
				>Toggle Dropdown</span
			>
		</DropdownToggle>
		<DropdownMenu>
			<DropdownItem>Action</DropdownItem>
			<DropdownItem
				>Another action</DropdownItem
			>
			<DropdownItem
				>Something else here</DropdownItem
			>
			<DropdownItem divider />
			<DropdownItem
				>Separated link</DropdownItem
			>
		</DropdownMenu>
	</Dropdown>
</ButtonGroup>
`;
  const autoCloseDropdownCode = `
<!-- Default dropdown -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
	>
		Default dropdown <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
	>
		Clickable outside <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
		id="dropdownMenuClickableInside"
	>
		Clickable inside <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
		id="dropdownMenuClickable"
	>
		Manual close <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
		<DropdownItem>Menu item</DropdownItem>
	</DropdownMenu>
</Dropdown>
`;
  const menuItemDropdownCode = `
<!-- Dropdown Menu Item Color -->
<Row>
	<Col xxl={3}>
		<div>
			<h6 class="font-size-13 mb-3">
				Dropdown Menu Success link example
			</h6>
			<div class="clearfix">
				<div
					class="dropdown-menu d-inline-block position-relative dropdownmenu-success"
					style="z-index: 1"
				>
					<Link
						href="#!"
						class="dropdown-item"
						>Action</Link>
					<Link
						href="#!"
						class="dropdown-item"
						>Another action</Link>
					<Link
						href="#!"
						class="dropdown-item active"
						>Something else here</Link>
					<div class="dropdown-divider" />
					<Link
						href="#!"
						class="dropdown-item"
						>Separated link</Link>
				</div>
			</div>
		</div>
	</Col>

	<Col lg={9}>
		<div class="mt-lg-0 mt-3">
			<h6 class="font-size-13 mb-0">
				Dropdown Menu link Color example
			</h6>
			<div>
				<Row>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu
								Primary link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-primary"
								>
									Primary <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-primary"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu
								Secondary link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-secondary"
								>
									Secondary <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-secondary"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu
								Success link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-success"
								>
									Success <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-success"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu
								Warning link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-warning"
								>
									Warning <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-warning"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu Info
								link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-info"
								>
									Info <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-info"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col lg={4} sm={6}>
						<div class="mt-3">
							<p
								class="font-size-13 mb-2">
								Dropdown menu Danger
								link
							</p>
							<Dropdown>
								<DropdownToggle
									tag="button"
									class="btn btn-danger"
								>
									Danger <i
										class="mdi mdi-chevron-down"
									/>
								</DropdownToggle>
								<DropdownMenu
									class="dropdownmenu-danger"
								>
									<DropdownItem
										>Action</DropdownItem
									>
									<DropdownItem
										>Another
										action</DropdownItem
									>
									<DropdownItem
										>Something
										else here</DropdownItem
									>
									<DropdownItem
										divider
									/>
									<DropdownItem
										>Separated
										link</DropdownItem
									>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	</Col>
	</Row>
`;
  const menuContentDropdownCode = `
<!-- Menu Content -->
<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-primary"
	>
		Header <i
			class="mdi mdi-chevron-down"
		/>
	</DropdownToggle>
	<DropdownMenu>
		<div class="dropdown-header noti-title">
			<h5
				class="fs-13 text-muted text-truncate mb-0"
			>
				Welcome Jessie!
			</h5>
		</div>
		<DropdownItem>Action</DropdownItem>
		<DropdownItem
			>Another action</DropdownItem
		>
		<DropdownItem
			>Something else here</DropdownItem
		>
		<DropdownItem divider />
		<DropdownItem
			>Separated link</DropdownItem
		>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-success"
	>
		Text <i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-md p-3">
		<p>
			Some example text that's
			free-flowing within the dropdown
			menu.
		</p>
		<p class="mb-0">
			And this is more example text.
		</p>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	<DropdownToggle
		tag="button"
		class="btn btn-light"
	>
		Forms <i class="mdi mdi-chevron-down" />
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-md p-4">
		<form>
			<div class="mb-2">
				<Label
					class="form-label"
					for="exampleDropdownFormEmail">Email address</Label
				>
				<input
					type="email"
					class="form-control"
					id="exampleDropdownFormEmail"
					placeholder="email@example.com"
				/>
			</div>
			<div class="mb-2">
				<Label
					class="form-label"
					for="exampleDropdownFormPassword">Password</Label
				>
				<input
					type="password"
					class="form-control"
					id="exampleDropdownFormPassword"
					placeholder="Password"
				/>
			</div>
			<div class="mb-2">
				<div
					class="form-check custom-checkbox"
				>
					<input
						type="checkbox"
						class="form-check-input"
						id="rememberdropdownCheck"
					/>
					<Label
						class="form-check-label"
						for="rememberdropdownCheck"
						>Remember me</Label>
				</div>
			</div>
			<Button
				type="submit"
				class="btn btn-primary"
				>Sign in</Button
			>
		</form>
	</DropdownMenu>
</Dropdown>
`;
  const notificationDropdownCode = `
<!-- Notifications -->
<Row class="g-3">
	<Col xxl={3} lg={5} md={6}>
		<div
			class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
			aria-labelledby="page-header-notifications-dropdown"
			style="z-index: 1"
		>
			<div
				class="dropdown-head bg-primary bg-pattern rounded-top overflow-hidden"
			>
				<div class="p-3">
					<Row class="align-items-center">
						<Col>
							<h6
								class="m-0 fs-16 fw-semibold text-white">
								Notifications
							</h6>
						</Col>
						<div class="col-auto dropdown-tabs"
						>
							<span
								class="badge badge-soft-light fs-13">>4 New</span
							>
						</div>
					</Row>
				</div>

				<div class="px-2 pt-2">
					<Nav
						tabs
						class="dropdown-tabs nav-tabs-custom">
						<NavItem>
							<NavLink
								style="cursor: pointer"
								tabId={1}
								on:click={() =>
									(activeTab = 1)}
								active={activeTab ==
									1}>
								All (4)
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								tabId={2}
								on:click={() =>
									(activeTab = 2)}
								active={activeTab ==
									2}>
								Messages
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								tabId={3}
								on:click={() =>
									(activeTab = 3)}
								active={activeTab ==
									3}>
								Alerts
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>

			<TabContent
				id="notificationItemsTabContent4"
			>
				<TabPane
					tabId={1}
					class={activeTab == 1
						? "py-2 ps-2 active"
						: "py-2 ps-2"}
					id="all-noti-tab1"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-info text-info rounded-circle fs-16"
									>
										<i
											class="bx bx-badge-check"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 lh-base"
									>
										Your <b
											>Elite</b
										>
										author
										Graphic
										Optimization
										<span
											class="text-secondary"
											>reward</span
										> is ready!
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> Just 30
											sec ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 48 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-danger text-danger rounded-circle fs-16"
									>
										<i
											class="bx bx-message-square-dots"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 fs-13 lh-base"
									>
										You have
										received <b
											class="text-success"
											>20</b
										> new messages
										in the conversation
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 4 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<button
								type="button"
								class="btn btn-soft-success waves-effect waves-light"
								>View All
								Notifications <i
									class="ri-arrow-right-line align-middle"
								/></button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={2}
					class={activeTab == 2
						? "py-2 ps-2 active"
						: "py-2 ps-2"}
					id="messages-tab1"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar3}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											James
											Lemire
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 30 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar6}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Kenneth
											Brown
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Mentionned
											you in
											his
											comment
											on \u{1F4C3}
											invoice
											#12501.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 10 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 3 days
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<button
								type="button"
								class="btn btn-soft-success waves-effect waves-light"
								>View All Messages <i
									class="ri-arrow-right-line align-middle"
								/></button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={3}
					class={activeTab == 3
						? "p-4 active"
						: "p-4"}
					id="alerts-tab1"
				>
					<div class="w-50 pt-3 mx-auto">
						<img
							src={bell}
							class="img-fluid"
							alt="user-pic"
						/>
					</div>
					<div class="text-center pb-5 mt-2">
						<h6
							class="fs-18 fw-semibold lh-base"
						>
							Hey! You have no any
							notifications
						</h6>
					</div>
				</TabPane>
			</TabContent>
		</div>
	</Col>

	<Col xxl={3} lg={5} md={6}>
		<div
			class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
			aria-labelledby="page-header-notifications-dropdown"
			style="z-index: 1"
		>
			<div
				class="dropdown-head bg-success bg-pattern rounded-top overflow-hidden"
			>
				<div class="p-3">
					<Row class="align-items-center">
						<Col>
							<h6
								class="m-0 fs-16 fw-semibold text-white">
								Notifications
							</h6>
						</Col>
						<div class="col-auto dropdown-tabs"
						>
							<span
								class="badge badge-soft-light fs-13">>4 New</span
							>
						</div>
					</Row>
				</div>

				<div class="px-2 pt-2">
					<Nav
						tabs
						class="dropdown-tabs nav-tabs-custom">
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(NotificationTab = 1)}
								active={NotificationTab ==
									1}>
								All (4)
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(NotificationTab = 2)}
								active={NotificationTab ==
									2}>
								Messages
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(NotificationTab = 3)}
								active={NotificationTab ==
									3}>
								Alerts
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>

			<TabContent
				id="notificationItemsTabContent1"
			>
				<TabPane
					tabId={1}
					class={NotificationTab == 1
						? "active py-2 ps-2"
						: "py-2 ps-2"}
					id="all-noti-tab2"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-info text-info rounded-circle fs-16"
									>
										<i
											class="bx bx-badge-check"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 lh-base"
									>
										Your <b
											>Elite</b
										>
										author
										Graphic
										Optimization
										<span
											class="text-secondary"
											>reward</span
										> is ready!
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> Just 30
											sec ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 48 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-danger text-danger rounded-circle fs-16"
									>
										<i
											class="bx bx-message-square-dots"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 fs-13 lh-base"
									>
										You have
										received <b
											class="text-success"
											>20</b
										> new messages
										in the conversation
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 4 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<Button
								color="success"
								class="btn btn-soft-success"
								>View All
								Notifications <i
									class="ri-arrow-right-line align-middle"
								/></Button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={2}
					class={NotificationTab == 2
						? "active py-2 ps-2"
						: "py-2 ps-2"}
					id="messages-tab2"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar3}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											James
											Lemire
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 30 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar6}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Kenneth
											Brown
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Mentionned
											you in
											his
											comment
											on \u{1F4C3}
											invoice
											#12501.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 10 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 3 days
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<Button
								color="success"
								class="btn btn-soft-success"
								>View All Messages <i
									class="ri-arrow-right-line align-middle"
								/></Button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={1}
					class={NotificationTab == 3
						? "active p-4"
						: "p-4"}
					id="alerts-tab2"
				>
					<div class="w-50 pt-3 mx-auto">
						<img
							src={bell}
							class="img-fluid"
							alt="user-pic"
						/>
					</div>
					<div class="text-center pb-5 mt-2">
						<h6
							class="fs-18 fw-semibold lh-base"
						>
							Hey! You have no any
							notifications
						</h6>
					</div>
				</TabPane>
			</TabContent>
		</div>
	</Col>

	<Col xxl={3} lg={5} md={6}>
		<div
			class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
			aria-labelledby="page-header-notifications-dropdown"
			style="z-index: 1"
		>
			<div
				class="dropdown-head bg-secondary bg-pattern rounded-top overflow-hidden"
			>
				<div class="p-3">
					<Row class="align-items-center">
						<Col>
							<h6
								class="m-0 fs-16 fw-semibold text-white">
								Notifications
							</h6>
						</Col>
						<div class="col-auto dropdown-tabs"
						>
							<span
								class="badge badge-soft-light fs-13">>4 New</span
							>
						</div>
					</Row>
				</div>

				<div class="px-2 pt-2">
					<Nav
						tabs
						class="dropdown-tabs nav-tabs-custom">
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(Notification1Tab = 1)}
								active={Notification1Tab ==
									1}>
								All (4)
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(Notification1Tab = 2)}
								active={Notification1Tab ==
									2}>
								Messages
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style="cursor: pointer"
								on:click={() =>
									(Notification1Tab = 3)}
								active={Notification1Tab ==
									3}>
								Alerts
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>

			<TabContent
				id="notificationItemsTabContent3"
			>
				<TabPane
					tabId={1}
					class={Notification1Tab == 1
						? "active py-2 ps-2"
						: "py-2 ps-2"}
					id="all-noti-tab1"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-info text-info rounded-circle fs-16"
									>
										<i
											class="bx bx-badge-check"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 lh-base"
									>
										Your <b
											>Elite</b
										>
										author
										Graphic
										Optimization
										<span
											class="text-secondary"
											>reward</span
										> is ready!
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> Just 30
											sec ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 48 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<div class="flex-shrink-0 avatar-xs me-3"
								>
									<span
										class="avatar-title bg-soft-danger text-danger rounded-circle fs-16"
									>
										<i
											class="bx bx-message-square-dots"
										/>
									</span>
								</div>
								<div class="flex-1">
									<h6
										class="mt-0 mb-2 fs-13 lh-base"
									>
										You have
										received <b
											class="text-success"
											>20</b
										> new messages
										in the conversation
									</h6>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 4 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<Button
								color="success"
								class="btn btn-soft-success"
								>View All
								Notifications <i
									class="ri-arrow-right-line align-middle"
								/></Button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={1}
					class={Notification1Tab == 2
						? "active py-2 ps-2"
						: "py-2 ps-2"}
					id="messages-tab3"
				>
					<div data-simplebar
						style="max-height: 300px"
						class="pe-2">
						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar3}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											James
											Lemire
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 30 min
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar2}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Angela
											Bernier
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Answered
											to your
											comment
											on the
											cash
											flow
											forecast's
											graph
											\u{1F514}.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 2 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar6}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Kenneth
											Brown
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											Mentionned
											you in
											his
											comment
											on \u{1F4C3}
											invoice
											#12501.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 10 hrs
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="text-reset notification-item d-block dropdown-item"
						>
							<div class="d-flex">
								<img
									src={avatar8}
									class="me-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="flex-1">
									<Link href="#!"
										><h6
											class="mt-0 mb-1 fs-13 fw-semibold"
										>
											Maureen
											Gibson
										</h6></Link
									>
									<div class="fs-13 text-muted"
									>
										<p
											class="mb-1"
										>
											We
											talked
											about a
											project
											on
											linkedin.
										</p>
									</div>
									<p
										class="mb-0 fs-11 fw-medium text-uppercase text-muted"
									>
										<span
											><i
												class="mdi mdi-clock-outline"
											/> 3 days
											ago</span
										>
									</p>
								</div>
								<div class="px-2 fs-16"
								>
									<input
										class="form-check-input"
										type="checkbox"
									/>
								</div>
							</div>
						</div>

						<div class="my-3 text-center"
						>
							<Button
								color="success"
								class="btn btn-soft-success"
								>View All Messages <i
									class="ri-arrow-right-line align-middle"
								/></Button>
						</div>
					</div>
				</TabPane>

				<TabPane
					tabId={1}
					class={Notification1Tab == 3
						? "active p-4"
						: "p-4"}
					id="alerts-tab3"
				>
					<div class="w-50 pt-3 mx-auto">
						<img
							src={bell}
							class="img-fluid"
							alt="user-pic"
						/>
					</div>
					<div class="text-center pb-5 mt-2">
						<h6
							class="fs-18 fw-semibold lh-base"
						>
							Hey! You have no any
							notifications
						</h6>
					</div>
				</TabPane>
			</TabContent>
		</div>
	</Col>
</Row>
`;
  return `${$$result.head += `${$$result.title = `<title>Dropdowns | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Dropdowns", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Single Button Dropdown" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn</code> class at to create a dropdown
							toggle with &lt;button&gt; element.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary",
                            id: "dropdownMenuButton"
                          }, {}, {
                            default: () => {
                              return `Dropdown button <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "a", class: "btn btn-secondary" }, {}, {
                            default: () => {
                              return `Dropdown link <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: singleButtonDropdownCode,
                        id: "singleButtonDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dropdown Color Variant" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-</code> class with below mentioned variation
							to color dropdown toggle.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-primary" }, {}, {
                            default: () => {
                              return `Primary <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-success" }, {}, {
                            default: () => {
                              return `Success <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-light" }, {}, {
                            default: () => {
                              return `Light <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-info" }, {}, {
                            default: () => {
                              return `Info <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Secondary <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-warning" }, {}, {
                            default: () => {
                              return `Warning <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-danger" }, {}, {
                            default: () => {
                              return `Danger <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}
								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-dark" }, {}, {
                            default: () => {
                              return `Dark <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: colorDropdownCode,
                        id: "colorDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Split Button Dropdown" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>divider</code> attribute to DropdownItem to
							create split button dropdowns as a single button dropdown.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                                default: () => {
                                  return `Primary`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                color: "primary",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                                default: () => {
                                  return `Success`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-success",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                                default: () => {
                                  return `Light`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-light",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "info" }, {}, {
                                default: () => {
                                  return `Info`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-info",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                                default: () => {
                                  return `Secondary`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-secondary",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
                                default: () => {
                                  return `Warning`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-warning",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                                default: () => {
                                  return `Danger`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-danger",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                                default: () => {
                                  return `Dark`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-dark",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: splitButtonDropdownCode,
                        id: "splitButtonDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dropdown Sizing" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>btn-lg</code> class to create a large size
							dropdown button and
							<code>btn-sm</code> to create a small size dropdown button.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3 align-items-center"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn-lg",
                            color: "primary"
                          }, {}, {
                            default: () => {
                              return `Large button <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-lg" }, {}, {
                                default: () => {
                                  return `Large split button`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-light btn-lg",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            color: "primary",
                            class: "btn-sm"
                          }, {}, {
                            default: () => {
                              return `Small button <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "light", class: "btn-sm" }, {}, {
                                default: () => {
                                  return `Small split button`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-light btn-sm",
                                split: true
                              }, {}, {})}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: sizingDropdownCode,
                        id: "sizingDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dark Dropdowns" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>dropdown-menu-dark</code> class onto an existing
							dropdown-menu to create dropdown items dark.
						</p>
						<div class="${"live-preview"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary",
                            id: "dropdownMenuButton2"
                          }, {}, {
                            default: () => {
                              return `Dropdown button <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
								${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-dark" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { active: true }, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
									${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: darkDropdownCode,
                        id: "darkDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Alignment options" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Dropdown demo with various <code>dropdown alignment</code> options.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary",
                            id: "dropdownMenuButton"
                          }, {}, {
                            default: () => {
                              return `Dropdown <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Right-aligned menu <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { end: true }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Left-aligned, right-aligned lg <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-lg-end", end: true }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Right-aligned, left-aligned lg <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-lg-start" }, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, { direction: "start" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Dropstart <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, { direction: "end" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Dropend <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, { direction: "up" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary"
                          }, {}, {
                            default: () => {
                              return `Dropup<i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: alignDropdownCode,
                        id: "alignDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dropdown Options" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>data-bs-offset</code> or
							<code>data-bs-reference</code> to change the position
							of the dropdown.
						</p>

						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "me-1" }, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-secondary",
                            id: "dropdownMenuOffset"
                          }, {}, {
                            default: () => {
                              return `Dropup<i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                                default: () => {
                                  return `Reference`;
                                }
                              })}
										${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                tag: "button",
                                class: "btn btn-secondary",
                                id: "dropdownMenuReference",
                                split: true
                              }, {}, {
                                default: () => {
                                  return `<span class="${"visually-hidden"}">Toggle Dropdown</span>`;
                                }
                              })}
										${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Another action`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Something else here`;
                                    }
                                  })}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
											${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `Separated link`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: optionDropdownCode,
                        id: "optionDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Auto Close Behavior" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">By default, the dropdown menu is closed when
							clicking inside or outside the dropdown menu. You
							can use the <code>autoClose</code> option to change this
							behavior of the dropdown.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-3"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-light" }, {}, {
                            default: () => {
                              return `Default dropdown <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-light" }, {}, {
                            default: () => {
                              return `Clickable outside <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-light",
                            id: "dropdownMenuClickableInside"
                          }, {}, {
                            default: () => {
                              return `Clickable inside <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                            tag: "button",
                            class: "btn btn-light",
                            id: "dropdownMenuClickable"
                          }, {}, {
                            default: () => {
                              return `Manual close <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Menu item`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: autoCloseDropdownCode,
                        id: "autoCloseDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Dropdown Menu Item Color" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of dropdown menu and dropdown item color.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 3 }, {}, {
                            default: () => {
                              return `<div><h6 class="${"font-size-13 mb-3"}">Dropdown Menu Success link example
										</h6>
										<div class="${"clearfix"}"><div class="${"dropdown-menu d-inline-block position-relative dropdownmenu-success"}" style="${"z-index: 1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "dropdown-item" }, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
												${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "dropdown-item" }, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
												${validate_component(Link, "Link").$$render($$result, {
                                href: "#!",
                                class: "dropdown-item active"
                              }, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
												<div class="${"dropdown-divider"}"></div>
												${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "dropdown-item" }, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 9 }, {}, {
                            default: () => {
                              return `<div class="${"mt-lg-0 mt-3"}"><h6 class="${"font-size-13 mb-0"}">Dropdown Menu link Color example
										</h6>
										<div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu
															Primary link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-primary" }, {}, {
                                            default: () => {
                                              return `Primary <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-primary" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}
												${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu
															Secondary link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, {
                                            tag: "button",
                                            class: "btn btn-secondary"
                                          }, {}, {
                                            default: () => {
                                              return `Secondary <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-secondary" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}
												${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu
															Success link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-success" }, {}, {
                                            default: () => {
                                              return `Success <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-success" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}
												${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu
															Warning link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-warning" }, {}, {
                                            default: () => {
                                              return `Warning <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-warning" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}
												${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu Info
															link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-info" }, {}, {
                                            default: () => {
                                              return `Info <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-info" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}
												${validate_component(Col, "Col").$$render($$result, { lg: 4, sm: 6 }, {}, {
                                    default: () => {
                                      return `<div class="${"mt-3"}"><p class="${"font-size-13 mb-2"}">Dropdown menu Danger
															link
														</p>
														${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                                        default: () => {
                                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-danger" }, {}, {
                                            default: () => {
                                              return `Danger <i class="${"mdi mdi-chevron-down"}"></i>`;
                                            }
                                          })}
															${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdownmenu-danger" }, {}, {
                                            default: () => {
                                              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Another
																	action`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Something
																	else here`;
                                                }
                                              })}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
																${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `Separated
																	link`;
                                                }
                                              })}`;
                                            }
                                          })}`;
                                        }
                                      })}</div>`;
                                    }
                                  })}`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: menuItemDropdownCode,
                        id: "menuItemDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Menu Content" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Example of dropdown menu containing <code>Headers, Text and Forms</code> content.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", color: "primary" }, {}, {
                            default: () => {
                              return `Header <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="${"dropdown-header noti-title"}"><h5 class="${"fs-13 text-muted text-truncate mb-0"}">Welcome Jessie!
											</h5></div>
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Another action`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Something else here`;
                                }
                              })}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
										${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Separated link`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-success" }, {}, {
                            default: () => {
                              return `Text <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-md p-3" }, {}, {
                            default: () => {
                              return `<p>Some example text that&#39;s
											free-flowing within the dropdown
											menu.
										</p>
										<p class="${"mb-0"}">And this is more example text.
										</p>`;
                            }
                          })}`;
                        }
                      })}

								${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { tag: "button", class: "btn btn-light" }, {}, {
                            default: () => {
                              return `Forms <i class="${"mdi mdi-chevron-down"}"></i>`;
                            }
                          })}
									${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, { class: "dropdown-menu-md p-4" }, {}, {
                            default: () => {
                              return `<form><div class="${"mb-2"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                for: "exampleDropdownFormEmail"
                              }, {}, {
                                default: () => {
                                  return `Email address`;
                                }
                              })}
												<input type="${"email"}" class="${"form-control"}" id="${"exampleDropdownFormEmail"}" placeholder="${"email@example.com"}"></div>
											<div class="${"mb-2"}">${validate_component(Label, "Label").$$render($$result, {
                                class: "form-label",
                                for: "exampleDropdownFormPassword"
                              }, {}, {
                                default: () => {
                                  return `Password`;
                                }
                              })}
												<input type="${"password"}" class="${"form-control"}" id="${"exampleDropdownFormPassword"}" placeholder="${"Password"}"></div>
											<div class="${"mb-2"}"><div class="${"form-check custom-checkbox"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"rememberdropdownCheck"}">
													${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "rememberdropdownCheck"
                              }, {}, {
                                default: () => {
                                  return `Remember me`;
                                }
                              })}</div></div>
											${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "btn btn-primary" }, {}, {
                                default: () => {
                                  return `Sign in`;
                                }
                              })}</form>`;
                            }
                          })}`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: menuContentDropdownCode,
                        id: "menuContentDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Notifications" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Dropdown with notification containing multiple tabs.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, { class: "g-3" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 5, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"}" aria-labelledby="${"page-header-notifications-dropdown"}" style="${"z-index: 1"}"><div class="${"dropdown-head bg-primary bg-pattern rounded-top overflow-hidden"}"><div class="${"p-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h6 class="${"m-0 fs-16 fw-semibold text-white"}">Notifications
														</h6>`;
                                    }
                                  })}
													<div class="${"col-auto dropdown-tabs"}"><span class="${"badge badge-soft-light fs-13"}">4 New</span></div>`;
                                }
                              })}</div>

											<div class="${"px-2 pt-2"}">${validate_component(Nav, "Nav").$$render($$result, {
                                tabs: true,
                                class: "dropdown-tabs nav-tabs-custom"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        tabId: 1,
                                        active: activeTab == 1
                                      }, {}, {
                                        default: () => {
                                          return `All (4)
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        tabId: 2,
                                        active: activeTab == 2
                                      }, {}, {
                                        default: () => {
                                          return `Messages
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        tabId: 3,
                                        active: activeTab == 3
                                      }, {}, {
                                        default: () => {
                                          return `Alerts
														`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div></div>

										${validate_component(TabContent, "TabContent").$$render($$result, { id: "notificationItemsTabContent4" }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "py-2 ps-2 active",
                                    id: "all-noti-tab1"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-info text-info rounded-circle fs-16"}"><i class="${"bx bx-badge-check"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 lh-base"}">Your <b>Elite</b>
																	author Graphic
																	Optimization
																	<span class="${"text-secondary"}">reward</span> is ready!
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> Just 30
																		sec ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 48 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-danger text-danger rounded-circle fs-16"}"><i class="${"bx bx-message-square-dots"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 fs-13 lh-base"}">You have
																	received <b class="${"text-success"}">20</b> new messages
																	in the conversation
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 4 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}"><button type="${"button"}" class="${"btn btn-soft-success waves-effect waves-light"}">View All
															Notifications <i class="${"ri-arrow-right-line align-middle"}"></i></button></div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 2,
                                    class: "py-2 ps-2",
                                    id: "messages-tab1"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar3, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">James
																		Lemire
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 30 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar6, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Kenneth
																		Brown
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Mentionned
																		you in
																		his
																		comment
																		on \u{1F4C3}
																		invoice
																		#12501.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 10 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 3 days
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}"><button type="${"button"}" class="${"btn btn-soft-success waves-effect waves-light"}">View All Messages <i class="${"ri-arrow-right-line align-middle"}"></i></button></div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 3,
                                    class: "p-4",
                                    id: "alerts-tab1"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"w-50 pt-3 mx-auto"}"><img${add_attribute("src", bell, 0)} class="${"img-fluid"}" alt="${"user-pic"}"></div>
												<div class="${"text-center pb-5 mt-2"}"><h6 class="${"fs-18 fw-semibold lh-base"}">Hey! You have no any
														notifications
													</h6></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 5, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"}" aria-labelledby="${"page-header-notifications-dropdown"}" style="${"z-index: 1"}"><div class="${"dropdown-head bg-success bg-pattern rounded-top overflow-hidden"}"><div class="${"p-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h6 class="${"m-0 fs-16 fw-semibold text-white"}">Notifications
														</h6>`;
                                    }
                                  })}
													<div class="${"col-auto dropdown-tabs"}"><span class="${"badge badge-soft-light fs-13"}">4 New</span></div>`;
                                }
                              })}</div>

											<div class="${"px-2 pt-2"}">${validate_component(Nav, "Nav").$$render($$result, {
                                tabs: true,
                                class: "dropdown-tabs nav-tabs-custom"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: NotificationTab == 1
                                      }, {}, {
                                        default: () => {
                                          return `All (4)
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: NotificationTab == 2
                                      }, {}, {
                                        default: () => {
                                          return `Messages
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: NotificationTab == 3
                                      }, {}, {
                                        default: () => {
                                          return `Alerts
														`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div></div>

										${validate_component(TabContent, "TabContent").$$render($$result, { id: "notificationItemsTabContent1" }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "active py-2 ps-2",
                                    id: "all-noti-tab2"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-info text-info rounded-circle fs-16"}"><i class="${"bx bx-badge-check"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 lh-base"}">Your <b>Elite</b>
																	author Graphic
																	Optimization
																	<span class="${"text-secondary"}">reward</span> is ready!
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> Just 30
																		sec ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 48 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-danger text-danger rounded-circle fs-16"}"><i class="${"bx bx-message-square-dots"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 fs-13 lh-base"}">You have
																	received <b class="${"text-success"}">20</b> new messages
																	in the conversation
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 4 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}">${validate_component(Button, "Button").$$render($$result, {
                                        color: "success",
                                        class: "btn btn-soft-success"
                                      }, {}, {
                                        default: () => {
                                          return `View All
															Notifications <i class="${"ri-arrow-right-line align-middle"}"></i>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 2,
                                    class: "py-2 ps-2",
                                    id: "messages-tab2"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar3, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">James
																		Lemire
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 30 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar6, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Kenneth
																		Brown
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Mentionned
																		you in
																		his
																		comment
																		on \u{1F4C3}
																		invoice
																		#12501.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 10 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 3 days
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}">${validate_component(Button, "Button").$$render($$result, {
                                        color: "success",
                                        class: "btn btn-soft-success"
                                      }, {}, {
                                        default: () => {
                                          return `View All Messages <i class="${"ri-arrow-right-line align-middle"}"></i>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "p-4",
                                    id: "alerts-tab2"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"w-50 pt-3 mx-auto"}"><img${add_attribute("src", bell, 0)} class="${"img-fluid"}" alt="${"user-pic"}"></div>
												<div class="${"text-center pb-5 mt-2"}"><h6 class="${"fs-18 fw-semibold lh-base"}">Hey! You have no any
														notifications
													</h6></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { xxl: 3, lg: 5, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"}" aria-labelledby="${"page-header-notifications-dropdown"}" style="${"z-index: 1"}"><div class="${"dropdown-head bg-secondary bg-pattern rounded-top overflow-hidden"}"><div class="${"p-3"}">${validate_component(Row, "Row").$$render($$result, { class: "align-items-center" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<h6 class="${"m-0 fs-16 fw-semibold text-white"}">Notifications
														</h6>`;
                                    }
                                  })}
													<div class="${"col-auto dropdown-tabs"}"><span class="${"badge badge-soft-light fs-13"}">4 New</span></div>`;
                                }
                              })}</div>

											<div class="${"px-2 pt-2"}">${validate_component(Nav, "Nav").$$render($$result, {
                                tabs: true,
                                class: "dropdown-tabs nav-tabs-custom"
                              }, {}, {
                                default: () => {
                                  return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: Notification1Tab == 1
                                      }, {}, {
                                        default: () => {
                                          return `All (4)
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: Notification1Tab == 2
                                      }, {}, {
                                        default: () => {
                                          return `Messages
														`;
                                        }
                                      })}`;
                                    }
                                  })}
													${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(NavLink, "NavLink").$$render($$result, {
                                        style: "cursor: pointer",
                                        active: Notification1Tab == 3
                                      }, {}, {
                                        default: () => {
                                          return `Alerts
														`;
                                        }
                                      })}`;
                                    }
                                  })}`;
                                }
                              })}</div></div>

										${validate_component(TabContent, "TabContent").$$render($$result, { id: "notificationItemsTabContent3" }, {}, {
                                default: () => {
                                  return `${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "active py-2 ps-2",
                                    id: "all-noti-tab1"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-info text-info rounded-circle fs-16"}"><i class="${"bx bx-badge-check"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 lh-base"}">Your <b>Elite</b>
																	author Graphic
																	Optimization
																	<span class="${"text-secondary"}">reward</span> is ready!
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> Just 30
																		sec ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 48 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><div class="${"flex-shrink-0 avatar-xs me-3"}"><span class="${"avatar-title bg-soft-danger text-danger rounded-circle fs-16"}"><i class="${"bx bx-message-square-dots"}"></i></span></div>
															<div class="${"flex-1"}"><h6 class="${"mt-0 mb-2 fs-13 lh-base"}">You have
																	received <b class="${"text-success"}">20</b> new messages
																	in the conversation
																</h6>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 4 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}">${validate_component(Button, "Button").$$render($$result, {
                                        color: "success",
                                        class: "btn btn-soft-success"
                                      }, {}, {
                                        default: () => {
                                          return `View All
															Notifications <i class="${"ri-arrow-right-line align-middle"}"></i>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "py-2 ps-2",
                                    id: "messages-tab3"
                                  }, {}, {
                                    default: () => {
                                      return `<div data-simplebar style="${"max-height: 300px"}" class="${"pe-2"}"><div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar3, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">James
																		Lemire
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 30 min
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar2, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Angela
																		Bernier
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Answered
																		to your
																		comment
																		on the
																		cash
																		flow
																		forecast&#39;s
																		graph
																		\u{1F514}.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 2 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar6, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Kenneth
																		Brown
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">Mentionned
																		you in
																		his
																		comment
																		on \u{1F4C3}
																		invoice
																		#12501.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 10 hrs
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"text-reset notification-item d-block dropdown-item"}"><div class="${"d-flex"}"><img${add_attribute("src", avatar8, 0)} class="${"me-3 rounded-circle avatar-xs"}" alt="${"user-pic"}">
															<div class="${"flex-1"}">${validate_component(Link, "Link").$$render($$result, { href: "#!" }, {}, {
                                        default: () => {
                                          return `<h6 class="${"mt-0 mb-1 fs-13 fw-semibold"}">Maureen
																		Gibson
																	</h6>`;
                                        }
                                      })}
																<div class="${"fs-13 text-muted"}"><p class="${"mb-1"}">We
																		talked
																		about a
																		project
																		on
																		linkedin.
																	</p></div>
																<p class="${"mb-0 fs-11 fw-medium text-uppercase text-muted"}"><span><i class="${"mdi mdi-clock-outline"}"></i> 3 days
																		ago</span></p></div>
															<div class="${"px-2 fs-16"}"><input class="${"form-check-input"}" type="${"checkbox"}"></div></div></div>

													<div class="${"my-3 text-center"}">${validate_component(Button, "Button").$$render($$result, {
                                        color: "success",
                                        class: "btn btn-soft-success"
                                      }, {}, {
                                        default: () => {
                                          return `View All Messages <i class="${"ri-arrow-right-line align-middle"}"></i>`;
                                        }
                                      })}</div></div>`;
                                    }
                                  })}

											${validate_component(TabPane, "TabPane").$$render($$result, {
                                    tabId: 1,
                                    class: "p-4",
                                    id: "alerts-tab3"
                                  }, {}, {
                                    default: () => {
                                      return `<div class="${"w-50 pt-3 mx-auto"}"><img${add_attribute("src", bell, 0)} class="${"img-fluid"}" alt="${"user-pic"}"></div>
												<div class="${"text-center pb-5 mt-2"}"><h6 class="${"fs-18 fw-semibold lh-base"}">Hey! You have no any
														notifications
													</h6></div>`;
                                    }
                                  })}`;
                                }
                              })}</div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: notificationDropdownCode,
                        id: "notificationDropdownCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Uidropdowns as default };
