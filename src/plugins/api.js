import Vue from 'vue'
// import { getMenu } from '@/api/menu'

const api = {
  // getMenu
}

function plugin(Vue, api) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return api
      }
    }
  })
}

Vue.use(plugin, api)
