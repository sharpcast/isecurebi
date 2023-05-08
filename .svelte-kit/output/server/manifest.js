export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","lang/ar.json","lang/ch.json","lang/en.json","lang/fr.json","lang/gr.json","lang/it.json","lang/ru.json","lang/sp.json"]),
	_: {
		mime: {".png":"image/png",".json":"application/json"},
		entry: {"file":"start-f568b6ae.js","js":["start-f568b6ae.js","chunks/vendor-28b6e00c.js"],"css":["assets/vendor-28d9e71a.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/twostepverification\/auth-twostep-basic\/?$/,
				params: null,
				path: "/authenticationInner/twostepverification/auth-twostep-basic",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/twostepverification\/auth-twostep-cover\/?$/,
				params: null,
				path: "/authenticationInner/twostepverification/auth-twostep-cover",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/passwordcreate\/auth-pass-change-basic\/?$/,
				params: null,
				path: "/authenticationInner/passwordcreate/auth-pass-change-basic",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/passwordcreate\/auth-pass-change-cover\/?$/,
				params: null,
				path: "/authenticationInner/passwordcreate/auth-pass-change-cover",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/successmessage\/auth-success-msg-basic\/?$/,
				params: null,
				path: "/authenticationInner/successmessage/auth-success-msg-basic",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/successmessage\/auth-success-msg-cover\/?$/,
				params: null,
				path: "/authenticationInner/successmessage/auth-success-msg-cover",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/ParticlesAuth\/?$/,
				params: null,
				path: "/authenticationInner/ParticlesAuth",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/passwordreset\/auth-pass-reset-basic\/?$/,
				params: null,
				path: "/authenticationInner/passwordreset/auth-pass-reset-basic",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/passwordreset\/auth-pass-reset-cover\/?$/,
				params: null,
				path: "/authenticationInner/passwordreset/auth-pass-reset-cover",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/AuthSlider\/?$/,
				params: null,
				path: "/authenticationInner/AuthSlider",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/lockscreen\/auth-lockscreen-basic\/?$/,
				params: null,
				path: "/authenticationInner/lockscreen/auth-lockscreen-basic",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/lockscreen\/auth-lockscreen-cover\/?$/,
				params: null,
				path: "/authenticationInner/lockscreen/auth-lockscreen-cover",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/register\/auth-signup-basic\/?$/,
				params: null,
				path: "/authenticationInner/register/auth-signup-basic",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/register\/auth-signup-cover\/?$/,
				params: null,
				path: "/authenticationInner/register/auth-signup-cover",
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/errors\/auth-404-basic\/?$/,
				params: null,
				path: "/authenticationInner/errors/auth-404-basic",
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/errors\/auth-404-cover\/?$/,
				params: null,
				path: "/authenticationInner/errors/auth-404-cover",
				shadow: null,
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/errors\/auth-404-alt\/?$/,
				params: null,
				path: "/authenticationInner/errors/auth-404-alt",
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/errors\/auth-offline\/?$/,
				params: null,
				path: "/authenticationInner/errors/auth-offline",
				shadow: null,
				a: [0,20],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/errors\/auth-500\/?$/,
				params: null,
				path: "/authenticationInner/errors/auth-500",
				shadow: null,
				a: [0,21],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/logout\/auth-logout-basic\/?$/,
				params: null,
				path: "/authenticationInner/logout/auth-logout-basic",
				shadow: null,
				a: [0,22],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/logout\/auth-logout-cover\/?$/,
				params: null,
				path: "/authenticationInner/logout/auth-logout-cover",
				shadow: null,
				a: [0,23],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/login\/auth-signin-basic\/?$/,
				params: null,
				path: "/authenticationInner/login/auth-signin-basic",
				shadow: null,
				a: [0,24],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authenticationInner\/login\/auth-signin-cover\/?$/,
				params: null,
				path: "/authenticationInner/login/auth-signin-cover",
				shadow: null,
				a: [0,25],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/connections\/viewconnections\/?$/,
				params: null,
				path: "/connections/viewconnections",
				shadow: null,
				a: [0,26],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/connections\/AddConnection\/?$/,
				params: null,
				path: "/connections/AddConnection",
				shadow: null,
				a: [0,27],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/exclusions\/userexclusions\/?$/,
				params: null,
				path: "/exclusions/userexclusions",
				shadow: null,
				a: [0,28],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/?$/,
				params: null,
				path: "/dashboard",
				shadow: null,
				a: [0,29],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/DashboardEcommerceCharts\/?$/,
				params: null,
				path: "/dashboard/DashboardEcommerceCharts",
				shadow: null,
				a: [0,30],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/RecentActivity\/?$/,
				params: null,
				path: "/dashboard/RecentActivity",
				shadow: null,
				a: [0,31],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/Revenue\/?$/,
				params: null,
				path: "/dashboard/Revenue",
				shadow: null,
				a: [0,32],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/Widgets\/?$/,
				params: null,
				path: "/dashboard/Widgets",
				shadow: null,
				a: [0,33],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/settings\/notifications\/?$/,
				params: null,
				path: "/settings/notifications",
				shadow: null,
				a: [0,34],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/reports\/viewaudits\/?$/,
				params: null,
				path: "/reports/viewaudits",
				shadow: null,
				a: [0,35],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/reports\/viewrisks\/?$/,
				params: null,
				path: "/reports/viewrisks",
				shadow: null,
				a: [0,36],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/reports\/editrisk\/?$/,
				params: null,
				path: "/reports/editrisk",
				shadow: null,
				a: [0,37],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/pages\/pages-coming-soon\/?$/,
				params: null,
				path: "/pages/pages-coming-soon",
				shadow: null,
				a: [0,38],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/pages\/pages-maintenance\/?$/,
				params: null,
				path: "/pages/pages-maintenance",
				shadow: null,
				a: [0,39],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/roles\/viewroles\/?$/,
				params: null,
				path: "/roles/viewroles",
				shadow: null,
				a: [0,40],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/rules\/viewrules\/?$/,
				params: null,
				path: "/rules/viewrules",
				shadow: null,
				a: [0,41],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/users\/viewgroups\/?$/,
				params: null,
				path: "/users/viewgroups",
				shadow: null,
				a: [0,42],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/users\/viewusers\/?$/,
				params: null,
				path: "/users/viewusers",
				shadow: null,
				a: [0,43],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/data\/modelview\/?$/,
				params: null,
				path: "/data/modelview",
				shadow: null,
				a: [0,44],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/data\/dataview\/?$/,
				params: null,
				path: "/data/dataview",
				shadow: null,
				a: [0,45],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/data\/getdata\/?$/,
				params: null,
				path: "/data/getdata",
				shadow: null,
				a: [0,46],
				b: [1]
			}
		]
	}
};
