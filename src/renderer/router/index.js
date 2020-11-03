import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'count',
      component: require('@/components/Count/Count.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
