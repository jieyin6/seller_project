<template>
  <div class="goods">
      <!--左边菜单-->
      <div class="menu-wrapper">
          <ul >
              <li v-for="item in goods" class="menu-li">
                  <span class="menu-text">
                        <span v-show="item.type > 0" class="menu-icon" 
                        :class="classMap[item.type]"></span>{{item.name}}
                     </span>
              </li>
          </ul>
      </div>
       <!--右边商品-->
      <div class="goods-wrapper">
           <!--商品模块-->
          <ul>
              <li v-for="item in goods" class="goods-list">
                  <h1>{{item.name}}</h1>
                   <!--模块内商品-->
                  <ul>
                      <li v-for=" food in item.foods" class="food-list">
                           <!--商品名称-->
                          <div class="food-img">
                              <img :src="food.icon" alt="">
                          </div>
                           <!--商品信息-->
                          <div class="food-content">
                              <p class="food-name">{{food.name}}</p>
                              <p class="food-type">{{food.description}}</p>
                              <p class="food-des">
                                  <span >月售{{food.sellCount}}份</span>
                                  <span>好评率{{food.rating}}%</span>
                              </p>
                              <div class="food-price">
                                  <span class="current-price">￥{{food.price}}</span>
                                  <span class="old-price" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        seller:{
            type:Object
        }
    },
    data:function(){
        return{
            goods:[]
        }
    },
    created:function(){
         this.classMap = ["decrease",'discount','special','invoice','guarantee']
         //获取goods
        var _this = this;
        this.$http.get('/msg').then(function(res){
            _this.goods = res.data.goods;
            
        }).catch(function(err){
            console.log(err)
        });
        
    }
}
</script>

<style>
/*goods整体样式*/
.goods{
    display: flex;
    position: absolute;
    top: 175px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
}
.goods .menu-wrapper{
    flex: 0 0 80px;
    background-color: #f3f5f7;
}
.goods .goods-wrapper{
    flex: 1
}
/*左边菜单*/
.menu-wrapper .menu-li{
    display: table;
    height: 54px;
    width: 56px;
    margin: 0 auto;
    line-height: 54px
}
/*菜单中的折扣图标及文字样式*/
.menu-li .menu-icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px ;
  background-repeat:no-repeat;
}
 .decrease{
  background-image: url('./imgs/decrease_3@2x.png')
}
 .discount{
  background-image: url('./imgs/discount_3@2x.png')
}
 .guarantee{
  background-image: url('./imgs/guarantee_3@2x.png')
}
 .invoice{
  background-image: url('./imgs/invoice_3@2x.png')
}
 .special{
  background-image: url('./imgs/special_3@2x.png')
}
.menu-li .menu-text{
    display: table-cell;
    vertical-align: middle;
    width: 56px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    font-size: 12px;
    text-align: left;
    font-weight: 200;
    line-height: 14px
}
/*右边商品模块名称样式*/
.goods-list h1{
    height: 26px;
    line-height: 26px;
    padding-left: 14px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    text-align: left;
    background-color:#f3f5f7;
}
/*商品模块中商品整体样式*/
.goods-list .food-list{
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
}
/*商品图片*/
.food-img img{
    display: inline-block;
    width: 57px;
    height: 57px;
    margin-right: 10px;
    vertical-align: top
}
/*商品信息*/
.food-content{
    margin-top: 2px;
    text-align: left
}
/*名称*/
.food-content .food-name{
    font-size: 14px;
    color: rgb(7,17,27);
    line-height: 14px;
    margin-bottom: 8px
}
/*类型及描述*/
.food-content .food-type,.food-des{
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
    margin-bottom: 8px
}
.food-des span:first-child{
    display: inline-block;
    margin-right: 12px;
    }
    /*价格*/
.food-content .food-price .current-price{
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
    font-weight: 700;
    line-height: 14px
}
.food-price .old-price{
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 14px;
    text-decoration: line-through
}
</style>
