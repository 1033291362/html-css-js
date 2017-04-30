$(function(){
	$("#express").height($("#express li").length*25);
	var user = setInterval(slidetop,1000)

	function slidetop(){
		$("#express ").animate({'margin-top':-20},1000,function(){
		$("#express ").css('margin-top','0');
		$("#express ").find('li:first').appendTo($("#express "));	
		});
		return false;
	}
	$("#express ").mouseover(function(){
		clearInterval(user);
	}).mouseout(function(){
		user = setInterval(slidetop,1000);
	})
	
	
	$(" #express li p.alink").click(function(){
		var text1 = $(this).text();
		var div_id = text1.substring(9);
//		alert(div_id)
		location.href = "knowledge.html?div_id="+div_id;
	})
})
