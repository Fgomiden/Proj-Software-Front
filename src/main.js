import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Fire from './services/firebase'
//import VueAxios from 'vue-axios'
//import { securedAxiosInstance, plainAxiosInstance } from './services/api/index'

// Vue.use(VueAxios,{
//   secured: securedAxiosInstance,
//   plain: plainAxiosInstance
// })

Vue.use(Fire)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
