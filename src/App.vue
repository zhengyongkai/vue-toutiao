<template>
  <div id="app">
    
    <div class="routerview">
      <transition name="fade">
      
        <keep-alive>
          
            <router-view  v-show="isShow"  transiton="fade"></router-view>
        </keep-alive>
       </transition>
    </div>
  

  </div>
</template>
 
<script>
import vHeader from '@/components/Header.vue'
import { XHeader,Group, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
import { XInput } from 'vux'
import Tabbar from "@/components/tabbar.vue"



export default {
  name: 'app',

   data () {
    return {
      value:"",
      scroll:"",
      isShow:true
     


    }
  },
  created:function(){
    this.$router.push('/')
  },

  components:{
    Tabbar,
    XHeader,
     XInput,
     Group,
     vHeader
  }
  , methods: {
    
    demo01_onIndexChange (index) {
      
      this.demo01_index = index
    },
     
     
       


  },
  mounted(){
   
     
       

  }
}
</script>
<style >
.routerview{
  
}
#app{
    
  margin: 0px;
  padding: 0px;
}

#header{
  margin-bottom: 10px;
  


}

hr{
  background-color:#C0C0C0;border:0px ;
}

body,html{
  
	/*max-width: 760px; */
	/*min-width: 320px; */


	font-size: 100% !important;
	font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
}

@media screen and(min-width: 769px) {
  html, body {
    width: 460px;

  }
  body{
    
    box-shadow: 0 0 30px gray;
  }
}


  /* 开始过渡阶段,动画出去阶段 */
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-out;
}
/* 进入开始 */
.fade-enter{
  
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
 
  opacity: 0;
}

</style>

