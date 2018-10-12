$(function () {
	$(".tab").children().click(function () {
		$(this).addClass("on").siblings().removeClass("on");
		index=$(this).index();
		$(".srk").children().eq(index).show().siblings().hide()
	})
})