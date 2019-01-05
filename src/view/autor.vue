<template>
   <div>
        <div class="header"><info-title ></info-title></div>
        {{this.$route.params.aid}}
   </div>
</template>

<script>
  import InfoTitle from '@/components/InfoTitle.vue'
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'app',

    data() {
      return {
       
      };
    },
     components:{
   
       InfoTitle
    },

    methods: {
    
    }
  };
</script>