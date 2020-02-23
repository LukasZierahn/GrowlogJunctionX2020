import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import PlantList from '@/views/PlantList'
import About from '@/views/About'
import Contact from '@/views/Contact'
import Plant from "@/views/Plant"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plantList',
      name: 'PlantList',
      component: PlantList
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/plant/:plant',
      name: 'Plant',
      props: true,
      component: Plant
    }
  ]
})
