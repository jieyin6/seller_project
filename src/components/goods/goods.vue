<template>
  <div class="goods">
      <!--左边菜单-->
      <div class="menu-wrapper" ref="menuWrapper">
          <ul >
              <li v-for="(item,index) in goods" class="menu-li"
              :class="{'current':currentIndex === index}" @click="selectMenu(index)">
                   <!--如果当前index和index相等时 会被赋予current类-->
                  <span class="menu-text">
                        <span v-show="item.type > 0" class="menu-icon" 
                        :class="classMap[item.type]"></span>{{item.name}}
                     </span>
              </li>
          </ul>
      </div>
       <!--右边商品-->
      <div class="goods-wrapper" ref="foodsWrapper">
           <!--商品模块-->
          <ul>
              <li v-for="item in goods" class="goods-list food-list-height">
                  <h1>{{item.name}}</h1>
                   <!--模块内商品-->
                  <ul>
                      <li v-for=" food in item.foods" class="food-list ">
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
      <shopcart></shopcart>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import shopcart from '../shopcart/shopcart'
export default {
    props:{
        seller:{
            type:Object
        }
    },
    components:{
        shopcart:shopcart
    },
    data:function(){
        return{
            goods:[],
            //商品模块高度
            listHeight:[],
            scrollY:0
        }
    },
    computed:{
        //左侧indx应该在哪里
        currentIndex:function(){
            for(var i = 0 ;i<this.listHeight.length;i++){
                var height1 = this.listHeight[i];
                var height2 = this.listHeight[i+1];
                console.log(height1);
                //如果是height1是最后一个，height2会返回undefined
                if( !height2 || (this.scrollY>=height1 && this.scrollY<=height2)){
                   console.log(i);
                    return i ;
                 }
                 }
         return 0 
        }
    },
    created:function(){
         this.classMap = ["decrease",'discount','special','invoice','guarantee']
         //获取goods
        var _this = this;
        this.$http.get('/msg').then(function(res){
            _this.goods = res.data.goods;
             _this.$nextTick(() => {
                 _this.initScroll();
                 _this.calculateHeight();
            })
            }).catch(function(err){
            console.log(err)
        });
        
    },
  
    methods:{
        //滚动方法
        initScroll:function(){
            this.menuScroll = new Bscroll(this.$refs.menuWrapper,{
                click:true
            }); //参数是 dom对象和json对象
            this.foodScroll = new Bscroll(this.$refs.foodsWrapper,{
                probeType:3
            }) ;
            //监听滚动
            this.foodScroll.on('scroll',(pos)=>{
                this.scrollY = Math.abs(Math.round(pos.y))//取整取绝对值
                console.log(this.scrollY)
            })
           
        },
        //计算商品各个模块的值
        calculateHeight:function(){
            var foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-height");
            var height = 0;
            this.listHeight.push(height);
            for(var i = 0 ;i < foodList.length ; i++){
                var item = foodList[i];
                 height += item.clientHeight;
                this.listHeight.push(height)
                
            }
        },
        //点击左侧调到右侧对应模块
        selectMenu:function(index){
             var foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-height");
             var el = foodList[index];
             this.foodScroll.scrollToElement(el,300);
            
        }
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
    padding: 0 12px;
    line-height: 54px
}

.menu-wrapper .current{
    position: relative;
    z-index: 10px;
    margin-top: -1px;
    background-color: #fff;
    font-weight: 700
}
.current .menu-text{
    border-bottom: none;
}
/*菜单中的折扣图标及文字样式*/
.menu-li .menu-icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px ;
  background-repeat:no-repeat;
  vertical-align: -2px
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
.food-list:last-child{
    margin-bottom:0;
    border-bottom:none 
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
.food-content .food-type{
    line-height: 12px;
}
.food-des{
    font-size: 0
}
.food-des span{
    font-size: 10px
}

.food-des span:first-child{
    margin-right: 12px;
    }
    /*价格*/
.food-content .food-price{font-size: 0}
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
