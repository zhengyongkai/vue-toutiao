<template>
  <div class="body">
      <v-header class="header" :hidden="$route.meta.header==true"></v-header>
      
      <div :class="$route.meta.header?'divhidden':'div'" >
          <router-view  class="router-view">
          </router-view>
     </div>
     
      <tabbar class="bottom"></tabbar>
  </div>

  
</template>



<script  >
import Tabbar from "@/components/tabbar.vue"

import vHeader from '@/components/Header.vue'
import { Divider, Card } from 'vux'
import { Swiper } from 'vux'
import { Loadmore } from 'mint-ui';




export default {

  data () {
    return {
     

    }
  },
  components:{
   
     "Tabbar":Tabbar,
    Card,
    Divider,
    Swiper,
    vHeader ,
    Loadmore,
  },
  mounted(){
   
  },
   methods: {
    
    demo01_onIndexChange (index) {
      
      this.demo01_index = index
    },
    handleScroll () {
       this.scroll  = document.documentElement &&  document.documentElement.scrollTop

       console.log(this.scroll)
     },
  },
}
</script>

<style scoped lang="less">

div{

}


#app{
  margin: 0px;
  padding: 0px;
 
}

.header{
     
	overflow-y:hidden;
  

  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;

}

.div{

    position:absolute;
    left:0;
    top:80px;
    right:0;
    bottom:50px;  //left,top,right,bottom都为0，充满真个页面
    overflow-y:auto;
    overflow-x:hidden; //设置Y轴出现滚动条，X轴隐藏
  

  
}
.divhidden{
    position:absolute;
    left:0;
    top:0px;
    right:0;
    bottom:50px;  //left,top,right,bottom都为0，充满真个页面
    overflow-y:auto;
    overflow-x:hidden; //设置Y轴出现滚动条，X轴隐藏
}

 
/*兼容IE*/
.div,.divhidden{
    scrollbar-face-color: #20a774;/*移动滑块颜色*/
    scrollbar-shadow-color: #20a774;/*移动滑块边框颜色*/
    scrollbar-track-color: #ccc;/*背景颜色*/
    scrollbar-arrow-color: #ddd;/*箭头颜色*/

}
.div::-webkit-scrollbar-track,.divhidden::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #ccc;
}/* 滚动条的滑轨背景颜色 */
.div::-webkit-scrollbar,.divhidden::-webkit-scrollbar
{
    width: 6px;
    background-color: #ccc;
}
 
.div::-webkit-scrollbar-thumb,.divhidden::-webkit-scrollbar-thumb
{
    background-color: #20a774;
}/* 滑块颜色 */






</style>