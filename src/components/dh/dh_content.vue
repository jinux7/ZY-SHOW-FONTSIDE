<template>
	<div id="dhContent">
		<div class="area" v-for="item in contentListData" :id="item.idCode">
			<h1>{{item.title}}</h1>
			<el-row :gutter="10">
				<el-col :lg="6" :md="8" :sm="8" :xs="12" v-for="ele in item.arrData" class="hoverUp">
					<a class="box" :href="ele.url" target="_blank">
						<h2>{{ele.title}}</h2>
			  			<p :title="ele.description">{{ele.description}}</p>
					</a>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	var baseUrl = require('../global/global.js').baseUrl;
	export default {
		name:'dhContent',
		data(){
			return {
				
			}
		},
		props:['contentListData'],
		mounted(){
			
		}
	}
</script>
<style scoped>
	#dhContent {
		background-color: #f3f6f8;
		font-family: 'microsoft yahei';
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	}
	.area {
		padding: 0.5% 1.5%;
		box-shadow: 0 0 15px rgba(0,0,0,.15);
		margin-bottom: 3%;
		background-color: #ffffff;
	}
	h1 {
		text-align: left;
		font-weight: 500;
	}
	.box {
		border: 1px solid #eeeeee;
		text-align: left;
		padding: 0 5% 5%;
		display: block;
		margin-bottom: 5%;
		background-color: white;
		color: #000000;
	}
	.hoverUp:hover {
		background-image: url('/static/images/dh_shadow.png');
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: 80% 20%;
		transition:all .1s;
	}
	.hoverUp:hover .box {
		transform:translateY(-3px);
		transition:all .3s;
	}
	.box h2 {
		font-weight: 100;
		font-size: 1.6rem;
		height: 56px;
		line-height: 56px;
		overflow: hidden;
		margin: 0;
		-ms-text-overflow: ellipsis;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 100%;
    	color: #46d3e6;
    	font-size: 18px;
	}
	.box p {
		font-size: 0.8rem;
		word-break: break-all;
	    display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 42px;
		line-height: 21px;
	}
</style>