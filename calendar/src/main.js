// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 这里还有一种渲染方式，支持JavaScript的模板渲染，更加方便，就是用render:（）=》(app)
  template: '<App/>',
  components: { App },
  store,
  router
})
