import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { get } from 'http';
import { Script } from 'vm';

Vue.prototype.$http=axios
Vue.use(Vuex)



const state = {
        seller:{}
    }
const mutations={
        //赋值state
        initstate(state,obj){
            state.seller = obj
            console.log(state)
        }
    }
const actions={
        //获取后台数据
        getState({commit}){
            this.$http.get('/msg').then(function(res){
                commit('initstate',res)
              }).catch(function(err){
                console.log(err)
              })
              }
          
         
       }
export default new Vuex.Store({
    state,
    mutations,
    actions
    })

