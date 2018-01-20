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

const router = new Router({
// export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next('/dash')
          } else {
            next()
          }
        })
      })
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next('/dash')
          } else {
            next()
          }
        })
      })
    },
    {
      path: '/dash',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next('/login')
          }
        })
      })
    },
    {
      path: '/acct',
      name: 'account-page',
      component: AccountPage,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next('/login')
          }
        })
      })
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next('/login')
          }
        })
      })
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next('/login')
          }
        })
      })
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      beforeEnter: (function(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next('/login')
          }
        })
      })
    },
  ]
  // routes: [
    // {
    //   path: '/',
    //   name: 'landing',
    //   component: Landing,
    //   meta: {
    //     requiresAuth: false
    //   }
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta: {
    //     requiresAuth: false
    //   }
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignUp,
    //   meta: {
    //     requiresAuth: false
    //   }
    // },
    // {
    //   path: '/acct',
    //   name: 'account-page',
    //   component: AccountPage,
    //   meta: {
    //    requiresAuth: true
    //   }
    // },
    // {
    //   path: '/dash',
    //   name: 'dashboard',
    //   component: Dashboard,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/new',
    //   name: 'new-employee',
    //   component: NewEmployee,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/edit/:employee_id',
    //   name: 'edit-employee',
    //   component: EditEmployee,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/:employee_id',
    //   name: 'view-employee',
    //   component: ViewEmployee,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
  // ]
})


// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) this.$router.next('login')
//   else if (!requiresAuth && currentUser) this.$router.next('dash')
//   else this.$router.next()
// })



export default router
