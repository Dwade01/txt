$(function () {
	
	var count=0;
	//小圆点
	$(".yd").children().click(function () {
		$(this).addClass("on").siblings().removeClass("on");
		count=$(this).index();
		$(".oimg").animate({
			"left":-1520*count
		})

	})
     //自动播放
	var timer = setInterval(function (){
	    count++;
	    if(count==$(".oimg").children().length){
	        count=0;
	    };

	    $(".yd").children().eq(count).trigger("click")
	},2000);



})