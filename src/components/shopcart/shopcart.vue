<template>
  <div class="shopcart">
      <!--购物车内容-->
      <div class="shopcart-content">
           <!--购物车左边-->
          <div class="shopcart-left">
              <div class="logo-wrapper">
                  <div class="logo-pic" :class="{'logo-highlight':totalCount > 0}"></div>
                  <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
              </div>
              <div class="shopcart-price" :class="{'price-highlight':totalPrice > 0}">￥{{totalPrice}}</div>
              <div class="deliveryPrice">另需配送费￥{{deliveryPrice}}元</div>
          </div>
           <!--购物车右边-->
          <div class="shopcart-right minPrice" :class="changeClass">{{payDes}}</div>
      </div>
      <div class="ball-container" >
          <transition-group name="drop">
          <div v-for="(ball,index) in balls" :key="ball.index" v-show="ball.show" class="ball">
              <div class="inner" :key="ball.index"></div>
          </div>
          </transition-group>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      selectFoods:{
          type:Array,
          default:function(){
              return []
          }
      },
      deliveryPrice:{
          type:Number,
          default:0
      },
      minPrice:{
          type:Number,
          default:0
      }
  },
  data:function(){
      return{
          balls:[
              {
              show:false
          },
           {
              show:false
          },
           {
              show:false
          },
           {
              show:false
          },
           {
              show:false
          },
          ]
      }
  },
  computed:{
      //计算总价
      totalPrice:function(){
          var total = 0;
          //数组中的每个元素调用回调函数
          this.selectFoods.forEach( (food)=> {
              total += food.price*food.count
              console.log(total)
          })
          return total
      },
      //计算数量
      totalCount:function(){
          var count = 0;
          this.selectFoods.forEach( (food) => {
            count += food.count
          })
          return count
      },
      //购物车右侧
      payDes:function(){
          if(this.totalPrice === 0){
              return `￥${this.minPrice}起送`
          }else if(this.totalPrice < this.minPrice){
              var cha = this.minPrice - this.totalPrice
              return `还差￥${cha}起送`
          }else{
              return `去结算`
          }
      },
      //购物车右侧css变化
      changeClass:function(){
          if(this.totalPrice < this.minPrice){
              return `notEnough`
          }else{
              return `enough`
          }
      }
  },
  methods:{
      drop:function(el){
          console.log(el);
      }
  }
}
</script>

<style>
/*购物车整体*/
.shopcart{
    position: fixed;
    bottom: 0;
    z-index: 50;
    width:100%;
    height: 48px;
   
}
/*购物车内容*/
.shopcart-content{
    display: flex;
    height: 48px;
}
/*购物车左边开始*/
.shopcart-left{
    flex: 1;
    padding-left: 12px;
    background-color: #141d27
}
.shopcart-left .logo-wrapper{
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    margin-top: -12px;
    margin-right: 12px;
   background-color: #141d27
}

.logo-wrapper .logo-pic{
    position: absolute;
    bottom:8px;
    left: 6px;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background-color: gray
}
//选中商品后的图标效果
.logo-wrapper .logo-highlight{
 background-color:#00A0DC 
}
//图片右上角数量
.logo-wrapper .num{
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    border-radius: 12px;
    background-color: rgb(240, 20, 20);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4) ;
    font-size: 9px;
    font-weight: 700;
    line-height: 16px;
    color: rgb(255, 255, 255)
}
.shopcart-price{
    position: absolute;
    top: 0;
    left: 74px;
    margin-right: 12px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    line-height: 48px
}
/*选好后价格效果*/
.price-highlight{color: #fff}
.deliveryPrice{
    position: absolute;
    top: 12px;
    left: 112px;
    padding-left: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.4);
    line-height: 24px
}
/*购物车右侧*/
.shopcart-right{
    flex: 0 0 105px;
    font-size: 12px;
    font-weight: 700;
    line-height: 48px
}
.notEnough{
     background-color: gray;
     color: rgba(255, 255, 255, 0.4);
}
.enough{
    background-color: #00b43c;
    color: #fff
}
.ball-container .ball{
    position: fixed;
    bottom: 22px;
    left: 32px;
    z-index: 200;
}
.ball .inner{
    width: 24px;
    height: 24px;
    border-radius: 50%
}
</style>
