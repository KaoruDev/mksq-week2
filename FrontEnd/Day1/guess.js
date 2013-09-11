$(document).ready(function(){
	var secretNumber = parseInt(Math.random() * 100, 10) + 1;
	var num_guess = 3;
	var games_won = 0;

	function guess(){
		var answer = $('#user-input').val();
		if(num_guess > 0){
			if(answer === secretNumber.toString()){
				games_won += 1;
				$('#response').text("Congratulations you guessed correctly!");
				$('#games-won').text("Woohoo you won " + games_won + " games!!");
			}
			else if(answer < secretNumber){
				$('#response').text('Your hot! Guess higher! You have ' + num_guess);
			}
			else if(answer > secretNumber){
				$('#response').text('Your hot! Guess lower! You have ' + num_guess);
			}
			else{
				$('#response').text("Sorry, that's not a number!");
			}
			num_guess -= 1;
		}
		else{
			$('#response').text("Sorry, you ran out of guesses, the secretNumber was " + secretNumber + ".");
		};
	};

	function restart(){
		num_guess = 3;
		$('#response').text("Okay here we go again! You have " + num_guess + " gueses!");
		$('user-input').val("");
		secretNumber = parseInt(Math.random() * 100, 10) + 1;
		alert(secretNumber)
	};

	alert(secretNumber)

	$('#response').text('You have ' + num_guess + ' guesses');
	$('#restart-button').on('click', restart);
	$('#submit-button').on('click', guess);
});