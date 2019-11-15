import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 引入plugins中的插件
import '@/plugins/element'
import '@/plugins/axios'
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
