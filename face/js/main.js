$(function() {
	/* 锚点跳转滑动效果 href*=# 即 href = # + * */
	$('a[href=#head]').click(function() {
		var $target = $(this.hash); //hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']'); //slice() 从已有的数组中返回选定的元素
		if ($target.length) {
			var targetOffset = $target.offset().top; //点击处距离顶部的距离
			$('html,body').animate({
				scrollTop: targetOffset
			}, 1000);
			return false;
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 600) {
			$(".float").show(300);
		} else {
			$(".float").hide(300);
		}
	});
})
