<template>
<div class="seller-page" ref="sellerPage">
    <div class="seller-wrapper">
        <div class="detail-wrapper">
            <!-- 商家主要信息上部分 -->
            <div class="detail-top">
                <h1>{{seller.name}}</h1>
                <div class="detail-star">
                    <star :size="36" :score="seller.score"></star>
                    <span>({{seller.ratingCount}})</span>
                    <span>月售{{seller.sellCount}}单</span>
                </div>
                 
            </div>
            <!--商家主要信息下部分-->
             <div class="detail-bottom">
                <div>
                    <h3>起送价</h3>
                  <p>
                    <span>{{seller.minPrice}}</span>
                    <span>元</span>
                    </p>
                </div>
                <div>
                    <h3>商家配送</h3>
                    <p>
                        <span>{{seller.deliveryPrice}}</span>
                        <span>元</span>
                    </p>
                </div>
                <div class="no-border">
                    <h3>平均配送时间</h3>
                    <p>
                        <span>{{seller.deliveryTime}}</span>
                        <span>分钟</span>
                    </p>
                </div>
            </div>
            <!--收藏-->
            <div class="collect" @click="collect">
                <span class="collect-icon" :class="{'activeIcon':like}"></span>
                <span class="like-text">{{likeText}}</span>
            </div>
        </div>
        <!--公告与活动-->
        <div class="activities-wrapper">
            <h1>公告与活动</h1>
            <div class="announcement">{{seller.bulletin}}</div>
             <ul v-if="seller.supports" class="activities-support">
              <li v-for="(item,index) in seller.supports" class="activities-item" >
                <span class="activities-pic" :class="classMap[item.type]"></span> 
                <span class="activities-text">{{item.description}}</span>
              </li>
            </ul>
        </div>
        <!--商家照片-->
        <div class="pic-wrapper">
            <h1>商家实景</h1>
            <div class="pics-wrapper" ref="picwrapper">
            <ul ref="ulpic">
                <li v-for="pic in seller.pics">
                    <img :src="pic" alt="">
                </li>
            </ul>
            </div>
        </div>
        <!--商家信息-->
        <div class="information-wrapper">
            <h1>商家信息</h1>
             <ul>
                 <li v-for="info in seller.infos" class="li-info">{{info}}</li>
             </ul>
        </div>
    </div>
</div>  
</template>

<script>
import Bscroll from 'better-scroll'
import star from '../star/star'
export default {
  props:{
      seller:{
         type:Object
      }
  },
  data:function(){
      return{
          //收藏文字改变
          like:false
      }
  },
  components:{
      star:star
  },
  computed:{
     likeText(){
         return this.like ? '已收藏' :'收藏';
     } 
  },
  created(){
      this.classMap = ["decrease",'discount','special','invoice','guarantee']
      //seller页面可以滚动
      if(!this.sellerScroll){
        this.$nextTick(() => {
            this.sellerScroll = new Bscroll(this.$refs.sellerPage,{
              click:true
          })
        })
        }else{
          this.sellerScroll.refresh()
      }
     
  },
  mounted:function(){
       //图片墙横向滚动
      if(this.seller.pics){
      var picWidth = 120;
      var picMargin = 6;
      var width = (picWidth+picMargin) * this.seller.pics.length - picMargin;
      this.$refs.ulpic.style.width = width +'px'
      console.log(this.$refs.ulpic)
      this.$nextTick(()=>{
          this.pinscroll = new Bscroll(this.$refs.picwrapper,{
              scrollX:true,
             eventPassthrough:'vertical'
          });
      });
  }
  },
  methods:{
      //收藏事件
      collect(){
          this.like = !this.like
      }
  }
}
</script>

<style>
/*商家页面整体*/
.seller-page{
    position: absolute;
    top: 175px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background-color: rgba(147,153,159,0.1)
}
/*商家主要信息*/
.detail-wrapper{
    background-color: #fff;
    margin-bottom: 16px
}
.detail-top{
    margin: 0 18px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    text-align: left
}
.detail-top h1{
    margin-bottom: 8px;
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px
}
.detail-star{font-size: 0}
.detail-star span{
    display: inline-block;
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 18px;
    vertical-align: top
    }
.detail-star span:nth-of-type(1){
    margin-right: 12px
}
.detail-star .star {
    display: inline-block;
    margin-right: 8px;
    margin-left: 0
    }
.detail-bottom{
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    display: flex
}
.detail-bottom div{
    flex: 1;
    border-right:1px solid rgba(7, 17, 27,0.1) 
}
.detail-bottom .no-border{
    border: none
}
.detail-bottom div h3{
    font-size: 10px;
    color: rgb(147,153,159);
    margin-bottom: 4px
}
.detail-bottom div p{
    font-size: 0
}
.detail-bottom div span:nth-of-type(1){
    font-size: 24px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 24px;
   }
.detail-bottom div span:nth-of-type(2){
    font-size: 10px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 24px
}
.collect{
    position: absolute;
    top: 18px;
    right: 18px;
}
.collect-icon{
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin: 0 auto;
    background-color: rgb(147,153,159)
}
.activeIcon{background-color:rgb(240, 20, 20)}
.like-text{
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 10px
}
/*公告与活动*/
.activities-wrapper{
    padding: 18px 18px 0 18px;
    margin-bottom: 16px;
    background-color: #fff;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    text-align: left
}
.activities-wrapper h1{
     margin-bottom: 8px;
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px
}
.announcement{
    font-size: 12px;
    font-weight: 200;
    color: rgb(240, 20, 20);
    line-height: 24px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7,17,27,0.1)
}
.activities-item{
    padding: 16px 12px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    font-size: 0
}
.activities-item:last-child{
    border:none
}
.activities-pic{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size:16px 16px;
    margin-right: 6px ;
    vertical-align: top
}
 .decrease{
  background-image: url('./imgs/decrease_4@2x.png')
}
 .discount{
  background-image: url('./imgs/discount_4@2x.png')
}
 .guarantee{
  background-image: url('./imgs/guarantee_4@2x.png')
}
 .invoice{
  background-image: url('./imgs/invoice_4@2x.png')
}
 .special{
  background-image: url('./imgs/special_4@2x.png')
}
.activities-text{
    font-size: 12px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 16px;
}
/*商家实景*/
.pic-wrapper{
    padding:16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    background-color: #fff;
}
.pic-wrapper h1{
    margin-bottom: 12px;
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    text-align: left
}
.pics-wrapper{
    width: 100%;
    height: 90px;
    overflow:hidden;
    white-space: nowrap;
}
.pic-wrapper ul{
   
    font-size: 0
}
.pic-wrapper ul li{
    display: inline-block;
     width: 120px;
    height: 90px;
    margin-right: 6px
}
.pic-wrapper ul li:last-child{margin-right: 0}
.pic-wrapper ul li img{
    width: 120px;
    height: 90px;
    }
/*商家信息*/
.information-wrapper{
    background-color: #fff;
    padding: 18px 18px 0 18px;
    text-align: left
}
.information-wrapper h1{
     padding-bottom: 12px;
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    border-bottom:1px solid rgba(7, 17, 27,0.1) 
}
.information-wrapper ul li{
    padding: 16px 12px;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    font-size: 12px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 16px
}
</style>
