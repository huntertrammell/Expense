import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CreateAccount from './components/createAccount.vue'
import NotFound from './components/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create-account',
      name: 'createAccount',
      component: CreateAccount
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue')
    },
    {
      path: '/guest-login',
      name: 'guestLogin',
      props: { isGuest: true },
      component: () => import(/* webpackChunkName: "guestLogin" */ './components/Home.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
