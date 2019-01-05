<template>

<div class="app" style="overflow-x:auto" ref="viewBox" >
     <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="true">
    <div style="margin:0 20px;">
        <scroller lock-y :scrollbar-x=false>
            <div class="box1">
               
                
            </div>
        </scroller>
        <divider>最近发表</divider>
         
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
                            source_url:val.source_url
                        }
                }"
                class="items"
                :key="index"
               
                >
               
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
                </div>
              <hr width="100%"  size="5" >

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
  height: 100px;
  position: relative;
  width: 180%;

        .box1-item {
        width:100px;;
        height: 100px;

        display:inline-block;
        
        float: left;
        text-align: center;
        line-height: 100px;

            img{
                width: 50px;
                height: 50px;
                border-radius: 20px;

                
            }
        }
}


.item{
   
    .items{
        color:black;
        text-decoration none;
     

       

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
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'
  import { Toast, MessageBox ,Loadmore} from 'mint-ui';
  import { XImg } from 'vux'
  import { Lazyload } from 'mint-ui';
import { mapMutations } from 'vuex'


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
        XImg
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
