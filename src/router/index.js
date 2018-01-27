import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '../components/goods/goods'


Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component:goods
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/seller'
    },
    {
      path:'/discuss'
    }
  ]
})
