import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import Shopping from '@/pages/shopping/Shopping'
import Setting from '@/pages/setting/Setting'
import Address from '@/pages/setting/Address'
import AddressEdit from '@/pages/setting/AddressEdit'
import Order from '@/pages/setting/Order'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
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
      component: Setting,
      meta: { requireAuth: true }
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/addressEdit',
      name: 'AddressEdit',
      component: AddressEdit
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
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
    },
    {
      path: '*',
      component: () => import('@/pages/NotFound/404')
    }
  ]
})
export default router
