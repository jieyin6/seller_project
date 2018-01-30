<template>
<div class="foodone-des" v-show="showFlag" ref="foodone">
    <!--  商品页内容开始-->
    <div >
         <!--商品图片-->
    <div class="des-img">
        <img :src="foodone.image" alt="">
    </div> 
     <!--返回箭头--> 
    <div class="foodone-return" @click="hide()">&lt;</div> 
     <!--商品名称销量好评率价格及购物车按钮-->
    <div class="des-detail">
        <p class="detail-name">{{foodone.name}}</p>
        <div class="count-wrapper">
        <span class="detail-count">月售{{foodone.sellCount}}份</span>
        <span>好评率{{foodone.rating}}%</span>
        </div>
        <p class="detail-price">
            <span class="price-current">￥{{foodone.price}}</span>
            <span v-show="foodone.oldPrice" class="price-old">{{foodone.oldPrice}}</span>
        </p>
        <div class="cart-wrapper">
        <cartcontrol :food="foodone"></cartcontrol>
        </div>
        <div class="detail-cart" v-show="!foodone.count|| foodone.count === 0"
        @click.stop.prevent="addFirst()">加入购物车</div>
    </div>
     <!--商品介绍-->
    <div class="food-introduce">
        <h1>商品介绍</h1>
        <div>{{foodone.info}}</div>
    </div>
     <!--商品评价-->
    <div class="food-ratings">
        <h1 class="ratings-title">商品评价</h1>
        <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc"
        :ratings="foodone.ratings"></ratingselect>
    </div>
    </div>
</div>  
</template>

<script>
import Bscroll from 'better-scroll'
import Vue from 'vue'
import cartcontrol from '../cartcontrol/cartcontrol'
import ratingselect from '../ratingselect/ratingselect'
var positive = 0;
var negative = 1;
var all = 2
export default {
  props:{
      foodone:{
          type:Object
      }
  },
  components:{
      cartcontrol:cartcontrol,
      ratingselect:ratingselect
  },
  data:function(){
      return{
          //商品页不显示
          showFlag:false,
          selectType:all,
          onlyContent:true,
          desc:{
              all:'全部',
              positive:'推荐',
              negative:'吐槽'
          }
      }
  },
  methods:{
      //显示商品页并可以滚动
      show:function(){
          this.showFlag = true;
          //每次打开初始化状态
          this.selectType=all;
          this.onlyContent=true;
          if(!this.foodScroll){
          this.$nextTick(()=>{
              this.foodScroll = new Bscroll(this.$refs.foodone,{
              click:true
          })
          })
          }else{
              foodScroll.refresh()
          }
      },
      //隐藏商品页
      hide:function(){
          this.showFlag = !this.showFlag
      },
      //购物车按钮
      addFirst:function(){
          Vue.set(this.foodone,'count',1)
      }
      
  }
}
</script>

<style>
 /*商品页整体*/
.foodone-des{
    position: fixed;
    top: 0;
    bottom: 48px;
    top: 0;
    z-index: 30;
    width: 100%;
    background-color:#f3f5f7
}
/*图片*/
.foodone-des .des-img img{
    height: 375px;
    width: 100%
}
/*返回按钮*/
.foodone-return{
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
}
/*主要内容*/
.des-detail{
    text-align: left;
    padding:18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    margin-bottom: 16px;
    background-color: #fff;
    position: relative;
}
/*商品名称*/
.des-detail .detail-name{
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(7, 17, 27);
    line-height: 14px
}
/*好评率及销量*/
.des-detail .count-wrapper{
    font-size: 0;
    margin-bottom: 18px
}
.des-detail span{
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px
}
.count-wrapper .detail-count{
    display: inline-block;
    margin-right: 12px
}
/*价格*/
.des-detail .detail-price{
    font-size: 0
}
.detail-price  .price-current{
    display: inline-block;
    margin-right: 12px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(240, 20, 20);
    line-height: 24px
} 
.detail-price .price-old{
    font-size: 10px;
    font-weight: normal;
    color: rgb(147, 153, 159);
    line-height: 24px
}
/*cartcontrol组件样式*/
.cart-wrapper{
    position: absolute;
    right: 18px;
    bottom: 18px;


}
/*加入购物车按钮*/
.detail-cart{
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 10;
    width: 74px;
    height: 24px;
    border-radius: 12px;
    background-color: rgb(0, 160, 220);
    font-size: 10px;
    color: rgb(255, 255, 255);
    line-height: 24px;
    text-align: center
}
/*商品介绍*/
.food-introduce{
    background-color: #fff;
    padding:18px ;
    text-align: left;
    border-top: 1px solid rgba(7, 17, 27,0.1);
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    margin-bottom: 16px
}
.food-introduce h1{
     margin-bottom: 6px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(7, 17, 27);
    line-height: 14px
}
.food-introduce div{
    padding: 0 8px;
    font-size: 12px;
    font-weight: 200;
    color: rgb(77, 85, 93);
    line-height: 24px
}
/*商品评价*/
.food-ratings{
   background-color: #fff;
    border-top: 1px solid rgba(7, 17, 27,0.1);
    text-align: left
}
.food-ratings .ratings-title{
     padding: 18px;
     font-size: 14px;
    font-weight: 700;
    color: rgb(7, 17, 27);
    line-height: 14px
}


</style>
