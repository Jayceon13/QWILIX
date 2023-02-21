
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { key: '' } },
      { path: '/about', component: () => import('pages/AboutPage'), meta: { key: 'about' } },
      { path: '/examples', component: ()=> import('pages/ExamplesPage'), meta: { key: 'examples' } },
      { path: '/contacts', component: ()=> import('pages/ContactsPage'), meta: { key: 'contacts' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')

  }
]

export default routes
