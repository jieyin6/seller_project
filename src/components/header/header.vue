<template>
  <div class="header">
    <div class="headerTop">
      <div class="seller-pic">
        <img src="" alt="">
      </div>
      <div class="seller-name">

      </div>
    </div>
      <div class="seller-ad">

      </div>
  </div>
</template>

<script>

export default {
  name:'headerVue',
  
}
</script>

<style>
.header{
   height: 134px;
   width: 100%;
   background-color: rgba(7,17, 27, 0.5) ;
   /*filter: blur(10px)*/
}
.headerTop{
    height: 82px;
    padding-top: 24px;
    padding-left: 24px;
    margin-bottom: 18px;
   background-color: aqua
}
.seller-ad{
    
    height: 28px;
    background-color: rgba(7, 17, 27, 0.2)
}
</style>
