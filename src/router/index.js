import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('../views/Dashboard.vue'),
	},
	{
		path: '/characters',
		name: 'characters',
		component: () => import('../views/characters/index.vue'),
	},
	{
		path: '/characters/create',
		name: 'characters.create',
		component: () => import('../views/characters/create/index.vue'),
	},
	{
		path: '/families',
		name: 'families',
		component: () => import('../views/Families.vue'),
	},
	{
		path: '/groups',
		name: 'groups',
		component: () => import('../views/groups/index.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }
