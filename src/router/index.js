import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import Shopping from '@/pages/shopping/Shopping'
import Setting from '@/pages/setting/Setting'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: Detail,
      component: Detail
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requireAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
