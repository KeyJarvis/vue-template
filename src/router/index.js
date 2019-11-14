import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dev/pages',
  routes: [
    {
      path: '/helloWorld',
      name: 'hello-world',
      component: () => import('@/components/helloWorld.vue')
    }
  ]
})
