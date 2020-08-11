import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe'
import Contact from '../views/Contact'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/aboutme',
  name: 'AboutMe',
  component: AboutMe
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
