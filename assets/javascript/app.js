$( document ).ready(function() {
   
   	var timer = $("#timer");
   	timer = 60;


	//hides content until button is clicked
   	$(".main").hide();
   	$(".results").hide();
   	$("#done").hide();

   

	$("#start").click(function() {
		$("#start").hide("#timer");
		$(".main").show();
		$("#done").show();

		setTimeout(function(){
        	sixtySeconds();
      	}, 60000);

      	function sixtySeconds() {
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
		}
		
		setTimeout(function(){
			$("#shout").hide();
		}, 35000);
		
		
	})

    $("#done").click(function() {
			
			var inputs = document.getElementsByTagName('input');
			var correct = 0;
			var checkedAnswers = 0;
			for (var i = 0; i < inputs.length; i++) {
				if (inputs[i].type === 'radio' && inputs[i].checked) {
					// get value, set checked flag or do whatever you need to
					correct = parseInt(inputs[i].value) + correct;
					checkedAnswers = checkedAnswers + 1;
				}
			}
			
			$("#correct").html("Correct Answers: "+correct);
			$("#incorrect").html("Incorrect Answers: "+(5-correct));
			$("#unanswered").html("Unanswered Questions: "+(5-checkedAnswers));
			
			console.log(correct);			
    	$(".main").hide();
   		$("#done").hide();
			
   		$("#timer").hide();
    	$(".results").show();
	})

});