// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

sync(store, router)
// eslint-disable-next-line no-unused-vars
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../static/assets/scss/reset.scss'
import '../static/assets/scss/edit.scss'
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
