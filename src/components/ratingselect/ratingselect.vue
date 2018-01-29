<template>
 <div class="ratings-box">
     <!--评价类型-->
     <div class="rating-type">
        <p class="all">{{des.all}}</p>
        <p class="positive">{{des.positive}}</p>
        <p class="negative">{{des.negative}}</p>
    </div> 
    <!--只显示有内容评价-->
    <div class="rating-switch">
        <span class="switch-icon">√</span>
        <span class="switch-text">只看有内容的评价</span>
    </div>
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
    des:{
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

</style>
