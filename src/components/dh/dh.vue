<template>
	<div id="dh">
		<el-row :gutter="10">
			<el-col :lg="4" :md="4" :sm="4" :xs="4" class="dhNav">
				<div class="grid-content bg-purple">
				 	<dhNav :navListData="navListData"></dhNav>
				</div>
			</el-col>
			<el-col :lg="20" :md="20" :sm="20" :xs="20" :offset="4" class="dhContent">
			  	<div class="grid-content bg-purple">
			  		<dhContent :contentListData="contentListData"></dhContent>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import $ from 'jquery';
	var baseUrl = require('../global/global.js').baseUrl;
	import dhNav from '@/components/dh/dh_nav.vue';
	import dhContent from '@/components/dh/dh_content.vue';
	export default {
		name:'dh',
		data(){
			return {
				navListData:null,
				contentListData:null
			}
		},
		mounted(){
			$('#app').css('background-image','none');//banner图片更改
			//获取nav数据
			this.$http.get(baseUrl+'/dhnav').then(function(res){
				this.navListData = res.body[0].data;
			},function(err){

			});
			//获取展示内容数据
			this.$http.get(baseUrl+'/dhContent').then(function(res){
				var obj = {};
				this.contentListData = res.body;
			},function(err){

			});
			//如果是移动端，做相应处理
			/*if($(window).width() < 768) {
				$('.dhContent')
				.removeClass('el-col-xs-20')
				.removeClass('el-col-offset-4')
				
			}*/
		},
		components:{
			dhNav,
			dhContent
		}
	}
</script>
<style scoped>
	#dh {
		margin-top: 70px;
		background-color: #f3f6f8;
	}
	.dhNav {
		position: fixed;
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	  /*** media查询***************/
    @media (min-width: 768px){
        .dhNav {
		width: 130px;
	}
  }
    @media (min-width: 992px){
      .dhNav {
		width: 163px;
	}
  }
    @media (min-width: 1200px){
      .dhNav {
		width: 202px;
	}
  }
  @media (max-width:768px) {
		#dh {
			margin-top: 60px;
		}
	}
</style>