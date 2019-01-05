<template>
    <div class="content">
        <div class="header">
          <div>
              <div class="user_info">
                <img src="@/assets/myimg.png">
              </div>
              <div class="name">
                  赠你一支歌
              </div>
              <div class="apply">
                申请认证
              </div>
            </div>
          <div class="info">
             <x-icon type="ios-arrow-right" size="20"></x-icon>
          </div>
        </div>
      <br>
      <div class="card">
       <card >

      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>139</span>
          <br/>
          头条
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          关注
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          粉丝
        </div>
        <div>
          <span>779</span>
          <br/>
          获赞
        </div>
      </div>
    </card>
        </div>
        <br>
      

        <div class="content">
          <mt-cell
            title="我的消息"
            href="//github.com"
            is-link
           ></mt-cell>
           <mt-cell
            title="微信小程序"
            href="//github.com"
            is-link
           >
          </mt-cell>
          <mt-cell
            title="私信"
            href="//github.com"
            is-link
           >
          </mt-cell>
          <mt-cell
            title="公益广告"
            href="//github.com"
            is-link
            value="今日已经阅读18分钟"
           >
          </mt-cell>
         
           <mt-cell
            title="系统设置"
            href="//github.com"
            is-link
            
           >
           </mt-cell>
        </div>

    </div>

</template>

<style lang="less" scoped>

    .content{
    
      
      width :92%;
      margin:2% 3%;

      .header{ 
        .user_info{
          width: 200px;
        }
        div{
          display: inline;
        }
        img{
           width: 60px;
           height: 60px;
           border-radius: 50%;


        }
        .name{
            position: absolute;
            top: 2%;
            left: 20%;

        }
        .info{
          float: right;;
          position: relative;
          top: 10px;
        }
        .apply{
          cursor: pointer;
          width: 60px;
          position: absolute;
          top: 8%;
          text-align: center;
        left: 20%;
          background: lightcoral;
          color: white;
          border-radius: 20px;
          font-size: 12px;

        }

   



      }

      .card{
          card{
               border-top: 0px;
          }
         .card-demo-flex {
          display: flex;
        }
        .card-demo-content01 {
          padding: 10px 0;
        }
        .card-padding {
          padding: 15px;
        }
        .card-demo-flex > div {
          flex: 1;
          text-align: center;
          font-size:12px;
      
        }
        .card-demo-flex span {
            margin-bottom: 20px;
           font-size:18px;
        
        }
      }

      .content{
       
      }

       group{
          height: 50px;
        }
    }

    
    
</style>

<script>
  import { Card,Group } from 'vux'
  import { Toast, MessageBox,Cell } from 'mint-ui';
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
     components: {
        Card,
        Group,
        Cell
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
  };
</script>