import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { get } from 'http';

Vue.prototype.$http=axios
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        seller:{},
    },
    mutations:{
        //赋值state
        initstate(state,obj){
            state.seller = obj
            console.log(state)
        },
    },
    actions:{
        //获取后台数据
        getState({commit}){
            this.$http.get('/msg').then(function(res){
                commit('initstate',res)
              }).catch(function(err){
                console.log(err)
              })
              }
          
         
       

        }
   
})
