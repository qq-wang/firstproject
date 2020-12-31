import Layout from '@/layout'

const nestedRouter = {
	path: '/nested',
	component: Layout,
	redirect: '/nested/menu1/menu1-1',
	name: 'Nested',
	children: [
		{
			path: 'menu1',
			component: () => import('@/view/nested/menu1/index'),
			name: 'Menu1',
			redirect: '/nested/menu1/menu1-1',
			children: [
				{
					path: 'menu1-1',
					component: () => import('@/view/nested/menu1/menu1-1/index'),
					name: 'Menu1-1'
				},
				{
					path: 'menu1-2',
					component: () => import('@/view/nested/menu1/menu1-2/index'),
					name: 'Menu1-2'
				}
			]
		},
		{
			path: 'menu2',
			component: () => import('@/views/nested/menu2/index'),
			name: 'Menu2'
		}
	]
}

export default nestedRouter
