// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 插件样式
import '@/assets/styles/application.css';

import '@/assets/scripts/app.js'

Vue.config.productionTip = false

// 权限登陆检查
import { getStorage } from '@/assets/scripts/sessionStorage.js'

router.beforeEach((to, from, next) => {
  if(to.name != 'signup' && !getStorage('authKey') && to.name != 'login'){    // 跳过注册页面和登陆页面的权限验证
    //router.push({name: 'login'});
  }
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
