import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Router from 'vue-router'
import { routes } from './routes/routes'


Vue.use(BootstrapVue)
Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
