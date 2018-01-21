import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/'
    },
    {
      path:'/goods'
    },
    {
      path:'/seller'
    },
    {
      path:'/discuss'
    }
  ]
})
