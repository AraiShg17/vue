import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/pages/axios'
import Form from '@/pages/form'
import Index from '@/pages/index'
import Scroll from '@/pages/scroll'
import Data from '@/pages/data'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/axios',
      name: 'axios',
      component: Page
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: Scroll
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    }
  ]
})
