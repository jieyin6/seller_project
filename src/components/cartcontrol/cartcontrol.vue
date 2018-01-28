<template>
  <div class="cartcontrol">
      <transition name="fade">
          <!-- 减 -->
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">-</div>
        </transition>  
        <!-- 数量 -->   
      <div class="cart-count" v-show="food.count > 0 ">{{food.count}}</div>
      <!-- 加 -->
      <div class="cart-increase" @click="addCart()">+</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props:{
      food:{
          type:Object
      }
  },
  methods:{
      //点击加使减和数量出现
      addCart:function(){
          console.log(12345);
          if(!this.food.count){
              //通过vue.set方法添加属性可以被观测到
              Vue.set(this.food,'count',1)
          }else{
              this.food.count++
          }
          this.$emit('cart-add',event.target)
      },
      //减方法
      decreaseCart:function(){
          if(this.food.count){
              this.food.count--
          }
      }
  }
}
</script>

<style>
/*fade样式*/
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .4s linear;
  
  transform: rotate(0)
}
.fade-leave-active{
  opacity:0;
  transition:opacity .4s linear;
 transform: translate3d(24px,0,0);
 
}
/*整体样式*/
.cartcontrol{
    font-size: 0;
    display: flex
}
/*减效果*/
.cartcontrol .cart-decrease{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid #00A0DC;
    background-color: #fff;
    font-size: 22px;
    line-height: 16px;
    text-align: center;
    color: #00A0DC
}
/*数量样式*/
.cartcontrol .cart-count{
    display: inline-block;
    width: 24px;
    line-height: 24px;
    font-size: 10px;
    text-align: center;
    color: rgb(147, 153, 159);
}
/*加样式*/
.cartcontrol .cart-increase{
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background-color: #00a0dc;
    font-size: 22px;
    line-height: 24px;
    text-align: center;
    color: #fff
}


</style>
