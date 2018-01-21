import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '../components/nav/goods'
import seller from '../components/nav/seller'
import discuss from '../components/nav/discuss'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
     component: goods
    },
    {
      path:'/goods',
      name:'goods',
      component:goods
    },
    {
      path:'/seller',
      name:'seller',
      component:seller
    },
    {
      path:'/discuss',
      name:'discuss',
      component:discuss
    }
  ]
})
