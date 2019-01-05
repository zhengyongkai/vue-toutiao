<template>
<div>
    <div class="title">
        <div> <img src="../assets/logo.png"></div>
        <div>
              <div class="title-title">
                之尊的皮皮
            </div>
            <br>
            <div class="title-content">
                开直播赚不聊多少的
            </div>
        </div>
    </div>
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
      }
    }
  };

</script>

<style lang="less" scoped>
    .title{
        img{
            width: 50px;
            height: 50px;
            border-radius: 20px;
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
            width: 100%;
        }

    }
</style>
