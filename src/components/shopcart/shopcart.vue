<template>
  <div class="shopcart">
      <div class="shopcart-content">
          <div class="shopcart-left">
              <div class="logo-wrapper">
                  <div></div>
              </div>
              <div class="shopcart-price"></div>
              <div class="selivery-price">另需配送费￥{{}}元</div>
          </div>
          <div class="shopcart-right"></div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.shopcart{
    position: fixed;
    bottom: 0;
    z-index: 50;
    width:100%;
    height: 48px;
   
}
.shopcart-content{
    display: flex;
    height: 48px;
}
.shopcart-left{
    flex: 1;
    padding-left: 12px;
    background-color: #141d27
}
.shopcart-left .logo-wrapper{
    width: 56px;
    height: 56px;
    border-radius: 28px;
    margin-top: -12px;
    background-color:red
}
.shopcart-right{
    flex: 0 0 105px;
    background-color: gray
}
</style>
