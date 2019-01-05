<template>
    <div  >

        <div class="body">
            <div class="header">

                <div class="icon">
                    <x-icon type="ios-arrow-left" size="28" @click="back"></x-icon>
                </div>
                <div class="content">
                        <span class="title">  今日头条       </span>
                </div>
                <div class="search">
                    <x-icon type="ios-search" size="28"></x-icon>
                </div>
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
            color: red;
            height :40px;
            position:fixed;

            overflow-y:hidden;
  
    
    .header{
        margin: 0px;
        padding: 0px;
        height: 40px;
            
     

            width:92%;
            margin:0  3%;
             float:left;
             text-align :center;

        div{
            display:inline;
        }
          
        .icon{
             float:left;
            margin :5px 0;
        } 
      
        .content{
           
             text-shadow:0.5px 0.5px 0px red;
           line-height :40px;
           
               
                
             
        }

        .search{
            float:right;
             margin :5px 0;

        }

        .title{

           
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

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },
      back(){
          this.$router.go(-1)
      }
    }
  };
</script>