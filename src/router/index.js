import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'


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
      path:'/seller',
      component:seller
    },
    {
      path:'/discuss',
      component:ratings
    }
  ]
})
