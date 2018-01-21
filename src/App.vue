<template>
  <div id="app">
    <header-vue></header-vue>
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
.active{
  color: rgb(240, 20, 20)
}
</style>
