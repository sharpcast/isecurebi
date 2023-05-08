<script>
	import { Container, Row, Col } from "sveltestrap";
	import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
	// import Section from "./Section.svelte";
	import Widget from "./Widgets.svelte";
	import Revenue from "./Revenue.svelte";
	// import SalesByLocations from "./SalesByLocations.svelte";
	// import BestSellingProducts from "./BestSellingProducts.svelte";
	// import TopSellers from "./TopSellers.svelte";
	// import StoreVisits from "./StoreVisits.svelte";
	// import RecentOrders from "./RecentOrders.svelte";
	import RecentActivity from "./RecentActivity.svelte";
	import Counter from "../../Components/Common/counter.svelte";
</script>


<Counter />
<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Dashboard" pageTitle="Dashboards" />
		<Row>
			<Col>
				<div class="h-100">
					<!-- <Section /> -->
					<Row>
						<Widget />
					</Row>
					<Row>
						<Col>
							<Revenue />
						</Col>		
					</Row>
				</div>
			</Col>
			<RecentActivity />
		</Row>
	</Container>
</div>
