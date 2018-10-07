$(window).on("load", function(){
	$("#overlay").hide();
	$("#closeBtn").click(function(){
		$("#overlay").fadeOut(1000);
	});
	$("#openBtn").click(function(){
		$("#overlay").fadeIn(700);
	});

});
