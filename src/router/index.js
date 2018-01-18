import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import AccountPage from '@/components/AccountPage'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(Router)

// let router = new Router({
export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/acct',
      name: 'account-page',
      component: AccountPage,
      meta: {
       requiresAuth: true
      }
    },
    {
      path: '/dash',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
  ]
})


// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('dash')
//   else next()
// })

// export default router
