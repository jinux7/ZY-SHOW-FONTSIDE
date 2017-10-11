<template>
	<div id="pagehead">
		<div class="headWrap">
			<p class="img">
			<img src="../assets/ued_logo.jpg" alt="logo">
			</p>
			<div class="menu">
				<el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
				  <router-link :to="'/'"><el-menu-item index="1">首页</el-menu-item></router-link>
				  <!-- <router-link :to="''"><el-menu-item index="2">关于</el-menu-item></router-link> -->
				  <router-link :to="'anli'"><el-menu-item index="3">精选案例</el-menu-item></router-link>
				  <router-link :to="'experience'"><el-menu-item index="4">心得</el-menu-item></router-link>
				  <router-link :to="'dh'"><el-menu-item index="5">资源导航</el-menu-item></router-link>
				</el-menu>
			</div>
			<i class="el-icon-menu" @click="showMenu"></i>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		name:'pagehead',
		data(){
			return {
				bShow:false
			}
		},
		mounted(){
			var that = this;
			//菜单点击，当手机屏幕时添加显示隐藏
			$('a').on('click',function(ev){
				if($(window).width() < 760){
					$('.menu').hide();
					that.bShow = false;
				}
			});
			//小屏幕扩大为大屏幕的的时候，隐藏的菜单显示出来
			$(window).on('resize',function(ev){
				if($(window).width() > 760){
					$('.menu').show();
				}
			});

		},
		methods:{
			showMenu(){
				if(!this.bShow){
					//$('.menu').addClass('menushow');
					$('.menu').show();
					this.bShow = !this.bShow;	
				}else {
					//$('.menu').removeClass('menushow');
					$('.menu').hide();
					this.bShow = !this.bShow;
				}
				
			}
		}
	}
</script>
<style scoped>
	#pagehead {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #ffffff;
		font-family: "microsoft yahei";
		z-index: 10;
		box-shadow: 0px 3px 15px 0px rgba(0,0,0,.2);
	}
	.headWrap {
		margin: 0 auto;
	}
	p {
		float: left;
		margin-left: 30px;
	}
	.el-menu {
		background-color: white;
	}
	p.img {
	}
	.el-menu-item {
		padding: 0 10px
	}
	i {
		display: none;
	}
	strong {
		display: none;
	}
	@media (min-width: 760px){
			p.img {
				display: block;
			}
			.el-menu-item {
				padding: 0 20px
			}	
			div.menu {
				float: right;
			}
			.menushow {
				display: block;
			}
	}
	@media (max-width: 760px){
		.el-menu-item {
			float:none !important;
		}
		.menu {
			display: none;
			margin-top: 60px;
			position: absolute;
			width: 100%;
			box-shadow: 0 2px 2px rgba(0,0,0,.3);
		}
		i {
			display: block;
			float: right;
		    font-size: 30px;
		    color: gray;
		    margin-top: 10px;
		    margin-right: 10px;	
		}	
		
	}


	@media (min-width: 760px){
      .headWrap {
          width: 750px;
      } 
  }
    @media (min-width: 992px){
      .headWrap {
          width: 970px;
      }
  }
    @media (min-width: 1200px){
      .headWrap {
          width: 1170px;
      }
  }
  .menushow {
		display: block ;
	}
</style>