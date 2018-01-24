<template>
<div>
<div class="nav">
    
    <router-link to="/goods" class="a">商品</router-link>
    <router-link to="/discuss" class="a">评价</router-link>
    <router-link to="/seller" class="a">商家</router-link>
 </div>   
    <router-view></router-view>
    
</div>

</template>

<script>
export default {
    name:'navVue'
  
  }
</script>

<style>
.nav{
    display: flex;
    height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    font-size: 14px;
    line-height: 40px;
    color: rgb(77, 85, 93);
    background-color: #fff

}
.a{
    flex:1;
    text-decoration: none;
    color: rgb(77, 85, 93);
}
.active{
  color: rgb(240, 20, 20)
}
</style>
