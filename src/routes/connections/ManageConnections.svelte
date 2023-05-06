<svelte:head>
  <title>Grid js | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import Grid from 'gridjs-svelte';
	import {
		Card,
		CardBody,
		Col,
		Container,
		Row,
		CardHeader
	} from 'sveltestrap';
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
	import { html } from 'gridjs';

	const data = [
		[
			'01',
			'Jonathan',
			'jonathan@example.com',
			'Senior Implementation Architect',
			'Hauck Inc',
			'Holy See'
		],
		['02', 'Harold', 'harold@example.com', 'Forward Creative Coordinator', 'Metz Inc', 'Iran'],
		[
			'03',
			'Shannon',
			'shannon@example.com',
			'Legacy Functionality Associate',
			'Zemlak Group',
			'South Georgia'
		],
		['04', 'Robert', 'robert@example.com', 'Product Accounts Technician', 'Hoeger', 'San Marino'],
		['05', 'Noel', 'noel@example.com', 'Customer Data Director', 'Howell - Rippin', 'Germany'],
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
			'Kerry',
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

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Manage Connections" pageTitle="Connections" />

		<Row>
			<Col lg={12}>
				<Card>
					<CardHeader>
						<h4 class="card-title mb-0 flex-grow-1">Connections</h4>
					</CardHeader>

					<CardBody>
						<div id="table-gridjs">
							<Grid
								{data}
								columns={[
									'ID',
									'Name',
									{
										name: 'Email',
										width: '180px',
										formatter: (cell, row) => html(`<a href="javascript://"> ${cell} </a>`)
									},
									{
										name: 'Position',
										width: '228px',
									},
									'Company',
									'Country',
									{
										name: 'Actions',
										width: '120px',
										formatter: (cell) =>
											html(`<button type='button' class='btn btn-sm btn-light'> Details </button>`)
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
