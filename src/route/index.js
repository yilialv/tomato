import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import Transaction from '../components/Transaction'
import Statistics from '../components/Statistics'
import Calendar from '../components/Calendar'
import Tomato from '../components/Tomato'
import Gant from '../components/Gant'

const routes = [
  {
    path: "/",
    name: 'home',
    components: {
      app: Home
    },
    children: [
      {
        path: "/",
        name: 'transaction',
        components: {
          home: Transaction
        }
      },
      {
        path: "/statistics",
        name: 'statistics',
        components: {
          home: Statistics
        }
      },
      {
        path: "/calendar",
        name: 'calendar',
        components: {
          home: Calendar
        }
      },
      {
        path: "/tomato",
        name: 'tomato',
        components: {
          home: Tomato
        }
      },
      {
        path: "/gant",
        name: 'gant',
        components: {
          home: Gant
        }
      }
    ]
  },
  {
    path: "/login",
    name: 'login',
    components: {
      app: Login
    }
  },
  {
    path: "/register",
    name: 'register',
    components: {
      app: Register
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && window.localStorage.getItem('login_status') !== '1') next({name: 'login'})
  else next()
})

export default router
