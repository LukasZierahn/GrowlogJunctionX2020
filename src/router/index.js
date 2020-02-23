import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import PlantList from '@/components/PlantList'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Plant from "@/components/Plant"

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
