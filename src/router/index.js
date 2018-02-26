/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import User from '@/views/system/User'
import Role from '@/views/system/Role'
import Example from '@/views/Example'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'example',
          name: 'Example',
          component: Example
        },
        {
          path: 'sm/user',
          name: 'User',
          component: User
        },
        {
          path: 'sm/role',
          name: 'role',
          component: Role
        }
      ]
    }
  ]
})
