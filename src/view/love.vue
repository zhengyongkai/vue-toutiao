<template>

<div class="app" style="overflow-x:auto" ref="viewBox" >
     <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="true">
    <div style="margin:0 20px;">
        <scroller lock-y :scrollbar-x=false>
            <div class="box1">
              
                     <div  v-for="(val,index) in  this.$store.state.data" v-if='index<=6'>
                         <div  v-if="index <=2" class="box1-item " >
                            <living :logo="true" :content="val"></living>
                             
                            <div class="badge"><badge text="直播中" slot="reference"></badge></div>
                           <div class="font"><font>{{val.media_name}}</font></div>
                           
                           
                         </div>
                           <div class="box1-item " v-else>
                           <living :logo="false" :content="val"></living>
                             <div  class="font"><font>{{val.media_name}}</font></div>
                         </div>
                          
                    </div>
                   
                
              
            </div>
        </scroller>
        <hr size="6">
        <br>
         
        <div class="item">
            <router-link  
            v-for="(val,index) in  this.$store.state.data"
             :to="{
                    name:'info',
                    params:
                        {   id:val.tag_id,
                            title:val.title,
                            media_info:val.media_info,
                            media_name:val.media_name,
                            datetime:val.datetime,
                            abstract:val.abstract,
                            image_list:val.image_list,
                            repin_count:val.repin_count,
                            comment_count:val.comment_count,
                            keywords:val.keywords,
                            source_url:val.source_url,
                            group_id:val.group_id,
                            item_id:val.item_id
                        }
                }"
                class="items"
                :key="index"
               
                >
<!--                
                <p class="title">{{val.title}}</p>
                <div>
                    
                    <img alt="加载出错" v-for="(img,index) in val.image_list"    :key="index" v-lazy="img.url" class="postimg" >
                    <div class="bottom_info">
                       
                        <span class="avIcon" v-show="val.label==='广告'">广告</span>
                        <span class="writer">{{val.media_name}}&nbsp;&nbsp;</span> 
                        <span class="comment_count">评论&nbsp;{{val.comment_count}}&nbsp;&nbsp;</span>
                        <span class="datetime">{{val.datetime|date}}</span>
                        <br>
                        <br>

                      
                    </div>
                </div> -->
                <div class="item_header">
                    <div class="item_img">
                        <img :src="val.media_info.avatar_url"/>
                        
                    </div>
                    <div class="item_autor">
                        <div class="autor_name">
                             {{val.media_name}}
                        </div>
                        <div class="publish_time">
                            {{val.datetime|date}}
                        </div>

                    </div>
                    
                </div>
                <br>

                <div class="item_content">
                    {{val.title}}
                    <br>
                    <br>
                     <img alt="加载出错" v-for="(img,index) in val.image_list"    :key="index" v-lazy="img.url" class="postimg" >

                </div>
                <br>
                <div class="item_handler">
                    <flexbox>
                        <flexbox-item>
                            <i class="fa fa-share-square-o"></i>
                            55
                        </flexbox-item>
                        <flexbox-item><i class="fa fa-commenting-o"></i> {{val.repin_count}}</flexbox-item>
                        <flexbox-item><i class="fa fa-heart-o"></i> {{val.comment_count}}</flexbox-item>
                    </flexbox>
                </div>
            <br>

            </router-link>
            
        </div>
   
    </div>
     </mt-loadmore>
</div>

</template>

 <style  lang="stylus"  scoped>



.app{

    height: 100%;

    
}

body{
    
    font-size: 2em;
}

 hr{
            
      
}
.box1 {
    margin :5px;
  height: 105px;
  position: relative;
  width: 780px;;

        .box1-item {
        width:60px;;
        height: 70px;

        display:inline-block;
       
        float: left;
        text-align: center;
       
        margin-right :40px;

            .badge{
             position :relative;
                bottom:15px;
               

            }
          
            .font{
                 position :absolute;
                z-index :999;
                top:70px;
            
                
                font-size :12px;
            }
        }
}


.item{
    
    .items{
        color:black;
        text-decoration none;
       
        .item_header{

            .item_img{
                img{
                    width :35px;
                    border-radius :50%;      
                    float:left;   

                }
            }

            .item_autor{
                margin-left :50px;
                .autor_name{
                    font-size :13px;

                }
                .publish_time{
                    color :lightgray;
                    font-size :12px;
                    margin-top :5px;
                }
            }

            .item_content{
                 margin-bottom :50px;
            }


        }

        .title{

            font-size :15px;
            margin-bottom :30px;
        }

        .avIcon{
            float: left;
            color: red;
            font-size: 15px;
        }

        .datetime{
             float: left;
             font-size: 12px;
        }
        
        .postimg{

            width :30%;
            background-repeat:none;

        }
        .writer
        {
            float:left;
            font-size:12px;
        }

        .comment_count{
            float:left;
            font-size:12px;
        }

        
        
    }
}




</style>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore,Badge } from 'vux'
  import { Toast, MessageBox ,Loadmore} from 'mint-ui';
  import { XImg } from 'vux'
  import { Lazyload } from 'mint-ui';
import { mapMutations } from 'vuex'
 import living from "@/components/living.vue"


  export default {
    name: 'app',

    data() {
      return {
        allLoaded:false,
        scroll:0,


       
      };
    },
    components: {
        Scroller,
        Divider,
        Spinner,
        XButton,
        Group,
        Lazyload,
        Cell,
        LoadMore,
        Badge,
        XImg,
        Flexbox,
        FlexboxItem,
        living
    },
    
    mounted(){
       
        this.$store.commit('getApi', {
            kind:"__all__"
        })

    
        this.box = this.$refs.viewBox
        this.box.addEventListener('scroll', () => {
        this.scroll  = this.$refs.viewBox.scrollTop 
         }, false)


     
    },
     filters: {
            date: function(time) {
                if (!time) {
                    return ''
                }
                let time1 = new Date(time) - 0;
                let time2 = new Date() - 0;
                let time3 = time2 - time1;
                let time4 = parseInt(time3/1000/60);
                let time5;
                if(time4>0){
                    time5 = time4 + '分钟前';
                }else if(time4 <=0){
                    time5 = '刚刚'
                }else if(time4 > 60){
                    time5 = parseInt(time4/60) + '时前';
                }
                return time5;
            }
        },
     activated() {
          if(this.scroll > 0){
            this.$refs.viewBox.scrollTo(0, this.scroll);
            this.scroll = 0;
            window.addEventListener('scroll', this.handleScroll);
      }
      }, deactivated(){
        window.removeEventListener('scroll', this.handleScroll);
     },
   
    methods: {
   
    ...mapMutations([
        "getApi"
    ]),
    handleScroll () {
      

       console.log(this.scroll)
     },

      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },
       //   下拉刷新
    loadTop() {
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
      this.loadMore();

    },
    // 下来刷新加载
    loadFrist() {
       this.allLoaded = true;
    },
    // 加载更多
    loadMore() {
      this.allLoaded = true;
    },

    }
  };

</script>
