<template>
<div class="nav">
    <router-link to="/goods">商品</router-link>
    <router-link to="/discuss">评价</router-link>
    <router-link to="/seller">商家</router-link>
    
    <router-view></router-view>
    
</div>

</template>

<script>
import goods from './goods'
import seller from './seller'
import discuss from './discuss'
export default {
    name:'navVue',
    components:{
        goods:goods,
        seller:seller,
        discuss:discuss
    }
  
}
</script>

<style>
.nav{
    display: flex;
    justify-content: space-around;
    height: 80px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    font-size: 28px;
    line-height: 80px;
    color: rgb(77, 85, 93);
    background-color: #fff

}
a{
    text-decoration: none;
    color: rgb(77, 85, 93);
}
.active{
  color: rgb(240, 20, 20)
}
</style>
