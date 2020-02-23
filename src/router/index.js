import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Plant from "@/views/Plant"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/plant/:plant',
      name: 'Plant',
      props: true,
      component: Plant
    }
  ]
})
