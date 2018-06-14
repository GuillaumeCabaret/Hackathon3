import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Menu from '@/components/Menu'
import Vehicules from '@/components/Vehicules'
import Command from '@/components/Command'
import User from '@/components/User'
import Historique from '@/components/Historique'
import Resume from '@/components/Resume'
import Cgu from '@/components/Cgu'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/vehicules',
    name: 'Vehicules',
    component: Vehicules
  },
  {
    path: '/command',
    name: 'Command',
    component: Command
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/historique',
    name: 'Historique',
    component: Historique
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/cgu',
    name: 'Cgu',
    component: Cgu
  }
  ]
})
