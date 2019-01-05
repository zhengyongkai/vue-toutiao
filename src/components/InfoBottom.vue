<template>

    <div class="app">

        <div class="content">
            <input class="conment " placeholder= "  写评论..">  
            <font>
                 
                <mt-badge>
                    <i class="fa fa-commenting">
                        {{logo.comment_count}}
                    </i>
                </mt-badge>
        
                 <mt-badge type="error">
                    <i class="fa fa-heart-o" >
                        {{logo.repin_count}}
                    </i>
                </mt-badge>

                <i class="fa fa-share share" @click="share"  >
                        
                </i>
        
        
            </font>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
        .app{
            background :white;
        }
        .content{
            width :92%;
            margin :0 3%;
            .conment{
                outline:none;
                height :20px;
                line-height :20px;
                margin :5px 0;
                width :150px;
                border :0px;
                
                background-color :lightgray;

            }
            .share{
                float:right;
                 line-height :30px;
            }
        }
</style>

<script>
  import { Toast, MessageBox } from 'mint-ui';
import { Badge } from 'mint-ui';

  export default {
    name: 'app',

    data() {
      return {
      
      };
    },
 components: {
    Badge
   
  },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      share(){
          this.$emit("share","ss")
         
      }
    },
        props: ['logo']
  };
</script>