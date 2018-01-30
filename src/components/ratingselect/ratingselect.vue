<template>
 <div class="ratings-box">
     <!--评价类型-->
     <div class="rating-type">
        <p class="all">{{desc.all}}</p>
        <p class="positive">{{desc.positive}}</p>
        <p class="negative">{{desc.negative}}</p>
    </div> 
    <!--只显示有内容评价-->
    <div class="rating-switch">
        <span class="switch-icon">√</span>
        <span class="switch-text">只看有内容的评价</span>
    </div>
    <ul>
        <li v-for="rating in ratings">
            <div class="rating-left">
                <p class="left-time">{{rating.rateTime}}</p>
                <p class="left-rating">{{rating.text}}</p>
            </div>
            <div class="rating-right">
             <span class="right-phone">{{rating.username}}</span>
             <p>
                 <img :src="rating.avatar" alt="">
             </p>
            </div>
        </li>
    </ul>
</div>
  
</template>

<script>
var positive = 0;
var negative = 1;
var all = 2
export default {
props:{
    ratings:{
        type:Array,
        default:function(){
            return []
        }
    },
    //默认为全部显示
    selectType:{
        type:Number,
        default: all
    },
    //只显示有内容的评价
    onlyContent:{
        type:Boolean,
        default:false
    },
    //描述
    desc:{
        type:Object,
        default:function(){
            return{
                all:"全部",
                positive:'满意',
                negative:'不满意'
            }
        }
    }
}  
}
</script>

<style>
/*  评价类型按钮 */
.ratings-box .rating-type{
    width: 100%;
    margin: 0 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    overflow: hidden;
   }
.ratings-box .rating-type p{
    float: left;
    height: 32px;
    width: 60px;
    margin-right: 8px;
    text-align: center;
    font-size: 12px;
    line-height: 32px;
    color: rgb(77, 85, 93)
}
.ratings-box .all{
    background-color:rgb(0, 160, 220);
    border-radius: 2px
    }
.ratings-box .positive{
    background-color: rgba(0, 160, 220,0.2)
}
.ratings-box .negative{
    background-color: rgba(77, 85, 93, 0.2)
}
/*只看有内容的评价*/
.rating-switch{
    padding: 12px 0 12px 18px;
    border-bottom: 1px solid rgba(7, 17, 27,0.1)
     }
.rating-switch .switch-icon{
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    background-color: gray;
    color: #fff;
    text-align: center
    }
.rating-switch .switch-text{
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 24px
}
</style>
