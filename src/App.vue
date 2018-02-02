<template>
  <div id="app">
    <header-vue :seller="seller"></header-vue>
    <nav-vue></nav-vue>
    <keep-alive>
    <router-view :seller='seller' ></router-view>
    </keep-alive>
  </div>
</template>

<script>
//import {urlParse} from './components/common/js/url'
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
      seller:{
        id:( () => {
          let queryParam = urlParse();
          console.log(queryParam);
          return queryParam.id
        })()
      }
    }
  },
  created:function(){
    //获取seller数据
    var _this =this;
    this.$http.get('/msg').then(function(res){
      _this.seller = res.data.seller;
      console.log(_this.seller)
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
