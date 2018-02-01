<template>
  <div id="app">
    <header-vue :seller="seller"></header-vue>
    <nav-vue></nav-vue>
    <router-view :seller='seller'></router-view>
  </div>
</template>

<script>
import headerVue from './components/header/header'
import navVue from './components/nav/nav'
//import store from './vuex/vuex/store'
//import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    headerVue:headerVue,
    navVue:navVue,
    },
  /*  computed:{
      ...mapState(['seller'])
    },
    methods:{
      ...mapMutations(['initstate']),
      ...mapActions(['getState'])
    }*/
  data:function(){
    return{
      seller:{}
    }
  },
  created:function(){
    //获取seller数据
    var _this =this;
    this.$http.get('/msg').then(function(res){
      _this.seller = res.data.seller
    }).catch(function(err){
      console.log(err)
    })
    }            

  }
 

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
