import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// plugins
import '@/plugins/element'
import '@/plugins/axios'
import '@/plugins/api'
// 引入自定义相关css样式
import '@/assets/css/style.scss'
import '@/assets/css/component.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
