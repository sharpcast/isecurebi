const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\twostepverification\\auth-twostep-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\twostepverification\\auth-twostep-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordcreate\\auth-pass-change-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordcreate\\auth-pass-change-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\successmessage\\auth-success-msg-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\successmessage\\auth-success-msg-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\ParticlesAuth.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordreset\\auth-pass-reset-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordreset\\auth-pass-reset-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\AuthSlider.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\lockscreen\\auth-lockscreen-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\lockscreen\\auth-lockscreen-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\register\\auth-signup-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\register\\auth-signup-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-alt.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-offline.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-500.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\logout\\auth-logout-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\logout\\auth-logout-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\login\\auth-signin-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\login\\auth-signin-cover.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\AudiencesSessionsCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\UpgradeAccountNotise.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\UsersByDeviceCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\AudiencesSessions.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\AudiencesMetrics.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\AudiencesCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\CountriesCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\UsersByDevice.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\TopReferrals.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\LiveUsers.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\TopPages.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-analytics\\Widget.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\ProjectsOverviewCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\PrjectsStatusCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\TeamMembersCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\UpcomingSchedules.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\ProjectsOverview.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\ActiveProjects.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\ProjectsStatus.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\TeamMembers.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\MyTasks.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-projects\\Chat.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\DashboardCryptoCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\PortfolioCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\RecentActivity.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\TopPerformers.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\MarkerCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\MyCurrencies.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\MarketGraph.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\MyPortfolio.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\NewsFeed.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\Widgets1.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\Trading.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crypto\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\WalletConnect\\apps-nft-wallet.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\Collections\\apps-nft-collections.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\Itemdetails\\apps-nft-item-details.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\LiveAuction\\apps-nft-auction.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\Marketplace\\apps-nft-marketplace.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\ExploreNow\\apps-nft-explore.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\CreateNFT\\apps-nft-create.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\Creators\\apps-nft-creators.svelte"),
	() => import("..\\..\\src\\routes\\NFTmarketplace\\Ranking\\apps-nft-ranking.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\BalanceOverviewCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\DashboardCrmCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\UpcomingActivities.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\BalanceOverview.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\DealTypeCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\SalesForecast.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\ClosingDeals.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\DealsStatus.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\DealType.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\MyTasks.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-crm\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\ApplicationsStatistic.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\FeaturedCompanies.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\RecentApplicants.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\DashboardCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\RecomendedJobs.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\Candidates.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-job\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\DashboardNFTCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\PopularityChart.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\TopArtworkChart.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\FeaturedNFT.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\Marketplace.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\Popularity.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\RecentNFTs.svelte"),
	() => import("..\\..\\src\\routes\\dashboard-nft\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\connections\\ManageConnections.svelte"),
	() => import("..\\..\\src\\routes\\connections\\AddConnection.svelte"),
	() => import("..\\..\\src\\routes\\filemanager\\index.svelte"),
	() => import("..\\..\\src\\routes\\filemanager\\FileManagerCharts.svelte"),
	() => import("..\\..\\src\\routes\\emailInbox\\EmailSidebar.svelte"),
	() => import("..\\..\\src\\routes\\emailInbox\\EmailToolbar.svelte"),
	() => import("..\\..\\src\\routes\\emailInbox\\apps-mailbox.svelte"),
	() => import("..\\..\\src\\routes\\advanceUi\\advance-ui-animation.svelte"),
	() => import("..\\..\\src\\routes\\advanceUi\\advance-ui-highlight.svelte"),
	() => import("..\\..\\src\\routes\\advanceUi\\advance-ui-scrollbar.svelte"),
	() => import("..\\..\\src\\routes\\advanceUi\\advance-ui-nestable.svelte"),
	() => import("..\\..\\src\\routes\\advanceUi\\advance-ui-swiper.svelte"),
	() => import("..\\..\\src\\routes\\apps-chat\\index.svelte"),
	() => import("..\\..\\src\\routes\\apps-chat\\PersonalInfo.svelte"),
	() => import("..\\..\\src\\routes\\apps-chat\\attachement.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\DashboardEcommerceCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\BestSellingProducts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\SalesByLocations.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\RecentActivity.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\RecentOrders.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\StoreVisits.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\TopSellers.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Revenue.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Section.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-product-details.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-seller-details.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-order-details.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-add-product.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-customers.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-checkout.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-products.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-sellers.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-orders.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\apps-ecommerce-cart.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\PricingWidgetList.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\SellerChats.svelte"),
	() => import("..\\..\\src\\routes\\ecommerce\\Actions.svelte"),
	() => import("..\\..\\src\\routes\\calendar\\UpcommingEvents.svelte"),
	() => import("..\\..\\src\\routes\\calendar\\apps-calendar.svelte"),
	() => import("..\\..\\src\\routes\\invoices\\apps-invoices-details.svelte"),
	() => import("..\\..\\src\\routes\\invoices\\apps-invoices-create.svelte"),
	() => import("..\\..\\src\\routes\\invoices\\apps-invoices-list.svelte"),
	() => import("..\\..\\src\\routes\\invoices\\Actions.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-overview.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-create.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-list.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\ActivitiesTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\DocumentsTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\OverviewTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\Section.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\TeamTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\List.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\sessionsByCountries.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\UpcomingActivities.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\topReferralsPages.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\Chart&MapWidgets.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\EcommerceWidgets.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\audiencesMetrics.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\WidgetsCharts.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\OtherWidgets.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\myPortfolio.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\CreditCard.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\TileBoxs.svelte"),
	() => import("..\\..\\src\\routes\\Widgets\\widget.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\index.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\DiscoverItems.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\TopCreator.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\Features.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\Products.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\Trending.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\Connect.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\footer.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\navbar.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\home.svelte"),
	() => import("..\\..\\src\\routes\\landing\\NFTLanding\\CTA.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\index.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\workProcess.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\features.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\services.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\contact.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\counter.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\reviews.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\client.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\footer.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\navbar.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\plans.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\home.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\team.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\cta.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\faq.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\index.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Candidates.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Categories.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Features.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\FindJob.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Process.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Footer.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Navbar.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Blog.svelte"),
	() => import("..\\..\\src\\routes\\landing\\Job\\Home.svelte"),
	() => import("..\\..\\src\\routes\\support\\ticketsdetails\\apps-tickets-details.svelte"),
	() => import("..\\..\\src\\routes\\support\\ticketsdetails\\TicketsDetailsCode.svelte"),
	() => import("..\\..\\src\\routes\\support\\ticketsdetails\\TicketDescription.svelte"),
	() => import("..\\..\\src\\routes\\support\\ticketsdetails\\TicketDetails.svelte"),
	() => import("..\\..\\src\\routes\\support\\ticketsdetails\\Section.svelte"),
	() => import("..\\..\\src\\routes\\support\\listview\\apps-tickets-list.svelte"),
	() => import("..\\..\\src\\routes\\support\\listview\\TicketsData.svelte"),
	() => import("..\\..\\src\\routes\\support\\listview\\Actions.svelte"),
	() => import("..\\..\\src\\routes\\support\\listview\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\APIKey\\index.svelte"),
	() => import("..\\..\\src\\routes\\APIKey\\Actions.svelte"),
	() => import("..\\..\\src\\routes\\APIKey\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uinotifications.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiplaceholders.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiaccordions.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiembedvideo.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uitypography.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uidropdowns.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uioffcanvas.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiutilities.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\UiCarousel\\Slidewithindicator.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\UiCarousel\\Slidewithcaption.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\UiCarousel\\Slidewithcontrol.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\UiCarousel\\Darkvariant.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\UiCarousel\\slide.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uicarousel.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiprogress.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uibuttons.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uigeneral.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiribbons.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uialerts.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uibadges.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uicolors.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uiimages.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uimodals.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uicards.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uilists.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uimedia.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uigrid.svelte"),
	() => import("..\\..\\src\\routes\\baseui\\uitabs.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\ComboCandlestick1.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\ComboCandlestick.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\candlestickChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\CandlestickLine.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\Category.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\candlestickChart\\Basic.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\GradientCircleRadialbar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\StrokedCircleRadial.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\SemiCircularRadial.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\MultipleRadialbar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\CircleRadialbar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\SimpleRadialbar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\radialbarCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radialbarCharts\\ImageRadialbar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\DifferentColor.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\MultipleSeries.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\timelineCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\MultiSeries.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\Advanced.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\timelineCharts\\Basic.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\boxplotCharts\\boxplotCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\boxplotCharts\\Horizontal.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\boxplotCharts\\Scatter.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\boxplotCharts\\Basic.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\heatmapCharts\\RangeWithoutShades.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\heatmapCharts\\MultipleHeatmap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\heatmapCharts\\heatmapCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\heatmapCharts\\BasicHeatmap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\heatmapCharts\\ColorRange.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\scatterCharts\\scatterCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\scatterCharts\\ImagesChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\scatterCharts\\Datetime.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\scatterCharts\\Basic.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\treemapCharts\\ColorRangeTreemap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\treemapCharts\\DiffColorTreemap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\treemapCharts\\treemapCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\treemapCharts\\BasicTreemap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\treemapCharts\\MultiTreemap.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\ColumnGroupLabels.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\DistributedColumn.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\ColumnWithLable.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\StackedColumn2.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\DynamicColumn.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\NagetiveLable.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\StackedColumn.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\ColumnMarker.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\columnCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\BasicColumn.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\RangeColumn.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\RotateLable.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\columnCharts\\Quarter.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\bubbleChart\\ThreeDBubble.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\bubbleChart\\bubbleChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\bubbleChart\\Simple.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\mixedCharts\\LineColumnArea.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\mixedCharts\\mixedCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\mixedCharts\\YAxis.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\mixedCharts\\Area.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\mixedCharts\\Line.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\polarCharts\\PolarMonochrome.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\polarCharts\\polarCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\polarCharts\\BasicPolar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radarCharts\\MultipleRadar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radarCharts\\PolygonRadar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radarCharts\\SimpleRadar.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\radarCharts\\radarCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\IrregularAreaCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\AreaNullValueChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\GithubStyleCharts1.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\GithubStyleCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\NegativeAreaChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\StackedAreaChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\BasicAreaCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\SplineAreaChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\areaCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\areaCharts\\AxisChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\LinewithAnnotations.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\LinewithDataLabels.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\ZoomableTimeseries.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\ChartSyncingLine2.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\ChartSyncingArea.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\ChartSyncingLine.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\GradientCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\LineAllCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\SteplineChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\BrushChart1.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\MissingData.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\BrushChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\DashedLine.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\lineCharts\\lineCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\CustomDataLabel.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\BarwithImages.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Patterned.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\barCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Negative.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Reversed.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Stacked2.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Groupes.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Markers.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Stacked.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\barCharts\\Basic.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\PatternedDonut.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\GradientDonut.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\ImagePieChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\MonochromePie.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\SimpleDonut.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\UpdateDonut.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\SimplePie.svelte"),
	() => import("..\\..\\src\\routes\\charts\\apexCharts\\pieCharts\\pieCharts.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\DonutChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\PolarChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\RadarChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\LineChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\BarChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\PieChart.svelte"),
	() => import("..\\..\\src\\routes\\charts\\chartsJs\\chartsJs.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\kycverification\\KYCVerification.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\kycverification\\apps-crypto-kyc.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\cryptoorder\\apps-crypto-orders.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\transaction\\apps-crypto-transactions.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\transaction\\AllTransactions.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\transaction\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\iconlist\\apps-crypto-ico.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\iconlist\\widgets.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\iconlist\\ico.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\PortfolioStatistics.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\apps-crypto-wallet.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\RecentTransaction.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\watchListChart.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\MarketStatus.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\Watchlist.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\mywallet\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\buysell\\apps-crypto-buy-sell.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\buysell\\BuySellCoin.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\buysell\\MarketGraph.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\buysell\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\crypto\\buysell\\Market.svelte"),
	() => import("..\\..\\src\\routes\\tables\\basictables\\tables-basic.svelte"),
	() => import("..\\..\\src\\routes\\tables\\gridjs\\tables-gridjs.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-checkboxes-radios.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-range-sliders.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-file-uploads.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-validation.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-advanced.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-elements.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-layouts.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-pickers.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-select.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-wizard.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\form-editor.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\forms-masks.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\tooltipform.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\select2.svelte"),
	() => import("..\\..\\src\\routes\\Forms\\schema.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\EcommerceAction\\ecommerceaction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\EcommerceAction\\FeedbackAction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\EcommerceAction\\RatingTemplate.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\EcommerceAction\\InvoiceAction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\BasicAction\\PasswordChangeAction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\BasicAction\\EmailVerifyAction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\BasicAction\\SubscribeAction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\BasicAction\\basicaction.svelte"),
	() => import("..\\..\\src\\routes\\email\\emailtemplates\\BasicAction\\basic.svelte"),
	() => import("..\\..\\src\\routes\\icons\\LineAwesomeIcons\\LineAwesomeIcons.svelte"),
	() => import("..\\..\\src\\routes\\icons\\MaterialDesign\\MaterialDesign.svelte"),
	() => import("..\\..\\src\\routes\\icons\\FeatherIcons\\FeatherIcons.svelte"),
	() => import("..\\..\\src\\routes\\icons\\Cryptoicons\\cryptoicons.svelte"),
	() => import("..\\..\\src\\routes\\icons\\RemixIcons\\RemixIcons.svelte"),
	() => import("..\\..\\src\\routes\\icons\\BoxIcons\\BoxIcons.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-coming-soon.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-maintenance.svelte"),
	() => import("..\\..\\src\\routes\\pages\\termscondition\\index.svelte"),
	() => import("..\\..\\src\\routes\\pages\\privacypolicy\\index.svelte"),
	() => import("..\\..\\src\\routes\\pages\\searchresults\\pages-search-results.svelte"),
	() => import("..\\..\\src\\routes\\pages\\timeline\\timeline.svelte"),
	() => import("..\\..\\src\\routes\\pages\\gallery\\pages-gallery.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pricing\\pages-pricing.svelte"),
	() => import("..\\..\\src\\routes\\pages\\profile\\settings\\pages-profile-settings.svelte"),
	() => import("..\\..\\src\\routes\\pages\\profile\\simple\\simplepage.svelte"),
	() => import("..\\..\\src\\routes\\pages\\sitemap\\pages-sitemap.svelte"),
	() => import("..\\..\\src\\routes\\pages\\starter\\pages-starter.svelte"),
	() => import("..\\..\\src\\routes\\pages\\faqs\\pages-faqs.svelte"),
	() => import("..\\..\\src\\routes\\pages\\team\\team.svelte"),
	() => import("..\\..\\src\\routes\\rules\\ManageRules.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\apps-tasks-list-view.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\apps-tasks-details.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\apps-tasks-kanban.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\createTaskModal.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\TimeTracking.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\TaskListCol.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\AllTasks.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\Comments.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\Summary.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\TaskCol.svelte"),
	() => import("..\\..\\src\\routes\\tasks\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\CandidateList\\GridView\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\CandidateList\\ListView\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\CompaniesList\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobCategories\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Application\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\NatworkSummary.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\VisitorGraph.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\JobSummary.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\Statistics\\Charts.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Overview\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Overview\\JobDescription.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Overview\\RightSection.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Overview\\RelatedJobs.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Overview\\Header.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\Grid\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\List\\index.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\JobList\\List\\AppSummary.svelte"),
	() => import("..\\..\\src\\routes\\Jobs\\NewJob\\index.svelte"),
	() => import("..\\..\\src\\routes\\maps\\GoogleMaps.svelte"),
	() => import("..\\..\\src\\routes\\todo\\index.svelte"),
	() => import("..\\..\\src\\routes\\crm\\apps-crm-companies.svelte"),
	() => import("..\\..\\src\\routes\\crm\\apps-crm-contacts.svelte"),
	() => import("..\\..\\src\\routes\\crm\\apps-crm-deals.svelte"),
	() => import("..\\..\\src\\routes\\crm\\apps-crm-leads.svelte"),
	() => import("..\\..\\src\\routes\\crm\\CompanyAction.svelte"),
	() => import("..\\..\\src\\routes\\crm\\ContactAction.svelte"),
	() => import("..\\..\\src\\routes\\crm\\leadDiscover.svelte"),
	() => import("..\\..\\src\\routes\\crm\\CrmFilter.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/authenticationInner/twostepverification/auth-twostep-basic.svelte
	[/^\/authenticationInner\/twostepverification\/auth-twostep-basic\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/authenticationInner/twostepverification/auth-twostep-cover.svelte
	[/^\/authenticationInner\/twostepverification\/auth-twostep-cover\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/authenticationInner/passwordcreate/auth-pass-change-basic.svelte
	[/^\/authenticationInner\/passwordcreate\/auth-pass-change-basic\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/authenticationInner/passwordcreate/auth-pass-change-cover.svelte
	[/^\/authenticationInner\/passwordcreate\/auth-pass-change-cover\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/authenticationInner/successmessage/auth-success-msg-basic.svelte
	[/^\/authenticationInner\/successmessage\/auth-success-msg-basic\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/authenticationInner/successmessage/auth-success-msg-cover.svelte
	[/^\/authenticationInner\/successmessage\/auth-success-msg-cover\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/authenticationInner/ParticlesAuth.svelte
	[/^\/authenticationInner\/ParticlesAuth\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/authenticationInner/passwordreset/auth-pass-reset-basic.svelte
	[/^\/authenticationInner\/passwordreset\/auth-pass-reset-basic\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/authenticationInner/passwordreset/auth-pass-reset-cover.svelte
	[/^\/authenticationInner\/passwordreset\/auth-pass-reset-cover\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/authenticationInner/AuthSlider.svelte
	[/^\/authenticationInner\/AuthSlider\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/authenticationInner/lockscreen/auth-lockscreen-basic.svelte
	[/^\/authenticationInner\/lockscreen\/auth-lockscreen-basic\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/authenticationInner/lockscreen/auth-lockscreen-cover.svelte
	[/^\/authenticationInner\/lockscreen\/auth-lockscreen-cover\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/authenticationInner/register/auth-signup-basic.svelte
	[/^\/authenticationInner\/register\/auth-signup-basic\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/authenticationInner/register/auth-signup-cover.svelte
	[/^\/authenticationInner\/register\/auth-signup-cover\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-basic.svelte
	[/^\/authenticationInner\/errors\/auth-404-basic\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-cover.svelte
	[/^\/authenticationInner\/errors\/auth-404-cover\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-alt.svelte
	[/^\/authenticationInner\/errors\/auth-404-alt\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-offline.svelte
	[/^\/authenticationInner\/errors\/auth-offline\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-500.svelte
	[/^\/authenticationInner\/errors\/auth-500\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/authenticationInner/logout/auth-logout-basic.svelte
	[/^\/authenticationInner\/logout\/auth-logout-basic\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/authenticationInner/logout/auth-logout-cover.svelte
	[/^\/authenticationInner\/logout\/auth-logout-cover\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/authenticationInner/login/auth-signin-basic.svelte
	[/^\/authenticationInner\/login\/auth-signin-basic\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/authenticationInner/login/auth-signin-cover.svelte
	[/^\/authenticationInner\/login\/auth-signin-cover\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/dashboard-analytics/index.svelte
	[/^\/dashboard-analytics\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/dashboard-analytics/AudiencesSessionsCharts.svelte
	[/^\/dashboard-analytics\/AudiencesSessionsCharts\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/dashboard-analytics/UpgradeAccountNotise.svelte
	[/^\/dashboard-analytics\/UpgradeAccountNotise\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/dashboard-analytics/UsersByDeviceCharts.svelte
	[/^\/dashboard-analytics\/UsersByDeviceCharts\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/dashboard-analytics/AudiencesSessions.svelte
	[/^\/dashboard-analytics\/AudiencesSessions\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/dashboard-analytics/AudiencesMetrics.svelte
	[/^\/dashboard-analytics\/AudiencesMetrics\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/dashboard-analytics/AudiencesCharts.svelte
	[/^\/dashboard-analytics\/AudiencesCharts\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/dashboard-analytics/CountriesCharts.svelte
	[/^\/dashboard-analytics\/CountriesCharts\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/dashboard-analytics/UsersByDevice.svelte
	[/^\/dashboard-analytics\/UsersByDevice\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/dashboard-analytics/TopReferrals.svelte
	[/^\/dashboard-analytics\/TopReferrals\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/dashboard-analytics/LiveUsers.svelte
	[/^\/dashboard-analytics\/LiveUsers\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/dashboard-analytics/TopPages.svelte
	[/^\/dashboard-analytics\/TopPages\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/dashboard-analytics/Widget.svelte
	[/^\/dashboard-analytics\/Widget\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/dashboard-projects/index.svelte
	[/^\/dashboard-projects\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/dashboard-projects/ProjectsOverviewCharts.svelte
	[/^\/dashboard-projects\/ProjectsOverviewCharts\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/dashboard-projects/PrjectsStatusCharts.svelte
	[/^\/dashboard-projects\/PrjectsStatusCharts\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/dashboard-projects/TeamMembersCharts.svelte
	[/^\/dashboard-projects\/TeamMembersCharts\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/dashboard-projects/UpcomingSchedules.svelte
	[/^\/dashboard-projects\/UpcomingSchedules\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/dashboard-projects/ProjectsOverview.svelte
	[/^\/dashboard-projects\/ProjectsOverview\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/dashboard-projects/ActiveProjects.svelte
	[/^\/dashboard-projects\/ActiveProjects\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/dashboard-projects/ProjectsStatus.svelte
	[/^\/dashboard-projects\/ProjectsStatus\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/dashboard-projects/TeamMembers.svelte
	[/^\/dashboard-projects\/TeamMembers\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/dashboard-projects/MyTasks.svelte
	[/^\/dashboard-projects\/MyTasks\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/dashboard-projects/Widgets.svelte
	[/^\/dashboard-projects\/Widgets\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/dashboard-projects/Chat.svelte
	[/^\/dashboard-projects\/Chat\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/dashboard-crypto/index.svelte
	[/^\/dashboard-crypto\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/dashboard-crypto/DashboardCryptoCharts.svelte
	[/^\/dashboard-crypto\/DashboardCryptoCharts\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/dashboard-crypto/PortfolioCharts.svelte
	[/^\/dashboard-crypto\/PortfolioCharts\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/dashboard-crypto/RecentActivity.svelte
	[/^\/dashboard-crypto\/RecentActivity\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/dashboard-crypto/TopPerformers.svelte
	[/^\/dashboard-crypto\/TopPerformers\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/dashboard-crypto/MarkerCharts.svelte
	[/^\/dashboard-crypto\/MarkerCharts\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/dashboard-crypto/MyCurrencies.svelte
	[/^\/dashboard-crypto\/MyCurrencies\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/dashboard-crypto/MarketGraph.svelte
	[/^\/dashboard-crypto\/MarketGraph\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/dashboard-crypto/MyPortfolio.svelte
	[/^\/dashboard-crypto\/MyPortfolio\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/dashboard-crypto/NewsFeed.svelte
	[/^\/dashboard-crypto\/NewsFeed\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/dashboard-crypto/Widgets1.svelte
	[/^\/dashboard-crypto\/Widgets1\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/dashboard-crypto/Trading.svelte
	[/^\/dashboard-crypto\/Trading\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/dashboard-crypto/Widgets.svelte
	[/^\/dashboard-crypto\/Widgets\/?$/, [c[0], c[63]], [c[1]]],

	// src/routes/NFTmarketplace/WalletConnect/apps-nft-wallet.svelte
	[/^\/NFTmarketplace\/WalletConnect\/apps-nft-wallet\/?$/, [c[0], c[64]], [c[1]]],

	// src/routes/NFTmarketplace/Collections/apps-nft-collections.svelte
	[/^\/NFTmarketplace\/Collections\/apps-nft-collections\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/NFTmarketplace/Itemdetails/apps-nft-item-details.svelte
	[/^\/NFTmarketplace\/Itemdetails\/apps-nft-item-details\/?$/, [c[0], c[66]], [c[1]]],

	// src/routes/NFTmarketplace/LiveAuction/apps-nft-auction.svelte
	[/^\/NFTmarketplace\/LiveAuction\/apps-nft-auction\/?$/, [c[0], c[67]], [c[1]]],

	// src/routes/NFTmarketplace/Marketplace/apps-nft-marketplace.svelte
	[/^\/NFTmarketplace\/Marketplace\/apps-nft-marketplace\/?$/, [c[0], c[68]], [c[1]]],

	// src/routes/NFTmarketplace/ExploreNow/apps-nft-explore.svelte
	[/^\/NFTmarketplace\/ExploreNow\/apps-nft-explore\/?$/, [c[0], c[69]], [c[1]]],

	// src/routes/NFTmarketplace/CreateNFT/apps-nft-create.svelte
	[/^\/NFTmarketplace\/CreateNFT\/apps-nft-create\/?$/, [c[0], c[70]], [c[1]]],

	// src/routes/NFTmarketplace/Creators/apps-nft-creators.svelte
	[/^\/NFTmarketplace\/Creators\/apps-nft-creators\/?$/, [c[0], c[71]], [c[1]]],

	// src/routes/NFTmarketplace/Ranking/apps-nft-ranking.svelte
	[/^\/NFTmarketplace\/Ranking\/apps-nft-ranking\/?$/, [c[0], c[72]], [c[1]]],

	// src/routes/dashboard-crm/index.svelte
	[/^\/dashboard-crm\/?$/, [c[0], c[73]], [c[1]]],

	// src/routes/dashboard-crm/BalanceOverviewCharts.svelte
	[/^\/dashboard-crm\/BalanceOverviewCharts\/?$/, [c[0], c[74]], [c[1]]],

	// src/routes/dashboard-crm/DashboardCrmCharts.svelte
	[/^\/dashboard-crm\/DashboardCrmCharts\/?$/, [c[0], c[75]], [c[1]]],

	// src/routes/dashboard-crm/UpcomingActivities.svelte
	[/^\/dashboard-crm\/UpcomingActivities\/?$/, [c[0], c[76]], [c[1]]],

	// src/routes/dashboard-crm/BalanceOverview.svelte
	[/^\/dashboard-crm\/BalanceOverview\/?$/, [c[0], c[77]], [c[1]]],

	// src/routes/dashboard-crm/DealTypeCharts.svelte
	[/^\/dashboard-crm\/DealTypeCharts\/?$/, [c[0], c[78]], [c[1]]],

	// src/routes/dashboard-crm/SalesForecast.svelte
	[/^\/dashboard-crm\/SalesForecast\/?$/, [c[0], c[79]], [c[1]]],

	// src/routes/dashboard-crm/ClosingDeals.svelte
	[/^\/dashboard-crm\/ClosingDeals\/?$/, [c[0], c[80]], [c[1]]],

	// src/routes/dashboard-crm/DealsStatus.svelte
	[/^\/dashboard-crm\/DealsStatus\/?$/, [c[0], c[81]], [c[1]]],

	// src/routes/dashboard-crm/DealType.svelte
	[/^\/dashboard-crm\/DealType\/?$/, [c[0], c[82]], [c[1]]],

	// src/routes/dashboard-crm/MyTasks.svelte
	[/^\/dashboard-crm\/MyTasks\/?$/, [c[0], c[83]], [c[1]]],

	// src/routes/dashboard-crm/Widgets.svelte
	[/^\/dashboard-crm\/Widgets\/?$/, [c[0], c[84]], [c[1]]],

	// src/routes/dashboard-job/index.svelte
	[/^\/dashboard-job\/?$/, [c[0], c[85]], [c[1]]],

	// src/routes/dashboard-job/ApplicationsStatistic.svelte
	[/^\/dashboard-job\/ApplicationsStatistic\/?$/, [c[0], c[86]], [c[1]]],

	// src/routes/dashboard-job/FeaturedCompanies.svelte
	[/^\/dashboard-job\/FeaturedCompanies\/?$/, [c[0], c[87]], [c[1]]],

	// src/routes/dashboard-job/RecentApplicants.svelte
	[/^\/dashboard-job\/RecentApplicants\/?$/, [c[0], c[88]], [c[1]]],

	// src/routes/dashboard-job/DashboardCharts.svelte
	[/^\/dashboard-job\/DashboardCharts\/?$/, [c[0], c[89]], [c[1]]],

	// src/routes/dashboard-job/RecomendedJobs.svelte
	[/^\/dashboard-job\/RecomendedJobs\/?$/, [c[0], c[90]], [c[1]]],

	// src/routes/dashboard-job/Candidates.svelte
	[/^\/dashboard-job\/Candidates\/?$/, [c[0], c[91]], [c[1]]],

	// src/routes/dashboard-job/Widgets.svelte
	[/^\/dashboard-job\/Widgets\/?$/, [c[0], c[92]], [c[1]]],

	// src/routes/dashboard-nft/index.svelte
	[/^\/dashboard-nft\/?$/, [c[0], c[93]], [c[1]]],

	// src/routes/dashboard-nft/DashboardNFTCharts.svelte
	[/^\/dashboard-nft\/DashboardNFTCharts\/?$/, [c[0], c[94]], [c[1]]],

	// src/routes/dashboard-nft/PopularityChart.svelte
	[/^\/dashboard-nft\/PopularityChart\/?$/, [c[0], c[95]], [c[1]]],

	// src/routes/dashboard-nft/TopArtworkChart.svelte
	[/^\/dashboard-nft\/TopArtworkChart\/?$/, [c[0], c[96]], [c[1]]],

	// src/routes/dashboard-nft/FeaturedNFT.svelte
	[/^\/dashboard-nft\/FeaturedNFT\/?$/, [c[0], c[97]], [c[1]]],

	// src/routes/dashboard-nft/Marketplace.svelte
	[/^\/dashboard-nft\/Marketplace\/?$/, [c[0], c[98]], [c[1]]],

	// src/routes/dashboard-nft/Popularity.svelte
	[/^\/dashboard-nft\/Popularity\/?$/, [c[0], c[99]], [c[1]]],

	// src/routes/dashboard-nft/RecentNFTs.svelte
	[/^\/dashboard-nft\/RecentNFTs\/?$/, [c[0], c[100]], [c[1]]],

	// src/routes/dashboard-nft/Widgets.svelte
	[/^\/dashboard-nft\/Widgets\/?$/, [c[0], c[101]], [c[1]]],

	// src/routes/connections/ManageConnections.svelte
	[/^\/connections\/ManageConnections\/?$/, [c[0], c[102]], [c[1]]],

	// src/routes/connections/AddConnection.svelte
	[/^\/connections\/AddConnection\/?$/, [c[0], c[103]], [c[1]]],

	// src/routes/filemanager/index.svelte
	[/^\/filemanager\/?$/, [c[0], c[104]], [c[1]]],

	// src/routes/filemanager/FileManagerCharts.svelte
	[/^\/filemanager\/FileManagerCharts\/?$/, [c[0], c[105]], [c[1]]],

	// src/routes/emailInbox/EmailSidebar.svelte
	[/^\/emailInbox\/EmailSidebar\/?$/, [c[0], c[106]], [c[1]]],

	// src/routes/emailInbox/EmailToolbar.svelte
	[/^\/emailInbox\/EmailToolbar\/?$/, [c[0], c[107]], [c[1]]],

	// src/routes/emailInbox/apps-mailbox.svelte
	[/^\/emailInbox\/apps-mailbox\/?$/, [c[0], c[108]], [c[1]]],

	// src/routes/advanceUi/advance-ui-animation.svelte
	[/^\/advanceUi\/advance-ui-animation\/?$/, [c[0], c[109]], [c[1]]],

	// src/routes/advanceUi/advance-ui-highlight.svelte
	[/^\/advanceUi\/advance-ui-highlight\/?$/, [c[0], c[110]], [c[1]]],

	// src/routes/advanceUi/advance-ui-scrollbar.svelte
	[/^\/advanceUi\/advance-ui-scrollbar\/?$/, [c[0], c[111]], [c[1]]],

	// src/routes/advanceUi/advance-ui-nestable.svelte
	[/^\/advanceUi\/advance-ui-nestable\/?$/, [c[0], c[112]], [c[1]]],

	// src/routes/advanceUi/advance-ui-swiper.svelte
	[/^\/advanceUi\/advance-ui-swiper\/?$/, [c[0], c[113]], [c[1]]],

	// src/routes/apps-chat/index.svelte
	[/^\/apps-chat\/?$/, [c[0], c[114]], [c[1]]],

	// src/routes/apps-chat/PersonalInfo.svelte
	[/^\/apps-chat\/PersonalInfo\/?$/, [c[0], c[115]], [c[1]]],

	// src/routes/apps-chat/attachement.svelte
	[/^\/apps-chat\/attachement\/?$/, [c[0], c[116]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[117]], [c[1]]],

	// src/routes/dashboard/DashboardEcommerceCharts.svelte
	[/^\/dashboard\/DashboardEcommerceCharts\/?$/, [c[0], c[118]], [c[1]]],

	// src/routes/dashboard/BestSellingProducts.svelte
	[/^\/dashboard\/BestSellingProducts\/?$/, [c[0], c[119]], [c[1]]],

	// src/routes/dashboard/SalesByLocations.svelte
	[/^\/dashboard\/SalesByLocations\/?$/, [c[0], c[120]], [c[1]]],

	// src/routes/dashboard/RecentActivity.svelte
	[/^\/dashboard\/RecentActivity\/?$/, [c[0], c[121]], [c[1]]],

	// src/routes/dashboard/RecentOrders.svelte
	[/^\/dashboard\/RecentOrders\/?$/, [c[0], c[122]], [c[1]]],

	// src/routes/dashboard/StoreVisits.svelte
	[/^\/dashboard\/StoreVisits\/?$/, [c[0], c[123]], [c[1]]],

	// src/routes/dashboard/TopSellers.svelte
	[/^\/dashboard\/TopSellers\/?$/, [c[0], c[124]], [c[1]]],

	// src/routes/dashboard/Revenue.svelte
	[/^\/dashboard\/Revenue\/?$/, [c[0], c[125]], [c[1]]],

	// src/routes/dashboard/Section.svelte
	[/^\/dashboard\/Section\/?$/, [c[0], c[126]], [c[1]]],

	// src/routes/dashboard/Widgets.svelte
	[/^\/dashboard\/Widgets\/?$/, [c[0], c[127]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-product-details.svelte
	[/^\/ecommerce\/apps-ecommerce-product-details\/?$/, [c[0], c[128]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-seller-details.svelte
	[/^\/ecommerce\/apps-ecommerce-seller-details\/?$/, [c[0], c[129]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-order-details.svelte
	[/^\/ecommerce\/apps-ecommerce-order-details\/?$/, [c[0], c[130]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-add-product.svelte
	[/^\/ecommerce\/apps-ecommerce-add-product\/?$/, [c[0], c[131]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-customers.svelte
	[/^\/ecommerce\/apps-ecommerce-customers\/?$/, [c[0], c[132]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-checkout.svelte
	[/^\/ecommerce\/apps-ecommerce-checkout\/?$/, [c[0], c[133]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-products.svelte
	[/^\/ecommerce\/apps-ecommerce-products\/?$/, [c[0], c[134]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-sellers.svelte
	[/^\/ecommerce\/apps-ecommerce-sellers\/?$/, [c[0], c[135]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-orders.svelte
	[/^\/ecommerce\/apps-ecommerce-orders\/?$/, [c[0], c[136]], [c[1]]],

	// src/routes/ecommerce/apps-ecommerce-cart.svelte
	[/^\/ecommerce\/apps-ecommerce-cart\/?$/, [c[0], c[137]], [c[1]]],

	// src/routes/ecommerce/PricingWidgetList.svelte
	[/^\/ecommerce\/PricingWidgetList\/?$/, [c[0], c[138]], [c[1]]],

	// src/routes/ecommerce/SellerChats.svelte
	[/^\/ecommerce\/SellerChats\/?$/, [c[0], c[139]], [c[1]]],

	// src/routes/ecommerce/Actions.svelte
	[/^\/ecommerce\/Actions\/?$/, [c[0], c[140]], [c[1]]],

	// src/routes/calendar/UpcommingEvents.svelte
	[/^\/calendar\/UpcommingEvents\/?$/, [c[0], c[141]], [c[1]]],

	// src/routes/calendar/apps-calendar.svelte
	[/^\/calendar\/apps-calendar\/?$/, [c[0], c[142]], [c[1]]],

	// src/routes/invoices/apps-invoices-details.svelte
	[/^\/invoices\/apps-invoices-details\/?$/, [c[0], c[143]], [c[1]]],

	// src/routes/invoices/apps-invoices-create.svelte
	[/^\/invoices\/apps-invoices-create\/?$/, [c[0], c[144]], [c[1]]],

	// src/routes/invoices/apps-invoices-list.svelte
	[/^\/invoices\/apps-invoices-list\/?$/, [c[0], c[145]], [c[1]]],

	// src/routes/invoices/Actions.svelte
	[/^\/invoices\/Actions\/?$/, [c[0], c[146]], [c[1]]],

	// src/routes/projects/apps-projects-overview.svelte
	[/^\/projects\/apps-projects-overview\/?$/, [c[0], c[147]], [c[1]]],

	// src/routes/projects/apps-projects-create.svelte
	[/^\/projects\/apps-projects-create\/?$/, [c[0], c[148]], [c[1]]],

	// src/routes/projects/apps-projects-list.svelte
	[/^\/projects\/apps-projects-list\/?$/, [c[0], c[149]], [c[1]]],

	// src/routes/projects/ProjectOverview/ActivitiesTab.svelte
	[/^\/projects\/ProjectOverview\/ActivitiesTab\/?$/, [c[0], c[150]], [c[1]]],

	// src/routes/projects/ProjectOverview/DocumentsTab.svelte
	[/^\/projects\/ProjectOverview\/DocumentsTab\/?$/, [c[0], c[151]], [c[1]]],

	// src/routes/projects/ProjectOverview/OverviewTab.svelte
	[/^\/projects\/ProjectOverview\/OverviewTab\/?$/, [c[0], c[152]], [c[1]]],

	// src/routes/projects/ProjectOverview/Section.svelte
	[/^\/projects\/ProjectOverview\/Section\/?$/, [c[0], c[153]], [c[1]]],

	// src/routes/projects/ProjectOverview/TeamTab.svelte
	[/^\/projects\/ProjectOverview\/TeamTab\/?$/, [c[0], c[154]], [c[1]]],

	// src/routes/projects/List.svelte
	[/^\/projects\/List\/?$/, [c[0], c[155]], [c[1]]],

	// src/routes/Widgets/sessionsByCountries.svelte
	[/^\/Widgets\/sessionsByCountries\/?$/, [c[0], c[156]], [c[1]]],

	// src/routes/Widgets/UpcomingActivities.svelte
	[/^\/Widgets\/UpcomingActivities\/?$/, [c[0], c[157]], [c[1]]],

	// src/routes/Widgets/topReferralsPages.svelte
	[/^\/Widgets\/topReferralsPages\/?$/, [c[0], c[158]], [c[1]]],

	// src/routes/Widgets/Chart&MapWidgets.svelte
	[/^\/Widgets\/Chart&MapWidgets\/?$/, [c[0], c[159]], [c[1]]],

	// src/routes/Widgets/EcommerceWidgets.svelte
	[/^\/Widgets\/EcommerceWidgets\/?$/, [c[0], c[160]], [c[1]]],

	// src/routes/Widgets/audiencesMetrics.svelte
	[/^\/Widgets\/audiencesMetrics\/?$/, [c[0], c[161]], [c[1]]],

	// src/routes/Widgets/WidgetsCharts.svelte
	[/^\/Widgets\/WidgetsCharts\/?$/, [c[0], c[162]], [c[1]]],

	// src/routes/Widgets/OtherWidgets.svelte
	[/^\/Widgets\/OtherWidgets\/?$/, [c[0], c[163]], [c[1]]],

	// src/routes/Widgets/myPortfolio.svelte
	[/^\/Widgets\/myPortfolio\/?$/, [c[0], c[164]], [c[1]]],

	// src/routes/Widgets/CreditCard.svelte
	[/^\/Widgets\/CreditCard\/?$/, [c[0], c[165]], [c[1]]],

	// src/routes/Widgets/TileBoxs.svelte
	[/^\/Widgets\/TileBoxs\/?$/, [c[0], c[166]], [c[1]]],

	// src/routes/Widgets/widget.svelte
	[/^\/Widgets\/widget\/?$/, [c[0], c[167]], [c[1]]],

	// src/routes/landing/NFTLanding/index.svelte
	[/^\/landing\/NFTLanding\/?$/, [c[0], c[168]], [c[1]]],

	// src/routes/landing/NFTLanding/DiscoverItems.svelte
	[/^\/landing\/NFTLanding\/DiscoverItems\/?$/, [c[0], c[169]], [c[1]]],

	// src/routes/landing/NFTLanding/TopCreator.svelte
	[/^\/landing\/NFTLanding\/TopCreator\/?$/, [c[0], c[170]], [c[1]]],

	// src/routes/landing/NFTLanding/Features.svelte
	[/^\/landing\/NFTLanding\/Features\/?$/, [c[0], c[171]], [c[1]]],

	// src/routes/landing/NFTLanding/Products.svelte
	[/^\/landing\/NFTLanding\/Products\/?$/, [c[0], c[172]], [c[1]]],

	// src/routes/landing/NFTLanding/Trending.svelte
	[/^\/landing\/NFTLanding\/Trending\/?$/, [c[0], c[173]], [c[1]]],

	// src/routes/landing/NFTLanding/Connect.svelte
	[/^\/landing\/NFTLanding\/Connect\/?$/, [c[0], c[174]], [c[1]]],

	// src/routes/landing/NFTLanding/footer.svelte
	[/^\/landing\/NFTLanding\/footer\/?$/, [c[0], c[175]], [c[1]]],

	// src/routes/landing/NFTLanding/navbar.svelte
	[/^\/landing\/NFTLanding\/navbar\/?$/, [c[0], c[176]], [c[1]]],

	// src/routes/landing/NFTLanding/home.svelte
	[/^\/landing\/NFTLanding\/home\/?$/, [c[0], c[177]], [c[1]]],

	// src/routes/landing/NFTLanding/CTA.svelte
	[/^\/landing\/NFTLanding\/CTA\/?$/, [c[0], c[178]], [c[1]]],

	// src/routes/landing/OnePage/index.svelte
	[/^\/landing\/OnePage\/?$/, [c[0], c[179]], [c[1]]],

	// src/routes/landing/OnePage/workProcess.svelte
	[/^\/landing\/OnePage\/workProcess\/?$/, [c[0], c[180]], [c[1]]],

	// src/routes/landing/OnePage/features.svelte
	[/^\/landing\/OnePage\/features\/?$/, [c[0], c[181]], [c[1]]],

	// src/routes/landing/OnePage/services.svelte
	[/^\/landing\/OnePage\/services\/?$/, [c[0], c[182]], [c[1]]],

	// src/routes/landing/OnePage/contact.svelte
	[/^\/landing\/OnePage\/contact\/?$/, [c[0], c[183]], [c[1]]],

	// src/routes/landing/OnePage/counter.svelte
	[/^\/landing\/OnePage\/counter\/?$/, [c[0], c[184]], [c[1]]],

	// src/routes/landing/OnePage/reviews.svelte
	[/^\/landing\/OnePage\/reviews\/?$/, [c[0], c[185]], [c[1]]],

	// src/routes/landing/OnePage/client.svelte
	[/^\/landing\/OnePage\/client\/?$/, [c[0], c[186]], [c[1]]],

	// src/routes/landing/OnePage/footer.svelte
	[/^\/landing\/OnePage\/footer\/?$/, [c[0], c[187]], [c[1]]],

	// src/routes/landing/OnePage/navbar.svelte
	[/^\/landing\/OnePage\/navbar\/?$/, [c[0], c[188]], [c[1]]],

	// src/routes/landing/OnePage/plans.svelte
	[/^\/landing\/OnePage\/plans\/?$/, [c[0], c[189]], [c[1]]],

	// src/routes/landing/OnePage/home.svelte
	[/^\/landing\/OnePage\/home\/?$/, [c[0], c[190]], [c[1]]],

	// src/routes/landing/OnePage/team.svelte
	[/^\/landing\/OnePage\/team\/?$/, [c[0], c[191]], [c[1]]],

	// src/routes/landing/OnePage/cta.svelte
	[/^\/landing\/OnePage\/cta\/?$/, [c[0], c[192]], [c[1]]],

	// src/routes/landing/OnePage/faq.svelte
	[/^\/landing\/OnePage\/faq\/?$/, [c[0], c[193]], [c[1]]],

	// src/routes/landing/Job/index.svelte
	[/^\/landing\/Job\/?$/, [c[0], c[194]], [c[1]]],

	// src/routes/landing/Job/Candidates.svelte
	[/^\/landing\/Job\/Candidates\/?$/, [c[0], c[195]], [c[1]]],

	// src/routes/landing/Job/Categories.svelte
	[/^\/landing\/Job\/Categories\/?$/, [c[0], c[196]], [c[1]]],

	// src/routes/landing/Job/Features.svelte
	[/^\/landing\/Job\/Features\/?$/, [c[0], c[197]], [c[1]]],

	// src/routes/landing/Job/FindJob.svelte
	[/^\/landing\/Job\/FindJob\/?$/, [c[0], c[198]], [c[1]]],

	// src/routes/landing/Job/Process.svelte
	[/^\/landing\/Job\/Process\/?$/, [c[0], c[199]], [c[1]]],

	// src/routes/landing/Job/Footer.svelte
	[/^\/landing\/Job\/Footer\/?$/, [c[0], c[200]], [c[1]]],

	// src/routes/landing/Job/Navbar.svelte
	[/^\/landing\/Job\/Navbar\/?$/, [c[0], c[201]], [c[1]]],

	// src/routes/landing/Job/Blog.svelte
	[/^\/landing\/Job\/Blog\/?$/, [c[0], c[202]], [c[1]]],

	// src/routes/landing/Job/Home.svelte
	[/^\/landing\/Job\/Home\/?$/, [c[0], c[203]], [c[1]]],

	// src/routes/support/ticketsdetails/apps-tickets-details.svelte
	[/^\/support\/ticketsdetails\/apps-tickets-details\/?$/, [c[0], c[204]], [c[1]]],

	// src/routes/support/ticketsdetails/TicketsDetailsCode.svelte
	[/^\/support\/ticketsdetails\/TicketsDetailsCode\/?$/, [c[0], c[205]], [c[1]]],

	// src/routes/support/ticketsdetails/TicketDescription.svelte
	[/^\/support\/ticketsdetails\/TicketDescription\/?$/, [c[0], c[206]], [c[1]]],

	// src/routes/support/ticketsdetails/TicketDetails.svelte
	[/^\/support\/ticketsdetails\/TicketDetails\/?$/, [c[0], c[207]], [c[1]]],

	// src/routes/support/ticketsdetails/Section.svelte
	[/^\/support\/ticketsdetails\/Section\/?$/, [c[0], c[208]], [c[1]]],

	// src/routes/support/listview/apps-tickets-list.svelte
	[/^\/support\/listview\/apps-tickets-list\/?$/, [c[0], c[209]], [c[1]]],

	// src/routes/support/listview/TicketsData.svelte
	[/^\/support\/listview\/TicketsData\/?$/, [c[0], c[210]], [c[1]]],

	// src/routes/support/listview/Actions.svelte
	[/^\/support\/listview\/Actions\/?$/, [c[0], c[211]], [c[1]]],

	// src/routes/support/listview/Widgets.svelte
	[/^\/support\/listview\/Widgets\/?$/, [c[0], c[212]], [c[1]]],

	// src/routes/APIKey/index.svelte
	[/^\/APIKey\/?$/, [c[0], c[213]], [c[1]]],

	// src/routes/APIKey/Actions.svelte
	[/^\/APIKey\/Actions\/?$/, [c[0], c[214]], [c[1]]],

	// src/routes/APIKey/Widgets.svelte
	[/^\/APIKey\/Widgets\/?$/, [c[0], c[215]], [c[1]]],

	// src/routes/baseui/uinotifications.svelte
	[/^\/baseui\/uinotifications\/?$/, [c[0], c[216]], [c[1]]],

	// src/routes/baseui/uiplaceholders.svelte
	[/^\/baseui\/uiplaceholders\/?$/, [c[0], c[217]], [c[1]]],

	// src/routes/baseui/uiaccordions.svelte
	[/^\/baseui\/uiaccordions\/?$/, [c[0], c[218]], [c[1]]],

	// src/routes/baseui/uiembedvideo.svelte
	[/^\/baseui\/uiembedvideo\/?$/, [c[0], c[219]], [c[1]]],

	// src/routes/baseui/uitypography.svelte
	[/^\/baseui\/uitypography\/?$/, [c[0], c[220]], [c[1]]],

	// src/routes/baseui/uidropdowns.svelte
	[/^\/baseui\/uidropdowns\/?$/, [c[0], c[221]], [c[1]]],

	// src/routes/baseui/uioffcanvas.svelte
	[/^\/baseui\/uioffcanvas\/?$/, [c[0], c[222]], [c[1]]],

	// src/routes/baseui/uiutilities.svelte
	[/^\/baseui\/uiutilities\/?$/, [c[0], c[223]], [c[1]]],

	// src/routes/baseui/UiCarousel/Slidewithindicator.svelte
	[/^\/baseui\/UiCarousel\/Slidewithindicator\/?$/, [c[0], c[224]], [c[1]]],

	// src/routes/baseui/UiCarousel/Slidewithcaption.svelte
	[/^\/baseui\/UiCarousel\/Slidewithcaption\/?$/, [c[0], c[225]], [c[1]]],

	// src/routes/baseui/UiCarousel/Slidewithcontrol.svelte
	[/^\/baseui\/UiCarousel\/Slidewithcontrol\/?$/, [c[0], c[226]], [c[1]]],

	// src/routes/baseui/UiCarousel/Darkvariant.svelte
	[/^\/baseui\/UiCarousel\/Darkvariant\/?$/, [c[0], c[227]], [c[1]]],

	// src/routes/baseui/UiCarousel/slide.svelte
	[/^\/baseui\/UiCarousel\/slide\/?$/, [c[0], c[228]], [c[1]]],

	// src/routes/baseui/uicarousel.svelte
	[/^\/baseui\/uicarousel\/?$/, [c[0], c[229]], [c[1]]],

	// src/routes/baseui/uiprogress.svelte
	[/^\/baseui\/uiprogress\/?$/, [c[0], c[230]], [c[1]]],

	// src/routes/baseui/uibuttons.svelte
	[/^\/baseui\/uibuttons\/?$/, [c[0], c[231]], [c[1]]],

	// src/routes/baseui/uigeneral.svelte
	[/^\/baseui\/uigeneral\/?$/, [c[0], c[232]], [c[1]]],

	// src/routes/baseui/uiribbons.svelte
	[/^\/baseui\/uiribbons\/?$/, [c[0], c[233]], [c[1]]],

	// src/routes/baseui/uialerts.svelte
	[/^\/baseui\/uialerts\/?$/, [c[0], c[234]], [c[1]]],

	// src/routes/baseui/uibadges.svelte
	[/^\/baseui\/uibadges\/?$/, [c[0], c[235]], [c[1]]],

	// src/routes/baseui/uicolors.svelte
	[/^\/baseui\/uicolors\/?$/, [c[0], c[236]], [c[1]]],

	// src/routes/baseui/uiimages.svelte
	[/^\/baseui\/uiimages\/?$/, [c[0], c[237]], [c[1]]],

	// src/routes/baseui/uimodals.svelte
	[/^\/baseui\/uimodals\/?$/, [c[0], c[238]], [c[1]]],

	// src/routes/baseui/uicards.svelte
	[/^\/baseui\/uicards\/?$/, [c[0], c[239]], [c[1]]],

	// src/routes/baseui/uilists.svelte
	[/^\/baseui\/uilists\/?$/, [c[0], c[240]], [c[1]]],

	// src/routes/baseui/uimedia.svelte
	[/^\/baseui\/uimedia\/?$/, [c[0], c[241]], [c[1]]],

	// src/routes/baseui/uigrid.svelte
	[/^\/baseui\/uigrid\/?$/, [c[0], c[242]], [c[1]]],

	// src/routes/baseui/uitabs.svelte
	[/^\/baseui\/uitabs\/?$/, [c[0], c[243]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/ComboCandlestick1.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/ComboCandlestick1\/?$/, [c[0], c[244]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/ComboCandlestick.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/ComboCandlestick\/?$/, [c[0], c[245]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/candlestickChart.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/candlestickChart\/?$/, [c[0], c[246]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/CandlestickLine.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/CandlestickLine\/?$/, [c[0], c[247]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/Category.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/Category\/?$/, [c[0], c[248]], [c[1]]],

	// src/routes/charts/apexCharts/candlestickChart/Basic.svelte
	[/^\/charts\/apexCharts\/candlestickChart\/Basic\/?$/, [c[0], c[249]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/GradientCircleRadialbar.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/GradientCircleRadialbar\/?$/, [c[0], c[250]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/StrokedCircleRadial.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/StrokedCircleRadial\/?$/, [c[0], c[251]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/SemiCircularRadial.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/SemiCircularRadial\/?$/, [c[0], c[252]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/MultipleRadialbar.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/MultipleRadialbar\/?$/, [c[0], c[253]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/CircleRadialbar.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/CircleRadialbar\/?$/, [c[0], c[254]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/SimpleRadialbar.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/SimpleRadialbar\/?$/, [c[0], c[255]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/radialbarCharts.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/radialbarCharts\/?$/, [c[0], c[256]], [c[1]]],

	// src/routes/charts/apexCharts/radialbarCharts/ImageRadialbar.svelte
	[/^\/charts\/apexCharts\/radialbarCharts\/ImageRadialbar\/?$/, [c[0], c[257]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/DifferentColor.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/DifferentColor\/?$/, [c[0], c[258]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/MultipleSeries.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/MultipleSeries\/?$/, [c[0], c[259]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/timelineCharts.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/timelineCharts\/?$/, [c[0], c[260]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/MultiSeries.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/MultiSeries\/?$/, [c[0], c[261]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/Advanced.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/Advanced\/?$/, [c[0], c[262]], [c[1]]],

	// src/routes/charts/apexCharts/timelineCharts/Basic.svelte
	[/^\/charts\/apexCharts\/timelineCharts\/Basic\/?$/, [c[0], c[263]], [c[1]]],

	// src/routes/charts/apexCharts/boxplotCharts/boxplotCharts.svelte
	[/^\/charts\/apexCharts\/boxplotCharts\/boxplotCharts\/?$/, [c[0], c[264]], [c[1]]],

	// src/routes/charts/apexCharts/boxplotCharts/Horizontal.svelte
	[/^\/charts\/apexCharts\/boxplotCharts\/Horizontal\/?$/, [c[0], c[265]], [c[1]]],

	// src/routes/charts/apexCharts/boxplotCharts/Scatter.svelte
	[/^\/charts\/apexCharts\/boxplotCharts\/Scatter\/?$/, [c[0], c[266]], [c[1]]],

	// src/routes/charts/apexCharts/boxplotCharts/Basic.svelte
	[/^\/charts\/apexCharts\/boxplotCharts\/Basic\/?$/, [c[0], c[267]], [c[1]]],

	// src/routes/charts/apexCharts/heatmapCharts/RangeWithoutShades.svelte
	[/^\/charts\/apexCharts\/heatmapCharts\/RangeWithoutShades\/?$/, [c[0], c[268]], [c[1]]],

	// src/routes/charts/apexCharts/heatmapCharts/MultipleHeatmap.svelte
	[/^\/charts\/apexCharts\/heatmapCharts\/MultipleHeatmap\/?$/, [c[0], c[269]], [c[1]]],

	// src/routes/charts/apexCharts/heatmapCharts/heatmapCharts.svelte
	[/^\/charts\/apexCharts\/heatmapCharts\/heatmapCharts\/?$/, [c[0], c[270]], [c[1]]],

	// src/routes/charts/apexCharts/heatmapCharts/BasicHeatmap.svelte
	[/^\/charts\/apexCharts\/heatmapCharts\/BasicHeatmap\/?$/, [c[0], c[271]], [c[1]]],

	// src/routes/charts/apexCharts/heatmapCharts/ColorRange.svelte
	[/^\/charts\/apexCharts\/heatmapCharts\/ColorRange\/?$/, [c[0], c[272]], [c[1]]],

	// src/routes/charts/apexCharts/scatterCharts/scatterCharts.svelte
	[/^\/charts\/apexCharts\/scatterCharts\/scatterCharts\/?$/, [c[0], c[273]], [c[1]]],

	// src/routes/charts/apexCharts/scatterCharts/ImagesChart.svelte
	[/^\/charts\/apexCharts\/scatterCharts\/ImagesChart\/?$/, [c[0], c[274]], [c[1]]],

	// src/routes/charts/apexCharts/scatterCharts/Datetime.svelte
	[/^\/charts\/apexCharts\/scatterCharts\/Datetime\/?$/, [c[0], c[275]], [c[1]]],

	// src/routes/charts/apexCharts/scatterCharts/Basic.svelte
	[/^\/charts\/apexCharts\/scatterCharts\/Basic\/?$/, [c[0], c[276]], [c[1]]],

	// src/routes/charts/apexCharts/treemapCharts/ColorRangeTreemap.svelte
	[/^\/charts\/apexCharts\/treemapCharts\/ColorRangeTreemap\/?$/, [c[0], c[277]], [c[1]]],

	// src/routes/charts/apexCharts/treemapCharts/DiffColorTreemap.svelte
	[/^\/charts\/apexCharts\/treemapCharts\/DiffColorTreemap\/?$/, [c[0], c[278]], [c[1]]],

	// src/routes/charts/apexCharts/treemapCharts/treemapCharts.svelte
	[/^\/charts\/apexCharts\/treemapCharts\/treemapCharts\/?$/, [c[0], c[279]], [c[1]]],

	// src/routes/charts/apexCharts/treemapCharts/BasicTreemap.svelte
	[/^\/charts\/apexCharts\/treemapCharts\/BasicTreemap\/?$/, [c[0], c[280]], [c[1]]],

	// src/routes/charts/apexCharts/treemapCharts/MultiTreemap.svelte
	[/^\/charts\/apexCharts\/treemapCharts\/MultiTreemap\/?$/, [c[0], c[281]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/ColumnGroupLabels.svelte
	[/^\/charts\/apexCharts\/columnCharts\/ColumnGroupLabels\/?$/, [c[0], c[282]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/DistributedColumn.svelte
	[/^\/charts\/apexCharts\/columnCharts\/DistributedColumn\/?$/, [c[0], c[283]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/ColumnWithLable.svelte
	[/^\/charts\/apexCharts\/columnCharts\/ColumnWithLable\/?$/, [c[0], c[284]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/StackedColumn2.svelte
	[/^\/charts\/apexCharts\/columnCharts\/StackedColumn2\/?$/, [c[0], c[285]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/DynamicColumn.svelte
	[/^\/charts\/apexCharts\/columnCharts\/DynamicColumn\/?$/, [c[0], c[286]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/NagetiveLable.svelte
	[/^\/charts\/apexCharts\/columnCharts\/NagetiveLable\/?$/, [c[0], c[287]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/StackedColumn.svelte
	[/^\/charts\/apexCharts\/columnCharts\/StackedColumn\/?$/, [c[0], c[288]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/ColumnMarker.svelte
	[/^\/charts\/apexCharts\/columnCharts\/ColumnMarker\/?$/, [c[0], c[289]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/columnCharts.svelte
	[/^\/charts\/apexCharts\/columnCharts\/columnCharts\/?$/, [c[0], c[290]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/BasicColumn.svelte
	[/^\/charts\/apexCharts\/columnCharts\/BasicColumn\/?$/, [c[0], c[291]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/RangeColumn.svelte
	[/^\/charts\/apexCharts\/columnCharts\/RangeColumn\/?$/, [c[0], c[292]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/RotateLable.svelte
	[/^\/charts\/apexCharts\/columnCharts\/RotateLable\/?$/, [c[0], c[293]], [c[1]]],

	// src/routes/charts/apexCharts/columnCharts/Quarter.svelte
	[/^\/charts\/apexCharts\/columnCharts\/Quarter\/?$/, [c[0], c[294]], [c[1]]],

	// src/routes/charts/apexCharts/bubbleChart/ThreeDBubble.svelte
	[/^\/charts\/apexCharts\/bubbleChart\/ThreeDBubble\/?$/, [c[0], c[295]], [c[1]]],

	// src/routes/charts/apexCharts/bubbleChart/bubbleChart.svelte
	[/^\/charts\/apexCharts\/bubbleChart\/bubbleChart\/?$/, [c[0], c[296]], [c[1]]],

	// src/routes/charts/apexCharts/bubbleChart/Simple.svelte
	[/^\/charts\/apexCharts\/bubbleChart\/Simple\/?$/, [c[0], c[297]], [c[1]]],

	// src/routes/charts/apexCharts/mixedCharts/LineColumnArea.svelte
	[/^\/charts\/apexCharts\/mixedCharts\/LineColumnArea\/?$/, [c[0], c[298]], [c[1]]],

	// src/routes/charts/apexCharts/mixedCharts/mixedCharts.svelte
	[/^\/charts\/apexCharts\/mixedCharts\/mixedCharts\/?$/, [c[0], c[299]], [c[1]]],

	// src/routes/charts/apexCharts/mixedCharts/YAxis.svelte
	[/^\/charts\/apexCharts\/mixedCharts\/YAxis\/?$/, [c[0], c[300]], [c[1]]],

	// src/routes/charts/apexCharts/mixedCharts/Area.svelte
	[/^\/charts\/apexCharts\/mixedCharts\/Area\/?$/, [c[0], c[301]], [c[1]]],

	// src/routes/charts/apexCharts/mixedCharts/Line.svelte
	[/^\/charts\/apexCharts\/mixedCharts\/Line\/?$/, [c[0], c[302]], [c[1]]],

	// src/routes/charts/apexCharts/polarCharts/PolarMonochrome.svelte
	[/^\/charts\/apexCharts\/polarCharts\/PolarMonochrome\/?$/, [c[0], c[303]], [c[1]]],

	// src/routes/charts/apexCharts/polarCharts/polarCharts.svelte
	[/^\/charts\/apexCharts\/polarCharts\/polarCharts\/?$/, [c[0], c[304]], [c[1]]],

	// src/routes/charts/apexCharts/polarCharts/BasicPolar.svelte
	[/^\/charts\/apexCharts\/polarCharts\/BasicPolar\/?$/, [c[0], c[305]], [c[1]]],

	// src/routes/charts/apexCharts/radarCharts/MultipleRadar.svelte
	[/^\/charts\/apexCharts\/radarCharts\/MultipleRadar\/?$/, [c[0], c[306]], [c[1]]],

	// src/routes/charts/apexCharts/radarCharts/PolygonRadar.svelte
	[/^\/charts\/apexCharts\/radarCharts\/PolygonRadar\/?$/, [c[0], c[307]], [c[1]]],

	// src/routes/charts/apexCharts/radarCharts/SimpleRadar.svelte
	[/^\/charts\/apexCharts\/radarCharts\/SimpleRadar\/?$/, [c[0], c[308]], [c[1]]],

	// src/routes/charts/apexCharts/radarCharts/radarCharts.svelte
	[/^\/charts\/apexCharts\/radarCharts\/radarCharts\/?$/, [c[0], c[309]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/IrregularAreaCharts.svelte
	[/^\/charts\/apexCharts\/areaCharts\/IrregularAreaCharts\/?$/, [c[0], c[310]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/AreaNullValueChart.svelte
	[/^\/charts\/apexCharts\/areaCharts\/AreaNullValueChart\/?$/, [c[0], c[311]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/GithubStyleCharts1.svelte
	[/^\/charts\/apexCharts\/areaCharts\/GithubStyleCharts1\/?$/, [c[0], c[312]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/GithubStyleCharts.svelte
	[/^\/charts\/apexCharts\/areaCharts\/GithubStyleCharts\/?$/, [c[0], c[313]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/NegativeAreaChart.svelte
	[/^\/charts\/apexCharts\/areaCharts\/NegativeAreaChart\/?$/, [c[0], c[314]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/StackedAreaChart.svelte
	[/^\/charts\/apexCharts\/areaCharts\/StackedAreaChart\/?$/, [c[0], c[315]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/BasicAreaCharts.svelte
	[/^\/charts\/apexCharts\/areaCharts\/BasicAreaCharts\/?$/, [c[0], c[316]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/SplineAreaChart.svelte
	[/^\/charts\/apexCharts\/areaCharts\/SplineAreaChart\/?$/, [c[0], c[317]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/areaCharts.svelte
	[/^\/charts\/apexCharts\/areaCharts\/areaCharts\/?$/, [c[0], c[318]], [c[1]]],

	// src/routes/charts/apexCharts/areaCharts/AxisChart.svelte
	[/^\/charts\/apexCharts\/areaCharts\/AxisChart\/?$/, [c[0], c[319]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/LinewithAnnotations.svelte
	[/^\/charts\/apexCharts\/lineCharts\/LinewithAnnotations\/?$/, [c[0], c[320]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/LinewithDataLabels.svelte
	[/^\/charts\/apexCharts\/lineCharts\/LinewithDataLabels\/?$/, [c[0], c[321]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/ZoomableTimeseries.svelte
	[/^\/charts\/apexCharts\/lineCharts\/ZoomableTimeseries\/?$/, [c[0], c[322]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/ChartSyncingLine2.svelte
	[/^\/charts\/apexCharts\/lineCharts\/ChartSyncingLine2\/?$/, [c[0], c[323]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/ChartSyncingArea.svelte
	[/^\/charts\/apexCharts\/lineCharts\/ChartSyncingArea\/?$/, [c[0], c[324]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/ChartSyncingLine.svelte
	[/^\/charts\/apexCharts\/lineCharts\/ChartSyncingLine\/?$/, [c[0], c[325]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/GradientCharts.svelte
	[/^\/charts\/apexCharts\/lineCharts\/GradientCharts\/?$/, [c[0], c[326]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/LineAllCharts.svelte
	[/^\/charts\/apexCharts\/lineCharts\/LineAllCharts\/?$/, [c[0], c[327]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/SteplineChart.svelte
	[/^\/charts\/apexCharts\/lineCharts\/SteplineChart\/?$/, [c[0], c[328]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/BrushChart1.svelte
	[/^\/charts\/apexCharts\/lineCharts\/BrushChart1\/?$/, [c[0], c[329]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/MissingData.svelte
	[/^\/charts\/apexCharts\/lineCharts\/MissingData\/?$/, [c[0], c[330]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/BrushChart.svelte
	[/^\/charts\/apexCharts\/lineCharts\/BrushChart\/?$/, [c[0], c[331]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/DashedLine.svelte
	[/^\/charts\/apexCharts\/lineCharts\/DashedLine\/?$/, [c[0], c[332]], [c[1]]],

	// src/routes/charts/apexCharts/lineCharts/lineCharts.svelte
	[/^\/charts\/apexCharts\/lineCharts\/lineCharts\/?$/, [c[0], c[333]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/CustomDataLabel.svelte
	[/^\/charts\/apexCharts\/barCharts\/CustomDataLabel\/?$/, [c[0], c[334]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/BarwithImages.svelte
	[/^\/charts\/apexCharts\/barCharts\/BarwithImages\/?$/, [c[0], c[335]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Patterned.svelte
	[/^\/charts\/apexCharts\/barCharts\/Patterned\/?$/, [c[0], c[336]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/barCharts.svelte
	[/^\/charts\/apexCharts\/barCharts\/barCharts\/?$/, [c[0], c[337]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Negative.svelte
	[/^\/charts\/apexCharts\/barCharts\/Negative\/?$/, [c[0], c[338]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Reversed.svelte
	[/^\/charts\/apexCharts\/barCharts\/Reversed\/?$/, [c[0], c[339]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Stacked2.svelte
	[/^\/charts\/apexCharts\/barCharts\/Stacked2\/?$/, [c[0], c[340]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Groupes.svelte
	[/^\/charts\/apexCharts\/barCharts\/Groupes\/?$/, [c[0], c[341]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Markers.svelte
	[/^\/charts\/apexCharts\/barCharts\/Markers\/?$/, [c[0], c[342]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Stacked.svelte
	[/^\/charts\/apexCharts\/barCharts\/Stacked\/?$/, [c[0], c[343]], [c[1]]],

	// src/routes/charts/apexCharts/barCharts/Basic.svelte
	[/^\/charts\/apexCharts\/barCharts\/Basic\/?$/, [c[0], c[344]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/PatternedDonut.svelte
	[/^\/charts\/apexCharts\/pieCharts\/PatternedDonut\/?$/, [c[0], c[345]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/GradientDonut.svelte
	[/^\/charts\/apexCharts\/pieCharts\/GradientDonut\/?$/, [c[0], c[346]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/ImagePieChart.svelte
	[/^\/charts\/apexCharts\/pieCharts\/ImagePieChart\/?$/, [c[0], c[347]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/MonochromePie.svelte
	[/^\/charts\/apexCharts\/pieCharts\/MonochromePie\/?$/, [c[0], c[348]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/SimpleDonut.svelte
	[/^\/charts\/apexCharts\/pieCharts\/SimpleDonut\/?$/, [c[0], c[349]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/UpdateDonut.svelte
	[/^\/charts\/apexCharts\/pieCharts\/UpdateDonut\/?$/, [c[0], c[350]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/SimplePie.svelte
	[/^\/charts\/apexCharts\/pieCharts\/SimplePie\/?$/, [c[0], c[351]], [c[1]]],

	// src/routes/charts/apexCharts/pieCharts/pieCharts.svelte
	[/^\/charts\/apexCharts\/pieCharts\/pieCharts\/?$/, [c[0], c[352]], [c[1]]],

	// src/routes/charts/chartsJs/DonutChart.svelte
	[/^\/charts\/chartsJs\/DonutChart\/?$/, [c[0], c[353]], [c[1]]],

	// src/routes/charts/chartsJs/PolarChart.svelte
	[/^\/charts\/chartsJs\/PolarChart\/?$/, [c[0], c[354]], [c[1]]],

	// src/routes/charts/chartsJs/RadarChart.svelte
	[/^\/charts\/chartsJs\/RadarChart\/?$/, [c[0], c[355]], [c[1]]],

	// src/routes/charts/chartsJs/LineChart.svelte
	[/^\/charts\/chartsJs\/LineChart\/?$/, [c[0], c[356]], [c[1]]],

	// src/routes/charts/chartsJs/BarChart.svelte
	[/^\/charts\/chartsJs\/BarChart\/?$/, [c[0], c[357]], [c[1]]],

	// src/routes/charts/chartsJs/PieChart.svelte
	[/^\/charts\/chartsJs\/PieChart\/?$/, [c[0], c[358]], [c[1]]],

	// src/routes/charts/chartsJs/chartsJs.svelte
	[/^\/charts\/chartsJs\/chartsJs\/?$/, [c[0], c[359]], [c[1]]],

	// src/routes/crypto/kycverification/KYCVerification.svelte
	[/^\/crypto\/kycverification\/KYCVerification\/?$/, [c[0], c[360]], [c[1]]],

	// src/routes/crypto/kycverification/apps-crypto-kyc.svelte
	[/^\/crypto\/kycverification\/apps-crypto-kyc\/?$/, [c[0], c[361]], [c[1]]],

	// src/routes/crypto/cryptoorder/apps-crypto-orders.svelte
	[/^\/crypto\/cryptoorder\/apps-crypto-orders\/?$/, [c[0], c[362]], [c[1]]],

	// src/routes/crypto/transaction/apps-crypto-transactions.svelte
	[/^\/crypto\/transaction\/apps-crypto-transactions\/?$/, [c[0], c[363]], [c[1]]],

	// src/routes/crypto/transaction/AllTransactions.svelte
	[/^\/crypto\/transaction\/AllTransactions\/?$/, [c[0], c[364]], [c[1]]],

	// src/routes/crypto/transaction/Widgets.svelte
	[/^\/crypto\/transaction\/Widgets\/?$/, [c[0], c[365]], [c[1]]],

	// src/routes/crypto/iconlist/apps-crypto-ico.svelte
	[/^\/crypto\/iconlist\/apps-crypto-ico\/?$/, [c[0], c[366]], [c[1]]],

	// src/routes/crypto/iconlist/widgets.svelte
	[/^\/crypto\/iconlist\/widgets\/?$/, [c[0], c[367]], [c[1]]],

	// src/routes/crypto/iconlist/ico.svelte
	[/^\/crypto\/iconlist\/ico\/?$/, [c[0], c[368]], [c[1]]],

	// src/routes/crypto/mywallet/PortfolioStatistics.svelte
	[/^\/crypto\/mywallet\/PortfolioStatistics\/?$/, [c[0], c[369]], [c[1]]],

	// src/routes/crypto/mywallet/apps-crypto-wallet.svelte
	[/^\/crypto\/mywallet\/apps-crypto-wallet\/?$/, [c[0], c[370]], [c[1]]],

	// src/routes/crypto/mywallet/RecentTransaction.svelte
	[/^\/crypto\/mywallet\/RecentTransaction\/?$/, [c[0], c[371]], [c[1]]],

	// src/routes/crypto/mywallet/watchListChart.svelte
	[/^\/crypto\/mywallet\/watchListChart\/?$/, [c[0], c[372]], [c[1]]],

	// src/routes/crypto/mywallet/MarketStatus.svelte
	[/^\/crypto\/mywallet\/MarketStatus\/?$/, [c[0], c[373]], [c[1]]],

	// src/routes/crypto/mywallet/Watchlist.svelte
	[/^\/crypto\/mywallet\/Watchlist\/?$/, [c[0], c[374]], [c[1]]],

	// src/routes/crypto/mywallet/Widgets.svelte
	[/^\/crypto\/mywallet\/Widgets\/?$/, [c[0], c[375]], [c[1]]],

	// src/routes/crypto/buysell/apps-crypto-buy-sell.svelte
	[/^\/crypto\/buysell\/apps-crypto-buy-sell\/?$/, [c[0], c[376]], [c[1]]],

	// src/routes/crypto/buysell/BuySellCoin.svelte
	[/^\/crypto\/buysell\/BuySellCoin\/?$/, [c[0], c[377]], [c[1]]],

	// src/routes/crypto/buysell/MarketGraph.svelte
	[/^\/crypto\/buysell\/MarketGraph\/?$/, [c[0], c[378]], [c[1]]],

	// src/routes/crypto/buysell/Widgets.svelte
	[/^\/crypto\/buysell\/Widgets\/?$/, [c[0], c[379]], [c[1]]],

	// src/routes/crypto/buysell/Market.svelte
	[/^\/crypto\/buysell\/Market\/?$/, [c[0], c[380]], [c[1]]],

	// src/routes/tables/basictables/tables-basic.svelte
	[/^\/tables\/basictables\/tables-basic\/?$/, [c[0], c[381]], [c[1]]],

	// src/routes/tables/gridjs/tables-gridjs.svelte
	[/^\/tables\/gridjs\/tables-gridjs\/?$/, [c[0], c[382]], [c[1]]],

	// src/routes/Forms/forms-checkboxes-radios.svelte
	[/^\/Forms\/forms-checkboxes-radios\/?$/, [c[0], c[383]], [c[1]]],

	// src/routes/Forms/forms-range-sliders.svelte
	[/^\/Forms\/forms-range-sliders\/?$/, [c[0], c[384]], [c[1]]],

	// src/routes/Forms/forms-file-uploads.svelte
	[/^\/Forms\/forms-file-uploads\/?$/, [c[0], c[385]], [c[1]]],

	// src/routes/Forms/forms-validation.svelte
	[/^\/Forms\/forms-validation\/?$/, [c[0], c[386]], [c[1]]],

	// src/routes/Forms/forms-advanced.svelte
	[/^\/Forms\/forms-advanced\/?$/, [c[0], c[387]], [c[1]]],

	// src/routes/Forms/forms-elements.svelte
	[/^\/Forms\/forms-elements\/?$/, [c[0], c[388]], [c[1]]],

	// src/routes/Forms/forms-layouts.svelte
	[/^\/Forms\/forms-layouts\/?$/, [c[0], c[389]], [c[1]]],

	// src/routes/Forms/forms-pickers.svelte
	[/^\/Forms\/forms-pickers\/?$/, [c[0], c[390]], [c[1]]],

	// src/routes/Forms/forms-select.svelte
	[/^\/Forms\/forms-select\/?$/, [c[0], c[391]], [c[1]]],

	// src/routes/Forms/forms-wizard.svelte
	[/^\/Forms\/forms-wizard\/?$/, [c[0], c[392]], [c[1]]],

	// src/routes/Forms/form-editor.svelte
	[/^\/Forms\/form-editor\/?$/, [c[0], c[393]], [c[1]]],

	// src/routes/Forms/forms-masks.svelte
	[/^\/Forms\/forms-masks\/?$/, [c[0], c[394]], [c[1]]],

	// src/routes/Forms/tooltipform.svelte
	[/^\/Forms\/tooltipform\/?$/, [c[0], c[395]], [c[1]]],

	// src/routes/Forms/select2.svelte
	[/^\/Forms\/select2\/?$/, [c[0], c[396]], [c[1]]],

	// src/routes/Forms/schema.svelte
	[/^\/Forms\/schema\/?$/, [c[0], c[397]], [c[1]]],

	// src/routes/email/emailtemplates/EcommerceAction/ecommerceaction.svelte
	[/^\/email\/emailtemplates\/EcommerceAction\/ecommerceaction\/?$/, [c[0], c[398]], [c[1]]],

	// src/routes/email/emailtemplates/EcommerceAction/FeedbackAction.svelte
	[/^\/email\/emailtemplates\/EcommerceAction\/FeedbackAction\/?$/, [c[0], c[399]], [c[1]]],

	// src/routes/email/emailtemplates/EcommerceAction/RatingTemplate.svelte
	[/^\/email\/emailtemplates\/EcommerceAction\/RatingTemplate\/?$/, [c[0], c[400]], [c[1]]],

	// src/routes/email/emailtemplates/EcommerceAction/InvoiceAction.svelte
	[/^\/email\/emailtemplates\/EcommerceAction\/InvoiceAction\/?$/, [c[0], c[401]], [c[1]]],

	// src/routes/email/emailtemplates/BasicAction/PasswordChangeAction.svelte
	[/^\/email\/emailtemplates\/BasicAction\/PasswordChangeAction\/?$/, [c[0], c[402]], [c[1]]],

	// src/routes/email/emailtemplates/BasicAction/EmailVerifyAction.svelte
	[/^\/email\/emailtemplates\/BasicAction\/EmailVerifyAction\/?$/, [c[0], c[403]], [c[1]]],

	// src/routes/email/emailtemplates/BasicAction/SubscribeAction.svelte
	[/^\/email\/emailtemplates\/BasicAction\/SubscribeAction\/?$/, [c[0], c[404]], [c[1]]],

	// src/routes/email/emailtemplates/BasicAction/basicaction.svelte
	[/^\/email\/emailtemplates\/BasicAction\/basicaction\/?$/, [c[0], c[405]], [c[1]]],

	// src/routes/email/emailtemplates/BasicAction/basic.svelte
	[/^\/email\/emailtemplates\/BasicAction\/basic\/?$/, [c[0], c[406]], [c[1]]],

	// src/routes/icons/LineAwesomeIcons/LineAwesomeIcons.svelte
	[/^\/icons\/LineAwesomeIcons\/LineAwesomeIcons\/?$/, [c[0], c[407]], [c[1]]],

	// src/routes/icons/MaterialDesign/MaterialDesign.svelte
	[/^\/icons\/MaterialDesign\/MaterialDesign\/?$/, [c[0], c[408]], [c[1]]],

	// src/routes/icons/FeatherIcons/FeatherIcons.svelte
	[/^\/icons\/FeatherIcons\/FeatherIcons\/?$/, [c[0], c[409]], [c[1]]],

	// src/routes/icons/Cryptoicons/cryptoicons.svelte
	[/^\/icons\/Cryptoicons\/cryptoicons\/?$/, [c[0], c[410]], [c[1]]],

	// src/routes/icons/RemixIcons/RemixIcons.svelte
	[/^\/icons\/RemixIcons\/RemixIcons\/?$/, [c[0], c[411]], [c[1]]],

	// src/routes/icons/BoxIcons/BoxIcons.svelte
	[/^\/icons\/BoxIcons\/BoxIcons\/?$/, [c[0], c[412]], [c[1]]],

	// src/routes/pages/pages-coming-soon.svelte
	[/^\/pages\/pages-coming-soon\/?$/, [c[0], c[413]], [c[1]]],

	// src/routes/pages/pages-maintenance.svelte
	[/^\/pages\/pages-maintenance\/?$/, [c[0], c[414]], [c[1]]],

	// src/routes/pages/termscondition/index.svelte
	[/^\/pages\/termscondition\/?$/, [c[0], c[415]], [c[1]]],

	// src/routes/pages/privacypolicy/index.svelte
	[/^\/pages\/privacypolicy\/?$/, [c[0], c[416]], [c[1]]],

	// src/routes/pages/searchresults/pages-search-results.svelte
	[/^\/pages\/searchresults\/pages-search-results\/?$/, [c[0], c[417]], [c[1]]],

	// src/routes/pages/timeline/timeline.svelte
	[/^\/pages\/timeline\/timeline\/?$/, [c[0], c[418]], [c[1]]],

	// src/routes/pages/gallery/pages-gallery.svelte
	[/^\/pages\/gallery\/pages-gallery\/?$/, [c[0], c[419]], [c[1]]],

	// src/routes/pages/pricing/pages-pricing.svelte
	[/^\/pages\/pricing\/pages-pricing\/?$/, [c[0], c[420]], [c[1]]],

	// src/routes/pages/profile/settings/pages-profile-settings.svelte
	[/^\/pages\/profile\/settings\/pages-profile-settings\/?$/, [c[0], c[421]], [c[1]]],

	// src/routes/pages/profile/simple/simplepage.svelte
	[/^\/pages\/profile\/simple\/simplepage\/?$/, [c[0], c[422]], [c[1]]],

	// src/routes/pages/sitemap/pages-sitemap.svelte
	[/^\/pages\/sitemap\/pages-sitemap\/?$/, [c[0], c[423]], [c[1]]],

	// src/routes/pages/starter/pages-starter.svelte
	[/^\/pages\/starter\/pages-starter\/?$/, [c[0], c[424]], [c[1]]],

	// src/routes/pages/faqs/pages-faqs.svelte
	[/^\/pages\/faqs\/pages-faqs\/?$/, [c[0], c[425]], [c[1]]],

	// src/routes/pages/team/team.svelte
	[/^\/pages\/team\/team\/?$/, [c[0], c[426]], [c[1]]],

	// src/routes/rules/ManageRules.svelte
	[/^\/rules\/ManageRules\/?$/, [c[0], c[427]], [c[1]]],

	// src/routes/tasks/apps-tasks-list-view.svelte
	[/^\/tasks\/apps-tasks-list-view\/?$/, [c[0], c[428]], [c[1]]],

	// src/routes/tasks/apps-tasks-details.svelte
	[/^\/tasks\/apps-tasks-details\/?$/, [c[0], c[429]], [c[1]]],

	// src/routes/tasks/apps-tasks-kanban.svelte
	[/^\/tasks\/apps-tasks-kanban\/?$/, [c[0], c[430]], [c[1]]],

	// src/routes/tasks/createTaskModal.svelte
	[/^\/tasks\/createTaskModal\/?$/, [c[0], c[431]], [c[1]]],

	// src/routes/tasks/TimeTracking.svelte
	[/^\/tasks\/TimeTracking\/?$/, [c[0], c[432]], [c[1]]],

	// src/routes/tasks/TaskListCol.svelte
	[/^\/tasks\/TaskListCol\/?$/, [c[0], c[433]], [c[1]]],

	// src/routes/tasks/AllTasks.svelte
	[/^\/tasks\/AllTasks\/?$/, [c[0], c[434]], [c[1]]],

	// src/routes/tasks/Comments.svelte
	[/^\/tasks\/Comments\/?$/, [c[0], c[435]], [c[1]]],

	// src/routes/tasks/Summary.svelte
	[/^\/tasks\/Summary\/?$/, [c[0], c[436]], [c[1]]],

	// src/routes/tasks/TaskCol.svelte
	[/^\/tasks\/TaskCol\/?$/, [c[0], c[437]], [c[1]]],

	// src/routes/tasks/Widgets.svelte
	[/^\/tasks\/Widgets\/?$/, [c[0], c[438]], [c[1]]],

	// src/routes/Jobs/CandidateList/GridView/index.svelte
	[/^\/Jobs\/CandidateList\/GridView\/?$/, [c[0], c[439]], [c[1]]],

	// src/routes/Jobs/CandidateList/ListView/index.svelte
	[/^\/Jobs\/CandidateList\/ListView\/?$/, [c[0], c[440]], [c[1]]],

	// src/routes/Jobs/CompaniesList/index.svelte
	[/^\/Jobs\/CompaniesList\/?$/, [c[0], c[441]], [c[1]]],

	// src/routes/Jobs/JobCategories/index.svelte
	[/^\/Jobs\/JobCategories\/?$/, [c[0], c[442]], [c[1]]],

	// src/routes/Jobs/Application/index.svelte
	[/^\/Jobs\/Application\/?$/, [c[0], c[443]], [c[1]]],

	// src/routes/Jobs/Statistics/index.svelte
	[/^\/Jobs\/Statistics\/?$/, [c[0], c[444]], [c[1]]],

	// src/routes/Jobs/Statistics/NatworkSummary.svelte
	[/^\/Jobs\/Statistics\/NatworkSummary\/?$/, [c[0], c[445]], [c[1]]],

	// src/routes/Jobs/Statistics/VisitorGraph.svelte
	[/^\/Jobs\/Statistics\/VisitorGraph\/?$/, [c[0], c[446]], [c[1]]],

	// src/routes/Jobs/Statistics/JobSummary.svelte
	[/^\/Jobs\/Statistics\/JobSummary\/?$/, [c[0], c[447]], [c[1]]],

	// src/routes/Jobs/Statistics/Widgets.svelte
	[/^\/Jobs\/Statistics\/Widgets\/?$/, [c[0], c[448]], [c[1]]],

	// src/routes/Jobs/Statistics/Charts.svelte
	[/^\/Jobs\/Statistics\/Charts\/?$/, [c[0], c[449]], [c[1]]],

	// src/routes/Jobs/JobList/Overview/index.svelte
	[/^\/Jobs\/JobList\/Overview\/?$/, [c[0], c[450]], [c[1]]],

	// src/routes/Jobs/JobList/Overview/JobDescription.svelte
	[/^\/Jobs\/JobList\/Overview\/JobDescription\/?$/, [c[0], c[451]], [c[1]]],

	// src/routes/Jobs/JobList/Overview/RightSection.svelte
	[/^\/Jobs\/JobList\/Overview\/RightSection\/?$/, [c[0], c[452]], [c[1]]],

	// src/routes/Jobs/JobList/Overview/RelatedJobs.svelte
	[/^\/Jobs\/JobList\/Overview\/RelatedJobs\/?$/, [c[0], c[453]], [c[1]]],

	// src/routes/Jobs/JobList/Overview/Header.svelte
	[/^\/Jobs\/JobList\/Overview\/Header\/?$/, [c[0], c[454]], [c[1]]],

	// src/routes/Jobs/JobList/Grid/index.svelte
	[/^\/Jobs\/JobList\/Grid\/?$/, [c[0], c[455]], [c[1]]],

	// src/routes/Jobs/JobList/List/index.svelte
	[/^\/Jobs\/JobList\/List\/?$/, [c[0], c[456]], [c[1]]],

	// src/routes/Jobs/JobList/List/AppSummary.svelte
	[/^\/Jobs\/JobList\/List\/AppSummary\/?$/, [c[0], c[457]], [c[1]]],

	// src/routes/Jobs/NewJob/index.svelte
	[/^\/Jobs\/NewJob\/?$/, [c[0], c[458]], [c[1]]],

	// src/routes/maps/GoogleMaps.svelte
	[/^\/maps\/GoogleMaps\/?$/, [c[0], c[459]], [c[1]]],

	// src/routes/todo/index.svelte
	[/^\/todo\/?$/, [c[0], c[460]], [c[1]]],

	// src/routes/crm/apps-crm-companies.svelte
	[/^\/crm\/apps-crm-companies\/?$/, [c[0], c[461]], [c[1]]],

	// src/routes/crm/apps-crm-contacts.svelte
	[/^\/crm\/apps-crm-contacts\/?$/, [c[0], c[462]], [c[1]]],

	// src/routes/crm/apps-crm-deals.svelte
	[/^\/crm\/apps-crm-deals\/?$/, [c[0], c[463]], [c[1]]],

	// src/routes/crm/apps-crm-leads.svelte
	[/^\/crm\/apps-crm-leads\/?$/, [c[0], c[464]], [c[1]]],

	// src/routes/crm/CompanyAction.svelte
	[/^\/crm\/CompanyAction\/?$/, [c[0], c[465]], [c[1]]],

	// src/routes/crm/ContactAction.svelte
	[/^\/crm\/ContactAction\/?$/, [c[0], c[466]], [c[1]]],

	// src/routes/crm/leadDiscover.svelte
	[/^\/crm\/leadDiscover\/?$/, [c[0], c[467]], [c[1]]],

	// src/routes/crm/CrmFilter.svelte
	[/^\/crm\/CrmFilter\/?$/, [c[0], c[468]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];