import axios from 'axios'
import Vue from 'vue'
import { Message, Loading } from 'element-ui'

axios.defaults.baseURL = process.env.VUE_APP_API_SERVER
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Cache-Control'] = 'no-cache'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
let loadingInstance

axios.interceptors.request.use(config => {
  loadingInstance = Loading.service({ fullscreen: true })
  return config
}, error => {
  loadingInstance && loadingInstance.close()
  Message.error({ message: '请求失败，请稍后再试！' })
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  loadingInstance && loadingInstance.close()
  return response
}, error => {
  loadingInstance && loadingInstance.close()
  Message.error({ message: '网络错误，请稍后再试！' })
  return Promise.reject(error)
})

function plugin(Vue, axios) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios
      }
    }
  })
}

Vue.use(plugin, axios)
export default Vue.prototype.$axios
