import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
import './fontAwesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
