import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Plant from "@/views/Plant"
import Login from "@/views/Login"
import NewProject from "@/views/NewProject"
import ProjectView from "@/views/ProjectView"
import Smart from "@/views/Smart"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/smart',
      name: 'Smart',
      component: Smart
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
    },
    {
      path: '/project/:id',
      name: 'Project',
      props: true,
      component: ProjectView
    },
    {
      path:'/new-project',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
