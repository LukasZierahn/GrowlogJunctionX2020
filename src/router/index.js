import Vue from 'vue'
import Router from 'vue-router'

import PlantList from '@/components/PlantList'

import YourProjects from '@/views/YourProjects'
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
      path: '/your-projects',
      name: 'YourProjects',
      component: YourProjects
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
