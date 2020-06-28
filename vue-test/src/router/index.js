import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'
import Login from '@/views/Login'
import News from '@/views/News'
import NewsPage from '@/views/NewsPage'
import Admin from '@/views/Admin'
import Add from '@/views/Admin/Add'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/newspage/:id',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children:[
      {
        path: '/',
        name: 'Admin-Home',
        component: Admin-Home
      },
      {
        path: '/add',
        name: 'Admin-Add',
        component: Admin-Add
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
