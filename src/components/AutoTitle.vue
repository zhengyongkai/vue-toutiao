<template>
    <div  >

        <div class="body">
            <div class="header">

                <div class="icon">
                    <x-icon type="ios-arrow-left" size="28" @click="back"></x-icon>
                </div>
                <div class="content">
                    
                       <font class="title">{{logo.media_info.name}}</font>
                </div>
               <div class="love"> 关注</div>
      
              
            </div>
        </div>
    </div>
</template>


<style lang="stylus" scoped>

    .body{
      
        width :100%;
          margin: 0px;
            padding: 0px;
           background :white;
   
            height :35px;
            position:fixed;

            overflow-y:hidden;
  
    .icon{
        position:relative;
       line-height :40px;
       
    }
    
    .header{
        margin: 0px;
        padding: 0px;
        height: 40px;
            
     

            width:92%;
            margin:0  3%;
             float:left;
            

        div{
            display:inline;
        }
          
    
      
        .content{
            .title{
                position:relative;
                left :20px;
                bottom :5px;
              
            }
           
            

            font{
                
                line-height :30px;
                font-size :15px;  
            }
           
               
                
             
        }



        .search{
            float:right;
             margin :5px 0;

        }

        .title{

           
        }

         .love{
                   float:right;
                   cursor:pointer;
                   width :60px;
                   height :25px;
                   border-radius :5px;
                    line-height :25px;
                   background :red;
                   text-align:center;
                   color:#fff;
                   font-size :12px;
                   margin :7.5px 0;
            }
            
       
    }

    }
</style>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'app',

    data() {
      return {
       
      };
    },
    mounted(){
        
    },

    methods: {
     
      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },
      back(){
          this.$router.go(-1)
      }
    },
      props: ['logo']
  };
</script>