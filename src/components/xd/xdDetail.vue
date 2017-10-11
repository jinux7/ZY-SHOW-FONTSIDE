<template>
	<div id="xdDetail">
		<div class="img">
			<img :src="articleData.url" alt="">
		</div>
		<h1>{{articleData.title}}</h1>
		<div class="textContain">
			
		</div>
	</div>
</template>
<script>
import $ from 'jquery';
var bUrl = require('../global/global.js').baseUrl;
	export default {
		name:'xdDetail',
		data(){
			return {
				articleData:'',
				baseUrl:bUrl
			}
		},
		mounted () {
			$('#app').css('background-image','none');//banner图片更改
			var creatTime = this.$route.params.creatTime;
			if(creatTime){
				sessionStorage.creatTime = creatTime;
			}else {
				creatTime = sessionStorage.creatTime; 
			}
			this.$http.get(this.baseUrl+'/detailArticle?creatTime='+creatTime).then(function(res){
		  		this.articleData = res.body[0];
		  		this.articleData.url = this.baseUrl+this.articleData.url;
		  		console.log(this.articleData.url);
		  		$('.textContain').html(this.articleData.articleBody);
		  	},function(err){
		  		console.log(err);
		  	});
		}
	}
</script>
<style scoped>
	#xdDetail {
		margin-top: 70px;
		margin-bottom: 10px;
	}
	div.img {
		text-align: center;
	}
	div.img img {
		width: 60%;
	}
	.textContain {
		text-align: left;
	}
</style>