$( document ).ready(function() {
   
   	var timer = $("#timer");
   	timer = 60;


	//hides content until button is clicked
   	$(".main").hide();
   	$("#answers").hide();
   	$("#done").hide();

	$("#start").click(function() {
		$("#start").hide("#timer");
		$(".main").show();
		$("#done").show();
		


		setInterval(function() {
		    $("#timer").text((timer--) + " Seconds left!");
		}, 1000);


			if (timer == 0) {
				$(".main").hide("#done")
			}

	        setTimeout(function(){
	        thirtySeconds();
	     	}, 30000);

	     	function thirtySeconds() {
	        $("#shout").html("30 seconds left! HURRY!");
	        console.log("30 seconds left!");

	    	}

    })

    $("#done").click(function() {
    	$(".main").hide();
   		$("#done").hide();
   		$("#timer").hide();
    	$("#answers").show();
	})

});