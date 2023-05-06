import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index-584434b3.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { O as Offcanvas, a as OffcanvasBody } from "../../../chunks/Offcanvas-493a27d8.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { T as Tooltip } from "../../../chunks/Tooltip-8300c9d3.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { a as avatar1 } from "../../../chunks/avatar-1-413c6ccd.js";
import { a as avatar2 } from "../../../chunks/avatar-2-5b5618a1.js";
import { a as avatar3 } from "../../../chunks/avatar-3-5bcc58a8.js";
import { a as avatar4 } from "../../../chunks/avatar-4-3a2dbf60.js";
import { a as avatar6 } from "../../../chunks/avatar-6-ef07d98c.js";
import { a as avatar7 } from "../../../chunks/avatar-7-46aa251f.js";
import { a as avatar8 } from "../../../chunks/avatar-8-f9de7a45.js";
import { i as img2 } from "../../../chunks/img-2-d003c89a.js";
import { i as img3 } from "../../../chunks/img-3-4c804a8b.js";
import { i as img4 } from "../../../chunks/img-4-f8adc4d4.js";
import { i as img9 } from "../../../chunks/img-9-422942e7.js";
import { i as img10 } from "../../../chunks/img-10-09bc0399.js";
import { i as img12, a as img11 } from "../../../chunks/img-12-ccf074a3.js";
import "../../../chunks/Portal-94847a25.js";
import "../../../chunks/popper-e421ff0f.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uioffcanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const toggleDefultCanvas = () => open = !open;
  let isTop = false;
  const toggleTopCanvas = () => isTop = !isTop;
  let isRight = false;
  const toggleRightCanvas = () => isRight = !isRight;
  let isBottom = false;
  const toggleBottomCanvas = () => isBottom = !isBottom;
  let isLeft = false;
  const toggleLeftCanvas = () => isLeft = !isLeft;
  let isEnableScroll = false;
  const toggleEnableScroll = () => isEnableScroll = !isEnableScroll;
  let isBackdrop = false;
  const toggleBackdrop = () => isBackdrop = !isBackdrop;
  let isScrollBackDrop = false;
  const toggleScrollBackDrop = () => isScrollBackDrop = !isScrollBackDrop;
  const defaultOffcanvasCode = `
<!-- Base Examples -->
<Offcanvas
	isOpen={open}
	toggle={toggleDefultCanvas}
	class="offcanvas-p-0"
	id="offcanvasExample"
	header="Recent Acitivity"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div data-simplebar style="height: calc(100vh - 112px);">
			<div class="acitivity-timeline p-4">
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar1}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Oliver Phillips <span
								class="badge bg-soft-primary text-primary align-middle"
								>New</span>
						</h6>
						<p class="text-muted mb-2">
							We talked about a project on linkedin.
						</p>
						<small class="mb-0 text-muted">Today</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0 avatar-xs acitivity-avatar">
						<div class="avatar-title bg-soft-success text-success rounded-circle"
						>
							N
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Nancy Martino <span
								class="badge bg-soft-secondary text-secondary align-middle"
								>In Progress</span>
						</h6>
						<p class="text-muted mb-2">
							<i class="ri-file-text-line align-middle ms-2" /> Create
							new project Buildng product
						</p>
						<div class="avatar-group mb-2">
							<Link
								href=""
								class="avatar-group-item"
								id="Christi">
								<img
									src={avatar4}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Christi"
								>Christi</Tooltip>
							<Tooltip placement="top" target="Frank"
								>Frank Hook Ruby</Tooltip>
							<Tooltip placement="top" target="more">more</Tooltip
							>

							<Link href="" class="avatar-group-item" id="Frank">
								<img
									src={avatar3}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Frank"
								>Frank Hook</Tooltip>

							<Link href="" class="avatar-group-item" id="Ruby">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle bg-light text-primary"
									>
										R
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="Ruby">Ruby</Tooltip>

							<Link href="" class="avatar-group-item" id="more">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle">
										2+
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="more">more</Tooltip>
						</div>
						<small class="mb-0 text-muted">Yesterday</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar2}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Natasha Carey <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							Adding a new event with attachments
						</p>
						<Row class="border border-dashed gx-2 p-2 mb-2">
							<Col class="col-4">
								<img
									src={img2}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img3}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img4}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
						</Row>
						<small class="mb-0 text-muted">25 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar6}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Bethany Johnson</h6>
						<p class="text-muted mb-2">
							added a new member to velzon dashboard
						</p>
						<small class="mb-0 text-muted">19 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-danger text-danger">
								<i class="ri-shopping-bag-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Your order is placed <span
								class="badge bg-soft-danger text-danger align-middle ms-1"
								>Out of Delivery</span>
						</h6>
						<p class="text-muted mb-2">
							These customers can rest assured their order has
							been placed.
						</p>
						<small class="mb-0 text-muted">16 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar7}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Lewis Pratt</h6>
						<p class="text-muted mb-2">
							They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="mb-0 text-muted">22 Oct</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-info text-info">
								<i class="ri-line-chart-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Monthly sales report</h6>
						<p class="text-muted mb-2">
							<span class="text-danger">2 days left</span>
							notification to submit the monthly sales report. <Link
								href=""
								class="link-warning text-decoration-underline"
								>Reports Builder</Link>
						</p>
						<small class="mb-0 text-muted">15 Oct</small>
					</div>
				</div>
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar8}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							New ticket received <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							User <span class="text-secondary">Erica245</span> submitted
							a ticket.
						</p>
						<small class="mb-0 text-muted">26 Aug</small>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border-top p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>
<Link
	href=""
	class="btn btn-secondary"
	on:click={toggleDefultCanvas}
>
	Link with href
</Link>
<Button
	color="secondary"
	on:click={toggleDefultCanvas}
	>Button with target</Button
>
`;
  const placementOffcanvasCode = `
<!-- Placement Offcanvas -->
<Offcanvas
	isOpen={isTop}
	placement="top"
	toggle={toggleTopCanvas}
	id="offcanvasTop"
	header="Gallery"
	class="offcanvas-p-0"
	style="min-height: 46vh"
>
	<OffcanvasBody class="p-4">
		<Row class="gallery-light">
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box light mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img12}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									A mix of friends and strangers heading off
									to find an adventure.
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Erica Kernan</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 3.4K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 1.3K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box light mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img9}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Dramatic clouds at the Golden Gate Bridge
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Ron Mackie</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 5.1K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 4.7K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img11}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Cycling in the countryside
								</h5>
							</div>
						</Link>
					</div>

					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Nancy Martino</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 3.2K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 1.1K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6} class="d-md-none d-xl-block">
				<Card class="gallery-box mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img10}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Fun day at the Hill Station
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Henry Baird</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 632
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 95
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
	</OffcanvasBody>
</Offcanvas>
<Offcanvas
	isOpen={isRight}
	placement="end"
	toggle={toggleRightCanvas}
	id="offcanvasRight"
	header="Recent Acitivity"
	class="offcanvas-p-0"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div data-simplebar style="height: calc(100vh - 112px);">
			<div class="acitivity-timeline p-4">
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar1}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Oliver Phillips <span
								class="badge bg-soft-primary text-primary align-middle"
								>New</span>
						</h6>
						<p class="text-muted mb-2">
							We talked about a project on linkedin.
						</p>
						<small class="mb-0 text-muted">Today</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0 avatar-xs acitivity-avatar">
						<div class="avatar-title bg-soft-success text-success rounded-circle"
						>
							N
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Nancy Martino <span
								class="badge bg-soft-secondary text-secondary align-middle"
								>In Progress</span>
						</h6>
						<p class="text-muted mb-2">
							<i class="ri-file-text-line align-middle ms-2" /> Create
							new project Buildng product
						</p>
						<div class="avatar-group mb-2">
							<Link
								href=""
								class="avatar-group-item"
								id="Christi">
								<img
									src={avatar4}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Christi"
								>Christi</Tooltip>
							<Tooltip placement="top" target="Frank"
								>Frank Hook Ruby</Tooltip>
							<Tooltip placement="top" target="more">more</Tooltip
							>
							<Link href="" class="avatar-group-item" id="Frank">
								<img
									src={avatar3}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Frank"
								>Frank Hook</Tooltip>

							<Link href="" class="avatar-group-item" id="Ruby">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle bg-light text-primary"
									>
										R
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="Ruby">Ruby</Tooltip>

							<Link href="" class="avatar-group-item" id="more">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle">
										2+
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="more">more</Tooltip>
						</div>
						<small class="mb-0 text-muted">Yesterday</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar2}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Natasha Carey <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							Adding a new event with attachments
						</p>
						<div class="row border border-dashed gx-2 p-2 mb-2">
							<Col class="col-4">
								<img
									src={img2}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img3}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img4}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
						</div>
						<small class="mb-0 text-muted">25 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar6}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Bethany Johnson</h6>
						<p class="text-muted mb-2">
							added a new member to velzon dashboard
						</p>
						<small class="mb-0 text-muted">19 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-danger text-danger">
								<i class="ri-shopping-bag-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Your order is placed <span
								class="badge bg-soft-danger text-danger align-middle ms-1"
								>Out of Delivery</span>
						</h6>
						<p class="text-muted mb-2">
							These customers can rest assured their order has
							been placed.
						</p>
						<small class="mb-0 text-muted">16 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar7}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Lewis Pratt</h6>
						<p class="text-muted mb-2">
							They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="mb-0 text-muted">22 Oct</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-info text-info">
								<i class="ri-line-chart-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Monthly sales report</h6>
						<p class="text-muted mb-2">
							<span class="text-danger">2 days left</span>
							notification to submit the monthly sales report. <Link
								href=""
								class="link-warning text-decoration-underline"
								>Reports Builder</Link>
						</p>
						<small class="mb-0 text-muted">15 Oct</small>
					</div>
				</div>
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar8}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							New ticket received <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							User <span class="text-secondary">Erica245</span> submitted
							a ticket.
						</p>
						<small class="mb-0 text-muted">26 Aug</small>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>

<Offcanvas
	isOpen={isBottom}
	placement="bottom"
	toggle={toggleBottomCanvas}
	id="offcanvasBottom"
	header="Gallery"
	class="offcanvas-p-0"
	style="min-height: 46vh"
>
	<OffcanvasBody class="p-4">
		<Row class="gallery-light">
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box light mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img12}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									A mix of friends and strangers heading off
									to find an adventure.
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Erica Kernan</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 3.4K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 1.3K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box light mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img9}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Dramatic clouds at the Golden Gate Bridge
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Ron Mackie</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 5.1K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 4.7K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6}>
				<Card class="gallery-box mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img11}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Cycling in the countryside
								</h5>
							</div>
						</Link>
					</div>

					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Nancy Martino</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 5.1K
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 4.7K
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={3} lg={4} sm={6} class="d-md-none d-xl-block">
				<Card class="gallery-box mb-0">
					<div class="gallery-container">
						<Link href="" title="">
							<img
								class="gallery-img img-fluid mx-auto"
								src={img10}
								alt=""
							/>
							<div class="gallery-overlay">
								<h5 class="overlay-caption">
									Fun day at the Hill Station
								</h5>
							</div>
						</Link>
					</div>
					<div class="box-content">
						<div class="d-flex align-items-center mt-1">
							<div class="flex-grow-1 text-muted">
								by <Link href="" class="text-body text-truncate"
									>Henry Baird</Link
								>
							</div>
							<div class="flex-shrink-0">
								<div class="d-flex gap-3">
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-thumb-up-fill text-muted align-bottom me-1"
										/> 632
									</button>
									<button
										type="button"
										class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"
									>
										<i
											class="ri-question-answer-fill text-muted align-bottom me-1"
										/> 95
									</button>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
	</OffcanvasBody>
</Offcanvas>

<Offcanvas
	isOpen={isLeft}
	placement="start"
	header="Recent Acitivity"
	class="offcanvas-p-0"
	toggle={toggleLeftCanvas}
	id="offcanvasLeft"
>
	<OffcanvasBody>
		<div data-simplebar style="height: calc(100vh - 112px);">
			<div class="acitivity-timeline p-4">
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar1}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Oliver Phillips <span
								class="badge bg-soft-primary text-primary align-middle"
								>New</span>
						</h6>
						<p class="text-muted mb-2">
							We talked about a project on linkedin.
						</p>
						<small class="mb-0 text-muted">Today</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0 avatar-xs acitivity-avatar">
						<div class="avatar-title bg-soft-success text-success rounded-circle"
						>
							N
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Nancy Martino <span
								class="badge bg-soft-secondary text-secondary align-middle"
								>In Progress</span>
						</h6>
						<p class="text-muted mb-2">
							<i class="ri-file-text-line align-middle ms-2" /> Create
							new project Buildng product
						</p>
						<div class="avatar-group mb-2">
							<Link
								href=""
								class="avatar-group-item"
								id="Christi">
								<img
									src={avatar4}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Christi"
								>Christi</Tooltip>

							<Link href="" class="avatar-group-item" id="Frank">
								<img
									src={avatar3}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Frank"
								>Frank Hook</Tooltip>

							<Link href="" class="avatar-group-item" id="Ruby">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle bg-light text-primary"
									>
										R
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="Ruby">Ruby</Tooltip>

							<Link href="" class="avatar-group-item" id="more">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle">
										2+
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="more">more</Tooltip>
						</div>
						<small class="mb-0 text-muted">Yesterday</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar2}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Natasha Carey <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							Adding a new event with attachments
						</p>
						<div class="row border border-dashed gx-2 p-2 mb-2">
							<Col class="col-4">
								<img
									src={img2}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img3}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img4}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
						</div>
						<small class="mb-0 text-muted">25 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar6}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Bethany Johnson</h6>
						<p class="text-muted mb-2">
							added a new member to velzon dashboard
						</p>
						<small class="mb-0 text-muted">19 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-danger text-danger">
								<i class="ri-shopping-bag-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Your order is placed <span
								class="badge bg-soft-danger text-danger align-middle ms-1"
								>Out of Delivery</span>
						</h6>
						<p class="text-muted mb-2">
							These customers can rest assured their order has
							been placed.
						</p>
						<small class="mb-0 text-muted">16 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar7}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Lewis Pratt</h6>
						<p class="text-muted mb-2">
							They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="mb-0 text-muted">22 Oct</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-info text-info">
								<i class="ri-line-chart-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Monthly sales report</h6>
						<p class="text-muted mb-2">
							<span class="text-danger">2 days left</span>
							notification to submit the monthly sales report. <Link
								href=""
								class="link-warning text-decoration-underline"
								>Reports Builder</Link>
						</p>
						<small class="mb-0 text-muted">15 Oct</small>
					</div>
				</div>
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar8}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							New ticket received <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							User <span class="text-secondary">Erica245</span> submitted
							a ticket.
						</p>
						<small class="mb-0 text-muted">26 Aug</small>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border-top p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>
<Button
	color="primary"
	on:click={toggleTopCanvas}
	>Toggle Top Offcanvas</Button
>
<Button
	color="secondary"
	on:click={toggleRightCanvas}
	>Toggle Right Offcanvas</Button
>
<Button
	color="success"
	on:click={toggleBottomCanvas}
	>Toggle Bottom Offcanvas</Button
>
<Button
	color="danger"
	on:click={toggleLeftCanvas}
	>Toggle Left Offcanvas</Button
>
`;
  const backdropOffcanvasCode = `
<!-- Backdrop Offcanvas -->
<Offcanvas
	isOpen={isEnableScroll}
	scrollable
	backdrop={false}
	header="Customer Acitivity"
	class="offcanvas-p-0"
	toggle={toggleEnableScroll}
	id="offcanvasScrolling"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div>
			<div data-simplebar style="height: calc(100vh - 112px);">
				<div class="acitivity-timeline p-4">
					<div class="acitivity-item d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar1}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Oliver Phillips <span
									class="badge bg-soft-primary text-primary align-middle"
									>New</span
								>
							</h6>
							<p class="text-muted mb-2">
								We talked about a project on linkedin.
							</p>
							<small class="mb-0 text-muted">Today</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0 avatar-xs acitivity-avatar">
							<div class="avatar-title bg-soft-success text-success rounded-circle">
								N
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Nancy Martino <span
									class="badge bg-soft-secondary text-secondary align-middle"
									>In Progress</span
								>
							</h6>
							<p class="text-muted mb-2">
								<i
									class="ri-file-text-line align-middle ms-2"
								/> Create new project Buildng product
							</p>
							<div class="avatar-group mb-2">
								<Link
									href=""
									class="avatar-group-item"
									id="Christi"
								>
									<img
										src={avatar4}
										alt=""
										class="rounded-circle avatar-xs"
									/>
								</Link>
								<Tooltip placement="top" target="Christi"
									>Christi</Tooltip
								>
								<Link
									href=""
									class="avatar-group-item"
									id="Frank"
								>
									<img
										src={avatar3}
										alt=""
										class="rounded-circle avatar-xs"
									/>
								</Link>
								<Tooltip placement="top" target="Frank"
									>Frank Hook</Tooltip
								>

								<Link
									href=""
									class="avatar-group-item"
									id="Ruby"
								>
									<div class="avatar-xs">
										<div class="avatar-title rounded-circle bg-light text-primary"
										>
											R
										</div>
									</div>
								</Link>
								<Tooltip placement="top" target="Ruby"
									>Ruby</Tooltip
								>

								<Link
									href=""
									class="avatar-group-item"
									id="more"
								>
									<div class="avatar-xs">
										<div class="avatar-title rounded-circle"
										>
											2+
										</div>
									</div>
								</Link>
								<Tooltip placement="top" target="more"
									>more</Tooltip
								>
							</div>
							<small class="mb-0 text-muted">Yesterday</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar2}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Natasha Carey <span
									class="badge bg-soft-success text-success align-middle"
									>Completed</span
								>
							</h6>
							<p class="text-muted mb-2">
								Adding a new event with attachments
							</p>
							<div class="row border border-dashed gx-2 p-2 mb-2">
								<Col class="col-4">
									<img
										src={img2}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
								<Col class="col-4">
									<img
										src={img3}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
								<Col class="col-4">
									<img
										src={img4}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
							</div>
							<small class="mb-0 text-muted">25 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar6}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Bethany Johnson</h6>
							<p class="text-muted mb-2">
								added a new member to velzon dashboard
							</p>
							<small class="mb-0 text-muted">19 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<div class="avatar-xs acitivity-avatar">
								<div class="avatar-title rounded-circle bg-soft-danger text-danger"
								>
									<i class="ri-shopping-bag-line" />
								</div>
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Your order is placed <span
									class="badge bg-soft-danger text-danger align-middle ms-1"
									>Out of Delivery</span
								>
							</h6>
							<p class="text-muted mb-2">
								These customers can rest assured their order has
								been placed.
							</p>
							<small class="mb-0 text-muted">16 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar7}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Lewis Pratt</h6>
							<p class="text-muted mb-2">
								They all have something to say beyond the words
								on the page. They can come across as casual or
								neutral, exotic or graphic.
							</p>
							<small class="mb-0 text-muted">22 Oct</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<div class="avatar-xs acitivity-avatar">
								<div class="avatar-title rounded-circle bg-soft-info text-info"
								>
									<i class="ri-line-chart-line" />
								</div>
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Monthly sales report</h6>
							<p class="text-muted mb-2">
								<span class="text-danger">2 days left</span>
								notification to submit the monthly sales report. <Link
									href=""
									class="link-warning text-decoration-underline"
									>Reports Builder</Link
								>
							</p>
							<small class="mb-0 text-muted">15 Oct</small>
						</div>
					</div>
					<div class="acitivity-item d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar8}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								New ticket received <span
									class="badge bg-soft-success text-success align-middle"
									>Completed</span
								>
							</h6>
							<p class="text-muted mb-2">
								User <span class="text-secondary">Erica245</span
								> submitted a ticket.
							</p>
							<small class="mb-0 text-muted">26 Aug</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border-top p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>
<Button
	class="btn btn-light"
	on:click={toggleEnableScroll}
	>Enable Body Scrolling</Button
>

<Offcanvas
	isOpen={isBackdrop}
	toggle={toggleBackdrop}
	id="offcanvasWithBackdrop"
	header="Customer Acitivity"
	class="offcanvas-p-0"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div>
			<div data-simplebar style="height: calc(100vh - 112px);">
				<div class="acitivity-timeline p-4">
					<div class="acitivity-item d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar1}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Oliver Phillips <span
									class="badge bg-soft-primary text-primary align-middle"
									>New</span
								>
							</h6>
							<p class="text-muted mb-2">
								We talked about a project on linkedin.
							</p>
							<small class="mb-0 text-muted">Today</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0 avatar-xs acitivity-avatar">
							<div class="avatar-title bg-soft-success text-success rounded-circle">
								N
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Nancy Martino <span
									class="badge bg-soft-secondary text-secondary align-middle"
									>In Progress</span
								>
							</h6>
							<p class="text-muted mb-2">
								<i
									class="ri-file-text-line align-middle ms-2"
								/> Create new project Buildng product
							</p>
							<div class="avatar-group mb-2">
								<Link
									href=""
									class="avatar-group-item"
									title=""
									id="Christi"
								>
									<img
										src={avatar4}
										alt=""
										class="rounded-circle avatar-xs"
									/>
								</Link>
								<Tooltip placement="top" target="Christi"
									>Christi</Tooltip
								>

								<Link
									href=""
									class="avatar-group-item"
									title=""
									id="Frank"
								>
									<img
										src={avatar3}
										alt=""
										class="rounded-circle avatar-xs"
									/>
								</Link>
								<Tooltip placement="top" target="Frank"
									>Frank Hook</Tooltip
								>

								<Link
									href=""
									class="avatar-group-item"
									title=""
									id="Ruby"
								>
									<div class="avatar-xs">
										<div class="avatar-title rounded-circle bg-light text-primary"
										>
											R
										</div>
									</div>
								</Link>
								<Tooltip placement="top" target="Ruby"
									>Ruby</Tooltip
								>

								<Link
									href=""
									class="avatar-group-item"
									title=""
									id="more"
								>
									<div class="avatar-xs">
										<div class="avatar-title rounded-circle"
										>
											2+
										</div>
									</div>
								</Link>
								<Tooltip placement="top" target="more"
									>more</Tooltip
								>
							</div>
							<small class="mb-0 text-muted">Yesterday</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar2}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Natasha Carey <span
									class="badge bg-soft-success text-success align-middle"
									>Completed</span
								>
							</h6>
							<p class="text-muted mb-2">
								Adding a new event with attachments
							</p>
							<div class="row border border-dashed gx-2 p-2 mb-2">
								<Col class="col-4">
									<img
										src={img2}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
								<Col class="col-4">
									<img
										src={img3}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
								<Col class="col-4">
									<img
										src={img4}
										alt=""
										class="img-fluid rounded"
									/>
								</Col>
							</div>
							<small class="mb-0 text-muted">25 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar6}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Bethany Johnson</h6>
							<p class="text-muted mb-2">
								added a new member to velzon dashboard
							</p>
							<small class="mb-0 text-muted">19 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<div class="avatar-xs acitivity-avatar">
								<div class="avatar-title rounded-circle bg-soft-danger text-danger"
								>
									<i class="ri-shopping-bag-line" />
								</div>
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								Your order is placed <span
									class="badge bg-soft-danger text-danger align-middle ms-1"
									>Out of Delivery</span
								>
							</h6>
							<p class="text-muted mb-2">
								These customers can rest assured their order has
								been placed.
							</p>
							<small class="mb-0 text-muted">16 Nov</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar7}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Lewis Pratt</h6>
							<p class="text-muted mb-2">
								They all have something to say beyond the words
								on the page. They can come across as casual or
								neutral, exotic or graphic.
							</p>
							<small class="mb-0 text-muted">22 Oct</small>
						</div>
					</div>
					<div class="acitivity-item py-3 d-flex">
						<div class="flex-shrink-0">
							<div class="avatar-xs acitivity-avatar">
								<div class="avatar-title rounded-circle bg-soft-info text-info"
								>
									<i class="ri-line-chart-line" />
								</div>
							</div>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">Monthly sales report</h6>
							<p class="text-muted mb-2">
								<span class="text-danger">2 days left</span>
								notification to submit the monthly sales report. <Link
									href=""
									class="link-warning text-decoration-underline"
									>Reports Builder</Link
								>
							</p>
							<small class="mb-0 text-muted">15 Oct</small>
						</div>
					</div>
					<div class="acitivity-item d-flex">
						<div class="flex-shrink-0">
							<img
								src={avatar8}
								alt=""
								class="avatar-xs rounded-circle acitivity-avatar"
							/>
						</div>
						<div class="flex-grow-1 ms-3">
							<h6 class="mb-1">
								New ticket received <span
									class="badge bg-soft-success text-success align-middle"
									>Completed</span
								>
							</h6>
							<p class="text-muted mb-2">
								User <span class="text-secondary">Erica245</span
								> submitted a ticket.
							</p>
							<small class="mb-0 text-muted">26 Aug</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border-top p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>

<Button
	class="btn btn-light"
	on:click={toggleBackdrop}
	>Enable Backdrop (Default)</Button
>

<Offcanvas
	isOpen={isScrollBackDrop}
	scrollable
	toggle={toggleScrollBackDrop}
	header="Customer Acitivity"
	class="offcanvas-p-0"
	id="offcanvasWithBothOptions"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div data-simplebar style="height: calc(100vh - 112px);">
			<div class="acitivity-timeline p-4">
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar1}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Oliver Phillips <span
								class="badge bg-soft-primary text-primary align-middle"
								>New</span>
						</h6>
						<p class="text-muted mb-2">
							We talked about a project on linkedin.
						</p>
						<small class="mb-0 text-muted">Today</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0 avatar-xs acitivity-avatar">
						<div class="avatar-title bg-soft-success text-success rounded-circle"
						>
							N
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Nancy Martino <span
								class="badge bg-soft-secondary text-secondary align-middle"
								>In Progress</span>
						</h6>
						<p class="text-muted mb-2">
							<i class="ri-file-text-line align-middle ms-2" /> Create
							new project Buildng product
						</p>
						<div class="avatar-group mb-2">
							<Link
								href=""
								class="avatar-group-item"
								id="Christi">
								<img
									src={avatar4}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Christi"
								>Christi</Tooltip>
							<Link href="" class="avatar-group-item" id="Frank">
								<img
									src={avatar3}
									alt=""
									class="rounded-circle avatar-xs"
								/>
							</Link>
							<Tooltip placement="top" target="Frank"
								>Frank Hook</Tooltip>

							<Link href="" class="avatar-group-item" id="Ruby">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle bg-light text-primary"
									>
										R
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="Ruby">Ruby</Tooltip>

							<Link href="" class="avatar-group-item" id="more">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle">
										2+
									</div>
								</div>
							</Link>
							<Tooltip placement="top" target="more">more</Tooltip>
						</div>
						<small class="mb-0 text-muted">Yesterday</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar2}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Natasha Carey <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							Adding a new event with attachments
						</p>
						<div class="row border border-dashed gx-2 p-2 mb-2">
							<Col class="col-4">
								<img
									src={img2}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img3}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
							<Col class="col-4">
								<img
									src={img4}
									alt=""
									class="img-fluid rounded"
								/>
							</Col>
						</div>
						<small class="mb-0 text-muted">25 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar6}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Bethany Johnson</h6>
						<p class="text-muted mb-2">
							added a new member to velzon dashboard
						</p>
						<small class="mb-0 text-muted">19 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-danger text-danger">
								<i class="ri-shopping-bag-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							Your order is placed <span
								class="badge bg-soft-danger text-danger align-middle ms-1"
								>Out of Delivery</span>
						</h6>
						<p class="text-muted mb-2">
							These customers can rest assured their order has
							been placed.
						</p>
						<small class="mb-0 text-muted">16 Nov</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar7}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Lewis Pratt</h6>
						<p class="text-muted mb-2">
							They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="mb-0 text-muted">22 Oct</small>
					</div>
				</div>
				<div class="acitivity-item py-3 d-flex">
					<div class="flex-shrink-0">
						<div class="avatar-xs acitivity-avatar">
							<div class="avatar-title rounded-circle bg-soft-info text-info">
								<i class="ri-line-chart-line" />
							</div>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">Monthly sales report</h6>
						<p class="text-muted mb-2">
							<span class="text-danger">2 days left</span>
							notification to submit the monthly sales report. <Link
								href=""
								class="link-warning text-decoration-underline"
								>Reports Builder</Link>
						</p>
						<small class="mb-0 text-muted">15 Oct</small>
					</div>
				</div>
				<div class="acitivity-item d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar8}
							alt=""
							class="avatar-xs rounded-circle acitivity-avatar"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<h6 class="mb-1">
							New ticket received <span
								class="badge bg-soft-success text-success align-middle"
								>Completed</span>
						</h6>
						<p class="text-muted mb-2">
							User <span class="text-secondary">Erica245</span> submitted
							a ticket.
						</p>
						<small class="mb-0 text-muted">26 Aug</small>
					</div>
				</div>
			</div>
		</div>
	</OffcanvasBody>
	<div class="offcanvas-foorter border-top p-3 text-center">
		<Link href="" class="link-success"
			>View All Acitivity <i
				class="ri-arrow-right-s-line align-middle ms-1"
			/></Link
		>
	</div>
</Offcanvas>

<Button
	class="btn btn-light"
	on:click={toggleScrollBackDrop}
	>Enable Both Scrolling & Backdrop</Button
>
`;
  return `${$$result.head += `${$$result.title = `<title>Offcanvas | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, { title: "Offcanvas", pageTitle: "Base UI" }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Offcanvas" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use the <code>offcanvas</code> class to set a default
							offcanvas.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack flex-wrap gap-2"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "btn btn-secondary" }, {}, {
                        default: () => {
                          return `Link with href
								`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `Button with target`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultOffcanvasCode,
                        id: "defaultOffcanvasCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Placement Offcanvas" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>placement=&quot;start&quot;</code> ,
							<code>placement=&quot;top&quot;</code>,
							<code>placement=&quot;bottom&quot;</code>, or
							<code>placement=&quot;end&quot;</code>, to offcanvas attribute
							to set different Offcanvas Placement.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Toggle Top Offcanvas`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
                        default: () => {
                          return `Toggle Right Offcanvas`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
                        default: () => {
                          return `Toggle Bottom Offcanvas`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
                        default: () => {
                          return `Toggle Left Offcanvas`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: placementOffcanvasCode,
                        id: "placementOffcanvasCode"
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
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Backdrop Offcanvas" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Here are the example of offcanvas with scrolling
							active and backdrop visible.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { class: "btn btn-light" }, {}, {
                        default: () => {
                          return `Enable Body Scrolling`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn btn-light" }, {}, {
                        default: () => {
                          return `Enable Backdrop (Default)`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, { class: "btn btn-light" }, {}, {
                        default: () => {
                          return `Enable Both Scrolling &amp; Backdrop`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: backdropOffcanvasCode,
                        id: "backdropOffcanvasCode"
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
  })}</div>

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: open,
    toggle: toggleDefultCanvas,
    class: "offcanvas-p-0",
    id: "offcanvasExample",
    header: "Recent Acitivity"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-0 overflow-hidden" }, {}, {
        default: () => {
          return `<div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
						<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
						</p>
						<small class="${"mb-0 text-muted"}">Today</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
						</div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
						<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create
							new project Buildng product
						</p>
						<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook Ruby`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">Adding a new event with attachments
						</p>
						${validate_component(Row, "Row").$$render($$result, {
            class: "border border-dashed gx-2 p-2 mb-2"
          }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
                default: () => {
                  return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                }
              })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
                default: () => {
                  return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                }
              })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
                default: () => {
                  return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
                }
              })}`;
            }
          })}
						<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
						<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
						</p>
						<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
						<p class="${"text-muted mb-2"}">These customers can rest assured their order has
							been placed.
						</p>
						<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
						<p class="${"text-muted mb-2"}">They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
						<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
							notification to submit the monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
						<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
				<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted
							a ticket.
						</p>
						<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border-top p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isTop,
    placement: "top",
    toggle: toggleTopCanvas,
    id: "offcanvasTop",
    header: "Gallery",
    class: "offcanvas-p-0",
    style: "min-height: 46vh"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "gallery-light" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box light mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img12, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">A mix of friends and strangers heading off
									to find an adventure.
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Erica Kernan`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 3.4K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.3K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box light mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img9, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Dramatic clouds at the Golden Gate Bridge
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Ron Mackie`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 5.1K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 4.7K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img11, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Cycling in the countryside
								</h5></div>`;
                        }
                      })}</div>

					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Nancy Martino`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 3.2K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.1K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, {
                xl: 3,
                lg: 4,
                sm: 6,
                class: "d-md-none d-xl-block"
              }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img10, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Fun day at the Hill Station
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Henry Baird`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 632
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 95
									</button></div></div></div></div>`;
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

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isRight,
    placement: "end",
    toggle: toggleRightCanvas,
    id: "offcanvasRight",
    header: "Recent Acitivity",
    class: "offcanvas-p-0"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-0 overflow-hidden" }, {}, {
        default: () => {
          return `<div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
						<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
						</p>
						<small class="${"mb-0 text-muted"}">Today</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
						</div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
						<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create
							new project Buildng product
						</p>
						<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook Ruby`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}
							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">Adding a new event with attachments
						</p>
						<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
						<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
						</p>
						<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
						<p class="${"text-muted mb-2"}">These customers can rest assured their order has
							been placed.
						</p>
						<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
						<p class="${"text-muted mb-2"}">They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
						<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
							notification to submit the monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
						<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
				<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted
							a ticket.
						</p>
						<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isBottom,
    placement: "bottom",
    toggle: toggleBottomCanvas,
    id: "offcanvasBottom",
    header: "Gallery",
    class: "offcanvas-p-0",
    style: "min-height: 46vh"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-4" }, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, { class: "gallery-light" }, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box light mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img12, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">A mix of friends and strangers heading off
									to find an adventure.
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Erica Kernan`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 3.4K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 1.3K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box light mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img9, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Dramatic clouds at the Golden Gate Bridge
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Ron Mackie`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 5.1K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 4.7K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img11, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Cycling in the countryside
								</h5></div>`;
                        }
                      })}</div>

					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Nancy Martino`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 5.1K
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 4.7K
									</button></div></div></div></div>`;
                    }
                  })}`;
                }
              })}
			${validate_component(Col, "Col").$$render($$result, {
                xl: 3,
                lg: 4,
                sm: 6,
                class: "d-md-none d-xl-block"
              }, {}, {
                default: () => {
                  return `${validate_component(Card, "Card").$$render($$result, { class: "gallery-box mb-0" }, {}, {
                    default: () => {
                      return `<div class="${"gallery-container"}">${validate_component(Link, "Link").$$render($$result, { href: "", title: "" }, {}, {
                        default: () => {
                          return `<img class="${"gallery-img img-fluid mx-auto"}"${add_attribute("src", img10, 0)} alt="${""}">
							<div class="${"gallery-overlay"}"><h5 class="${"overlay-caption"}">Fun day at the Hill Station
								</h5></div>`;
                        }
                      })}</div>
					<div class="${"box-content"}"><div class="${"d-flex align-items-center mt-1"}"><div class="${"flex-grow-1 text-muted"}">by ${validate_component(Link, "Link").$$render($$result, {
                        href: "",
                        class: "text-body text-truncate"
                      }, {}, {
                        default: () => {
                          return `Henry Baird`;
                        }
                      })}</div>
							<div class="${"flex-shrink-0"}"><div class="${"d-flex gap-3"}"><button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-thumb-up-fill text-muted align-bottom me-1"}"></i> 632
									</button>
									<button type="${"button"}" class="${"btn btn-sm fs-12 btn-link text-body text-decoration-none px-0"}"><i class="${"ri-question-answer-fill text-muted align-bottom me-1"}"></i> 95
									</button></div></div></div></div>`;
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

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isLeft,
    placement: "start",
    header: "Recent Acitivity",
    class: "offcanvas-p-0",
    toggle: toggleLeftCanvas,
    id: "offcanvasLeft"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
						<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
						</p>
						<small class="${"mb-0 text-muted"}">Today</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
						</div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
						<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create
							new project Buildng product
						</p>
						<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">Adding a new event with attachments
						</p>
						<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
						<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
						</p>
						<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
						<p class="${"text-muted mb-2"}">These customers can rest assured their order has
							been placed.
						</p>
						<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
						<p class="${"text-muted mb-2"}">They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
						<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
							notification to submit the monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
						<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
				<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted
							a ticket.
						</p>
						<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border-top p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isEnableScroll,
    scrollable: true,
    backdrop: false,
    header: "Customer Acitivity",
    class: "offcanvas-p-0",
    toggle: toggleEnableScroll,
    id: "offcanvasScrolling"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-0 overflow-hidden" }, {}, {
        default: () => {
          return `<div><div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
							<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
							</p>
							<small class="${"mb-0 text-muted"}">Today</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
							</div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
							<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create new project Buildng product
							</p>
							<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}
								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
										</div></div>`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
										</div></div>`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
							<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
							<p class="${"text-muted mb-2"}">Adding a new event with attachments
							</p>
							<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}</div>
							<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
							<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
							</p>
							<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
							<p class="${"text-muted mb-2"}">These customers can rest assured their order has
								been placed.
							</p>
							<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
							<p class="${"text-muted mb-2"}">They all have something to say beyond the words
								on the page. They can come across as casual or
								neutral, exotic or graphic.
							</p>
							<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
							<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
								notification to submit the monthly sales report.
								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
							<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
					<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
							<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted a ticket.
							</p>
							<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border-top p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isBackdrop,
    toggle: toggleBackdrop,
    id: "offcanvasWithBackdrop",
    header: "Customer Acitivity",
    class: "offcanvas-p-0"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-0 overflow-hidden" }, {}, {
        default: () => {
          return `<div><div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
							<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
							</p>
							<small class="${"mb-0 text-muted"}">Today</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
							</div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
							<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create new project Buildng product
							</p>
							<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            title: "",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}

								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            title: "",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            title: "",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
										</div></div>`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            title: "",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
										</div></div>`;
            }
          })}
								${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
							<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
							<p class="${"text-muted mb-2"}">Adding a new event with attachments
							</p>
							<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}</div>
							<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
							<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
							</p>
							<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
							<p class="${"text-muted mb-2"}">These customers can rest assured their order has
								been placed.
							</p>
							<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
							<p class="${"text-muted mb-2"}">They all have something to say beyond the words
								on the page. They can come across as casual or
								neutral, exotic or graphic.
							</p>
							<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
					<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
							<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
								notification to submit the monthly sales report.
								${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
							<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
					<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
						<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
							<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted a ticket.
							</p>
							<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border-top p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}

${validate_component(Offcanvas, "Offcanvas").$$render($$result, {
    isOpen: isScrollBackDrop,
    scrollable: true,
    toggle: toggleScrollBackDrop,
    header: "Customer Acitivity",
    class: "offcanvas-p-0",
    id: "offcanvasWithBothOptions"
  }, {}, {
    default: () => {
      return `${validate_component(OffcanvasBody, "OffcanvasBody").$$render($$result, { class: "p-0 overflow-hidden" }, {}, {
        default: () => {
          return `<div data-simplebar style="${"height: calc(100vh - 112px);"}"><div class="${"acitivity-timeline p-4"}"><div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar1, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Oliver Phillips <span class="${"badge bg-soft-primary text-primary align-middle"}">New</span></h6>
						<p class="${"text-muted mb-2"}">We talked about a project on linkedin.
						</p>
						<small class="${"mb-0 text-muted"}">Today</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0 avatar-xs acitivity-avatar"}"><div class="${"avatar-title bg-soft-success text-success rounded-circle"}">N
						</div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Nancy Martino <span class="${"badge bg-soft-secondary text-secondary align-middle"}">In Progress</span></h6>
						<p class="${"text-muted mb-2"}"><i class="${"ri-file-text-line align-middle ms-2"}"></i> Create
							new project Buildng product
						</p>
						<div class="${"avatar-group mb-2"}">${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Christi"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar4, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Christi" }, {}, {
            default: () => {
              return `Christi`;
            }
          })}
							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Frank"
          }, {}, {
            default: () => {
              return `<img${add_attribute("src", avatar3, 0)} alt="${""}" class="${"rounded-circle avatar-xs"}">`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Frank" }, {}, {
            default: () => {
              return `Frank Hook`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "Ruby"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle bg-light text-primary"}">R
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "Ruby" }, {}, {
            default: () => {
              return `Ruby`;
            }
          })}

							${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "avatar-group-item",
            id: "more"
          }, {}, {
            default: () => {
              return `<div class="${"avatar-xs"}"><div class="${"avatar-title rounded-circle"}">2+
									</div></div>`;
            }
          })}
							${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top", target: "more" }, {}, {
            default: () => {
              return `more`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">Yesterday</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar2, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Natasha Carey <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">Adding a new event with attachments
						</p>
						<div class="${"row border border-dashed gx-2 p-2 mb-2"}">${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img2, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img3, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}
							${validate_component(Col, "Col").$$render($$result, { class: "col-4" }, {}, {
            default: () => {
              return `<img${add_attribute("src", img4, 0)} alt="${""}" class="${"img-fluid rounded"}">`;
            }
          })}</div>
						<small class="${"mb-0 text-muted"}">25 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar6, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Bethany Johnson</h6>
						<p class="${"text-muted mb-2"}">added a new member to velzon dashboard
						</p>
						<small class="${"mb-0 text-muted"}">19 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-danger text-danger"}"><i class="${"ri-shopping-bag-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Your order is placed <span class="${"badge bg-soft-danger text-danger align-middle ms-1"}">Out of Delivery</span></h6>
						<p class="${"text-muted mb-2"}">These customers can rest assured their order has
							been placed.
						</p>
						<small class="${"mb-0 text-muted"}">16 Nov</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar7, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Lewis Pratt</h6>
						<p class="${"text-muted mb-2"}">They all have something to say beyond the words on
							the page. They can come across as casual or neutral,
							exotic or graphic.
						</p>
						<small class="${"mb-0 text-muted"}">22 Oct</small></div></div>
				<div class="${"acitivity-item py-3 d-flex"}"><div class="${"flex-shrink-0"}"><div class="${"avatar-xs acitivity-avatar"}"><div class="${"avatar-title rounded-circle bg-soft-info text-info"}"><i class="${"ri-line-chart-line"}"></i></div></div></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">Monthly sales report</h6>
						<p class="${"text-muted mb-2"}"><span class="${"text-danger"}">2 days left</span>
							notification to submit the monthly sales report. ${validate_component(Link, "Link").$$render($$result, {
            href: "",
            class: "link-warning text-decoration-underline"
          }, {}, {
            default: () => {
              return `Reports Builder`;
            }
          })}</p>
						<small class="${"mb-0 text-muted"}">15 Oct</small></div></div>
				<div class="${"acitivity-item d-flex"}"><div class="${"flex-shrink-0"}"><img${add_attribute("src", avatar8, 0)} alt="${""}" class="${"avatar-xs rounded-circle acitivity-avatar"}"></div>
					<div class="${"flex-grow-1 ms-3"}"><h6 class="${"mb-1"}">New ticket received <span class="${"badge bg-soft-success text-success align-middle"}">Completed</span></h6>
						<p class="${"text-muted mb-2"}">User <span class="${"text-secondary"}">Erica245</span> submitted
							a ticket.
						</p>
						<small class="${"mb-0 text-muted"}">26 Aug</small></div></div></div></div>`;
        }
      })}
	<div class="${"offcanvas-foorter border-top p-3 text-center"}">${validate_component(Link, "Link").$$render($$result, { href: "", class: "link-success" }, {}, {
        default: () => {
          return `View All Acitivity <i class="${"ri-arrow-right-s-line align-middle ms-1"}"></i>`;
        }
      })}</div>`;
    }
  })}`;
});
export { Uioffcanvas as default };
