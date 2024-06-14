import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
//import CustomerInsertView from '../views/CustomerInsertView.vue'
import LoginForm from '../views/LoginForm.vue'
import BoardForm from '../views/BoardForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/customerInsert',
    name: 'customerInsert',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerInsertView.vue')
    //component: CustomerInsertView
  },
  {
    path: '/loginform',
    name: 'loginform',
    component: LoginForm
  },
  {
    path: '/boardform',
    name: 'boardform',
    component: BoardForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
