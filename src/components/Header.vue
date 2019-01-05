<template>
  <div>
      <div  class="app">
            <div class="header">
              <x-icon type="ios-search" style="margin:2px  4px;width:20px;" size="25"></x-icon>
              <input >
              <font >热搜</font>
            </div>    
            <div class="navbar">
                <ul>
                    <li >
                        <router-link to="/love" style="color:red" >
                            关注
                        </router-link>
                    </li>
                    <li><router-link to="/hot" >
                            热搜
                        </router-link></li>
                    <li>
                        <router-link to="/local" >本地
                        </router-link>    
                    </li>    
                    <li>
                        <router-link to="/service" >
                        服务
                        </router-link>

                    </li>
                    <li>
                          <router-link to="/video" >视频
                        </router-link>    </li>    
                    <li>
                         <router-link to="/gossip" >八卦
                         </router-link>    
                     </li>    

                    <font style="opacity: 0.1;">|</font>
                     <div style="float:right">
                     <x-icon type="ios-plus-outline"></x-icon>
                     </div>
                </ul>    
               
               
            </div>
      </div>
  </div>
</template>
 




<script>

import { Box, Icon ,Search } from 'vux'



export default {
  name: 'app',

   data () {
    return {
      value:"",
        results: [],
      value: 'test',
      background:"#09BB07"

    }
  },
  created:function(){
    
  },

  components:{
      Icon,
      Search

  
  },
  watch:{
         $route(to) {
           $('a').each(function(){
                var href = $(this).attr('href');
                if("#/"+to.name==href){
                 
                    $(this).parents().siblings().find("a").css("color","black")
                    $(this).css("color","red")
                    
                }
            });
            
         }
  }
  ,methods:{
      change(){

      },
       setFocus () {
   
        },
        resultClick (item) {
        
        },
        getResult (val) {
        
        },
        onSubmit () {
    
        },
        onFocus () {
        console.log('on focus')
        },
        onCancel () {
        console.log('on cancel')
        },


      
  },mounted(){
      


    

  }
}
</script>
<style  scoped>
.app{
  margin: 0px;
  padding: 0px;
 height: 40px;
 background: red;
   z-index: 999;
 

}


.app .header{
    border: 0.5px solid #ffffff; 
    border-radius: 2px;
    height: 28px;
    background: #ffffff;
    position: relative;


    top: 5px;
    width:92%;
    margin:0  4%;
}



.app .header input{
    position: relative;
    outline:none;
    bottom: 10px;
    border: 0px;
    width: 75%;
}


input :focus{
    border:0.5px solid #fff;
}
.app .header font{
    position: relative;
    line-height: 28px;
    margin-right: 10px;
    color: red;
    text-shadow:0.5px 0.5px 0px red;
    float:right
}


.navbar{
   width: 100%;
   height: 30px;
   border-bottom: 0.5px solid lightgray;
}

.navbar ul{
  position: relative;
  left: -20px;;
  
}

.navbar  ul li{

list-style-type:none;
width: 15%;
float: left;

}


li :hover{
    color:red;

}




a {
    color: black;
    text-decoration: none;
}

</style>

