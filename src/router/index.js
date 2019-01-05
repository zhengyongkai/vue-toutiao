import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import App from '@/App.vue'
import index from '@/view/index'
import my from '@/view/my'
import post from '@/view/post'
import hot from '@/view/hot'
import love from '@/view/love'
import video from '@/view/video'
import gossip from '@/view/gossip'
import service from '@/view/service'
import local from '@/view/local'
import info from '@/view/info'
import autor from '@/view/autor'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/app',
      name: 'app',
      component: App,
     
      redirect:"love",
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"love",
     
      children:[
        {
        path: '/hot',
        name: 'hot',
        component: hot,
        meta: {
          keepAlive: true, //此组件不需要被缓存
       },

      
        },
        {
          path: '/love',
          name: 'love',
          component: love,
        
        },{
            path: '/video',
            name: 'video',
            component: video,
            meta: {
              keepAlive: true, //此组件不需要被缓存
           },
          
        },{
            path: '/service',
            name: 'service',
            component: service,
           
        },{
            path: '/gossip',
            name: 'gossip',
            component: gossip,
          
              
        },
        {
          path: '/local',
          name: 'local',
          component: local,
        
            
      },
      {
        path: '/my',
        name: 'my',
        component: my,
        meta:{
          header:true
        }
        
      }, {
        path: '/post',
        name: 'post',
        component: post,
        
      },
      ]
    },
    {

      path:"/info/:id",
      component:info,
      name:"info",
     
    },
    {

      path:"/autor/:aid",
      component:autor,
      name:"autor",
    
    },
   

  ]
})
