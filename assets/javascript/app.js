$( document ).ready(function() {
   
   	var timer = $("#timer");
   	timer = 5;


	//hides content until button is clicked
   	$(".main").hide();
   	$(".results").hide();
   	$("#done").hide();

   

	$("#start").click(function() {
		$("#start").hide("#timer");
		$(".main").show();
		$("#done").show();

		setTimeout(function(){
        	fiveSeconds();
      	}, 6000);

      	function fiveSeconds() {
				clearInterval();
				$("#timer").hide();
				$(".main").hide();
		}
		


		setInterval(function() {
		    $("#timer").text((timer--) + " Seconds left!");
		}, 1000);


			

	        setTimeout(function(){
	        thirtySeconds();
	     	}, 30000);

	     	function thirtySeconds() {
	        $("#shout").html("30 seconds left! HURRY!");
	        console.log("30 seconds left!");

	    	}

    })

    $("#done").click(function() {

    	// scoreTotal = 0;

    	// if $("#q1" == 0);
    	// 	scoreTotal = 0;
    	// 	else {
    	// 		scoreTotal++;
    	// 	}

    	// if $("#q2" == 0);
    	// 	scoreTotal = 0;
    	// 	else {
    	// 		scoreTotal++;
    	// 	}

    	// if $("#q3" == 0);
    	// 	scoreTotal = 0;
    	// 	else {
    	// 		scoreTotal++;
    	// 	}

    	// if $("#q4" == 0);
    	// 	scoreTotal = 0;
    	// 	else {
    	// 		scoreTotal++;
    	// 	}
    		
    	// if $("#q5" == 0);
    	// 	scoreTotal = 0;
    	// 	else {
    	// 		scoreTotal++;
    	// 	}				

    	// var question1 = ($("input[@name=q1]:checked").val() != "1");
    	// var question2 = ($("input[@name=q2]:checked").val() != "1");
    	// var question3 = ($("input[@name=q3]:checked").val() != "1");
    	// var question4 = ($("input[@name=q4]:checked").val() != "1");
    	// var question5 = ($("input[@name=q5]:checked").val() != "1");

    	$(".main").hide();
   		$("#done").hide();
   		$("#timer").hide();
    	$(".results").show();
	})

});