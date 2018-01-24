<template>
  <div id="app">
    <header-vue :seller="seller"></header-vue>
    <nav-vue></nav-vue>
    
  </div>
</template>

<script>
import headerVue from './components/header/header'
import navVue from './components/nav/nav'
export default {
  name: 'App',
  components:{
    headerVue:headerVue,
    navVue:navVue
  },
  data:function(){
    return{
      seller:{}
    }
  },
  created:function(){
    var _this =this;
    this.$http.get('/msg').then(function(res){
      console.log(res.data.seller)
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
