<template>
	<div id="shareIndex">
		<section class="wrap">
			<div class="banner">
				<h1>用户体验设计中心</h1>
				<p>我们是一支勇于自我否定的团队，聆听用户意见来进步，这样良性工作体系即产生，源动力即产生。
我们是一支友爱的团队，让我们葆有激情，并肩奋斗，为用户提供所需，开始缔造卓越体验吧！</p>
			</div>

			<showShare></showShare>
			<shareIndexFoot></shareIndexFoot>
		</section>		
	</div>
</template>
<script>

import showShare from '@/components/sy/showShare.vue'
import shareIndexFoot from '@/components/shareIndexFoot.vue'
export default {
  name: 'shareIndex',
  data () {
    return {
      
    }
  },
  components:{showShare,shareIndexFoot}
}
</script>
<style scoped>
	#shareIndex {
		margin-top: 60px;
	} 
	.wrap {
		width: 100%;	
		margin: 0 auto;	
	}
	.banner {
		height: 450px;
		font-family: "microsoft yahei";
		color: white;
		border: 1px solid transparent;
	}
	.banner h1 {
		text-align: center;
		font-size: 2.5rem;
	}
	.banner p {
		margin: 46px 10% 0;
		font-size: 1rem;
		line-height: 2.5rem;
	}

	
	/***************************/
</style>