import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/components/auth/Login'
//import Signup from '@/components/auth/Signup'

// 登陆
const Login = (resolve) => {
  import('@/components/auth/login/Login').then((module) => {
    resolve(module);
  })
}

// 注册
const Signup = (resolve) => {
  import('@/components/auth/signup/Signup').then((module) => {
    resolve(module);
  })
}

// 面板
const Dashboard = (resolve) => {
  import('@/components/dashboard/Dashboard').then((module) => {
    resolve(module);
  })
}

// 404页面
const NotFound = (resolve) => {
  import('@/components/errors/404/NotFound').then((module) => {
    resolve(module);
  })
}


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/auth/login'
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
