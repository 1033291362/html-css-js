$(function(){
	$(".imgbox").width($(".imgbox li").length*150);
	user = setInterval(slideright,5000);

	function slideright(){
		$(".imgbox").animate({'margin-left':-160},1000,function(){
		$(".imgbox").css('margin-left','0');
		$(".imgbox").find('li:first').appendTo($(".imgbox"));	
		});
		return false;
	}
	$(".imgbox").mouseover(function(){
		clearInterval(user);
	}).mouseout(function(){
		user = setInterval(slideright,5000);
	})
})
