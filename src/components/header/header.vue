<template>
  <div class="header">
      <header-top></header-top>
      <header-bottom></header-bottom>
  </div>
</template>

<script>
import headerTop from './headerTop'
import headerBottom from './headerBottom'
export default {
  name:'headerVue',
  components:{
    headerTop:headerTop,
    headerBottom:headerBottom
  }
}
</script>

<style>
.header{
   height: 268px;
   width: 100%;
  
   background-color: rgba(7,17, 27, 0.5) ;
   /*filter: blur(10px)*/
}
</style>
