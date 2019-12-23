import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MailList from '../views/MailList.vue'
import Discover from '../views/Discover.vue'
import Personal from '../views/Personal.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'
import Record from '../views/Record.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/maillist',
    name: 'mailList',
    component: MailList
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/record',
    name: 'record',
    component: Record
  },
]

const router = new VueRouter({
  routes
})

export default router
