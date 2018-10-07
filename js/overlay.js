$(window).on("load", function(){
	$("#overlay").hide();
	$("#openBtn").click(function(){
		$("#overlay").fadeIn(700);
	});
	$("#closeBtn").click(function(){
		console.log("HELP");
		$("#overlay").fadeOut(1000);
});
});

