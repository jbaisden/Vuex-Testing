import ContactList from '../pages/ContactList'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContactList
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AddEditContact.vue')
  }
]

