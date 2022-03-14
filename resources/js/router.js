import Vue from 'vue'

import Router from 'vue-router'
import authMiddleware from "./middleware/authMiddleware";


Vue.use(Router)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home'),
		meta: {
			middleware: [authMiddleware.getUser]
		}
    },
	{
		path: '/trading',
		name: 'TradingList',
		component: () => import('./pages/TradingList')
	},
	{
		path: '/trading-item',
		name: 'Trading',
		component: () => import('./pages/Trading')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('./pages/Login'),
		meta: {
			middleware: [authMiddleware.isGuest]
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('./pages/Login'),
		meta: {
			middleware: [authMiddleware.isGuest]
		}
	},
	{
		path: '/lk',
		name: 'LK',
		component: () => import('./pages/lk/LkLayout'),
		meta: {
			middleware: [authMiddleware.isAuth]
		},
		children: [
			{
				path: '/',
				component: () => import('./pages/lk/Overview'),
				meta: {
					middleware: [authMiddleware.isAuth]
				},
			},
			{
				path: 'deposit',
				component: () => import('./pages/lk/Deposit'),
				meta: {
					middleware: [authMiddleware.isAuth]
				},
			},
			{
				path: 'withdraw',
				component: () => import('./pages/lk/Withdraw'),
				meta: {
					middleware: [authMiddleware.isAuth]
				},
			},
			{
				path: 'invest',
				component: () => import('./pages/lk/Invest'),
				meta: {
					middleware: [authMiddleware.isAuth]
				},
			},
		]
	}
]



export default new Router({
    mode: 'history',
    routes
})
