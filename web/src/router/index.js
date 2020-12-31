import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
//import nestedRouter from './modules/nested.js'

/**
 * @description: constantRoutes
 * @param {*}
 * @return {*}
 */

export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index')
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				component: () => import('@/views/dashboard/index'),
				name: 'Dashboard'
			}
		]
	},
	{
		path: '/documentation',
		component: Layout,
		redirect: './documentation/index',
		children: [
			{
				path: 'index',
				component: () => import('@/views/documentation/index'),
				name: 'Documentation'
			}
		]
	},
	{
		path: '/guide',
		component: Layout,
		redirect: './guide/index',
		children: [
			{
				path: 'index',
				component: () => import('@/views/guide/index'),
				name: 'Guide'
			}
		]
	}
]

/**
 * @description: asyncRoutes
 * @param {*}
 * @return {*}
 * @Date Changed:
 */

//export const asyncRoutes = [nestedRouter]

const createRouter = () =>
	new Router({
		mode: 'history',
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes
	})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher
}
export default router
