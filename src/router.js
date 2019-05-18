import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/components/User/Profile.vue')
    // beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/components/User/Signup.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('@/components/User/Signin.vue')
    }
  ]
})
