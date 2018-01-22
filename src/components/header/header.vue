<template>
  <div class="header">
    <div class="headerTop">
      <div class="seller-pic">
        <img v-bind:src="src" alt="">
      </div>
      <div class="seller-name">
          <div class="seller_name">
            <img src="./pinpai.png" alt="">
            <p class="name">{{name}}</p>
          </div>
          <p class="des">{{des}}/{{time}}分钟送达</p>
          <div class="reduceMsg">
             <img src='./jian.png' alt="">
             <p class="reduce_msg">{{reduceMsg}}</p>
          </div>
          
          <div class="seller-right">
            <span>{{count}}个</span> 
            <span>&gt;</span>
            </div>
          
      </div>
    </div>
      <div class="seller-ad">
        <img src='./ad.png'  alt="">
        <p class="advertisement">{{advertisement}}</p>
        <p class="hide_ad">&gt;</p>
      </div>
  </div>
</template>

<script>

export default {
  name:'headerVue',
  data:function(){
    return{
     src:'',
     name:'',
     des:'',
     time:'',
     reduceMsg:'',
     advertisement:'',
     count:''
    }
  },
  created:function(){
    var _this =this;
    this.$http.get('/msg').then(function(res){
      console.log(res.data.seller)
      _this.src = res.data.seller.avatar;
      _this.name = res.data.seller.name;
      _this.des = res.data.seller.description;
      _this.time =res.data.seller.deliveryTime;
      _this.reduceMsg =res.data.seller.supports[0].description;
      _this.advertisement = res.data.seller.bulletin;
      _this.count = res.data.seller.supports.length
    }).catch(function(err){
      console.log(err)
    })
  }
}
</script>

<style>
.header{
   height: 134px;
   width: 100%;
   background-color: rgba(7,17, 27, 0.5) ;
   position: relative;
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
</style>
