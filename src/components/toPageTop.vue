<template>
	<div id="toPageTop">
		<div class="img">
			<img src="/static/images/toPageTop.png" alt="">
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		name:'toPageTop',
		data(){
			return {

			}
		},
		mounted(){
			var isScroll = true;
			//滚轮滚到一定程度显示回到顶部图标
			var $toPageTop = $('#toPageTop'),topGao = 0;
			$(window).on('scroll',function(ev){
				if(isScroll){
					isScroll = false;
					topGao = $('html').scrollTop() || $('body').scrollTop();
					if(topGao>800){
						$toPageTop.fadeIn(300);
					}else {
						$toPageTop.fadeOut(300);
					}
					setTimeout(function(){
						isScroll = true;
					},200);

				}
			});
			//回到顶部图标添加点击事件
			$('#toPageTop').on('click',function(ev){
				$('body,html').stop().animate({scrollTop: 0},500);
			});
		}
	}
</script>
<style scoped>
	#toPageTop {
		position: fixed;
		display: none;
		right: 30px;
		bottom: 5%;
		cursor: pointer;
	}
	.img {
		width: 50px;
	}
</style>