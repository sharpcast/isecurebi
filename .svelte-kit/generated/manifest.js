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
	() => import("..\\..\\src\\routes\\connections\\viewconnections.svelte"),
	() => import("..\\..\\src\\routes\\connections\\AddConnection.svelte"),
	() => import("..\\..\\src\\routes\\exclusions\\userexclusions.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\DashboardEcommerceCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\RecentActivity.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Revenue.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\settings\\notifications.svelte"),
	() => import("..\\..\\src\\routes\\reports\\viewaudits.svelte"),
	() => import("..\\..\\src\\routes\\reports\\viewrisks.svelte"),
	() => import("..\\..\\src\\routes\\reports\\editrisk.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-coming-soon.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-maintenance.svelte"),
	() => import("..\\..\\src\\routes\\roles\\viewroles.svelte"),
	() => import("..\\..\\src\\routes\\rules\\viewrules.svelte"),
	() => import("..\\..\\src\\routes\\users\\viewgroups.svelte"),
	() => import("..\\..\\src\\routes\\users\\viewusers.svelte"),
	() => import("..\\..\\src\\routes\\data\\modelview.svelte"),
	() => import("..\\..\\src\\routes\\data\\dataview.svelte"),
	() => import("..\\..\\src\\routes\\data\\getdata.svelte")
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

	// src/routes/connections/viewconnections.svelte
	[/^\/connections\/viewconnections\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/connections/AddConnection.svelte
	[/^\/connections\/AddConnection\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/exclusions/userexclusions.svelte
	[/^\/exclusions\/userexclusions\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/dashboard/DashboardEcommerceCharts.svelte
	[/^\/dashboard\/DashboardEcommerceCharts\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/dashboard/RecentActivity.svelte
	[/^\/dashboard\/RecentActivity\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/dashboard/Revenue.svelte
	[/^\/dashboard\/Revenue\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/dashboard/Widgets.svelte
	[/^\/dashboard\/Widgets\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/settings/notifications.svelte
	[/^\/settings\/notifications\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/reports/viewaudits.svelte
	[/^\/reports\/viewaudits\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/reports/viewrisks.svelte
	[/^\/reports\/viewrisks\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/reports/editrisk.svelte
	[/^\/reports\/editrisk\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/pages/pages-coming-soon.svelte
	[/^\/pages\/pages-coming-soon\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/pages/pages-maintenance.svelte
	[/^\/pages\/pages-maintenance\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/roles/viewroles.svelte
	[/^\/roles\/viewroles\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/rules/viewrules.svelte
	[/^\/rules\/viewrules\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/users/viewgroups.svelte
	[/^\/users\/viewgroups\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/users/viewusers.svelte
	[/^\/users\/viewusers\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/data/modelview.svelte
	[/^\/data\/modelview\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/data/dataview.svelte
	[/^\/data\/dataview\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/data/getdata.svelte
	[/^\/data\/getdata\/?$/, [c[0], c[46]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];