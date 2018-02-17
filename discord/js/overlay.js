$(window).on("load", function(){
	$("#overlay").hide();
	$("#openBtn").click(function(){
		$("#overlay").fadeIn(700);
	});
	$("#closeBtn").click(function(){
		$("#overlay").fadeOut(1000);
});
});
