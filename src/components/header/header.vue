<template>
  <div class="header">
    <div class="headerTop">
      <div class="seller-pic">
        <img v-bind:src="seller.avatar" alt="">
      </div>
      <div class="seller-name">
          <div class="seller_name">
            <img src="./pinpai.png" alt="">
            <p class="name">{{seller.name}}</p>
          </div>
          <p class="des">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
          <div class="reduceMsg" v-if="seller.supports">
             <img src='./jian.png' alt="">
             <p class="reduce_msg">{{seller.supports[0].description}}</p>
          </div>
          
          <div class="seller-right" v-show="showDetail()" v-if="seller.supports">
            <span>{{seller.supports.length}}个</span> 
            <span>&gt;</span>
            </div>
          
      </div>
    </div>
      <div class="seller-ad" v-show="showDetail()">
        <img src='./ad.png'  alt="">
        <p class="advertisement">{{seller.bulletin}}</p>
        <p class="hide_ad">&gt;</p>
      </div>
      <div class="background">
        <img v-bind:src="seller.avatar" alt="">
      </div>
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix" >
          <div class="detail-main">
            <p class="detail-name">{{seller.name}}</p>
            <star :size="48" :score="seller.score"></star>
          </div>
        </div>
        <div class="detail-close" >
          <i class="icon-close"></i>
        </div>
      </div>
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
    seller:{
      type:Object
    }
  },
 data:function(){
   return{
     detailShow:false
   }
 },
 methods:{
   showDetail:function(){
     console.log(1);
     this.detailShow = true
   },
   
 }
}
</script>

<style>

.header{
   height: 134px;
   width: 100%;
   background-color: rgba(7,17, 27, 0.5) ;
   position: relative;
   overflow: hidden;
   /*filter: blur(10px)*/
}
.headerTop{
    height: 82px;
    padding: 24px 24px 0 24px;
    }
.seller-ad{
    height: 28px;
    padding: 0 12px 0 12px;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.2);
   
}
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
.seller-name{
  float: left;
  margin-top:2px;
  }

.seller_name{
  margin-bottom: 8px;
  overflow: hidden
  }
.seller-name img{
  float: left;
  display: block;
  width: 30px;
  height: 18px;
  margin-right: 6px;
  border-radius: 2px
  }
.seller-name .name{
  float: left;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 18px
}
.seller-name .des{
  font-size: 12px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 12px;
  text-align: left;
  margin-bottom: 10px
}
.seller-name .reduceMsg img{
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px
}
.reduceMsg .reduce_msg{
  text-align: left;
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 12px
}
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
.seller-ad{position: relative}
.seller-ad img{
  display: block;
  float: left;
  width: 22px;
  height: 12px;
  margin-right: 4px;
  margin-top: 8px
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
.detail{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.8)
}
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
.detail .detail-wrapper{
  min-height: 100%;
  width: 100%
}
.detail .detail-main{
  margin-top: 64px;
  padding-bottom: 64px
}
.detail-main .detail-name{
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 16px
}
.detail .detail-close{
  position: relative;
  height: 32px;
  width: 32px;
  margin:-64px auto 0 auto;
  clear: both;
}
</style>
