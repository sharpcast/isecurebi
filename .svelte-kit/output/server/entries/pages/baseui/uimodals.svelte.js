import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from "../../../chunks/index-584434b3.js";
import { A as Alert } from "../../../chunks/Alert-d2e69c17.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { I as Input } from "../../../chunks/Input-db5b479a.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import { M as Modal } from "../../../chunks/Modal-235662c0.js";
import { M as ModalBody } from "../../../chunks/ModalBody-69b040c2.js";
import { M as ModalHeader } from "../../../chunks/ModalHeader-dfdb4a12.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { P as Popover } from "../../../chunks/Popover-38c1335f.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/CardHeader-84e061db.js";
var loginImg = "/_app/assets/login-794b9bf8.png";
var signupImg = "/_app/assets/signup-5f233722.png";
var subscribeImg = "/_app/assets/subscribe-464d8891.png";
var paymentImg = "/_app/assets/success-payment-03a6bd2b.png";
var authbg = "/_app/assets/auth-one-bg-85095c4e.jpg";
const Uimodals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal_standard = false;
  const tog_standard = () => modal_standard = !modal_standard;
  let modal_center = false;
  const tog_center = () => modal_center = !modal_center;
  let modal_grid = false;
  const tog_grid = () => modal_grid = !modal_grid;
  let modal_tooltip = false;
  const tog_tooltip = () => modal_tooltip = !modal_tooltip;
  let modal_fullscreen = false;
  const tog_fullscreen = () => modal_fullscreen = !modal_fullscreen;
  let modal_xlarge = false;
  const tog_xlarge = () => modal_xlarge = !modal_xlarge;
  let modal_large = false;
  const tog_large = () => modal_large = !modal_large;
  let modal_small = false;
  const tog_small = () => modal_small = !modal_small;
  let modal_fullscreen1 = false;
  const tog_fullscreen1 = () => modal_fullscreen1 = !modal_fullscreen1;
  let modal_fullscreen_sm = false;
  const tog_fullscreen_sm = () => modal_fullscreen_sm = !modal_fullscreen_sm;
  let modal_fullscreen_md = false;
  const tog_fullscreen_md = () => modal_fullscreen_md = !modal_fullscreen_md;
  let modal_fullscreen_lg = false;
  const tog_fullscreen_lg = () => modal_fullscreen_lg = !modal_fullscreen_lg;
  let modal_fullscreen_xl = false;
  const tog_fullscreen_xl = () => modal_fullscreen_xl = !modal_fullscreen_xl;
  let modal_fullscreen_xxl = false;
  const tog_fullscreen_xxl = () => modal_fullscreen_xxl = !modal_fullscreen_xxl;
  let modal_scroll = false;
  const tog_scroll = () => modal_scroll = !modal_scroll;
  let modal_backdrop = false;
  const tog_backdrop = () => modal_backdrop = !modal_backdrop;
  let modal_varying1 = false;
  const tog_varying1 = () => modal_varying1 = !modal_varying1;
  let modal_varying2 = false;
  const tog_varying2 = () => modal_varying2 = !modal_varying2;
  let modal_varying3 = false;
  const tog_varying3 = () => modal_varying3 = !modal_varying3;
  let modal_togFirst = false;
  const tog_togFirst = () => modal_togFirst = !modal_togFirst;
  let modal_togSecond = false;
  const tog_togSecond = () => modal_togSecond = !modal_togSecond;
  let modal_animationRight = false;
  const tog_animationRight = () => modal_animationRight = !modal_animationRight;
  let modal_animationLeft = false;
  const tog_animationLeft = () => modal_animationLeft = !modal_animationLeft;
  let modal_animationUp = false;
  const tog_animationUp = () => modal_animationUp = !modal_animationUp;
  let modal_animationFlip = false;
  const tog_animationFlip = () => modal_animationFlip = !modal_animationFlip;
  let modal_animationZoom = false;
  const tog_animationZoom = () => modal_animationZoom = !modal_animationZoom;
  let modal_positionTop = false;
  const tog_positionTop = () => modal_positionTop = !modal_positionTop;
  let modal_positionTopRight = false;
  const tog_positionTopRight = () => modal_positionTopRight = !modal_positionTopRight;
  let modal_positionBottom = false;
  const tog_positionBottom = () => modal_positionBottom = !modal_positionBottom;
  let modal_positionBottomRight = false;
  const tog_positionBottomRight = () => modal_positionBottomRight = !modal_positionBottomRight;
  let modal_loginModals = false;
  const tog_loginModals = () => modal_loginModals = !modal_loginModals;
  let subscribeModals = false;
  const tog_subscribeModals = () => subscribeModals = !subscribeModals;
  let modal_signUpModals = false;
  const tog_signUpModals = () => modal_signUpModals = !modal_signUpModals;
  let modal_successMessage = false;
  const tog_successMessage = () => modal_successMessage = !modal_successMessage;
  const defaultModalCode = `
<!-- Default Modals -->
let modal_standard = false;
	const tog_standard = () => (modal_standard = !modal_standard);
	<Modal
	id="myModal"
	isOpen={modal_standard}
	toggle={() => {
		tog_standard();
	}}
>
	<ModalHeader
		class="modal-title"
		id="myModalLabel"
		toggle={() => {
			tog_standard();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-15">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
		<p class="text-muted">
			It wasn't a dream. His room, a proper human room although a little
			too small, lay peacefully between its four familiar walls.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_standard();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>
	<Button color="primary" on:click={tog_standard}>Standard Modal</Button>
`;
  const centeredModalCode = `
<!-- Vertically Centered -->
let modal_center = false;
	const tog_center = () => (modal_center = !modal_center);
	<Modal
	isOpen={modal_center}
	toggle={() => {
		tog_center();
	}}
	centered
>
	<ModalHeader class="modal-title" />

	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/hrqwmuhr.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width:120px;height:120px"
		/>
		<div class="mt-4">
			<h4 class="mb-3">Oops something went wrong!</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Button color="light" on:click={tog_center}>Close</Button>
				<Link href="#!" class="btn btn-danger">Try Again</Link>
			</div>
		</div>
	</ModalBody>
</Modal>
<Button color="primary" on:click={tog_center}>Center Modal</Button>
`;
  const gridsModalCode = `
<!-- Grids in modals -->
let modal_grid = false;
const tog_grid = () => (modal_grid = !modal_grid);
<Modal
	isOpen={modal_grid}
	toggle={() => {
		tog_grid();
	}}
>
	<ModalHeader
		class="modal-title"
		toggle={() => {
			tog_grid();
		}}
	>
		Grid Modals
	</ModalHeader>
	<ModalBody>
		<form action="#">
			<div class="row g-3">
				<Col xxl={6}>
					<div>
						<Label for="firstName" class="form-label">First Name</Label
						>
						<Input
							type="text"
							class="form-control"
							id="firstName"
							placeholder="Enter firstname"
						/>
					</div>
				</Col>
				<Col xxl={6}>
					<div>
						<Label for="lastName" class="form-label">Last Name</Label
						>
						<Input
							type="text"
							class="form-control"
							id="lastName"
							placeholder="Enter lastname"
						/>
					</div>
				</Col>
				<Col lg={12}>
					<Label class="form-label">Gender</Label>
					<div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<Label class="form-check-label" for="inlineRadio1"
								>Male</Label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<Label class="form-check-label" for="inlineRadio2"
								>Female</Label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio3"
								value="option3"
							/>
							<Label class="form-check-label" for="inlineRadio3"
								>Others</Label>
						</div>
					</div>
				</Col>
				<Col xxl={6}>
					<Label for="emailInput" class="form-label">Email</Label>
					<Input
						type="email"
						class="form-control"
						id="emailInput"
						placeholder="Enter your email"
					/>
				</Col>
				<Col xxl={6}>
					<Label for="passwordInput" class="form-label"
						>Password</Label>
					<Input
						type="password"
						class="form-control"
						id="passwordInput"
						value="451326546"
						readOnly
					/>
				</Col>
				<Col lg={12}>
					<div class="hstack gap-2 justify-content-end">
						<Button color="light" on:click={tog_grid}>Close</Button>
						<Button color="primary">Submit</Button>
					</div>
				</Col>
			</div>
		</form>
	</ModalBody>
</Modal>
<Button color="primary" on:click={tog_grid}>Launch Demo Modal</Button>
`;
  const staticBackdropModalCode = `
<!-- Static Backdrop -->
<Modal
	isOpen={modal_backdrop}
	toggle={() => {
		tog_backdrop();
	}}
	backdrop={"static"}
	id="staticBackdrop"
	centered
>
	<ModalHeader
		class="modal-title"
		id="staticBackdropLabel"
		toggle={() => {
			tog_backdrop();
		}}
	>
		Modal title
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/lupuorrc.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width: 120px; height: 120px"
		/>

		<div class="mt-4">
			<h4 class="mb-3">You've made it!</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Link
					href="#!"
					class="btn btn-link link-success fw-medium"
					on:click={tog_backdrop}><i class="ri-close-line me-1 align-middle" /> Close</Link
				>
				<Link href="#!" class="btn btn-success" on:click={tog_backdrop}>Completed</Link
				>
			</div>
		</div>
	</ModalBody>
</Modal>
<Button color="primary" on:click={tog_backdrop}>Static Backdrop Modal</Button>

`;
  const togglebetweenCode = `
<!-- Default List -->
let modal_togFirst = false;
	const tog_togFirst = () => (modal_togFirst = !modal_togFirst);
	<Modal
	isOpen={modal_togFirst}
	toggle={() => {
		tog_togFirst();
	}}
	id="firstmodal"
	centered
>
	<ModalHeader
		class="modal-title"
		id="exampleModalToggleLabel"
		toggle={() => {
			tog_togFirst();
		}}
	>
		Modal 1
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/tdrtiskw.json"
			trigger="loop"
			colors="primary:#f7b84b,secondary:#405189"
			style="width: 130px; height: 130px"
		/>
		<div class="mt-4 pt-4">
			<h4>Uh oh, something went wrong!</h4>
			<p class="text-muted">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>

			<Button
				color="warning"
				on:click={() => {
					tog_togSecond();
					tog_togFirst(false);
				}}
			>
				Continue
			</Button>
		</div>
	</ModalBody>
</Modal>
<Button color="primary" on:click={tog_togFirst}>Open First Modal</Button>
`;
  const tooltipModalCode = `
<!-- Tooltips and Popovers -->
let modal_tooltip = false;
	const tog_tooltip = () => (modal_tooltip = !modal_tooltip);
<Modal
	isOpen={modal_togSecond}
	toggle={() => {
		tog_togSecond();
	}}
	id="secondmodal"
	centered
>
	<ModalHeader
		class="modal-title"
		id="exampleModalToggleLabel2"
		toggle={() => {
			tog_togSecond();
		}}
	>
		Modal 2
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/zpxybbhl.json"
			trigger="loop"
			colors="primary:#405189,secondary:#0ab39c"
			style="width: 150px; height: 150px"
		/>
		<div class="mt-4 pt-3">
			<h4 class="mb-3">Follow-Up Email</h4>
			<p class="text-muted mb-4">
				Hide this modal and show the first with the button below
				Automatically Send your invitees a follow -Up email.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Button
					color="danger"
					on:click={() => {
						tog_togFirst();
						tog_togSecond(false);
					}}
				>
					Back to First
				</Button>
				<Button color="light" on:click={tog_togSecond}>Close</Button>
			</div>
		</div>
	</ModalBody>
</Modal>
<Button color="primary" on:click={tog_tooltip}>Launch Demo Modal</Button>
`;
  const scrollableModalCode = `
<!-- Scrollable Modal -->
let modal_scroll = false;
	const tog_scroll = () => (modal_scroll = !modal_scroll);
	<Modal
	isOpen={modal_scroll}
	toggle={() => {
		tog_scroll();
	}}
	scrollable={true}
	id="exampleModalScrollable"
>
	<ModalHeader
		class="modal-title"
		id="exampleModalScrollableTitle"
		toggle={() => {
			tog_scroll();
		}}
	>
		Scrollable modal
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					You've probably heard that opposites attract. The same is
					true for fonts. Don't be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<h6 class="fs-16 my-3">Graphic Design</h6>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p>
			</div>
		</div>
	</ModalBody>

	<div class="modal-footer">
		<Button color="light" on:click={tog_scroll}>Close</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>
<Button color="primary" on:click={tog_scroll}>Scrollable Modal</Button>
`;
  const varyingModalCode = `
<!-- Varying Modal Content -->
let modal_varying1 = false;
const tog_varying1 = () => (modal_varying1 = !modal_varying1);

let modal_varying2 = false;
const tog_varying2 = () => (modal_varying2 = !modal_varying2);

let modal_varying3 = false;
const tog_varying3 = () => (modal_varying3 = !modal_varying3);

<Button
	color="primary"
	on:click={tog_varying1}
	>Open Modal for Mary</Button
>
<Button
	color="primary"
	on:click={tog_varying2}
	>Open Modal for Jennifer</Button
>
<Button
	color="primary"
	on:click={tog_varying3}
	>Open Modal for Roderick</Button
>
`;
  const optionalModalCode = `
<!-- Optional Modal Sizes -->
let modal_fullscreen = false;
const tog_fullscreen = () => (modal_fullscreen = !modal_fullscreen);

let modal_xlarge = false;
const tog_xlarge = () => (modal_xlarge = !modal_xlarge);

let modal_large = false;
const tog_large = () => (modal_large = !modal_large);

let modal_small = false;
const tog_small = () => (modal_small = !modal_small);

<Modal
	size="xl"
	isOpen={modal_fullscreen}
	toggle={() => {
		tog_fullscreen();
	}}
	class="modal-fullscreen"
	id="exampleModalFullscreen"
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenLabel"
		toggle={() => {
			tog_fullscreen();
		}}
	>
		Fullscreen Modal Heading
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					You've probably heard that opposites attract. The same is
					true for fonts. Don't be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<h6 class="fs-16 my-3">Graphic Design</h6>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			color="light"
			on:click={() => {
				tog_fullscreen();
			}}
			class="btn btn-link link-success fw-medium"
			><i class="ri-close-line me-1 align-middle" />
			Close
		</Link>
		<Button color="primary" class="btn btn-primary ">Save changes</Button>
	</div>
</Modal>

<Modal
	size="xl"
	isOpen={modal_xlarge}
	toggle={() => {
		tog_xlarge();
	}}
>
	<ModalHeader
		class="modal-title"
		id="myExtraLargeModalLabel"
		toggle={() => {
			tog_xlarge();
		}}
	>
		Extra large modal
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					You've probably heard that opposites attract. The same is
					true for fonts. Don't be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<h6 class="fs-16 my-3">Graphic Design</h6>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={tog_xlarge}
			><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	size="lg"
	isOpen={modal_large}
	toggle={() => {
		tog_large();
	}}
>
	<ModalHeader
		class="modal-title"
		id="myLargeModalLabel"
		toggle={() => {
			tog_large();
		}}
	>
		Large Modal
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					You've probably heard that opposites attract. The same is
					true for fonts. Don't be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<h6 class="fs-16 my-3">Graphic Design</h6>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={tog_large}
			><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	size="sm"
	isOpen={modal_small}
	toggle={() => {
		tog_small();
	}}
>
	<ModalHeader
		class="modal-title"
		id="mySmallModalLabel"
		toggle={() => {
			tog_small();
		}}
	>
		Small Modal
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={tog_small}
			><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Button
	color="primary"
	on:click={tog_fullscreen}
	>Fullscreen Modal</Button
>

<Button color="info" on:click={tog_xlarge}
	>Extra large Modal</Button
>

<Button color="success" on:click={tog_large}
	>Large Modal</Button
>

<Button color="danger" on:click={tog_small}
	>Small Modal</Button
>
`;
  const fullscreenResponsiveCode = `
<!-- Fullscreen Modals -->
let modal_fullscreen1 = false;
const tog_fullscreen1 = () => (modal_fullscreen1 = !modal_fullscreen1);

let modal_fullscreen_sm = false;
const tog_fullscreen_sm = () =>
	(modal_fullscreen_sm = !modal_fullscreen_sm);

let modal_fullscreen_md = false;
const tog_fullscreen_md = () =>
	(modal_fullscreen_md = !modal_fullscreen_md);

let modal_fullscreen_lg = false;
const tog_fullscreen_lg = () =>
	(modal_fullscreen_lg = !modal_fullscreen_lg);

let modal_fullscreen_xl = false;
const tog_fullscreen_xl = () =>
	(modal_fullscreen_xl = !modal_fullscreen_xl);

let modal_fullscreen_xxl = false;
const tog_fullscreen_xxl = () =>
	(modal_fullscreen_xxl = !modal_fullscreen_xxl);

	<Modal
	size="xl"
	isOpen={modal_fullscreen1}
	toggle={() => {
		tog_fullscreen1();
	}}
	class="modal-fullscreen"
	id="fullscreeexampleModal"
>
	<ModalHeader
		class="modal-title"
		id="fullscreeexampleModalLabel"
		toggle={() => {
			tog_fullscreen1();
		}}
	>
		Full screen modal
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p>
			</div>
		</div>
		<h6 class="fs-16 my-3">Graphic Design</h6>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			type="button"
			on:click={() => {
				tog_fullscreen1();
			}}
			class="btn btn-link link-success fw-medium"
			><i class="ri-close-line me-1 align-middle" />
			Close
		</Link>
		<Button color="primary" class="btn btn-primary ">Save changes</Button>
	</div>
</Modal>

<Modal
	id="exampleModalFullscreenSm"
	isOpen={modal_fullscreen_sm}
	toggle={() => {
		tog_fullscreen_sm();
	}}
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenSmLabel"
		toggle={() => {
			tog_fullscreen_sm();
		}}
	>
		Full screen below sm
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={() => {
				tog_fullscreen_sm();
			}}><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="exampleModalFullscreenMd"
	isOpen={modal_fullscreen_md}
	toggle={() => {
		tog_fullscreen_md();
	}}
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenMdLabel"
		toggle={() => {
			tog_fullscreen_md();
		}}
	>
		Full screen below md
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={() => {
				tog_fullscreen_md();
			}}><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="exampleModalFullscreenLg"
	isOpen={modal_fullscreen_lg}
	toggle={() => {
		tog_fullscreen_lg();
	}}
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenLgLabel"
		toggle={() => {
			tog_fullscreen_lg();
		}}
	>
		Full screen below lg
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={() => {
				tog_fullscreen_lg();
			}}><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="exampleModalFullscreenXl"
	isOpen={modal_fullscreen_xl}
	toggle={() => {
		tog_fullscreen_xl();
	}}
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenXlLabel"
		toggle={() => {
			tog_fullscreen_xl();
		}}
	>
		Full screen below xl
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={() => {
				tog_fullscreen_xl();
			}}><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="exampleModalFullscreenXxl"
	isOpen={modal_fullscreen_xxl}
	toggle={() => {
		tog_fullscreen_xxl();
	}}
>
	<ModalHeader
		class="modal-title"
		id="exampleModalFullscreenXxlLabel"
		toggle={() => {
			tog_fullscreen_xxl();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h6 class="fs-15">Give your text a good structure</h6>
		<div class="d-flex">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2">
				<p class="text-muted mb-0">
					Raw denim you probably haven't heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p>
			</div>
		</div>
		<div class="d-flex mt-2">
			<div class="flex-shrink-0">
				<i class="ri-checkbox-circle-fill text-success" />
			</div>
			<div class="flex-grow-1 ms-2 ">
				<p class="text-muted mb-0">
					In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p>
			</div>
		</div>
	</ModalBody>
	<div class="modal-footer">
		<Link
			href="#!"
			class="btn btn-link link-success fw-medium"
			on:click={() => {
				tog_fullscreen_xxl();
			}}><i class="ri-close-line me-1 align-middle" /> Close</Link
		>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Button
	color="primary"
	on:click={tog_fullscreen1}
	>Fullscreen modal</Button
>
<Button
	color="primary"
	on:click={tog_fullscreen_sm}
	>Full Screen Below sm</Button
>
<Button
	color="primary"
	on:click={tog_fullscreen_md}
	>Full Screen Below md</Button
>
<Button
	color="primary"
	on:click={tog_fullscreen_lg}
	>Full Screen Below lg</Button
>
<Button
	color="primary"
	on:click={tog_fullscreen_xl}
	>Full Screen Below xl</Button
>
<Button
	color="primary"
	on:click={tog_fullscreen_xxl}
	>Full Screen Below xxl</Button
>
`;
  const animationModalCode = `
<!-- Animation Modals -->
let modal_animationRight = false;
const tog_animationRight = () =>
	(modal_animationRight = !modal_animationRight);

let modal_animationLeft = false;
const tog_animationLeft = () =>
	(modal_animationLeft = !modal_animationLeft);

let modal_animationUp = false;
const tog_animationUp = () => (modal_animationUp = !modal_animationUp);

let modal_animationFlip = false;
const tog_animationFlip = () =>
	(modal_animationFlip = !modal_animationFlip);

let modal_animationZoom = false;
const tog_animationZoom = () =>
	(modal_animationZoom = !modal_animationZoom);

	<Modal
	id="fadeInRightModal"
	isOpen={modal_animationRight}
	toggle={() => {
		tog_animationRight();
	}}
	modalClass="fadeInRight"
	centered
>
	<ModalHeader
		class="modal-title"
		id="fadeInRightModalLabel"
		toggle={() => {
			tog_animationRight();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-16">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_animationRight();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="fadeInleftModal"
	isOpen={modal_animationLeft}
	toggle={() => {
		tog_animationLeft();
	}}
	modalClass="fadeInLeft"
	centered
>
	<ModalHeader
		class="modal-title"
		id="fadeInleftModalLabel"
		toggle={() => {
			tog_animationLeft();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-16">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_animationLeft();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="fadeInUpModal"
	isOpen={modal_animationUp}
	toggle={() => {
		tog_animationUp();
	}}
	modalClass="fadeInUp"
	centered
>
	<ModalHeader
		class="modal-title"
		id="fadeInUpModalLabel"
		toggle={() => {
			tog_animationUp();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-16">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_animationUp();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="flipModal"
	isOpen={modal_animationFlip}
	toggle={() => {
		tog_animationFlip();
	}}
	modalClass="flip"
	centered
>
	<ModalHeader
		class="modal-title"
		id="flipModalLabel"
		toggle={() => {
			tog_animationFlip();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-16">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_animationFlip();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Modal
	id="flipModal"
	isOpen={modal_animationZoom}
	toggle={() => {
		tog_animationZoom();
	}}
	modalClass="zoomIn"
	centered
>
	<ModalHeader
		class="modal-title"
		id="flipModalLabel"
		toggle={() => {
			tog_animationZoom();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody>
		<h5 class="fs-16">Overflowing text to show scroll behavior</h5>
		<p class="text-muted">
			One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="text-muted">
			The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. "What's
			happened to me?" he thought.
		</p>
	</ModalBody>
	<div class="modal-footer">
		<Button
			color="light"
			on:click={() => {
				tog_animationZoom();
			}}
		>
			Close
		</Button>
		<Button color="primary">Save changes</Button>
	</div>
</Modal>

<Button
	color="primary"
	on:click={tog_animationRight}
	>Fade In Right Modal</Button
>
<Button
	color="primary"
	on:click={tog_animationLeft}
	>Fade In Left Modal</Button
>
<Button
	color="primary"
	on:click={tog_animationUp}
	>Fade In Up Modal</Button
>
<Button
	color="primary"
	on:click={tog_animationFlip}
	>Flip Modal</Button
>
<Button
	color="primary"
	on:click={tog_animationZoom}
	>Zoom In Modal</Button
>
`;
  const positionModalCode = `
<!-- Positions Modals -->
let modal_positionTop = false;
const tog_positionTop = () => (modal_positionTop = !modal_positionTop);

let modal_positionTopRight = false;
const tog_positionTopRight = () =>
	(modal_positionTopRight = !modal_positionTopRight);

let modal_positionBottom = false;
const tog_positionBottom = () =>
	(modal_positionBottom = !modal_positionBottom);

let modal_positionBottomRight = false;
const tog_positionBottomRight = () =>
	(modal_positionBottomRight = !modal_positionBottomRight);

	<Modal
	id="topmodal"
	isOpen={modal_positionTop}
	toggle={() => {
		tog_positionTop();
	}}
>
	<ModalHeader
		class="modal-title"
		id="myModalLabel"
		toggle={() => {
			tog_positionTop();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/pithnlch.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width: 120px; height: 120px"
		/>
		<div class="mt-4">
			<h4 class="mb-3">Your event has been created.</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Link
					href="#!"
					class="btn btn-link link-success fw-medium"
					on:click={() => {
						tog_positionTop();
					}}><i class="ri-close-line me-1 align-middle" /> Close</Link
				>
				<Link href="#!" class="btn btn-success">Completed</Link>
			</div>
		</div>
	</ModalBody>
</Modal>

<Modal
	id="top-rightmodal"
	isOpen={modal_positionTopRight}
	toggle={() => {
		tog_positionTopRight();
	}}
	class="modal-dialog-right"
>
	<ModalHeader
		class="modal-title"
		id="myModalLabel"
		toggle={() => {
			tog_positionTopRight();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/pithnlch.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width: 120px; height: 120px"
		/>
		<div class="mt-4">
			<h4 class="mb-3">Your event has been created.</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Link
					href="#!"
					class="btn btn-link link-success fw-medium"
					on:click={() => {
						tog_positionTopRight();
					}}><i class="ri-close-line me-1 align-middle" /> Close</Link
				>
				<Link href="#!" class="btn btn-success">Completed</Link>
			</div>
		</div>
	</ModalBody>
</Modal>

<Modal
	id="bottomModal"
	isOpen={modal_positionBottom}
	toggle={() => {
		tog_positionBottom();
	}}
	class="modal-dialog-bottom"
>
	<ModalHeader
		class="modal-title"
		id="myModalLabel"
		toggle={() => {
			tog_positionBottom();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/pithnlch.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width: 120px; height: 120px"
		/>
		<div class="mt-4">
			<h4 class="mb-3">Your event has been created.</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Link
					href="#!"
					class="btn btn-link link-success fw-medium"
					on:click={tog_positionBottom}><i class="ri-close-line me-1 align-middle" /> Close</Link
				>
				<Link href="#!" class="btn btn-success">Completed</Link>
			</div>
		</div>
	</ModalBody>
</Modal>

<Modal
	id="bottom-rightModal"
	isOpen={modal_positionBottomRight}
	toggle={() => {
		tog_positionBottomRight();
	}}
	class="modal-dialog-bottom-right"
>
	<ModalHeader
		class="modal-title"
		id="myModalLabel"
		toggle={() => {
			tog_positionBottomRight();
		}}
	>
		Modal Heading
	</ModalHeader>
	<ModalBody class="text-center p-5">
		<lord-icon
			src="//cdn.lordicon.com/pithnlch.json"
			trigger="loop"
			colors="primary:#121331,secondary:#08a88a"
			style="width: 120px; height: 120px"
		/>
		<div class="mt-4">
			<h4 class="mb-3">Your event has been created.</h4>
			<p class="text-muted mb-4">
				The transfer was not successfully received by us. the email of
				the recipient wasn't correct.
			</p>
			<div class="hstack gap-2 justify-content-center">
				<Link
					href="#!"
					class="btn btn-link link-success fw-medium"
					on:click={tog_positionBottomRight}><i class="ri-close-line me-1 align-middle" /> Close</Link
				>
				<Link href="#!" class="btn btn-success">Completed</Link>
			</div>
		</div>
	</ModalBody>
</Modal>

<Button
	color="primary"
	on:click={tog_positionTop}
	>Top Modal</Button
>
<Button
	color="secondary"
	on:click={tog_positionTopRight}
	>Top Right Modal</Button
>
<Button
	color="success"
	on:click={tog_positionBottom}
	>Bottom Modal</Button
>
<Button
	color="danger"
	on:click={tog_positionBottomRight}
	>Bottom Right Modal</Button
>
`;
  return `${$$result.head += `${$$result.title = `<title>Modals | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Modals", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Modal" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted text-muted"}">A default modal Example.
						</p>
						<div class="${"live-preview"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Standard Modal`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultModalCode,
                        id: "defaultModalCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Vertically Centered Modal" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>modal-dialog-centered</code> class to show
							vertically center the modal.
						</p>
						<div class="${"live-preview"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Center Modal`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: centeredModalCode,
                        id: "centeredModalCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Grids in Modals" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Launch Demo Modal`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: gridsModalCode,
                        id: "gridsModalCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Static Backdrop Modal" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Static Backdrop Modal`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: staticBackdropModalCode,
                        id: "staticBackdropModalCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Toggle Between Modal" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Open First Modal`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: togglebetweenCode,
                        id: "togglebetweenCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Tooltips and Popovers" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Launch Demo Modal`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: tooltipModalCode,
                        id: "tooltipModalCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Scrollable Modal" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div>${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Scrollable Modal`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: scrollableModalCode,
                        id: "scrollableModalCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Varying Modal Content" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div><div class="${"hstack gap-2 flex-wrap"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Open Modal for Mary`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Open Modal for Jennifer`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Open Modal for Roderick`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: varyingModalCode,
                        id: "varyingModalCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Optional Sizes" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>modal-fullscreen</code>,
							<code>modal-xl</code>, <code>modal-lg</code>, or
							<code>modal-sm</code> class to modal-dialog class to
							set different size modal respectively.
						</p>
						<div class="${"live-preview"}"><div><div class="${"hstack flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Fullscreen Modal`;
                        }
                      })}

									${validate_component(Button, "Button").$$render($$result, { color: "info" }, {}, {
                        default: () => {
                          return `Extra large Modal`;
                        }
                      })}

									${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Large Modal`;
                        }
                      })}

									${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `Small Modal`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: optionalModalCode,
                        id: "optionalModalCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Fullscreen Responsive Modals" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted text-muted"}">Below mentioned modifier classes are used to show
							fullscreen modal as per minimum screen requirement.
						</p>
						<div class="${"live-preview"}"><div><div class="${"hstack gap-2 flex-wrap"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Fullscreen modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Full Screen Below sm`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Full Screen Below md`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Full Screen Below lg`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Full Screen Below xl`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Full Screen Below xxl`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: fullscreenResponsiveCode,
                        id: "fullscreenResponsiveCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Animation Modals" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>fadeInRight</code>,
							<code>fadeInLeft</code>, <code>fadeInUp</code>,
							<code>flip</code>, or <code>zoomIn</code> class to modal
							class to set different modal with animation effect respectively.
						</p>
						<div class="${"live-preview"}"><div><div class="${"hstack gap-2 flex-wrap"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Fade In Right Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Fade In Left Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Fade In Up Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Flip Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Zoom In Modal`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: animationModalCode,
                        id: "animationModalCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Modal Positions" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted text-muted"}">Use <code>modal-dialog-right</code>,
							<code>modal-dialog-bottom</code>, or
							<code>modal-dialog-bottom-right</code> class to modal-dialog
							class to set modal at different positions respectively.
						</p>
						<div class="${"live-preview"}"><div><div class="${"hstack gap-2 flex-wrap"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Top Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `Top Right Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Bottom Modal`;
                        }
                      })}
									${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `Bottom Right Modal`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: positionModalCode,
                        id: "positionModalCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, { class: "mt-2" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"justify-content-between d-flex align-items-center mb-3"}"><h5 class="${"mb-0 pb-1 text-decoration-underline"}">Custom Modals Example</h5></div>
				${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, { class: "text-center border" }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 pb-0" }, {}, {
                            default: () => {
                              return `<h5 class="${"mb-4"}">Success Message</h5>
								<p class="${"text-muted"}">Here is an example of a sweet alert with a success message.</p>
								<div>${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#success-Payment"
                              }, {}, {
                                default: () => {
                                  return `Click me`;
                                }
                              })}</div>

								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 10 }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", paymentImg, 0)} alt="${"Mac"}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}

					${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, { class: "text-center border" }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 pb-0" }, {}, {
                            default: () => {
                              return `<h5 class="${"mb-4"}">Login Modals</h5>
								<p class="${"text-muted"}">Here is an example of a sweet alert with a error message.</p>
								<div>${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#loginModals"
                              }, {}, {
                                default: () => {
                                  return `Click me`;
                                }
                              })}</div>

								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 10 }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", loginImg, 0)} alt="${"Mac"}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}

					${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, { class: "text-center border" }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 pb-0" }, {}, {
                            default: () => {
                              return `<h5 class="${"mb-4"}">Subscribe Modals</h5>
								<p class="${"text-muted"}">Here is an example of a sweet alert with a warning message.</p>
								<div>${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#subscribeModals"
                              }, {}, {
                                default: () => {
                                  return `Click me`;
                                }
                              })}</div>

								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 10 }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", subscribeImg, 0)} alt="${"Mac"}" class="${"img-fluid"}"></div>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}

					${validate_component(Col, "Col").$$render($$result, { xl: 4, md: 6 }, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, { class: "text-center border" }, {}, {
                        default: () => {
                          return `${validate_component(CardBody, "CardBody").$$render($$result, { class: "p-4 pb-0" }, {}, {
                            default: () => {
                              return `<h5 class="${"mb-4"}">Sign Up Modals</h5>
								<p class="${"text-muted"}">Here is an example of a sweet alert with a community registration field. </p>

								<div>${validate_component(Button, "Button").$$render($$result, {
                                color: "primary",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#signupModals"
                              }, {}, {
                                default: () => {
                                  return `Click me`;
                                }
                              })}</div>

								${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center mt-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: 10 }, {}, {
                                    default: () => {
                                      return `<div><img${add_attribute("src", signupImg, 0)} alt="${"Mac"}" class="${"img-fluid"}"></div>`;
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
          })}`;
        }
      })}`;
    }
  })}</div>


${validate_component(Modal, "Modal").$$render($$result, {
    id: "myModal",
    isOpen: modal_standard,
    toggle: () => {
      tog_standard();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myModalLabel",
        toggle: () => {
          tog_standard();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-15"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>
		<p class="${"text-muted"}">It wasn&#39;t a dream. His room, a proper human room although a little
			too small, lay peacefully between its four familiar walls.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_center,
    toggle: () => {
      tog_center();
    },
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { class: "modal-title" }, {}, {})}

	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/hrqwmuhr.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width:120px;height:120px"}"></lord-icon>
		<div class="${"mt-4"}"><h4 class="${"mb-3"}">Oops something went wrong!</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
            default: () => {
              return `Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-danger" }, {}, {
            default: () => {
              return `Try Again`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_grid,
    toggle: () => {
      tog_grid();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        toggle: () => {
          tog_grid();
        }
      }, {}, {
        default: () => {
          return `Grid Modals
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form action="${"#"}"><div class="${"row g-3"}">${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<div>${validate_component(Label, "Label").$$render($$result, { for: "firstName", class: "form-label" }, {}, {
                default: () => {
                  return `First Name`;
                }
              })}
						${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "firstName",
                placeholder: "Enter firstname"
              }, {}, {})}</div>`;
            }
          })}
				${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `<div>${validate_component(Label, "Label").$$render($$result, { for: "lastName", class: "form-label" }, {}, {
                default: () => {
                  return `Last Name`;
                }
              })}
						${validate_component(Input, "Input").$$render($$result, {
                type: "text",
                class: "form-control",
                id: "lastName",
                placeholder: "Enter lastname"
              }, {}, {})}</div>`;
            }
          })}
				${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, { class: "form-label" }, {}, {
                default: () => {
                  return `Gender`;
                }
              })}
					<div><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"inlineRadio1"}" value="${"option1"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "form-check-label",
                for: "inlineRadio1"
              }, {}, {
                default: () => {
                  return `Male`;
                }
              })}</div>
						<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"inlineRadio2"}" value="${"option2"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "form-check-label",
                for: "inlineRadio2"
              }, {}, {
                default: () => {
                  return `Female`;
                }
              })}</div>
						<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"inlineRadio3"}" value="${"option3"}">
							${validate_component(Label, "Label").$$render($$result, {
                class: "form-check-label",
                for: "inlineRadio3"
              }, {}, {
                default: () => {
                  return `Others`;
                }
              })}</div></div>`;
            }
          })}
				${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, { for: "emailInput", class: "form-label" }, {}, {
                default: () => {
                  return `Email`;
                }
              })}
					${validate_component(Input, "Input").$$render($$result, {
                type: "email",
                class: "form-control",
                id: "emailInput",
                placeholder: "Enter your email"
              }, {}, {})}`;
            }
          })}
				${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, {
                for: "passwordInput",
                class: "form-label"
              }, {}, {
                default: () => {
                  return `Password`;
                }
              })}
					${validate_component(Input, "Input").$$render($$result, {
                type: "password",
                class: "form-control",
                id: "passwordInput",
                value: "451326546",
                placeholder: "Enter password"
              }, {}, {})}`;
            }
          })}
				${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="${"hstack gap-2 justify-content-end"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                default: () => {
                  return `Close`;
                }
              })}
						${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                default: () => {
                  return `Submit`;
                }
              })}</div>`;
            }
          })}</div></form>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_backdrop,
    toggle: () => {
      tog_backdrop();
    },
    backdrop: "static",
    id: "staticBackdrop",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "staticBackdropLabel",
        toggle: () => {
          tog_backdrop();
        }
      }, {}, {
        default: () => {
          return `Modal title
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/lupuorrc.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width: 120px; height: 120px"}"></lord-icon>

		<div class="${"mt-4"}"><h4 class="${"mb-3"}">You&#39;ve made it!</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-link link-success fw-medium"
          }, {}, {
            default: () => {
              return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
            default: () => {
              return `Completed`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_togFirst,
    toggle: () => {
      tog_togFirst();
    },
    id: "firstmodal",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalToggleLabel",
        toggle: () => {
          tog_togFirst();
        }
      }, {}, {
        default: () => {
          return `Modal 1
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/tdrtiskw.json"}" trigger="${"loop"}" colors="${"primary:#f7b84b,secondary:#405189"}" style="${"width: 130px; height: 130px"}"></lord-icon>
		<div class="${"mt-4 pt-4"}"><h4>Uh oh, something went wrong!</h4>
			<p class="${"text-muted"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>

			${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
            default: () => {
              return `Continue
			`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_togSecond,
    toggle: () => {
      tog_togSecond();
    },
    id: "secondmodal",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalToggleLabel2",
        toggle: () => {
          tog_togSecond();
        }
      }, {}, {
        default: () => {
          return `Modal 2
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/zpxybbhl.json"}" trigger="${"loop"}" colors="${"primary:#405189,secondary:#0ab39c"}" style="${"width: 150px; height: 150px"}"></lord-icon>
		<div class="${"mt-4 pt-3"}"><h4 class="${"mb-3"}">Follow-Up Email</h4>
			<p class="${"text-muted mb-4"}">Hide this modal and show the first with the button below
				Automatically Send your invitees a follow -Up email.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
            default: () => {
              return `Back to First
				`;
            }
          })}
				${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
            default: () => {
              return `Close`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_tooltip,
    toggle: () => {
      tog_tooltip();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        toggle: () => {
          tog_tooltip();
        }
      }, {}, {
        default: () => {
          return `Tooltips and Popovers Modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Popover in a Modal</h5>
		<p class="${"text-muted"}">You only need to know a little to make a big
			${escape(" ")}${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "popover-test fw-medium text-decoration-underline link-success",
            id: "Popover"
          }, {}, {
            default: () => {
              return `Popover on Click
			`;
            }
          })}${escape(" ")}
			you do every day. So let&#39;s get started. First, some common types of fonts
			and what you need to know about them triggers a popover on click.
		</p>
		${validate_component(Popover, "Popover").$$render($$result, {
            placement: "bottom",
            target: "Popover",
            title: "Common Types of Fonts"
          }, {}, {
            default: () => {
              return `They&#39;re a good choice for more traditional projects.
		`;
            }
          })}

		<h5 class="${"fs-16"}">Tooltips in a Modal</h5>
		<p class="${"text-muted"}">Opposites attract, and that\u2019s a fact. It\u2019s in our
			${escape(" ")}${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "tooltip-test text-decoration-underline fw-medium",
            id: "Tooltip1"
          }, {}, {
            default: () => {
              return `graphic design
			`;
            }
          })}${escape(" ")} to be interested in the unusual, and that\u2019s why using
			${escape(" ")}${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "tooltip-test text-decoration-underline",
            id: "Tooltip2"
          }, {}, {
            default: () => {
              return `design`;
            }
          })}
			contrasting colors in Graphic Design is a must.
		</p>
		${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Tooltip1" }, {}, {
            default: () => {
              return `Morton Bayer`;
            }
          })}
		${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Tooltip2" }, {}, {
            default: () => {
              return `Web Developers`;
            }
          })}`;
        }
      })}
	<div class="${"modal-footer"}"><div class="${"mx-auto"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link fw-medium"
      }, {}, {
        default: () => {
          return `Read More <i class="${"ri-arrow-right-line ms-1 align-middle"}"></i>`;
        }
      })}</div></div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_scroll,
    toggle: () => {
      tog_scroll();
    },
    scrollable: true,
    id: "exampleModalScrollable"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalScrollableTitle",
        toggle: () => {
          tog_scroll();
        }
      }, {}, {
        default: () => {
          return `Scrollable modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">You&#39;ve probably heard that opposites attract. The same is
					true for fonts. Don&#39;t be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<h6 class="${"fs-16 my-3"}">Graphic Design</h6>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p></div></div>`;
        }
      })}

	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    size: "xl",
    isOpen: modal_fullscreen,
    toggle: () => {
      tog_fullscreen();
    },
    class: "modal-fullscreen",
    id: "exampleModalFullscreen"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenLabel",
        toggle: () => {
          tog_fullscreen();
        }
      }, {}, {
        default: () => {
          return `Fullscreen Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">You&#39;ve probably heard that opposites attract. The same is
					true for fonts. Don&#39;t be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<h6 class="${"fs-16 my-3"}">Graphic Design</h6>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        color: "light",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i>
			Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, {
        color: "primary",
        class: "btn btn-primary "
      }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    size: "xl",
    isOpen: modal_xlarge,
    toggle: () => {
      tog_xlarge();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myExtraLargeModalLabel",
        toggle: () => {
          tog_xlarge();
        }
      }, {}, {
        default: () => {
          return `Extra large modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">You&#39;ve probably heard that opposites attract. The same is
					true for fonts. Don&#39;t be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<h6 class="${"fs-16 my-3"}">Graphic Design</h6>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    size: "lg",
    isOpen: modal_large,
    toggle: () => {
      tog_large();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myLargeModalLabel",
        toggle: () => {
          tog_large();
        }
      }, {}, {
        default: () => {
          return `Large Modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">You&#39;ve probably heard that opposites attract. The same is
					true for fonts. Don&#39;t be afraid to combine font styles that
					are different but complementary, like sans serif with serif,
					short with tall, or decorative with simple. Qui photo booth
					letterpress, commodo enim craft beer mlkshk aliquip jean
					shorts ullamco ad vinyl cillum PBR.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<h6 class="${"fs-16 my-3"}">Graphic Design</h6>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Just like in the image where we talked about using multiple
					fonts, you can see that the background in this graphic
					design is blurred. Whenever you put text on top of an image,
					it\u2019s important that your viewers can understand.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Keytar raw denim keffiyeh etsy art party before they sold
					out master cleanse gluten-free squid scenester freegan cosby
					sweater.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    size: "sm",
    isOpen: modal_small,
    toggle: () => {
      tog_small();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "mySmallModalLabel",
        toggle: () => {
          tog_small();
        }
      }, {}, {
        default: () => {
          return `Small Modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    size: "xl",
    isOpen: modal_fullscreen1,
    toggle: () => {
      tog_fullscreen1();
    },
    class: "modal-fullscreen",
    id: "fullscreeexampleModal"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "fullscreeexampleModalLabel",
        toggle: () => {
          tog_fullscreen1();
        }
      }, {}, {
        default: () => {
          return `Full screen modal
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">For that very reason, I went on a quest and spoke to many
					different professional graphic designers and asked them what
					graphic design tips they live.
				</p></div></div>
		<h6 class="${"fs-16 my-3"}">Graphic Design</h6>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Opposites attract, and that\u2019s a fact. It\u2019s in our nature to
					be interested in the unusual, and that\u2019s why using
					contrasting colors in Graphic Design is a must. It\u2019s
					eye-catching, it makes a statement, it\u2019s impressive graphic
					design. Increase or decrease the letter spacing depending.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Trust fund seitan letterpress, keytar raw denim keffiyeh
					etsy art party before they sold out master cleanse
					gluten-free squid scenester freegan cosby sweater.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        type: "button",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i>
			Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, {
        color: "primary",
        class: "btn btn-primary "
      }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "exampleModalFullscreenSm",
    isOpen: modal_fullscreen_sm,
    toggle: () => {
      tog_fullscreen_sm();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenSmLabel",
        toggle: () => {
          tog_fullscreen_sm();
        }
      }, {}, {
        default: () => {
          return `Full screen below sm
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "exampleModalFullscreenMd",
    isOpen: modal_fullscreen_md,
    toggle: () => {
      tog_fullscreen_md();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenMdLabel",
        toggle: () => {
          tog_fullscreen_md();
        }
      }, {}, {
        default: () => {
          return `Full screen below md
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "exampleModalFullscreenLg",
    isOpen: modal_fullscreen_lg,
    toggle: () => {
      tog_fullscreen_lg();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenLgLabel",
        toggle: () => {
          tog_fullscreen_lg();
        }
      }, {}, {
        default: () => {
          return `Full screen below lg
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "exampleModalFullscreenXl",
    isOpen: modal_fullscreen_xl,
    toggle: () => {
      tog_fullscreen_xl();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenXlLabel",
        toggle: () => {
          tog_fullscreen_xl();
        }
      }, {}, {
        default: () => {
          return `Full screen below xl
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "exampleModalFullscreenXxl",
    isOpen: modal_fullscreen_xxl,
    toggle: () => {
      tog_fullscreen_xxl();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "exampleModalFullscreenXxlLabel",
        toggle: () => {
          tog_fullscreen_xxl();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="${"fs-15"}">Give your text a good structure</h6>
		<div class="${"d-flex"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2"}"><p class="${"text-muted mb-0"}">Raw denim you probably haven&#39;t heard of them jean shorts
					Austin. Nesciunt tofu stumptown aliqua, retro synth master
					cleanse.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">Too much or too little spacing, as in the example below, can
					make things unpleasant for the reader. The goal is to make
					your text as comfortable to read as possible.
				</p></div></div>
		<div class="${"d-flex mt-2"}"><div class="${"flex-shrink-0"}"><i class="${"ri-checkbox-circle-fill text-success"}"></i></div>
			<div class="${"flex-grow-1 ms-2 "}"><p class="${"text-muted mb-0"}">In some designs, you might adjust your tracking to create a
					certain artistic effect. It can also help you fix fonts that
					are poorly spaced to begin with.
				</p></div></div>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "btn btn-link link-success fw-medium"
      }, {}, {
        default: () => {
          return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_varying1,
    toggle: () => {
      tog_varying1();
    },
    id: "exampleModal"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        toggle: () => {
          tog_varying1();
        }
      }, {}, {
        default: () => {
          return `New message to Mary
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "customer-name",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Customer Name:`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "customer-name",
            value: "Mary",
            readOnly: true
          }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "message-text",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Message:`;
            }
          })}
				<textarea class="${"form-control"}" id="${"message-text"}" rows="${"4"}"></textarea></div></form>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Back`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Send message`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_varying2,
    toggle: () => {
      tog_varying2();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        toggle: () => {
          tog_varying2();
        }
      }, {}, {
        default: () => {
          return `New message to Jennifer
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "customer-name",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Customer Name:`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "customer-name",
            value: "Jennifer",
            readOnly: true
          }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "message-text",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Message:`;
            }
          })}
				<textarea class="${"form-control"}" id="${"message-text"}" rows="${"4"}"></textarea></div></form>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Back`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Send message`;
        }
      })}</div>`;
    }
  })};

${validate_component(Modal, "Modal").$$render($$result, {
    isOpen: modal_varying3,
    toggle: () => {
      tog_varying3();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        toggle: () => {
          tog_varying3();
        }
      }, {}, {
        default: () => {
          return `New message to Roderick
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "customer-name",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Customer Name:`;
            }
          })}
				${validate_component(Input, "Input").$$render($$result, {
            type: "text",
            class: "form-control",
            id: "customer-name",
            value: "Roderick",
            readOnly: true
          }, {}, {})}</div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            for: "message-text",
            class: "col-form-label"
          }, {}, {
            default: () => {
              return `Message:`;
            }
          })}
				<textarea class="${"form-control"}" id="${"message-text"}" rows="${"4"}"></textarea></div></form>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Back`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Send message`;
        }
      })}</div>`;
    }
  })};

${validate_component(Modal, "Modal").$$render($$result, {
    id: "fadeInRightModal",
    isOpen: modal_animationRight,
    toggle: () => {
      tog_animationRight();
    },
    modalClass: "fadeInRight",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "fadeInRightModalLabel",
        toggle: () => {
          tog_animationRight();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "fadeInleftModal",
    isOpen: modal_animationLeft,
    toggle: () => {
      tog_animationLeft();
    },
    modalClass: "fadeInLeft",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "fadeInleftModalLabel",
        toggle: () => {
          tog_animationLeft();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "fadeInUpModal",
    isOpen: modal_animationUp,
    toggle: () => {
      tog_animationUp();
    },
    modalClass: "fadeInUp",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "fadeInUpModalLabel",
        toggle: () => {
          tog_animationUp();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "flipModal",
    isOpen: modal_animationFlip,
    toggle: () => {
      tog_animationFlip();
    },
    modalClass: "flip",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "flipModalLabel",
        toggle: () => {
          tog_animationFlip();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "flipModal",
    isOpen: modal_animationZoom,
    toggle: () => {
      tog_animationZoom();
    },
    modalClass: "zoomIn",
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "flipModalLabel",
        toggle: () => {
          tog_animationZoom();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="${"fs-16"}">Overflowing text to show scroll behavior</h5>
		<p class="${"text-muted"}">One morning, when Gregor Samsa woke from troubled dreams, he found
			himself transformed in his bed into a horrible vermin. He lay on his
			armour-like back, and if he lifted his head a little he could see
			his brown belly, slightly domed and divided by arches into stiff
			sections.
		</p>
		<p class="${"text-muted"}">The bedding was hardly able to cover it and seemed ready to slide
			off any moment. His many legs, pitifully thin compared with the size
			of the rest of him, waved about helplessly as he looked. &quot;What&#39;s
			happened to me?&quot; he thought.
		</p>`;
        }
      })}
	<div class="${"modal-footer"}">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
        default: () => {
          return `Close
		`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `Save changes`;
        }
      })}</div>`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "topmodal",
    isOpen: modal_positionTop,
    toggle: () => {
      tog_positionTop();
    }
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myModalLabel",
        toggle: () => {
          tog_positionTop();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/pithnlch.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width: 120px; height: 120px"}"></lord-icon>
		<div class="${"mt-4"}"><h4 class="${"mb-3"}">Your event has been created.</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-link link-success fw-medium"
          }, {}, {
            default: () => {
              return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
            default: () => {
              return `Completed`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "top-rightmodal",
    isOpen: modal_positionTopRight,
    toggle: () => {
      tog_positionTopRight();
    },
    class: "modal-dialog-right"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myModalLabel",
        toggle: () => {
          tog_positionTopRight();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/pithnlch.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width: 120px; height: 120px"}"></lord-icon>
		<div class="${"mt-4"}"><h4 class="${"mb-3"}">Your event has been created.</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-link link-success fw-medium"
          }, {}, {
            default: () => {
              return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
            default: () => {
              return `Completed`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "bottomModal",
    isOpen: modal_positionBottom,
    toggle: () => {
      tog_positionBottom();
    },
    class: "modal-dialog-bottom"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myModalLabel",
        toggle: () => {
          tog_positionBottom();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/pithnlch.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width: 120px; height: 120px"}"></lord-icon>
		<div class="${"mt-4"}"><h4 class="${"mb-3"}">Your event has been created.</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-link link-success fw-medium"
          }, {}, {
            default: () => {
              return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
            default: () => {
              return `Completed`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "bottom-rightModal",
    isOpen: modal_positionBottomRight,
    toggle: () => {
      tog_positionBottomRight();
    },
    class: "modal-dialog-bottom-right"
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "modal-title",
        id: "myModalLabel",
        toggle: () => {
          tog_positionBottomRight();
        }
      }, {}, {
        default: () => {
          return `Modal Heading
	`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<lord-icon src="${"//cdn.lordicon.com/pithnlch.json"}" trigger="${"loop"}" colors="${"primary:#121331,secondary:#08a88a"}" style="${"width: 120px; height: 120px"}"></lord-icon>
		<div class="${"mt-4"}"><h4 class="${"mb-3"}">Your event has been created.</h4>
			<p class="${"text-muted mb-4"}">The transfer was not successfully received by us. the email of
				the recipient wasn&#39;t correct.
			</p>
			<div class="${"hstack gap-2 justify-content-center"}">${validate_component(Link, "Link").$$render($$result, {
            href: "#!",
            class: "btn btn-link link-success fw-medium"
          }, {}, {
            default: () => {
              return `<i class="${"ri-close-line me-1 align-middle"}"></i> Close`;
            }
          })}
				${validate_component(Link, "Link").$$render($$result, { href: "#!", class: "btn btn-success" }, {}, {
            default: () => {
              return `Completed`;
            }
          })}</div></div>`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "success-Payment",
    tabIndex: "-1",
    isOpen: modal_successMessage,
    toggle: () => {
      tog_successMessage();
    },
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "text-center p-5" }, {}, {
        default: () => {
          return `<div class="${"text-end"}"><button type="${"button"}" class="${"btn-close text-end"}" data-bs-dismiss="${"modal"}" aria-label="${"Close"}"></button></div>
		<div class="${"mt-2"}"><lord-icon src="${"https://cdn.lordicon.com/tqywkdcz.json"}" trigger="${"hover"}" style="${"width: 150px; height: 150px"}"></lord-icon>
			<h4 class="${"mb-3 mt-4"}">Your Transaction is Successfull !</h4>
			<p class="${"text-muted fs-15 mb-4"}">Successful transaction is the status of operation whose result is the payment of the amount paid by the customer in favor of the merchant.</p>
			<div class="${"hstack gap-2 justify-content-center"}"><button class="${"btn btn-primary"}">New transaction</button>
				<button class="${"btn btn-soft-success"}"><i class="${"ri-links-line align-bottom"}"></i> Copy tracking link</button></div></div>`;
        }
      })}
	<div class="${"modal-footer bg-light p-3 justify-content-center"}"><p class="${"mb-0 text-muted"}">You like our service? ${validate_component(Link, "Link").$$render($$result, {
        href: "#!",
        class: "link-secondary fw-semibold"
      }, {}, {
        default: () => {
          return `Invite Friends`;
        }
      })}</p></div>`;
    }
  })}


${validate_component(Modal, "Modal").$$render($$result, {
    id: "loginModals",
    tabIndex: "-1",
    isOpen: modal_loginModals,
    toggle: () => {
      tog_loginModals();
    },
    centered: true
  }, {}, {
    default: () => {
      return `<div class="${"modal-content border-0 overflow-hidden"}">${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "login-modal p-5" }, {}, {
        default: () => {
          return `<h5 class="${"text-white fs-20"}">Login</h5>
			<p class="${"text-white-50 mb-4"}">Don&#39;t have an account? ${validate_component(Link, "Link").$$render($$result, { href: "/#", class: "text-white" }, {}, {
            default: () => {
              return `Sign Up.`;
            }
          })}</p>
			<div class="${"vstack gap-2 justify-content-center"}"><button class="${"btn btn-light"}"><i class="${"ri-google-fill align-bottom text-danger"}"></i> Google</button>
				<button class="${"btn btn-info"}"><i class="${"ri-facebook-fill align-bottom"}"></i> Facebook</button></div>`;
        }
      })}
		${validate_component(ModalBody, "ModalBody").$$render($$result, { class: "p-5" }, {}, {
        default: () => {
          return `<h5 class="${"mb-3"}">Login with Email</h5>
			<form><div class="${"mb-2"}"><input type="${"email"}" class="${"form-control"}" id="${"exampleInputEmail1"}" placeholder="${"Enter your email/username"}"></div>
				<div class="${"mb-3"}"><input type="${"password"}" class="${"form-control"}" id="${"exampleInputPassword1"}" placeholder="${"Enter your password"}">
					<div class="${"mt-1 text-end"}">${validate_component(Link, "Link").$$render($$result, {
            href: "/authenticationInner/passwordreset/auth-pass-reset-basic"
          }, {}, {
            default: () => {
              return `Forgot password ?`;
            }
          })}</div></div>
				<button type="${"submit"}" class="${"btn btn-primary w-100"}">Submit</button></form>`;
        }
      })}</div>`;
    }
  })}


${validate_component(Modal, "Modal").$$render($$result, {
    id: "subscribeModals",
    tabIndex: "-1",
    isOpen: subscribeModals,
    toggle: () => {
      tog_subscribeModals();
    },
    centered: true,
    size: "lg"
  }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "g-0" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 7 }, {}, {
            default: () => {
              return `<div class="${"modal-body p-5"}"><h2 class="${"lh-base"}">Subscribe now today to get <span class="${"text-danger"}">20% off</span> experiences!</h2>
				<p class="${"text-muted mb-4"}">A free bet is a bet which is provided by a betting
					site for a customer to place and then benefit from the winnings. Free bets are commonly used as welcome offers.</p>
				<div class="${"input-group mb-3"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"Enter your email"}" aria-label="${"Example text with button addon"}" aria-describedby="${"button-addon1"}">
					<button class="${"btn btn-primary"}" type="${"button"}" id="${"button-addon1"}">Subscript Now</button></div>

				<div class="${"form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"exampleCheck1"}">
					${validate_component(Label, "Label").$$render($$result, {
                class: "form-check-label",
                htmlfor: "exampleCheck1"
              }, {}, {
                default: () => {
                  return `By subscribing to a particular channel or user on YouTube, you can receive instant updates.`;
                }
              })}</div></div>`;
            }
          })}
		${validate_component(Col, "Col").$$render($$result, { lg: 5 }, {}, {
            default: () => {
              return `<div class="${"subscribe-modals-cover h-100"}"><img${add_attribute("src", authbg, 0)} alt="${""}" class="${"h-100 w-100 object-cover"}" style="${"clipPath: polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}"></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}

${validate_component(Modal, "Modal").$$render($$result, {
    id: "signupModals",
    tabIndex: "-1",
    isOpen: modal_signUpModals,
    toggle: () => {
      tog_signUpModals();
    },
    centered: true
  }, {}, {
    default: () => {
      return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {
        class: "p-3",
        toggle: () => {
          tog_signUpModals();
        }
      }, {}, {
        default: () => {
          return `Sign Up
	`;
        }
      })}
	${validate_component(Alert, "Alert").$$render($$result, {
        color: "success",
        class: "rounded-0 mb-0"
      }, {}, {
        default: () => {
          return `<p class="${"mb-0"}">Up to <span class="${"fw-semibold"}">50% OFF</span>, Hurry up before the stock ends</p>`;
        }
      })}
	${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form><div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, { htmlfor: "fullName", class: "form-label" }, {}, {
            default: () => {
              return `Full Name`;
            }
          })}
				<input type="${"email"}" class="${"form-control"}" id="${"fullName"}" placeholder="${"Enter your name"}"></div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlfor: "emailInput",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Email address`;
            }
          })}
				<input type="${"email"}" class="${"form-control"}" id="${"emailInput"}" placeholder="${"Enter your email"}"></div>
			<div class="${"mb-3"}">${validate_component(Label, "Label").$$render($$result, {
            htmlfor: "exampleInputPassword1",
            class: "form-label"
          }, {}, {
            default: () => {
              return `Password`;
            }
          })}
				<input type="${"password"}" class="${"form-control"}" id="${"exampleInputPassword1"}" placeholder="${"Enter your password"}"></div>
			<div class="${"mb-3 form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"checkTerms"}">
				${validate_component(Label, "Label").$$render($$result, {
            class: "form-check-label",
            htmlfor: "checkTerms"
          }, {}, {
            default: () => {
              return `I agree to the <span class="${"fw-semibold"}">Terms of Service</span> and Privacy Policy`;
            }
          })}</div>
			<div class="${"text-end"}"><button type="${"submit"}" class="${"btn btn-primary"}">Sign Up Now</button></div></form>`;
        }
      })}`;
    }
  })}`;
});
export { Uimodals as default };
