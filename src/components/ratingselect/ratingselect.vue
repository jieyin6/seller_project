<template>
 <div class="ratings-box">
     <!--评价类型-->
     <div class="rating-type">
        <p class="all" :class="{'active':selectType === 2}"
        @click="select(2,$event)">{{desc.all}}
            <span>{{ratings.length}}</span>
        </p>
        <p class="positive" :class="{'active':selectType === 0}"
        @click="select(0,$event)">{{desc.positive}}
            <span>{{positives.length}}</span>
        </p>
        <p class="negative" :class="{'active-gray':selectType === 1}"
        @click="select(1,$event)">{{desc.negative}}
            <span>{{negatives.length}}</span>
        </p>
    </div> 
    <!--只显示有内容评价-->
    <div class="rating-switch" @click="toggleContent">
        <span class="switch-icon" :class="{'on':onlyContent == true}">√</span>
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
} ,
computed:{
    positives:function(){
       return this.ratings.filter((rating) => {
            return rating.rateType === positive
        })
        
    },
   
    negatives:function(){
        return this.ratings.filter((rating) => {
            return rating.rateType === negative
        })
    }
},
methods:{
    select:function(type,event){
        this.selectType = type;
        this.$emit('typeSelect',type)
    },
    toggleContent:function(event){
        this.onlyContent = !this.onlyContent;
        this.$emit('contentToggle',this.onlyContent)
    }
} 
}
</script>

<style>
/*  评价类型按钮 */
.ratings-box .rating-type{
    width: 100%;
    margin: 0 18px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    overflow: hidden;
   }
.rating-type p{
    float: left;
    height: 32px;
    width: 60px;
    margin-right: 8px;
    text-align: center;
    font-size: 12px;
    line-height: 32px;
    color: rgb(77, 85, 93);
    border-radius: 2px
}
.rating-type p span{
    font-size: 8px
}
.all{
     background-color: rgba(0, 160, 220,0.2);
     }
 .positive{
    background-color: rgba(0, 160, 220,0.2)
}
 .negative{
    background-color: rgba(77, 85, 93, 0.2)
}
.rating-type .active{
    color: #fff;
      background-color:rgb(0, 160, 220);
      }
.rating-type .active-gray{
    color: #fff;
     background-color: rgb(77, 85, 93)
}
/*只看有内容的评价*/
.rating-switch{
    padding: 12px 0 12px 18px;
    border-bottom: 1px solid rgba(7, 17, 27,0.1);
    text-align: left
     }
 .switch-icon{
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    background-color: gray;
    color: #fff;
    text-align: center
    }
 .rating-switch .on{
    background-color: #00c850
}
.rating-switch .switch-text{
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 24px
}
</style>
