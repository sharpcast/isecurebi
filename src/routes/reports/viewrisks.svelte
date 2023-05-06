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
		CardHeader,
		Offcanvas,
		OffcanvasBody,
	} from 'sveltestrap';
	import Link from "svelte-link";
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
	import DynamicButton from '../../Components/Common/DynamicButton.svelte';
	import { html } from 'gridjs';
	let btnName = "dynamic button"
	let isRight = false;
	const toggleRightCanvas = () => (isRight = !isRight);
	const data = [
		[
			'01',
			'Abnormal Hour Usage',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
			'1 per day',
			'Hauck Inc',
			'Holy See'
		],
		['02', 'Harold', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '1 per day', 'Metz Inc', 'Iran'],
		[
			'03',
			'Card Cloning',
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
			'2 per day',
			'Zemlak Group',
			'South Georgia'
		],
		['04', 'Card Sharing', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '3 per day', 'Hoeger', 'San Marino'],
		['05', 'Data Anomalies', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '1 per day', 'Howell - Rippin', 'Germany'],
		[
			'06',
			'Traci',
			'traci@example.com',
			'Corporate Identity Director',
			'Koelpin - Goldner',
			'Vanuatu'
		],
		[
			'07',
			'Denied/ DFO',
			'kerry@example.com',
			'Lead Applications Associate',
			'Feeney, Langworth and Tremblay',
			'Niger'
		],
		['08', 'Patsy', 'patsy@example.com', 'Dynamic Assurance Director', 'Streich Group', 'Niue'],
		[
			'09',
			'Cathy',
			'cathy@example.com',
			'Customer Data Director',
			'Ebert, Schamberger and Johnston',
			'Mexico'
		],
		[
			'10',
			'Tyrone',
			'tyrone@example.com',
			'Senior Response Liaison',
			'Raynor, Rolfson and Daugherty',
			'Qatar'
		]
	];

	
</script>
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
			
		</div>
	</OffcanvasBody>
	
</Offcanvas>
<div class="page-content">
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
										name: 'Description'
										
									},
									{
										name: 'Max Limit',
										width: '120px'
										
									},
									{
										name: 'Action',
										width: '120px',
										formatter: (cell, row) => {
											return h('button', {
												className: 'btn btn-soft-secondary',
												onClick: () => {
													
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
