<svelte:head>
  <title>Grid js | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import Grid from 'gridjs-svelte';
	import { h, PluginPosition } from "gridjs";
	import {
		Button,
		Card,
		CardBody,
		Col,
		Container,
		Row,
		Input,
		Label,
		Offcanvas,
		OffcanvasBody,
	} from 'sveltestrap';
	import Link from "svelte-link";
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';

	import { html } from 'gridjs';
	let btnName = "dynamic button"
	let isRight = false;
	let defaultCounter = 5;
	let selectedRiskName = 'Abnormal Hour Usage'

	const toggleRightCanvas = () => (isRight = !isRight);
	const data = [
		[
			'01',
			'Abnormal Hour Usage',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
			'1',
			'1 per day',
			'Hauck Inc',
			'Holy See'
		],
		['02', 'Harold', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '1','1 per day', 'Metz Inc', 'Iran'],
		[
			'03',
			'Card Cloning',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
			'0',
			'2 per day',
			'Zemlak Group',
			'South Georgia'
		],
		['04', 'Card Sharing', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '1','3 per day', 'Hoeger', 'San Marino'],
		['05', 'Data Anomalies', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '1','1 per day', 'Howell - Rippin', 'Germany'],
		[
			'06',
			'Traci',
			'traci@example.com',
			'0',
			'Corporate Identity Director',
			'Koelpin - Goldner',
			'Vanuatu'
		],
		[
			'07',
			'Denied/ DFO',
			'kerry@example.com',
			'1',
			'Lead Applications Associate',
			'Feeney, Langworth and Tremblay',
			'Niger'
		],
		['08', 'Patsy', 'patsy@example.com',  '1','Streich Group', 'Niue'],
		[
			'09',
			'Cathy',
			'cathy@example.com',
			'0',
			'Customer Data Director',
			'Ebert, Schamberger and Johnston',
			'Mexico'
		],
		[
			'10',
			'Tyrone',
			'tyrone@example.com',
			'1',
			'Senior Response Liaison',
			'Raynor, Rolfson and Daugherty',
			'Qatar'
		]
	];

	let selected;
	let enabled;
	function handleClick() {
		toggleRightCanvas()
	} 
</script>

<div class="page-content">
	<Offcanvas
	isOpen={isRight}
	placement="end"
	toggle={toggleRightCanvas}
	id="offcanvasRight"
	header="Edit Risk"
	class="offcanvas-p-0"
>
	<OffcanvasBody class="p-0 overflow-hidden">
		<div data-simplebar style="height: calc(100vh - 112px);">
			
			<Card>
				
				<CardBody>
					<div class="live-preview">
						
							<div class="mb-3">
								<Label for="employeeName" class="form-label"
									>{selectedRiskName}</Label
								>
								<blockquote class="blockquote custom-blockquote blockquote-info rounded mb-0">
									<p class="text-dark mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
										Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown 
										printer took a galley of type and scrambled it to make a type specimen book. It has survived
										 not only five centuries, but also the leap into electronic typesetting, remaining essentially 
										 unchanged.</p>
									
								</blockquote>
							</div>
							<Row>
							<Col md={5}>
								<div class="mb-3">
								
									<Label for="employeeUrl" class="form-label"
										>No. of Instances &nbsp;</Label
									>
									
									<div class="input-step">
										<button
											type="button"
											class="minus"
											on:click={() => {defaultCounter--}}
										>
											–
										</button>
										<Input
											type="number"
											class="product-quantity"
											value={defaultCounter}
											min="0"
											max="100"
											readOnly
										/>
										<button
											type="button"
											class="plus"
											on:click={() => {defaultCounter++}}
										>
											+
										</button>
										
									</div>
									
								</div>
							</Col>
							<Col md={3}>
								<div class="mb-3">

									
									<select
										name="category"
										class="form-control form-select"
										placeholder="Select Category"
										bind:value={selected}
									>
										<option value="Day">in a Day</option>
										<option value="Week">in a Week</option>
										<option value="Month">in a Month</option>
										<option value="Year">in a Year</option>
									</select>
								</div>

							</Col>
							<Col md={3}>
								<div class="mb-3">

									
									<select
										name="enabled"
										class="form-control form-select"
										placeholder="Select Category"
										bind:value={enabled}
									>
										<option value="Enabled">Enabled</option>
										<option value="Disabled">Disabled</option>
									</select>
								</div>

							</Col>
						
						</Row>
							

							
							
							<div class="mb-3">
								<Card class="ribbon-box border shadow-none mb-lg-0">
									<CardBody>
										<div class="ribbon ribbon-warning round-shape"><i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i></div>
										<p class="mb-0">&nbsp;</p>
										<div class="ribbon-content mt-4 text-muted">
											
											
											{#if enabled === 'Enabled'}
												<p class="mb-0">Notify to Identity and Manager after <b> {defaultCounter} </b> instance(s) in a <b>{selected} </b>with violation details.</p>
												<p>This status for this rule is <span class="badge badge-soft-success">Enabled</span>.</p>
											{:else}
												<p>This status for this rule is <span class="badge badge-soft-warning">Disabled</span>.</p>
											{/if}
										</div>
									</CardBody>
								</Card>
							</div>
							<div class="text-end">
								<Button class="btn btn-primary" on:click={toggleRightCanvas}>Save</Button>
							</div>
						
					</div>
					
				</CardBody>
			</Card>
			
		</div>
	</OffcanvasBody>
	
</Offcanvas>
	<Container fluid>
		<BreadCrumb title="View Risks" pageTitle="Risks" />

		<Row>
			<Col lg={12}>
				<Card>
					<!-- <CardHeader>
						<h4 class="card-title mb-0 flex-grow-1">Base Example</h4>
					</CardHeader> -->

					<CardBody>
						<div id="table-gridjs">
							<Grid
								{data}
								columns={[
									
									{
										name: 'ID',
										width: '50px'
									},
									{	
										name: 'Name',
										width: '120px'
									},									
									{
										name: 'Description',
										width: '300px'
										
									},
									{
										name: 'Status',
										width: '60px',
										formatter: (cell, row) =>{
											
											if (row.cells[3].data === '1') {
												return h('span', {
													className: 'badge rounded-pill badge-soft-success'
												}, 'Enabled', );
											} else {
												return h('span', {
													className: 'badge rounded-pill badge-soft-warning'
												}, 'Disabled', );
											};
											
											
										}
									},
									{
										name: 'Trigger'
										
									},
									{
										name: 'Action',
										width: '50px',
										formatter: (cell, row) => {
											return h('button', {
												className: 'btn btn-soft-secondary',
												onClick: () => {
													selectedRiskName =row.cells[1].data
													toggleRightCanvas()
												}
											}, 'Edit', );
										}
									}
									
								]}
								search={true}
								sort={true}
								pagination={{ enabled: true, limit: 5 }}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
		
	</Container>
</div>

<style global>
	@import '//cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
