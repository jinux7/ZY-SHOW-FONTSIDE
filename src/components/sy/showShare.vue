<template>
	<div id="showShare">
		<h1>经验分享</h1>
		<h4>
			UED团队，专为体验及交互而打造的全新模板网站，每个模板都将支持手机触屏版专属网站如此简单
		</h4>
		<el-row :gutter="15">
			<el-col :lg="6" :md="8" :sm="12" v-for="item in dataList">
				<router-link :to="{ name: 'experienceDetail', params: {'creatTime':item.creatTime}}">
				  	<div>
				  		<div class="img">
				  			<img :src="baseUrl+item.url" alt="...">
				  		</div>
				  		<h3>
				  			<strong>{{item.title}}</strong>
				  			<span>{{item.creatTime | convertTime}}</span>
				  		</h3>
				  		<p>
				  			{{item.description}}
				  		</p>
				  	</div>
				</router-link>
			</el-col>
		</el-row>	
	</div>
</template>
<script>
 	var baseUrl = require('../global/global.js').baseUrl;
	export default {
		name:"showShare",
		data(){
			return {
				pageSize:12,
				baseUrl:baseUrl,
				dataList:[],
			}
		},
		mounted(){
			//请求文章data
		  	this.$http.get(baseUrl+'/articles?articleNum='+this.pageSize).then(function(res){
		  		this.dataList = res.body;
		  	},function(err){
		  		console.log(err)
		  	});
		},
		filters: {
              convertTime(value){
              	var date = new Date(parseInt(value));
              	var year = date.getFullYear();
              	var month = date.getMonth()+1;
              	var day = date.getDate();
               	return year+'/'+month+'/'+day;
              }
        }
	}
</script>
<style scoped>
	#showShare {
		overflow: hidden;
		background-color: #ffffff;
		font-family: "microsoft yahei";
		padding-bottom:30px;
	}
	h1 {
		padding-top: 45px;
	}
	h3 {
		font-weight: 200;
		font-size: 1.05rem;
		overflow: hidden;
		padding: 0 5%;
	}
	h3 strong {
		float: left;
		width: 55%;
	    color: #000000;
	    height: 21px;
	    overflow: hidden;
	    -ms-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    text-align: left;
	}
	h3 span {
		float: right;
		color: gray;
		width: 45%;
		overflow: hidden;
	}
	h4 {
		color: gray;
		margin-bottom: 30px;
		padding: 0 5%;
		font-size: 0.9rem;
		font-weight: normal;
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
	}
	@media (min-width: 760px){
			h4 {
				font-size: 1rem;
			}
	}
	div.img {
		height: 200px;
		border: 1px solid #f1f1f1;
		overflow: hidden;
	}
	div.img img {
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