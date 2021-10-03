/* eslint-disable */
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', component: () => import('pages/Index.vue')
      },
      { 
        path: '/about', component: () => import('pages/about.vue'),
      },
      { 
        path: '/book', name: 'book', component: () => import('pages/detailBook.vue'),
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
