import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from "./routes/route.js";

import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'

import { store } from './store/store.js';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
