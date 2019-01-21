<template>
<div>
    <div class="title">
        <div> <img :src="comment.user.avatar_url"></div>
        <div class="content">
              <div class="title-title">
                {{comment.user.name}}
            </div>
             <div class="digg_count">
               <mt-badge type="error">
                    <i class="fa fa-heart-o">
                        {{comment.digg_count}}
                    </i>
                </mt-badge>
                <mt-badge>
                    <i class="fa fa-commenting">
                        {{comment.reply_count}}
                    </i>
                </mt-badge>
        
                 
            </div>
            <br>
            <div class="title-content" >
                {{comment.text|text}}
            </div>
           
        </div>
    </div>
    <br>
</div>
</template>

<script>

  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'app',

    data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },
        strlen(str){
            var len = 0;
            for (var i=0; i<str.length; i++) { 
            var c = str.charCodeAt(i); 
            //单字节加1 
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
            len++; 
            } 
            else { 
            len+=2; 
            } 
            } 
            return len;
        }
    },
     filters: {
        
         text:(text)=>{
               var len = 0;
                    for (var i=0; i<text.length; i++) { 
                    var c = text.charCodeAt(i); 
                    //单字节加1 
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
                    len++; 
                    } 
                    else { 
                    len+=2; 
                    } 
                } 

                if(len>=100){
                    return   text.substring(0,50) +"..." 
                }else{
                    return text;
                }
         }
     },
     props: ['comment']
  };

</script>

<style lang="less" scoped>
    .title{
        width: 100%;
        .content{
            float: left;
            width: 80%;
        }
        img{
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
        .digg_count{
            float: right;
        }
        div{
             float: left;
        }
        .title-title{
            color:blue;
            font-size: 13px;
    
            
        }
        .title-content{
            font-size:15px;
            
        }

    }
</style>
