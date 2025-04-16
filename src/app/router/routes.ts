import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('#layouts/main-layout'),
    children: [
		{
			path: '',
			component: () => import('#pages/index-page'),
		  },
		  {
			path: '/user-edit',
			component: () => import('#pages/index-page'),
		  },
		  {
			path: '/create',
			component: () => import('#pages/index-page'),
		  },
		  {
			path: '/question',
			component: () => import('#pages/index-page'),
		  },
		  {
			path: '/faq',
			component: () => import('#pages/index-page'),
		  },
		  {
			path: '/docs',
			component: () => import('#pages/index-page'),
		  }

	],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('#pages/error-not-found'),
  },
];

export default routes;
