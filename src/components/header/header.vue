
<template>
  <div class="header">
    <!--头部上部分开始-->
    <div class="headerTop">
       <!--卖家头像-->
      <div class="seller-pic">
        <img v-bind:src="seller.avatar" alt="">
      </div>
       <!--卖家信息-->
      <div class="seller-name">
          <div class="seller_name">
            <span class="seller-img"></span>
            <p class="name">{{seller.name}}</p>
          </div>
          <p class="des">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
          <div class="reduceMsg" v-if="seller.supports">
             <span class="icon-jian" :class="classMap[seller.supports[0].type]"></span>
             <p class="reduce_msg">{{seller.supports[0].description}}</p>
          </div>
          
          <div class="seller-right" v-show="showDetail" @click="showDetail()" v-if="seller.supports">
            <span>{{seller.supports.length}}个</span> 
            <span>&gt;</span>
            </div>
          
      </div>
    </div>
      <!-- 头部下半部分开始-->
      <!--公告 -->
      <div class="seller-ad" v-show="showDetail" @click="showDetail()">
        <span class="ad-img"></span>
        <p class="advertisement">{{seller.bulletin}}</p>
        <p class="hide_ad">&gt;</p>
      </div>
       <!--毛玻璃效果-->
      <div class="background">
        <img v-bind:src="seller.avatar" alt="">
      </div>
      <!--点击公告或详情弹出框-->
      <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix" >
           <!--弹出框主要内容-->
          <div class="detail-main">
             <!--商家名称-->
            <p class="detail-name">{{seller.name}}</p>
             <!--星星组件-->
            <star v-if="seller.score" :size="48" :score="seller.score"></star>
             <!--分割线-->
            <div class="devide">
              <p class="line"></p>
              <p class="words">优惠信息</p>
              <p class="line"></p>
            </div>
             <!-- 优惠信息 -->
            <ul v-if="seller.supports" class="detail-support">
              <li v-for="(item,index) in seller.supports" class="support-item" >
                <span class="item-pic" :class="classMap[item.type]"></span> 
                <span class="item-text">{{item.description}}</span>
              </li>
            </ul>
             <!--分割线-->
             <div class="devide">
              <p class="line"></p>
              <p class="words">商家公告</p>
              <p class="line"></p>
            </div>
             <!--商家公告-->
            <div class="detail-ad">
                <p class="ad-content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <!--sticty footer-->
        <div class="detail-close" @click="showDetail()">X</div>
       </div>
       </transition>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  name:'headerVue',
  components:{
    star:star
  },
  props:{
    //接收父组件数据
    seller:{
      type:Object
    }
  },
  
  created:function(){
    console.log(this.seller)
    //创建映射
    this.classMap = ["decrease",'discount','special','invoice','guarantee']
    console.log(this.classMap)
  },
 data:function(){
   return{
     detailShow:false
   }
 },
 methods:{
   //弹出框显示&关闭方法
   showDetail:function(){
     console.log(1)
     if(this.detailShow == true){
       this.detailShow = false
     }else{
       this.detailShow = true
     }
     
   },
   
 }
}
</script>

<style>
/* 整体效果 */
.header{
   height: 134px;
   width: 100%;
   background-color: rgba(7,17, 27, 0.5) ;
   position: relative;
   overflow: hidden;
}
/*头部开始*/
.headerTop{
    height: 82px;
    padding: 24px 24px 0 24px;
}
    /*公告*/
.seller-ad{
    height: 28px;
    padding: 0 12px 0 12px;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.2);
 }
 /* 商家头像 */
.seller-pic{
  float: left;
  margin-right:16px
  }
.seller-pic img{
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 4px
}
/* 商家详情开始 */
.seller-name{
  float: left;
  margin-top:2px;
  }
 /*第一排名称 */
.seller_name{
  margin-bottom: 8px;
  overflow: hidden
  }
 /* 品牌图片 */
 .seller-name .seller-img{
  float: left;
  display: block;
  width: 30px;
  height: 18px;
  margin-right: 6px;
  border-radius: 2px;
  background-size: 30px 18px;
  background-image: url('./imgs/pinpai.png');
  background-repeat: no-repeat
 }

  /* 商家名称 */
.seller-name .name{
  float: left;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 18px
}
/*  商家送达时间 */
.seller-name .des{
  font-size: 12px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 12px;
  text-align: left;
  margin-bottom: 10px
}
/* 商家满减活动*/
.seller-name .reduceMsg .icon-jian{
  display: block;
  float: left;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  border-radius: 2px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  
}
.reduceMsg .reduce_msg{
  text-align: left;
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 12px
}
/* 右侧按钮 */
.seller-name .seller-right{
  position: absolute;
  top: 64px;
  right:12px; 
  height:24px;
  width: 40px;
  border-radius: 16px 14px;
  background-color: rgba(0, 0, 0, 0.2)
}

.seller-right span{
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 24px
}
/* 公告 */
.seller-ad{position: relative}
.seller-ad .ad-img{
  display: block;
  float: left;
  width: 22px;
  height: 12px;
  margin-right: 4px;
  margin-top: 8px;
  background-image: url('./imgs/ad.png');
  background-size:  22px 12px;
  background-repeat:  no-repeat;
}
.seller-ad .advertisement{
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 28px;
  text-align: left;
  text-overflow: ellipsis;
white-space: nowrap;  
}
.seller-ad .hide_ad{
  position: absolute;
  right: 12px;
  top:0;
  color:rgb(255, 255, 255);
  font-weight: 200;
  line-height: 28px;

}
/*毛玻璃效果*/
.background img{
  width: 100%;
  height: 100%;
}
.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px)
}
/*弹出框整体*/
.detail{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.8);
  
}

/*弹出框上部*/
.detail .detail-wrapper{
  min-height: 100%;
  width: 100%
}
/*弹出框主要内容*/
.detail .detail-main{
  margin-top: 64px;
  padding-bottom: 64px
}
/*弹出框商家名称*/
.detail-main .detail-name{
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 16px
}
/*弹出框底部关闭部分*/
.detail .detail-close{
  position: relative;
  height: 32px;
  width: 32px;
  margin:-64px auto 0 auto;
  clear: both;
  font-size: 32px;
  color: rgba(255, 255, 255,0.5)
}
/*分割线*/
.detail .devide{
  display: flex;
  margin-top: 28px;
  padding: 0 36px
}
.devide .line{
  flex: 1;
  position: relative;
  top: -6px;
  border-bottom: 1px solid  rgba(255, 255, 255,0.2)
}
.devide .words{
  margin:0 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: rgb(255, 255, 255)
}
/* 商家活动 */
.detail .detail-support{
  width: 80%;
  margin: 24px auto 0 auto;
}
.detail-support .support-item{
  padding: 0 12px;
  margin-bottom: 12px;
  text-align: left
}

.support-item:last-child{margin-bottom: 28px}
.support-item .item-pic{
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: top;
  margin-right: 6px;
  background-size: 16px 16px ;
  background-repeat:no-repeat;
}
 .decrease{
  background-image: url('./imgs/jian.png')
}
 .discount{
  background-image: url('./imgs/discount_2@2x.png')
}
 .guarantee{
  background-image: url('./imgs/guarantee_2@2x.png')
}
 .invoice{
  background-image: url('./imgs/invoice_2@2x.png')
}
 .special{
  background-image: url('./imgs/special_2@2x.png')
}
.support-item .item-text{
  font-size: 12px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  line-height: 12px;
  text-align: left
}
/*弹出框公告*/
.detail-ad{
  width: 80%;
  margin:24px  auto 0 auto;
  
}
.detail-ad .ad-content{
  padding: 0 12px;
  font-size: 12px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  line-height: 24px;
  text-align: left
}
/* 清除浮动*/
.clearfix{
  display: inline-block
}
.clearfix:after{
  display: block;
  content: "";
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden;
}
/*动画效果*/
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

</style>
