<template>
	<div id="xdMain">
		<div class="nav">
			<el-row :gutter="10">
			  <el-col :xs="12" :sm="6" :md="4" :lg="3" v-for="(item,index) in navList">
			  	<div class="grid-content bg-purple" v-bind:class="{active:isActive[index]}" @click="navClick(index,$event)">{{item.title}}</div>
			  </el-col>
			</el-row>
		</div>

		<div class="contain">
			<el-row :gutter="15">
				<el-col :lg="6" :md="8" :sm="12" v-for="item in dataList">
					<router-link :to="{ name: 'experienceDetail', params: {'creatTime':item.creatTime}}">
					  	<div>
					  		<div class="img">
					  			<img :src="baseUrl+item.url" alt="...">
					  		</div>
					  		<h3>
					  			<strong>{{item.title}}</strong>
					  			<!-- <span>{{item.date}}</span> -->
					  		</h3>
					  		<p>
					  			{{item.description}}
					  		</p>
					  	</div>
					</router-link>
				</el-col>
			</el-row>	
		</div>
		<div class="getMoreBtn" @click="getMore()">加载更多</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	var baseUrl = require('../global/global.js').baseUrl;
	export default {
		name:'xdMain',
		data(){
			return {
				baseUrl:baseUrl,
				dataList: null,
				navList:null,
				isActive:null,
				pageSize:null,
				pageNum:1,
				getMoreSelect:'',
				index:0,
				initPageSize:12
			}
		},
		mounted () {
			$('#app').css('background-image','url("/static/images/xd_banner.jpg")');//banner图片更改
			//请求文章data
		  	this.$http.get(baseUrl+'/articles?articleNum='+this.initPageSize).then(function(res){
		  		this.dataList = res.body;
		  	},function(err){
		  		console.log(err)
		  	});
		  	//请求nav导航data
		  	this.$http.get(baseUrl+'/articleClasses').then(function(res){
		  		console.log(res);
		  		this.navList = res.body;
		  		this.isActive = new Array(res.body.length);
		  		this.pageSize = new Array(res.body.length);
		  		for(var i=0;i<this.isActive.length;i++){
					this.isActive[i] = false;
					this.pageSize[i] = 12;
					
				}
				this.isActive[0] = true;
		  	},function(err){
		  		console.log(err)
		  	});

		},
		methods:{
			navClick(index,ev){
				var arr = [];
				for(var i=0;i<this.isActive.length;i++){
					arr[i] = false;
					
				}
				arr[index] = true;
				this.isActive = arr;
				//获取新数据
				var isClick = false;
				if(!isClick){
					isClick = true;
					this.getMoreSelect = this.navList[index].code;
					this.index = index;
					this.$http.get(baseUrl+'/articles?articleNum='+this.pageSize[index]+'&selectValue='+this.navList[index].code)
					.then(function(res){
						  		this.dataList = res.body;
						  		isClick = false;
						  	},function(err){
						  		console.log(err);
						  		isClick = false;
						  	});
				}
			},
			getMore(){
				var isClick = false;
				if(!isClick){
					isClick = true;
					this.pageSize[this.index] += this.pageSize[this.index];
					this.$http.get(baseUrl+'/articles?articleNum='+this.pageSize[this.index]+'&selectValue='+this.getMoreSelect)
					.then(function(res){
						  		this.dataList = res.body;
						  		isClick = false;
						  	},function(err){
						  		console.log(err);
						  		isClick = false;
						  	});	
				}
				
			}
		}
	}
</script>
<style scoped>
	#xdMain {
		margin-top: 302px;
		background-color: white;
		font-family: "microsoft yahei";
	}
	.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #f6f6f6;
    color: #999999;
    cursor: pointer;
  }
  .bg-purple.active {
  	background-color: #1dcdf4;
  	color: #ffffff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 38px;
    line-height: 38px;
  }
  h3 {
		font-weight: 200;
		font-size: 1.05rem;
		overflow: hidden;
		padding: 0 5%;
	}
	h3 strong {
		float: left;
		color: #000000;
		height: 21px;
    	overflow: hidden;
    	-ms-text-overflow: ellipsis;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 100%;
    	text-align: left;
	}
	h3 span {
		float: right;
		color: gray;
	}
	h4 {
		color: gray;
		margin-bottom: 30px;
		padding: 0 5%;
		font-size: 0.9rem;
	}
  .el-col div {
		margin-top: 30px;
  }
	.el-col p {
		padding: 0 5%;
	    text-align: left;
	    overflow: hidden;
	    height: 40px;
	    font-size: 0.7rem;
	    color: gray;
	    line-height: 20px;
	    word-break: break-all;
	    display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.nav  .el-col div {
		margin-top: 10px;
  }
  @media (max-width: 760px){
      .nav {
          padding: 0 5px;
      }
  }
  .getMoreBtn {
  	line-height: 42px;
    background-color: #f2f2f2;
    margin: 3% auto;
    width: 60%;
    border-radius: 3px;
    cursor: pointer;
    color: #999999;
  }
  .getMoreBtn:active {
	background-color: #1dcdf4;
	color: #ffffff;
  }
	.contain div.img {
		height: 200px;
		border: 1px solid #f1f1f1;
		overflow: hidden;
  }
  .contain div.img img {
  	height: 100%;
  }
  div.img img:hover {
		transition: all .5s;
		transform:scale(1.05);
		-ms-transform:scale(1.05);
		-web-transform:scale(1.05);
		-o-transform:scale(1.05);
		-moz-transform:scale(1.05);
	}
</style>
