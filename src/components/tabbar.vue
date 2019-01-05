<template>
	<div class="tabberWarp" >
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getVal' :key="item.page" v-for='item in tabbarDes' :sel='selected'>
 
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from './item.vue'
	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:'home',
				tabbarDes:[
					{
						txt:'主页',
						page:'home',
						normalImg:require('../assets/home.png'),
						activeImg:require('../assets/homeclick.png')
						
					},				
					{
						txt:'发头条',
						page:'post',
						normalImg:require('../assets/plus.png'),
						activeImg:require('../assets/plusclick.png')
					},
					{
						txt:'我的',
						page:'my',
						normalImg:require('../assets/myclick.png'),
						activeImg:require('../assets/my.png')
					},
					
				]
			}
		},
		methods:{
			getVal:function(res){
                this.selected = res;
                switch(res){
                        case "home":
                        this.$router.push("/")
                        break
                         case "my":
                        this.$router.push("/my")
                        break
                         case "post":
                        this.$router.push("/hot")
                        break
                        
                    }
			}
		}
	}
</script>
<style type="text/css">
	.warp{
		height: 50px;
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}
	.tabberWarp img{
		margin-top: 10px;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 5px;
		background: #fff;
	}
</style>
