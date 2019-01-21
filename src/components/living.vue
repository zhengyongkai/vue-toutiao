<template>
<div>
    <div v-if="logo==true">
        <div class="living"></div>
        <div class="box1-item">
            <img :src="content.media_info.avatar_url" >
         
        </div>
    </div>
    <div v-else>
        <div class="box1-item">
                 <img :src="content.media_info.avatar_url" >
        </div>
    </div>
</div>
</template>

<script>
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore,Badge } from 'vux'
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'app',

    data() {
      return {
       
      };
    },

    methods: {
    },
    components: {
       
        Badge,
       
    },
     props: ['logo','content']
  };
</script>
<style lang="stylus" scoped>
    .living{
        border-radius :50%;
        position :absolute;
        border :1.5px solid 	#FF6347;
        width:55px;;
        height :55px;
        animation:mymove 5s infinite;
        -webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
        animation-direction:alternate;/*轮流反向播放动画。*/
        animation-timing-function: ease-in-out; /*动画的速度曲线*/
        /* Safari 和 Chrome */
        -webkit-animation:mymove 5s infinite;
        -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
        -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/

        
    }

    .box1-item {
            position:relative;
            
           

            img{
                text-align :center;
                 border-radius:50%;
                 border :1.5px solid lightgray;
                width: 54px;
                background :lightgray;
            margin :1px;

                text-align :center;
               
            
            }
            .badge{
                position:absolute;
                
                margin: 0 auto;
                right :40px;
                top:50px;

                font-size :12px;
            }
           
        }
        

            @keyframes mymove
            {
                0%{
                transform: scale(1);  /*开始为原始大小*/
                }
                25%{
                    transform: scale(1.1); /*放大1.1倍*/
                }
                50%{
                    transform: scale(1);
                }
                75%{
                    transform: scale(1.1);
                }

            }
            
            @-webkit-keyframes mymove /*Safari and Chrome*/
            {
                0%{
                transform: scale(1);  /*开始为原始大小*/
                }
                25%{
                    transform: scale(1.1); /*放大1.1倍*/
                }
                50%{
                    transform: scale(1);
                }
                75%{
                    transform: scale(1.1);
                }
            }
      
</style>
