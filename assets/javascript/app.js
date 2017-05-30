$( document ).ready(function() {
   
   	var timer = $("#timer");
   	timer = 5;
	
	$("#start").click(function() {
		$("#start").hide("#timer");

		setInterval(function(){ 
			sixtySeconds(timer--); }, 1000);

		if (timer == 0) {
			$("#done").hide("#answers")
		}


		function sixtySeconds() {
        	$("#timer").html("60 seconds on the clock!");
        	console.log("60 seconds left");

    	}
    })
});