import ContactList from '../pages/ContactList'
import TodosPage from '../pages/TodosPage'
import AddEditContact from '../pages/AddEditContact'

export const routes = [
  {
    path: '/',
    name: 'Todo',
    component: TodosPage
  },
  {
    path: '/ContactList',
    name: 'ContactList',
    component: ContactList
  },  
  {
    path: '/AddEditContact',
    name: 'AddEditContact',
    component: AddEditContact
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../pages/AddEditContact.vue')
  }
]

