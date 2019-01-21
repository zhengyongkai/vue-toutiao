<template>
<div  >

    <transition name="fade">
            <div class="header" :loading="loading" >
                <info-title :hidden="Istitle" ></info-title>
                <auto-title :hidden="!Istitle" :logo="params"></auto-title>
            </div>
    </transition>                       
    
   
        <div class="div">
             <div class="item">
                <div class="items">
                    <div class="title">
                        <b> {{title}}</b>
                    </div>
                    <br>
                    <div class="content">
                        <div class="content_header">
                            <router-link
                                :to="{
                                    name:'autor',
                                    params:
                                        {   aid:media_info.avatar_url
                                        }
                                }"
                            >
                                <div><img :src=media_info.avatar_url  width="50px" class="icon"></div>
                            </router-link>
                            <div>
                                <div><font>{{media_info.name}}</font></div>
                                <br>
                                <br>
                                <div class="time"><font>{{params.datetime}}</font></div>
                        
                            </div>
                             <div class="love"> 关注</div>                                                                     
                            
                        </div>
                        <div class="newsinfo"  v-html=" newsInfo">
                           
                        </div>
                        
                        </div>
                      

                         <div class="comment" v-for="(index,i) in comment">
                             
                            <comment :comment="index"></comment>
                             <br>
                        </div>
                </div>
            </div>
            
    </div>
  
        

  <info-bottom class="bottom" :logo="params"></info-bottom>
</div>
</template>

<style lang="stylus"  scoped>

.header{
     
    overflow-y:hidden;
    position: fixed;
    top: 0px;
    height :30px;
    z-index: 999;
}

.bottom{
    position: fixed;
    left: 0px;
    bottom: 0px;
     width: 100%;
   
    
     z-index: 9999;


}

.div{

    position:absolute;
    margin-bottom :50px;
    left:0;
 
    top:80px;
    right:0;
    bottom:0; 
    overflow-y:auto;
    overflow-x:hidden; 
    height :auto;




    .item{
        width :92%;
        margin:0 3%;
    }
       .icon{
            width :50px;
            border-radius :50px;
         
        }
        .title{
            
            font-size :20px;
        }
        .content{
            margin-bottom :50px;
            clear:both;

            div{
               float: left;
                
               .time{
                   font-size :12px;
               }

               
            }
            .love{
                 
                   cursor:pointer;
                   width :60px;
                    height :25px;
                    line-height :25px;
                    border-radius :5px;
                   background :red;
                   text-align:center;
                   color:#fff;
                   font-size :12px;
                    position:absolute;
                    right:4%;
                   
            }
            .newsinfo{
                  width :100%;

                    
                    >>>img{
                        margin-right :20px; 
                        width :100%;
                    }
                
            }
            .content_header{
                margin-bottom :10px;
                img{
                    margin-right :20px;
                }
                
            }

            .content_bottom{
                border:1px solid gray;
                display:block;
                width :100%;
                clear:both;
            }

            
        }
        .comment{
            margin-top :50px;
        }



  
    
}
 
/*兼容IE*/
.div{
    scrollbar-face-color: #20a774;/*移动滑块颜色*/
    scrollbar-shadow-color: #20a774;/*移动滑块边框颜色*/
    scrollbar-track-color: #ccc;/*背景颜色*/
    scrollbar-arrow-color: #ddd;/*箭头颜色*/
}
.div::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #ccc;
}/* 滚动条的滑轨背景颜色 */
.div::-webkit-scrollbar
{
    width: 6px;
    background-color: #ccc;
}
 
.div::-webkit-scrollbar-thumb
{
    background-color: #20a774;
}/* 滑块颜色 */


.items{
    height :1000px;
}
.bottom{
      margin-top: 50px;
}
.comment{
   
    clear: both;
    display:block;
    margin-top  :30px;
}
</style>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  import InfoTitle from '@/components/InfoTitle.vue'
    import comment from '@/components/comment.vue'
  import InfoBottom from '@/components/InfoBottom.vue'
  import AutoTitle from '@/components/AutoTitle.vue'
    import share from '@/components/share.vue'
import axios from 'axios'
import jsonp from 'jsonp'

  export default {
    name: 'app',

    data() {
      return {
        media_info:this.$route.params.media_info,
        title:this.$route.params.title,
        params:this.$route.params,
        scroll:"",
        Istitle:false,
        newsInfo:"",
        loading:true,
        comment:[]
      };
    },
    watch:{


    },
    
    components: {
         InfoTitle,
        InfoBottom,
        AutoTitle,
        share,
        comment
    },
    mounted () {   
        window.addEventListener('scroll',this.handleScroll,true)
    },   
    methods: {
     handleScroll(e){
         console.log(e.target.scrollTop)
        if(e.target.scrollTop >= 124){
           this.Istitle=true
        }else{
            this.Istitle=false
        }

      },
      getApiContent(){
            var url = this.params.source_url+ 'info/';
            var comment="/api/comment/list/?group_id="+this.params.group_id+"&item_id="+this.params.item_id+"&offset=0&count=10"
            //获取内容
            axios.get(url).then((result) => {
                this.newsInfo=result.data.data["content"];
                
            }).catch((err) => {
                
            });
          

            jsonp("https://www.toutiao.com/api/comment/list/?group_id="+this.params.group_id+"&item_id="+this.params.item_id+"&offset=0&count=10",
                (err, res)=> {
                   console.log(res.data.comments)
                  this.comment=res.data.comments
            })



      }
    },
    activated(){
        this.media_info=this.$route.params.media_info,
        this.title=this.$route.params.title,
        this.params=this.$route.params,
        this.scroll="",
        this.Istitle=false,
        this.getApiContent()
        this.loading=false
    }

    



  };

</script>