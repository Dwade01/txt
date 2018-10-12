$(function () {
	$(".srk").find("input").focus(function () {
		
		$(this).css("color","#000");
		
	}).blur(function () {
		
        
		$(this).css("color","#999");
        text=$(this).val();
        alert(text)
		
	})
})