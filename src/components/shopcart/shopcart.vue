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
    background-color: #141d27
}
</style>
