import Vue from 'vue'
import vueRouter from 'vue-router'
import router from './router.js'
import App from './App.vue'

Vue.use(vueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
