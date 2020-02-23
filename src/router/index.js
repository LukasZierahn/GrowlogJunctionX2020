import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Plant from "@/views/Plant"
import Login from "@/views/Login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:"/",
      name: "Login",
      component: Login
    },
    {
      path: '/plant/:plant',
      name: 'Plant',
      props: true,
      component: Plant
    }
  ]
})
