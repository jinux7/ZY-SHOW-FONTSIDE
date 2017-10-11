<template>
	<div id="shareIndexFoot">
		<div class="innerWrap">
			<div class="text">
				<h2>关于我们</h2>
				<p>我们崇尚专注热爱的事业，更加尊重自由奔放的个性。</p>
				<p>在这里，我们以一种体现自我价值的态度存在。</p>
				<p>在这里，我们关注最好的体验设计更关注最好的你！我们共同创造，共同成长，用真实的能量产生影响。</p>
			</div>
			
			<div class="tu">
				<el-row :gutter="15">
				  <el-col :lg="8" :md="8" :sm="12">
				  	<div>
				  		<img src="../assets/foot_tu_img1.png" alt="...">
				  		<h3>视觉设计</h3>
				  		
				  	</div>
				  </el-col>
				  <el-col :lg="8" :md="8" :sm="12">
				  	<div>
				  		<img src="../assets/foot_tu_img2.png" alt="...">
				  		<h3>交互体验</h3>
				  		
				  	</div>
				  </el-col>
				  <el-col :lg="8" :md="8" :sm="12">
				  	<div>
				  		<img src="../assets/foot_tu_img3.png" alt="...">
				  		<h3>前端开发</h3>
				  		
				  	</div>
				  </el-col>
				</el-row>	
			</div>
		</div>		
	</div>
</template>
<script>
	import pageFoot from '@/components/pageFoot.vue';
	import $ from 'jquery';
	export default {
		name:'shareIndexFoot',
		data(){
			return {}
		},
		components:{
			pageFoot
		},
		mounted(){
			let h = $('#shareIndexFoot').height()+30;
			console.log(h);
			$('#pageFoot').css('margin-top',h);
		},
		destroyed(){
			$('#pageFoot').css('margin-top',0);
		}
	}
</script>
<style scoped>
	#shareIndexFoot {
		position: absolute;
		left: 0;
		color: white;
		font-family: "microsoft yahei";
		padding-top: 1px;
		padding-bottom: 30px;
		background-image: url('../assets/foot_bg.jpg');
		background-size: 100%;
		width: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.innerWrap {
		margin: 0 auto;
	}
	.text h2 {
		margin-top: 62px;
		margin-bottom: 40px;
	}
	.text p {
		text-align: left;
		margin: 0 10%;
		line-height: 2rem;
		font-size: 1rem;
	}
	.tu {
		margin: 70px 15px 0;
	}
	.el-row .el-col div {
		margin-top: 20px;
	}
	.el-row .el-col div img {
		margin-top: 30px;
		width: 30%;
	}
	.el-row .el-col div h3 {

	}
	.el-row .el-col div p {
		padding: 0 20px;
	}
	@media (min-width: 760px){
			.text p {
				font-size: 1.1rem;
			}
			.innerWrap {
				 width: 750px;
			}
	}
    @media (min-width: 992px){
      .innerWrap {
          width: 970px;
      }
      .banner h1 {
        font-size: 2.5rem;
        margin-top: 146px;
      }
  }
    @media (min-width: 1200px){
      .innerWrap {
          width: 1170px;
      }
  }
</style>