import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Plant from "@/views/Plant"
import Login from "@/views/Login"
import NewProject from "@/views/NewProject"
import ProjectView from "@/views/ProjectView"

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
    },
    {
      path: '/project/:project',
      name: 'Project',
      component: ProjectView
    },
    {
      path:'/new-project',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
