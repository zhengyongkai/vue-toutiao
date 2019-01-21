import Vue from 'vue'

import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const module = {
    state: {
        data:[],
        lasttime:"",
        user: {
            name: 'rookie',

           

        }
    },
    getters: {
      
        loading: state => state.loading,
        background: state => state.background,
    },
    mutations: {
        setUser(state, payload){
            if(payload.hasOwnProperty('name')){
                state.user.name = payload.name
            }
        },
        getApi(state,kind){
            
            axios.get("/list/?tag="+kind.kind+"&ac=wap&count=1&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time="+parseInt((new Date().getTime()) / 1000)).then((res)=>{
                console.log(res)
                state.data=res.data.data
            })
        },
        
        
        
    },
    plugins: []
}


const store = new Vuex.Store(module)
export default store