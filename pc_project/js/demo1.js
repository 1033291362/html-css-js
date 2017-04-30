$(function(){
	//首页链接
	$(".t_bottom li").click(function(){
		var index = $(".t_bottom li").index(this);
		$(".t_bottom li").css({
			"background":"#1a8fcb"
		})
		$(".t_bottom li").eq(index).css({
			"background":"#00cc33"
		})
	})
	
	//主页面图片切换
	var user = {};
	user.time = null;
	index = 0;
	user.pic=[
			"img/1.jpg",
			"img/2.jpg",
			"img/3.jpg",
			"img/4.jpg",
	]
	$(".but li").eq(0).css({
			"background":"#ffd306"
		})
	
	exec(0)
	var test = setInterval(function(){
		index++;
		if(index>user.pic.length-1)index=0;
			exec(index);
	},3000)
	function exec(index){
		$(".pic li").stop(true,true).css({
			"background":"url("+user.pic[index]+") no-repeat",
			"background-size":"1680px",
			"opacity":"0"
		}).animate({
			"opacity":"1"
		},1000)
		$(".but li").css({
			"background":"#1a8fcb"
		})
		$(".but li").eq(index).css({
			"background":"#ffd306"
		})
	}
	$(".but li").mouseover(function(){
		clearInterval(test);
		index = $(".but li").index(this);
		exec(index);
	}).mouseout(function(){
		test = setInterval(function(){
		index++;
		if(index>user.pic.length-1)index=0;
			exec(index);
		},3000)
	})
	
})