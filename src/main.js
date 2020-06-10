import Vue from 'vue'
import App from './App.vue'
import { routes } from './router/route'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
