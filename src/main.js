import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = axios
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
