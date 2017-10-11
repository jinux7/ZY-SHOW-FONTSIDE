<template>
	<div id="dhNav">
		<el-row :gutter="5">
			<el-col :lg="24" :md="24" :sm="24" :xs="24" v-for="(item,index) in navListData">
		  		<a :class="{active:arrActive[index]}" @click="doActive(index,item.idCode)">{{item.name}}</a>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import Vue from 'Vue';
	import $ from 'jquery';
	export default {
		name:'dhNav',
		data(){
			return {
				arrActive:[]
			}
		},
		props:['navListData'],
		mounted(){
				/*for(var i=0;i<this.navListData.length;i++){
					Vue.set(this.arrActive,i,false);
				}*/
				Vue.set(this.arrActive,0,true);
		},
		methods:{
			doActive(index,idCode){
				for(var i=0;i<this.navListData.length;i++){
					Vue.set(this.arrActive,i,false);
				}
				Vue.set(this.arrActive,index,true);
				$('body,html').animate({scrollTop: $('#'+idCode).offset().top-100},
					500, function() {
				});
			}
		}
	}
</script>
<style scoped>
	#dhNav {
		background-color: white;
		box-shadow: 0 0 15px rgba(0,0,0,.15);
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
	a {
		display: inline-block;
		width: 100%;
		line-height: 60px;
		color: #000000;
		font-family: 'microsoft yahei';
		cursor: pointer;
	}  
	a:hover {
		color: #ffffff;
		background-color: #bef0f7;
	}
	a.active {
		color: #ffffff;
		background-color: #46d3e6;
		transform:scalex(1.05);
	}
	@media(max-width:768px) {
		#dhNav {
			font-size:10px;
		}
		a{
			line-height: 30px;
		}
	}
</style>