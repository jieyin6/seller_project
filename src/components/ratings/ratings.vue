<template>
  <div class="Ratings-wrapper"  ref="ratings">
      <div>
          <!-- 评价页上方-->
      <div class="ratings-top">
          <div class="left-wrapper">
              <p class="left-score">{{seller.score}}</p>
              <p class="left-text">综合评分</p>
              <p class="left-rankRate">高于周边商家{{seller.rankRate}}%</p>
          </div>
          <div class="right-wrapper">
              <div class="right-star">
                  <span >服务态度</span>
                  <star v-if="seller.score" :size="36" :score="seller.serviceScore"></star>
                  <span class="right-score">{{seller.serviceScore}}</span>
              </div>
              <div class="right-star">
                  <span >服务态度</span>
                  <star v-if="seller.score" :size="36" :score="seller.foodScore"></star>
                  <span class="right-score">{{seller.foodScore}}</span>
              </div>
              <div class="right-deliveryTime">
                  <span >送达时间</span>
                  <span class="right-time">{{seller.deliveryTime}}分钟</span>
              </div>
              
          </div>
      </div>
       <!--评价页下部分-->
      <div class="ratings-bottom">
         <ratingselect :select-type="selectType" :only-content="onlyContent" 
        :ratings="ratings"
        @typeSelect='_selectType' @contentToggle="_toggleContent"></ratingselect>
        <ul>
            <li v-for="rating in ratings" class="li-rating" 
            v-show="needShow(rating.rateType,rating.text)">
                <img :src="rating.avatar" >
                <div class="rating-content">
                    <p class="rating-username">{{rating.username}}</p>
                    <div class="star-div">
                        <star :size="36" :score="rating.score"></star>
                        <span v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟</span>
                    </div>
                    <p class="text-p">{{rating.text}}</p>
                    <div v-show="rating.recommend.length != 0" class="food-recommend">
                        <span :class="{'enjoy':rating.rateType === 0}"></span>
                        <span :class="{'hate':rating.rateType === 1}"></span>
                        <ul>
                            <li v-for="food in rating.recommend">{{food}}</li>
                        </ul>
                    </div>
                </div>
                <div class="rating-time">{{rating.rateTime | formatDate}}</div>
            </li>
        </ul>
      </div>
      </div>
      
  </div>
</template>

<script>
import star from '../star/star'
import ratingselect from '../ratingselect/ratingselect'
import Bscroll from 'better-scroll'
import {formatDate} from '../common/js/date'
var positive = 0;
var negative = 1;
var all = 2;

export default {
    components:{
        star:star,
        ratingselect:ratingselect,
       
    },
    props:{
        seller:{
            type:Object
        }
    },
    data(){
        return{
          ratings:[],
          selectType:all,
          onlyContent:true,
        }
    },
    //日期转换
     filters:{
       formatDate:function(time){
          var date = new Date(time);
          console.log(date)
          return formatDate(date,'yyyy-MM-dd hh:mm')
      }
  },
    created:function(){
        //获取datings数据
        var _this = this;
        this.$http.get('/msg').then((response) => {
            console.log(response);
            var _seller = response.data;
            var ratings = _seller.ratings;
            console.log(ratings)
            _this.ratings=ratings
         }).catch(function(err){
            console.log(err)
        })
        //页面滚动
         if(!this.ratingsScroll){
          this.$nextTick(()=>{
              this.ratingsScroll = new Bscroll(this.$refs.ratings,{
              click:true
          })
          })
          }else{
              this.ratingsScroll.refresh()
          }
    },
    methods:{
        //过滤评价
      needShow:function(type,text){
          if(this.onlyContent && !text){
              return false
          }
          if(this.selectType === all){
              return true
          }else{
              return type === this.selectType
          }
      },
         //接收子组件的seletType toggleContent
      _selectType:function(type){
          console.log(type)
          this.selectType = type;
          this.$nextTick(() => {
               this.ratingsScroll.refresh()
          })
          
      },
      _toggleContent:function(onlycontent){
          this.onlyContent = onlycontent;
           this.$nextTick(() => {
               this.ratingsScroll.refresh()
          })
          
      }
    }
  
}
</script>

<style>
/*评价页整体*/
.Ratings-wrapper{
    position: absolute;
    top: 175px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color:rgba(147, 153, 159,0.1)
}
/*评价页上方*/
.ratings-top{
    display: flex;
    padding: 18px 0;
    margin-bottom: 16px;
    border-bottom:1px solid rgba(7, 17, 27, 0.1) ;
    background-color: #fff
}
/*左边综合评分*/
.left-wrapper{
    flex: 0 0 137px;
    padding: 6px 0;
    border-right: 1px solid rgba(7, 17, 27, 0.1) 
}
.left-score{
    font-size: 24px;
    color: rgb(255, 153, 0);
    line-height: 28px;
    margin-bottom: 6px
}
.left-text{
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 12px;
    margin-bottom: 8px;
    font-weight: 700
}
.left-rankRate{
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
    margin-bottom: 6px
}
/*右边星星打分*/
.right-wrapper{
    flex: 1;
    padding: 6px 0 6px 24px;
    font-size: 0;
    text-align: left
    }
.right-star{
    margin-bottom: 8px
}

.right-wrapper div span{
    display: inline-block;
    font-size: 12px;
    line-height: 18px;
    color: rgb(7, 17, 27)
}
.star{
    display: inline-block;
    margin: 0 12px
    }

.right-wrapper .right-score{
    color: rgb(255, 153, 0);
    }
.right-wrapper .right-time{
    color: rgb(147, 153, 159);
    margin-left: 12px
    }
/*评价页下方*/
.ratings-bottom{
   border-top:1px solid rgba(147, 153, 159,0.1);
   background-color: #fff 
}
/*评价内容列表*/
.li-rating{
    padding: 18px 0;
    margin: 0 18px; 
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    overflow: hidden;
    position: relative
}

.li-rating img{
   position: absolute;
   top: 18px;
   left: 0;
   width: 28px;
   height: 28px;
   border-radius: 14px;
}
.rating-content{
    float: left;   
    margin-left: 42px;
    text-align: left
    }
.rating-username{
    font-size: 10px;
    color: rgb(7, 17, 27);
    line-height: 12px;
    margin-bottom: 4px
}
.star-div{
    font-size: 0;
    margin-bottom: 6px
}
.star-div .star{
    margin: 0 6px 0 0; 
}
.star-div span{
    display: inline-block;
    font-size: 10px;
    font-weight: 200;
    color: rgb(147, 153, 159);
    line-height: 12px;
    vertical-align: bottom
}
.text-p{
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
   
}
.food-recommend{
     margin-top: 8px;
    position: relative;
    overflow: hidden;
}
.enjoy{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    background-color: deepskyblue
}
.hate{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    background-color: rgb(147, 153, 159)
}
/*对食品的评价*/
.food-recommend ul{margin-left: 20px}
.food-recommend ul li{
    float: left;
    font-size: 9px;
    color: rgb(147, 153, 159);
    line-height: 16px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    margin-right: 8px;
    margin-bottom: 2px;
    padding: 0 6px;
    border-radius: 1px
}
.rating-time{
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 10px;
    font-weight: 200;
    color: rgb(147, 153, 159);
    line-height: 12px
}
/*兼容ipnone5*/
@media only screen and (max-width:320px){
    .left-wrapper{
        flex: 0 0 120px;
        width: 120px
        }
    .right-wrapper{
       padding-left: 6px;
       }
}
</style>
